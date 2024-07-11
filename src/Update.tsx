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
            const hasValue = fieldToRemove.includes(buildPath);

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
            mutations.updateOrder,
            'customer',
            'address',
            'items',
            'packages',
            'historicalOrder',
            'appliedAutomations.__typename',
            'billing.__typename',
            'marketingData.__typename',
            'payment',
            'shipping',
            'invoices.__typename',
            'notes.__typename',
            'totals.__typename',
            'totals.alternativeTotals',
            'orderAssignment.__typename',

            '__typename', 'createdAt', 'updatedAt', '_version', '_deleted', '_lastChangedAt'
        );
        console.log("filterQuery:", '\n', newQuery);
    };
    return <button onClick={handlerUpdate}>Update</button>;
}
