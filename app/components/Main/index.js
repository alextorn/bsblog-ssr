import React, { Component } from 'react';
import cn from 'classnames';
import SubscribeForm from '../SubscribeForm/index';
import styles from './styles.css';

class Main extends Component {
  state = {
    data: [],
  };
  render() {
    return (
      <div className={styles.page}>
        <div className={styles.page_section}>
          <div className={styles.page_content}>
            <div className={styles.page_block}>
              <div className={styles.posts_group}>
                <div className={styles.posts_group_header}>
                  <h3 className={styles.posts_group_title}>Новости</h3>
                </div>
                <div className={styles.posts_list}>
                  <div className={cn(styles.posts_list_featured, styles.posts_list_featured_1to1)}>
                    <li className={styles.posts_list_item}>
                      <article className={styles.news_article}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a
                              className={cn(styles.news_title, styles.news_title_item_head_1to1)}
                              href="/"
                            >
                              Положение в области национальной безопасности Беларуси (сентябрь 2017
                              года)
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                  </div>
                  <ul className={cn(styles.posts_list_rest, styles.posts_list_rest_1to1)}>
                    <li className={styles.posts_list_item}>
                      <article className={styles.news_article}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a className={styles.news_title} href="/">
                              Оборонные ведомства Беларуси и Украины ввязались в конфронтационную
                              спираль
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                    <li className={styles.posts_list_item}>
                      <article className={styles.news_article}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a className={styles.news_title} href="/">
                              Официальный Минск проиграл «Запад-2017»
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                    <li className={styles.posts_list_item}>
                      <article className={styles.news_article}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a className={styles.news_title} href="/">
                              Cупрацоўніцтва Ўкраіны з Турэччынай — дарожная мапа разьвіцьця
                              беларуска-турэцкіх дачыненьняў
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                    <li className={styles.posts_list_item}>
                      <article className={styles.news_article}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a className={styles.news_title} href="/">
                              Евразийский дайджест безопасности (август-2017)
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.page_section}>
          <div className={styles.page_content}>
            <div className={styles.page_block}>
              <div className={styles.posts_group}>
                <div className={cn(styles.posts_group_header, styles.posts_header_nav)}>
                  <h3 className={styles.posts_group_title}>Деятельность</h3>
                  <ul className={styles.subcat_list}>
                    <li className={styles.subcat_item}>
                      <a className={styles.subcat_link} href="/">
                        Все
                      </a>
                    </li>
                    <li className={styles.subcat_item}>
                      <a className={styles.subcat_link} href="/">
                        Исследования
                      </a>
                    </li>
                    <li className={styles.subcat_item}>
                      <a className={styles.subcat_link} href="/">
                        Клуб
                      </a>
                    </li>
                    <li className={styles.subcat_item}>
                      <a className={styles.subcat_link} href="/">
                        Мероприятия
                      </a>
                    </li>
                    <li className={styles.subcat_item}>
                      <a className={styles.subcat_link} href="/">
                        Радиопрограмма Варта
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={styles.posts_list}>
                  <div className={cn(styles.posts_list_featured, styles.posts_list_featured_1to1)}>
                    <li className={styles.posts_list_item}>
                      <article className={styles.news_article}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a
                              className={cn(styles.news_title, styles.news_title_item_head_1to1)}
                              href="/"
                            >
                              Украинские эксперты посетили Минск
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                  </div>
                  <ul className={cn(styles.posts_list_rest, styles.posts_list_rest_1to1)}>
                    <li className={styles.posts_list_item}>
                      <article className={styles.news_article}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a className={styles.news_title} href="/">
                              Публичная лекция «Политика основных игроков в Восточной Европе:
                              Россия, Украина, Запад»
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                    <li className={styles.posts_list_item}>
                      <article className={styles.news_article}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a className={styles.news_title} href="/">
                              Форум в Крынице. День третий
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                    <li className={styles.posts_list_item}>
                      <article className={styles.news_article}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a className={styles.news_title} href="/">
                              Форум в Крынице. День второй
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                    <li className={styles.posts_list_item}>
                      <article className={styles.news_article}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a className={styles.news_title} href="/">
                              Форум в Крынице. День первый
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.page_section}>
          <div className={styles.page_content}>
            <div className={styles.page_block}>
              <section className={styles.superblock}>
                <header className={styles.superblock_header}>
                  <div className={styles.superblock_title}>
                    <h2>Подпишитесь на еженедельный дайджест</h2>
                  </div>
                </header>
                <div className={styles.page}>
                  <div className={styles.page_section}>
                    <div className={styles.page_content}>
                      <div className={styles.page_block}>
                        <div className={styles.weeklyblock}>
                          <div className={styles.weeklyblock_body}>
                            <SubscribeForm />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className={styles.page_section}>
          <div className={styles.page_content}>
            <div className={cn(styles.page_block, styles.page_block_1to3)}>
              <div className={cn(styles.posts_group, styles.posts_group_1to3)}>
                <div className={styles.posts_group_header}>
                  <h3 className={styles.posts_group_title}>English articles</h3>
                </div>
                <div className={cn(styles.posts_list, styles.posts_list_1to3)}>
                  <div className={styles.posts_list_featured}>
                    <li className={styles.posts_list_item}>
                      <article className={styles.news_article}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a className={styles.news_title} href="/">
                              Belarusian and Ukrainian Defence Ministries entangle in confrontation
                              spiral
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                  </div>
                  <ul className={cn(styles.posts_list_rest, styles.posts_list_rest_1to3)}>
                    <li className={styles.posts_list_item}>
                      <article className={styles.news_article}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a className={styles.news_title} href="/">
                              Ukraine’s cooperation with Turkey — a road map for development of
                              Belarusian-Turkish relations
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                    <li className={styles.posts_list_item}>
                      <article className={styles.news_article}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a className={styles.news_title} href="/">
                              Belarusian authorities may have to reform KGB
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                    <li className={styles.posts_list_item}>
                      <article className={styles.news_article}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a className={styles.news_title} href="/">
                              Situation in the field of national security and defence of Belarus
                              (August 2017)
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                    <li className={styles.posts_list_item}>
                      <article className={cn(styles.news_article, styles.news_article_last)}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a className={styles.news_title} href="/">
                              Опрос-2017/ Poll-2017
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={cn(styles.page_block, styles.page_block_1to3)}>
              <div className={styles.posts_group}>
                <div className={styles.posts_group_header}>
                  <h3 className={styles.posts_group_title}>Ежемесячные обзоры</h3>
                </div>
                <div className={cn(styles.posts_list, styles.posts_list_1to3)}>
                  <div className={styles.posts_list_featured}>
                    <li className={styles.posts_list_item}>
                      <article className={styles.news_article}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a className={styles.news_title} href="/">
                              Положение в области национальной безопасности Беларуси (август 2017
                              года)
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                  </div>
                  <ul className={cn(styles.posts_list_rest, styles.posts_list_rest_1to3)}>
                    <li className={styles.posts_list_item}>
                      <article className={styles.news_article}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a className={styles.news_title} href="/">
                              Положение в области экономической безопасности Беларуси (август 2017
                              года)
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                    <li className={styles.posts_list_item}>
                      <article className={styles.news_article}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a className={styles.news_title} href="/">
                              Положение в области национальной безопасности Беларуси (июль 2017
                              года)
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                    <li className={styles.posts_list_item}>
                      <article className={styles.news_article}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a className={styles.news_title} href="/">
                              Положение в области экономической безопасности Беларуси (июль 2017
                              года)
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                    <li className={styles.posts_list_item}>
                      <article className={cn(styles.news_article, styles.news_article_last)}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a className={styles.news_title} href="/">
                              Положение в области национальной безопасности Беларуси (июнь 2017
                              года)
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={cn(styles.page_block, styles.page_block_1to3)}>
              <div className={styles.posts_group}>
                <div className={styles.posts_group_header}>
                  <h3 className={styles.posts_group_title}>Nexus Беларусь</h3>
                </div>
                <div className={cn(styles.posts_list, styles.posts_list_1to3)}>
                  <div className={styles.posts_list_featured}>
                    <li className={styles.posts_list_item}>
                      <article className={styles.news_article}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a className={styles.news_title} href="/">
                              Фотасінтэз бактэрый-«кібаргаў» ў 40 разоў больш эфектыўны, чым у
                              раслін
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                  </div>
                  <ul className={cn(styles.posts_list_rest, styles.posts_list_rest_1to3)}>
                    <li className={styles.posts_list_item}>
                      <article className={styles.news_article}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a className={styles.news_title} href="/">
                              Японія паспяхова атрымала электраэнергію за кошт падводных плыняў у
                              акіяне
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                    <li className={styles.posts_list_item}>
                      <article className={styles.news_article}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a className={styles.news_title} href="/">
                              Ад ператварэння ў супервірус птушыны грып аддзяляюць дзве мутацыі
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                    <li className={styles.posts_list_item}>
                      <article className={styles.news_article}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a className={styles.news_title} href="/">
                              Глабальнае пацяпленне абудзіць старажытныя вірусы
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                    <li className={styles.posts_list_item}>
                      <article className={cn(styles.news_article, styles.news_article_last)}>
                        <div className={styles.news_info}>
                          <h2 className={styles.news_info_title}>
                            <a className={styles.news_title} href="/">
                              Глабальнае пацяпленне ненадоўга адкладаецца
                            </a>
                          </h2>
                        </div>
                      </article>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
