import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, writeBatch, documentId } from 'firebase/firestore';
 

const firebaseConfig = {
  apiKey: "AIzaSyC--CCUE5fXr4hUMVw9Wiw_NDDtK1pcyPk",
  authDomain: "viajando-con-guby.firebaseapp.com",
  projectId: "viajando-con-guby",
  storageBucket: "viajando-con-guby.appspot.com",
  messagingSenderId: "68742123009",
  appId: "1:68742123009:web:f21449da6b46242613fa00"
};


const FirebaseApp = initializeApp(firebaseConfig);
const DB = getFirestore(FirebaseApp);

export function testDB() {
    console.log(FirebaseApp);
}

export async function getSingleItemFromAPI(id) {
  // Referenciamos el documento que queremos con su ID y su Colección
  const docRef = doc(DB, "productos", id);

  //Obtenemos el snapshot con getDoc(refencia)
  const docSnap = await getDoc(docRef);


  //Chequeamos si el snapshot existe con snapshot.exists()
  if (docSnap.exists()) {

    //Si existe retornamos los datos
    return {
      ...docSnap.data(),
      id: docSnap.id,

    };
  } else {
    console.error('No existe');
  }
}

export async function getItemsFromAPIByCategory(categoryId) {
const productosRef = collection(DB, 'productos');
const q = query(productosRef, where('category', '==' , categoryId ));

const productosSnapshot = await getDocs(q);

const productos = productosSnapshot.docs.map(docu => {
  return { 
    ...docu.data(),
    id : docu.id
  }
});

return productos;

}

export async function getItemsFromAPI() {
  try {
    //1 Conectarme a la colección de productos con collection
    //2 Traer todos los documentos existentes
    const collectionProductos = collection(DB, "productos");
    let snapshot =  await getDocs(collectionProductos);
    
    const productos = snapshot.docs.map(docu => {
      return { 
        ...docu.data(),
        id : docu.id
      }
    });

    return productos;
  } catch (error) {
    console.error(error);
  }
};

export async function createBuyOrderFirestore(buyOrderData) {
  const collectionRef = collection(DB, 'buyorders');
  const docRef = await  addDoc(collectionRef, buyOrderData);
  return docRef.id
};

async function exportItemsToFirestore() {
   const bikes = [
    {
      id: 1,
      title: "BMW 650 GS",
      price: 10.000,
      stock: 10,
      category: "bmw",
      thumbnail: "https://rodatiautos.ar/images/listings/2022-06/03b56505-1654601088-465.jpg",
      description: "ABS, calefactor en los mangos, luces warning y el motor ahora viene con un color de acabado negro. Potencia robustez y agilidad una máquina para un uso aventurero. ",
    },
    {
      id: 2,
      title: "BMW 800 GS",
      description:
        "La BMW F 800 GS es una buena mezcla de interesantes características para conducir por carretera o por tierra con las mejores comodidades.",
      price: 18.000,
      stock: 10,
      category: "bmw",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT80hdP8Wu27h018BHgzVa-yEZDJVAFOxUFKbua8w1tUNqmqGJZUnal58RvdW7gSKAAzPs&usqp=CAU",
    },
    {
      id: 4,
      title: "BMW 1200 GS",
      description: "BMW R 1200 GS, su carácter, su potente y contrastado motor y su diseño, atrae a numerosos motoristas que buscan una moto versátil y apta para distintos usos. ",
      price: 29.000,
      stock: 10,
      category: "bmw",
      thumbnail: "https://www.mundomotero.com/wp-content/uploads/2017/07/BMW-R-1200-GS-Adventure-2018-1024x768.jpg",
    },
    {
      id: 5,
      title: "Honda CB 500X",
      description:
        "Una moto ligera y de estética deportiva, dotada de un motor de dos cilindros con una potencia de 47 CV, se ha actualizado en 2022 con numerosas mejoras ",
      price: 17.000,
      stock: 10,
      category: "honda",
      thumbnail: "https://motos.espirituracer.com/archivos/2019/04/honda-cb-500-2019-x-3.jpg",
    },
    {
      id: 6,
      title: "Honda NC 750X",
      description:
        "Moto urbana para movernos por ciudad en el día a día, realizar una salida de fin de semana o afrontar un viaje con acompañante para disfrutar de nuestras vacaciones. ",
      price: 17.000,
      stock: 10,
      category: "honda",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-NEJG7O5r9mlASwQjuylfPGdFRkSZ8lNSg&usqp=CAU",
    },
    {
      id: 7,
      title: "Honda 1000 L África Twin",
      description:
        "Mayor depósito de combustible y altura del piso, carenado, suspensión ajustable, motor de 998cc, y tecnología de punta, qué más se necesita?",
      price: 1499,
      stock: 10,
      category: "honda",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zjaML6IZ_8eXmHFXmm5bdEKM4DK4jLtdLzZz3qwEvaWbiiL54Ijdn4Ypmrw29GBJe8s&usqp=CAU",
    },
    {
      id: 8,
      title: "Kawasaki Versys X300",
      description:
        "Para aquellos que buscan una moto cómoda y ágil para el día a día, capaz de enfrentar travesías de largo alcance sin importar las condiciones del camino.",
      price: 13.000,
      stock: 10,
      category: "kawasaki",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qoA51SmT47Wfksloawy9l88P6nKm7CUFLZrliGbIcWs776qd4a1dprAwhIgJYumx_ao&usqp=CAU",
    },
    {
      id: 9,
      title: "Kawasaki Klr 650",
      description:
        "Simplicidad técnica, robustez mecánica y unas prestaciones con las que podrás llegar a cualquier rincón del planeta.",
      price: 4500,
      stock: 10,
      category: "kawasaki",
      thumbnail: "https://cdn.motor1.com/images/mgl/o0Ke7/s1/video-asi-se-ensambla-una-kawasaki-klr-650-2021.jpg",
    },
    {
      id: 10,
      title: "HONDA CRF 300 L",
      description:
        "(Favorita del usuario), chasis ligero, una carrocería más estilizada y mayor potencia y par del motor.",
      price: 10000,
      stock: 10,
      category: "honda",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkyMQeejGKdXuQg73FXhekbj65HSSrEkKx2v-_nN3tOVWJEKQNm1dZQt6xg12XygegVDM&usqp=CAU",
    }
  ];
  const collectionRef = collection (DB, 'productos');

  for (let item of bikes) {
      const docRef = await addDoc(collectionRef, item);
      console.log('Document created with id', docRef.id)
  }

}

export async function createBuyOrderFirestoreWithStock(buyOrderData) {
  const collectionProductosRef= collection(DB, 'productos');
  const collectionOrdersRef = collection (DB, 'buyorders');
  const batch = writeBatch(DB);
  
  let arraysIds = buyOrderData.items.map((item) => {
    
    return item.id;
  });
  const q = query(collectionProductosRef, where (documentId(), 'in',  arraysIds ))
  
  let productos = await getDocs(q);

  productos.forEach((doc) => {
    let stockActual = doc.data().stock;
    let itemInCart = buyOrderData.items.find((item) => item.id === doc.id);
    let stockActualizado = stockActual - itemInCart.count;
    batch.update(doc.ref, {
      stock:stockActualizado
    });
  });

  const docOrderRef = doc(collectionOrdersRef);
  batch.set(docOrderRef, buyOrderData);


  batch.commit();

  return docOrderRef.id;
};



