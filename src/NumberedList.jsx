
export const NumberedList = ( { items, resourceName, itemComponent: ItemComponent } ) => {
    return (
        <>

            {
                items.map( ( item, index ) => (
                    <>
                        <h3>List number:{ index + 1 }</h3>
                        <ItemComponent key={ index } { ...{ [ resourceName ]: item } } />
                        <hr />
                    </>

                ) )
            }
        </>
    );
};