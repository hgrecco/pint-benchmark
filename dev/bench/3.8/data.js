window.BENCHMARK_DATA = {
  "lastUpdate": 1669517117643,
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
      }
    ]
  }
}