window.BENCHMARK_DATA = {
  "lastUpdate": 1669516198136,
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
          "id": "a4ad03de8a22358021d7b29df2472b75fc0db4b4",
          "message": "Pint 0.1.1",
          "timestamp": "2022-11-26T22:57:04-03:00",
          "tree_id": "1ae53ad183d367d0800a855a470da58b3a6d0dfa",
          "url": "https://github.com/hgrecco/pint-benchmark/commit/a4ad03de8a22358021d7b29df2472b75fc0db4b4"
        },
        "date": 1669516197296,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 25.700322019516907,
            "unit": "iter/sec",
            "range": "stddev: 0.0014370441882331603",
            "extra": "mean: 38.91001829629204 msec\nrounds: 27"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 1392589.315480618,
            "unit": "iter/sec",
            "range": "stddev: 0.000002104069195700244",
            "extra": "mean: 718.0867962173576 nsec\nrounds: 68966"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 32.14020560458932,
            "unit": "iter/sec",
            "range": "stddev: 0.002090896103779554",
            "extra": "mean: 31.113677750001994 msec\nrounds: 24"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 1470.3742045848771,
            "unit": "iter/sec",
            "range": "stddev: 0.0001421674599630857",
            "extra": "mean: 680.0989822059104 usec\nrounds: 1405"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 12054.807179575977,
            "unit": "iter/sec",
            "range": "stddev: 0.000026730882127602318",
            "extra": "mean: 82.95445834208479 usec\nrounds: 9434"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 11703.950734828577,
            "unit": "iter/sec",
            "range": "stddev: 0.000027730851293115696",
            "extra": "mean: 85.4412345588745 usec\nrounds: 3999"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 11614.218412783768,
            "unit": "iter/sec",
            "range": "stddev: 0.000025710240694859757",
            "extra": "mean: 86.10135994164705 usec\nrounds: 2756"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 11470.99107320597,
            "unit": "iter/sec",
            "range": "stddev: 0.000036551360998334446",
            "extra": "mean: 87.1764256129366 usec\nrounds: 9175"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 11447.78605989342,
            "unit": "iter/sec",
            "range": "stddev: 0.00005097234025358038",
            "extra": "mean: 87.35313490033111 usec\nrounds: 9911"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 11061.06885849416,
            "unit": "iter/sec",
            "range": "stddev: 0.00004959231310790576",
            "extra": "mean: 90.40717608697166 usec\nrounds: 9200"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 11169.514509917399,
            "unit": "iter/sec",
            "range": "stddev: 0.000036463404475430274",
            "extra": "mean: 89.52940605539311 usec\nrounds: 7531"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 11455.771500241606,
            "unit": "iter/sec",
            "range": "stddev: 0.00003088781712366891",
            "extra": "mean: 87.29224391206735 usec\nrounds: 10020"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 11174.805068688109,
            "unit": "iter/sec",
            "range": "stddev: 0.00004171791560598959",
            "extra": "mean: 89.48701958139814 usec\nrounds: 8937"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 11328.639537235616,
            "unit": "iter/sec",
            "range": "stddev: 0.00003232277674822139",
            "extra": "mean: 88.27185265389927 usec\nrounds: 8592"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 11114.411428378724,
            "unit": "iter/sec",
            "range": "stddev: 0.00005749198993211842",
            "extra": "mean: 89.97327536811112 usec\nrounds: 7332"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 10713.831362910176,
            "unit": "iter/sec",
            "range": "stddev: 0.00011888892396016217",
            "extra": "mean: 93.3372914064957 usec\nrounds: 6575"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 11018.72176007894,
            "unit": "iter/sec",
            "range": "stddev: 0.00009076443301207357",
            "extra": "mean: 90.75462851081521 usec\nrounds: 10894"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 17551789.20409084,
            "unit": "iter/sec",
            "range": "stddev: 1.723713949262302e-7",
            "extra": "mean: 56.97424851524292 nsec\nrounds: 188680"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 17537816.248599835,
            "unit": "iter/sec",
            "range": "stddev: 2.1588493983065058e-7",
            "extra": "mean: 57.019641774370875 nsec\nrounds: 188680"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 14586839.270775525,
            "unit": "iter/sec",
            "range": "stddev: 1.7611722173261462e-7",
            "extra": "mean: 68.5549474726075 nsec\nrounds: 149254"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 17605063.81280385,
            "unit": "iter/sec",
            "range": "stddev: 1.4688187905773555e-7",
            "extra": "mean: 56.80183898403964 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 17971919.016871523,
            "unit": "iter/sec",
            "range": "stddev: 1.0159551882262081e-7",
            "extra": "mean: 55.64236067738347 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 17810560.80290517,
            "unit": "iter/sec",
            "range": "stddev: 6.890088802572158e-8",
            "extra": "mean: 56.14646338575948 nsec\nrounds: 175439"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 53031.63047545333,
            "unit": "iter/sec",
            "range": "stddev: 0.000011709732906323524",
            "extra": "mean: 18.85667084029914 usec\nrounds: 15175"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 3499.998144832795,
            "unit": "iter/sec",
            "range": "stddev: 0.00009986920192761146",
            "extra": "mean: 285.7144371565868 usec\nrounds: 2363"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 51708.767052930794,
            "unit": "iter/sec",
            "range": "stddev: 0.000021389270453455175",
            "extra": "mean: 19.339080333831344 usec\nrounds: 19531"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 3596.0147530780405,
            "unit": "iter/sec",
            "range": "stddev: 0.00011842636765761322",
            "extra": "mean: 278.0856221860717 usec\nrounds: 3065"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 48970.107124148664,
            "unit": "iter/sec",
            "range": "stddev: 0.000022735027260349616",
            "extra": "mean: 20.42062104264561 usec\nrounds: 19646"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 3484.59076516614,
            "unit": "iter/sec",
            "range": "stddev: 0.00008929448594012393",
            "extra": "mean: 286.9777449898974 usec\nrounds: 2894"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 3347.410470921631,
            "unit": "iter/sec",
            "range": "stddev: 0.0000643977613587641",
            "extra": "mean: 298.73838559293074 usec\nrounds: 2360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 58948.45124948754,
            "unit": "iter/sec",
            "range": "stddev: 0.00001329168776041665",
            "extra": "mean: 16.96397409607421 usec\nrounds: 21232"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 3647.148244584511,
            "unit": "iter/sec",
            "range": "stddev: 0.000034513271140969756",
            "extra": "mean: 274.18682568904507 usec\nrounds: 109"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 59993.64970235983,
            "unit": "iter/sec",
            "range": "stddev: 0.000008836756119134623",
            "extra": "mean: 16.668430824948885 usec\nrounds: 23202"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 3503.211033758592,
            "unit": "iter/sec",
            "range": "stddev: 0.000058476915216105966",
            "extra": "mean: 285.45240077275645 usec\nrounds: 2847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 60140.55896661708,
            "unit": "iter/sec",
            "range": "stddev: 0.000011017595491163671",
            "extra": "mean: 16.62771376227284 usec\nrounds: 23753"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 49296.7198621788,
            "unit": "iter/sec",
            "range": "stddev: 0.000010585319958142464",
            "extra": "mean: 20.285325327846312 usec\nrounds: 21277"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 3547.904949207418,
            "unit": "iter/sec",
            "range": "stddev: 0.00010180075952743515",
            "extra": "mean: 281.8564798990442 usec\nrounds: 2786"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 53118.144111960304,
            "unit": "iter/sec",
            "range": "stddev: 0.000010493153816964343",
            "extra": "mean: 18.82595893960903 usec\nrounds: 20409"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 3648.734632853572,
            "unit": "iter/sec",
            "range": "stddev: 0.00004001440968423523",
            "extra": "mean: 274.06761538531737 usec\nrounds: 2691"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 53198.14533299032,
            "unit": "iter/sec",
            "range": "stddev: 0.000007632221709149833",
            "extra": "mean: 18.79764780784302 usec\nrounds: 21599"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 3622.7551889236893,
            "unit": "iter/sec",
            "range": "stddev: 0.00008946568742910418",
            "extra": "mean: 276.0330046748473 usec\nrounds: 2995"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 3543.436103789093,
            "unit": "iter/sec",
            "range": "stddev: 0.0001877910184396312",
            "extra": "mean: 282.2119464580362 usec\nrounds: 2428"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 62056.66968452964,
            "unit": "iter/sec",
            "range": "stddev: 0.00000520597497257165",
            "extra": "mean: 16.114303346982442 usec\nrounds: 25189"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 3688.171988765526,
            "unit": "iter/sec",
            "range": "stddev: 0.00007322833777092379",
            "extra": "mean: 271.13703022692056 usec\nrounds: 3176"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 63418.84159642976,
            "unit": "iter/sec",
            "range": "stddev: 0.000008923516908492542",
            "extra": "mean: 15.768184577756404 usec\nrounds: 24510"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 3639.6526133322814,
            "unit": "iter/sec",
            "range": "stddev: 0.00004052338703385499",
            "extra": "mean: 274.75149588093535 usec\nrounds: 3156"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 59584.447665929794,
            "unit": "iter/sec",
            "range": "stddev: 0.000013099174599602421",
            "extra": "mean: 16.78290290793107 usec\nrounds: 20877"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 54484.60375487882,
            "unit": "iter/sec",
            "range": "stddev: 0.000005759543710957898",
            "extra": "mean: 18.353808802554703 usec\nrounds: 19608"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 3686.3806055977284,
            "unit": "iter/sec",
            "range": "stddev: 0.000044340345330578314",
            "extra": "mean: 271.26878827474053 usec\nrounds: 2985"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 52260.49099859668,
            "unit": "iter/sec",
            "range": "stddev: 0.000010430522275053527",
            "extra": "mean: 19.134913983622013 usec\nrounds: 21368"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 3643.6310578553384,
            "unit": "iter/sec",
            "range": "stddev: 0.00004687722701636031",
            "extra": "mean: 274.4514974544666 usec\nrounds: 3339"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 52546.6403523156,
            "unit": "iter/sec",
            "range": "stddev: 0.000011773776207328571",
            "extra": "mean: 19.030712397504068 usec\nrounds: 21787"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 3459.042882704091,
            "unit": "iter/sec",
            "range": "stddev: 0.00012863687721521584",
            "extra": "mean: 289.09731214961243 usec\nrounds: 3037"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 3496.4667132298146,
            "unit": "iter/sec",
            "range": "stddev: 0.00011516328955952615",
            "extra": "mean: 286.00300875630626 usec\nrounds: 2855"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 57629.6047860737,
            "unit": "iter/sec",
            "range": "stddev: 0.000017157188934005067",
            "extra": "mean: 17.35219257033065 usec\nrounds: 23420"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 3610.797678032056,
            "unit": "iter/sec",
            "range": "stddev: 0.00008845641286029121",
            "extra": "mean: 276.9471150610179 usec\nrounds: 3207"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 61223.764655229155,
            "unit": "iter/sec",
            "range": "stddev: 0.000006822730400437231",
            "extra": "mean: 16.333526787046235 usec\nrounds: 22884"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 3586.2710261390175,
            "unit": "iter/sec",
            "range": "stddev: 0.00020238544223118187",
            "extra": "mean: 278.8411675278767 usec\nrounds: 3098"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 59206.89294470468,
            "unit": "iter/sec",
            "range": "stddev: 0.00002103795026484266",
            "extra": "mean: 16.889925315519154 usec\nrounds: 22026"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 52583.892469272396,
            "unit": "iter/sec",
            "range": "stddev: 0.00002088887796377406",
            "extra": "mean: 19.017230430104693 usec\nrounds: 19494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 3615.413894146038,
            "unit": "iter/sec",
            "range": "stddev: 0.00007966161957528498",
            "extra": "mean: 276.5935047213178 usec\nrounds: 3495"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 53597.69134221269,
            "unit": "iter/sec",
            "range": "stddev: 0.000009240803824986522",
            "extra": "mean: 18.657520034121617 usec\nrounds: 20041"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 3639.0066644001777,
            "unit": "iter/sec",
            "range": "stddev: 0.00006287060625655414",
            "extra": "mean: 274.80026617781186 usec\nrounds: 2998"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 53034.318525488,
            "unit": "iter/sec",
            "range": "stddev: 0.00003275737025000278",
            "extra": "mean: 18.85571508794641 usec\nrounds: 16026"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 3586.4605066665963,
            "unit": "iter/sec",
            "range": "stddev: 0.00007713668321479442",
            "extra": "mean: 278.82643574108135 usec\nrounds: 3268"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 3525.8737621365285,
            "unit": "iter/sec",
            "range": "stddev: 0.000047803395794052585",
            "extra": "mean: 283.6176413173802 usec\nrounds: 3432"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 57275.86674942856,
            "unit": "iter/sec",
            "range": "stddev: 0.000012812989456613672",
            "extra": "mean: 17.459360403480527 usec\nrounds: 20921"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 3564.0009167404746,
            "unit": "iter/sec",
            "range": "stddev: 0.0000610493351579308",
            "extra": "mean: 280.58354174458776 usec\nrounds: 2132"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 63879.852865720604,
            "unit": "iter/sec",
            "range": "stddev: 0.000005181770142154222",
            "extra": "mean: 15.654387966454175 usec\nrounds: 24814"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 3432.5427447684265,
            "unit": "iter/sec",
            "range": "stddev: 0.0000720663366648372",
            "extra": "mean: 291.3292198688888 usec\nrounds: 3211"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 59882.28561697432,
            "unit": "iter/sec",
            "range": "stddev: 0.000008652842902406074",
            "extra": "mean: 16.69942938377988 usec\nrounds: 24272"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 48676.226794101014,
            "unit": "iter/sec",
            "range": "stddev: 0.00008390081332205922",
            "extra": "mean: 20.543909539865734 usec\nrounds: 17422"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 3509.160352801905,
            "unit": "iter/sec",
            "range": "stddev: 0.00006590989025489545",
            "extra": "mean: 284.968453835843 usec\nrounds: 2946"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 51705.44528415399,
            "unit": "iter/sec",
            "range": "stddev: 0.000022432394763206327",
            "extra": "mean: 19.340322755260498 usec\nrounds: 15504"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 3514.5069420957484,
            "unit": "iter/sec",
            "range": "stddev: 0.00017452427435345492",
            "extra": "mean: 284.5349337690272 usec\nrounds: 3216"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 53214.717366204815,
            "unit": "iter/sec",
            "range": "stddev: 0.000007575456277206033",
            "extra": "mean: 18.791793877591317 usec\nrounds: 16529"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 3551.019267395675,
            "unit": "iter/sec",
            "range": "stddev: 0.00013099155963947802",
            "extra": "mean: 281.60928586946306 usec\nrounds: 2760"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 3543.7861393087064,
            "unit": "iter/sec",
            "range": "stddev: 0.000047427490190334584",
            "extra": "mean: 282.18407112881596 usec\nrounds: 2629"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 62527.67733852655,
            "unit": "iter/sec",
            "range": "stddev: 0.0000077669815332588",
            "extra": "mean: 15.992917737627973 usec\nrounds: 22173"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 3591.589198964613,
            "unit": "iter/sec",
            "range": "stddev: 0.000062691298612265",
            "extra": "mean: 278.42827912732366 usec\nrounds: 412"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 59020.649435812025,
            "unit": "iter/sec",
            "range": "stddev: 0.000016324832491745236",
            "extra": "mean: 16.94322257649081 usec\nrounds: 23529"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 3592.5911149289354,
            "unit": "iter/sec",
            "range": "stddev: 0.00006832851894437703",
            "extra": "mean: 278.3506299518811 usec\nrounds: 2878"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 61847.94189180612,
            "unit": "iter/sec",
            "range": "stddev: 0.00000985626921282489",
            "extra": "mean: 16.168686772946348 usec\nrounds: 24155"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 54679.598864605614,
            "unit": "iter/sec",
            "range": "stddev: 0.00000629564056074721",
            "extra": "mean: 18.28835654914259 usec\nrounds: 11429"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 3562.036559586502,
            "unit": "iter/sec",
            "range": "stddev: 0.00010604903820150014",
            "extra": "mean: 280.7382752175022 usec\nrounds: 3103"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 52740.26181512655,
            "unit": "iter/sec",
            "range": "stddev: 0.000005857863822007807",
            "extra": "mean: 18.96084633605645 usec\nrounds: 21098"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 3427.274501720845,
            "unit": "iter/sec",
            "range": "stddev: 0.00007588951621622853",
            "extra": "mean: 291.777037263253 usec\nrounds: 2791"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 51956.33346313703,
            "unit": "iter/sec",
            "range": "stddev: 0.000012250357424287973",
            "extra": "mean: 19.246931670216856 usec\nrounds: 15674"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 3441.1382299196252,
            "unit": "iter/sec",
            "range": "stddev: 0.0000582314136869037",
            "extra": "mean: 290.60151995793467 usec\nrounds: 2856"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 3412.1257679929236,
            "unit": "iter/sec",
            "range": "stddev: 0.00006959078216303576",
            "extra": "mean: 293.07243284535167 usec\nrounds: 3075"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 59038.784678881835,
            "unit": "iter/sec",
            "range": "stddev: 0.000012225211175479429",
            "extra": "mean: 16.93801804083714 usec\nrounds: 20121"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 3541.4195373105977,
            "unit": "iter/sec",
            "range": "stddev: 0.00013916049836083675",
            "extra": "mean: 282.3726444902977 usec\nrounds: 2931"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 60328.4654292376,
            "unit": "iter/sec",
            "range": "stddev: 0.000008670384305672888",
            "extra": "mean: 16.575923038734544 usec\nrounds: 24272"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 3423.2580050359293,
            "unit": "iter/sec",
            "range": "stddev: 0.00009447614608512347",
            "extra": "mean: 292.11937824403174 usec\nrounds: 2813"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 57756.46144222242,
            "unit": "iter/sec",
            "range": "stddev: 0.00001005174896817839",
            "extra": "mean: 17.31408010513881 usec\nrounds: 21322"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 174561.00521565354,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031913347225827026",
            "extra": "mean: 5.728656287036129 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 176468.10277245325,
            "unit": "iter/sec",
            "range": "stddev: 0.000007581471162646284",
            "extra": "mean: 5.666746478764209 usec\nrounds: 69931"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 172803.26008721086,
            "unit": "iter/sec",
            "range": "stddev: 0.000004633972431469594",
            "extra": "mean: 5.786927859435736 usec\nrounds: 71943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 167820.14103712892,
            "unit": "iter/sec",
            "range": "stddev: 0.000002341177507956364",
            "extra": "mean: 5.958760336035932 usec\nrounds: 5587"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 173109.6946766587,
            "unit": "iter/sec",
            "range": "stddev: 0.000016572307854315425",
            "extra": "mean: 5.776683979876693 usec\nrounds: 71429"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 174622.97407058792,
            "unit": "iter/sec",
            "range": "stddev: 0.000011608564893426815",
            "extra": "mean: 5.726623345653073 usec\nrounds: 38911"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 182056.57457157955,
            "unit": "iter/sec",
            "range": "stddev: 0.000004222314403275264",
            "extra": "mean: 5.492798062103645 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 176790.7612836429,
            "unit": "iter/sec",
            "range": "stddev: 0.000012748353736727927",
            "extra": "mean: 5.656404173720374 usec\nrounds: 75188"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 182550.58963138063,
            "unit": "iter/sec",
            "range": "stddev: 0.000004943332143777557",
            "extra": "mean: 5.477933552662154 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 182783.57276655897,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034477819613856303",
            "extra": "mean: 5.470951162975376 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 167587.09470134476,
            "unit": "iter/sec",
            "range": "stddev: 0.000010558625393540898",
            "extra": "mean: 5.967046578270778 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 176398.66095992876,
            "unit": "iter/sec",
            "range": "stddev: 0.000009528495724970983",
            "extra": "mean: 5.668977273173082 usec\nrounds: 84746"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 180242.72661600358,
            "unit": "iter/sec",
            "range": "stddev: 0.000006915312246264197",
            "extra": "mean: 5.548074081959715 usec\nrounds: 33004"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 160667.18205057608,
            "unit": "iter/sec",
            "range": "stddev: 0.000006856861110715274",
            "extra": "mean: 6.22404642464702 usec\nrounds: 32052"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 171797.76067755613,
            "unit": "iter/sec",
            "range": "stddev: 0.000019087679800964465",
            "extra": "mean: 5.820797640528508 usec\nrounds: 78741"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 172444.49898676158,
            "unit": "iter/sec",
            "range": "stddev: 0.000019534123870753586",
            "extra": "mean: 5.798967238014181 usec\nrounds: 69440"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 165412.1278480318,
            "unit": "iter/sec",
            "range": "stddev: 0.00001545910592682008",
            "extra": "mean: 6.04550593121397 usec\nrounds: 80001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 168513.23270680857,
            "unit": "iter/sec",
            "range": "stddev: 0.000009949997288997792",
            "extra": "mean: 5.9342520699242165 usec\nrounds: 72464"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 168760.9509954864,
            "unit": "iter/sec",
            "range": "stddev: 0.000008122405084386798",
            "extra": "mean: 5.92554138917329 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 173130.53252291164,
            "unit": "iter/sec",
            "range": "stddev: 0.000006907072843209643",
            "extra": "mean: 5.775988703018993 usec\nrounds: 81968"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 169564.3209769639,
            "unit": "iter/sec",
            "range": "stddev: 0.000009164588609771954",
            "extra": "mean: 5.897467074667521 usec\nrounds: 69931"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 175277.17925959185,
            "unit": "iter/sec",
            "range": "stddev: 0.000023572666460322602",
            "extra": "mean: 5.705249275600013 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 171284.89496790917,
            "unit": "iter/sec",
            "range": "stddev: 0.000008637230290367758",
            "extra": "mean: 5.838226424970827 usec\nrounds: 80000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 176833.62879409405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000080683145226616",
            "extra": "mean: 5.6550329641451 usec\nrounds: 81968"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 179538.29597956792,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035471765805425088",
            "extra": "mean: 5.569842325527048 usec\nrounds: 13141"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 173980.6098188686,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030993888850500196",
            "extra": "mean: 5.7477669554159005 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 175668.0585773243,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031426582834731975",
            "extra": "mean: 5.692554515024865 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 163574.54727906964,
            "unit": "iter/sec",
            "range": "stddev: 0.000004156010388549077",
            "extra": "mean: 6.113420557380055 usec\nrounds: 69931"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 171917.36754647642,
            "unit": "iter/sec",
            "range": "stddev: 0.000010550468801330335",
            "extra": "mean: 5.816747977656523 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 166526.19228796923,
            "unit": "iter/sec",
            "range": "stddev: 0.00001257447702127989",
            "extra": "mean: 6.005061343567665 usec\nrounds: 69445"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 171618.66496414065,
            "unit": "iter/sec",
            "range": "stddev: 0.000007239016345756141",
            "extra": "mean: 5.826872037542932 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 172556.82047074143,
            "unit": "iter/sec",
            "range": "stddev: 0.000017378461189841808",
            "extra": "mean: 5.79519254742851 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 171615.98143799513,
            "unit": "iter/sec",
            "range": "stddev: 0.000011923325836482105",
            "extra": "mean: 5.826963151222021 usec\nrounds: 70423"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 173440.23998553946,
            "unit": "iter/sec",
            "range": "stddev: 0.0000176167163894224",
            "extra": "mean: 5.765674678975159 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 162139.40842134296,
            "unit": "iter/sec",
            "range": "stddev: 0.000009640877184247118",
            "extra": "mean: 6.167532062293911 usec\nrounds: 64936"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 170082.46383615473,
            "unit": "iter/sec",
            "range": "stddev: 0.000015751700859613918",
            "extra": "mean: 5.879500904710131 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 236871.50181767103,
            "unit": "iter/sec",
            "range": "stddev: 0.00000802070342473493",
            "extra": "mean: 4.221698230164209 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 179881.97156601926,
            "unit": "iter/sec",
            "range": "stddev: 0.000004098145952281352",
            "extra": "mean: 5.5592007986914105 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 181655.59578369037,
            "unit": "iter/sec",
            "range": "stddev: 0.000009623405528117818",
            "extra": "mean: 5.504922629472795 usec\nrounds: 69445"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 175859.95392379837,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032409881122828985",
            "extra": "mean: 5.68634289778848 usec\nrounds: 28090"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 166390.95773169267,
            "unit": "iter/sec",
            "range": "stddev: 0.00001333708735941873",
            "extra": "mean: 6.009941968195841 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 166152.9362321264,
            "unit": "iter/sec",
            "range": "stddev: 0.00000895045136663704",
            "extra": "mean: 6.018551478397801 usec\nrounds: 71943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 175614.87764740665,
            "unit": "iter/sec",
            "range": "stddev: 0.000002857421468156021",
            "extra": "mean: 5.6942783743400405 usec\nrounds: 71429"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 242107.73826909278,
            "unit": "iter/sec",
            "range": "stddev: 0.000003939125265503382",
            "extra": "mean: 4.130392556426847 usec\nrounds: 57472"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 179439.38787692843,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027402410706642993",
            "extra": "mean: 5.572912457134924 usec\nrounds: 25576"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 170396.82184287207,
            "unit": "iter/sec",
            "range": "stddev: 0.000021348241999233457",
            "extra": "mean: 5.868654058126327 usec\nrounds: 68023"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 172018.4132974066,
            "unit": "iter/sec",
            "range": "stddev: 0.000007509629628396825",
            "extra": "mean: 5.813331147701478 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 176400.88410741315,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028709583898408507",
            "extra": "mean: 5.668905828108463 usec\nrounds: 71943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 174713.47521091235,
            "unit": "iter/sec",
            "range": "stddev: 0.000007712079722446535",
            "extra": "mean: 5.723656969176591 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 167783.57615970046,
            "unit": "iter/sec",
            "range": "stddev: 0.000007447903045551624",
            "extra": "mean: 5.9600589216680895 usec\nrounds: 71943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 230649.95914564517,
            "unit": "iter/sec",
            "range": "stddev: 0.000004486457399664652",
            "extra": "mean: 4.3355741475269225 usec\nrounds: 67568"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 168094.98271528614,
            "unit": "iter/sec",
            "range": "stddev: 0.00001417224964161199",
            "extra": "mean: 5.949017536673106 usec\nrounds: 68028"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 167091.3876828465,
            "unit": "iter/sec",
            "range": "stddev: 0.000012427837903390592",
            "extra": "mean: 5.984748908172837 usec\nrounds: 59524"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 169300.2596472651,
            "unit": "iter/sec",
            "range": "stddev: 0.000013220682720036214",
            "extra": "mean: 5.906665483464036 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 172672.80995432768,
            "unit": "iter/sec",
            "range": "stddev: 0.000009369997433355727",
            "extra": "mean: 5.791299743512035 usec\nrounds: 66667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 164906.6664621691,
            "unit": "iter/sec",
            "range": "stddev: 0.000015437926101598185",
            "extra": "mean: 6.064036230029597 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 169804.26725593442,
            "unit": "iter/sec",
            "range": "stddev: 0.000003906080204278924",
            "extra": "mean: 5.889133507421036 usec\nrounds: 70423"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 224118.39176499852,
            "unit": "iter/sec",
            "range": "stddev: 0.000004783209594809191",
            "extra": "mean: 4.461927430964967 usec\nrounds: 63691"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 163910.85504561217,
            "unit": "iter/sec",
            "range": "stddev: 0.000017945914681036867",
            "extra": "mean: 6.100877209881711 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 173889.57346448314,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030962043572185135",
            "extra": "mean: 5.750776082064802 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 170476.21097555503,
            "unit": "iter/sec",
            "range": "stddev: 0.000009413816771512977",
            "extra": "mean: 5.865921082346159 usec\nrounds: 70922"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 165123.40989360507,
            "unit": "iter/sec",
            "range": "stddev: 0.000003707096401251326",
            "extra": "mean: 6.056076486334287 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 167207.40381122753,
            "unit": "iter/sec",
            "range": "stddev: 0.000006207216043072307",
            "extra": "mean: 5.980596416226711 usec\nrounds: 68028"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 167593.97380720856,
            "unit": "iter/sec",
            "range": "stddev: 0.000009354184655314116",
            "extra": "mean: 5.966801653324053 usec\nrounds: 72464"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 233907.55667922407,
            "unit": "iter/sec",
            "range": "stddev: 0.000004531722663836056",
            "extra": "mean: 4.27519321819679 usec\nrounds: 70423"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 176034.38127433907,
            "unit": "iter/sec",
            "range": "stddev: 0.000005458704297977583",
            "extra": "mean: 5.68070846593064 usec\nrounds: 71429"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 171880.04367535064,
            "unit": "iter/sec",
            "range": "stddev: 0.000005108096992545209",
            "extra": "mean: 5.818011088528774 usec\nrounds: 29851"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 174048.10282960016,
            "unit": "iter/sec",
            "range": "stddev: 0.000007644441360917067",
            "extra": "mean: 5.745538065295884 usec\nrounds: 67568"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 155114.82414679546,
            "unit": "iter/sec",
            "range": "stddev: 0.000007636255827076521",
            "extra": "mean: 6.446837080211196 usec\nrounds: 72459"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 162733.81892744396,
            "unit": "iter/sec",
            "range": "stddev: 0.00002349877390241736",
            "extra": "mean: 6.1450041951381795 usec\nrounds: 72464"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 167425.71802432818,
            "unit": "iter/sec",
            "range": "stddev: 0.00001500477189496969",
            "extra": "mean: 5.972798037244749 usec\nrounds: 71429"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 224618.11263499552,
            "unit": "iter/sec",
            "range": "stddev: 0.000010821427803806227",
            "extra": "mean: 4.452000723668265 usec\nrounds: 64936"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 2123787.1833469654,
            "unit": "iter/sec",
            "range": "stddev: 5.315439684777633e-7",
            "extra": "mean: 470.8569709059188 nsec\nrounds: 112360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 3857.0037185514325,
            "unit": "iter/sec",
            "range": "stddev: 0.00006991444540638195",
            "extra": "mean: 259.26861184763595 usec\nrounds: 3393"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 2082158.6869646232,
            "unit": "iter/sec",
            "range": "stddev: 8.342565456369201e-7",
            "extra": "mean: 480.27079120370604 nsec\nrounds: 112360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 3807.94584878789,
            "unit": "iter/sec",
            "range": "stddev: 0.00006053593579628311",
            "extra": "mean: 262.6087764137483 usec\nrounds: 3502"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 2118341.2943465407,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012266302056469062",
            "extra": "mean: 472.0674627213131 nsec\nrounds: 45872"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 3655.259451904287,
            "unit": "iter/sec",
            "range": "stddev: 0.00007017949137776298",
            "extra": "mean: 273.5783911259783 usec\nrounds: 3403"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 3850.4057261965563,
            "unit": "iter/sec",
            "range": "stddev: 0.00007730927187616988",
            "extra": "mean: 259.71289030566743 usec\nrounds: 3136"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 2067055.8190512476,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012826538928617714",
            "extra": "mean: 483.7798722144938 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 3789.7727669256005,
            "unit": "iter/sec",
            "range": "stddev: 0.00009640175456233755",
            "extra": "mean: 263.86806320613147 usec\nrounds: 3275"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 2016391.7493448332,
            "unit": "iter/sec",
            "range": "stddev: 6.900430274317429e-7",
            "extra": "mean: 495.9353758144016 nsec\nrounds: 105264"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 3730.249515379938,
            "unit": "iter/sec",
            "range": "stddev: 0.00016557993378213797",
            "extra": "mean: 268.0785818420371 usec\nrounds: 3073"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 2177841.550215602,
            "unit": "iter/sec",
            "range": "stddev: 7.71339793949432e-7",
            "extra": "mean: 459.17022746738036 nsec\nrounds: 116280"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 2074337.9603551466,
            "unit": "iter/sec",
            "range": "stddev: 1.8585239482295285e-7",
            "extra": "mean: 482.0815214841151 nsec\nrounds: 44844"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 3899.1352066933805,
            "unit": "iter/sec",
            "range": "stddev: 0.0001086625873779661",
            "extra": "mean: 256.4671259112451 usec\nrounds: 2470"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 2048564.9739533393,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011292569589455665",
            "extra": "mean: 488.14658686209515 nsec\nrounds: 112360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 3902.7390886439675,
            "unit": "iter/sec",
            "range": "stddev: 0.0000980625663919311",
            "extra": "mean: 256.2302980769992 usec\nrounds: 3016"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 2025903.5395404235,
            "unit": "iter/sec",
            "range": "stddev: 6.108833840328227e-7",
            "extra": "mean: 493.60691685615257 nsec\nrounds: 109891"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 3440.4486598120493,
            "unit": "iter/sec",
            "range": "stddev: 0.00018511787492735544",
            "extra": "mean: 290.6597653035839 usec\nrounds: 98"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 3976.7235301228006,
            "unit": "iter/sec",
            "range": "stddev: 0.00007743081913458631",
            "extra": "mean: 251.46329444961947 usec\nrounds: 3189"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 2089559.7945351745,
            "unit": "iter/sec",
            "range": "stddev: 3.342339761613137e-7",
            "extra": "mean: 478.56969808434866 nsec\nrounds: 96154"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 3801.6924932541206,
            "unit": "iter/sec",
            "range": "stddev: 0.00008092228957126071",
            "extra": "mean: 263.04073824341157 usec\nrounds: 3381"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 2019864.2868834145,
            "unit": "iter/sec",
            "range": "stddev: 7.523848690307808e-7",
            "extra": "mean: 495.0827669432472 nsec\nrounds: 111112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 3990.7429408307216,
            "unit": "iter/sec",
            "range": "stddev: 0.00007321827859979047",
            "extra": "mean: 250.5799082593473 usec\nrounds: 3281"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 2040567.1709279416,
            "unit": "iter/sec",
            "range": "stddev: 7.139185827116387e-7",
            "extra": "mean: 490.05982956479164 nsec\nrounds: 112360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 2100512.733584841,
            "unit": "iter/sec",
            "range": "stddev: 0.000001435033130119586",
            "extra": "mean: 476.0742384520349 nsec\nrounds: 101011"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 3817.0841766877793,
            "unit": "iter/sec",
            "range": "stddev: 0.00010350350449048932",
            "extra": "mean: 261.9800752908037 usec\nrounds: 3440"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 2100774.86310948,
            "unit": "iter/sec",
            "range": "stddev: 5.657619067234292e-7",
            "extra": "mean: 476.0148350785 nsec\nrounds: 106383"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 3968.8679956429687,
            "unit": "iter/sec",
            "range": "stddev: 0.00005318910960886693",
            "extra": "mean: 251.96101283736368 usec\nrounds: 3116"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 2094333.7748365176,
            "unit": "iter/sec",
            "range": "stddev: 8.322970861054823e-7",
            "extra": "mean: 477.47881069134786 nsec\nrounds: 188680"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 3725.2388751640233,
            "unit": "iter/sec",
            "range": "stddev: 0.00007523192850116212",
            "extra": "mean: 268.4391614902734 usec\nrounds: 3381"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 3970.6022855410465,
            "unit": "iter/sec",
            "range": "stddev: 0.00006163974429593364",
            "extra": "mean: 251.85096065690115 usec\nrounds: 2618"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 2192369.9314237023,
            "unit": "iter/sec",
            "range": "stddev: 4.847638396663866e-7",
            "extra": "mean: 456.12740152421844 nsec\nrounds: 116280"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 3965.6245645633994,
            "unit": "iter/sec",
            "range": "stddev: 0.0000540419748075404",
            "extra": "mean: 252.1670883663432 usec\nrounds: 3361"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 2145882.4241073304,
            "unit": "iter/sec",
            "range": "stddev: 8.184303464988114e-7",
            "extra": "mean: 466.0087564748792 nsec\nrounds: 101011"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 3864.276871684948,
            "unit": "iter/sec",
            "range": "stddev: 0.00008647181391931964",
            "extra": "mean: 258.78062913332815 usec\nrounds: 3357"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 2081406.9149558377,
            "unit": "iter/sec",
            "range": "stddev: 5.384332638969252e-7",
            "extra": "mean: 480.4442575907572 nsec\nrounds: 113637"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 12103.89487618855,
            "unit": "iter/sec",
            "range": "stddev: 0.00004929709328715301",
            "extra": "mean: 82.61803413108413 usec\nrounds: 8819"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 10837.51923845963,
            "unit": "iter/sec",
            "range": "stddev: 0.00004251431068730064",
            "extra": "mean: 92.27203919982458 usec\nrounds: 6250"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 8672.282531953006,
            "unit": "iter/sec",
            "range": "stddev: 0.00007132160352059231",
            "extra": "mean: 115.30989636413507 usec\nrounds: 6243"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 77.20256579288578,
            "unit": "iter/sec",
            "range": "stddev: 0.02647578790739586",
            "extra": "mean: 12.952937376236141 msec\nrounds: 202"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 125951.6818966403,
            "unit": "iter/sec",
            "range": "stddev: 0.00003221839177190841",
            "extra": "mean: 7.939552572395419 usec\nrounds: 20001"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 133234.0881865951,
            "unit": "iter/sec",
            "range": "stddev: 0.000013784591185908925",
            "extra": "mean: 7.505586697898922 usec\nrounds: 60607"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 83.94102206529004,
            "unit": "iter/sec",
            "range": "stddev: 0.026273306263919074",
            "extra": "mean: 11.913126328414151 msec\nrounds: 271"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 83.83276812954209,
            "unit": "iter/sec",
            "range": "stddev: 0.026142741282315887",
            "extra": "mean: 11.92850984539549 msec\nrounds: 304"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 53775.05958340062,
            "unit": "iter/sec",
            "range": "stddev: 0.00002335365445025774",
            "extra": "mean: 18.59598125501067 usec\nrounds: 21552"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 53755.626810220565,
            "unit": "iter/sec",
            "range": "stddev: 0.000010046898681294908",
            "extra": "mean: 18.602703741701507 usec\nrounds: 32259"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 72.46970509388217,
            "unit": "iter/sec",
            "range": "stddev: 0.025862366282688995",
            "extra": "mean: 13.798869454547003 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 65.75089071040108,
            "unit": "iter/sec",
            "range": "stddev: 0.026771059807328232",
            "extra": "mean: 15.208919441175125 msec\nrounds: 170"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 16066.198933336836,
            "unit": "iter/sec",
            "range": "stddev: 0.000043637114058537384",
            "extra": "mean: 62.242475905426076 usec\nrounds: 5852"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 1173.1579733913204,
            "unit": "iter/sec",
            "range": "stddev: 0.00027228603580785435",
            "extra": "mean: 852.4001223034253 usec\nrounds: 973"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 1203.6002135615036,
            "unit": "iter/sec",
            "range": "stddev: 0.00019113761380183255",
            "extra": "mean: 830.8406634799093 usec\nrounds: 1046"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 19836.02902284621,
            "unit": "iter/sec",
            "range": "stddev: 0.000015239665352096218",
            "extra": "mean: 50.41331603458771 usec\nrounds: 9018"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 31.63836863744192,
            "unit": "iter/sec",
            "range": "stddev: 0.03513237212495299",
            "extra": "mean: 31.607192250000082 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 3.3307417431364406,
            "unit": "iter/sec",
            "range": "stddev: 0.04545823843242067",
            "extra": "mean: 300.23342459999185 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 3.317914742423722,
            "unit": "iter/sec",
            "range": "stddev: 0.039806919645843986",
            "extra": "mean: 301.3941217999786 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 34.7859945869561,
            "unit": "iter/sec",
            "range": "stddev: 0.03113478499389305",
            "extra": "mean: 28.74720162162549 msec\nrounds: 37"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 16237.827444271114,
            "unit": "iter/sec",
            "range": "stddev: 0.00002125727370180753",
            "extra": "mean: 61.584593347357625 usec\nrounds: 6524"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 1179.5597007581086,
            "unit": "iter/sec",
            "range": "stddev: 0.00017397648194280015",
            "extra": "mean: 847.7739612139134 usec\nrounds: 1186"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 1200.4324855418042,
            "unit": "iter/sec",
            "range": "stddev: 0.00019054020283349604",
            "extra": "mean: 833.0331043554351 usec\nrounds: 1102"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 18895.69065404329,
            "unit": "iter/sec",
            "range": "stddev: 0.00001259905379736984",
            "extra": "mean: 52.922119562008206 usec\nrounds: 7402"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 34.10653109833938,
            "unit": "iter/sec",
            "range": "stddev: 0.027389999492782376",
            "extra": "mean: 29.319897620684422 msec\nrounds: 29"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 3.547550566040843,
            "unit": "iter/sec",
            "range": "stddev: 0.007670843815955034",
            "extra": "mean: 281.8846359999952 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 3.3045520639561077,
            "unit": "iter/sec",
            "range": "stddev: 0.03804634232954837",
            "extra": "mean: 302.61287479999055 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 34.454330059423775,
            "unit": "iter/sec",
            "range": "stddev: 0.03043361628640844",
            "extra": "mean: 29.023928147065657 msec\nrounds: 34"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 55983.80161512719,
            "unit": "iter/sec",
            "range": "stddev: 0.000012849451979877245",
            "extra": "mean: 17.86230965297279 usec\nrounds: 28012"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 54058.82862586524,
            "unit": "iter/sec",
            "range": "stddev: 0.000006882502430294509",
            "extra": "mean: 18.498366047123994 usec\nrounds: 29070"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 56003.29282834147,
            "unit": "iter/sec",
            "range": "stddev: 0.000007941282192633355",
            "extra": "mean: 17.85609290984283 usec\nrounds: 2863"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 52999.468545689975,
            "unit": "iter/sec",
            "range": "stddev: 0.000022156945209898553",
            "extra": "mean: 18.86811372717665 usec\nrounds: 19494"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 61.096231854922586,
            "unit": "iter/sec",
            "range": "stddev: 0.028661298225220677",
            "extra": "mean: 16.367621531464856 msec\nrounds: 143"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 63.833759269332425,
            "unit": "iter/sec",
            "range": "stddev: 0.027234701011143343",
            "extra": "mean: 15.665691813335343 msec\nrounds: 150"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 63.89118794508953,
            "unit": "iter/sec",
            "range": "stddev: 0.02726633137472662",
            "extra": "mean: 15.651610686272376 msec\nrounds: 153"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 62.71833457520832,
            "unit": "iter/sec",
            "range": "stddev: 0.027963633904565497",
            "extra": "mean: 15.94430092528774 msec\nrounds: 174"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 72420.56195241616,
            "unit": "iter/sec",
            "range": "stddev: 0.000019441790830579444",
            "extra": "mean: 13.808233090721512 usec\nrounds: 21142"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 53519.214923162646,
            "unit": "iter/sec",
            "range": "stddev: 0.000008137064620985807",
            "extra": "mean: 18.684877972064736 usec\nrounds: 24814"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 51979.42439953473,
            "unit": "iter/sec",
            "range": "stddev: 0.00007055961665797494",
            "extra": "mean: 19.238381562550565 usec\nrounds: 28572"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 73913.03173432991,
            "unit": "iter/sec",
            "range": "stddev: 0.000005643670269450519",
            "extra": "mean: 13.529413914373864 usec\nrounds: 13928"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 70.73741053730527,
            "unit": "iter/sec",
            "range": "stddev: 0.027503358338566312",
            "extra": "mean: 14.136791160493825 msec\nrounds: 162"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 65.0488405667575,
            "unit": "iter/sec",
            "range": "stddev: 0.026960457926187998",
            "extra": "mean: 15.373064166666161 msec\nrounds: 144"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 61.8321556217988,
            "unit": "iter/sec",
            "range": "stddev: 0.028247950831951227",
            "extra": "mean: 16.172814774832982 msec\nrounds: 151"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 69.10755658788088,
            "unit": "iter/sec",
            "range": "stddev: 0.02784218941443965",
            "extra": "mean: 14.470197607527135 msec\nrounds: 186"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 416102.779112467,
            "unit": "iter/sec",
            "range": "stddev: 0.000004525176358519906",
            "extra": "mean: 2.403252393874816 usec\nrounds: 24331"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 1260.37651254854,
            "unit": "iter/sec",
            "range": "stddev: 0.00026286194219507524",
            "extra": "mean: 793.4137061773338 usec\nrounds: 1198"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 1297.8212617271638,
            "unit": "iter/sec",
            "range": "stddev: 0.0002414737168096182",
            "extra": "mean: 770.5221277305799 usec\nrounds: 1190"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 428310.27447163046,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039523731264415386",
            "extra": "mean: 2.3347560392605895 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 2175.7630417082205,
            "unit": "iter/sec",
            "range": "stddev: 0.00010491863873892425",
            "extra": "mean: 459.6088732231092 usec\nrounds: 1759"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 3.903989940573387,
            "unit": "iter/sec",
            "range": "stddev: 0.006473271569039765",
            "extra": "mean: 256.1482010000077 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 3.975948463540128,
            "unit": "iter/sec",
            "range": "stddev: 0.0050709161454949294",
            "extra": "mean: 251.51231439997446 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 2207.767312864353,
            "unit": "iter/sec",
            "range": "stddev: 0.00013043807292439222",
            "extra": "mean: 452.94628386476205 usec\nrounds: 2318"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 326820.2065594385,
            "unit": "iter/sec",
            "range": "stddev: 0.000007243370307677268",
            "extra": "mean: 3.0597863287811453 usec\nrounds: 33004"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 1445.7012273387643,
            "unit": "iter/sec",
            "range": "stddev: 0.0002788494367411146",
            "extra": "mean: 691.7058525576495 usec\nrounds: 1153"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 1415.5433292805549,
            "unit": "iter/sec",
            "range": "stddev: 0.0001330205165207368",
            "extra": "mean: 706.4425223269193 usec\nrounds: 1187"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 354999.6302709414,
            "unit": "iter/sec",
            "range": "stddev: 0.000004523102385079312",
            "extra": "mean: 2.8169043422292694 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 1650.550471192234,
            "unit": "iter/sec",
            "range": "stddev: 0.00021359375902184848",
            "extra": "mean: 605.8584802182237 usec\nrounds: 1643"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 5.10551369614631,
            "unit": "iter/sec",
            "range": "stddev: 0.00511270788809725",
            "extra": "mean: 195.86667660000785 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 4.357604771839463,
            "unit": "iter/sec",
            "range": "stddev: 0.004014972307214298",
            "extra": "mean: 229.48386839999557 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 1671.7186205856067,
            "unit": "iter/sec",
            "range": "stddev: 0.00008034887809133465",
            "extra": "mean: 598.1867927329168 usec\nrounds: 1486"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 16977.836053398867,
            "unit": "iter/sec",
            "range": "stddev: 0.000014914297843468379",
            "extra": "mean: 58.90032138694175 usec\nrounds: 6892"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 1173.7317286136183,
            "unit": "iter/sec",
            "range": "stddev: 0.00011671841610547658",
            "extra": "mean: 851.9834435941971 usec\nrounds: 1046"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 1201.156290503479,
            "unit": "iter/sec",
            "range": "stddev: 0.00022715216215876357",
            "extra": "mean: 832.5311268035218 usec\nrounds: 970"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 19595.01824923468,
            "unit": "iter/sec",
            "range": "stddev: 0.000023887271494727545",
            "extra": "mean: 51.03337936615888 usec\nrounds: 7386"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 32.256702783815804,
            "unit": "iter/sec",
            "range": "stddev: 0.030639181209417932",
            "extra": "mean: 31.001308679997237 msec\nrounds: 25"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 3.3314285202275107,
            "unit": "iter/sec",
            "range": "stddev: 0.039039940624183735",
            "extra": "mean: 300.1715311999874 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 3.334895291571145,
            "unit": "iter/sec",
            "range": "stddev: 0.03567433077391899",
            "extra": "mean: 299.85948960000997 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 37.595278183442296,
            "unit": "iter/sec",
            "range": "stddev: 0.03187858944963792",
            "extra": "mean: 26.599084999999278 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 17531.53485360963,
            "unit": "iter/sec",
            "range": "stddev: 0.00002255416291994092",
            "extra": "mean: 57.04007141132349 usec\nrounds: 8164"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 1148.8046980099673,
            "unit": "iter/sec",
            "range": "stddev: 0.0002022783391637557",
            "extra": "mean: 870.4699778232659 usec\nrounds: 992"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 1171.7422115877882,
            "unit": "iter/sec",
            "range": "stddev: 0.0001200160543302066",
            "extra": "mean: 853.4300378621112 usec\nrounds: 898"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 20104.238543394236,
            "unit": "iter/sec",
            "range": "stddev: 0.000019879768141159638",
            "extra": "mean: 49.74075480857123 usec\nrounds: 8475"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 35.52824142177447,
            "unit": "iter/sec",
            "range": "stddev: 0.027147739738317807",
            "extra": "mean: 28.146622517238423 msec\nrounds: 29"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 3.3655022215651473,
            "unit": "iter/sec",
            "range": "stddev: 0.0428655124444953",
            "extra": "mean: 297.1324736000156 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 3.2991193999076205,
            "unit": "iter/sec",
            "range": "stddev: 0.04493672806964405",
            "extra": "mean: 303.11118779999333 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 34.66543504667096,
            "unit": "iter/sec",
            "range": "stddev: 0.030500893410892193",
            "extra": "mean: 28.847178714292045 msec\nrounds: 35"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 56311.17786368655,
            "unit": "iter/sec",
            "range": "stddev: 0.00001894219670248689",
            "extra": "mean: 17.758463557994073 usec\nrounds: 23311"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 54446.43591529831,
            "unit": "iter/sec",
            "range": "stddev: 0.000035325858494174226",
            "extra": "mean: 18.366675121870024 usec\nrounds: 30396"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 55301.92012511133,
            "unit": "iter/sec",
            "range": "stddev: 0.000016965351720779916",
            "extra": "mean: 18.08255477816444 usec\nrounds: 31153"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 53811.20355349322,
            "unit": "iter/sec",
            "range": "stddev: 0.00005952177674022938",
            "extra": "mean: 18.58349068527912 usec\nrounds: 30865"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 67.63010622346829,
            "unit": "iter/sec",
            "range": "stddev: 0.02765623736317397",
            "extra": "mean: 14.786314200006245 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 61.91795496981971,
            "unit": "iter/sec",
            "range": "stddev: 0.028537163319308837",
            "extra": "mean: 16.150404200000207 msec\nrounds: 165"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 61.05905823787168,
            "unit": "iter/sec",
            "range": "stddev: 0.029022862360587858",
            "extra": "mean: 16.377586370628844 msec\nrounds: 143"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 64.6094980332017,
            "unit": "iter/sec",
            "range": "stddev: 0.02797262811599095",
            "extra": "mean: 15.47760051449583 msec\nrounds: 138"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 74635.87881080188,
            "unit": "iter/sec",
            "range": "stddev: 0.000014085136426237044",
            "extra": "mean: 13.398381796172707 usec\nrounds: 29851"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 50206.94770442587,
            "unit": "iter/sec",
            "range": "stddev: 0.00002709078638881628",
            "extra": "mean: 19.917562124810217 usec\nrounds: 16000"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 54051.65795330939,
            "unit": "iter/sec",
            "range": "stddev: 0.000010712757487860831",
            "extra": "mean: 18.500820101833224 usec\nrounds: 20834"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 74971.56212426603,
            "unit": "iter/sec",
            "range": "stddev: 0.00001839391984553657",
            "extra": "mean: 13.33839087336197 usec\nrounds: 20577"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 70.02369185090616,
            "unit": "iter/sec",
            "range": "stddev: 0.028032446310470124",
            "extra": "mean: 14.280880850001331 msec\nrounds: 180"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 62.78124722865329,
            "unit": "iter/sec",
            "range": "stddev: 0.028438497061632963",
            "extra": "mean: 15.928323251654056 msec\nrounds: 151"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 61.06014615869316,
            "unit": "iter/sec",
            "range": "stddev: 0.029229002116951907",
            "extra": "mean: 16.377294567900893 msec\nrounds: 162"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 68.98468086415232,
            "unit": "iter/sec",
            "range": "stddev: 0.028333849015965494",
            "extra": "mean: 14.49597196759153 msec\nrounds: 216"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 417596.19666192116,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023841736192036806",
            "extra": "mean: 2.3946578249360426 usec\nrounds: 93458"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 1253.4644659452586,
            "unit": "iter/sec",
            "range": "stddev: 0.00008110540037221249",
            "extra": "mean: 797.7888701024191 usec\nrounds: 970"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 1312.9905632953448,
            "unit": "iter/sec",
            "range": "stddev: 0.00015223294950759256",
            "extra": "mean: 761.6200968651284 usec\nrounds: 1053"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 432845.23904643283,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018362546675902548",
            "extra": "mean: 2.3102945574797613 usec\nrounds: 97088"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 2262.107778336944,
            "unit": "iter/sec",
            "range": "stddev: 0.00009815149296712978",
            "extra": "mean: 442.0655857234087 usec\nrounds: 1849"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 3.884951563430813,
            "unit": "iter/sec",
            "range": "stddev: 0.006834342422698471",
            "extra": "mean: 257.4034665999534 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 3.812095200615678,
            "unit": "iter/sec",
            "range": "stddev: 0.004270416144024764",
            "extra": "mean: 262.3229345999789 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 2200.259203966005,
            "unit": "iter/sec",
            "range": "stddev: 0.00006831297278993826",
            "extra": "mean: 454.4919063160753 usec\nrounds: 1900"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 339326.07514676364,
            "unit": "iter/sec",
            "range": "stddev: 0.000008384203406311833",
            "extra": "mean: 2.9470178487388123 usec\nrounds: 81968"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 1660.8451863722225,
            "unit": "iter/sec",
            "range": "stddev: 0.0000864854268381252",
            "extra": "mean: 602.1030787248125 usec\nrounds: 1410"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 1418.7664333363825,
            "unit": "iter/sec",
            "range": "stddev: 0.00012918651070101665",
            "extra": "mean: 704.8376508657539 usec\nrounds: 1097"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 349831.7047235613,
            "unit": "iter/sec",
            "range": "stddev: 0.00001134439658437012",
            "extra": "mean: 2.858517357053743 usec\nrounds: 106383"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 1692.4505231382266,
            "unit": "iter/sec",
            "range": "stddev: 0.00006916850694124335",
            "extra": "mean: 590.8592223693191 usec\nrounds: 1502"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 4.90355775769764,
            "unit": "iter/sec",
            "range": "stddev: 0.00220771988848232",
            "extra": "mean: 203.93356199999744 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 4.328380821063163,
            "unit": "iter/sec",
            "range": "stddev: 0.006287102251196313",
            "extra": "mean: 231.03327579997313 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 1668.6237819521075,
            "unit": "iter/sec",
            "range": "stddev: 0.00010658836761564759",
            "extra": "mean: 599.2962648717072 usec\nrounds: 1748"
          }
        ]
      }
    ]
  }
}