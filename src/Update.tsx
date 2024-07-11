//@ts-nocheck
import * as mutations from './amplify/graphql/mutations';
import gql from 'graphql-tag';
import { visit, print } from 'graphql';
import { ParseGql } from './types/ParseGql';
// import { removeField } from 'graphql-ast-tools';

const queryUpdate = mutations.updateOrderCustom;

// Función para parsear y modificar la query
function parseQuery(options: string | any, ...filteredFields: string[]) {
  let query = options;
  let include = false;

  if (typeof options === 'object') {
    query = options.query;
    include = options?.include ?? false;
  }

  const parsedQuery = gql`
    ${query}
  `;

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
        const historyInvocation = histories[0];
        // ['definitions', 0, 'selectionSet', 'selections', 0]
        let objConcat = historyInvocation;
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

      console.log(
        `[${index}] isTitleMutation(${isTitleQuery ? '🟢' : '🔴'}) / Path: `,
        buildPath
      );

      const field = currentNode.name.value;

      if (include) {
        const hasValue = filteredFields.includes(buildPath);

        listLogs.push({
          'Current field': field,
          'Dynamic path': buildPath,
          toMatch: hasValue ? '🟢' : '🔴',
        });

        /**
         * Realizar lógica para incluir los campos que hace match con los campos
         * de los filtros
         *
         * La validación tiene que validar que no elimine los tipos padres en
         * este caso 'packages' y 'items' ya que se necesita para que se pueda
         * realizar la mutación de los tipos hijos
         *
         * eg.
         * Input: filteredFields = ['packages.items.name', 'orderId', 'name ]
         *
         * undefined -> Es valido
         * null -> Es invalido
         *
         * - [0] buildPath = 'packages' -> Retorna undefined(es valido) porque es un tipo padre
         * - [1] buildPath = 'packages.items' -> Retorna undefined(es valido) porque es un tipo padre
         * - [2] buildPath = 'packages.products.id' -> Retorna null un match(no es invalido) porque no hace match con el filtro
         * - [3] buildPath = 'orderId' -> Retorna undefined(es valido)
         * - [4] buildPath = 'packages.items.name' -> Retorna undefined(es valido) porque hace match con el filtro
         * - [5] buildPath = 'packages.items.id' -> Retorna null un match(no es invalido) porque no hace match con el filtro
         * - [6] buildPath = 'name' -> Retorna undefined(es valido) porque hace match con el filtro
         * - [7] buildPath = 'status' -> Retorna null un match(no es invalido) porque no hace match con el filtro
         */

        const hasMatchPath = filteredFields.some((pathFilter) => {
          /**
           * pathFilterSplit = filteredFields[0] = ['packages', 'items', 'name']
           */
          const pathFilterSplit = pathFilter.split('.');

          return pathFilterSplit.every((pathFilterItem, index) => {
            /**
             * buildPathSplit = buildPath = ['packages']
             */
            const buildPathSplit = buildPath.split('.');

            return pathFilterItem === buildPathSplit[index];
          });
        });

        if (hasMatchPath) {
          return undefined;
        }

        return null;
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
        include: true,
      },
      'orderId',
      'packages.items.id',
      'packages.items.name'
    );
    console.log('filterQuery:', '\n', newQuery);
  };
  return <button onClick={handlerUpdate}>Update</button>;
}
