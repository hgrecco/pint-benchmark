window.BENCHMARK_DATA = {
  "lastUpdate": 1669514887849,
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
      }
    ]
  }
}