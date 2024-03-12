import { ref } from 'vue';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/firebase'


const storeExperience = ref([]);

    const getExperience = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'experiences'));
        storeExperience.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error('Error fetching storeExperience:', error);
        
    }
    };
getExperience();


export default storeExperience



// const storeExp = ref([])
// const token = 'b7feeda5d0aa1389b41543886c1a824d9b40010209ae5ddfbb9d9b2a3fca702b1538f7ffdb650b261028c682b20caebf115d5e54915e91d7a4120ddf18ed02d2f8ac427102b5a5d0fb9e4d7228cc758816ca2a2c71289d05ba09f67cd80f695eb15f94f8d0bfb5da6d8d446c508e44a6ab40cb40665201ce3670b225df137e18'
// const getAllExperiences = async() =>{
//     const request = await fetch('http://localhost:1337/api/exeperiences', {
//         method: 'GET',
//         headers: {
//         'Content-Type': 'application/json',
//         Authorization: token
//         },
//     });
   
//     const datas = await request.json()


//     const getAttributes = datas.data.map(item => item.attributes)
//     console.log(getAttributes)
//     console.log(storeExp.value = datas) 
//     storeExp.value = getAttributes 
// }

// getAllExperiences()

// export default storeExp