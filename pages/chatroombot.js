import React from 'react'
import ArticleTemplate from "../components/article-template"
import fetch from 'isomorphic-unfetch'
import Head from "next/head";


export const config = { amp: true }
const Post=({ampUrl,stars,amp})=> (
    <>
        <ArticleTemplate url={ampUrl} amp={amp} date="Опубликовано сегодня" creator="Admin" title="Команды бота в беседах VK" header="Команды бота в беседах VK | FineBot" text={`
<h3>Команды администраторов:</h3>
• !antispam — включение/отключение защиты от спама (от одинаковых сообщений)
<br/><br/>
• !onlinelist — список отслеживания онлайна в беседе
<br/><br/>
• !onlineadd [упоминание человека/ссылка на страницу]— отслеживать онлайн пользователя
<br/><br/>
• !onlineremove [упоминание человека/ссылка на страницу]— прекратить отслеживание онлайна пользователя в беседе
<br/><br/>
• !объявление [текст]— (только для создателя чата) бот упомянет всех в беседе для создания объявления
<br/><br/>
• !canmoderkick — включает/отключает возможность кика модераторов через !votekick (по умолчанию модераторов кикать нельзя)
<br/><br/>
• !keyboard — включает/отключает клавиатуру в беседе
<br/><br/>
• !VoteKickOn — активирует режим, когда пользователи могут прописывать команду «!votekick @user», и голосовать за кик пользователей.
<br/><br/>
• !setrules — установит правила для беседы.
<br/><br/>
• !обновления — вкл/выкл оповещения об обновлениях FineBot в чатах.
<br/><br/>
• !рейтинг off — отключит Вашу беседу от рейтинга и сбросит результат.
<br/><br/>
• !рейтинг on — подключит Вашу беседу к рейтингу. (По умолчанию беседа участвует в рейтинге)
<br/><br/>
• !VoteKickOff — отключает режим, когда пользователи могут прописывать команду «!votekick @user», и голосовать за кик пользователей.
<br/><br/>
• !приветствие — установить фразу которую бот будет присылать при появлении новых пользователей
<br/><br/>
• !кик [пересланное сообщение, упоминание пользователя] — кикнет пользователя, чье сообщение переслали вместе с этой командой
<br/><br/>
• !админ [пересланное сообщение, упоминание пользователя] — назначит администратором в боте пользователя, чье сообщение вы переслали
<br/><br/>
• !неадмин [пересланное сообщение, упоминание пользователя] — уберет пользователя из администраторов, чье смс вы переслали
<br/><br/>
• !чс [пересланное сообщение, упоминание пользователя] — кидает данного пользователя в чс бота. Бот будет игнорировать его команды
<br/><br/>
• !нечс [пересланное сообщение, упоминание пользователя] — убирает пользователя из чс бота
<br/><br/>
• !бан [пересланное сообщение, упоминание пользователя] — бот будет кикать этого пользователя из чата всегда, когда он будет в него вступать. Если в сообщение добавить ‘//’, то все, что поле этих символов будет причиной бана. Например: !бан vk.com/0id301 // плохо себя вел.
<br/><br/>
• !небан [пересланное сообщение, упоминание пользователя] — убирает бан с пользователя
<br/><br/>
• !варн [пересланное сообщение, упоминание пользователя] — добавляет варн человеку/сообществу (при достижении 3-х варнов, будет применено одно из трех наказаний)
<br/><br/>
• !неварн [пересланное сообщение, упоминание пользователя] — убирает один варн с пользователя/сообщества
<br/><br/>
• !название [название чата (через пробел) пример: !название VK Team] — устанавливает название беседы
<br/><br/>
• !setwarn [кик/бан/чс] — устанавливает наказание по достижении трех варнов
<br/><br/>
• !setcountkick [цифра/число] — устанавливает количество голосов, которое необходимо набрать для кика пользователя в голосовании. Пример: !setcountkick 6. Если прописать !setcountkick без числа, то бот будет устанавливать количество голосов сам.
<br/><br/>
• !модер [пересланное сообщение, упоминание пользователя] — назначает пользователя модератором чата
<br/><br/>
• !немодер [пересланное сообщение, упоминание пользователя] — убирает пользователя из модераторов чата
<br/><br/>
• !commandadd [команда (Пример: !commandadd !название)] — добавляет команду модераторам (по умолчанию модераторам доступны только команды пользователей)
<br/><br/>
• !commandremove [команда (Пример: !commandremove !название)] — убирает команду из команд модераторов (Команды пользователей модераторам запретить нельзя)
<br/><br/>
• !commands — показывает список доступных модераторам команд (В список входят только те команды, которые были добавлены через !commandadd)
<br/><br/>
Примеры команд: !команда id378833024 или !команда @user
<br/><br/>
<h3>Команды пользователей:</h3>
• !варны — покажет список у кого есть варны в чате
<br/><br/>
• !модеры — список модераторов чата
<br/><br/>
• !погода [название города, геолокация] — бот отправит погоду в данном городе или месте
<br/><br/>
• !статус [пересланное сообщение, упоминание, либо ничего] — покажет статус пользователя в данном чате.
<br/><br/>
• !audio — бот отправит случайный трек из рекомендаций VK Music
<br/><br/>
• !рейтинг — топ 10 чатов по количеству смс
<br/><br/>
• !брак [пересланное сообщение, упоминание пользователя] — отправляет запрос на создание брака пользователю
<br/><br/>
• !развод — брак между людьми расторгается
<br/><br/>
• !цитата [пересланное сообщение] — бот создаст картинку с цитатой
<br/><br/>
• !ктовчс — бот выдаст список людей, на команды которых он не реагирует
<br/><br/>
• !банлист — бот выдаст список пользователей, которые были забанены в беседе
<br/><br/>
• !админы — выдаст список администраторов чата
<br/><br/>
• !ктогей — отправит список геев чата
<br/><br/>
• !правила — отправит правила беседы, установленные администратором.
<br/><br/>
• !ягей — пользователь объявляет себя геем.
<br/><br/>
• !новости — 7 самых популярных новостей за последние 10 секунд
<br/><br/>
• !янегей — пользователь перестает быть геем
<br/><br/>
• !онлайн — покажет всех пользователей, которые сейчас онлайн
<br/><br/>
• !помощь — вызов меню помощи
<br/><br/>
• !браки — бот отправит список пар чата
<br/><br/>
• !votekick [пересланное сообщение, упоминание пользователя] — (Работает при условии если администратор прописал команду !VoteKickOn) включается режим голосования за кик определенного пользователя.
<br/><br/>
<h3>Команды геев:</h3>
• !изнасиловать [пересланное сообщение, упоминание пользователя] — гей изнасилует пользователя, чье смс он переслал.
<br/><br/>
Примеры команд: !команда id378833024 или !команда @user
        <br/><br/>
        `} description="Команды администраторов:

• !antispam — включение/отключение защиты от спама (от одинаковых сообщений)

• !onlinelist — список отслеживания онлайна в беседе

• !onlineadd [упоминание человека/ссылка на страницу]— отслеживать онлайн пользователя

• !onlineremove [упоминание человека/ссылка на страницу]— прекратить отслеживание онлайна пользователя в беседе

• !объявление [текст]— (только для создателя чата) бот упомянет всех в беседе для создания объявления

• !canmoderkick — включает/отключает возможность кика модераторов через !votekick (по умолчанию модераторов кикать нельзя)

• !keyboard — включает/отключает клавиатуру в беседе

• !VoteKickOn — активирует режим, когда пользователи могут прописывать команду «!votekick @user», и голосовать за кик пользователей.

• !setrules — установит правила для беседы."/>
    </>


)
function generateInlineScript(script) {
    if (typeof script === 'function') {
        return `${script.toString()}()`
    }
    return String(script)
}
Post.getInitialProps = async ({ req,query }) => {
    const amp = query.amp

    const url = req ? req.url : window.location.href
    const id = url.replace("/"+url.split("/")[1]+"/","")
    const ampUrl = url
    //const res = await fetch('https://amp.dev/documentation/examples/api/time')
  //  const data = await res.json();
    //const time = data.time
    return { ampUrl,id,amp }
};
export default Post