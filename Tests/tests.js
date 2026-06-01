// USEF 2023 Dressage Tests — data
// Structure: LEVELS[] → { id, name, tests[] } → { id, name, detail, pdf, purpose, movements[] }
// A movement: { marker, text, directive, parts? }
//   - marker: arena letter(s); "/" separates sub-markers that pair with sentences in `text`
//   - parts: optional explicit sentence split when auto-split by "." doesn't pair cleanly

const LEVELS = [
  {
    id: 'training',
    name: 'Training Level',
    tests: [
      {
        id: 'training1',
        name: 'Training Level · Test 1',
        detail: '13 movements · 260 pts',
        pdf: 'Tests/2023Training1-4.7.pdf',
        purpose: 'Confirm correct basics: suppleness laterally and longitudinally, moving freely forward in a clear rhythm with steady tempo, readily accepting contact. Correct geometry and lines of travel.',
        movements: [
          { marker:"A / X",               text:"Enter working trot. Halt, salute. Proceed working trot.",                        parts:["Enter working trot.", "Halt, salute. Proceed working trot."],          directive:"Regularity and quality of trot; willing calm transitions; straightness; attentiveness; immobility (min. 3 sec)." },
          { marker:"C / E",               text:"Track left. Circle left 20m.",                                                                                                                  directive:"Regularity and quality of trot; shape and size of circle; bend; balance." },
          { marker:"A",                   text:"Circle left 20m, developing left lead canter in the first quarter of circle.",                                                                   directive:"Willing calm transition; regularity and quality of gaits; shape and size of circle; bend; balance." },
          { marker:"A–F–B",               text:"Working canter.",                                                                                                                               directive:"Regularity and quality of canter; bend and balance in corner; straightness." },
          { marker:"Between B & M",       text:"Working trot.",                                                                                                                                 directive:"Willing calm transition; regularity and quality of gaits; straightness; bend and balance in corner." },
          { marker:"Between C & H",       text:"Medium walk.",                                                                                                                                  directive:"Willing calm transition; regularity, quality, bend and balance in corner." },
          { marker:"E–F",                 text:"Change rein, free walk.",                                                                                                                       directive:"Regularity and quality of walks; reach, overtrack, and ground cover of free walk allowing complete freedom to stretch the neck forward and downward; straightness; willing calm transitions." },
          { marker:"F",                   text:"Medium walk.",                                                                                                                                  directive:"Willing calm transition; regularity and quality of walk." },
          { marker:"A",                   text:"Working trot.",                                                                                                                                 directive:"Willing calm transition; regularity and quality of trot; bend and balance in corner; straightness." },
          { marker:"E",                   text:"Circle right 20m.",                                                                                                                             directive:"Regularity and quality of trot; shape and size of circle; bend; balance." },
          { marker:"C",                   text:"Circle right 20m, developing right lead canter in the first quarter of circle.",                                                                 directive:"Willing calm transition; regularity and quality of gaits; shape and size of circle; bend; balance." },
          { marker:"C–M–B",               text:"Working canter.",                                                                                                                               directive:"Regularity and quality of canter; bend and balance in corner; straightness." },
          { marker:"Between B & F / A / X", text:"Working trot. Down centerline. Halt, salute.",                                                                                               directive:"Willing calm transition; bend and balance in turn; regularity and quality of trot; straightness; attentiveness; immobility (min. 3 sec). Leave arena at A in free walk." }
        ]
      },
      {
        id: 'training2',
        name: 'Training Level · Test 2',
        detail: '16 movements · 290 pts',
        pdf: 'Tests/2023Training2-4.7.pdf',
        purpose: 'Confirm correct basics: suppleness laterally and longitudinally, moving freely forward in a clear rhythm with steady tempo, readily accepting contact. Correct geometry and lines of travel. Introduces stretch circle in trot.',
        movements: [
          { marker:"A / X",               text:"Enter working trot. Halt, salute. Proceed working trot.",                        parts:["Enter working trot.", "Halt, salute. Proceed working trot."],          directive:"Regularity and quality of trot; willing calm transitions; straightness; attentiveness; immobility (min. 3 sec)." },
          { marker:"C / B",               text:"Track right. Circle right 20m.",                                                                                                               directive:"Regularity and quality of trot; shape and size of circle; bend and balance." },
          { marker:"K–X–M",               text:"Change rein.",                                                                                                                                  directive:"Regularity and quality of trot; straightness; bend and balance in corner." },
          { marker:"Between C & H",       text:"Working canter left lead.",                                                                                                                     directive:"Willing calm transition; regularity and quality of gaits; bend and balance in corner; straightness." },
          { marker:"E",                   text:"Circle left 20m.",                                                                                                                              directive:"Regularity and quality of canter; shape and size of circle; bend; balance." },
          { marker:"Between E & K",       text:"Working trot.",                                                                                                                                 directive:"Willing calm transition; regularity and quality of gaits; straightness; bend and balance in corner." },
          { marker:"A",                   text:"Circle left 20m in rising trot, allowing the horse to stretch forward and downward while maintaining contact. Before A, shorten the reins. Working trot.", directive:"Forward and downward stretch over the back into a light contact, maintaining balance and quality of trot; bend; shape and size of circle; willing calm transitions." },
          { marker:"F / F–E",             text:"Medium walk. Change rein, medium walk.",                                                                                                        directive:"Willing calm transition; regularity, overtrack, and quality of walk." },
          { marker:"E–M / M",             text:"Change rein, free walk. Medium walk.",                                                                                                          directive:"Regularity and quality of walks; reach, overtrack, and ground cover of free walk allowing complete freedom to stretch the neck forward and downward; straightness; willing calm transitions." },
          { marker:"C",                   text:"Working trot.",                                                                                                                                 directive:"Willing calm transition; regularity and quality of trot; bend and balance in corner; straightness." },
          { marker:"E",                   text:"Circle left 20m.",                                                                                                                              directive:"Regularity and quality of trot; shape and size of circle; bend; balance." },
          { marker:"F–X–H",               text:"Change rein.",                                                                                                                                  directive:"Regularity and quality of trot; straightness; bend and balance in corner." },
          { marker:"Between C & M",       text:"Working canter right lead.",                                                                                                                    directive:"Willing calm transition; regularity and quality of gaits; bend and balance in corner; straightness." },
          { marker:"B",                   text:"Circle right 20m.",                                                                                                                             directive:"Regularity and quality of canter; shape and size of circle; bend; balance." },
          { marker:"Between B & F",       text:"Working trot.",                                                                                                                                 directive:"Willing calm transition; regularity and quality of gaits; straightness; bend and balance in corner." },
          { marker:"A / X",               text:"Down centerline. Halt, salute.",                                                                                                               directive:"Bend and balance in turn; regularity and quality of trot; willing calm transition; straightness; attentiveness; immobility (min. 3 sec). Leave arena at A in free walk." }
        ]
      },
      {
        id: 'training3',
        name: 'Training Level · Test 3',
        detail: '13 movements · 250 pts',
        pdf: 'Tests/2023Training3-4.7.pdf',
        purpose: 'Confirm correct basics: suppleness laterally and longitudinally, moving freely forward in a clear rhythm with steady tempo, readily accepting contact. Introduces changing of bend on a shallow loop and canter-trot transition on the diagonal.',
        movements: [
          { marker:"A / X",           text:"Enter working trot. Halt, salute. Proceed working trot.",                                              parts:["Enter working trot.", "Halt, salute. Proceed working trot."],  directive:"Regularity and quality of trot; willing calm transitions; straightness; attentiveness; immobility (min. 3 sec)." },
          { marker:"C / H–X–K",       text:"Track left. Slightly after H, begin a single loop to X returning to the track slightly before K.",     directive:"Regularity and quality of trot; bend and balance in turns; shape and size of loop; changes of bend; balance." },
          { marker:"Between A & F",   text:"Working canter left lead.",                                                                            directive:"Willing calm transition; regularity and quality of gaits; bend in corner; straightness." },
          { marker:"B",               text:"Circle left 20m.",                                                                                     directive:"Regularity and quality of canter; shape and size of circle; bend; balance." },
          { marker:"H–X–F / X",       text:"Change rein. Working trot.",                                                                          directive:"Regularity and quality of gaits; willing calm transition; straightness; bend in corner." },
          { marker:"A",               text:"Medium walk.",                                                                                         directive:"Willing calm transition; regularity, quality." },
          { marker:"K–X–H / H",       text:"Free walk. Medium walk.",                                                                             directive:"Regularity and quality of walks; reach, overtrack, and ground cover of free walk allowing complete freedom to stretch the neck forward and downward; straightness; willing calm transitions." },
          { marker:"C / M–X–F",       text:"Working trot. Slightly after M, begin a single loop to X returning to the track slightly before F.",   directive:"Regularity and quality of trot; shape and size of loop; changes of bend and balance." },
          { marker:"Between A & K",   text:"Working canter right lead.",                                                                          directive:"Willing calm transition; regularity and quality of gaits; bend and balance in corner; straightness." },
          { marker:"E",               text:"Circle right 20m.",                                                                                    directive:"Regularity and quality of canter; shape and size of circle; bend; balance." },
          { marker:"C",               text:"Working trot.",                                                                                        directive:"Willing calm transition; regularity and quality of trot." },
          { marker:"B",               text:"Circle right 20m in rising trot, allowing the horse to stretch forward and downward. Before B, shorten the reins. Working trot.", directive:"Forward and downward stretch over the back into a light contact, maintaining balance and quality of trot; bend; shape and size of circle; willing calm transitions." },
          { marker:"A / X",           text:"Down centerline. Halt, salute.",                                                                      directive:"Bend and balance in turn; regularity and quality of trot; willing calm transition; straight, attentive halt; immobile (min. 3 sec). Leave arena at A in free walk." }
        ]
      }
    ]
  },
  {
    id: 'first',
    name: 'First Level',
    tests: [
      {
        id: 'first1',
        name: 'First Level · Test 1',
        detail: '15 movements · 270 pts',
        pdf: 'Tests/2023FirstLevel1-4.12.pdf',
        purpose: 'In addition to Training Level requirements, confirm improved balance, lateral suppleness and throughness, and the thrust to perform lengthenings of stride. The horse should be on the bit. Includes 10m half circle at trot, 15m circle in canter, and lengthening of stride in trot.',
        movements: [
          { marker:"A / X",     text:"Enter working trot. Halt, salute. Proceed working trot.", parts:["Enter working trot.", "Halt, salute. Proceed working trot."], directive:"Regularity and quality of trot; willing, clear transitions; straightness; attentiveness; immobility (min. 3 sec)." },
          { marker:"C / E–X",   text:"Track left. Half circle left 10m, returning to track at H.",                                                directive:"Regularity and quality of trot; shape and size of half circle; bend; balance; straightness." },
          { marker:"B–X",       text:"Half circle right 10m, returning to track at M.",                                                           directive:"Regularity and quality of trot; shape and size of half circle; bend; balance; straightness." },
          { marker:"C",         text:"Circle left 20m in rising trot, allowing the horse to stretch forward and downward while maintaining contact. Before C, shorten the reins. Working trot.", directive:"Forward and downward stretch over the back into a light contact, maintaining balance and quality of trot; bend; shape and size of circle; willing, clear transitions." },
          { marker:"H–P / P",   text:"Change rein, lengthen stride in trot. Working trot.",                                                       directive:"Moderate lengthening of frame and stride; regularity and quality of trot; straightness; consistent tempo; willing, clear transitions; bend and balance in corner." },
          { marker:"A",         text:"Medium walk.",                                                                                              directive:"Willing, clear transition; regularity, quality, overtrack; bend and balance in corner; straightness." },
          { marker:"V–R / R",   text:"Change rein, free walk. Medium walk.",                                                                      directive:"Regularity and quality of walks; reach and ground cover with overtrack of free walk allowing complete freedom to stretch the neck forward and downward; straightness; willing, clear transitions." },
          { marker:"M / C",     text:"Working trot. Working canter left lead.",                                                                   directive:"Willing, clear transitions; regularity and quality of gaits; bend and balance in corners." },
          { marker:"E",         text:"Circle left 15m.",                                                                                          directive:"Regularity and quality of canter; shape and size of circle; bend; balance." },
          { marker:"F–X–H / X", text:"Change rein. Working trot.",                                                                               directive:"Willing, clear transition; regularity and quality of gaits; straightness; bend and balance in corner." },
          { marker:"C",         text:"Working canter right lead.",                                                                                directive:"Willing, clear transition; regularity and quality of canter; bend and balance in corner." },
          { marker:"B",         text:"Circle right 15m.",                                                                                         directive:"Regularity and quality of canter; shape and size of circle; bend; balance." },
          { marker:"A",         text:"Working trot.",                                                                                             directive:"Willing, clear transition; regularity and quality of trot; straightness; bend and balance in corner." },
          { marker:"K–R / R",   text:"Change rein, lengthen stride in trot. Working trot.",                                                       directive:"Moderate lengthening of frame and stride; regularity and quality of trot; straightness; consistent tempo; willing, clear transitions; bend and balance in corners." },
          { marker:"E / X / G", text:"Half circle left 10m. Down centerline. Halt, salute.",                                                      directive:"Bend and balance in half circle; regularity and quality of trot; willing, clear transition; straightness; attentiveness; immobility (min. 3 sec). Leave arena at A in free walk." }
        ]
      },
      {
        id: 'first2',
        name: 'First Level · Test 2',
        detail: '19 movements · 330 pts',
        pdf: 'Tests/2023FirstLevel2-8.30.pdf',
        purpose: 'In addition to Training Level requirements, confirm improved balance, lateral suppleness and throughness, and the thrust to perform lengthenings of stride. The horse should be on the bit. Introduces leg yield and lengthen stride in canter.',
        movements: [
          { marker:"A / X",       text:"Enter working trot. Halt, salute. Proceed working trot.", parts:["Enter working trot.", "Halt, salute. Proceed working trot."], directive:"Regularity and quality of trot; willing, clear transitions; straightness; attentiveness; immobility (min. 3 sec)." },
          { marker:"C / M–V / V", text:"Track right. Change rein, lengthen stride in trot. Working trot.",                                          directive:"Bend and balance in turns; moderate lengthening of frame and stride; regularity and quality of trot; willing, clear transitions; straightness; consistent tempo." },
          { marker:"A / L–M",     text:"Turn down centerline. Leg yield right.",                                                                   directive:"Regularity and quality of trot; straightness on centerline; consistent tempo; alignment; balance and flow." },
          { marker:"H–P / P",     text:"Change rein, lengthen stride in trot. Working trot.",                                                       directive:"Moderate lengthening of frame and stride; regularity and quality of trot; willing, clear transitions; straightness; consistent tempo." },
          { marker:"A / L–H",     text:"Turn down centerline. Leg yield left.",                                                                    directive:"Regularity and quality of trot; straightness on centerline; consistent tempo; alignment; balance and flow." },
          { marker:"C",           text:"Medium walk.",                                                                                             directive:"Willing, clear transition; regularity, quality, overtrack; bend and balance in corner." },
          { marker:"M–V / V",     text:"Change rein, free walk. Medium walk.",                                                                     directive:"Regularity and quality of walks; reach and ground cover with overtrack of free walk allowing complete freedom to stretch the neck forward and downward; straightness; willing, clear transitions." },
          { marker:"K / A",       text:"Working trot. Working canter left lead.",                                                                  directive:"Willing, clear transitions; regularity and quality of gaits; bend and balance in corners." },
          { marker:"P",           text:"Circle left 15m.",                                                                                         directive:"Regularity and quality of canter; shape and size of circle; bend; balance." },
          { marker:"P–M",         text:"Lengthen stride in canter.",                                                                               directive:"Willing, clear transition; moderate lengthening of frame and stride; regularity and quality of canter; straightness; consistent tempo." },
          { marker:"Between M & C", text:"Develop working canter.",                                                                                directive:"Willing, clear transition; regularity and quality of canter; bend and balance in corners." },
          { marker:"H–X–F / X",   text:"Change rein. Working trot.",                                                                              directive:"Willing, clear transition; regularity and quality of gaits; straightness." },
          { marker:"F",           text:"Working canter right lead.",                                                                               directive:"Willing, clear transition; regularity and quality of canter; bend and balance in corners." },
          { marker:"V",           text:"Circle right 15m.",                                                                                        directive:"Regularity and quality of canter; shape and size of circle; bend; balance." },
          { marker:"V–H",         text:"Lengthen stride in canter.",                                                                               directive:"Willing, clear transition; moderate lengthening of frame and stride; regularity and quality of canter; straightness; consistent tempo." },
          { marker:"Between H & C", text:"Develop working canter.",                                                                                directive:"Willing, clear transition; regularity and quality of canter; bend and balance in corners." },
          { marker:"M",           text:"Working trot.",                                                                                            directive:"Willing, clear transition; regularity and quality of trot; straightness." },
          { marker:"B",           text:"Circle right 20m in rising trot, allowing the horse to stretch forward and downward while maintaining contact. Before B, shorten the reins. Working trot.", directive:"Forward and downward stretch over the back into a light contact, maintaining balance and quality of trot; bend; shape and size of circle; willing, clear transitions." },
          { marker:"A / X",       text:"Down centerline. Halt, salute.",                                                                          directive:"Bend and balance in turn; regularity and quality of trot; willing, clear transition; straightness; attentiveness; immobility (min. 3 sec). Leave arena at A in free walk." }
        ]
      },
      {
        id: 'first3',
        name: 'First Level · Test 3',
        detail: '22 movements · 360 pts',
        pdf: 'Tests/2023FirstLevel3-10.4.pdf',
        purpose: 'In addition to Training Level requirements, confirm improved balance, lateral suppleness and throughness, and the thrust to perform lengthenings of stride. The horse should be on the bit. Introduces 10m circle at trot, change of lead through trot, and shallow loops at canter.',
        movements: [
          { marker:"A / X",       text:"Enter working trot. Halt, salute. Proceed working trot.", parts:["Enter working trot.", "Halt, salute. Proceed working trot."], directive:"Regularity and quality of trot; willing, clear transitions; straightness; attentiveness; immobility (min. 3 sec)." },
          { marker:"C / H–X–F / F", text:"Track left. Change rein, lengthen stride in trot. Working trot.",                                         directive:"Bend and balance in turn; moderate lengthening of frame and stride; regularity and quality of trot; willing, clear transitions; straightness; consistent tempo." },
          { marker:"V–I",         text:"Leg yield right.",                                                                                         directive:"Regularity and quality of trot; consistent tempo; alignment; balance and flow." },
          { marker:"I / I / C",   text:"Circle left 10m. Straight ahead. Track right.",                                                            directive:"Regularity and quality of trot; shape and size of circle; bend; balance; straightness on centerline." },
          { marker:"B",           text:"Circle right 20m in rising trot, allowing the horse to stretch forward and downward while maintaining contact. Before B, shorten the reins.", directive:"Forward and downward stretch over the back into a light contact, maintaining balance and quality of trot; bend; shape and size of circle; willing, clear transitions." },
          { marker:"A",           text:"Working canter right lead.",                                                                               directive:"Willing, clear transition; regularity and quality of canter; bend and balance in corner." },
          { marker:"K–X–H",       text:"Slightly after K, begin a single loop to X returning to the track slightly before H, maintaining lead.",   directive:"Regularity and quality of canter; shape and size of loop; positioning; balance." },
          { marker:"C",           text:"Circle right 15m.",                                                                                        directive:"Regularity and quality of canter; shape and size of circle; bend; balance." },
          { marker:"M–F / F",     text:"Lengthen stride in canter. Working canter.",                                                               directive:"Moderate lengthening of frame and stride; regularity and quality of canter; willing, clear transitions; straightness; consistent tempo." },
          { marker:"K–X–M / X",   text:"Change rein. Working trot.",                                                                              directive:"Willing, calm transition; regularity and quality of gaits; bend and balance in corner." },
          { marker:"C",           text:"Medium walk.",                                                                                             directive:"Willing, clear transition; regularity, quality, overtrack." },
          { marker:"H–X–K / K",   text:"Free walk. Medium walk.",                                                                                 directive:"Regularity and quality of walks; reach and ground cover with overtrack of free walk allowing complete freedom to stretch the neck forward and downward; straightness; willing, clear transitions." },
          { marker:"A",           text:"Working trot.",                                                                                            directive:"Willing, calm transition; bend and balance in corner." },
          { marker:"P–I",         text:"Leg yield left.",                                                                                          directive:"Regularity and quality of trot; consistent tempo; alignment; balance and flow." },
          { marker:"I / I / C",   text:"Circle right 10m. Straight ahead. Track right.",                                                           directive:"Regularity and quality of trot; shape and size of circle; bend; balance." },
          { marker:"M–X–K / K",   text:"Lengthen stride in trot. Working trot.",                                                                  directive:"Moderate lengthening of frame and stride; regularity and quality of trot; willing, clear transitions; straightness; consistent tempo." },
          { marker:"A",           text:"Working canter left lead.",                                                                                directive:"Willing, calm transition; regularity and quality of gait; bend and balance in corner." },
          { marker:"F–X–M",       text:"Slightly after F, begin a single loop to X returning to the track slightly before M, maintaining lead.",   directive:"Regularity and quality of canter; shape and size of loop; positioning; balance." },
          { marker:"C",           text:"Circle left 15m.",                                                                                         directive:"Regularity and quality of canter; shape and size of circle; bend; balance." },
          { marker:"H–K / K",     text:"Lengthen stride in canter. Working canter.",                                                               directive:"Moderate lengthening of frame and stride; regularity and quality of canter; willing, clear transitions; straightness; consistent tempo." },
          { marker:"F–X–H / X",   text:"Change rein. Change of lead through trot.",                                                               directive:"Willing, clear transitions; regularity and quality of gaits; straightness." },
          { marker:"C / B / X / G", text:"Working trot. Half circle right 10m. Down centerline. Halt, salute.",                                    directive:"Bend and balance in corner and half circle; regularity and quality of trot; willing, clear transition; straightness; attentiveness; immobility (min. 3 sec). Leave arena at A in free walk." }
        ]
      }
    ]
  },
  {
    id: 'second',
    name: 'Second Level',
    tests: [
      {
        id: 'second1',
        name: 'Second Level · Test 1',
        detail: '21 movements · 350 pts',
        pdf: 'Tests/2023SecondLevel1-8.30.pdf',
        purpose: 'Confirm that the horse, having developed thrust and improved balance, accepts more weight on the hindquarters (collection), moves with a greater degree of straightness and bend, and is reliably on the bit. Introduces shoulder-in, rein back, counter canter, and medium gaits.',
        movements: [
          { marker:"A / X",         text:"Enter collected trot. Halt, salute. Proceed collected trot.", parts:["Enter collected trot.", "Halt, salute. Proceed collected trot."], directive:"Engagement, uphill balance and quality of trot; clear, balanced transitions; straightness; attentiveness; immobility (min. 3 sec)." },
          { marker:"C / H–P / P",   text:"Track left. Change rein, medium trot. Collected trot.",                                                    directive:"Bend and balance in turns; moderate lengthening of frame and stride with engagement, elasticity, suspension, straightness and uphill balance." },
          { marker:"P–F–A–K",       text:"Collected trot.",                                                                                          directive:"Transitions at H and P. Clear, balanced transitions; consistent tempo; quality of trot." },
          { marker:"K–E / E",       text:"Shoulder-in right. Turn right.",                                                                           directive:"Angle, bend and balance; engagement and quality of trot." },
          { marker:"B / B–M",       text:"Turn left. Shoulder-in left.",                                                                             directive:"Angle, bend and balance; engagement and quality of trot." },
          { marker:"C",             text:"Halt, rein back 3 to 4 steps. Proceed medium walk.",                                                       directive:"Immobility; willing steps back with correct rhythm and count; straightness; clear transitions." },
          { marker:"C–S",           text:"Medium walk.",                                                                                             directive:"Regularity, quality, overtrack." },
          { marker:"S–F / F",       text:"Change rein, free walk. Medium walk.",                                                                     directive:"Regularity, overtrack, and quality of walks; reach and ground cover of free walk allowing complete freedom to stretch the neck forward and downward; straightness; clear, balanced transitions." },
          { marker:"A",             text:"Collected canter right lead.",                                                                             directive:"Clear, balanced straight transition; regularity and quality of canter." },
          { marker:"K–S / S",       text:"Medium canter. Collected canter.",                                                                         directive:"Moderate lengthening of frame and stride with engagement, elasticity, suspension, straightness and uphill balance; consistent tempo; clear balanced transitions." },
          { marker:"C",             text:"Circle right 10m.",                                                                                        directive:"Regularity and quality of canter; shape and size of circle; bend; balance." },
          { marker:"M–E / E–V",     text:"Change rein. Counter canter.",                                                                            directive:"Regularity, quality and balance of canter; straightness." },
          { marker:"V / K",         text:"Collected trot. Medium walk.",                                                                             directive:"Regularity and quality of gaits; clear, balanced transitions." },
          { marker:"A",             text:"Collected canter left lead.",                                                                              directive:"Clear, balanced straight transition; regularity and quality of gaits." },
          { marker:"F–R / R",       text:"Medium canter. Collected canter.",                                                                         directive:"Moderate lengthening of frame and stride with engagement, elasticity, suspension, straightness and uphill balance; consistent tempo; clear balanced transitions." },
          { marker:"C",             text:"Circle left 10m.",                                                                                         directive:"Regularity and quality of canter; shape and size of circle; bend; balance." },
          { marker:"H–B / B–P",     text:"Change rein. Counter canter.",                                                                            directive:"Regularity, quality and balance of canter; straightness." },
          { marker:"P",             text:"Collected trot.",                                                                                          directive:"Regularity and quality of gaits; clear, balanced transition." },
          { marker:"K–R / R",       text:"Medium trot. Collected trot.",                                                                             directive:"Moderate lengthening of frame and stride with engagement, elasticity, suspension, straightness and uphill balance." },
          { marker:"R–M–C–H–S",     text:"Collected trot.",                                                                                          directive:"Transitions at K and R. Clear, balanced transitions; consistent tempo." },
          { marker:"S / I / G",     text:"Turn left. Turn left. Halt, salute.",                                                                      directive:"Bend and balance in turns; engagement, uphill balance and quality of trot; clear, balanced transition; straightness; attentiveness; immobility (min. 3 sec). Leave arena at A in free walk." }
        ]
      }
    ]
  }
];
