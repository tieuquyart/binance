import { AppstoreOutlined, CaretDownOutlined, CaretUpOutlined, UserOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import Tippy from '@tippyjs/react/headless';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '../../../../components/GlobalStyles/Popper/index';
import Menu from '../content/Menu/index';
import BuyCrypto from '../content/buyCrypto';
import Trade from '../content/Trade/index';
import Derivatives from '../content/Derivatives/index';
import Earn from '../content/Earn/index';
import Finance from '../content/Finance/index';
import Wallet from '../content/Wallet/index';
import Orders from '../content/Orders/index';
import User from '../content/User/index';
import { useState } from 'react';

function Header() {
    const [login, setLogin] = useState(true);

    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.leftMenu}>
                    <div className={styles.logo}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5120 1024" className="css-1tywbcj">
                            <path
                                d="M230.997333 512L116.053333 626.986667 0 512l116.010667-116.010667L230.997333 512zM512 230.997333l197.973333 197.973334 116.053334-115.968L512 0 197.973333 314.026667l116.053334 115.968L512 230.997333z m395.989333 164.992L793.002667 512l116.010666 116.010667L1024.981333 512l-116.992-116.010667zM512 793.002667l-197.973333-198.997334-116.053334 116.010667L512 1024l314.026667-314.026667-116.053334-115.968L512 793.002667z m0-165.973334l116.010667-116.053333L512 396.032 395.989333 512 512 626.986667z m1220.010667 11.946667v-1.962667c0-75.008-40.021333-113.024-105.002667-138.026666 39.978667-21.973333 73.984-58.026667 73.984-121.002667v-1.962667c0-88.021333-70.997333-145.024-185.002667-145.024h-260.992v561.024h267.008c126.976 0.981333 210.005333-51.029333 210.005334-153.002666z m-154.026667-239.957333c0 41.984-34.005333 58.965333-89.002667 58.965333h-113.962666V338.986667h121.984c52.010667 0 80.981333 20.992 80.981333 58.026666v2.005334z m31.018667 224c0 41.984-32.981333 61.013333-87.04 61.013333h-146.944v-123.050667h142.976c63.018667 0 91.008 23.04 91.008 61.013334v1.024z m381.994666 169.984V230.997333h-123.989333v561.024h123.989333v0.981334z m664.021334 0V230.997333h-122.026667v346.026667l-262.997333-346.026667h-114.005334v561.024h122.026667v-356.010666l272 356.992h104.96z m683.946666 0L3098.026667 228.010667h-113.962667l-241.024 564.992h127.018667l50.986666-125.994667h237.013334l50.986666 125.994667h130.005334z m-224.981333-235.008h-148.992l75.008-181.973334 73.984 181.973334z m814.037333 235.008V230.997333h-122.026666v346.026667l-262.997334-346.026667h-114.005333v561.024h122.026667v-356.010666l272 356.992h104.96z m636.970667-91.008l-78.976-78.976c-44.032 39.978667-83.029333 65.962667-148.010667 65.962666-96 0-162.986667-80-162.986666-176v-2.986666c0-96 67.968-174.976 162.986666-174.976 55.978667 0 100.010667 23.978667 144 62.976l78.976-91.008c-51.968-50.986667-114.986667-86.997333-220.970666-86.997334-171.989333 0-292.992 130.986667-292.992 290.005334V512c0 160.981333 122.965333 288.981333 288 288.981333 107.989333 1.024 171.989333-36.992 229.973333-98.986666z m527.018667 91.008v-109.994667h-305.024v-118.016h265.002666v-109.994667h-265.002666V340.992h301.013333V230.997333h-422.997333v561.024h427.008v0.981334z"
                                p-id="2935"
                            ></path>
                        </svg>
                    </div>
                    <Tippy
                        interactive
                        render={(attrs) => (
                            <div className={styles.menu} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <Menu />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={styles.appIcon}>
                            <div className={styles.iconRubik}>
                                <AppstoreOutlined className={styles.appStore} />
                                <div className={styles.iconDown}>
                                    <CaretDownOutlined className={styles.downOutlined} />
                                    <CaretUpOutlined className={styles.upOutlined} />
                                </div>
                            </div>
                        </div>
                    </Tippy>
                    <Tippy
                        interactive
                        render={(attrs) => (
                            <div className={styles.boxBuyCrypto} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <BuyCrypto />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={styles.buyCryptoWrapper}>
                            <div className={styles.buyCrypto}>
                                <div className={styles.buyCryptoText}>Buy Crypto</div>
                                <div className={styles.messState}>EUR</div>
                                <div className={styles.iconDown}>
                                    <CaretDownOutlined className={styles.downOutlined} />
                                    <CaretUpOutlined className={styles.upOutlined} />
                                </div>
                            </div>
                        </div>
                    </Tippy>
                    <div className={styles.marketWrapper}>
                        <div className={styles.market}>
                            <div className={styles.marketText}>Markets</div>
                        </div>
                    </div>
                    <Tippy
                        interactive
                        render={(attrs) => (
                            <div className={styles.TradeContent} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <Trade />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={styles.tradeWrapper}>
                            <div className={styles.trade}>
                                <div className={styles.tradeText}>Trade</div>
                                <div className={styles.iconDown}>
                                    <CaretDownOutlined className={styles.downOutlined} />
                                    <CaretUpOutlined className={styles.upOutlined} />
                                </div>
                            </div>
                        </div>
                    </Tippy>
                    <Tippy
                        interactive
                        render={(attrs) => (
                            <div className={styles.DerivativesContent} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <Derivatives />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={styles.derivativesWrapper}>
                            <div className={styles.derivatives}>
                                <div className={styles.derivativesText}>Derivatives</div>
                                <div className={styles.iconDown}>
                                    <CaretDownOutlined className={styles.downOutlined} />
                                    <CaretUpOutlined className={styles.upOutlined} />
                                </div>
                            </div>
                        </div>
                    </Tippy>
                    <Tippy
                        interactive
                        render={(attrs) => (
                            <div className={styles.EarnContent} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <Earn />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={styles.earnWrapper}>
                            <div className={styles.earn}>
                                <div className={styles.earnText}>Earn</div>
                                <div className={styles.iconDown}>
                                    <CaretDownOutlined className={styles.downOutlined} />
                                    <CaretUpOutlined className={styles.upOutlined} />
                                </div>
                            </div>
                        </div>
                    </Tippy>
                    <Tippy
                        interactive
                        render={(attrs) => (
                            <div className={styles.FinanceContent} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <Finance />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={styles.earnWrapper}>
                            <div className={styles.earn}>
                                <div className={styles.earnText}>Finance</div>
                                <div className={styles.iconDown}>
                                    <CaretDownOutlined className={styles.downOutlined} />
                                    <CaretUpOutlined className={styles.upOutlined} />
                                </div>
                            </div>
                        </div>
                    </Tippy>
                    <div className={styles.nftWrapper}>
                        <div className={styles.nft}>
                            <div className={styles.nftText}>NFT</div>
                            <div className={styles.messState}>NEW</div>
                        </div>
                    </div>
                </div>
                <div className={styles.rightMenu}>
                    {login === true ? (
                        <Tippy
                            interactive
                            render={(attrs) => (
                                <div className={styles.WalletContent} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <Wallet />
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={styles.earnWrapper}>
                                <div className={styles.earn}>
                                    <div className={styles.earnText}>Wallet</div>
                                    <div className={styles.iconDown}>
                                        <CaretDownOutlined className={styles.downOutlined} />
                                        <CaretUpOutlined className={styles.upOutlined} />
                                    </div>
                                </div>
                            </div>
                        </Tippy>
                    ) : (
                        <div className={styles.earnWrapper}>
                            <div className={styles.earn}>
                                <div className={styles.earnText}>Login</div>
                            </div>
                        </div>
                    )}

                    <div className={styles.earnWrapper}>
                        {login === true ? (
                            <Tippy
                                interactive
                                render={(attrs) => (
                                    <div className={styles.OrdersContent} tabIndex="-1" {...attrs}>
                                        <PopperWrapper>
                                            <Orders />
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <div className={styles.earn}>
                                    <div className={styles.earnText}>Orders</div>
                                    <div className={styles.iconDown}>
                                        <CaretDownOutlined className={styles.downOutlined} />
                                        <CaretUpOutlined className={styles.upOutlined} />
                                    </div>
                                </div>
                            </Tippy>
                        ) : (
                            <div className={styles.earnWrapper}>
                                <div className={styles.earn}>
                                    <div className={styles.earnText}>Regiter</div>
                                </div>
                            </div>
                        )}
                    </div>
                    {login === true ? (
                        <>
                            <Tippy
                                interactive
                                render={(attrs) => (
                                    <div className={styles.UserContent} tabIndex="-1" {...attrs}>
                                        <PopperWrapper>
                                            <User />
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <div className={styles.earnWrapper}>
                                    <UserOutlined className={styles.iconUser} />
                                </div>
                            </Tippy>
                            <div className={styles.bellWrapper}>
                                <div className={styles.bellContent}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
                                    </svg>
                                </div>
                                <div className={styles.bell}>
                                    <Badge count={99} overflowCount={99} className={styles.bellNoti}></Badge>
                                </div>
                            </div>
                        </>
                    ) : null}

                    <div className={styles.earnWrapper}>
                        <div className={styles.earn}>
                            <div className={styles.earnText}>Downloads</div>
                        </div>
                    </div>
                    <div className={styles.earnWrapper}>
                        <div className={styles.earn}>
                            <div className={styles.earnText}>English</div>
                        </div>
                    </div>
                    <div className={styles.earnWrapper}>
                        <div className={styles.earn}>
                            <div className={styles.earnText}>USD</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
