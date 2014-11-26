/** @jsx React.DOM */
"use strict";

import LoginForm from './components/loginform';
import ChatApp from './components/chatapp';
import setSourceInformation from "./io/source";

var data = {
    "chanList":[
       {
          "ID":2,
          "name":"de"
       },
       {
          "ID":3,
          "name":"df"
       },
       {
          "ID":1,
          "name":"Elysium"
       }
    ],
    "chanUpdates":[
       {
          "chanID":1,
          "events":[
             {
                "ID":451068,
                "content":"mais ce soir c'est la misère, http://fc04.deviantart.net/fs70/f/2013/314/d/e/banner_website_v03_by_davedonut-d6tpi0q.swf",
                "eventType":{
                   "ID":3,
                   "name":"Message",
                   "type":"Message"
                },
                "source":{
                   "connection":{
                      "ID":61300,
                      "IP":{
                         "ID":1363,
                         "IP":"108.254.148.84"
                      },
                      "hostname":{
                         "ID":1040,
                         "hostname":"108.254.148.84"
                      }
                   },
                   "datetime":"2014-05-22T05:38:53",
                   "entity":{
                      "ID":4,
                      "entityType":{
                         "ID":2,
                         "name":"User",
                         "type":"User"
                      },
                      "name":"atn"
                   },
                   "location":{
                      "ID":43681,
                      "accuracy":31.0,
                      "altitude":null,
                      "altitudeAccuracy":null,
                      "heading":null,
                      "latitude":37.792830699999996,
                      "locationName":null,
                      "longitude":-122.42401169999998,
                      "speed":null
                   },
                   "timeZone":{
                      "ID":4,
                      "timeZone":"America\/Los_Angeles"
                   },
                   "userAgent":{
                      "ID":59,
                      "userAgent":"Mozilla\/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build\/JOP40D) AppleWebKit\/535.19 (KHTML, like Gecko) Chrome\/18.0.1025.166 Mobile Safari\/535.19"
                   }
                }
             },
             {
                "ID":451068,
                "content":"http://upload.wikimedia.org/wikipedia/commons/9/94/Tamias_minimus.jpg",
                "eventType":{
                   "ID":3,
                   "name":"Message",
                   "type":"Message"
                },
                "source":{
                   "connection":{
                      "ID":61300,
                      "IP":{
                         "ID":1363,
                         "IP":"108.254.148.84"
                      },
                      "hostname":{
                         "ID":1040,
                         "hostname":"108.254.148.84"
                      }
                   },
                   "datetime":"2014-05-22T05:38:53",
                   "entity":{
                      "ID":4,
                      "entityType":{
                         "ID":2,
                         "name":"User",
                         "type":"User"
                      },
                      "name":"atn"
                   },
                   "location":{
                      "ID":43681,
                      "accuracy":31.0,
                      "altitude":null,
                      "altitudeAccuracy":null,
                      "heading":null,
                      "latitude":37.792830699999996,
                      "locationName":null,
                      "longitude":-122.42401169999998,
                      "speed":null
                   },
                   "timeZone":{
                      "ID":4,
                      "timeZone":"America\/Los_Angeles"
                   },
                   "userAgent":{
                      "ID":59,
                      "userAgent":"Mozilla\/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build\/JOP40D) AppleWebKit\/535.19 (KHTML, like Gecko) Chrome\/18.0.1025.166 Mobile Safari\/535.19"
                   }
                }
             },
             {
                "ID":451068,
                "content":"mais ce soir http://upload.wikimedia.org/wikipedia/commons/9/94/Tamias_minimus.jpg, c'est très bien. http://upload.wikimedia.org/wikipedia/commons/9/94/Tamias_minimus.jpg hehe",
                "eventType":{
                   "ID":3,
                   "name":"Message",
                   "type":"Message"
                },
                "source":{
                   "connection":{
                      "ID":61300,
                      "IP":{
                         "ID":1363,
                         "IP":"108.254.148.84"
                      },
                      "hostname":{
                         "ID":1040,
                         "hostname":"108.254.148.84"
                      }
                   },
                   "datetime":"2014-05-22T05:38:53",
                   "entity":{
                      "ID":4,
                      "entityType":{
                         "ID":2,
                         "name":"User",
                         "type":"User"
                      },
                      "name":"atn"
                   },
                   "location":{
                      "ID":43681,
                      "accuracy":31.0,
                      "altitude":null,
                      "altitudeAccuracy":null,
                      "heading":null,
                      "latitude":37.792830699999996,
                      "locationName":null,
                      "longitude":-122.42401169999998,
                      "speed":null
                   },
                   "timeZone":{
                      "ID":4,
                      "timeZone":"America\/Los_Angeles"
                   },
                   "userAgent":{
                      "ID":59,
                      "userAgent":"Mozilla\/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build\/JOP40D) AppleWebKit\/535.19 (KHTML, like Gecko) Chrome\/18.0.1025.166 Mobile Safari\/535.19"
                   }
                }
             },
             {
                "ID":451069,
                "content":"===",
                "eventType":{
                   "ID":3,
                   "name":"Message",
                   "type":"Message"
                },
                "source":{
                   "connection":{
                      "ID":61301,
                      "IP":{
                         "ID":1363,
                         "IP":"108.254.148.84"
                      },
                      "hostname":{
                         "ID":1040,
                         "hostname":"108.254.148.84"
                      }
                   },
                   "datetime":"2014-05-22T05:52:08",
                   "entity":{
                      "ID":4,
                      "entityType":{
                         "ID":2,
                         "name":"User",
                         "type":"User"
                      },
                      "name":"atn"
                   },
                   "location":{
                      "ID":43682,
                      "accuracy":32.0,
                      "altitude":null,
                      "altitudeAccuracy":null,
                      "heading":null,
                      "latitude":37.7928502,
                      "locationName":null,
                      "longitude":-122.4239971,
                      "speed":null
                   },
                   "timeZone":{
                      "ID":4,
                      "timeZone":"America\/Los_Angeles"
                   },
                   "userAgent":{
                      "ID":59,
                      "userAgent":"Mozilla\/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build\/JOP40D) AppleWebKit\/535.19 (KHTML, like Gecko) Chrome\/18.0.1025.166 Mobile Safari\/535.19"
                   }
                }
             },
             {
                "ID":451069,
                "eventType":{
                   "ID":10,
                },
                "source":{
                   "datetime":"2014-05-22T05:52:08",
                   "entity":{
                      "name":"Kronos"
                   }
                }
             },
             {
                "ID":451069,
                "eventType":{
                   "ID":11,
                },
                "source":{
                   "datetime":"2014-05-22T05:52:08",
                   "entity":{
                      "name":"Kronos"
                   }
                }
             },
             {
                "ID":451070,
                "content":"en fait",
                "eventType":{
                   "ID":3,
                   "name":"Message",
                   "type":"Message"
                },
                "source":{
                   "connection":{
                      "ID":61302,
                      "IP":{
                         "ID":1363,
                         "IP":"108.254.148.84"
                      },
                      "hostname":{
                         "ID":1040,
                         "hostname":"108.254.148.84"
                      }
                   },
                   "datetime":"2014-05-22T05:52:09",
                   "entity":{
                      "ID":4,
                      "entityType":{
                         "ID":2,
                         "name":"User",
                         "type":"User"
                      },
                      "name":"atn"
                   },
                   "location":{
                      "ID":43683,
                      "accuracy":32.0,
                      "altitude":null,
                      "altitudeAccuracy":null,
                      "heading":null,
                      "latitude":37.7928502,
                      "locationName":null,
                      "longitude":-122.4239971,
                      "speed":null
                   },
                   "timeZone":{
                      "ID":4,
                      "timeZone":"America\/Los_Angeles"
                   },
                   "userAgent":{
                      "ID":59,
                      "userAgent":"Mozilla\/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build\/JOP40D) AppleWebKit\/535.19 (KHTML, like Gecko) Chrome\/18.0.1025.166 Mobile Safari\/535.19"
                   }
                }
             },
             {
                "ID":451071,
                "content":"le client elysium",
                "eventType":{
                   "ID":3,
                   "name":"Message",
                   "type":"Message"
                },
                "source":{
                   "connection":{
                      "ID":61303,
                      "IP":{
                         "ID":1363,
                         "IP":"108.254.148.84"
                      },
                      "hostname":{
                         "ID":1040,
                         "hostname":"108.254.148.84"
                      }
                   },
                   "datetime":"2014-05-22T05:52:11",
                   "entity":{
                      "ID":4,
                      "entityType":{
                         "ID":2,
                         "name":"User",
                         "type":"User"
                      },
                      "name":"atn"
                   },
                   "location":{
                      "ID":43684,
                      "accuracy":32.0,
                      "altitude":null,
                      "altitudeAccuracy":null,
                      "heading":null,
                      "latitude":37.7928502,
                      "locationName":null,
                      "longitude":-122.4239971,
                      "speed":null
                   },
                   "timeZone":{
                      "ID":4,
                      "timeZone":"America\/Los_Angeles"
                   },
                   "userAgent":{
                      "ID":59,
                      "userAgent":"Mozilla\/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build\/JOP40D) AppleWebKit\/535.19 (KHTML, like Gecko) Chrome\/18.0.1025.166 Mobile Safari\/535.19"
                   }
                }
             },
             {
                "ID":451072,
                "content":"je pourrais le refaire en standalone",
                "eventType":{
                   "ID":3,
                   "name":"Message",
                   "type":"Message"
                },
                "source":{
                   "connection":{
                      "ID":61304,
                      "IP":{
                         "ID":1363,
                         "IP":"108.254.148.84"
                      },
                      "hostname":{
                         "ID":1040,
                         "hostname":"108.254.148.84"
                      }
                   },
                   "datetime":"2014-05-22T05:52:14",
                   "entity":{
                      "ID":4,
                      "entityType":{
                         "ID":2,
                         "name":"User",
                         "type":"User"
                      },
                      "name":"atn"
                   },
                   "location":{
                      "ID":43685,
                      "accuracy":32.0,
                      "altitude":null,
                      "altitudeAccuracy":null,
                      "heading":null,
                      "latitude":37.7928502,
                      "locationName":null,
                      "longitude":-122.4239971,
                      "speed":null
                   },
                   "timeZone":{
                      "ID":4,
                      "timeZone":"America\/Los_Angeles"
                   },
                   "userAgent":{
                      "ID":59,
                      "userAgent":"Mozilla\/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build\/JOP40D) AppleWebKit\/535.19 (KHTML, like Gecko) Chrome\/18.0.1025.166 Mobile Safari\/535.19"
                   }
                }
             },
             {
                "ID":451073,
                "content":"sur github",
                "eventType":{
                   "ID":3,
                   "name":"Message",
                   "type":"Message"
                },
                "source":{
                   "connection":{
                      "ID":61305,
                      "IP":{
                         "ID":1363,
                         "IP":"108.254.148.84"
                      },
                      "hostname":{
                         "ID":1040,
                         "hostname":"108.254.148.84"
                      }
                   },
                   "datetime":"2014-05-22T05:52:15",
                   "entity":{
                      "ID":4,
                      "entityType":{
                         "ID":2,
                         "name":"User",
                         "type":"User"
                      },
                      "name":"atn"
                   },
                   "location":{
                      "ID":43686,
                      "accuracy":32.0,
                      "altitude":null,
                      "altitudeAccuracy":null,
                      "heading":null,
                      "latitude":37.7928502,
                      "locationName":null,
                      "longitude":-122.4239971,
                      "speed":null
                   },
                   "timeZone":{
                      "ID":4,
                      "timeZone":"America\/Los_Angeles"
                   },
                   "userAgent":{
                      "ID":59,
                      "userAgent":"Mozilla\/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build\/JOP40D) AppleWebKit\/535.19 (KHTML, like Gecko) Chrome\/18.0.1025.166 Mobile Safari\/535.19"
                   }
                }
             },
             {
                "ID":451074,
                "content":"github ou pas github",
                "eventType":{
                   "ID":3,
                   "name":"Message",
                   "type":"Message"
                },
                "source":{
                   "connection":{
                      "ID":61306,
                      "IP":{
                         "ID":1363,
                         "IP":"108.254.148.84"
                      },
                      "hostname":{
                         "ID":1040,
                         "hostname":"108.254.148.84"
                      }
                   },
                   "datetime":"2014-05-22T05:52:52",
                   "entity":{
                      "ID":4,
                      "entityType":{
                         "ID":2,
                         "name":"User",
                         "type":"User"
                      },
                      "name":"atn"
                   },
                   "location":{
                      "ID":43687,
                      "accuracy":32.0,
                      "altitude":null,
                      "altitudeAccuracy":null,
                      "heading":null,
                      "latitude":37.7928502,
                      "locationName":null,
                      "longitude":-122.4239971,
                      "speed":null
                   },
                   "timeZone":{
                      "ID":4,
                      "timeZone":"America\/Los_Angeles"
                   },
                   "userAgent":{
                      "ID":59,
                      "userAgent":"Mozilla\/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build\/JOP40D) AppleWebKit\/535.19 (KHTML, like Gecko) Chrome\/18.0.1025.166 Mobile Safari\/535.19"
                   }
                }
             },
             {
                "ID":451075,
                "content":"en gros si je le mets sur github",
                "eventType":{
                   "ID":3,
                   "name":"Message",
                   "type":"Message"
                },
                "source":{
                   "connection":{
                      "ID":61307,
                      "IP":{
                         "ID":1363,
                         "IP":"108.254.148.84"
                      },
                      "hostname":{
                         "ID":1040,
                         "hostname":"108.254.148.84"
                      }
                   },
                   "datetime":"2014-05-22T05:52:55",
                   "entity":{
                      "ID":4,
                      "entityType":{
                         "ID":2,
                         "name":"User",
                         "type":"User"
                      },
                      "name":"atn"
                   },
                   "location":{
                      "ID":43688,
                      "accuracy":32.0,
                      "altitude":null,
                      "altitudeAccuracy":null,
                      "heading":null,
                      "latitude":37.7928502,
                      "locationName":null,
                      "longitude":-122.4239971,
                      "speed":null
                   },
                   "timeZone":{
                      "ID":4,
                      "timeZone":"America\/Los_Angeles"
                   },
                   "userAgent":{
                      "ID":59,
                      "userAgent":"Mozilla\/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build\/JOP40D) AppleWebKit\/535.19 (KHTML, like Gecko) Chrome\/18.0.1025.166 Mobile Safari\/535.19"
                   }
                }
             },
             {
                "ID":451076,
                "content":"le code est totalement public",
                "eventType":{
                   "ID":3,
                   "name":"Message",
                   "type":"Message"
                },
                "source":{
                   "connection":{
                      "ID":61308,
                      "IP":{
                         "ID":1363,
                         "IP":"108.254.148.84"
                      },
                      "hostname":{
                         "ID":1040,
                         "hostname":"108.254.148.84"
                      }
                   },
                   "datetime":"2014-05-22T05:52:58",
                   "entity":{
                      "ID":4,
                      "entityType":{
                         "ID":2,
                         "name":"User",
                         "type":"User"
                      },
                      "name":"atn"
                   },
                   "location":{
                      "ID":43689,
                      "accuracy":32.0,
                      "altitude":null,
                      "altitudeAccuracy":null,
                      "heading":null,
                      "latitude":37.7928502,
                      "locationName":null,
                      "longitude":-122.4239971,
                      "speed":null
                   },
                   "timeZone":{
                      "ID":4,
                      "timeZone":"America\/Los_Angeles"
                   },
                   "userAgent":{
                      "ID":59,
                      "userAgent":"Mozilla\/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build\/JOP40D) AppleWebKit\/535.19 (KHTML, like Gecko) Chrome\/18.0.1025.166 Mobile Safari\/535.19"
                   }
                }
             },
             {
                "ID":451077,
                "content":"y'a bitbucket sinon...",
                "eventType":{
                   "ID":3,
                   "name":"Message",
                   "type":"Message"
                },
                "source":{
                   "connection":{
                      "ID":61309,
                      "IP":{
                         "ID":1363,
                         "IP":"108.254.148.84"
                      },
                      "hostname":{
                         "ID":1040,
                         "hostname":"108.254.148.84"
                      }
                   },
                   "datetime":"2014-05-22T05:53:51",
                   "entity":{
                      "ID":4,
                      "entityType":{
                         "ID":2,
                         "name":"User",
                         "type":"User"
                      },
                      "name":"atn"
                   },
                   "location":{
                      "ID":43690,
                      "accuracy":32.0,
                      "altitude":null,
                      "altitudeAccuracy":null,
                      "heading":null,
                      "latitude":37.7928502,
                      "locationName":null,
                      "longitude":-122.4239971,
                      "speed":null
                   },
                   "timeZone":{
                      "ID":4,
                      "timeZone":"America\/Los_Angeles"
                   },
                   "userAgent":{
                      "ID":59,
                      "userAgent":"Mozilla\/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build\/JOP40D) AppleWebKit\/535.19 (KHTML, like Gecko) Chrome\/18.0.1025.166 Mobile Safari\/535.19"
                   }
                }
             },
             {
                "ID":451078,
                "eventType":{
                   "ID":6,
                   "name":"Session Pause",
                   "type":"SessionPause"
                },
                "source":{
                   "connection":null,
                   "datetime":"2014-05-22T06:09:49",
                   "entity":{
                      "ID":5,
                      "entityType":{
                         "ID":2,
                         "name":"User",
                         "type":"User"
                      },
                      "name":"frun"
                   },
                   "location":null,
                   "timeZone":null,
                   "userAgent":null
                }
             },
             {
                "ID":451079,
                "eventType":{
                   "ID":7,
                   "name":"Session Resume",
                   "type":"SessionResume"
                },
                "source":{
                   "connection":{
                      "ID":61310,
                      "IP":{
                         "ID":169,
                         "IP":"202.89.121.17"
                      },
                      "hostname":{
                         "ID":441,
                         "hostname":"202.89.121.17"
                      }
                   },
                   "datetime":"2014-05-22T06:12:18",
                   "entity":{
                      "ID":5,
                      "entityType":{
                         "ID":2,
                         "name":"User",
                         "type":"User"
                      },
                      "name":"frun"
                   },
                   "location":{
                      "ID":43691,
                      "accuracy":79.0,
                      "altitude":null,
                      "altitudeAccuracy":null,
                      "heading":null,
                      "latitude":25.0576845,
                      "locationName":null,
                      "longitude":121.61428,
                      "speed":null
                   },
                   "timeZone":{
                      "ID":3,
                      "timeZone":"Asia\/Shanghai"
                   },
                   "userAgent":{
                      "ID":64,
                      "userAgent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/34.0.1847.137 Safari\/537.36"
                   }
                }
             },
             {
                "ID":451079,
                "content":"y'a bitbucket sinon...",
                "eventType":{
                   "ID":3,
                   "name":"Message",
                   "type":"Message"
                },
                "source":{
                   "connection":{
                      "ID":61310,
                      "IP":{
                         "ID":169,
                         "IP":"202.89.121.17"
                      },
                      "hostname":{
                         "ID":441,
                         "hostname":"202.89.121.17"
                      }
                   },
                   "datetime":"2014-05-22T06:12:18",
                   "entity":{
                      "ID":5,
                      "entityType":{
                         "ID":2,
                         "name":"User",
                         "type":"User"
                      },
                      "name":"frun"
                   },
                   "location":{
                      "ID":43691,
                      "accuracy":79.0,
                      "altitude":null,
                      "altitudeAccuracy":null,
                      "heading":null,
                      "latitude":25.0576845,
                      "locationName":null,
                      "longitude":121.61428,
                      "speed":null
                   },
                   "timeZone":{
                      "ID":3,
                      "timeZone":"Asia\/Shanghai"
                   },
                   "userAgent":{
                      "ID":64,
                      "userAgent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/34.0.1847.137 Safari\/537.36"
                   }
                }
             },
             {
                "ID":451080,
                "eventType":{
                   "ID":4,
                   "name":"Session Start",
                   "type":"SessionStart"
                },
                "source":{
                   "connection":{
                      "ID":61311,
                      "IP":{
                         "ID":1363,
                         "IP":"108.254.148.84"
                      },
                      "hostname":{
                         "ID":1040,
                         "hostname":"108.254.148.84"
                      }
                   },
                   "datetime":"2014-05-22T06:13:38",
                   "entity":{
                      "ID":4,
                      "entityType":{
                         "ID":2,
                         "name":"User",
                         "type":"User"
                      },
                      "name":"atn"
                   },
                   "location":{
                      "ID":43692,
                      "accuracy":34.0,
                      "altitude":null,
                      "altitudeAccuracy":null,
                      "heading":null,
                      "latitude":37.7928223,
                      "locationName":null,
                      "longitude":-122.4239734,
                      "speed":null
                   },
                   "timeZone":{
                      "ID":4,
                      "timeZone":"America\/Los_Angeles"
                   },
                   "userAgent":{
                      "ID":66,
                      "userAgent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/34.0.1847.137 Safari\/537.36"
                   }
                }
             },
             {
                "ID":451077,
                "status": "sending",
                "content":"y'a bitbucket sinon...",
                "eventType":{
                   "ID":3,
                   "name":"Message",
                   "type":"Message"
                },
                "source":{
                   "connection":{
                      "ID":61309,
                      "IP":{
                         "ID":1363,
                         "IP":"108.254.148.84"
                      },
                      "hostname":{
                         "ID":1040,
                         "hostname":"108.254.148.84"
                      }
                   },
                   "entity":{
                      "ID":4,
                      "entityType":{
                         "ID":2,
                         "name":"User",
                         "type":"User"
                      },
                      "name":"atn"
                   },
                   "location":{
                      "ID":43690,
                      "accuracy":32.0,
                      "altitude":null,
                      "altitudeAccuracy":null,
                      "heading":null,
                      "latitude":37.7928502,
                      "locationName":null,
                      "longitude":-122.4239971,
                      "speed":null
                   },
                   "timeZone":{
                      "ID":4,
                      "timeZone":"America\/Los_Angeles"
                   },
                   "userAgent":{
                      "ID":59,
                      "userAgent":"Mozilla\/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build\/JOP40D) AppleWebKit\/535.19 (KHTML, like Gecko) Chrome\/18.0.1025.166 Mobile Safari\/535.19"
                   }
                }
             },
             {
                "ID":451077,
                "content":"y'a bitbucket sinon...",
                "status": "error",
                "eventType":{
                   "ID":3,
                   "name":"Message",
                   "type":"Message"
                },
                "source":{
                   "connection":{
                      "ID":61309,
                      "IP":{
                         "ID":1363,
                         "IP":"108.254.148.84"
                      },
                      "hostname":{
                         "ID":1040,
                         "hostname":"108.254.148.84"
                      }
                   },
                   "datetime":"2014-05-22T05:53:51",
                   "entity":{
                      "ID":4,
                      "entityType":{
                         "ID":2,
                         "name":"User",
                         "type":"User"
                      },
                      "name":"atn"
                   },
                   "location":{
                      "ID":43690,
                      "accuracy":32.0,
                      "altitude":null,
                      "altitudeAccuracy":null,
                      "heading":null,
                      "latitude":37.7928502,
                      "locationName":null,
                      "longitude":-122.4239971,
                      "speed":null
                   },
                   "timeZone":{
                      "ID":4,
                      "timeZone":"America\/Los_Angeles"
                   },
                   "userAgent":{
                      "ID":59,
                      "userAgent":"Mozilla\/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build\/JOP40D) AppleWebKit\/535.19 (KHTML, like Gecko) Chrome\/18.0.1025.166 Mobile Safari\/535.19"
                   }
                }
             },
             {
                "ID":451077,
                "content":"y'a bitbucket sinon...",
                "status": "error",
                "eventType":{
                   "ID":3,
                   "name":"Message",
                   "type":"Message"
                },
                "source":{
                   "connection":{
                      "ID":61309,
                      "IP":{
                         "ID":1363,
                         "IP":"108.254.148.84"
                      },
                      "hostname":{
                         "ID":1040,
                         "hostname":"108.254.148.84"
                      }
                   },
                   "datetime":"2014-05-22T05:53:51",
                   "entity":{
                      "ID":4,
                      "entityType":{
                         "ID":2,
                         "name":"User",
                         "type":"User"
                      },
                      "name":"atn"
                   },
                   "location":{
                      "ID":43690,
                      "accuracy":32.0,
                      "altitude":null,
                      "altitudeAccuracy":null,
                      "heading":null,
                      "latitude":37.7928502,
                      "locationName":null,
                      "longitude":-122.4239971,
                      "speed":null
                   },
                   "timeZone":{
                      "ID":4,
                      "timeZone":"America\/Los_Angeles"
                   },
                   "userAgent":{
                      "ID":59,
                      "userAgent":"Mozilla\/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build\/JOP40D) AppleWebKit\/535.19 (KHTML, like Gecko) Chrome\/18.0.1025.166 Mobile Safari\/535.19"
                   }
                }
             },
          ],
          "userList":[
             {
                "ID":4,
                "name":"atn"
             },
             {
                "ID":5,
                "name":"frun"
             }
          ],
          "userListUpdated":true
       },
       {
          "chanID":2,
          "events":[
             {
                "ID":451080,
                "eventType":{
                   "ID":4,
                   "name":"Session Start",
                   "type":"SessionStart"
                },
                "source":{
                   "connection":{
                      "ID":61311,
                      "IP":{
                         "ID":1363,
                         "IP":"108.254.148.84"
                      },
                      "hostname":{
                         "ID":1040,
                         "hostname":"108.254.148.84"
                      }
                   },
                   "datetime":"2014-05-22T06:13:38",
                   "entity":{
                      "ID":4,
                      "entityType":{
                         "ID":2,
                         "name":"User",
                         "type":"User"
                      },
                      "name":"atn"
                   },
                   "location":{
                      "ID":43692,
                      "accuracy":34.0,
                      "altitude":null,
                      "altitudeAccuracy":null,
                      "heading":null,
                      "latitude":37.7928223,
                      "locationName":null,
                      "longitude":-122.4239734,
                      "speed":null
                   },
                   "timeZone":{
                      "ID":4,
                      "timeZone":"America\/Los_Angeles"
                   },
                   "userAgent":{
                      "ID":66,
                      "userAgent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/34.0.1847.137 Safari\/537.36"
                   }
                }
             }
          ],
          "userList":[
             {
                "ID":4,
                "name":"atn"
             }
          ],
          "userListUpdated":true
       },
       {
          "chanID":3,
          "events":[
             {
                "ID":451080,
                "eventType":{
                   "ID":4,
                   "name":"Session Start",
                   "type":"SessionStart"
                },
                "source":{
                   "connection":{
                      "ID":61311,
                      "IP":{
                         "ID":1363,
                         "IP":"108.254.148.84"
                      },
                      "hostname":{
                         "ID":1040,
                         "hostname":"108.254.148.84"
                      }
                   },
                   "datetime":"2014-05-22T06:13:38",
                   "entity":{
                      "ID":4,
                      "entityType":{
                         "ID":2,
                         "name":"User",
                         "type":"User"
                      },
                      "name":"atn"
                   },
                   "location":{
                      "ID":43692,
                      "accuracy":34.0,
                      "altitude":null,
                      "altitudeAccuracy":null,
                      "heading":null,
                      "latitude":37.7928223,
                      "locationName":null,
                      "longitude":-122.4239734,
                      "speed":null
                   },
                   "timeZone":{
                      "ID":4,
                      "timeZone":"America\/Los_Angeles"
                   },
                   "userAgent":{
                      "ID":66,
                      "userAgent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/34.0.1847.137 Safari\/537.36"
                   }
                }
             }
          ],
          "userList": [
             {
                "ID":4,
                "name":"atn"
             }
          ],
          "userListUpdated":true
       }
    ],
    "lastEventID":-1,
    "numMessages":-1,
    "token":"170135039",
    "userID":4,
    "validResponse":true
};

var LastUserNickKey = "lastUserNick";

var App = React.createClass({
    getInitialState: function() {
        return {
        };
    },
    setCookie: function(c_name, value, exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
        document.cookie = c_name + "=" + c_value;
    },
    getCookie: function(c_name) {
        var i, x, y, ARRcookies = document.cookie.split(";");
        for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g,"");
            if (x == c_name) {
                return unescape(y);
            }
        }
    },
    exitFunction: function() {
        var data = getSourceInformation();
        $.ajax({
            url:"logout.action",
            data: data,
            async: false
        });
    },
    submitLoginInfo: function(channel, password, login) {
        this.setState({
            status: "logging in"
        });
//        $(formFrame).hide();
//        $("#errordiv").text("");

        this.setCookie(LastUserNickKey, login, 365);

        var data = {
            sid: Math.random(), // for IE
            "channel.name": channel,
            "channel.password": password,
            "user.name": login
        };
        
        setSourceInformation(data);

        $.getJSON("login.action", data)
            .success(function(data, textStatus, jqXHR) { this.submitLoginInfoSuccess(data); }.bind(this))
            .error(function(jqXHR, status, error) { this.submitLoginInfoError(jqXHR); }.bind(this));

        // put the focus to the text box by default.
        // useful when clicking somewhere on the window to put focus on the Elysium window
//        $(window).mouseup(function() {
//            $(textBox).focus();
//        });

//        $(textBox).keydown(function(event) {
//            if (event.keyCode == VK_RETURN) {
//                sendMessage();
//            }
//        });
    },
    submitLoginInfoError: function(jqxhr) {
        this.setState({
            status: "Could not login. Request failed"
        });
        this.setState({
            error: jqxhr.responseText
        });
//        $(txtLogin).focus();
    },
    submitLoginInfoSuccess: function(data) {
        if (data.invalidLoginMessage) {
            setChatStatus("Could not login: " + $(this).attr("reason"));
            $(formFrame).show();
        }
        else {
            setChatStatus("");
            nick = data.user.name;
            userid = data.user.ID;
            chanID = data.channel.ID;
            token = data.token;
            loggedin = true;
            loadChatClient();
        }
    },
    render: function() {
        return (
            <div className="row">
                <div className="item">
                    <div className="container" style={{"justify-content": "center"}}>
                        <LoginForm onLogin={this.submitLoginInfo} status={this.state.status} error={this.state.error}/>
                    </div>
                </div>
                <div className="item"><ChatApp data={data} ref="chat"></ChatApp></div>
                <div className="item"><ChatApp></ChatApp></div>
            </div>
        );
    }
});

React.renderComponent(
    <App />,
    document.body
);

// $.getJSON("https://m.wafrat.com/E/login.action?sid=0.5324193357955664&token=&userID=&timeZone=America%2FLos_Angeles&userAgent=Mozilla%2F5.0+(Macintosh%3B+Intel+Mac+OS+X+10_9_4)+AppleWebKit%2F537.36+(KHTML%2C+like+Gecko)+Chrome%2F37.0.2062.94+Safari%2F537.36&location.accuracy=53&location.latitude=37.4175286&location.longitude=-122.02531750000001&channel.name=Elysium&channel.password=&user.name=atn")
//   .success(function(data, textStatus, jqXHR) { console.log("success", data); })
//   .error(function(jqXHR, status, error) { console.log("failure", status, error); });
