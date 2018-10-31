module.exports = [
    // url pathname,                           template file path,                             layout,       title,                               exclude languages
    // ==================== Section: "app" ====================
    ['cashier',                                 'app/cashier/index',                           'default',    'Cashier'],
    ['cashier/account_transfer',                'app/cashier/account_transfer',                'default',    'Transfer Between Accounts'],
    ['cashier/confirmation',                    'app/cashier/confirmation',                    'default',    'Confirm'],
    ['cashier/epg_forwardws',                   'app/cashier/deposit_withdraw',                'default',    'Cashier'],
    ['cashier/forwardws',                       'app/cashier/deposit_withdraw',                'default',    'Cashier'],
    ['cashier/payment_agent_listws',            'app/cashier/payment_agent_list',              'default',    'Payment Agent Deposit'],
    ['cashier/payment_methods',                 'app/cashier/payment_methods',                 'default',    'Payment Methods'],
    ['cashier/top_up_virtualws',                'app/user/top_up_virtual',                     'default',    'Top Up Virtual Account'],

    ['paymentagent/transferws',                 'app/cashier/paymentagent_transfer',           'default',    'Payment Agent Transfer'],
    ['paymentagent/withdrawws',                 'app/cashier/paymentagent_withdraw',           'default',    'Payment Agent Withdrawal'],

    ['multi_barriers_trading',                  'app/trade/mb_trading',                        'full_width', 'Ladders'],
    ['trading',                                 'app/trade/trading',                           'default',    'SmartTrader'],

    ['new_account/maltainvestws',               'app/new_account/financial',                   'default',    'Financial Account Opening'],
    ['new_account/realws',                      'app/new_account/real',                        'default',    'Real Money Account Opening'],
    ['new_account/virtualws',                   'app/new_account/virtual',                     'default',    'Create New Virtual-money Account'],
    ['new_account/welcome',                     'app/new_account/welcome_page',                'default',    'Welcome to Binary.com'],

    ['resources',                               'app/resources/index',                         'default',    'Resources'],
    ['resources/asset_indexws',                 'app/resources/asset_index',                   'full_width', 'Asset Index'],
    ['resources/market_timesws',                'app/resources/trading_times',                 'default',    'Trading Times'],
    ['resources/economic_calendar',             'app/resources/economic_calendar',             'default',    'Economic Calendar'],

    ['user/accounts',                           'app/user/accounts',                           'default',    'Accounts'],
    ['user/authenticate',                       'app/user/authenticate',                       'default',    'Authenticate'],
    ['user/lost_passwordws',                    'app/user/lost_password',                      'default',    'Password Reset'],
    ['user/metatrader',                         'app/user/metatrader',                         'default',    'MetaTrader account management'],
    ['user/portfoliows',                        'app/user/portfolio',                          'default',    'Portfolio'],
    ['user/profit_tablews',                     'app/user/profit_table',                       'default',    'Profit Table'],
    ['user/reality_check_frequency',            'app/user/reality_check/frequency',            'default',    'Reality Check'],
    ['user/reality_check_summary',              'app/user/reality_check/summary',              'default',    'Reality Check'],
    ['user/reset_passwordws',                   'app/user/reset_password',                     'default',    'Password Reset'],
    ['user/securityws',                         'app/user/security',                           'default',    'Security'],
    ['user/security/api_tokenws',               'app/user/security/api_token',                 'default',    'API Token'],
    ['user/security/authorised_appsws',         'app/user/security/authorised_apps',           'default',    'Authorised Applications'],
    ['user/security/cashier_passwordws',        'app/user/security/cashier_password',          'default',    'Cashier Password'],
    ['user/security/change_passwordws',         'app/user/security/change_password',           'default',    'Change Password'],
    ['user/security/iphistoryws',               'app/user/security/iphistory',                 'default',    'Login History'],
    ['user/security/limitsws',                  'app/user/security/limits',                    'default',    'Account Limits'],
    ['user/security/self_exclusionws',          'app/user/security/self_exclusion',            'default',    'Self Exclusion'],
    ['user/security/two_factor_authentication', 'app/user/security/two_factor_authentication', 'default',    'Two-Factor Authentication'],
    ['user/security/cloudflare_dns',            'app/user/security/cloudflare_dns',            'default',    'Binary.com recommends 1.1.1.1'],
    ['user/set-currency',                       'app/user/set_currency',                       'default',    'Set Currency'],
    ['user/settingsws',                         'app/user/settings',                           'default',    'Settings'],
    ['user/settings/assessmentws',              'app/user/settings/financial_assessment',      'default',    'Financial Assessment'],
    ['user/settings/detailsws',                 'app/user/settings/personal_details',          'default',    'Personal Details'],
    ['user/settings/professional',              'app/user/settings/professional',              'default',    'Professional Client'],
    ['user/statementws',                        'app/user/statement',                          'default',    'Statement'],
    ['user/telegram-bot',                       'app/user/telegram_bot',                       'default',    'Telegram Bot'],
    ['user/tnc_approvalws',                     'app/user/tnc_approval',                       'default',    'Terms and Conditions Approval'],
    ['user/video-facility',                     'app/user/video_facility',                     'default',    'Video Room Facility'],
    ['user/warning',                            'app/user/warning',                            'default',    'Warning'],

    ['endpoint',                                'app/endpoint',                                'default',    'Endpoint'],
    ['new-account',                             'app/new_account',                             'default',    'Signup'],

    ['dialog',                                  'app/dialog',                                  null],
    ['explanation',                             'app/trade/explanation',                       null],
    ['logged_inws',                             'app/logged_in',                               null],
    ['redirect',                                'app/logged_in',                               null,         'Redirecting...'],

    // ==================== Section: "static" ====================
    ['404',                                     'static/404',                                  'full_width', '404'],
    ['home',                                    'static/home',                                 'full_width', 'Online Trading platform for binary options on Forex, Indices, Commodities and Smart Indices'],
    ['keep-safe',                               'static/keep_safe',                            'full_width', 'Keep Safe'],
    ['tour',                                    'static/tour',                                 'full_width', 'Tour'],
    ['why-us',                                  'static/why_us',                               'full_width', 'Why Us'],
    ['platforms',                               'static/platforms',                            'full_width', 'Trading Platforms'],

    ['about-us',                                'static/about/index',                          'full_width', 'About Us'],
    ['binary-in-numbers',                       'static/about/binary_in_numbers',              'default',    'Binary in Numbers'],
    ['careers',                                 'static/about/careers',                        'full_width', 'Careers'],
    ['careers/privacy-policy',                  'static/about/job_applicant_policy',           'full_width', 'Job Applicant Privacy Policy'],
    ['contact',                                 'static/about/contact',                        'full_width', 'Contact Us'],
    ['contact-2',                               'static/about/contact_2',                      'full_width', 'Contact Us'],
    ['cyberjaya',                               'static/about/cyberjaya',                      'full_width', 'Careers - Cyberjaya',                'ja'],
    ['labuan',                                  'static/about/labuan',                         'full_width', 'Careers - Labuan',                   'ja'],
    ['malta',                                   'static/about/malta',                          'full_width', 'Careers - Malta',                    'ja'],
    ['group-history',                           'static/about/group_history',                  'full_width', 'Group History'],
    ['open-positions',                          'static/about/job_descriptions',               'full_width', 'Open Positions'],
    ['open-positions/job-details',              'static/about/job_details',                    'full_width', 'Job Details'],

    ['affiliate/signup',                        'static/affiliates/signup',                    'full_width', 'Affiliate'],
    ['affiliate/faq',                           'static/affiliates/faq',                       'default',    'Affiliate FAQ'],
    ['charity',                                 'static/charity',                              'default',    'Charity'],
    ['ib-programme/ib-signup',                  'static/ib_programme/ib_signup',               'full_width', 'IB programme'],
    ['ib-programme/ib-faq',                     'static/ib_programme/ib_faq',                  'default',    'IB programme FAQ'],
    ['legal/us_patents',                        'static/legal/us_patents',                     'default',    'US Patents'],
    ['regulation',                              'static/legal/regulation',                     'default',    'Regulation'],
    ['responsible-trading',                     'static/responsible_trading',                  'full_width', 'Responsible Trading'],
    ['terms-and-conditions',                    'static/legal/tac',                            'default',    'Terms and Conditions'],

    ['liquidity-solutions',                     'static/partners/liquidity_solutions',         'full_width', 'Multi-asset Liquidity Solutions'],
    ['multiple-accounts-manager',               'static/partners/multiple_accounts_manager',   'full_width', 'Multiple Accounts Manager'],
    ['open-source-projects',                    'static/partners/open_source_projects',        'full_width', 'Open-Source Projects'],
    ['partners',                                'static/partners/partners',                    'full_width', 'Partners'],
    ['payment-agent',                           'static/partners/payment_agent',               'full_width', 'Payment Agents'],
    ['security-testing',                        'static/partners/security_testing',            'full_width', 'Security Testing'],

    ['get-started',                             'static/get_started/index',                    'default',     'Get Started'],
    ['get-started/binary-options',              'static/get_started/binary_options',           'default',     'Binary Options'],
    ['get-started/binary-options-mt5',          'static/get_started/binary_options_mt5',       'default',     'Binary Options on MT5'],
    ['get-started/cfds',                        'static/get_started/cfds',                     'default',     'CFDs'],
    ['get-started/cryptocurrencies',            'static/get_started/cryptocurrencies',         'default',     'Cryptocurrencies'],
    ['get-started/forex',                       'static/get_started/forex',                    'default',     'Forex'],
    ['get-started/metals',                      'static/get_started/metals',                   'default',     'Metals'],

    ['metatrader/download',                     'static/metatrader/download',                  'default',     'Start Trading with MetaTrader 5'],
    ['metatrader/how-to-trade-mt5',             'static/metatrader/how_to_trade_mt5',          'default',     'How to Trade in MetaTrader 5'],
    ['metatrader/types-of-accounts',            'static/metatrader/types_of_accounts',         'default',     'Types of MetaTrader 5 accounts'],

    // ==================== Section: "landing_pages" ====================
    // ['graduates',                               'landing_pages/graduate_program',              null,        'Binary.com Graduate Program',        'NOT-en'],
    // ['hackathon',                               'landing_pages/hackathon',                     null,        'Hackathon Competition',              'NOT-en'],
    ['landing/signup-frame',                    'landing_pages/signup_frame',                  null,        'Sign up'],
];
