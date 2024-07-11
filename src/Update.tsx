
import * as mutations from './amplify/graphql/mutations';
import filterMutation from './utils/filterMutation';




export default function ButtonUdate(props: any) {
    const handlerUpdate = () => {

        const newQuery = filterMutation(
            {
                query: mutations.updateOrder,
            },
            'address',
            'packages',
            'customer',
            'appliedAutomations',
            'items',
            'historicalOrder'
        );

        console.log('filterQuery:', '\n', newQuery);
    };
    return <button onClick={handlerUpdate}>Update</button>;
}
