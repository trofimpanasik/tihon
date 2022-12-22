import styles from './App.module.scss'
import img from '../public/tihon.png'
import dota from '../public/dota.png'
function App() {
  const images = ['https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pudge.png', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/luna.png', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/invoker.png', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nevermore.png']
  return (
    <div className={styles.app}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <h1 className={styles.title}>Немного о себе:</h1>
        <div className={styles.header}>
          <img alt={'avatar'} src={img}/>
          <p>
            Меня зовут <strong>Тихон Чарончик</strong>. Мне 33 года. Мой дом находится в северо-восточной части Морио, где расположены все виллы. Я не женат. Я работаю в универмаге Kame Yu и прихожу домой не позднее 8 вечера. <span>Я курю, и иногда выпиваю</span>. Я ложусь спать в 11 вечера, и убеждаюсь, что я получаю ровно восемь часов сна, несмотря ни на что. Выпив стакан теплого молока и потянувшись минут двадцать перед сном, я обычно без проблем сплю до утра. Словно ребёнок я просыпаюсь утром без всякой усталости и стресса. На моём последнем осмотре мне сказали, что у меня нет никаких проблем со здоровьем. Я пытаюсь донести, что я обычный человек, который хочет жить спокойной жизнью. Я забочусь о том, чтобы не утруждать себя какими-либо врагами – победами и поражениями, которые могли бы потревожить мой сон. Вот как я отношусь к обществу, и я знаю, что это приносит мне счастье. Хотя, если бы мне пришлось сражаться, я бы никому не проиграл. <span>Пошлый</span>.
          </p>
        </div>
        <h1 className={styles.title}>Мои увлечения:</h1>
        <div className={styles.header}>
          <p className={styles.left}>
           Одно из моих любимых увлечений это играть в игры. Я люблю поиграть в самые разные игры, но самая крутая из всех это <span>DOTA 2</span>. Я обожаю эту игру настолько что я провожу в ней все своё время. Наверное возникнет вопрос за что я так полюбил эту игру? Я не знаю, но мне кажется что это потому что в ней есть много разных героев и каждый из них имеет свои сильные и слабые стороны. Играя в эту игру я чувствую себя сильным и могу победить любого противника. Ниже я прикрепил фото с моими любимыми в этой игре. Так же я Я люблю жёсткую долбёжка,а вот какую думайте сами)
          </p>
          <img alt={'dota'} src={dota} className={styles.small}/>
        </div>
        <div className={styles.list}>
          {images.map((item, index) => (
            <img key={index} alt={'img'} src={item}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default App
