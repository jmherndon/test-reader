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
  }
];
