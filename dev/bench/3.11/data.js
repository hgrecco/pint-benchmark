window.BENCHMARK_DATA = {
  "lastUpdate": 1669515386641,
  "repoUrl": "https://github.com/hgrecco/pint-benchmark",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "hernan.grecco@gmail.com",
            "name": "Hernan",
            "username": "hgrecco"
          },
          "committer": {
            "email": "hernan.grecco@gmail.com",
            "name": "Hernan",
            "username": "hgrecco"
          },
          "distinct": true,
          "id": "e351f4daba4a6247d7980444b33a1554692709bb",
          "message": "Pint 0.1",
          "timestamp": "2022-11-26T21:48:17-03:00",
          "tree_id": "f3f8872108d7128ce0fc8b3567ff39fa9aa711c2",
          "url": "https://github.com/hgrecco/pint-benchmark/commit/e351f4daba4a6247d7980444b33a1554692709bb"
        },
        "date": 1669514887411,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 23.26908590052959,
            "unit": "iter/sec",
            "range": "stddev: 0.0012848690953997208",
            "extra": "mean: 42.97547416665992 msec\nrounds: 24"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 1549825.056944474,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012363827164544725",
            "extra": "mean: 645.2341156307858 nsec\nrounds: 175439"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 1356.5425658797096,
            "unit": "iter/sec",
            "range": "stddev: 0.00014058067437648436",
            "extra": "mean: 737.1681693979917 usec\nrounds: 183"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 11891.203408592546,
            "unit": "iter/sec",
            "range": "stddev: 0.00002650132208323125",
            "extra": "mean: 84.09577783165354 usec\nrounds: 6189"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 11977.728077562302,
            "unit": "iter/sec",
            "range": "stddev: 0.00008838953277051013",
            "extra": "mean: 83.48828705447778 usec\nrounds: 4689"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 12004.414059221335,
            "unit": "iter/sec",
            "range": "stddev: 0.000042013482237251886",
            "extra": "mean: 83.30269141556626 usec\nrounds: 7758"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 11443.758838159629,
            "unit": "iter/sec",
            "range": "stddev: 0.00003910908872391598",
            "extra": "mean: 87.38387571271284 usec\nrounds: 9470"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 11489.573965209453,
            "unit": "iter/sec",
            "range": "stddev: 0.000052614853650168194",
            "extra": "mean: 87.03542907926877 usec\nrounds: 8157"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 11216.785698703137,
            "unit": "iter/sec",
            "range": "stddev: 0.00018376168617188865",
            "extra": "mean: 89.15209997420367 usec\nrounds: 7862"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 11321.612274853378,
            "unit": "iter/sec",
            "range": "stddev: 0.00005360827143271063",
            "extra": "mean: 88.32664250666107 usec\nrounds: 9175"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 11289.161438496161,
            "unit": "iter/sec",
            "range": "stddev: 0.00002499958144227955",
            "extra": "mean: 88.5805385500104 usec\nrounds: 6057"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 11542.253684497642,
            "unit": "iter/sec",
            "range": "stddev: 0.00003457271223989067",
            "extra": "mean: 86.63819279445367 usec\nrounds: 8937"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 11574.56992982211,
            "unit": "iter/sec",
            "range": "stddev: 0.00003418241340364734",
            "extra": "mean: 86.39629861524962 usec\nrounds: 9390"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 11465.190302096174,
            "unit": "iter/sec",
            "range": "stddev: 0.000031709328379880204",
            "extra": "mean: 87.22053220670664 usec\nrounds: 10417"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 11170.564505490293,
            "unit": "iter/sec",
            "range": "stddev: 0.00005025152438439751",
            "extra": "mean: 89.52099059170229 usec\nrounds: 10310"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 11378.582975502022,
            "unit": "iter/sec",
            "range": "stddev: 0.00005569281332522502",
            "extra": "mean: 87.88440547939845 usec\nrounds: 10257"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 11034505.06980095,
            "unit": "iter/sec",
            "range": "stddev: 2.8863276052214686e-7",
            "extra": "mean: 90.62481676103609 nsec\nrounds: 111112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 10591576.13274671,
            "unit": "iter/sec",
            "range": "stddev: 1.0235065420597254e-7",
            "extra": "mean: 94.41465438832891 nsec\nrounds: 120482"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 9655814.326917747,
            "unit": "iter/sec",
            "range": "stddev: 1.4561160989244742e-7",
            "extra": "mean: 103.56454320090052 nsec\nrounds: 100000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 11286854.842244355,
            "unit": "iter/sec",
            "range": "stddev: 5.66089973096077e-8",
            "extra": "mean: 88.59864098340891 nsec\nrounds: 123457"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 10866521.138250208,
            "unit": "iter/sec",
            "range": "stddev: 1.9936197102292954e-7",
            "extra": "mean: 92.02577230349999 nsec\nrounds: 117648"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 11287423.706231976,
            "unit": "iter/sec",
            "range": "stddev: 1.0632179859007396e-7",
            "extra": "mean: 88.59417578587404 nsec\nrounds: 123457"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 59635.71911372344,
            "unit": "iter/sec",
            "range": "stddev: 0.000024230608737201444",
            "extra": "mean: 16.768473908950966 usec\nrounds: 13587"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 3920.2941870550917,
            "unit": "iter/sec",
            "range": "stddev: 0.000040904759704110235",
            "extra": "mean: 255.08289742693918 usec\nrounds: 2837"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 62228.05720441711,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058767474675346035",
            "extra": "mean: 16.069921590433605 usec\nrounds: 19921"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 3831.6724937078166,
            "unit": "iter/sec",
            "range": "stddev: 0.00015127124506318708",
            "extra": "mean: 260.98263921098436 usec\nrounds: 2586"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 58259.04811434283,
            "unit": "iter/sec",
            "range": "stddev: 0.000025713364401667986",
            "extra": "mean: 17.16471573715619 usec\nrounds: 19686"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 3768.177274603323,
            "unit": "iter/sec",
            "range": "stddev: 0.00005980749930931859",
            "extra": "mean: 265.3802958634079 usec\nrounds: 2998"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 3725.997297389632,
            "unit": "iter/sec",
            "range": "stddev: 0.00008271935328749868",
            "extra": "mean: 268.38452102490317 usec\nrounds: 2497"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 74184.37316193944,
            "unit": "iter/sec",
            "range": "stddev: 0.000006798965306441236",
            "extra": "mean: 13.47992787938058 usec\nrounds: 24570"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 3695.123806592682,
            "unit": "iter/sec",
            "range": "stddev: 0.00007050282988090096",
            "extra": "mean: 270.62692682065017 usec\nrounds: 3061"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 69551.56257991506,
            "unit": "iter/sec",
            "range": "stddev: 0.000014654563986977321",
            "extra": "mean: 14.37782219272206 usec\nrounds: 21692"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 3810.901763209323,
            "unit": "iter/sec",
            "range": "stddev: 0.00003276010653512955",
            "extra": "mean: 262.40508471093665 usec\nrounds: 2420"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 73161.6328730618,
            "unit": "iter/sec",
            "range": "stddev: 0.00000509224538687291",
            "extra": "mean: 13.668366338064622 usec\nrounds: 23148"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 59135.22278819112,
            "unit": "iter/sec",
            "range": "stddev: 0.000012425134985355503",
            "extra": "mean: 16.91039540988578 usec\nrounds: 19084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 3600.0209871115417,
            "unit": "iter/sec",
            "range": "stddev: 0.00007043472774002504",
            "extra": "mean: 277.7761584113277 usec\nrounds: 101"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 60747.36516837002,
            "unit": "iter/sec",
            "range": "stddev: 0.000008095647389755949",
            "extra": "mean: 16.46161931844051 usec\nrounds: 20747"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 3692.282166391307,
            "unit": "iter/sec",
            "range": "stddev: 0.00004223999578086531",
            "extra": "mean: 270.8352056899706 usec\nrounds: 2742"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 59193.87712594416,
            "unit": "iter/sec",
            "range": "stddev: 0.000010228700673165592",
            "extra": "mean: 16.89363914906849 usec\nrounds: 14948"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 3800.007883137861,
            "unit": "iter/sec",
            "range": "stddev: 0.00003799700712197583",
            "extra": "mean: 263.15734881430006 usec\nrounds: 3036"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 3826.7486976806535,
            "unit": "iter/sec",
            "range": "stddev: 0.000039555690495393884",
            "extra": "mean: 261.3184400130816 usec\nrounds: 2934"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 69411.79730727954,
            "unit": "iter/sec",
            "range": "stddev: 0.000010135985376642378",
            "extra": "mean: 14.406772894427347 usec\nrounds: 23641"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 3717.8680802050917,
            "unit": "iter/sec",
            "range": "stddev: 0.00020036890543232387",
            "extra": "mean: 268.97135089979747 usec\nrounds: 3055"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 74004.84855979428,
            "unit": "iter/sec",
            "range": "stddev: 0.000006062083907614982",
            "extra": "mean: 13.512628151546345 usec\nrounds: 24155"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 3789.363418378826,
            "unit": "iter/sec",
            "range": "stddev: 0.000055671496247176424",
            "extra": "mean: 263.89656773216603 usec\nrounds: 3285"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 72220.23338733087,
            "unit": "iter/sec",
            "range": "stddev: 0.000027337542763897682",
            "extra": "mean: 13.846535148076986 usec\nrounds: 19802"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 57879.011241186854,
            "unit": "iter/sec",
            "range": "stddev: 0.000016138703847173274",
            "extra": "mean: 17.277420234995265 usec\nrounds: 19570"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 3734.3491070141554,
            "unit": "iter/sec",
            "range": "stddev: 0.0001241883954864172",
            "extra": "mean: 267.78428351053725 usec\nrounds: 3111"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 59837.43390835917,
            "unit": "iter/sec",
            "range": "stddev: 0.000013337780973189114",
            "extra": "mean: 16.711946597367405 usec\nrounds: 19456"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 3757.7204918390216,
            "unit": "iter/sec",
            "range": "stddev: 0.000054998939551920136",
            "extra": "mean: 266.11878189763974 usec\nrounds: 3425"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 58356.653843741544,
            "unit": "iter/sec",
            "range": "stddev: 0.000016026219978951737",
            "extra": "mean: 17.136006507118207 usec\nrounds: 20747"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 3686.5671047065284,
            "unit": "iter/sec",
            "range": "stddev: 0.0000628665624662562",
            "extra": "mean: 271.25506510469603 usec\nrounds: 3287"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 3833.0135404041866,
            "unit": "iter/sec",
            "range": "stddev: 0.0000563869230367866",
            "extra": "mean: 260.8913298789316 usec\nrounds: 3377"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 72453.4175264191,
            "unit": "iter/sec",
            "range": "stddev: 0.000013885109377158179",
            "extra": "mean: 13.801971447866686 usec\nrounds: 23641"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 3783.0194678345288,
            "unit": "iter/sec",
            "range": "stddev: 0.00006317283237415726",
            "extra": "mean: 264.33911020088374 usec\nrounds: 2804"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 71928.37111634953,
            "unit": "iter/sec",
            "range": "stddev: 0.000009088221938867354",
            "extra": "mean: 13.902719948744911 usec\nrounds: 23585"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 3777.024600809814,
            "unit": "iter/sec",
            "range": "stddev: 0.00004340476327346364",
            "extra": "mean: 264.7586673874443 usec\nrounds: 3238"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 72632.81415290298,
            "unit": "iter/sec",
            "range": "stddev: 0.000006397630906952996",
            "extra": "mean: 13.767881799194091 usec\nrounds: 23697"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 60204.72268396753,
            "unit": "iter/sec",
            "range": "stddev: 0.000033493612839984834",
            "extra": "mean: 16.609992628805834 usec\nrounds: 18450"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 3867.144273622289,
            "unit": "iter/sec",
            "range": "stddev: 0.00005970256897002855",
            "extra": "mean: 258.58874902107465 usec\nrounds: 3064"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 59364.5790533388,
            "unit": "iter/sec",
            "range": "stddev: 0.000012985961862677558",
            "extra": "mean: 16.845061751410796 usec\nrounds: 20534"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 3845.702364670882,
            "unit": "iter/sec",
            "range": "stddev: 0.00007270993499727913",
            "extra": "mean: 260.0305237312822 usec\nrounds: 3034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 58782.21916095256,
            "unit": "iter/sec",
            "range": "stddev: 0.00003609927777028973",
            "extra": "mean: 17.011947052592273 usec\nrounds: 20662"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 3822.720980486981,
            "unit": "iter/sec",
            "range": "stddev: 0.00003288912778795471",
            "extra": "mean: 261.59377184588783 usec\nrounds: 3147"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 3769.8664444503684,
            "unit": "iter/sec",
            "range": "stddev: 0.00006830847122665882",
            "extra": "mean: 265.26138650670316 usec\nrounds: 3172"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 72453.57562600898,
            "unit": "iter/sec",
            "range": "stddev: 0.000006957462083958672",
            "extra": "mean: 13.801941330843382 usec\nrounds: 24391"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 3764.5689135681987,
            "unit": "iter/sec",
            "range": "stddev: 0.00006480755561120882",
            "extra": "mean: 265.63466440893563 usec\nrounds: 2953"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 70648.42893606295,
            "unit": "iter/sec",
            "range": "stddev: 0.000008800984417923416",
            "extra": "mean: 14.154596429950383 usec\nrounds: 16639"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 3644.7985743509958,
            "unit": "iter/sec",
            "range": "stddev: 0.00015598098163592522",
            "extra": "mean: 274.36358405020036 usec\nrounds: 3022"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 65813.85946768039,
            "unit": "iter/sec",
            "range": "stddev: 0.00003360019741210839",
            "extra": "mean: 15.194367996167676 usec\nrounds: 23041"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 60450.47964294959,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055906102643143715",
            "extra": "mean: 16.542465930899045 usec\nrounds: 19842"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 3559.1179030346716,
            "unit": "iter/sec",
            "range": "stddev: 0.0001234515960177735",
            "extra": "mean: 280.9684947911821 usec\nrounds: 3072"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 58374.513067514854,
            "unit": "iter/sec",
            "range": "stddev: 0.00001608428672331404",
            "extra": "mean: 17.130763880521265 usec\nrounds: 19380"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 3792.953741213688,
            "unit": "iter/sec",
            "range": "stddev: 0.00007762713462867459",
            "extra": "mean: 263.64676930650234 usec\nrounds: 3056"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 58184.84794212077,
            "unit": "iter/sec",
            "range": "stddev: 0.000021075187245860212",
            "extra": "mean: 17.186605024640567 usec\nrounds: 19305"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 3794.7942674209457,
            "unit": "iter/sec",
            "range": "stddev: 0.00005705095807146519",
            "extra": "mean: 263.51889708098184 usec\nrounds: 3391"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 3768.67371990199,
            "unit": "iter/sec",
            "range": "stddev: 0.000056159671364771294",
            "extra": "mean: 265.34533746423836 usec\nrounds: 3147"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 68144.72226746926,
            "unit": "iter/sec",
            "range": "stddev: 0.000010257360683036125",
            "extra": "mean: 14.674650753949544 usec\nrounds: 16779"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 3802.5430417489906,
            "unit": "iter/sec",
            "range": "stddev: 0.000041385196380257905",
            "extra": "mean: 262.9819015907962 usec\nrounds: 3394"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 68138.85019096911,
            "unit": "iter/sec",
            "range": "stddev: 0.000030391543456654526",
            "extra": "mean: 14.67591538743835 usec\nrounds: 24039"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 3709.322999686931,
            "unit": "iter/sec",
            "range": "stddev: 0.00009445837491946065",
            "extra": "mean: 269.59097390127545 usec\nrounds: 2797"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 70538.2435597021,
            "unit": "iter/sec",
            "range": "stddev: 0.000006877283013152423",
            "extra": "mean: 14.17670684064625 usec\nrounds: 23697"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 58019.276987678124,
            "unit": "iter/sec",
            "range": "stddev: 0.000015998910060302157",
            "extra": "mean: 17.23565083743418 usec\nrounds: 18868"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 3653.730713977933,
            "unit": "iter/sec",
            "range": "stddev: 0.00008286106168055787",
            "extra": "mean: 273.6928575973975 usec\nrounds: 2830"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 58591.17017208005,
            "unit": "iter/sec",
            "range": "stddev: 0.000008249116245311586",
            "extra": "mean: 17.06741812909757 usec\nrounds: 14926"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 3856.4163063400038,
            "unit": "iter/sec",
            "range": "stddev: 0.00003605981703779363",
            "extra": "mean: 259.30810383619263 usec\nrounds: 2581"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 57490.0217273422,
            "unit": "iter/sec",
            "range": "stddev: 0.000010383492403474528",
            "extra": "mean: 17.394322874718988 usec\nrounds: 17242"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 3828.3473160632807,
            "unit": "iter/sec",
            "range": "stddev: 0.00004239615563527857",
            "extra": "mean: 261.2093202213189 usec\nrounds: 2898"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 3728.785066086978,
            "unit": "iter/sec",
            "range": "stddev: 0.000054616125923701595",
            "extra": "mean: 268.1838674733294 usec\nrounds: 3139"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 71390.28577276494,
            "unit": "iter/sec",
            "range": "stddev: 0.000013529358203038998",
            "extra": "mean: 14.007508012826799 usec\nrounds: 22027"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 3701.2198617172744,
            "unit": "iter/sec",
            "range": "stddev: 0.00004679729440846547",
            "extra": "mean: 270.1811935960013 usec\nrounds: 2748"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 71507.11191378429,
            "unit": "iter/sec",
            "range": "stddev: 0.000007552946944800493",
            "extra": "mean: 13.984622972966578 usec\nrounds: 20041"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 3720.7051517778123,
            "unit": "iter/sec",
            "range": "stddev: 0.00006406333618590122",
            "extra": "mean: 268.7662577944893 usec\nrounds: 3111"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 70161.88801122617,
            "unit": "iter/sec",
            "range": "stddev: 0.000015316562864736066",
            "extra": "mean: 14.252752147148552 usec\nrounds: 24450"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 219757.46886192576,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037327171290683603",
            "extra": "mean: 4.550471049647476 usec\nrounds: 81968"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 219668.51551179477,
            "unit": "iter/sec",
            "range": "stddev: 0.000006115631181401868",
            "extra": "mean: 4.552313733582391 usec\nrounds: 75188"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 218189.90965348185,
            "unit": "iter/sec",
            "range": "stddev: 0.00002021035626559278",
            "extra": "mean: 4.583163362541143 usec\nrounds: 80000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 214809.82345888708,
            "unit": "iter/sec",
            "range": "stddev: 0.000008909597583062714",
            "extra": "mean: 4.655280582134979 usec\nrounds: 55866"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 210880.10768552945,
            "unit": "iter/sec",
            "range": "stddev: 0.000014638610960056148",
            "extra": "mean: 4.742030962404615 usec\nrounds: 75188"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 205033.30332873622,
            "unit": "iter/sec",
            "range": "stddev: 0.000016445041539515164",
            "extra": "mean: 4.877256444513646 usec\nrounds: 72464"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 217775.05816463198,
            "unit": "iter/sec",
            "range": "stddev: 0.000005217202149490072",
            "extra": "mean: 4.591894078356886 usec\nrounds: 41323"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 222233.87175067028,
            "unit": "iter/sec",
            "range": "stddev: 0.000013918959414632653",
            "extra": "mean: 4.49976410941499 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 211239.20764436686,
            "unit": "iter/sec",
            "range": "stddev: 0.000009831026772897438",
            "extra": "mean: 4.733969660043208 usec\nrounds: 67568"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 212102.35535286833,
            "unit": "iter/sec",
            "range": "stddev: 0.000013467982637792151",
            "extra": "mean: 4.714704833599466 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 204078.17781274265,
            "unit": "iter/sec",
            "range": "stddev: 0.000006772498064213484",
            "extra": "mean: 4.9000829521203215 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 213050.03572355548,
            "unit": "iter/sec",
            "range": "stddev: 0.000008605796133599426",
            "extra": "mean: 4.693733078259403 usec\nrounds: 41840"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 207789.44347376467,
            "unit": "iter/sec",
            "range": "stddev: 0.000008356730604682089",
            "extra": "mean: 4.812564022898782 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 215715.4150386187,
            "unit": "iter/sec",
            "range": "stddev: 0.000003456580003780288",
            "extra": "mean: 4.635737320028677 usec\nrounds: 71943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 217507.64055379626,
            "unit": "iter/sec",
            "range": "stddev: 0.000007227705029344097",
            "extra": "mean: 4.597539642533475 usec\nrounds: 75752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 206155.31853163228,
            "unit": "iter/sec",
            "range": "stddev: 0.00001815263647117033",
            "extra": "mean: 4.8507116242386 usec\nrounds: 68494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 213775.52187378157,
            "unit": "iter/sec",
            "range": "stddev: 0.0000114152836792306",
            "extra": "mean: 4.677804040588076 usec\nrounds: 72464"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 174167.95216086507,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025850197223800556",
            "extra": "mean: 5.74158441661173 usec\nrounds: 77"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 218338.25332948024,
            "unit": "iter/sec",
            "range": "stddev: 0.000006236245637341939",
            "extra": "mean: 4.580049463393683 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 222437.3118444942,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031249819133545643",
            "extra": "mean: 4.495648646838078 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 209161.77781358475,
            "unit": "iter/sec",
            "range": "stddev: 0.000014067817601037533",
            "extra": "mean: 4.780988240075342 usec\nrounds: 71429"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 219117.5512116533,
            "unit": "iter/sec",
            "range": "stddev: 0.000008520729584470991",
            "extra": "mean: 4.563760385556997 usec\nrounds: 74069"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 205006.2851627675,
            "unit": "iter/sec",
            "range": "stddev: 0.000006812835704463291",
            "extra": "mean: 4.8778992273628905 usec\nrounds: 67568"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 209970.12101953357,
            "unit": "iter/sec",
            "range": "stddev: 0.000012647436045685063",
            "extra": "mean: 4.7625823862194645 usec\nrounds: 70922"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 211542.65409279166,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037013172483023886",
            "extra": "mean: 4.727179037667539 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 203405.93110206779,
            "unit": "iter/sec",
            "range": "stddev: 0.000009177455494917768",
            "extra": "mean: 4.916277487986358 usec\nrounds: 70922"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 212461.35284738612,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034163517650463584",
            "extra": "mean: 4.706738362521459 usec\nrounds: 75188"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 200517.28589387098,
            "unit": "iter/sec",
            "range": "stddev: 0.00000728942690756735",
            "extra": "mean: 4.987101214452285 usec\nrounds: 67115"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 217444.41636298157,
            "unit": "iter/sec",
            "range": "stddev: 0.000003480855300002641",
            "extra": "mean: 4.5988764242660185 usec\nrounds: 27473"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 208643.58253798267,
            "unit": "iter/sec",
            "range": "stddev: 0.000003507109320490775",
            "extra": "mean: 4.7928624874812735 usec\nrounds: 68961"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 213551.79766807926,
            "unit": "iter/sec",
            "range": "stddev: 0.000004249316993363172",
            "extra": "mean: 4.682704668936043 usec\nrounds: 71943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 215794.74743927832,
            "unit": "iter/sec",
            "range": "stddev: 0.000003876645390625401",
            "extra": "mean: 4.63403308869409 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 208213.28885562104,
            "unit": "iter/sec",
            "range": "stddev: 0.000028166328664657096",
            "extra": "mean: 4.802767419390885 usec\nrounds: 71429"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 211351.7965567881,
            "unit": "iter/sec",
            "range": "stddev: 0.000007657448036501133",
            "extra": "mean: 4.731447833855105 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 207777.82388816553,
            "unit": "iter/sec",
            "range": "stddev: 0.000008813206122566146",
            "extra": "mean: 4.812833156527044 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 214152.7328577341,
            "unit": "iter/sec",
            "range": "stddev: 0.000006723065344733868",
            "extra": "mean: 4.669564504994292 usec\nrounds: 75188"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 298024.16061328293,
            "unit": "iter/sec",
            "range": "stddev: 0.000003515024850993917",
            "extra": "mean: 3.355432653319686 usec\nrounds: 43291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 222227.37945354602,
            "unit": "iter/sec",
            "range": "stddev: 0.000005826897887081419",
            "extra": "mean: 4.499895568489292 usec\nrounds: 69931"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 227454.27870478356,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033499028963172645",
            "extra": "mean: 4.3964879697775014 usec\nrounds: 68494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 222930.04749335244,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068581585725383385",
            "extra": "mean: 4.485712048438957 usec\nrounds: 40486"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 218542.37197058374,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028227207879405066",
            "extra": "mean: 4.575771695818338 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 217506.37410051277,
            "unit": "iter/sec",
            "range": "stddev: 0.000002783492427475767",
            "extra": "mean: 4.597566412181952 usec\nrounds: 68489"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 220135.12155777574,
            "unit": "iter/sec",
            "range": "stddev: 0.00000927479291630992",
            "extra": "mean: 4.542664491352163 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 291082.1700503456,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043466889171765155",
            "extra": "mean: 3.435456042625489 usec\nrounds: 66667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 210029.91728713698,
            "unit": "iter/sec",
            "range": "stddev: 0.00006429381382378125",
            "extra": "mean: 4.761226462003867 usec\nrounds: 67115"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 222946.55638597495,
            "unit": "iter/sec",
            "range": "stddev: 0.000003147461502659179",
            "extra": "mean: 4.48537988749535 usec\nrounds: 12659"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 218187.73703795092,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030576706208359602",
            "extra": "mean: 4.583208999624314 usec\nrounds: 67115"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 221784.9079761209,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030997525779156754",
            "extra": "mean: 4.508873074932889 usec\nrounds: 64936"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 225215.24462251135,
            "unit": "iter/sec",
            "range": "stddev: 0.000003846951426939311",
            "extra": "mean: 4.440196762328961 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 218414.85201356988,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058133345489914346",
            "extra": "mean: 4.578443227559777 usec\nrounds: 67568"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 290085.6387300276,
            "unit": "iter/sec",
            "range": "stddev: 0.00000586204489818645",
            "extra": "mean: 3.447257866256056 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 218127.61103992397,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027797911931649277",
            "extra": "mean: 4.5844723427378 usec\nrounds: 31348"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 214304.95163451743,
            "unit": "iter/sec",
            "range": "stddev: 0.000008775015565980011",
            "extra": "mean: 4.6662477575666665 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 217050.9070516366,
            "unit": "iter/sec",
            "range": "stddev: 0.000003931445319751349",
            "extra": "mean: 4.607214102828416 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 221022.2907123857,
            "unit": "iter/sec",
            "range": "stddev: 0.00000606884459686576",
            "extra": "mean: 4.524430530408767 usec\nrounds: 41493"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 224502.4713485416,
            "unit": "iter/sec",
            "range": "stddev: 0.000004594902129435277",
            "extra": "mean: 4.454293950499516 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 215042.62015342244,
            "unit": "iter/sec",
            "range": "stddev: 0.000007349451714751589",
            "extra": "mean: 4.650240958218183 usec\nrounds: 70423"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 285682.4353739147,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032050608659460048",
            "extra": "mean: 3.5003902101686877 usec\nrounds: 28090"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 210252.34902217914,
            "unit": "iter/sec",
            "range": "stddev: 0.000015423152305755455",
            "extra": "mean: 4.7561894297528715 usec\nrounds: 62894"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 214424.87120035215,
            "unit": "iter/sec",
            "range": "stddev: 0.000005248103708291722",
            "extra": "mean: 4.663638105048132 usec\nrounds: 68028"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 218218.84917691466,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033368682104335465",
            "extra": "mean: 4.582555557284966 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 217571.68498105914,
            "unit": "iter/sec",
            "range": "stddev: 0.000003054943661462536",
            "extra": "mean: 4.596186310213371 usec\nrounds: 66663"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 212964.73564950796,
            "unit": "iter/sec",
            "range": "stddev: 0.000014253639030601305",
            "extra": "mean: 4.695613088008031 usec\nrounds: 62500"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 211488.94402876112,
            "unit": "iter/sec",
            "range": "stddev: 0.000004283693994834246",
            "extra": "mean: 4.728379559472416 usec\nrounds: 65360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 283490.85421073076,
            "unit": "iter/sec",
            "range": "stddev: 0.000003879451538291091",
            "extra": "mean: 3.527450657214704 usec\nrounds: 67568"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 218448.91902812786,
            "unit": "iter/sec",
            "range": "stddev: 0.00000477158095134853",
            "extra": "mean: 4.577729221316212 usec\nrounds: 66667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 211506.6618288861,
            "unit": "iter/sec",
            "range": "stddev: 0.000011755998228256443",
            "extra": "mean: 4.727983465641492 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 218503.62521439252,
            "unit": "iter/sec",
            "range": "stddev: 0.000010213598133432298",
            "extra": "mean: 4.5765831071169405 usec\nrounds: 66667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 216685.02276497972,
            "unit": "iter/sec",
            "range": "stddev: 0.000004375124742032276",
            "extra": "mean: 4.614993631030129 usec\nrounds: 60607"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 217485.72485952586,
            "unit": "iter/sec",
            "range": "stddev: 0.000003362553451026224",
            "extra": "mean: 4.598002929368815 usec\nrounds: 64517"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 214342.38297073348,
            "unit": "iter/sec",
            "range": "stddev: 0.0000067462131211097335",
            "extra": "mean: 4.665432874918355 usec\nrounds: 69445"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 224702.6099936382,
            "unit": "iter/sec",
            "range": "stddev: 0.00026087456285198157",
            "extra": "mean: 4.450326589567927 usec\nrounds: 67568"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 3330873.2566792364,
            "unit": "iter/sec",
            "range": "stddev: 3.5609109409852137e-7",
            "extra": "mean: 300.2215704227583 nsec\nrounds: 101011"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 4017.1008321607833,
            "unit": "iter/sec",
            "range": "stddev: 0.00005872896957418882",
            "extra": "mean: 248.93574788913224 usec\nrounds: 2487"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 2883866.782228027,
            "unit": "iter/sec",
            "range": "stddev: 1.701584575256718e-7",
            "extra": "mean: 346.75665539157984 nsec\nrounds: 93458"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 4021.192540963998,
            "unit": "iter/sec",
            "range": "stddev: 0.00003395565817729636",
            "extra": "mean: 248.68244676497648 usec\nrounds: 2921"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 3022875.2148768734,
            "unit": "iter/sec",
            "range": "stddev: 2.048833413856429e-7",
            "extra": "mean: 330.8108767038807 nsec\nrounds: 31949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 4022.549863982168,
            "unit": "iter/sec",
            "range": "stddev: 0.00012187951677630506",
            "extra": "mean: 248.59853421681115 usec\nrounds: 2265"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 4024.6421877460534,
            "unit": "iter/sec",
            "range": "stddev: 0.00004926108349615616",
            "extra": "mean: 248.46929325661037 usec\nrounds: 3144"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 3277560.097803697,
            "unit": "iter/sec",
            "range": "stddev: 4.382178447956104e-7",
            "extra": "mean: 305.10500804244 nsec\nrounds: 107527"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 4185.139461205131,
            "unit": "iter/sec",
            "range": "stddev: 0.0000391417631302383",
            "extra": "mean: 238.94066357158982 usec\nrounds: 3338"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 2881099.5037079165,
            "unit": "iter/sec",
            "range": "stddev: 1.9706597053833539e-7",
            "extra": "mean: 347.08971304651146 nsec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 4131.977376914365,
            "unit": "iter/sec",
            "range": "stddev: 0.00003679236645029982",
            "extra": "mean: 242.0148778129975 usec\nrounds: 2799"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 3021483.1192322024,
            "unit": "iter/sec",
            "range": "stddev: 2.1939430427548966e-7",
            "extra": "mean: 330.96329204528087 nsec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 2686114.647470196,
            "unit": "iter/sec",
            "range": "stddev: 6.941594995937526e-7",
            "extra": "mean: 372.28492869493437 nsec\nrounds: 88496"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 4009.300351107279,
            "unit": "iter/sec",
            "range": "stddev: 0.00005968019722332994",
            "extra": "mean: 249.4200764290015 usec\nrounds: 3271"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 2955367.4327776656,
            "unit": "iter/sec",
            "range": "stddev: 3.785864025746853e-7",
            "extra": "mean: 338.3674019375948 nsec\nrounds: 94340"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 4062.4822536289544,
            "unit": "iter/sec",
            "range": "stddev: 0.000052964348836679516",
            "extra": "mean: 246.15492144161735 usec\nrounds: 3246"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 2703666.2918066136,
            "unit": "iter/sec",
            "range": "stddev: 4.271626748055782e-7",
            "extra": "mean: 369.86813166653906 nsec\nrounds: 90910"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 3999.8232245534864,
            "unit": "iter/sec",
            "range": "stddev: 0.00006434997931907668",
            "extra": "mean: 250.01104895370304 usec\nrounds: 2962"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 4067.42007757433,
            "unit": "iter/sec",
            "range": "stddev: 0.00006024518866428823",
            "extra": "mean: 245.8560908211786 usec\nrounds: 3116"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 2693930.147345741,
            "unit": "iter/sec",
            "range": "stddev: 1.961477176035554e-7",
            "extra": "mean: 371.20487366208675 nsec\nrounds: 89286"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 4191.303465402814,
            "unit": "iter/sec",
            "range": "stddev: 0.00003403372851150241",
            "extra": "mean: 238.58926185004663 usec\nrounds: 3502"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 2939799.2278438667,
            "unit": "iter/sec",
            "range": "stddev: 5.424044572613679e-7",
            "extra": "mean: 340.15928384785275 nsec\nrounds: 93458"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 4104.539705529138,
            "unit": "iter/sec",
            "range": "stddev: 0.00004149845617750763",
            "extra": "mean: 243.63267789879612 usec\nrounds: 3235"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 2694838.526498586,
            "unit": "iter/sec",
            "range": "stddev: 0.000001563969218240368",
            "extra": "mean: 371.07974751268245 nsec\nrounds: 85471"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 2998818.0395925213,
            "unit": "iter/sec",
            "range": "stddev: 2.6265529580752614e-7",
            "extra": "mean: 333.4647140295536 nsec\nrounds: 95239"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 3446.4217780710333,
            "unit": "iter/sec",
            "range": "stddev: 0.0003485629395995219",
            "extra": "mean: 290.1560123496264 usec\nrounds: 81"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 2951112.122734931,
            "unit": "iter/sec",
            "range": "stddev: 3.8261027232600577e-7",
            "extra": "mean: 338.8553055291451 nsec\nrounds: 64103"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 3990.796322415517,
            "unit": "iter/sec",
            "range": "stddev: 0.0000857414095497738",
            "extra": "mean: 250.57655645896958 usec\nrounds: 3321"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 3064052.287340745,
            "unit": "iter/sec",
            "range": "stddev: 7.832941420608659e-7",
            "extra": "mean: 326.36518773913525 nsec\nrounds: 103093"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 3996.530340551783,
            "unit": "iter/sec",
            "range": "stddev: 0.000035390496933057866",
            "extra": "mean: 250.2170419809535 usec\nrounds: 3311"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 3926.4384355492743,
            "unit": "iter/sec",
            "range": "stddev: 0.0000960235875938911",
            "extra": "mean: 254.68373346852405 usec\nrounds: 3448"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 2965820.3226241376,
            "unit": "iter/sec",
            "range": "stddev: 1.8168094648884065e-7",
            "extra": "mean: 337.1748424446143 nsec\nrounds: 96154"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 3827.167554893902,
            "unit": "iter/sec",
            "range": "stddev: 0.00012155626134323427",
            "extra": "mean: 261.2898405039187 usec\nrounds: 2859"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 2871515.1692991727,
            "unit": "iter/sec",
            "range": "stddev: 8.533790274437128e-7",
            "extra": "mean: 348.24820383703775 nsec\nrounds: 94340"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 4017.1122003887153,
            "unit": "iter/sec",
            "range": "stddev: 0.00015303189161428458",
            "extra": "mean: 248.93504341333434 usec\nrounds: 2649"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 2965891.0955123957,
            "unit": "iter/sec",
            "range": "stddev: 3.1193618260950457e-7",
            "extra": "mean: 337.166796688449 nsec\nrounds: 95239"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 11588.470975463231,
            "unit": "iter/sec",
            "range": "stddev: 0.00003658572591827543",
            "extra": "mean: 86.29266122487971 usec\nrounds: 5942"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 11378.023918579282,
            "unit": "iter/sec",
            "range": "stddev: 0.000037596351233827515",
            "extra": "mean: 87.88872366203155 usec\nrounds: 7252"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 8777.047003382524,
            "unit": "iter/sec",
            "range": "stddev: 0.000033615011243198615",
            "extra": "mean: 113.93353591642122 usec\nrounds: 4594"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 327.17824890212137,
            "unit": "iter/sec",
            "range": "stddev: 0.00015150699683704608",
            "extra": "mean: 3.0564378999997643 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 151094.10513822976,
            "unit": "iter/sec",
            "range": "stddev: 0.0000196056755314976",
            "extra": "mean: 6.618391889512443 usec\nrounds: 43104"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 147776.19463528486,
            "unit": "iter/sec",
            "range": "stddev: 0.00003033938522861215",
            "extra": "mean: 6.766989787956198 usec\nrounds: 54348"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 84.68085810547137,
            "unit": "iter/sec",
            "range": "stddev: 0.029651294468163284",
            "extra": "mean: 11.809044244148824 msec\nrounds: 299"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 83.79708344349731,
            "unit": "iter/sec",
            "range": "stddev: 0.029608245814986396",
            "extra": "mean: 11.933589558332061 msec\nrounds: 360"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 68332.1119328401,
            "unit": "iter/sec",
            "range": "stddev: 0.000012100423469345359",
            "extra": "mean: 14.634407919117814 usec\nrounds: 27856"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 69619.39164962144,
            "unit": "iter/sec",
            "range": "stddev: 0.000007701768317481742",
            "extra": "mean: 14.363814108470992 usec\nrounds: 27473"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 69.66054126611336,
            "unit": "iter/sec",
            "range": "stddev: 0.029366543135220604",
            "extra": "mean: 14.35532916949145 msec\nrounds: 177"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 69.33485528482355,
            "unit": "iter/sec",
            "range": "stddev: 0.030080151110262014",
            "extra": "mean: 14.422760325842727 msec\nrounds: 178"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 19637.89365562498,
            "unit": "iter/sec",
            "range": "stddev: 0.000026084697126653597",
            "extra": "mean: 50.921958206732874 usec\nrounds: 7226"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 1259.509410732127,
            "unit": "iter/sec",
            "range": "stddev: 0.0001368798568230887",
            "extra": "mean: 793.9599271582422 usec\nrounds: 961"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 1242.987454542013,
            "unit": "iter/sec",
            "range": "stddev: 0.00015785774274114676",
            "extra": "mean: 804.5133491459546 usec\nrounds: 1054"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 23454.231136157796,
            "unit": "iter/sec",
            "range": "stddev: 0.000016710394181065204",
            "extra": "mean: 42.63623029016576 usec\nrounds: 9158"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 32.704026272949804,
            "unit": "iter/sec",
            "range": "stddev: 0.03525900886085297",
            "extra": "mean: 30.577274848483146 msec\nrounds: 33"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 3.4631336152465892,
            "unit": "iter/sec",
            "range": "stddev: 0.05963933028890761",
            "extra": "mean: 288.7558237999997 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 3.548178052544863,
            "unit": "iter/sec",
            "range": "stddev: 0.04681144093088302",
            "extra": "mean: 281.83478540000806 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 35.59429009358072,
            "unit": "iter/sec",
            "range": "stddev: 0.034967814827751485",
            "extra": "mean: 28.09439371795045 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 19655.796199523524,
            "unit": "iter/sec",
            "range": "stddev: 0.00001360039009198563",
            "extra": "mean: 50.87557837134275 usec\nrounds: 7675"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 1268.4608486916645,
            "unit": "iter/sec",
            "range": "stddev: 0.0001037163217516365",
            "extra": "mean: 788.3570084417154 usec\nrounds: 1066"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 1269.2806211186692,
            "unit": "iter/sec",
            "range": "stddev: 0.00008755631877635739",
            "extra": "mean: 787.8478433860109 usec\nrounds: 945"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 23571.633831124327,
            "unit": "iter/sec",
            "range": "stddev: 0.000015045052111315259",
            "extra": "mean: 42.42387299770394 usec\nrounds: 8803"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 35.30497322912538,
            "unit": "iter/sec",
            "range": "stddev: 0.032224478682452984",
            "extra": "mean: 28.324621392859026 msec\nrounds: 28"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 3.526883476378432,
            "unit": "iter/sec",
            "range": "stddev: 0.04340489130169781",
            "extra": "mean: 283.53644419997863 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 3.5358421337345263,
            "unit": "iter/sec",
            "range": "stddev: 0.04411716178297672",
            "extra": "mean: 282.8180563999922 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 36.12276600688305,
            "unit": "iter/sec",
            "range": "stddev: 0.03568602246467471",
            "extra": "mean: 27.683372857146487 msec\nrounds: 42"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 66430.43670145722,
            "unit": "iter/sec",
            "range": "stddev: 0.00001026029070652229",
            "extra": "mean: 15.053340752433499 usec\nrounds: 27856"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 65087.254242566814,
            "unit": "iter/sec",
            "range": "stddev: 0.00002098909496358631",
            "extra": "mean: 15.36399117826058 usec\nrounds: 29586"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 65855.00806989011,
            "unit": "iter/sec",
            "range": "stddev: 0.000011862143935449382",
            "extra": "mean: 15.18487400288111 usec\nrounds: 16421"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 67432.8816614766,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057253659627152366",
            "extra": "mean: 14.829560525385128 usec\nrounds: 25576"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 67.05422154746343,
            "unit": "iter/sec",
            "range": "stddev: 0.030872946309303775",
            "extra": "mean: 14.913304142859422 msec\nrounds: 175"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 66.05506548564796,
            "unit": "iter/sec",
            "range": "stddev: 0.03073188336085739",
            "extra": "mean: 15.138884393616625 msec\nrounds: 188"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 67.33002188951018,
            "unit": "iter/sec",
            "range": "stddev: 0.030285529636002225",
            "extra": "mean: 14.852215578379266 msec\nrounds: 185"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 65.43262337715404,
            "unit": "iter/sec",
            "range": "stddev: 0.031553905436404996",
            "extra": "mean: 15.282896334997815 msec\nrounds: 200"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 91740.12933630735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039241683134224875",
            "extra": "mean: 10.900355245130845 usec\nrounds: 12611"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 68883.16959530246,
            "unit": "iter/sec",
            "range": "stddev: 0.00001817646204966094",
            "extra": "mean: 14.517334290438862 usec\nrounds: 26456"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 70122.35995494339,
            "unit": "iter/sec",
            "range": "stddev: 0.000013988042893838015",
            "extra": "mean: 14.260786440196005 usec\nrounds: 25576"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 88982.39309021398,
            "unit": "iter/sec",
            "range": "stddev: 0.000005419455225965895",
            "extra": "mean: 11.238178310018693 usec\nrounds: 27856"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 76.42899125568772,
            "unit": "iter/sec",
            "range": "stddev: 0.029805267872860544",
            "extra": "mean: 13.084040278048045 msec\nrounds: 205"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 68.21365354010281,
            "unit": "iter/sec",
            "range": "stddev: 0.030518813284663545",
            "extra": "mean: 14.659821723404683 msec\nrounds: 188"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 64.42116940063283,
            "unit": "iter/sec",
            "range": "stddev: 0.03202784892400257",
            "extra": "mean: 15.522847680411349 msec\nrounds: 194"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 72.27979164437143,
            "unit": "iter/sec",
            "range": "stddev: 0.030963408677982415",
            "extra": "mean: 13.835125658913988 msec\nrounds: 258"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 567711.6983954924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017439746012495643",
            "extra": "mean: 1.7614574489591668 usec\nrounds: 37038"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 1345.7527491675687,
            "unit": "iter/sec",
            "range": "stddev: 0.00009881735117474258",
            "extra": "mean: 743.0785488779879 usec\nrounds: 1115"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 1347.5906677570567,
            "unit": "iter/sec",
            "range": "stddev: 0.0003117221405231897",
            "extra": "mean: 742.0650973076341 usec\nrounds: 1151"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 561986.1238328064,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015094188448122217",
            "extra": "mean: 1.7794033653000032 usec\nrounds: 81301"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 4043.94835259993,
            "unit": "iter/sec",
            "range": "stddev: 0.00008985493808138023",
            "extra": "mean: 247.28307901288633 usec\nrounds: 3607"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 4.085741785300662,
            "unit": "iter/sec",
            "range": "stddev: 0.003582229831905913",
            "extra": "mean: 244.75359740004023 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 4.195969918423408,
            "unit": "iter/sec",
            "range": "stddev: 0.0027624882160571995",
            "extra": "mean: 238.32392020001407 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 3940.0262217296895,
            "unit": "iter/sec",
            "range": "stddev: 0.0001740320537971199",
            "extra": "mean: 253.80541745760144 usec\nrounds: 3265"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 438914.7539879706,
            "unit": "iter/sec",
            "range": "stddev: 0.000001742681905881415",
            "extra": "mean: 2.278346742537179 usec\nrounds: 30674"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 1676.353941213403,
            "unit": "iter/sec",
            "range": "stddev: 0.0001835385291677895",
            "extra": "mean: 596.5327341767488 usec\nrounds: 1264"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 1512.7186249332203,
            "unit": "iter/sec",
            "range": "stddev: 0.00008083025660198518",
            "extra": "mean: 661.0614713917107 usec\nrounds: 1171"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 436769.78464466153,
            "unit": "iter/sec",
            "range": "stddev: 0.000004115922914209091",
            "extra": "mean: 2.289535666514935 usec\nrounds: 60603"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 2490.3439036460004,
            "unit": "iter/sec",
            "range": "stddev: 0.0001455266488733909",
            "extra": "mean: 401.55096592721395 usec\nrounds: 2524"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 5.019536961449018,
            "unit": "iter/sec",
            "range": "stddev: 0.005149743388231727",
            "extra": "mean: 199.22156319998976 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 4.330068221142462,
            "unit": "iter/sec",
            "range": "stddev: 0.007797399742502019",
            "extra": "mean: 230.94324360001792 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 2514.615586320501,
            "unit": "iter/sec",
            "range": "stddev: 0.00008348320317040545",
            "extra": "mean: 397.6750981104214 usec\nrounds: 2222"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 20084.932440903835,
            "unit": "iter/sec",
            "range": "stddev: 0.000015575715107678682",
            "extra": "mean: 49.788566774735905 usec\nrounds: 7705"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 1205.103200701813,
            "unit": "iter/sec",
            "range": "stddev: 0.00026861821009546526",
            "extra": "mean: 829.8044511189021 usec\nrounds: 982"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 1258.799264935323,
            "unit": "iter/sec",
            "range": "stddev: 0.000164406198523691",
            "extra": "mean: 794.4078359875591 usec\nrounds: 1067"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 23523.592069898186,
            "unit": "iter/sec",
            "range": "stddev: 0.00007775434337815177",
            "extra": "mean: 42.510514424352884 usec\nrounds: 8666"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 34.614152337794394,
            "unit": "iter/sec",
            "range": "stddev: 0.03458898689443394",
            "extra": "mean: 28.889917344823232 msec\nrounds: 29"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 3.443676314611626,
            "unit": "iter/sec",
            "range": "stddev: 0.056493461844173226",
            "extra": "mean: 290.3873386000214 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 3.4939202555681037,
            "unit": "iter/sec",
            "range": "stddev: 0.04870808430618198",
            "extra": "mean: 286.211454999966 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 35.96766248174486,
            "unit": "iter/sec",
            "range": "stddev: 0.03621912364534493",
            "extra": "mean: 27.802752000009537 msec\nrounds: 41"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 19896.117448348945,
            "unit": "iter/sec",
            "range": "stddev: 0.000011509174437805047",
            "extra": "mean: 50.26106237038643 usec\nrounds: 7728"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 1281.329295283518,
            "unit": "iter/sec",
            "range": "stddev: 0.0001102127043609021",
            "extra": "mean: 780.4395042561886 usec\nrounds: 1057"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 1305.975232371102,
            "unit": "iter/sec",
            "range": "stddev: 0.00004889122206100737",
            "extra": "mean: 765.7113054008079 usec\nrounds: 1074"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 24005.37373193362,
            "unit": "iter/sec",
            "range": "stddev: 0.00000971549552718838",
            "extra": "mean: 41.65733935938395 usec\nrounds: 8961"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 33.43947984803058,
            "unit": "iter/sec",
            "range": "stddev: 0.03500208536109994",
            "extra": "mean: 29.904771382348372 msec\nrounds: 34"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 3.556248941277907,
            "unit": "iter/sec",
            "range": "stddev: 0.04869088654025734",
            "extra": "mean: 281.1951628000088 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 3.472889537946842,
            "unit": "iter/sec",
            "range": "stddev: 0.04688517941102594",
            "extra": "mean: 287.944660800008 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 34.94171445478033,
            "unit": "iter/sec",
            "range": "stddev: 0.03661055500796204",
            "extra": "mean: 28.619087975609943 msec\nrounds: 41"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 68203.74566975574,
            "unit": "iter/sec",
            "range": "stddev: 0.000009857525523719452",
            "extra": "mean: 14.661951336837502 usec\nrounds: 30865"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 68442.4300363565,
            "unit": "iter/sec",
            "range": "stddev: 0.000019647790321709372",
            "extra": "mean: 14.610819625615306 usec\nrounds: 29411"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 69255.43473098722,
            "unit": "iter/sec",
            "range": "stddev: 0.000006686490702653589",
            "extra": "mean: 14.439300018610181 usec\nrounds: 26525"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 68643.47435747045,
            "unit": "iter/sec",
            "range": "stddev: 0.000006960201966553067",
            "extra": "mean: 14.56802717753418 usec\nrounds: 15748"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 67.7688548032509,
            "unit": "iter/sec",
            "range": "stddev: 0.031255239179956346",
            "extra": "mean: 14.756041000002698 msec\nrounds: 180"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 66.22298263399722,
            "unit": "iter/sec",
            "range": "stddev: 0.032044059709978756",
            "extra": "mean: 15.10049774602911 msec\nrounds: 189"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 66.54886465987661,
            "unit": "iter/sec",
            "range": "stddev: 0.031324340587630804",
            "extra": "mean: 15.026552370365472 msec\nrounds: 189"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 67.70245522707307,
            "unit": "iter/sec",
            "range": "stddev: 0.031330877305701714",
            "extra": "mean: 14.770513072916103 msec\nrounds: 192"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 92619.12692384729,
            "unit": "iter/sec",
            "range": "stddev: 0.000007111127921513397",
            "extra": "mean: 10.79690592227471 usec\nrounds: 26882"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 70497.17066948305,
            "unit": "iter/sec",
            "range": "stddev: 0.00000572100943841212",
            "extra": "mean: 14.18496643912664 usec\nrounds: 23867"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 68167.66862186372,
            "unit": "iter/sec",
            "range": "stddev: 0.000021835144020285013",
            "extra": "mean: 14.6697110260166 usec\nrounds: 23753"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 92612.08727967725,
            "unit": "iter/sec",
            "range": "stddev: 0.000008224088479831248",
            "extra": "mean: 10.797726618342178 usec\nrounds: 26955"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 254.2480685414237,
            "unit": "iter/sec",
            "range": "stddev: 0.00008688054165185805",
            "extra": "mean: 3.9331665555487736 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 65.48034893690179,
            "unit": "iter/sec",
            "range": "stddev: 0.03209846915923363",
            "extra": "mean: 15.271757347591727 msec\nrounds: 187"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 65.59467998494155,
            "unit": "iter/sec",
            "range": "stddev: 0.03211400771257243",
            "extra": "mean: 15.245138786096193 msec\nrounds: 187"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 70.60923350585874,
            "unit": "iter/sec",
            "range": "stddev: 0.032550046038091425",
            "extra": "mean: 14.16245369547916 msec\nrounds: 243"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 599848.8696358628,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018994089461878874",
            "extra": "mean: 1.6670865790028884 usec\nrounds: 85471"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 1315.5988648246862,
            "unit": "iter/sec",
            "range": "stddev: 0.00016652243214083953",
            "extra": "mean: 760.1101116283327 usec\nrounds: 1075"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 1349.5669037774076,
            "unit": "iter/sec",
            "range": "stddev: 0.0003051480038987989",
            "extra": "mean: 740.9784555334177 usec\nrounds: 1102"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 597003.9027548281,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016226809331401409",
            "extra": "mean: 1.6750309259044667 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 4145.86296334938,
            "unit": "iter/sec",
            "range": "stddev: 0.000044429622513572006",
            "extra": "mean: 241.20430627840025 usec\nrounds: 3647"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 4.126802756230492,
            "unit": "iter/sec",
            "range": "stddev: 0.0006031779228541074",
            "extra": "mean: 242.31834159998016 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 4.151589225905915,
            "unit": "iter/sec",
            "range": "stddev: 0.004955009712203121",
            "extra": "mean: 240.8716146000188 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 3882.425571456891,
            "unit": "iter/sec",
            "range": "stddev: 0.00011719622971001384",
            "extra": "mean: 257.5709389902733 usec\nrounds: 3229"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 451455.87391149276,
            "unit": "iter/sec",
            "range": "stddev: 0.000008188542237017752",
            "extra": "mean: 2.215055906429625 usec\nrounds: 70922"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 1644.2731918741413,
            "unit": "iter/sec",
            "range": "stddev: 0.00006209650429353675",
            "extra": "mean: 608.1714431287423 usec\nrounds: 1266"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 1446.0178874949713,
            "unit": "iter/sec",
            "range": "stddev: 0.0002051707219061308",
            "extra": "mean: 691.5543774720267 usec\nrounds: 1012"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 454854.7033501042,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018865450630155468",
            "extra": "mean: 2.198504253412753 usec\nrounds: 96154"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 2523.285766084689,
            "unit": "iter/sec",
            "range": "stddev: 0.00008094360025216595",
            "extra": "mean: 396.308659701145 usec\nrounds: 2489"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 5.030480820178366,
            "unit": "iter/sec",
            "range": "stddev: 0.0015983294180728148",
            "extra": "mean: 198.78815479999048 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 4.567377008403017,
            "unit": "iter/sec",
            "range": "stddev: 0.0012281748584942324",
            "extra": "mean: 218.9440455999602 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 2486.028832117388,
            "unit": "iter/sec",
            "range": "stddev: 0.00012070043365519526",
            "extra": "mean: 402.24794945289716 usec\nrounds: 2473"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hernan.grecco@gmail.com",
            "name": "Hernan",
            "username": "hgrecco"
          },
          "committer": {
            "email": "hernan.grecco@gmail.com",
            "name": "Hernan",
            "username": "hgrecco"
          },
          "distinct": true,
          "id": "a4ad03de8a22358021d7b29df2472b75fc0db4b4",
          "message": "Pint 0.1.1",
          "timestamp": "2022-11-26T22:57:04-03:00",
          "tree_id": "1ae53ad183d367d0800a855a470da58b3a6d0dfa",
          "url": "https://github.com/hgrecco/pint-benchmark/commit/a4ad03de8a22358021d7b29df2472b75fc0db4b4"
        },
        "date": 1669515386213,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 30.62099678180547,
            "unit": "iter/sec",
            "range": "stddev: 0.0006802997000247882",
            "extra": "mean: 32.65733010344669 msec\nrounds: 29"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 2004100.3798785084,
            "unit": "iter/sec",
            "range": "stddev: 1.507700783010114e-7",
            "extra": "mean: 498.9770023698221 nsec\nrounds: 188715"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 48.94294657811362,
            "unit": "iter/sec",
            "range": "stddev: 0.00004830239478892926",
            "extra": "mean: 20.431953323529186 msec\nrounds: 34"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 2218.353533894711,
            "unit": "iter/sec",
            "range": "stddev: 0.000007742789283717407",
            "extra": "mean: 450.78477560982975 usec\nrounds: 1640"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 17425.210041174876,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018306786078843154",
            "extra": "mean: 57.38811742510141 usec\nrounds: 12723"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 17479.836400761636,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018799527860000545",
            "extra": "mean: 57.20877341600449 usec\nrounds: 4356"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 17212.801842724657,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042820873392366466",
            "extra": "mean: 58.0962942080618 usec\nrounds: 12362"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 17327.370185637286,
            "unit": "iter/sec",
            "range": "stddev: 0.000001631461533456308",
            "extra": "mean: 57.71216227774156 usec\nrounds: 11696"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 17532.100917164036,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016232327289487827",
            "extra": "mean: 57.03822974353255 usec\nrounds: 12675"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 17109.937267230678,
            "unit": "iter/sec",
            "range": "stddev: 0.000001992154580603811",
            "extra": "mean: 58.44556788149199 usec\nrounds: 12485"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 17165.660630563707,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017387507440912786",
            "extra": "mean: 58.2558412123962 usec\nrounds: 12438"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 17163.102553298573,
            "unit": "iter/sec",
            "range": "stddev: 0.000014015443866151693",
            "extra": "mean: 58.264523963227745 usec\nrounds: 12707"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 17244.339168730105,
            "unit": "iter/sec",
            "range": "stddev: 0.000001772075556173415",
            "extra": "mean: 57.990044745428264 usec\nrounds: 12627"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 17125.02755674014,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016990960282852421",
            "extra": "mean: 58.39406661897112 usec\nrounds: 12579"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 16439.122004036137,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017746335435407318",
            "extra": "mean: 60.83049932681806 usec\nrounds: 13370"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 16390.739834134834,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018349022605192337",
            "extra": "mean: 61.010058735569196 usec\nrounds: 14046"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 16343.648427516244,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018169390260046625",
            "extra": "mean: 61.18584870660797 usec\nrounds: 12988"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 14730515.223709079,
            "unit": "iter/sec",
            "range": "stddev: 4.10029146551264e-9",
            "extra": "mean: 67.88628807716228 nsec\nrounds: 140865"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 14159099.252100669,
            "unit": "iter/sec",
            "range": "stddev: 1.3083473219624543e-8",
            "extra": "mean: 70.62596159515336 nsec\nrounds: 138889"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 12922305.84811714,
            "unit": "iter/sec",
            "range": "stddev: 3.993537923401245e-9",
            "extra": "mean: 77.38556970813116 nsec\nrounds: 128206"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 15251341.53750224,
            "unit": "iter/sec",
            "range": "stddev: 4.068027631530506e-9",
            "extra": "mean: 65.56800249616803 nsec\nrounds: 153847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 14943933.481301663,
            "unit": "iter/sec",
            "range": "stddev: 3.911116675676954e-9",
            "extra": "mean: 66.91678608265259 nsec\nrounds: 149254"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 15006610.73256409,
            "unit": "iter/sec",
            "range": "stddev: 4.261995712026638e-9",
            "extra": "mean: 66.63729857612243 nsec\nrounds: 142858"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 76337.99692480452,
            "unit": "iter/sec",
            "range": "stddev: 6.439912004026552e-7",
            "extra": "mean: 13.0996363578289 usec\nrounds: 15749"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 5264.268863073243,
            "unit": "iter/sec",
            "range": "stddev: 0.000004007253441495884",
            "extra": "mean: 189.9599025069945 usec\nrounds: 3590"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 76463.04637800307,
            "unit": "iter/sec",
            "range": "stddev: 5.786305163236393e-7",
            "extra": "mean: 13.078212906354729 usec\nrounds: 22423"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 5243.49318753219,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032188954387200208",
            "extra": "mean: 190.7125582574929 usec\nrounds: 3948"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 76289.47601519884,
            "unit": "iter/sec",
            "range": "stddev: 5.596722082145827e-7",
            "extra": "mean: 13.10796786441126 usec\nrounds: 22125"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 5266.498262539025,
            "unit": "iter/sec",
            "range": "stddev: 0.000003319106124000767",
            "extra": "mean: 189.87948920691207 usec\nrounds: 4123"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 5282.374876965932,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033195766093900973",
            "extra": "mean: 189.30879070331633 usec\nrounds: 4066"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 93860.95388795041,
            "unit": "iter/sec",
            "range": "stddev: 5.046716735859858e-7",
            "extra": "mean: 10.654057502907788 usec\nrounds: 28329"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 5272.407698289048,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032622467902367614",
            "extra": "mean: 189.66666791047106 usec\nrounds: 4020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 93366.10647369159,
            "unit": "iter/sec",
            "range": "stddev: 5.629775077839709e-7",
            "extra": "mean: 10.710524812146655 usec\nrounds: 26882"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 5258.747302337768,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035327538517958966",
            "extra": "mean: 190.15935592787497 usec\nrounds: 3939"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 92797.62494854127,
            "unit": "iter/sec",
            "range": "stddev: 5.384579403762547e-7",
            "extra": "mean: 10.776137865107286 usec\nrounds: 27701"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 76879.85712855037,
            "unit": "iter/sec",
            "range": "stddev: 5.640170107204721e-7",
            "extra": "mean: 13.007308251469635 usec\nrounds: 24214"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 5244.33351859427,
            "unit": "iter/sec",
            "range": "stddev: 0.000003132336373032396",
            "extra": "mean: 190.68199923868448 usec\nrounds: 3941"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 75527.92345661607,
            "unit": "iter/sec",
            "range": "stddev: 7.041560954453465e-7",
            "extra": "mean: 13.240136286474353 usec\nrounds: 22372"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 5183.64621820627,
            "unit": "iter/sec",
            "range": "stddev: 0.0000059184508704045845",
            "extra": "mean: 192.91440000047618 usec\nrounds: 95"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 75453.0956784618,
            "unit": "iter/sec",
            "range": "stddev: 6.20788228947852e-7",
            "extra": "mean: 13.25326669513245 usec\nrounds: 23420"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 5214.388165903115,
            "unit": "iter/sec",
            "range": "stddev: 0.000003154614138966375",
            "extra": "mean: 191.7770538332762 usec\nrounds: 3548"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 5251.065928949986,
            "unit": "iter/sec",
            "range": "stddev: 0.000003232699998547877",
            "extra": "mean: 190.43752516738292 usec\nrounds: 4033"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 91570.02762296423,
            "unit": "iter/sec",
            "range": "stddev: 4.701867020069328e-7",
            "extra": "mean: 10.920603891455164 usec\nrounds: 27856"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 5228.927321727639,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030548796478178265",
            "extra": "mean: 191.24381320901585 usec\nrounds: 3967"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 93252.07642968778,
            "unit": "iter/sec",
            "range": "stddev: 5.888323520841622e-7",
            "extra": "mean: 10.72362180325284 usec\nrounds: 26042"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 5246.764827924406,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030881529038786263",
            "extra": "mean: 190.5936387081399 usec\nrounds: 3994"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 92018.00609146671,
            "unit": "iter/sec",
            "range": "stddev: 5.881829813590999e-7",
            "extra": "mean: 10.867438259920469 usec\nrounds: 25907"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 76221.65928123945,
            "unit": "iter/sec",
            "range": "stddev: 6.184996637824385e-7",
            "extra": "mean: 13.119630423030314 usec\nrounds: 22174"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 5219.181380035305,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033682818623559373",
            "extra": "mean: 191.6009288018336 usec\nrounds: 4031"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 76292.4757865404,
            "unit": "iter/sec",
            "range": "stddev: 5.465736953257929e-7",
            "extra": "mean: 13.107452467500357 usec\nrounds: 22574"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 5209.455170854839,
            "unit": "iter/sec",
            "range": "stddev: 0.000003266988444737787",
            "extra": "mean: 191.95865348734853 usec\nrounds: 4072"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 75267.28578146144,
            "unit": "iter/sec",
            "range": "stddev: 6.524862964434761e-7",
            "extra": "mean: 13.285984602972132 usec\nrounds: 22472"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 5215.670923039137,
            "unit": "iter/sec",
            "range": "stddev: 0.000003488238484922748",
            "extra": "mean: 191.7298876320415 usec\nrounds: 4067"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 5240.239781006717,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032103303193310272",
            "extra": "mean: 190.83096228239526 usec\nrounds: 4136"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 92196.38445538604,
            "unit": "iter/sec",
            "range": "stddev: 5.39626394403298e-7",
            "extra": "mean: 10.846412317653318 usec\nrounds: 26596"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 5269.455063529087,
            "unit": "iter/sec",
            "range": "stddev: 0.000003122580141235529",
            "extra": "mean: 189.77294387064663 usec\nrounds: 3777"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 92341.15895855421,
            "unit": "iter/sec",
            "range": "stddev: 6.607766318744006e-7",
            "extra": "mean: 10.82940707348966 usec\nrounds: 27398"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 5252.161824665755,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036637873189069134",
            "extra": "mean: 190.39778921199544 usec\nrounds: 4023"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 92499.87801207649,
            "unit": "iter/sec",
            "range": "stddev: 5.779945432441199e-7",
            "extra": "mean: 10.810825068001098 usec\nrounds: 26456"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 75718.36248988907,
            "unit": "iter/sec",
            "range": "stddev: 5.859317534096943e-7",
            "extra": "mean: 13.206836058208909 usec\nrounds: 20001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 5274.938420120275,
            "unit": "iter/sec",
            "range": "stddev: 0.000003112181038574227",
            "extra": "mean: 189.57567280514314 usec\nrounds: 3964"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 76348.31928093072,
            "unit": "iter/sec",
            "range": "stddev: 5.40077174922061e-7",
            "extra": "mean: 13.097865276122285 usec\nrounds: 22676"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 5147.968553390114,
            "unit": "iter/sec",
            "range": "stddev: 0.00027286088475071544",
            "extra": "mean: 194.25138083671197 usec\nrounds: 4112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 75469.1832758616,
            "unit": "iter/sec",
            "range": "stddev: 6.461251578852723e-7",
            "extra": "mean: 13.250441525843895 usec\nrounds: 22728"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 5243.43547219076,
            "unit": "iter/sec",
            "range": "stddev: 0.000003125155379359121",
            "extra": "mean: 190.71465746143528 usec\nrounds: 3947"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 5267.612356322538,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032729184903618897",
            "extra": "mean: 189.83932991950965 usec\nrounds: 4101"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 91490.14478057234,
            "unit": "iter/sec",
            "range": "stddev: 5.03580758495108e-7",
            "extra": "mean: 10.9301390045712 usec\nrounds: 26179"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 5273.306224648415,
            "unit": "iter/sec",
            "range": "stddev: 0.000003226008511740939",
            "extra": "mean: 189.63435032955488 usec\nrounds: 4099"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 91442.36876693477,
            "unit": "iter/sec",
            "range": "stddev: 6.254514649068757e-7",
            "extra": "mean: 10.935849688548274 usec\nrounds: 26811"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 5254.4663930132665,
            "unit": "iter/sec",
            "range": "stddev: 0.000003148082316973358",
            "extra": "mean: 190.31428221325675 usec\nrounds: 3958"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 91958.44482493719,
            "unit": "iter/sec",
            "range": "stddev: 6.311590872711678e-7",
            "extra": "mean: 10.874477073896982 usec\nrounds: 26738"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 75031.82986071154,
            "unit": "iter/sec",
            "range": "stddev: 5.600442814286553e-7",
            "extra": "mean: 13.327677091927407 usec\nrounds: 23149"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 5237.740631146148,
            "unit": "iter/sec",
            "range": "stddev: 0.000003279793795315592",
            "extra": "mean: 190.9220158885903 usec\nrounds: 4028"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 75249.73547161662,
            "unit": "iter/sec",
            "range": "stddev: 5.288948515768098e-7",
            "extra": "mean: 13.289083260328391 usec\nrounds: 22832"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 5272.343195750602,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035642328483340633",
            "extra": "mean: 189.66898831737262 usec\nrounds: 4023"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 75588.75569162186,
            "unit": "iter/sec",
            "range": "stddev: 7.680824309306363e-7",
            "extra": "mean: 13.229480904272094 usec\nrounds: 22780"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 5229.980999373571,
            "unit": "iter/sec",
            "range": "stddev: 0.000003898398754303558",
            "extra": "mean: 191.20528356026085 usec\nrounds: 4112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 5285.387374711381,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033961038118152043",
            "extra": "mean: 189.20089089110652 usec\nrounds: 4051"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 91601.23649531436,
            "unit": "iter/sec",
            "range": "stddev: 5.699168588582746e-7",
            "extra": "mean: 10.916883202238788 usec\nrounds: 26456"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 5278.768159493676,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037387971302637784",
            "extra": "mean: 189.43813590326673 usec\nrounds: 4047"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 91256.03068249534,
            "unit": "iter/sec",
            "range": "stddev: 4.772616810036008e-7",
            "extra": "mean: 10.958179887083553 usec\nrounds: 26739"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 5266.746092968146,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031518826467053156",
            "extra": "mean: 189.87055429445178 usec\nrounds: 3877"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 91521.69892213278,
            "unit": "iter/sec",
            "range": "stddev: 5.878372809179958e-7",
            "extra": "mean: 10.926370596013587 usec\nrounds: 27248"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 75124.62956835303,
            "unit": "iter/sec",
            "range": "stddev: 5.68843363800713e-7",
            "extra": "mean: 13.31121372239364 usec\nrounds: 23203"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 5263.831154570421,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031318124792980856",
            "extra": "mean: 189.97569842864945 usec\nrounds: 4009"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 75402.06428379998,
            "unit": "iter/sec",
            "range": "stddev: 5.871688021573478e-7",
            "extra": "mean: 13.262236379048955 usec\nrounds: 23585"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 5228.534570847001,
            "unit": "iter/sec",
            "range": "stddev: 0.000049812912130943675",
            "extra": "mean: 191.2581788357582 usec\nrounds: 4054"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 75116.07508604493,
            "unit": "iter/sec",
            "range": "stddev: 6.690311610087238e-7",
            "extra": "mean: 13.31272965013823 usec\nrounds: 23096"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 5265.470046256384,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029605376676490668",
            "extra": "mean: 189.91656798256304 usec\nrounds: 4104"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 5280.64721371483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028056263964707287",
            "extra": "mean: 189.37072664176702 usec\nrounds: 3746"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 90876.92989533255,
            "unit": "iter/sec",
            "range": "stddev: 6.245685396172444e-7",
            "extra": "mean: 11.003892859846271 usec\nrounds: 26526"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 5277.765050888419,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028649956337592907",
            "extra": "mean: 189.47414111048153 usec\nrounds: 4089"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 91141.76036542097,
            "unit": "iter/sec",
            "range": "stddev: 5.405458174075533e-7",
            "extra": "mean: 10.971918865629002 usec\nrounds: 27399"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 5265.457273051542,
            "unit": "iter/sec",
            "range": "stddev: 0.000002911290330424313",
            "extra": "mean: 189.91702869150055 usec\nrounds: 4043"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 89999.13845620405,
            "unit": "iter/sec",
            "range": "stddev: 9.616495591500042e-7",
            "extra": "mean: 11.111217475560906 usec\nrounds: 27856"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 263912.1022587945,
            "unit": "iter/sec",
            "range": "stddev: 2.430698787634888e-7",
            "extra": "mean: 3.7891403669673 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 262348.05716343434,
            "unit": "iter/sec",
            "range": "stddev: 2.368383567341799e-7",
            "extra": "mean: 3.811730152730014 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 261998.9478297667,
            "unit": "iter/sec",
            "range": "stddev: 2.5144620212605934e-7",
            "extra": "mean: 3.8168092211185067 usec\nrounds: 86215"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 259761.88529477312,
            "unit": "iter/sec",
            "range": "stddev: 2.5460846743278256e-7",
            "extra": "mean: 3.8496794819040443 usec\nrounds: 85471"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 259259.88977514626,
            "unit": "iter/sec",
            "range": "stddev: 3.442606819559672e-7",
            "extra": "mean: 3.8571334766333925 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 256853.74499894105,
            "unit": "iter/sec",
            "range": "stddev: 3.4273681414839794e-7",
            "extra": "mean: 3.8932661854088315 usec\nrounds: 81308"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 260386.38268116233,
            "unit": "iter/sec",
            "range": "stddev: 2.6993310365867703e-7",
            "extra": "mean: 3.840446607472861 usec\nrounds: 82652"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 262463.3869757067,
            "unit": "iter/sec",
            "range": "stddev: 2.965675309039652e-7",
            "extra": "mean: 3.810055229122525 usec\nrounds: 88504"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 259266.70844932497,
            "unit": "iter/sec",
            "range": "stddev: 3.286340329887775e-7",
            "extra": "mean: 3.8570320346218114 usec\nrounds: 84034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 262018.24617198078,
            "unit": "iter/sec",
            "range": "stddev: 2.760814633800431e-7",
            "extra": "mean: 3.8165281029460463 usec\nrounds: 95239"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 254074.6533968786,
            "unit": "iter/sec",
            "range": "stddev: 4.007001093990268e-7",
            "extra": "mean: 3.935851084043181 usec\nrounds: 85471"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 258709.73825465623,
            "unit": "iter/sec",
            "range": "stddev: 3.9569250456768894e-7",
            "extra": "mean: 3.8653357494245855 usec\nrounds: 90091"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 268331.2724504754,
            "unit": "iter/sec",
            "range": "stddev: 3.0745369659337446e-7",
            "extra": "mean: 3.726736697022764 usec\nrounds: 94340"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 262054.9700790272,
            "unit": "iter/sec",
            "range": "stddev: 2.963925732778838e-7",
            "extra": "mean: 3.8159932616367964 usec\nrounds: 86965"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 262448.023650572,
            "unit": "iter/sec",
            "range": "stddev: 2.7438721866944384e-7",
            "extra": "mean: 3.8102782642075366 usec\nrounds: 90910"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 265839.5338624206,
            "unit": "iter/sec",
            "range": "stddev: 2.7563955913104895e-7",
            "extra": "mean: 3.76166774546606 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 257194.20462931172,
            "unit": "iter/sec",
            "range": "stddev: 3.7305755391400075e-7",
            "extra": "mean: 3.8881124924306816 usec\nrounds: 89286"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 257814.79139157364,
            "unit": "iter/sec",
            "range": "stddev: 3.8987995082622375e-7",
            "extra": "mean: 3.8787534051185695 usec\nrounds: 70922"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 264447.8741316359,
            "unit": "iter/sec",
            "range": "stddev: 2.986606758892909e-7",
            "extra": "mean: 3.781463561708285 usec\nrounds: 84746"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 217394.3533406658,
            "unit": "iter/sec",
            "range": "stddev: 0.000002118004797496943",
            "extra": "mean: 4.599935484216369 usec\nrounds: 62"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 265134.92249902553,
            "unit": "iter/sec",
            "range": "stddev: 2.9492015779048776e-7",
            "extra": "mean: 3.7716645946694376 usec\nrounds: 89286"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 265663.6188126315,
            "unit": "iter/sec",
            "range": "stddev: 2.831915256473529e-7",
            "extra": "mean: 3.7641586170866876 usec\nrounds: 87727"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 253450.71926452185,
            "unit": "iter/sec",
            "range": "stddev: 3.614612417745492e-7",
            "extra": "mean: 3.945540193777546 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 262852.91021565965,
            "unit": "iter/sec",
            "range": "stddev: 3.589833808086204e-7",
            "extra": "mean: 3.8044090863576225 usec\nrounds: 90091"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 264033.2067760846,
            "unit": "iter/sec",
            "range": "stddev: 3.950897649526351e-7",
            "extra": "mean: 3.7874023961238246 usec\nrounds: 61350"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 257999.00640647305,
            "unit": "iter/sec",
            "range": "stddev: 4.3697795260921015e-7",
            "extra": "mean: 3.875983919195863 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 263592.0870647173,
            "unit": "iter/sec",
            "range": "stddev: 3.586217772313781e-7",
            "extra": "mean: 3.7937405903784938 usec\nrounds: 85471"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 256484.60613317147,
            "unit": "iter/sec",
            "range": "stddev: 3.760152522542125e-7",
            "extra": "mean: 3.8988694685277987 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 257275.13581985843,
            "unit": "iter/sec",
            "range": "stddev: 3.601880849345744e-7",
            "extra": "mean: 3.8868894066008393 usec\nrounds: 96154"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 259190.38292847914,
            "unit": "iter/sec",
            "range": "stddev: 3.551355177245239e-7",
            "extra": "mean: 3.858167840571228 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 256322.76624695078,
            "unit": "iter/sec",
            "range": "stddev: 3.751391869263039e-7",
            "extra": "mean: 3.9013311795978485 usec\nrounds: 86207"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 262197.2748996453,
            "unit": "iter/sec",
            "range": "stddev: 3.404662726212036e-7",
            "extra": "mean: 3.8139221713221274 usec\nrounds: 86215"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 259889.90078055306,
            "unit": "iter/sec",
            "range": "stddev: 3.680216039946529e-7",
            "extra": "mean: 3.847783222805507 usec\nrounds: 84746"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 262359.7162876656,
            "unit": "iter/sec",
            "range": "stddev: 3.6852735795684825e-7",
            "extra": "mean: 3.811560761498709 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 256155.4436843167,
            "unit": "iter/sec",
            "range": "stddev: 3.753393504977834e-7",
            "extra": "mean: 3.90387955694742 usec\nrounds: 83334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 257301.51560565844,
            "unit": "iter/sec",
            "range": "stddev: 3.7419423428407267e-7",
            "extra": "mean: 3.8864909040512803 usec\nrounds: 83334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 351495.8979230391,
            "unit": "iter/sec",
            "range": "stddev: 2.2320972956153215e-7",
            "extra": "mean: 2.844983414910158 usec\nrounds: 65360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 260017.14781614175,
            "unit": "iter/sec",
            "range": "stddev: 2.7853523704977646e-7",
            "extra": "mean: 3.8459001969635502 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 264818.33410714037,
            "unit": "iter/sec",
            "range": "stddev: 3.5352626339799316e-7",
            "extra": "mean: 3.7761735922536968 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 265631.2328728747,
            "unit": "iter/sec",
            "range": "stddev: 2.8902124384368054e-7",
            "extra": "mean: 3.7646175458537967 usec\nrounds: 81968"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 259456.61752275692,
            "unit": "iter/sec",
            "range": "stddev: 3.567751646296649e-7",
            "extra": "mean: 3.85420888296399 usec\nrounds: 84746"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 259000.73635574902,
            "unit": "iter/sec",
            "range": "stddev: 4.118222866171796e-7",
            "extra": "mean: 3.8609928839215946 usec\nrounds: 83334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 265920.5000445925,
            "unit": "iter/sec",
            "range": "stddev: 3.516865109055074e-7",
            "extra": "mean: 3.760522411142838 usec\nrounds: 81968"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 364010.20086195495,
            "unit": "iter/sec",
            "range": "stddev: 2.5226757610018146e-7",
            "extra": "mean: 2.747175759448659 usec\nrounds: 75188"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 263015.2014348101,
            "unit": "iter/sec",
            "range": "stddev: 2.960111242605482e-7",
            "extra": "mean: 3.8020616091570507 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 267250.5248350945,
            "unit": "iter/sec",
            "range": "stddev: 3.1616536069294157e-7",
            "extra": "mean: 3.7418074318733128 usec\nrounds: 80652"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 238859.60874635563,
            "unit": "iter/sec",
            "range": "stddev: 0.00007198265740379557",
            "extra": "mean: 4.186559650032322 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 263676.5102886351,
            "unit": "iter/sec",
            "range": "stddev: 3.8452272599892384e-7",
            "extra": "mean: 3.79252592089202 usec\nrounds: 71429"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 269811.59607714845,
            "unit": "iter/sec",
            "range": "stddev: 2.655410607230538e-7",
            "extra": "mean: 3.706289924299864 usec\nrounds: 71429"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 264512.7429912286,
            "unit": "iter/sec",
            "range": "stddev: 2.694851172744877e-7",
            "extra": "mean: 3.7805361990940476 usec\nrounds: 72999"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 356067.98937112535,
            "unit": "iter/sec",
            "range": "stddev: 2.869308779378007e-7",
            "extra": "mean: 2.8084524019307784 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 268314.89609509514,
            "unit": "iter/sec",
            "range": "stddev: 3.084246043539721e-7",
            "extra": "mean: 3.7269641550038424 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 259133.44572676782,
            "unit": "iter/sec",
            "range": "stddev: 3.6407538515234354e-7",
            "extra": "mean: 3.8590155631797805 usec\nrounds: 72993"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 254953.71421855772,
            "unit": "iter/sec",
            "range": "stddev: 4.460889854796412e-7",
            "extra": "mean: 3.9222805718482507 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 264431.36624250433,
            "unit": "iter/sec",
            "range": "stddev: 2.9056698378597617e-7",
            "extra": "mean: 3.78169963045504 usec\nrounds: 83334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 269908.6223205044,
            "unit": "iter/sec",
            "range": "stddev: 3.047493148555539e-7",
            "extra": "mean: 3.7049575941762423 usec\nrounds: 78126"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 271204.2097659351,
            "unit": "iter/sec",
            "range": "stddev: 3.285324793764208e-7",
            "extra": "mean: 3.687258397880541 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 356516.2717283839,
            "unit": "iter/sec",
            "range": "stddev: 2.278953098683213e-7",
            "extra": "mean: 2.804921063355733 usec\nrounds: 78126"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 257259.90880708693,
            "unit": "iter/sec",
            "range": "stddev: 4.044197682759998e-7",
            "extra": "mean: 3.8871194685444603 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 259362.72634685136,
            "unit": "iter/sec",
            "range": "stddev: 4.1326972885272137e-7",
            "extra": "mean: 3.8556041343530545 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 262701.3522502062,
            "unit": "iter/sec",
            "range": "stddev: 4.746262260217586e-7",
            "extra": "mean: 3.8066039304113057 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 260466.413632475,
            "unit": "iter/sec",
            "range": "stddev: 4.169622504082398e-7",
            "extra": "mean: 3.8392665912428403 usec\nrounds: 81308"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 262293.26573557523,
            "unit": "iter/sec",
            "range": "stddev: 3.504338267881993e-7",
            "extra": "mean: 3.812526399393443 usec\nrounds: 72464"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 260943.37486548285,
            "unit": "iter/sec",
            "range": "stddev: 3.787677815215724e-7",
            "extra": "mean: 3.8322490483443135 usec\nrounds: 81968"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 347865.39416522486,
            "unit": "iter/sec",
            "range": "stddev: 3.1084082011555383e-7",
            "extra": "mean: 2.874675138065134 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 262143.34686172096,
            "unit": "iter/sec",
            "range": "stddev: 4.0768077337041895e-7",
            "extra": "mean: 3.8147067700615493 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 260252.91019118438,
            "unit": "iter/sec",
            "range": "stddev: 3.42686427421186e-7",
            "extra": "mean: 3.8424162068558236 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 264614.70388917514,
            "unit": "iter/sec",
            "range": "stddev: 3.5949875322106886e-7",
            "extra": "mean: 3.7790794891685833 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 257430.0406718312,
            "unit": "iter/sec",
            "range": "stddev: 4.115095187853974e-7",
            "extra": "mean: 3.884550526388598 usec\nrounds: 78741"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 262950.367192088,
            "unit": "iter/sec",
            "range": "stddev: 3.6241169088183337e-7",
            "extra": "mean: 3.8029990628211965 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 257554.98485716878,
            "unit": "iter/sec",
            "range": "stddev: 3.367995085038794e-7",
            "extra": "mean: 3.8826660666442385 usec\nrounds: 80001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 342298.4696666788,
            "unit": "iter/sec",
            "range": "stddev: 3.570048485855177e-7",
            "extra": "mean: 2.921427025291038 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 2737592.139262954,
            "unit": "iter/sec",
            "range": "stddev: 7.594548153641292e-8",
            "extra": "mean: 365.2845088418582 nsec\nrounds: 103104"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 5518.706906613405,
            "unit": "iter/sec",
            "range": "stddev: 0.000005992743711773876",
            "extra": "mean: 181.20186792337867 usec\nrounds: 53"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 3661614.40949182,
            "unit": "iter/sec",
            "range": "stddev: 1.5260615533348324e-8",
            "extra": "mean: 273.10357895913523 nsec\nrounds: 120482"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 5638.515229377756,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032022960747960176",
            "extra": "mean: 177.3516536392074 usec\nrounds: 4094"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 3928805.7012594105,
            "unit": "iter/sec",
            "range": "stddev: 1.5264293323251808e-8",
            "extra": "mean: 254.53027612915312 nsec\nrounds: 123457"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 5603.845854160046,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031556547394540244",
            "extra": "mean: 178.44887707923738 usec\nrounds: 3547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 5691.978780204099,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032137886765299674",
            "extra": "mean: 175.68582712884654 usec\nrounds: 4298"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 4239991.179507519,
            "unit": "iter/sec",
            "range": "stddev: 1.7151788247812464e-8",
            "extra": "mean: 235.84954724286231 nsec\nrounds: 129871"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 5690.88394279584,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032669103046170696",
            "extra": "mean: 175.71962634485143 usec\nrounds: 4183"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 3667535.8375579286,
            "unit": "iter/sec",
            "range": "stddev: 1.6737843916756614e-8",
            "extra": "mean: 272.66263897413324 nsec\nrounds: 117648"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 5693.103941958154,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031953711579756636",
            "extra": "mean: 175.6511053012758 usec\nrounds: 4150"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 3944356.906636784,
            "unit": "iter/sec",
            "range": "stddev: 1.4781028315906069e-8",
            "extra": "mean: 253.52675319940093 nsec\nrounds: 125000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 3525168.72667602,
            "unit": "iter/sec",
            "range": "stddev: 1.7142092393148078e-8",
            "extra": "mean: 283.6743649834766 nsec\nrounds: 112360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 5613.462338804288,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038009662492393643",
            "extra": "mean: 178.1431743270603 usec\nrounds: 4199"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 3846567.564505286,
            "unit": "iter/sec",
            "range": "stddev: 1.6079557694673372e-8",
            "extra": "mean: 259.9720356475259 nsec\nrounds: 119048"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 5633.752079787776,
            "unit": "iter/sec",
            "range": "stddev: 0.000003062152145779473",
            "extra": "mean: 177.50159855058268 usec\nrounds: 4140"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 3550928.4024765054,
            "unit": "iter/sec",
            "range": "stddev: 1.5980596501422547e-8",
            "extra": "mean: 281.6164919863358 nsec\nrounds: 113637"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 5607.615434274842,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030733094551361355",
            "extra": "mean: 178.32891925644623 usec\nrounds: 4087"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 5709.274621643444,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031210416137138225",
            "extra": "mean: 175.1535994098222 usec\nrounds: 4406"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 3517134.6718823593,
            "unit": "iter/sec",
            "range": "stddev: 1.550510690896533e-8",
            "extra": "mean: 284.3223513713244 nsec\nrounds: 112360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 5737.944291376513,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032437498402991893",
            "extra": "mean: 174.27844350160177 usec\nrounds: 4124"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 3855788.121126879,
            "unit": "iter/sec",
            "range": "stddev: 1.7288959354708603e-8",
            "extra": "mean: 259.35035032677473 nsec\nrounds: 123457"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 5717.989213478234,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030619962441867534",
            "extra": "mean: 174.88665379830323 usec\nrounds: 4041"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 3546847.917676506,
            "unit": "iter/sec",
            "range": "stddev: 1.7740697868089018e-8",
            "extra": "mean: 281.94047876039673 nsec\nrounds: 114943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 3726377.3349601943,
            "unit": "iter/sec",
            "range": "stddev: 1.5820442119842722e-8",
            "extra": "mean: 268.3571496153555 nsec\nrounds: 120482"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 5465.975727228896,
            "unit": "iter/sec",
            "range": "stddev: 0.0002187684311832091",
            "extra": "mean: 182.94995256171276 usec\nrounds: 4216"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 3825030.4627546533,
            "unit": "iter/sec",
            "range": "stddev: 1.4701251253266465e-8",
            "extra": "mean: 261.4358263908524 nsec\nrounds: 121952"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 5598.069631879433,
            "unit": "iter/sec",
            "range": "stddev: 0.000003383288420623888",
            "extra": "mean: 178.6330049032047 usec\nrounds: 4079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 3800341.6055250713,
            "unit": "iter/sec",
            "range": "stddev: 1.6613111868693244e-8",
            "extra": "mean: 263.1342399711947 nsec\nrounds: 120482"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 5596.353212236145,
            "unit": "iter/sec",
            "range": "stddev: 0.000003703494314818408",
            "extra": "mean: 178.68779222397012 usec\nrounds: 3961"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 5690.491823648596,
            "unit": "iter/sec",
            "range": "stddev: 0.000003188186255195798",
            "extra": "mean: 175.73173479385227 usec\nrounds: 4291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 3871851.3598714056,
            "unit": "iter/sec",
            "range": "stddev: 1.587345744877191e-8",
            "extra": "mean: 258.2743775662617 nsec\nrounds: 119048"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 5695.491346492471,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030807210246839105",
            "extra": "mean: 175.57747684330047 usec\nrounds: 4232"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 3777292.3577901386,
            "unit": "iter/sec",
            "range": "stddev: 1.5232702944073656e-8",
            "extra": "mean: 264.73989971641214 nsec\nrounds: 121952"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 5711.883992753517,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036137105589652912",
            "extra": "mean: 175.07358364922464 usec\nrounds: 4220"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 3856555.562758419,
            "unit": "iter/sec",
            "range": "stddev: 1.512951007101062e-8",
            "extra": "mean: 259.29874047628374 nsec\nrounds: 120482"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 17503.236641282387,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017103713939187123",
            "extra": "mean: 57.1322904725771 usec\nrounds: 7956"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 17175.931382091578,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017120146137044206",
            "extra": "mean: 58.221005764068565 usec\nrounds: 10930"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 13111.495759894102,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021226747346805487",
            "extra": "mean: 76.26894889131069 usec\nrounds: 8570"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 416.22392773365056,
            "unit": "iter/sec",
            "range": "stddev: 0.00006507839926336369",
            "extra": "mean: 2.4025528888860967 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 191743.5631290151,
            "unit": "iter/sec",
            "range": "stddev: 3.386505579625637e-7",
            "extra": "mean: 5.215298931975869 usec\nrounds: 47847"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 190974.48064855282,
            "unit": "iter/sec",
            "range": "stddev: 3.1418973463954076e-7",
            "extra": "mean: 5.236301712165845 usec\nrounds: 71429"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 81.51044583628939,
            "unit": "iter/sec",
            "range": "stddev: 0.032618811833881614",
            "extra": "mean: 12.26836621662531 msec\nrounds: 397"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 81.58959219850412,
            "unit": "iter/sec",
            "range": "stddev: 0.03269619192906859",
            "extra": "mean: 12.256465231092726 msec\nrounds: 476"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 85687.18862726344,
            "unit": "iter/sec",
            "range": "stddev: 4.788690492708607e-7",
            "extra": "mean: 11.67035604762304 usec\nrounds: 35088"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 85951.82005248137,
            "unit": "iter/sec",
            "range": "stddev: 4.699310510881332e-7",
            "extra": "mean: 11.634424953298364 usec\nrounds: 36364"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 70.30678771081777,
            "unit": "iter/sec",
            "range": "stddev: 0.032854746062102855",
            "extra": "mean: 14.223377749999731 msec\nrounds: 216"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 69.29682265459272,
            "unit": "iter/sec",
            "range": "stddev: 0.033145383967855754",
            "extra": "mean: 14.430676064102686 msec\nrounds: 234"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 25254.24076015029,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010262694670678996",
            "extra": "mean: 39.59730999230598 usec\nrounds: 8897"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 1753.6837990410093,
            "unit": "iter/sec",
            "range": "stddev: 0.00000598187854559598",
            "extra": "mean: 570.2282250351195 usec\nrounds: 1422"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 1761.5123339835072,
            "unit": "iter/sec",
            "range": "stddev: 0.000006243966986643768",
            "extra": "mean: 567.6940096914262 usec\nrounds: 1135"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 30382.09407493509,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011401596502785138",
            "extra": "mean: 32.91412361286149 usec\nrounds: 10363"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 36.141247870178304,
            "unit": "iter/sec",
            "range": "stddev: 0.038764060605145194",
            "extra": "mean: 27.669216170732803 msec\nrounds: 41"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 4.775876809352356,
            "unit": "iter/sec",
            "range": "stddev: 0.047968590366680094",
            "extra": "mean: 209.3856353333384 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 4.690520784798381,
            "unit": "iter/sec",
            "range": "stddev: 0.05298903190242743",
            "extra": "mean: 213.19594260000372 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 41.26893313825408,
            "unit": "iter/sec",
            "range": "stddev: 0.03736756235897051",
            "extra": "mean: 24.231302433962217 msec\nrounds: 53"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 24938.221267629913,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010155181669378602",
            "extra": "mean: 40.09909084005166 usec\nrounds: 9192"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 1749.7358058598068,
            "unit": "iter/sec",
            "range": "stddev: 0.000005599164891067271",
            "extra": "mean: 571.5148519285217 usec\nrounds: 1452"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 1753.0556544495562,
            "unit": "iter/sec",
            "range": "stddev: 0.000007827874855666175",
            "extra": "mean: 570.4325458588997 usec\nrounds: 1123"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 30008.520390890517,
            "unit": "iter/sec",
            "range": "stddev: 0.000001042077234060195",
            "extra": "mean: 33.323868920360475 usec\nrounds: 10650"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 39.77921777360365,
            "unit": "iter/sec",
            "range": "stddev: 0.035446068677067635",
            "extra": "mean: 25.138754756097075 msec\nrounds: 41"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 4.751557717024968,
            "unit": "iter/sec",
            "range": "stddev: 0.04844816362089133",
            "extra": "mean: 210.45729833333837 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 4.680909281194964,
            "unit": "iter/sec",
            "range": "stddev: 0.052497602694083205",
            "extra": "mean: 213.63370659999532 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 40.53185317823305,
            "unit": "iter/sec",
            "range": "stddev: 0.037705930325228496",
            "extra": "mean: 24.671953576922387 msec\nrounds: 52"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 83231.51893185725,
            "unit": "iter/sec",
            "range": "stddev: 5.146662085824294e-7",
            "extra": "mean: 12.014679208470449 usec\nrounds: 34365"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 83673.30795484016,
            "unit": "iter/sec",
            "range": "stddev: 5.103845788252595e-7",
            "extra": "mean: 11.951242569968864 usec\nrounds: 34724"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 82514.24888069558,
            "unit": "iter/sec",
            "range": "stddev: 5.986713251974216e-7",
            "extra": "mean: 12.119118983266326 usec\nrounds: 36232"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 83552.36696408107,
            "unit": "iter/sec",
            "range": "stddev: 5.622330296770947e-7",
            "extra": "mean: 11.968541841907328 usec\nrounds: 30675"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 67.2062562175388,
            "unit": "iter/sec",
            "range": "stddev: 0.03405911583412537",
            "extra": "mean: 14.879567115941068 msec\nrounds: 207"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 66.87826149780501,
            "unit": "iter/sec",
            "range": "stddev: 0.03418004955326067",
            "extra": "mean: 14.952541791667548 msec\nrounds: 240"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 66.65524439523743,
            "unit": "iter/sec",
            "range": "stddev: 0.034147891989296394",
            "extra": "mean: 15.002570451477494 msec\nrounds: 237"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 65.79707281324792,
            "unit": "iter/sec",
            "range": "stddev: 0.03456036552874694",
            "extra": "mean: 15.19824449999932 msec\nrounds: 244"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 110030.11687357552,
            "unit": "iter/sec",
            "range": "stddev: 4.85702656233188e-7",
            "extra": "mean: 9.08842077436852 usec\nrounds: 32155"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 84899.58827543893,
            "unit": "iter/sec",
            "range": "stddev: 5.663280327326154e-7",
            "extra": "mean: 11.778620136009486 usec\nrounds: 28655"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 85540.15560798197,
            "unit": "iter/sec",
            "range": "stddev: 4.583120493236537e-7",
            "extra": "mean: 11.690415956020162 usec\nrounds: 30960"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 113595.04594466113,
            "unit": "iter/sec",
            "range": "stddev: 4.056663451033441e-7",
            "extra": "mean: 8.803200805844641 usec\nrounds: 27549"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 72.07364974637282,
            "unit": "iter/sec",
            "range": "stddev: 0.03416251397674619",
            "extra": "mean: 13.874696279694453 msec\nrounds: 261"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 67.80625572712397,
            "unit": "iter/sec",
            "range": "stddev: 0.034047438098147434",
            "extra": "mean: 14.747901786884515 msec\nrounds: 244"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 67.92029528989953,
            "unit": "iter/sec",
            "range": "stddev: 0.03404349021401323",
            "extra": "mean: 14.723139758621025 msec\nrounds: 232"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 70.84899138070391,
            "unit": "iter/sec",
            "range": "stddev: 0.034449694841282415",
            "extra": "mean: 14.114526975077801 msec\nrounds: 321"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 656003.1081865159,
            "unit": "iter/sec",
            "range": "stddev: 1.6925150202850528e-7",
            "extra": "mean: 1.5243830212397078 usec\nrounds: 44055"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 1890.7770995992792,
            "unit": "iter/sec",
            "range": "stddev: 0.000005351635326875813",
            "extra": "mean: 528.883071522251 usec\nrounds: 1524"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 1900.1770040994995,
            "unit": "iter/sec",
            "range": "stddev: 0.00000551333447385018",
            "extra": "mean: 526.2667624345362 usec\nrounds: 1528"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 654978.002460297,
            "unit": "iter/sec",
            "range": "stddev: 1.669232756044553e-7",
            "extra": "mean: 1.5267688323022992 usec\nrounds: 112360"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 5788.674807087573,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018027169763958654",
            "extra": "mean: 172.75111028444954 usec\nrounds: 3899"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 5.699468355871211,
            "unit": "iter/sec",
            "range": "stddev: 0.00008812664160681744",
            "extra": "mean: 175.45496133334382 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 5.783903386464283,
            "unit": "iter/sec",
            "range": "stddev: 0.00007738984481198748",
            "extra": "mean: 172.8936210000048 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 5680.0714656060245,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020295341184598877",
            "extra": "mean: 176.05412291996697 usec\nrounds: 4507"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 524991.3646799099,
            "unit": "iter/sec",
            "range": "stddev: 2.2625079585016483e-7",
            "extra": "mean: 1.904793235236746 usec\nrounds: 24332"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 2372.513326499951,
            "unit": "iter/sec",
            "range": "stddev: 0.000004928060206045515",
            "extra": "mean: 421.49394434603636 usec\nrounds: 1689"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 2090.0553497627643,
            "unit": "iter/sec",
            "range": "stddev: 0.000005084884305561769",
            "extra": "mean: 478.4562284982103 usec\nrounds: 1558"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 530476.6756343793,
            "unit": "iter/sec",
            "range": "stddev: 1.964290162874344e-7",
            "extra": "mean: 1.8850970192122651 usec\nrounds: 83334"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 3667.9135367175268,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024607827110814434",
            "extra": "mean: 272.63456185363515 usec\nrounds: 3193"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 7.255179740481243,
            "unit": "iter/sec",
            "range": "stddev: 0.00023294925469731725",
            "extra": "mean: 137.83256042856758 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 6.3198023752295605,
            "unit": "iter/sec",
            "range": "stddev: 0.0001991291955917624",
            "extra": "mean: 158.2327959999977 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 3608.9231376592766,
            "unit": "iter/sec",
            "range": "stddev: 0.000002313953755662383",
            "extra": "mean: 277.090966433991 usec\nrounds: 3009"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 25268.751317685077,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012031927459818196",
            "extra": "mean: 39.57457127294298 usec\nrounds: 9183"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 1763.7997954128693,
            "unit": "iter/sec",
            "range": "stddev: 0.000005926887544096841",
            "extra": "mean: 566.9577707179178 usec\nrounds: 1448"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 1777.8276703231425,
            "unit": "iter/sec",
            "range": "stddev: 0.000005279754270979173",
            "extra": "mean: 562.4842141298416 usec\nrounds: 1373"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 30596.148718110588,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010126097708460226",
            "extra": "mean: 32.68385211528523 usec\nrounds: 10684"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 35.32716923975059,
            "unit": "iter/sec",
            "range": "stddev: 0.040663252304495405",
            "extra": "mean: 28.30682507317306 msec\nrounds: 41"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 4.7681175244334435,
            "unit": "iter/sec",
            "range": "stddev: 0.05080417595902827",
            "extra": "mean: 209.7263741666732 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 4.664668546565328,
            "unit": "iter/sec",
            "range": "stddev: 0.05536526519419865",
            "extra": "mean: 214.37750400000368 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 39.566398474099934,
            "unit": "iter/sec",
            "range": "stddev: 0.03981827744179721",
            "extra": "mean: 25.273970807694248 msec\nrounds: 52"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 24695.41952182814,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011710273293357122",
            "extra": "mean: 40.49333922495651 usec\nrounds: 8204"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 1756.8421386274526,
            "unit": "iter/sec",
            "range": "stddev: 0.000007031123336420108",
            "extra": "mean: 569.203104828336 usec\nrounds: 1450"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 1761.6627587602609,
            "unit": "iter/sec",
            "range": "stddev: 0.000005446222796063139",
            "extra": "mean: 567.6455354620384 usec\nrounds: 1128"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 30068.15953276573,
            "unit": "iter/sec",
            "range": "stddev: 9.508275276485567e-7",
            "extra": "mean: 33.257772192883465 usec\nrounds: 10882"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 34.24607728878475,
            "unit": "iter/sec",
            "range": "stddev: 0.04298547780667672",
            "extra": "mean: 29.20042466666657 msec\nrounds: 42"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 4.7212819081107815,
            "unit": "iter/sec",
            "range": "stddev: 0.05337956719392827",
            "extra": "mean: 211.8068820000095 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 4.631970893628648,
            "unit": "iter/sec",
            "range": "stddev: 0.059665189682162285",
            "extra": "mean: 215.89082120000285 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 37.78912302692594,
            "unit": "iter/sec",
            "range": "stddev: 0.04270323233462755",
            "extra": "mean: 26.46264109615533 msec\nrounds: 52"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 83649.00483909325,
            "unit": "iter/sec",
            "range": "stddev: 5.376964709775013e-7",
            "extra": "mean: 11.95471484596373 usec\nrounds: 39526"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 83881.61390436413,
            "unit": "iter/sec",
            "range": "stddev: 5.61607571069353e-7",
            "extra": "mean: 11.921563659232035 usec\nrounds: 31056"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 85751.87994422377,
            "unit": "iter/sec",
            "range": "stddev: 5.079513256434614e-7",
            "extra": "mean: 11.66155191758405 usec\nrounds: 19608"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 85480.94487727075,
            "unit": "iter/sec",
            "range": "stddev: 5.427813211184582e-7",
            "extra": "mean: 11.698513644599387 usec\nrounds: 29499"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 61.92442988673285,
            "unit": "iter/sec",
            "range": "stddev: 0.03831056867210886",
            "extra": "mean: 16.148715488041134 msec\nrounds: 209"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 257.87826978825655,
            "unit": "iter/sec",
            "range": "stddev: 0.00003768319268096359",
            "extra": "mean: 3.877798624991158 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 62.00241244521826,
            "unit": "iter/sec",
            "range": "stddev: 0.038579268815132226",
            "extra": "mean: 16.128404695277656 msec\nrounds: 233"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 61.53581669201231,
            "unit": "iter/sec",
            "range": "stddev: 0.038517974966618226",
            "extra": "mean: 16.250698434783356 msec\nrounds: 230"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 116709.39818009322,
            "unit": "iter/sec",
            "range": "stddev: 4.289159062794528e-7",
            "extra": "mean: 8.568290262767949 usec\nrounds: 18249"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 87170.05204982666,
            "unit": "iter/sec",
            "range": "stddev: 4.795683834842465e-7",
            "extra": "mean: 11.471829791135114 usec\nrounds: 31949"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 84694.48498813271,
            "unit": "iter/sec",
            "range": "stddev: 5.514424168984675e-7",
            "extra": "mean: 11.80714423306451 usec\nrounds: 33224"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 115216.94943375401,
            "unit": "iter/sec",
            "range": "stddev: 4.418290290185557e-7",
            "extra": "mean: 8.679278568948464 usec\nrounds: 31949"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 321.35808497534003,
            "unit": "iter/sec",
            "range": "stddev: 0.000024374911570132503",
            "extra": "mean: 3.111793500004012 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 62.271521104611836,
            "unit": "iter/sec",
            "range": "stddev: 0.03842510514094538",
            "extra": "mean: 16.058705203620598 msec\nrounds: 221"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 61.657242433344244,
            "unit": "iter/sec",
            "range": "stddev: 0.03869425531636169",
            "extra": "mean: 16.218694844828153 msec\nrounds: 232"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 68.5241577730849,
            "unit": "iter/sec",
            "range": "stddev: 0.03696519775957029",
            "extra": "mean: 14.593393519865817 msec\nrounds: 302"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 694625.923112403,
            "unit": "iter/sec",
            "range": "stddev: 1.6095779839447628e-7",
            "extra": "mean: 1.4396237841503388 usec\nrounds: 105264"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 1887.9238033342913,
            "unit": "iter/sec",
            "range": "stddev: 0.000005711576795257486",
            "extra": "mean: 529.6823940849121 usec\nrounds: 1251"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 1912.3129679886558,
            "unit": "iter/sec",
            "range": "stddev: 0.000005786341193545114",
            "extra": "mean: 522.9269563819284 usec\nrounds: 1559"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 693491.8370278316,
            "unit": "iter/sec",
            "range": "stddev: 1.9424952879565245e-7",
            "extra": "mean: 1.4419780401248867 usec\nrounds: 111112"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 5830.437332016586,
            "unit": "iter/sec",
            "range": "stddev: 0.000001950940960720845",
            "extra": "mean: 171.51372067901602 usec\nrounds: 4715"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 5.684099965785043,
            "unit": "iter/sec",
            "range": "stddev: 0.0000892812700738876",
            "extra": "mean: 175.92934783332717 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 5.735889346067728,
            "unit": "iter/sec",
            "range": "stddev: 0.00021348713301950646",
            "extra": "mean: 174.34088066666695 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 5715.835659897862,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018728456340386351",
            "extra": "mean: 174.95254578713158 usec\nrounds: 4652"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 562210.5088112048,
            "unit": "iter/sec",
            "range": "stddev: 2.085355279296766e-7",
            "extra": "mean: 1.7786931840077158 usec\nrounds: 78125"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 2388.7492023791324,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048943145256502206",
            "extra": "mean: 418.62912984084966 usec\nrounds: 1756"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 2089.07764402329,
            "unit": "iter/sec",
            "range": "stddev: 0.000006017013351046942",
            "extra": "mean: 478.68014999870036 usec\nrounds: 1280"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 553637.1845772876,
            "unit": "iter/sec",
            "range": "stddev: 2.0838849805025926e-7",
            "extra": "mean: 1.8062370589567946 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 3589.0283013998023,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023605186438810583",
            "extra": "mean: 278.6269474693129 usec\nrounds: 3141"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 7.237922012071131,
            "unit": "iter/sec",
            "range": "stddev: 0.0001089129492115817",
            "extra": "mean: 138.16120128570577 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 6.289924364518587,
            "unit": "iter/sec",
            "range": "stddev: 0.00011140091687932806",
            "extra": "mean: 158.98442366668064 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 3424.251460950893,
            "unit": "iter/sec",
            "range": "stddev: 0.000018828078003389243",
            "extra": "mean: 292.0346275393882 usec\nrounds: 2658"
          }
        ]
      }
    ]
  }
}