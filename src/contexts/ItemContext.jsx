import { createContext, useContext, useEffect, useReducer } from "react";

const Base_Url = "https://fakestoreapi.com";

const itemContext = createContext();
if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}
if (!localStorage.getItem("favorite")) {
  localStorage.setItem("favorite", JSON.stringify([]));
}

const initialState = {
  products: [],
  isLoading: false,
  currentProduct: {},
  error: "",
  categories: [],
  categoryproducts: [], // Fixed typo
  wishedProducts: JSON.parse(localStorage.getItem("favorite")),
  cartedProducts: JSON.parse(localStorage.getItem("cart")),
  totalPrice: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "products/loaded":
      return { ...state, isLoading: false, products: action.payload };

    case "categories/loaded":
      return { ...state, isLoading: false, categories: action.payload };

    case "categoryproducts/loaded":
      return { ...state, isLoading: false, categoryproducts: action.payload };

    case "product/loaded":
      return { ...state, isLoading: false, currentProduct: action.payload };

    case "add/to/cart":
      const itemExists = state.cartedProducts.find(
        (item) => item.id === action.payload.id
      );
      if (itemExists) {
        return {
          ...state,
          cartedProducts: state.cartedProducts.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 } // Increment quantity
              : item
          ),
        };
      }
      return {
        ...state,
        cartedProducts: [
          ...state.cartedProducts,
          // If it doesn’t exist, the product is added to the array with a quantity of 1.
          { ...action.payload, quantity: 1 }, // Add new product with quantity 1
        ],
      };

    // const updatedPrice = state.cartedProducts.reduce(
    //   (acc, item) => acc + item.price * item.quantity,
    //   0
    // );

    // return { ...state, cartedProducts: [...state], totalPrice: updatedPrice };

    // const existingItem = state.find((item) => item.id === action.payload.id);
    // if (existingItem) {
    //   return state.map((item) =>
    //     item.id === action.payload.id
    //       ? { ...item, quantity: item.quantity + 1 }
    //       : item
    //   );
    // }
    // return [...state, { ...action.payload, quantity: 1 }];

    case "decrease/item":
      const itemInCart = state.cartedProducts.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        // Check if the item's quantity is greater than 1
        if (itemInCart.quantity > 1) {
          return {
            ...state,
            cartedProducts: state.cartedProducts.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity - 1 } // Decrement quantity
                : item
            ),
          };
        }
        // If quantity is 1, remove the item from the cart
        return {
          ...state,
          cartedProducts: state.cartedProducts.filter(
            (item) => item.id !== action.payload.id
          ),
        };
        // const updatedPrice = state.cartedProducts.reduce(
        //   (acc, item) => acc + item.price * item.quantity,
        //   0
        // );

        // return {
        //   ...state,
        //   cartedProducts: [...state],
        //   totalPrice: updatedPrice,
        // };
      }
      return state; // If the item doesn't exist in the cart, return the state unchanged

    case "remove/from/cart":
      return {
        ...state,
        cartedProducts: state.cartedProducts.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "add/to/wishes":
      const exist = state.wishedProducts.some(
        (item) => item.id === action.payload
      );
      if (exist) return state;

      return {
        ...state,
        wishedProducts: [...state.wishedProducts, action.payload],
      };
    // if (state.wishedProducts.find((item) => item === action.payload.id)) {
    //   return state;
    // }
    // return {
    //   ...state,
    //   wishedProducts: [...state.wishedProducts, action.payload],
    // };

    case "remove/from/wishes":
      return {
        ...state,
        wishedProducts: state.wishedProducts.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "rejected":
      return { ...state, isLoading: false, error: action.payload };

    default:
      throw new Error("UNKNOWN ACTION");
  }
}
function ItemProvider({ children }) {
  const [
    {
      products,
      isLoading,
      currentProduct,
      categories,
      categoryproducts, // Fixed typo
      wishedProducts,
      cartedProducts,
      totalPrice,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(
    function () {
      localStorage.setItem("cart", JSON.stringify(cartedProducts));
      localStorage.setItem("favorite", JSON.stringify(wishedProducts));
    },
    [cartedProducts, wishedProducts]
  );

  useEffect(function () {
    async function fetchProducts() {
      dispatch({ type: "loading" });
      try {
        const req = await fetch(`${Base_Url}/products?limit=15`);
        const data = await req.json();
        dispatch({ type: "products/loaded", payload: data });
        console.log(data);
      } catch (error) {
        console.error(error); // Log the actual error
        dispatch({
          type: "rejected",
          payload: "There was an error fetching data",
        });
      }
    }
    fetchProducts();
  }, []);

  useEffect(function () {
    async function getCategories() {
      dispatch({ type: "loading" });
      try {
        const req = await fetch(`${Base_Url}/products/categories`);
        const data = await req.json();
        dispatch({ type: "categories/loaded", payload: data });
        console.log(data);
      } catch (error) {
        console.error(error); // Log the actual error
        dispatch({
          type: "rejected",
          payload: "There was an error fetching categories",
        });
      }
    }
    getCategories();
  }, []);

  async function getCategoryProduct(category) {
    dispatch({ type: "loading" });
    try {
      const req = await fetch(`${Base_Url}/products/category/${category}`);
      const data = await req.json();
      dispatch({ type: "categoryproducts/loaded", payload: data }); // Fixed typo
      console.log(data);
    } catch (error) {
      console.error(error); // Log the actual error
      dispatch({
        type: "rejected",
        payload: "There was an error fetching category products",
      });
    }
  }

  async function getProduct(id) {
    dispatch({ type: "loading" });
    try {
      const req = await fetch(`${Base_Url}/products/${id}`);
      const data = await req.json();
      dispatch({ type: "product/loaded", payload: data });
      console.log(data);
    } catch (error) {
      console.error(error); // Log the actual error
      dispatch({
        type: "rejected",
        payload: "There was an error fetching product",
      });
    }
  }

  function addToCart(product) {
    dispatch({ type: "add/to/cart", payload: product });
    console.log(product);
  }

  function removeByDecrement(id) {
    dispatch({ type: "decrease/item", payload: id });
    console.log("item Decreased");
  }
  function removeFromCart(id) {
    dispatch({ type: "remove/from/cart", payload: id });
    // console.log(product);
  }

  function addToWishes(id) {
    dispatch({ type: "add/to/wishes", payload: id });
    console.log(id);
    console.log(`this my favorite item`);
  }

  function removeFromWishes(id) {
    dispatch({ type: "remove/from/wishes", payload: id });
  }

  return (
    <itemContext.Provider
      value={{
        products,
        isLoading,
        currentProduct,
        categories,
        categoryproducts, // Fixed typo
        wishedProducts,
        cartedProducts,
        totalPrice,
        getCategoryProduct,
        getProduct,
        addToCart,
        removeFromCart,
        removeByDecrement,
        addToWishes,
        removeFromWishes,
      }}>
      {children}
    </itemContext.Provider>
  );
}

const useItem = () => {
  const context = useContext(itemContext);
  if (context === undefined)
    // Fixed: Check `context` instead of `itemContext`
    throw new Error("itemContext is used outside the ItemProvider");
  return context;
};

export { ItemProvider, useItem };
