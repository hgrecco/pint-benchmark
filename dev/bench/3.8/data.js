window.BENCHMARK_DATA = {
  "lastUpdate": 1669518928625,
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
          "id": "8aebabe585453ecfa36ccb87940f1f7f7814e22e",
          "message": "Pint 0.1.2",
          "timestamp": "2022-11-26T23:23:24-03:00",
          "tree_id": "1abcf6f8c92104612e1bcdd5f6eba612b9b42efd",
          "url": "https://github.com/hgrecco/pint-benchmark/commit/8aebabe585453ecfa36ccb87940f1f7f7814e22e"
        },
        "date": 1669516705875,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 7.016934677166748,
            "unit": "iter/sec",
            "range": "stddev: 0.0057983118853767324",
            "extra": "mean: 142.51237128571555 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 25781.785169995685,
            "unit": "iter/sec",
            "range": "stddev: 0.00021057572512993877",
            "extra": "mean: 38.78707364157931 usec\nrounds: 6423"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 38.80970807342947,
            "unit": "iter/sec",
            "range": "stddev: 0.0007028138414674261",
            "extra": "mean: 25.766748827586163 msec\nrounds: 29"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 1516.2285026736208,
            "unit": "iter/sec",
            "range": "stddev: 0.00006697318581359067",
            "extra": "mean: 659.5311974657275 usec\nrounds: 947"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 15174.536806489996,
            "unit": "iter/sec",
            "range": "stddev: 0.000002318644693095242",
            "extra": "mean: 65.89986981166437 usec\nrounds: 11468"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 15068.682974775096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030849791355814364",
            "extra": "mean: 66.36280036377401 usec\nrounds: 4398"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 15170.311491551467,
            "unit": "iter/sec",
            "range": "stddev: 0.000002898512814655713",
            "extra": "mean: 65.9182245899771 usec\nrounds: 11403"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 15042.836228794711,
            "unit": "iter/sec",
            "range": "stddev: 0.000004176253585724224",
            "extra": "mean: 66.47682556603382 usec\nrounds: 11351"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 15140.089940996493,
            "unit": "iter/sec",
            "range": "stddev: 0.000003960631082330327",
            "extra": "mean: 66.04980577375498 usec\nrounds: 10184"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 15609.857486554933,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051157245608185025",
            "extra": "mean: 64.06208390187541 usec\nrounds: 11287"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 15585.203038545571,
            "unit": "iter/sec",
            "range": "stddev: 0.000006194431483166235",
            "extra": "mean: 64.16342459747135 usec\nrounds: 11863"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 15683.393925792932,
            "unit": "iter/sec",
            "range": "stddev: 0.000004943060267889697",
            "extra": "mean: 63.761709023669844 usec\nrounds: 11891"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 15601.337150507625,
            "unit": "iter/sec",
            "range": "stddev: 0.0000046444118907726115",
            "extra": "mean: 64.09707003655534 usec\nrounds: 11751"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 15654.36554854223,
            "unit": "iter/sec",
            "range": "stddev: 0.000004168207353104471",
            "extra": "mean: 63.87994434518122 usec\nrounds: 11751"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 14673.519720661685,
            "unit": "iter/sec",
            "range": "stddev: 0.000004654070549457596",
            "extra": "mean: 68.14997485517442 usec\nrounds: 13124"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 14658.615527352995,
            "unit": "iter/sec",
            "range": "stddev: 0.000004068870586514488",
            "extra": "mean: 68.21926655583529 usec\nrounds: 13228"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 14523.536503085978,
            "unit": "iter/sec",
            "range": "stddev: 0.00000633761519355528",
            "extra": "mean: 68.85375333945137 usec\nrounds: 13176"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 16586830.592806226,
            "unit": "iter/sec",
            "range": "stddev: 4.971970018817969e-9",
            "extra": "mean: 60.28879323282922 nsec\nrounds: 158705"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 15607823.165534174,
            "unit": "iter/sec",
            "range": "stddev: 6.299503312084671e-9",
            "extra": "mean: 64.07043374297717 nsec\nrounds: 153847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 13230805.226996958,
            "unit": "iter/sec",
            "range": "stddev: 4.43677948034262e-9",
            "extra": "mean: 75.58118971918091 nsec\nrounds: 133334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 16959447.305395614,
            "unit": "iter/sec",
            "range": "stddev: 4.361610413063669e-9",
            "extra": "mean: 58.9641856831772 nsec\nrounds: 163935"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 16911474.500332516,
            "unit": "iter/sec",
            "range": "stddev: 6.462447144029894e-9",
            "extra": "mean: 59.131449477073346 nsec\nrounds: 166667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 16605686.04571368,
            "unit": "iter/sec",
            "range": "stddev: 4.909225250861563e-9",
            "extra": "mean: 60.22033641037734 nsec\nrounds: 161291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 40731.64386251415,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018201258564617938",
            "extra": "mean: 24.550936450672264 usec\nrounds: 11377"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 17720.332229742373,
            "unit": "iter/sec",
            "range": "stddev: 0.000002276998256731744",
            "extra": "mean: 56.43235053581941 usec\nrounds: 6627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 40135.041803834916,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071099534722430115",
            "extra": "mean: 24.915882855875076 usec\nrounds: 13334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 17689.07978844733,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018956589321075014",
            "extra": "mean: 56.53205321924639 usec\nrounds: 8418"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 39886.281594753375,
            "unit": "iter/sec",
            "range": "stddev: 0.000004043303523493721",
            "extra": "mean: 25.07127663992473 usec\nrounds: 12988"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 17529.41568930071,
            "unit": "iter/sec",
            "range": "stddev: 0.000002512033348825945",
            "extra": "mean: 57.04696709373844 usec\nrounds: 7962"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 18718.3365113935,
            "unit": "iter/sec",
            "range": "stddev: 0.000006404604488051011",
            "extra": "mean: 53.42355071944127 usec\nrounds: 8547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 51744.569152385164,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015966763972803414",
            "extra": "mean: 19.32569961216703 usec\nrounds: 16502"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 19406.38893569247,
            "unit": "iter/sec",
            "range": "stddev: 0.000002869925604583457",
            "extra": "mean: 51.52942174423742 usec\nrounds: 6926"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 52494.86456467876,
            "unit": "iter/sec",
            "range": "stddev: 0.000001697566989803623",
            "extra": "mean: 19.049482426379118 usec\nrounds: 16502"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 19329.94650887996,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025130098112483323",
            "extra": "mean: 51.73320058286821 usec\nrounds: 7548"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 52123.49677046297,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015445525217979426",
            "extra": "mean: 19.185205559091997 usec\nrounds: 15650"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 40101.608458549956,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018646102116438088",
            "extra": "mean: 24.93665562152265 usec\nrounds: 11287"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 17653.224568280828,
            "unit": "iter/sec",
            "range": "stddev: 0.000002639650187721086",
            "extra": "mean: 56.646874690349314 usec\nrounds: 8475"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 40383.673712111704,
            "unit": "iter/sec",
            "range": "stddev: 0.000001887822098443949",
            "extra": "mean: 24.762482163679035 usec\nrounds: 13680"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 17600.945425520516,
            "unit": "iter/sec",
            "range": "stddev: 0.000004052885054964806",
            "extra": "mean: 56.815129859447694 usec\nrounds: 8540"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 40259.4999281816,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017323614186899347",
            "extra": "mean: 24.838857953623048 usec\nrounds: 13038"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 16945.026278563713,
            "unit": "iter/sec",
            "range": "stddev: 0.000012826498436286069",
            "extra": "mean: 59.01436702196496 usec\nrounds: 7975"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 19137.97628389606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026399699708811487",
            "extra": "mean: 52.25212870816782 usec\nrounds: 8562"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 50605.843403158215,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022731651142715164",
            "extra": "mean: 19.760563854916246 usec\nrounds: 16052"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 19198.710706406484,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023347945363757258",
            "extra": "mean: 52.08683100091229 usec\nrounds: 8432"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 50888.02554380139,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015636840714846188",
            "extra": "mean: 19.650988406678486 usec\nrounds: 16475"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 18908.510894441784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025608961536651435",
            "extra": "mean: 52.886237609221425 usec\nrounds: 8131"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 50421.39054410801,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015956575439708502",
            "extra": "mean: 19.832852470127975 usec\nrounds: 16234"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 39144.35228193729,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017954008083940907",
            "extra": "mean: 25.54646945739446 usec\nrounds: 9364"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 17467.81618675573,
            "unit": "iter/sec",
            "range": "stddev: 0.00000225485392904419",
            "extra": "mean: 57.248140769778075 usec\nrounds: 8418"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 39206.00663410469,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016559700743156578",
            "extra": "mean: 25.506295740156197 usec\nrounds: 9390"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 17262.136085179227,
            "unit": "iter/sec",
            "range": "stddev: 0.000004222435069686923",
            "extra": "mean: 57.93025817115248 usec\nrounds: 8475"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 39540.81908352093,
            "unit": "iter/sec",
            "range": "stddev: 0.000001948777456263877",
            "extra": "mean: 25.29032081727313 usec\nrounds: 13263"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 17138.761926185605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031166497740195197",
            "extra": "mean: 58.347271775339934 usec\nrounds: 8117"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 18888.32233599164,
            "unit": "iter/sec",
            "range": "stddev: 0.00000286548562294498",
            "extra": "mean: 52.94276443464241 usec\nrounds: 8244"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 49928.774368494625,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019096810366131184",
            "extra": "mean: 20.028530895222744 usec\nrounds: 15504"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 18943.515462969415,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033908332523729216",
            "extra": "mean: 52.788512351616546 usec\nrounds: 8258"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 50203.24158319421,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014996099526209506",
            "extra": "mean: 19.919032486036816 usec\nrounds: 16130"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 18989.175722688262,
            "unit": "iter/sec",
            "range": "stddev: 0.000003957130258423347",
            "extra": "mean: 52.661580186716606 usec\nrounds: 6753"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 48448.41772016686,
            "unit": "iter/sec",
            "range": "stddev: 0.000003846187571330804",
            "extra": "mean: 20.640508958948846 usec\nrounds: 16129"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 40288.88796442806,
            "unit": "iter/sec",
            "range": "stddev: 0.000003175568392329188",
            "extra": "mean: 24.820739675985145 usec\nrounds: 13948"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 17683.701266786516,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027199016284403923",
            "extra": "mean: 56.549247519703215 usec\nrounds: 7862"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 40821.183096460394,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017834783864530575",
            "extra": "mean: 24.497085193170452 usec\nrounds: 9320"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 17727.953720240464,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031593128271948735",
            "extra": "mean: 56.40808949417969 usec\nrounds: 8224"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 40315.99978887926,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014142721566769794",
            "extra": "mean: 24.804048150527063 usec\nrounds: 11111"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 17617.77004319489,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025474601493126262",
            "extra": "mean: 56.76087254790023 usec\nrounds: 8411"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 19242.02030272708,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032877948874072876",
            "extra": "mean: 51.969594890110095 usec\nrounds: 8689"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 52127.705305854506,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011899241851848819",
            "extra": "mean: 19.18365663964282 usec\nrounds: 16921"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 19397.23115143953,
            "unit": "iter/sec",
            "range": "stddev: 0.000003056939424719419",
            "extra": "mean: 51.55374971781923 usec\nrounds: 7975"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 52268.20560509399,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015807490642983738",
            "extra": "mean: 19.13208973645235 usec\nrounds: 17986"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 19358.854131144508,
            "unit": "iter/sec",
            "range": "stddev: 0.000003024533293202648",
            "extra": "mean: 51.655949945467114 usec\nrounds: 8251"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 53080.942784416286,
            "unit": "iter/sec",
            "range": "stddev: 0.000001924266081354424",
            "extra": "mean: 18.839152952904673 usec\nrounds: 16103"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 40830.911503069656,
            "unit": "iter/sec",
            "range": "stddev: 0.000002321316986859976",
            "extra": "mean: 24.49124849747281 usec\nrounds: 13477"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 17032.16662865192,
            "unit": "iter/sec",
            "range": "stddev: 0.000012305172659911177",
            "extra": "mean: 58.71243640358566 usec\nrounds: 6840"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 40359.38301581004,
            "unit": "iter/sec",
            "range": "stddev: 0.00000200255007931855",
            "extra": "mean: 24.777385709991368 usec\nrounds: 13352"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 17751.349726704255,
            "unit": "iter/sec",
            "range": "stddev: 0.000003816694294905182",
            "extra": "mean: 56.333744498067624 usec\nrounds: 8497"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 40248.54324074127,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024725375191190982",
            "extra": "mean: 24.845619728859102 usec\nrounds: 13351"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 17342.02526228265,
            "unit": "iter/sec",
            "range": "stddev: 0.000002726966755256349",
            "extra": "mean: 57.66339195543156 usec\nrounds: 8279"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 19302.891484483578,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034221266019939005",
            "extra": "mean: 51.805710082545886 usec\nrounds: 8599"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 52134.523498115566,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017866544743347273",
            "extra": "mean: 19.18114778657458 usec\nrounds: 16287"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 19246.698020848267,
            "unit": "iter/sec",
            "range": "stddev: 0.000002787556563460874",
            "extra": "mean: 51.95696419805554 usec\nrounds: 8547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 51102.542747623054,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011454522625253884",
            "extra": "mean: 19.568497891360078 usec\nrounds: 15650"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 18857.0604071566,
            "unit": "iter/sec",
            "range": "stddev: 0.000003162166095594017",
            "extra": "mean: 53.03053489824329 usec\nrounds: 8052"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 52178.005415183354,
            "unit": "iter/sec",
            "range": "stddev: 0.00000220403577282355",
            "extra": "mean: 19.16516340636142 usec\nrounds: 16921"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 39578.47282690776,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020357440508746845",
            "extra": "mean: 25.266260382844823 usec\nrounds: 12954"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 17252.658189661626,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031768403516739902",
            "extra": "mean: 57.96208265455776 usec\nrounds: 8348"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 39771.02564812246,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023648777664614627",
            "extra": "mean: 25.14393289344824 usec\nrounds: 14246"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 17323.341783888976,
            "unit": "iter/sec",
            "range": "stddev: 0.000003275059759843389",
            "extra": "mean: 57.72558277006451 usec\nrounds: 8137"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 39809.8908585915,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020459075353232973",
            "extra": "mean: 25.119385620827114 usec\nrounds: 13158"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 17370.640787411237,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030127169599507786",
            "extra": "mean: 57.56840016660266 usec\nrounds: 8404"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 18966.32386296672,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033835053672437523",
            "extra": "mean: 52.72503028130721 usec\nrounds: 8355"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 50119.55063432799,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013265440721146579",
            "extra": "mean: 19.95229381236866 usec\nrounds: 14642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 19082.387152237803,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030095035823521923",
            "extra": "mean: 52.404345013130566 usec\nrounds: 8362"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 50250.1701356246,
            "unit": "iter/sec",
            "range": "stddev: 0.000001966283076720217",
            "extra": "mean: 19.900430133888346 usec\nrounds: 16367"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 18803.856158774535,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032946900304351657",
            "extra": "mean: 53.180581235905976 usec\nrounds: 8026"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 50218.23474224357,
            "unit": "iter/sec",
            "range": "stddev: 0.000001947967155300288",
            "extra": "mean: 19.913085458553567 usec\nrounds: 15528"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 183067.02203858003,
            "unit": "iter/sec",
            "range": "stddev: 8.993275289601444e-7",
            "extra": "mean: 5.46248029199523 usec\nrounds: 64517"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 174188.90088688128,
            "unit": "iter/sec",
            "range": "stddev: 9.497195794486384e-7",
            "extra": "mean: 5.740893908328881 usec\nrounds: 59524"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 174911.41716275227,
            "unit": "iter/sec",
            "range": "stddev: 6.646395339404754e-7",
            "extra": "mean: 5.717179679983474 usec\nrounds: 31250"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 175220.79037715917,
            "unit": "iter/sec",
            "range": "stddev: 8.344836087345334e-7",
            "extra": "mean: 5.707085317030705 usec\nrounds: 57468"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 181809.2999004769,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010499358968404361",
            "extra": "mean: 5.5002686911362835 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 173128.6390215743,
            "unit": "iter/sec",
            "range": "stddev: 8.577581246188824e-7",
            "extra": "mean: 5.77605187478766 usec\nrounds: 58140"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 176768.9398263405,
            "unit": "iter/sec",
            "range": "stddev: 9.366674700703338e-7",
            "extra": "mean: 5.65710243543017 usec\nrounds: 59169"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 182428.70460769578,
            "unit": "iter/sec",
            "range": "stddev: 8.878156981964781e-7",
            "extra": "mean: 5.481593492375294 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 176495.68719885885,
            "unit": "iter/sec",
            "range": "stddev: 8.611211532351542e-7",
            "extra": "mean: 5.665860825671584 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 183576.7659994512,
            "unit": "iter/sec",
            "range": "stddev: 9.466293352767897e-7",
            "extra": "mean: 5.447312433878422 usec\nrounds: 67115"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 169738.3673014534,
            "unit": "iter/sec",
            "range": "stddev: 8.686903975795857e-7",
            "extra": "mean: 5.891419929967933 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 178761.76017292595,
            "unit": "iter/sec",
            "range": "stddev: 8.982987283198471e-7",
            "extra": "mean: 5.594037556089432 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 182856.61295083948,
            "unit": "iter/sec",
            "range": "stddev: 8.933187375762794e-7",
            "extra": "mean: 5.468765848073798 usec\nrounds: 68494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 177830.10240863482,
            "unit": "iter/sec",
            "range": "stddev: 9.700224242827462e-7",
            "extra": "mean: 5.623344903114916 usec\nrounds: 20081"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 181915.5840407632,
            "unit": "iter/sec",
            "range": "stddev: 9.154324073635198e-7",
            "extra": "mean: 5.4970551603535105 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 173430.90593776363,
            "unit": "iter/sec",
            "range": "stddev: 9.574252708854121e-7",
            "extra": "mean: 5.765984987467308 usec\nrounds: 56819"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 181434.00285080046,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010160521568146017",
            "extra": "mean: 5.511646021624376 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 173238.15700824317,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010192222281223318",
            "extra": "mean: 5.772400360691998 usec\nrounds: 59881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 177146.33812319383,
            "unit": "iter/sec",
            "range": "stddev: 9.521630542454387e-7",
            "extra": "mean: 5.645050361157139 usec\nrounds: 58140"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 183306.00086734185,
            "unit": "iter/sec",
            "range": "stddev: 6.540469069356688e-7",
            "extra": "mean: 5.455358773135299 usec\nrounds: 55556"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 175939.2822824626,
            "unit": "iter/sec",
            "range": "stddev: 8.730272909676316e-7",
            "extra": "mean: 5.683779011866974 usec\nrounds: 57804"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 180753.59367846377,
            "unit": "iter/sec",
            "range": "stddev: 8.971890836876481e-7",
            "extra": "mean: 5.532393462554691 usec\nrounds: 19763"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 172681.98273107788,
            "unit": "iter/sec",
            "range": "stddev: 9.654046617407335e-7",
            "extra": "mean: 5.7909921126938055 usec\nrounds: 54645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 180922.14600520872,
            "unit": "iter/sec",
            "range": "stddev: 9.715976603763858e-7",
            "extra": "mean: 5.5272393240969535 usec\nrounds: 58824"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 182000.5895506923,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010905613711791544",
            "extra": "mean: 5.494487696269093 usec\nrounds: 68028"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 174220.86466449147,
            "unit": "iter/sec",
            "range": "stddev: 9.954301522178704e-7",
            "extra": "mean: 5.739840643804435 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 177798.62026058984,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010014775176645077",
            "extra": "mean: 5.624340608123696 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 169445.93790964587,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016510088009362396",
            "extra": "mean: 5.9015873283030995 usec\nrounds: 58824"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 179988.64805631203,
            "unit": "iter/sec",
            "range": "stddev: 9.136174683727978e-7",
            "extra": "mean: 5.555905946285765 usec\nrounds: 64931"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 174911.39563861853,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011711935010110825",
            "extra": "mean: 5.717180383524485 usec\nrounds: 57472"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 175362.20838849197,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010724891156077435",
            "extra": "mean: 5.702482930556116 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 183802.03953608227,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011255857527453035",
            "extra": "mean: 5.440636037140869 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 175528.46567179408,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010141090746452604",
            "extra": "mean: 5.697081645263258 usec\nrounds: 59881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 181834.1765113863,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010090319526396647",
            "extra": "mean: 5.499516203090572 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 171773.9465310625,
            "unit": "iter/sec",
            "range": "stddev: 8.320452672470759e-7",
            "extra": "mean: 5.8216046158034 usec\nrounds: 59881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 181628.15148311525,
            "unit": "iter/sec",
            "range": "stddev: 9.271254104553006e-7",
            "extra": "mean: 5.505754431977266 usec\nrounds: 62500"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 133629.41488275374,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032147148709501807",
            "extra": "mean: 7.4833823142711395 usec\nrounds: 42554"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 144311.97672495455,
            "unit": "iter/sec",
            "range": "stddev: 9.926223236738204e-7",
            "extra": "mean: 6.929431795573756 usec\nrounds: 37175"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 143571.42254956203,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011447227006913447",
            "extra": "mean: 6.965174421495976 usec\nrounds: 42919"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 146559.7982134796,
            "unit": "iter/sec",
            "range": "stddev: 9.596866137085474e-7",
            "extra": "mean: 6.823153499047507 usec\nrounds: 45870"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 148265.30851575822,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013823657751044073",
            "extra": "mean: 6.74466609897295 usec\nrounds: 38167"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 146170.71198205696,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010967631074452392",
            "extra": "mean: 6.841315790558331 usec\nrounds: 47617"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 145749.8639969078,
            "unit": "iter/sec",
            "range": "stddev: 7.075986844739858e-7",
            "extra": "mean: 6.8610698670786805 usec\nrounds: 48077"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 146805.37019001556,
            "unit": "iter/sec",
            "range": "stddev: 9.515358481098832e-7",
            "extra": "mean: 6.8117399159558225 usec\nrounds: 48542"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 145795.64311506526,
            "unit": "iter/sec",
            "range": "stddev: 9.095215567907902e-7",
            "extra": "mean: 6.858915524730578 usec\nrounds: 51814"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 145492.08332891655,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010975735316814697",
            "extra": "mean: 6.873226206674643 usec\nrounds: 42554"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 146179.49161889192,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011006073837974255",
            "extra": "mean: 6.840904896612475 usec\nrounds: 46297"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 142716.06674185206,
            "unit": "iter/sec",
            "range": "stddev: 8.992638050648008e-7",
            "extra": "mean: 7.006919562944667 usec\nrounds: 45663"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 144289.56327837636,
            "unit": "iter/sec",
            "range": "stddev: 0.000001018584755956784",
            "extra": "mean: 6.930508189776071 usec\nrounds: 46949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 135803.9531374693,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035431852093262735",
            "extra": "mean: 7.363555897284795 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 147201.35321827873,
            "unit": "iter/sec",
            "range": "stddev: 0.000001139948127396938",
            "extra": "mean: 6.793415808597506 usec\nrounds: 48075"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 147563.77927579742,
            "unit": "iter/sec",
            "range": "stddev: 0.000001027543327988531",
            "extra": "mean: 6.7767307459034045 usec\nrounds: 47847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 144115.44309260085,
            "unit": "iter/sec",
            "range": "stddev: 0.00000113175494002785",
            "extra": "mean: 6.93888162531932 usec\nrounds: 47620"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 142777.7160219331,
            "unit": "iter/sec",
            "range": "stddev: 9.276459997064064e-7",
            "extra": "mean: 7.0038940799864235 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 146544.64308783767,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010104346422426726",
            "extra": "mean: 6.823859125308376 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 146690.8514849663,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012851026822184057",
            "extra": "mean: 6.817057709304289 usec\nrounds: 48779"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 148435.16057725876,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011892607043203912",
            "extra": "mean: 6.7369482817348505 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 145073.71720257486,
            "unit": "iter/sec",
            "range": "stddev: 9.681530141287735e-7",
            "extra": "mean: 6.893047336780114 usec\nrounds: 46729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 144010.39083124703,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010526605964057418",
            "extra": "mean: 6.943943379556625 usec\nrounds: 48781"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 141615.0223079274,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010274486030086869",
            "extra": "mean: 7.061397750766878 usec\nrounds: 47394"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 142981.76138244206,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011409760440166665",
            "extra": "mean: 6.993899014331197 usec\nrounds: 45046"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 140046.9933084483,
            "unit": "iter/sec",
            "range": "stddev: 8.922086498650058e-7",
            "extra": "mean: 7.140460329609056 usec\nrounds: 37736"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 143508.72209284507,
            "unit": "iter/sec",
            "range": "stddev: 0.000001019691933369216",
            "extra": "mean: 6.968217578810543 usec\nrounds: 41493"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 146498.47755438992,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010715733113868337",
            "extra": "mean: 6.826009503264182 usec\nrounds: 43669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 143687.74629064082,
            "unit": "iter/sec",
            "range": "stddev: 9.98056142893056e-7",
            "extra": "mean: 6.959535700262671 usec\nrounds: 43291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 145718.49817803275,
            "unit": "iter/sec",
            "range": "stddev: 7.561324074706155e-7",
            "extra": "mean: 6.8625467082308385 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 144767.69089574937,
            "unit": "iter/sec",
            "range": "stddev: 0.000001003649704440839",
            "extra": "mean: 6.907618639300695 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 142795.35380129708,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010487955768087986",
            "extra": "mean: 7.003028973838479 usec\nrounds: 45455"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 146270.9185022529,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010650133906877345",
            "extra": "mean: 6.836628977513379 usec\nrounds: 46512"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 141517.81783639692,
            "unit": "iter/sec",
            "range": "stddev: 7.929858308067746e-7",
            "extra": "mean: 7.0662480194265 usec\nrounds: 44053"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 146775.58802359874,
            "unit": "iter/sec",
            "range": "stddev: 8.863596555548631e-7",
            "extra": "mean: 6.813122082939425 usec\nrounds: 47394"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 143342.15264570466,
            "unit": "iter/sec",
            "range": "stddev: 8.834341666196862e-7",
            "extra": "mean: 6.9763149327865595 usec\nrounds: 29673"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 551174.5460124377,
            "unit": "iter/sec",
            "range": "stddev: 4.3190450753697086e-7",
            "extra": "mean: 1.8143072956374047 usec\nrounds: 7758"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 30094.423827392715,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022066453467652677",
            "extra": "mean: 33.22874715048621 usec\nrounds: 13423"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 556721.9702527097,
            "unit": "iter/sec",
            "range": "stddev: 4.47081658198919e-7",
            "extra": "mean: 1.7962287343286911 usec\nrounds: 172414"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 30021.90882391461,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024026313191018624",
            "extra": "mean: 33.309007960327556 usec\nrounds: 13316"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 556059.9992221689,
            "unit": "iter/sec",
            "range": "stddev: 5.012020967129795e-7",
            "extra": "mean: 1.7983670852045208 usec\nrounds: 169492"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 30247.5675417956,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025569673900622776",
            "extra": "mean: 33.06050969613395 usec\nrounds: 13459"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 31648.931644306318,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028522750098994864",
            "extra": "mean: 31.59664317389056 usec\nrounds: 14430"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 562812.1836068246,
            "unit": "iter/sec",
            "range": "stddev: 4.7636032754591875e-7",
            "extra": "mean: 1.7767916706980722 usec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 31648.885836170175,
            "unit": "iter/sec",
            "range": "stddev: 0.000002491462221136477",
            "extra": "mean: 31.59668890641143 usec\nrounds: 13909"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 560560.9038080334,
            "unit": "iter/sec",
            "range": "stddev: 4.698620575748455e-7",
            "extra": "mean: 1.7839274790780886 usec\nrounds: 175439"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 31116.732692927126,
            "unit": "iter/sec",
            "range": "stddev: 0.000002590764712080419",
            "extra": "mean: 32.13705018031348 usec\nrounds: 13870"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 559217.5288183492,
            "unit": "iter/sec",
            "range": "stddev: 4.603916931224955e-7",
            "extra": "mean: 1.788212901897126 usec\nrounds: 185151"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 553827.9693992485,
            "unit": "iter/sec",
            "range": "stddev: 4.5775507750517794e-7",
            "extra": "mean: 1.8056148393601823 usec\nrounds: 136987"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 29796.78515117907,
            "unit": "iter/sec",
            "range": "stddev: 0.000002659811755521283",
            "extra": "mean: 33.56066753263245 usec\nrounds: 13090"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 550499.7261123431,
            "unit": "iter/sec",
            "range": "stddev: 5.078186964670697e-7",
            "extra": "mean: 1.816531330654877 usec\nrounds: 185186"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 30462.619771423444,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026562408497369516",
            "extra": "mean: 32.82711754614375 usec\nrounds: 13986"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 554141.3804386484,
            "unit": "iter/sec",
            "range": "stddev: 4.813573044545003e-7",
            "extra": "mean: 1.8045936205096573 usec\nrounds: 178572"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 30208.46162774555,
            "unit": "iter/sec",
            "range": "stddev: 0.000002528764384718858",
            "extra": "mean: 33.10330768653014 usec\nrounds: 13387"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 31436.946023330736,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024918195611376176",
            "extra": "mean: 31.809705664725072 usec\nrounds: 14599"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 551686.0114518359,
            "unit": "iter/sec",
            "range": "stddev: 5.58681436683035e-7",
            "extra": "mean: 1.812625260097434 usec\nrounds: 175439"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 31561.868678720588,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023489784762683944",
            "extra": "mean: 31.68380206442633 usec\nrounds: 13176"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 549262.3751615081,
            "unit": "iter/sec",
            "range": "stddev: 5.439723878116376e-7",
            "extra": "mean: 1.8206235220571128 usec\nrounds: 169492"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 31232.16658039133,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027101263166728413",
            "extra": "mean: 32.018271848864806 usec\nrounds: 13662"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 548214.0704211331,
            "unit": "iter/sec",
            "range": "stddev: 4.290767750296196e-7",
            "extra": "mean: 1.8241049508849874 usec\nrounds: 172414"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 555933.0902862137,
            "unit": "iter/sec",
            "range": "stddev: 5.005857698221881e-7",
            "extra": "mean: 1.798777618157547 usec\nrounds: 185186"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 30075.897442508165,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023308158696057514",
            "extra": "mean: 33.2492156522198 usec\nrounds: 13851"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 563271.426240128,
            "unit": "iter/sec",
            "range": "stddev: 5.203623771048187e-7",
            "extra": "mean: 1.7753430289817158 usec\nrounds: 172414"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 30170.88199384762,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023013872530483896",
            "extra": "mean: 33.14453983161373 usec\nrounds: 13532"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 557118.6984511,
            "unit": "iter/sec",
            "range": "stddev: 5.779023371776382e-7",
            "extra": "mean: 1.7949496270367469 usec\nrounds: 172414"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 30193.1173726645,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025207220827100196",
            "extra": "mean: 33.120130911204136 usec\nrounds: 12772"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 31365.2887532923,
            "unit": "iter/sec",
            "range": "stddev: 0.000002550360498727917",
            "extra": "mean: 31.882378251500505 usec\nrounds: 14493"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 558363.0849323507,
            "unit": "iter/sec",
            "range": "stddev: 5.579588837973821e-7",
            "extra": "mean: 1.7909493427939573 usec\nrounds: 188680"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 31589.425181230235,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029047343508669185",
            "extra": "mean: 31.656163233833666 usec\nrounds: 14225"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 559454.5398826275,
            "unit": "iter/sec",
            "range": "stddev: 5.335867597290983e-7",
            "extra": "mean: 1.787455331419418 usec\nrounds: 185186"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 30682.343261853413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031048780638836623",
            "extra": "mean: 32.592034821645285 usec\nrounds: 13124"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 553204.8014440306,
            "unit": "iter/sec",
            "range": "stddev: 4.571383385036755e-7",
            "extra": "mean: 1.8076488081623654 usec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 15388.686386874588,
            "unit": "iter/sec",
            "range": "stddev: 0.000004263705377647479",
            "extra": "mean: 64.98280456562726 usec\nrounds: 10776"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 16080.450194854342,
            "unit": "iter/sec",
            "range": "stddev: 0.000003848337903171145",
            "extra": "mean: 62.18731365618076 usec\nrounds: 13298"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 13307.80754213578,
            "unit": "iter/sec",
            "range": "stddev: 0.000004956215527886911",
            "extra": "mean: 75.14385798214732 usec\nrounds: 10041"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 12474.960293308606,
            "unit": "iter/sec",
            "range": "stddev: 0.000009582394164342693",
            "extra": "mean: 80.1605757844685 usec\nrounds: 11249"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 415158.9888322643,
            "unit": "iter/sec",
            "range": "stddev: 4.6251419128445006e-7",
            "extra": "mean: 2.408715761671796 usec\nrounds: 59524"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 416391.97922545316,
            "unit": "iter/sec",
            "range": "stddev: 3.481041490335907e-7",
            "extra": "mean: 2.4015832434143873 usec\nrounds: 101011"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 317847.3667555778,
            "unit": "iter/sec",
            "range": "stddev: 4.255089037388869e-7",
            "extra": "mean: 3.1461641800197526 usec\nrounds: 100000"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 317303.03539825097,
            "unit": "iter/sec",
            "range": "stddev: 5.579766326980553e-7",
            "extra": "mean: 3.1515614048409195 usec\nrounds: 107516"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 148087.21495125417,
            "unit": "iter/sec",
            "range": "stddev: 7.248011365954337e-7",
            "extra": "mean: 6.752777411130122 usec\nrounds: 22728"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 148939.80648662854,
            "unit": "iter/sec",
            "range": "stddev: 6.615344061335404e-7",
            "extra": "mean: 6.714121789125445 usec\nrounds: 33558"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 119110.51815731512,
            "unit": "iter/sec",
            "range": "stddev: 8.571933104590174e-7",
            "extra": "mean: 8.395564182495209 usec\nrounds: 35212"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 119521.64567220898,
            "unit": "iter/sec",
            "range": "stddev: 9.444715723416192e-7",
            "extra": "mean: 8.366685334491832 usec\nrounds: 35212"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 150672.03535957128,
            "unit": "iter/sec",
            "range": "stddev: 7.31130065924405e-7",
            "extra": "mean: 6.636931648354986 usec\nrounds: 21009"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 150582.61908841928,
            "unit": "iter/sec",
            "range": "stddev: 5.554369468643347e-7",
            "extra": "mean: 6.640872672116421 usec\nrounds: 31949"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 134960.55493802694,
            "unit": "iter/sec",
            "range": "stddev: 9.738639345675088e-7",
            "extra": "mean: 7.409572378086278 usec\nrounds: 34603"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 135885.6562739202,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011394551783711799",
            "extra": "mean: 7.359128457121229 usec\nrounds: 34603"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 7672.005779443726,
            "unit": "iter/sec",
            "range": "stddev: 0.00003743916758613165",
            "extra": "mean: 130.34401025601247 usec\nrounds: 1560"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 5788.622807124885,
            "unit": "iter/sec",
            "range": "stddev: 0.000007319592624640195",
            "extra": "mean: 172.75266213047377 usec\nrounds: 2131"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 6045.714610580816,
            "unit": "iter/sec",
            "range": "stddev: 0.000007664016377635903",
            "extra": "mean: 165.40641833305614 usec\nrounds: 2400"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 8201.752412291718,
            "unit": "iter/sec",
            "range": "stddev: 0.000006199951026758305",
            "extra": "mean: 121.92516302995568 usec\nrounds: 2429"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 189.9730694177956,
            "unit": "iter/sec",
            "range": "stddev: 0.00005761767676387226",
            "extra": "mean: 5.263903999996779 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 156.58110031471236,
            "unit": "iter/sec",
            "range": "stddev: 0.011584150823205321",
            "extra": "mean: 6.3864668085107335 msec\nrounds: 94"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 159.43779206812417,
            "unit": "iter/sec",
            "range": "stddev: 0.011265933781610511",
            "extra": "mean: 6.272038686867431 msec\nrounds: 99"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 159.41937425952867,
            "unit": "iter/sec",
            "range": "stddev: 0.011294215855374433",
            "extra": "mean: 6.272763298970412 msec\nrounds: 97"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 7720.805331259988,
            "unit": "iter/sec",
            "range": "stddev: 0.000006346509177092762",
            "extra": "mean: 129.52016753371583 usec\nrounds: 2692"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 5791.8451369479335,
            "unit": "iter/sec",
            "range": "stddev: 0.000008171128472215258",
            "extra": "mean: 172.65655008983188 usec\nrounds: 2236"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 5952.397524215742,
            "unit": "iter/sec",
            "range": "stddev: 0.000005808688646572943",
            "extra": "mean: 167.99953227783706 usec\nrounds: 2401"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 8137.9033108933245,
            "unit": "iter/sec",
            "range": "stddev: 0.0000047428332451490074",
            "extra": "mean: 122.88177455505142 usec\nrounds: 2586"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 131.91086313204076,
            "unit": "iter/sec",
            "range": "stddev: 0.016304832947160376",
            "extra": "mean: 7.580876784946931 msec\nrounds: 93"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 157.0185393032231,
            "unit": "iter/sec",
            "range": "stddev: 0.011398941901175652",
            "extra": "mean: 6.368674708334095 msec\nrounds: 96"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 157.0253705269938,
            "unit": "iter/sec",
            "range": "stddev: 0.011473635016647164",
            "extra": "mean: 6.368397645831969 msec\nrounds: 96"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 159.99637376384126,
            "unit": "iter/sec",
            "range": "stddev: 0.011322009258040099",
            "extra": "mean: 6.250141653060373 msec\nrounds: 98"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 150917.81831608497,
            "unit": "iter/sec",
            "range": "stddev: 8.438640433314168e-7",
            "extra": "mean: 6.626122820736661 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 145916.10025619992,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010453269958148162",
            "extra": "mean: 6.853253330127361 usec\nrounds: 54052"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 147613.1273250111,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010114979301703234",
            "extra": "mean: 6.774465239790114 usec\nrounds: 44246"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 151057.19197743564,
            "unit": "iter/sec",
            "range": "stddev: 9.903530708908806e-7",
            "extra": "mean: 6.620009195916843 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 131843.73850402725,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015956774300090826",
            "extra": "mean: 7.584736380707639 usec\nrounds: 45046"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 129338.48602420374,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011400244615827953",
            "extra": "mean: 7.731650730880406 usec\nrounds: 46729"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 129474.14235322847,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010239850450358925",
            "extra": "mean: 7.723549905986805 usec\nrounds: 46297"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 130594.54415098888,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014981644960257478",
            "extra": "mean: 7.657287725923946 usec\nrounds: 48077"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 109821.83386517197,
            "unit": "iter/sec",
            "range": "stddev: 9.679362319897746e-7",
            "extra": "mean: 9.105657452667362 usec\nrounds: 22321"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 108925.75692430059,
            "unit": "iter/sec",
            "range": "stddev: 0.000014000636375323453",
            "extra": "mean: 9.180565076953869 usec\nrounds: 33445"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 111125.2575887248,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012984497896555487",
            "extra": "mean: 8.998854281184261 usec\nrounds: 35843"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 112336.45382106933,
            "unit": "iter/sec",
            "range": "stddev: 0.000001258361959145726",
            "extra": "mean: 8.901829868982782 usec\nrounds: 15106"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 95516.9265503394,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011268581670663944",
            "extra": "mean: 10.469348586849465 usec\nrounds: 28409"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 96424.05836732395,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012693135171032657",
            "extra": "mean: 10.370855748370769 usec\nrounds: 32679"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 95881.12943381227,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011280923128489651",
            "extra": "mean: 10.429580939493524 usec\nrounds: 26526"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 91309.12744873742,
            "unit": "iter/sec",
            "range": "stddev: 0.000014710677740057546",
            "extra": "mean: 10.951807644437496 usec\nrounds: 34483"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 73704.12607783724,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016051944229039946",
            "extra": "mean: 13.567761443150726 usec\nrounds: 11863"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 18120.953145853095,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036678443052468054",
            "extra": "mean: 55.18473514892598 usec\nrounds: 7491"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 18331.621692277175,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028859767887435514",
            "extra": "mean: 54.55054750673173 usec\nrounds: 9125"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 73619.04155201143,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015165573804202941",
            "extra": "mean: 13.583442257849903 usec\nrounds: 20834"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 67548.58329941527,
            "unit": "iter/sec",
            "range": "stddev: 0.000001434637370118591",
            "extra": "mean: 14.804159482774176 usec\nrounds: 22272"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 16583.663823649225,
            "unit": "iter/sec",
            "range": "stddev: 0.000006963760577379624",
            "extra": "mean: 60.30030580901818 usec\nrounds: 8211"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 16721.78460966441,
            "unit": "iter/sec",
            "range": "stddev: 0.000006598685812014788",
            "extra": "mean: 59.80222944757025 usec\nrounds: 7043"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 67125.40504872854,
            "unit": "iter/sec",
            "range": "stddev: 0.000001335777973446842",
            "extra": "mean: 14.897489248281884 usec\nrounds: 23810"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 523939.26333493186,
            "unit": "iter/sec",
            "range": "stddev: 3.345504149151204e-7",
            "extra": "mean: 1.9086181738602455 usec\nrounds: 40817"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 60639.57788547828,
            "unit": "iter/sec",
            "range": "stddev: 0.000001762090766378236",
            "extra": "mean: 16.490879964378447 usec\nrounds: 2241"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 31149.266566711038,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021613191218436043",
            "extra": "mean: 32.1034846152266 usec\nrounds: 2210"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 521584.43030728766,
            "unit": "iter/sec",
            "range": "stddev: 5.998947531558241e-7",
            "extra": "mean: 1.9172351433321297 usec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 445692.9705132555,
            "unit": "iter/sec",
            "range": "stddev: 6.342064543821075e-7",
            "extra": "mean: 2.2436970429405925 usec\nrounds: 100001"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 55319.37466151456,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021985452414013355",
            "extra": "mean: 18.076849315791264 usec\nrounds: 73"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 30777.610314380476,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027114019887564733",
            "extra": "mean: 32.49115151518966 usec\nrounds: 99"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 445989.4761539162,
            "unit": "iter/sec",
            "range": "stddev: 6.396890950712578e-7",
            "extra": "mean: 2.2422053735969505 usec\nrounds: 166667"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 94344.10437491932,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014706995474673959",
            "extra": "mean: 10.599496456355599 usec\nrounds: 31747"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 93856.13099616775,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010967917627445394",
            "extra": "mean: 10.654604972378749 usec\nrounds: 33223"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 93605.52033963146,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013133753074213577",
            "extra": "mean: 10.68313061421669 usec\nrounds: 30770"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 93750.09667009556,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013195034205187528",
            "extra": "mean: 10.666655667769358 usec\nrounds: 30488"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 84075.25340911241,
            "unit": "iter/sec",
            "range": "stddev: 0.000002119113178310964",
            "extra": "mean: 11.89410628516305 usec\nrounds: 27398"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 86388.05420795904,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014562905909508653",
            "extra": "mean: 11.57567454399116 usec\nrounds: 28901"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 86867.21794081038,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012679258215659291",
            "extra": "mean: 11.511822569031512 usec\nrounds: 29155"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 85685.41587966336,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020806380623983967",
            "extra": "mean: 11.670597495895922 usec\nrounds: 26596"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 62392.13864788542,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015894213168624896",
            "extra": "mean: 16.027660241678408 usec\nrounds: 19455"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 63019.39267597111,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018135859494244747",
            "extra": "mean: 15.86813134080382 usec\nrounds: 20877"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 60471.19728649846,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014724093937519465",
            "extra": "mean: 16.53679842425201 usec\nrounds: 21322"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 61735.77651194091,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013124075576724054",
            "extra": "mean: 16.198063043826465 usec\nrounds: 23095"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 57920.61524689438,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017889023641381018",
            "extra": "mean: 17.26500997507306 usec\nrounds: 12331"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 57457.870620299924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014296694900406674",
            "extra": "mean: 17.404056036262144 usec\nrounds: 20576"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 57852.547662297504,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019688107643667087",
            "extra": "mean: 17.285323471617826 usec\nrounds: 12675"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 58025.66410445183,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017398332003059659",
            "extra": "mean: 17.23375364045645 usec\nrounds: 20121"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 104172.66094491867,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011592201586941519",
            "extra": "mean: 9.599447599104243 usec\nrounds: 32051"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 102996.75903916745,
            "unit": "iter/sec",
            "range": "stddev: 0.000001078909391805299",
            "extra": "mean: 9.709043365332706 usec\nrounds: 33898"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 103478.89095009152,
            "unit": "iter/sec",
            "range": "stddev: 0.000001287411099096223",
            "extra": "mean: 9.663806703169113 usec\nrounds: 29240"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 105070.94505265355,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011986470680223408",
            "extra": "mean: 9.517378943330872 usec\nrounds: 34013"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 99072.40697595575,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011182900358289095",
            "extra": "mean: 10.093627787227314 usec\nrounds: 32468"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 98666.2452511343,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011833120507324189",
            "extra": "mean: 10.13517842352984 usec\nrounds: 28012"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 99671.83205454632,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013368818356149801",
            "extra": "mean: 10.032924843327258 usec\nrounds: 31747"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 99790.9683172571,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013676412386856333",
            "extra": "mean: 10.020946954044813 usec\nrounds: 23753"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 104080.50949232405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011621561043714365",
            "extra": "mean: 9.607946818071161 usec\nrounds: 29070"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 104170.71978000773,
            "unit": "iter/sec",
            "range": "stddev: 0.00000124515082195955",
            "extra": "mean: 9.599626479608123 usec\nrounds: 30582"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 102107.17315266366,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010335573335664622",
            "extra": "mean: 9.793631232008238 usec\nrounds: 30488"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 103318.48068124651,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011859194170912767",
            "extra": "mean: 9.678810541989623 usec\nrounds: 16695"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 101513.94942378029,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013121916134636104",
            "extra": "mean: 9.850862917621287 usec\nrounds: 32258"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 99627.1838197891,
            "unit": "iter/sec",
            "range": "stddev: 8.823356665591651e-7",
            "extra": "mean: 10.037421130048727 usec\nrounds: 30582"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 99548.89786776887,
            "unit": "iter/sec",
            "range": "stddev: 0.000001003189444698",
            "extra": "mean: 10.04531462847839 usec\nrounds: 25840"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 99983.83986102391,
            "unit": "iter/sec",
            "range": "stddev: 9.291594783132841e-7",
            "extra": "mean: 10.00161627508991 usec\nrounds: 31447"
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
          "id": "6db68aa5f778f012a14b49a62dfac4899f2eb1fa",
          "message": "Pint 0.1.3",
          "timestamp": "2022-11-26T23:23:24-03:00",
          "tree_id": "674f6b6dffcf40734f4dcd70338e2dd212eccda5",
          "url": "https://github.com/hgrecco/pint-benchmark/commit/6db68aa5f778f012a14b49a62dfac4899f2eb1fa"
        },
        "date": 1669517116540,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 2.4106507824141623,
            "unit": "iter/sec",
            "range": "stddev: 0.0018949762380428667",
            "extra": "mean: 414.82574220001425 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 9565.125315545316,
            "unit": "iter/sec",
            "range": "stddev: 0.000652437974648795",
            "extra": "mean: 104.54646092035954 usec\nrounds: 2866"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 15.26404882727511,
            "unit": "iter/sec",
            "range": "stddev: 0.0008756919506687208",
            "extra": "mean: 65.51341726666351 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 585.383939054846,
            "unit": "iter/sec",
            "range": "stddev: 0.0001605487890669606",
            "extra": "mean: 1.7082805544931559 msec\nrounds: 523"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 5828.178696136386,
            "unit": "iter/sec",
            "range": "stddev: 0.000007217569224706692",
            "extra": "mean: 171.58018862100428 usec\nrounds: 4517"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 5759.0493250107875,
            "unit": "iter/sec",
            "range": "stddev: 0.000009726559942513373",
            "extra": "mean: 173.639769962923 usec\nrounds: 1578"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 5828.8374288344585,
            "unit": "iter/sec",
            "range": "stddev: 0.0000065085339649863965",
            "extra": "mean: 171.56079787937423 usec\nrounds: 4339"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 5724.736857580609,
            "unit": "iter/sec",
            "range": "stddev: 0.00001221247570866561",
            "extra": "mean: 174.68051805312507 usec\nrounds: 4459"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 5770.246049632657,
            "unit": "iter/sec",
            "range": "stddev: 0.000012432553008025581",
            "extra": "mean: 173.30283516483004 usec\nrounds: 4459"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 6036.521260897107,
            "unit": "iter/sec",
            "range": "stddev: 0.000006356865841510401",
            "extra": "mean: 165.6583248497309 usec\nrounds: 3497"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 5948.866373304296,
            "unit": "iter/sec",
            "range": "stddev: 0.0000120899602742194",
            "extra": "mean: 168.09925408436268 usec\nrounds: 4652"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 6048.777821304014,
            "unit": "iter/sec",
            "range": "stddev: 0.0000065457111542109945",
            "extra": "mean: 165.32265352481022 usec\nrounds: 4667"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 6010.027815940887,
            "unit": "iter/sec",
            "range": "stddev: 0.00000903976084985006",
            "extra": "mean: 166.38858098919584 usec\nrounds: 4408"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 6024.220943199971,
            "unit": "iter/sec",
            "range": "stddev: 0.00001517783477077931",
            "extra": "mean: 165.99656776014854 usec\nrounds: 4634"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 5629.663774817415,
            "unit": "iter/sec",
            "range": "stddev: 0.000024703557638306835",
            "extra": "mean: 177.63050157154944 usec\nrounds: 5090"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 5596.231788244757,
            "unit": "iter/sec",
            "range": "stddev: 0.00001136334603505813",
            "extra": "mean: 178.69166929442844 usec\nrounds: 5201"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 5616.723888741915,
            "unit": "iter/sec",
            "range": "stddev: 0.000006901693476263415",
            "extra": "mean: 178.0397291745792 usec\nrounds: 5066"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 6112407.517036889,
            "unit": "iter/sec",
            "range": "stddev: 2.7656597674260717e-8",
            "extra": "mean: 163.60165731941225 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 5703546.011931321,
            "unit": "iter/sec",
            "range": "stddev: 3.74475954352302e-8",
            "extra": "mean: 175.3295227056299 nsec\nrounds: 188680"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 4773425.908683656,
            "unit": "iter/sec",
            "range": "stddev: 2.1881348213902642e-7",
            "extra": "mean: 209.4931437355545 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 6256426.084676438,
            "unit": "iter/sec",
            "range": "stddev: 2.1107241115761395e-8",
            "extra": "mean: 159.83566120114816 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 6140985.707832053,
            "unit": "iter/sec",
            "range": "stddev: 2.0824244563194917e-8",
            "extra": "mean: 162.84030733442023 nsec\nrounds: 200000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 6121313.417587128,
            "unit": "iter/sec",
            "range": "stddev: 3.4311397645657924e-8",
            "extra": "mean: 163.36363322388928 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 15111.922677309567,
            "unit": "iter/sec",
            "range": "stddev: 0.000008039052447339846",
            "extra": "mean: 66.17291666675162 usec\nrounds: 4344"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 6656.20728802888,
            "unit": "iter/sec",
            "range": "stddev: 0.000004543300350523127",
            "extra": "mean: 150.23570581981267 usec\nrounds: 2835"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 14989.002531667531,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033155587532801763",
            "extra": "mean: 66.71558016534338 usec\nrounds: 5102"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 6620.75110451554,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054715179623035976",
            "extra": "mean: 151.0402647998611 usec\nrounds: 3429"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 15091.35019458201,
            "unit": "iter/sec",
            "range": "stddev: 0.000003158897665894461",
            "extra": "mean: 66.2631233856738 usec\nrounds: 5187"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 6618.474117875279,
            "unit": "iter/sec",
            "range": "stddev: 0.000005037866428921592",
            "extra": "mean: 151.09222793501363 usec\nrounds: 3365"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 7175.8881850977195,
            "unit": "iter/sec",
            "range": "stddev: 0.000005550514326838476",
            "extra": "mean: 139.35557163177594 usec\nrounds: 3518"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 19112.501207797388,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030392620650709418",
            "extra": "mean: 52.32177563405604 usec\nrounds: 6739"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 7180.077712529156,
            "unit": "iter/sec",
            "range": "stddev: 0.000005365517695392593",
            "extra": "mean: 139.27425858567116 usec\nrounds: 3465"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 19147.00185606686,
            "unit": "iter/sec",
            "range": "stddev: 0.000007234005166957887",
            "extra": "mean: 52.227497940265934 usec\nrounds: 6553"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 7110.701734746246,
            "unit": "iter/sec",
            "range": "stddev: 0.000004510227282931328",
            "extra": "mean: 140.63309604360535 usec\nrounds: 3311"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 18939.082999649818,
            "unit": "iter/sec",
            "range": "stddev: 0.000004342953097518892",
            "extra": "mean: 52.8008668644881 usec\nrounds: 6407"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 13775.015250524555,
            "unit": "iter/sec",
            "range": "stddev: 0.000030553590467110086",
            "extra": "mean: 72.59520093539786 usec\nrounds: 4922"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 6620.883058078693,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054308523974849975",
            "extra": "mean: 151.03725458189695 usec\nrounds: 3492"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 14934.871071084952,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029675085858473786",
            "extra": "mean: 66.95739087671646 usec\nrounds: 5590"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 6604.5100084776695,
            "unit": "iter/sec",
            "range": "stddev: 0.000005273464104801309",
            "extra": "mean: 151.41168666810736 usec\nrounds: 3533"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 14833.273888846426,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032415207338409508",
            "extra": "mean: 67.41600050626242 usec\nrounds: 3955"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 6566.967227751694,
            "unit": "iter/sec",
            "range": "stddev: 0.000004671280097123679",
            "extra": "mean: 152.27729411745 usec\nrounds: 3281"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 7126.101776205478,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064849470112495816",
            "extra": "mean: 140.32917735459037 usec\nrounds: 3462"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 18556.062059957312,
            "unit": "iter/sec",
            "range": "stddev: 0.000002764319134163738",
            "extra": "mean: 53.890744532372 usec\nrounds: 6721"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 7122.013865902511,
            "unit": "iter/sec",
            "range": "stddev: 0.000007409186589115277",
            "extra": "mean: 140.40972382651753 usec\nrounds: 3429"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 18826.69076544538,
            "unit": "iter/sec",
            "range": "stddev: 0.000003163887680024519",
            "extra": "mean: 53.11607931837952 usec\nrounds: 6808"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 7109.952662078164,
            "unit": "iter/sec",
            "range": "stddev: 0.00000535915623756857",
            "extra": "mean: 140.6479125147523 usec\nrounds: 3372"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 18302.26475199132,
            "unit": "iter/sec",
            "range": "stddev: 0.000007110316475151223",
            "extra": "mean: 54.63804690570866 usec\nrounds: 6545"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 14494.87969813649,
            "unit": "iter/sec",
            "range": "stddev: 0.00000442060383767441",
            "extra": "mean: 68.98987924187901 usec\nrounds: 5275"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 6486.709269000997,
            "unit": "iter/sec",
            "range": "stddev: 0.000005335078033252333",
            "extra": "mean: 154.1613718960473 usec\nrounds: 3423"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 14447.05383651544,
            "unit": "iter/sec",
            "range": "stddev: 0.000003246298224841666",
            "extra": "mean: 69.21826493595978 usec\nrounds: 5239"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 6437.437246729894,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055559170150508804",
            "extra": "mean: 155.3413201049816 usec\nrounds: 3427"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 14488.916222307576,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031971436990209667",
            "extra": "mean: 69.01827470438194 usec\nrounds: 5242"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 6479.660422263767,
            "unit": "iter/sec",
            "range": "stddev: 0.000005766270152441665",
            "extra": "mean: 154.32907511079648 usec\nrounds: 3395"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 6945.549734715696,
            "unit": "iter/sec",
            "range": "stddev: 0.00006091434297206294",
            "extra": "mean: 143.97708434823167 usec\nrounds: 3450"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 18065.55312302236,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031160464841468467",
            "extra": "mean: 55.3539652614135 usec\nrounds: 6477"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 7070.333718419486,
            "unit": "iter/sec",
            "range": "stddev: 0.000007716894535208402",
            "extra": "mean: 141.43603963060767 usec\nrounds: 3356"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 18146.048845893965,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035049876477371292",
            "extra": "mean: 55.10841552850096 usec\nrounds: 6440"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 6953.266392637064,
            "unit": "iter/sec",
            "range": "stddev: 0.000005124339616558576",
            "extra": "mean: 143.8173001769237 usec\nrounds: 3388"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 18049.11192269464,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030339143868170198",
            "extra": "mean: 55.40438799886976 usec\nrounds: 6366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 14997.778014053822,
            "unit": "iter/sec",
            "range": "stddev: 0.000003078763951430336",
            "extra": "mean: 66.67654362285799 usec\nrounds: 5261"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 6654.219253583105,
            "unit": "iter/sec",
            "range": "stddev: 0.000006037609744972013",
            "extra": "mean: 150.28059068861145 usec\nrounds: 3501"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 14985.890169727312,
            "unit": "iter/sec",
            "range": "stddev: 0.000016572265255524725",
            "extra": "mean: 66.72943606780726 usec\nrounds: 5412"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 6601.521440046055,
            "unit": "iter/sec",
            "range": "stddev: 0.00001835295524766506",
            "extra": "mean: 151.48023210737668 usec\nrounds: 3507"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 15144.526859100597,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030661282427312447",
            "extra": "mean: 66.03045504845755 usec\nrounds: 3793"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 6642.580772680906,
            "unit": "iter/sec",
            "range": "stddev: 0.000005162652126963751",
            "extra": "mean: 150.54389765386412 usec\nrounds: 3410"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 7109.272453396188,
            "unit": "iter/sec",
            "range": "stddev: 0.00003119286343482168",
            "extra": "mean: 140.66136957830156 usec\nrounds: 3366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 19264.045200953882,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026967295202201094",
            "extra": "mean: 51.91017720154041 usec\nrounds: 6676"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 7249.911828278229,
            "unit": "iter/sec",
            "range": "stddev: 0.000004581625436045018",
            "extra": "mean: 137.9327119675452 usec\nrounds: 3451"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 19289.444505245094,
            "unit": "iter/sec",
            "range": "stddev: 0.000003559621364244975",
            "extra": "mean: 51.8418246688278 usec\nrounds: 6502"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 7194.8798023027875,
            "unit": "iter/sec",
            "range": "stddev: 0.000005961629416371132",
            "extra": "mean: 138.98772842319627 usec\nrounds: 3395"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 18862.03106636547,
            "unit": "iter/sec",
            "range": "stddev: 0.000007139351041237566",
            "extra": "mean: 53.016559907124055 usec\nrounds: 6460"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 14973.204371578822,
            "unit": "iter/sec",
            "range": "stddev: 0.00000908588498550188",
            "extra": "mean: 66.78597147168685 usec\nrounds: 5328"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 6625.265824480643,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055557324673491",
            "extra": "mean: 150.937339948679 usec\nrounds: 3527"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 14896.242084674004,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030745831693855266",
            "extra": "mean: 67.13102501394293 usec\nrounds: 5397"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 6620.6315981900525,
            "unit": "iter/sec",
            "range": "stddev: 0.0000070449703180650636",
            "extra": "mean: 151.0429911661872 usec\nrounds: 3396"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 14862.55184999065,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032002037903987614",
            "extra": "mean: 67.28319672779672 usec\nrounds: 5134"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 6559.075001207882,
            "unit": "iter/sec",
            "range": "stddev: 0.000004905231734085539",
            "extra": "mean: 152.4605222254427 usec\nrounds: 3307"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 7199.435924808066,
            "unit": "iter/sec",
            "range": "stddev: 0.000004425853754712994",
            "extra": "mean: 138.8997708215119 usec\nrounds: 3482"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 19075.379392995193,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026333301319556874",
            "extra": "mean: 52.42359689932129 usec\nrounds: 6579"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 7190.890019202709,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052004410592853",
            "extra": "mean: 139.06484417500172 usec\nrounds: 2721"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 18990.472297678687,
            "unit": "iter/sec",
            "range": "stddev: 0.000002782395992057594",
            "extra": "mean: 52.65798471595863 usec\nrounds: 6739"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 7014.915018280161,
            "unit": "iter/sec",
            "range": "stddev: 0.000004322910923770289",
            "extra": "mean: 142.5534019149342 usec\nrounds: 3237"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 18806.430837011212,
            "unit": "iter/sec",
            "range": "stddev: 0.000002925828193959436",
            "extra": "mean: 53.173300594177164 usec\nrounds: 6394"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 14504.16484167956,
            "unit": "iter/sec",
            "range": "stddev: 0.000003538330553503037",
            "extra": "mean: 68.94571393220608 usec\nrounds: 5247"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 6518.745601901184,
            "unit": "iter/sec",
            "range": "stddev: 0.000005482481959578476",
            "extra": "mean: 153.40374683564139 usec\nrounds: 3476"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 14590.428111074183,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032322872308695246",
            "extra": "mean: 68.5380848585928 usec\nrounds: 5244"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 6510.307213304459,
            "unit": "iter/sec",
            "range": "stddev: 0.000004766863929116647",
            "extra": "mean: 153.60258237221137 usec\nrounds: 3381"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 14514.572289216661,
            "unit": "iter/sec",
            "range": "stddev: 0.000005167588947026683",
            "extra": "mean: 68.89627748403802 usec\nrounds: 5294"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 6519.350174032387,
            "unit": "iter/sec",
            "range": "stddev: 0.0000049275484873001",
            "extra": "mean: 153.38952093464155 usec\nrounds: 2866"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 6887.620759897449,
            "unit": "iter/sec",
            "range": "stddev: 0.00000537768389258669",
            "extra": "mean: 145.18801700326037 usec\nrounds: 3411"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 17996.547880323804,
            "unit": "iter/sec",
            "range": "stddev: 0.000002727496417288982",
            "extra": "mean: 55.56621228970983 usec\nrounds: 6298"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 7034.109034761602,
            "unit": "iter/sec",
            "range": "stddev: 0.000004949325121690204",
            "extra": "mean: 142.1644155724822 usec\nrounds: 3352"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 18208.847701807917,
            "unit": "iter/sec",
            "range": "stddev: 0.000002788500911995616",
            "extra": "mean: 54.91835707433107 usec\nrounds: 6262"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 7049.475562448032,
            "unit": "iter/sec",
            "range": "stddev: 0.0000044976834961954855",
            "extra": "mean: 141.85452394883336 usec\nrounds: 3424"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 18187.30256077563,
            "unit": "iter/sec",
            "range": "stddev: 0.000002842840085649912",
            "extra": "mean: 54.98341475644055 usec\nrounds: 6370"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 65132.771303611196,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012151940738977827",
            "extra": "mean: 15.353254283294351 usec\nrounds: 10331"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 64000.7658994164,
            "unit": "iter/sec",
            "range": "stddev: 0.000001325692225214248",
            "extra": "mean: 15.624813015075475 usec\nrounds: 24510"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 65449.559436787495,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011622761203411945",
            "extra": "mean: 15.27894165530358 usec\nrounds: 22727"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 63052.00605406461,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013970039924976056",
            "extra": "mean: 15.859923618330866 usec\nrounds: 24155"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 65120.83490170888,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014115701466283367",
            "extra": "mean: 15.356068476538503 usec\nrounds: 25381"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 62021.62009674128,
            "unit": "iter/sec",
            "range": "stddev: 0.000001863874509329823",
            "extra": "mean: 16.123409843860912 usec\nrounds: 23365"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 63552.477672888606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011541355571599925",
            "extra": "mean: 15.735027753710986 usec\nrounds: 24213"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 65987.46311815918,
            "unit": "iter/sec",
            "range": "stddev: 0.000001574884966023379",
            "extra": "mean: 15.154393770364669 usec\nrounds: 24753"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 63633.099067715644,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011797476474784631",
            "extra": "mean: 15.715091904228057 usec\nrounds: 23753"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 65408.3610896845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022816318001858675",
            "extra": "mean: 15.288565304806411 usec\nrounds: 25381"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 62285.68045593433,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016542300649826088",
            "extra": "mean: 16.055054591680612 usec\nrounds: 23923"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 63569.39993490441,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016269334533922376",
            "extra": "mean: 15.730839067601837 usec\nrounds: 26042"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 66213.4689277785,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011759429743307173",
            "extra": "mean: 15.102667420894944 usec\nrounds: 20326"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 62605.81098580767,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011615485800503005",
            "extra": "mean: 15.972958168798318 usec\nrounds: 23810"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 64799.84192731143,
            "unit": "iter/sec",
            "range": "stddev: 0.000001258772340270551",
            "extra": "mean: 15.432136410482913 usec\nrounds: 24331"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 63063.8685354624,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012211117125736333",
            "extra": "mean: 15.8569403245168 usec\nrounds: 24097"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 63982.441472609826,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016116771750133806",
            "extra": "mean: 15.62928792625222 usec\nrounds: 25576"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 62037.391274517635,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018729272368522846",
            "extra": "mean: 16.119310942250376 usec\nrounds: 24876"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 63051.19487922932,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017449012565547696",
            "extra": "mean: 15.860127661584185 usec\nrounds: 22779"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 65550.0032920649,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012462395088568803",
            "extra": "mean: 15.25552936350583 usec\nrounds: 25576"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 63072.831360364384,
            "unit": "iter/sec",
            "range": "stddev: 0.000001451249459090135",
            "extra": "mean: 15.854687009158276 usec\nrounds: 23809"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 63215.54047017255,
            "unit": "iter/sec",
            "range": "stddev: 0.00002925922024043152",
            "extra": "mean: 15.81889504641406 usec\nrounds: 25840"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 58227.72965553085,
            "unit": "iter/sec",
            "range": "stddev: 0.00005635238813966664",
            "extra": "mean: 17.173947978323994 usec\nrounds: 22779"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 62073.22822766578,
            "unit": "iter/sec",
            "range": "stddev: 0.000039673100287229324",
            "extra": "mean: 16.110004724296008 usec\nrounds: 25189"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 61919.44788967572,
            "unit": "iter/sec",
            "range": "stddev: 0.00004581132614582487",
            "extra": "mean: 16.150014802808624 usec\nrounds: 25063"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 60054.76509402705,
            "unit": "iter/sec",
            "range": "stddev: 0.00004681940111596892",
            "extra": "mean: 16.651468013142864 usec\nrounds: 24213"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 62038.557673614254,
            "unit": "iter/sec",
            "range": "stddev: 0.000028838592123291375",
            "extra": "mean: 16.119007879922265 usec\nrounds: 25000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 61662.030591418545,
            "unit": "iter/sec",
            "range": "stddev: 0.000011033824010475827",
            "extra": "mean: 16.21743543650295 usec\nrounds: 21142"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 64307.122524408864,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023920151676386105",
            "extra": "mean: 15.550377014932259 usec\nrounds: 24938"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 61805.52343135255,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017568594570028658",
            "extra": "mean: 16.17978369054185 usec\nrounds: 23753"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 61564.38401378281,
            "unit": "iter/sec",
            "range": "stddev: 0.000002283555297454727",
            "extra": "mean: 16.243157728600416 usec\nrounds: 24390"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 64639.97788740184,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031134552491294437",
            "extra": "mean: 15.470302321914893 usec\nrounds: 25840"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 62737.47612972338,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016594138327056332",
            "extra": "mean: 15.939436229986084 usec\nrounds: 24510"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 64320.60825010511,
            "unit": "iter/sec",
            "range": "stddev: 0.000002545534715933154",
            "extra": "mean: 15.547116658343567 usec\nrounds: 26179"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 61793.51780405196,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015241546146650764",
            "extra": "mean: 16.182927199111933 usec\nrounds: 23420"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 64674.98946439659,
            "unit": "iter/sec",
            "range": "stddev: 0.000001657151354712196",
            "extra": "mean: 15.461927528422676 usec\nrounds: 24451"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 51772.38479067065,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016695627891366938",
            "extra": "mean: 19.315316534930016 usec\nrounds: 19764"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 51524.144276726096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012965876191644848",
            "extra": "mean: 19.408376675393104 usec\nrounds: 19842"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 51156.62172885652,
            "unit": "iter/sec",
            "range": "stddev: 0.000002519507165684659",
            "extra": "mean: 19.547811528686584 usec\nrounds: 19881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 51351.4806113287,
            "unit": "iter/sec",
            "range": "stddev: 0.000001439127688111829",
            "extra": "mean: 19.47363519211536 usec\nrounds: 20408"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 50121.23372693091,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034172859146739704",
            "extra": "mean: 19.9516238057541 usec\nrounds: 17483"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 50952.31265549521,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014608888337122513",
            "extra": "mean: 19.626194531371286 usec\nrounds: 19493"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 51642.90754940195,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014172627971227982",
            "extra": "mean: 19.363743202169502 usec\nrounds: 19455"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 51104.48808029771,
            "unit": "iter/sec",
            "range": "stddev: 0.000002123961223138472",
            "extra": "mean: 19.56775300104277 usec\nrounds: 20243"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 46840.94989183446,
            "unit": "iter/sec",
            "range": "stddev: 0.000010702346086622353",
            "extra": "mean: 21.34884118083021 usec\nrounds: 20325"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 50156.33635870547,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015586850559172953",
            "extra": "mean: 19.937660375515712 usec\nrounds: 20081"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 51048.42132104323,
            "unit": "iter/sec",
            "range": "stddev: 0.000001514155853735481",
            "extra": "mean: 19.589244370771148 usec\nrounds: 20162"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 50567.20091842876,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015666331946534873",
            "extra": "mean: 19.77566449867624 usec\nrounds: 20450"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 51709.17195889716,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017405571323325702",
            "extra": "mean: 19.338928900174324 usec\nrounds: 20000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 51717.670635621376,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013363561347695103",
            "extra": "mean: 19.33575096692839 usec\nrounds: 21459"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 51218.740686826015,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017054574732556348",
            "extra": "mean: 19.52410361110675 usec\nrounds: 20326"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 51625.78805567985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015425826030519974",
            "extra": "mean: 19.37016436284657 usec\nrounds: 20619"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 51058.47309933116,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023779881017887074",
            "extra": "mean: 19.58538787586853 usec\nrounds: 19960"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 50898.718437397205,
            "unit": "iter/sec",
            "range": "stddev: 0.000002254193770899272",
            "extra": "mean: 19.646860091967703 usec\nrounds: 20492"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 51105.364980077546,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023083810490235555",
            "extra": "mean: 19.56741724454626 usec\nrounds: 20041"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 49060.68041784716,
            "unit": "iter/sec",
            "range": "stddev: 0.00000691251115292335",
            "extra": "mean: 20.38292154701187 usec\nrounds: 19961"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 51303.71388770441,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014572809411645893",
            "extra": "mean: 19.491766272298324 usec\nrounds: 20203"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 51134.19925518061,
            "unit": "iter/sec",
            "range": "stddev: 0.000001635720099149685",
            "extra": "mean: 19.556383292707686 usec\nrounds: 20877"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 50712.998515359046,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013924176483341497",
            "extra": "mean: 19.71881034991725 usec\nrounds: 20000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 51123.25739905954,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016850811694278634",
            "extra": "mean: 19.5605689245145 usec\nrounds: 20080"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 50734.45115376445,
            "unit": "iter/sec",
            "range": "stddev: 0.000002526524017739029",
            "extra": "mean: 19.710472415858604 usec\nrounds: 19921"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 51456.36161941297,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015789780289883936",
            "extra": "mean: 19.433943025282403 usec\nrounds: 20202"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 50515.017867037626,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016643719579128528",
            "extra": "mean: 19.796093166434893 usec\nrounds: 20619"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 50900.04904507585,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015085523090805617",
            "extra": "mean: 19.646346492012697 usec\nrounds: 20367"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 50066.527814366586,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017186232743428883",
            "extra": "mean: 19.97342423480484 usec\nrounds: 20161"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 51551.14995329508,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014819759079172527",
            "extra": "mean: 19.398209368869402 usec\nrounds: 20366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 50315.01905412373,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012526825552311869",
            "extra": "mean: 19.87478130385487 usec\nrounds: 20325"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 50729.616056551444,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020532376098545093",
            "extra": "mean: 19.712351043328184 usec\nrounds: 20704"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 49059.61374520731,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068454275788452495",
            "extra": "mean: 20.383364720185778 usec\nrounds: 19881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 51040.29415705295,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016734929766218843",
            "extra": "mean: 19.592363573042142 usec\nrounds: 20040"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 51168.331373378656,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013212943290109363",
            "extra": "mean: 19.543338099164004 usec\nrounds: 20704"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 51457.55390119348,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017552458794945146",
            "extra": "mean: 19.4334927369489 usec\nrounds: 20790"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 191657.0089896547,
            "unit": "iter/sec",
            "range": "stddev: 6.362684378614031e-7",
            "extra": "mean: 5.217654210882411 usec\nrounds: 3479"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 11042.465075711574,
            "unit": "iter/sec",
            "range": "stddev: 0.000003914167428203923",
            "extra": "mean: 90.55948949293465 usec\nrounds: 5663"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 190163.45377999867,
            "unit": "iter/sec",
            "range": "stddev: 6.930028327887005e-7",
            "extra": "mean: 5.258633981042995 usec\nrounds: 65360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 11079.331254045803,
            "unit": "iter/sec",
            "range": "stddev: 0.000003525208240460306",
            "extra": "mean: 90.25815521445244 usec\nrounds: 5734"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 189680.15053505194,
            "unit": "iter/sec",
            "range": "stddev: 6.609783975622938e-7",
            "extra": "mean: 5.272032931116875 usec\nrounds: 71938"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 11261.994327786118,
            "unit": "iter/sec",
            "range": "stddev: 0.000004970366841741312",
            "extra": "mean: 88.79421982417033 usec\nrounds: 5791"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 10808.40251101752,
            "unit": "iter/sec",
            "range": "stddev: 0.000031664397780548965",
            "extra": "mean: 92.52061060648438 usec\nrounds: 6166"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 194912.57326959792,
            "unit": "iter/sec",
            "range": "stddev: 8.327565770477092e-7",
            "extra": "mean: 5.130505350297882 usec\nrounds: 78126"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 11648.757715829503,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034116493846570804",
            "extra": "mean: 85.84606396621156 usec\nrounds: 5925"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 187570.15310402823,
            "unit": "iter/sec",
            "range": "stddev: 6.579906375244444e-7",
            "extra": "mean: 5.331338613587367 usec\nrounds: 68494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 11536.299791813168,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036851110269481984",
            "extra": "mean: 86.68290682855333 usec\nrounds: 5946"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 190525.8985173699,
            "unit": "iter/sec",
            "range": "stddev: 6.881440521552256e-7",
            "extra": "mean: 5.24863027956712 usec\nrounds: 72993"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 187394.20324542062,
            "unit": "iter/sec",
            "range": "stddev: 6.424101613102233e-7",
            "extra": "mean: 5.336344362212481 usec\nrounds: 66221"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 11041.037645125856,
            "unit": "iter/sec",
            "range": "stddev: 0.000005584683066406685",
            "extra": "mean: 90.57119739478988 usec\nrounds: 5988"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 191317.33581421126,
            "unit": "iter/sec",
            "range": "stddev: 6.855372291389826e-7",
            "extra": "mean: 5.22691786264002 usec\nrounds: 72464"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 11194.597078622694,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037841262958566596",
            "extra": "mean: 89.32880683214667 usec\nrounds: 5855"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 185035.12939488186,
            "unit": "iter/sec",
            "range": "stddev: 6.498815197756328e-7",
            "extra": "mean: 5.404379175296539 usec\nrounds: 71943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 11145.082014335945,
            "unit": "iter/sec",
            "range": "stddev: 0.000004590046508608328",
            "extra": "mean: 89.72567440183012 usec\nrounds: 5731"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 11571.547921689484,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036849358191398537",
            "extra": "mean: 86.41886174326078 usec\nrounds: 6025"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 182218.81099827483,
            "unit": "iter/sec",
            "range": "stddev: 6.28484370923417e-7",
            "extra": "mean: 5.487907612400498 usec\nrounds: 68494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 11562.540311083148,
            "unit": "iter/sec",
            "range": "stddev: 0.000004125441012928871",
            "extra": "mean: 86.48618496416923 usec\nrounds: 5866"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 191643.20173960613,
            "unit": "iter/sec",
            "range": "stddev: 7.621240344397522e-7",
            "extra": "mean: 5.218030125371956 usec\nrounds: 72464"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 11329.070830575687,
            "unit": "iter/sec",
            "range": "stddev: 0.000011586745798465557",
            "extra": "mean: 88.2684921786463 usec\nrounds: 5498"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 184800.2060429699,
            "unit": "iter/sec",
            "range": "stddev: 6.436777375359391e-7",
            "extra": "mean: 5.411249377976771 usec\nrounds: 71943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 190797.26539356506,
            "unit": "iter/sec",
            "range": "stddev: 6.107857445338688e-7",
            "extra": "mean: 5.241165264802199 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 11165.683539584234,
            "unit": "iter/sec",
            "range": "stddev: 0.000003705768100219724",
            "extra": "mean: 89.56012378954063 usec\nrounds: 5679"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 187835.14318911915,
            "unit": "iter/sec",
            "range": "stddev: 6.434043919651589e-7",
            "extra": "mean: 5.323817380612126 usec\nrounds: 65360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 11078.762441902489,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041887968626257425",
            "extra": "mean: 90.26278930016267 usec\nrounds: 5757"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 189672.03140706636,
            "unit": "iter/sec",
            "range": "stddev: 6.692492524435249e-7",
            "extra": "mean: 5.272258606509259 usec\nrounds: 71429"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 11159.282328358397,
            "unit": "iter/sec",
            "range": "stddev: 0.000003497753284156116",
            "extra": "mean: 89.61149745792895 usec\nrounds: 5705"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 11526.68179488192,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034277211133500847",
            "extra": "mean: 86.7552360510221 usec\nrounds: 6219"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 190996.89587833406,
            "unit": "iter/sec",
            "range": "stddev: 6.260558289564078e-7",
            "extra": "mean: 5.2356871843456805 usec\nrounds: 68494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 11511.226280420467,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040327926637461",
            "extra": "mean: 86.8717177162009 usec\nrounds: 4414"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 190859.37898218413,
            "unit": "iter/sec",
            "range": "stddev: 6.491817095767702e-7",
            "extra": "mean: 5.239459571401757 usec\nrounds: 74069"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 11347.719950705032,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038975565645750136",
            "extra": "mean: 88.12342958268636 usec\nrounds: 5794"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 190186.22027727187,
            "unit": "iter/sec",
            "range": "stddev: 6.016764910381418e-7",
            "extra": "mean: 5.258004489190139 usec\nrounds: 12920"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 5769.773449682732,
            "unit": "iter/sec",
            "range": "stddev: 0.000015292964608173565",
            "extra": "mean: 173.31703033417853 usec\nrounds: 4912"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 6010.949800746954,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071874836169832774",
            "extra": "mean: 166.36305960760717 usec\nrounds: 5100"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 5043.612534054406,
            "unit": "iter/sec",
            "range": "stddev: 0.00000863868838010472",
            "extra": "mean: 198.27058348515337 usec\nrounds: 4396"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 4859.291049476711,
            "unit": "iter/sec",
            "range": "stddev: 0.00002199493705566942",
            "extra": "mean: 205.79133659995284 usec\nrounds: 3265"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 155440.49829872695,
            "unit": "iter/sec",
            "range": "stddev: 8.555849758995618e-7",
            "extra": "mean: 6.433329865413781 usec\nrounds: 27778"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 158609.03349527664,
            "unit": "iter/sec",
            "range": "stddev: 7.511675442515191e-7",
            "extra": "mean: 6.3048111318941995 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 117269.21594809312,
            "unit": "iter/sec",
            "range": "stddev: 0.000001025027385758741",
            "extra": "mean: 8.527387105944582 usec\nrounds: 46083"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 120965.80230171156,
            "unit": "iter/sec",
            "range": "stddev: 8.947802700076401e-7",
            "extra": "mean: 8.266799219053754 usec\nrounds: 44053"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 56531.22457157723,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014899405800693755",
            "extra": "mean: 17.689339079040224 usec\nrounds: 11313"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 56833.23818908236,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014198925436838873",
            "extra": "mean: 17.595337374109004 usec\nrounds: 15674"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 46064.04180040232,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016772971232582411",
            "extra": "mean: 21.70890701109224 usec\nrounds: 14948"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 45707.77965287445,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015290746869014146",
            "extra": "mean: 21.878113695183888 usec\nrounds: 14706"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 56680.21581600909,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015226404790696355",
            "extra": "mean: 17.64284037389911 usec\nrounds: 15198"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 56159.62049915774,
            "unit": "iter/sec",
            "range": "stddev: 0.000001490622686143712",
            "extra": "mean: 17.806388132822185 usec\nrounds: 15724"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 49048.84681001314,
            "unit": "iter/sec",
            "range": "stddev: 0.000003983811904476326",
            "extra": "mean: 20.38783916517796 usec\nrounds: 15432"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 51494.16724575713,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014057440182895484",
            "extra": "mean: 19.41967514937131 usec\nrounds: 15601"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 2970.547779837939,
            "unit": "iter/sec",
            "range": "stddev: 0.000015023627238811858",
            "extra": "mean: 336.63824793101156 usec\nrounds: 242"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 2203.4842703655636,
            "unit": "iter/sec",
            "range": "stddev: 0.00002159208881556305",
            "extra": "mean: 453.82670230457217 usec\nrounds: 954"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 2323.077544833322,
            "unit": "iter/sec",
            "range": "stddev: 0.00001511573117369153",
            "extra": "mean: 430.46346094820046 usec\nrounds: 781"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 3189.1545465203635,
            "unit": "iter/sec",
            "range": "stddev: 0.000012892405313048621",
            "extra": "mean: 313.5627281189883 usec\nrounds: 1074"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 55.21327143118937,
            "unit": "iter/sec",
            "range": "stddev: 0.0260024901146101",
            "extra": "mean: 18.111587559999407 msec\nrounds: 25"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 76.79252009662373,
            "unit": "iter/sec",
            "range": "stddev: 0.00010408189054037416",
            "extra": "mean: 13.022101615388529 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 60.99417745249359,
            "unit": "iter/sec",
            "range": "stddev: 0.02079398125570089",
            "extra": "mean: 16.395007552628577 msec\nrounds: 38"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 61.79723755604118,
            "unit": "iter/sec",
            "range": "stddev: 0.020724408252557936",
            "extra": "mean: 16.18195310256618 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 3038.1472791481433,
            "unit": "iter/sec",
            "range": "stddev: 0.000016286720710091714",
            "extra": "mean: 329.14796687551865 usec\nrounds: 1117"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 2228.9079274233754,
            "unit": "iter/sec",
            "range": "stddev: 0.000016099132871011417",
            "extra": "mean: 448.6502056439824 usec\nrounds: 992"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 2306.3095191869675,
            "unit": "iter/sec",
            "range": "stddev: 0.00001727134192005846",
            "extra": "mean: 433.5931459679034 usec\nrounds: 918"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 3201.0172418119737,
            "unit": "iter/sec",
            "range": "stddev: 0.000012602399096756227",
            "extra": "mean: 312.40069154827114 usec\nrounds: 1112"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 77.9142952102519,
            "unit": "iter/sec",
            "range": "stddev: 0.00014757141846783473",
            "extra": "mean: 12.834615230767318 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 61.147207788654526,
            "unit": "iter/sec",
            "range": "stddev: 0.02070018879657444",
            "extra": "mean: 16.353976512817052 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 76.673167253205,
            "unit": "iter/sec",
            "range": "stddev: 0.0001062409734386187",
            "extra": "mean: 13.042372394733691 msec\nrounds: 38"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 61.76844600367553,
            "unit": "iter/sec",
            "range": "stddev: 0.02051287536535536",
            "extra": "mean: 16.189495846155737 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 55085.86883390405,
            "unit": "iter/sec",
            "range": "stddev: 0.000001479351950263422",
            "extra": "mean: 18.153476039657626 usec\nrounds: 20534"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 52896.4667162849,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012913786294750789",
            "extra": "mean: 18.904854370776643 usec\nrounds: 20202"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 53546.511037788565,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014560763441218333",
            "extra": "mean: 18.675353083122168 usec\nrounds: 21097"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 55104.78365519283,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013803205040966937",
            "extra": "mean: 18.14724482464717 usec\nrounds: 21787"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 50053.008886974225,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019194108602285466",
            "extra": "mean: 19.978818900940034 usec\nrounds: 19724"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 47963.27133823431,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014110554427323776",
            "extra": "mean: 20.84928680006115 usec\nrounds: 18553"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 47780.358701414756,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014766890813092482",
            "extra": "mean: 20.92910198203243 usec\nrounds: 19121"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 50562.93858830058,
            "unit": "iter/sec",
            "range": "stddev: 0.000002114981074856356",
            "extra": "mean: 19.7773315380721 usec\nrounds: 19494"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 39939.41158362157,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017311572117573857",
            "extra": "mean: 25.037925205940738 usec\nrounds: 11779"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 40121.58791694052,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017468093208768048",
            "extra": "mean: 24.924237845974442 usec\nrounds: 14728"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 39808.221665594174,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016851132197049167",
            "extra": "mean: 25.120438898286416 usec\nrounds: 14926"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 39854.870038789166,
            "unit": "iter/sec",
            "range": "stddev: 0.000001785954007219174",
            "extra": "mean: 25.091036528954668 usec\nrounds: 15385"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 35111.13729161598,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018874661664899046",
            "extra": "mean: 28.480991421453762 usec\nrounds: 13755"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 35058.21184950296,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019710036619264053",
            "extra": "mean: 28.52398759790647 usec\nrounds: 14514"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 34897.37657670208,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017550919034028352",
            "extra": "mean: 28.655449151086398 usec\nrounds: 15015"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 34634.42528945607,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019354198775057817",
            "extra": "mean: 28.873006889605726 usec\nrounds: 14514"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 27791.735499814025,
            "unit": "iter/sec",
            "range": "stddev: 0.000002127510896329335",
            "extra": "mean: 35.98191987710489 usec\nrounds: 5504"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 6792.846630605606,
            "unit": "iter/sec",
            "range": "stddev: 0.000006371596442833512",
            "extra": "mean: 147.21368733609205 usec\nrounds: 3435"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 6872.213724494331,
            "unit": "iter/sec",
            "range": "stddev: 0.000006793594707169683",
            "extra": "mean: 145.51351865494865 usec\nrounds: 3538"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 28109.52566063881,
            "unit": "iter/sec",
            "range": "stddev: 0.000002130468242035771",
            "extra": "mean: 35.57512894642258 usec\nrounds: 10516"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 25993.94673777015,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023808770673001163",
            "extra": "mean: 38.470495076723516 usec\nrounds: 10257"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 6506.440335781279,
            "unit": "iter/sec",
            "range": "stddev: 0.000007494870393034368",
            "extra": "mean: 153.6938707484393 usec\nrounds: 441"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 6667.378368956719,
            "unit": "iter/sec",
            "range": "stddev: 0.00000796730417288207",
            "extra": "mean: 149.98398840779683 usec\nrounds: 2933"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 26252.60426313384,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023496884442710376",
            "extra": "mean: 38.091459040666905 usec\nrounds: 10132"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 202232.5372173703,
            "unit": "iter/sec",
            "range": "stddev: 7.581619828115766e-7",
            "extra": "mean: 4.944802719481024 usec\nrounds: 19343"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 22665.106701551325,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032563604891302084",
            "extra": "mean: 44.12068353208125 usec\nrounds: 1008"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 11352.05431156655,
            "unit": "iter/sec",
            "range": "stddev: 0.000006103966972891099",
            "extra": "mean: 88.08978291982847 usec\nrounds: 843"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 197270.1400811339,
            "unit": "iter/sec",
            "range": "stddev: 6.904539744607828e-7",
            "extra": "mean: 5.0691909053682265 usec\nrounds: 52911"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 165000.3036367004,
            "unit": "iter/sec",
            "range": "stddev: 8.263877716809484e-7",
            "extra": "mean: 6.0605949077633925 usec\nrounds: 48310"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 20309.59342481289,
            "unit": "iter/sec",
            "range": "stddev: 0.000009029809643280018",
            "extra": "mean: 49.237814814070454 usec\nrounds: 27"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 10736.72890883117,
            "unit": "iter/sec",
            "range": "stddev: 0.000005464297206199743",
            "extra": "mean: 93.13823684022425 usec\nrounds: 38"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 172850.67394513777,
            "unit": "iter/sec",
            "range": "stddev: 8.043193678105267e-7",
            "extra": "mean: 5.785340474387718 usec\nrounds: 48779"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 35749.77464548559,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016904625807955727",
            "extra": "mean: 27.972204298252215 usec\nrounds: 13774"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 35921.67304573089,
            "unit": "iter/sec",
            "range": "stddev: 0.000002220215101624246",
            "extra": "mean: 27.83834702595638 usec\nrounds: 13316"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 35891.92977626932,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018457239972228974",
            "extra": "mean: 27.861416375030647 usec\nrounds: 13423"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 35494.26349385562,
            "unit": "iter/sec",
            "range": "stddev: 0.000004252958792540977",
            "extra": "mean: 28.173566699675543 usec\nrounds: 13141"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 33911.21297508777,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017690408147552774",
            "extra": "mean: 29.48877118416941 usec\nrounds: 12285"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 33223.63639511475,
            "unit": "iter/sec",
            "range": "stddev: 0.000001900169190549718",
            "extra": "mean: 30.099053219443537 usec\nrounds: 12270"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 32963.96119598501,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020539413057284485",
            "extra": "mean: 30.336159967382784 usec\nrounds: 12240"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 33925.43914047538,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024165984871426365",
            "extra": "mean: 29.476405474348933 usec\nrounds: 12092"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 23600.465350813392,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026769131559029156",
            "extra": "mean: 42.372045853135475 usec\nrounds: 8658"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 22978.970015594445,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022955322752718113",
            "extra": "mean: 43.51805147582159 usec\nrounds: 8606"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 23743.060758667558,
            "unit": "iter/sec",
            "range": "stddev: 0.000002494698962902304",
            "extra": "mean: 42.11756900950286 usec\nrounds: 8977"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 23400.48486080602,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025601208756031055",
            "extra": "mean: 42.73415725991737 usec\nrounds: 8788"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 21947.043611829507,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026758879560791654",
            "extra": "mean: 45.56422348662021 usec\nrounds: 8788"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 21788.92565703699,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030868475573138154",
            "extra": "mean: 45.89487410899665 usec\nrounds: 8555"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 21878.214880951662,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025863582602987258",
            "extra": "mean: 45.707568256432715 usec\nrounds: 8827"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 21542.00281136553,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026690209586143595",
            "extra": "mean: 46.4209390722204 usec\nrounds: 8666"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 40269.183208922674,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017169054678780458",
            "extra": "mean: 24.832885107498885 usec\nrounds: 13369"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 40210.276184220296,
            "unit": "iter/sec",
            "range": "stddev: 0.000002319454885808398",
            "extra": "mean: 24.869264648135633 usec\nrounds: 13210"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 40320.48476504702,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016465097855323092",
            "extra": "mean: 24.801289117110986 usec\nrounds: 13351"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 39890.58616000447,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016782423354179818",
            "extra": "mean: 25.0685712159986 usec\nrounds: 14105"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 38812.39885810121,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017637502722300154",
            "extra": "mean: 25.764962471297306 usec\nrounds: 13643"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 38480.85678688492,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021235229777517493",
            "extra": "mean: 25.986947368095528 usec\nrounds: 13832"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 38444.00071100479,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019188839601206236",
            "extra": "mean: 26.011860927724545 usec\nrounds: 13662"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 38289.47957973682,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015916286376076",
            "extra": "mean: 26.116834466698002 usec\nrounds: 13532"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 40340.034556833365,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016712564798979642",
            "extra": "mean: 24.78926979081147 usec\nrounds: 13870"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 40271.00994358044,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018304732278415552",
            "extra": "mean: 24.831758662149195 usec\nrounds: 14026"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 40033.689132074636,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017632755186900545",
            "extra": "mean: 24.978962011242896 usec\nrounds: 13662"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 40216.65231918071,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033933927929829268",
            "extra": "mean: 24.865321759341608 usec\nrounds: 14026"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 38508.68923589541,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016657949055894846",
            "extra": "mean: 25.968165103575174 usec\nrounds: 13755"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 38589.69007047759,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018426464417738927",
            "extra": "mean: 25.91365720153927 usec\nrounds: 13699"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 39030.99637235919,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015550639930979618",
            "extra": "mean: 25.62066288187754 usec\nrounds: 13387"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 39228.45915727349,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017740194818543548",
            "extra": "mean: 25.491697137295954 usec\nrounds: 13587"
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
          "id": "96815ae8e20a0e119b4bbe01a7634a5be06f84df",
          "message": "Pint 0.2",
          "timestamp": "2022-11-26T23:23:24-03:00",
          "tree_id": "8eeb1c21b03dd39e52a2e05d149f51d99c05ba8d",
          "url": "https://github.com/hgrecco/pint-benchmark/commit/96815ae8e20a0e119b4bbe01a7634a5be06f84df"
        },
        "date": 1669517415627,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 3.579971823860384,
            "unit": "iter/sec",
            "range": "stddev: 0.001618924117947739",
            "extra": "mean: 279.33180740000125 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 41837.74393076824,
            "unit": "iter/sec",
            "range": "stddev: 0.00022773636642913828",
            "extra": "mean: 23.901862434426867 usec\nrounds: 7262"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 27.228404078966104,
            "unit": "iter/sec",
            "range": "stddev: 0.0020745434221927338",
            "extra": "mean: 36.72635374074304 msec\nrounds: 27"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 895.2209739904087,
            "unit": "iter/sec",
            "range": "stddev: 0.00033133620291144817",
            "extra": "mean: 1.1170426398105302 msec\nrounds: 844"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 9794.479304207614,
            "unit": "iter/sec",
            "range": "stddev: 0.00006154911141082886",
            "extra": "mean: 102.09833202367476 usec\nrounds: 8397"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 9580.972946798633,
            "unit": "iter/sec",
            "range": "stddev: 0.00007573783451805607",
            "extra": "mean: 104.37353341386253 usec\nrounds: 4953"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 9342.954818566905,
            "unit": "iter/sec",
            "range": "stddev: 0.00011708284484855823",
            "extra": "mean: 107.03252016297215 usec\nrounds: 8803"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 9347.697532329688,
            "unit": "iter/sec",
            "range": "stddev: 0.00010583478656048366",
            "extra": "mean: 106.97821538848767 usec\nrounds: 8097"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 9335.300571560427,
            "unit": "iter/sec",
            "range": "stddev: 0.00006132005709325564",
            "extra": "mean: 107.12027880992447 usec\nrounds: 8504"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 8872.227908316365,
            "unit": "iter/sec",
            "range": "stddev: 0.00010357385431754137",
            "extra": "mean: 112.71126151557176 usec\nrounds: 6730"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 8688.402497876512,
            "unit": "iter/sec",
            "range": "stddev: 0.00009043277259915351",
            "extra": "mean: 115.09595696612868 usec\nrounds: 5089"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 8909.135036784439,
            "unit": "iter/sec",
            "range": "stddev: 0.00007017366906895155",
            "extra": "mean: 112.24434200078402 usec\nrounds: 7807"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 8695.982706670111,
            "unit": "iter/sec",
            "range": "stddev: 0.00013585400313401817",
            "extra": "mean: 114.99562887043997 usec\nrounds: 6685"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 8612.086172506608,
            "unit": "iter/sec",
            "range": "stddev: 0.00009734861638911147",
            "extra": "mean: 116.11588411556069 usec\nrounds: 7542"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 2537633.814266765,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011739935330047233",
            "extra": "mean: 394.0678889042863 nsec\nrounds: 129871"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 2499191.0560356267,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010470437242925536",
            "extra": "mean: 400.12947292867347 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 2492094.712814512,
            "unit": "iter/sec",
            "range": "stddev: 9.227321260193235e-7",
            "extra": "mean: 401.2688582252209 nsec\nrounds: 138889"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 2540339.2800577623,
            "unit": "iter/sec",
            "range": "stddev: 7.481314671741428e-7",
            "extra": "mean: 393.64820591106854 nsec\nrounds: 129871"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 2492330.9344283068,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013288385374494327",
            "extra": "mean: 401.2308262062243 nsec\nrounds: 62894"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 10023.041794385765,
            "unit": "iter/sec",
            "range": "stddev: 0.0001084188091290282",
            "extra": "mean: 99.77011175989836 usec\nrounds: 7364"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 10132.447273683265,
            "unit": "iter/sec",
            "range": "stddev: 0.000028552854941603234",
            "extra": "mean: 98.69284023784395 usec\nrounds: 338"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 10017.577220728663,
            "unit": "iter/sec",
            "range": "stddev: 0.00005987757102589247",
            "extra": "mean: 99.8245362092913 usec\nrounds: 9017"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 9760.69307441953,
            "unit": "iter/sec",
            "range": "stddev: 0.00011215687045814392",
            "extra": "mean: 102.45174111874941 usec\nrounds: 8614"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 9543.25108521617,
            "unit": "iter/sec",
            "range": "stddev: 0.00008868236281892481",
            "extra": "mean: 104.78609344661797 usec\nrounds: 8026"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 7328.5418893366195,
            "unit": "iter/sec",
            "range": "stddev: 0.00007424448378955454",
            "extra": "mean: 136.45279171495875 usec\nrounds: 5166"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 7225.787650489125,
            "unit": "iter/sec",
            "range": "stddev: 0.00011502773243868718",
            "extra": "mean: 138.39321723387602 usec\nrounds: 4143"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 7091.800801459,
            "unit": "iter/sec",
            "range": "stddev: 0.00012160636172164417",
            "extra": "mean: 141.0079087097694 usec\nrounds: 6200"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 7233.11142718796,
            "unit": "iter/sec",
            "range": "stddev: 0.00006918802140908825",
            "extra": "mean: 138.25308929172314 usec\nrounds: 6014"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 7124.020902277704,
            "unit": "iter/sec",
            "range": "stddev: 0.00007512695439914112",
            "extra": "mean: 140.37016647161695 usec\nrounds: 6836"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 9634.925760267777,
            "unit": "iter/sec",
            "range": "stddev: 0.00011401996829740442",
            "extra": "mean: 103.78907164223004 usec\nrounds: 8361"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 8090.648727214369,
            "unit": "iter/sec",
            "range": "stddev: 0.00012059008557470648",
            "extra": "mean: 123.59948302245755 usec\nrounds: 6803"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 6099.810619820068,
            "unit": "iter/sec",
            "range": "stddev: 0.00012351251291876347",
            "extra": "mean: 163.93951588442889 usec\nrounds: 4218"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 5923.374725841006,
            "unit": "iter/sec",
            "range": "stddev: 0.0000953717521164025",
            "extra": "mean: 168.82268069880033 usec\nrounds: 5036"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 9055.985278933294,
            "unit": "iter/sec",
            "range": "stddev: 0.00009218012969933149",
            "extra": "mean: 110.42420776966966 usec\nrounds: 7542"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 9170.145610776446,
            "unit": "iter/sec",
            "range": "stddev: 0.00008224195393904539",
            "extra": "mean: 109.04952248793451 usec\nrounds: 9294"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 8746.012329625004,
            "unit": "iter/sec",
            "range": "stddev: 0.0001114498073636663",
            "extra": "mean: 114.3378218908681 usec\nrounds: 9191"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 16267239.516025294,
            "unit": "iter/sec",
            "range": "stddev: 2.4017731800750994e-7",
            "extra": "mean: 61.47324498508219 nsec\nrounds: 181819"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 15847961.503268309,
            "unit": "iter/sec",
            "range": "stddev: 2.70654176486174e-7",
            "extra": "mean: 63.099598001495394 nsec\nrounds: 172414"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 14102552.692225251,
            "unit": "iter/sec",
            "range": "stddev: 1.8080414454612558e-7",
            "extra": "mean: 70.90914828147724 nsec\nrounds: 144907"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 16573487.596847773,
            "unit": "iter/sec",
            "range": "stddev: 2.2468951159705056e-7",
            "extra": "mean: 60.337330580353104 nsec\nrounds: 188644"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 17271823.525927015,
            "unit": "iter/sec",
            "range": "stddev: 2.5066040468676005e-7",
            "extra": "mean: 57.89776617969657 nsec\nrounds: 175408"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 17099948.778279494,
            "unit": "iter/sec",
            "range": "stddev: 1.7806091383618176e-7",
            "extra": "mean: 58.4797073351666 nsec\nrounds: 188680"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 48107.16451086593,
            "unit": "iter/sec",
            "range": "stddev: 0.00004569323131781137",
            "extra": "mean: 20.78692457074935 usec\nrounds: 11534"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 18980.35520503511,
            "unit": "iter/sec",
            "range": "stddev: 0.00008048521324423703",
            "extra": "mean: 52.68605298465225 usec\nrounds: 8795"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 49744.31316352585,
            "unit": "iter/sec",
            "range": "stddev: 0.000031801265805562256",
            "extra": "mean: 20.10280042891883 usec\nrounds: 10257"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 18418.7413504674,
            "unit": "iter/sec",
            "range": "stddev: 0.00008186282203265556",
            "extra": "mean: 54.292526344348914 usec\nrounds: 7402"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 44240.924576754915,
            "unit": "iter/sec",
            "range": "stddev: 0.0001152180112047102",
            "extra": "mean: 22.603505906958834 usec\nrounds: 15151"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 18931.984275766878,
            "unit": "iter/sec",
            "range": "stddev: 0.00010213158506807678",
            "extra": "mean: 52.82066504143518 usec\nrounds: 8204"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 15459.136846106803,
            "unit": "iter/sec",
            "range": "stddev: 0.00005639987011864938",
            "extra": "mean: 64.68666458902833 usec\nrounds: 9785"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 32515.24233101905,
            "unit": "iter/sec",
            "range": "stddev: 0.000053562516347504846",
            "extra": "mean: 30.75480692469006 usec\nrounds: 13228"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 15849.109189809667,
            "unit": "iter/sec",
            "range": "stddev: 0.00005227978320834224",
            "extra": "mean: 63.09502875044608 usec\nrounds: 8313"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 32328.004524270713,
            "unit": "iter/sec",
            "range": "stddev: 0.00007527989395873509",
            "extra": "mean: 30.932933062702205 usec\nrounds: 13550"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 15671.210523140353,
            "unit": "iter/sec",
            "range": "stddev: 0.00006867313728540964",
            "extra": "mean: 63.81127983210899 usec\nrounds: 9277"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 31344.770731811484,
            "unit": "iter/sec",
            "range": "stddev: 0.00007617665968722806",
            "extra": "mean: 31.903248186311036 usec\nrounds: 7994"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 47704.60624220167,
            "unit": "iter/sec",
            "range": "stddev: 0.00002779695066709469",
            "extra": "mean: 20.962336318696085 usec\nrounds: 15408"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 18755.406069699315,
            "unit": "iter/sec",
            "range": "stddev: 0.00005081634486510336",
            "extra": "mean: 53.31796050076307 usec\nrounds: 9747"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 43940.394821043985,
            "unit": "iter/sec",
            "range": "stddev: 0.00008391164719063244",
            "extra": "mean: 22.758102289993055 usec\nrounds: 16287"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 17527.73810763472,
            "unit": "iter/sec",
            "range": "stddev: 0.00008100797695951866",
            "extra": "mean: 57.052427064985686 usec\nrounds: 8439"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 44927.30270121779,
            "unit": "iter/sec",
            "range": "stddev: 0.000045403211120927386",
            "extra": "mean: 22.25818021282845 usec\nrounds: 15798"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 17850.31894661718,
            "unit": "iter/sec",
            "range": "stddev: 0.000041508363403503595",
            "extra": "mean: 56.02140796422634 usec\nrounds: 7508"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 13865.265906553912,
            "unit": "iter/sec",
            "range": "stddev: 0.0001235212081519137",
            "extra": "mean: 72.12267018458797 usec\nrounds: 8244"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 29643.109228636014,
            "unit": "iter/sec",
            "range": "stddev: 0.00008125445904946464",
            "extra": "mean: 33.73465287622305 usec\nrounds: 12255"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 14592.74334076289,
            "unit": "iter/sec",
            "range": "stddev: 0.0000719895413501259",
            "extra": "mean: 68.5272108642268 usec\nrounds: 7640"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 31210.050977495688,
            "unit": "iter/sec",
            "range": "stddev: 0.00005700929676402963",
            "extra": "mean: 32.04096016123331 usec\nrounds: 10417"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 14539.861696723663,
            "unit": "iter/sec",
            "range": "stddev: 0.00009945063016548023",
            "extra": "mean: 68.77644511744803 usec\nrounds: 6605"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 30876.700487723025,
            "unit": "iter/sec",
            "range": "stddev: 0.000021421806323517436",
            "extra": "mean: 32.38688021077942 usec\nrounds: 10627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 42301.78123619803,
            "unit": "iter/sec",
            "range": "stddev: 0.000046880631083632047",
            "extra": "mean: 23.639666481568646 usec\nrounds: 14389"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 17138.74892195449,
            "unit": "iter/sec",
            "range": "stddev: 0.00008105060392877802",
            "extra": "mean: 58.34731604703156 usec\nrounds: 7752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 42892.99828163076,
            "unit": "iter/sec",
            "range": "stddev: 0.0000296431388818294",
            "extra": "mean: 23.313828365042443 usec\nrounds: 17007"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 17375.918124044027,
            "unit": "iter/sec",
            "range": "stddev: 0.00006685353099304124",
            "extra": "mean: 57.55091574794222 usec\nrounds: 7893"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 41393.47250752048,
            "unit": "iter/sec",
            "range": "stddev: 0.000054292182070580503",
            "extra": "mean: 24.158398400093574 usec\nrounds: 15625"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 16917.73799850691,
            "unit": "iter/sec",
            "range": "stddev: 0.00006654957200024168",
            "extra": "mean: 59.10955708666583 usec\nrounds: 8636"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 14611.836796163949,
            "unit": "iter/sec",
            "range": "stddev: 0.00008537456205829282",
            "extra": "mean: 68.43766556867993 usec\nrounds: 10020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 30215.40934097581,
            "unit": "iter/sec",
            "range": "stddev: 0.00006260356251328325",
            "extra": "mean: 33.09569593167408 usec\nrounds: 10741"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 15022.135670369425,
            "unit": "iter/sec",
            "range": "stddev: 0.00005416124276713327",
            "extra": "mean: 66.56843087713958 usec\nrounds: 7559"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 31569.09524958048,
            "unit": "iter/sec",
            "range": "stddev: 0.00003585392620315307",
            "extra": "mean: 31.6765492357051 usec\nrounds: 12887"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 14469.111933604405,
            "unit": "iter/sec",
            "range": "stddev: 0.00008775870975241997",
            "extra": "mean: 69.11274199748966 usec\nrounds: 8341"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 30459.39764863465,
            "unit": "iter/sec",
            "range": "stddev: 0.00006004628291513234",
            "extra": "mean: 32.83059013627032 usec\nrounds: 11111"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 47061.55890422547,
            "unit": "iter/sec",
            "range": "stddev: 0.000026276263931363165",
            "extra": "mean: 21.248764879104204 usec\nrounds: 12887"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 18158.502203285498,
            "unit": "iter/sec",
            "range": "stddev: 0.000045622948761735006",
            "extra": "mean: 55.070621398446924 usec\nrounds: 8468"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 46833.054869624386,
            "unit": "iter/sec",
            "range": "stddev: 0.00002598938512587989",
            "extra": "mean: 21.352440125544607 usec\nrounds: 16234"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 17549.616612701182,
            "unit": "iter/sec",
            "range": "stddev: 0.0000837196681513053",
            "extra": "mean: 56.98130176110344 usec\nrounds: 8404"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 46470.46512657804,
            "unit": "iter/sec",
            "range": "stddev: 0.00002776604791110106",
            "extra": "mean: 21.519044349484375 usec\nrounds: 15175"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 18009.127825097377,
            "unit": "iter/sec",
            "range": "stddev: 0.00005028556516620751",
            "extra": "mean: 55.52739753484386 usec\nrounds: 7949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 14549.50863262162,
            "unit": "iter/sec",
            "range": "stddev: 0.0001091244811574419",
            "extra": "mean: 68.7308434429111 usec\nrounds: 5391"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 32340.185551259427,
            "unit": "iter/sec",
            "range": "stddev: 0.000046243379863055925",
            "extra": "mean: 30.921282081545044 usec\nrounds: 11050"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 13647.714963150449,
            "unit": "iter/sec",
            "range": "stddev: 0.00010981570995512887",
            "extra": "mean: 73.27233919378098 usec\nrounds: 8703"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 30032.810453278715,
            "unit": "iter/sec",
            "range": "stddev: 0.00004845720207674135",
            "extra": "mean: 33.296917101903425 usec\nrounds: 12063"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 13496.259803121808,
            "unit": "iter/sec",
            "range": "stddev: 0.00009257667968873623",
            "extra": "mean: 74.09460210366511 usec\nrounds: 7987"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 31066.470170437682,
            "unit": "iter/sec",
            "range": "stddev: 0.00006429783879947882",
            "extra": "mean: 32.18904479697159 usec\nrounds: 12166"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 44860.83119224196,
            "unit": "iter/sec",
            "range": "stddev: 0.000029426789724943635",
            "extra": "mean: 22.29116076148263 usec\nrounds: 15974"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 17707.913565128638,
            "unit": "iter/sec",
            "range": "stddev: 0.00006650573789745133",
            "extra": "mean: 56.47192687732862 usec\nrounds: 8137"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 42052.053751256295,
            "unit": "iter/sec",
            "range": "stddev: 0.00008902133028630971",
            "extra": "mean: 23.780051407599213 usec\nrounds: 16340"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 18004.150052913512,
            "unit": "iter/sec",
            "range": "stddev: 0.000043551195386970726",
            "extra": "mean: 55.54274970276509 usec\nrounds: 8418"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 42931.905612673705,
            "unit": "iter/sec",
            "range": "stddev: 0.00006220820485073812",
            "extra": "mean: 23.292700049745644 usec\nrounds: 16026"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 17587.673437806036,
            "unit": "iter/sec",
            "range": "stddev: 0.000046740357688605294",
            "extra": "mean: 56.85800362033243 usec\nrounds: 8562"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 14738.307410701605,
            "unit": "iter/sec",
            "range": "stddev: 0.00006131403600198491",
            "extra": "mean: 67.85039639449316 usec\nrounds: 9208"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 30126.599413768046,
            "unit": "iter/sec",
            "range": "stddev: 0.00004328528904808095",
            "extra": "mean: 33.193258431384514 usec\nrounds: 5634"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 15136.92527993533,
            "unit": "iter/sec",
            "range": "stddev: 0.000053317627392498845",
            "extra": "mean: 66.06361473723759 usec\nrounds: 8197"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 30429.510249480547,
            "unit": "iter/sec",
            "range": "stddev: 0.0001083895432169908",
            "extra": "mean: 32.86283583933365 usec\nrounds: 11574"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 14867.96454455002,
            "unit": "iter/sec",
            "range": "stddev: 0.00008516130627600939",
            "extra": "mean: 67.25870222542054 usec\nrounds: 9346"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 31057.57678075112,
            "unit": "iter/sec",
            "range": "stddev: 0.00003967219298454175",
            "extra": "mean: 32.19826218443998 usec\nrounds: 10977"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 41906.20345813731,
            "unit": "iter/sec",
            "range": "stddev: 0.00002994919018105126",
            "extra": "mean: 23.86281546594794 usec\nrounds: 15699"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 17254.316221100547,
            "unit": "iter/sec",
            "range": "stddev: 0.00004912557527909036",
            "extra": "mean: 57.956512862392415 usec\nrounds: 8591"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 43293.61825492676,
            "unit": "iter/sec",
            "range": "stddev: 0.000029620324815403227",
            "extra": "mean: 23.098092520511404 usec\nrounds: 13089"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 17676.454615120587,
            "unit": "iter/sec",
            "range": "stddev: 0.00003757885278010408",
            "extra": "mean: 56.57243048866778 usec\nrounds: 6632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 43108.35341040958,
            "unit": "iter/sec",
            "range": "stddev: 0.000024508719256393824",
            "extra": "mean: 23.197360160792527 usec\nrounds: 15432"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 18470.86498863449,
            "unit": "iter/sec",
            "range": "stddev: 0.00004734312251051771",
            "extra": "mean: 54.139316194196695 usec\nrounds: 9355"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 15576.18480591568,
            "unit": "iter/sec",
            "range": "stddev: 0.00005072369058824405",
            "extra": "mean: 64.20057366167164 usec\nrounds: 10236"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 33147.554504425665,
            "unit": "iter/sec",
            "range": "stddev: 0.00003346620914435787",
            "extra": "mean: 30.168138040665593 usec\nrounds: 13793"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 15536.331379133337,
            "unit": "iter/sec",
            "range": "stddev: 0.00012090035445458425",
            "extra": "mean: 64.36525944233452 usec\nrounds: 9320"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 32411.38385648677,
            "unit": "iter/sec",
            "range": "stddev: 0.00003457320810335923",
            "extra": "mean: 30.85335709292343 usec\nrounds: 7169"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 15389.837673958347,
            "unit": "iter/sec",
            "range": "stddev: 0.00010263144656148764",
            "extra": "mean: 64.97794331464151 usec\nrounds: 8803"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 32112.958793313912,
            "unit": "iter/sec",
            "range": "stddev: 0.000034189793262805114",
            "extra": "mean: 31.140076703495946 usec\nrounds: 10482"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 153340.5004709925,
            "unit": "iter/sec",
            "range": "stddev: 0.000027014597326783955",
            "extra": "mean: 6.52143430423439 usec\nrounds: 62500"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 146362.04733032297,
            "unit": "iter/sec",
            "range": "stddev: 0.000030056654358299084",
            "extra": "mean: 6.832372313999615 usec\nrounds: 63288"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 160977.68474907486,
            "unit": "iter/sec",
            "range": "stddev: 0.00003069427973946155",
            "extra": "mean: 6.2120411382407275 usec\nrounds: 34129"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 150852.22179976525,
            "unit": "iter/sec",
            "range": "stddev: 0.000034866562303459696",
            "extra": "mean: 6.629004121181304 usec\nrounds: 58480"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 161439.66835630836,
            "unit": "iter/sec",
            "range": "stddev: 0.000012079347500756097",
            "extra": "mean: 6.194264459172028 usec\nrounds: 65356"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 149717.7069055242,
            "unit": "iter/sec",
            "range": "stddev: 0.0000357694612081548",
            "extra": "mean: 6.6792366826124745 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 152620.3915430493,
            "unit": "iter/sec",
            "range": "stddev: 0.000014262133313911681",
            "extra": "mean: 6.5522043934603085 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 162129.7243171547,
            "unit": "iter/sec",
            "range": "stddev: 0.000011661299611403564",
            "extra": "mean: 6.167900452626572 usec\nrounds: 59881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 157538.2352984069,
            "unit": "iter/sec",
            "range": "stddev: 0.000014045272631609171",
            "extra": "mean: 6.347665365844762 usec\nrounds: 14347"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 160224.87880116323,
            "unit": "iter/sec",
            "range": "stddev: 0.000011926189665236306",
            "extra": "mean: 6.241228000808698 usec\nrounds: 59877"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 152383.76131123336,
            "unit": "iter/sec",
            "range": "stddev: 0.000012196408569779029",
            "extra": "mean: 6.562379031697273 usec\nrounds: 57143"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 156106.13054879874,
            "unit": "iter/sec",
            "range": "stddev: 0.00001204416537758798",
            "extra": "mean: 6.405898323688192 usec\nrounds: 58824"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 159032.25487765146,
            "unit": "iter/sec",
            "range": "stddev: 0.000014084657033044895",
            "extra": "mean: 6.288032580367622 usec\nrounds: 64517"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 158631.8297942133,
            "unit": "iter/sec",
            "range": "stddev: 0.00001558619868287913",
            "extra": "mean: 6.3039050945655735 usec\nrounds: 64517"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 161579.23326484908,
            "unit": "iter/sec",
            "range": "stddev: 0.000017794488390566117",
            "extra": "mean: 6.1889141308207085 usec\nrounds: 64936"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 158264.07433692968,
            "unit": "iter/sec",
            "range": "stddev: 0.00002493369203349421",
            "extra": "mean: 6.318553368410646 usec\nrounds: 60607"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 160556.2258860534,
            "unit": "iter/sec",
            "range": "stddev: 0.00001430189191065361",
            "extra": "mean: 6.228347698641715 usec\nrounds: 46083"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 152020.36708709816,
            "unit": "iter/sec",
            "range": "stddev: 0.000022005682325335078",
            "extra": "mean: 6.578065947091567 usec\nrounds: 55863"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 158543.37462970355,
            "unit": "iter/sec",
            "range": "stddev: 0.000012653061994825944",
            "extra": "mean: 6.307422194939499 usec\nrounds: 56815"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 157909.9165931089,
            "unit": "iter/sec",
            "range": "stddev: 0.000024014506797986096",
            "extra": "mean: 6.332724515185004 usec\nrounds: 61350"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 155994.6381820372,
            "unit": "iter/sec",
            "range": "stddev: 0.000013419213287379674",
            "extra": "mean: 6.410476742367612 usec\nrounds: 54348"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 154329.41959665797,
            "unit": "iter/sec",
            "range": "stddev: 0.000021107774060718405",
            "extra": "mean: 6.47964595871295 usec\nrounds: 34013"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 151013.42485368327,
            "unit": "iter/sec",
            "range": "stddev: 0.000028624341896443983",
            "extra": "mean: 6.62192782508508 usec\nrounds: 61725"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 142125.0106687995,
            "unit": "iter/sec",
            "range": "stddev: 0.000037213092739036934",
            "extra": "mean: 7.036059278337339 usec\nrounds: 64931"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 153589.61641216153,
            "unit": "iter/sec",
            "range": "stddev: 0.000025144409221133242",
            "extra": "mean: 6.5108568102447455 usec\nrounds: 58824"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 148865.33213720488,
            "unit": "iter/sec",
            "range": "stddev: 0.00003106671399657604",
            "extra": "mean: 6.71748073002201 usec\nrounds: 55553"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 161879.23552310496,
            "unit": "iter/sec",
            "range": "stddev: 0.0000150778268165662",
            "extra": "mean: 6.1774445423376765 usec\nrounds: 55556"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 153580.77852884252,
            "unit": "iter/sec",
            "range": "stddev: 0.00003088422612250618",
            "extra": "mean: 6.511231480781951 usec\nrounds: 54052"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 153030.82616390026,
            "unit": "iter/sec",
            "range": "stddev: 0.000041379376226349856",
            "extra": "mean: 6.534631126731108 usec\nrounds: 56819"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 153160.59187227156,
            "unit": "iter/sec",
            "range": "stddev: 0.000013420735829987401",
            "extra": "mean: 6.529094643574838 usec\nrounds: 54943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 144234.9115953261,
            "unit": "iter/sec",
            "range": "stddev: 0.000019807132852466043",
            "extra": "mean: 6.93313421098533 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 157653.73453301654,
            "unit": "iter/sec",
            "range": "stddev: 0.000015794200116067934",
            "extra": "mean: 6.343014981294817 usec\nrounds: 57472"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 153567.07074115492,
            "unit": "iter/sec",
            "range": "stddev: 0.000014321079589660221",
            "extra": "mean: 6.511812689880311 usec\nrounds: 44445"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 158509.92011088997,
            "unit": "iter/sec",
            "range": "stddev: 0.000014810099798381173",
            "extra": "mean: 6.308753416192642 usec\nrounds: 66667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 156333.95937550222,
            "unit": "iter/sec",
            "range": "stddev: 0.000013989017134972014",
            "extra": "mean: 6.396562870886399 usec\nrounds: 34722"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 163588.69773800415,
            "unit": "iter/sec",
            "range": "stddev: 0.00001182257714358277",
            "extra": "mean: 6.112891745134815 usec\nrounds: 61346"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 126006.30223805096,
            "unit": "iter/sec",
            "range": "stddev: 0.00002319455200777524",
            "extra": "mean: 7.93611098999478 usec\nrounds: 14641"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 132541.22995458113,
            "unit": "iter/sec",
            "range": "stddev: 0.000015027711347687899",
            "extra": "mean: 7.544822093039858 usec\nrounds: 49998"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 129286.20790722674,
            "unit": "iter/sec",
            "range": "stddev: 0.00001230897964442253",
            "extra": "mean: 7.734777097937473 usec\nrounds: 29762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 129123.70564887891,
            "unit": "iter/sec",
            "range": "stddev: 0.000017429134593649592",
            "extra": "mean: 7.744511319395225 usec\nrounds: 45453"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 127934.72637953404,
            "unit": "iter/sec",
            "range": "stddev: 0.000016588794969602375",
            "extra": "mean: 7.8164860182948095 usec\nrounds: 41840"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 127346.37589744681,
            "unit": "iter/sec",
            "range": "stddev: 0.00003019246774538459",
            "extra": "mean: 7.852598811334128 usec\nrounds: 44246"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 127079.31733804419,
            "unit": "iter/sec",
            "range": "stddev: 0.0000312841348619598",
            "extra": "mean: 7.869101132640618 usec\nrounds: 52357"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 125882.65606301079,
            "unit": "iter/sec",
            "range": "stddev: 0.000017981193732368197",
            "extra": "mean: 7.943906104900172 usec\nrounds: 48075"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 116233.54192015463,
            "unit": "iter/sec",
            "range": "stddev: 0.00003439824329473236",
            "extra": "mean: 8.603368558509032 usec\nrounds: 33669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 124188.6072191809,
            "unit": "iter/sec",
            "range": "stddev: 0.000025841730502788904",
            "extra": "mean: 8.052268419719827 usec\nrounds: 30959"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 130346.26680207049,
            "unit": "iter/sec",
            "range": "stddev: 0.0000169475938651949",
            "extra": "mean: 7.671872962180728 usec\nrounds: 49749"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 122163.02620256702,
            "unit": "iter/sec",
            "range": "stddev: 0.00003245848112949831",
            "extra": "mean: 8.18578281076494 usec\nrounds: 43667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 129405.68102584447,
            "unit": "iter/sec",
            "range": "stddev: 0.000014172772226839026",
            "extra": "mean: 7.7276360054106386 usec\nrounds: 49998"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 130022.66658686104,
            "unit": "iter/sec",
            "range": "stddev: 0.000019348319489714176",
            "extra": "mean: 7.690966707962065 usec\nrounds: 51544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 129521.3833639377,
            "unit": "iter/sec",
            "range": "stddev: 0.00002142472020255934",
            "extra": "mean: 7.720732855285634 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 128881.83973785453,
            "unit": "iter/sec",
            "range": "stddev: 0.000018039339422714515",
            "extra": "mean: 7.759045044934169 usec\nrounds: 45044"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 121330.66541527942,
            "unit": "iter/sec",
            "range": "stddev: 0.00004095172753121959",
            "extra": "mean: 8.24193946828934 usec\nrounds: 45249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 125847.83651583895,
            "unit": "iter/sec",
            "range": "stddev: 0.00001612195231664125",
            "extra": "mean: 7.94610402280648 usec\nrounds: 52354"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 129054.17990385553,
            "unit": "iter/sec",
            "range": "stddev: 0.000015816976543632185",
            "extra": "mean: 7.748683543183128 usec\nrounds: 46297"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 127721.59169652806,
            "unit": "iter/sec",
            "range": "stddev: 0.000030087254339824194",
            "extra": "mean: 7.829529735082246 usec\nrounds: 38759"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 131755.26041484662,
            "unit": "iter/sec",
            "range": "stddev: 0.000016116633748792156",
            "extra": "mean: 7.58982978631278 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 121932.70594391377,
            "unit": "iter/sec",
            "range": "stddev: 0.000043330384507456535",
            "extra": "mean: 8.201245041342533 usec\nrounds: 52081"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 126271.47664001811,
            "unit": "iter/sec",
            "range": "stddev: 0.00001970466195720245",
            "extra": "mean: 7.919444886598235 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 128935.08211005584,
            "unit": "iter/sec",
            "range": "stddev: 0.000023746173230237903",
            "extra": "mean: 7.75584102972397 usec\nrounds: 51280"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 125990.9553858697,
            "unit": "iter/sec",
            "range": "stddev: 0.000013268890486510775",
            "extra": "mean: 7.937077680991641 usec\nrounds: 50759"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 126100.53430874753,
            "unit": "iter/sec",
            "range": "stddev: 0.00002450282620950718",
            "extra": "mean: 7.930180514156874 usec\nrounds: 49503"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 125592.52182097074,
            "unit": "iter/sec",
            "range": "stddev: 0.00001756772485375456",
            "extra": "mean: 7.962257509451693 usec\nrounds: 44643"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 126672.47781706812,
            "unit": "iter/sec",
            "range": "stddev: 0.00003074684343213305",
            "extra": "mean: 7.894374667906416 usec\nrounds: 47394"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 128193.36893173413,
            "unit": "iter/sec",
            "range": "stddev: 0.000015440102429709017",
            "extra": "mean: 7.800715499820607 usec\nrounds: 46949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 133346.94952252012,
            "unit": "iter/sec",
            "range": "stddev: 0.0000157963474527979",
            "extra": "mean: 7.499234167566138 usec\nrounds: 49503"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 123617.10668672071,
            "unit": "iter/sec",
            "range": "stddev: 0.000043577868063999865",
            "extra": "mean: 8.089495271348417 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 127134.96644295662,
            "unit": "iter/sec",
            "range": "stddev: 0.000021620667532798118",
            "extra": "mean: 7.865656695230919 usec\nrounds: 47168"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 132880.6316819264,
            "unit": "iter/sec",
            "range": "stddev: 0.000014478037529203394",
            "extra": "mean: 7.525551220991176 usec\nrounds: 52908"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 120805.20021962714,
            "unit": "iter/sec",
            "range": "stddev: 0.000043445629654411186",
            "extra": "mean: 8.277789351633645 usec\nrounds: 36231"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 127368.6424560497,
            "unit": "iter/sec",
            "range": "stddev: 0.00003420503363115189",
            "extra": "mean: 7.8512260217036065 usec\nrounds: 35970"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 130152.84615731752,
            "unit": "iter/sec",
            "range": "stddev: 0.000017999209520719928",
            "extra": "mean: 7.683274162067009 usec\nrounds: 50503"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 550180.9118705973,
            "unit": "iter/sec",
            "range": "stddev: 9.013810601303286e-7",
            "extra": "mean: 1.8175839590654506 usec\nrounds: 7593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 30861.20852900314,
            "unit": "iter/sec",
            "range": "stddev: 0.00006426720950976488",
            "extra": "mean: 32.4031380384928 usec\nrounds: 12837"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 491659.4620107629,
            "unit": "iter/sec",
            "range": "stddev: 0.000008817571822022291",
            "extra": "mean: 2.0339281093264288 usec\nrounds: 126567"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 30425.029234911886,
            "unit": "iter/sec",
            "range": "stddev: 0.000059670356598345575",
            "extra": "mean: 32.86767589536208 usec\nrounds: 14881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 482623.3453715866,
            "unit": "iter/sec",
            "range": "stddev: 0.000007587805695113896",
            "extra": "mean: 2.072009175664864 usec\nrounds: 172414"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 30165.164827604647,
            "unit": "iter/sec",
            "range": "stddev: 0.000029775627568627302",
            "extra": "mean: 33.15082167510265 usec\nrounds: 12595"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 30355.12000774689,
            "unit": "iter/sec",
            "range": "stddev: 0.00007911347312754891",
            "extra": "mean: 32.943371653440714 usec\nrounds: 18450"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 484095.47679315746,
            "unit": "iter/sec",
            "range": "stddev: 0.000007719762329362662",
            "extra": "mean: 2.065708208274122 usec\nrounds: 163908"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 30249.55378028427,
            "unit": "iter/sec",
            "range": "stddev: 0.00008518282305407513",
            "extra": "mean: 33.058338885374546 usec\nrounds: 13568"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 464720.36111974524,
            "unit": "iter/sec",
            "range": "stddev: 0.000013796463210057133",
            "extra": "mean: 2.151831689901636 usec\nrounds: 153847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 31361.89274838532,
            "unit": "iter/sec",
            "range": "stddev: 0.00004177964282038397",
            "extra": "mean: 31.885830616887286 usec\nrounds: 12516"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 503781.51660146716,
            "unit": "iter/sec",
            "range": "stddev: 0.000006792381338178032",
            "extra": "mean: 1.98498747382803 usec\nrounds: 188644"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 478002.9442589098,
            "unit": "iter/sec",
            "range": "stddev: 0.000010951411962904034",
            "extra": "mean: 2.0920373232227436 usec\nrounds: 169492"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 31175.85429292165,
            "unit": "iter/sec",
            "range": "stddev: 0.000034490444715425296",
            "extra": "mean: 32.07610577738188 usec\nrounds: 15060"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 485490.35394065327,
            "unit": "iter/sec",
            "range": "stddev: 0.000011028452638776734",
            "extra": "mean: 2.059773158999243 usec\nrounds: 172385"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 29639.915275295196,
            "unit": "iter/sec",
            "range": "stddev: 0.00007051931651018912",
            "extra": "mean: 33.73828807241894 usec\nrounds: 12903"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 488136.4145511514,
            "unit": "iter/sec",
            "range": "stddev: 0.00000816939245055332",
            "extra": "mean: 2.04860766414961 usec\nrounds: 175439"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 31281.678065153985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000526165818055993",
            "extra": "mean: 31.9675945106648 usec\nrounds: 15083"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 31254.62758560506,
            "unit": "iter/sec",
            "range": "stddev: 0.00006889872953494994",
            "extra": "mean: 31.995262053948448 usec\nrounds: 10204"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 480545.35129917,
            "unit": "iter/sec",
            "range": "stddev: 0.000006205688560150968",
            "extra": "mean: 2.080969043393027 usec\nrounds: 169463"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 31757.187427346813,
            "unit": "iter/sec",
            "range": "stddev: 0.00003112058475080839",
            "extra": "mean: 31.488934663618164 usec\nrounds: 11877"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 461413.35684054124,
            "unit": "iter/sec",
            "range": "stddev: 0.000020914154646417298",
            "extra": "mean: 2.1672541229567996 usec\nrounds: 56815"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 31279.78397817749,
            "unit": "iter/sec",
            "range": "stddev: 0.00005851645881146071",
            "extra": "mean: 31.969530246681224 usec\nrounds: 15291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 499798.5048335618,
            "unit": "iter/sec",
            "range": "stddev: 0.000008029618371181394",
            "extra": "mean: 2.0008063055991148 usec\nrounds: 172385"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 496821.9964846529,
            "unit": "iter/sec",
            "range": "stddev: 0.000008523681478458963",
            "extra": "mean: 2.0127933285475827 usec\nrounds: 149232"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 30958.086683412137,
            "unit": "iter/sec",
            "range": "stddev: 0.000029480485188454374",
            "extra": "mean: 32.30173783755883 usec\nrounds: 14327"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 489666.83226316166,
            "unit": "iter/sec",
            "range": "stddev: 0.00000832689563462994",
            "extra": "mean: 2.0422048913914796 usec\nrounds: 185186"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 30821.68082267915,
            "unit": "iter/sec",
            "range": "stddev: 0.000037397221248110844",
            "extra": "mean: 32.444693907289505 usec\nrounds: 15198"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 487358.83185666596,
            "unit": "iter/sec",
            "range": "stddev: 0.000009852760921219407",
            "extra": "mean: 2.051876224732301 usec\nrounds: 156251"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 29502.047917982974,
            "unit": "iter/sec",
            "range": "stddev: 0.00007142167337673769",
            "extra": "mean: 33.89595199560536 usec\nrounds: 13228"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 32388.523949053666,
            "unit": "iter/sec",
            "range": "stddev: 0.000027109053963129268",
            "extra": "mean: 30.875133475454916 usec\nrounds: 6076"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 488536.86942192266,
            "unit": "iter/sec",
            "range": "stddev: 0.000009711583594218861",
            "extra": "mean: 2.0469284154198695 usec\nrounds: 178572"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 31129.71670090843,
            "unit": "iter/sec",
            "range": "stddev: 0.000038975515294196776",
            "extra": "mean: 32.12364601990798 usec\nrounds: 14837"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 493617.4024786123,
            "unit": "iter/sec",
            "range": "stddev: 0.000010508312198747252",
            "extra": "mean: 2.025860504469002 usec\nrounds: 178572"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 32829.3609195846,
            "unit": "iter/sec",
            "range": "stddev: 0.00001942470429258882",
            "extra": "mean: 30.460538127729514 usec\nrounds: 6452"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 479953.28970462835,
            "unit": "iter/sec",
            "range": "stddev: 0.000007498531428642431",
            "extra": "mean: 2.083536088721087 usec\nrounds: 131579"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 9702.884625464618,
            "unit": "iter/sec",
            "range": "stddev: 0.00010015970878354622",
            "extra": "mean: 103.06213446829638 usec\nrounds: 7987"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 9057.615551896231,
            "unit": "iter/sec",
            "range": "stddev: 0.00011225481062536036",
            "extra": "mean: 110.40433260502516 usec\nrounds: 8244"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 10340.414076062538,
            "unit": "iter/sec",
            "range": "stddev: 0.0001251724352725815",
            "extra": "mean: 96.70792606989912 usec\nrounds: 7994"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 8735.228994823805,
            "unit": "iter/sec",
            "range": "stddev: 0.0001099491060049071",
            "extra": "mean: 114.47896793462031 usec\nrounds: 7547"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 7507.501240065225,
            "unit": "iter/sec",
            "range": "stddev: 0.00011082803317259616",
            "extra": "mean: 133.200111198558 usec\nrounds: 6358"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 6162.078487232024,
            "unit": "iter/sec",
            "range": "stddev: 0.00007865435489869482",
            "extra": "mean: 162.28290536578274 usec\nrounds: 5516"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 8210.875412461062,
            "unit": "iter/sec",
            "range": "stddev: 0.0000839022989702848",
            "extra": "mean: 121.78969351822963 usec\nrounds: 4258"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 7739.274944433145,
            "unit": "iter/sec",
            "range": "stddev: 0.00009202187896966003",
            "extra": "mean: 129.2110704400416 usec\nrounds: 7226"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 358521.07886738103,
            "unit": "iter/sec",
            "range": "stddev: 0.000012869729265703359",
            "extra": "mean: 2.7892362791028686 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 359243.81505085115,
            "unit": "iter/sec",
            "range": "stddev: 0.000024564530316214442",
            "extra": "mean: 2.783624819980407 usec\nrounds: 111112"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 272042.427578254,
            "unit": "iter/sec",
            "range": "stddev: 0.00001131192548450611",
            "extra": "mean: 3.6758972080277674 usec\nrounds: 92585"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 266065.4763966736,
            "unit": "iter/sec",
            "range": "stddev: 0.000032094818979257974",
            "extra": "mean: 3.758473341009913 usec\nrounds: 94340"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 36475.97324316465,
            "unit": "iter/sec",
            "range": "stddev: 0.0002725276926622525",
            "extra": "mean: 27.415306874296856 usec\nrounds: 11099"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 43550.99880117315,
            "unit": "iter/sec",
            "range": "stddev: 0.000037344133526685755",
            "extra": "mean: 22.961585899909664 usec\nrounds: 20000"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 31622.994224047867,
            "unit": "iter/sec",
            "range": "stddev: 0.000051850840556025946",
            "extra": "mean: 31.622558980817345 usec\nrounds: 17421"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 32525.42165473949,
            "unit": "iter/sec",
            "range": "stddev: 0.00003055557395090587",
            "extra": "mean: 30.745181741688 usec\nrounds: 16529"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 39842.41502808377,
            "unit": "iter/sec",
            "range": "stddev: 0.00005813283071836615",
            "extra": "mean: 25.098880158121155 usec\nrounds: 18975"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 40672.2522311339,
            "unit": "iter/sec",
            "range": "stddev: 0.000057035627873184114",
            "extra": "mean: 24.586786940569702 usec\nrounds: 19802"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 36108.624691975274,
            "unit": "iter/sec",
            "range": "stddev: 0.000034274846410542814",
            "extra": "mean: 27.694214568693848 usec\nrounds: 17421"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 35653.942446132634,
            "unit": "iter/sec",
            "range": "stddev: 0.00004717535970549424",
            "extra": "mean: 28.047389191555435 usec\nrounds: 18726"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 5289.859147521617,
            "unit": "iter/sec",
            "range": "stddev: 0.00011025860447306341",
            "extra": "mean: 189.04095026207187 usec\nrounds: 764"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 4070.5575409401804,
            "unit": "iter/sec",
            "range": "stddev: 0.00019881434351255226",
            "extra": "mean: 245.66659233836285 usec\nrounds: 2193"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 4164.502908404466,
            "unit": "iter/sec",
            "range": "stddev: 0.00008870706213597157",
            "extra": "mean: 240.12469723142226 usec\nrounds: 2203"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 5366.724424932694,
            "unit": "iter/sec",
            "range": "stddev: 0.0001142215630606499",
            "extra": "mean: 186.3333983303123 usec\nrounds: 2036"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 174.15102344665297,
            "unit": "iter/sec",
            "range": "stddev: 0.0009172961312500746",
            "extra": "mean: 5.742142539324934 msec\nrounds: 89"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 181.34374627928452,
            "unit": "iter/sec",
            "range": "stddev: 0.0008345733248007167",
            "extra": "mean: 5.5143892222228414 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 154.3281700813729,
            "unit": "iter/sec",
            "range": "stddev: 0.010048518600159977",
            "extra": "mean: 6.479698421051245 msec\nrounds: 95"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 147.7283885837823,
            "unit": "iter/sec",
            "range": "stddev: 0.010464717704163224",
            "extra": "mean: 6.769179638298582 msec\nrounds: 94"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 5578.429278579668,
            "unit": "iter/sec",
            "range": "stddev: 0.00011702717308705608",
            "extra": "mean: 179.261930206743 usec\nrounds: 2708"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 4434.935418982033,
            "unit": "iter/sec",
            "range": "stddev: 0.00009163735174125453",
            "extra": "mean: 225.48242658052814 usec\nrounds: 2152"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 4169.443385107258,
            "unit": "iter/sec",
            "range": "stddev: 0.00020031734457802718",
            "extra": "mean: 239.84016753216454 usec\nrounds: 1349"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 5269.822709998317,
            "unit": "iter/sec",
            "range": "stddev: 0.00013040884004068633",
            "extra": "mean: 189.75970445888478 usec\nrounds: 2355"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 143.5822514076578,
            "unit": "iter/sec",
            "range": "stddev: 0.011514297125524644",
            "extra": "mean: 6.964649113634572 msec\nrounds: 88"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 149.29248372486143,
            "unit": "iter/sec",
            "range": "stddev: 0.010588666503803449",
            "extra": "mean: 6.698260857143685 msec\nrounds: 91"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 148.8138887153738,
            "unit": "iter/sec",
            "range": "stddev: 0.010460948643943473",
            "extra": "mean: 6.7198028936172225 msec\nrounds: 94"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 146.68912754663071,
            "unit": "iter/sec",
            "range": "stddev: 0.010725536323187223",
            "extra": "mean: 6.817137825583644 msec\nrounds: 86"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 127017.66888855034,
            "unit": "iter/sec",
            "range": "stddev: 0.00001649276355912547",
            "extra": "mean: 7.872920427137065 usec\nrounds: 40001"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 120128.5933780167,
            "unit": "iter/sec",
            "range": "stddev: 0.000028332888991391764",
            "extra": "mean: 8.324412796986918 usec\nrounds: 43479"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 119524.12331628223,
            "unit": "iter/sec",
            "range": "stddev: 0.000016261222745482973",
            "extra": "mean: 8.36651189947506 usec\nrounds: 45044"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 125798.45681843326,
            "unit": "iter/sec",
            "range": "stddev: 0.000026797235407083293",
            "extra": "mean: 7.949223108859868 usec\nrounds: 45870"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 105497.0975270897,
            "unit": "iter/sec",
            "range": "stddev: 0.00002393710903707931",
            "extra": "mean: 9.47893376633626 usec\nrounds: 29411"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 98158.96515950482,
            "unit": "iter/sec",
            "range": "stddev: 0.000032847727531169904",
            "extra": "mean: 10.187556463895435 usec\nrounds: 39999"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 95936.51344227428,
            "unit": "iter/sec",
            "range": "stddev: 0.00004780806828702878",
            "extra": "mean: 10.423559957718368 usec\nrounds: 37735"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 106100.07233600615,
            "unit": "iter/sec",
            "range": "stddev: 0.000015873131707455403",
            "extra": "mean: 9.42506426228552 usec\nrounds: 40817"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 95563.93985538831,
            "unit": "iter/sec",
            "range": "stddev: 0.000018833406028081268",
            "extra": "mean: 10.464198122359182 usec\nrounds: 20876"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 94842.27708448548,
            "unit": "iter/sec",
            "range": "stddev: 0.000018122303231010726",
            "extra": "mean: 10.543821075797245 usec\nrounds: 35842"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 93234.82288078508,
            "unit": "iter/sec",
            "range": "stddev: 0.000030096901879401623",
            "extra": "mean: 10.725606260642037 usec\nrounds: 35460"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 88889.84588750913,
            "unit": "iter/sec",
            "range": "stddev: 0.000020860082950989817",
            "extra": "mean: 11.249878881166119 usec\nrounds: 32786"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 67227.27988568564,
            "unit": "iter/sec",
            "range": "stddev: 0.000021621158135833074",
            "extra": "mean: 14.874913899542214 usec\nrounds: 21231"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 68069.12469244895,
            "unit": "iter/sec",
            "range": "stddev: 0.000020104072981896442",
            "extra": "mean: 14.690948422184311 usec\nrounds: 30769"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 67930.15714198937,
            "unit": "iter/sec",
            "range": "stddev: 0.000025343261238938357",
            "extra": "mean: 14.721002306969115 usec\nrounds: 31645"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 67456.20710951489,
            "unit": "iter/sec",
            "range": "stddev: 0.000021572670167306218",
            "extra": "mean: 14.824432663053585 usec\nrounds: 25907"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 56666.998146011814,
            "unit": "iter/sec",
            "range": "stddev: 0.000025472875150534888",
            "extra": "mean: 17.646955595271447 usec\nrounds: 9616"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 13440.006150097202,
            "unit": "iter/sec",
            "range": "stddev: 0.00012883140239413035",
            "extra": "mean: 74.40472785741751 usec\nrounds: 8084"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 14189.364493845982,
            "unit": "iter/sec",
            "range": "stddev: 0.00005446406890779846",
            "extra": "mean: 70.47531976740089 usec\nrounds: 8772"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 54366.627505195414,
            "unit": "iter/sec",
            "range": "stddev: 0.00003695321973752183",
            "extra": "mean: 18.393636793167598 usec\nrounds: 24570"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 44884.343797991685,
            "unit": "iter/sec",
            "range": "stddev: 0.00004889120715782022",
            "extra": "mean: 22.27948356559786 usec\nrounds: 22727"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 12431.524085605277,
            "unit": "iter/sec",
            "range": "stddev: 0.00006990134794739805",
            "extra": "mean: 80.44065981884883 usec\nrounds: 5744"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 12715.50903900125,
            "unit": "iter/sec",
            "range": "stddev: 0.00008161007444885894",
            "extra": "mean: 78.64411852744401 usec\nrounds: 8555"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 47795.631852776,
            "unit": "iter/sec",
            "range": "stddev: 0.000029957619984863522",
            "extra": "mean: 20.922414062445736 usec\nrounds: 22272"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 475436.04032728384,
            "unit": "iter/sec",
            "range": "stddev: 0.000008389215812482025",
            "extra": "mean: 2.1033323416365604 usec\nrounds: 45044"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 15524.83928972336,
            "unit": "iter/sec",
            "range": "stddev: 0.000027799851585460304",
            "extra": "mean: 64.41290510890818 usec\nrounds: 685"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 13651.684049038207,
            "unit": "iter/sec",
            "range": "stddev: 0.00016539943243750236",
            "extra": "mean: 73.25103601928528 usec\nrounds: 1749"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 477683.21885906975,
            "unit": "iter/sec",
            "range": "stddev: 0.000006980407616118535",
            "extra": "mean: 2.093437576451746 usec\nrounds: 111112"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 341931.01448821125,
            "unit": "iter/sec",
            "range": "stddev: 0.00001663361376901552",
            "extra": "mean: 2.924566528417319 usec\nrounds: 106383"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 13838.258435887024,
            "unit": "iter/sec",
            "range": "stddev: 0.00003632575502742227",
            "extra": "mean: 72.2634285689217 usec\nrounds: 49"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 14281.968595033115,
            "unit": "iter/sec",
            "range": "stddev: 0.00000946595495520723",
            "extra": "mean: 70.018358697958 usec\nrounds: 92"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 359638.0921839075,
            "unit": "iter/sec",
            "range": "stddev: 0.000008098198412671976",
            "extra": "mean: 2.7805730864811498 usec\nrounds: 112360"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 42824.844580681834,
            "unit": "iter/sec",
            "range": "stddev: 0.00003926118621904777",
            "extra": "mean: 23.350931212745074 usec\nrounds: 12953"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 16645.788552801223,
            "unit": "iter/sec",
            "range": "stddev: 0.00004511758955935115",
            "extra": "mean: 60.07525548146626 usec\nrounds: 8666"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 15738.479114963184,
            "unit": "iter/sec",
            "range": "stddev: 0.00007808151853606654",
            "extra": "mean: 63.538540966722834 usec\nrounds: 8873"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 41243.385194028066,
            "unit": "iter/sec",
            "range": "stddev: 0.000032227417318371816",
            "extra": "mean: 24.24631235519429 usec\nrounds: 20243"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 38612.221765997456,
            "unit": "iter/sec",
            "range": "stddev: 0.000050777668928760364",
            "extra": "mean: 25.898535599953902 usec\nrounds: 12500"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 14318.571634474414,
            "unit": "iter/sec",
            "range": "stddev: 0.00010002996042936454",
            "extra": "mean: 69.83936844596487 usec\nrounds: 8411"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 14304.566101150078,
            "unit": "iter/sec",
            "range": "stddev: 0.000056341311477771515",
            "extra": "mean: 69.90774784280948 usec\nrounds: 10081"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 37138.896391361835,
            "unit": "iter/sec",
            "range": "stddev: 0.000035230553201887436",
            "extra": "mean: 26.925948188180165 usec\nrounds: 12005"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 43989.313744274834,
            "unit": "iter/sec",
            "range": "stddev: 0.000057294203915055025",
            "extra": "mean: 22.732793828368123 usec\nrounds: 17985"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 16560.028048083466,
            "unit": "iter/sec",
            "range": "stddev: 0.0000425235644590355",
            "extra": "mean: 60.38637115205446 usec\nrounds: 9616"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 15717.696697310303,
            "unit": "iter/sec",
            "range": "stddev: 0.00005685871389401924",
            "extra": "mean: 63.62255356226115 usec\nrounds: 9251"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 45582.611844442305,
            "unit": "iter/sec",
            "range": "stddev: 0.000025515549859180224",
            "extra": "mean: 21.938190014487418 usec\nrounds: 21551"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 39215.72525341651,
            "unit": "iter/sec",
            "range": "stddev: 0.00002356380841664783",
            "extra": "mean: 25.499974653991107 usec\nrounds: 17123"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 14475.347037801734,
            "unit": "iter/sec",
            "range": "stddev: 0.0000788880840251362",
            "extra": "mean: 69.08297240740023 usec\nrounds: 7502"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 14134.695056542518,
            "unit": "iter/sec",
            "range": "stddev: 0.00007611628369994041",
            "extra": "mean: 70.74790053833745 usec\nrounds: 10215"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 38442.65560429554,
            "unit": "iter/sec",
            "range": "stddev: 0.00003303821425225857",
            "extra": "mean: 26.01277108151345 usec\nrounds: 20492"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 32371.149644539706,
            "unit": "iter/sec",
            "range": "stddev: 0.00007639919336842431",
            "extra": "mean: 30.89170483534797 usec\nrounds: 12532"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 30386.244349962646,
            "unit": "iter/sec",
            "range": "stddev: 0.000118302399642433",
            "extra": "mean: 32.90962806995361 usec\nrounds: 16694"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 31059.09883392748,
            "unit": "iter/sec",
            "range": "stddev: 0.00007527533387981336",
            "extra": "mean: 32.19668430648888 usec\nrounds: 15873"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 33189.82822039998,
            "unit": "iter/sec",
            "range": "stddev: 0.00004537374655812594",
            "extra": "mean: 30.1297130361571 usec\nrounds: 16807"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 29181.45587127367,
            "unit": "iter/sec",
            "range": "stddev: 0.00004036029224888881",
            "extra": "mean: 34.2683382354615 usec\nrounds: 13124"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 27365.992889553247,
            "unit": "iter/sec",
            "range": "stddev: 0.0000795293711008751",
            "extra": "mean: 36.541703567486564 usec\nrounds: 15221"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 27535.330583557745,
            "unit": "iter/sec",
            "range": "stddev: 0.00006154365470274563",
            "extra": "mean: 36.316978180648135 usec\nrounds: 15674"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 29166.419058491214,
            "unit": "iter/sec",
            "range": "stddev: 0.00004673338909865099",
            "extra": "mean: 34.286005354122146 usec\nrounds: 15314"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 32453.171923551654,
            "unit": "iter/sec",
            "range": "stddev: 0.00004932770397817458",
            "extra": "mean: 30.81362901461993 usec\nrounds: 16502"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 32044.8805595288,
            "unit": "iter/sec",
            "range": "stddev: 0.00003686305074915558",
            "extra": "mean: 31.206232712970497 usec\nrounds: 17094"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 33114.507179615066,
            "unit": "iter/sec",
            "range": "stddev: 0.000046942541879573506",
            "extra": "mean: 30.19824497390042 usec\nrounds: 16863"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 32560.82406465106,
            "unit": "iter/sec",
            "range": "stddev: 0.00003236490408714891",
            "extra": "mean: 30.711753425357188 usec\nrounds: 16129"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 25846.19669297614,
            "unit": "iter/sec",
            "range": "stddev: 0.0000308288836347052",
            "extra": "mean: 38.69041205090558 usec\nrounds: 12547"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 26011.802848756608,
            "unit": "iter/sec",
            "range": "stddev: 0.00003025625822681539",
            "extra": "mean: 38.44408654849547 usec\nrounds: 15552"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 24948.979371514295,
            "unit": "iter/sec",
            "range": "stddev: 0.00008100716686836146",
            "extra": "mean: 40.08179994496121 usec\nrounds: 14556"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 25653.72231466425,
            "unit": "iter/sec",
            "range": "stddev: 0.00003855190321543495",
            "extra": "mean: 38.98069791721326 usec\nrounds: 15221"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 53731.02983741754,
            "unit": "iter/sec",
            "range": "stddev: 0.00004194447033798498",
            "extra": "mean: 18.611219681175996 usec\nrounds: 21645"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 17934.659815317802,
            "unit": "iter/sec",
            "range": "stddev: 0.00003827380247031887",
            "extra": "mean: 55.7579575134127 usec\nrounds: 10215"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 17446.007406508237,
            "unit": "iter/sec",
            "range": "stddev: 0.00007508638930641383",
            "extra": "mean: 57.31970511642393 usec\nrounds: 9597"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 53054.08020582108,
            "unit": "iter/sec",
            "range": "stddev: 0.00005490122718420909",
            "extra": "mean: 18.848691676880303 usec\nrounds: 24390"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 47990.89910088665,
            "unit": "iter/sec",
            "range": "stddev: 0.00003219553531663117",
            "extra": "mean: 20.83728412542962 usec\nrounds: 23201"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 16056.460229798877,
            "unit": "iter/sec",
            "range": "stddev: 0.00008478929546883499",
            "extra": "mean: 62.28022775182536 usec\nrounds: 8540"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 16013.19734795422,
            "unit": "iter/sec",
            "range": "stddev: 0.000065704118238528",
            "extra": "mean: 62.44849034648012 usec\nrounds: 10929"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 46536.231681319034,
            "unit": "iter/sec",
            "range": "stddev: 0.00007378944347973554",
            "extra": "mean: 21.488632918282217 usec\nrounds: 19685"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 49258.420065906845,
            "unit": "iter/sec",
            "range": "stddev: 0.00010200203400960777",
            "extra": "mean: 20.30109773439787 usec\nrounds: 21231"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 17025.50736644768,
            "unit": "iter/sec",
            "range": "stddev: 0.00004547868289740769",
            "extra": "mean: 58.73540085922543 usec\nrounds: 9542"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 17553.976065829444,
            "unit": "iter/sec",
            "range": "stddev: 0.000044835925898464656",
            "extra": "mean: 56.96715070419854 usec\nrounds: 10650"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 51476.92795175861,
            "unit": "iter/sec",
            "range": "stddev: 0.000040081976769549085",
            "extra": "mean: 19.42617867439848 usec\nrounds: 22124"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 45891.50594050823,
            "unit": "iter/sec",
            "range": "stddev: 0.00005164264004466443",
            "extra": "mean: 21.790524836913328 usec\nrounds: 20534"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 15746.031599059615,
            "unit": "iter/sec",
            "range": "stddev: 0.00006573017436873163",
            "extra": "mean: 63.50806510890794 usec\nrounds: 8432"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 15332.289384543596,
            "unit": "iter/sec",
            "range": "stddev: 0.00009287744348033252",
            "extra": "mean: 65.22183184254891 usec\nrounds: 9390"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 46220.394735258174,
            "unit": "iter/sec",
            "range": "stddev: 0.00003465566831490482",
            "extra": "mean: 21.63547078573894 usec\nrounds: 18450"
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
          "id": "891b5d2e46bcb5bddfd8f1548d149804470bf873",
          "message": "Pint 0.2.1",
          "timestamp": "2022-11-26T23:23:24-03:00",
          "tree_id": "4f00663113b3cf6229634ebf657954106faabd47",
          "url": "https://github.com/hgrecco/pint-benchmark/commit/891b5d2e46bcb5bddfd8f1548d149804470bf873"
        },
        "date": 1669517695982,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 3.4408033697262974,
            "unit": "iter/sec",
            "range": "stddev: 0.017225483672075794",
            "extra": "mean: 290.62980139999866 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 48641.41814615079,
            "unit": "iter/sec",
            "range": "stddev: 0.00026508194007959427",
            "extra": "mean: 20.558611120163945 usec\nrounds: 6169"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 33.102252439870604,
            "unit": "iter/sec",
            "range": "stddev: 0.0006386836599320807",
            "extra": "mean: 30.209424625000203 msec\nrounds: 32"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 1073.4422447917548,
            "unit": "iter/sec",
            "range": "stddev: 0.00007579147541581398",
            "extra": "mean: 931.5824906760564 usec\nrounds: 858"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 12460.266935461992,
            "unit": "iter/sec",
            "range": "stddev: 0.000003677248585417269",
            "extra": "mean: 80.25510249334981 usec\nrounds: 9425"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 12210.533344505504,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030459187688172973",
            "extra": "mean: 81.89650458224907 usec\nrounds: 5565"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 12441.803893609733,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035620688724656067",
            "extra": "mean: 80.37419722662665 usec\nrounds: 8726"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 12475.458720929844,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036838286872624745",
            "extra": "mean: 80.15737315713439 usec\nrounds: 7868"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 12281.127905044641,
            "unit": "iter/sec",
            "range": "stddev: 0.000003801037249980372",
            "extra": "mean: 81.42574588684451 usec\nrounds: 8327"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 11162.633309178367,
            "unit": "iter/sec",
            "range": "stddev: 0.000056195894971039274",
            "extra": "mean: 89.58459642114731 usec\nrounds: 6762"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 11252.629501259038,
            "unit": "iter/sec",
            "range": "stddev: 0.000026423987419319704",
            "extra": "mean: 88.8681174376275 usec\nrounds: 5339"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 11729.39536346347,
            "unit": "iter/sec",
            "range": "stddev: 0.000004138867645569176",
            "extra": "mean: 85.25588651525501 usec\nrounds: 8098"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 11647.674478831439,
            "unit": "iter/sec",
            "range": "stddev: 0.000025895258803502583",
            "extra": "mean: 85.85404767427238 usec\nrounds: 8621"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 11506.085301313387,
            "unit": "iter/sec",
            "range": "stddev: 0.000004791357044903958",
            "extra": "mean: 86.91053245414867 usec\nrounds: 8643"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 2665421.5500049624,
            "unit": "iter/sec",
            "range": "stddev: 4.9161413474823835e-8",
            "extra": "mean: 375.17517632349404 nsec\nrounds: 185151"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 2655217.941533515,
            "unit": "iter/sec",
            "range": "stddev: 5.676262410515289e-8",
            "extra": "mean: 376.61691884462283 nsec\nrounds: 200000"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 2682204.871707713,
            "unit": "iter/sec",
            "range": "stddev: 4.6859361707162836e-8",
            "extra": "mean: 372.82759812558794 nsec\nrounds: 188680"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 2654386.6708269073,
            "unit": "iter/sec",
            "range": "stddev: 5.315001765015832e-8",
            "extra": "mean: 376.7348634588567 nsec\nrounds: 200000"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 2650218.373083331,
            "unit": "iter/sec",
            "range": "stddev: 4.767254059168252e-8",
            "extra": "mean: 377.3273969259623 nsec\nrounds: 200000"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 13126.66530214562,
            "unit": "iter/sec",
            "range": "stddev: 0.000004451406736535075",
            "extra": "mean: 76.1808103568044 usec\nrounds: 10061"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 12700.849746412621,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034982109952936502",
            "extra": "mean: 78.73488939450306 usec\nrounds: 6374"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 13045.11137081958,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034009813626630448",
            "extra": "mean: 76.65706881099423 usec\nrounds: 9824"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 13093.379375263366,
            "unit": "iter/sec",
            "range": "stddev: 0.000003881463708363671",
            "extra": "mean: 76.3744768511976 usec\nrounds: 7711"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 12888.267575432497,
            "unit": "iter/sec",
            "range": "stddev: 0.000003588745782687262",
            "extra": "mean: 77.58994714744992 usec\nrounds: 10236"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 9258.435936995187,
            "unit": "iter/sec",
            "range": "stddev: 0.000004549651573908367",
            "extra": "mean: 108.0096040848719 usec\nrounds: 6610"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 9027.891090960773,
            "unit": "iter/sec",
            "range": "stddev: 0.000004697805769723754",
            "extra": "mean: 110.76784045404088 usec\nrounds: 4845"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 9151.3091517727,
            "unit": "iter/sec",
            "range": "stddev: 0.000005671270938572923",
            "extra": "mean: 109.27398292585164 usec\nrounds: 6911"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 9125.2272070844,
            "unit": "iter/sec",
            "range": "stddev: 0.000005549326328306295",
            "extra": "mean: 109.58631246174853 usec\nrounds: 6532"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 9075.608701089592,
            "unit": "iter/sec",
            "range": "stddev: 0.000005683757345866338",
            "extra": "mean: 110.18544683178584 usec\nrounds: 6423"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 13208.754632023913,
            "unit": "iter/sec",
            "range": "stddev: 0.000004394218742127136",
            "extra": "mean: 75.70736438509911 usec\nrounds: 9833"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 10904.47142121318,
            "unit": "iter/sec",
            "range": "stddev: 0.000006319893197579239",
            "extra": "mean: 91.70549964069187 usec\nrounds: 6959"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 8108.24752204371,
            "unit": "iter/sec",
            "range": "stddev: 0.000004356741257855166",
            "extra": "mean: 123.33121272893095 usec\nrounds: 4588"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 7510.702074608806,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048564123233027615",
            "extra": "mean: 133.14334533127982 usec\nrounds: 5751"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 12022.514167862819,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036228960022408303",
            "extra": "mean: 83.1772777338939 usec\nrounds: 10132"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 11954.707191566828,
            "unit": "iter/sec",
            "range": "stddev: 0.000004396630464395741",
            "extra": "mean: 83.64905839813684 usec\nrounds: 10788"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 12042.77582508961,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037551794442027835",
            "extra": "mean: 83.03733412662433 usec\nrounds: 11765"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 16585753.408993907,
            "unit": "iter/sec",
            "range": "stddev: 7.68100824649966e-9",
            "extra": "mean: 60.29270876869157 nsec\nrounds: 161291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 15605221.006652875,
            "unit": "iter/sec",
            "range": "stddev: 7.363121867609628e-9",
            "extra": "mean: 64.08111743967945 nsec\nrounds: 151516"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 13217976.907897117,
            "unit": "iter/sec",
            "range": "stddev: 9.613432706609494e-9",
            "extra": "mean: 75.65454282204269 nsec\nrounds: 131579"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 16958128.572030045,
            "unit": "iter/sec",
            "range": "stddev: 7.567882162289429e-9",
            "extra": "mean: 58.96877097918272 nsec\nrounds: 161291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 16980221.58678363,
            "unit": "iter/sec",
            "range": "stddev: 8.851661157986952e-9",
            "extra": "mean: 58.89204654301109 nsec\nrounds: 163935"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 16610255.229963928,
            "unit": "iter/sec",
            "range": "stddev: 8.59879923333255e-9",
            "extra": "mean: 60.20377087246455 nsec\nrounds: 166667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 53885.245396337086,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012203299565273737",
            "extra": "mean: 18.55795575662306 usec\nrounds: 11821"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 20792.075724148763,
            "unit": "iter/sec",
            "range": "stddev: 0.000002474405339448074",
            "extra": "mean: 48.09524615373343 usec\nrounds: 195"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 54518.20896980108,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019140590504970782",
            "extra": "mean: 18.342495450536966 usec\nrounds: 14837"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 21355.511121584237,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031075909222595927",
            "extra": "mean: 46.826320115058714 usec\nrounds: 7994"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 53490.8585280639,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014665638293606205",
            "extra": "mean: 18.694783137110267 usec\nrounds: 15798"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 21095.223307833145,
            "unit": "iter/sec",
            "range": "stddev: 0.000006809559424504717",
            "extra": "mean: 47.40409643488708 usec\nrounds: 8555"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 17505.245443896234,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035454249692717708",
            "extra": "mean: 57.125734295184195 usec\nrounds: 9010"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 36678.93300831786,
            "unit": "iter/sec",
            "range": "stddev: 0.000002042875575174613",
            "extra": "mean: 27.26360659873135 usec\nrounds: 13124"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 17762.17294709168,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028072681571955636",
            "extra": "mean: 56.29941803734867 usec\nrounds: 8937"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 36152.91022495222,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017990520480703041",
            "extra": "mean: 27.660290520949943 usec\nrounds: 11710"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 17461.033710520933,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031226576084475694",
            "extra": "mean: 57.2703779500444 usec\nrounds: 8644"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 36107.53619366074,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020888016910893883",
            "extra": "mean: 27.69504943889155 usec\nrounds: 9001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 53086.6268822826,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015796134144664272",
            "extra": "mean: 18.837135804794276 usec\nrounds: 15699"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 21071.16927952413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030453078672447554",
            "extra": "mean: 47.458211109895466 usec\nrounds: 8929"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 52031.53886827518,
            "unit": "iter/sec",
            "range": "stddev: 0.000001663251384855946",
            "extra": "mean: 19.219112518113945 usec\nrounds: 16584"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 21128.161927072015,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033898262482554123",
            "extra": "mean: 47.33019386408035 usec\nrounds: 8279"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 52212.10433139803,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012629544678205834",
            "extra": "mean: 19.15264693514076 usec\nrounds: 15221"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 20950.269843409,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020202652698017693",
            "extra": "mean: 47.73208209127684 usec\nrounds: 8320"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 17558.979656086984,
            "unit": "iter/sec",
            "range": "stddev: 0.000008181910571650008",
            "extra": "mean: 56.950917398741936 usec\nrounds: 8765"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 35960.88343248235,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020980348234758558",
            "extra": "mean: 27.807993145594725 usec\nrounds: 12255"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 17239.302916881694,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039378583315896355",
            "extra": "mean: 58.00698582891909 usec\nrounds: 8468"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 36397.31800534677,
            "unit": "iter/sec",
            "range": "stddev: 0.000002182369643597039",
            "extra": "mean: 27.474551829700744 usec\nrounds: 12078"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 17509.24105612975,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068633014215904006",
            "extra": "mean: 57.11269819144522 usec\nrounds: 7962"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 35858.00689233411,
            "unit": "iter/sec",
            "range": "stddev: 0.000001908973287594374",
            "extra": "mean: 27.887774214628326 usec\nrounds: 12255"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 50611.05113035663,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014654297225391238",
            "extra": "mean: 19.758530551447045 usec\nrounds: 14451"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 20735.342641872794,
            "unit": "iter/sec",
            "range": "stddev: 0.000003193452263601857",
            "extra": "mean: 48.226837495349976 usec\nrounds: 7969"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 50707.054596949674,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017348248597609938",
            "extra": "mean: 19.7211218034375 usec\nrounds: 15016"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 20694.030558446277,
            "unit": "iter/sec",
            "range": "stddev: 0.000002731780051479162",
            "extra": "mean: 48.32311410653879 usec\nrounds: 8606"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 51005.24726399113,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017564329467046176",
            "extra": "mean: 19.605825942265035 usec\nrounds: 16529"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 20672.778732003408,
            "unit": "iter/sec",
            "range": "stddev: 0.000003352806685271755",
            "extra": "mean: 48.37279075850146 usec\nrounds: 8397"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 17371.831908163927,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032398367092734743",
            "extra": "mean: 57.56445291932902 usec\nrounds: 8889"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 35314.2820469742,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015522391822450521",
            "extra": "mean: 28.31715504423463 usec\nrounds: 11429"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 17284.251199103594,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033325377529657823",
            "extra": "mean: 57.856136692335426 usec\nrounds: 8157"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 35260.40964866255,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021569838654847172",
            "extra": "mean: 28.36041923403833 usec\nrounds: 12270"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 17216.9476402549,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032040546360090494",
            "extra": "mean: 58.08230476707163 usec\nrounds: 9125"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 35472.291601294666,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024631862336883717",
            "extra": "mean: 28.191017688958727 usec\nrounds: 12211"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 54887.27804384725,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018972856282580748",
            "extra": "mean: 18.21915816632663 usec\nrounds: 16078"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 21041.396620041894,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031136298682948743",
            "extra": "mean: 47.525362410948595 usec\nrounds: 8827"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 52619.750076771685,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012896825134284194",
            "extra": "mean: 19.004271182227395 usec\nrounds: 15650"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 21151.702726361924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024813171344387253",
            "extra": "mean: 47.27751769854791 usec\nrounds: 8673"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 54500.795172687554,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020204711188634332",
            "extra": "mean: 18.34835614474004 usec\nrounds: 15314"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 21049.652814735917,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025520423964446054",
            "extra": "mean: 47.506721787826585 usec\nrounds: 8569"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 17538.409558866595,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030247412807263374",
            "extra": "mean: 57.01771284582912 usec\nrounds: 8929"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 36315.187001908205,
            "unit": "iter/sec",
            "range": "stddev: 0.000002050333840963129",
            "extra": "mean: 27.536688712285976 usec\nrounds: 12837"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 17576.336167939295,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075387420453165916",
            "extra": "mean: 56.89467875700303 usec\nrounds: 8850"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 36362.33533180868,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015861105358398833",
            "extra": "mean: 27.50098394052348 usec\nrounds: 12516"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 17430.250276836243,
            "unit": "iter/sec",
            "range": "stddev: 0.000002175755252965161",
            "extra": "mean: 57.371522733034986 usec\nrounds: 7962"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 36007.006539870985,
            "unit": "iter/sec",
            "range": "stddev: 0.000002000033776129658",
            "extra": "mean: 27.772372549011767 usec\nrounds: 11628"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 53301.13460887494,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017456155440536794",
            "extra": "mean: 18.76132670229302 usec\nrounds: 16287"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 20796.518522273353,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026160333797206604",
            "extra": "mean: 48.08497147871103 usec\nrounds: 8555"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 53123.423122187516,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013603564253561436",
            "extra": "mean: 18.824088155989713 usec\nrounds: 15949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 21055.492756705302,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024572621445253566",
            "extra": "mean: 47.493545344909656 usec\nrounds: 8292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 52635.64244764765,
            "unit": "iter/sec",
            "range": "stddev: 0.000001388174950644118",
            "extra": "mean: 18.998533189646498 usec\nrounds: 15773"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 20697.387281229683,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018842932558719924",
            "extra": "mean: 48.31527701599772 usec\nrounds: 8606"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 17421.436127565223,
            "unit": "iter/sec",
            "range": "stddev: 0.000002798754703575978",
            "extra": "mean: 57.40054910959614 usec\nrounds: 8929"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 36153.80563776513,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015657381490478024",
            "extra": "mean: 27.65960546503108 usec\nrounds: 12516"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 17384.8389539634,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026923136716594954",
            "extra": "mean: 57.521384158236316 usec\nrounds: 8749"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 36340.920313293806,
            "unit": "iter/sec",
            "range": "stddev: 0.000001543713693130246",
            "extra": "mean: 27.517189751361133 usec\nrounds: 12548"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 17225.830153309966,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028101778777564456",
            "extra": "mean: 58.052354580301525 usec\nrounds: 8362"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 36282.4809189968,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018592132551798273",
            "extra": "mean: 27.561511083891162 usec\nrounds: 12225"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 51465.697335148325,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010637575628083253",
            "extra": "mean: 19.430417769100224 usec\nrounds: 15949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 20643.625561062443,
            "unit": "iter/sec",
            "range": "stddev: 0.000002362489234727622",
            "extra": "mean: 48.44110338283689 usec\nrounds: 8425"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 50828.656667261945,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015792156683225935",
            "extra": "mean: 19.673941149896386 usec\nrounds: 15480"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 20579.214517500808,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020657435781253603",
            "extra": "mean: 48.59271956903837 usec\nrounds: 8355"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 50952.930891817414,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013302670195450656",
            "extra": "mean: 19.62595639735007 usec\nrounds: 16421"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 20700.339030913066,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018270302392458593",
            "extra": "mean: 48.30838753445727 usec\nrounds: 8327"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 16990.436794220444,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024245850643359846",
            "extra": "mean: 58.85663871456002 usec\nrounds: 1276"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 35451.13263598569,
            "unit": "iter/sec",
            "range": "stddev: 0.000002163344499863415",
            "extra": "mean: 28.207843463509576 usec\nrounds: 12438"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 17138.71905560599,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024295819333175243",
            "extra": "mean: 58.34741772448303 usec\nrounds: 8666"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 35484.03859615118,
            "unit": "iter/sec",
            "range": "stddev: 0.000001956652146805972",
            "extra": "mean: 28.18168504947084 usec\nrounds: 12548"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 16950.559015268616,
            "unit": "iter/sec",
            "range": "stddev: 0.000006588657695646528",
            "extra": "mean: 58.99510447408999 usec\nrounds: 8404"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 35136.94633957313,
            "unit": "iter/sec",
            "range": "stddev: 0.000002038848548568695",
            "extra": "mean: 28.460071354400707 usec\nrounds: 12501"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 174658.0934807085,
            "unit": "iter/sec",
            "range": "stddev: 7.312912888506055e-7",
            "extra": "mean: 5.72547186374992 usec\nrounds: 55249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 169692.12247414555,
            "unit": "iter/sec",
            "range": "stddev: 6.978317581222187e-7",
            "extra": "mean: 5.893025471187449 usec\nrounds: 55553"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 170819.66861685304,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015078092699381572",
            "extra": "mean: 5.854126799900255 usec\nrounds: 59172"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 166598.11807866438,
            "unit": "iter/sec",
            "range": "stddev: 6.087802226421618e-7",
            "extra": "mean: 6.002468764550026 usec\nrounds: 55866"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 172191.83996904042,
            "unit": "iter/sec",
            "range": "stddev: 7.639852660060377e-7",
            "extra": "mean: 5.807476127671306 usec\nrounds: 59881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 166852.25986448102,
            "unit": "iter/sec",
            "range": "stddev: 7.607296963165944e-7",
            "extra": "mean: 5.9933260766873016 usec\nrounds: 57143"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 169655.75265121803,
            "unit": "iter/sec",
            "range": "stddev: 5.228074327216897e-7",
            "extra": "mean: 5.89428878404036 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 174578.43727353908,
            "unit": "iter/sec",
            "range": "stddev: 7.62419087671588e-7",
            "extra": "mean: 5.728084267549864 usec\nrounds: 57804"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 171343.71030161364,
            "unit": "iter/sec",
            "range": "stddev: 7.569739545774168e-7",
            "extra": "mean: 5.836222399058102 usec\nrounds: 54645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 175172.6753587228,
            "unit": "iter/sec",
            "range": "stddev: 8.339772712852882e-7",
            "extra": "mean: 5.708652893221936 usec\nrounds: 59172"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 162145.76221215064,
            "unit": "iter/sec",
            "range": "stddev: 8.121819266980183e-7",
            "extra": "mean: 6.1672903833996315 usec\nrounds: 54645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 170101.1737526581,
            "unit": "iter/sec",
            "range": "stddev: 8.212861487062753e-7",
            "extra": "mean: 5.878854201524129 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 175561.36904971235,
            "unit": "iter/sec",
            "range": "stddev: 7.776008903140966e-7",
            "extra": "mean: 5.696013909055573 usec\nrounds: 57804"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 166999.92916605165,
            "unit": "iter/sec",
            "range": "stddev: 6.692464315102281e-7",
            "extra": "mean: 5.988026491949457 usec\nrounds: 55866"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 175930.14073996618,
            "unit": "iter/sec",
            "range": "stddev: 6.238515840339376e-7",
            "extra": "mean: 5.684074347885912 usec\nrounds: 60607"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 167402.42213494095,
            "unit": "iter/sec",
            "range": "stddev: 8.170544710557611e-7",
            "extra": "mean: 5.973629217825252 usec\nrounds: 54946"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 174452.07797077432,
            "unit": "iter/sec",
            "range": "stddev: 9.181910188826026e-7",
            "extra": "mean: 5.7322332392482505 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 165985.39776302746,
            "unit": "iter/sec",
            "range": "stddev: 7.044175350546038e-7",
            "extra": "mean: 6.024626343503246 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 170216.5319358919,
            "unit": "iter/sec",
            "range": "stddev: 7.810283795135635e-7",
            "extra": "mean: 5.874870017776105 usec\nrounds: 54946"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 172463.25870606324,
            "unit": "iter/sec",
            "range": "stddev: 9.038636739410329e-7",
            "extra": "mean: 5.79833645440009 usec\nrounds: 56498"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 166659.59896545022,
            "unit": "iter/sec",
            "range": "stddev: 8.14768350931895e-7",
            "extra": "mean: 6.000254448033968 usec\nrounds: 55249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 173178.43345466012,
            "unit": "iter/sec",
            "range": "stddev: 8.866857415017471e-7",
            "extra": "mean: 5.774391071979585 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 167828.55729895039,
            "unit": "iter/sec",
            "range": "stddev: 9.8567903387051e-7",
            "extra": "mean: 5.958461516288408 usec\nrounds: 55556"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 174404.61370489295,
            "unit": "iter/sec",
            "range": "stddev: 9.236481093168775e-7",
            "extra": "mean: 5.733793268176281 usec\nrounds: 61350"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 173952.05535442728,
            "unit": "iter/sec",
            "range": "stddev: 7.966699695485858e-7",
            "extra": "mean: 5.748710459111852 usec\nrounds: 59881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 165430.52512499044,
            "unit": "iter/sec",
            "range": "stddev: 8.596769380948803e-7",
            "extra": "mean: 6.044833619698985 usec\nrounds: 55866"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 174301.8545738175,
            "unit": "iter/sec",
            "range": "stddev: 8.809602960886134e-7",
            "extra": "mean: 5.737173608651974 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 167848.6410330748,
            "unit": "iter/sec",
            "range": "stddev: 9.402111061519502e-7",
            "extra": "mean: 5.957748563498639 usec\nrounds: 59172"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 172128.83792946656,
            "unit": "iter/sec",
            "range": "stddev: 9.059902576869042e-7",
            "extra": "mean: 5.80960176126775 usec\nrounds: 58480"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 163972.8428778926,
            "unit": "iter/sec",
            "range": "stddev: 9.015224879992662e-7",
            "extra": "mean: 6.098570851422517 usec\nrounds: 54946"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 166983.77829904915,
            "unit": "iter/sec",
            "range": "stddev: 0.000001118906098807285",
            "extra": "mean: 5.988605660899064 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 174398.40044269594,
            "unit": "iter/sec",
            "range": "stddev: 7.716186061883994e-7",
            "extra": "mean: 5.733997545055359 usec\nrounds: 59881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 168726.0986320726,
            "unit": "iter/sec",
            "range": "stddev: 8.644366201863378e-7",
            "extra": "mean: 5.926765379555296 usec\nrounds: 57804"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 173311.10686162792,
            "unit": "iter/sec",
            "range": "stddev: 9.64112226963333e-7",
            "extra": "mean: 5.769970650515797 usec\nrounds: 59524"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 165411.24990772948,
            "unit": "iter/sec",
            "range": "stddev: 9.57568468848359e-7",
            "extra": "mean: 6.045538018471083 usec\nrounds: 57472"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 172285.77536343754,
            "unit": "iter/sec",
            "range": "stddev: 7.422817078693163e-7",
            "extra": "mean: 5.804309716751112 usec\nrounds: 60607"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 140820.91634641727,
            "unit": "iter/sec",
            "range": "stddev: 8.641602846210475e-7",
            "extra": "mean: 7.10121781582514 usec\nrounds: 31949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 140716.96404132422,
            "unit": "iter/sec",
            "range": "stddev: 8.941896290910975e-7",
            "extra": "mean: 7.1064637217893 usec\nrounds: 46295"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 142177.55734060728,
            "unit": "iter/sec",
            "range": "stddev: 9.186779213814537e-7",
            "extra": "mean: 7.0334588573944385 usec\nrounds: 44844"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 140138.79783169704,
            "unit": "iter/sec",
            "range": "stddev: 9.921745722261943e-7",
            "extra": "mean: 7.135782634591838 usec\nrounds: 36901"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 140288.27521737936,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012055163261230403",
            "extra": "mean: 7.12817944657514 usec\nrounds: 41667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 140081.6089179811,
            "unit": "iter/sec",
            "range": "stddev: 9.067764667635279e-7",
            "extra": "mean: 7.13869584825734 usec\nrounds: 43669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 139249.8993204131,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010155374725682503",
            "extra": "mean: 7.181333737979994 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 140390.40802458386,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011277590701284214",
            "extra": "mean: 7.122993757699524 usec\nrounds: 46297"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 140078.5593978192,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011953904576422833",
            "extra": "mean: 7.1388512581716945 usec\nrounds: 45663"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 141633.01573069513,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011632909414952799",
            "extra": "mean: 7.060500652626272 usec\nrounds: 46729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 140249.7835223778,
            "unit": "iter/sec",
            "range": "stddev: 7.919773023312329e-7",
            "extra": "mean: 7.130135782637006 usec\nrounds: 45455"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 139635.6419174577,
            "unit": "iter/sec",
            "range": "stddev: 8.664545124758518e-7",
            "extra": "mean: 7.161495347950821 usec\nrounds: 45249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 140506.7700980106,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011059175787416317",
            "extra": "mean: 7.117094779863271 usec\nrounds: 47394"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 142671.75023785792,
            "unit": "iter/sec",
            "range": "stddev: 8.951131946569719e-7",
            "extra": "mean: 7.009096042719256 usec\nrounds: 37879"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 140234.10154784803,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010202448540177247",
            "extra": "mean: 7.130933125127193 usec\nrounds: 46729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 142306.41723320712,
            "unit": "iter/sec",
            "range": "stddev: 7.917051482267104e-7",
            "extra": "mean: 7.027089989632953 usec\nrounds: 45872"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 139251.80290516763,
            "unit": "iter/sec",
            "range": "stddev: 8.858241030947353e-7",
            "extra": "mean: 7.181235568497549 usec\nrounds: 45872"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 139397.3052183003,
            "unit": "iter/sec",
            "range": "stddev: 7.456686639021636e-7",
            "extra": "mean: 7.173739825414635 usec\nrounds: 35972"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 141187.48699246426,
            "unit": "iter/sec",
            "range": "stddev: 6.750894769832054e-7",
            "extra": "mean: 7.082780643679663 usec\nrounds: 37879"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 142589.06268557665,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011162841022082381",
            "extra": "mean: 7.013160625125234 usec\nrounds: 46512"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 142431.23804460932,
            "unit": "iter/sec",
            "range": "stddev: 9.71794546888947e-7",
            "extra": "mean: 7.020931740316692 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 140850.15709136886,
            "unit": "iter/sec",
            "range": "stddev: 0.000001155586679777973",
            "extra": "mean: 7.099743590284422 usec\nrounds: 46297"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 140051.01130697373,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010141097549187667",
            "extra": "mean: 7.140255473115643 usec\nrounds: 46729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 139926.30074615905,
            "unit": "iter/sec",
            "range": "stddev: 9.805665043142859e-7",
            "extra": "mean: 7.14661928935079 usec\nrounds: 46295"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 140564.09858693246,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011473414964090671",
            "extra": "mean: 7.1141921020575944 usec\nrounds: 46949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 140099.5033242125,
            "unit": "iter/sec",
            "range": "stddev: 6.774051212841359e-7",
            "extra": "mean: 7.137784048283463 usec\nrounds: 45663"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 137389.33924889084,
            "unit": "iter/sec",
            "range": "stddev: 0.000009569625749796273",
            "extra": "mean: 7.278585117790158 usec\nrounds: 46512"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 139924.17169326442,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010465417032404426",
            "extra": "mean: 7.146728030609006 usec\nrounds: 36232"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 140471.77597790048,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023980416099316607",
            "extra": "mean: 7.118867779939819 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 140819.38812145544,
            "unit": "iter/sec",
            "range": "stddev: 9.309204543706448e-7",
            "extra": "mean: 7.101294880911634 usec\nrounds: 46083"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 140223.84941379682,
            "unit": "iter/sec",
            "range": "stddev: 0.000001149390494945025",
            "extra": "mean: 7.1314544863836025 usec\nrounds: 36901"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 141479.2379440291,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013343561027013036",
            "extra": "mean: 7.068174910551979 usec\nrounds: 41667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 139896.90165459798,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011129470446161472",
            "extra": "mean: 7.148121139015468 usec\nrounds: 43479"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 139643.2487042617,
            "unit": "iter/sec",
            "range": "stddev: 9.396455947356153e-7",
            "extra": "mean: 7.161105239808716 usec\nrounds: 45249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 141957.1554160428,
            "unit": "iter/sec",
            "range": "stddev: 9.9112290873244e-7",
            "extra": "mean: 7.044378968212182 usec\nrounds: 45046"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 139443.97628354252,
            "unit": "iter/sec",
            "range": "stddev: 8.637006270767982e-7",
            "extra": "mean: 7.171338817580908 usec\nrounds: 44248"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 518915.8865336904,
            "unit": "iter/sec",
            "range": "stddev: 2.882945508740489e-7",
            "extra": "mean: 1.927094594617071 usec\nrounds: 7622"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 33439.899301362864,
            "unit": "iter/sec",
            "range": "stddev: 0.000002066967723471428",
            "extra": "mean: 29.904396271888427 usec\nrounds: 13680"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 504264.76178455364,
            "unit": "iter/sec",
            "range": "stddev: 4.327513238546472e-7",
            "extra": "mean: 1.9830852278098474 usec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 33852.74263086525,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019020069208952417",
            "extra": "mean: 29.539704091456674 usec\nrounds: 13369"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 514383.61602175166,
            "unit": "iter/sec",
            "range": "stddev: 4.4455999024302166e-7",
            "extra": "mean: 1.9440743617263911 usec\nrounds: 147038"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 33733.121061243146,
            "unit": "iter/sec",
            "range": "stddev: 0.000002167060352783564",
            "extra": "mean: 29.644455316911834 usec\nrounds: 12611"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 33805.43627636555,
            "unit": "iter/sec",
            "range": "stddev: 0.00002795291143480948",
            "extra": "mean: 29.58104110311783 usec\nrounds: 13089"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 518928.50155239267,
            "unit": "iter/sec",
            "range": "stddev: 5.078946596849883e-7",
            "extra": "mean: 1.9270477474420178 usec\nrounds: 158731"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 34115.85442327921,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019604320092538052",
            "extra": "mean: 29.31188495509708 usec\nrounds: 13812"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 499477.81733339897,
            "unit": "iter/sec",
            "range": "stddev: 3.29763359717101e-7",
            "extra": "mean: 2.0020909143448606 usec\nrounds: 138889"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 34204.63652272059,
            "unit": "iter/sec",
            "range": "stddev: 0.0000269508359821238",
            "extra": "mean: 29.235802559566604 usec\nrounds: 14065"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 511731.5196754146,
            "unit": "iter/sec",
            "range": "stddev: 4.6499906756002753e-7",
            "extra": "mean: 1.9541497084922355 usec\nrounds: 45455"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 498428.6738611512,
            "unit": "iter/sec",
            "range": "stddev: 3.747793217548903e-7",
            "extra": "mean: 2.006305119353091 usec\nrounds: 161291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 33589.71923187655,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019428775327135858",
            "extra": "mean: 29.771013955097388 usec\nrounds: 14045"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 517659.96691534616,
            "unit": "iter/sec",
            "range": "stddev: 4.607865449881489e-7",
            "extra": "mean: 1.9317700110341578 usec\nrounds: 156251"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 33593.42741475534,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014970555868709316",
            "extra": "mean: 29.76772770618717 usec\nrounds: 11326"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 508935.9185327678,
            "unit": "iter/sec",
            "range": "stddev: 5.30439677727587e-7",
            "extra": "mean: 1.9648839148216164 usec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 33217.76652078793,
            "unit": "iter/sec",
            "range": "stddev: 0.000009034164122818704",
            "extra": "mean: 30.104371989435 usec\nrounds: 13909"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 34526.38798152577,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019590973960681577",
            "extra": "mean: 28.96335407384855 usec\nrounds: 15268"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 502209.50559589255,
            "unit": "iter/sec",
            "range": "stddev: 2.9089209594030113e-7",
            "extra": "mean: 1.9912008611096643 usec\nrounds: 133316"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 34844.60175603323,
            "unit": "iter/sec",
            "range": "stddev: 0.000002640924025070318",
            "extra": "mean: 28.698850025652916 usec\nrounds: 13569"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 513874.69825375575,
            "unit": "iter/sec",
            "range": "stddev: 5.518842946553587e-7",
            "extra": "mean: 1.945999683187732 usec\nrounds: 151516"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 34288.12730701972,
            "unit": "iter/sec",
            "range": "stddev: 0.00000217318859920391",
            "extra": "mean: 29.164614067309316 usec\nrounds: 13606"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 512418.9849981567,
            "unit": "iter/sec",
            "range": "stddev: 4.6258699047070235e-7",
            "extra": "mean: 1.9515280059414608 usec\nrounds: 149254"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 520825.1839050155,
            "unit": "iter/sec",
            "range": "stddev: 6.284180060421295e-7",
            "extra": "mean: 1.9200300425226233 usec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 33597.01201893937,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018354157139466849",
            "extra": "mean: 29.76455166418603 usec\nrounds: 12078"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 513900.60432700353,
            "unit": "iter/sec",
            "range": "stddev: 5.743058211815674e-7",
            "extra": "mean: 1.945901584041889 usec\nrounds: 153847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 33604.897500328094,
            "unit": "iter/sec",
            "range": "stddev: 0.000002047314223241875",
            "extra": "mean: 29.757567330483205 usec\nrounds: 13909"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 513218.5075981605,
            "unit": "iter/sec",
            "range": "stddev: 4.38909502169543e-7",
            "extra": "mean: 1.9484877984622087 usec\nrounds: 156251"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 33083.18083608116,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020965966568029298",
            "extra": "mean: 30.226839582165585 usec\nrounds: 13496"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 34593.59244974179,
            "unit": "iter/sec",
            "range": "stddev: 0.000002765487866667776",
            "extra": "mean: 28.907087387724147 usec\nrounds: 13812"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 513408.33112854033,
            "unit": "iter/sec",
            "range": "stddev: 4.119876990044958e-7",
            "extra": "mean: 1.9477673800147846 usec\nrounds: 158731"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 34176.80500436671,
            "unit": "iter/sec",
            "range": "stddev: 0.00002920311552417824",
            "extra": "mean: 29.25961042503042 usec\nrounds: 13928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 513509.6920948182,
            "unit": "iter/sec",
            "range": "stddev: 4.885540027892128e-7",
            "extra": "mean: 1.9473829129117053 usec\nrounds: 153847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 34407.460887866226,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022184516499851915",
            "extra": "mean: 29.06346397541498 usec\nrounds: 13699"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 515833.66119560046,
            "unit": "iter/sec",
            "range": "stddev: 5.22366469173808e-7",
            "extra": "mean: 1.938609430183749 usec\nrounds: 153847"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 12550.357203233869,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056846788129798805",
            "extra": "mean: 79.67900704390539 usec\nrounds: 8376"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 11670.97708052277,
            "unit": "iter/sec",
            "range": "stddev: 0.000006009557970781368",
            "extra": "mean: 85.68262906358201 usec\nrounds: 8244"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 13147.071631538853,
            "unit": "iter/sec",
            "range": "stddev: 0.000005392035506905144",
            "extra": "mean: 76.0625657200402 usec\nrounds: 10811"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 10970.09700445457,
            "unit": "iter/sec",
            "range": "stddev: 0.000005567929525750076",
            "extra": "mean: 91.1568967525023 usec\nrounds: 8591"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 9254.075709110937,
            "unit": "iter/sec",
            "range": "stddev: 0.000007669702494696573",
            "extra": "mean: 108.06049479533301 usec\nrounds: 7397"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 7455.062645679583,
            "unit": "iter/sec",
            "range": "stddev: 0.000006534861751633194",
            "extra": "mean: 134.13703513001704 usec\nrounds: 5380"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 10918.548429636858,
            "unit": "iter/sec",
            "range": "stddev: 0.000005824765958451509",
            "extra": "mean: 91.5872660587044 usec\nrounds: 8111"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 10366.174700300451,
            "unit": "iter/sec",
            "range": "stddev: 0.000009629848742529441",
            "extra": "mean: 96.46760052876749 usec\nrounds: 7943"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 400238.8011381865,
            "unit": "iter/sec",
            "range": "stddev: 7.330219370498456e-7",
            "extra": "mean: 2.4985083833856976 usec\nrounds: 60238"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 401151.02539431903,
            "unit": "iter/sec",
            "range": "stddev: 4.030748384702664e-7",
            "extra": "mean: 2.492826732817225 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 304707.61650035053,
            "unit": "iter/sec",
            "range": "stddev: 3.0421689239689874e-7",
            "extra": "mean: 3.281834604219188 usec\nrounds: 55866"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 302214.28236223763,
            "unit": "iter/sec",
            "range": "stddev: 5.430205244866343e-7",
            "extra": "mean: 3.308910459769032 usec\nrounds: 86207"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 35767.609272645714,
            "unit": "iter/sec",
            "range": "stddev: 0.0010575318939568662",
            "extra": "mean: 27.95825665554835 usec\nrounds: 12020"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 54723.93520867795,
            "unit": "iter/sec",
            "range": "stddev: 0.000001957677069190907",
            "extra": "mean: 18.273539652927283 usec\nrounds: 19305"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 46252.5922100803,
            "unit": "iter/sec",
            "range": "stddev: 0.000002232035622647602",
            "extra": "mean: 21.620409845527746 usec\nrounds: 15601"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 46530.15786472593,
            "unit": "iter/sec",
            "range": "stddev: 0.000002116414402459456",
            "extra": "mean: 21.49143793810531 usec\nrounds: 15267"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 54395.51969418144,
            "unit": "iter/sec",
            "range": "stddev: 0.000001779927042385241",
            "extra": "mean: 18.38386701004288 usec\nrounds: 10091"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 54891.61508955798,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017889929126520683",
            "extra": "mean: 18.21771865098992 usec\nrounds: 16723"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 50500.269524003044,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016161993716910006",
            "extra": "mean: 19.80187451325769 usec\nrounds: 16695"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 50121.34536370743,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010203694413791544",
            "extra": "mean: 19.951579366903708 usec\nrounds: 13551"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 7965.47937256361,
            "unit": "iter/sec",
            "range": "stddev: 0.00002247623901898354",
            "extra": "mean: 125.54172237824277 usec\nrounds: 1783"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 6170.438296367023,
            "unit": "iter/sec",
            "range": "stddev: 0.000010031838649416884",
            "extra": "mean: 162.06304187317963 usec\nrounds: 2221"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 5858.0043271371,
            "unit": "iter/sec",
            "range": "stddev: 0.000007772049914540879",
            "extra": "mean: 170.70659974891416 usec\nrounds: 2391"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 7425.440582407597,
            "unit": "iter/sec",
            "range": "stddev: 0.000013503493636052833",
            "extra": "mean: 134.67214354515298 usec\nrounds: 2076"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 196.63691505125894,
            "unit": "iter/sec",
            "range": "stddev: 0.00005260201260864798",
            "extra": "mean: 5.08551509638626 msec\nrounds: 83"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 159.01517971364441,
            "unit": "iter/sec",
            "range": "stddev: 0.011738868125451305",
            "extra": "mean: 6.288707793814443 msec\nrounds: 97"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 157.1226750391689,
            "unit": "iter/sec",
            "range": "stddev: 0.011706877020856222",
            "extra": "mean: 6.364453760418165 msec\nrounds: 96"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 159.64110438245407,
            "unit": "iter/sec",
            "range": "stddev: 0.011756340723441637",
            "extra": "mean: 6.264050877550234 msec\nrounds: 98"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 8285.855861334338,
            "unit": "iter/sec",
            "range": "stddev: 0.00000668398628880854",
            "extra": "mean: 120.68759301817762 usec\nrounds: 2435"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 6221.909046228481,
            "unit": "iter/sec",
            "range": "stddev: 0.000007127399927662553",
            "extra": "mean: 160.72237516975076 usec\nrounds: 2215"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 5764.19475496136,
            "unit": "iter/sec",
            "range": "stddev: 0.0000158376369060598",
            "extra": "mean: 173.4847697745257 usec\nrounds: 2263"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 7639.672184386806,
            "unit": "iter/sec",
            "range": "stddev: 0.000006189358249796605",
            "extra": "mean: 130.89566880156187 usec\nrounds: 2654"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 158.7094554330144,
            "unit": "iter/sec",
            "range": "stddev: 0.01180476102830516",
            "extra": "mean: 6.300821821054414 msec\nrounds: 95"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 157.0083871797862,
            "unit": "iter/sec",
            "range": "stddev: 0.011943746041203839",
            "extra": "mean: 6.369086505263735 msec\nrounds: 95"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 159.5696293974009,
            "unit": "iter/sec",
            "range": "stddev: 0.011395064514508908",
            "extra": "mean: 6.2668566930712455 msec\nrounds: 101"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 160.61809646960432,
            "unit": "iter/sec",
            "range": "stddev: 0.01155716085868615",
            "extra": "mean: 6.225948519999065 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 147880.4845483645,
            "unit": "iter/sec",
            "range": "stddev: 9.539672283423843e-7",
            "extra": "mean: 6.762217496473977 usec\nrounds: 45872"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 141502.9367244233,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010163310297108403",
            "extra": "mean: 7.066991139183902 usec\nrounds: 48077"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 142805.7499156467,
            "unit": "iter/sec",
            "range": "stddev: 0.000001016673005397518",
            "extra": "mean: 7.002519160402754 usec\nrounds: 49503"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 148061.83520998116,
            "unit": "iter/sec",
            "range": "stddev: 9.390408331687264e-7",
            "extra": "mean: 6.753934925781521 usec\nrounds: 41153"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 130362.8688411051,
            "unit": "iter/sec",
            "range": "stddev: 0.000001745189443054501",
            "extra": "mean: 7.670895929874527 usec\nrounds: 44643"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 122809.20093127919,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018121872277515032",
            "extra": "mean: 8.142712373477407 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 120907.21563080416,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018542008479635895",
            "extra": "mean: 8.270804970429117 usec\nrounds: 43860"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 132134.46321151202,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017582105547956224",
            "extra": "mean: 7.568048302427104 usec\nrounds: 41323"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 108901.1274693435,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010557683553008557",
            "extra": "mean: 9.182641385246518 usec\nrounds: 20964"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 111677.67376289993,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013422155015930023",
            "extra": "mean: 8.954341242127544 usec\nrounds: 30304"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 108863.89453898263,
            "unit": "iter/sec",
            "range": "stddev: 7.82001663934353e-7",
            "extra": "mean: 9.185781973305339 usec\nrounds: 32363"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 108421.1668101198,
            "unit": "iter/sec",
            "range": "stddev: 7.400474642178792e-7",
            "extra": "mean: 9.223291257797662 usec\nrounds: 22523"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 93706.38822777501,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011668599594567385",
            "extra": "mean: 10.671631026577069 usec\nrounds: 30303"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 95865.78557115275,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010191444204478656",
            "extra": "mean: 10.431250253071653 usec\nrounds: 20747"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 96906.96523738945,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011915384702103942",
            "extra": "mean: 10.319175691348258 usec\nrounds: 33223"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 95583.21568958093,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014246868840437594",
            "extra": "mean: 10.462087854918291 usec\nrounds: 31848"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 74003.2036747233,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017659819164234796",
            "extra": "mean: 13.512928499628757 usec\nrounds: 10965"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 19714.884167137367,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036832633373411326",
            "extra": "mean: 50.72309791537577 usec\nrounds: 6955"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 20036.017078995224,
            "unit": "iter/sec",
            "range": "stddev: 0.000003338797027076811",
            "extra": "mean: 49.91011916476907 usec\nrounds: 8526"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 73306.39222808501,
            "unit": "iter/sec",
            "range": "stddev: 7.999758412508079e-7",
            "extra": "mean: 13.641375187154305 usec\nrounds: 21368"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 67742.8647366423,
            "unit": "iter/sec",
            "range": "stddev: 0.00000150157374640524",
            "extra": "mean: 14.761702267650005 usec\nrounds: 17331"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 17912.598233973324,
            "unit": "iter/sec",
            "range": "stddev: 0.000006548511945430209",
            "extra": "mean: 55.826630337936336 usec\nrounds: 6955"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 18402.639880643303,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058751194886538665",
            "extra": "mean: 54.340029826473085 usec\nrounds: 6169"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 68456.54007911021,
            "unit": "iter/sec",
            "range": "stddev: 0.000001266841772861254",
            "extra": "mean: 14.607808090277032 usec\nrounds: 22422"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 538342.4850402576,
            "unit": "iter/sec",
            "range": "stddev: 5.775618844128208e-7",
            "extra": "mean: 1.857553560769441 usec\nrounds: 40160"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 18679.342965811,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036767409922885925",
            "extra": "mean: 53.535073574606486 usec\nrounds: 666"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 18502.265953775375,
            "unit": "iter/sec",
            "range": "stddev: 0.000003699550103691773",
            "extra": "mean: 54.0474341087909 usec\nrounds: 2064"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 529876.9740955497,
            "unit": "iter/sec",
            "range": "stddev: 4.788337380198157e-7",
            "extra": "mean: 1.8872305249853634 usec\nrounds: 102041"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 448875.9430785018,
            "unit": "iter/sec",
            "range": "stddev: 6.197722350451535e-7",
            "extra": "mean: 2.227787020934456 usec\nrounds: 107527"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 17227.75449441924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000047345013314822896",
            "extra": "mean: 58.045870129153506 usec\nrounds: 77"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 17776.003469306608,
            "unit": "iter/sec",
            "range": "stddev: 0.000005024300434557811",
            "extra": "mean: 56.25561458325971 usec\nrounds: 96"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 460408.3376121646,
            "unit": "iter/sec",
            "range": "stddev: 4.4452095349577413e-7",
            "extra": "mean: 2.171984993117941 usec\nrounds: 116280"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 51262.10328385808,
            "unit": "iter/sec",
            "range": "stddev: 0.00003276476189225298",
            "extra": "mean: 19.50758817800771 usec\nrounds: 15480"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 21196.86559971978,
            "unit": "iter/sec",
            "range": "stddev: 0.000004123275569384764",
            "extra": "mean: 47.176786364735925 usec\nrounds: 9226"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 21025.223146110955,
            "unit": "iter/sec",
            "range": "stddev: 0.000005819726425185979",
            "extra": "mean: 47.561920891430375 usec\nrounds: 8482"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 52431.91764082329,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033633141682710495",
            "extra": "mean: 19.072352204440524 usec\nrounds: 19960"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 45991.935042817815,
            "unit": "iter/sec",
            "range": "stddev: 0.000004387619771733377",
            "extra": "mean: 21.742942519574676 usec\nrounds: 17606"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 19640.460958832442,
            "unit": "iter/sec",
            "range": "stddev: 0.000006422230263255848",
            "extra": "mean: 50.91530194205007 usec\nrounds: 9217"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 18432.734245479372,
            "unit": "iter/sec",
            "range": "stddev: 0.000006703905910622186",
            "extra": "mean: 54.251311101349486 usec\nrounds: 9116"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 46305.076211585605,
            "unit": "iter/sec",
            "range": "stddev: 0.000005115042308351984",
            "extra": "mean: 21.59590441943379 usec\nrounds: 20161"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 53087.6548372039,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027854354978947158",
            "extra": "mean: 18.8367710547123 usec\nrounds: 20791"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 21135.838549499636,
            "unit": "iter/sec",
            "range": "stddev: 0.000004709237023631181",
            "extra": "mean: 47.313003345385304 usec\nrounds: 10163"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 20843.941748025718,
            "unit": "iter/sec",
            "range": "stddev: 0.000004272557405254503",
            "extra": "mean: 47.975570652068114 usec\nrounds: 9200"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 52561.54677170058,
            "unit": "iter/sec",
            "range": "stddev: 0.000004097731853964864",
            "extra": "mean: 19.02531530024161 usec\nrounds: 15601"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 46226.28758836521,
            "unit": "iter/sec",
            "range": "stddev: 0.000006916579387293949",
            "extra": "mean: 21.632712730573935 usec\nrounds: 23149"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 18483.03396595126,
            "unit": "iter/sec",
            "range": "stddev: 0.000007713172999835698",
            "extra": "mean: 54.10367160727842 usec\nrounds: 9108"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 18963.60443232504,
            "unit": "iter/sec",
            "range": "stddev: 0.000006789287898283601",
            "extra": "mean: 52.73259118901557 usec\nrounds: 9738"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 45966.35747159634,
            "unit": "iter/sec",
            "range": "stddev: 0.00000503605569984636",
            "extra": "mean: 21.755041186761922 usec\nrounds: 20492"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 42957.376070897015,
            "unit": "iter/sec",
            "range": "stddev: 0.00000607992192764219",
            "extra": "mean: 23.278889249417755 usec\nrounds: 15106"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 42972.50724298861,
            "unit": "iter/sec",
            "range": "stddev: 0.000003179727973862316",
            "extra": "mean: 23.27069245332805 usec\nrounds: 16921"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 42597.77021621153,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031434226831101753",
            "extra": "mean: 23.475407161556728 usec\nrounds: 16421"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 42857.34419634564,
            "unit": "iter/sec",
            "range": "stddev: 0.000003927926190876344",
            "extra": "mean: 23.333223715837903 usec\nrounds: 13316"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 37134.814564448236,
            "unit": "iter/sec",
            "range": "stddev: 0.000007902805199750939",
            "extra": "mean: 26.928907865272343 usec\nrounds: 14837"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 38861.131487818915,
            "unit": "iter/sec",
            "range": "stddev: 0.000004139281122256144",
            "extra": "mean: 25.732652697296057 usec\nrounds: 12122"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 39195.512758706805,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036734663424743386",
            "extra": "mean: 25.513124580258545 usec\nrounds: 11615"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 38456.90347523886,
            "unit": "iter/sec",
            "range": "stddev: 0.000004637705963868117",
            "extra": "mean: 26.003133628370968 usec\nrounds: 16950"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 41422.572261970316,
            "unit": "iter/sec",
            "range": "stddev: 0.000006587261403687786",
            "extra": "mean: 24.14142689342571 usec\nrounds: 15409"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 42243.02527771531,
            "unit": "iter/sec",
            "range": "stddev: 0.000003489272059141205",
            "extra": "mean: 23.672546969014917 usec\nrounds: 14286"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 42341.56730543363,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033142988224983657",
            "extra": "mean: 23.617453571957682 usec\nrounds: 15874"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 42315.94192845349,
            "unit": "iter/sec",
            "range": "stddev: 0.000003208479659702146",
            "extra": "mean: 23.63175565584171 usec\nrounds: 14410"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 37785.550369799246,
            "unit": "iter/sec",
            "range": "stddev: 0.000006810494643592682",
            "extra": "mean: 26.465143162219682 usec\nrounds: 16394"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 37793.411630069684,
            "unit": "iter/sec",
            "range": "stddev: 0.000002765122169524856",
            "extra": "mean: 26.459638250926435 usec\nrounds: 14065"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 37595.10050276767,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033852793810904073",
            "extra": "mean: 26.599210711682552 usec\nrounds: 14750"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 37823.02357324104,
            "unit": "iter/sec",
            "range": "stddev: 0.000003768951609840686",
            "extra": "mean: 26.438922791658523 usec\nrounds: 12136"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 64745.88995596239,
            "unit": "iter/sec",
            "range": "stddev: 0.00000557383123745263",
            "extra": "mean: 15.444995824138964 usec\nrounds: 21552"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 24080.140542632525,
            "unit": "iter/sec",
            "range": "stddev: 0.000003608276374856865",
            "extra": "mean: 41.52799682500011 usec\nrounds: 8504"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 23661.99662461137,
            "unit": "iter/sec",
            "range": "stddev: 0.000004280866907963499",
            "extra": "mean: 42.2618604788354 usec\nrounds: 10278"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 66322.44945569456,
            "unit": "iter/sec",
            "range": "stddev: 0.000002488599919057875",
            "extra": "mean: 15.07785083643557 usec\nrounds: 21882"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 62384.21382192441,
            "unit": "iter/sec",
            "range": "stddev: 0.000005444607484247441",
            "extra": "mean: 16.02969627628069 usec\nrounds: 23202"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 22186.458179995418,
            "unit": "iter/sec",
            "range": "stddev: 0.000006253395087954138",
            "extra": "mean: 45.07253892834762 usec\nrounds: 8734"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 21420.280232248733,
            "unit": "iter/sec",
            "range": "stddev: 0.000007045087342427639",
            "extra": "mean: 46.68473003889448 usec\nrounds: 10320"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 63120.70147005655,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031572457153834293",
            "extra": "mean: 15.842662972850261 usec\nrounds: 22832"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 64310.926860893225,
            "unit": "iter/sec",
            "range": "stddev: 0.000044029073776280754",
            "extra": "mean: 15.549457126672031 usec\nrounds: 21097"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 23964.738929147316,
            "unit": "iter/sec",
            "range": "stddev: 0.000004763170873564324",
            "extra": "mean: 41.72797387680871 usec\nrounds: 10527"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 23470.449117703094,
            "unit": "iter/sec",
            "range": "stddev: 0.000003699079616488152",
            "extra": "mean: 42.60676883450552 usec\nrounds: 8734"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 65494.45731448309,
            "unit": "iter/sec",
            "range": "stddev: 0.000002688188437653766",
            "extra": "mean: 15.268467607851536 usec\nrounds: 22027"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 61652.99687905272,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037174929681136382",
            "extra": "mean: 16.219811698071094 usec\nrounds: 23149"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 21802.843170337066,
            "unit": "iter/sec",
            "range": "stddev: 0.000006491161492264019",
            "extra": "mean: 45.865577814204876 usec\nrounds: 9150"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 21258.120756300308,
            "unit": "iter/sec",
            "range": "stddev: 0.000007090039600563251",
            "extra": "mean: 47.04084671753632 usec\nrounds: 10236"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 62415.67317382362,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027496615127535767",
            "extra": "mean: 16.021616833564618 usec\nrounds: 21552"
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
          "id": "1637f2828b41f4469b919edc31b531fd665b3cc2",
          "message": "Pint 0.3",
          "timestamp": "2022-11-26T23:23:24-03:00",
          "tree_id": "078a3330889655feb08b0a75415a6dbca1946fee",
          "url": "https://github.com/hgrecco/pint-benchmark/commit/1637f2828b41f4469b919edc31b531fd665b3cc2"
        },
        "date": 1669518009464,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 3.7103269836666755,
            "unit": "iter/sec",
            "range": "stddev: 0.01414060100282605",
            "extra": "mean: 269.51802480000424 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 44564.64092768311,
            "unit": "iter/sec",
            "range": "stddev: 0.00020396487294495195",
            "extra": "mean: 22.439314649090104 usec\nrounds: 6601"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 25.01630195134386,
            "unit": "iter/sec",
            "range": "stddev: 0.0019433587946600683",
            "extra": "mean: 39.97393387499789 msec\nrounds: 24"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 971.0926316167679,
            "unit": "iter/sec",
            "range": "stddev: 0.00016444593172569816",
            "extra": "mean: 1.0297678794401974 msec\nrounds: 1070"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 10403.323126062955,
            "unit": "iter/sec",
            "range": "stddev: 0.000026085105804234794",
            "extra": "mean: 96.12313179956385 usec\nrounds: 8953"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 10140.3294031791,
            "unit": "iter/sec",
            "range": "stddev: 0.000044774594802352386",
            "extra": "mean: 98.61612579237215 usec\nrounds: 4102"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 11267.837488013429,
            "unit": "iter/sec",
            "range": "stddev: 0.000025224018920175225",
            "extra": "mean: 88.74817382339658 usec\nrounds: 1933"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 10511.030709488115,
            "unit": "iter/sec",
            "range": "stddev: 0.00003006784721091125",
            "extra": "mean: 95.13814844982979 usec\nrounds: 9579"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 10038.026580650992,
            "unit": "iter/sec",
            "range": "stddev: 0.000053429421362530255",
            "extra": "mean: 99.62117473643384 usec\nrounds: 9294"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 9752.131151104843,
            "unit": "iter/sec",
            "range": "stddev: 0.00004229907889393402",
            "extra": "mean: 102.54168904267736 usec\nrounds: 7657"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 9187.71274456432,
            "unit": "iter/sec",
            "range": "stddev: 0.00003983225178144157",
            "extra": "mean: 108.84101710642018 usec\nrounds: 4852"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 9563.312188743173,
            "unit": "iter/sec",
            "range": "stddev: 0.00003600495891683662",
            "extra": "mean: 104.5662820855189 usec\nrounds: 7519"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 9452.336135785356,
            "unit": "iter/sec",
            "range": "stddev: 0.0000373141269938045",
            "extra": "mean: 105.79395248272284 usec\nrounds: 8418"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 9223.293208047216,
            "unit": "iter/sec",
            "range": "stddev: 0.00010833969247794802",
            "extra": "mean: 108.42114388464975 usec\nrounds: 4031"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 2688170.1591522573,
            "unit": "iter/sec",
            "range": "stddev: 6.80126722528228e-7",
            "extra": "mean: 372.00026069620606 nsec\nrounds: 166667"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 2620478.760335264,
            "unit": "iter/sec",
            "range": "stddev: 3.255129139022088e-7",
            "extra": "mean: 381.6096566533474 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 2691521.383816762,
            "unit": "iter/sec",
            "range": "stddev: 2.903068496048016e-7",
            "extra": "mean: 371.5370815973756 nsec\nrounds: 126583"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 2644699.1052241414,
            "unit": "iter/sec",
            "range": "stddev: 4.2314762083381047e-7",
            "extra": "mean: 378.11484793305806 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 2554956.838156992,
            "unit": "iter/sec",
            "range": "stddev: 4.934173618777794e-7",
            "extra": "mean: 391.3960443736286 nsec\nrounds: 200000"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 9640.997113087567,
            "unit": "iter/sec",
            "range": "stddev: 0.00004439242011328753",
            "extra": "mean: 103.72371117532117 usec\nrounds: 8313"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 9403.769051144169,
            "unit": "iter/sec",
            "range": "stddev: 0.000030497250144579397",
            "extra": "mean: 106.34034019352363 usec\nrounds: 4956"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 9335.087939243376,
            "unit": "iter/sec",
            "range": "stddev: 0.00010562271715987365",
            "extra": "mean: 107.12271876905871 usec\nrounds: 8157"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 9172.697433286097,
            "unit": "iter/sec",
            "range": "stddev: 0.00006187252080967286",
            "extra": "mean: 109.01918517132995 usec\nrounds: 5314"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 9138.285454693954,
            "unit": "iter/sec",
            "range": "stddev: 0.000067628954436829",
            "extra": "mean: 109.42971796600442 usec\nrounds: 8889"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 6826.377916274517,
            "unit": "iter/sec",
            "range": "stddev: 0.00003873776757109772",
            "extra": "mean: 146.4905711733212 usec\nrounds: 1679"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 6941.538451090089,
            "unit": "iter/sec",
            "range": "stddev: 0.00008808279384181634",
            "extra": "mean: 144.06028390478215 usec\nrounds: 4579"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 7733.445784384991,
            "unit": "iter/sec",
            "range": "stddev: 0.00007072000369968883",
            "extra": "mean: 129.30846454230698 usec\nrounds: 7375"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 7883.462440142039,
            "unit": "iter/sec",
            "range": "stddev: 0.00003577655974502674",
            "extra": "mean: 126.8478168815862 usec\nrounds: 5734"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 7235.94345157801,
            "unit": "iter/sec",
            "range": "stddev: 0.00005179054382196224",
            "extra": "mean: 138.19897939942032 usec\nrounds: 5728"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 10663.256843735897,
            "unit": "iter/sec",
            "range": "stddev: 0.00006240600347203367",
            "extra": "mean: 93.77997873018012 usec\nrounds: 9497"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 8822.49611472487,
            "unit": "iter/sec",
            "range": "stddev: 0.00003503505010746194",
            "extra": "mean: 113.34660701419703 usec\nrounds: 5275"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 6789.3485379359645,
            "unit": "iter/sec",
            "range": "stddev: 0.00007218515687908373",
            "extra": "mean: 147.2895366046432 usec\nrounds: 5013"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 6371.925257921605,
            "unit": "iter/sec",
            "range": "stddev: 0.00003736859921012503",
            "extra": "mean: 156.9384384659559 usec\nrounds: 3364"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 9963.830786524872,
            "unit": "iter/sec",
            "range": "stddev: 0.000046327698608229384",
            "extra": "mean: 100.36300509563092 usec\nrounds: 10205"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 9623.99771135316,
            "unit": "iter/sec",
            "range": "stddev: 0.000051146371423290596",
            "extra": "mean: 103.90692412783183 usec\nrounds: 10320"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 9677.175219531533,
            "unit": "iter/sec",
            "range": "stddev: 0.00005766331703907062",
            "extra": "mean: 103.33594022165586 usec\nrounds: 10472"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 19113874.01489373,
            "unit": "iter/sec",
            "range": "stddev: 5.035914919099841e-8",
            "extra": "mean: 52.31801775094004 nsec\nrounds: 163935"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 17821482.655563917,
            "unit": "iter/sec",
            "range": "stddev: 1.7328690181648928e-7",
            "extra": "mean: 56.11205416117224 nsec\nrounds: 175439"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 15614611.886271298,
            "unit": "iter/sec",
            "range": "stddev: 4.520943352742363e-8",
            "extra": "mean: 64.04257802134809 nsec\nrounds: 149254"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 19835563.770326898,
            "unit": "iter/sec",
            "range": "stddev: 6.856672604463459e-8",
            "extra": "mean: 50.41449850270835 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 18790556.320079785,
            "unit": "iter/sec",
            "range": "stddev: 2.581742210119527e-7",
            "extra": "mean: 53.21822212000643 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 18674317.312542114,
            "unit": "iter/sec",
            "range": "stddev: 1.9060532021668908e-7",
            "extra": "mean: 53.54948099388735 nsec\nrounds: 178572"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 40818.81083786802,
            "unit": "iter/sec",
            "range": "stddev: 0.000010437323088244664",
            "extra": "mean: 24.498508885327205 usec\nrounds: 8497"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 16682.518113951995,
            "unit": "iter/sec",
            "range": "stddev: 0.00004350376840737666",
            "extra": "mean: 59.94298901217291 usec\nrounds: 8191"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 39042.54886986404,
            "unit": "iter/sec",
            "range": "stddev: 0.000057009510799481606",
            "extra": "mean: 25.613081854188952 usec\nrounds: 13072"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 17708.74388701088,
            "unit": "iter/sec",
            "range": "stddev: 0.000018293618482919097",
            "extra": "mean: 56.46927903980169 usec\nrounds: 7705"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 36390.67005168151,
            "unit": "iter/sec",
            "range": "stddev: 0.00004187567009682209",
            "extra": "mean: 27.479570960903285 usec\nrounds: 9470"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 18208.199620307703,
            "unit": "iter/sec",
            "range": "stddev: 0.000017430807491756262",
            "extra": "mean: 54.92031177452023 usec\nrounds: 8272"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 15931.31777194547,
            "unit": "iter/sec",
            "range": "stddev: 0.00001527450319245867",
            "extra": "mean: 62.76944659034844 usec\nrounds: 1760"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 27813.630662923853,
            "unit": "iter/sec",
            "range": "stddev: 0.00001559961822533279",
            "extra": "mean: 35.95359455653593 usec\nrounds: 11390"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 14691.158513502492,
            "unit": "iter/sec",
            "range": "stddev: 0.00006531342744029681",
            "extra": "mean: 68.0681512680508 usec\nrounds: 7728"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 27973.80996244672,
            "unit": "iter/sec",
            "range": "stddev: 0.000011761471980696435",
            "extra": "mean: 35.74772264995166 usec\nrounds: 9872"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 15060.470729657933,
            "unit": "iter/sec",
            "range": "stddev: 0.00010752052009491394",
            "extra": "mean: 66.39898698722233 usec\nrounds: 6532"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 28594.1164036132,
            "unit": "iter/sec",
            "range": "stddev: 0.000026346310708747527",
            "extra": "mean: 34.972229457443156 usec\nrounds: 12255"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 38988.992367309525,
            "unit": "iter/sec",
            "range": "stddev: 0.00002011247427186664",
            "extra": "mean: 25.648264786613307 usec\nrounds: 14185"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 17431.186139115667,
            "unit": "iter/sec",
            "range": "stddev: 0.000019867888214477074",
            "extra": "mean: 57.36844251556669 usec\nrounds: 6106"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 38207.575545670144,
            "unit": "iter/sec",
            "range": "stddev: 0.000013410398355646265",
            "extra": "mean: 26.172820068226617 usec\nrounds: 11710"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 18349.1619649653,
            "unit": "iter/sec",
            "range": "stddev: 0.00001665885891689852",
            "extra": "mean: 54.4984017204347 usec\nrounds: 9183"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 38528.118867946694,
            "unit": "iter/sec",
            "range": "stddev: 0.000010695385722258377",
            "extra": "mean: 25.955069424164016 usec\nrounds: 13756"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 17030.09698030961,
            "unit": "iter/sec",
            "range": "stddev: 0.00003198610041817316",
            "extra": "mean: 58.71957165929304 usec\nrounds: 6817"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 15154.191379790518,
            "unit": "iter/sec",
            "range": "stddev: 0.000018502356270087674",
            "extra": "mean: 65.98834440837209 usec\nrounds: 7073"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 30451.956976708207,
            "unit": "iter/sec",
            "range": "stddev: 0.000010805682870477357",
            "extra": "mean: 32.838612006606674 usec\nrounds: 10977"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 15130.94312822893,
            "unit": "iter/sec",
            "range": "stddev: 0.000058891091123267314",
            "extra": "mean: 66.08973356950615 usec\nrounds: 8749"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 30137.69316895828,
            "unit": "iter/sec",
            "range": "stddev: 0.000012014102304588007",
            "extra": "mean: 33.18103991549016 usec\nrounds: 9470"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 15647.73928820641,
            "unit": "iter/sec",
            "range": "stddev: 0.000048246141363000975",
            "extra": "mean: 63.90699522669661 usec\nrounds: 5447"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 29026.88712000083,
            "unit": "iter/sec",
            "range": "stddev: 0.000011305151599075787",
            "extra": "mean: 34.45081781817917 usec\nrounds: 1998"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 36428.359926489924,
            "unit": "iter/sec",
            "range": "stddev: 0.000011271346549269927",
            "extra": "mean: 27.45113977181337 usec\nrounds: 10696"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 17695.273905653172,
            "unit": "iter/sec",
            "range": "stddev: 0.00002211938017499716",
            "extra": "mean: 56.512264536381466 usec\nrounds: 7103"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 38668.62052901467,
            "unit": "iter/sec",
            "range": "stddev: 0.0000089781381935638",
            "extra": "mean: 25.860762197339277 usec\nrounds: 14327"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 17258.72730303892,
            "unit": "iter/sec",
            "range": "stddev: 0.000019592324864711986",
            "extra": "mean: 57.94170001306642 usec\nrounds: 7657"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 39756.62126918376,
            "unit": "iter/sec",
            "range": "stddev: 0.000011978933915521106",
            "extra": "mean: 25.153042891376746 usec\nrounds: 15038"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 17275.904141820876,
            "unit": "iter/sec",
            "range": "stddev: 0.000017682544676976012",
            "extra": "mean: 57.88409056862249 usec\nrounds: 6945"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 14786.888176266544,
            "unit": "iter/sec",
            "range": "stddev: 0.00002080517347740079",
            "extra": "mean: 67.62748105480597 usec\nrounds: 9026"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 24907.66406736649,
            "unit": "iter/sec",
            "range": "stddev: 0.00023567714910047809",
            "extra": "mean: 40.14828517420786 usec\nrounds: 3703"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 14612.637180623007,
            "unit": "iter/sec",
            "range": "stddev: 0.000021016043913299236",
            "extra": "mean: 68.433917002062 usec\nrounds: 5711"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 27663.076816546123,
            "unit": "iter/sec",
            "range": "stddev: 0.000023637399338660837",
            "extra": "mean: 36.14926881169884 usec\nrounds: 11934"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 14706.772084519993,
            "unit": "iter/sec",
            "range": "stddev: 0.0000208821658132852",
            "extra": "mean: 67.99588613007587 usec\nrounds: 7289"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 28717.47844734159,
            "unit": "iter/sec",
            "range": "stddev: 0.00003283889349292245",
            "extra": "mean: 34.821998798873345 usec\nrounds: 11656"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 42878.9590765484,
            "unit": "iter/sec",
            "range": "stddev: 0.000013027336131967775",
            "extra": "mean: 23.32146165709805 usec\nrounds: 14266"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 18581.427530859826,
            "unit": "iter/sec",
            "range": "stddev: 0.00005283415889786141",
            "extra": "mean: 53.81717838089734 usec\nrounds: 6374"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 39807.23537294996,
            "unit": "iter/sec",
            "range": "stddev: 0.000010156171963379577",
            "extra": "mean: 25.12106130031642 usec\nrounds: 14535"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 18354.538441342254,
            "unit": "iter/sec",
            "range": "stddev: 0.00004836670831361786",
            "extra": "mean: 54.48243785567351 usec\nrounds: 8432"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 39427.77453820947,
            "unit": "iter/sec",
            "range": "stddev: 0.000011512848770857533",
            "extra": "mean: 25.36283144844758 usec\nrounds: 12821"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 17428.620263815537,
            "unit": "iter/sec",
            "range": "stddev: 0.00002250664623376121",
            "extra": "mean: 57.376888409012615 usec\nrounds: 6712"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 14805.644086945698,
            "unit": "iter/sec",
            "range": "stddev: 0.00004043609771516135",
            "extra": "mean: 67.54181001025894 usec\nrounds: 8811"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 29953.047436624645,
            "unit": "iter/sec",
            "range": "stddev: 0.000013513139905325503",
            "extra": "mean: 33.38558462593241 usec\nrounds: 11669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 16062.868705881201,
            "unit": "iter/sec",
            "range": "stddev: 0.000019538632533590815",
            "extra": "mean: 62.25538030039825 usec\nrounds: 6061"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 28535.058562246348,
            "unit": "iter/sec",
            "range": "stddev: 0.000011530451127746458",
            "extra": "mean: 35.04461004762268 usec\nrounds: 12122"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 16014.716121173262,
            "unit": "iter/sec",
            "range": "stddev: 0.000017480810567515264",
            "extra": "mean: 62.4425679752067 usec\nrounds: 6826"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 28427.042512954045,
            "unit": "iter/sec",
            "range": "stddev: 0.000012109684501830492",
            "extra": "mean: 35.17777129099186 usec\nrounds: 11014"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 40779.65414310218,
            "unit": "iter/sec",
            "range": "stddev: 0.0000119360466030054",
            "extra": "mean: 24.522032396126843 usec\nrounds: 14971"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 17183.171385180853,
            "unit": "iter/sec",
            "range": "stddev: 0.000018107312321339792",
            "extra": "mean: 58.19647477079941 usec\nrounds: 8621"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 39436.55255287117,
            "unit": "iter/sec",
            "range": "stddev: 0.00003766607041077942",
            "extra": "mean: 25.35718604356544 usec\nrounds: 15061"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 16186.029341984782,
            "unit": "iter/sec",
            "range": "stddev: 0.00007117704732171901",
            "extra": "mean: 61.78167473143706 usec\nrounds: 7068"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 38175.95749448896,
            "unit": "iter/sec",
            "range": "stddev: 0.00001180844192210032",
            "extra": "mean: 26.194496893610566 usec\nrounds: 11429"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 17452.670622305897,
            "unit": "iter/sec",
            "range": "stddev: 0.000018923251278104784",
            "extra": "mean: 57.297821155343456 usec\nrounds: 4311"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 14312.758444290466,
            "unit": "iter/sec",
            "range": "stddev: 0.00002099116876056089",
            "extra": "mean: 69.86773401453667 usec\nrounds: 8711"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 28421.819070369955,
            "unit": "iter/sec",
            "range": "stddev: 0.000027566799616927837",
            "extra": "mean: 35.18423636165183 usec\nrounds: 7717"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 14557.349330289448,
            "unit": "iter/sec",
            "range": "stddev: 0.00008734867385505654",
            "extra": "mean: 68.6938244944979 usec\nrounds: 5544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 26442.050887240806,
            "unit": "iter/sec",
            "range": "stddev: 0.000012954567850169806",
            "extra": "mean: 37.8185491081758 usec\nrounds: 9479"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 14043.030721934083,
            "unit": "iter/sec",
            "range": "stddev: 0.000028014426662105084",
            "extra": "mean: 71.20969965821412 usec\nrounds: 6143"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 27336.706835221736,
            "unit": "iter/sec",
            "range": "stddev: 0.000035448653682499775",
            "extra": "mean: 36.58085101573241 usec\nrounds: 11075"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 37031.29424821945,
            "unit": "iter/sec",
            "range": "stddev: 0.000037561975500318214",
            "extra": "mean: 27.004187142286618 usec\nrounds: 13813"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 16335.839148714254,
            "unit": "iter/sec",
            "range": "stddev: 0.000023631036110815853",
            "extra": "mean: 61.21509834275683 usec\nrounds: 8511"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 38524.70716692037,
            "unit": "iter/sec",
            "range": "stddev: 0.000022044372908077333",
            "extra": "mean: 25.957367973419924 usec\nrounds: 11403"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 17269.827169552496,
            "unit": "iter/sec",
            "range": "stddev: 0.00002577457301727648",
            "extra": "mean: 57.90445904189743 usec\nrounds: 7825"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 38001.45747380074,
            "unit": "iter/sec",
            "range": "stddev: 0.00001962867289636515",
            "extra": "mean: 26.31478018150824 usec\nrounds: 12988"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 16985.022972673276,
            "unit": "iter/sec",
            "range": "stddev: 0.000028072516505963706",
            "extra": "mean: 58.87539873268772 usec\nrounds: 6789"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 13702.741154278283,
            "unit": "iter/sec",
            "range": "stddev: 0.00002406584113763079",
            "extra": "mean: 72.97809896144605 usec\nrounds: 8569"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 27488.482953327584,
            "unit": "iter/sec",
            "range": "stddev: 0.00006784538175399028",
            "extra": "mean: 36.378871896928246 usec\nrounds: 11038"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 13095.034586119571,
            "unit": "iter/sec",
            "range": "stddev: 0.00003005020341388056",
            "extra": "mean: 76.36482312616238 usec\nrounds: 6270"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 28853.90916128361,
            "unit": "iter/sec",
            "range": "stddev: 0.000018452217479666392",
            "extra": "mean: 34.65734900634564 usec\nrounds: 10719"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 13994.922871782084,
            "unit": "iter/sec",
            "range": "stddev: 0.000027710712534503694",
            "extra": "mean: 71.45448454141156 usec\nrounds: 7795"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 27246.521885884904,
            "unit": "iter/sec",
            "range": "stddev: 0.00007373025123999726",
            "extra": "mean: 36.70193223884665 usec\nrounds: 10965"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 156720.928710788,
            "unit": "iter/sec",
            "range": "stddev: 0.000004739496142635467",
            "extra": "mean: 6.380768721996249 usec\nrounds: 62894"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 162411.27131191292,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038936770968639715",
            "extra": "mean: 6.157208129228219 usec\nrounds: 30212"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 158724.21922673285,
            "unit": "iter/sec",
            "range": "stddev: 0.00000496726579926491",
            "extra": "mean: 6.300235747712387 usec\nrounds: 67568"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 159027.39700087323,
            "unit": "iter/sec",
            "range": "stddev: 0.000005205316260706034",
            "extra": "mean: 6.288224663543408 usec\nrounds: 15975"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 165801.15450189618,
            "unit": "iter/sec",
            "range": "stddev: 0.000007754110253145781",
            "extra": "mean: 6.031321090641523 usec\nrounds: 54645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 144550.94800434873,
            "unit": "iter/sec",
            "range": "stddev: 0.000029177202421361464",
            "extra": "mean: 6.917976075604261 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 163564.08280640183,
            "unit": "iter/sec",
            "range": "stddev: 0.000006381105841544866",
            "extra": "mean: 6.113811680670889 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 158024.4079652337,
            "unit": "iter/sec",
            "range": "stddev: 0.000005877263589038068",
            "extra": "mean: 6.328136348531715 usec\nrounds: 69931"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 162285.84264198266,
            "unit": "iter/sec",
            "range": "stddev: 0.00000910267495145882",
            "extra": "mean: 6.1619669573155 usec\nrounds: 64099"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 154977.1433365536,
            "unit": "iter/sec",
            "range": "stddev: 0.000008041621917426972",
            "extra": "mean: 6.4525644135042945 usec\nrounds: 69931"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 160802.84570464477,
            "unit": "iter/sec",
            "range": "stddev: 0.000007298670311624041",
            "extra": "mean: 6.218795417568379 usec\nrounds: 62894"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 149951.54333639354,
            "unit": "iter/sec",
            "range": "stddev: 0.000017496164275707573",
            "extra": "mean: 6.668820992103107 usec\nrounds: 47847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 163949.32613305553,
            "unit": "iter/sec",
            "range": "stddev: 0.00000797914658536137",
            "extra": "mean: 6.099445624975823 usec\nrounds: 67568"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 154943.24410010598,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052580701030088195",
            "extra": "mean: 6.453976136926102 usec\nrounds: 61350"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 165757.38005485563,
            "unit": "iter/sec",
            "range": "stddev: 0.000017774880327651928",
            "extra": "mean: 6.032913886965762 usec\nrounds: 62894"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 147422.64622605077,
            "unit": "iter/sec",
            "range": "stddev: 0.000038205559729965554",
            "extra": "mean: 6.783218356199144 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 146947.69939655325,
            "unit": "iter/sec",
            "range": "stddev: 0.00002619923624151605",
            "extra": "mean: 6.805142265626078 usec\nrounds: 44445"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 151133.43167595277,
            "unit": "iter/sec",
            "range": "stddev: 0.000005883608303135066",
            "extra": "mean: 6.616669713052724 usec\nrounds: 29326"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 145615.11584127197,
            "unit": "iter/sec",
            "range": "stddev: 0.000010571497049795079",
            "extra": "mean: 6.867418909243268 usec\nrounds: 43291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 148684.96245182233,
            "unit": "iter/sec",
            "range": "stddev: 0.000028096224153733698",
            "extra": "mean: 6.725629703972419 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 139482.8697548199,
            "unit": "iter/sec",
            "range": "stddev: 0.00003669033811795747",
            "extra": "mean: 7.169339157975308 usec\nrounds: 62894"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 151995.74686690752,
            "unit": "iter/sec",
            "range": "stddev: 0.0000331652876491278",
            "extra": "mean: 6.579131460011397 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 149237.16179150922,
            "unit": "iter/sec",
            "range": "stddev: 0.000004169876924279063",
            "extra": "mean: 6.700743889762815 usec\nrounds: 42919"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 143492.61012918982,
            "unit": "iter/sec",
            "range": "stddev: 0.000007536180786202487",
            "extra": "mean: 6.9690000000674335 usec\nrounds: 1364"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 160342.45785178343,
            "unit": "iter/sec",
            "range": "stddev: 0.00000960367874359497",
            "extra": "mean: 6.236651311185307 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 149676.96504008007,
            "unit": "iter/sec",
            "range": "stddev: 0.000005772853617354141",
            "extra": "mean: 6.681054761714488 usec\nrounds: 64936"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 161593.7070232204,
            "unit": "iter/sec",
            "range": "stddev: 0.000006256034032280846",
            "extra": "mean: 6.188359797057591 usec\nrounds: 59881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 148397.96622659697,
            "unit": "iter/sec",
            "range": "stddev: 0.000006434683355498025",
            "extra": "mean: 6.738636825204499 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 151017.44348746113,
            "unit": "iter/sec",
            "range": "stddev: 0.000021022301714557082",
            "extra": "mean: 6.621751612971976 usec\nrounds: 31153"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 156532.66542329467,
            "unit": "iter/sec",
            "range": "stddev: 0.000006616681985754354",
            "extra": "mean: 6.388442931676951 usec\nrounds: 58824"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 134640.4698664469,
            "unit": "iter/sec",
            "range": "stddev: 0.000012374336774383456",
            "extra": "mean: 7.427187390180115 usec\nrounds: 4552"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 156049.48151804073,
            "unit": "iter/sec",
            "range": "stddev: 0.000009192712387666106",
            "extra": "mean: 6.408223790762105 usec\nrounds: 57804"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 151233.2065791541,
            "unit": "iter/sec",
            "range": "stddev: 0.00001591011257806144",
            "extra": "mean: 6.612304417922984 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 158861.17381712122,
            "unit": "iter/sec",
            "range": "stddev: 0.000004741528849582067",
            "extra": "mean: 6.294804299703753 usec\nrounds: 55866"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 162010.9199962663,
            "unit": "iter/sec",
            "range": "stddev: 0.000004416315340502571",
            "extra": "mean: 6.172423439253637 usec\nrounds: 61350"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 153592.83991616778,
            "unit": "iter/sec",
            "range": "stddev: 0.000008143048435522408",
            "extra": "mean: 6.5107201647277835 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 138658.05890978678,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052215196307794475",
            "extra": "mean: 7.211986146803168 usec\nrounds: 45044"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 132085.67833379403,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052694244821277465",
            "extra": "mean: 7.570843505628957 usec\nrounds: 45663"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 139004.45852442406,
            "unit": "iter/sec",
            "range": "stddev: 0.000004587720667225346",
            "extra": "mean: 7.194013851176529 usec\nrounds: 28012"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 141023.25392026818,
            "unit": "iter/sec",
            "range": "stddev: 0.00000629016525957011",
            "extra": "mean: 7.091029118966299 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 130872.12566636053,
            "unit": "iter/sec",
            "range": "stddev: 0.000005136708359317014",
            "extra": "mean: 7.641046517035681 usec\nrounds: 38760"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 140271.84627327565,
            "unit": "iter/sec",
            "range": "stddev: 0.000004398733584871483",
            "extra": "mean: 7.129014314474866 usec\nrounds: 42195"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 135125.34262669674,
            "unit": "iter/sec",
            "range": "stddev: 0.000018033544405823517",
            "extra": "mean: 7.4005362766231375 usec\nrounds: 46297"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 133951.22524201043,
            "unit": "iter/sec",
            "range": "stddev: 0.000006927715835450405",
            "extra": "mean: 7.465403904990749 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 141055.53099900944,
            "unit": "iter/sec",
            "range": "stddev: 0.000007223969979299316",
            "extra": "mean: 7.089406511872423 usec\nrounds: 27549"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 130102.9695752388,
            "unit": "iter/sec",
            "range": "stddev: 0.00001114013055253009",
            "extra": "mean: 7.68621964021888 usec\nrounds: 54348"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 134033.04891496547,
            "unit": "iter/sec",
            "range": "stddev: 0.000036255159131486435",
            "extra": "mean: 7.460846471040359 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 129064.33308801697,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051601228738335094",
            "extra": "mean: 7.748073972675612 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 130432.38094704595,
            "unit": "iter/sec",
            "range": "stddev: 0.000011845317399883975",
            "extra": "mean: 7.66680783360068 usec\nrounds: 55249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 132643.28242116608,
            "unit": "iter/sec",
            "range": "stddev: 0.000004860109923639294",
            "extra": "mean: 7.539017293200131 usec\nrounds: 52911"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 137086.04661386,
            "unit": "iter/sec",
            "range": "stddev: 0.000008158184234281762",
            "extra": "mean: 7.294688443505639 usec\nrounds: 54645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 132415.5838759247,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048417916222031",
            "extra": "mean: 7.551981199864015 usec\nrounds: 54946"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 137778.1789272988,
            "unit": "iter/sec",
            "range": "stddev: 0.000018823868619808208",
            "extra": "mean: 7.258043383834159 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 132212.87935547455,
            "unit": "iter/sec",
            "range": "stddev: 0.000010209557950835151",
            "extra": "mean: 7.563559653756174 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 140864.08776789185,
            "unit": "iter/sec",
            "range": "stddev: 0.000004480371800506388",
            "extra": "mean: 7.099041465044983 usec\nrounds: 56819"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 124765.01075611668,
            "unit": "iter/sec",
            "range": "stddev: 0.000006010869856623448",
            "extra": "mean: 8.015067637470423 usec\nrounds: 42373"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 136550.0386808441,
            "unit": "iter/sec",
            "range": "stddev: 0.000005273285491702481",
            "extra": "mean: 7.323322714959326 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 132954.79298582562,
            "unit": "iter/sec",
            "range": "stddev: 0.000005506022568877792",
            "extra": "mean: 7.521353518309118 usec\nrounds: 52911"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 133948.49917904288,
            "unit": "iter/sec",
            "range": "stddev: 0.000010278794311334897",
            "extra": "mean: 7.465555837720476 usec\nrounds: 47620"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 132375.72175616285,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052919876272441535",
            "extra": "mean: 7.554255317617895 usec\nrounds: 54348"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 134505.33211799484,
            "unit": "iter/sec",
            "range": "stddev: 0.000004511151598851139",
            "extra": "mean: 7.4346494986737754 usec\nrounds: 43104"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 139404.3442021537,
            "unit": "iter/sec",
            "range": "stddev: 0.0000224071360062982",
            "extra": "mean: 7.173377599695711 usec\nrounds: 55249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 128645.66969592482,
            "unit": "iter/sec",
            "range": "stddev: 0.000009959262540048948",
            "extra": "mean: 7.773289239845107 usec\nrounds: 55556"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 140516.43912224018,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051797287383151416",
            "extra": "mean: 7.1166050481115946 usec\nrounds: 56498"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 130732.01050452019,
            "unit": "iter/sec",
            "range": "stddev: 0.000005231590880872137",
            "extra": "mean: 7.649235991558656 usec\nrounds: 56180"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 136036.5565634474,
            "unit": "iter/sec",
            "range": "stddev: 0.000027309628579577236",
            "extra": "mean: 7.3509652497973965 usec\nrounds: 34014"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 127926.04985503484,
            "unit": "iter/sec",
            "range": "stddev: 0.0000069636846393618506",
            "extra": "mean: 7.817016167803156 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 134257.18084044964,
            "unit": "iter/sec",
            "range": "stddev: 0.00001607812005077322",
            "extra": "mean: 7.44839116790627 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 130727.67136033697,
            "unit": "iter/sec",
            "range": "stddev: 0.000005447197232903511",
            "extra": "mean: 7.649489886832039 usec\nrounds: 52357"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 135227.8321794801,
            "unit": "iter/sec",
            "range": "stddev: 0.000024234332483323383",
            "extra": "mean: 7.394927389450108 usec\nrounds: 39526"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 128526.6731942838,
            "unit": "iter/sec",
            "range": "stddev: 0.000008939890999875104",
            "extra": "mean: 7.780486144602666 usec\nrounds: 55249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 134484.23943572454,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053950885271212475",
            "extra": "mean: 7.435815558729025 usec\nrounds: 55866"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 482976.2559691298,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018612475230194928",
            "extra": "mean: 2.070495159215273 usec\nrounds: 4958"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 30912.96431549257,
            "unit": "iter/sec",
            "range": "stddev: 0.000011997466508263125",
            "extra": "mean: 32.34888734041053 usec\nrounds: 17007"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 442719.47251342976,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027335493942259062",
            "extra": "mean: 2.258766695584336 usec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 29845.741531375512,
            "unit": "iter/sec",
            "range": "stddev: 0.000021366654618484113",
            "extra": "mean: 33.505617508237954 usec\nrounds: 15433"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 453308.44974684535,
            "unit": "iter/sec",
            "range": "stddev: 0.00000217238020320079",
            "extra": "mean: 2.2060034410531286 usec\nrounds: 135136"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 29934.300116315168,
            "unit": "iter/sec",
            "range": "stddev: 0.000015527066255289086",
            "extra": "mean: 33.40649342441006 usec\nrounds: 14904"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 31743.009223915124,
            "unit": "iter/sec",
            "range": "stddev: 0.000014793162400463573",
            "extra": "mean: 31.502999383139827 usec\nrounds: 16208"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 412077.9599009151,
            "unit": "iter/sec",
            "range": "stddev: 0.000018009832572903618",
            "extra": "mean: 2.4267252736362117 usec\nrounds: 117648"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 32456.108978130975,
            "unit": "iter/sec",
            "range": "stddev: 0.000012392461230806768",
            "extra": "mean: 30.810840593177794 usec\nrounds: 10583"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 408279.1777780094,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029027481130211713",
            "extra": "mean: 2.449304432918503 usec\nrounds: 129871"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 32946.971929232524,
            "unit": "iter/sec",
            "range": "stddev: 0.00001606993848661947",
            "extra": "mean: 30.351802956214623 usec\nrounds: 15291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 414648.245351184,
            "unit": "iter/sec",
            "range": "stddev: 0.000003137938482087144",
            "extra": "mean: 2.411682700244048 usec\nrounds: 151516"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 430384.27664951776,
            "unit": "iter/sec",
            "range": "stddev: 0.00000414533896426564",
            "extra": "mean: 2.3235049565120316 usec\nrounds: 151516"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 30303.833275180263,
            "unit": "iter/sec",
            "range": "stddev: 0.000025367051798833594",
            "extra": "mean: 32.99912558649897 usec\nrounds: 12788"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 454917.263853915,
            "unit": "iter/sec",
            "range": "stddev: 0.000002083979394455151",
            "extra": "mean: 2.1982019137465056 usec\nrounds: 142858"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 29879.79758924366,
            "unit": "iter/sec",
            "range": "stddev: 0.000013173717758705573",
            "extra": "mean: 33.46742885433692 usec\nrounds: 15152"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 441967.1298527592,
            "unit": "iter/sec",
            "range": "stddev: 0.000002404875220334455",
            "extra": "mean: 2.2626117022167436 usec\nrounds: 135136"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 30643.53222470675,
            "unit": "iter/sec",
            "range": "stddev: 0.000011358360004594744",
            "extra": "mean: 32.633313701144964 usec\nrounds: 11919"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 32590.54244451822,
            "unit": "iter/sec",
            "range": "stddev: 0.000020252641888072468",
            "extra": "mean: 30.683748259250024 usec\nrounds: 19532"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 387166.7369504853,
            "unit": "iter/sec",
            "range": "stddev: 0.000007258689293431719",
            "extra": "mean: 2.582866513472953 usec\nrounds: 113637"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 31681.866037535718,
            "unit": "iter/sec",
            "range": "stddev: 0.000015214099034202558",
            "extra": "mean: 31.563797372769336 usec\nrounds: 14006"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 389588.6393961103,
            "unit": "iter/sec",
            "range": "stddev: 0.000025819187672518105",
            "extra": "mean: 2.5668099602444 usec\nrounds: 106383"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 31690.75057609383,
            "unit": "iter/sec",
            "range": "stddev: 0.0000219049515335578",
            "extra": "mean: 31.554948425688533 usec\nrounds: 12196"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 404895.39690534817,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028426749661658808",
            "extra": "mean: 2.469773693756683 usec\nrounds: 151516"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 418581.226508719,
            "unit": "iter/sec",
            "range": "stddev: 0.000025376024550217828",
            "extra": "mean: 2.389022575954371 usec\nrounds: 147059"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 29773.247149245864,
            "unit": "iter/sec",
            "range": "stddev: 0.000011307280119151965",
            "extra": "mean: 33.587199776606475 usec\nrounds: 11628"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 438835.36453699344,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029338439655936044",
            "extra": "mean: 2.2787589169233895 usec\nrounds: 135136"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 26962.174135556383,
            "unit": "iter/sec",
            "range": "stddev: 0.00008785492426441894",
            "extra": "mean: 37.08899716218543 usec\nrounds: 15152"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 412897.19552889874,
            "unit": "iter/sec",
            "range": "stddev: 0.000008276649464147108",
            "extra": "mean: 2.421910370980008 usec\nrounds: 136987"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 29796.535413832982,
            "unit": "iter/sec",
            "range": "stddev: 0.00001797733457421867",
            "extra": "mean: 33.56094881875938 usec\nrounds: 12739"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 31169.065515178932,
            "unit": "iter/sec",
            "range": "stddev: 0.000021383694962473567",
            "extra": "mean: 32.08309211301228 usec\nrounds: 18727"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 431104.13592376496,
            "unit": "iter/sec",
            "range": "stddev: 0.00000331752737525462",
            "extra": "mean: 2.3196251593764265 usec\nrounds: 133334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 30989.899215115816,
            "unit": "iter/sec",
            "range": "stddev: 0.00004371693991490722",
            "extra": "mean: 32.26857864423883 usec\nrounds: 15106"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 424624.3392835373,
            "unit": "iter/sec",
            "range": "stddev: 0.000004241784116134247",
            "extra": "mean: 2.3550227989457366 usec\nrounds: 142858"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 31429.81827482715,
            "unit": "iter/sec",
            "range": "stddev: 0.00004678033980132278",
            "extra": "mean: 31.816919565230915 usec\nrounds: 8827"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 410907.9351254437,
            "unit": "iter/sec",
            "range": "stddev: 0.000003929633107635819",
            "extra": "mean: 2.4336351637860583 usec\nrounds: 112360"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 10341.084196332087,
            "unit": "iter/sec",
            "range": "stddev: 0.000030194887496552004",
            "extra": "mean: 96.70165922782962 usec\nrounds: 6318"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 10077.163161422823,
            "unit": "iter/sec",
            "range": "stddev: 0.00006994519457669109",
            "extra": "mean: 99.23427694692673 usec\nrounds: 7088"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 10188.92231190294,
            "unit": "iter/sec",
            "range": "stddev: 0.00008914917770792368",
            "extra": "mean: 98.14580672891935 usec\nrounds: 8144"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 8990.918473363565,
            "unit": "iter/sec",
            "range": "stddev: 0.00007611169090573255",
            "extra": "mean: 111.22334197141186 usec\nrounds: 6676"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 8060.95664948653,
            "unit": "iter/sec",
            "range": "stddev: 0.000030721463949601366",
            "extra": "mean: 124.0547547248872 usec\nrounds: 4709"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 6440.458549489063,
            "unit": "iter/sec",
            "range": "stddev: 0.000033684383633284846",
            "extra": "mean: 155.26844747402845 usec\nrounds: 4731"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 7810.653631044988,
            "unit": "iter/sec",
            "range": "stddev: 0.00005217461304904643",
            "extra": "mean: 128.03025806000437 usec\nrounds: 6545"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 7470.708499303983,
            "unit": "iter/sec",
            "range": "stddev: 0.000025917899034001666",
            "extra": "mean: 133.85611285638652 usec\nrounds: 6619"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 373382.1694398651,
            "unit": "iter/sec",
            "range": "stddev: 0.000002817880625187342",
            "extra": "mean: 2.678221087793681 usec\nrounds: 45249"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 334006.5520846767,
            "unit": "iter/sec",
            "range": "stddev: 0.000005705163267418208",
            "extra": "mean: 2.993953243607275 usec\nrounds: 94340"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 260737.43840079542,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039865884548741955",
            "extra": "mean: 3.8352758473558333 usec\nrounds: 72464"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 265804.84929452406,
            "unit": "iter/sec",
            "range": "stddev: 0.000013353104660456861",
            "extra": "mean: 3.762158601147091 usec\nrounds: 58480"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 35545.08247618861,
            "unit": "iter/sec",
            "range": "stddev: 0.00031386042390131326",
            "extra": "mean: 28.133286810345503 usec\nrounds: 9515"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 43593.75441100404,
            "unit": "iter/sec",
            "range": "stddev: 0.00001087508038627933",
            "extra": "mean: 22.939065779284604 usec\nrounds: 18182"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 31618.011829496194,
            "unit": "iter/sec",
            "range": "stddev: 0.000012345280276080407",
            "extra": "mean: 31.627542091913188 usec\nrounds: 14599"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 32769.23827135701,
            "unit": "iter/sec",
            "range": "stddev: 0.000011991304003395419",
            "extra": "mean: 30.516424938509527 usec\nrounds: 13369"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 42021.15543562134,
            "unit": "iter/sec",
            "range": "stddev: 0.000027792083696084315",
            "extra": "mean: 23.7975369699687 usec\nrounds: 14904"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 42853.4972252846,
            "unit": "iter/sec",
            "range": "stddev: 0.000014217621361181257",
            "extra": "mean: 23.335318346199664 usec\nrounds: 14368"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 37704.1531165477,
            "unit": "iter/sec",
            "range": "stddev: 0.000012845900385480188",
            "extra": "mean: 26.52227718545725 usec\nrounds: 16130"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 37576.705710433016,
            "unit": "iter/sec",
            "range": "stddev: 0.000011024364719308042",
            "extra": "mean: 26.61223172957267 usec\nrounds: 16584"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 6302.3793200734435,
            "unit": "iter/sec",
            "range": "stddev: 0.00004307974451115975",
            "extra": "mean: 158.67023376630823 usec\nrounds: 1001"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 4429.47951731048,
            "unit": "iter/sec",
            "range": "stddev: 0.000052716404772185064",
            "extra": "mean: 225.7601589739795 usec\nrounds: 2145"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 3965.7418651634675,
            "unit": "iter/sec",
            "range": "stddev: 0.00004869223897633586",
            "extra": "mean: 252.15962964820457 usec\nrounds: 1963"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 6000.288587926935,
            "unit": "iter/sec",
            "range": "stddev: 0.00004075881460237692",
            "extra": "mean: 166.65865072091378 usec\nrounds: 1735"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 132.83420092058267,
            "unit": "iter/sec",
            "range": "stddev: 0.012114424614839518",
            "extra": "mean: 7.52818169620238 msec\nrounds: 79"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 140.30656769184014,
            "unit": "iter/sec",
            "range": "stddev: 0.011090950511922945",
            "extra": "mean: 7.12725010989031 msec\nrounds: 91"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 144.81423567742604,
            "unit": "iter/sec",
            "range": "stddev: 0.011958041484851169",
            "extra": "mean: 6.905398459772296 msec\nrounds: 87"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 140.40090744717207,
            "unit": "iter/sec",
            "range": "stddev: 0.012106392466698793",
            "extra": "mean: 7.122461087911878 msec\nrounds: 91"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 6519.233988007644,
            "unit": "iter/sec",
            "range": "stddev: 0.00003343690920950953",
            "extra": "mean: 153.39225464825074 usec\nrounds: 2474"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 4198.261883327472,
            "unit": "iter/sec",
            "range": "stddev: 0.0001978228785682397",
            "extra": "mean: 238.1938115798095 usec\nrounds: 1969"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 4186.625668736381,
            "unit": "iter/sec",
            "range": "stddev: 0.00003875723071869313",
            "extra": "mean: 238.85584218037408 usec\nrounds: 2091"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 5630.5496997414275,
            "unit": "iter/sec",
            "range": "stddev: 0.000048046826836415186",
            "extra": "mean: 177.60255273937517 usec\nrounds: 2446"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 147.4127769007105,
            "unit": "iter/sec",
            "range": "stddev: 0.01145336529990952",
            "extra": "mean: 6.783672494505327 msec\nrounds: 91"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 131.32487965928985,
            "unit": "iter/sec",
            "range": "stddev: 0.013429484114502751",
            "extra": "mean: 7.614703341776568 msec\nrounds: 79"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 137.93813772282337,
            "unit": "iter/sec",
            "range": "stddev: 0.011613460863375174",
            "extra": "mean: 7.2496266551707915 msec\nrounds: 87"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 148.21230242610338,
            "unit": "iter/sec",
            "range": "stddev: 0.011461472679447813",
            "extra": "mean: 6.747078235955388 msec\nrounds: 89"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 120074.26844092576,
            "unit": "iter/sec",
            "range": "stddev: 0.000005100924949653148",
            "extra": "mean: 8.328178992753813 usec\nrounds: 37454"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 123989.43337505938,
            "unit": "iter/sec",
            "range": "stddev: 0.000004935285753242859",
            "extra": "mean: 8.065203403059918 usec\nrounds: 41494"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 120945.66068432089,
            "unit": "iter/sec",
            "range": "stddev: 0.000007253244969773945",
            "extra": "mean: 8.268175925799358 usec\nrounds: 43291"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 123837.15292824453,
            "unit": "iter/sec",
            "range": "stddev: 0.000012616298009577557",
            "extra": "mean: 8.075121046907741 usec\nrounds: 40001"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 92037.32032987702,
            "unit": "iter/sec",
            "range": "stddev: 0.000005238873256246901",
            "extra": "mean: 10.865157703590612 usec\nrounds: 30031"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 85880.06186333652,
            "unit": "iter/sec",
            "range": "stddev: 0.000005427076174310438",
            "extra": "mean: 11.644146246556383 usec\nrounds: 37594"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 88943.76489912579,
            "unit": "iter/sec",
            "range": "stddev: 0.000023460152737171383",
            "extra": "mean: 11.243059039991557 usec\nrounds: 38313"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 93825.24954171015,
            "unit": "iter/sec",
            "range": "stddev: 0.000004843395475378039",
            "extra": "mean: 10.658111807690409 usec\nrounds: 37314"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 92326.23099950733,
            "unit": "iter/sec",
            "range": "stddev: 0.000029070358713883902",
            "extra": "mean: 10.831158048738459 usec\nrounds: 19456"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 92814.03643003326,
            "unit": "iter/sec",
            "range": "stddev: 0.000005438230434138639",
            "extra": "mean: 10.77423241638497 usec\nrounds: 32786"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 90702.62971433396,
            "unit": "iter/sec",
            "range": "stddev: 0.0000274951572381894",
            "extra": "mean: 11.025038669214762 usec\nrounds: 20921"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 96580.04113349513,
            "unit": "iter/sec",
            "range": "stddev: 0.000005466809267059683",
            "extra": "mean: 10.354106172079355 usec\nrounds: 20203"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 74288.04851146905,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066489584760115086",
            "extra": "mean: 13.46111548273628 usec\nrounds: 20791"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 70291.04625348577,
            "unit": "iter/sec",
            "range": "stddev: 0.000006872433958558413",
            "extra": "mean: 14.226563030428778 usec\nrounds: 24631"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 74722.36851070492,
            "unit": "iter/sec",
            "range": "stddev: 0.000007450187021826127",
            "extra": "mean: 13.382873427743894 usec\nrounds: 30212"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 71066.33544367913,
            "unit": "iter/sec",
            "range": "stddev: 0.00001981741818186777",
            "extra": "mean: 14.07136014199735 usec\nrounds: 28411"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 61661.563023860646,
            "unit": "iter/sec",
            "range": "stddev: 0.000007425366739490537",
            "extra": "mean: 16.21755841014018 usec\nrounds: 9382"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 14897.735473018649,
            "unit": "iter/sec",
            "range": "stddev: 0.000024607577020371154",
            "extra": "mean: 67.12429562272092 usec\nrounds: 7699"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 14863.58875063936,
            "unit": "iter/sec",
            "range": "stddev: 0.00002430665917982129",
            "extra": "mean: 67.27850297640836 usec\nrounds: 8231"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 55371.673844510085,
            "unit": "iter/sec",
            "range": "stddev: 0.000012857415065517615",
            "extra": "mean: 18.05977552363891 usec\nrounds: 22626"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 49700.51937752433,
            "unit": "iter/sec",
            "range": "stddev: 0.00001262536980072041",
            "extra": "mean: 20.120514081633964 usec\nrounds: 19493"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 11325.602351712394,
            "unit": "iter/sec",
            "range": "stddev: 0.00008433736366395628",
            "extra": "mean: 88.29552450680941 usec\nrounds: 5121"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 12458.485183099783,
            "unit": "iter/sec",
            "range": "stddev: 0.000020105575161889586",
            "extra": "mean: 80.26658019038483 usec\nrounds: 7875"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 50569.162798766214,
            "unit": "iter/sec",
            "range": "stddev: 0.000009494000248189655",
            "extra": "mean: 19.774897282349276 usec\nrounds: 19685"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 419836.4637978656,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024828168820234893",
            "extra": "mean: 2.3818798180461522 usec\nrounds: 30770"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 15033.513816005032,
            "unit": "iter/sec",
            "range": "stddev: 0.000043908841839429174",
            "extra": "mean: 66.518048424273 usec\nrounds: 413"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 15012.454388627115,
            "unit": "iter/sec",
            "range": "stddev: 0.0000520698051430632",
            "extra": "mean: 66.61135974924682 usec\nrounds: 1754"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 439111.7310888898,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032289709071094984",
            "extra": "mean: 2.2773247198844913 usec\nrounds: 95239"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 317297.9603211822,
            "unit": "iter/sec",
            "range": "stddev: 0.000002448861743222219",
            "extra": "mean: 3.1516118130345316 usec\nrounds: 88496"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 12176.948194919252,
            "unit": "iter/sec",
            "range": "stddev: 0.000020538494719217946",
            "extra": "mean: 82.12238271796566 usec\nrounds: 81"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 12685.184071063155,
            "unit": "iter/sec",
            "range": "stddev: 0.000022740173086267676",
            "extra": "mean: 78.83212371203608 usec\nrounds: 97"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 333838.35672059114,
            "unit": "iter/sec",
            "range": "stddev: 0.000003291829511393583",
            "extra": "mean: 2.9954616654100015 usec\nrounds: 90910"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 44157.542908544325,
            "unit": "iter/sec",
            "range": "stddev: 0.000023047319725422784",
            "extra": "mean: 22.646187585009482 usec\nrounds: 12485"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 16526.482384182513,
            "unit": "iter/sec",
            "range": "stddev: 0.000026558925914322114",
            "extra": "mean: 60.508944175386006 usec\nrounds: 8258"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 16809.154999285915,
            "unit": "iter/sec",
            "range": "stddev: 0.00002219186694883238",
            "extra": "mean: 59.4913902598008 usec\nrounds: 9158"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 44797.10715861367,
            "unit": "iter/sec",
            "range": "stddev: 0.000011339569190325268",
            "extra": "mean: 22.322870011656953 usec\nrounds: 18417"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 33285.869636692674,
            "unit": "iter/sec",
            "range": "stddev: 0.0000104026013436367",
            "extra": "mean: 30.042778239377895 usec\nrounds: 17095"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 13540.972901087333,
            "unit": "iter/sec",
            "range": "stddev: 0.000028553215296247463",
            "extra": "mean: 73.84993732021282 usec\nrounds: 5935"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 13163.78726063853,
            "unit": "iter/sec",
            "range": "stddev: 0.000020696002262181094",
            "extra": "mean: 75.96598001778202 usec\nrounds: 9058"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 32511.73888153298,
            "unit": "iter/sec",
            "range": "stddev: 0.00001504774926829521",
            "extra": "mean: 30.75812104802585 usec\nrounds: 16448"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 42554.9572904351,
            "unit": "iter/sec",
            "range": "stddev: 0.00003698736692016797",
            "extra": "mean: 23.499024876821245 usec\nrounds: 18692"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 17591.5710271709,
            "unit": "iter/sec",
            "range": "stddev: 0.000017408241434115928",
            "extra": "mean: 56.84540615817991 usec\nrounds: 7502"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 16006.778565236193,
            "unit": "iter/sec",
            "range": "stddev: 0.000021521846055109966",
            "extra": "mean: 62.473532442800064 usec\nrounds: 6735"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 45679.460565814705,
            "unit": "iter/sec",
            "range": "stddev: 0.000010432093970336645",
            "extra": "mean: 21.89167708228966 usec\nrounds: 17794"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 32079.266135214664,
            "unit": "iter/sec",
            "range": "stddev: 0.00007642729798000838",
            "extra": "mean: 31.172782936647696 usec\nrounds: 6892"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 13538.542873912698,
            "unit": "iter/sec",
            "range": "stddev: 0.000019731070482921065",
            "extra": "mean: 73.8631926133566 usec\nrounds: 6931"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 13250.025328849122,
            "unit": "iter/sec",
            "range": "stddev: 0.000022483151622035573",
            "extra": "mean: 75.47155384093583 usec\nrounds: 9268"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 33676.496612963005,
            "unit": "iter/sec",
            "range": "stddev: 0.000024496971782137054",
            "extra": "mean: 29.694300196745306 usec\nrounds: 17302"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 35361.184374526645,
            "unit": "iter/sec",
            "range": "stddev: 0.000010304400524398947",
            "extra": "mean: 28.2795957683017 usec\nrounds: 14368"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 36371.5454540428,
            "unit": "iter/sec",
            "range": "stddev: 0.000013080252891876645",
            "extra": "mean: 27.494020051018953 usec\nrounds: 15361"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 35303.08939468261,
            "unit": "iter/sec",
            "range": "stddev: 0.000011251018873728973",
            "extra": "mean: 28.326132844074014 usec\nrounds: 16892"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 36848.89991766266,
            "unit": "iter/sec",
            "range": "stddev: 0.000017068681925825432",
            "extra": "mean: 27.137852208192335 usec\nrounds: 13316"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 28399.798357736876,
            "unit": "iter/sec",
            "range": "stddev: 0.000012892497869859099",
            "extra": "mean: 35.211517610214756 usec\nrounds: 7098"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 26919.38999663797,
            "unit": "iter/sec",
            "range": "stddev: 0.000010673528068286484",
            "extra": "mean: 37.14794429312449 usec\nrounds: 12871"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 26360.278237203827,
            "unit": "iter/sec",
            "range": "stddev: 0.000015724359469401403",
            "extra": "mean: 37.93586664759253 usec\nrounds: 13813"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 27942.7547876696,
            "unit": "iter/sec",
            "range": "stddev: 0.000012388566238643548",
            "extra": "mean: 35.78745215347463 usec\nrounds: 14557"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 35958.253710237,
            "unit": "iter/sec",
            "range": "stddev: 0.00003516076925135896",
            "extra": "mean: 27.810026817718036 usec\nrounds: 8651"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 33143.28578538162,
            "unit": "iter/sec",
            "range": "stddev: 0.000017570104668211543",
            "extra": "mean: 30.17202357290315 usec\nrounds: 15314"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 36010.36233445992,
            "unit": "iter/sec",
            "range": "stddev: 0.0000114750981345494",
            "extra": "mean: 27.76978445015688 usec\nrounds: 14971"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 32826.31652619539,
            "unit": "iter/sec",
            "range": "stddev: 0.000014636643259759647",
            "extra": "mean: 30.46336311300722 usec\nrounds: 6436"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 29028.96854215992,
            "unit": "iter/sec",
            "range": "stddev: 0.000016573703088160976",
            "extra": "mean: 34.448347641000765 usec\nrounds: 11765"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 28965.36941940343,
            "unit": "iter/sec",
            "range": "stddev: 0.000011866698923902897",
            "extra": "mean: 34.52398571274966 usec\nrounds: 13369"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 28493.359399879184,
            "unit": "iter/sec",
            "range": "stddev: 0.000013390626177145216",
            "extra": "mean: 35.09589676548425 usec\nrounds: 13387"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 28347.564323143706,
            "unit": "iter/sec",
            "range": "stddev: 0.000022936106655466504",
            "extra": "mean: 35.2763993618871 usec\nrounds: 14105"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 55491.08542933182,
            "unit": "iter/sec",
            "range": "stddev: 0.000009782539772819939",
            "extra": "mean: 18.020912589167228 usec\nrounds: 19048"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 19217.594045971764,
            "unit": "iter/sec",
            "range": "stddev: 0.000037081651023950114",
            "extra": "mean: 52.03565012393484 usec\nrounds: 8866"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 18040.65218004569,
            "unit": "iter/sec",
            "range": "stddev: 0.000049350639954756566",
            "extra": "mean: 55.43036859310856 usec\nrounds: 8858"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 57370.878719538494,
            "unit": "iter/sec",
            "range": "stddev: 0.00000804185826499212",
            "extra": "mean: 17.43044593910735 usec\nrounds: 9961"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 49206.24728795539,
            "unit": "iter/sec",
            "range": "stddev: 0.000012783129373257608",
            "extra": "mean: 20.3226227382875 usec\nrounds: 21277"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 15461.612368267315,
            "unit": "iter/sec",
            "range": "stddev: 0.000018986517519631872",
            "extra": "mean: 64.67630776026651 usec\nrounds: 5657"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 15214.00324723723,
            "unit": "iter/sec",
            "range": "stddev: 0.0000166098665687367",
            "extra": "mean: 65.72891984768006 usec\nrounds: 9719"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 53056.1390498189,
            "unit": "iter/sec",
            "range": "stddev: 0.000013516403429471728",
            "extra": "mean: 18.84796025321434 usec\nrounds: 19121"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 54423.54145191304,
            "unit": "iter/sec",
            "range": "stddev: 0.00003448508669768074",
            "extra": "mean: 18.374401468959327 usec\nrounds: 17700"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 19382.49459946131,
            "unit": "iter/sec",
            "range": "stddev: 0.000016276992885768945",
            "extra": "mean: 51.59294614367093 usec\nrounds: 8727"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 19407.342036749993,
            "unit": "iter/sec",
            "range": "stddev: 0.000016539767295390035",
            "extra": "mean: 51.52689111710336 usec\nrounds: 9524"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 54138.81044128853,
            "unit": "iter/sec",
            "range": "stddev: 0.000009793020167496939",
            "extra": "mean: 18.471037539409217 usec\nrounds: 19686"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 51046.55948514429,
            "unit": "iter/sec",
            "range": "stddev: 0.00002700710104354546",
            "extra": "mean: 19.589958854935613 usec\nrounds: 19881"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 14916.151193890499,
            "unit": "iter/sec",
            "range": "stddev: 0.00008404019843397337",
            "extra": "mean: 67.04142288458362 usec\nrounds: 7813"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 14633.49250335468,
            "unit": "iter/sec",
            "range": "stddev: 0.00009276723109004581",
            "extra": "mean: 68.33638653047133 usec\nrounds: 9399"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 49374.634322114034,
            "unit": "iter/sec",
            "range": "stddev: 0.000012534022357210542",
            "extra": "mean: 20.253314555731656 usec\nrounds: 19456"
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
          "id": "a506ebe31483fe7bc114635aad51804c000ea51c",
          "message": "Pint 0.3.2",
          "timestamp": "2022-11-26T23:23:24-03:00",
          "tree_id": "6fe1e622e9712d4eaa52ace92dcb31c461881513",
          "url": "https://github.com/hgrecco/pint-benchmark/commit/a506ebe31483fe7bc114635aad51804c000ea51c"
        },
        "date": 1669518597089,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 4.475733261282222,
            "unit": "iter/sec",
            "range": "stddev: 0.001455297563300087",
            "extra": "mean: 223.427077000008 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 59520.117858997204,
            "unit": "iter/sec",
            "range": "stddev: 0.00017766939139370898",
            "extra": "mean: 16.801042000101443 usec\nrounds: 6619"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 34.890150490508134,
            "unit": "iter/sec",
            "range": "stddev: 0.00040165403734908654",
            "extra": "mean: 28.661383970586485 msec\nrounds: 34"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 1335.7107712958707,
            "unit": "iter/sec",
            "range": "stddev: 0.00006306677164234446",
            "extra": "mean: 748.6650714284701 usec\nrounds: 1092"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 13544.693550516686,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018204687818726008",
            "extra": "mean: 73.82965116710619 usec\nrounds: 10753"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 13178.062784061112,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026839089871753044",
            "extra": "mean: 75.88368763954453 usec\nrounds: 6707"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 13563.022992163093,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025021315343110724",
            "extra": "mean: 73.729875749515 usec\nrounds: 10173"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 13584.482283380587,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030719204537842146",
            "extra": "mean: 73.61340529137512 usec\nrounds: 9941"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 13286.228424282226,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029748733906830863",
            "extra": "mean: 75.26590451902636 usec\nrounds: 8033"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 13034.29815571329,
            "unit": "iter/sec",
            "range": "stddev: 0.000002168517311454086",
            "extra": "mean: 76.7206632880093 usec\nrounds: 9373"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 12655.867771997584,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018525757829678947",
            "extra": "mean: 79.01473198168232 usec\nrounds: 6757"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 13075.712028597241,
            "unit": "iter/sec",
            "range": "stddev: 0.000001930843167763114",
            "extra": "mean: 76.47767080010247 usec\nrounds: 9757"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 13048.574577028188,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020471243342701025",
            "extra": "mean: 76.63672335218011 usec\nrounds: 10132"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 12852.523465544786,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021036072303810245",
            "extra": "mean: 77.80573228913475 usec\nrounds: 9260"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 3131606.2204002533,
            "unit": "iter/sec",
            "range": "stddev: 1.834767479789063e-8",
            "extra": "mean: 319.3249500801506 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 2347649.3199228835,
            "unit": "iter/sec",
            "range": "stddev: 7.76970990943242e-7",
            "extra": "mean: 425.95799615902104 nsec\nrounds: 196117"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 3158407.750617594,
            "unit": "iter/sec",
            "range": "stddev: 1.939534296681966e-8",
            "extra": "mean: 316.6152311412167 nsec\nrounds: 188680"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 3123059.6732119457,
            "unit": "iter/sec",
            "range": "stddev: 1.789589723236092e-8",
            "extra": "mean: 320.19881290693974 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 2387483.6364119574,
            "unit": "iter/sec",
            "range": "stddev: 7.447506025046619e-7",
            "extra": "mean: 418.8510382851693 nsec\nrounds: 185186"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 14442.881686419933,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020433481624307882",
            "extra": "mean: 69.23826018323341 usec\nrounds: 11588"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 14002.401862768615,
            "unit": "iter/sec",
            "range": "stddev: 0.000002412036301658242",
            "extra": "mean: 71.41631912871523 usec\nrounds: 7486"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 14470.098310177902,
            "unit": "iter/sec",
            "range": "stddev: 0.000001915876775231061",
            "extra": "mean: 69.10803082081517 usec\nrounds: 12005"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 14513.141511954836,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018770775741370473",
            "extra": "mean: 68.9030696197839 usec\nrounds: 11807"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 14187.46361669994,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021089945540218962",
            "extra": "mean: 70.48476225326905 usec\nrounds: 11752"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 10072.636445705935,
            "unit": "iter/sec",
            "range": "stddev: 0.000002422290530006011",
            "extra": "mean: 99.27887354916994 usec\nrounds: 7236"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 9885.571860818418,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029878057902663013",
            "extra": "mean: 101.15752675507949 usec\nrounds: 5513"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 10013.809005262803,
            "unit": "iter/sec",
            "range": "stddev: 0.000002268999060871333",
            "extra": "mean: 99.8621003730394 usec\nrounds: 7502"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 10022.353412972672,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037828544220862935",
            "extra": "mean: 99.77696443089167 usec\nrounds: 7844"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 9902.728712908254,
            "unit": "iter/sec",
            "range": "stddev: 0.000002851423282708486",
            "extra": "mean: 100.98226751344761 usec\nrounds: 7480"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 14509.949095396662,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022013599900184138",
            "extra": "mean: 68.91822937664571 usec\nrounds: 11710"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 11865.817760976599,
            "unit": "iter/sec",
            "range": "stddev: 0.000002555200394861362",
            "extra": "mean: 84.27569175120185 usec\nrounds: 8013"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 8927.830091201997,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028684526328527473",
            "extra": "mean: 112.00930010814814 usec\nrounds: 4615"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 8209.169510992557,
            "unit": "iter/sec",
            "range": "stddev: 0.000004379805540535711",
            "extra": "mean: 121.81500195128652 usec\nrounds: 6663"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 12915.078017067079,
            "unit": "iter/sec",
            "range": "stddev: 0.000001956589239920625",
            "extra": "mean: 77.42887798885266 usec\nrounds: 11835"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 12933.740509375877,
            "unit": "iter/sec",
            "range": "stddev: 0.000001942551117681081",
            "extra": "mean: 77.31715347737833 usec\nrounds: 11891"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 12896.40501885671,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019852898381678502",
            "extra": "mean: 77.54098902274177 usec\nrounds: 11934"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 21053134.708193652,
            "unit": "iter/sec",
            "range": "stddev: 2.815368446718088e-9",
            "extra": "mean: 47.49886484185757 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 19427869.479795188,
            "unit": "iter/sec",
            "range": "stddev: 3.022891972736391e-9",
            "extra": "mean: 51.472447920270504 nsec\nrounds: 178572"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 17171747.358551357,
            "unit": "iter/sec",
            "range": "stddev: 3.0245961922095684e-9",
            "extra": "mean: 58.235191743711766 nsec\nrounds: 156250"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 20445407.17703537,
            "unit": "iter/sec",
            "range": "stddev: 2.9502613106080435e-9",
            "extra": "mean: 48.910740262790256 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 21162316.891694464,
            "unit": "iter/sec",
            "range": "stddev: 2.6088713449963927e-9",
            "extra": "mean: 47.25380520097787 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 21137983.911118366,
            "unit": "iter/sec",
            "range": "stddev: 3.0155120525736727e-9",
            "extra": "mean: 47.30820139732068 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 50294.108226499215,
            "unit": "iter/sec",
            "range": "stddev: 9.091645618772975e-7",
            "extra": "mean: 19.88304465995313 usec\nrounds: 9785"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 20804.717663662355,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018861841958434604",
            "extra": "mean: 48.06602118646416 usec\nrounds: 236"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 49737.2410332431,
            "unit": "iter/sec",
            "range": "stddev: 7.303775920167929e-7",
            "extra": "mean: 20.105658842870383 usec\nrounds: 12739"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 20826.899496842405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014138460268302877",
            "extra": "mean: 48.01482813856241 usec\nrounds: 8117"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 50173.488752305064,
            "unit": "iter/sec",
            "range": "stddev: 9.92762176823811e-7",
            "extra": "mean: 19.930844453268325 usec\nrounds: 12485"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 20728.650205381266,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015734960196919917",
            "extra": "mean: 48.24240797600969 usec\nrounds: 1956"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 17508.36729021186,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017134695969978197",
            "extra": "mean: 57.11554843603579 usec\nrounds: 8599"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 36214.81478272896,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011475534348238112",
            "extra": "mean: 27.613008819719422 usec\nrounds: 11905"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 17369.71860108324,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014623138756862983",
            "extra": "mean: 57.57145656565997 usec\nrounds: 8369"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 36220.441087567655,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010808503033084072",
            "extra": "mean: 27.608719550995232 usec\nrounds: 2225"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 17205.940999839684,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016533292955130777",
            "extra": "mean: 58.11946001728807 usec\nrounds: 8341"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 35749.5218028371,
            "unit": "iter/sec",
            "range": "stddev: 0.000001123162907361441",
            "extra": "mean: 27.97240213491861 usec\nrounds: 11429"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 50038.890339802,
            "unit": "iter/sec",
            "range": "stddev: 7.112402839408096e-7",
            "extra": "mean: 19.98445595434355 usec\nrounds: 15291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 20632.087001805667,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013921849885331473",
            "extra": "mean: 48.46819422157743 usec\nrounds: 1869"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 49743.82850115757,
            "unit": "iter/sec",
            "range": "stddev: 8.024436768472701e-7",
            "extra": "mean: 20.102996293836316 usec\nrounds: 15650"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 21169.434057021805,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012935921281145437",
            "extra": "mean: 47.237918468033136 usec\nrounds: 8696"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 49588.98791391713,
            "unit": "iter/sec",
            "range": "stddev: 8.799661335672128e-7",
            "extra": "mean: 20.165767483214765 usec\nrounds: 14085"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 20521.638307252237,
            "unit": "iter/sec",
            "range": "stddev: 0.000001502537096458626",
            "extra": "mean: 48.72905296487003 usec\nrounds: 1737"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 17253.798448311492,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015914160505226436",
            "extra": "mean: 57.958252091316325 usec\nrounds: 8489"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 36069.73253807922,
            "unit": "iter/sec",
            "range": "stddev: 9.02481375102063e-7",
            "extra": "mean: 27.72407582851603 usec\nrounds: 11948"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 17526.97926425883,
            "unit": "iter/sec",
            "range": "stddev: 0.00000149423611580373",
            "extra": "mean: 57.054897191509134 usec\nrounds: 8511"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 35563.504198619376,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011265440462535994",
            "extra": "mean: 28.118713904430752 usec\nrounds: 2244"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 17170.154295762066,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017292561271895928",
            "extra": "mean: 58.24059485865073 usec\nrounds: 8091"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 35616.32861236759,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010487605493758274",
            "extra": "mean: 28.077009589718212 usec\nrounds: 11575"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 48418.7383477829,
            "unit": "iter/sec",
            "range": "stddev: 7.987225326753721e-7",
            "extra": "mean: 20.65316103069815 usec\nrounds: 14165"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 20228.45838507076,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015874012352163097",
            "extra": "mean: 49.43530450832731 usec\nrounds: 1908"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 48528.07028788918,
            "unit": "iter/sec",
            "range": "stddev: 9.594983278769127e-7",
            "extra": "mean: 20.606630225920256 usec\nrounds: 14663"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 19963.711806944568,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013396219748604982",
            "extra": "mean: 50.09088538596016 usec\nrounds: 8533"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 48571.681838268014,
            "unit": "iter/sec",
            "range": "stddev: 8.789731778122634e-7",
            "extra": "mean: 20.588127941086306 usec\nrounds: 14663"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 19664.104323334654,
            "unit": "iter/sec",
            "range": "stddev: 0.000006544207889851959",
            "extra": "mean: 50.85408333667848 usec\nrounds: 96"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 17234.18444022941,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015819539575931323",
            "extra": "mean: 58.0242136474831 usec\nrounds: 8397"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 34988.94889818442,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010109919203255224",
            "extra": "mean: 28.580452728372475 usec\nrounds: 11455"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 16983.105314070588,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015543467905928735",
            "extra": "mean: 58.882046687392034 usec\nrounds: 8482"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 34817.70808967434,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034346035673521163",
            "extra": "mean: 28.721017403686123 usec\nrounds: 11779"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 17231.22159298881,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015503147662794347",
            "extra": "mean: 58.034190704557396 usec\nrounds: 8348"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 34852.513730436134,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010976306638946502",
            "extra": "mean: 28.692335013032825 usec\nrounds: 11313"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 50705.7811044907,
            "unit": "iter/sec",
            "range": "stddev: 8.473785145997843e-7",
            "extra": "mean: 19.72161710593264 usec\nrounds: 14837"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 20739.054806834687,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043828560554691855",
            "extra": "mean: 48.21820518408793 usec\nrounds: 8719"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 50450.98591242587,
            "unit": "iter/sec",
            "range": "stddev: 8.537028971559366e-7",
            "extra": "mean: 19.821218196524956 usec\nrounds: 14904"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 21008.663310092386,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014798387020283189",
            "extra": "mean: 47.59941102581278 usec\nrounds: 8362"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 50500.67372276668,
            "unit": "iter/sec",
            "range": "stddev: 8.48028838064938e-7",
            "extra": "mean: 19.801716022437553 usec\nrounds: 13737"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 20851.114925221533,
            "unit": "iter/sec",
            "range": "stddev: 0.0000047218063294567285",
            "extra": "mean: 47.959066150002315 usec\nrounds: 8390"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 17487.340774741544,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015378631264237958",
            "extra": "mean: 57.18422331223654 usec\nrounds: 8562"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 36049.96544433526,
            "unit": "iter/sec",
            "range": "stddev: 9.545774063548023e-7",
            "extra": "mean: 27.739277629658194 usec\nrounds: 12034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 17517.805601803295,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016057416388348564",
            "extra": "mean: 57.08477549819707 usec\nrounds: 8432"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 35777.46399686716,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012799933759477043",
            "extra": "mean: 27.950555693035277 usec\nrounds: 2415"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 17254.883681287884,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015711768111971507",
            "extra": "mean: 57.95460685049146 usec\nrounds: 8320"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 36034.16073706585,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011319071574764136",
            "extra": "mean: 27.75144417256731 usec\nrounds: 11455"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 49767.40747972547,
            "unit": "iter/sec",
            "range": "stddev: 7.776509184564468e-7",
            "extra": "mean: 20.093471825057104 usec\nrounds: 14410"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 20750.763045320007,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016203687458378043",
            "extra": "mean: 48.190998943797084 usec\nrounds: 1894"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 49299.84107873511,
            "unit": "iter/sec",
            "range": "stddev: 7.579897811396879e-7",
            "extra": "mean: 20.28404104595254 usec\nrounds: 14837"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 21068.413400671452,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015084197190903635",
            "extra": "mean: 47.46441893759925 usec\nrounds: 8734"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 49088.49611279908,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034435228200658055",
            "extra": "mean: 20.3713716896547 usec\nrounds: 14348"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 20365.212080238936,
            "unit": "iter/sec",
            "range": "stddev: 0.000002245690529998155",
            "extra": "mean: 49.103343292473454 usec\nrounds: 1841"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 17252.948697304415,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016055708335066474",
            "extra": "mean: 57.961106680635936 usec\nrounds: 8577"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 35828.457625834926,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010022433174510559",
            "extra": "mean: 27.910774458762276 usec\nrounds: 11683"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 17010.118315263924,
            "unit": "iter/sec",
            "range": "stddev: 0.000009510268863138628",
            "extra": "mean: 58.78853876652089 usec\nrounds: 8577"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 35394.201621718894,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012180258207654324",
            "extra": "mean: 28.25321533418546 usec\nrounds: 2178"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 17198.69440918334,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016065243855900508",
            "extra": "mean: 58.143948384014806 usec\nrounds: 8292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 35910.118485860905,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010112726920480378",
            "extra": "mean: 27.847304385635365 usec\nrounds: 11561"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 48481.860281798705,
            "unit": "iter/sec",
            "range": "stddev: 9.068956822413879e-7",
            "extra": "mean: 20.626271231911144 usec\nrounds: 14165"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 20322.473646153736,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016131290334403242",
            "extra": "mean: 49.2066082806441 usec\nrounds: 1884"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 48004.15683858158,
            "unit": "iter/sec",
            "range": "stddev: 8.813617322014135e-7",
            "extra": "mean: 20.831529306151392 usec\nrounds: 14451"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 20592.244492723003,
            "unit": "iter/sec",
            "range": "stddev: 0.000001562147998145845",
            "extra": "mean: 48.561971977041416 usec\nrounds: 8279"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 47009.689232608376,
            "unit": "iter/sec",
            "range": "stddev: 0.000005257995051875481",
            "extra": "mean: 21.272210395859155 usec\nrounds: 14948"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 19975.494364636343,
            "unit": "iter/sec",
            "range": "stddev: 0.000001691071556047467",
            "extra": "mean: 50.06133924626928 usec\nrounds: 1804"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 17140.74570217409,
            "unit": "iter/sec",
            "range": "stddev: 0.000002822682546562391",
            "extra": "mean: 58.34051898180618 usec\nrounds: 8719"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 34757.08908570647,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010851584793224483",
            "extra": "mean: 28.77110904006172 usec\nrounds: 11482"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 17428.148481806093,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014301378143449896",
            "extra": "mean: 57.37844160806514 usec\nrounds: 8383"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 35125.552713067395,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011210716036501524",
            "extra": "mean: 28.469302908021724 usec\nrounds: 2235"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 17243.094719166627,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015347708887180414",
            "extra": "mean: 57.99422993880827 usec\nrounds: 8711"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 34974.011078487514,
            "unit": "iter/sec",
            "range": "stddev: 0.000001216567772329488",
            "extra": "mean: 28.592659782597806 usec\nrounds: 11863"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 176092.85972733874,
            "unit": "iter/sec",
            "range": "stddev: 3.144983432451383e-7",
            "extra": "mean: 5.678821966707763 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 171459.9238871851,
            "unit": "iter/sec",
            "range": "stddev: 3.2805278066920675e-7",
            "extra": "mean: 5.832266673919478 usec\nrounds: 64517"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 178055.01404831227,
            "unit": "iter/sec",
            "range": "stddev: 3.7168506398700763e-7",
            "extra": "mean: 5.616241729248168 usec\nrounds: 68494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 172930.0119298291,
            "unit": "iter/sec",
            "range": "stddev: 3.1274470028333854e-7",
            "extra": "mean: 5.7826862372841115 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 175240.10105121727,
            "unit": "iter/sec",
            "range": "stddev: 4.606372493655597e-7",
            "extra": "mean: 5.706456421796577 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 171065.09737314892,
            "unit": "iter/sec",
            "range": "stddev: 4.71983995730922e-7",
            "extra": "mean: 5.845727827335069 usec\nrounds: 59172"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 170488.5140827154,
            "unit": "iter/sec",
            "range": "stddev: 3.7818238810784344e-7",
            "extra": "mean: 5.865497774910707 usec\nrounds: 52357"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 176392.41010231763,
            "unit": "iter/sec",
            "range": "stddev: 3.345053901600569e-7",
            "extra": "mean: 5.669178165998996 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 169585.39129519538,
            "unit": "iter/sec",
            "range": "stddev: 3.0960630642088995e-7",
            "extra": "mean: 5.896734337566325 usec\nrounds: 60607"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 174318.61487139872,
            "unit": "iter/sec",
            "range": "stddev: 3.223077701396797e-7",
            "extra": "mean: 5.736621993799899 usec\nrounds: 68028"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 172346.77847725927,
            "unit": "iter/sec",
            "range": "stddev: 4.6219535712819043e-7",
            "extra": "mean: 5.802255248605923 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 177483.65818629687,
            "unit": "iter/sec",
            "range": "stddev: 4.4639413711952534e-7",
            "extra": "mean: 5.634321549482283 usec\nrounds: 55556"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 178460.02303928233,
            "unit": "iter/sec",
            "range": "stddev: 3.101418231466306e-7",
            "extra": "mean: 5.603495858452746 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 174466.12774713326,
            "unit": "iter/sec",
            "range": "stddev: 4.449844281783402e-7",
            "extra": "mean: 5.731771621878227 usec\nrounds: 61350"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 176505.3360854117,
            "unit": "iter/sec",
            "range": "stddev: 3.3515664063160206e-7",
            "extra": "mean: 5.66555109425188 usec\nrounds: 64107"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 171761.50980976745,
            "unit": "iter/sec",
            "range": "stddev: 3.3631774193123035e-7",
            "extra": "mean: 5.822026140242589 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 174447.27687913654,
            "unit": "iter/sec",
            "range": "stddev: 4.777043857926839e-7",
            "extra": "mean: 5.732391000249529 usec\nrounds: 64936"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 170483.13052325457,
            "unit": "iter/sec",
            "range": "stddev: 4.0904789584325646e-7",
            "extra": "mean: 5.865682997084548 usec\nrounds: 62501"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 172640.88654295853,
            "unit": "iter/sec",
            "range": "stddev: 3.932903106059072e-7",
            "extra": "mean: 5.792370625663859 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 178305.28872094018,
            "unit": "iter/sec",
            "range": "stddev: 3.210818864654724e-7",
            "extra": "mean: 5.608358603232839 usec\nrounds: 64517"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 172713.52758242717,
            "unit": "iter/sec",
            "range": "stddev: 4.0673409091119654e-7",
            "extra": "mean: 5.789934430716506 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 177944.8420407892,
            "unit": "iter/sec",
            "range": "stddev: 3.1304472582816226e-7",
            "extra": "mean: 5.619718945103091 usec\nrounds: 67115"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 169951.09522059927,
            "unit": "iter/sec",
            "range": "stddev: 4.982794210661583e-7",
            "extra": "mean: 5.884045635022145 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 175713.76579804585,
            "unit": "iter/sec",
            "range": "stddev: 4.4502669879524143e-7",
            "extra": "mean: 5.691073749733051 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 172245.87648508186,
            "unit": "iter/sec",
            "range": "stddev: 4.978586775176628e-7",
            "extra": "mean: 5.805654221781093 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 168666.19649081503,
            "unit": "iter/sec",
            "range": "stddev: 4.678149501825548e-7",
            "extra": "mean: 5.928870282282417 usec\nrounds: 64517"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 175688.77765376912,
            "unit": "iter/sec",
            "range": "stddev: 5.156594747693618e-7",
            "extra": "mean: 5.69188318886654 usec\nrounds: 68966"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 172810.80866234374,
            "unit": "iter/sec",
            "range": "stddev: 4.975912402339463e-7",
            "extra": "mean: 5.786675079762556 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 174389.22180691245,
            "unit": "iter/sec",
            "range": "stddev: 4.536029205473154e-7",
            "extra": "mean: 5.734299342806987 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 170684.67466437916,
            "unit": "iter/sec",
            "range": "stddev: 5.416270024725539e-7",
            "extra": "mean: 5.8587568096920295 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 169610.16030460686,
            "unit": "iter/sec",
            "range": "stddev: 4.681873442888597e-7",
            "extra": "mean: 5.895873208327123 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 173344.29142104604,
            "unit": "iter/sec",
            "range": "stddev: 4.7149600494855463e-7",
            "extra": "mean: 5.768866063036605 usec\nrounds: 68032"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 169394.72065976963,
            "unit": "iter/sec",
            "range": "stddev: 4.649728018836211e-7",
            "extra": "mean: 5.903371699573249 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 175829.4431311227,
            "unit": "iter/sec",
            "range": "stddev: 4.737866797654976e-7",
            "extra": "mean: 5.687329620069729 usec\nrounds: 68494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 167916.06028442679,
            "unit": "iter/sec",
            "range": "stddev: 4.4287221835020153e-7",
            "extra": "mean: 5.955356493632218 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 174649.16191024386,
            "unit": "iter/sec",
            "range": "stddev: 5.127743487838493e-7",
            "extra": "mean: 5.725764664785066 usec\nrounds: 70423"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 142988.28564420683,
            "unit": "iter/sec",
            "range": "stddev: 4.627952570495734e-7",
            "extra": "mean: 6.9935798970851915 usec\nrounds: 46729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 144616.17780852728,
            "unit": "iter/sec",
            "range": "stddev: 4.159092004705166e-7",
            "extra": "mean: 6.914855690101326 usec\nrounds: 49754"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 143633.27762441078,
            "unit": "iter/sec",
            "range": "stddev: 5.082435631561877e-7",
            "extra": "mean: 6.962174898040813 usec\nrounds: 51550"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 143494.6368419841,
            "unit": "iter/sec",
            "range": "stddev: 4.4157265963000936e-7",
            "extra": "mean: 6.968901570176434 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 143782.0130117742,
            "unit": "iter/sec",
            "range": "stddev: 4.96028440695406e-7",
            "extra": "mean: 6.954972872149946 usec\nrounds: 45046"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 142368.7690043639,
            "unit": "iter/sec",
            "range": "stddev: 3.7654190028166944e-7",
            "extra": "mean: 7.024012408011676 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 146226.2910993581,
            "unit": "iter/sec",
            "range": "stddev: 4.5031215075665705e-7",
            "extra": "mean: 6.838715476415375 usec\nrounds: 55556"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 146226.20055041456,
            "unit": "iter/sec",
            "range": "stddev: 4.958371044471483e-7",
            "extra": "mean: 6.838719711213648 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 143600.62368255947,
            "unit": "iter/sec",
            "range": "stddev: 3.756658226739074e-7",
            "extra": "mean: 6.963758055888246 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 143212.4058953011,
            "unit": "iter/sec",
            "range": "stddev: 5.186310262672313e-7",
            "extra": "mean: 6.982635294396731 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 142562.51203321468,
            "unit": "iter/sec",
            "range": "stddev: 3.8592909726894283e-7",
            "extra": "mean: 7.014466746819226 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 142657.4388893499,
            "unit": "iter/sec",
            "range": "stddev: 4.977789634686116e-7",
            "extra": "mean: 7.0097991929858985 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 143602.84842290048,
            "unit": "iter/sec",
            "range": "stddev: 4.616028416205777e-7",
            "extra": "mean: 6.963650171165609 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 144945.9614907843,
            "unit": "iter/sec",
            "range": "stddev: 3.978171695744202e-7",
            "extra": "mean: 6.8991228849351565 usec\nrounds: 55556"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 144063.73960288658,
            "unit": "iter/sec",
            "range": "stddev: 4.389170779073393e-7",
            "extra": "mean: 6.941371942422931 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 145834.92457013528,
            "unit": "iter/sec",
            "range": "stddev: 4.133316189781155e-7",
            "extra": "mean: 6.857068037355329 usec\nrounds: 55249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 142270.86997090667,
            "unit": "iter/sec",
            "range": "stddev: 4.0407724571882065e-7",
            "extra": "mean: 7.02884575180072 usec\nrounds: 53764"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 142865.32437656386,
            "unit": "iter/sec",
            "range": "stddev: 3.941399771038841e-7",
            "extra": "mean: 6.999599128506536 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 142056.95506588332,
            "unit": "iter/sec",
            "range": "stddev: 3.373772091912808e-7",
            "extra": "mean: 7.039430061950989 usec\nrounds: 54348"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 144893.98696375525,
            "unit": "iter/sec",
            "range": "stddev: 4.544291421357433e-7",
            "extra": "mean: 6.9015976504956456 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 145595.57161239366,
            "unit": "iter/sec",
            "range": "stddev: 3.862229626287456e-7",
            "extra": "mean: 6.868340766999511 usec\nrounds: 53764"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 143679.5600219085,
            "unit": "iter/sec",
            "range": "stddev: 4.3876436462714467e-7",
            "extra": "mean: 6.959932225902686 usec\nrounds: 52911"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 141786.57316311274,
            "unit": "iter/sec",
            "range": "stddev: 4.0732810667169924e-7",
            "extra": "mean: 7.052854002258661 usec\nrounds: 52357"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 141301.271107484,
            "unit": "iter/sec",
            "range": "stddev: 4.5550173565653764e-7",
            "extra": "mean: 7.077077171084521 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 142205.89927163784,
            "unit": "iter/sec",
            "range": "stddev: 5.19998953478508e-7",
            "extra": "mean: 7.032057074438431 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 141913.64449692215,
            "unit": "iter/sec",
            "range": "stddev: 3.4384783926624987e-7",
            "extra": "mean: 7.046538784518978 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 143778.4415485827,
            "unit": "iter/sec",
            "range": "stddev: 4.4694586150996295e-7",
            "extra": "mean: 6.955145634000354 usec\nrounds: 54946"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 143136.33414387397,
            "unit": "iter/sec",
            "range": "stddev: 4.023907311295414e-7",
            "extra": "mean: 6.986346310887399 usec\nrounds: 55866"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 145069.48479305653,
            "unit": "iter/sec",
            "range": "stddev: 4.324379035534965e-7",
            "extra": "mean: 6.893248441783003 usec\nrounds: 42195"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 145682.14384913896,
            "unit": "iter/sec",
            "range": "stddev: 4.1901883754535594e-7",
            "extra": "mean: 6.864259226137894 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 143554.54778022098,
            "unit": "iter/sec",
            "range": "stddev: 3.647469249314939e-7",
            "extra": "mean: 6.965993174462011 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 142257.786418237,
            "unit": "iter/sec",
            "range": "stddev: 5.421146352223056e-7",
            "extra": "mean: 7.029492199885681 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 142153.6191383676,
            "unit": "iter/sec",
            "range": "stddev: 3.396852890101418e-7",
            "extra": "mean: 7.034643268748812 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 143642.10414745664,
            "unit": "iter/sec",
            "range": "stddev: 4.646119945710639e-7",
            "extra": "mean: 6.961747086170807 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 145088.47828962468,
            "unit": "iter/sec",
            "range": "stddev: 3.5496978091854207e-7",
            "extra": "mean: 6.8923460483458 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 143949.517632127,
            "unit": "iter/sec",
            "range": "stddev: 4.298598424169655e-7",
            "extra": "mean: 6.946879825992674 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 449242.8506989684,
            "unit": "iter/sec",
            "range": "stddev: 1.207310192273905e-7",
            "extra": "mean: 2.225967532803514 usec\nrounds: 616"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 36020.13401169445,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010474994553306543",
            "extra": "mean: 27.762250958737017 usec\nrounds: 15385"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 471868.55251673196,
            "unit": "iter/sec",
            "range": "stddev: 1.665309463226921e-7",
            "extra": "mean: 2.1192342542567317 usec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 35680.18225750594,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011206566864985138",
            "extra": "mean: 28.026762665698907 usec\nrounds: 14389"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 475972.92630138656,
            "unit": "iter/sec",
            "range": "stddev: 1.9979289752508164e-7",
            "extra": "mean: 2.1009598335154025 usec\nrounds: 149254"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 35560.33128902839,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011026123929568538",
            "extra": "mean: 28.121222827542525 usec\nrounds: 13948"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 36986.628862908394,
            "unit": "iter/sec",
            "range": "stddev: 8.611579221967832e-7",
            "extra": "mean: 27.036797641291344 usec\nrounds: 17212"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 477079.12173715734,
            "unit": "iter/sec",
            "range": "stddev: 1.9132296360857133e-7",
            "extra": "mean: 2.0960883728442457 usec\nrounds: 149254"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 37574.33611587209,
            "unit": "iter/sec",
            "range": "stddev: 8.641246551492071e-7",
            "extra": "mean: 26.61391000804886 usec\nrounds: 15268"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 459453.6422263144,
            "unit": "iter/sec",
            "range": "stddev: 2.217196657922906e-7",
            "extra": "mean: 2.1764981449585012 usec\nrounds: 142858"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 37111.68777742562,
            "unit": "iter/sec",
            "range": "stddev: 8.158769744219244e-7",
            "extra": "mean: 26.94568907772182 usec\nrounds: 15528"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 475391.39866917254,
            "unit": "iter/sec",
            "range": "stddev: 1.8412153638657443e-7",
            "extra": "mean: 2.1035298551876105 usec\nrounds: 149254"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 457530.4064702372,
            "unit": "iter/sec",
            "range": "stddev: 1.7648673217656118e-7",
            "extra": "mean: 2.1856470867473394 usec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 35516.90356066227,
            "unit": "iter/sec",
            "range": "stddev: 0.00002520715630630931",
            "extra": "mean: 28.155607605038455 usec\nrounds: 15385"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 467601.0056993974,
            "unit": "iter/sec",
            "range": "stddev: 2.1642116479027707e-7",
            "extra": "mean: 2.138575383310577 usec\nrounds: 153847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 36079.083794465914,
            "unit": "iter/sec",
            "range": "stddev: 9.629525832106528e-7",
            "extra": "mean: 27.71689008780726 usec\nrounds: 15385"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 479975.2309238579,
            "unit": "iter/sec",
            "range": "stddev: 2.0482640963979166e-7",
            "extra": "mean: 2.083440843551857 usec\nrounds: 147059"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 35876.28110650714,
            "unit": "iter/sec",
            "range": "stddev: 0.000017525636763882154",
            "extra": "mean: 27.873569086808804 usec\nrounds: 15553"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 37022.86142958282,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010036764890290632",
            "extra": "mean: 27.010337974605005 usec\nrounds: 17954"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 468245.41790873045,
            "unit": "iter/sec",
            "range": "stddev: 1.9609184095236746e-7",
            "extra": "mean: 2.135632217109956 usec\nrounds: 138889"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 37498.73068537758,
            "unit": "iter/sec",
            "range": "stddev: 0.00000101089488488403",
            "extra": "mean: 26.66756932095156 usec\nrounds: 15724"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 468435.0819726723,
            "unit": "iter/sec",
            "range": "stddev: 3.0040981074327694e-7",
            "extra": "mean: 2.1347675237917776 usec\nrounds: 149254"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 36959.7842798781,
            "unit": "iter/sec",
            "range": "stddev: 9.795906215575487e-7",
            "extra": "mean: 27.056434973415875 usec\nrounds: 14348"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 462928.23670265905,
            "unit": "iter/sec",
            "range": "stddev: 1.9032497824487667e-7",
            "extra": "mean: 2.1601620309938117 usec\nrounds: 153847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 484908.5950378018,
            "unit": "iter/sec",
            "range": "stddev: 2.289178666579886e-7",
            "extra": "mean: 2.062244328587419 usec\nrounds: 161291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 36004.20894794561,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010020835332725627",
            "extra": "mean: 27.77453051241276 usec\nrounds: 15338"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 465941.90112201707,
            "unit": "iter/sec",
            "range": "stddev: 2.5301852596106367e-7",
            "extra": "mean: 2.146190324570376 usec\nrounds: 138889"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 35544.70513252471,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010618438515506727",
            "extra": "mean: 28.133585474168505 usec\nrounds: 15338"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 479385.55590728106,
            "unit": "iter/sec",
            "range": "stddev: 1.9176395990652143e-7",
            "extra": "mean: 2.0860036095735266 usec\nrounds: 156250"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 36183.46176679349,
            "unit": "iter/sec",
            "range": "stddev: 9.838312097450595e-7",
            "extra": "mean: 27.636935527206138 usec\nrounds: 15650"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 37120.70642571721,
            "unit": "iter/sec",
            "range": "stddev: 0.000016930455810799107",
            "extra": "mean: 26.939142497223607 usec\nrounds: 17453"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 465254.765158916,
            "unit": "iter/sec",
            "range": "stddev: 1.854743575777507e-7",
            "extra": "mean: 2.1493600385982767 usec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 37346.28805233724,
            "unit": "iter/sec",
            "range": "stddev: 0.000001062466470512349",
            "extra": "mean: 26.77642282945486 usec\nrounds: 15874"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 472517.9143395481,
            "unit": "iter/sec",
            "range": "stddev: 1.9879094223246448e-7",
            "extra": "mean: 2.1163218782884217 usec\nrounds: 153847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 36599.69876552551,
            "unit": "iter/sec",
            "range": "stddev: 0.00001773402214578771",
            "extra": "mean: 27.322629249121956 usec\nrounds: 15385"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 467463.58030809095,
            "unit": "iter/sec",
            "range": "stddev: 2.662448827066973e-7",
            "extra": "mean: 2.1392040837511463 usec\nrounds: 142858"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 13463.210128075767,
            "unit": "iter/sec",
            "range": "stddev: 0.000002555608262939098",
            "extra": "mean: 74.27649056109067 usec\nrounds: 12078"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 13059.266418288556,
            "unit": "iter/sec",
            "range": "stddev: 0.000002229960596295351",
            "extra": "mean: 76.57397957664547 usec\nrounds: 10527"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 14521.010855604576,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019036637942978192",
            "extra": "mean: 68.86572911100309 usec\nrounds: 742"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 11811.18689064915,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027261883944215483",
            "extra": "mean: 84.66549630094282 usec\nrounds: 9597"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 10211.429082456072,
            "unit": "iter/sec",
            "range": "stddev: 0.000003076807223846653",
            "extra": "mean: 97.9294858657999 usec\nrounds: 8490"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 8265.140566955395,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022010220006672328",
            "extra": "mean: 120.99007777291402 usec\nrounds: 6519"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 11024.23989997534,
            "unit": "iter/sec",
            "range": "stddev: 0.0000049008834976529435",
            "extra": "mean: 90.70920163867596 usec\nrounds: 5981"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 10950.320350646665,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030096392892889992",
            "extra": "mean: 91.32152923187726 usec\nrounds: 10143"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 193642.5175589186,
            "unit": "iter/sec",
            "range": "stddev: 2.9977097200404127e-7",
            "extra": "mean: 5.164155127738076 usec\nrounds: 57804"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 194024.36108549478,
            "unit": "iter/sec",
            "range": "stddev: 3.0353866081665987e-7",
            "extra": "mean: 5.153991975055961 usec\nrounds: 66667"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 167155.28830332146,
            "unit": "iter/sec",
            "range": "stddev: 3.352450567237818e-7",
            "extra": "mean: 5.982461040570797 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 170007.21014134135,
            "unit": "iter/sec",
            "range": "stddev: 3.725096046418341e-7",
            "extra": "mean: 5.882103465897803 usec\nrounds: 78741"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 51683.25460199707,
            "unit": "iter/sec",
            "range": "stddev: 0.000009608408300478785",
            "extra": "mean: 19.34862670125576 usec\nrounds: 13228"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 52402.84838048984,
            "unit": "iter/sec",
            "range": "stddev: 7.225327777342986e-7",
            "extra": "mean: 19.082932147869865 usec\nrounds: 19012"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 44718.08690783396,
            "unit": "iter/sec",
            "range": "stddev: 9.83471263666178e-7",
            "extra": "mean: 22.362316215831104 usec\nrounds: 18149"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 44980.59021695405,
            "unit": "iter/sec",
            "range": "stddev: 7.652648900500254e-7",
            "extra": "mean: 22.23181143637108 usec\nrounds: 12871"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 52287.374534197625,
            "unit": "iter/sec",
            "range": "stddev: 8.282987978065023e-7",
            "extra": "mean: 19.125075774190343 usec\nrounds: 20284"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 52732.88608751717,
            "unit": "iter/sec",
            "range": "stddev: 6.890190309770376e-7",
            "extra": "mean: 18.963498382022337 usec\nrounds: 19158"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 49106.1139851262,
            "unit": "iter/sec",
            "range": "stddev: 7.109326062591647e-7",
            "extra": "mean: 20.364063022842554 usec\nrounds: 16978"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 48897.926961913516,
            "unit": "iter/sec",
            "range": "stddev: 9.232603852426248e-7",
            "extra": "mean: 20.45076472830633 usec\nrounds: 18349"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 8055.0623707499835,
            "unit": "iter/sec",
            "range": "stddev: 0.000012322877285598104",
            "extra": "mean: 124.14553158908599 usec\nrounds: 2026"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 6150.695439643729,
            "unit": "iter/sec",
            "range": "stddev: 0.000004394794611660943",
            "extra": "mean: 162.58324116564023 usec\nrounds: 2575"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 5862.191599896427,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034272837393746967",
            "extra": "mean: 170.58466666590496 usec\nrounds: 2631"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 7599.859874743163,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034532210411917105",
            "extra": "mean: 131.58137340443992 usec\nrounds: 2978"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 180.5036594999751,
            "unit": "iter/sec",
            "range": "stddev: 0.009751240351319676",
            "extra": "mean: 5.540053884614666 msec\nrounds: 78"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 190.0274348359832,
            "unit": "iter/sec",
            "range": "stddev: 0.008201013403857177",
            "extra": "mean: 5.262398036699921 msec\nrounds: 109"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 189.54323961450353,
            "unit": "iter/sec",
            "range": "stddev: 0.008299610829580313",
            "extra": "mean: 5.275841027270706 msec\nrounds: 110"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 191.84097381551524,
            "unit": "iter/sec",
            "range": "stddev: 0.008257096424390892",
            "extra": "mean: 5.21265077064118 msec\nrounds: 109"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 8119.426552661555,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030560756577188476",
            "extra": "mean: 123.16140721442933 usec\nrounds: 3077"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 6180.136084381131,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033610025880953392",
            "extra": "mean: 161.80873468583798 usec\nrounds: 2661"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 5848.261559010906,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035432331758646953",
            "extra": "mean: 170.990984228333 usec\nrounds: 2663"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 7579.86869746542,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027150002872510865",
            "extra": "mean: 131.92840666677816 usec\nrounds: 3000"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 220.9390439622425,
            "unit": "iter/sec",
            "range": "stddev: 0.00004331798408687312",
            "extra": "mean: 4.526135272726606 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 188.77410190016857,
            "unit": "iter/sec",
            "range": "stddev: 0.0082424833180872",
            "extra": "mean: 5.29733681651332 msec\nrounds: 109"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 187.4177398811718,
            "unit": "iter/sec",
            "range": "stddev: 0.008247012821981807",
            "extra": "mean: 5.335674203701467 msec\nrounds: 108"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 189.4378072277744,
            "unit": "iter/sec",
            "range": "stddev: 0.008254050542257267",
            "extra": "mean: 5.278777318181421 msec\nrounds: 110"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 102788.03935958512,
            "unit": "iter/sec",
            "range": "stddev: 5.330845234461798e-7",
            "extra": "mean: 9.728758386972274 usec\nrounds: 43669"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 101745.2440078053,
            "unit": "iter/sec",
            "range": "stddev: 4.6333992647226493e-7",
            "extra": "mean: 9.828469229709507 usec\nrounds: 42736"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 101380.19658448202,
            "unit": "iter/sec",
            "range": "stddev: 5.40796356256042e-7",
            "extra": "mean: 9.863859350151102 usec\nrounds: 38315"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 102401.42301294404,
            "unit": "iter/sec",
            "range": "stddev: 4.884124200208918e-7",
            "extra": "mean: 9.765489292796206 usec\nrounds: 45249"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 97966.51556919928,
            "unit": "iter/sec",
            "range": "stddev: 5.890850595745523e-7",
            "extra": "mean: 10.207569333152852 usec\nrounds: 40161"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 95398.67073288989,
            "unit": "iter/sec",
            "range": "stddev: 5.599549179008832e-7",
            "extra": "mean: 10.48232635022699 usec\nrounds: 43104"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 94714.45327988842,
            "unit": "iter/sec",
            "range": "stddev: 5.521931575050924e-7",
            "extra": "mean: 10.558050702620053 usec\nrounds: 40984"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 96032.34211819748,
            "unit": "iter/sec",
            "range": "stddev: 5.527495994218436e-7",
            "extra": "mean: 10.413158504133856 usec\nrounds: 42554"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 85875.72525070878,
            "unit": "iter/sec",
            "range": "stddev: 5.099557320007116e-7",
            "extra": "mean: 11.644734260823565 usec\nrounds: 25446"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 85770.5833003421,
            "unit": "iter/sec",
            "range": "stddev: 5.798851572466717e-7",
            "extra": "mean: 11.659008969290891 usec\nrounds: 33558"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 85933.887134306,
            "unit": "iter/sec",
            "range": "stddev: 5.91997636567369e-7",
            "extra": "mean: 11.636852856860774 usec\nrounds: 34966"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 84404.62059509977,
            "unit": "iter/sec",
            "range": "stddev: 6.027945949992934e-7",
            "extra": "mean: 11.847692613857404 usec\nrounds: 31153"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 76985.4639095739,
            "unit": "iter/sec",
            "range": "stddev: 5.365079784948357e-7",
            "extra": "mean: 12.989465143375465 usec\nrounds: 29851"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 75920.56898005442,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016657904337276978",
            "extra": "mean: 13.171661032502486 usec\nrounds: 18282"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 77284.17629584445,
            "unit": "iter/sec",
            "range": "stddev: 6.127326748136882e-7",
            "extra": "mean: 12.939259340385435 usec\nrounds: 32895"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 76945.71902501209,
            "unit": "iter/sec",
            "range": "stddev: 5.197780500525594e-7",
            "extra": "mean: 12.996174610766046 usec\nrounds: 31848"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 79505.20644285154,
            "unit": "iter/sec",
            "range": "stddev: 6.55084802483448e-7",
            "extra": "mean: 12.577792634483648 usec\nrounds: 15504"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 19204.28587380055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017316586367478303",
            "extra": "mean: 52.07170975122018 usec\nrounds: 8696"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 19573.328112435807,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016073498243753812",
            "extra": "mean: 51.089931883615414 usec\nrounds: 9381"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 80128.01599897964,
            "unit": "iter/sec",
            "range": "stddev: 5.22118190279277e-7",
            "extra": "mean: 12.48002945702205 usec\nrounds: 27701"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 72718.38465982526,
            "unit": "iter/sec",
            "range": "stddev: 5.015611151370906e-7",
            "extra": "mean: 13.75168060564016 usec\nrounds: 27549"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 18450.348812814238,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018959497871097363",
            "extra": "mean: 54.19951731782298 usec\nrounds: 8026"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 18591.02660531185,
            "unit": "iter/sec",
            "range": "stddev: 0.000001996831431714692",
            "extra": "mean: 53.78939104493987 usec\nrounds: 7370"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 73230.44349182019,
            "unit": "iter/sec",
            "range": "stddev: 6.618547771781621e-7",
            "extra": "mean: 13.655522926222611 usec\nrounds: 26738"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 507966.4005128902,
            "unit": "iter/sec",
            "range": "stddev: 2.060821530116853e-7",
            "extra": "mean: 1.9686341438927986 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 17266.486532476625,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017252895254920184",
            "extra": "mean: 57.915662119163315 usec\nrounds: 2199"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 17240.55983310732,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019201765687643117",
            "extra": "mean: 58.0027568524593 usec\nrounds: 2262"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 497326.36001741304,
            "unit": "iter/sec",
            "range": "stddev: 2.2178421304871152e-7",
            "extra": "mean: 2.010752054174218 usec\nrounds: 129871"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 443449.6188148328,
            "unit": "iter/sec",
            "range": "stddev: 2.497833916841872e-7",
            "extra": "mean: 2.2550476030909854 usec\nrounds: 128206"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 16661.555063452994,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019135322871720433",
            "extra": "mean: 60.01840741705396 usec\nrounds: 54"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 16316.945177893058,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020813578297153163",
            "extra": "mean: 61.28598148107071 usec\nrounds: 108"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 446915.3157771985,
            "unit": "iter/sec",
            "range": "stddev: 2.3086018611370407e-7",
            "extra": "mean: 2.23756037150119 usec\nrounds: 129871"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 47878.66029100829,
            "unit": "iter/sec",
            "range": "stddev: 0.00000765803804696939",
            "extra": "mean: 20.886131606898825 usec\nrounds: 16367"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 21198.541068577655,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014954353433370224",
            "extra": "mean: 47.17305765358957 usec\nrounds: 10112"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 20752.887369915734,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016967963808177997",
            "extra": "mean: 48.18606597603582 usec\nrounds: 10428"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 48583.654824097765,
            "unit": "iter/sec",
            "range": "stddev: 6.347516293238815e-7",
            "extra": "mean: 20.5830541901511 usec\nrounds: 20834"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 45673.355404406495,
            "unit": "iter/sec",
            "range": "stddev: 9.738168921210041e-7",
            "extra": "mean: 21.89460334467832 usec\nrounds: 12739"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 20057.231325216595,
            "unit": "iter/sec",
            "range": "stddev: 0.00000490322702641015",
            "extra": "mean: 49.85732994676927 usec\nrounds: 9941"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 19758.6928771056,
            "unit": "iter/sec",
            "range": "stddev: 0.000001838965185357552",
            "extra": "mean: 50.61063534008872 usec\nrounds: 10385"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 45618.32944515095,
            "unit": "iter/sec",
            "range": "stddev: 7.489459362086207e-7",
            "extra": "mean: 21.921013157712114 usec\nrounds: 19609"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 48504.331792839825,
            "unit": "iter/sec",
            "range": "stddev: 7.764155971438901e-7",
            "extra": "mean: 20.616715312582024 usec\nrounds: 20577"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 21315.116296052096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015804171404307646",
            "extra": "mean: 46.915061879592756 usec\nrounds: 10472"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 20715.562550766284,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017474433860156195",
            "extra": "mean: 48.27288650980947 usec\nrounds: 10882"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 48654.25460201366,
            "unit": "iter/sec",
            "range": "stddev: 6.899497648596325e-7",
            "extra": "mean: 20.55318714015635 usec\nrounds: 19456"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 45498.66188062328,
            "unit": "iter/sec",
            "range": "stddev: 9.232152973034441e-7",
            "extra": "mean: 21.978668353450512 usec\nrounds: 17986"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 20315.765509566212,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015471462008628024",
            "extra": "mean: 49.22285598980377 usec\nrounds: 9166"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 19583.178811396483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018393108214284476",
            "extra": "mean: 51.064232708637036 usec\nrounds: 10352"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 45536.92320837732,
            "unit": "iter/sec",
            "range": "stddev: 7.617734674409236e-7",
            "extra": "mean: 21.96020129476012 usec\nrounds: 15291"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 43021.169568506346,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010251649800008229",
            "extra": "mean: 23.244370388573774 usec\nrounds: 15724"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 42815.37709846146,
            "unit": "iter/sec",
            "range": "stddev: 9.323004209183534e-7",
            "extra": "mean: 23.3560946503011 usec\nrounds: 17422"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 42871.84626658175,
            "unit": "iter/sec",
            "range": "stddev: 8.230437222441129e-7",
            "extra": "mean: 23.32533088922489 usec\nrounds: 16779"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 42933.14207997334,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010288454853389145",
            "extra": "mean: 23.292029223886264 usec\nrounds: 17794"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 41160.41889463688,
            "unit": "iter/sec",
            "range": "stddev: 9.602229355965221e-7",
            "extra": "mean: 24.295185201098572 usec\nrounds: 15799"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 40257.886699043505,
            "unit": "iter/sec",
            "range": "stddev: 0.000001056215472519424",
            "extra": "mean: 24.83985330565698 usec\nrounds: 17124"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 40183.592068878665,
            "unit": "iter/sec",
            "range": "stddev: 9.791807618925329e-7",
            "extra": "mean: 24.885779207739834 usec\nrounds: 11495"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 41000.74312517613,
            "unit": "iter/sec",
            "range": "stddev: 0.000001150612885068842",
            "extra": "mean: 24.38980183717595 usec\nrounds: 17637"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 42534.8969726386,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010393594596309044",
            "extra": "mean: 23.51010749228497 usec\nrounds: 16978"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 42567.59319657878,
            "unit": "iter/sec",
            "range": "stddev: 8.374664766578833e-7",
            "extra": "mean: 23.492049348008976 usec\nrounds: 17954"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 42826.61815801234,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010062800939120096",
            "extra": "mean: 23.349964181398065 usec\nrounds: 17700"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 42653.32558794522,
            "unit": "iter/sec",
            "range": "stddev: 8.746561835473276e-7",
            "extra": "mean: 23.44483076561379 usec\nrounds: 17922"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 38928.65774944247,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010683453013326278",
            "extra": "mean: 25.688016433454393 usec\nrounds: 15152"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 39170.73032529683,
            "unit": "iter/sec",
            "range": "stddev: 9.55064461042382e-7",
            "extra": "mean: 25.529266156015236 usec\nrounds: 17362"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 38048.360961700826,
            "unit": "iter/sec",
            "range": "stddev: 0.000004463901716042117",
            "extra": "mean: 26.282341071316893 usec\nrounds: 17272"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 39020.76030137862,
            "unit": "iter/sec",
            "range": "stddev: 8.860232799188696e-7",
            "extra": "mean: 25.62738378946116 usec\nrounds: 17124"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 72141.50530176393,
            "unit": "iter/sec",
            "range": "stddev: 4.807129859414591e-7",
            "extra": "mean: 13.861645883559751 usec\nrounds: 24876"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 27660.465730195585,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013898476945862366",
            "extra": "mean: 36.15268122215125 usec\nrounds: 11588"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 26155.812859717986,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012940499118097441",
            "extra": "mean: 38.23241913234816 usec\nrounds: 12137"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 72171.91743864251,
            "unit": "iter/sec",
            "range": "stddev: 6.300482244805332e-7",
            "extra": "mean: 13.855804799008665 usec\nrounds: 25840"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 69010.71278765987,
            "unit": "iter/sec",
            "range": "stddev: 5.274668272778592e-7",
            "extra": "mean: 14.490503859551712 usec\nrounds: 24876"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 25876.605603606524,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016742723350582557",
            "extra": "mean: 38.644944986935464 usec\nrounds: 11161"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 25492.056391170037,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013972644476279308",
            "extra": "mean: 39.22790631933408 usec\nrounds: 11710"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 68298.9959719979,
            "unit": "iter/sec",
            "range": "stddev: 5.709453726454742e-7",
            "extra": "mean: 14.64150366734517 usec\nrounds: 24814"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 71980.45453536513,
            "unit": "iter/sec",
            "range": "stddev: 5.848783785188004e-7",
            "extra": "mean: 13.892660256940783 usec\nrounds: 25381"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 27099.519831118632,
            "unit": "iter/sec",
            "range": "stddev: 0.000001335076129372473",
            "extra": "mean: 36.90102283110163 usec\nrounds: 11300"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 26642.129699700243,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014841945046518716",
            "extra": "mean: 37.53453688843994 usec\nrounds: 11779"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 70307.41506628963,
            "unit": "iter/sec",
            "range": "stddev: 4.972789686812879e-7",
            "extra": "mean: 14.223250834313081 usec\nrounds: 25774"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 67260.18107640433,
            "unit": "iter/sec",
            "range": "stddev: 6.024884933190436e-7",
            "extra": "mean: 14.86763764230798 usec\nrounds: 24876"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 25942.78852481015,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015573778906902782",
            "extra": "mean: 38.54635746051968 usec\nrounds: 11274"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 25212.182657247926,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016065929273311059",
            "extra": "mean: 39.66336487382709 usec\nrounds: 11615"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 68421.3000535379,
            "unit": "iter/sec",
            "range": "stddev: 5.370164910276033e-7",
            "extra": "mean: 14.615331763902848 usec\nrounds: 25063"
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
          "id": "921d0feb81f4098e9c330411a7902dd8181d03ee",
          "message": "Pint 0.3.3",
          "timestamp": "2022-11-26T23:23:24-03:00",
          "tree_id": "a9e2edd7526a3107e5431614a253ddec38e2ce99",
          "url": "https://github.com/hgrecco/pint-benchmark/commit/921d0feb81f4098e9c330411a7902dd8181d03ee"
        },
        "date": 1669518927472,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 3.5023901350492173,
            "unit": "iter/sec",
            "range": "stddev: 0.005386272220433003",
            "extra": "mean: 285.5193057999941 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 46274.62569805639,
            "unit": "iter/sec",
            "range": "stddev: 0.0002223961032959675",
            "extra": "mean: 21.610115369166596 usec\nrounds: 7593"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 26.626694757706183,
            "unit": "iter/sec",
            "range": "stddev: 0.0018496495238036813",
            "extra": "mean: 37.55629487999386 msec\nrounds: 25"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 906.6975436216734,
            "unit": "iter/sec",
            "range": "stddev: 0.00033027243266650755",
            "extra": "mean: 1.1029036165749864 msec\nrounds: 905"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 10303.434956115176,
            "unit": "iter/sec",
            "range": "stddev: 0.00008277122738497002",
            "extra": "mean: 97.05501167904124 usec\nrounds: 4538"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 9700.650415845166,
            "unit": "iter/sec",
            "range": "stddev: 0.0001097247734210246",
            "extra": "mean: 103.0858712696818 usec\nrounds: 5764"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 10214.76082218144,
            "unit": "iter/sec",
            "range": "stddev: 0.00008399177319504924",
            "extra": "mean: 97.89754428987622 usec\nrounds: 9133"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 10025.505184597643,
            "unit": "iter/sec",
            "range": "stddev: 0.00009051905939942648",
            "extra": "mean: 99.74559701353677 usec\nrounds: 8772"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 10214.909462795838,
            "unit": "iter/sec",
            "range": "stddev: 0.00009906099829538926",
            "extra": "mean: 97.89611974948411 usec\nrounds: 9570"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 9900.340745649959,
            "unit": "iter/sec",
            "range": "stddev: 0.00003615401364057451",
            "extra": "mean: 101.00662448808977 usec\nrounds: 7326"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 8787.915778965775,
            "unit": "iter/sec",
            "range": "stddev: 0.00012449004435447598",
            "extra": "mean: 113.79262445750102 usec\nrounds: 3688"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 9552.214693924989,
            "unit": "iter/sec",
            "range": "stddev: 0.000057763428253915866",
            "extra": "mean: 104.68776425596667 usec\nrounds: 6541"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 9823.35462789597,
            "unit": "iter/sec",
            "range": "stddev: 0.00006206445516736388",
            "extra": "mean: 101.79821841718307 usec\nrounds: 6950"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 9466.877592608465,
            "unit": "iter/sec",
            "range": "stddev: 0.00009057379096861867",
            "extra": "mean: 105.63144925215666 usec\nrounds: 7419"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 2619228.1246922566,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010646895060480064",
            "extra": "mean: 381.7918685936472 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 2652574.1072699823,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010016787501138934",
            "extra": "mean: 376.99229486536814 nsec\nrounds: 125001"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 2645124.2906016107,
            "unit": "iter/sec",
            "range": "stddev: 6.386837247773933e-7",
            "extra": "mean: 378.05406859449346 nsec\nrounds: 46729"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 2707323.4110566066,
            "unit": "iter/sec",
            "range": "stddev: 8.31937611130964e-7",
            "extra": "mean: 369.3685046697321 nsec\nrounds: 200000"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 2633427.802490771,
            "unit": "iter/sec",
            "range": "stddev: 6.125770167045883e-7",
            "extra": "mean: 379.7332127556987 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 11010.853770731357,
            "unit": "iter/sec",
            "range": "stddev: 0.0000626732810478631",
            "extra": "mean: 90.81947874543233 usec\nrounds: 8704"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 10871.189119482106,
            "unit": "iter/sec",
            "range": "stddev: 0.000046064734285017086",
            "extra": "mean: 91.98625734584215 usec\nrounds: 4220"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 10962.059596408943,
            "unit": "iter/sec",
            "range": "stddev: 0.0000534917630613914",
            "extra": "mean: 91.22373320498912 usec\nrounds: 8827"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 10943.911665491494,
            "unit": "iter/sec",
            "range": "stddev: 0.00009960557464626856",
            "extra": "mean: 91.37500653931764 usec\nrounds: 10246"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 10666.883601718684,
            "unit": "iter/sec",
            "range": "stddev: 0.00006796308836300922",
            "extra": "mean: 93.7480933830455 usec\nrounds: 10730"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 7374.059365660617,
            "unit": "iter/sec",
            "range": "stddev: 0.00005567494313027919",
            "extra": "mean: 135.61051659778894 usec\nrounds: 6266"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 7004.113135480519,
            "unit": "iter/sec",
            "range": "stddev: 0.00010161476455911103",
            "extra": "mean: 142.77325061103468 usec\nrounds: 4501"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 7325.646269293533,
            "unit": "iter/sec",
            "range": "stddev: 0.0000696194539414657",
            "extra": "mean: 136.5067276305217 usec\nrounds: 6102"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 7424.139556028153,
            "unit": "iter/sec",
            "range": "stddev: 0.00009570005480745272",
            "extra": "mean: 134.69574385735157 usec\nrounds: 6227"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 7125.185205992775,
            "unit": "iter/sec",
            "range": "stddev: 0.00007635392132941901",
            "extra": "mean: 140.34722903187563 usec\nrounds: 6021"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 10887.093168741982,
            "unit": "iter/sec",
            "range": "stddev: 0.00007479917474447143",
            "extra": "mean: 91.85188227020117 usec\nrounds: 9921"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 9158.573858552481,
            "unit": "iter/sec",
            "range": "stddev: 0.00005338514011937796",
            "extra": "mean: 109.1873052993046 usec\nrounds: 6623"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 7038.086849352592,
            "unit": "iter/sec",
            "range": "stddev: 0.00008671300799892088",
            "extra": "mean: 142.0840665090665 usec\nrounds: 4225"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 6432.613016818199,
            "unit": "iter/sec",
            "range": "stddev: 0.00009096976895062494",
            "extra": "mean: 155.4578205443852 usec\nrounds: 6386"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 9552.966176117083,
            "unit": "iter/sec",
            "range": "stddev: 0.0000873911083277921",
            "extra": "mean: 104.67952901372692 usec\nrounds: 9461"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 9891.24603811982,
            "unit": "iter/sec",
            "range": "stddev: 0.00008392323100316701",
            "extra": "mean: 101.09949708521106 usec\nrounds: 7548"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 9877.004265746227,
            "unit": "iter/sec",
            "range": "stddev: 0.000053624984473162564",
            "extra": "mean: 101.2452736775697 usec\nrounds: 10041"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 17809109.305767514,
            "unit": "iter/sec",
            "range": "stddev: 1.2368452358741754e-7",
            "extra": "mean: 56.151039495086266 nsec\nrounds: 200000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 16620280.712607749,
            "unit": "iter/sec",
            "range": "stddev: 1.4721314670005048e-7",
            "extra": "mean: 60.16745548951218 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 14618911.936838744,
            "unit": "iter/sec",
            "range": "stddev: 1.8814118083213555e-7",
            "extra": "mean: 68.40454367056412 nsec\nrounds: 166667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 17568483.11854539,
            "unit": "iter/sec",
            "range": "stddev: 2.2017421125271482e-7",
            "extra": "mean: 56.920110475769874 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 17859873.063652337,
            "unit": "iter/sec",
            "range": "stddev: 1.3663067086038684e-7",
            "extra": "mean: 55.99143938126244 nsec\nrounds: 200000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 18431214.114896063,
            "unit": "iter/sec",
            "range": "stddev: 1.293955126199486e-7",
            "extra": "mean: 54.25578552587383 nsec\nrounds: 200000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 34490.60974952689,
            "unit": "iter/sec",
            "range": "stddev: 0.00005962260972679927",
            "extra": "mean: 28.993398703649103 usec\nrounds: 7868"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 13834.227447433843,
            "unit": "iter/sec",
            "range": "stddev: 0.00011072634993837676",
            "extra": "mean: 72.28448453661164 usec\nrounds: 194"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 35178.36416689616,
            "unit": "iter/sec",
            "range": "stddev: 0.000028655735931675445",
            "extra": "mean: 28.42656341993948 usec\nrounds: 5708"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 16443.76253683045,
            "unit": "iter/sec",
            "range": "stddev: 0.00003512894475308093",
            "extra": "mean: 60.813332578855814 usec\nrounds: 7950"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 37342.23016658898,
            "unit": "iter/sec",
            "range": "stddev: 0.000018561026980720955",
            "extra": "mean: 26.779332555630933 usec\nrounds: 5145"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 16454.80702804707,
            "unit": "iter/sec",
            "range": "stddev: 0.000023320251595432216",
            "extra": "mean: 60.772514578597544 usec\nrounds: 1852"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 13904.248089430595,
            "unit": "iter/sec",
            "range": "stddev: 0.00005162460674407451",
            "extra": "mean: 71.92046585821181 usec\nrounds: 5360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 26183.252903148703,
            "unit": "iter/sec",
            "range": "stddev: 0.00006071400747648843",
            "extra": "mean: 38.19235156529171 usec\nrounds: 11628"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 13571.234306952314,
            "unit": "iter/sec",
            "range": "stddev: 0.00004698715061077028",
            "extra": "mean: 73.68526527375015 usec\nrounds: 6989"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 26820.35122563602,
            "unit": "iter/sec",
            "range": "stddev: 0.00001835798240159091",
            "extra": "mean: 37.28511948211021 usec\nrounds: 2084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 12909.027737161206,
            "unit": "iter/sec",
            "range": "stddev: 0.00007538385315358347",
            "extra": "mean: 77.46516781595417 usec\nrounds: 3480"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 25839.92345366772,
            "unit": "iter/sec",
            "range": "stddev: 0.00007338078626811497",
            "extra": "mean: 38.699805043658515 usec\nrounds: 10310"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 34592.098635014576,
            "unit": "iter/sec",
            "range": "stddev: 0.00002916599621152362",
            "extra": "mean: 28.908335702644735 usec\nrounds: 12240"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 15973.153213485504,
            "unit": "iter/sec",
            "range": "stddev: 0.000017185821620093066",
            "extra": "mean: 62.605046519915646 usec\nrounds: 43"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 34942.48187083023,
            "unit": "iter/sec",
            "range": "stddev: 0.00003471153913932151",
            "extra": "mean: 28.618459435613072 usec\nrounds: 11377"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 15669.407793417471,
            "unit": "iter/sec",
            "range": "stddev: 0.00006373300847687597",
            "extra": "mean: 63.81862117469991 usec\nrounds: 8170"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 33514.12132350152,
            "unit": "iter/sec",
            "range": "stddev: 0.00005590496728355942",
            "extra": "mean: 29.838168524464876 usec\nrounds: 13369"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 15506.446491757066,
            "unit": "iter/sec",
            "range": "stddev: 0.00003868041421864576",
            "extra": "mean: 64.48930775542811 usec\nrounds: 7337"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 13618.213931427088,
            "unit": "iter/sec",
            "range": "stddev: 0.00007610855678194706",
            "extra": "mean: 73.43106849660184 usec\nrounds: 7723"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 26070.982212604253,
            "unit": "iter/sec",
            "range": "stddev: 0.000021085502760503706",
            "extra": "mean: 38.3568210758297 usec\nrounds: 10742"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 13717.777570375876,
            "unit": "iter/sec",
            "range": "stddev: 0.0000445086290099398",
            "extra": "mean: 72.89810575144057 usec\nrounds: 5702"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 25331.06009521373,
            "unit": "iter/sec",
            "range": "stddev: 0.0000418718767530744",
            "extra": "mean: 39.477226623805954 usec\nrounds: 7850"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 13589.588419687954,
            "unit": "iter/sec",
            "range": "stddev: 0.000033364792310980206",
            "extra": "mean: 73.58574587522071 usec\nrounds: 8000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 26827.999742204676,
            "unit": "iter/sec",
            "range": "stddev: 0.000020913355912787965",
            "extra": "mean: 37.27448969767367 usec\nrounds: 10823"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 34202.15255488579,
            "unit": "iter/sec",
            "range": "stddev: 0.000020862439940054944",
            "extra": "mean: 29.237925840932185 usec\nrounds: 13107"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 14632.960408920644,
            "unit": "iter/sec",
            "range": "stddev: 0.00014778631379406363",
            "extra": "mean: 68.33887142825681 usec\nrounds: 1820"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 33969.646121839534,
            "unit": "iter/sec",
            "range": "stddev: 0.000047398503437378126",
            "extra": "mean: 29.438045848734554 usec\nrounds: 12454"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 14996.31595830274,
            "unit": "iter/sec",
            "range": "stddev: 0.000040599225694164186",
            "extra": "mean: 66.68304420769076 usec\nrounds: 4592"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 34221.059817769856,
            "unit": "iter/sec",
            "range": "stddev: 0.00002067549591122893",
            "extra": "mean: 29.221771778112302 usec\nrounds: 11112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 15112.719068422532,
            "unit": "iter/sec",
            "range": "stddev: 0.00004146413342016144",
            "extra": "mean: 66.16942956939252 usec\nrounds: 1860"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 13312.02737539709,
            "unit": "iter/sec",
            "range": "stddev: 0.000029873670229627213",
            "extra": "mean: 75.12003782745906 usec\nrounds: 6794"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 24497.706408670907,
            "unit": "iter/sec",
            "range": "stddev: 0.00003204330715223792",
            "extra": "mean: 40.82014794846477 usec\nrounds: 9260"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 13617.736236953075,
            "unit": "iter/sec",
            "range": "stddev: 0.00003463220385559161",
            "extra": "mean: 73.43364437375436 usec\nrounds: 7536"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 25593.228177239453,
            "unit": "iter/sec",
            "range": "stddev: 0.000027414821099447507",
            "extra": "mean: 39.07283571555538 usec\nrounds: 2100"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 12876.63537524677,
            "unit": "iter/sec",
            "range": "stddev: 0.00008122558078605661",
            "extra": "mean: 77.66003857827153 usec\nrounds: 6610"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 26659.760487756746,
            "unit": "iter/sec",
            "range": "stddev: 0.000018649146313953687",
            "extra": "mean: 37.50971432992585 usec\nrounds: 9644"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 37271.52114219432,
            "unit": "iter/sec",
            "range": "stddev: 0.000016894736726872475",
            "extra": "mean: 26.830136505159185 usec\nrounds: 10571"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 15787.2502861895,
            "unit": "iter/sec",
            "range": "stddev: 0.000035318453898158855",
            "extra": "mean: 63.34225288584854 usec\nrounds: 1906"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 35737.02497143748,
            "unit": "iter/sec",
            "range": "stddev: 0.000023814345575235165",
            "extra": "mean: 27.98218376597497 usec\nrounds: 12788"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 16154.707626656069,
            "unit": "iter/sec",
            "range": "stddev: 0.00003530293423102882",
            "extra": "mean: 61.901460745098866 usec\nrounds: 7273"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 35387.55010086269,
            "unit": "iter/sec",
            "range": "stddev: 0.000032226720035016046",
            "extra": "mean: 28.25852586996752 usec\nrounds: 12988"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 15846.458538746652,
            "unit": "iter/sec",
            "range": "stddev: 0.000021754447223122757",
            "extra": "mean: 63.10558271142223 usec\nrounds: 1608"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 13711.236651387268,
            "unit": "iter/sec",
            "range": "stddev: 0.00005035873067423397",
            "extra": "mean: 72.93288165213184 usec\nrounds: 8306"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 27173.3267341673,
            "unit": "iter/sec",
            "range": "stddev: 0.0000256767287784136",
            "extra": "mean: 36.80079402065321 usec\nrounds: 11807"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 13968.95965932981,
            "unit": "iter/sec",
            "range": "stddev: 0.00007143170948114486",
            "extra": "mean: 71.58729242460831 usec\nrounds: 5386"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 26073.31698233427,
            "unit": "iter/sec",
            "range": "stddev: 0.000024078584798459477",
            "extra": "mean: 38.35338636344354 usec\nrounds: 1628"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 13538.218858553975,
            "unit": "iter/sec",
            "range": "stddev: 0.00005953341761923559",
            "extra": "mean: 73.86496040933486 usec\nrounds: 6845"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 26054.517834592363,
            "unit": "iter/sec",
            "range": "stddev: 0.000031389670104711114",
            "extra": "mean: 38.381059528659115 usec\nrounds: 7257"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 34505.303566911185,
            "unit": "iter/sec",
            "range": "stddev: 0.00008288318838603918",
            "extra": "mean: 28.981052088437462 usec\nrounds: 12210"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 16186.129089269101,
            "unit": "iter/sec",
            "range": "stddev: 0.0000291328322702701",
            "extra": "mean: 61.78129400085958 usec\nrounds: 1517"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 34967.015356565054,
            "unit": "iter/sec",
            "range": "stddev: 0.000039355842883444646",
            "extra": "mean: 28.598380210687615 usec\nrounds: 13987"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 15354.382970505436,
            "unit": "iter/sec",
            "range": "stddev: 0.00005772521270380571",
            "extra": "mean: 65.12798345077894 usec\nrounds: 7553"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 35342.0257762311,
            "unit": "iter/sec",
            "range": "stddev: 0.00004930629697083388",
            "extra": "mean: 28.294925886012432 usec\nrounds: 12049"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 15470.659493615614,
            "unit": "iter/sec",
            "range": "stddev: 0.000047368881075801786",
            "extra": "mean: 64.63848554178811 usec\nrounds: 1487"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 13692.413174844087,
            "unit": "iter/sec",
            "range": "stddev: 0.00007642629803580634",
            "extra": "mean: 73.03314523383033 usec\nrounds: 7994"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 26993.019179720104,
            "unit": "iter/sec",
            "range": "stddev: 0.000023017048596544483",
            "extra": "mean: 37.0466153986695 usec\nrounds: 11287"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 13876.0135723193,
            "unit": "iter/sec",
            "range": "stddev: 0.0000588838904326698",
            "extra": "mean: 72.0668075732399 usec\nrounds: 7764"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 26955.904243047215,
            "unit": "iter/sec",
            "range": "stddev: 0.00005687468588064429",
            "extra": "mean: 37.09762399300449 usec\nrounds: 1984"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 13448.622157875732,
            "unit": "iter/sec",
            "range": "stddev: 0.00004738566773433876",
            "extra": "mean: 74.35705964974143 usec\nrounds: 6974"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 26225.086004283006,
            "unit": "iter/sec",
            "range": "stddev: 0.00002462286482585702",
            "extra": "mean: 38.131428809677985 usec\nrounds: 6588"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 34718.20459074969,
            "unit": "iter/sec",
            "range": "stddev: 0.000031638107367678636",
            "extra": "mean: 28.803332769876004 usec\nrounds: 13021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 16835.137464854426,
            "unit": "iter/sec",
            "range": "stddev: 0.000014824067855105472",
            "extra": "mean: 59.399574377556 usec\nrounds: 242"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 33201.31900192816,
            "unit": "iter/sec",
            "range": "stddev: 0.00002134490382722074",
            "extra": "mean: 30.119285319415326 usec\nrounds: 11934"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 15857.42661961444,
            "unit": "iter/sec",
            "range": "stddev: 0.00003182089035040598",
            "extra": "mean: 63.061934574117814 usec\nrounds: 3760"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 34081.52562597577,
            "unit": "iter/sec",
            "range": "stddev: 0.00003746067605986922",
            "extra": "mean: 29.341409506557834 usec\nrounds: 14642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 15228.67660025513,
            "unit": "iter/sec",
            "range": "stddev: 0.00007385540510954178",
            "extra": "mean: 65.66558777558167 usec\nrounds: 7542"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 13087.036934143554,
            "unit": "iter/sec",
            "range": "stddev: 0.00008509867180545495",
            "extra": "mean: 76.41149062482127 usec\nrounds: 8320"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 25500.508197835912,
            "unit": "iter/sec",
            "range": "stddev: 0.000058276445324286584",
            "extra": "mean: 39.214904747853794 usec\nrounds: 10236"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 13490.996057898734,
            "unit": "iter/sec",
            "range": "stddev: 0.000040828607097814304",
            "extra": "mean: 74.1235113929574 usec\nrounds: 5925"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 25172.001170053216,
            "unit": "iter/sec",
            "range": "stddev: 0.000022207394315178802",
            "extra": "mean: 39.72667859199396 usec\nrounds: 10342"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 12505.003607212659,
            "unit": "iter/sec",
            "range": "stddev: 0.00011077532446784773",
            "extra": "mean: 79.96798972718553 usec\nrounds: 5354"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 25837.140711704164,
            "unit": "iter/sec",
            "range": "stddev: 0.000017479628024787512",
            "extra": "mean: 38.703973135347844 usec\nrounds: 8636"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 148519.7607598253,
            "unit": "iter/sec",
            "range": "stddev: 0.000020113906417565773",
            "extra": "mean: 6.733110765086155 usec\nrounds: 67115"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 144680.55466068262,
            "unit": "iter/sec",
            "range": "stddev: 0.000005781178033869549",
            "extra": "mean: 6.911778865828146 usec\nrounds: 58824"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 147482.45512402547,
            "unit": "iter/sec",
            "range": "stddev: 0.000021464139760706145",
            "extra": "mean: 6.780467542115768 usec\nrounds: 28329"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 140504.38583097226,
            "unit": "iter/sec",
            "range": "stddev: 0.000021069739402376343",
            "extra": "mean: 7.117215552281812 usec\nrounds: 28819"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 143604.97685228425,
            "unit": "iter/sec",
            "range": "stddev: 0.000017908534219635107",
            "extra": "mean: 6.963546959995861 usec\nrounds: 61350"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 132218.1344709281,
            "unit": "iter/sec",
            "range": "stddev: 0.000021796594141298984",
            "extra": "mean: 7.563259034031207 usec\nrounds: 40817"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 135950.50691665066,
            "unit": "iter/sec",
            "range": "stddev: 0.00002562075976848159",
            "extra": "mean: 7.355618031002164 usec\nrounds: 60607"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 146249.55155773324,
            "unit": "iter/sec",
            "range": "stddev: 0.000013266348737213064",
            "extra": "mean: 6.837627803632899 usec\nrounds: 47620"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 143560.41683762334,
            "unit": "iter/sec",
            "range": "stddev: 0.000009918202791165724",
            "extra": "mean: 6.965708389737182 usec\nrounds: 56819"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 140553.96818024496,
            "unit": "iter/sec",
            "range": "stddev: 0.000026883682024158622",
            "extra": "mean: 7.114704856412238 usec\nrounds: 55556"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 133063.04466039408,
            "unit": "iter/sec",
            "range": "stddev: 0.000022701143586309734",
            "extra": "mean: 7.515234620943916 usec\nrounds: 56180"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 142012.51448983137,
            "unit": "iter/sec",
            "range": "stddev: 0.000012992504096201234",
            "extra": "mean: 7.041632940536404 usec\nrounds: 65360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 142526.05289189934,
            "unit": "iter/sec",
            "range": "stddev: 0.00001035035012654011",
            "extra": "mean: 7.0162610954957305 usec\nrounds: 57140"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 138222.57888431707,
            "unit": "iter/sec",
            "range": "stddev: 0.00001950873349809355",
            "extra": "mean: 7.2347080200039695 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 147785.5185791241,
            "unit": "iter/sec",
            "range": "stddev: 0.000008876399992679433",
            "extra": "mean: 6.766562851451523 usec\nrounds: 61725"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 143644.82062778564,
            "unit": "iter/sec",
            "range": "stddev: 0.000011091223415002459",
            "extra": "mean: 6.961615431935505 usec\nrounds: 55249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 142591.3508520975,
            "unit": "iter/sec",
            "range": "stddev: 0.000028682613437452457",
            "extra": "mean: 7.01304808478354 usec\nrounds: 58480"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 138872.83774459155,
            "unit": "iter/sec",
            "range": "stddev: 0.000014859248477523902",
            "extra": "mean: 7.200832187494818 usec\nrounds: 55556"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 138709.96378666526,
            "unit": "iter/sec",
            "range": "stddev: 0.000010496080304875458",
            "extra": "mean: 7.209287441946069 usec\nrounds: 30674"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 148398.14683171175,
            "unit": "iter/sec",
            "range": "stddev: 0.00000900753840282841",
            "extra": "mean: 6.73862862407596 usec\nrounds: 56498"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 139089.79053295395,
            "unit": "iter/sec",
            "range": "stddev: 0.000011631777081489623",
            "extra": "mean: 7.1896003018501515 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 147299.04689310826,
            "unit": "iter/sec",
            "range": "stddev: 0.000021324148731109383",
            "extra": "mean: 6.788910187081377 usec\nrounds: 29940"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 140664.19142194412,
            "unit": "iter/sec",
            "range": "stddev: 0.000013387025148480607",
            "extra": "mean: 7.109129835327773 usec\nrounds: 57804"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 141206.44018252118,
            "unit": "iter/sec",
            "range": "stddev: 0.000022238475423189226",
            "extra": "mean: 7.081829969705461 usec\nrounds: 55249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 146761.49377602953,
            "unit": "iter/sec",
            "range": "stddev: 0.000014921108327240507",
            "extra": "mean: 6.813776381467504 usec\nrounds: 61350"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 143578.55008401483,
            "unit": "iter/sec",
            "range": "stddev: 0.000007093529468939624",
            "extra": "mean: 6.9648286559158805 usec\nrounds: 62500"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 147279.48309096333,
            "unit": "iter/sec",
            "range": "stddev: 0.000018874049788106007",
            "extra": "mean: 6.789811988831983 usec\nrounds: 59172"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 133614.80513452477,
            "unit": "iter/sec",
            "range": "stddev: 0.000024889602330100325",
            "extra": "mean: 7.484200564399954 usec\nrounds: 58824"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 139161.41732682666,
            "unit": "iter/sec",
            "range": "stddev: 0.000018579006910767507",
            "extra": "mean: 7.1858997932699715 usec\nrounds: 47392"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 140425.40333512498,
            "unit": "iter/sec",
            "range": "stddev: 0.000010190537571537388",
            "extra": "mean: 7.121218641711869 usec\nrounds: 56819"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 142640.14230658914,
            "unit": "iter/sec",
            "range": "stddev: 0.000006920016121958456",
            "extra": "mean: 7.010649203157769 usec\nrounds: 57472"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 141695.3239163959,
            "unit": "iter/sec",
            "range": "stddev: 0.000014749053150183587",
            "extra": "mean: 7.057395913714325 usec\nrounds: 59172"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 137017.05609935324,
            "unit": "iter/sec",
            "range": "stddev: 0.00002768605284521686",
            "extra": "mean: 7.298361448335922 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 141664.14800378573,
            "unit": "iter/sec",
            "range": "stddev: 0.000016501874064748995",
            "extra": "mean: 7.058949029032219 usec\nrounds: 59524"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 140425.34248114575,
            "unit": "iter/sec",
            "range": "stddev: 0.00000875201946133187",
            "extra": "mean: 7.121221727725287 usec\nrounds: 48077"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 140334.11255429967,
            "unit": "iter/sec",
            "range": "stddev: 0.000012364420030748617",
            "extra": "mean: 7.125851169031112 usec\nrounds: 55553"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 120233.51837246688,
            "unit": "iter/sec",
            "range": "stddev: 0.00001228921232948712",
            "extra": "mean: 8.317148275592649 usec\nrounds: 43291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 115548.42618701313,
            "unit": "iter/sec",
            "range": "stddev: 0.000028021494735974805",
            "extra": "mean: 8.654380098449089 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 119351.76057315075,
            "unit": "iter/sec",
            "range": "stddev: 0.000010794187018892647",
            "extra": "mean: 8.378594460591133 usec\nrounds: 44844"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 117390.324010081,
            "unit": "iter/sec",
            "range": "stddev: 0.000009512365138996822",
            "extra": "mean: 8.518589657475722 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 112374.86088722794,
            "unit": "iter/sec",
            "range": "stddev: 0.000026439092733540643",
            "extra": "mean: 8.898787434349169 usec\nrounds: 40651"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 115387.02274114398,
            "unit": "iter/sec",
            "range": "stddev: 0.000012353249023051368",
            "extra": "mean: 8.666485851215453 usec\nrounds: 49262"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 124215.42435995761,
            "unit": "iter/sec",
            "range": "stddev: 0.00000564900123313021",
            "extra": "mean: 8.05052999780567 usec\nrounds: 23585"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 122887.65724911813,
            "unit": "iter/sec",
            "range": "stddev: 0.000010814969253264084",
            "extra": "mean: 8.137513745361732 usec\nrounds: 53764"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 119184.29781701612,
            "unit": "iter/sec",
            "range": "stddev: 0.000005646089880026931",
            "extra": "mean: 8.39036700568813 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 113970.47441271954,
            "unit": "iter/sec",
            "range": "stddev: 0.000013299739344683977",
            "extra": "mean: 8.774202311194347 usec\nrounds: 46295"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 115182.34401683987,
            "unit": "iter/sec",
            "range": "stddev: 0.000021393078431521562",
            "extra": "mean: 8.68188617392435 usec\nrounds: 44445"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 119516.57282029773,
            "unit": "iter/sec",
            "range": "stddev: 0.000011331332005715467",
            "extra": "mean: 8.36704045641918 usec\nrounds: 38313"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 121293.25123627242,
            "unit": "iter/sec",
            "range": "stddev: 0.00000825494215443048",
            "extra": "mean: 8.24448178120031 usec\nrounds: 42017"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 115513.04441842542,
            "unit": "iter/sec",
            "range": "stddev: 0.000021088509166540577",
            "extra": "mean: 8.657030944294727 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 122768.68528333618,
            "unit": "iter/sec",
            "range": "stddev: 0.000007065749869300373",
            "extra": "mean: 8.145399600004787 usec\nrounds: 50503"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 121210.9282067324,
            "unit": "iter/sec",
            "range": "stddev: 0.00003841131519293913",
            "extra": "mean: 8.250081199728468 usec\nrounds: 16367"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 118935.8323921117,
            "unit": "iter/sec",
            "range": "stddev: 0.000025580744165164477",
            "extra": "mean: 8.407895079955097 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 118303.72846964553,
            "unit": "iter/sec",
            "range": "stddev: 0.000011445399452752628",
            "extra": "mean: 8.452818968056285 usec\nrounds: 49262"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 117944.45491751665,
            "unit": "iter/sec",
            "range": "stddev: 0.000020547255434072594",
            "extra": "mean: 8.478567311191872 usec\nrounds: 47392"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 118007.82052689171,
            "unit": "iter/sec",
            "range": "stddev: 0.000010740179579973198",
            "extra": "mean: 8.474014650343612 usec\nrounds: 41842"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 116925.42420530521,
            "unit": "iter/sec",
            "range": "stddev: 0.000013861065760745334",
            "extra": "mean: 8.55245988455116 usec\nrounds: 41667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 118068.93572501885,
            "unit": "iter/sec",
            "range": "stddev: 0.000008680981209813055",
            "extra": "mean: 8.469628305357034 usec\nrounds: 25642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 119369.27144678155,
            "unit": "iter/sec",
            "range": "stddev: 0.00002256435590519047",
            "extra": "mean: 8.377365362792133 usec\nrounds: 47394"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 113014.90580063488,
            "unit": "iter/sec",
            "range": "stddev: 0.000042603125119205515",
            "extra": "mean: 8.84839033325445 usec\nrounds: 48310"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 116430.70533870146,
            "unit": "iter/sec",
            "range": "stddev: 0.000010111685341942478",
            "extra": "mean: 8.588799639158424 usec\nrounds: 28818"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 109146.04065355976,
            "unit": "iter/sec",
            "range": "stddev: 0.00004685306928302116",
            "extra": "mean: 9.162036423969772 usec\nrounds: 40001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 112104.55885260241,
            "unit": "iter/sec",
            "range": "stddev: 0.00002566300909903695",
            "extra": "mean: 8.920243835175539 usec\nrounds: 41323"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 117966.28941220664,
            "unit": "iter/sec",
            "range": "stddev: 0.000017104467097997736",
            "extra": "mean: 8.476998004961613 usec\nrounds: 47620"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 112577.2374963492,
            "unit": "iter/sec",
            "range": "stddev: 0.00002937108294475765",
            "extra": "mean: 8.882790360106583 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 113301.31259876415,
            "unit": "iter/sec",
            "range": "stddev: 0.000017513687530796052",
            "extra": "mean: 8.826023080079548 usec\nrounds: 48310"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 117879.46392711057,
            "unit": "iter/sec",
            "range": "stddev: 0.000009216211948161663",
            "extra": "mean: 8.483241836070265 usec\nrounds: 48781"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 117504.31027313575,
            "unit": "iter/sec",
            "range": "stddev: 0.00001570734088488023",
            "extra": "mean: 8.51032611208496 usec\nrounds: 21787"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 112470.32123546173,
            "unit": "iter/sec",
            "range": "stddev: 0.000028376481321654947",
            "extra": "mean: 8.891234496489563 usec\nrounds: 25510"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 118967.99441973495,
            "unit": "iter/sec",
            "range": "stddev: 0.00000865831347392736",
            "extra": "mean: 8.405622074050155 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 117252.7521264823,
            "unit": "iter/sec",
            "range": "stddev: 0.000014025383757625524",
            "extra": "mean: 8.528584462744934 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 115502.58838158779,
            "unit": "iter/sec",
            "range": "stddev: 0.0000204718530374312",
            "extra": "mean: 8.657814634389695 usec\nrounds: 53764"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 400615.8282080037,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029673596071139876",
            "extra": "mean: 2.496156990284443 usec\nrounds: 6166"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 26803.094528707326,
            "unit": "iter/sec",
            "range": "stddev: 0.00004693129901140403",
            "extra": "mean: 37.30912484485531 usec\nrounds: 14514"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 386220.7703713263,
            "unit": "iter/sec",
            "range": "stddev: 0.00000642288126493118",
            "extra": "mean: 2.5891927019838024 usec\nrounds: 135136"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 28235.220919870655,
            "unit": "iter/sec",
            "range": "stddev: 0.00003643194018234946",
            "extra": "mean: 35.41675848182388 usec\nrounds: 14620"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 395282.4885427743,
            "unit": "iter/sec",
            "range": "stddev: 0.000006984277927984127",
            "extra": "mean: 2.5298363296753736 usec\nrounds: 138889"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 27796.843840192658,
            "unit": "iter/sec",
            "range": "stddev: 0.00003851522270332421",
            "extra": "mean: 35.97530733162075 usec\nrounds: 9166"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 29738.005940852116,
            "unit": "iter/sec",
            "range": "stddev: 0.000018786049952674378",
            "extra": "mean: 33.62700249603037 usec\nrounds: 8013"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 386765.10384618834,
            "unit": "iter/sec",
            "range": "stddev: 0.00000911296521588137",
            "extra": "mean: 2.5855486703828574 usec\nrounds: 158731"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 29351.93570574511,
            "unit": "iter/sec",
            "range": "stddev: 0.00002804206277981489",
            "extra": "mean: 34.06930329996152 usec\nrounds: 14728"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 381076.10578695644,
            "unit": "iter/sec",
            "range": "stddev: 0.000013468641318317171",
            "extra": "mean: 2.624147735358296 usec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 27444.860190113915,
            "unit": "iter/sec",
            "range": "stddev: 0.00003524250434929776",
            "extra": "mean: 36.43669499763808 usec\nrounds: 13813"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 389994.08405732294,
            "unit": "iter/sec",
            "range": "stddev: 0.000014594224067044683",
            "extra": "mean: 2.56414145977921 usec\nrounds: 128206"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 386958.5197277926,
            "unit": "iter/sec",
            "range": "stddev: 0.000006955055929187676",
            "extra": "mean: 2.5842563195234822 usec\nrounds: 135136"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 27636.560059037573,
            "unit": "iter/sec",
            "range": "stddev: 0.00005171651432510111",
            "extra": "mean: 36.183953352507956 usec\nrounds: 13334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 394483.72413068986,
            "unit": "iter/sec",
            "range": "stddev: 0.000003835464889269973",
            "extra": "mean: 2.5349588305668767 usec\nrounds: 138889"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 27954.009372968663,
            "unit": "iter/sec",
            "range": "stddev: 0.00006303975580355804",
            "extra": "mean: 35.77304373972891 usec\nrounds: 5647"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 401010.81625910517,
            "unit": "iter/sec",
            "range": "stddev: 0.000005223417953789456",
            "extra": "mean: 2.493698322974585 usec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 27945.366962709835,
            "unit": "iter/sec",
            "range": "stddev: 0.000022326785831317555",
            "extra": "mean: 35.78410694461072 usec\nrounds: 10800"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 28411.47887025648,
            "unit": "iter/sec",
            "range": "stddev: 0.00003246394656314146",
            "extra": "mean: 35.19704146928036 usec\nrounds: 17483"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 366704.5820285431,
            "unit": "iter/sec",
            "range": "stddev: 0.000017588598318443694",
            "extra": "mean: 2.7269907413432954 usec\nrounds: 126583"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 27904.310433837396,
            "unit": "iter/sec",
            "range": "stddev: 0.00004704872109981385",
            "extra": "mean: 35.8367572770183 usec\nrounds: 10753"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 361000.71917620266,
            "unit": "iter/sec",
            "range": "stddev: 0.000010331675172190602",
            "extra": "mean: 2.7700775840058784 usec\nrounds: 136987"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 26435.978258949628,
            "unit": "iter/sec",
            "range": "stddev: 0.0002437071126337392",
            "extra": "mean: 37.82723643530991 usec\nrounds: 14431"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 384064.81720869284,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066931898086165655",
            "extra": "mean: 2.6037271710223346 usec\nrounds: 135136"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 385795.2657642937,
            "unit": "iter/sec",
            "range": "stddev: 0.000013061224812680134",
            "extra": "mean: 2.5920483964957777 usec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 28179.779943760324,
            "unit": "iter/sec",
            "range": "stddev: 0.00002791348007807592",
            "extra": "mean: 35.48643750929729 usec\nrounds: 13298"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 395621.65608239814,
            "unit": "iter/sec",
            "range": "stddev: 0.000004905011833889688",
            "extra": "mean: 2.527667493995134 usec\nrounds: 136987"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 27894.649967066114,
            "unit": "iter/sec",
            "range": "stddev: 0.000021916032549052488",
            "extra": "mean: 35.84916825200002 usec\nrounds: 13141"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 399452.40482687665,
            "unit": "iter/sec",
            "range": "stddev: 0.000009671172938907523",
            "extra": "mean: 2.503427161574861 usec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 27966.10696613789,
            "unit": "iter/sec",
            "range": "stddev: 0.000053327732926749686",
            "extra": "mean: 35.757569017769505 usec\nrounds: 14105"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 27679.474774263203,
            "unit": "iter/sec",
            "range": "stddev: 0.000034762204322820683",
            "extra": "mean: 36.12785315311746 usec\nrounds: 14859"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 384681.89705212275,
            "unit": "iter/sec",
            "range": "stddev: 0.000014331891182253502",
            "extra": "mean: 2.5995504536687473 usec\nrounds: 136987"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 28632.353383032245,
            "unit": "iter/sec",
            "range": "stddev: 0.000019733757503848268",
            "extra": "mean: 34.92552591197788 usec\nrounds: 14993"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 401343.27517449256,
            "unit": "iter/sec",
            "range": "stddev: 0.000012525147480099108",
            "extra": "mean: 2.491632629362554 usec\nrounds: 135136"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 28454.703997789802,
            "unit": "iter/sec",
            "range": "stddev: 0.00003316891288965025",
            "extra": "mean: 35.14357415482777 usec\nrounds: 14881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 388970.42739471537,
            "unit": "iter/sec",
            "range": "stddev: 0.000006435857458915728",
            "extra": "mean: 2.5708895318800944 usec\nrounds: 119048"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 10425.222481616473,
            "unit": "iter/sec",
            "range": "stddev: 0.000051229496895432387",
            "extra": "mean: 95.9212143206891 usec\nrounds: 8170"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 9667.710456479046,
            "unit": "iter/sec",
            "range": "stddev: 0.00004129671780038622",
            "extra": "mean: 103.43710690361296 usec\nrounds: 6707"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 11186.8782087587,
            "unit": "iter/sec",
            "range": "stddev: 0.00008237404489006714",
            "extra": "mean: 89.39044310119117 usec\nrounds: 8190"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 9017.208758970599,
            "unit": "iter/sec",
            "range": "stddev: 0.00012088692852703768",
            "extra": "mean: 110.89906275100584 usec\nrounds: 6964"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 7869.546397196836,
            "unit": "iter/sec",
            "range": "stddev: 0.0000717195237341385",
            "extra": "mean: 127.07212709949889 usec\nrounds: 5893"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 6470.734199206996,
            "unit": "iter/sec",
            "range": "stddev: 0.00009488787088469493",
            "extra": "mean: 154.54196837857324 usec\nrounds: 4206"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 7924.153741300484,
            "unit": "iter/sec",
            "range": "stddev: 0.000040545869589655735",
            "extra": "mean: 126.19644098877409 usec\nrounds: 6109"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 6890.889783495823,
            "unit": "iter/sec",
            "range": "stddev: 0.0001031501640809472",
            "extra": "mean: 145.11914011381694 usec\nrounds: 6302"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 139513.3296034894,
            "unit": "iter/sec",
            "range": "stddev: 0.000009345817089481471",
            "extra": "mean: 7.167773881120164 usec\nrounds: 23753"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 138594.28690103267,
            "unit": "iter/sec",
            "range": "stddev: 0.000011669050283749366",
            "extra": "mean: 7.215304630226782 usec\nrounds: 56498"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 115345.64456513738,
            "unit": "iter/sec",
            "range": "stddev: 0.0000254213213361718",
            "extra": "mean: 8.669594797186168 usec\nrounds: 42554"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 100573.96006743544,
            "unit": "iter/sec",
            "range": "stddev: 0.000022249467358873888",
            "extra": "mean: 9.942931543408392 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 24541.388130885814,
            "unit": "iter/sec",
            "range": "stddev: 0.00008842883495198182",
            "extra": "mean: 40.747491326355764 usec\nrounds: 9108"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 28769.645225079395,
            "unit": "iter/sec",
            "range": "stddev: 0.00003032988518448148",
            "extra": "mean: 34.75885754504435 usec\nrounds: 13141"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 23007.374710166307,
            "unit": "iter/sec",
            "range": "stddev: 0.000031376823672182725",
            "extra": "mean: 43.464324487144914 usec\nrounds: 11455"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 22377.23102670653,
            "unit": "iter/sec",
            "range": "stddev: 0.000052720490565149677",
            "extra": "mean: 44.68828153074575 usec\nrounds: 12361"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 25895.194346416865,
            "unit": "iter/sec",
            "range": "stddev: 0.00007113886209885546",
            "extra": "mean: 38.617203895917875 usec\nrounds: 13193"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 28333.21970455916,
            "unit": "iter/sec",
            "range": "stddev: 0.000026847637002060585",
            "extra": "mean: 35.29425919212026 usec\nrounds: 14306"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 23244.699424174934,
            "unit": "iter/sec",
            "range": "stddev: 0.00005702308169303716",
            "extra": "mean: 43.02056059111614 usec\nrounds: 13459"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 23980.813694706016,
            "unit": "iter/sec",
            "range": "stddev: 0.00006186406371717223",
            "extra": "mean: 41.70000287441285 usec\nrounds: 13569"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 4252.764837793351,
            "unit": "iter/sec",
            "range": "stddev: 0.0003101956687857742",
            "extra": "mean: 235.14114655793523 usec\nrounds: 1351"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 3157.958955825285,
            "unit": "iter/sec",
            "range": "stddev: 0.00017803127819976579",
            "extra": "mean: 316.6602270606981 usec\nrounds: 1722"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 3394.1061773314764,
            "unit": "iter/sec",
            "range": "stddev: 0.00011677471199949051",
            "extra": "mean: 294.62837865202636 usec\nrounds: 1677"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 4282.564901462223,
            "unit": "iter/sec",
            "range": "stddev: 0.00008512866281017461",
            "extra": "mean: 233.50492590516578 usec\nrounds: 1849"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 160.70042243326859,
            "unit": "iter/sec",
            "range": "stddev: 0.0006319111377646999",
            "extra": "mean: 6.222758999997362 msec\nrounds: 85"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 128.2213235795942,
            "unit": "iter/sec",
            "range": "stddev: 0.012012719050358776",
            "extra": "mean: 7.7990147978720845 msec\nrounds: 94"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 139.76978642377398,
            "unit": "iter/sec",
            "range": "stddev: 0.011699237370713132",
            "extra": "mean: 7.154622079539116 msec\nrounds: 88"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 124.65179904956399,
            "unit": "iter/sec",
            "range": "stddev: 0.01404310260336181",
            "extra": "mean: 8.02234711111053 msec\nrounds: 63"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 4552.3496404948955,
            "unit": "iter/sec",
            "range": "stddev: 0.00016660908089709335",
            "extra": "mean: 219.6667828640877 usec\nrounds: 1879"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 3517.2360795395643,
            "unit": "iter/sec",
            "range": "stddev: 0.00020989330169763658",
            "extra": "mean: 284.3141538940737 usec\nrounds: 1618"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 3103.0580426155393,
            "unit": "iter/sec",
            "range": "stddev: 0.00023755334243490082",
            "extra": "mean: 322.262744127438 usec\nrounds: 1618"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 4466.943234011256,
            "unit": "iter/sec",
            "range": "stddev: 0.00007777341747936645",
            "extra": "mean: 223.8667356204599 usec\nrounds: 1982"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 141.1696847585396,
            "unit": "iter/sec",
            "range": "stddev: 0.01192416340666509",
            "extra": "mean: 7.083673819279448 msec\nrounds: 83"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 135.42353517902967,
            "unit": "iter/sec",
            "range": "stddev: 0.011999322736685098",
            "extra": "mean: 7.384240846157219 msec\nrounds: 91"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 130.43867308391765,
            "unit": "iter/sec",
            "range": "stddev: 0.013069537592089819",
            "extra": "mean: 7.6664379999990535 msec\nrounds: 83"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 135.9588415952772,
            "unit": "iter/sec",
            "range": "stddev: 0.011499958323271876",
            "extra": "mean: 7.355167109887594 msec\nrounds: 91"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 64143.83102340505,
            "unit": "iter/sec",
            "range": "stddev: 0.00003206995510044423",
            "extra": "mean: 15.589963743124668 usec\nrounds: 28491"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 64657.857991513985,
            "unit": "iter/sec",
            "range": "stddev: 0.000015274449866645105",
            "extra": "mean: 15.466024255416022 usec\nrounds: 28736"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 61207.66233010096,
            "unit": "iter/sec",
            "range": "stddev: 0.00001814056012517283",
            "extra": "mean: 16.337823761457653 usec\nrounds: 19763"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 65214.12614878842,
            "unit": "iter/sec",
            "range": "stddev: 0.000023932624588856367",
            "extra": "mean: 15.33410104612095 usec\nrounds: 29155"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 51209.78587479757,
            "unit": "iter/sec",
            "range": "stddev: 0.0000396501610091298",
            "extra": "mean: 19.527517698372975 usec\nrounds: 27856"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 50288.22401571564,
            "unit": "iter/sec",
            "range": "stddev: 0.000026635092561802337",
            "extra": "mean: 19.88537116935147 usec\nrounds: 24571"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 50042.77053024805,
            "unit": "iter/sec",
            "range": "stddev: 0.00001949630999750708",
            "extra": "mean: 19.982906409938995 usec\nrounds: 25975"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 53312.499619221824,
            "unit": "iter/sec",
            "range": "stddev: 0.00003096295836197659",
            "extra": "mean: 18.757327214862947 usec\nrounds: 28819"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 56075.27425541733,
            "unit": "iter/sec",
            "range": "stddev: 0.000015785546640541316",
            "extra": "mean: 17.833171808399882 usec\nrounds: 20162"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 53430.12291269543,
            "unit": "iter/sec",
            "range": "stddev: 0.000024349006422963937",
            "extra": "mean: 18.716034055059076 usec\nrounds: 23697"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 53522.687359535674,
            "unit": "iter/sec",
            "range": "stddev: 0.00003547334227931454",
            "extra": "mean: 18.68366573753212 usec\nrounds: 24753"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 50336.626133804384,
            "unit": "iter/sec",
            "range": "stddev: 0.00004274607042882655",
            "extra": "mean: 19.866250021243157 usec\nrounds: 23310"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 47131.368328419776,
            "unit": "iter/sec",
            "range": "stddev: 0.000022420386207125768",
            "extra": "mean: 21.217291911234607 usec\nrounds: 6132"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 45535.74463643923,
            "unit": "iter/sec",
            "range": "stddev: 0.000036677435759865625",
            "extra": "mean: 21.960769676307574 usec\nrounds: 21231"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 44677.34543969784,
            "unit": "iter/sec",
            "range": "stddev: 0.000027937731736844047",
            "extra": "mean: 22.382708510507317 usec\nrounds: 17637"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 45131.45843736794,
            "unit": "iter/sec",
            "range": "stddev: 0.000024330188238931572",
            "extra": "mean: 22.157493567103963 usec\nrounds: 21142"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 50167.70143363181,
            "unit": "iter/sec",
            "range": "stddev: 0.000020239543472136255",
            "extra": "mean: 19.933143664613112 usec\nrounds: 8666"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 11992.558559985036,
            "unit": "iter/sec",
            "range": "stddev: 0.000045916721484435176",
            "extra": "mean: 83.38504206572311 usec\nrounds: 5848"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 12255.741792903938,
            "unit": "iter/sec",
            "range": "stddev: 0.00005819143507953346",
            "extra": "mean: 81.59440831064171 usec\nrounds: 6113"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 53828.55670440718,
            "unit": "iter/sec",
            "range": "stddev: 0.00003219155333101291",
            "extra": "mean: 18.577499773798053 usec\nrounds: 19881"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 44738.037920898605,
            "unit": "iter/sec",
            "range": "stddev: 0.00004866514430819013",
            "extra": "mean: 22.352343698400485 usec\nrounds: 19456"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 9464.199473391509,
            "unit": "iter/sec",
            "range": "stddev: 0.000059749586455846254",
            "extra": "mean: 105.66134017055418 usec\nrounds: 4339"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 10120.044618602673,
            "unit": "iter/sec",
            "range": "stddev: 0.0000406878498403722",
            "extra": "mean: 98.81379358365668 usec\nrounds: 4956"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 45854.46185894113,
            "unit": "iter/sec",
            "range": "stddev: 0.00004628504055125384",
            "extra": "mean: 21.808128575932916 usec\nrounds: 15975"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 324760.8998953219,
            "unit": "iter/sec",
            "range": "stddev: 0.000017270313870809164",
            "extra": "mean: 3.079188413144327 usec\nrounds: 29499"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 11037.377594557543,
            "unit": "iter/sec",
            "range": "stddev: 0.00004452155534407017",
            "extra": "mean: 90.60123126467045 usec\nrounds: 467"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 10854.889353120347,
            "unit": "iter/sec",
            "range": "stddev: 0.00004827788203355467",
            "extra": "mean: 92.12438445653433 usec\nrounds: 1454"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 340290.0382964969,
            "unit": "iter/sec",
            "range": "stddev: 0.00001032714021252502",
            "extra": "mean: 2.9386696272568917 usec\nrounds: 81968"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 252715.94748071727,
            "unit": "iter/sec",
            "range": "stddev: 0.000010193983317292055",
            "extra": "mean: 3.957011854490512 usec\nrounds: 69931"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 9799.350866844574,
            "unit": "iter/sec",
            "range": "stddev: 0.000020327067465999103",
            "extra": "mean: 102.04757576172018 usec\nrounds: 66"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 9804.250746936528,
            "unit": "iter/sec",
            "range": "stddev: 0.000016871243777901438",
            "extra": "mean: 101.99657534385925 usec\nrounds: 73"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 258488.8831532345,
            "unit": "iter/sec",
            "range": "stddev: 0.000010041832725521145",
            "extra": "mean: 3.8686383251816334 usec\nrounds: 76331"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 29958.041209979823,
            "unit": "iter/sec",
            "range": "stddev: 0.00002952843503216151",
            "extra": "mean: 33.38001950764635 usec\nrounds: 11124"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 12226.881546559667,
            "unit": "iter/sec",
            "range": "stddev: 0.00009067340801228375",
            "extra": "mean: 81.78700318572847 usec\nrounds: 7221"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 12239.829368446324,
            "unit": "iter/sec",
            "range": "stddev: 0.0000754194897043289",
            "extra": "mean: 81.70048534973459 usec\nrounds: 8157"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 31379.525727032662,
            "unit": "iter/sec",
            "range": "stddev: 0.000018300746921823658",
            "extra": "mean: 31.86791313224105 usec\nrounds: 7874"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 23718.36369340441,
            "unit": "iter/sec",
            "range": "stddev: 0.000037885393260089844",
            "extra": "mean: 42.161424494813666 usec\nrounds: 11390"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 10533.888247426554,
            "unit": "iter/sec",
            "range": "stddev: 0.000039299332281091366",
            "extra": "mean: 94.93170769533288 usec\nrounds: 5289"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 10679.501569830227,
            "unit": "iter/sec",
            "range": "stddev: 0.00006225930468969897",
            "extra": "mean: 93.63732880802387 usec\nrounds: 7588"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 24946.339188782047,
            "unit": "iter/sec",
            "range": "stddev: 0.000024657267758174022",
            "extra": "mean: 40.08604198124923 usec\nrounds: 10719"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 30310.42131690563,
            "unit": "iter/sec",
            "range": "stddev: 0.00001879280567978093",
            "extra": "mean: 32.99195314854467 usec\nrounds: 14706"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 12544.214129159776,
            "unit": "iter/sec",
            "range": "stddev: 0.00003452745206813663",
            "extra": "mean: 79.71802694880982 usec\nrounds: 7273"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 12552.67015229509,
            "unit": "iter/sec",
            "range": "stddev: 0.00004120580023404379",
            "extra": "mean: 79.66432542777866 usec\nrounds: 7716"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 30241.69981222652,
            "unit": "iter/sec",
            "range": "stddev: 0.00004988466013600177",
            "extra": "mean: 33.06692435309825 usec\nrounds: 14105"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 23969.397456850413,
            "unit": "iter/sec",
            "range": "stddev: 0.000044816406801411614",
            "extra": "mean: 41.71986391398428 usec\nrounds: 13587"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 10617.60590563077,
            "unit": "iter/sec",
            "range": "stddev: 0.00008459993148034698",
            "extra": "mean: 94.18319053165047 usec\nrounds: 6907"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 10221.01226595915,
            "unit": "iter/sec",
            "range": "stddev: 0.000058617390593918725",
            "extra": "mean: 97.83766754008087 usec\nrounds: 7252"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 22179.80139161118,
            "unit": "iter/sec",
            "range": "stddev: 0.00011472369507976129",
            "extra": "mean: 45.086066477503216 usec\nrounds: 11628"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 23366.219968438738,
            "unit": "iter/sec",
            "range": "stddev: 0.00005307793128396462",
            "extra": "mean: 42.79682384873214 usec\nrounds: 11615"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 23220.439784407477,
            "unit": "iter/sec",
            "range": "stddev: 0.000020839512359959386",
            "extra": "mean: 43.0655064798342 usec\nrounds: 12887"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 23864.02957772169,
            "unit": "iter/sec",
            "range": "stddev: 0.000020316370885773963",
            "extra": "mean: 41.90407142863885 usec\nrounds: 8078"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 23882.671227699848,
            "unit": "iter/sec",
            "range": "stddev: 0.000059866776928044434",
            "extra": "mean: 41.871363151378546 usec\nrounds: 12755"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 19314.969650769464,
            "unit": "iter/sec",
            "range": "stddev: 0.000046164820235639426",
            "extra": "mean: 51.77331458867513 usec\nrounds: 8020"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 19239.818791531365,
            "unit": "iter/sec",
            "range": "stddev: 0.000059001466999548623",
            "extra": "mean: 51.97554149731191 usec\nrounds: 11326"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 19324.776729435285,
            "unit": "iter/sec",
            "range": "stddev: 0.00004378420103741025",
            "extra": "mean: 51.74704028930959 usec\nrounds: 11765"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 19660.28199190711,
            "unit": "iter/sec",
            "range": "stddev: 0.000029280723873655662",
            "extra": "mean: 50.86397033428291 usec\nrounds: 12034"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 21796.51547634644,
            "unit": "iter/sec",
            "range": "stddev: 0.00007575456464304095",
            "extra": "mean: 45.87889293980036 usec\nrounds: 12563"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 24563.188056025883,
            "unit": "iter/sec",
            "range": "stddev: 0.000029362694965749486",
            "extra": "mean: 40.71132776898145 usec\nrounds: 10184"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 24621.34206375748,
            "unit": "iter/sec",
            "range": "stddev: 0.00003652036917351579",
            "extra": "mean: 40.61517026206285 usec\nrounds: 12563"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 23497.65111392145,
            "unit": "iter/sec",
            "range": "stddev: 0.00002931375730294692",
            "extra": "mean: 42.557445216621616 usec\nrounds: 12805"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 21563.22101397057,
            "unit": "iter/sec",
            "range": "stddev: 0.00007653354115447446",
            "extra": "mean: 46.37526088296879 usec\nrounds: 9579"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 20819.251933373405,
            "unit": "iter/sec",
            "range": "stddev: 0.00004002331684269105",
            "extra": "mean: 48.03246548916549 usec\nrounds: 11779"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 21159.99299440948,
            "unit": "iter/sec",
            "range": "stddev: 0.000030380476206356663",
            "extra": "mean: 47.25899485241807 usec\nrounds: 10684"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 22019.703911014534,
            "unit": "iter/sec",
            "range": "stddev: 0.000028937910537568183",
            "extra": "mean: 45.413871323664225 usec\nrounds: 8704"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 49414.18666213937,
            "unit": "iter/sec",
            "range": "stddev: 0.000026992958472477593",
            "extra": "mean: 20.237103300663847 usec\nrounds: 17483"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 17065.11038840955,
            "unit": "iter/sec",
            "range": "stddev: 0.00006066428076156113",
            "extra": "mean: 58.599093544638876 usec\nrounds: 8969"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 16738.009502456825,
            "unit": "iter/sec",
            "range": "stddev: 0.000037252270532590526",
            "extra": "mean: 59.744260502016004 usec\nrounds: 9355"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 46583.31095491269,
            "unit": "iter/sec",
            "range": "stddev: 0.000013271086437251856",
            "extra": "mean: 21.466915500443612 usec\nrounds: 13870"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 43499.61653125886,
            "unit": "iter/sec",
            "range": "stddev: 0.00004692924685210307",
            "extra": "mean: 22.988708401174048 usec\nrounds: 10439"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 14469.0250770353,
            "unit": "iter/sec",
            "range": "stddev: 0.000026476170504034016",
            "extra": "mean: 69.11315687655852 usec\nrounds: 8376"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 13544.797086919767,
            "unit": "iter/sec",
            "range": "stddev: 0.00005550838756718955",
            "extra": "mean: 73.82908681339357 usec\nrounds: 5483"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 47712.940906120326,
            "unit": "iter/sec",
            "range": "stddev: 0.00002422838181761724",
            "extra": "mean: 20.958674544241436 usec\nrounds: 19084"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 51089.74848795616,
            "unit": "iter/sec",
            "range": "stddev: 0.000023100131160228422",
            "extra": "mean: 19.57339837434782 usec\nrounds: 6888"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 17449.23952195865,
            "unit": "iter/sec",
            "range": "stddev: 0.000035225203772673854",
            "extra": "mean: 57.30908781105158 usec\nrounds: 8803"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 16711.675483524163,
            "unit": "iter/sec",
            "range": "stddev: 0.0000540247852913509",
            "extra": "mean: 59.83840465223776 usec\nrounds: 8511"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 50327.408272172026,
            "unit": "iter/sec",
            "range": "stddev: 0.00002584540592391664",
            "extra": "mean: 19.86988868157033 usec\nrounds: 14472"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 47210.13648661468,
            "unit": "iter/sec",
            "range": "stddev: 0.000016505427469517058",
            "extra": "mean: 21.181891738091593 usec\nrounds: 18797"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 14263.093270602723,
            "unit": "iter/sec",
            "range": "stddev: 0.000026049456361934083",
            "extra": "mean: 70.11101876905433 usec\nrounds: 5541"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 14055.669538752143,
            "unit": "iter/sec",
            "range": "stddev: 0.00003120131352883501",
            "extra": "mean: 71.14566810516943 usec\nrounds: 10428"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 42904.56302056855,
            "unit": "iter/sec",
            "range": "stddev: 0.00005011037384274564",
            "extra": "mean: 23.30754422369009 usec\nrounds: 18316"
          }
        ]
      }
    ]
  }
}