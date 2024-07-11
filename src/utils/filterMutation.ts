import { visit, print, parse } from 'graphql';

// Función para parsear y modificar la query
export default function filterMutation(options: string | any, ...filteredFields: string[]) {
    let query = options;
    let include = false;

    if (typeof options === 'object') {
        query = options.query;
        include = options?.include ?? false;
    }

    const parsedQuery = parse(query)


    const listLogs: any[] = [];

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
                let objConcat: any = histories;
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
    });


    console.table(listLogs);


    return print(modifiedQuery);
}
