export const onChangeRecipe = (e, set)=>{
    const prop = e.target.id;
    const value = e.target.value;
    set( r => (
        {
            ...r,
            [prop]: value
        }
    ))
}