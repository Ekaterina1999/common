import { Route, Switch, Link } from 'react-router-dom';
// function HeaderLinks(props) {
//     const link = props.link;
//     return(
//         <div>
//             {link == 'Главная' && 
//                 <h1>Главная!</h1>
//             }
//             {link == 'FAQ' && 
//                 <h1>FAQ!</h1>
//             }
//         </div>
//     );
// }

// const {
//     BrowserRouter,
//     Switch,
//     Route,
//     Link
//   } = ReactRouterDOM


  // Страницы
  const Index = () => (
      <div>
          <h1>Это главная страница</h1>
      </div>
  )

  const About = () => (
      <div>
          <h1>Это страница о нас</h1>
      </div>
  )

  const Contacts = () => (
      <div>
          <h1>Это наши контакты</h1>
      </div>
  )

  const Faq = () => (
      <div>
          <h1>Страница для часто задаваемых вопросов</h1>
          <ul>
              <li>Как этим вообще пользоваться?</li>
              <li>Почему оно работает?</li>
              <li>Я что-то нажал и оно появилось. Помогите!</li>
              <li>Котлетка.</li>
              <li>С пюрешкой?</li>
          </ul>
          <p>Ответов на все эти вопросы у нас нет. Звиняйте.</p>
          <p>P.S. С пюрешкой.</p>
          <h1>P.S.S. It's alive! ALIVE!</h1>
      </div>
  )
  // Конец страниц

// The MainUrls component renders one of the four provided
// Routes (provided that one matches). All the /about
// and /contacts, etc routes will match any pathname that starts
// with /about or /contcts, etc. The / route will only match
// when the pathname is exactly the string "/"
export const MainUrls = () => (
    <main>
        <Switch>
            <Route exact path='/' component = {Index}/>
            <Route exact path='/about' component = {About}/>
            <Route exact path='/contacts' component = {Contacts}/>
            <Route exact path='/faq' component = {Faq}/>
        </Switch>
    </main>
)

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <header>
      <nav>
        <h1>Типа меню навигации, ага</h1>
        <ul>
          <li><Link to='/'>Главная</Link></li>
          <li><Link to='/about'>О нас</Link></li>
          <li><Link to='/contacts'>Контакты</Link></li>
          <li><Link to='/faq'>FAQ</Link></li>
        </ul>
        <hr></hr>
      </nav>
    </header>
  )

function HeaderRouter() {
    return(Header)
}

export default Header;
// export default HeaderLinks;