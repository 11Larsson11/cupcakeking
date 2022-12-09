import React from "react";
//import CategoryItem from "./components/category-item/category-item.component";
import "./categories.styles.scss";
import Directory from "./components/directory/directory.component";

const App = () => {

  

  const categories = [
    {
      id: 1,
      title: "Chocolate",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/04/12/17/19/muffins-2225091_960_720.jpg",
    },
    {
      id: 2,
      title: "Frosted",
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/03/24/16/08/cake-3257019_960_720.jpg",
    },
    {
      id: 3,
      title: "Berries",
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/05/23/23/17/dessert-352475_960_720.jpg",
    },
    {
      id: 4,
      title: "Filled",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/01/11/07/18/cupcakes-1133146_960_720.jpg",
    },
    {
      id: 5,
      title: "Regional",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/05/04/21/23/cupcakes-2285209_960_720.jpg",
    },
  ];



  return (

    < Directory categories={categories}/>

  );
};

export default App;
