window.BENCHMARK_DATA = {
  "lastUpdate": 1669526461855,
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
          "id": "15e2d1d0113159573e4a5a65c1cd6489caa34ce2",
          "message": "Pint 0.15",
          "timestamp": "2022-11-26T23:23:26-03:00",
          "tree_id": "1b503bd0b8876ee5b24a247e5faf0c351ebdd561",
          "url": "https://github.com/hgrecco/pint-benchmark/commit/15e2d1d0113159573e4a5a65c1cd6489caa34ce2"
        },
        "date": 1669524935048,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 3.544713818015591,
            "unit": "iter/sec",
            "range": "stddev: 0.0041510858899077635",
            "extra": "mean: 282.110221399995 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 9760.624849348955,
            "unit": "iter/sec",
            "range": "stddev: 0.00027793426488017067",
            "extra": "mean: 102.45245723860613 usec\nrounds: 3578"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 6.952995359539014,
            "unit": "iter/sec",
            "range": "stddev: 0.00794340627679191",
            "extra": "mean: 143.8229062857163 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 764.5240119633228,
            "unit": "iter/sec",
            "range": "stddev: 0.002253192810835177",
            "extra": "mean: 1.308003390805172 msec\nrounds: 348"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_build_cache",
            "value": 1896.467725195432,
            "unit": "iter/sec",
            "range": "stddev: 0.000005843087457182296",
            "extra": "mean: 527.2960814015169 usec\nrounds: 1855"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 171195.17091186266,
            "unit": "iter/sec",
            "range": "stddev: 4.4063508279693625e-7",
            "extra": "mean: 5.841286262185721 usec\nrounds: 24509"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 167113.99885674918,
            "unit": "iter/sec",
            "range": "stddev: 5.682088772828659e-7",
            "extra": "mean: 5.983939148372628 usec\nrounds: 4815"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 173621.07666138912,
            "unit": "iter/sec",
            "range": "stddev: 4.761693453393985e-7",
            "extra": "mean: 5.759669385936863 usec\nrounds: 36898"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 169101.3893573036,
            "unit": "iter/sec",
            "range": "stddev: 4.931655065938448e-7",
            "extra": "mean: 5.91361196853945 usec\nrounds: 7386"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 173636.53782587568,
            "unit": "iter/sec",
            "range": "stddev: 4.4622993795287853e-7",
            "extra": "mean: 5.759156526161615 usec\nrounds: 7692"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 11017.225630343652,
            "unit": "iter/sec",
            "range": "stddev: 0.000035718724315653976",
            "extra": "mean: 90.76695291106677 usec\nrounds: 3504"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 10599.266465744411,
            "unit": "iter/sec",
            "range": "stddev: 0.000017481667315823938",
            "extra": "mean: 94.34615152207778 usec\nrounds: 4270"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 10987.283562151764,
            "unit": "iter/sec",
            "range": "stddev: 0.000013904013228832129",
            "extra": "mean: 91.01430707083331 usec\nrounds: 6435"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 11019.176955848681,
            "unit": "iter/sec",
            "range": "stddev: 0.000011567927011601557",
            "extra": "mean: 90.75087949007181 usec\nrounds: 6431"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 10630.008686066367,
            "unit": "iter/sec",
            "range": "stddev: 0.00008180565517726602",
            "extra": "mean: 94.07330036435275 usec\nrounds: 6309"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 56029.246786715725,
            "unit": "iter/sec",
            "range": "stddev: 0.000001568851326284329",
            "extra": "mean: 17.84782158158684 usec\nrounds: 43667"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 53212.507471841236,
            "unit": "iter/sec",
            "range": "stddev: 6.549097656327112e-7",
            "extra": "mean: 18.792574293349652 usec\nrounds: 39997"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 62109.60807990283,
            "unit": "iter/sec",
            "range": "stddev: 6.002437141665718e-7",
            "extra": "mean: 16.100568509682418 usec\nrounds: 48307"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 57093.29386293837,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015169189250640126",
            "extra": "mean: 17.515191931309143 usec\nrounds: 44443"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 57008.5477065515,
            "unit": "iter/sec",
            "range": "stddev: 5.548137683412093e-7",
            "extra": "mean: 17.541229170535043 usec\nrounds: 44840"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 330537.10874596244,
            "unit": "iter/sec",
            "range": "stddev: 5.464271784101152e-7",
            "extra": "mean: 3.0253789167393 usec\nrounds: 46947"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 333968.681044756,
            "unit": "iter/sec",
            "range": "stddev: 2.728813333940854e-7",
            "extra": "mean: 2.9942927488640385 usec\nrounds: 12936"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 327912.76982238895,
            "unit": "iter/sec",
            "range": "stddev: 2.6675572990657005e-7",
            "extra": "mean: 3.049591513443167 usec\nrounds: 53189"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 328562.4796388381,
            "unit": "iter/sec",
            "range": "stddev: 2.453170897292371e-7",
            "extra": "mean: 3.0435611549414237 usec\nrounds: 51018"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 329683.64917135186,
            "unit": "iter/sec",
            "range": "stddev: 7.382214311501764e-7",
            "extra": "mean: 3.033210784075778 usec\nrounds: 51280"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 10802.444537639014,
            "unit": "iter/sec",
            "range": "stddev: 0.000002606308438384821",
            "extra": "mean: 92.57163936511729 usec\nrounds: 4664"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 10552.797845167212,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024135187616689574",
            "extra": "mean: 94.76159921493833 usec\nrounds: 4077"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 10716.624192747277,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023551473803386074",
            "extra": "mean: 93.31296703273156 usec\nrounds: 6006"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 10703.870948888647,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022803947435527452",
            "extra": "mean: 93.42414578567272 usec\nrounds: 6098"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 10630.346534976876,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023117511389704584",
            "extra": "mean: 94.07031056887134 usec\nrounds: 6150"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 146142.01262422194,
            "unit": "iter/sec",
            "range": "stddev: 4.3655281103260066e-7",
            "extra": "mean: 6.842659287656871 usec\nrounds: 7634"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 143992.9685876045,
            "unit": "iter/sec",
            "range": "stddev: 4.116853399438601e-7",
            "extra": "mean: 6.944783553035826 usec\nrounds: 7734"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 172609.4925445403,
            "unit": "iter/sec",
            "range": "stddev: 3.6030789154194576e-7",
            "extra": "mean: 5.793424134781922 usec\nrounds: 3671"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 169645.50411843322,
            "unit": "iter/sec",
            "range": "stddev: 5.047549369031205e-7",
            "extra": "mean: 5.894644866638366 usec\nrounds: 5474"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[meter]",
            "value": 440403.11266313423,
            "unit": "iter/sec",
            "range": "stddev: 2.1427263243256913e-7",
            "extra": "mean: 2.270646985106355 usec\nrounds: 66221"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[angstrom]",
            "value": 429938.7556179927,
            "unit": "iter/sec",
            "range": "stddev: 2.5859387080267415e-7",
            "extra": "mean: 2.325912672288877 usec\nrounds: 68489"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[kilometer/second]",
            "value": 132485.56269842497,
            "unit": "iter/sec",
            "range": "stddev: 5.700960721419513e-7",
            "extra": "mean: 7.547992246342237 usec\nrounds: 4127"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[angstrom/minute]",
            "value": 134348.99694580425,
            "unit": "iter/sec",
            "range": "stddev: 7.866554066112349e-7",
            "extra": "mean: 7.443300826454219 usec\nrounds: 6173"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[meter]",
            "value": 1389593.0901034262,
            "unit": "iter/sec",
            "range": "stddev: 2.411483229058581e-8",
            "extra": "mean: 719.6351270898457 nsec\nrounds: 68023"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[angstrom]",
            "value": 1384899.1781642723,
            "unit": "iter/sec",
            "range": "stddev: 2.8585236321390138e-8",
            "extra": "mean: 722.0742244394725 nsec\nrounds: 67564"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[kilometer/second]",
            "value": 1085828.292026694,
            "unit": "iter/sec",
            "range": "stddev: 1.4348202796179493e-7",
            "extra": "mean: 920.9559258522397 nsec\nrounds: 178540"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[angstrom/minute]",
            "value": 1386683.4216371118,
            "unit": "iter/sec",
            "range": "stddev: 2.4775972645363552e-8",
            "extra": "mean: 721.1451326209857 nsec\nrounds: 67110"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_convert_from_uc[key0]",
            "value": 66220.20276712347,
            "unit": "iter/sec",
            "range": "stddev: 7.478146356150232e-7",
            "extra": "mean: 15.101131651872151 usec\nrounds: 9434"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_convert_from_uc[key1]",
            "value": 57552.10866022987,
            "unit": "iter/sec",
            "range": "stddev: 6.232941755121989e-7",
            "extra": "mean: 17.37555796441266 usec\nrounds: 11947"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_math_expression",
            "value": 7815.254814334188,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027317795691505827",
            "extra": "mean: 127.95488103162941 usec\nrounds: 3917"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 120060.10862799909,
            "unit": "iter/sec",
            "range": "stddev: 4.1084906985797176e-7",
            "extra": "mean: 8.329161212892581 usec\nrounds: 67110"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 117542.856329728,
            "unit": "iter/sec",
            "range": "stddev: 4.686761571014912e-7",
            "extra": "mean: 8.507535304355947 usec\nrounds: 68023"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 51179.45155560156,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011444113903700533",
            "extra": "mean: 19.539091756651512 usec\nrounds: 643"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 11995355.701132938,
            "unit": "iter/sec",
            "range": "stddev: 3.863472830944066e-9",
            "extra": "mean: 83.3655978959968 nsec\nrounds: 119034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 11485204.989143865,
            "unit": "iter/sec",
            "range": "stddev: 6.549521825101619e-9",
            "extra": "mean: 87.06853738749254 nsec\nrounds: 112347"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 10678780.640344499,
            "unit": "iter/sec",
            "range": "stddev: 4.513290335419344e-9",
            "extra": "mean: 93.64365030796989 nsec\nrounds: 108684"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 11981135.01612369,
            "unit": "iter/sec",
            "range": "stddev: 8.316047079956737e-9",
            "extra": "mean: 83.46454644358754 nsec\nrounds: 117648"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 11839858.3718017,
            "unit": "iter/sec",
            "range": "stddev: 3.805093427901029e-9",
            "extra": "mean: 84.46046976217204 nsec\nrounds: 117634"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 11905313.411998862,
            "unit": "iter/sec",
            "range": "stddev: 3.969796651718221e-9",
            "extra": "mean: 83.99610874520017 nsec\nrounds: 113624"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 126480.49568205385,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013062428740439205",
            "extra": "mean: 7.906357376348335 usec\nrounds: 305"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 31024.86748572891,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012727002207454615",
            "extra": "mean: 32.23220858106771 usec\nrounds: 9416"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 128162.4089808702,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012891285170551874",
            "extra": "mean: 7.802599903917709 usec\nrounds: 37451"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 31014.167542126026,
            "unit": "iter/sec",
            "range": "stddev: 0.000001154292335601089",
            "extra": "mean: 32.243328751020535 usec\nrounds: 10111"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 127466.42078498115,
            "unit": "iter/sec",
            "range": "stddev: 4.956419716713441e-7",
            "extra": "mean: 7.845203417823009 usec\nrounds: 35459"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 27141.34730270963,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012177906293555974",
            "extra": "mean: 36.84415474467496 usec\nrounds: 8905"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 30986.971770752018,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014123988473732283",
            "extra": "mean: 32.27162716635254 usec\nrounds: 10616"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 129028.09429168163,
            "unit": "iter/sec",
            "range": "stddev: 5.037177666080535e-7",
            "extra": "mean: 7.750250094676238 usec\nrounds: 29069"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 30610.432143770777,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011061510207987128",
            "extra": "mean: 32.668601191358874 usec\nrounds: 10070"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 128646.269756792,
            "unit": "iter/sec",
            "range": "stddev: 4.39918252897278e-7",
            "extra": "mean: 7.773252981921026 usec\nrounds: 28168"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 30732.040052693803,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013171129477090423",
            "extra": "mean: 32.53933023272712 usec\nrounds: 10320"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 128597.24997428585,
            "unit": "iter/sec",
            "range": "stddev: 3.402528608743876e-7",
            "extra": "mean: 7.776216055941778 usec\nrounds: 26595"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 128822.84358212876,
            "unit": "iter/sec",
            "range": "stddev: 4.7667765588782724e-7",
            "extra": "mean: 7.762598404082482 usec\nrounds: 35842"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 28360.133699139453,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013154134716816184",
            "extra": "mean: 35.26076465677394 usec\nrounds: 9569"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 131221.1751415613,
            "unit": "iter/sec",
            "range": "stddev: 3.4294885776411464e-7",
            "extra": "mean: 7.620721266374887 usec\nrounds: 41319"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 31404.894402418482,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011277494748749557",
            "extra": "mean: 31.842170433249102 usec\nrounds: 10309"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 128153.50353964792,
            "unit": "iter/sec",
            "range": "stddev: 4.6820121697947157e-7",
            "extra": "mean: 7.8031421098887215 usec\nrounds: 34600"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 31123.712587655613,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010893673190051968",
            "extra": "mean: 32.129843031535486 usec\nrounds: 10225"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 31232.268868854146,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010845963852259976",
            "extra": "mean: 32.01816698617222 usec\nrounds: 10438"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 128654.40586306759,
            "unit": "iter/sec",
            "range": "stddev: 3.7434968343287023e-7",
            "extra": "mean: 7.7727614013028274 usec\nrounds: 28089"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 30959.86266128846,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010574232313616036",
            "extra": "mean: 32.29988488451463 usec\nrounds: 9990"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 129455.10387815662,
            "unit": "iter/sec",
            "range": "stddev: 3.7007594654298364e-7",
            "extra": "mean: 7.724685779412775 usec\nrounds: 26666"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 30562.49869256362,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011323929194596884",
            "extra": "mean: 32.71983780054336 usec\nrounds: 10111"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 127727.16034184664,
            "unit": "iter/sec",
            "range": "stddev: 4.832521111250761e-7",
            "extra": "mean: 7.829188383454375 usec\nrounds: 27099"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 128468.91870771383,
            "unit": "iter/sec",
            "range": "stddev: 3.360083437149688e-7",
            "extra": "mean: 7.7839839399220825 usec\nrounds: 34246"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 30942.63720561855,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010692613729956145",
            "extra": "mean: 32.31786590634946 usec\nrounds: 9911"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 124584.50159718604,
            "unit": "iter/sec",
            "range": "stddev: 4.6118623658669834e-7",
            "extra": "mean: 8.026680583699399 usec\nrounds: 35712"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 31195.799148453025,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010798755651877857",
            "extra": "mean: 32.055598102848705 usec\nrounds: 10438"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 130061.92182419576,
            "unit": "iter/sec",
            "range": "stddev: 4.112111613807696e-7",
            "extra": "mean: 7.688645423459884 usec\nrounds: 39997"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 30931.129405446427,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013208236283408294",
            "extra": "mean: 32.329889636164324 usec\nrounds: 9813"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 30429.36369539705,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010144845003585216",
            "extra": "mean: 32.862994113520244 usec\nrounds: 10363"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 126494.48236927608,
            "unit": "iter/sec",
            "range": "stddev: 4.2804609872034557e-7",
            "extra": "mean: 7.905483158393377 usec\nrounds: 26809"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 30432.950378779205,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013493624872359939",
            "extra": "mean: 32.85912103669372 usec\nrounds: 10030"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 126732.48124732357,
            "unit": "iter/sec",
            "range": "stddev: 3.645639341216567e-7",
            "extra": "mean: 7.890636955560426 usec\nrounds: 26881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 30830.204168110722,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012315052716050695",
            "extra": "mean: 32.43572421860092 usec\nrounds: 9852"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 128927.32015639823,
            "unit": "iter/sec",
            "range": "stddev: 4.061711687660156e-7",
            "extra": "mean: 7.756307963175898 usec\nrounds: 28984"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 131450.5490143648,
            "unit": "iter/sec",
            "range": "stddev: 4.460592702755028e-7",
            "extra": "mean: 7.607423533017887 usec\nrounds: 39213"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 31015.393932654366,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010446522842029034",
            "extra": "mean: 32.242053806292496 usec\nrounds: 9813"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 131650.9050283582,
            "unit": "iter/sec",
            "range": "stddev: 3.8446410788815805e-7",
            "extra": "mean: 7.595845997295617 usec\nrounds: 37311"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 31390.8603911654,
            "unit": "iter/sec",
            "range": "stddev: 0.000001187999372850437",
            "extra": "mean: 31.85640621311032 usec\nrounds: 10204"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 129130.28197922514,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012148925351513037",
            "extra": "mean: 7.74411690792159 usec\nrounds: 37876"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 30989.484208444974,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011484499632192468",
            "extra": "mean: 32.26901078035655 usec\nrounds: 10111"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 30704.036978564785,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012191412952610391",
            "extra": "mean: 32.5690071536236 usec\nrounds: 9785"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 131578.8645156275,
            "unit": "iter/sec",
            "range": "stddev: 3.9293124890498423e-7",
            "extra": "mean: 7.600004785580368 usec\nrounds: 29672"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 31485.779498681542,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011919732898276517",
            "extra": "mean: 31.760369789856234 usec\nrounds: 10460"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 129922.64323942621,
            "unit": "iter/sec",
            "range": "stddev: 6.495724973045669e-7",
            "extra": "mean: 7.696887740785595 usec\nrounds: 30581"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 31169.205852298735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011197446598687839",
            "extra": "mean: 32.08294766118495 usec\nrounds: 10604"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 129112.08168081773,
            "unit": "iter/sec",
            "range": "stddev: 4.3755284066063554e-7",
            "extra": "mean: 7.745208558190034 usec\nrounds: 27623"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 131446.20516951726,
            "unit": "iter/sec",
            "range": "stddev: 6.276227519788076e-7",
            "extra": "mean: 7.607674932192738 usec\nrounds: 36900"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 31192.215875423775,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010655780787839598",
            "extra": "mean: 32.05928055877223 usec\nrounds: 9588"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 131884.20652083695,
            "unit": "iter/sec",
            "range": "stddev: 3.463613425387179e-7",
            "extra": "mean: 7.582409041843882 usec\nrounds: 43289"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 31287.25280526626,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017247725225458787",
            "extra": "mean: 31.961898547758736 usec\nrounds: 9709"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 126890.62142727325,
            "unit": "iter/sec",
            "range": "stddev: 5.333469397561719e-7",
            "extra": "mean: 7.880803078682574 usec\nrounds: 36898"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 30544.542354917052,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011220032997459656",
            "extra": "mean: 32.739072937493866 usec\nrounds: 10132"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 30626.871827621955,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012699093276671663",
            "extra": "mean: 32.651065561913306 usec\nrounds: 10799"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 129548.09045789103,
            "unit": "iter/sec",
            "range": "stddev: 3.6046906681175217e-7",
            "extra": "mean: 7.719141181205177 usec\nrounds: 29069"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 31033.822075196025,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010467707923780314",
            "extra": "mean: 32.22290820566559 usec\nrounds: 9652"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 130761.67794251943,
            "unit": "iter/sec",
            "range": "stddev: 5.050309436874455e-7",
            "extra": "mean: 7.647500519529756 usec\nrounds: 29849"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 31001.921320493122,
            "unit": "iter/sec",
            "range": "stddev: 0.000001109580653376113",
            "extra": "mean: 32.25606534711681 usec\nrounds: 10406"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 129502.8135213658,
            "unit": "iter/sec",
            "range": "stddev: 4.0789540936954556e-7",
            "extra": "mean: 7.721839957052491 usec\nrounds: 27099"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 129136.16927650853,
            "unit": "iter/sec",
            "range": "stddev: 4.3003661698943307e-7",
            "extra": "mean: 7.743763854871544 usec\nrounds: 33111"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 31386.774666544596,
            "unit": "iter/sec",
            "range": "stddev: 0.000001189450401056325",
            "extra": "mean: 31.860553071287942 usec\nrounds: 10288"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 130303.20145325268,
            "unit": "iter/sec",
            "range": "stddev: 3.4639119140232535e-7",
            "extra": "mean: 7.674408524480944 usec\nrounds: 36764"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 30962.7034769759,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013848455569754723",
            "extra": "mean: 32.29692138296669 usec\nrounds: 954"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 132636.9320820713,
            "unit": "iter/sec",
            "range": "stddev: 3.6128459309996217e-7",
            "extra": "mean: 7.539378243317882 usec\nrounds: 44051"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 31290.842109165733,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015011245116542296",
            "extra": "mean: 31.958232268446345 usec\nrounds: 10363"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 30690.47920596908,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024426064850869376",
            "extra": "mean: 32.583394781450885 usec\nrounds: 10616"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 130606.34958375484,
            "unit": "iter/sec",
            "range": "stddev: 4.4354156332936195e-7",
            "extra": "mean: 7.656595588093695 usec\nrounds: 27472"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 31104.194767837336,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013812047158058767",
            "extra": "mean: 32.150004443581665 usec\nrounds: 10352"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 130018.88507306465,
            "unit": "iter/sec",
            "range": "stddev: 3.7468558401231056e-7",
            "extra": "mean: 7.691190394672635 usec\nrounds: 28089"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 31116.423339256584,
            "unit": "iter/sec",
            "range": "stddev: 0.000001197910821492437",
            "extra": "mean: 32.1373696808655 usec\nrounds: 10152"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 130932.540415885,
            "unit": "iter/sec",
            "range": "stddev: 5.101307294884495e-7",
            "extra": "mean: 7.637520793713081 usec\nrounds: 30394"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 107728.64369157961,
            "unit": "iter/sec",
            "range": "stddev: 4.2545310702601993e-7",
            "extra": "mean: 9.28258228946925 usec\nrounds: 51811"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 105871.48874611883,
            "unit": "iter/sec",
            "range": "stddev: 4.841502585466473e-7",
            "extra": "mean: 9.4454136032602 usec\nrounds: 56177"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 107054.73110780214,
            "unit": "iter/sec",
            "range": "stddev: 4.344563032897573e-7",
            "extra": "mean: 9.341016409569217 usec\nrounds: 62890"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 104603.64135896589,
            "unit": "iter/sec",
            "range": "stddev: 5.097627409260797e-7",
            "extra": "mean: 9.559896644212635 usec\nrounds: 55246"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 108882.85808489041,
            "unit": "iter/sec",
            "range": "stddev: 4.7534473599015313e-7",
            "extra": "mean: 9.184182134715375 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 104000.81980298762,
            "unit": "iter/sec",
            "range": "stddev: 4.0457373766721535e-7",
            "extra": "mean: 9.615308820587519 usec\nrounds: 57140"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 106999.5116819049,
            "unit": "iter/sec",
            "range": "stddev: 5.728559826481521e-7",
            "extra": "mean: 9.345837044311613 usec\nrounds: 57801"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 108314.16976700748,
            "unit": "iter/sec",
            "range": "stddev: 4.2337978936881964e-7",
            "extra": "mean: 9.232402391589954 usec\nrounds: 59877"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 106264.16221784553,
            "unit": "iter/sec",
            "range": "stddev: 5.917293118841827e-7",
            "extra": "mean: 9.410510365196899 usec\nrounds: 54943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 108243.41412773679,
            "unit": "iter/sec",
            "range": "stddev: 4.1606113702576857e-7",
            "extra": "mean: 9.238437350284533 usec\nrounds: 44246"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 105362.535056101,
            "unit": "iter/sec",
            "range": "stddev: 4.5224706173112996e-7",
            "extra": "mean: 9.491039670481953 usec\nrounds: 57801"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 106681.98507850122,
            "unit": "iter/sec",
            "range": "stddev: 4.836113169281287e-7",
            "extra": "mean: 9.373653848530816 usec\nrounds: 61346"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 109197.29725645826,
            "unit": "iter/sec",
            "range": "stddev: 4.1099631936510233e-7",
            "extra": "mean: 9.157735815122082 usec\nrounds: 62108"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 106651.05516337072,
            "unit": "iter/sec",
            "range": "stddev: 4.167645256069328e-7",
            "extra": "mean: 9.376372305629562 usec\nrounds: 59521"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 109330.6108857812,
            "unit": "iter/sec",
            "range": "stddev: 4.669304967939156e-7",
            "extra": "mean: 9.146569216966236 usec\nrounds: 63691"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 105594.51387806897,
            "unit": "iter/sec",
            "range": "stddev: 4.1490797694262593e-7",
            "extra": "mean: 9.470188964122794 usec\nrounds: 56815"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 107148.36195004379,
            "unit": "iter/sec",
            "range": "stddev: 5.46417182095801e-7",
            "extra": "mean: 9.332853828098967 usec\nrounds: 58137"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 104839.08451774574,
            "unit": "iter/sec",
            "range": "stddev: 4.266923595405068e-7",
            "extra": "mean: 9.538427434767742 usec\nrounds: 56177"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 105146.52297224072,
            "unit": "iter/sec",
            "range": "stddev: 4.787361818282833e-7",
            "extra": "mean: 9.510537978169813 usec\nrounds: 59521"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 108648.50138998676,
            "unit": "iter/sec",
            "range": "stddev: 4.843417715383984e-7",
            "extra": "mean: 9.203992574279185 usec\nrounds: 62890"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 104910.52604221128,
            "unit": "iter/sec",
            "range": "stddev: 4.267938068841542e-7",
            "extra": "mean: 9.53193199696325 usec\nrounds: 57468"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 108775.26881350015,
            "unit": "iter/sec",
            "range": "stddev: 4.7272147037827406e-7",
            "extra": "mean: 9.193266179967274 usec\nrounds: 63288"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 105544.8721210462,
            "unit": "iter/sec",
            "range": "stddev: 4.1461067830394565e-7",
            "extra": "mean: 9.474643153228048 usec\nrounds: 58137"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 107225.34833471099,
            "unit": "iter/sec",
            "range": "stddev: 4.826821494669005e-7",
            "extra": "mean: 9.326152962249505 usec\nrounds: 65356"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 108307.45745388854,
            "unit": "iter/sec",
            "range": "stddev: 4.292833166327795e-7",
            "extra": "mean: 9.232974566185769 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 105474.82980196718,
            "unit": "iter/sec",
            "range": "stddev: 8.134721780753305e-7",
            "extra": "mean: 9.480934947963759 usec\nrounds: 55863"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 108161.74618821336,
            "unit": "iter/sec",
            "range": "stddev: 5.600910594034824e-7",
            "extra": "mean: 9.245412867686971 usec\nrounds: 62497"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 106741.643760746,
            "unit": "iter/sec",
            "range": "stddev: 5.538298446347015e-7",
            "extra": "mean: 9.368414845113598 usec\nrounds: 59521"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 108385.33690706098,
            "unit": "iter/sec",
            "range": "stddev: 4.554930293843978e-7",
            "extra": "mean: 9.226340283072489 usec\nrounds: 61346"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 105688.05784317595,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017888045463941023",
            "extra": "mean: 9.461806947799522 usec\nrounds: 57140"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 105942.19795723178,
            "unit": "iter/sec",
            "range": "stddev: 5.245765948168881e-7",
            "extra": "mean: 9.439109432142365 usec\nrounds: 59169"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 107329.92868809462,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032021200572428224",
            "extra": "mean: 9.31706572642979 usec\nrounds: 64099"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 105309.17611599076,
            "unit": "iter/sec",
            "range": "stddev: 5.254698303637165e-7",
            "extra": "mean: 9.495848670381479 usec\nrounds: 57801"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 107594.47122837891,
            "unit": "iter/sec",
            "range": "stddev: 4.38276275402099e-7",
            "extra": "mean: 9.294157855726716 usec\nrounds: 63691"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 106041.65695618879,
            "unit": "iter/sec",
            "range": "stddev: 4.878220866465273e-7",
            "extra": "mean: 9.43025626630062 usec\nrounds: 51544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 106784.132008022,
            "unit": "iter/sec",
            "range": "stddev: 5.159151769932031e-7",
            "extra": "mean: 9.364687254515273 usec\nrounds: 62108"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 105855.50837674449,
            "unit": "iter/sec",
            "range": "stddev: 6.292653266197829e-7",
            "extra": "mean: 9.446839520537328 usec\nrounds: 48542"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 106974.46780259984,
            "unit": "iter/sec",
            "range": "stddev: 5.823708678069936e-7",
            "extra": "mean: 9.348025005792051 usec\nrounds: 52908"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 106589.55359392505,
            "unit": "iter/sec",
            "range": "stddev: 4.487756834891126e-7",
            "extra": "mean: 9.381782419407692 usec\nrounds: 56494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 106709.55212821024,
            "unit": "iter/sec",
            "range": "stddev: 5.737067845987126e-7",
            "extra": "mean: 9.371232284795948 usec\nrounds: 53189"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 106738.67115216721,
            "unit": "iter/sec",
            "range": "stddev: 4.5408352747350236e-7",
            "extra": "mean: 9.368675749901314 usec\nrounds: 53761"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 105752.47409640496,
            "unit": "iter/sec",
            "range": "stddev: 5.170889892916752e-7",
            "extra": "mean: 9.456043544554717 usec\nrounds: 53761"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 103925.49559900956,
            "unit": "iter/sec",
            "range": "stddev: 4.1971983813089465e-7",
            "extra": "mean: 9.622277904340638 usec\nrounds: 50503"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 106852.40849100085,
            "unit": "iter/sec",
            "range": "stddev: 4.6162782868718263e-7",
            "extra": "mean: 9.358703412700523 usec\nrounds: 57140"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 105552.2652801846,
            "unit": "iter/sec",
            "range": "stddev: 4.922593054486849e-7",
            "extra": "mean: 9.473979524224676 usec\nrounds: 54943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 106497.08147892456,
            "unit": "iter/sec",
            "range": "stddev: 4.2255272821839546e-7",
            "extra": "mean: 9.389928682673776 usec\nrounds: 55863"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 104019.66567485602,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015195609113292936",
            "extra": "mean: 9.61356675694184 usec\nrounds: 52354"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 106312.42850107513,
            "unit": "iter/sec",
            "range": "stddev: 4.454767769584074e-7",
            "extra": "mean: 9.406237954482311 usec\nrounds: 56494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 107307.35783512464,
            "unit": "iter/sec",
            "range": "stddev: 0.000004113377556916513",
            "extra": "mean: 9.319025462694531 usec\nrounds: 54943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 105900.5275405444,
            "unit": "iter/sec",
            "range": "stddev: 4.281496427098018e-7",
            "extra": "mean: 9.442823593273852 usec\nrounds: 56177"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 108212.09863374537,
            "unit": "iter/sec",
            "range": "stddev: 6.582346021627731e-7",
            "extra": "mean: 9.24111086122264 usec\nrounds: 56494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 106568.73541749221,
            "unit": "iter/sec",
            "range": "stddev: 4.5386743303630556e-7",
            "extra": "mean: 9.383615148311687 usec\nrounds: 54052"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 106715.0163429594,
            "unit": "iter/sec",
            "range": "stddev: 7.750053924121934e-7",
            "extra": "mean: 9.370752442057569 usec\nrounds: 54052"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 104318.0004798441,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014561826896737418",
            "extra": "mean: 9.586073308539078 usec\nrounds: 52354"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 105320.62503270977,
            "unit": "iter/sec",
            "range": "stddev: 5.901259236527613e-7",
            "extra": "mean: 9.494816420709872 usec\nrounds: 52081"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 107020.48757781592,
            "unit": "iter/sec",
            "range": "stddev: 0.000001153243373711771",
            "extra": "mean: 9.34400527070004 usec\nrounds: 54642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 106854.05912520109,
            "unit": "iter/sec",
            "range": "stddev: 4.315706860511882e-7",
            "extra": "mean: 9.358558843593373 usec\nrounds: 53761"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 108746.71303606598,
            "unit": "iter/sec",
            "range": "stddev: 5.107720517472703e-7",
            "extra": "mean: 9.195680237878536 usec\nrounds: 58137"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 105677.71468436938,
            "unit": "iter/sec",
            "range": "stddev: 4.785901151887361e-7",
            "extra": "mean: 9.462733017900021 usec\nrounds: 52629"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 105456.71815355701,
            "unit": "iter/sec",
            "range": "stddev: 4.1180184796537393e-7",
            "extra": "mean: 9.482563249729486 usec\nrounds: 53186"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 107743.73152645072,
            "unit": "iter/sec",
            "range": "stddev: 4.2965884239221763e-7",
            "extra": "mean: 9.281282408104675 usec\nrounds: 53189"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 102498.9748050451,
            "unit": "iter/sec",
            "range": "stddev: 4.480007981114541e-7",
            "extra": "mean: 9.7561951414833 usec\nrounds: 53761"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 107036.93467128725,
            "unit": "iter/sec",
            "range": "stddev: 4.1381688464348e-7",
            "extra": "mean: 9.342569488476308 usec\nrounds: 57801"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 105285.14308802954,
            "unit": "iter/sec",
            "range": "stddev: 4.948108548103939e-7",
            "extra": "mean: 9.498016250629911 usec\nrounds: 53474"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 107178.23581675804,
            "unit": "iter/sec",
            "range": "stddev: 4.4419568837414493e-7",
            "extra": "mean: 9.330252475042544 usec\nrounds: 58477"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 104406.12196984405,
            "unit": "iter/sec",
            "range": "stddev: 4.4288159704224574e-7",
            "extra": "mean: 9.577982412648495 usec\nrounds: 56177"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 106596.59086431569,
            "unit": "iter/sec",
            "range": "stddev: 4.459379340962944e-7",
            "extra": "mean: 9.381163054950571 usec\nrounds: 53761"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 106171.31429715971,
            "unit": "iter/sec",
            "range": "stddev: 5.3758853482442e-7",
            "extra": "mean: 9.418739954571251 usec\nrounds: 57140"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 105461.9935835658,
            "unit": "iter/sec",
            "range": "stddev: 4.3054683839253054e-7",
            "extra": "mean: 9.48208891203656 usec\nrounds: 53761"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 104899.46952191184,
            "unit": "iter/sec",
            "range": "stddev: 4.3546250558017696e-7",
            "extra": "mean: 9.532936673155586 usec\nrounds: 55553"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 104525.6717342708,
            "unit": "iter/sec",
            "range": "stddev: 4.6561353839780476e-7",
            "extra": "mean: 9.567027730204295 usec\nrounds: 51280"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 106398.44150480405,
            "unit": "iter/sec",
            "range": "stddev: 4.213151708576177e-7",
            "extra": "mean: 9.3986339071973 usec\nrounds: 56177"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 317955.9434416672,
            "unit": "iter/sec",
            "range": "stddev: 3.3282402822506373e-7",
            "extra": "mean: 3.1450898170848687 usec\nrounds: 59521"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 47239.24601826113,
            "unit": "iter/sec",
            "range": "stddev: 8.77907230201882e-7",
            "extra": "mean: 21.16883913882607 usec\nrounds: 12315"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 315813.96845388215,
            "unit": "iter/sec",
            "range": "stddev: 2.1623782641946973e-7",
            "extra": "mean: 3.166421057610783 usec\nrounds: 84739"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 47370.49910618053,
            "unit": "iter/sec",
            "range": "stddev: 7.756643949126017e-7",
            "extra": "mean: 21.110185006886024 usec\nrounds: 12886"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 317072.0760669409,
            "unit": "iter/sec",
            "range": "stddev: 2.851116595152133e-7",
            "extra": "mean: 3.1538570422356518 usec\nrounds: 90901"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 47494.0030218303,
            "unit": "iter/sec",
            "range": "stddev: 8.175708685827231e-7",
            "extra": "mean: 21.05528985502352 usec\nrounds: 12903"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 47775.20664485852,
            "unit": "iter/sec",
            "range": "stddev: 9.001683957390696e-7",
            "extra": "mean: 20.93135896687154 usec\nrounds: 13004"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 319743.8797235432,
            "unit": "iter/sec",
            "range": "stddev: 2.4994441850571966e-7",
            "extra": "mean: 3.127503178058075 usec\nrounds: 93450"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 47248.81033358602,
            "unit": "iter/sec",
            "range": "stddev: 8.761972697323378e-7",
            "extra": "mean: 21.16455404781201 usec\nrounds: 12970"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 313466.69447977276,
            "unit": "iter/sec",
            "range": "stddev: 2.6461284265806246e-7",
            "extra": "mean: 3.190131575731174 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 47712.29591065024,
            "unit": "iter/sec",
            "range": "stddev: 7.880916235855513e-7",
            "extra": "mean: 20.958957872676635 usec\nrounds: 12391"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 312853.1545994801,
            "unit": "iter/sec",
            "range": "stddev: 3.782268749022498e-7",
            "extra": "mean: 3.196387779053137 usec\nrounds: 86949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 314820.2002561721,
            "unit": "iter/sec",
            "range": "stddev: 2.8044313808396594e-7",
            "extra": "mean: 3.17641625024789 usec\nrounds: 89278"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 47612.269832792794,
            "unit": "iter/sec",
            "range": "stddev: 8.351685159262567e-7",
            "extra": "mean: 21.002989429234336 usec\nrounds: 12771"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 315977.15469088475,
            "unit": "iter/sec",
            "range": "stddev: 2.490248252668582e-7",
            "extra": "mean: 3.1647857611044174 usec\nrounds: 96145"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 47742.21191954107,
            "unit": "iter/sec",
            "range": "stddev: 8.118964372178637e-7",
            "extra": "mean: 20.945824665293653 usec\nrounds: 12690"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 310893.55705732206,
            "unit": "iter/sec",
            "range": "stddev: 3.356941993156356e-7",
            "extra": "mean: 3.2165349757171766 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 47728.77661593843,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014010266243238205",
            "extra": "mean: 20.951720762649142 usec\nrounds: 12484"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 47834.02044263625,
            "unit": "iter/sec",
            "range": "stddev: 9.280280670626441e-7",
            "extra": "mean: 20.905623042897368 usec\nrounds: 12837"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 313309.7166083724,
            "unit": "iter/sec",
            "range": "stddev: 2.4482839830819735e-7",
            "extra": "mean: 3.191729930450799 usec\nrounds: 93450"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 48542.86969465254,
            "unit": "iter/sec",
            "range": "stddev: 8.691853392742997e-7",
            "extra": "mean: 20.600347822249983 usec\nrounds: 12285"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 308873.24416571506,
            "unit": "iter/sec",
            "range": "stddev: 0.000011074003807771313",
            "extra": "mean: 3.2375740498373675 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 47816.08096315811,
            "unit": "iter/sec",
            "range": "stddev: 0.000005624480770139006",
            "extra": "mean: 20.9134663455688 usec\nrounds: 12658"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 314053.5633725682,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014336193902785512",
            "extra": "mean: 3.1841702073403297 usec\nrounds: 81295"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 308548.9924681553,
            "unit": "iter/sec",
            "range": "stddev: 5.903909503233042e-7",
            "extra": "mean: 3.2409763908180897 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 47265.55191522253,
            "unit": "iter/sec",
            "range": "stddev: 8.863247007701399e-7",
            "extra": "mean: 21.15705750762504 usec\nrounds: 12920"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 312175.93497678044,
            "unit": "iter/sec",
            "range": "stddev: 4.191066655489939e-7",
            "extra": "mean: 3.2033218706444484 usec\nrounds: 84739"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 47424.58567878907,
            "unit": "iter/sec",
            "range": "stddev: 8.214564727725589e-7",
            "extra": "mean: 21.08610936051374 usec\nrounds: 13140"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 315522.84651632333,
            "unit": "iter/sec",
            "range": "stddev: 2.4217182220557267e-7",
            "extra": "mean: 3.1693426040014687 usec\nrounds: 92585"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 47411.076537514324,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011209609503849343",
            "extra": "mean: 21.09211756051866 usec\nrounds: 12870"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 47756.86711226021,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011868078855021117",
            "extra": "mean: 20.939397001259294 usec\nrounds: 12005"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 305842.90907703526,
            "unit": "iter/sec",
            "range": "stddev: 2.7349039008179986e-7",
            "extra": "mean: 3.269652394485044 usec\nrounds: 90082"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 47592.06294681926,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013350861993646747",
            "extra": "mean: 21.011906987882178 usec\nrounds: 12837"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 312029.42253611307,
            "unit": "iter/sec",
            "range": "stddev: 2.461056178703677e-7",
            "extra": "mean: 3.204825980422612 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 47874.5064097263,
            "unit": "iter/sec",
            "range": "stddev: 8.346487527001483e-7",
            "extra": "mean: 20.88794381380478 usec\nrounds: 12690"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 312090.5352763864,
            "unit": "iter/sec",
            "range": "stddev: 2.914571358940198e-7",
            "extra": "mean: 3.2041984199053104 usec\nrounds: 86957"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 171430.33214790773,
            "unit": "iter/sec",
            "range": "stddev: 3.3952769841795293e-7",
            "extra": "mean: 5.833273420582384 usec\nrounds: 79994"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 10528.907449654353,
            "unit": "iter/sec",
            "range": "stddev: 0.00020988136692714753",
            "extra": "mean: 94.97661602418478 usec\nrounds: 4331"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 145590.44069569334,
            "unit": "iter/sec",
            "range": "stddev: 5.153267195153391e-7",
            "extra": "mean: 6.8685828219323515 usec\nrounds: 48073"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 143231.6086824221,
            "unit": "iter/sec",
            "range": "stddev: 4.084560085292238e-7",
            "extra": "mean: 6.981699145872425 usec\nrounds: 55246"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 170822.53084172643,
            "unit": "iter/sec",
            "range": "stddev: 5.933911833840125e-7",
            "extra": "mean: 5.854028710805942 usec\nrounds: 4493"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 170517.24808233493,
            "unit": "iter/sec",
            "range": "stddev: 4.896250544922488e-7",
            "extra": "mean: 5.864509375128703 usec\nrounds: 25973"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 18479.861095160017,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017280839607634626",
            "extra": "mean: 54.11296085239006 usec\nrounds: 13513"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 2661.8502065670987,
            "unit": "iter/sec",
            "range": "stddev: 0.000028605118598224914",
            "extra": "mean: 375.67854026228895 usec\nrounds: 2521"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 331034.32820705,
            "unit": "iter/sec",
            "range": "stddev: 3.729951645750735e-7",
            "extra": "mean: 3.0208347436841545 usec\nrounds: 60972"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 336633.44435495033,
            "unit": "iter/sec",
            "range": "stddev: 3.400291516615669e-7",
            "extra": "mean: 2.9705901679382403 usec\nrounds: 95239"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 249156.93162158062,
            "unit": "iter/sec",
            "range": "stddev: 6.99069563858963e-7",
            "extra": "mean: 4.0135347368894365 usec\nrounds: 76331"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 250912.1877987739,
            "unit": "iter/sec",
            "range": "stddev: 3.341506730002208e-7",
            "extra": "mean: 3.985458055158238 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 60246.09345104223,
            "unit": "iter/sec",
            "range": "stddev: 0.000031200950679740184",
            "extra": "mean: 16.598586608982867 usec\nrounds: 24449"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 61517.840684804534,
            "unit": "iter/sec",
            "range": "stddev: 8.172815696630205e-7",
            "extra": "mean: 16.25544701940439 usec\nrounds: 28652"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 54043.2139529897,
            "unit": "iter/sec",
            "range": "stddev: 7.557765314007924e-7",
            "extra": "mean: 18.503710768753777 usec\nrounds: 24330"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 53961.8680187663,
            "unit": "iter/sec",
            "range": "stddev: 8.799687986159355e-7",
            "extra": "mean: 18.531604570327893 usec\nrounds: 25380"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 62806.862404482876,
            "unit": "iter/sec",
            "range": "stddev: 6.591402236609028e-7",
            "extra": "mean: 15.921827037942025 usec\nrounds: 28168"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 62794.0113395676,
            "unit": "iter/sec",
            "range": "stddev: 8.090377254679631e-7",
            "extra": "mean: 15.925085508431001 usec\nrounds: 28734"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 57977.88507492053,
            "unit": "iter/sec",
            "range": "stddev: 0.000006167818105219982",
            "extra": "mean: 17.24795581466578 usec\nrounds: 29761"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 57824.1239239047,
            "unit": "iter/sec",
            "range": "stddev: 8.538439927834814e-7",
            "extra": "mean: 17.293820159142893 usec\nrounds: 25061"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 114411.53817543156,
            "unit": "iter/sec",
            "range": "stddev: 4.595829142671454e-7",
            "extra": "mean: 8.740377202749096 usec\nrounds: 25705"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 27129.667452031055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012771250405186442",
            "extra": "mean: 36.860016871498196 usec\nrounds: 6579"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 27269.494815468945,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012738181955481405",
            "extra": "mean: 36.671013041016735 usec\nrounds: 6748"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 112159.79090459898,
            "unit": "iter/sec",
            "range": "stddev: 6.559016731798342e-7",
            "extra": "mean: 8.915851143575876 usec\nrounds: 19193"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 97312.561173035,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018790859115381355",
            "extra": "mean: 10.276165666032195 usec\nrounds: 28817"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 23204.11230055734,
            "unit": "iter/sec",
            "range": "stddev: 0.000004570806565706395",
            "extra": "mean: 43.09580935686047 usec\nrounds: 7118"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 24073.16426889528,
            "unit": "iter/sec",
            "range": "stddev: 0.000004773538314530979",
            "extra": "mean: 41.5400314154833 usec\nrounds: 8658"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 96462.60515817886,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017310902525315678",
            "extra": "mean: 10.366711518522699 usec\nrounds: 18587"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 115610.63363673136,
            "unit": "iter/sec",
            "range": "stddev: 4.29525364693642e-7",
            "extra": "mean: 8.649723373562445 usec\nrounds: 24271"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 27193.517434837016,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012783448873936454",
            "extra": "mean: 36.77347008882794 usec\nrounds: 5182"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 27030.255092740677,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015081172505016484",
            "extra": "mean: 36.99558130579992 usec\nrounds: 8591"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 113221.54026529522,
            "unit": "iter/sec",
            "range": "stddev: 4.2229198407115993e-7",
            "extra": "mean: 8.83224161813069 usec\nrounds: 20789"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 96487.23281003302,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018486775019375153",
            "extra": "mean: 10.364065492155115 usec\nrounds: 25316"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 24099.019645062413,
            "unit": "iter/sec",
            "range": "stddev: 0.000004595841702630306",
            "extra": "mean: 41.495463912154925 usec\nrounds: 7163"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 24133.75063535262,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045297507431247865",
            "extra": "mean: 41.43574760133379 usec\nrounds: 8130"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 98433.60646770195,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016922259846596486",
            "extra": "mean: 10.159131986372156 usec\nrounds: 19646"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 95565.72399926101,
            "unit": "iter/sec",
            "range": "stddev: 4.760951152693045e-7",
            "extra": "mean: 10.464002763247342 usec\nrounds: 31846"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 94321.75717301836,
            "unit": "iter/sec",
            "range": "stddev: 6.178532333879631e-7",
            "extra": "mean: 10.60200774425415 usec\nrounds: 33444"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 94267.86371834167,
            "unit": "iter/sec",
            "range": "stddev: 5.216550796066355e-7",
            "extra": "mean: 10.608068970225643 usec\nrounds: 36900"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 95211.57036635384,
            "unit": "iter/sec",
            "range": "stddev: 5.900764660371784e-7",
            "extra": "mean: 10.502925181805248 usec\nrounds: 39215"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 82260.41278954291,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019997945708364017",
            "extra": "mean: 12.156515705293444 usec\nrounds: 36230"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 84091.179134251,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011331682477036376",
            "extra": "mean: 11.891853703270193 usec\nrounds: 30486"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 83862.67931610523,
            "unit": "iter/sec",
            "range": "stddev: 8.995429194838939e-7",
            "extra": "mean: 11.924255320184567 usec\nrounds: 37451"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 83287.48837865499,
            "unit": "iter/sec",
            "range": "stddev: 0.00000194718684364942",
            "extra": "mean: 12.006605307313855 usec\nrounds: 32785"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 95704.08690317153,
            "unit": "iter/sec",
            "range": "stddev: 5.20853418558116e-7",
            "extra": "mean: 10.448874571174253 usec\nrounds: 32361"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 94400.10593262722,
            "unit": "iter/sec",
            "range": "stddev: 4.854133666396858e-7",
            "extra": "mean: 10.593208451627097 usec\nrounds: 22221"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 95100.22384637623,
            "unit": "iter/sec",
            "range": "stddev: 4.572482443650057e-7",
            "extra": "mean: 10.515222357577075 usec\nrounds: 38609"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 94109.92546923629,
            "unit": "iter/sec",
            "range": "stddev: 5.546288380680706e-7",
            "extra": "mean: 10.625871766595877 usec\nrounds: 38313"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 82506.57033068199,
            "unit": "iter/sec",
            "range": "stddev: 5.235363763132034e-7",
            "extra": "mean: 12.120246860244617 usec\nrounds: 31054"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 83413.30644957144,
            "unit": "iter/sec",
            "range": "stddev: 5.798874008673619e-7",
            "extra": "mean: 11.988494912434176 usec\nrounds: 35970"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 81908.77576393848,
            "unit": "iter/sec",
            "range": "stddev: 4.958321501932991e-7",
            "extra": "mean: 12.208704020702314 usec\nrounds: 34722"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 83473.77252009397,
            "unit": "iter/sec",
            "range": "stddev: 6.677619272081725e-7",
            "extra": "mean: 11.979810781395772 usec\nrounds: 31054"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 128961.20048473935,
            "unit": "iter/sec",
            "range": "stddev: 5.112065370794941e-7",
            "extra": "mean: 7.754270247494595 usec\nrounds: 14409"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 32140.355966944888,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013553585076918058",
            "extra": "mean: 31.11353219075922 usec\nrounds: 8403"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 31799.713505386786,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011744831501276375",
            "extra": "mean: 31.446824193262078 usec\nrounds: 8333"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 129484.00281363502,
            "unit": "iter/sec",
            "range": "stddev: 5.762886960133013e-7",
            "extra": "mean: 7.72296174253502 usec\nrounds: 31445"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 117339.2717262957,
            "unit": "iter/sec",
            "range": "stddev: 4.552561152274143e-7",
            "extra": "mean: 8.522295948219186 usec\nrounds: 20534"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 28148.90001240049,
            "unit": "iter/sec",
            "range": "stddev: 0.000004160554882122514",
            "extra": "mean: 35.525366872576484 usec\nrounds: 7752"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 28419.009021156682,
            "unit": "iter/sec",
            "range": "stddev: 0.000004177513637233917",
            "extra": "mean: 35.18771535121245 usec\nrounds: 8045"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 117511.8501819141,
            "unit": "iter/sec",
            "range": "stddev: 5.98241468052133e-7",
            "extra": "mean: 8.509780064325012 usec\nrounds: 34601"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 322564.00700695324,
            "unit": "iter/sec",
            "range": "stddev: 2.8590169422181447e-7",
            "extra": "mean: 3.1001599009105933 usec\nrounds: 50500"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 27249.699453150668,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013741033712580615",
            "extra": "mean: 36.69765245371827 usec\nrounds: 6215"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 26855.91688473895,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016511540021003738",
            "extra": "mean: 37.23574228695415 usec\nrounds: 8071"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 323934.1454578044,
            "unit": "iter/sec",
            "range": "stddev: 3.210281329618839e-7",
            "extra": "mean: 3.0870472101258 usec\nrounds: 70917"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 280657.0628038407,
            "unit": "iter/sec",
            "range": "stddev: 3.020020895612657e-7",
            "extra": "mean: 3.563067289344964 usec\nrounds: 58137"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 25093.36595394844,
            "unit": "iter/sec",
            "range": "stddev: 0.000004339706753127181",
            "extra": "mean: 39.85117029876377 usec\nrounds: 7663"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 24657.12276264614,
            "unit": "iter/sec",
            "range": "stddev: 0.000004431392404457766",
            "extra": "mean: 40.55623235631254 usec\nrounds: 7949"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 279114.38802480156,
            "unit": "iter/sec",
            "range": "stddev: 2.6532167878087416e-7",
            "extra": "mean: 3.5827604842468452 usec\nrounds: 64931"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 39962.80322451532,
            "unit": "iter/sec",
            "range": "stddev: 9.382262366582253e-7",
            "extra": "mean: 25.023269623551993 usec\nrounds: 16638"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 18801.68972593305,
            "unit": "iter/sec",
            "range": "stddev: 0.0000134210540444276",
            "extra": "mean: 53.18670899141084 usec\nrounds: 7474"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 18828.03961995033,
            "unit": "iter/sec",
            "range": "stddev: 0.000001559436174892734",
            "extra": "mean: 53.112274043676464 usec\nrounds: 7112"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 39682.22828383267,
            "unit": "iter/sec",
            "range": "stddev: 9.806147989523309e-7",
            "extra": "mean: 25.200197752186714 usec\nrounds: 20283"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 36353.08824701621,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032567772376069747",
            "extra": "mean: 27.50797932778319 usec\nrounds: 16447"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 17187.31486973332,
            "unit": "iter/sec",
            "range": "stddev: 0.000005845312171097705",
            "extra": "mean: 58.182444877471205 usec\nrounds: 7184"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 16769.23671083175,
            "unit": "iter/sec",
            "range": "stddev: 0.000006430072352228894",
            "extra": "mean: 59.63300639402807 usec\nrounds: 7663"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 36215.79688198595,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035977987832257656",
            "extra": "mean: 27.61226001069739 usec\nrounds: 19230"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 39837.9255178239,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012600774385493929",
            "extra": "mean: 25.10170866082346 usec\nrounds: 19455"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 18556.950534871106,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020201847155920907",
            "extra": "mean: 53.888164336099294 usec\nrounds: 7722"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 18764.96962129092,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018162690762484622",
            "extra": "mean: 53.290787045313955 usec\nrounds: 8368"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 39787.47914300643,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017594674795830104",
            "extra": "mean: 25.133535009990023 usec\nrounds: 17452"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 35433.768468239046,
            "unit": "iter/sec",
            "range": "stddev: 0.000003508177393776986",
            "extra": "mean: 28.221666597396975 usec\nrounds: 19193"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 16786.999222696442,
            "unit": "iter/sec",
            "range": "stddev: 0.000006561756756892082",
            "extra": "mean: 59.56990804216962 usec\nrounds: 5981"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 17002.309270824557,
            "unit": "iter/sec",
            "range": "stddev: 0.000006199942474243927",
            "extra": "mean: 58.81553994056381 usec\nrounds: 7386"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 35330.81647246452,
            "unit": "iter/sec",
            "range": "stddev: 0.000003619715390054942",
            "extra": "mean: 28.303902933558344 usec\nrounds: 13908"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 30908.3428478804,
            "unit": "iter/sec",
            "range": "stddev: 0.000001257740872186871",
            "extra": "mean: 32.353724200667614 usec\nrounds: 21929"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 30516.85883064132,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012279803037029805",
            "extra": "mean: 32.76877235464096 usec\nrounds: 20242"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 30650.10265759735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012023702733539306",
            "extra": "mean: 32.626318129219264 usec\nrounds: 21551"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 30826.04292345159,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013110065669793244",
            "extra": "mean: 32.440102756076676 usec\nrounds: 22675"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 27724.21001257026,
            "unit": "iter/sec",
            "range": "stddev: 0.000004236918640055084",
            "extra": "mean: 36.06955796203377 usec\nrounds: 20039"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 29523.333358891563,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018949297317662307",
            "extra": "mean: 33.8715140273559 usec\nrounds: 21458"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 29138.55652196923,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018230355039622397",
            "extra": "mean: 34.31878992516471 usec\nrounds: 15504"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 27875.489626512164,
            "unit": "iter/sec",
            "range": "stddev: 0.000004251154078556395",
            "extra": "mean: 35.87380933567199 usec\nrounds: 17953"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 34996.09117835298,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011292779140435337",
            "extra": "mean: 28.57461980264114 usec\nrounds: 20876"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 35045.38448852067,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010944849069735758",
            "extra": "mean: 28.53442798801526 usec\nrounds: 20080"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 35394.64484579686,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011382454274709553",
            "extra": "mean: 28.25286153757666 usec\nrounds: 21551"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 35279.71558963514,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012338331384903487",
            "extra": "mean: 28.344899704741128 usec\nrounds: 22025"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 33205.5880609389,
            "unit": "iter/sec",
            "range": "stddev: 0.000001363512871488382",
            "extra": "mean: 30.1154130492976 usec\nrounds: 18315"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 33064.30334914068,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011823178913857952",
            "extra": "mean: 30.244097068689317 usec\nrounds: 20161"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 33125.08144963636,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027751976410016123",
            "extra": "mean: 30.188605015821864 usec\nrounds: 18621"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 33224.46970847964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012011117015488973",
            "extra": "mean: 30.0982982956317 usec\nrounds: 18656"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 50646.82676372692,
            "unit": "iter/sec",
            "range": "stddev: 7.091017569276849e-7",
            "extra": "mean: 19.744573626796228 usec\nrounds: 21833"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 21134.75006640293,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016290857588262626",
            "extra": "mean: 47.31544006236725 usec\nrounds: 8292"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 21130.614343265883,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015461489047106027",
            "extra": "mean: 47.32470072829141 usec\nrounds: 7418"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 51355.52778387434,
            "unit": "iter/sec",
            "range": "stddev: 9.00236688079721e-7",
            "extra": "mean: 19.472100534307046 usec\nrounds: 23584"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 50525.664103498064,
            "unit": "iter/sec",
            "range": "stddev: 8.159984715788658e-7",
            "extra": "mean: 19.791921941917963 usec\nrounds: 22573"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 18945.674920724792,
            "unit": "iter/sec",
            "range": "stddev: 0.000005698784859818969",
            "extra": "mean: 52.78249543414755 usec\nrounds: 8651"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 18936.916429046116,
            "unit": "iter/sec",
            "range": "stddev: 0.000005734874982063003",
            "extra": "mean: 52.80690780607578 usec\nrounds: 7289"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 49764.58132188225,
            "unit": "iter/sec",
            "range": "stddev: 9.556548019473588e-7",
            "extra": "mean: 20.09461294433285 usec\nrounds: 23640"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 51072.04489980718,
            "unit": "iter/sec",
            "range": "stddev: 9.62118285307075e-7",
            "extra": "mean: 19.58018328738929 usec\nrounds: 22522"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 21150.618292762338,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015611455135996138",
            "extra": "mean: 47.2799417094202 usec\nrounds: 7943"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 21066.77142277939,
            "unit": "iter/sec",
            "range": "stddev: 0.000001971160859750001",
            "extra": "mean: 47.46811839040059 usec\nrounds: 8945"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 50978.518247821965,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011468267774240328",
            "extra": "mean: 19.616105653340064 usec\nrounds: 23473"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 50065.560507369395,
            "unit": "iter/sec",
            "range": "stddev: 9.15457230906067e-7",
            "extra": "mean: 19.973810137465755 usec\nrounds: 23201"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 18999.881540028797,
            "unit": "iter/sec",
            "range": "stddev: 0.000005746068439906828",
            "extra": "mean: 52.63190709337888 usec\nrounds: 7599"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 18993.347873513787,
            "unit": "iter/sec",
            "range": "stddev: 0.00000574220675510207",
            "extra": "mean: 52.650012344295526 usec\nrounds: 8749"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 49261.10077798869,
            "unit": "iter/sec",
            "range": "stddev: 7.504294007809399e-7",
            "extra": "mean: 20.29999298040107 usec\nrounds: 22935"
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
          "id": "5fe12cb54859c4b4d5bc9972affad2486f48a8fb",
          "message": "Pint 0.17",
          "timestamp": "2022-11-26T23:23:26-03:00",
          "tree_id": "d72b51610917a74f27e6ab56569a90c7d10bba96",
          "url": "https://github.com/hgrecco/pint-benchmark/commit/5fe12cb54859c4b4d5bc9972affad2486f48a8fb"
        },
        "date": 1669525862062,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 5.215670908495853,
            "unit": "iter/sec",
            "range": "stddev: 0.010703192026919295",
            "extra": "mean: 191.72988816665773 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 9617.081222380464,
            "unit": "iter/sec",
            "range": "stddev: 0.0002929220899946157",
            "extra": "mean: 103.98165273605493 usec\nrounds: 4331"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 6.926209418498837,
            "unit": "iter/sec",
            "range": "stddev: 0.007828352475454879",
            "extra": "mean: 144.37911700000785 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 766.8424105620707,
            "unit": "iter/sec",
            "range": "stddev: 0.0021961863945708262",
            "extra": "mean: 1.304048897435175 msec\nrounds: 351"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_build_cache",
            "value": 1871.426793877977,
            "unit": "iter/sec",
            "range": "stddev: 0.000007736211933824899",
            "extra": "mean: 534.3516525847086 usec\nrounds: 1799"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 175640.23643854912,
            "unit": "iter/sec",
            "range": "stddev: 4.213632306837763e-7",
            "extra": "mean: 5.6934562391679995 usec\nrounds: 24691"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 171134.93741309474,
            "unit": "iter/sec",
            "range": "stddev: 7.609041450024736e-7",
            "extra": "mean: 5.84334219018146 usec\nrounds: 4968"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 174689.1822603325,
            "unit": "iter/sec",
            "range": "stddev: 4.840469476121135e-7",
            "extra": "mean: 5.724452922961989 usec\nrounds: 37035"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 171980.13482561125,
            "unit": "iter/sec",
            "range": "stddev: 6.759987019133063e-7",
            "extra": "mean: 5.814625049654747 usec\nrounds: 7593"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 173634.4988195872,
            "unit": "iter/sec",
            "range": "stddev: 3.527150186018797e-7",
            "extra": "mean: 5.759224156479628 usec\nrounds: 7468"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 11110.50417585986,
            "unit": "iter/sec",
            "range": "stddev: 0.0000376215704756212",
            "extra": "mean: 90.00491644409182 usec\nrounds: 3363"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 10797.184176881929,
            "unit": "iter/sec",
            "range": "stddev: 0.000010782923093214425",
            "extra": "mean: 92.61674003312089 usec\nrounds: 4239"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 11101.439348990525,
            "unit": "iter/sec",
            "range": "stddev: 0.000009790158851020492",
            "extra": "mean: 90.07840952542175 usec\nrounds: 5963"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 11167.469957824324,
            "unit": "iter/sec",
            "range": "stddev: 0.000011291261978940797",
            "extra": "mean: 89.54579719279788 usec\nrounds: 6341"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 10945.395524541886,
            "unit": "iter/sec",
            "range": "stddev: 0.00001069815503715268",
            "extra": "mean: 91.36261889831107 usec\nrounds: 6064"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 57308.573289099186,
            "unit": "iter/sec",
            "range": "stddev: 7.12540941680121e-7",
            "extra": "mean: 17.4493961829305 usec\nrounds: 44641"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 53013.546853344254,
            "unit": "iter/sec",
            "range": "stddev: 7.575972132090771e-7",
            "extra": "mean: 18.86310310016386 usec\nrounds: 40320"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 61845.859979939465,
            "unit": "iter/sec",
            "range": "stddev: 8.742665102077054e-7",
            "extra": "mean: 16.169231058058912 usec\nrounds: 49018"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 57245.401778287815,
            "unit": "iter/sec",
            "range": "stddev: 8.816499895792133e-7",
            "extra": "mean: 17.468651960431917 usec\nrounds: 18518"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 57646.21147954156,
            "unit": "iter/sec",
            "range": "stddev: 7.456178999498897e-7",
            "extra": "mean: 17.347193758863 usec\nrounds: 45247"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 342630.12061718816,
            "unit": "iter/sec",
            "range": "stddev: 3.3461679409723015e-7",
            "extra": "mean: 2.9185992118809496 usec\nrounds: 50503"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 336450.71482905786,
            "unit": "iter/sec",
            "range": "stddev: 3.522284348927189e-7",
            "extra": "mean: 2.972203523205694 usec\nrounds: 13227"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 346325.3396713714,
            "unit": "iter/sec",
            "range": "stddev: 3.2087116098370104e-7",
            "extra": "mean: 2.8874583677558836 usec\nrounds: 54345"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 339417.6197093363,
            "unit": "iter/sec",
            "range": "stddev: 2.844920734899556e-7",
            "extra": "mean: 2.946223006502609 usec\nrounds: 57801"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 334698.4292665602,
            "unit": "iter/sec",
            "range": "stddev: 3.330527813522781e-7",
            "extra": "mean: 2.987764245536931 usec\nrounds: 54052"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 11131.90474109052,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032888734454683373",
            "extra": "mean: 89.8318862098021 usec\nrounds: 4728"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 10906.958495411645,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025017337007711794",
            "extra": "mean: 91.68458836812127 usec\nrounds: 3989"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 11062.359592255068,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025010384637966855",
            "extra": "mean: 90.39662756037289 usec\nrounds: 5907"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 11051.602638889066,
            "unit": "iter/sec",
            "range": "stddev: 0.000002499514999351063",
            "extra": "mean: 90.48461410303858 usec\nrounds: 5942"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 10922.935343731107,
            "unit": "iter/sec",
            "range": "stddev: 0.000002816143761314355",
            "extra": "mean: 91.55048240525566 usec\nrounds: 6053"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 144811.3095019017,
            "unit": "iter/sec",
            "range": "stddev: 5.16098868232898e-7",
            "extra": "mean: 6.905537995890215 usec\nrounds: 7764"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 147353.78775451658,
            "unit": "iter/sec",
            "range": "stddev: 4.679532395720802e-7",
            "extra": "mean: 6.786388156278315 usec\nrounds: 7734"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 173297.20521115762,
            "unit": "iter/sec",
            "range": "stddev: 5.517727168106674e-7",
            "extra": "mean: 5.770433509193232 usec\nrounds: 3790"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 172162.22759878903,
            "unit": "iter/sec",
            "range": "stddev: 5.12131283230418e-7",
            "extra": "mean: 5.808475029321902 usec\nrounds: 5126"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[meter]",
            "value": 441939.68676468387,
            "unit": "iter/sec",
            "range": "stddev: 2.552511053742552e-7",
            "extra": "mean: 2.26275220340748 usec\nrounds: 69440"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[angstrom]",
            "value": 443687.20008164685,
            "unit": "iter/sec",
            "range": "stddev: 2.636490723122966e-7",
            "extra": "mean: 2.2538400923352784 usec\nrounds: 67564"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[kilometer/second]",
            "value": 131605.0600664683,
            "unit": "iter/sec",
            "range": "stddev: 5.339840453017865e-7",
            "extra": "mean: 7.598492029827282 usec\nrounds: 4266"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[angstrom/minute]",
            "value": 131326.37395323216,
            "unit": "iter/sec",
            "range": "stddev: 3.9729733485666044e-7",
            "extra": "mean: 7.614616698060354 usec\nrounds: 5797"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[meter]",
            "value": 1072284.7791166978,
            "unit": "iter/sec",
            "range": "stddev: 0.000004121084990695587",
            "extra": "mean: 932.5880768574904 nsec\nrounds: 166667"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[angstrom]",
            "value": 1081077.3732642443,
            "unit": "iter/sec",
            "range": "stddev: 2.434030082715612e-7",
            "extra": "mean: 925.0031725116618 nsec\nrounds: 163908"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[kilometer/second]",
            "value": 1090917.5389380138,
            "unit": "iter/sec",
            "range": "stddev: 2.91163407466246e-7",
            "extra": "mean: 916.6595680306688 nsec\nrounds: 181819"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[angstrom/minute]",
            "value": 1386782.5172117236,
            "unit": "iter/sec",
            "range": "stddev: 5.6157751665061765e-8",
            "extra": "mean: 721.0936016201357 nsec\nrounds: 67564"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_convert_from_uc[key0]",
            "value": 65474.41733280061,
            "unit": "iter/sec",
            "range": "stddev: 8.860499890527412e-7",
            "extra": "mean: 15.273140880614324 usec\nrounds: 9107"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_convert_from_uc[key1]",
            "value": 58831.61367488924,
            "unit": "iter/sec",
            "range": "stddev: 8.893623934850734e-7",
            "extra": "mean: 16.997663969003526 usec\nrounds: 11862"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_math_expression",
            "value": 8084.986887130956,
            "unit": "iter/sec",
            "range": "stddev: 0.000003406441090964144",
            "extra": "mean: 123.68603857499397 usec\nrounds: 4070"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 117950.18548499864,
            "unit": "iter/sec",
            "range": "stddev: 8.129554278929742e-7",
            "extra": "mean: 8.478155383038239 usec\nrounds: 1802"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 115759.21286893275,
            "unit": "iter/sec",
            "range": "stddev: 0.000006936049880753972",
            "extra": "mean: 8.63862128306142 usec\nrounds: 69445"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 51351.71773306325,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010289774554019767",
            "extra": "mean: 19.47354527064128 usec\nrounds: 34128"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 12010657.764432717,
            "unit": "iter/sec",
            "range": "stddev: 4.52979497721914e-9",
            "extra": "mean: 83.25938675571147 nsec\nrounds: 109891"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 11499342.90326416,
            "unit": "iter/sec",
            "range": "stddev: 4.529625738344909e-9",
            "extra": "mean: 86.96149061842996 nsec\nrounds: 113624"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 10685227.596632361,
            "unit": "iter/sec",
            "range": "stddev: 3.228897226454552e-8",
            "extra": "mean: 93.58715019932208 nsec\nrounds: 105253"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 11931356.517116753,
            "unit": "iter/sec",
            "range": "stddev: 5.231160872372157e-9",
            "extra": "mean: 83.81276668457046 nsec\nrounds: 116280"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 11829931.52368946,
            "unit": "iter/sec",
            "range": "stddev: 5.427670121345179e-9",
            "extra": "mean: 84.53134305952122 nsec\nrounds: 111112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 11908125.438195137,
            "unit": "iter/sec",
            "range": "stddev: 5.12788327828638e-9",
            "extra": "mean: 83.97627361164083 nsec\nrounds: 117634"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 127208.93420225127,
            "unit": "iter/sec",
            "range": "stddev: 4.821529680629442e-7",
            "extra": "mean: 7.861083077781989 usec\nrounds: 34245"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 30858.6704854039,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013719031774028136",
            "extra": "mean: 32.40580311044179 usec\nrounds: 9259"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 128179.16218550148,
            "unit": "iter/sec",
            "range": "stddev: 6.671625472536322e-7",
            "extra": "mean: 7.801580092658082 usec\nrounds: 37313"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 31247.726307149496,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011594258896285049",
            "extra": "mean: 32.00232843089129 usec\nrounds: 10267"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 126314.51592611305,
            "unit": "iter/sec",
            "range": "stddev: 5.906668480846924e-7",
            "extra": "mean: 7.916746485296625 usec\nrounds: 35209"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 30901.322923881722,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012400069102874356",
            "extra": "mean: 32.361074069976524 usec\nrounds: 9302"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 30731.72129665258,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014705853206995218",
            "extra": "mean: 32.539667737678066 usec\nrounds: 10582"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 127858.53198339349,
            "unit": "iter/sec",
            "range": "stddev: 4.7298730789004594e-7",
            "extra": "mean: 7.821144076094052 usec\nrounds: 27777"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 30544.08334394978,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011424099329680592",
            "extra": "mean: 32.73956493436827 usec\nrounds: 10449"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 123265.96549045197,
            "unit": "iter/sec",
            "range": "stddev: 5.332175108548537e-7",
            "extra": "mean: 8.112539386043741 usec\nrounds: 27624"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 30650.30154551166,
            "unit": "iter/sec",
            "range": "stddev: 0.000001250533356953794",
            "extra": "mean: 32.626106419055354 usec\nrounds: 9970"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 124515.9427417561,
            "unit": "iter/sec",
            "range": "stddev: 4.836664315229458e-7",
            "extra": "mean: 8.031100098354333 usec\nrounds: 26454"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 127434.0764940012,
            "unit": "iter/sec",
            "range": "stddev: 5.048718907095021e-7",
            "extra": "mean: 7.8471946241716095 usec\nrounds: 38022"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 30826.792812564523,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012016061920582838",
            "extra": "mean: 32.439313621766566 usec\nrounds: 9470"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 127098.64886191969,
            "unit": "iter/sec",
            "range": "stddev: 6.498298874235276e-7",
            "extra": "mean: 7.867904253540906 usec\nrounds: 40649"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 31385.870749194557,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013317908629751958",
            "extra": "mean: 31.86147065955348 usec\nrounds: 9901"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 125924.99397485302,
            "unit": "iter/sec",
            "range": "stddev: 5.012228270231549e-7",
            "extra": "mean: 7.9412352419861785 usec\nrounds: 34964"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 30213.42321062942,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015349932752451895",
            "extra": "mean: 33.09787153308034 usec\nrounds: 10384"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 30898.420716984478,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012642302358333703",
            "extra": "mean: 32.36411366003287 usec\nrounds: 10593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 127029.5823751173,
            "unit": "iter/sec",
            "range": "stddev: 4.1807116513165235e-7",
            "extra": "mean: 7.872182064229798 usec\nrounds: 26595"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 31137.554064759828,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013125361175110232",
            "extra": "mean: 32.11556045539742 usec\nrounds: 10363"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 128257.05131498433,
            "unit": "iter/sec",
            "range": "stddev: 5.253396901069423e-7",
            "extra": "mean: 7.796842276875029 usec\nrounds: 29761"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 30676.084928495537,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012854044810553052",
            "extra": "mean: 32.598684034515856 usec\nrounds: 10460"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 126914.28387655981,
            "unit": "iter/sec",
            "range": "stddev: 5.015113732210547e-7",
            "extra": "mean: 7.879333747591614 usec\nrounds: 28168"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 127953.4319708446,
            "unit": "iter/sec",
            "range": "stddev: 4.7373781034300504e-7",
            "extra": "mean: 7.815343321372258 usec\nrounds: 34842"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 31039.001235332526,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013064518255573538",
            "extra": "mean: 32.21753149910227 usec\nrounds: 9921"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 125313.63217327115,
            "unit": "iter/sec",
            "range": "stddev: 5.13990959107428e-7",
            "extra": "mean: 7.979977777815107 usec\nrounds: 36900"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 31111.954743512197,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013486295493123964",
            "extra": "mean: 32.141985556485515 usec\nrounds: 10593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 127832.39087610025,
            "unit": "iter/sec",
            "range": "stddev: 4.862633587590057e-7",
            "extra": "mean: 7.822743462329793 usec\nrounds: 40649"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 30684.275390300132,
            "unit": "iter/sec",
            "range": "stddev: 0.000001293622868403616",
            "extra": "mean: 32.5899825653409 usec\nrounds: 10267"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 30894.27480472689,
            "unit": "iter/sec",
            "range": "stddev: 0.000001392059150991414",
            "extra": "mean: 32.368456819934735 usec\nrounds: 10352"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 126444.58602869608,
            "unit": "iter/sec",
            "range": "stddev: 5.459133478701738e-7",
            "extra": "mean: 7.908602743758868 usec\nrounds: 27700"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 30777.865261954317,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012792085415950482",
            "extra": "mean: 32.49088237565774 usec\nrounds: 10406"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 126163.93694684141,
            "unit": "iter/sec",
            "range": "stddev: 4.7255013333629737e-7",
            "extra": "mean: 7.92619526783906 usec\nrounds: 26246"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 30780.510511183944,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014020166884868494",
            "extra": "mean: 32.48809013861726 usec\nrounds: 10384"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 127837.24070751127,
            "unit": "iter/sec",
            "range": "stddev: 5.030425510920919e-7",
            "extra": "mean: 7.8224466866269236 usec\nrounds: 30030"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 130948.94347959434,
            "unit": "iter/sec",
            "range": "stddev: 5.015553174410197e-7",
            "extra": "mean: 7.636564094584155 usec\nrounds: 41665"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 30871.4210442917,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013416527046177568",
            "extra": "mean: 32.39241881885789 usec\nrounds: 9990"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 128776.41941519377,
            "unit": "iter/sec",
            "range": "stddev: 4.801458915469903e-7",
            "extra": "mean: 7.765396836946176 usec\nrounds: 38759"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 31324.99371353449,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012498031150162383",
            "extra": "mean: 31.923390285244754 usec\nrounds: 10582"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 121813.39652596014,
            "unit": "iter/sec",
            "range": "stddev: 4.784048387309237e-7",
            "extra": "mean: 8.209277702776198 usec\nrounds: 37036"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 30595.328024575374,
            "unit": "iter/sec",
            "range": "stddev: 0.000001276871274215627",
            "extra": "mean: 32.68472883169485 usec\nrounds: 10204"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 31268.274300629662,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014187295916218613",
            "extra": "mean: 31.981298052635495 usec\nrounds: 10374"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 129217.79675271969,
            "unit": "iter/sec",
            "range": "stddev: 4.631526564813702e-7",
            "extra": "mean: 7.738872083647045 usec\nrounds: 27174"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 31244.31939227864,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014099595433772625",
            "extra": "mean: 32.00581799989948 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 129364.35614655839,
            "unit": "iter/sec",
            "range": "stddev: 5.314508098848094e-7",
            "extra": "mean: 7.730104565024761 usec\nrounds: 28652"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 30797.060704932363,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014815282203596352",
            "extra": "mean: 32.4706311937049 usec\nrounds: 10111"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 128554.95135846858,
            "unit": "iter/sec",
            "range": "stddev: 5.050654228583371e-7",
            "extra": "mean: 7.778774675209154 usec\nrounds: 28328"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 129739.0462713482,
            "unit": "iter/sec",
            "range": "stddev: 4.597990759137995e-7",
            "extra": "mean: 7.707779799063019 usec\nrounds: 39523"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 31300.29415709101,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012132000987340136",
            "extra": "mean: 31.94858153668349 usec\nrounds: 10204"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 130513.93903082801,
            "unit": "iter/sec",
            "range": "stddev: 4.577809221678624e-7",
            "extra": "mean: 7.662016849892142 usec\nrounds: 43858"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 31032.777019370387,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012702238559615577",
            "extra": "mean: 32.223993340196685 usec\nrounds: 10661"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 127831.83940333597,
            "unit": "iter/sec",
            "range": "stddev: 4.473109562762163e-7",
            "extra": "mean: 7.82277721002506 usec\nrounds: 38166"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 30900.34119967668,
            "unit": "iter/sec",
            "range": "stddev: 0.000001238096136865697",
            "extra": "mean: 32.36210220262757 usec\nrounds: 9579"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 31271.626755447855,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015931429706550106",
            "extra": "mean: 31.97786951795814 usec\nrounds: 11013"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 129788.37987905109,
            "unit": "iter/sec",
            "range": "stddev: 6.273512320307866e-7",
            "extra": "mean: 7.704850009930729 usec\nrounds: 30302"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 31314.097692347124,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012414723509360535",
            "extra": "mean: 31.93449831525533 usec\nrounds: 10684"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 130289.06266645381,
            "unit": "iter/sec",
            "range": "stddev: 5.926697834596604e-7",
            "extra": "mean: 7.6752413405570925 usec\nrounds: 31151"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 31079.204943657376,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014681783379933965",
            "extra": "mean: 32.17585526440821 usec\nrounds: 10799"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 126960.93682738481,
            "unit": "iter/sec",
            "range": "stddev: 4.1957566547342355e-7",
            "extra": "mean: 7.876438414751089 usec\nrounds: 28489"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 128898.61670742407,
            "unit": "iter/sec",
            "range": "stddev: 4.0230309563412804e-7",
            "extra": "mean: 7.758035156186465 usec\nrounds: 35840"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 31174.44534089743,
            "unit": "iter/sec",
            "range": "stddev: 0.000001220206210583764",
            "extra": "mean: 32.07755548061381 usec\nrounds: 10373"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 128877.64461178968,
            "unit": "iter/sec",
            "range": "stddev: 6.358324891225278e-7",
            "extra": "mean: 7.759297611406845 usec\nrounds: 39061"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 30620.879969722515,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013752603967280042",
            "extra": "mean: 32.6574546841497 usec\nrounds: 10493"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 129849.24119457678,
            "unit": "iter/sec",
            "range": "stddev: 4.6628832713453217e-7",
            "extra": "mean: 7.70123868880772 usec\nrounds: 42193"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 30773.580175364215,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012530229175587928",
            "extra": "mean: 32.49540658907636 usec\nrounds: 10320"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 31140.70271780704,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013716873580653274",
            "extra": "mean: 32.11231323396484 usec\nrounds: 10730"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 127427.76145479112,
            "unit": "iter/sec",
            "range": "stddev: 4.470064719678259e-7",
            "extra": "mean: 7.847583513854478 usec\nrounds: 28169"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 31058.56357384073,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013202948759162942",
            "extra": "mean: 32.197239180831154 usec\nrounds: 10352"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 127664.93779973447,
            "unit": "iter/sec",
            "range": "stddev: 5.150838455692486e-7",
            "extra": "mean: 7.8330042471698915 usec\nrounds: 28489"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 30479.33177594402,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013828314867990898",
            "extra": "mean: 32.809118236288086 usec\nrounds: 10183"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 129113.25376131038,
            "unit": "iter/sec",
            "range": "stddev: 4.824392808958768e-7",
            "extra": "mean: 7.745138247764122 usec\nrounds: 29939"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 103615.65518410732,
            "unit": "iter/sec",
            "range": "stddev: 5.929607833600299e-7",
            "extra": "mean: 9.651051264629565 usec\nrounds: 50249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 103593.52651681729,
            "unit": "iter/sec",
            "range": "stddev: 5.335889687408592e-7",
            "extra": "mean: 9.653112830729444 usec\nrounds: 58477"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 107029.48202922013,
            "unit": "iter/sec",
            "range": "stddev: 6.146031755087612e-7",
            "extra": "mean: 9.343220027235018 usec\nrounds: 60238"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 103622.7810772445,
            "unit": "iter/sec",
            "range": "stddev: 5.084861517265919e-7",
            "extra": "mean: 9.650387584700711 usec\nrounds: 59169"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 105998.65814590601,
            "unit": "iter/sec",
            "range": "stddev: 6.321508110091427e-7",
            "extra": "mean: 9.434081690199426 usec\nrounds: 60607"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 102924.44661785192,
            "unit": "iter/sec",
            "range": "stddev: 6.319732050630368e-7",
            "extra": "mean: 9.715864722721308 usec\nrounds: 59877"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 99915.74814722393,
            "unit": "iter/sec",
            "range": "stddev: 5.378199805474142e-7",
            "extra": "mean: 10.008432289637858 usec\nrounds: 58477"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 107088.83361907954,
            "unit": "iter/sec",
            "range": "stddev: 6.040035510997513e-7",
            "extra": "mean: 9.338041756594821 usec\nrounds: 65786"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 102947.33153650266,
            "unit": "iter/sec",
            "range": "stddev: 6.85772173088857e-7",
            "extra": "mean: 9.71370491177252 usec\nrounds: 59877"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 105756.92821799434,
            "unit": "iter/sec",
            "range": "stddev: 5.071985817063492e-7",
            "extra": "mean: 9.45564528820961 usec\nrounds: 63288"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 102793.00479204036,
            "unit": "iter/sec",
            "range": "stddev: 5.399747141518845e-7",
            "extra": "mean: 9.72828843775013 usec\nrounds: 55863"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 105216.30370349096,
            "unit": "iter/sec",
            "range": "stddev: 5.322624148146001e-7",
            "extra": "mean: 9.504230473806514 usec\nrounds: 61725"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 107773.83333901066,
            "unit": "iter/sec",
            "range": "stddev: 6.164664230556197e-7",
            "extra": "mean: 9.278690095901343 usec\nrounds: 60238"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 104658.77807076614,
            "unit": "iter/sec",
            "range": "stddev: 5.019020115482316e-7",
            "extra": "mean: 9.554860265269287 usec\nrounds: 55863"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 105408.475674191,
            "unit": "iter/sec",
            "range": "stddev: 5.667678304275516e-7",
            "extra": "mean: 9.486903150852104 usec\nrounds: 60238"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 103281.01413330444,
            "unit": "iter/sec",
            "range": "stddev: 6.179698044186258e-7",
            "extra": "mean: 9.682321657970007 usec\nrounds: 56815"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 104933.66133895093,
            "unit": "iter/sec",
            "range": "stddev: 5.99100407521389e-7",
            "extra": "mean: 9.529830439918179 usec\nrounds: 62497"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 103346.15123417768,
            "unit": "iter/sec",
            "range": "stddev: 5.763929937903931e-7",
            "extra": "mean: 9.676219075967767 usec\nrounds: 57140"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 103981.85042655299,
            "unit": "iter/sec",
            "range": "stddev: 5.266029046644699e-7",
            "extra": "mean: 9.617062938366773 usec\nrounds: 59169"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 106742.4706449357,
            "unit": "iter/sec",
            "range": "stddev: 5.622573375916822e-7",
            "extra": "mean: 9.368342272368455 usec\nrounds: 62497"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 102900.37709917162,
            "unit": "iter/sec",
            "range": "stddev: 5.037543338263301e-7",
            "extra": "mean: 9.718137369275494 usec\nrounds: 59169"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 105739.93415139869,
            "unit": "iter/sec",
            "range": "stddev: 5.078745858937092e-7",
            "extra": "mean: 9.457164958777048 usec\nrounds: 60603"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 103070.4055126244,
            "unit": "iter/sec",
            "range": "stddev: 5.49003463140298e-7",
            "extra": "mean: 9.70210600245981 usec\nrounds: 61725"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 105301.8890503249,
            "unit": "iter/sec",
            "range": "stddev: 5.39060639047149e-7",
            "extra": "mean: 9.496505798885424 usec\nrounds: 63288"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 106655.17687145536,
            "unit": "iter/sec",
            "range": "stddev: 6.793826669719081e-7",
            "extra": "mean: 9.376009954071295 usec\nrounds: 59172"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 102975.96291641427,
            "unit": "iter/sec",
            "range": "stddev: 5.153965616648975e-7",
            "extra": "mean: 9.711004118618453 usec\nrounds: 56815"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 106559.37584875459,
            "unit": "iter/sec",
            "range": "stddev: 5.624746461692986e-7",
            "extra": "mean: 9.384439351628274 usec\nrounds: 59169"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 103383.98053968826,
            "unit": "iter/sec",
            "range": "stddev: 5.616833059296472e-7",
            "extra": "mean: 9.672678443795345 usec\nrounds: 56494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 104793.22973326413,
            "unit": "iter/sec",
            "range": "stddev: 5.03883795949712e-7",
            "extra": "mean: 9.542601201865368 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 103111.10585676703,
            "unit": "iter/sec",
            "range": "stddev: 5.780181743899932e-7",
            "extra": "mean: 9.69827635627449 usec\nrounds: 59521"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 103993.77277704034,
            "unit": "iter/sec",
            "range": "stddev: 5.402968978101506e-7",
            "extra": "mean: 9.615960391628173 usec\nrounds: 60972"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 104168.58157172156,
            "unit": "iter/sec",
            "range": "stddev: 4.86516782544493e-7",
            "extra": "mean: 9.599823525594285 usec\nrounds: 61346"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 103577.32149693613,
            "unit": "iter/sec",
            "range": "stddev: 5.819321534524337e-7",
            "extra": "mean: 9.654623092658179 usec\nrounds: 56494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 106083.02560374077,
            "unit": "iter/sec",
            "range": "stddev: 6.674068915762812e-7",
            "extra": "mean: 9.426578798151638 usec\nrounds: 62108"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 99035.10461140609,
            "unit": "iter/sec",
            "range": "stddev: 5.102096043534331e-7",
            "extra": "mean: 10.097429632894313 usec\nrounds: 54642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 105284.76194405637,
            "unit": "iter/sec",
            "range": "stddev: 5.263819282901907e-7",
            "extra": "mean: 9.498050634633675 usec\nrounds: 59169"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 102289.00100821894,
            "unit": "iter/sec",
            "range": "stddev: 5.676734540406478e-7",
            "extra": "mean: 9.776222175829538 usec\nrounds: 47845"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 103698.16555585361,
            "unit": "iter/sec",
            "range": "stddev: 5.527863199170003e-7",
            "extra": "mean: 9.64337213334196 usec\nrounds: 51280"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 105294.40667729874,
            "unit": "iter/sec",
            "range": "stddev: 5.718618913281719e-7",
            "extra": "mean: 9.49718063434036 usec\nrounds: 52908"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 104696.40276361963,
            "unit": "iter/sec",
            "range": "stddev: 5.492312294997919e-7",
            "extra": "mean: 9.551426540009878 usec\nrounds: 54642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 104613.53225383905,
            "unit": "iter/sec",
            "range": "stddev: 5.560426597955617e-7",
            "extra": "mean: 9.558992784734142 usec\nrounds: 54052"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 102468.38531249568,
            "unit": "iter/sec",
            "range": "stddev: 5.681296765817568e-7",
            "extra": "mean: 9.759107620856142 usec\nrounds: 52081"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 98273.54014988491,
            "unit": "iter/sec",
            "range": "stddev: 5.212972028960187e-7",
            "extra": "mean: 10.175679012629638 usec\nrounds: 53189"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 105397.53581592713,
            "unit": "iter/sec",
            "range": "stddev: 5.168055363148297e-7",
            "extra": "mean: 9.487887854858986 usec\nrounds: 55553"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 105075.78540533563,
            "unit": "iter/sec",
            "range": "stddev: 6.265843307134879e-7",
            "extra": "mean: 9.516940521952275 usec\nrounds: 54642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 105483.65825826932,
            "unit": "iter/sec",
            "range": "stddev: 4.811696749840343e-7",
            "extra": "mean: 9.48014144097629 usec\nrounds: 52354"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 102854.18175300791,
            "unit": "iter/sec",
            "range": "stddev: 5.054550249467198e-7",
            "extra": "mean: 9.722502118595248 usec\nrounds: 52629"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 103528.36361029318,
            "unit": "iter/sec",
            "range": "stddev: 5.538511459832016e-7",
            "extra": "mean: 9.659188700830352 usec\nrounds: 68961"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 105880.10557681236,
            "unit": "iter/sec",
            "range": "stddev: 5.365654135657151e-7",
            "extra": "mean: 9.444644908051536 usec\nrounds: 56177"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 104527.05127379141,
            "unit": "iter/sec",
            "range": "stddev: 4.95566675129553e-7",
            "extra": "mean: 9.566901465350483 usec\nrounds: 54052"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 106142.72535033624,
            "unit": "iter/sec",
            "range": "stddev: 4.972184562392546e-7",
            "extra": "mean: 9.421276839268874 usec\nrounds: 56177"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 103959.96018288912,
            "unit": "iter/sec",
            "range": "stddev: 5.380432726678217e-7",
            "extra": "mean: 9.619087947328698 usec\nrounds: 55863"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 104957.77871536586,
            "unit": "iter/sec",
            "range": "stddev: 5.668101984079691e-7",
            "extra": "mean: 9.527640659315894 usec\nrounds: 52908"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 103925.49346854843,
            "unit": "iter/sec",
            "range": "stddev: 5.401326911556195e-7",
            "extra": "mean: 9.622278101596274 usec\nrounds: 55246"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 104863.78537228386,
            "unit": "iter/sec",
            "range": "stddev: 0.000004093349552646835",
            "extra": "mean: 9.536180640912722 usec\nrounds: 54052"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 104379.65999932146,
            "unit": "iter/sec",
            "range": "stddev: 0.000011725155680594769",
            "extra": "mean: 9.580410589635 usec\nrounds: 55866"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 103864.1965971732,
            "unit": "iter/sec",
            "range": "stddev: 4.769342526544235e-7",
            "extra": "mean: 9.6279568201774 usec\nrounds: 53474"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 104254.70812187546,
            "unit": "iter/sec",
            "range": "stddev: 5.030369877391023e-7",
            "extra": "mean: 9.591892951548852 usec\nrounds: 55246"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 101533.84053212167,
            "unit": "iter/sec",
            "range": "stddev: 6.696454943769433e-7",
            "extra": "mean: 9.848933072551665 usec\nrounds: 52908"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 103275.58417670897,
            "unit": "iter/sec",
            "range": "stddev: 5.206337119860568e-7",
            "extra": "mean: 9.682830728790233 usec\nrounds: 55863"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 103839.20149800334,
            "unit": "iter/sec",
            "range": "stddev: 4.754393651530705e-7",
            "extra": "mean: 9.630274362416282 usec\nrounds: 53761"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 104002.39251632354,
            "unit": "iter/sec",
            "range": "stddev: 5.324804062848648e-7",
            "extra": "mean: 9.615163418890065 usec\nrounds: 54345"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 105097.75037991219,
            "unit": "iter/sec",
            "range": "stddev: 5.425803088934629e-7",
            "extra": "mean: 9.5149515226078 usec\nrounds: 57140"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 105059.31611906383,
            "unit": "iter/sec",
            "range": "stddev: 5.697049931818351e-7",
            "extra": "mean: 9.518432414567584 usec\nrounds: 54642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 104977.10151663386,
            "unit": "iter/sec",
            "range": "stddev: 5.961261421127336e-7",
            "extra": "mean: 9.525886936795905 usec\nrounds: 55553"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 104322.27192584191,
            "unit": "iter/sec",
            "range": "stddev: 5.824555105717141e-7",
            "extra": "mean: 9.585680809471402 usec\nrounds: 55246"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 102746.31457685343,
            "unit": "iter/sec",
            "range": "stddev: 5.606739870482784e-7",
            "extra": "mean: 9.732709188824558 usec\nrounds: 54348"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 103394.58762444499,
            "unit": "iter/sec",
            "range": "stddev: 4.737143169409247e-7",
            "extra": "mean: 9.671686139242127 usec\nrounds: 56815"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 101892.34084840033,
            "unit": "iter/sec",
            "range": "stddev: 5.277430582834624e-7",
            "extra": "mean: 9.814280363701151 usec\nrounds: 52357"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 102699.7316977683,
            "unit": "iter/sec",
            "range": "stddev: 4.955984161673777e-7",
            "extra": "mean: 9.737123782785211 usec\nrounds: 54943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 103171.50147393974,
            "unit": "iter/sec",
            "range": "stddev: 5.669551684199228e-7",
            "extra": "mean: 9.692599077397276 usec\nrounds: 53761"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 103836.61062516859,
            "unit": "iter/sec",
            "range": "stddev: 5.677597721887396e-7",
            "extra": "mean: 9.63051465161762 usec\nrounds: 57468"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 317453.18581139384,
            "unit": "iter/sec",
            "range": "stddev: 3.1151207017684873e-7",
            "extra": "mean: 3.1500707653761677 usec\nrounds: 64099"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 47525.4720337384,
            "unit": "iter/sec",
            "range": "stddev: 9.623956482208333e-7",
            "extra": "mean: 21.04134808571914 usec\nrounds: 12563"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 308825.09038462996,
            "unit": "iter/sec",
            "range": "stddev: 3.9107814696607763e-7",
            "extra": "mean: 3.2380788709704182 usec\nrounds: 84746"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 46900.47096894045,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010546997519432304",
            "extra": "mean: 21.32174750787138 usec\nrounds: 13141"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 312341.63911781827,
            "unit": "iter/sec",
            "range": "stddev: 2.819461934111092e-7",
            "extra": "mean: 3.201622437611626 usec\nrounds: 82638"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 46926.522760676584,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012275702892951277",
            "extra": "mean: 21.30991049773623 usec\nrounds: 13441"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 47654.09246299205,
            "unit": "iter/sec",
            "range": "stddev: 0.000001323905440520216",
            "extra": "mean: 20.984556589270806 usec\nrounds: 12361"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 317158.1347658103,
            "unit": "iter/sec",
            "range": "stddev: 3.0497386384043487e-7",
            "extra": "mean: 3.153001264616468 usec\nrounds: 86200"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 47218.10739707951,
            "unit": "iter/sec",
            "range": "stddev: 9.263335655026232e-7",
            "extra": "mean: 21.178316013188006 usec\nrounds: 12240"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 308058.9651615014,
            "unit": "iter/sec",
            "range": "stddev: 2.6717596524256e-7",
            "extra": "mean: 3.246131789982951 usec\nrounds: 89286"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 47816.613402136725,
            "unit": "iter/sec",
            "range": "stddev: 9.517555991585361e-7",
            "extra": "mean: 20.913233473688756 usec\nrounds: 13055"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 311785.22962279007,
            "unit": "iter/sec",
            "range": "stddev: 2.895229699566142e-7",
            "extra": "mean: 3.2073360281044714 usec\nrounds: 86957"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 311260.8572612692,
            "unit": "iter/sec",
            "range": "stddev: 3.0877160531449717e-7",
            "extra": "mean: 3.2127393363843697 usec\nrounds: 94340"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 46957.00494333576,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010437199848566137",
            "extra": "mean: 21.296077149867752 usec\nrounds: 12547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 311413.27711229655,
            "unit": "iter/sec",
            "range": "stddev: 2.7343347465991017e-7",
            "extra": "mean: 3.211166875326889 usec\nrounds: 85471"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 46370.58766954986,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010403466235702533",
            "extra": "mean: 21.5653941486851 usec\nrounds: 12886"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 308758.9334238451,
            "unit": "iter/sec",
            "range": "stddev: 3.2316753939289144e-7",
            "extra": "mean: 3.238772685573642 usec\nrounds: 89286"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 47106.72872848223,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010259573542174108",
            "extra": "mean: 21.22838980740703 usec\nrounds: 13245"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 47791.66316459011,
            "unit": "iter/sec",
            "range": "stddev: 9.938607790123165e-7",
            "extra": "mean: 20.92415148968747 usec\nrounds: 13123"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 308487.1873968391,
            "unit": "iter/sec",
            "range": "stddev: 2.9483833170945785e-7",
            "extra": "mean: 3.241625716900833 usec\nrounds: 92585"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 47327.10666218225,
            "unit": "iter/sec",
            "range": "stddev: 9.401751446234028e-7",
            "extra": "mean: 21.12954014150778 usec\nrounds: 13004"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 313521.5472043051,
            "unit": "iter/sec",
            "range": "stddev: 3.44659820773381e-7",
            "extra": "mean: 3.1895734405404483 usec\nrounds: 92585"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 47737.024379727394,
            "unit": "iter/sec",
            "range": "stddev: 9.921267753825692e-7",
            "extra": "mean: 20.948100829356942 usec\nrounds: 12903"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 311572.06466243905,
            "unit": "iter/sec",
            "range": "stddev: 3.744401629137231e-7",
            "extra": "mean: 3.209530357233445 usec\nrounds: 90901"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 311758.3960636205,
            "unit": "iter/sec",
            "range": "stddev: 3.1536811077083256e-7",
            "extra": "mean: 3.207612088804595 usec\nrounds: 90910"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 47249.899506967726,
            "unit": "iter/sec",
            "range": "stddev: 9.983508899109186e-7",
            "extra": "mean: 21.164066176533023 usec\nrounds: 12920"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 311737.49260257994,
            "unit": "iter/sec",
            "range": "stddev: 3.376630475638817e-7",
            "extra": "mean: 3.20782717424001 usec\nrounds: 88488"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 47183.86176490754,
            "unit": "iter/sec",
            "range": "stddev: 0.000001043365648167539",
            "extra": "mean: 21.19368704881504 usec\nrounds: 12331"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 311092.70849236666,
            "unit": "iter/sec",
            "range": "stddev: 3.383566272870476e-7",
            "extra": "mean: 3.21447585462948 usec\nrounds: 92585"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 47227.03313105421,
            "unit": "iter/sec",
            "range": "stddev: 9.429722292724621e-7",
            "extra": "mean: 21.174313390066597 usec\nrounds: 12920"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 47889.72043187276,
            "unit": "iter/sec",
            "range": "stddev: 9.912601862948466e-7",
            "extra": "mean: 20.88130795047313 usec\nrounds: 13106"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 311021.59754454286,
            "unit": "iter/sec",
            "range": "stddev: 2.727398623796342e-7",
            "extra": "mean: 3.215210801741141 usec\nrounds: 86949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 47872.587171439394,
            "unit": "iter/sec",
            "range": "stddev: 9.124510324770835e-7",
            "extra": "mean: 20.888781222933282 usec\nrounds: 11642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 311818.493746707,
            "unit": "iter/sec",
            "range": "stddev: 2.7114164301209823e-7",
            "extra": "mean: 3.2069938764193675 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 47245.3568680702,
            "unit": "iter/sec",
            "range": "stddev: 9.521382813053112e-7",
            "extra": "mean: 21.166101100525907 usec\nrounds: 13175"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 314547.0485664261,
            "unit": "iter/sec",
            "range": "stddev: 2.638290425207362e-7",
            "extra": "mean: 3.1791746403521564 usec\nrounds: 95230"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 173527.34757092365,
            "unit": "iter/sec",
            "range": "stddev: 5.14234540282104e-7",
            "extra": "mean: 5.762780414719833 usec\nrounds: 69440"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 10527.634719076408,
            "unit": "iter/sec",
            "range": "stddev: 0.00027142148131404297",
            "extra": "mean: 94.98809815161692 usec\nrounds: 3841"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 146134.7825082502,
            "unit": "iter/sec",
            "range": "stddev: 4.636803329920213e-7",
            "extra": "mean: 6.842997832795514 usec\nrounds: 29069"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 146003.03860900053,
            "unit": "iter/sec",
            "range": "stddev: 4.21002027814703e-7",
            "extra": "mean: 6.84917252084063 usec\nrounds: 50249"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 172167.84346436246,
            "unit": "iter/sec",
            "range": "stddev: 5.942921721461841e-7",
            "extra": "mean: 5.808285565283234 usec\nrounds: 4794"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 171140.7549547712,
            "unit": "iter/sec",
            "range": "stddev: 3.8832691157746085e-7",
            "extra": "mean: 5.843143559021219 usec\nrounds: 16892"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 18628.965281388322,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021937675206618055",
            "extra": "mean: 53.679846673989566 usec\nrounds: 13605"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 2528.2317976468235,
            "unit": "iter/sec",
            "range": "stddev: 0.000024364568242378257",
            "extra": "mean: 395.53335296659105 usec\nrounds: 2326"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 346042.9820626621,
            "unit": "iter/sec",
            "range": "stddev: 2.8242771240631856e-7",
            "extra": "mean: 2.889814421431954 usec\nrounds: 70423"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 346071.0122228285,
            "unit": "iter/sec",
            "range": "stddev: 3.0331820068238184e-7",
            "extra": "mean: 2.8895803597561045 usec\nrounds: 89286"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 268977.154241703,
            "unit": "iter/sec",
            "range": "stddev: 3.278960664020992e-7",
            "extra": "mean: 3.717787864992428 usec\nrounds: 76918"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 269045.9584851063,
            "unit": "iter/sec",
            "range": "stddev: 3.500480590474569e-7",
            "extra": "mean: 3.7168370996190134 usec\nrounds: 83327"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 62323.52077708031,
            "unit": "iter/sec",
            "range": "stddev: 0.000016443037023213666",
            "extra": "mean: 16.045306611877958 usec\nrounds: 25772"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 62956.93451334936,
            "unit": "iter/sec",
            "range": "stddev: 9.006276620326088e-7",
            "extra": "mean: 15.88387375798865 usec\nrounds: 25063"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 55751.250607033064,
            "unit": "iter/sec",
            "range": "stddev: 8.284591473079894e-7",
            "extra": "mean: 17.936817364843996 usec\nrounds: 25707"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 55322.27882663317,
            "unit": "iter/sec",
            "range": "stddev: 9.258688815809182e-7",
            "extra": "mean: 18.07590036436788 usec\nrounds: 25252"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 63899.84458873911,
            "unit": "iter/sec",
            "range": "stddev: 7.394235814875843e-7",
            "extra": "mean: 15.649490330313371 usec\nrounds: 29939"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 63068.54872664655,
            "unit": "iter/sec",
            "range": "stddev: 8.258352567176635e-7",
            "extra": "mean: 15.855763612608682 usec\nrounds: 22222"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 59630.44592276602,
            "unit": "iter/sec",
            "range": "stddev: 8.672744802534431e-7",
            "extra": "mean: 16.769956764958803 usec\nrounds: 25188"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 60188.57300132101,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010125500479787868",
            "extra": "mean: 16.61444939021984 usec\nrounds: 25252"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 112052.28075132376,
            "unit": "iter/sec",
            "range": "stddev: 8.026308878016948e-7",
            "extra": "mean: 8.924405583669357 usec\nrounds: 16835"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 27132.253146267547,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014656088445087827",
            "extra": "mean: 36.85650412478056 usec\nrounds: 7758"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 27310.31932767844,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014640958911010607",
            "extra": "mean: 36.61619580502381 usec\nrounds: 7962"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 113411.96439736038,
            "unit": "iter/sec",
            "range": "stddev: 5.10662003508625e-7",
            "extra": "mean: 8.817411860500977 usec\nrounds: 20876"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 90772.38072337073,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016986332779904194",
            "extra": "mean: 11.016566845894511 usec\nrounds: 25125"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 22158.262424127566,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029812509923924467",
            "extra": "mean: 45.129892446400746 usec\nrounds: 7215"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 22304.801832862162,
            "unit": "iter/sec",
            "range": "stddev: 0.000003852742182797596",
            "extra": "mean: 44.83339540487097 usec\nrounds: 8313"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 93555.25257891823,
            "unit": "iter/sec",
            "range": "stddev: 0.000002001228418358659",
            "extra": "mean: 10.688870720074785 usec\nrounds: 19802"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 114405.41656186956,
            "unit": "iter/sec",
            "range": "stddev: 6.027612428261698e-7",
            "extra": "mean: 8.740844883504339 usec\nrounds: 25252"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 27244.484070039995,
            "unit": "iter/sec",
            "range": "stddev: 0.000001491615478048523",
            "extra": "mean: 36.70467744697255 usec\nrounds: 8163"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 27219.138539699255,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014436474107428922",
            "extra": "mean: 36.73885558653867 usec\nrounds: 8628"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 112869.97539138504,
            "unit": "iter/sec",
            "range": "stddev: 5.740115595628946e-7",
            "extra": "mean: 8.859752086703532 usec\nrounds: 19531"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 97259.36330947744,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019353675210823138",
            "extra": "mean: 10.281786410815984 usec\nrounds: 28817"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 23597.1180666453,
            "unit": "iter/sec",
            "range": "stddev: 0.000004931471909544589",
            "extra": "mean: 42.37805638704276 usec\nrounds: 7413"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 22854.979172364106,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048559513073173894",
            "extra": "mean: 43.75414181996651 usec\nrounds: 6473"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 94975.34689221162,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020094259336953155",
            "extra": "mean: 10.529048144829723 usec\nrounds: 18382"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 94153.22473352015,
            "unit": "iter/sec",
            "range": "stddev: 5.369336445941579e-7",
            "extra": "mean: 10.620985131739019 usec\nrounds: 29324"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 91499.74301127905,
            "unit": "iter/sec",
            "range": "stddev: 6.087035382063975e-7",
            "extra": "mean: 10.928992444019558 usec\nrounds: 38909"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 93774.33467674715,
            "unit": "iter/sec",
            "range": "stddev: 6.216987007785916e-7",
            "extra": "mean: 10.663898639719873 usec\nrounds: 35211"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 93953.54245307561,
            "unit": "iter/sec",
            "range": "stddev: 8.004236077739001e-7",
            "extra": "mean: 10.643558229850061 usec\nrounds: 34364"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 78918.10919184881,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022685667561957754",
            "extra": "mean: 12.671362887940132 usec\nrounds: 37174"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 85641.10506225064,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010491903858250999",
            "extra": "mean: 11.676635877983147 usec\nrounds: 36496"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 83839.30320783984,
            "unit": "iter/sec",
            "range": "stddev: 0.000001216430518356241",
            "extra": "mean: 11.927580045852405 usec\nrounds: 37035"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 81550.81074838035,
            "unit": "iter/sec",
            "range": "stddev: 0.000002098140378803419",
            "extra": "mean: 12.262293787433139 usec\nrounds: 32258"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 94815.27978031088,
            "unit": "iter/sec",
            "range": "stddev: 6.094255105855881e-7",
            "extra": "mean: 10.54682327908563 usec\nrounds: 36900"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 94067.11484133339,
            "unit": "iter/sec",
            "range": "stddev: 6.37438158579461e-7",
            "extra": "mean: 10.630707678094927 usec\nrounds: 31544"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 93525.58181068164,
            "unit": "iter/sec",
            "range": "stddev: 6.923559773146837e-7",
            "extra": "mean: 10.69226173887099 usec\nrounds: 29411"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 93124.85153675594,
            "unit": "iter/sec",
            "range": "stddev: 5.364652204913266e-7",
            "extra": "mean: 10.738272152899 usec\nrounds: 28653"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 84438.32954393669,
            "unit": "iter/sec",
            "range": "stddev: 6.072962911735834e-7",
            "extra": "mean: 11.842962851126268 usec\nrounds: 29153"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 83292.75363667634,
            "unit": "iter/sec",
            "range": "stddev: 6.951672820431074e-7",
            "extra": "mean: 12.005846323222881 usec\nrounds: 32679"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 84175.5292569731,
            "unit": "iter/sec",
            "range": "stddev: 7.384649500216612e-7",
            "extra": "mean: 11.879937183966803 usec\nrounds: 29849"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 83979.32099757425,
            "unit": "iter/sec",
            "range": "stddev: 5.742197760405104e-7",
            "extra": "mean: 11.907693324037297 usec\nrounds: 29673"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 129862.96311310481,
            "unit": "iter/sec",
            "range": "stddev: 5.090898184569274e-7",
            "extra": "mean: 7.700424940473943 usec\nrounds: 13889"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 32209.835658154127,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013229879605597266",
            "extra": "mean: 31.046417330814403 usec\nrounds: 7905"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 32521.190577661084,
            "unit": "iter/sec",
            "range": "stddev: 0.000001403424738183111",
            "extra": "mean: 30.749181756184022 usec\nrounds: 8803"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 127694.3171292163,
            "unit": "iter/sec",
            "range": "stddev: 8.27565881007467e-7",
            "extra": "mean: 7.831202065069826 usec\nrounds: 32153"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 117255.78173368788,
            "unit": "iter/sec",
            "range": "stddev: 6.141311103944577e-7",
            "extra": "mean: 8.528364104647792 usec\nrounds: 19011"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 26068.8962000107,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035500125968129207",
            "extra": "mean: 38.359890358518115 usec\nrounds: 7862"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 27283.31717989547,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039396941782753115",
            "extra": "mean: 36.65243465105042 usec\nrounds: 8929"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 118732.76926319709,
            "unit": "iter/sec",
            "range": "stddev: 5.785607374220217e-7",
            "extra": "mean: 8.422274711569154 usec\nrounds: 31746"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 315308.625711507,
            "unit": "iter/sec",
            "range": "stddev: 3.4327573994502094e-7",
            "extra": "mean: 3.171495856618126 usec\nrounds: 41151"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 27977.23850444903,
            "unit": "iter/sec",
            "range": "stddev: 0.000001466153019615052",
            "extra": "mean: 35.743341854163944 usec\nrounds: 6494"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 27838.903353127327,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014967370929362919",
            "extra": "mean: 35.92095519407963 usec\nrounds: 7008"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 318760.48300746735,
            "unit": "iter/sec",
            "range": "stddev: 3.436440740193767e-7",
            "extra": "mean: 3.137151727733371 usec\nrounds: 59877"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 279419.0612812268,
            "unit": "iter/sec",
            "range": "stddev: 3.536279216786051e-7",
            "extra": "mean: 3.578853910018438 usec\nrounds: 59169"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 23998.43140954375,
            "unit": "iter/sec",
            "range": "stddev: 0.000004126680960883574",
            "extra": "mean: 41.669390091984 usec\nrounds: 6278"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 24214.265664569542,
            "unit": "iter/sec",
            "range": "stddev: 0.000004596424861688636",
            "extra": "mean: 41.29796929845392 usec\nrounds: 6775"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 274535.16010589025,
            "unit": "iter/sec",
            "range": "stddev: 3.5269994896041593e-7",
            "extra": "mean: 3.6425206870198066 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 40622.46139042284,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011185902148560132",
            "extra": "mean: 24.61692289861491 usec\nrounds: 16835"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 18802.270982406444,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018840374424752977",
            "extra": "mean: 53.18506476880981 usec\nrounds: 7905"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 18947.542418940317,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018341728996089866",
            "extra": "mean: 52.777293112186484 usec\nrounds: 5967"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 40560.765335778306,
            "unit": "iter/sec",
            "range": "stddev: 9.899140103527634e-7",
            "extra": "mean: 24.654367138331793 usec\nrounds: 18587"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 34488.45751027958,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036920635471297504",
            "extra": "mean: 28.995208025813895 usec\nrounds: 17094"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 16299.754436024748,
            "unit": "iter/sec",
            "range": "stddev: 0.000005975661971475482",
            "extra": "mean: 61.350617515430756 usec\nrounds: 7148"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 16366.280680345155,
            "unit": "iter/sec",
            "range": "stddev: 0.000005890581398566868",
            "extra": "mean: 61.10123732638506 usec\nrounds: 7496"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 34763.96019529166,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035269294291231514",
            "extra": "mean: 28.765422419722984 usec\nrounds: 18484"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 40758.49004864279,
            "unit": "iter/sec",
            "range": "stddev: 0.00000114099366218733",
            "extra": "mean: 24.534765610957635 usec\nrounds: 16447"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 18847.697213380958,
            "unit": "iter/sec",
            "range": "stddev: 0.000009263016941484923",
            "extra": "mean: 53.056879505155045 usec\nrounds: 7519"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 18773.968105100706,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020259780549859455",
            "extra": "mean: 53.265244427911306 usec\nrounds: 6640"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 40878.96077219724,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010794989682768394",
            "extra": "mean: 24.462461400929836 usec\nrounds: 20661"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 34822.6546675439,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035129139007099088",
            "extra": "mean: 28.716937566854707 usec\nrounds: 20534"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 15447.802223806959,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024366745669739737",
            "extra": "mean: 64.73412758087214 usec\nrounds: 6780"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 15223.274135792499,
            "unit": "iter/sec",
            "range": "stddev: 0.000002471568040252057",
            "extra": "mean: 65.6888913041926 usec\nrounds: 6716"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 32498.0640313148,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013450744673150504",
            "extra": "mean: 30.771063748179284 usec\nrounds: 16722"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 31052.987309118398,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012012682867676037",
            "extra": "mean: 32.20302092180226 usec\nrounds: 18832"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 31428.371506265463,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014722742135840525",
            "extra": "mean: 31.81838422015099 usec\nrounds: 22573"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 30751.882762032605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011922361049919127",
            "extra": "mean: 32.518334169595505 usec\nrounds: 22321"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 31490.114045798153,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012224850789425677",
            "extra": "mean: 31.755998042612163 usec\nrounds: 22988"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 28013.52993296701,
            "unit": "iter/sec",
            "range": "stddev: 0.00000391419338718063",
            "extra": "mean: 35.69703648176004 usec\nrounds: 16474"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 27718.241249400337,
            "unit": "iter/sec",
            "range": "stddev: 0.000004186791586933294",
            "extra": "mean: 36.077325072767174 usec\nrounds: 19531"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 27546.08797273824,
            "unit": "iter/sec",
            "range": "stddev: 0.000004152789214183327",
            "extra": "mean: 36.302795554478664 usec\nrounds: 20876"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 28634.33370791354,
            "unit": "iter/sec",
            "range": "stddev: 0.000003788654667217712",
            "extra": "mean: 34.92311049387661 usec\nrounds: 19802"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 35858.732055770604,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011402584209570954",
            "extra": "mean: 27.887210246160222 usec\nrounds: 21413"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 35982.674296938545,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012166171395923726",
            "extra": "mean: 27.79115281281584 usec\nrounds: 19802"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 35316.684746039246,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013360218115866682",
            "extra": "mean: 28.315228543985846 usec\nrounds: 23094"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 35817.34032286313,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010569738111186528",
            "extra": "mean: 27.91943765187038 usec\nrounds: 23866"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 34146.68640564213,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011605661654541684",
            "extra": "mean: 29.285418447945446 usec\nrounds: 19417"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 33947.39536160772,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012286798891487733",
            "extra": "mean: 29.457340963805855 usec\nrounds: 22935"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 33734.94211766123,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011120581041330765",
            "extra": "mean: 29.64285507033583 usec\nrounds: 21645"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 33940.09336942442,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011872172641441567",
            "extra": "mean: 29.46367852072172 usec\nrounds: 23255"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 52253.215649183556,
            "unit": "iter/sec",
            "range": "stddev: 9.136545978716073e-7",
            "extra": "mean: 19.137578186838816 usec\nrounds: 14881"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 21384.707055010746,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017093099285085024",
            "extra": "mean: 46.76238946961332 usec\nrounds: 7559"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 21074.34505996408,
            "unit": "iter/sec",
            "range": "stddev: 0.000001663865790833023",
            "extra": "mean: 47.45105943528214 usec\nrounds: 8749"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 51553.79026536095,
            "unit": "iter/sec",
            "range": "stddev: 0.000004186858377655834",
            "extra": "mean: 19.39721589533449 usec\nrounds: 22321"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 51257.07527392513,
            "unit": "iter/sec",
            "range": "stddev: 8.485755937559905e-7",
            "extra": "mean: 19.509501754750094 usec\nrounds: 23364"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 19463.516933203035,
            "unit": "iter/sec",
            "range": "stddev: 0.000005524989322787975",
            "extra": "mean: 51.378176073312254 usec\nrounds: 7849"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 19101.703068264076,
            "unit": "iter/sec",
            "range": "stddev: 0.000005181977068590993",
            "extra": "mean: 52.351352988070396 usec\nrounds: 7530"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 50578.395759376755,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010477459903637936",
            "extra": "mean: 19.77128742393158 usec\nrounds: 21978"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 52757.09772036595,
            "unit": "iter/sec",
            "range": "stddev: 8.363714423568359e-7",
            "extra": "mean: 18.95479552913252 usec\nrounds: 24155"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 21482.723027441014,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017341690253299045",
            "extra": "mean: 46.54903378508615 usec\nrounds: 7962"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 21248.804037913098,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018140025338763173",
            "extra": "mean: 47.06147217583417 usec\nrounds: 8482"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 52165.222060465414,
            "unit": "iter/sec",
            "range": "stddev: 9.474810771676665e-7",
            "extra": "mean: 19.169859927767327 usec\nrounds: 20161"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 50932.967813686104,
            "unit": "iter/sec",
            "range": "stddev: 9.472195659158328e-7",
            "extra": "mean: 19.6336487529653 usec\nrounds: 19724"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 18556.998815965202,
            "unit": "iter/sec",
            "range": "stddev: 0.000004896552952763792",
            "extra": "mean: 53.88802413134105 usec\nrounds: 7169"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 18733.668391223622,
            "unit": "iter/sec",
            "range": "stddev: 0.000005273305194446277",
            "extra": "mean: 53.37982818509169 usec\nrounds: 7770"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 50976.01246219327,
            "unit": "iter/sec",
            "range": "stddev: 9.54708877085942e-7",
            "extra": "mean: 19.617069906000538 usec\nrounds: 15106"
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
          "id": "6bd89dcc0f925aefa447e044f59e2a269b2a1295",
          "message": "Pint 0.19",
          "timestamp": "2022-11-26T23:23:26-03:00",
          "tree_id": "8d664364dc2d17f959ef86b01747c474a58817ea",
          "url": "https://github.com/hgrecco/pint-benchmark/commit/6bd89dcc0f925aefa447e044f59e2a269b2a1295"
        },
        "date": 1669526460139,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 4.417932408498565,
            "unit": "iter/sec",
            "range": "stddev: 0.009181019859875293",
            "extra": "mean: 226.35022620000882 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 7416.518130309101,
            "unit": "iter/sec",
            "range": "stddev: 0.0002833212087977112",
            "extra": "mean: 134.83416104833586 usec\nrounds: 2937"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 5.897815214413091,
            "unit": "iter/sec",
            "range": "stddev: 0.013822067460753812",
            "extra": "mean: 169.55431183333758 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 623.2314244450279,
            "unit": "iter/sec",
            "range": "stddev: 0.001999241959133881",
            "extra": "mean: 1.6045404014896636 msec\nrounds: 269"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[No cache]",
            "value": 6.235331671739481,
            "unit": "iter/sec",
            "range": "stddev: 0.0033492096598478236",
            "extra": "mean: 160.3763925714361 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_build_cache",
            "value": 1737.5818278256743,
            "unit": "iter/sec",
            "range": "stddev: 0.00009780671191680817",
            "extra": "mean: 575.512464498637 usec\nrounds: 1845"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 147308.53171496766,
            "unit": "iter/sec",
            "range": "stddev: 0.000009111541106932337",
            "extra": "mean: 6.788473066413657 usec\nrounds: 10990"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 149250.9789561038,
            "unit": "iter/sec",
            "range": "stddev: 0.000005350515099190984",
            "extra": "mean: 6.700123556939014 usec\nrounds: 4678"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 151485.97700971153,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054249848988648314",
            "extra": "mean: 6.601271086206822 usec\nrounds: 30304"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 155898.2802246735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037317062995496235",
            "extra": "mean: 6.414438944155416 usec\nrounds: 6707"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 155062.6820904869,
            "unit": "iter/sec",
            "range": "stddev: 0.000005487330851427085",
            "extra": "mean: 6.449004921870561 usec\nrounds: 5283"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 8142.119272659999,
            "unit": "iter/sec",
            "range": "stddev: 0.00003739224886067455",
            "extra": "mean: 122.81814678861906 usec\nrounds: 2943"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 7764.956396952857,
            "unit": "iter/sec",
            "range": "stddev: 0.00004041067751679711",
            "extra": "mean: 128.78372380718358 usec\nrounds: 3961"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 7958.9117881014745,
            "unit": "iter/sec",
            "range": "stddev: 0.00005433205619344935",
            "extra": "mean: 125.64531767960966 usec\nrounds: 6154"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 8094.508847758549,
            "unit": "iter/sec",
            "range": "stddev: 0.00006306759451007688",
            "extra": "mean: 123.54054073051142 usec\nrounds: 5831"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 8084.525578768795,
            "unit": "iter/sec",
            "range": "stddev: 0.00003630962983190598",
            "extra": "mean: 123.69309618193967 usec\nrounds: 4689"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 54329.32447181209,
            "unit": "iter/sec",
            "range": "stddev: 0.00001775684859961236",
            "extra": "mean: 18.406266039969523 usec\nrounds: 25000"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 50714.381459767326,
            "unit": "iter/sec",
            "range": "stddev: 0.00003541726919997223",
            "extra": "mean: 19.718272632257552 usec\nrounds: 36364"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 58431.063085230584,
            "unit": "iter/sec",
            "range": "stddev: 0.0000123653137210408",
            "extra": "mean: 17.114184599745315 usec\nrounds: 37454"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 54960.763392106484,
            "unit": "iter/sec",
            "range": "stddev: 0.000012921794487116795",
            "extra": "mean: 18.194798221154635 usec\nrounds: 45872"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 53250.021994766576,
            "unit": "iter/sec",
            "range": "stddev: 0.000015941050573913688",
            "extra": "mean: 18.77933496625185 usec\nrounds: 43479"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 307414.69330459466,
            "unit": "iter/sec",
            "range": "stddev: 0.000004706724022124594",
            "extra": "mean: 3.2529349500193647 usec\nrounds: 33113"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 304919.8954194774,
            "unit": "iter/sec",
            "range": "stddev: 0.000008558975546260745",
            "extra": "mean: 3.2795498589040997 usec\nrounds: 11683"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 313940.7175945908,
            "unit": "iter/sec",
            "range": "stddev: 0.000004564182855219625",
            "extra": "mean: 3.1853147551613743 usec\nrounds: 41321"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 312514.0294049763,
            "unit": "iter/sec",
            "range": "stddev: 0.000007280128232057723",
            "extra": "mean: 3.199856345342289 usec\nrounds: 40486"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 310757.7751459184,
            "unit": "iter/sec",
            "range": "stddev: 0.000005861277867229398",
            "extra": "mean: 3.217940402393611 usec\nrounds: 38760"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 7735.013802309591,
            "unit": "iter/sec",
            "range": "stddev: 0.00005945536773433942",
            "extra": "mean: 129.28225153281704 usec\nrounds: 3427"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 7767.506916090524,
            "unit": "iter/sec",
            "range": "stddev: 0.0000659852528928124",
            "extra": "mean: 128.7414367058345 usec\nrounds: 4092"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 7823.089994357254,
            "unit": "iter/sec",
            "range": "stddev: 0.00003263044333768992",
            "extra": "mean: 127.82672840543746 usec\nrounds: 5453"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 6968.7522492313365,
            "unit": "iter/sec",
            "range": "stddev: 0.00008440168747181956",
            "extra": "mean: 143.49771153226195 usec\nrounds: 2801"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 7734.4261810468415,
            "unit": "iter/sec",
            "range": "stddev: 0.00005208375306769307",
            "extra": "mean: 129.2920737223523 usec\nrounds: 5480"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 132847.83606130356,
            "unit": "iter/sec",
            "range": "stddev: 0.000004256156914015441",
            "extra": "mean: 7.527409024099897 usec\nrounds: 7491"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 121893.93357599976,
            "unit": "iter/sec",
            "range": "stddev: 0.000017636926178566073",
            "extra": "mean: 8.203853716612642 usec\nrounds: 5838"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 152383.6891071746,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043857606574347425",
            "extra": "mean: 6.562382141153435 usec\nrounds: 2923"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 154913.21263738914,
            "unit": "iter/sec",
            "range": "stddev: 0.000004675487175172374",
            "extra": "mean: 6.455227304211523 usec\nrounds: 4307"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[meter]",
            "value": 409637.0097248507,
            "unit": "iter/sec",
            "range": "stddev: 0.000002843678474703117",
            "extra": "mean: 2.4411856747799483 usec\nrounds: 42736"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[angstrom]",
            "value": 414243.2333125188,
            "unit": "iter/sec",
            "range": "stddev: 0.000002520408750826554",
            "extra": "mean: 2.4140406398517245 usec\nrounds: 49262"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[kilometer/second]",
            "value": 96654.30174065493,
            "unit": "iter/sec",
            "range": "stddev: 0.00000830966558390661",
            "extra": "mean: 10.34615099370562 usec\nrounds: 3371"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[angstrom/minute]",
            "value": 95954.2725686469,
            "unit": "iter/sec",
            "range": "stddev: 0.000015263037990235153",
            "extra": "mean: 10.421630775060978 usec\nrounds: 5498"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[meter]",
            "value": 982726.7173392923,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023875529442338647",
            "extra": "mean: 1.0175768933070983 usec\nrounds: 163935"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[angstrom]",
            "value": 983049.9182444985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026593937035047487",
            "extra": "mean: 1.017242340842437 usec\nrounds: 158731"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[kilometer/second]",
            "value": 987897.3754352313,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023952491044868773",
            "extra": "mean: 1.0122508925174913 usec\nrounds: 142858"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[angstrom/minute]",
            "value": 987118.1931718054,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033871620544497645",
            "extra": "mean: 1.0130499132903255 usec\nrounds: 156251"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_convert_from_uc[key0]",
            "value": 57726.207255090136,
            "unit": "iter/sec",
            "range": "stddev: 0.000010098329609316705",
            "extra": "mean: 17.32315437910262 usec\nrounds: 8518"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_convert_from_uc[key1]",
            "value": 51922.23309493719,
            "unit": "iter/sec",
            "range": "stddev: 0.000009652035424974532",
            "extra": "mean: 19.25957225629241 usec\nrounds: 11390"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_math_expression",
            "value": 6109.727166958019,
            "unit": "iter/sec",
            "range": "stddev: 0.00003144570463568838",
            "extra": "mean: 163.6734297086283 usec\nrounds: 3642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 78308.47659115077,
            "unit": "iter/sec",
            "range": "stddev: 0.000010720447753422957",
            "extra": "mean: 12.770009627706187 usec\nrounds: 43104"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 77743.18020835343,
            "unit": "iter/sec",
            "range": "stddev: 0.00001748559945071011",
            "extra": "mean: 12.862864592366533 usec\nrounds: 48077"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 31758.0721677357,
            "unit": "iter/sec",
            "range": "stddev: 0.00001763411054793967",
            "extra": "mean: 31.48805742106538 usec\nrounds: 22779"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 11237932.487839302,
            "unit": "iter/sec",
            "range": "stddev: 1.1403577197820213e-7",
            "extra": "mean: 88.98433951987313 nsec\nrounds: 113637"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 10721965.865818495,
            "unit": "iter/sec",
            "range": "stddev: 1.1243897411647464e-7",
            "extra": "mean: 93.26647860238322 nsec\nrounds: 114943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 9841937.10262979,
            "unit": "iter/sec",
            "range": "stddev: 1.0244513042509083e-7",
            "extra": "mean: 101.60601409788389 nsec\nrounds: 101011"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 11043755.66634654,
            "unit": "iter/sec",
            "range": "stddev: 1.1956587658248367e-7",
            "extra": "mean: 90.54890656867379 nsec\nrounds: 117648"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 10939795.229056066,
            "unit": "iter/sec",
            "range": "stddev: 1.4942546146761024e-7",
            "extra": "mean: 91.40938921270367 nsec\nrounds: 109891"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 11002641.842193773,
            "unit": "iter/sec",
            "range": "stddev: 1.548626731079565e-7",
            "extra": "mean: 90.88726274487219 nsec\nrounds: 126583"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 81161.14286585052,
            "unit": "iter/sec",
            "range": "stddev: 0.000031274726944224616",
            "extra": "mean: 12.321167059622093 usec\nrounds: 25446"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 20749.981515579053,
            "unit": "iter/sec",
            "range": "stddev: 0.00002225195298632218",
            "extra": "mean: 48.192814015241495 usec\nrounds: 8334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 86189.8683471,
            "unit": "iter/sec",
            "range": "stddev: 0.00000788054388300372",
            "extra": "mean: 11.60229176790066 usec\nrounds: 28012"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 20995.858611790758,
            "unit": "iter/sec",
            "range": "stddev: 0.00002294093289991819",
            "extra": "mean: 47.62844037435195 usec\nrounds: 8327"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 84821.16298803603,
            "unit": "iter/sec",
            "range": "stddev: 0.000023080821123558073",
            "extra": "mean: 11.789510598210606 usec\nrounds: 26042"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 21237.245122120356,
            "unit": "iter/sec",
            "range": "stddev: 0.000015142511697337105",
            "extra": "mean: 47.08708659007834 usec\nrounds: 5220"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 20761.868904428426,
            "unit": "iter/sec",
            "range": "stddev: 0.00003592205908513395",
            "extra": "mean: 48.165220799882036 usec\nrounds: 10000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 88211.29491308107,
            "unit": "iter/sec",
            "range": "stddev: 0.000005306216564327952",
            "extra": "mean: 11.336416736488783 usec\nrounds: 23924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 20629.973373079607,
            "unit": "iter/sec",
            "range": "stddev: 0.000018499670468046778",
            "extra": "mean: 48.47315999471509 usec\nrounds: 7294"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 80416.33675375262,
            "unit": "iter/sec",
            "range": "stddev: 0.000018474470989682073",
            "extra": "mean: 12.435284176922359 usec\nrounds: 22676"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 20663.282344397285,
            "unit": "iter/sec",
            "range": "stddev: 0.000029492712655702617",
            "extra": "mean: 48.39502182339116 usec\nrounds: 8569"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 83204.55872357523,
            "unit": "iter/sec",
            "range": "stddev: 0.000011169323191099387",
            "extra": "mean: 12.018572243405929 usec\nrounds: 20161"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 84364.13667978547,
            "unit": "iter/sec",
            "range": "stddev: 0.000012575433293550547",
            "extra": "mean: 11.853377979740657 usec\nrounds: 28819"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 21021.729613755593,
            "unit": "iter/sec",
            "range": "stddev: 0.000021933135161283646",
            "extra": "mean: 47.56982505120077 usec\nrounds: 8231"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 87646.17604868702,
            "unit": "iter/sec",
            "range": "stddev: 0.000008079763016513384",
            "extra": "mean: 11.409510888923492 usec\nrounds: 15291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 21564.22319359297,
            "unit": "iter/sec",
            "range": "stddev: 0.000031570660278910856",
            "extra": "mean: 46.37310563067785 usec\nrounds: 8170"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 86617.08279363837,
            "unit": "iter/sec",
            "range": "stddev: 0.000009408810182240417",
            "extra": "mean: 11.54506672064284 usec\nrounds: 27248"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 20465.298088557334,
            "unit": "iter/sec",
            "range": "stddev: 0.00004648971164945417",
            "extra": "mean: 48.86320226916828 usec\nrounds: 8197"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 20918.554364954183,
            "unit": "iter/sec",
            "range": "stddev: 0.000013932258727459943",
            "extra": "mean: 47.804450659140485 usec\nrounds: 8117"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 85133.19107250658,
            "unit": "iter/sec",
            "range": "stddev: 0.000016077440713575204",
            "extra": "mean: 11.74629997304243 usec\nrounds: 22422"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 20590.2216177653,
            "unit": "iter/sec",
            "range": "stddev: 0.00006042667650776861",
            "extra": "mean: 48.56674292117367 usec\nrounds: 8052"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 86519.40423609005,
            "unit": "iter/sec",
            "range": "stddev: 0.000010165634969445294",
            "extra": "mean: 11.558100854130334 usec\nrounds: 17332"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 20777.416597865256,
            "unit": "iter/sec",
            "range": "stddev: 0.000025707917004676467",
            "extra": "mean: 48.12917887504568 usec\nrounds: 8341"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 84125.19086645676,
            "unit": "iter/sec",
            "range": "stddev: 0.00000948008410048947",
            "extra": "mean: 11.887045838474643 usec\nrounds: 20834"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 83194.45909396856,
            "unit": "iter/sec",
            "range": "stddev: 0.000010160318783732207",
            "extra": "mean: 12.020031272401145 usec\nrounds: 21009"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 19643.83675408339,
            "unit": "iter/sec",
            "range": "stddev: 0.000039202783989152516",
            "extra": "mean: 50.90655214247434 usec\nrounds: 8985"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 83871.88057162221,
            "unit": "iter/sec",
            "range": "stddev: 0.000017518358861012806",
            "extra": "mean: 11.922947156837054 usec\nrounds: 28329"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 20644.846981624905,
            "unit": "iter/sec",
            "range": "stddev: 0.00003162713082608962",
            "extra": "mean: 48.43823743959242 usec\nrounds: 8937"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 80482.87970326406,
            "unit": "iter/sec",
            "range": "stddev: 0.00002517161388633719",
            "extra": "mean: 12.42500272961088 usec\nrounds: 19418"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 21527.87571880453,
            "unit": "iter/sec",
            "range": "stddev: 0.000018780761443534618",
            "extra": "mean: 46.45140157170747 usec\nrounds: 8651"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 21219.12874715698,
            "unit": "iter/sec",
            "range": "stddev: 0.000024190198961285988",
            "extra": "mean: 47.12728839698396 usec\nrounds: 9747"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 86514.86490485162,
            "unit": "iter/sec",
            "range": "stddev: 0.00002572333197840929",
            "extra": "mean: 11.558707293825082 usec\nrounds: 21882"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 21272.23084912417,
            "unit": "iter/sec",
            "range": "stddev: 0.000022364325043287687",
            "extra": "mean: 47.00964403275891 usec\nrounds: 8689"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 85020.3500648306,
            "unit": "iter/sec",
            "range": "stddev: 0.000012690520295699467",
            "extra": "mean: 11.761889938555528 usec\nrounds: 20325"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 20553.173577177087,
            "unit": "iter/sec",
            "range": "stddev: 0.000023979190493091765",
            "extra": "mean: 48.65428670881428 usec\nrounds: 8765"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 86248.38787544101,
            "unit": "iter/sec",
            "range": "stddev: 0.00001082874591024777",
            "extra": "mean: 11.59441961331717 usec\nrounds: 21322"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 89431.04108540974,
            "unit": "iter/sec",
            "range": "stddev: 0.000005737400157525168",
            "extra": "mean: 11.181799829937855 usec\nrounds: 10571"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 21216.749986638362,
            "unit": "iter/sec",
            "range": "stddev: 0.000027044096329769947",
            "extra": "mean: 47.13257217197584 usec\nrounds: 5383"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 88566.41173873222,
            "unit": "iter/sec",
            "range": "stddev: 0.000009318907456443339",
            "extra": "mean: 11.290962119476678 usec\nrounds: 30121"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 20356.4896217522,
            "unit": "iter/sec",
            "range": "stddev: 0.00004292362142983301",
            "extra": "mean: 49.12438335789667 usec\nrounds: 6730"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 82616.86293600012,
            "unit": "iter/sec",
            "range": "stddev: 0.000011176210042132136",
            "extra": "mean: 12.104066463703164 usec\nrounds: 28572"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 20258.956754535448,
            "unit": "iter/sec",
            "range": "stddev: 0.00004659472448886919",
            "extra": "mean: 49.36088329307117 usec\nrounds: 8320"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 20511.31360185895,
            "unit": "iter/sec",
            "range": "stddev: 0.000027337087763563557",
            "extra": "mean: 48.75358153118821 usec\nrounds: 9757"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 88857.5423262172,
            "unit": "iter/sec",
            "range": "stddev: 0.000012086059940289495",
            "extra": "mean: 11.253968698895159 usec\nrounds: 17124"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 20704.35704021771,
            "unit": "iter/sec",
            "range": "stddev: 0.00005784424970740029",
            "extra": "mean: 48.29901252463548 usec\nrounds: 8224"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 86400.21717303347,
            "unit": "iter/sec",
            "range": "stddev: 0.000029665321251507558",
            "extra": "mean: 11.5740449818234 usec\nrounds: 23365"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 21464.007427209664,
            "unit": "iter/sec",
            "range": "stddev: 0.00005527954396977896",
            "extra": "mean: 46.5896223429513 usec\nrounds: 9408"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 84541.84480895453,
            "unit": "iter/sec",
            "range": "stddev: 0.000028447515203774486",
            "extra": "mean: 11.828462014991205 usec\nrounds: 22272"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 85143.7180360387,
            "unit": "iter/sec",
            "range": "stddev: 0.00003731956423550174",
            "extra": "mean: 11.744847688900911 usec\nrounds: 19493"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 21337.909410499848,
            "unit": "iter/sec",
            "range": "stddev: 0.000026834165857381026",
            "extra": "mean: 46.86494729928534 usec\nrounds: 6869"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 88353.70673275269,
            "unit": "iter/sec",
            "range": "stddev: 0.000012801786641827754",
            "extra": "mean: 11.31814427463404 usec\nrounds: 34365"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 21514.606796188058,
            "unit": "iter/sec",
            "range": "stddev: 0.000021708429983578754",
            "extra": "mean: 46.48005001779438 usec\nrounds: 8497"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 88430.37309011229,
            "unit": "iter/sec",
            "range": "stddev: 0.000012018641945266517",
            "extra": "mean: 11.308331798860335 usec\nrounds: 29762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 21432.173450102204,
            "unit": "iter/sec",
            "range": "stddev: 0.000019114499728391623",
            "extra": "mean: 46.658823582599894 usec\nrounds: 4461"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 21222.510088160267,
            "unit": "iter/sec",
            "range": "stddev: 0.00003535157465370584",
            "extra": "mean: 47.11977969834424 usec\nrounds: 9083"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 85321.7183818634,
            "unit": "iter/sec",
            "range": "stddev: 0.000029483564814749233",
            "extra": "mean: 11.720345287989034 usec\nrounds: 24510"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 21511.600276572062,
            "unit": "iter/sec",
            "range": "stddev: 0.000029119953210277915",
            "extra": "mean: 46.48654619568605 usec\nrounds: 9200"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 88743.00457206821,
            "unit": "iter/sec",
            "range": "stddev: 0.00000860925788038994",
            "extra": "mean: 11.26849383590455 usec\nrounds: 21414"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 20468.78568369853,
            "unit": "iter/sec",
            "range": "stddev: 0.000025239631825950083",
            "extra": "mean: 48.85487666209756 usec\nrounds: 8497"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 87775.20421995677,
            "unit": "iter/sec",
            "range": "stddev: 0.000006439118378472334",
            "extra": "mean: 11.39273908715826 usec\nrounds: 9026"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 88143.78264212728,
            "unit": "iter/sec",
            "range": "stddev: 0.00000992793541188944",
            "extra": "mean: 11.34509967719563 usec\nrounds: 20747"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 21555.666968649854,
            "unit": "iter/sec",
            "range": "stddev: 0.000028278917064561977",
            "extra": "mean: 46.391512795887074 usec\nrounds: 9417"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 88571.2510443066,
            "unit": "iter/sec",
            "range": "stddev: 0.000012086133923489304",
            "extra": "mean: 11.29034521031845 usec\nrounds: 31546"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 21046.310367129514,
            "unit": "iter/sec",
            "range": "stddev: 0.000021834239077292554",
            "extra": "mean: 47.51426651779388 usec\nrounds: 7174"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 88540.51345356622,
            "unit": "iter/sec",
            "range": "stddev: 0.000009578683345538696",
            "extra": "mean: 11.294264749485956 usec\nrounds: 31747"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 20771.987372616346,
            "unit": "iter/sec",
            "range": "stddev: 0.00003841854213895416",
            "extra": "mean: 48.14175851648635 usec\nrounds: 8953"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 20678.122841304816,
            "unit": "iter/sec",
            "range": "stddev: 0.000037988715576320294",
            "extra": "mean: 48.36028916524701 usec\nrounds: 8362"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 86013.11733156191,
            "unit": "iter/sec",
            "range": "stddev: 0.000012209307099117992",
            "extra": "mean: 11.626133676160311 usec\nrounds: 22173"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 20801.23540406362,
            "unit": "iter/sec",
            "range": "stddev: 0.00005033302834081466",
            "extra": "mean: 48.074067745257345 usec\nrounds: 7912"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 82264.67600476863,
            "unit": "iter/sec",
            "range": "stddev: 0.000015581740250500883",
            "extra": "mean: 12.155885716270653 usec\nrounds: 15409"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 20418.61123315815,
            "unit": "iter/sec",
            "range": "stddev: 0.000019210574618454992",
            "extra": "mean: 48.97492726518452 usec\nrounds: 7053"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 85896.43560574722,
            "unit": "iter/sec",
            "range": "stddev: 0.00001214050270670173",
            "extra": "mean: 11.641926617186561 usec\nrounds: 22076"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 69671.92377604474,
            "unit": "iter/sec",
            "range": "stddev: 0.000012812085864778868",
            "extra": "mean: 14.35298389656106 usec\nrounds: 38315"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 71426.95880804265,
            "unit": "iter/sec",
            "range": "stddev: 0.000012690688582921294",
            "extra": "mean: 14.0003160807597 usec\nrounds: 40651"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 70715.9674184645,
            "unit": "iter/sec",
            "range": "stddev: 0.000017033216700567343",
            "extra": "mean: 14.14107784289312 usec\nrounds: 38462"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 71042.04607610656,
            "unit": "iter/sec",
            "range": "stddev: 0.00002102858393895783",
            "extra": "mean: 14.07617115825621 usec\nrounds: 45455"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 68462.72908714613,
            "unit": "iter/sec",
            "range": "stddev: 0.00004628425367817787",
            "extra": "mean: 14.6064875492635 usec\nrounds: 41323"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 70369.70219038415,
            "unit": "iter/sec",
            "range": "stddev: 0.00001852776064267823",
            "extra": "mean: 14.210661248707794 usec\nrounds: 46512"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 70033.36294338647,
            "unit": "iter/sec",
            "range": "stddev: 0.000011245807702717416",
            "extra": "mean: 14.278908765360582 usec\nrounds: 42736"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 72501.64162633664,
            "unit": "iter/sec",
            "range": "stddev: 0.00001551502871054505",
            "extra": "mean: 13.79279113642503 usec\nrounds: 42195"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 71232.01247508495,
            "unit": "iter/sec",
            "range": "stddev: 0.000011648262796252815",
            "extra": "mean: 14.038631863023289 usec\nrounds: 25189"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 73506.57528497597,
            "unit": "iter/sec",
            "range": "stddev: 0.000027668106308030535",
            "extra": "mean: 13.604225147520786 usec\nrounds: 45046"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 72569.70469598356,
            "unit": "iter/sec",
            "range": "stddev: 0.000006244681199318455",
            "extra": "mean: 13.779854888335327 usec\nrounds: 27248"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 70609.31973355116,
            "unit": "iter/sec",
            "range": "stddev: 0.000022170129633007338",
            "extra": "mean: 14.162436400372709 usec\nrounds: 41494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 71248.15309053403,
            "unit": "iter/sec",
            "range": "stddev: 0.00001985383013467184",
            "extra": "mean: 14.035451539765724 usec\nrounds: 40982"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 73492.56197635291,
            "unit": "iter/sec",
            "range": "stddev: 0.000013190735252289846",
            "extra": "mean: 13.606819154321517 usec\nrounds: 41494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 74148.98169747561,
            "unit": "iter/sec",
            "range": "stddev: 0.000016719117804917182",
            "extra": "mean: 13.486361877226493 usec\nrounds: 42017"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 71760.26295802828,
            "unit": "iter/sec",
            "range": "stddev: 0.00001267082313201363",
            "extra": "mean: 13.935288957690807 usec\nrounds: 41667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 71538.41837252106,
            "unit": "iter/sec",
            "range": "stddev: 0.000014284164902814979",
            "extra": "mean: 13.978503058212905 usec\nrounds: 42017"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 68524.1768241743,
            "unit": "iter/sec",
            "range": "stddev: 0.000025527333075780588",
            "extra": "mean: 14.593389462611027 usec\nrounds: 44053"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 73335.58696470674,
            "unit": "iter/sec",
            "range": "stddev: 0.00001098630377533415",
            "extra": "mean: 13.635944585556489 usec\nrounds: 40982"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 73996.0234322835,
            "unit": "iter/sec",
            "range": "stddev: 0.000010762814408993846",
            "extra": "mean: 13.514239733641052 usec\nrounds: 25253"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 71081.8538959404,
            "unit": "iter/sec",
            "range": "stddev: 0.00001701369347946188",
            "extra": "mean: 14.068288109985716 usec\nrounds: 44844"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 73824.66987917574,
            "unit": "iter/sec",
            "range": "stddev: 0.000014135549372199934",
            "extra": "mean: 13.545607472903544 usec\nrounds: 45872"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 72593.72283543024,
            "unit": "iter/sec",
            "range": "stddev: 0.000017813897254463403",
            "extra": "mean: 13.775295727248997 usec\nrounds: 44443"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 72054.30432858238,
            "unit": "iter/sec",
            "range": "stddev: 0.00002555715870733836",
            "extra": "mean: 13.878421411714632 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 74710.23368295163,
            "unit": "iter/sec",
            "range": "stddev: 0.000010140612368662522",
            "extra": "mean: 13.385047144193225 usec\nrounds: 46729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 74569.45176317148,
            "unit": "iter/sec",
            "range": "stddev: 0.000009357010165611075",
            "extra": "mean: 13.410317178889091 usec\nrounds: 26247"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 76437.47069069392,
            "unit": "iter/sec",
            "range": "stddev: 0.000008368012049078935",
            "extra": "mean: 13.082588826709404 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 74986.64382163028,
            "unit": "iter/sec",
            "range": "stddev: 0.000009970835027483507",
            "extra": "mean: 13.335708187963265 usec\nrounds: 42195"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 75278.77317009174,
            "unit": "iter/sec",
            "range": "stddev: 0.000013733635897456198",
            "extra": "mean: 13.283957188575705 usec\nrounds: 47394"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 71396.23863181977,
            "unit": "iter/sec",
            "range": "stddev: 0.00003180883010841411",
            "extra": "mean: 14.006340098066756 usec\nrounds: 44643"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 73730.22581144042,
            "unit": "iter/sec",
            "range": "stddev: 0.000011474585932503412",
            "extra": "mean: 13.562958596619868 usec\nrounds: 46083"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 74418.74184268163,
            "unit": "iter/sec",
            "range": "stddev: 0.000012119498727032747",
            "extra": "mean: 13.437475227866143 usec\nrounds: 47392"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 72349.50191078194,
            "unit": "iter/sec",
            "range": "stddev: 0.000013076658690623472",
            "extra": "mean: 13.82179522442537 usec\nrounds: 46949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 74731.71443280645,
            "unit": "iter/sec",
            "range": "stddev: 0.000011958861684284682",
            "extra": "mean: 13.381199770267957 usec\nrounds: 48781"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 70787.35923233612,
            "unit": "iter/sec",
            "range": "stddev: 0.000018933973132227418",
            "extra": "mean: 14.126816014111084 usec\nrounds: 46297"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 72709.18676646939,
            "unit": "iter/sec",
            "range": "stddev: 0.000014575476352843308",
            "extra": "mean: 13.753420227513267 usec\nrounds: 44445"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 72395.59595725437,
            "unit": "iter/sec",
            "range": "stddev: 0.000008393228253184031",
            "extra": "mean: 13.812994931217158 usec\nrounds: 36497"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 70648.2456666928,
            "unit": "iter/sec",
            "range": "stddev: 0.0000505946124467947",
            "extra": "mean: 14.15463314854046 usec\nrounds: 42017"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 76137.2657523088,
            "unit": "iter/sec",
            "range": "stddev: 0.000008254838232519062",
            "extra": "mean: 13.13417273550667 usec\nrounds: 39216"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 70526.41978752911,
            "unit": "iter/sec",
            "range": "stddev: 0.000014048661417280974",
            "extra": "mean: 14.179083569145327 usec\nrounds: 40649"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 72527.38292295176,
            "unit": "iter/sec",
            "range": "stddev: 0.00001091236414795962",
            "extra": "mean: 13.787895822221149 usec\nrounds: 24391"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 70960.41163751707,
            "unit": "iter/sec",
            "range": "stddev: 0.00004383313364076879",
            "extra": "mean: 14.092364699182435 usec\nrounds: 23529"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 71632.18350194837,
            "unit": "iter/sec",
            "range": "stddev: 0.000013639133873864932",
            "extra": "mean: 13.960205470670882 usec\nrounds: 42736"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 70938.50886205226,
            "unit": "iter/sec",
            "range": "stddev: 0.00001687825737056228",
            "extra": "mean: 14.096715818267482 usec\nrounds: 39063"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 71210.78858594639,
            "unit": "iter/sec",
            "range": "stddev: 0.00001236128465550823",
            "extra": "mean: 14.042815981360334 usec\nrounds: 39371"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 72732.09970785567,
            "unit": "iter/sec",
            "range": "stddev: 0.00002348609117225273",
            "extra": "mean: 13.749087459549745 usec\nrounds: 25063"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 71233.33219092435,
            "unit": "iter/sec",
            "range": "stddev: 0.000011073185099507369",
            "extra": "mean: 14.038371774041583 usec\nrounds: 43669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 71655.4713519015,
            "unit": "iter/sec",
            "range": "stddev: 0.000021682744058956294",
            "extra": "mean: 13.955668438617609 usec\nrounds: 33671"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 74066.40679729318,
            "unit": "iter/sec",
            "range": "stddev: 0.000012444060586789344",
            "extra": "mean: 13.501397505846683 usec\nrounds: 42017"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 75877.58012746107,
            "unit": "iter/sec",
            "range": "stddev: 0.000020394920556643112",
            "extra": "mean: 13.179123508158469 usec\nrounds: 42734"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 78093.23926807924,
            "unit": "iter/sec",
            "range": "stddev: 0.00001156086718566238",
            "extra": "mean: 12.805205794667964 usec\nrounds: 45249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 74589.16178166987,
            "unit": "iter/sec",
            "range": "stddev: 0.000017935360282847965",
            "extra": "mean: 13.406773532689677 usec\nrounds: 43291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 74173.52967429762,
            "unit": "iter/sec",
            "range": "stddev: 0.000007076010597841689",
            "extra": "mean: 13.481898520821195 usec\nrounds: 23867"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 75310.75429283838,
            "unit": "iter/sec",
            "range": "stddev: 0.000019292527053884552",
            "extra": "mean: 13.278316083671125 usec\nrounds: 43479"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 75662.42666107275,
            "unit": "iter/sec",
            "range": "stddev: 0.000017826953407462057",
            "extra": "mean: 13.216599627176455 usec\nrounds: 42373"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 73285.92832836139,
            "unit": "iter/sec",
            "range": "stddev: 0.0000208626545162803",
            "extra": "mean: 13.645184318597265 usec\nrounds: 41667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 75788.74264113126,
            "unit": "iter/sec",
            "range": "stddev: 0.000013520340229234515",
            "extra": "mean: 13.194571715421105 usec\nrounds: 44844"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 76241.88778073703,
            "unit": "iter/sec",
            "range": "stddev: 0.000013343546942851092",
            "extra": "mean: 13.116149522371296 usec\nrounds: 42736"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 76556.40768895805,
            "unit": "iter/sec",
            "range": "stddev: 0.000016664951016508353",
            "extra": "mean: 13.06226389387172 usec\nrounds: 42195"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 76403.82691678967,
            "unit": "iter/sec",
            "range": "stddev: 0.000009184005084994333",
            "extra": "mean: 13.08834963318115 usec\nrounds: 42373"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 73329.62513314174,
            "unit": "iter/sec",
            "range": "stddev: 0.000018933793346101805",
            "extra": "mean: 13.637053212590942 usec\nrounds: 41494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 71510.06235061954,
            "unit": "iter/sec",
            "range": "stddev: 0.00001452956097288057",
            "extra": "mean: 13.984045980786872 usec\nrounds: 36102"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 71159.33847909703,
            "unit": "iter/sec",
            "range": "stddev: 0.00002089983290303319",
            "extra": "mean: 14.052969313279224 usec\nrounds: 41842"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 72272.43368241953,
            "unit": "iter/sec",
            "range": "stddev: 0.000022070774841405963",
            "extra": "mean: 13.836534194963088 usec\nrounds: 38909"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 74565.43055545476,
            "unit": "iter/sec",
            "range": "stddev: 0.000011007984814810974",
            "extra": "mean: 13.411040378239269 usec\nrounds: 36901"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 73289.08229725673,
            "unit": "iter/sec",
            "range": "stddev: 0.000012106194771337724",
            "extra": "mean: 13.64459710307262 usec\nrounds: 38315"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 73651.10951280058,
            "unit": "iter/sec",
            "range": "stddev: 0.000018147903911078014",
            "extra": "mean: 13.577527977717697 usec\nrounds: 44053"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 74463.67015000487,
            "unit": "iter/sec",
            "range": "stddev: 0.00002078896235804255",
            "extra": "mean: 13.429367609540728 usec\nrounds: 38462"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 76001.31971285264,
            "unit": "iter/sec",
            "range": "stddev: 0.000010706785577266462",
            "extra": "mean: 13.15766625866747 usec\nrounds: 39216"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 75160.47593245753,
            "unit": "iter/sec",
            "range": "stddev: 0.000026087535172766874",
            "extra": "mean: 13.304865191362591 usec\nrounds: 43291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 74515.10754912777,
            "unit": "iter/sec",
            "range": "stddev: 0.000018953885505419962",
            "extra": "mean: 13.42009738549596 usec\nrounds: 48077"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 67805.56761431768,
            "unit": "iter/sec",
            "range": "stddev: 0.000050376885197449486",
            "extra": "mean: 14.748051453356496 usec\nrounds: 24391"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 293030.49510828895,
            "unit": "iter/sec",
            "range": "stddev: 0.000009057501529366468",
            "extra": "mean: 3.412614102264174 usec\nrounds: 62501"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 39539.15396374971,
            "unit": "iter/sec",
            "range": "stddev: 0.000018801083056039112",
            "extra": "mean: 25.29138587327438 usec\nrounds: 8197"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 285220.2802267483,
            "unit": "iter/sec",
            "range": "stddev: 0.000006404944195349223",
            "extra": "mean: 3.5060620486208283 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 42806.98942817844,
            "unit": "iter/sec",
            "range": "stddev: 0.00002209257423195807",
            "extra": "mean: 23.36067108101119 usec\nrounds: 12611"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 304594.0638658086,
            "unit": "iter/sec",
            "range": "stddev: 0.000004265825610230535",
            "extra": "mean: 3.283058071809824 usec\nrounds: 84034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 38552.14111864418,
            "unit": "iter/sec",
            "range": "stddev: 0.00003363992189611163",
            "extra": "mean: 25.938896543320407 usec\nrounds: 12643"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 39669.67676308976,
            "unit": "iter/sec",
            "range": "stddev: 0.000020192874103532637",
            "extra": "mean: 25.208171116998855 usec\nrounds: 14493"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 298491.01033745514,
            "unit": "iter/sec",
            "range": "stddev: 0.000005491182849643053",
            "extra": "mean: 3.3501846466647787 usec\nrounds: 90091"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 39070.80737065332,
            "unit": "iter/sec",
            "range": "stddev: 0.000016283910077009314",
            "extra": "mean: 25.594556839158518 usec\nrounds: 12034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 273456.82355707354,
            "unit": "iter/sec",
            "range": "stddev: 0.00003085439623885961",
            "extra": "mean: 3.656884428745252 usec\nrounds: 78125"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 38698.39025977287,
            "unit": "iter/sec",
            "range": "stddev: 0.000019261010360425426",
            "extra": "mean: 25.84086814173002 usec\nrounds: 11482"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 283115.0254270919,
            "unit": "iter/sec",
            "range": "stddev: 0.000007329489945828388",
            "extra": "mean: 3.532133268064648 usec\nrounds: 33669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 265386.14505888376,
            "unit": "iter/sec",
            "range": "stddev: 0.00001810172815174105",
            "extra": "mean: 3.768094222771579 usec\nrounds: 84746"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 39584.83639567793,
            "unit": "iter/sec",
            "range": "stddev: 0.00007760617875579192",
            "extra": "mean: 25.26219863597024 usec\nrounds: 12611"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 288987.55470763077,
            "unit": "iter/sec",
            "range": "stddev: 0.000029319950220946478",
            "extra": "mean: 3.4603566268163406 usec\nrounds: 67115"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 42218.06566618167,
            "unit": "iter/sec",
            "range": "stddev: 0.000025673732385755378",
            "extra": "mean: 23.68654234201543 usec\nrounds: 12092"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 289682.74630186916,
            "unit": "iter/sec",
            "range": "stddev: 0.00002822785946056912",
            "extra": "mean: 3.4520523323053967 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 38474.4146358678,
            "unit": "iter/sec",
            "range": "stddev: 0.000038697956476171214",
            "extra": "mean: 25.991298619206265 usec\nrounds: 12675"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 41396.658904343625,
            "unit": "iter/sec",
            "range": "stddev: 0.00002235954755504681",
            "extra": "mean: 24.156538872152144 usec\nrounds: 8052"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 282349.75720714027,
            "unit": "iter/sec",
            "range": "stddev: 0.00000969530861404352",
            "extra": "mean: 3.5417066049267754 usec\nrounds: 84739"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 37597.95519662544,
            "unit": "iter/sec",
            "range": "stddev: 0.00003308146219524511",
            "extra": "mean: 26.597191117716793 usec\nrounds: 11574"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 280984.0090438653,
            "unit": "iter/sec",
            "range": "stddev: 0.000026566932594433793",
            "extra": "mean: 3.558921389878407 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 40896.50614440786,
            "unit": "iter/sec",
            "range": "stddev: 0.0000524224779129242",
            "extra": "mean: 24.451966543766446 usec\nrounds: 12225"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 266601.6741976323,
            "unit": "iter/sec",
            "range": "stddev: 0.000009952608828045916",
            "extra": "mean: 3.750914179401207 usec\nrounds: 78734"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 279418.6259200418,
            "unit": "iter/sec",
            "range": "stddev: 0.00003013218974771196",
            "extra": "mean: 3.578859486218213 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 40862.60815818155,
            "unit": "iter/sec",
            "range": "stddev: 0.00001802485556073958",
            "extra": "mean: 24.47225091773245 usec\nrounds: 8170"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 295646.25548837427,
            "unit": "iter/sec",
            "range": "stddev: 0.000011929219825899803",
            "extra": "mean: 3.3824206511532267 usec\nrounds: 84034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 40578.867553130694,
            "unit": "iter/sec",
            "range": "stddev: 0.000022182795481410986",
            "extra": "mean: 24.643368834546227 usec\nrounds: 12469"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 294665.8428129327,
            "unit": "iter/sec",
            "range": "stddev: 0.0000050874113414343154",
            "extra": "mean: 3.393674646690711 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 38113.26697568391,
            "unit": "iter/sec",
            "range": "stddev: 0.00002320663989197999",
            "extra": "mean: 26.237582851084255 usec\nrounds: 11919"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 41081.3923331227,
            "unit": "iter/sec",
            "range": "stddev: 0.000018148419913609536",
            "extra": "mean: 24.34192083586539 usec\nrounds: 13832"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 286356.4294421126,
            "unit": "iter/sec",
            "range": "stddev: 0.000010943844684812923",
            "extra": "mean: 3.492151379133436 usec\nrounds: 84034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 42012.920241637476,
            "unit": "iter/sec",
            "range": "stddev: 0.000021663917476137028",
            "extra": "mean: 23.802201661976746 usec\nrounds: 12516"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 310698.6098877273,
            "unit": "iter/sec",
            "range": "stddev: 0.000006875786440058007",
            "extra": "mean: 3.2185531836185417 usec\nrounds: 83334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 41373.00118584917,
            "unit": "iter/sec",
            "range": "stddev: 0.00001631884664186115",
            "extra": "mean: 24.17035195266498 usec\nrounds: 12675"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 301299.4715618046,
            "unit": "iter/sec",
            "range": "stddev: 0.000010137126106086927",
            "extra": "mean: 3.3189570324051267 usec\nrounds: 86949"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 158991.53255390303,
            "unit": "iter/sec",
            "range": "stddev: 0.000008459363332526818",
            "extra": "mean: 6.289643127133007 usec\nrounds: 60607"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 7683.538036616981,
            "unit": "iter/sec",
            "range": "stddev: 0.00020474913180085005",
            "extra": "mean: 130.14837633839505 usec\nrounds: 3736"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 130523.88333092642,
            "unit": "iter/sec",
            "range": "stddev: 0.000013804138541714932",
            "extra": "mean: 7.661433099294397 usec\nrounds: 33445"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 134100.48971373154,
            "unit": "iter/sec",
            "range": "stddev: 0.000007553322811423714",
            "extra": "mean: 7.45709431885544 usec\nrounds: 29941"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 162674.06936347327,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043540651281917565",
            "extra": "mean: 6.147261231694123 usec\nrounds: 4563"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 155654.01969638478,
            "unit": "iter/sec",
            "range": "stddev: 0.00002691335229458259",
            "extra": "mean: 6.424504821337589 usec\nrounds: 20326"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 11675.373315748331,
            "unit": "iter/sec",
            "range": "stddev: 0.00002772025159757049",
            "extra": "mean: 85.6503661986679 usec\nrounds: 8834"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 2105.196389560465,
            "unit": "iter/sec",
            "range": "stddev: 0.00012301211194662795",
            "extra": "mean: 475.0150650832086 usec\nrounds: 2105"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 155410.9534944452,
            "unit": "iter/sec",
            "range": "stddev: 0.000007451873666370003",
            "extra": "mean: 6.434552890351727 usec\nrounds: 38022"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 157131.6680978784,
            "unit": "iter/sec",
            "range": "stddev: 0.00000905840558242683",
            "extra": "mean: 6.364089505987381 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 128104.46484817078,
            "unit": "iter/sec",
            "range": "stddev: 0.000013877026160220506",
            "extra": "mean: 7.806129171104212 usec\nrounds: 47170"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 126728.35868735574,
            "unit": "iter/sec",
            "range": "stddev: 0.000016282405222017045",
            "extra": "mean: 7.890893643363935 usec\nrounds: 46297"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 36307.454432339335,
            "unit": "iter/sec",
            "range": "stddev: 0.000033841936737629186",
            "extra": "mean: 27.542553330571483 usec\nrounds: 16529"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 37711.25440358933,
            "unit": "iter/sec",
            "range": "stddev: 0.000016378541409053387",
            "extra": "mean: 26.51728285932649 usec\nrounds: 20367"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 32041.107569896998,
            "unit": "iter/sec",
            "range": "stddev: 0.00002333152498552453",
            "extra": "mean: 31.209907392199884 usec\nrounds: 19048"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 32127.251079831934,
            "unit": "iter/sec",
            "range": "stddev: 0.000021690223957977083",
            "extra": "mean: 31.126223576213647 usec\nrounds: 18383"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 37104.023918121486,
            "unit": "iter/sec",
            "range": "stddev: 0.000045804754810718395",
            "extra": "mean: 26.951254726622874 usec\nrounds: 19570"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 37812.67395035134,
            "unit": "iter/sec",
            "range": "stddev: 0.00002800739672962339",
            "extra": "mean: 26.446159330414357 usec\nrounds: 20492"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 34681.48262037817,
            "unit": "iter/sec",
            "range": "stddev: 0.00004001565613663501",
            "extra": "mean: 28.833830748989357 usec\nrounds: 18316"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 33603.14024124222,
            "unit": "iter/sec",
            "range": "stddev: 0.000025155415941300776",
            "extra": "mean: 29.75912348729444 usec\nrounds: 19921"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 67996.61672297084,
            "unit": "iter/sec",
            "range": "stddev: 0.00001720612115989636",
            "extra": "mean: 14.706614066905138 usec\nrounds: 14246"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 17574.371213298902,
            "unit": "iter/sec",
            "range": "stddev: 0.00002469398762564986",
            "extra": "mean: 56.90104003512106 usec\nrounds: 5695"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 17723.135294538042,
            "unit": "iter/sec",
            "range": "stddev: 0.00002525645492885032",
            "extra": "mean: 56.423425278945 usec\nrounds: 6812"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 71175.37703600376,
            "unit": "iter/sec",
            "range": "stddev: 0.000035954755553222785",
            "extra": "mean: 14.04980263742269 usec\nrounds: 16077"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 56248.241347252035,
            "unit": "iter/sec",
            "range": "stddev: 0.000014404406325095796",
            "extra": "mean: 17.77833361627144 usec\nrounds: 18833"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 14631.578908985874,
            "unit": "iter/sec",
            "range": "stddev: 0.00003490196298599376",
            "extra": "mean: 68.34532392029527 usec\nrounds: 5949"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 14347.650315206394,
            "unit": "iter/sec",
            "range": "stddev: 0.00002944595802071258",
            "extra": "mean: 69.69782354816297 usec\nrounds: 6200"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 58480.345601210916,
            "unit": "iter/sec",
            "range": "stddev: 0.000008510802094730986",
            "extra": "mean: 17.099762146058413 usec\nrounds: 13832"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 74110.00791502184,
            "unit": "iter/sec",
            "range": "stddev: 0.000009788313080301217",
            "extra": "mean: 13.493454232883757 usec\nrounds: 15699"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 17741.65515805912,
            "unit": "iter/sec",
            "range": "stddev: 0.00002624727277350731",
            "extra": "mean: 56.36452693342716 usec\nrounds: 6219"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 17043.765035447737,
            "unit": "iter/sec",
            "range": "stddev: 0.00004058420377257761",
            "extra": "mean: 58.67248216108314 usec\nrounds: 6979"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 76323.01077750197,
            "unit": "iter/sec",
            "range": "stddev: 0.000007328416589360275",
            "extra": "mean: 13.102208492733803 usec\nrounds: 14389"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 56441.82290200288,
            "unit": "iter/sec",
            "range": "stddev: 0.000013429339069679094",
            "extra": "mean: 17.7173583095686 usec\nrounds: 20326"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 14672.414353156011,
            "unit": "iter/sec",
            "range": "stddev: 0.00005111078638943781",
            "extra": "mean: 68.15510903186167 usec\nrounds: 6200"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 14284.083811730776,
            "unit": "iter/sec",
            "range": "stddev: 0.000026704973823517414",
            "extra": "mean: 70.00799023447006 usec\nrounds: 3072"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 55171.900968144546,
            "unit": "iter/sec",
            "range": "stddev: 0.000022200762049736232",
            "extra": "mean: 18.125168472577833 usec\nrounds: 15504"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 60860.99236504202,
            "unit": "iter/sec",
            "range": "stddev: 0.000029574581037187424",
            "extra": "mean: 16.43088554984507 usec\nrounds: 22027"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 60662.42893765532,
            "unit": "iter/sec",
            "range": "stddev: 0.000012144781143159155",
            "extra": "mean: 16.484667981688162 usec\nrounds: 26110"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 61425.02869536836,
            "unit": "iter/sec",
            "range": "stddev: 0.000012615398627052733",
            "extra": "mean: 16.280008674630107 usec\nrounds: 25707"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 62449.20173073052,
            "unit": "iter/sec",
            "range": "stddev: 0.000010650132872055934",
            "extra": "mean: 16.01301493511184 usec\nrounds: 26247"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 49776.755843427476,
            "unit": "iter/sec",
            "range": "stddev: 0.00001523266859708589",
            "extra": "mean: 20.089698154405536 usec\nrounds: 24814"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 48316.12739616432,
            "unit": "iter/sec",
            "range": "stddev: 0.000023267349905627313",
            "extra": "mean: 20.697023000220568 usec\nrounds: 24391"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 47469.82359051116,
            "unit": "iter/sec",
            "range": "stddev: 0.000019555268042765204",
            "extra": "mean: 21.066014667050336 usec\nrounds: 24272"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 47876.898257096414,
            "unit": "iter/sec",
            "range": "stddev: 0.00003478083253172424",
            "extra": "mean: 20.88690028811083 usec\nrounds: 24631"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 62170.14822236954,
            "unit": "iter/sec",
            "range": "stddev: 0.000014933152463490269",
            "extra": "mean: 16.0848900733389 usec\nrounds: 14728"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 61481.932440534874,
            "unit": "iter/sec",
            "range": "stddev: 0.000020056720431600267",
            "extra": "mean: 16.264940939636155 usec\nrounds: 23095"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 60048.197843443646,
            "unit": "iter/sec",
            "range": "stddev: 0.00003168251823417524",
            "extra": "mean: 16.653289122967156 usec\nrounds: 22883"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 61189.66890157749,
            "unit": "iter/sec",
            "range": "stddev: 0.00004273974747201785",
            "extra": "mean: 16.342628060440767 usec\nrounds: 25445"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 50976.75529330368,
            "unit": "iter/sec",
            "range": "stddev: 0.00002596675446378942",
            "extra": "mean: 19.61678404689206 usec\nrounds: 19921"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 50250.315360743894,
            "unit": "iter/sec",
            "range": "stddev: 0.000026643876350066444",
            "extra": "mean: 19.900372620968888 usec\nrounds: 23697"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 51498.45136933707,
            "unit": "iter/sec",
            "range": "stddev: 0.00002036197376534429",
            "extra": "mean: 19.41805963888488 usec\nrounds: 23810"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 50495.5428352754,
            "unit": "iter/sec",
            "range": "stddev: 0.000014751869223259998",
            "extra": "mean: 19.803728088678266 usec\nrounds: 22728"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 107522.0402232543,
            "unit": "iter/sec",
            "range": "stddev: 0.000006531119620544929",
            "extra": "mean: 9.300418759945789 usec\nrounds: 13774"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 22883.05474672745,
            "unit": "iter/sec",
            "range": "stddev: 0.00009339637910848946",
            "extra": "mean: 43.70045918554698 usec\nrounds: 6113"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 23127.397228790454,
            "unit": "iter/sec",
            "range": "stddev: 0.000053256259221943234",
            "extra": "mean: 43.23876094259048 usec\nrounds: 8111"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 111196.83430602425,
            "unit": "iter/sec",
            "range": "stddev: 0.000014097168871858875",
            "extra": "mean: 8.993061774114047 usec\nrounds: 28329"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 95210.82918655194,
            "unit": "iter/sec",
            "range": "stddev: 0.000012155563812113761",
            "extra": "mean: 10.503006943051023 usec\nrounds: 19012"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 19578.86669847203,
            "unit": "iter/sec",
            "range": "stddev: 0.000024685867845374545",
            "extra": "mean: 51.075479260402844 usec\nrounds: 6654"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 19537.714762643936,
            "unit": "iter/sec",
            "range": "stddev: 0.000026161233032908846",
            "extra": "mean: 51.18305862014106 usec\nrounds: 7813"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 93409.93628851886,
            "unit": "iter/sec",
            "range": "stddev: 0.000007905547384848768",
            "extra": "mean: 10.7054992191758 usec\nrounds: 26247"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 282174.24183485523,
            "unit": "iter/sec",
            "range": "stddev: 0.000003743159960839476",
            "extra": "mean: 3.543909584012484 usec\nrounds: 26179"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 16926.016554590435,
            "unit": "iter/sec",
            "range": "stddev: 0.000042960325122247086",
            "extra": "mean: 59.080646457762924 usec\nrounds: 5872"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 17552.410297303184,
            "unit": "iter/sec",
            "range": "stddev: 0.000027123321875035293",
            "extra": "mean: 56.972232477589905 usec\nrounds: 6306"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 278520.8234280587,
            "unit": "iter/sec",
            "range": "stddev: 0.00000543318153007394",
            "extra": "mean: 3.5903958192134877 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 233112.51035574434,
            "unit": "iter/sec",
            "range": "stddev: 0.000009136661279629081",
            "extra": "mean: 4.289774060061973 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 14809.213906355544,
            "unit": "iter/sec",
            "range": "stddev: 0.000026200586444406067",
            "extra": "mean: 67.52552879061585 usec\nrounds: 5679"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 14618.634239748722,
            "unit": "iter/sec",
            "range": "stddev: 0.00003771170446865731",
            "extra": "mean: 68.40584309038631 usec\nrounds: 5876"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 236822.18034886275,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045216940422130004",
            "extra": "mean: 4.22257745675215 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 21978.418941124004,
            "unit": "iter/sec",
            "range": "stddev: 0.0000985323985779595",
            "extra": "mean: 45.4991782019812 usec\nrounds: 11588"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 11637.706310578784,
            "unit": "iter/sec",
            "range": "stddev: 0.00007318592330841224",
            "extra": "mean: 85.92758515404282 usec\nrounds: 4850"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 11272.557803511178,
            "unit": "iter/sec",
            "range": "stddev: 0.00010298648465975511",
            "extra": "mean: 88.71101106161727 usec\nrounds: 6057"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 22742.086285243473,
            "unit": "iter/sec",
            "range": "stddev: 0.000050364156469608226",
            "extra": "mean: 43.97133963249731 usec\nrounds: 13441"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 20197.251052466672,
            "unit": "iter/sec",
            "range": "stddev: 0.00002677620743585241",
            "extra": "mean: 49.51168836800049 usec\nrounds: 12887"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 10006.12793672214,
            "unit": "iter/sec",
            "range": "stddev: 0.000041811944957554774",
            "extra": "mean: 99.93875816138979 usec\nrounds: 4656"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 10386.30778566535,
            "unit": "iter/sec",
            "range": "stddev: 0.00004260454025118776",
            "extra": "mean: 96.28060525802526 usec\nrounds: 5477"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 19802.629000545065,
            "unit": "iter/sec",
            "range": "stddev: 0.000028145783683428165",
            "extra": "mean: 50.49834544557064 usec\nrounds: 12659"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 24310.72684714195,
            "unit": "iter/sec",
            "range": "stddev: 0.000017179670970362976",
            "extra": "mean: 41.13410538021669 usec\nrounds: 11710"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 12212.167189048601,
            "unit": "iter/sec",
            "range": "stddev: 0.000032496504515803316",
            "extra": "mean: 81.88554779177616 usec\nrounds: 5911"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 12316.790736664643,
            "unit": "iter/sec",
            "range": "stddev: 0.000032420765622601875",
            "extra": "mean: 81.18998052172782 usec\nrounds: 6212"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 23816.750922367235,
            "unit": "iter/sec",
            "range": "stddev: 0.00007030236965700605",
            "extra": "mean: 41.98725524147214 usec\nrounds: 10684"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 20240.22287835642,
            "unit": "iter/sec",
            "range": "stddev: 0.000024540695677085195",
            "extra": "mean: 49.40657057039303 usec\nrounds: 12151"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 10411.120742470974,
            "unit": "iter/sec",
            "range": "stddev: 0.000030165305013972894",
            "extra": "mean: 96.05113846395177 usec\nrounds: 5821"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 9916.624512130174,
            "unit": "iter/sec",
            "range": "stddev: 0.00010448481982314824",
            "extra": "mean: 100.840764796205 usec\nrounds: 1301"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 19820.395875664308,
            "unit": "iter/sec",
            "range": "stddev: 0.000021048628260461188",
            "extra": "mean: 50.453079054178254 usec\nrounds: 12346"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 22471.665743912177,
            "unit": "iter/sec",
            "range": "stddev: 0.000039501167374544813",
            "extra": "mean: 44.5004839158802 usec\nrounds: 15823"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 22227.74918965076,
            "unit": "iter/sec",
            "range": "stddev: 0.00001780897710950897",
            "extra": "mean: 44.98881067389405 usec\nrounds: 14578"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 21797.64221690712,
            "unit": "iter/sec",
            "range": "stddev: 0.000035723764249419314",
            "extra": "mean: 45.876521416814526 usec\nrounds: 14451"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 22574.868146483343,
            "unit": "iter/sec",
            "range": "stddev: 0.000019503460527621815",
            "extra": "mean: 44.29704720803774 usec\nrounds: 15061"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 18637.04036883241,
            "unit": "iter/sec",
            "range": "stddev: 0.00006312175241165801",
            "extra": "mean: 53.656588181906095 usec\nrounds: 14368"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 18304.703904382073,
            "unit": "iter/sec",
            "range": "stddev: 0.00003149446141061198",
            "extra": "mean: 54.63076623493505 usec\nrounds: 13967"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 18546.059629443513,
            "unit": "iter/sec",
            "range": "stddev: 0.000029459367133519424",
            "extra": "mean: 53.919809381633364 usec\nrounds: 12407"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 18892.45886231996,
            "unit": "iter/sec",
            "range": "stddev: 0.000015116771260336298",
            "extra": "mean: 52.93117255342811 usec\nrounds: 12854"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 23871.316877012152,
            "unit": "iter/sec",
            "range": "stddev: 0.00003222751246731662",
            "extra": "mean: 41.89127919302141 usec\nrounds: 14327"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 23917.283682424804,
            "unit": "iter/sec",
            "range": "stddev: 0.00004481092953929519",
            "extra": "mean: 41.81076803194137 usec\nrounds: 15528"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 23325.232156800957,
            "unit": "iter/sec",
            "range": "stddev: 0.00007693392899043669",
            "extra": "mean: 42.87202773707138 usec\nrounds: 14926"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 24587.064223158854,
            "unit": "iter/sec",
            "range": "stddev: 0.00001777514636447244",
            "extra": "mean: 40.67179354654664 usec\nrounds: 15650"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 22984.292602054855,
            "unit": "iter/sec",
            "range": "stddev: 0.00003751677754231227",
            "extra": "mean: 43.507973785131746 usec\nrounds: 15106"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 22539.719051746615,
            "unit": "iter/sec",
            "range": "stddev: 0.00001915166858359514",
            "extra": "mean: 44.36612531434855 usec\nrounds: 15106"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 22095.269414568775,
            "unit": "iter/sec",
            "range": "stddev: 0.000030053624718899958",
            "extra": "mean: 45.25855653702228 usec\nrounds: 15061"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 22165.155101605556,
            "unit": "iter/sec",
            "range": "stddev: 0.00002228680346769136",
            "extra": "mean: 45.11585844610508 usec\nrounds: 11508"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 31422.8144312093,
            "unit": "iter/sec",
            "range": "stddev: 0.00003693054867320792",
            "extra": "mean: 31.824011251098977 usec\nrounds: 12532"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 13678.598461565429,
            "unit": "iter/sec",
            "range": "stddev: 0.00005522170491621743",
            "extra": "mean: 73.10690512700059 usec\nrounds: 6398"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 13769.401492496612,
            "unit": "iter/sec",
            "range": "stddev: 0.00002237407014508468",
            "extra": "mean: 72.6247978566775 usec\nrounds: 5971"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 30962.79186875502,
            "unit": "iter/sec",
            "range": "stddev: 0.00003762802157506783",
            "extra": "mean: 32.29682918254906 usec\nrounds: 16181"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 29935.245948239848,
            "unit": "iter/sec",
            "range": "stddev: 0.000021365209656708237",
            "extra": "mean: 33.40543791519437 usec\nrounds: 16421"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 11728.969214844203,
            "unit": "iter/sec",
            "range": "stddev: 0.000038830433579609965",
            "extra": "mean: 85.2589841172401 usec\nrounds: 3337"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 11733.542149942068,
            "unit": "iter/sec",
            "range": "stddev: 0.00004075819154431836",
            "extra": "mean: 85.22575597556764 usec\nrounds: 6610"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 30336.539645450437,
            "unit": "iter/sec",
            "range": "stddev: 0.00004193966061497421",
            "extra": "mean: 32.963548634327175 usec\nrounds: 16182"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 30251.833111460728,
            "unit": "iter/sec",
            "range": "stddev: 0.000023276433077585307",
            "extra": "mean: 33.05584809738871 usec\nrounds: 14246"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 13531.190740900372,
            "unit": "iter/sec",
            "range": "stddev: 0.000041399016465582764",
            "extra": "mean: 73.90332596356997 usec\nrounds: 6378"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 13798.32816961701,
            "unit": "iter/sec",
            "range": "stddev: 0.00003717741912628513",
            "extra": "mean: 72.47254795707299 usec\nrounds: 6902"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 32875.54753699292,
            "unit": "iter/sec",
            "range": "stddev: 0.000019374910387730894",
            "extra": "mean: 30.41774433945956 usec\nrounds: 12454"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 31531.050542084507,
            "unit": "iter/sec",
            "range": "stddev: 0.000017265385610662018",
            "extra": "mean: 31.714769498888074 usec\nrounds: 16078"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 11586.156682290892,
            "unit": "iter/sec",
            "range": "stddev: 0.00009767844000595964",
            "extra": "mean: 86.30989787394049 usec\nrounds: 6208"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 11488.586556720265,
            "unit": "iter/sec",
            "range": "stddev: 0.00004172429665175684",
            "extra": "mean: 87.04290950526446 usec\nrounds: 1315"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 30008.319523924933,
            "unit": "iter/sec",
            "range": "stddev: 0.000028845257628210773",
            "extra": "mean: 33.324091980649676 usec\nrounds: 15949"
          }
        ]
      }
    ]
  }
}