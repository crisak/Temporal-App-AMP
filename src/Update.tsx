//@ts-nocheck
import * as mutations from "./amplify/graphql/mutations";
import gql from "graphql-tag";
import { visit, print, parse } from "graphql";
import { ParseGql } from "./types/ParseGql";
// import { removeField } from 'graphql-ast-tools';

const queryUpdate = mutations.updateOrderCustom;

// Función para parsear y modificar la query
function parseQuery(query: string, ...fieldToRemove: string[]) {
    const parsedQuery = gql`
    ${query}
  `;

    const listLogs = []

    console.log("parsedQuery:", parsedQuery);

    const modifiedQuery = visit(parsedQuery, {
        Field(node, x, y, history, c, v) {
            const buildPath = (() => {
                /**
                 * {definition, kind,loc}
                 */
                const historyInvocation = c[0];
                // ['definitions', 0, 'selectionSet', 'selections', 0]
                let objConcat = historyInvocation
                let pathConcat = ''

                history.forEach((keyPath) => {
                    objConcat = objConcat[keyPath]

                    if (objConcat?.name?.kind === 'Name' && objConcat?.name?.value) {
                        let keyField = objConcat?.name?.value
                        if (pathConcat) {
                            keyField = `.${keyField}`
                        }

                        pathConcat += keyField
                    }
                })

                const [titleCustom, titleQM, ...propertiesResponse] = pathConcat?.split('.')

                return propertiesResponse?.join('.')
            })()

            // Eliminar el campo no deseado
            const field = node.name.value;

            // console.log(`[${field}] node: `, node);
            // console.log(`[${field}] x: `, x);
            // console.log(`[${field}] y: `, y);
            // console.log(`[${field}] history: `, history);
            // console.log(`[${field}] c: `, c);
            // console.log(`[${field}] v: `, v);



            const hasValue = fieldToRemove.includes(field);


            listLogs.push({
                "Current field": field,
                'Dynamic path': buildPath,
                toMatch: hasValue ? '🔴' : '🟢'
            })

            if (hasValue) {
                return null;
            }
        },
    }) as ParseGql;
    console.log('Filter input:', fieldToRemove)
    console.table(listLogs)
    console.log("modifiedQuery:", modifiedQuery);

    return print(modifiedQuery);
}


export default function ButtonUdate(props: any) {
    const handlerUpdate = () => {
        console.log("queryUpdate:", queryUpdate);
        const newQuery = parseQuery(
            queryUpdate,
            'billing.__typename',
            'customer.addresses.__typename',
            "_version",
            "_deleted",
            "_lastChangedAt",
            "updatedAt",
            "updatedAt",
            'customer.addresses.__typename',
            'customer.addresses.startedAt',
            'customer.addresses.nextToken',
        );
        console.log("filterQuery, ", newQuery);
    };
    return <button onClick={handlerUpdate}>Update</button>;
}
