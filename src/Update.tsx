
import * as mutations from './amplify/graphql/mutations';
import { visit, print, parse } from 'graphql';
import { ParseGql } from './types/ParseGql';

const queryUpdate = mutations.updateOrderCustom;

// Función para parsear y modificar la query
function parseQuery(options: string | any, ...filteredFields: string[]) {
    let query = options;
    let include = false;

    if (typeof options === 'object') {
        query = options.query;
        include = options?.include ?? false;
    }

    const parsedQuery = parse(query)
    console.log('Query filter: ', parsedQuery)
    console.log('Query string: ', query)
    //      gql`
    //     ${query}
    //   `;

    const listLogs = [];

    const histories = parsedQuery;

    console.log('histories:', histories);

    const modifiedQuery = visit(parsedQuery, {
        Field(currentNode, index, y, historyPaths) {
            const isTitleQuery =
                JSON.stringify(historyPaths) ===
                JSON.stringify(['definitions', 0, 'selectionSet', 'selections', 0]);

            if (isTitleQuery) {
                return undefined;
            }

            const buildPath = (() => {
                /**
                 * {definition, kind,loc}
                 */
                // ['definitions', 0, 'selectionSet', 'selections', 0]
                let objConcat = histories;
                let pathConcat = '';

                historyPaths.forEach((keyPath) => {
                    objConcat = objConcat[keyPath];

                    if (objConcat?.name?.kind === 'Name' && objConcat?.name?.value) {
                        let keyField = objConcat?.name?.value;
                        if (pathConcat) {
                            keyField = `.${keyField}`;
                        }

                        pathConcat += keyField;
                    }
                });

                const [titleCustom, titleQM, ...propertiesResponse] =
                    pathConcat?.split('.');

                return propertiesResponse?.join('.');
            })();


            const field = currentNode.name.value;

            if (include) {

                const hasMatchPath = filteredFields.some((pathFilter) => {
                    if (buildPath === pathFilter) {
                        return true;
                    }

                    return pathFilter.startsWith(buildPath)
                });

                listLogs.push({
                    'Current field': field,
                    'Build path': buildPath,
                    toMatch: hasMatchPath ? '🟢' : '🔴',
                });

                if (hasMatchPath) {
                    return undefined
                }



                return null
            }

            /**
             * Flujo para definir los campos excluyendos
             */
            const hasValue = filteredFields.includes(buildPath);

            listLogs.push({
                'Current field': field,
                'Dynamic path': buildPath,
                toMatch: hasValue ? '🔴' : '🟢',
            });

            if (hasValue) {
                /** Ignora el campo */
                return null;
            }
        },
    }) as ParseGql;

    console.log('Filter input:', filteredFields);
    console.table(listLogs);
    console.log('modifiedQuery:', modifiedQuery);

    return print(modifiedQuery);
}

export default function ButtonUdate(props: any) {
    const handlerUpdate = () => {
        console.log('queryUpdate:', queryUpdate);
        const newQuery = parseQuery(
            {
                query: mutations.updateOrder,
            },
            'customer',
            'address',
            'items',
            'packages',
            'historicalOrder',
            'appliedAutomations',
        );
        console.log('filterQuery:', '\n', newQuery);
    };
    return <button onClick={handlerUpdate}>Update</button>;
}
