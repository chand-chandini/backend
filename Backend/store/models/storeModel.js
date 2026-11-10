const stores = [
    { id: 1,store_name: "Main street store", store_address : "123 Main st",d_in:0},
    {id: 2,store_name: "Downtown Branch", store_address: "456 City Center",d_in:0}
];

const addStore = async(Data)=>{
    const newStore={
        id:stores.length+1,
        store_name:data.store_name,
        store_address:data.store_address,
        d_in: 0
    };
    stores.push(newStore);
    return { insertId: newStore.id };
};