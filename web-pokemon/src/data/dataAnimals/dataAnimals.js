import { faker } from '@faker-js/faker';

function postAnimals (){
    const quantity = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    
    let arrayAnimals = [];
    arrayAnimals = quantity.map(animal => {
         return {
            id:animal,
            species: faker.animal.type(),
            image: faker.image.image(),
            location:faker.address.city(),
            excerpt: faker.lorem.sentence(10),
            description: faker.lorem.sentence(100)
        }
    })

   firstGestionLocalStorage(arrayAnimals)
    
}

function firstGestionLocalStorage(arrayAnimals){
    localStorage.setItem('animals', JSON.stringify(arrayAnimals))
}

export default postAnimals
