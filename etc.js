
const customer =[
    {
    'id':1,
    'image':'https://placeimg.com/64/64/1',
    'name':'june',
    'birthday':'941218',
    'gender':'man',
    'job':'student'
    },
    {
    'id':2,
    'image':'https://placeimg.com/64/64/2',
    'name':'kim',
    'birthday':'911218',
    'gender':'man',
    'job':'student2'
    },
    {
    'id':3,
    'image':'https://placeimg.com/64/64/3',
    'name':'cae',
    'birthday':'231218',
    'gender':'man',
    'job':'student3'
    },
  ]


let a = customer.map(c => {
    return (
        c.image
    );
})

console.log(a)
