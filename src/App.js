import React, { useId, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import BasketPage from "./pages/BasketPage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ShopPage from "./pages/ShopPage";
import Avatar from './static/kol9h.jpg'

function App() {
  const [Products, setProducts] = useState([{
    name: 'Роллы оригинальные',
    price: 190,
    type: "роллы",
    description: "Роллы оригинальные от 190р",
    image: 'https://sun9-75.userapi.com/KIBqcpaLCb1ZerOgvDAEA__VydQbKXT_5NN5gg/x7V1dd0ROfo.jpg',
    id: `1`
  },
  {
    name: 'Роллы запечённые',
    price: 240,
    type: "роллы",
    description: "Роллы запечённые от 240р",
    image: 'https://sun9-27.userapi.com/DSr45Fs74SxGYrjGpor_vRA8nPChoco-bUUzIw/5-TrhQt_Htw.jpg',
    id: `2`
  },
  {
    name: 'Роллы классические и темпурные',
    price: 100,
    type: "роллы",
    description: "Роллы классические и темпурные от 100р",
    image: 'https://sun7-16.userapi.com/WTAPx_IB-72rNf2B4gM3WdAyZjST-w-uAg6ZuQ/1bAu1alujO8.jpg',
    id: `3`
  },
  {
    name: 'Ролл "Цезарь" темпура',
    price: 290,
    type: "роллы",
    description: 'курица х/к, помидор, сыр творожный, соус "Цезарь" , сыр пармезан',
    image: 'https://sun9-37.userapi.com/n9KrMmS06ubkUeyJZK9W4CGcxb6-7qV_OR3fgg/WP6otTf8SFo.jpg',
    id: `4`
  },
  {
    name: 'Запеченный ролл "Ниагара"',
    price: 320,
    type: "роллы",
    description: 'Лосось, "Снежный краб", огурец, сливочный сыр, соус спайси, соус унаги, рис, нори. масса-300гр',
    image: 'https://sun9-25.userapi.com/c857728/v857728153/1164dd/hgnKnoB6Hcg.jpg',
    id: `5`
  },
  {
    name: 'Пицца "4 сыра"',
    price: 490,
    type: "пицца",
    description: 'Горгонзола, чеддер, моцарелла, пармезан, сливочный соус  32 см - 490р/40 см - 810р',
    image: 'https://sun9-74.userapi.com/impg/v9GIUkZ6wX0tY2XQyFl2yjZa-xPcZLpDMNUvLw/TEQ5MGw3RTM.jpg?size=807x538&quality=96&sign=f6e3c47ffe6d3dc5f1503e2f5bdd0334&c_uniq_tag=fbi_cWVDpG1BdLcWWtsTNkd6JZVcvJMikxtWXfvrhsY&type=none',
    id: `6`
  },
  {
    name: 'Пицца "Мексика"',
    price: 520,
    type: "пицца",
    description: 'Колбаски чоризо, томат, халапеньо, шампиньоны , томатный соус, моцарелла  32 см - 520р/40 см - 850р',
    image: 'https://sun9-80.userapi.com/FdHRhXBhgZqzDLqPxzb9KS9AGEKQc02Yn2X5UQ/YKLAfvMxG0U.jpg',
    id: `7`
  },
  {
    name: 'Пицца "Острая карбонара"',
    price: 500,
    type: "пицца",
    description: 'Бекон, колбаски чоризо, пармезан, сливочный соус, моцарелла.  32 см - 500р/40 см - 820р',
    image: 'https://sun9-74.userapi.com/Oht9mz34ctgwMgQxmllQl_r6KXvxs5VxiUmDBg/pGLl0LTrRu0.jpg',
    id: `8`
  },
  {
    name: 'Пицца «Тропикана»',
    price: 480,
    type: "пицца",
    description: 'Куриное филе, ананас, моцарелла, томатный соус с базиликом  32 см - 480р/40 см - 790р',
    image: 'https://sun9-53.userapi.com/lnj2HDmXQIg5gTRjj5aljC9yecWIhewEqNgAJQ/9SVZqZqCigg.jpg',
    id: `9`
  },
  {
    name: 'Пицца "Терияки"',
    price: 490,
    type: "пицца",
    description: 'Бекон, шампиньоны, белый соус, сыр моцарелла, соус "терияки", чёрный кунжут  32 см - 490р/40 см - 810р',
    image: 'https://sun9-67.userapi.com/impg/k_BvAg9idR1OZqMBTIUUCY7S2uyhIOyXh69CCg/6pQRVdDwOec.jpg?size=690x528&quality=96&sign=b3f34bde89131984ae652be21a33e9ef&c_uniq_tag=G3ZmmG-Db9kzIFcanyT2mZ30xv0g-IK3-fhepOy8MnE&type=none',
    id: `10`
  },
  {
    name: 'Сет "Закусочный"',
    price: 790,
    type: "сеты",
    description: 'Сет из закусок.',
    image: 'https://sun9-71.userapi.com/gXVSEQhwXkG34hryfyTNGzan6IN8Gy6aeL4A0Q/yHXS1FZfrG8.jpg',
    id: `11`
  },
  {
    name: 'Сет "Новогодний"',
    price: 2290,
    type: "сеты",
    description: 'Сет "Новогодний"',
    image: 'https://sun9-17.userapi.com/FtGnB043UcgEk1pvK8JYfW71hLSJkx0e-7wZ6Q/IYhuzpHVqu0.jpg',
    id: `12`
  },
  {
    name: 'Комбо "Детское"',
    price: 399,
    type: "сеты",
    description: 'Состав: -ролл классический с крабом; -ролл классический с огурцом; -картофель фри; -наггетсы 6 шт; -соус сырный 1 шт.',
    image: 'https://sun9-80.userapi.com/24JksNonjf6DoIQ6JqvRy39X_idhs0H1WB4cHw/iUbBOd-CDps.jpg',
    id: `13`
  },
  {
    name: 'Сет "Лайт"',
    price: 1250,
    type: "сеты",
    description: '6 порций',
    image: 'https://sun9-72.userapi.com/qQOSRO32DNSuBB0cThClD4Qk4nroi142qDK5Lw/tv5fiCjROX0.jpg',
    id: `14`
  },
  {
    name: 'сет "Декабрь"',
    price: 1490,
    type: "сеты",
    description: 'лень писать',
    image: 'https://sun9-50.userapi.com/Z5s6-T7IZp9M7f906vXCUJI0o-DObu-EWqos6w/qwHeUnO62LY.jpg',
    id: `15`
  },
  {
    name: 'Бургер "Цыпа"',
    price: 250,
    type: "бургеры",
    description: 'Булочка, куриная котлета в панировке, соус, салат айсберг, сыр чеддер, помидор',
    image: 'https://sun9-82.userapi.com/x_otToeF59orMcnXmztZbS2xnKPPjlDUpWdwDQ/HkeVxU_Hefg.jpg',
    id: `16`
  },
  {
    name: 'Комбо MAXI',
    price: 390,
    type: "бургеры",
    description: '-Бургер ЦЫПА - наггетсы 4 шт - картофель фри - соус сырный',
    image: 'https://sun9-5.userapi.com/k54WK9IxvBPSZHm_ImPzkz1HJwlu1yyEp28yYw/nr-Q7rxN8YU.jpg',
    id: `17`
  },
  {
    name: 'Креветки темпура',
    price: 260,
    type: "закуски",
    description: 'Креветки в темпуре 6 шт',
    image: 'https://sun9-76.userapi.com/YtW8f8w1RwB1uuNqcS3KvQdN2u_o4icSZaXGvg/ai9aSDFEtv8.jpg',
    id: `18`
  },
  {
    name: 'Сет "Закусочный"',
    price: 790,
    type: "закуски",
    description: 'Сет из закусок.',
    image: 'https://sun9-71.userapi.com/gXVSEQhwXkG34hryfyTNGzan6IN8Gy6aeL4A0Q/yHXS1FZfrG8.jpg',
    id: `19`
  },
  {
    name: 'Картофель фри',
    price: 120,
    type: "закуски",
    description: 'картофель фри, наггетсы, крылья, картофель по-деревенски',
    image: 'https://sun9-83.userapi.com/bCvdBxi2eP_shFb8F6yfmXykzfvGOTb6PryM5g/yewRN75-QlE.jpg',
    id: `20`
  },
  {
    name: 'Чизкейк "Кокосовый"',
    price: 160,
    type: "десерты",
    description: 'Кокосовая стружка в сочетании с классическим сливочным вкусом десерта создают летнее настроение независимо от времени года.',
    image: 'https://sun9-31.userapi.com/impg/riaY0p_j3m3MZM8vmHEI36uewJq8g0HXWO9GFg/E9BqXJEnpN8.jpg?size=807x539&quality=96&sign=1d94d7118e8f49a12035af96e5a2be29&c_uniq_tag=luQS77RwvcOOJoFDI7WRkeQheI07_LxgKCqTW-LimzM&type=none',
    id: `21`
  },
  {
    name: 'Чизкейк "Клубничный"',
    price: 160,
    type: "десерты",
    description: 'Чизкейк «Клубничный» – это тот самый случай, когда лёгкая кислинка придает нежной творожно-сливочной массе еще больше шарма.',
    image: 'https://sun9-33.userapi.com/i2ev4DY5mQO1om9JrpUn48qaK-NtRH5J6etvzQ/hYRQKNPcQgo.jpg',
    id: `22`
  },
  {
    name: 'Чизкейк "Сникерс"',
    price: 160,
    type: "десерты",
    description: 'Чизкейк с карамелью и арахисом',
    image: 'https://sun9-17.userapi.com/3n_ydN8afWmtbxsGTgHh6icuwFVgmOrrYCxvvw/PhkaElnT5vM.jpg',
    id: `23`
  },
  {
    name: 'Чизкейк "Классический"',
    price: 160,
    type: "десерты",
    description: 'Чизкейк ванильный',
    image: 'https://sun9-86.userapi.com/VgCPPi-8EIhmU_grgCdiLqcm10db8CdKxpT5Ag/ZjhsdENg1j0.jpg',
    id: `24`
  },
  {
    name: 'Чизкейк "Шоколадный"',
    price: 160,
    type: "десерты",
    description: 'Чизкейк шоколадный.',
    image: 'https://sun9-16.userapi.com/impg/LGJuRkvzZO2uIOaoOhL2JXFIb6x22GV--PgMVA/re8j1ZFoXik.jpg?size=700x525&quality=96&sign=105f804eb7a3a038c632652dffeb2c1f&c_uniq_tag=Nho0Q4lpXdXZcItuJD-CkRwwZLjXz-Q27WZUEkUtxLE&type=none',
    id: `25`
  },
  {
    name: 'Monster Doctor (500мл)',
    price: 160,
    type: "напитки",
    description: 'Напиток энергетический Monster Doctor (500мл) газированный',
    image: 'https://sun9-20.userapi.com/_Cjfew2Cvzffxem6nKe3vQxQ4UnZcwX_mUsfWg/WhrhEaizMk0.jpg',
    id: `26`
  },
])
  const [Basket, setBasket] = useState([])
  const [userName, setUserName] = useState('User')
  const [userPhoto, setUserPhoto] = useState(Avatar)
  return (
      <div>
        <NavBar userPhoto={userPhoto}/>
          <Routes> 
            <Route path="/shop" element={<ShopPage Products = {Products} setProducts={setProducts} setBasket={setBasket} Basket = {Basket}/>}/>
            <Route path="/profile" element={<ProfilePage userPhoto={userPhoto} userName={userName} setUserName = {setUserName} setUserPhoto = {setUserPhoto}/>}/>
            <Route path="/basket" element={<BasketPage userPhoto={userPhoto} userName={userName} Basket = {Basket} setBasket = {setBasket}/>}/>
            <Route path="/shop/:id" element={<ProductPage Products = {Products} Basket={Basket} setBasket = {setBasket}/>}/>
            <Route path="*" element={<Navigate replace to="/shop" />}/>
          </Routes>
      </div>
      
  );
}

export default App;
