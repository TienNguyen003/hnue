import React from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

export default function Header() {
    return (
        <>
            <div
                style={{
                    backgroundColor: '#363636',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '12px',
                }}
            >
                <div className={cx('row', 'header', 'no-gutters')}>
                    <div className={cx('pc-5')}>
                        <div className={cx('top-menu')}>
                            <ul className={cx('menu')}>
                                <li>
                                    <span>Khối KT&amp;CN</span>
                                    <ul className={cx('sub-menu', 'level-3')}>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Khối KT&amp;CN</span>
                                    <ul className={cx('sub-menu', 'level-2')}>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Khối KT&amp;CN</span>
                                    <ul className={cx('sub-menu', 'level-1')}>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Khối KT&amp;CN</span>
                                    <ul className={cx('sub-menu', 'level-3')}>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Khối KT&amp;CN</span>
                                    <ul className={cx('sub-menu', 'level-2')}>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                        <li>
                                            <a href="#">Khoa Công nghệ thông tin</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pc-2"></div>
                    <div className={cx('pc-5')}>
                        <div className={cx('top-menu')}>
                            <div className={cx('container')}>
                                <div className={cx('align-items-center')}>
                                    <div className={cx('')}>
                                        <ul className={cx('menu')}>
                                            <li>
                                                <span>Khối KT&amp;CN</span>
                                                {/* <ul className={cx('sub-menu')}>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                        </ul> */}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    backgroundColor: '#ffffff',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <div className={cx('row', 'header-area', 'no-gutters')}>
                    <div className={cx('pc-12')} style={{ display: 'flex', alignItems: 'center' }}>
                        <p className={cx('main-logo', 'pc-5')}>
                            <img src="https://phenikaa-uni.edu.vn:3600/pu/vi/modules/logo-phenikaa-uni-02.png" alt="" />
                        </p>
                        <div className={cx('right-main-menu', 'pc-7')}>
                            <div className={cx('top-menu')}>
                                <ul className={cx('menu')}>
                                    <li>
                                        <span>Khối KT&amp;CN</span>
                                        <ul className={cx('sub-menu', 'level-3')}>
                                            <div className={cx('main-menu-name')}>Giới thiệu</div>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span>Khối KT&amp;CN</span>
                                        <ul className={cx('sub-menu', 'level-2')}>
                                            <div className={cx('main-menu-name')}>Giới thiệu</div>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span>Khối KT&amp;CN</span>
                                        <ul className={cx('sub-menu', 'level-1')}>
                                            <div className={cx('main-menu-name')}>Giới thiệu</div>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
