 import { data } from "../utils/data";
 import Card from "./Card";
 import '../scss/Home.scss';

 const Home = () => {
   return (
     <div className="home">
       {data.map((item, i) => (
         <Card key={i} {...item} />
       ))}
     </div>
   );
 };

 export default Home;