import React from 'react';
import styles from './styles.css';

const Footer = () => (
  <div className={styles.app_footer}>
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footer_container}>
        <div className={styles.footer_content}>
          <div className={styles.footer_col}>
            <div className={styles.deflist_group}>
              <div className={styles.deflist_title}>Рубрики</div>
              <ul className={styles.deflist_list}>
                <li className={styles.deflist_item}>
                  <a className={styles.deflist_link} href="/">
                    Обзоры
                  </a>
                </li>
                <li className={styles.deflist_item}>
                  <a className={styles.deflist_link} href="/">
                    Мнение
                  </a>
                </li>
                <li className={styles.deflist_item}>
                  <a className={styles.deflist_link} href="/">
                    Видео
                  </a>
                </li>
                <li className={styles.deflist_item}>
                  <a className={styles.deflist_link} href="/">
                    Vox Populi
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footer_col}>
            <div className={styles.deflist_group}>
              <div className={styles.deflist_title}>Деятельность</div>
              <ul className={styles.deflist_list}>
                <li className={styles.deflist_item}>
                  <a className={styles.deflist_link} href="/">
                    Исследования
                  </a>
                </li>
                <li className={styles.deflist_item}>
                  <a className={styles.deflist_link} href="/">
                    Клуб
                  </a>
                </li>
                <li className={styles.deflist_item}>
                  <a className={styles.deflist_link} href="/">
                    Комментарии в СМИ
                  </a>
                </li>
                <li className={styles.deflist_item}>
                  <a className={styles.deflist_link} href="/">
                    Мероприятия
                  </a>
                </li>
                <li className={styles.deflist_item}>
                  <a className={styles.deflist_link} href="/">
                    Радиопрограмма «Варта»
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footer_col}>
            <div className={styles.deflist_group}>
              <div className={styles.deflist_title}>Проекты</div>
              <ul className={styles.deflist_list}>
                <li className={styles.deflist_item}>
                  <a className={styles.deflist_link} href="/">
                    Журнал Варта
                  </a>
                </li>
                <li className={styles.deflist_item}>
                  <a className={styles.deflist_link} href="/">
                    Дайджест безопасности
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.deflist_group}>
              <div className={styles.deflist_title}>Редакция</div>
              <ul className={styles.deflist_list}>
                <li className={styles.deflist_item}>
                  <a className={styles.deflist_link} href="mailto:info@bsblog.info">
                    info@bsblog.info
                  </a>
                </li>
                <li className={styles.deflist_item}>
                  <a className={styles.deflist_link} href="/">
                    Skype: bsblog.info
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footer_col}>
            <div className={styles.deflist_group}>
              <div className={styles.deflist_title}>Социальные сети</div>
              <ul className={styles.deflist_list}>
                <li className={styles.deflist_item}>
                  <a className={styles.deflist_link} href="/">
                    Facebook
                  </a>
                </li>
                <li className={styles.deflist_item}>
                  <a className={styles.deflist_link} href="/">
                    ВКонтакте
                  </a>
                </li>
                <li className={styles.deflist_item}>
                  <a className={styles.deflist_link} href="/">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.deflist_group}>
              <div className={styles.deflist_title}>Уведомления</div>
              <ul className={styles.deflist_list}>
                <li className={styles.deflist_item}>
                  <a className={styles.deflist_link} href="/">
                    RSS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <div className={styles.copyright_block}>Belarus Security Blog © 2017</div>
          <div className={styles.copyright_block}>
            <a href="/">О проекте</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
