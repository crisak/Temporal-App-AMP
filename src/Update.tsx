import * as mutations from './amplify/graphql/mutations'
import gql from 'graphql-tag';
import { visit } from 'graphql';
import { ParseGql } from './types/ParseGql';

const queryUpdate = mutations.updateOrderCustom

// Función para parsear y modificar la query
function parseQuery(query: string, ...fieldToRemove: string[]) {
    const parsedQuery = gql`${query}`;
    console.log('parsedQuery:', parsedQuery)
    const modifiedQuery = visit(parsedQuery, {
        Field(node) {
            // Eliminar el campo no deseado
            console.log('node:', node.name.value)
            const hasValue = fieldToRemove.includes(node.name.value)
            if (hasValue) {
                return null;
            }
        }
    }) as ParseGql
    console.log('modifiedQuery:', modifiedQuery)
    /** Construir nuevamente el string de GraphQL */
    const stringQuery = modifiedQuery.definitions.reduce((acc, definition) => {
        return acc + '\n' + definition.kind + ' ' + definition.name.value;
    }, '');

    return stringQuery;

}

export default function ButtonUdate(props: any) {

    const handlerUpdate = () => {
        console.log('queryUpdate:', queryUpdate)
        const newQuery = parseQuery(queryUpdate, 'groups', 'id', 'billing');
        console.log('filterQuery, ', newQuery)
    }
    return (
        <button onClick={handlerUpdate}>Update</button>
    )
}