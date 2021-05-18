
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const ShopCart = () => import('views/shopcart/ShopCart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')

const All = {
  Home,
  Category,
  ShopCart,
  Profile,
  Detail
} 

export default All;