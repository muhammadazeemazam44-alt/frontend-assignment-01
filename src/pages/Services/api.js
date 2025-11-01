const petProducts = [
  {
    id: 1,
    title: "Golden Retriever",
    category: "Dog",
    price: 25000,
    image: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZGVuJTIwcmV0cmlldmVyfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
    description: "Friendly and loyal — the perfect family pet.",
  },
  {
    id: 2,
    title: "Persian Cat",
    category: "Cat",
    price: 18000,
    image:"https://media.istockphoto.com/id/140469307/photo/fluffy-white-cat-lying-down-looking-into-camera.jpg?s=612x612&w=0&k=20&c=RsNsdCi24Ro5f60Xwr70wLEK6cx_hj-WfhDyN1R4Pok= ",
    description: "Calm, affectionate, and loves indoor life.",
  },
  {
    id:3,
    title:"Rabbit",
    category:"rabbit",
    price:"16000",
    image:"",
    descrption:"Rabbit is Animal",



  },
  {
    id: 4,
    title: "African Grey Parrot",
    category: "Parrot",
    price: 22000,
    image: "https://www.shutterstock.com/image-photo/selective-focus-african-grey-parrot-600nw-2661509747.jpg ",
    description: "Highly intelligent bird that can mimic human speech.",
  },
  {
    id:3,
    title:" african-cow",
    category:"cow",
    price:"150000",
    image:"",
    description:"Cow is a pet animal. homes ",
  },

];
const petGuides = [
  {
    id: 1,
    title: "Dog Care Basics",
    description: "Learn how to keep your dog healthy, happy, and well-fed.",
    file: "/guides/dog-care.pdf",
  },
  {
    id: 2,
    title: "Cat Grooming Guide",
    description: "Essential grooming and hygiene tips for your cat.",
    file: "/guides/cat-grooming.pdf",
  },
  {
    id: 3,
    title: "Parrot Nutrition Tips",
    description: "Discover the best foods and supplements for parrots.",
    file: "/guides/parrot-nutrition.pdf",
  },
];

// 🛒 Get all products (simulated API call)
export async function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(petProducts), 400); // simulate API delay
  });
}

// 🐕 Get a single product by ID
export async function getProductById(id) {
  return new Promise((resolve, reject) => {
    const product = petProducts.find((p) => p.id === id);
    if (product) {
      setTimeout(() => resolve(product), 300);
    } else {
      reject("Product not found");
    }
  });
}
export async function postBreed(formData) {
  // In a real app, you’d send this formData to your backend:
  // const res = await fetch("https://your-backend-api.com/breed", { method: "POST", body: formData });
  // return await res.json();

  // Mock simulated response:
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        predictions: [
          { breed: "Golden Retriever", confidence: 0.92 },
          { breed: "Labrador Retriever", confidence: 0.07 },
        ],
      });
    }, 800); // simulate processing delay
  });
}
export async function getGuides() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(petGuides), 500);
  });
}
// 🧩 Combine into a single API object for easy imports
const API = {
  getProducts,
  getProductById,
  postBreed,
  getGuides,
};

export default API;