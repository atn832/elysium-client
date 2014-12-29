/** @jsx React.DOM */
"use strict";
require("script!../bower_components/moment/min/moment.min");
require("script!../bower_components/moment-timezone/builds/moment-timezone-with-data-2010-2020.min");

import LoginForm from './components/loginform';
import ChatApp from './components/chatapp';

var data = {
    "chanList": [
        {
            "ID": 2,
            "name": "de"
        },
        {
            "ID": 3,
            "name": "df"
        },
        {
            "ID": 1,
            "name": "Elysium"
        }
    ],
    "chanUpdates": [
        {
            "chanID": 1,
            "events": [
                {
                    "ID": 451067,
                    "eventType": {
                        "ID": 1,
                        "name": "Channel Join",
                        "type": "Join"
                    },
                    "source": {
                        "connection": {
                            "ID": 1,
                            "IP": {
                                "ID": 1,
                                "IP": "66.228.162.48"
                            },
                            "hostname": {
                                "ID": 1,
                                "hostname": "66.228.162.48"
                            }
                        },
                        "datetime": "2014-12-05T17:24:43",
                        "entity": {
                            "ID": 2,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "atn"
                        },
                        "location": null,
                        "timeZone": {
                            "ID": 1,
                            "timeZone": "America/Los_Angeles"
                        },
                        "userAgent": {
                            "ID": 1,
                            "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36"
                        }
                    }
                },
                {
                    "ID": 451068,
                    "content": "mais ce soir ==> c'est la misère, http://fc04.deviantart.net/fs70/f/2013/314/d/e/banner_website_v03_by_davedonut-d6tpi0q.swf",
                    "eventType": {
                        "ID": 3,
                        "name": "Message",
                        "type": "Message"
                    },
                    "source": {
                        "connection": {
                            "ID": 61300,
                            "IP": {
                                "ID": 1363,
                                "IP": "108.254.148.84"
                            },
                            "hostname": {
                                "ID": 1040,
                                "hostname": "108.254.148.84"
                            }
                        },
                        "datetime": "2014-05-22T05:38:53",
                        "entity": {
                            "ID": 4,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "atn"
                        },
                        "location": {
                            "ID": 43681,
                            "accuracy": 31,
                            "altitude": null,
                            "altitudeAccuracy": null,
                            "heading": null,
                            "latitude": 37.792830699999996,
                            "locationName": null,
                            "longitude": -122.42401169999998,
                            "speed": null
                        },
                        "timeZone": {
                            "ID": 4,
                            "timeZone": "America/Los_Angeles"
                        },
                        "userAgent": {
                            "ID": 59,
                            "userAgent": "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
                        }
                    }
                },
                {
                    "ID": 451068,
                    "content": "http://upload.wikimedia.org/wikipedia/commons/9/94/Tamias_minimus.jpg",
                    "eventType": {
                        "ID": 3,
                        "name": "Message",
                        "type": "Message"
                    },
                    "source": {
                        "connection": {
                            "ID": 61300,
                            "IP": {
                                "ID": 1363,
                                "IP": "108.254.148.84"
                            },
                            "hostname": {
                                "ID": 1040,
                                "hostname": "108.254.148.84"
                            }
                        },
                        "datetime": "2014-05-22T05:38:53",
                        "entity": {
                            "ID": 4,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "atn"
                        },
                        "location": {
                            "ID": 43681,
                            "accuracy": 31,
                            "altitude": null,
                            "altitudeAccuracy": null,
                            "heading": null,
                            "latitude": 37.792830699999996,
                            "locationName": null,
                            "longitude": -122.42401169999998,
                            "speed": null
                        },
                        "timeZone": {
                            "ID": 4,
                            "timeZone": "America/Los_Angeles"
                        },
                        "userAgent": {
                            "ID": 59,
                            "userAgent": "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
                        }
                    }
                },
                {
                    "ID": 451068,
                    "content": "mais ce soir http://upload.wikimedia.org/wikipedia/commons/9/94/Tamias_minimus.jpg, c'est très bien. http://upload.wikimedia.org/wikipedia/commons/9/94/Tamias_minimus.jpg hehe",
                    "eventType": {
                        "ID": 3,
                        "name": "Message",
                        "type": "Message"
                    },
                    "source": {
                        "connection": {
                            "ID": 61300,
                            "IP": {
                                "ID": 1363,
                                "IP": "108.254.148.84"
                            },
                            "hostname": {
                                "ID": 1040,
                                "hostname": "108.254.148.84"
                            }
                        },
                        "datetime": "2014-05-22T05:38:53",
                        "entity": {
                            "ID": 4,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "atn"
                        },
                        "location": {
                            "ID": 43681,
                            "accuracy": 31,
                            "altitude": null,
                            "altitudeAccuracy": null,
                            "heading": null,
                            "latitude": 37.792830699999996,
                            "locationName": null,
                            "longitude": -122.42401169999998,
                            "speed": null
                        },
                        "timeZone": {
                            "ID": 4,
                            "timeZone": "America/Los_Angeles"
                        },
                        "userAgent": {
                            "ID": 59,
                            "userAgent": "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
                        }
                    }
                },
                {
                    "ID": 451069,
                    "content": "===",
                    "eventType": {
                        "ID": 3,
                        "name": "Message",
                        "type": "Message"
                    },
                    "source": {
                        "connection": {
                            "ID": 61301,
                            "IP": {
                                "ID": 1363,
                                "IP": "108.254.148.84"
                            },
                            "hostname": {
                                "ID": 1040,
                                "hostname": "108.254.148.84"
                            }
                        },
                        "datetime": "2014-05-22T05:52:08",
                        "entity": {
                            "ID": 4,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "atn"
                        },
                        "location": {
                            "ID": 43682,
                            "accuracy": 32,
                            "altitude": null,
                            "altitudeAccuracy": null,
                            "heading": null,
                            "latitude": 37.7928502,
                            "locationName": null,
                            "longitude": -122.4239971,
                            "speed": null
                        },
                        "timeZone": {
                            "ID": 4,
                            "timeZone": "America/Los_Angeles"
                        }
                    }
                },
                {
                    "ID": 451069,
                    "eventType": {
                        "ID": 10
                    },
                    "source": {
                        "datetime": "2014-05-22T05:52:08",
                        "entity": {
                            "name": "Kronos"
                        }
                    }
                },
                {
                    "ID": 451069,
                    "eventType": {
                        "ID": 11
                    },
                    "source": {
                        "datetime": "2014-05-22T05:52:08",
                        "entity": {
                            "name": "Kronos"
                        }
                    }
                },
                {
                    "ID": 451070,
                    "content": "en fait",
                    "eventType": {
                        "ID": 3,
                        "name": "Message",
                        "type": "Message"
                    },
                    "source": {
                        "connection": {
                            "ID": 61302,
                            "IP": {
                                "ID": 1363,
                                "IP": "108.254.148.84"
                            },
                            "hostname": {
                                "ID": 1040,
                                "hostname": "108.254.148.84"
                            }
                        },
                        "datetime": "2014-05-22T05:52:09",
                        "entity": {
                            "ID": 4,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "atn"
                        },
                        "location": {
                            "ID": 43683,
                            "accuracy": 32,
                            "altitude": null,
                            "altitudeAccuracy": null,
                            "heading": null,
                            "latitude": 37.7928502,
                            "locationName": null,
                            "longitude": -122.4239971,
                            "speed": null
                        },
                        "timeZone": {
                            "ID": 4,
                            "timeZone": "America/Los_Angeles"
                        },
                        "userAgent": {
                            "ID": 59,
                            "userAgent": "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
                        }
                    }
                },
                {
                    "ID": 451071,
                    "content": "le client elysium",
                    "eventType": {
                        "ID": 3,
                        "name": "Message",
                        "type": "Message"
                    },
                    "source": {
                        "connection": {
                            "ID": 61303,
                            "IP": {
                                "ID": 1363,
                                "IP": "108.254.148.84"
                            },
                            "hostname": {
                                "ID": 1040,
                                "hostname": "108.254.148.84"
                            }
                        },
                        "datetime": "2014-05-22T05:52:11",
                        "entity": {
                            "ID": 4,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "atn"
                        },
                        "location": {
                            "ID": 43684,
                            "accuracy": 32,
                            "altitude": null,
                            "altitudeAccuracy": null,
                            "heading": null,
                            "latitude": 37.7928502,
                            "locationName": null,
                            "longitude": -122.4239971,
                            "speed": null
                        },
                        "timeZone": {
                            "ID": 4,
                            "timeZone": "America/Los_Angeles"
                        },
                        "userAgent": {
                            "ID": 59,
                            "userAgent": "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
                        }
                    }
                },
                {
                    "ID": 451072,
                    "content": "je pourrais le refaire en standalone",
                    "eventType": {
                        "ID": 3,
                        "name": "Message",
                        "type": "Message"
                    },
                    "source": {
                        "connection": {
                            "ID": 61304,
                            "IP": {
                                "ID": 1363,
                                "IP": "108.254.148.84"
                            },
                            "hostname": {
                                "ID": 1040,
                                "hostname": "108.254.148.84"
                            }
                        },
                        "datetime": "2014-05-22T05:52:14",
                        "entity": {
                            "ID": 4,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "atn"
                        },
                        "location": {
                            "ID": 43685,
                            "accuracy": 32,
                            "altitude": null,
                            "altitudeAccuracy": null,
                            "heading": null,
                            "latitude": 37.7928502,
                            "locationName": null,
                            "longitude": -122.4239971,
                            "speed": null
                        },
                        "timeZone": {
                            "ID": 4,
                            "timeZone": "America/Los_Angeles"
                        },
                        "userAgent": {
                            "ID": 59,
                            "userAgent": "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
                        }
                    }
                },
                {
                    "ID": 451073,
                    "content": "sur github... https://www.youtube.com/watch?v=zj2Zf9tlg2Y&list=PLEFFD0AFDDF3F2C43 !",
                    "eventType": {
                        "ID": 3,
                        "name": "Message",
                        "type": "Message"
                    },
                    "source": {
                        "connection": {
                            "ID": 61305,
                            "IP": {
                                "ID": 1363,
                                "IP": "108.254.148.84"
                            },
                            "hostname": {
                                "ID": 1040,
                                "hostname": "108.254.148.84"
                            }
                        },
                        "datetime": "2014-05-22T05:52:15",
                        "entity": {
                            "ID": 4,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "atn"
                        },
                        "location": {
                            "ID": 43686,
                            "accuracy": 32,
                            "altitude": null,
                            "altitudeAccuracy": null,
                            "heading": null,
                            "latitude": 37.7928502,
                            "locationName": null,
                            "longitude": -122.4239971,
                            "speed": null
                        },
                        "timeZone": {
                            "ID": 4,
                            "timeZone": "America/Los_Angeles"
                        },
                        "userAgent": {
                            "ID": 59,
                            "userAgent": "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
                        }
                    }
                },
                {
                    "ID": 451074,
                    "content": "github ou pas github",
                    "eventType": {
                        "ID": 3,
                        "name": "Message",
                        "type": "Message"
                    },
                    "source": {
                        "connection": {
                            "ID": 61306,
                            "IP": {
                                "ID": 1363,
                                "IP": "108.254.148.84"
                            },
                            "hostname": {
                                "ID": 1040,
                                "hostname": "108.254.148.84"
                            }
                        },
                        "datetime": "2014-05-22T05:52:52",
                        "entity": {
                            "ID": 4,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "atn"
                        },
                        "location": {
                            "ID": 43687,
                            "accuracy": 32,
                            "altitude": null,
                            "altitudeAccuracy": null,
                            "heading": null,
                            "latitude": 37.7928502,
                            "locationName": null,
                            "longitude": -122.4239971,
                            "speed": null
                        },
                        "timeZone": {
                            "ID": 4,
                            "timeZone": "America/Los_Angeles"
                        },
                        "userAgent": {
                            "ID": 59,
                            "userAgent": "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
                        }
                    }
                },
                {
                    "ID": 451075,
                    "content": "en gros si je le mets sur github",
                    "eventType": {
                        "ID": 3,
                        "name": "Message",
                        "type": "Message"
                    },
                    "source": {
                        "connection": {
                            "ID": 61307,
                            "IP": {
                                "ID": 1363,
                                "IP": "108.254.148.84"
                            },
                            "hostname": {
                                "ID": 1040,
                                "hostname": "108.254.148.84"
                            }
                        },
                        "datetime": "2014-05-22T05:52:55",
                        "entity": {
                            "ID": 4,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "atn"
                        },
                        "location": {
                            "ID": 43688,
                            "accuracy": 32,
                            "altitude": null,
                            "altitudeAccuracy": null,
                            "heading": null,
                            "latitude": 37.7928502,
                            "locationName": null,
                            "longitude": -122.4239971,
                            "speed": null
                        },
                        "timeZone": {
                            "ID": 4,
                            "timeZone": "America/Los_Angeles"
                        },
                        "userAgent": {
                            "ID": 59,
                            "userAgent": "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
                        }
                    }
                },
                {
                    "ID": 451076,
                    "content": "le code est totalement public",
                    "eventType": {
                        "ID": 3,
                        "name": "Message",
                        "type": "Message"
                    },
                    "source": {
                        "connection": {
                            "ID": 61308,
                            "IP": {
                                "ID": 1363,
                                "IP": "108.254.148.84"
                            },
                            "hostname": {
                                "ID": 1040,
                                "hostname": "108.254.148.84"
                            }
                        },
                        "datetime": "2014-05-22T05:52:58",
                        "entity": {
                            "ID": 4,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "atn"
                        },
                        "location": {
                            "ID": 43689,
                            "accuracy": 32,
                            "altitude": null,
                            "altitudeAccuracy": null,
                            "heading": null,
                            "latitude": 37.7928502,
                            "locationName": null,
                            "longitude": -122.4239971,
                            "speed": null
                        },
                        "timeZone": {
                            "ID": 4,
                            "timeZone": "America/Los_Angeles"
                        },
                        "userAgent": {
                            "ID": 59,
                            "userAgent": "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
                        }
                    }
                },
                {
                    "ID": 451077,
                    "content": "y'a bitbucket sinon...",
                    "eventType": {
                        "ID": 3,
                        "name": "Message",
                        "type": "Message"
                    },
                    "source": {
                        "connection": {
                            "ID": 61309,
                            "IP": {
                                "ID": 1363,
                                "IP": "108.254.148.84"
                            },
                            "hostname": {
                                "ID": 1040,
                                "hostname": "108.254.148.84"
                            }
                        },
                        "datetime": "2014-05-22T05:53:51",
                        "entity": {
                            "ID": 4,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "atn"
                        },
                        "location": {
                            "ID": 43690,
                            "accuracy": 32,
                            "altitude": null,
                            "altitudeAccuracy": null,
                            "heading": null,
                            "latitude": 37.7928502,
                            "locationName": null,
                            "longitude": -122.4239971,
                            "speed": null
                        },
                        "timeZone": {
                            "ID": 4,
                            "timeZone": "America/Los_Angeles"
                        },
                        "userAgent": {
                            "ID": 59,
                            "userAgent": "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
                        }
                    }
                },
                {
                    "ID": 451078,
                    "eventType": {
                        "ID": 6,
                        "name": "Session Pause",
                        "type": "SessionPause"
                    },
                    "source": {
                        "connection": null,
                        "datetime": "2014-05-22T06:09:49",
                        "entity": {
                            "ID": 5,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "frun"
                        },
                        "location": null,
                        "timeZone": null,
                        "userAgent": null
                    }
                },
                {
                    "ID": 451079,
                    "eventType": {
                        "ID": 7,
                        "name": "Session Resume",
                        "type": "SessionResume"
                    },
                    "source": {
                        "connection": {
                            "ID": 61310,
                            "IP": {
                                "ID": 169,
                                "IP": "202.89.121.17"
                            },
                            "hostname": {
                                "ID": 441,
                                "hostname": "202.89.121.17"
                            }
                        },
                        "datetime": "2014-05-22T06:12:18",
                        "entity": {
                            "ID": 5,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "frun"
                        },
                        "location": {
                            "ID": 43691,
                            "accuracy": 79,
                            "altitude": null,
                            "altitudeAccuracy": null,
                            "heading": null,
                            "latitude": 25.0576845,
                            "locationName": null,
                            "longitude": 121.61428,
                            "speed": null
                        },
                        "timeZone": {
                            "ID": 3,
                            "timeZone": "Asia/Shanghai"
                        },
                        "userAgent": {
                            "ID": 64,
                            "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/537.36"
                        }
                    }
                },
                {
                    "ID": 451079,
                    "content": "y'a bitbucket sinon...",
                    "eventType": {
                        "ID": 3,
                        "name": "Message",
                        "type": "Message"
                    },
                    "source": {
                        "connection": {
                            "ID": 61310,
                            "IP": {
                                "ID": 169,
                                "IP": "202.89.121.17"
                            },
                            "hostname": {
                                "ID": 441,
                                "hostname": "202.89.121.17"
                            }
                        },
                        "datetime": "2014-05-22T06:12:18",
                        "entity": {
                            "ID": 5,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "frun"
                        },
                        "location": {
                            "ID": 43691,
                            "accuracy": 79,
                            "altitude": null,
                            "altitudeAccuracy": null,
                            "heading": null,
                            "latitude": 25.0576845,
                            "locationName": null,
                            "longitude": 121.61428,
                            "speed": null
                        },
                        "timeZone": {
                            "ID": 3,
                            "timeZone": "Asia/Shanghai"
                        },
                        "userAgent": {
                            "ID": 64,
                            "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/537.36"
                        }
                    }
                },
                {
                    "ID": 451080,
                    "eventType": {
                        "ID": 4,
                        "name": "Session Start",
                        "type": "SessionStart"
                    },
                    "source": {
                        "connection": {
                            "ID": 61311,
                            "IP": {
                                "ID": 1363,
                                "IP": "108.254.148.84"
                            },
                            "hostname": {
                                "ID": 1040,
                                "hostname": "108.254.148.84"
                            }
                        },
                        "datetime": "2014-05-22T06:13:38",
                        "entity": {
                            "ID": 4,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "atn"
                        },
                        "location": {
                            "ID": 43692,
                            "accuracy": 34,
                            "altitude": null,
                            "altitudeAccuracy": null,
                            "heading": null,
                            "latitude": 37.7928223,
                            "locationName": null,
                            "longitude": -122.4239734,
                            "speed": null
                        },
                        "timeZone": {
                            "ID": 4,
                            "timeZone": "America/Los_Angeles"
                        },
                        "userAgent": {
                            "ID": 66,
                            "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/537.36"
                        }
                    }
                },
                {
                    "ID": 451077,
                    "status": "sending",
                    "content": "y'a bitbucket sinon...",
                    "eventType": {
                        "ID": 3,
                        "name": "Message",
                        "type": "Message"
                    },
                    "source": {
                        "connection": {
                            "ID": 61309,
                            "IP": {
                                "ID": 1363,
                                "IP": "108.254.148.84"
                            },
                            "hostname": {
                                "ID": 1040,
                                "hostname": "108.254.148.84"
                            }
                        },
                        "entity": {
                            "ID": 4,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "atn"
                        },
                        "location": {
                            "ID": 43690,
                            "accuracy": 32,
                            "altitude": null,
                            "altitudeAccuracy": null,
                            "heading": null,
                            "latitude": 37.7928502,
                            "locationName": null,
                            "longitude": -122.4239971,
                            "speed": null
                        },
                        "timeZone": {
                            "ID": 4,
                            "timeZone": "America/Los_Angeles"
                        },
                        "userAgent": {
                            "ID": 59,
                            "userAgent": "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
                        }
                    }
                },
                {
                    "ID": 451077,
                    "content": "y'a bitbucket sinon...",
                    "status": "error",
                    "eventType": {
                        "ID": 3,
                        "name": "Message",
                        "type": "Message"
                    },
                    "source": {
                        "connection": {
                            "ID": 61309,
                            "IP": {
                                "ID": 1363,
                                "IP": "108.254.148.84"
                            },
                            "hostname": {
                                "ID": 1040,
                                "hostname": "108.254.148.84"
                            }
                        },
                        "datetime": "2014-05-22T05:53:51",
                        "entity": {
                            "ID": 4,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "atn"
                        },
                        "location": {
                            "ID": 43690,
                            "accuracy": 32,
                            "altitude": null,
                            "altitudeAccuracy": null,
                            "heading": null,
                            "latitude": 37.7928502,
                            "locationName": null,
                            "longitude": -122.4239971,
                            "speed": null
                        },
                        "timeZone": {
                            "ID": 4,
                            "timeZone": "America/Los_Angeles"
                        },
                        "userAgent": {
                            "ID": 59,
                            "userAgent": "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
                        }
                    }
                },
                {
                    "ID": 451077,
                    "content": "y'a bitbucket sinon...",
                    "status": "error",
                    "eventType": {
                        "ID": 3,
                        "name": "Message",
                        "type": "Message"
                    },
                    "source": {
                        "connection": {
                            "ID": 61309,
                            "IP": {
                                "ID": 1363,
                                "IP": "108.254.148.84"
                            },
                            "hostname": {
                                "ID": 1040,
                                "hostname": "108.254.148.84"
                            }
                        },
                        "datetime": "2014-05-22T05:53:51",
                        "entity": {
                            "ID": 4,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "atn"
                        },
                        "location": {
                            "ID": 43690,
                            "accuracy": 32,
                            "altitude": null,
                            "altitudeAccuracy": null,
                            "heading": null,
                            "latitude": 37.7928502,
                            "locationName": null,
                            "longitude": -122.4239971,
                            "speed": null
                        },
                        "timeZone": {
                            "ID": 4,
                            "timeZone": "America/Los_Angeles"
                        },
                        "userAgent": {
                            "ID": 59,
                            "userAgent": "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
                        }
                    }
                }
            ],
            "userList": [
                {
                    "ID": 4,
                    "name": "atn",
                    "on": true,
                    "latestSource": {
                        "connection": {
                            "ID": 61309,
                            "IP": {
                                "ID": 1363,
                                "IP": "108.254.148.84"
                            },
                            "hostname": {
                                "ID": 1040,
                                "hostname": "108.254.148.84"
                            }
                        },
                        "datetime": "2014-05-22T05:53:51",
                        "entity": {
                            "ID": 4,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "atn"
                        },
                        "location": {
                            "ID": 43690,
                            "accuracy": 32,
                            "altitude": null,
                            "altitudeAccuracy": null,
                            "heading": null,
                            "latitude": 37.7928502,
                            "locationName": null,
                            "longitude": -122.4239971,
                            "speed": null
                        },
                        "timeZone": {
                            "ID": 4,
                            "timeZone": "America/Los_Angeles"
                        },
                        "userAgent": {
                            "ID": 59,
                            "userAgent": "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
                        }
                    }
                },
                {
                    "ID": 5,
                    "name": "frun",
                    "on": false,
                    "latestSource": {
                        "connection": {
                            "ID": 61310,
                            "IP": {
                                "ID": 169,
                                "IP": "202.89.121.17"
                            },
                            "hostname": {
                                "ID": 441,
                                "hostname": "202.89.121.17"
                            }
                        },
                        "datetime": "2014-05-22T06:12:18",
                        "entity": {
                            "ID": 5,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "frun"
                        },
                        "location": {
                            "ID": 43691,
                            "accuracy": 79,
                            "altitude": null,
                            "altitudeAccuracy": null,
                            "heading": null,
                            "latitude": 25.0576845,
                            "locationName": null,
                            "longitude": 121.61428,
                            "speed": null
                        },
                        "timeZone": {
                            "ID": 3,
                            "timeZone": "Asia/Shanghai"
                        },
                        "userAgent": {
                            "ID": 64,
                            "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/537.36"
                        }
                    }
                }
            ],
            "userListUpdated": true
        },
        {
            "chanID": 2,
            "events": [
                {
                    "ID": 451080,
                    "eventType": {
                        "ID": 4,
                        "name": "Session Start",
                        "type": "SessionStart"
                    },
                    "source": {
                        "connection": {
                            "ID": 61311,
                            "IP": {
                                "ID": 1363,
                                "IP": "108.254.148.84"
                            },
                            "hostname": {
                                "ID": 1040,
                                "hostname": "108.254.148.84"
                            }
                        },
                        "datetime": "2014-05-22T06:13:38",
                        "entity": {
                            "ID": 4,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "atn"
                        },
                        "location": {
                            "ID": 43692,
                            "accuracy": 34,
                            "altitude": null,
                            "altitudeAccuracy": null,
                            "heading": null,
                            "latitude": 37.7928223,
                            "locationName": null,
                            "longitude": -122.4239734,
                            "speed": null
                        },
                        "timeZone": {
                            "ID": 4,
                            "timeZone": "America/Los_Angeles"
                        },
                        "userAgent": {
                            "ID": 66,
                            "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/537.36"
                        }
                    }
                }
            ],
            "userList": [
                {
                    "ID": 4,
                    "name": "atn"
                }
            ],
            "userListUpdated": true
        },
        {
            "chanID": 3,
            "events": [
                {
                    "ID": 451080,
                    "eventType": {
                        "ID": 4,
                        "name": "Session Start",
                        "type": "SessionStart"
                    },
                    "source": {
                        "connection": {
                            "ID": 61311,
                            "IP": {
                                "ID": 1363,
                                "IP": "108.254.148.84"
                            },
                            "hostname": {
                                "ID": 1040,
                                "hostname": "108.254.148.84"
                            }
                        },
                        "datetime": "2014-05-22T06:13:38",
                        "entity": {
                            "ID": 4,
                            "entityType": {
                                "ID": 2,
                                "name": "User",
                                "type": "User"
                            },
                            "name": "atn"
                        },
                        "location": {
                            "ID": 43692,
                            "accuracy": 34,
                            "altitude": null,
                            "altitudeAccuracy": null,
                            "heading": null,
                            "latitude": 37.7928223,
                            "locationName": null,
                            "longitude": -122.4239734,
                            "speed": null
                        },
                        "timeZone": {
                            "ID": 4,
                            "timeZone": "America/Los_Angeles"
                        },
                        "userAgent": {
                            "ID": 66,
                            "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/537.36"
                        }
                    }
                }
            ],
            "userList": [
                {
                    "ID": 4,
                    "name": "atn"
                }
            ],
            "userListUpdated": true
        }
    ],
    "lastEventID": -1,
    "numMessages": -1,
    "token": "170135039",
    "userID": 4,
    "validResponse": true
};

for (var k in data.chanUpdates) {
    var oneChanUpdate = data.chanUpdates[k];
    oneChanUpdate.events.forEach(function(event) {
        if (event.source && event.source.datetime)
            event.source.datetime = moment.utc(event.source.datetime);
    });
}

var App = React.createClass({
    render: function() {
        return (
            <div className="d-f fd-r w-100 h-100">
                <div className="item f-1-0-0">
                    <LoginForm status="Could not login" error="some html error"/>
                </div>
                <div className="item f-1-0-0"><ChatApp staticData={data} nick="atn" chanName="Elysium" chanID={1} ref="chat"></ChatApp></div>
            </div>
        );
    }
});

React.renderComponent(
    <App />,
    document.body
);
