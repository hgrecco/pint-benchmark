window.BENCHMARK_DATA = {
  "lastUpdate": 1669522860162,
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
        "date": 1669514908959,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 28.676127236121054,
            "unit": "iter/sec",
            "range": "stddev: 0.001122714966622047",
            "extra": "mean: 34.8722124074125 msec\nrounds: 27"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 1828595.3858197294,
            "unit": "iter/sec",
            "range": "stddev: 3.108323760447575e-7",
            "extra": "mean: 546.8678351453666 nsec\nrounds: 38312"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 1712.4283148269833,
            "unit": "iter/sec",
            "range": "stddev: 0.000034428224758125986",
            "extra": "mean: 583.966050632044 usec\nrounds: 158"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 14721.51285691911,
            "unit": "iter/sec",
            "range": "stddev: 0.000007764173514758297",
            "extra": "mean: 67.92780128775965 usec\nrounds: 11338"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 14728.399743399641,
            "unit": "iter/sec",
            "range": "stddev: 0.000007577481846451812",
            "extra": "mean: 67.89603877014122 usec\nrounds: 5365"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 14820.713770731982,
            "unit": "iter/sec",
            "range": "stddev: 0.000008127569481896017",
            "extra": "mean: 67.47313357976084 usec\nrounds: 11641"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 14905.4197546784,
            "unit": "iter/sec",
            "range": "stddev: 0.000008676311955019911",
            "extra": "mean: 67.08969062653387 usec\nrounds: 10615"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 14814.276238108323,
            "unit": "iter/sec",
            "range": "stddev: 0.000007557697144048188",
            "extra": "mean: 67.50245397933074 usec\nrounds: 10604"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 14382.684558486946,
            "unit": "iter/sec",
            "range": "stddev: 0.000008274638946930713",
            "extra": "mean: 69.52804922707695 usec\nrounds: 10482"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 13942.303908476235,
            "unit": "iter/sec",
            "range": "stddev: 0.000006094891559561315",
            "extra": "mean: 71.72415739640056 usec\nrounds: 10661"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 13930.879888509806,
            "unit": "iter/sec",
            "range": "stddev: 0.000005645020515944973",
            "extra": "mean: 71.7829748015271 usec\nrounds: 10834"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 13873.070684355775,
            "unit": "iter/sec",
            "range": "stddev: 0.000006012925537232729",
            "extra": "mean: 72.0820950712569 usec\nrounds: 10834"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 14283.446851793926,
            "unit": "iter/sec",
            "range": "stddev: 0.000007572984652525522",
            "extra": "mean: 70.0111121899407 usec\nrounds: 11534"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 13612.558666229492,
            "unit": "iter/sec",
            "range": "stddev: 0.000007698942761364736",
            "extra": "mean: 73.46157504399484 usec\nrounds: 11933"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 13769.490032493568,
            "unit": "iter/sec",
            "range": "stddev: 0.000008697467186186094",
            "extra": "mean: 72.6243308677501 usec\nrounds: 11494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 13734.798308160884,
            "unit": "iter/sec",
            "range": "stddev: 0.00000863671714995932",
            "extra": "mean: 72.8077673631235 usec\nrounds: 12642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 11656082.55925281,
            "unit": "iter/sec",
            "range": "stddev: 1.7214960293445267e-8",
            "extra": "mean: 85.7921171128096 nsec\nrounds: 104156"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 11003875.75020457,
            "unit": "iter/sec",
            "range": "stddev: 1.585427136066769e-8",
            "extra": "mean: 90.87707119751103 nsec\nrounds: 95230"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 9901099.227308722,
            "unit": "iter/sec",
            "range": "stddev: 1.6487762676996217e-8",
            "extra": "mean: 100.99888679449947 nsec\nrounds: 91744"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 11608400.271382675,
            "unit": "iter/sec",
            "range": "stddev: 1.642963961017376e-8",
            "extra": "mean: 86.14451402621002 nsec\nrounds: 107516"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 11341525.042205904,
            "unit": "iter/sec",
            "range": "stddev: 1.4993400284542943e-8",
            "extra": "mean: 88.17156390156481 nsec\nrounds: 117648"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 11513284.711792624,
            "unit": "iter/sec",
            "range": "stddev: 1.6110257101326478e-8",
            "extra": "mean: 86.85618613910918 nsec\nrounds: 106383"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 57517.298310006685,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028351698050804567",
            "extra": "mean: 17.386073918322815 usec\nrounds: 10214"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 4500.7599588118055,
            "unit": "iter/sec",
            "range": "stddev: 0.000024439072437223308",
            "extra": "mean: 222.1846997287984 usec\nrounds: 2954"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 57160.35032760952,
            "unit": "iter/sec",
            "range": "stddev: 0.000002551431804468193",
            "extra": "mean: 17.494644351698128 usec\nrounds: 26245"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 4254.0514301902695,
            "unit": "iter/sec",
            "range": "stddev: 0.000013200203817901728",
            "extra": "mean: 235.07003063084107 usec\nrounds: 3330"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 56693.05902013592,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023600784581912504",
            "extra": "mean: 17.638843577744247 usec\nrounds: 19230"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 4219.917934724113,
            "unit": "iter/sec",
            "range": "stddev: 0.000013293807544828299",
            "extra": "mean: 236.9714329682521 usec\nrounds: 3379"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 4309.848195399701,
            "unit": "iter/sec",
            "range": "stddev: 0.000023242455938373138",
            "extra": "mean: 232.02673381104057 usec\nrounds: 139"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 65459.910239746925,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013726162368025913",
            "extra": "mean: 15.276525683238795 usec\nrounds: 21551"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 4251.74837273697,
            "unit": "iter/sec",
            "range": "stddev: 0.00001479885160035902",
            "extra": "mean: 235.19736172822286 usec\nrounds: 3240"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 66273.0552023208,
            "unit": "iter/sec",
            "range": "stddev: 0.00000205401097789009",
            "extra": "mean: 15.089088573737298 usec\nrounds: 23980"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 4358.202946442994,
            "unit": "iter/sec",
            "range": "stddev: 0.00002116987506876612",
            "extra": "mean: 229.45237114672767 usec\nrounds: 3244"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 65375.85748284931,
            "unit": "iter/sec",
            "range": "stddev: 0.000003038404199998085",
            "extra": "mean: 15.296166482593973 usec\nrounds: 21738"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 57544.65288431416,
            "unit": "iter/sec",
            "range": "stddev: 0.000002686495394670412",
            "extra": "mean: 17.377809229475528 usec\nrounds: 16339"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 4396.849766343913,
            "unit": "iter/sec",
            "range": "stddev: 0.000022252044432208146",
            "extra": "mean: 227.43556253720357 usec\nrounds: 3374"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 55103.10473282747,
            "unit": "iter/sec",
            "range": "stddev: 0.00000150642671626459",
            "extra": "mean: 18.14779774839536 usec\nrounds: 20964"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 4266.640283898629,
            "unit": "iter/sec",
            "range": "stddev: 0.000014031995316638095",
            "extra": "mean: 234.37644925769396 usec\nrounds: 3301"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 55303.77810155615,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020550634444930913",
            "extra": "mean: 18.081947279689775 usec\nrounds: 20201"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 4239.828448148537,
            "unit": "iter/sec",
            "range": "stddev: 0.000013899235977242299",
            "extra": "mean: 235.8585995234509 usec\nrounds: 3356"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 4358.971783483273,
            "unit": "iter/sec",
            "range": "stddev: 0.00002028935898983781",
            "extra": "mean: 229.41190025343448 usec\nrounds: 3549"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 66160.85739896826,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021008756846396826",
            "extra": "mean: 15.114677156762397 usec\nrounds: 22370"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 4304.2031337227645,
            "unit": "iter/sec",
            "range": "stddev: 0.000016922111011505816",
            "extra": "mean: 232.33104222362437 usec\nrounds: 3292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 65233.00699959646,
            "unit": "iter/sec",
            "range": "stddev: 0.000002339100418269369",
            "extra": "mean: 15.329662788750273 usec\nrounds: 22778"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 4255.463619922338,
            "unit": "iter/sec",
            "range": "stddev: 0.000014060674519551495",
            "extra": "mean: 234.9920218606522 usec\nrounds: 3568"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 65637.99230225362,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019445410515264226",
            "extra": "mean: 15.235079028547098 usec\nrounds: 18449"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 55541.352869765666,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022623036362588617",
            "extra": "mean: 18.004602846906113 usec\nrounds: 20161"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 4197.42967028893,
            "unit": "iter/sec",
            "range": "stddev: 0.00001332655330113391",
            "extra": "mean: 238.24103762319027 usec\nrounds: 3349"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 55274.86079910304,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017453604716386274",
            "extra": "mean: 18.091406935143784 usec\nrounds: 19379"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 4199.55262232961,
            "unit": "iter/sec",
            "range": "stddev: 0.000009516200913931242",
            "extra": "mean: 238.12060234293997 usec\nrounds: 3244"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 55953.23735509084,
            "unit": "iter/sec",
            "range": "stddev: 0.000001738001066548133",
            "extra": "mean: 17.872066877092255 usec\nrounds: 19304"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 4184.3084089463,
            "unit": "iter/sec",
            "range": "stddev: 0.000006814259382631128",
            "extra": "mean: 238.9881199631319 usec\nrounds: 3201"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 4189.324942701198,
            "unit": "iter/sec",
            "range": "stddev: 0.000009164677261907338",
            "extra": "mean: 238.70194212130485 usec\nrounds: 311"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 63875.93448294679,
            "unit": "iter/sec",
            "range": "stddev: 0.000002099063917959187",
            "extra": "mean: 15.655348263702882 usec\nrounds: 19267"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 4162.407667841886,
            "unit": "iter/sec",
            "range": "stddev: 0.00000636188981413375",
            "extra": "mean: 240.24556934339816 usec\nrounds: 3288"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 63985.18044585796,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012812859033670686",
            "extra": "mean: 15.628618893185202 usec\nrounds: 21881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 4058.8169055877947,
            "unit": "iter/sec",
            "range": "stddev: 0.000018612460771136134",
            "extra": "mean: 246.3772136711303 usec\nrounds: 3262"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 64372.79862987385,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015248086563405482",
            "extra": "mean: 15.534511801323555 usec\nrounds: 22370"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 56130.482192232106,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014309261393381194",
            "extra": "mean: 17.815631737765294 usec\nrounds: 16233"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 4178.757436265036,
            "unit": "iter/sec",
            "range": "stddev: 0.000007545219815990199",
            "extra": "mean: 239.30558670899973 usec\nrounds: 3160"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 55456.12267795806,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023377086516334754",
            "extra": "mean: 18.032274016110872 usec\nrounds: 18831"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 4192.2611969118125,
            "unit": "iter/sec",
            "range": "stddev: 0.00000859481263887122",
            "extra": "mean: 238.53475559601108 usec\nrounds: 3351"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 54934.25491183181,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020663948480984665",
            "extra": "mean: 18.203578106319572 usec\nrounds: 19083"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 4157.487108354112,
            "unit": "iter/sec",
            "range": "stddev: 0.000008439358775562898",
            "extra": "mean: 240.52991000034277 usec\nrounds: 3000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 4199.830219797819,
            "unit": "iter/sec",
            "range": "stddev: 0.000009485282529057566",
            "extra": "mean: 238.10486321233725 usec\nrounds: 3319"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 64002.75930034298,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013796123214927222",
            "extra": "mean: 15.62432637173256 usec\nrounds: 22122"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 4214.638698044912,
            "unit": "iter/sec",
            "range": "stddev: 0.000013221096273731564",
            "extra": "mean: 237.2682622745053 usec\nrounds: 3157"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 64937.979337968885,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017701078784985623",
            "extra": "mean: 15.399308851227303 usec\nrounds: 11750"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 4251.308530652945,
            "unit": "iter/sec",
            "range": "stddev: 0.000015145114672948728",
            "extra": "mean: 235.2216953415078 usec\nrounds: 3220"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 66578.9871781192,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019972532287701703",
            "extra": "mean: 15.019753865054954 usec\nrounds: 23093"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 55983.58485576079,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018465541892743766",
            "extra": "mean: 17.86237881294053 usec\nrounds: 19342"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 4234.311060599399,
            "unit": "iter/sec",
            "range": "stddev: 0.000014492484106246734",
            "extra": "mean: 236.16592774798235 usec\nrounds: 3211"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 56994.30850594724,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023564378772264277",
            "extra": "mean: 17.545611592000487 usec\nrounds: 19531"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 4170.088498657195,
            "unit": "iter/sec",
            "range": "stddev: 0.000006937795386869055",
            "extra": "mean: 239.80306420883127 usec\nrounds: 3255"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 54671.69493509969,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013956155480772976",
            "extra": "mean: 18.29100051108881 usec\nrounds: 19569"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 4169.675278252671,
            "unit": "iter/sec",
            "range": "stddev: 0.00004696690239946406",
            "extra": "mean: 239.82682901366275 usec\nrounds: 3357"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 4213.805960779781,
            "unit": "iter/sec",
            "range": "stddev: 0.000009904129985372498",
            "extra": "mean: 237.31515150615667 usec\nrounds: 3584"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 65310.088655612606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015260214959933596",
            "extra": "mean: 15.311570089471351 usec\nrounds: 21551"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 4210.281192026781,
            "unit": "iter/sec",
            "range": "stddev: 0.000010295167318035275",
            "extra": "mean: 237.51382731722282 usec\nrounds: 3463"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 67280.65759435926,
            "unit": "iter/sec",
            "range": "stddev: 0.000002315910594523395",
            "extra": "mean: 14.863112754174967 usec\nrounds: 21977"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 4320.345278780008,
            "unit": "iter/sec",
            "range": "stddev: 0.000020217553889555105",
            "extra": "mean: 231.46298165372164 usec\nrounds: 3325"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 65559.58445211803,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029180189858110285",
            "extra": "mean: 15.253299854735323 usec\nrounds: 23418"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 55476.52433766619,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029759090120279617",
            "extra": "mean: 18.025642592772215 usec\nrounds: 19454"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 4209.516916568841,
            "unit": "iter/sec",
            "range": "stddev: 0.000011168553524817394",
            "extra": "mean: 237.5569500775627 usec\nrounds: 3225"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 55422.059980355196,
            "unit": "iter/sec",
            "range": "stddev: 0.000001812543105434107",
            "extra": "mean: 18.04335674917999 usec\nrounds: 19047"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 4135.824509451086,
            "unit": "iter/sec",
            "range": "stddev: 0.000009417890849274572",
            "extra": "mean: 241.78975624203213 usec\nrounds: 3044"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 54910.51685757412,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014478568668452622",
            "extra": "mean: 18.21144759197553 usec\nrounds: 20617"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 4214.298854163036,
            "unit": "iter/sec",
            "range": "stddev: 0.000011058862390264221",
            "extra": "mean: 237.28739574607152 usec\nrounds: 3338"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 4203.895506731418,
            "unit": "iter/sec",
            "range": "stddev: 0.00000916818614870955",
            "extra": "mean: 237.8746090141314 usec\nrounds: 3417"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 64126.5553895813,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014219899797147225",
            "extra": "mean: 15.594163664722135 usec\nrounds: 22320"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 4238.295759880296,
            "unit": "iter/sec",
            "range": "stddev: 0.000013542762027822311",
            "extra": "mean: 235.94389269998544 usec\nrounds: 3411"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 64942.47705353436,
            "unit": "iter/sec",
            "range": "stddev: 0.00000161750661666101",
            "extra": "mean: 15.398242342614449 usec\nrounds: 17793"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 4235.50340540782,
            "unit": "iter/sec",
            "range": "stddev: 0.00001259780543405328",
            "extra": "mean: 236.0994442179451 usec\nrounds: 3433"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 64541.18987118578,
            "unit": "iter/sec",
            "range": "stddev: 0.000001632406013431986",
            "extra": "mean: 15.493981471302979 usec\nrounds: 22074"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 184806.93076375997,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010572211542444398",
            "extra": "mean: 5.41105247442428 usec\nrounds: 90082"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 181743.6905748685,
            "unit": "iter/sec",
            "range": "stddev: 0.000001149898114639686",
            "extra": "mean: 5.502254283694401 usec\nrounds: 81295"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 183735.70417171222,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012205463524511556",
            "extra": "mean: 5.442600307371064 usec\nrounds: 88488"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 185009.7605716453,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012301771068617743",
            "extra": "mean: 5.405120232090396 usec\nrounds: 86200"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 184950.08990635216,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013076488525746413",
            "extra": "mean: 5.406864092395636 usec\nrounds: 92585"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 180819.74561752958,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012790191203478293",
            "extra": "mean: 5.530369465927702 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 186335.98286479188,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012423381956941466",
            "extra": "mean: 5.366649986898207 usec\nrounds: 83334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 195517.05587235364,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013552384311546694",
            "extra": "mean: 5.114643300750527 usec\nrounds: 92585"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 181382.42836511708,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011513076249708239",
            "extra": "mean: 5.513213209313923 usec\nrounds: 45453"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 189767.94004587558,
            "unit": "iter/sec",
            "range": "stddev: 0.000001294062372180686",
            "extra": "mean: 5.269594009179076 usec\nrounds: 83327"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 182687.3402434553,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012533270380419046",
            "extra": "mean: 5.473833045395298 usec\nrounds: 78734"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 188788.5132459887,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013371002122890064",
            "extra": "mean: 5.296932439406493 usec\nrounds: 84739"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 186113.32948483905,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013045935034565705",
            "extra": "mean: 5.373070283402033 usec\nrounds: 83334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 185831.38375489454,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012913709917536763",
            "extra": "mean: 5.3812223737136184 usec\nrounds: 80639"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 192960.78893852574,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013314261573503542",
            "extra": "mean: 5.18240003837559 usec\nrounds: 83327"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 185374.93243149444,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012778228146543192",
            "extra": "mean: 5.3944726338311755 usec\nrounds: 84027"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 183464.66040600018,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013417197252780204",
            "extra": "mean: 5.450640999672846 usec\nrounds: 104167"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 183467.08937357264,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013508145566676052",
            "extra": "mean: 5.450568837246972 usec\nrounds: 78119"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 188736.2560500574,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013496783181548583",
            "extra": "mean: 5.2983990512918515 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 188956.01789918198,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012481933815527642",
            "extra": "mean: 5.292236844944271 usec\nrounds: 84739"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 185358.81326364144,
            "unit": "iter/sec",
            "range": "stddev: 0.000001354925088751166",
            "extra": "mean: 5.394941747807103 usec\nrounds: 60238"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 187737.23636849652,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013600535906537247",
            "extra": "mean: 5.326593803890714 usec\nrounds: 85471"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 178588.5280280579,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012958349230439696",
            "extra": "mean: 5.599463812383799 usec\nrounds: 84739"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 183687.14491989068,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014081446035278765",
            "extra": "mean: 5.4440391048383825 usec\nrounds: 90091"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 181569.28791512208,
            "unit": "iter/sec",
            "range": "stddev: 0.000001237473404391411",
            "extra": "mean: 5.507539361323422 usec\nrounds: 88488"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 182679.20665077836,
            "unit": "iter/sec",
            "range": "stddev: 0.000001353040892784848",
            "extra": "mean: 5.474076761848797 usec\nrounds: 80639"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 184438.27064345736,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013391847138201904",
            "extra": "mean: 5.42186823001137 usec\nrounds: 81961"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 175185.4813535757,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013302061449629312",
            "extra": "mean: 5.7082355927755595 usec\nrounds: 72464"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 183976.5216718815,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012164116551456212",
            "extra": "mean: 5.435476173331945 usec\nrounds: 82638"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 182118.07962804797,
            "unit": "iter/sec",
            "range": "stddev: 0.00000118866895011861",
            "extra": "mean: 5.490943030161351 usec\nrounds: 76918"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 184338.1320381887,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013543737641320743",
            "extra": "mean: 5.424813569190521 usec\nrounds: 77514"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 182132.08137436764,
            "unit": "iter/sec",
            "range": "stddev: 0.000001164269841634037",
            "extra": "mean: 5.49052090358824 usec\nrounds: 101011"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 177067.77383760118,
            "unit": "iter/sec",
            "range": "stddev: 0.000001087199203271926",
            "extra": "mean: 5.6475550481430705 usec\nrounds: 77514"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 179502.663510241,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010148598937161027",
            "extra": "mean: 5.570947976172777 usec\nrounds: 83327"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 193896.41784885808,
            "unit": "iter/sec",
            "range": "stddev: 0.000003194660759487944",
            "extra": "mean: 5.157392854877278 usec\nrounds: 56"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 183331.1053908488,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011020045702777784",
            "extra": "mean: 5.4546117412431006 usec\nrounds: 99001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 237867.41185788726,
            "unit": "iter/sec",
            "range": "stddev: 9.55792911610531e-7",
            "extra": "mean: 4.204022704032468 usec\nrounds: 62500"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 191851.19727187153,
            "unit": "iter/sec",
            "range": "stddev: 0.000001364136303150699",
            "extra": "mean: 5.2123729964682175 usec\nrounds: 75183"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 191706.17148638636,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013301126573582473",
            "extra": "mean: 5.216316158455092 usec\nrounds: 81301"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 182645.33517331965,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010542615972443465",
            "extra": "mean: 5.475091926388697 usec\nrounds: 71938"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 186713.5173765005,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013039935487942446",
            "extra": "mean: 5.355798626960357 usec\nrounds: 68023"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 183796.10108960632,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013149348387016339",
            "extra": "mean: 5.440811823926934 usec\nrounds: 71938"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 185284.69058449185,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012318541906345857",
            "extra": "mean: 5.397099980821077 usec\nrounds: 78125"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 239052.86986389247,
            "unit": "iter/sec",
            "range": "stddev: 0.000001060450599551512",
            "extra": "mean: 4.183175046462992 usec\nrounds: 86200"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 182611.03545128254,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011888788464754268",
            "extra": "mean: 5.4761203096446085 usec\nrounds: 70917"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 185025.00878557833,
            "unit": "iter/sec",
            "range": "stddev: 0.000001161933841025808",
            "extra": "mean: 5.404674787281753 usec\nrounds: 68961"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 179727.15556738072,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012950530939866292",
            "extra": "mean: 5.563989464158043 usec\nrounds: 72988"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 183087.2350855286,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011828688489570884",
            "extra": "mean: 5.461877227720727 usec\nrounds: 71938"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 184424.4957724947,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011395879585444071",
            "extra": "mean: 5.422273195387211 usec\nrounds: 17094"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 181419.74624984775,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013551845616970636",
            "extra": "mean: 5.512079146130099 usec\nrounds: 68961"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 230907.60724015697,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010845316493511554",
            "extra": "mean: 4.330736487862626 usec\nrounds: 70418"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 180164.81957333788,
            "unit": "iter/sec",
            "range": "stddev: 9.777021031509028e-7",
            "extra": "mean: 5.550473185431966 usec\nrounds: 86949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 177690.05027566082,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010594264466495495",
            "extra": "mean: 5.627777123415984 usec\nrounds: 73525"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 179153.4511821973,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012091712888643302",
            "extra": "mean: 5.581807067635051 usec\nrounds: 74622"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 182876.0321099752,
            "unit": "iter/sec",
            "range": "stddev: 0.000001225221879060957",
            "extra": "mean: 5.468185133187028 usec\nrounds: 74622"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 184695.0456328411,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010835858363144444",
            "extra": "mean: 5.414330398379605 usec\nrounds: 70418"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 180735.6913055952,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011967299289969563",
            "extra": "mean: 5.532941461513319 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 230662.28126361987,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012109662829511653",
            "extra": "mean: 4.335342538544989 usec\nrounds: 72459"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 176876.9684293559,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013154114765352751",
            "extra": "mean: 5.6536473283088675 usec\nrounds: 77514"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 180494.51223124663,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014059624674097353",
            "extra": "mean: 5.540334648616997 usec\nrounds: 69440"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 170973.50702856103,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012734782030387858",
            "extra": "mean: 5.848859378154714 usec\nrounds: 64"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 176625.70132409767,
            "unit": "iter/sec",
            "range": "stddev: 0.000001306957694900854",
            "extra": "mean: 5.6616901872341865 usec\nrounds: 46725"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 180774.03857091634,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012627449897948223",
            "extra": "mean: 5.5317677687867075 usec\nrounds: 69926"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 175617.15400108657,
            "unit": "iter/sec",
            "range": "stddev: 0.000001113550186867263",
            "extra": "mean: 5.694204564969848 usec\nrounds: 69440"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 229129.99417958347,
            "unit": "iter/sec",
            "range": "stddev: 0.000001236797849303026",
            "extra": "mean: 4.364334768045416 usec\nrounds: 69926"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 176922.68362036764,
            "unit": "iter/sec",
            "range": "stddev: 0.000001223677836712491",
            "extra": "mean: 5.652186477940573 usec\nrounds: 71424"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 176415.80531810518,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012012875014965023",
            "extra": "mean: 5.668426353278519 usec\nrounds: 71938"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 181059.0099534021,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011907892407620025",
            "extra": "mean: 5.523061239854139 usec\nrounds: 78119"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 177469.0877738604,
            "unit": "iter/sec",
            "range": "stddev: 0.000001269130586466422",
            "extra": "mean: 5.634784133641616 usec\nrounds: 74069"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 182687.04125359564,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013551967125338951",
            "extra": "mean: 5.473842003997741 usec\nrounds: 76331"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 184563.482821493,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013657577891324563",
            "extra": "mean: 5.418189907952619 usec\nrounds: 72988"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 224458.8325407357,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012007034691673921",
            "extra": "mean: 4.4551599448353905 usec\nrounds: 70418"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 2291618.1010017097,
            "unit": "iter/sec",
            "range": "stddev: 7.388451567404832e-8",
            "extra": "mean: 436.3728841043982 nsec\nrounds: 86949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 4536.891533847635,
            "unit": "iter/sec",
            "range": "stddev: 0.000011853586329062669",
            "extra": "mean: 220.41523200179364 usec\nrounds: 3306"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 2161205.2014483474,
            "unit": "iter/sec",
            "range": "stddev: 7.989568441985592e-8",
            "extra": "mean: 462.7047905169283 nsec\nrounds: 112347"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 4627.86213839464,
            "unit": "iter/sec",
            "range": "stddev: 0.000017349401401124456",
            "extra": "mean: 216.08249556606071 usec\nrounds: 3158"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 2259077.374629918,
            "unit": "iter/sec",
            "range": "stddev: 7.099210982352911e-8",
            "extra": "mean: 442.65858762959397 nsec\nrounds: 109879"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 4566.572903191502,
            "unit": "iter/sec",
            "range": "stddev: 0.000015204251106105089",
            "extra": "mean: 218.9825983728666 usec\nrounds: 3441"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 4615.936159236538,
            "unit": "iter/sec",
            "range": "stddev: 0.000013134790115741075",
            "extra": "mean: 216.64077784069636 usec\nrounds: 3502"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 2205524.142222151,
            "unit": "iter/sec",
            "range": "stddev: 6.706442987121401e-8",
            "extra": "mean: 453.406961572588 nsec\nrounds: 123442"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 4590.1858027973085,
            "unit": "iter/sec",
            "range": "stddev: 0.00000913244899574999",
            "extra": "mean: 217.8561049512613 usec\nrounds: 3554"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 2099940.9358197288,
            "unit": "iter/sec",
            "range": "stddev: 5.450267743712024e-8",
            "extra": "mean: 476.203869805044 nsec\nrounds: 101000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 4605.836985774113,
            "unit": "iter/sec",
            "range": "stddev: 0.000009996606866011965",
            "extra": "mean: 217.11580394370557 usec\nrounds: 3499"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 2268794.901491464,
            "unit": "iter/sec",
            "range": "stddev: 6.726445730825483e-8",
            "extra": "mean: 440.76262660081306 nsec\nrounds: 109891"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 2125752.9929549443,
            "unit": "iter/sec",
            "range": "stddev: 6.94162916274992e-8",
            "extra": "mean: 470.4215415965404 nsec\nrounds: 111099"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 4444.538341297339,
            "unit": "iter/sec",
            "range": "stddev: 0.000013672186091740518",
            "extra": "mean: 224.9952465722469 usec\nrounds: 73"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 2288170.0312985773,
            "unit": "iter/sec",
            "range": "stddev: 7.181973883053218e-8",
            "extra": "mean: 437.03045941573015 nsec\nrounds: 109879"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 4540.056600262083,
            "unit": "iter/sec",
            "range": "stddev: 0.000031577889545191785",
            "extra": "mean: 220.26157117562656 usec\nrounds: 3386"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 2150714.504142664,
            "unit": "iter/sec",
            "range": "stddev: 6.348477852995715e-8",
            "extra": "mean: 464.96175948670924 nsec\nrounds: 104167"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 4544.2740704404105,
            "unit": "iter/sec",
            "range": "stddev: 0.000012822737461025095",
            "extra": "mean: 220.05714983275305 usec\nrounds: 3584"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 4651.238897809717,
            "unit": "iter/sec",
            "range": "stddev: 0.000013667316796237363",
            "extra": "mean: 214.99648200631086 usec\nrounds: 3529"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 2163331.431955295,
            "unit": "iter/sec",
            "range": "stddev: 7.38056485041065e-8",
            "extra": "mean: 462.25002106873336 nsec\nrounds: 102031"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 4698.924221908299,
            "unit": "iter/sec",
            "range": "stddev: 0.000015500293022164683",
            "extra": "mean: 212.81466837400623 usec\nrounds: 3516"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 2148055.202299409,
            "unit": "iter/sec",
            "range": "stddev: 6.689318286396886e-8",
            "extra": "mean: 465.537384201995 nsec\nrounds: 103093"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 4586.909569488493,
            "unit": "iter/sec",
            "range": "stddev: 0.000008057749543974008",
            "extra": "mean: 218.0117102486314 usec\nrounds: 3503"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 2087501.3235690012,
            "unit": "iter/sec",
            "range": "stddev: 8.759793421096653e-8",
            "extra": "mean: 479.04161243376365 nsec\nrounds: 120482"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 2185858.992165866,
            "unit": "iter/sec",
            "range": "stddev: 8.334836135285415e-8",
            "extra": "mean: 457.486051746239 nsec\nrounds: 128206"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 4668.4939097595525,
            "unit": "iter/sec",
            "range": "stddev: 0.000019355418637748714",
            "extra": "mean: 214.2018431060788 usec\nrounds: 4417"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 2214103.3850945896,
            "unit": "iter/sec",
            "range": "stddev: 9.160729857110621e-8",
            "extra": "mean: 451.65009309493445 nsec\nrounds: 102041"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 4642.420494398999,
            "unit": "iter/sec",
            "range": "stddev: 0.00001749878098557639",
            "extra": "mean: 215.4048736443592 usec\nrounds: 3688"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 2258708.9247987946,
            "unit": "iter/sec",
            "range": "stddev: 9.258804934509116e-8",
            "extra": "mean: 442.7307959076325 nsec\nrounds: 105264"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 4756.74196128405,
            "unit": "iter/sec",
            "range": "stddev: 0.00002212472769314803",
            "extra": "mean: 210.22792662271232 usec\nrounds: 4143"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 4787.603009311095,
            "unit": "iter/sec",
            "range": "stddev: 0.000021176324412947174",
            "extra": "mean: 208.8727904245957 usec\nrounds: 3655"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 2123028.6025015363,
            "unit": "iter/sec",
            "range": "stddev: 4.9947994067510613e-8",
            "extra": "mean: 471.0252131420745 nsec\nrounds: 104156"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 4679.732913785325,
            "unit": "iter/sec",
            "range": "stddev: 0.00001540280224565407",
            "extra": "mean: 213.68740875237765 usec\nrounds: 3496"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 2198184.5754048843,
            "unit": "iter/sec",
            "range": "stddev: 8.619080103343162e-8",
            "extra": "mean: 454.9208520471054 nsec\nrounds: 103093"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 4927.615498948661,
            "unit": "iter/sec",
            "range": "stddev: 0.000024510065850854725",
            "extra": "mean: 202.93791189944844 usec\nrounds: 3496"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 2166268.266334633,
            "unit": "iter/sec",
            "range": "stddev: 7.034261497096947e-8",
            "extra": "mean: 461.62334348910696 nsec\nrounds: 106383"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 14021.235279968221,
            "unit": "iter/sec",
            "range": "stddev: 0.000004669633319874486",
            "extra": "mean: 71.32039225022308 usec\nrounds: 5471"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 13787.007318961261,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054642237327022405",
            "extra": "mean: 72.53205694789912 usec\nrounds: 8780"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 10710.786121016296,
            "unit": "iter/sec",
            "range": "stddev: 0.00000766980137188522",
            "extra": "mean: 93.36382863978939 usec\nrounds: 6676"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 72.01807660500461,
            "unit": "iter/sec",
            "range": "stddev: 0.029678842121361796",
            "extra": "mean: 13.885402764706841 msec\nrounds: 221"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 129878.91264374038,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013283296962074686",
            "extra": "mean: 7.699479304565889 usec\nrounds: 32785"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 130479.20218049895,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014139429751532404",
            "extra": "mean: 7.664056671780119 usec\nrounds: 52354"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 76.82333100301967,
            "unit": "iter/sec",
            "range": "stddev: 0.029786143725267385",
            "extra": "mean: 13.016878947369431 msec\nrounds: 285"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 76.66876930643512,
            "unit": "iter/sec",
            "range": "stddev: 0.029728002966822733",
            "extra": "mean: 13.043120543687479 msec\nrounds: 309"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 62724.66906911535,
            "unit": "iter/sec",
            "range": "stddev: 0.000002478081481482871",
            "extra": "mean: 15.942690728238286 usec\nrounds: 26737"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 63515.01349230937,
            "unit": "iter/sec",
            "range": "stddev: 0.000002875463126282822",
            "extra": "mean: 15.744309022638934 usec\nrounds: 35211"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 63.802996762981074,
            "unit": "iter/sec",
            "range": "stddev: 0.03104685917601993",
            "extra": "mean: 15.673244999993583 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 60.98074023599221,
            "unit": "iter/sec",
            "range": "stddev: 0.03081752515360949",
            "extra": "mean: 16.398620222221858 msec\nrounds: 162"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 19181.491405017936,
            "unit": "iter/sec",
            "range": "stddev: 0.000006650776077464726",
            "extra": "mean: 52.13358955698289 usec\nrounds: 6588"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 1437.2098121818235,
            "unit": "iter/sec",
            "range": "stddev: 0.00005701769000223965",
            "extra": "mean: 695.7926334234411 usec\nrounds: 1113"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 1442.1350916734114,
            "unit": "iter/sec",
            "range": "stddev: 0.00005295661158502769",
            "extra": "mean: 693.4163143063312 usec\nrounds: 1419"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 21872.19303064199,
            "unit": "iter/sec",
            "range": "stddev: 0.00000523569622562919",
            "extra": "mean: 45.72015246020569 usec\nrounds: 8881"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 33.18139723619627,
            "unit": "iter/sec",
            "range": "stddev: 0.035620535591648725",
            "extra": "mean: 30.137368625005934 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 4.0408750154076305,
            "unit": "iter/sec",
            "range": "stddev: 0.04490657406187852",
            "extra": "mean: 247.47115320000148 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 4.016197010887956,
            "unit": "iter/sec",
            "range": "stddev: 0.043831089564333896",
            "extra": "mean: 248.99176940000416 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 35.06194651211798,
            "unit": "iter/sec",
            "range": "stddev: 0.03406601163596761",
            "extra": "mean: 28.520949333328762 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 18977.59344681647,
            "unit": "iter/sec",
            "range": "stddev: 0.000005573907388742871",
            "extra": "mean: 52.69372024447873 usec\nrounds: 10309"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 1423.0945182575224,
            "unit": "iter/sec",
            "range": "stddev: 0.000039419731691109716",
            "extra": "mean: 702.6940144667471 usec\nrounds: 1106"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 1421.3705743598425,
            "unit": "iter/sec",
            "range": "stddev: 0.000034759841539837995",
            "extra": "mean: 703.5462940059671 usec\nrounds: 1051"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 22047.241637325587,
            "unit": "iter/sec",
            "range": "stddev: 0.000005021234579581393",
            "extra": "mean: 45.35714791219133 usec\nrounds: 9242"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 33.91743516067798,
            "unit": "iter/sec",
            "range": "stddev: 0.03299654216109656",
            "extra": "mean: 29.48336144117835 msec\nrounds: 34"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 4.341196596559414,
            "unit": "iter/sec",
            "range": "stddev: 0.005309789405753523",
            "extra": "mean: 230.35123560000557 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 4.221560978487403,
            "unit": "iter/sec",
            "range": "stddev: 0.003919886644202557",
            "extra": "mean: 236.87920300000087 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 38.01669818839139,
            "unit": "iter/sec",
            "range": "stddev: 0.031400261337619445",
            "extra": "mean: 26.30423071052908 msec\nrounds: 38"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 59792.57182045147,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023048724664687095",
            "extra": "mean: 16.724485492994962 usec\nrounds: 25574"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 60072.060897018055,
            "unit": "iter/sec",
            "range": "stddev: 0.000002432468965064105",
            "extra": "mean: 16.646673762604998 usec\nrounds: 34245"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 61234.74463176389,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026421550456967496",
            "extra": "mean: 16.330598029166545 usec\nrounds: 32572"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 60916.17210381396,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024312175563458125",
            "extra": "mean: 16.41600194929829 usec\nrounds: 29239"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 60.685118120704665,
            "unit": "iter/sec",
            "range": "stddev: 0.031419373751628225",
            "extra": "mean: 16.478504631250246 msec\nrounds: 160"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 61.13648377267865,
            "unit": "iter/sec",
            "range": "stddev: 0.031052262473925424",
            "extra": "mean: 16.35684518132021 msec\nrounds: 182"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 61.93979634694849,
            "unit": "iter/sec",
            "range": "stddev: 0.03070451104728352",
            "extra": "mean: 16.144709201151027 msec\nrounds: 174"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 60.888774566827934,
            "unit": "iter/sec",
            "range": "stddev: 0.031327923070475654",
            "extra": "mean: 16.423388500001074 msec\nrounds: 170"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 74813.03468099,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021976005810821887",
            "extra": "mean: 13.366654678079785 usec\nrounds: 26665"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 59084.44768869373,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022286989316270864",
            "extra": "mean: 16.924927609865055 usec\nrounds: 18939"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 59212.917929657,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024105573958966055",
            "extra": "mean: 16.888206745493733 usec\nrounds: 25379"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 77025.77185300055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021695551125970877",
            "extra": "mean: 12.98266769605951 usec\nrounds: 27854"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 63.146636992699825,
            "unit": "iter/sec",
            "range": "stddev: 0.03204586370131813",
            "extra": "mean: 15.836156090396496 msec\nrounds: 177"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 60.167317246991836,
            "unit": "iter/sec",
            "range": "stddev: 0.03302708316544717",
            "extra": "mean: 16.620318899958875 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 58.795357961842505,
            "unit": "iter/sec",
            "range": "stddev: 0.03220125330501113",
            "extra": "mean: 17.008145450002843 msec\nrounds: 160"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 67.95927980534671,
            "unit": "iter/sec",
            "range": "stddev: 0.032551526798115994",
            "extra": "mean: 14.71469389999811 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 472834.4018497948,
            "unit": "iter/sec",
            "range": "stddev: 8.514793505962296e-7",
            "extra": "mean: 2.114905337022558 usec\nrounds: 44051"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 1569.8363697729114,
            "unit": "iter/sec",
            "range": "stddev: 0.000054707835761799776",
            "extra": "mean: 637.0090662026498 usec\nrounds: 1148"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 1596.890962020151,
            "unit": "iter/sec",
            "range": "stddev: 0.00005539204550236388",
            "extra": "mean: 626.2168324473122 usec\nrounds: 1319"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 485539.7521144812,
            "unit": "iter/sec",
            "range": "stddev: 7.718611817737798e-7",
            "extra": "mean: 2.0595636003954185 usec\nrounds: 74622"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 2584.115663750902,
            "unit": "iter/sec",
            "range": "stddev: 0.000029906084305291455",
            "extra": "mean: 386.97958223297076 usec\nrounds: 2195"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 4.618028534764766,
            "unit": "iter/sec",
            "range": "stddev: 0.002510657367585279",
            "extra": "mean: 216.54262040001413 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 4.735847780122593,
            "unit": "iter/sec",
            "range": "stddev: 0.0032736512266804416",
            "extra": "mean: 211.1554354000191 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 2654.4316004911448,
            "unit": "iter/sec",
            "range": "stddev: 0.000036092993903584305",
            "extra": "mean: 376.728486737037 usec\nrounds: 2149"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 349351.0766933464,
            "unit": "iter/sec",
            "range": "stddev: 9.964487429430034e-7",
            "extra": "mean: 2.862450030110486 usec\nrounds: 48539"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 1966.8900897964877,
            "unit": "iter/sec",
            "range": "stddev: 0.000039128579821798534",
            "extra": "mean: 508.41681758814957 usec\nrounds: 1376"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 1703.0559544052073,
            "unit": "iter/sec",
            "range": "stddev: 0.00004231745830834854",
            "extra": "mean: 587.179767883346 usec\nrounds: 1258"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 358174.3182824601,
            "unit": "iter/sec",
            "range": "stddev: 9.951839234812829e-7",
            "extra": "mean: 2.7919366324064288 usec\nrounds: 48779"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 1665.8948347614669,
            "unit": "iter/sec",
            "range": "stddev: 0.00004982374089311938",
            "extra": "mean: 600.2779882219794 usec\nrounds: 1783"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 5.833553706520274,
            "unit": "iter/sec",
            "range": "stddev: 0.002733749922860989",
            "extra": "mean: 171.42209539997566 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 5.1198661160741965,
            "unit": "iter/sec",
            "range": "stddev: 0.002235769429079192",
            "extra": "mean: 195.31760740001118 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 1658.4082551219985,
            "unit": "iter/sec",
            "range": "stddev: 0.00005028272319238545",
            "extra": "mean: 602.9878330088488 usec\nrounds: 1539"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 18969.59790735752,
            "unit": "iter/sec",
            "range": "stddev: 0.00000604027395370716",
            "extra": "mean: 52.7159302418393 usec\nrounds: 7225"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 1445.9122580077947,
            "unit": "iter/sec",
            "range": "stddev: 0.00005246694990722444",
            "extra": "mean: 691.604898196118 usec\nrounds: 1110"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 1462.3436079331318,
            "unit": "iter/sec",
            "range": "stddev: 0.000060415740517430494",
            "extra": "mean: 683.8338093557877 usec\nrounds: 1133"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 21724.530085375103,
            "unit": "iter/sec",
            "range": "stddev: 0.000004727228863226026",
            "extra": "mean: 46.030915102425965 usec\nrounds: 9588"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 35.370624372597995,
            "unit": "iter/sec",
            "range": "stddev: 0.031458920863858396",
            "extra": "mean: 28.27204828124863 msec\nrounds: 32"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 3.866832207300324,
            "unit": "iter/sec",
            "range": "stddev: 0.046487671251232446",
            "extra": "mean: 258.6096179999913 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 3.9266033829817837,
            "unit": "iter/sec",
            "range": "stddev: 0.04513601988404719",
            "extra": "mean: 254.67303480002101 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 33.53257616488531,
            "unit": "iter/sec",
            "range": "stddev: 0.03653259040037761",
            "extra": "mean: 29.82174692104871 msec\nrounds: 38"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 18153.074935805227,
            "unit": "iter/sec",
            "range": "stddev: 0.000004597526053882059",
            "extra": "mean: 55.08708599156357 usec\nrounds: 7396"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 1426.0728719242584,
            "unit": "iter/sec",
            "range": "stddev: 0.00005018854844214942",
            "extra": "mean: 701.2264377841078 usec\nrounds: 1101"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 1459.006936539002,
            "unit": "iter/sec",
            "range": "stddev: 0.000058570366682348415",
            "extra": "mean: 685.3977009678651 usec\nrounds: 1137"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 21668.2109415702,
            "unit": "iter/sec",
            "range": "stddev: 0.00000432416015309682",
            "extra": "mean: 46.15055680861552 usec\nrounds: 8071"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 32.315317054780245,
            "unit": "iter/sec",
            "range": "stddev: 0.03498172129040365",
            "extra": "mean: 30.945077787874432 msec\nrounds: 33"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 3.955071564061469,
            "unit": "iter/sec",
            "range": "stddev: 0.0497427972929049",
            "extra": "mean: 252.83992560000567 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 4.2802919458383535,
            "unit": "iter/sec",
            "range": "stddev: 0.0035396526719649038",
            "extra": "mean: 233.62892360000842 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 37.299247511533196,
            "unit": "iter/sec",
            "range": "stddev: 0.03324613798115526",
            "extra": "mean: 26.810192342105363 msec\nrounds: 38"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 61831.47356289422,
            "unit": "iter/sec",
            "range": "stddev: 0.000002412965609168877",
            "extra": "mean: 16.172993176085512 usec\nrounds: 32678"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 60597.73765609332,
            "unit": "iter/sec",
            "range": "stddev: 0.000002765260327207885",
            "extra": "mean: 16.50226623434755 usec\nrounds: 27472"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 61028.78998541823,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026425329941323054",
            "extra": "mean: 16.385709109404473 usec\nrounds: 29585"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 62247.16520175283,
            "unit": "iter/sec",
            "range": "stddev: 0.000002502293172110487",
            "extra": "mean: 16.064988610466727 usec\nrounds: 29939"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 56.643220844450695,
            "unit": "iter/sec",
            "range": "stddev: 0.03389627892630754",
            "extra": "mean: 17.65436331288653 msec\nrounds: 163"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 57.766392535291146,
            "unit": "iter/sec",
            "range": "stddev: 0.03300351546646127",
            "extra": "mean: 17.311103499999092 msec\nrounds: 160"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 59.135566635664524,
            "unit": "iter/sec",
            "range": "stddev: 0.03273804795100177",
            "extra": "mean: 16.910297083327553 msec\nrounds: 156"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 58.8826181190491,
            "unit": "iter/sec",
            "range": "stddev: 0.0327726136118137",
            "extra": "mean: 16.982940499999444 msec\nrounds: 160"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 73757.08536764675,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022059012719215862",
            "extra": "mean: 13.558019477253449 usec\nrounds: 27776"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 59108.10445717987,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026010825078486615",
            "extra": "mean: 16.91815376560481 usec\nrounds: 27854"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 59669.09105625808,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025282218969074328",
            "extra": "mean: 16.75909557692383 usec\nrounds: 26952"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 76981.90645415547,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021914352273964346",
            "extra": "mean: 12.990065407064495 usec\nrounds: 24875"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 62.61967122051952,
            "unit": "iter/sec",
            "range": "stddev: 0.032930504376224294",
            "extra": "mean: 15.9694227150831 msec\nrounds: 179"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 56.26657304558413,
            "unit": "iter/sec",
            "range": "stddev: 0.03388273946095673",
            "extra": "mean: 17.772541419749416 msec\nrounds: 162"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 58.066127567101155,
            "unit": "iter/sec",
            "range": "stddev: 0.03303230970536895",
            "extra": "mean: 17.22174427499752 msec\nrounds: 160"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 58.47494345754457,
            "unit": "iter/sec",
            "range": "stddev: 0.03678373548160874",
            "extra": "mean: 17.101341888873222 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 471549.1064154268,
            "unit": "iter/sec",
            "range": "stddev: 6.634690221867703e-7",
            "extra": "mean: 2.120669907746611 usec\nrounds: 91735"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 1563.453968586613,
            "unit": "iter/sec",
            "range": "stddev: 0.000054418903531816687",
            "extra": "mean: 639.6094928870953 usec\nrounds: 1195"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 1582.788195135969,
            "unit": "iter/sec",
            "range": "stddev: 0.000055198667578858075",
            "extra": "mean: 631.7964735098969 usec\nrounds: 1208"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 472643.14745145367,
            "unit": "iter/sec",
            "range": "stddev: 7.541942365367591e-7",
            "extra": "mean: 2.115761130552966 usec\nrounds: 57140"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 2625.8734176620496,
            "unit": "iter/sec",
            "range": "stddev: 0.00003688142049564153",
            "extra": "mean: 380.825668622805 usec\nrounds: 2731"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 4.734881041640054,
            "unit": "iter/sec",
            "range": "stddev: 0.004674356422068549",
            "extra": "mean: 211.1985477999724 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 4.7620038297256055,
            "unit": "iter/sec",
            "range": "stddev: 0.0024688921475824193",
            "extra": "mean: 209.99563119999038 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 2552.536899425901,
            "unit": "iter/sec",
            "range": "stddev: 0.000022113882260368047",
            "extra": "mean: 391.7671083324645 usec\nrounds: 2160"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 353002.47363282804,
            "unit": "iter/sec",
            "range": "stddev: 9.179886729679555e-7",
            "extra": "mean: 2.832841338783761 usec\nrounds: 64931"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 1935.2636080767409,
            "unit": "iter/sec",
            "range": "stddev: 0.000029114760216404936",
            "extra": "mean: 516.7254713138522 usec\nrounds: 1377"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 1745.659282194868,
            "unit": "iter/sec",
            "range": "stddev: 0.000056031333253344705",
            "extra": "mean: 572.8494730900013 usec\nrounds: 1245"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 353969.4780287552,
            "unit": "iter/sec",
            "range": "stddev: 8.938909073805903e-7",
            "extra": "mean: 2.8251023381139193 usec\nrounds: 91735"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 1664.2813984227334,
            "unit": "iter/sec",
            "range": "stddev: 0.00005165160554712055",
            "extra": "mean: 600.8599272621303 usec\nrounds: 1416"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 6.008294384306889,
            "unit": "iter/sec",
            "range": "stddev: 0.0032502135561005762",
            "extra": "mean: 166.43658516665027 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 5.064259738533437,
            "unit": "iter/sec",
            "range": "stddev: 0.0018584306147793645",
            "extra": "mean: 197.46222579997266 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 1617.673896609426,
            "unit": "iter/sec",
            "range": "stddev: 0.00003827382597122095",
            "extra": "mean: 618.1715623253589 usec\nrounds: 1444"
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
        "date": 1669515420004,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 33.94927564249931,
            "unit": "iter/sec",
            "range": "stddev: 0.0001037840820886551",
            "extra": "mean: 29.455709468750868 msec\nrounds: 32"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 2218496.088376788,
            "unit": "iter/sec",
            "range": "stddev: 4.513843204354325e-8",
            "extra": "mean: 450.7558094147889 nsec\nrounds: 89286"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 46.03134422103214,
            "unit": "iter/sec",
            "range": "stddev: 0.00022060900149062886",
            "extra": "mean: 21.72432756250231 msec\nrounds: 32"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 1937.810030599612,
            "unit": "iter/sec",
            "range": "stddev: 0.000045190179196400576",
            "extra": "mean: 516.0464566748952 usec\nrounds: 1708"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 16252.866385697818,
            "unit": "iter/sec",
            "range": "stddev: 0.000001913551180674996",
            "extra": "mean: 61.52760850110593 usec\nrounds: 12516"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 16288.945147070559,
            "unit": "iter/sec",
            "range": "stddev: 0.00000151487332446318",
            "extra": "mean: 61.39132957789119 usec\nrounds: 4615"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 16269.84737574864,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016102810621804824",
            "extra": "mean: 61.463391567555256 usec\nrounds: 12547"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 16303.33903963048,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015636778633503644",
            "extra": "mean: 61.337128398617004 usec\nrounds: 12469"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 16280.75860429834,
            "unit": "iter/sec",
            "range": "stddev: 0.000001553717049158042",
            "extra": "mean: 61.422199315453675 usec\nrounds: 12563"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 15880.795943123454,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017544484776482822",
            "extra": "mean: 62.96913602954581 usec\nrounds: 12240"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 15702.68268524175,
            "unit": "iter/sec",
            "range": "stddev: 0.000001724023424372236",
            "extra": "mean: 63.68338582934337 usec\nrounds: 12166"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 15907.507977129091,
            "unit": "iter/sec",
            "range": "stddev: 0.000001597157808838709",
            "extra": "mean: 62.863397675974326 usec\nrounds: 12563"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 15779.31514997395,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017394547581493563",
            "extra": "mean: 63.374106575319324 usec\nrounds: 12151"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 15938.396896646074,
            "unit": "iter/sec",
            "range": "stddev: 0.000001561824102406714",
            "extra": "mean: 62.74156720306234 usec\nrounds: 11495"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 15194.078627030847,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025161244125353887",
            "extra": "mean: 65.81511288357834 usec\nrounds: 13793"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 15225.734473785527,
            "unit": "iter/sec",
            "range": "stddev: 0.000002078254309964596",
            "extra": "mean: 65.6782765863756 usec\nrounds: 13851"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 15126.514854484916,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018134971102361966",
            "extra": "mean: 66.10908128011432 usec\nrounds: 13718"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 13228228.92562203,
            "unit": "iter/sec",
            "range": "stddev: 3.365232756662983e-9",
            "extra": "mean: 75.59590974892924 nsec\nrounds: 123457"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 12735517.91461347,
            "unit": "iter/sec",
            "range": "stddev: 7.2594854640914146e-9",
            "extra": "mean: 78.52056011416579 nsec\nrounds: 123457"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 11498605.877777886,
            "unit": "iter/sec",
            "range": "stddev: 3.5332621907299996e-9",
            "extra": "mean: 86.96706458414388 nsec\nrounds: 111112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 13236825.823542945,
            "unit": "iter/sec",
            "range": "stddev: 3.130283727208971e-9",
            "extra": "mean: 75.54681260674985 nsec\nrounds: 129871"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 13183126.215145193,
            "unit": "iter/sec",
            "range": "stddev: 4.6409252977396605e-9",
            "extra": "mean: 75.85454191057752 nsec\nrounds: 131579"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 13220274.992754782,
            "unit": "iter/sec",
            "range": "stddev: 2.896318955167044e-9",
            "extra": "mean: 75.641391767365 nsec\nrounds: 133334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 60314.1042298695,
            "unit": "iter/sec",
            "range": "stddev: 5.556335323841856e-7",
            "extra": "mean: 16.579869879005308 usec\nrounds: 16892"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 4869.803714899724,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035463154643697337",
            "extra": "mean: 205.34708553866045 usec\nrounds: 3402"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 60141.04903978975,
            "unit": "iter/sec",
            "range": "stddev: 6.070296753010812e-7",
            "extra": "mean: 16.627578267522285 usec\nrounds: 21599"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 4877.290351061481,
            "unit": "iter/sec",
            "range": "stddev: 0.000003566055531536941",
            "extra": "mean: 205.03187795296265 usec\nrounds: 3810"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 60453.49472774885,
            "unit": "iter/sec",
            "range": "stddev: 6.333619385507194e-7",
            "extra": "mean: 16.541640884509334 usec\nrounds: 22884"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 4845.489723871876,
            "unit": "iter/sec",
            "range": "stddev: 0.000004611475470015837",
            "extra": "mean: 206.37748854844995 usec\nrounds: 131"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 4874.844108224323,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035536128698996656",
            "extra": "mean: 205.13476488671822 usec\nrounds: 3896"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 72970.26163331431,
            "unit": "iter/sec",
            "range": "stddev: 5.30060804233475e-7",
            "extra": "mean: 13.704212889151183 usec\nrounds: 26596"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 4862.012253796204,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036593449728021444",
            "extra": "mean: 205.67615789516188 usec\nrounds: 3800"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 72177.11690473654,
            "unit": "iter/sec",
            "range": "stddev: 4.6254588853099657e-7",
            "extra": "mean: 13.85480666011995 usec\nrounds: 26456"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 4853.77293112908,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034819424392985613",
            "extra": "mean: 206.02529500023007 usec\nrounds: 3800"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 72367.60815832131,
            "unit": "iter/sec",
            "range": "stddev: 5.150940313612583e-7",
            "extra": "mean: 13.81833703571165 usec\nrounds: 26110"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 60273.43665992733,
            "unit": "iter/sec",
            "range": "stddev: 6.211226839435668e-7",
            "extra": "mean: 16.591056614909235 usec\nrounds: 22026"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 4846.173339738963,
            "unit": "iter/sec",
            "range": "stddev: 0.000005462755197746806",
            "extra": "mean: 206.3483763157891 usec\nrounds: 3800"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 59746.89391285727,
            "unit": "iter/sec",
            "range": "stddev: 6.274412636837158e-7",
            "extra": "mean: 16.73727175606035 usec\nrounds: 22936"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 4845.344265614403,
            "unit": "iter/sec",
            "range": "stddev: 0.000006290538585302417",
            "extra": "mean: 206.38368404421252 usec\nrounds: 3798"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 59822.288913008975,
            "unit": "iter/sec",
            "range": "stddev: 5.954416200541043e-7",
            "extra": "mean: 16.716177501234654 usec\nrounds: 22321"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 4855.93418314279,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033888089175521385",
            "extra": "mean: 205.9335984147944 usec\nrounds: 3785"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 4851.486108618908,
            "unit": "iter/sec",
            "range": "stddev: 0.000005323806261948598",
            "extra": "mean: 206.12240818817355 usec\nrounds: 3981"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 72362.5684148941,
            "unit": "iter/sec",
            "range": "stddev: 4.429719806513876e-7",
            "extra": "mean: 13.819299423791234 usec\nrounds: 26738"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 4864.351066228185,
            "unit": "iter/sec",
            "range": "stddev: 0.000003563061503483219",
            "extra": "mean: 205.57726742683465 usec\nrounds: 3773"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 72846.87415079495,
            "unit": "iter/sec",
            "range": "stddev: 5.204256867887454e-7",
            "extra": "mean: 13.727424980926067 usec\nrounds: 23474"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 4834.450040386308,
            "unit": "iter/sec",
            "range": "stddev: 0.000003570599987736556",
            "extra": "mean: 206.84876079929307 usec\nrounds: 3704"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 73064.03961948224,
            "unit": "iter/sec",
            "range": "stddev: 5.620853549735515e-7",
            "extra": "mean: 13.686623477267386 usec\nrounds: 26596"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 60724.20752591482,
            "unit": "iter/sec",
            "range": "stddev: 8.763845428208028e-7",
            "extra": "mean: 16.467897083271733 usec\nrounds: 22523"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 4849.926022037173,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035553418968591692",
            "extra": "mean: 206.18871204554122 usec\nrounds: 3761"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 60437.82702077351,
            "unit": "iter/sec",
            "range": "stddev: 5.856762443102489e-7",
            "extra": "mean: 16.545929086038832 usec\nrounds: 23042"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 4859.421817688176,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034074447745815544",
            "extra": "mean: 205.78579870552184 usec\nrounds: 3706"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 60678.45208327048,
            "unit": "iter/sec",
            "range": "stddev: 5.709617073094544e-7",
            "extra": "mean: 16.480314933342008 usec\nrounds: 22989"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 4821.034099452729,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042183810378436896",
            "extra": "mean: 207.42437812533154 usec\nrounds: 320"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 4851.802124682996,
            "unit": "iter/sec",
            "range": "stddev: 0.000003616666238483893",
            "extra": "mean: 206.1089826628775 usec\nrounds: 3980"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 72602.5761758235,
            "unit": "iter/sec",
            "range": "stddev: 6.276488056753105e-7",
            "extra": "mean: 13.773615933107864 usec\nrounds: 16130"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 4873.983826361734,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033310520225963463",
            "extra": "mean: 205.1709721709246 usec\nrounds: 3845"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 72366.50017373876,
            "unit": "iter/sec",
            "range": "stddev: 5.652600753085461e-7",
            "extra": "mean: 13.818548604660753 usec\nrounds: 25975"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 4851.824769316133,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032721566907456296",
            "extra": "mean: 206.10802070268304 usec\nrounds: 3333"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 72326.56166454405,
            "unit": "iter/sec",
            "range": "stddev: 7.452747613583487e-7",
            "extra": "mean: 13.826179165519774 usec\nrounds: 26456"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 61350.22379272366,
            "unit": "iter/sec",
            "range": "stddev: 5.404465695458855e-7",
            "extra": "mean: 16.299859041730233 usec\nrounds: 21368"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 4874.685006661698,
            "unit": "iter/sec",
            "range": "stddev: 0.000003491730548399328",
            "extra": "mean: 205.14146014222652 usec\nrounds: 3801"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 61254.57283784251,
            "unit": "iter/sec",
            "range": "stddev: 5.125818827784043e-7",
            "extra": "mean: 16.325311787697412 usec\nrounds: 22727"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 4888.969587054698,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033554091369860025",
            "extra": "mean: 204.54207828329695 usec\nrounds: 3845"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 61207.79476631013,
            "unit": "iter/sec",
            "range": "stddev: 6.675498997755991e-7",
            "extra": "mean: 16.337788411067176 usec\nrounds: 22832"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 4838.856849448819,
            "unit": "iter/sec",
            "range": "stddev: 0.000003282224950235837",
            "extra": "mean: 206.6603809769465 usec\nrounds: 3806"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 4880.776213391151,
            "unit": "iter/sec",
            "range": "stddev: 0.000003436244541346392",
            "extra": "mean: 204.88544368339365 usec\nrounds: 3649"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 73093.67473615386,
            "unit": "iter/sec",
            "range": "stddev: 4.810034019488351e-7",
            "extra": "mean: 13.68107436942661 usec\nrounds: 27323"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 4887.163228843768,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032526520754749577",
            "extra": "mean: 204.61767965883672 usec\nrounds: 3746"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 73153.38906927104,
            "unit": "iter/sec",
            "range": "stddev: 6.282216793984998e-7",
            "extra": "mean: 13.669906653990717 usec\nrounds: 26525"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 4868.336736637003,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033551665321880208",
            "extra": "mean: 205.40896287523236 usec\nrounds: 3798"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 73167.80452029081,
            "unit": "iter/sec",
            "range": "stddev: 5.021176872199655e-7",
            "extra": "mean: 13.66721342202746 usec\nrounds: 26881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 60927.56516841211,
            "unit": "iter/sec",
            "range": "stddev: 5.124359718503263e-7",
            "extra": "mean: 16.412932262037117 usec\nrounds: 23148"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 4865.117486901379,
            "unit": "iter/sec",
            "range": "stddev: 0.000003388598939502829",
            "extra": "mean: 205.54488204906755 usec\nrounds: 3866"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 61033.18564915627,
            "unit": "iter/sec",
            "range": "stddev: 6.580671888931529e-7",
            "extra": "mean: 16.384528996215423 usec\nrounds: 23641"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 4886.459958181642,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032745958969778524",
            "extra": "mean: 204.64712871035613 usec\nrounds: 3807"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 61565.72965626633,
            "unit": "iter/sec",
            "range": "stddev: 6.472493567837572e-7",
            "extra": "mean: 16.24280270181476 usec\nrounds: 22727"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 4858.626370001248,
            "unit": "iter/sec",
            "range": "stddev: 0.000004471877322534612",
            "extra": "mean: 205.81948967599732 usec\nrounds: 339"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 4871.7182869084145,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036247089042660165",
            "extra": "mean: 205.2663846937255 usec\nrounds: 3920"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 72827.74405719999,
            "unit": "iter/sec",
            "range": "stddev: 4.4029167255112316e-7",
            "extra": "mean: 13.731030844709199 usec\nrounds: 26455"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 4880.233015141277,
            "unit": "iter/sec",
            "range": "stddev: 0.000003616974525636658",
            "extra": "mean: 204.9082486220284 usec\nrounds: 3809"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 72077.79292026993,
            "unit": "iter/sec",
            "range": "stddev: 4.854238436180267e-7",
            "extra": "mean: 13.873898734748538 usec\nrounds: 17153"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 4859.474185190572,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034494582864044322",
            "extra": "mean: 205.7835810811666 usec\nrounds: 3552"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 71723.74720727521,
            "unit": "iter/sec",
            "range": "stddev: 5.261412595371413e-7",
            "extra": "mean: 13.942383644709603 usec\nrounds: 26316"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 60847.29014435561,
            "unit": "iter/sec",
            "range": "stddev: 6.790884833138722e-7",
            "extra": "mean: 16.43458562620579 usec\nrounds: 23042"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 4874.859158099248,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036882407014827684",
            "extra": "mean: 205.13413158584652 usec\nrounds: 3777"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 60253.47372350929,
            "unit": "iter/sec",
            "range": "stddev: 5.756567271427668e-7",
            "extra": "mean: 16.596553496463837 usec\nrounds: 22936"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 4872.391822757466,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036520660885492796",
            "extra": "mean: 205.23800966279086 usec\nrounds: 3829"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 61023.97687916634,
            "unit": "iter/sec",
            "range": "stddev: 6.006044177099846e-7",
            "extra": "mean: 16.38700148926874 usec\nrounds: 22832"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 4827.291609354766,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034466611441098276",
            "extra": "mean: 207.1554985537043 usec\nrounds: 3803"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 4867.11061816515,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034319227025319635",
            "extra": "mean: 205.46070933086568 usec\nrounds: 4008"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 71540.28847624265,
            "unit": "iter/sec",
            "range": "stddev: 6.428374327861849e-7",
            "extra": "mean: 13.978137652213737 usec\nrounds: 26596"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 4874.3767537396025,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034895376259813633",
            "extra": "mean: 205.15443317605764 usec\nrounds: 3816"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 72224.60179747376,
            "unit": "iter/sec",
            "range": "stddev: 5.074918077671213e-7",
            "extra": "mean: 13.845697658591694 usec\nrounds: 26179"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 4859.236859066968,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035419224928863346",
            "extra": "mean: 205.79363159342105 usec\nrounds: 3754"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 72278.57142224693,
            "unit": "iter/sec",
            "range": "stddev: 6.064646338739869e-7",
            "extra": "mean: 13.8353592264305 usec\nrounds: 26738"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 200854.3800043078,
            "unit": "iter/sec",
            "range": "stddev: 2.488051285833632e-7",
            "extra": "mean: 4.978731357407056 usec\nrounds: 106383"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 193689.21366573859,
            "unit": "iter/sec",
            "range": "stddev: 2.810228745759687e-7",
            "extra": "mean: 5.162910112928445 usec\nrounds: 96154"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 200212.717075083,
            "unit": "iter/sec",
            "range": "stddev: 2.928841873559543e-7",
            "extra": "mean: 4.9946877231828575 usec\nrounds: 100001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 196594.27067083388,
            "unit": "iter/sec",
            "range": "stddev: 2.673501705393758e-7",
            "extra": "mean: 5.086618224364952 usec\nrounds: 93458"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 200529.51776125454,
            "unit": "iter/sec",
            "range": "stddev: 3.497553133443486e-7",
            "extra": "mean: 4.9867970120517375 usec\nrounds: 100001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 198405.04103110218,
            "unit": "iter/sec",
            "range": "stddev: 3.6825017630149416e-7",
            "extra": "mean: 5.040194517251399 usec\nrounds: 88496"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 197613.4593179081,
            "unit": "iter/sec",
            "range": "stddev: 3.5659438186823937e-7",
            "extra": "mean: 5.060384062156733 usec\nrounds: 99010"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 201001.1206200953,
            "unit": "iter/sec",
            "range": "stddev: 2.7000896688883066e-7",
            "extra": "mean: 4.975096640829494 usec\nrounds: 103093"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 199577.66583912837,
            "unit": "iter/sec",
            "range": "stddev: 2.483302270396493e-7",
            "extra": "mean: 5.010580696970674 usec\nrounds: 59172"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 203486.11146558856,
            "unit": "iter/sec",
            "range": "stddev: 2.7436893914595903e-7",
            "extra": "mean: 4.914340309506134 usec\nrounds: 101011"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 195526.94623986474,
            "unit": "iter/sec",
            "range": "stddev: 3.2471413424064e-7",
            "extra": "mean: 5.114384586016291 usec\nrounds: 91735"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 200233.3465747403,
            "unit": "iter/sec",
            "range": "stddev: 3.2317419521410417e-7",
            "extra": "mean: 4.994173134027573 usec\nrounds: 99010"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 197431.57733728434,
            "unit": "iter/sec",
            "range": "stddev: 3.5165932911957476e-7",
            "extra": "mean: 5.065045893300236 usec\nrounds: 102041"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 195076.5670051422,
            "unit": "iter/sec",
            "range": "stddev: 3.1560563581000273e-7",
            "extra": "mean: 5.126192322082642 usec\nrounds: 90910"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 200032.34489259956,
            "unit": "iter/sec",
            "range": "stddev: 2.5203745869276873e-7",
            "extra": "mean: 4.999191508437874 usec\nrounds: 93458"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 198913.53102818955,
            "unit": "iter/sec",
            "range": "stddev: 2.888966868544786e-7",
            "extra": "mean: 5.027310082079245 usec\nrounds: 89286"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 199282.6340563631,
            "unit": "iter/sec",
            "range": "stddev: 3.547607482347791e-7",
            "extra": "mean: 5.017998706887677 usec\nrounds: 94340"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 193038.0063681523,
            "unit": "iter/sec",
            "range": "stddev: 5.894229222030853e-7",
            "extra": "mean: 5.180327018570896 usec\nrounds: 91744"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 201091.30355273158,
            "unit": "iter/sec",
            "range": "stddev: 2.733586026581866e-7",
            "extra": "mean: 4.972865471220007 usec\nrounds: 91735"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 201908.15731951687,
            "unit": "iter/sec",
            "range": "stddev: 2.6300131288238774e-7",
            "extra": "mean: 4.952746898767016 usec\nrounds: 101011"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 199758.82372573586,
            "unit": "iter/sec",
            "range": "stddev: 2.5967668246438337e-7",
            "extra": "mean: 5.006036686384259 usec\nrounds: 94340"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 202056.35908616622,
            "unit": "iter/sec",
            "range": "stddev: 3.3097634667303057e-7",
            "extra": "mean: 4.949114220025876 usec\nrounds: 100000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 194580.6559827113,
            "unit": "iter/sec",
            "range": "stddev: 4.046325698590549e-7",
            "extra": "mean: 5.1392570086147265 usec\nrounds: 91744"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 200330.79176891962,
            "unit": "iter/sec",
            "range": "stddev: 3.6260434994754937e-7",
            "extra": "mean: 4.99174386109098 usec\nrounds: 97088"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 199949.1568407735,
            "unit": "iter/sec",
            "range": "stddev: 3.3278175741491206e-7",
            "extra": "mean: 5.0012714021911835 usec\nrounds: 88496"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 199261.2737485123,
            "unit": "iter/sec",
            "range": "stddev: 3.909343243979013e-7",
            "extra": "mean: 5.0185366237400455 usec\nrounds: 91744"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 198600.7706800716,
            "unit": "iter/sec",
            "range": "stddev: 3.7491212073419373e-7",
            "extra": "mean: 5.035227187566719 usec\nrounds: 96154"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 196119.8104333927,
            "unit": "iter/sec",
            "range": "stddev: 3.377113871121074e-7",
            "extra": "mean: 5.098923957708115 usec\nrounds: 90910"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 201227.331433368,
            "unit": "iter/sec",
            "range": "stddev: 3.522078588211827e-7",
            "extra": "mean: 4.969503858530907 usec\nrounds: 94340"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 195620.12668282897,
            "unit": "iter/sec",
            "range": "stddev: 4.096980909606905e-7",
            "extra": "mean: 5.111948432695588 usec\nrounds: 91744"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 195861.27668994336,
            "unit": "iter/sec",
            "range": "stddev: 3.3458389062282057e-7",
            "extra": "mean: 5.105654455541215 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 199723.65712358683,
            "unit": "iter/sec",
            "range": "stddev: 3.564632170935918e-7",
            "extra": "mean: 5.00691813079114 usec\nrounds: 100001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 199977.697042941,
            "unit": "iter/sec",
            "range": "stddev: 3.4238854049809337e-7",
            "extra": "mean: 5.000557636111146 usec\nrounds: 90091"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 201405.89533419345,
            "unit": "iter/sec",
            "range": "stddev: 3.3881457376327136e-7",
            "extra": "mean: 4.965097959723059 usec\nrounds: 99010"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 186043.4211458812,
            "unit": "iter/sec",
            "range": "stddev: 0.000001503718146944104",
            "extra": "mean: 5.37508928744046 usec\nrounds: 56"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 204085.06775193487,
            "unit": "iter/sec",
            "range": "stddev: 3.547919339528966e-7",
            "extra": "mean: 4.899917524664268 usec\nrounds: 101000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 262075.41498506675,
            "unit": "iter/sec",
            "range": "stddev: 3.1990230250350924e-7",
            "extra": "mean: 3.815695570135721 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 199374.7378953348,
            "unit": "iter/sec",
            "range": "stddev: 0.000005459693393359361",
            "extra": "mean: 5.015680574963149 usec\nrounds: 84746"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 198653.86190465745,
            "unit": "iter/sec",
            "range": "stddev: 2.4529243744171486e-7",
            "extra": "mean: 5.033881498261247 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 197863.57157722375,
            "unit": "iter/sec",
            "range": "stddev: 2.6495892756520215e-7",
            "extra": "mean: 5.05398741177434 usec\nrounds: 88496"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 196115.87299034526,
            "unit": "iter/sec",
            "range": "stddev: 3.3113737156301246e-7",
            "extra": "mean: 5.099026329445704 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 196843.317162102,
            "unit": "iter/sec",
            "range": "stddev: 3.7916284535104255e-7",
            "extra": "mean: 5.080182626553139 usec\nrounds: 83334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 200563.64459101448,
            "unit": "iter/sec",
            "range": "stddev: 2.600101085388615e-7",
            "extra": "mean: 4.985948485525284 usec\nrounds: 85471"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 259581.09379970017,
            "unit": "iter/sec",
            "range": "stddev: 2.614352503981504e-7",
            "extra": "mean: 3.852360683754677 usec\nrounds: 85471"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 197223.73422754547,
            "unit": "iter/sec",
            "range": "stddev: 2.559159170897347e-7",
            "extra": "mean: 5.07038366308518 usec\nrounds: 85463"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 200316.62171342864,
            "unit": "iter/sec",
            "range": "stddev: 2.4382495153419497e-7",
            "extra": "mean: 4.992096968521125 usec\nrounds: 85471"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 196779.7592194598,
            "unit": "iter/sec",
            "range": "stddev: 3.3605214978772143e-7",
            "extra": "mean: 5.081823475984357 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 196615.22641304389,
            "unit": "iter/sec",
            "range": "stddev: 3.504011362617094e-7",
            "extra": "mean: 5.086076079882172 usec\nrounds: 80639"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 198254.28553650586,
            "unit": "iter/sec",
            "range": "stddev: 2.995822018923824e-7",
            "extra": "mean: 5.044027155800692 usec\nrounds: 84034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 196695.39970050147,
            "unit": "iter/sec",
            "range": "stddev: 3.0334123735656233e-7",
            "extra": "mean: 5.0840029890005125 usec\nrounds: 81968"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 258841.83656022596,
            "unit": "iter/sec",
            "range": "stddev: 2.2410344990070447e-7",
            "extra": "mean: 3.863363099602043 usec\nrounds: 83327"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 198822.86423194746,
            "unit": "iter/sec",
            "range": "stddev: 2.925463302959586e-7",
            "extra": "mean: 5.029602625749303 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 196629.64011922127,
            "unit": "iter/sec",
            "range": "stddev: 3.403393083747582e-7",
            "extra": "mean: 5.085703251013815 usec\nrounds: 84034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 196348.00724555852,
            "unit": "iter/sec",
            "range": "stddev: 3.841370012775066e-7",
            "extra": "mean: 5.0929979582088185 usec\nrounds: 86200"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 198409.76850321423,
            "unit": "iter/sec",
            "range": "stddev: 2.5881726170773256e-7",
            "extra": "mean: 5.040074425487776 usec\nrounds: 86207"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 195906.9243334705,
            "unit": "iter/sec",
            "range": "stddev: 2.935647067003499e-7",
            "extra": "mean: 5.104464803386998 usec\nrounds: 81968"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 197239.22203814407,
            "unit": "iter/sec",
            "range": "stddev: 2.442458585664957e-7",
            "extra": "mean: 5.069985521473058 usec\nrounds: 84746"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 254945.21361615031,
            "unit": "iter/sec",
            "range": "stddev: 2.323571327594117e-7",
            "extra": "mean: 3.9224113518978094 usec\nrounds: 80639"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 193448.94576165537,
            "unit": "iter/sec",
            "range": "stddev: 3.260940859103699e-7",
            "extra": "mean: 5.1693225624092065 usec\nrounds: 80000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 195173.46085939108,
            "unit": "iter/sec",
            "range": "stddev: 3.696898379725817e-7",
            "extra": "mean: 5.123647424177361 usec\nrounds: 56819"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 183768.44030930664,
            "unit": "iter/sec",
            "range": "stddev: 0.000001914791736277408",
            "extra": "mean: 5.441630773580423 usec\nrounds: 65"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 191987.83884510008,
            "unit": "iter/sec",
            "range": "stddev: 3.9497942917499595e-7",
            "extra": "mean: 5.208663246669606 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 198740.67787599884,
            "unit": "iter/sec",
            "range": "stddev: 3.8285363343464714e-7",
            "extra": "mean: 5.0316825457540935 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 193270.11402489667,
            "unit": "iter/sec",
            "range": "stddev: 3.360343270512213e-7",
            "extra": "mean: 5.174105707161646 usec\nrounds: 83334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 250438.8110478015,
            "unit": "iter/sec",
            "range": "stddev: 3.3861890875977697e-7",
            "extra": "mean: 3.9929913251709577 usec\nrounds: 80001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 195204.9368950176,
            "unit": "iter/sec",
            "range": "stddev: 3.4254091528827695e-7",
            "extra": "mean: 5.122821255990089 usec\nrounds: 85463"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 196169.34341820734,
            "unit": "iter/sec",
            "range": "stddev: 3.4719923321293335e-7",
            "extra": "mean: 5.0976364735448545 usec\nrounds: 81961"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 194488.1748852341,
            "unit": "iter/sec",
            "range": "stddev: 3.2923704649116336e-7",
            "extra": "mean: 5.141700777387067 usec\nrounds: 80639"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 194704.99156561075,
            "unit": "iter/sec",
            "range": "stddev: 3.248834124944837e-7",
            "extra": "mean: 5.135975158926651 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 193639.1119621832,
            "unit": "iter/sec",
            "range": "stddev: 3.738870364746322e-7",
            "extra": "mean: 5.164245951485748 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 195262.65786368493,
            "unit": "iter/sec",
            "range": "stddev: 3.327030344695761e-7",
            "extra": "mean: 5.121306915212182 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 252581.92162137915,
            "unit": "iter/sec",
            "range": "stddev: 3.206202409536541e-7",
            "extra": "mean: 3.9591115372817627 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 2837391.4582108986,
            "unit": "iter/sec",
            "range": "stddev: 1.638296488608843e-8",
            "extra": "mean: 352.43638910185706 nsec\nrounds: 108696"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 5234.894809012791,
            "unit": "iter/sec",
            "range": "stddev: 0.00000334954876982971",
            "extra": "mean: 191.0258059585695 usec\nrounds: 3927"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 2410225.8292429787,
            "unit": "iter/sec",
            "range": "stddev: 1.6827532272741717e-8",
            "extra": "mean: 414.89888120327123 nsec\nrounds: 125000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 5246.725685236354,
            "unit": "iter/sec",
            "range": "stddev: 0.000003256922764280921",
            "extra": "mean: 190.59506061349424 usec\nrounds: 3910"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 2636650.8762659845,
            "unit": "iter/sec",
            "range": "stddev: 1.4873846283332544e-8",
            "extra": "mean: 379.26902230483336 nsec\nrounds: 128189"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 5223.359367013864,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032494029458120612",
            "extra": "mean: 191.4476737547715 usec\nrounds: 3997"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 5302.195282017058,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032302020604006447",
            "extra": "mean: 188.60112591318602 usec\nrounds: 4106"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 2808709.3812388144,
            "unit": "iter/sec",
            "range": "stddev: 1.947443302047926e-8",
            "extra": "mean: 356.035411381597 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 5322.912142707302,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033998821336610153",
            "extra": "mean: 187.86708726163326 usec\nrounds: 3988"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 2384298.177911859,
            "unit": "iter/sec",
            "range": "stddev: 1.8112009784442698e-8",
            "extra": "mean: 419.4106296197584 nsec\nrounds: 114943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 5287.9813987931,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034873410024092913",
            "extra": "mean: 189.10807822210467 usec\nrounds: 3848"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 2648277.975187832,
            "unit": "iter/sec",
            "range": "stddev: 1.4083309186165926e-8",
            "extra": "mean: 377.60386536815423 nsec\nrounds: 129871"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 2523141.340610618,
            "unit": "iter/sec",
            "range": "stddev: 1.4368010206442518e-8",
            "extra": "mean: 396.33134454454716 nsec\nrounds: 125001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 5111.059924830531,
            "unit": "iter/sec",
            "range": "stddev: 0.000010410654760379175",
            "extra": "mean: 195.65413333187584 usec\nrounds: 15"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 2660938.387938698,
            "unit": "iter/sec",
            "range": "stddev: 1.921373925762384e-8",
            "extra": "mean: 375.807273303579 nsec\nrounds: 185186"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 5247.255797252865,
            "unit": "iter/sec",
            "range": "stddev: 0.000003159894973670264",
            "extra": "mean: 190.57580545692807 usec\nrounds: 3958"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 2509772.3918062085,
            "unit": "iter/sec",
            "range": "stddev: 1.4893724019673514e-8",
            "extra": "mean: 398.4425054895841 nsec\nrounds: 123457"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 5254.669708980747,
            "unit": "iter/sec",
            "range": "stddev: 0.000003204566066943503",
            "extra": "mean: 190.30691849021485 usec\nrounds: 3975"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 5327.537556606959,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035124371822488367",
            "extra": "mean: 187.7039794416555 usec\nrounds: 4232"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 2543587.667091519,
            "unit": "iter/sec",
            "range": "stddev: 1.4346730588476575e-8",
            "extra": "mean: 393.14548224052186 nsec\nrounds: 121952"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 5310.240218229333,
            "unit": "iter/sec",
            "range": "stddev: 0.000003925054822539784",
            "extra": "mean: 188.31539796771077 usec\nrounds: 3543"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 2372918.6787254945,
            "unit": "iter/sec",
            "range": "stddev: 2.5260474197049948e-8",
            "extra": "mean: 421.4219429283755 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 5307.5073715742765,
            "unit": "iter/sec",
            "range": "stddev: 0.000003040392956866992",
            "extra": "mean: 188.41236196029755 usec\nrounds: 3959"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 2247286.0877140425,
            "unit": "iter/sec",
            "range": "stddev: 1.6025948255147077e-8",
            "extra": "mean: 444.98117327670883 nsec\nrounds: 114943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 2482581.4588564383,
            "unit": "iter/sec",
            "range": "stddev: 1.3964977698148106e-8",
            "extra": "mean: 402.8065207822249 nsec\nrounds: 124985"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 5219.775400137873,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032129597388256626",
            "extra": "mean: 191.57912426147425 usec\nrounds: 3895"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 2486520.5728337104,
            "unit": "iter/sec",
            "range": "stddev: 1.64163349278115e-8",
            "extra": "mean: 402.16839986186164 nsec\nrounds: 121952"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 5234.670453411832,
            "unit": "iter/sec",
            "range": "stddev: 0.000003028040046262097",
            "extra": "mean: 191.03399323795526 usec\nrounds: 3549"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 2555585.5219841683,
            "unit": "iter/sec",
            "range": "stddev: 1.4570640152467611e-8",
            "extra": "mean: 391.29975944723134 nsec\nrounds: 126583"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 5232.4171030129655,
            "unit": "iter/sec",
            "range": "stddev: 0.000003128463535139011",
            "extra": "mean: 191.116262391271 usec\nrounds: 3914"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 5296.489783145038,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031361983827408103",
            "extra": "mean: 188.80429132182778 usec\nrounds: 4229"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 2489946.819730748,
            "unit": "iter/sec",
            "range": "stddev: 2.6085700465616625e-7",
            "extra": "mean: 401.6150032103543 nsec\nrounds: 123457"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 5284.3891127851,
            "unit": "iter/sec",
            "range": "stddev: 0.000004277567946057532",
            "extra": "mean: 189.23663240100745 usec\nrounds: 3969"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 2440913.298425723,
            "unit": "iter/sec",
            "range": "stddev: 1.972187066931618e-8",
            "extra": "mean: 409.682720252671 nsec\nrounds: 121952"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 5292.801189709725,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037578544442297263",
            "extra": "mean: 188.9358704695355 usec\nrounds: 3945"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 2519555.02542719,
            "unit": "iter/sec",
            "range": "stddev: 1.7502832890753096e-8",
            "extra": "mean: 396.89547952206624 nsec\nrounds: 188680"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 16233.041420457617,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014431617461291223",
            "extra": "mean: 61.60275047039272 usec\nrounds: 7975"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 15825.80614444377,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013769555934518079",
            "extra": "mean: 63.1879343695289 usec\nrounds: 9843"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 12155.812326830128,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020090792848478764",
            "extra": "mean: 82.26517266911196 usec\nrounds: 7413"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 77.2770967808074,
            "unit": "iter/sec",
            "range": "stddev: 0.028305430362664166",
            "extra": "mean: 12.940444732757623 msec\nrounds: 232"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 144146.63982260824,
            "unit": "iter/sec",
            "range": "stddev: 3.033848142416104e-7",
            "extra": "mean: 6.9373798878047666 usec\nrounds: 54345"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 144799.13386541628,
            "unit": "iter/sec",
            "range": "stddev: 6.859368714836115e-7",
            "extra": "mean: 6.906118657653374 usec\nrounds: 60603"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 80.22145726595136,
            "unit": "iter/sec",
            "range": "stddev: 0.02879805808419452",
            "extra": "mean: 12.4654928255016 msec\nrounds: 298"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 78.94658389873037,
            "unit": "iter/sec",
            "range": "stddev: 0.02932296617528755",
            "extra": "mean: 12.666792540165657 msec\nrounds: 361"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 65706.30779856053,
            "unit": "iter/sec",
            "range": "stddev: 4.266513692253394e-7",
            "extra": "mean: 15.219238966611172 usec\nrounds: 32787"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 66311.87999158233,
            "unit": "iter/sec",
            "range": "stddev: 5.707333744712745e-7",
            "extra": "mean: 15.080254098163717 usec\nrounds: 32574"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 66.8980411237229,
            "unit": "iter/sec",
            "range": "stddev: 0.03099474593595391",
            "extra": "mean: 14.948120799988374 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 65.29198955392017,
            "unit": "iter/sec",
            "range": "stddev: 0.029308313148033803",
            "extra": "mean: 15.315814494734743 msec\nrounds: 190"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 20220.010902609447,
            "unit": "iter/sec",
            "range": "stddev: 9.074084175239393e-7",
            "extra": "mean: 49.455957507468376 usec\nrounds: 7013"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 1628.471036664639,
            "unit": "iter/sec",
            "range": "stddev: 0.000005671788238437134",
            "extra": "mean: 614.0729417258503 usec\nrounds: 1287"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 1624.6309911086978,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057960593816915594",
            "extra": "mean: 615.5243901370917 usec\nrounds: 1338"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 24132.04306143859,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010222881993943923",
            "extra": "mean: 41.43867957860285 usec\nrounds: 10352"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 36.44551286490711,
            "unit": "iter/sec",
            "range": "stddev: 0.03096978872987279",
            "extra": "mean: 27.438219999995844 msec\nrounds: 35"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 4.414719260642958,
            "unit": "iter/sec",
            "range": "stddev: 0.047305430859504706",
            "extra": "mean: 226.51496979999592 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 4.316204722927453,
            "unit": "iter/sec",
            "range": "stddev: 0.04286520622833516",
            "extra": "mean: 231.68502520004495 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 40.44908843123789,
            "unit": "iter/sec",
            "range": "stddev: 0.031835020933436965",
            "extra": "mean: 24.722436000009413 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 20228.282800628655,
            "unit": "iter/sec",
            "range": "stddev: 9.426150556987435e-7",
            "extra": "mean: 49.43573361397351 usec\nrounds: 8803"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 1626.6131409281363,
            "unit": "iter/sec",
            "range": "stddev: 0.00000729613198850538",
            "extra": "mean: 614.7743276126527 usec\nrounds: 1340"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 1628.7445488078965,
            "unit": "iter/sec",
            "range": "stddev: 0.000006195845186572358",
            "extra": "mean: 613.9698215609782 usec\nrounds: 1345"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 24027.578787409217,
            "unit": "iter/sec",
            "range": "stddev: 8.489331787015156e-7",
            "extra": "mean: 41.61884178375949 usec\nrounds: 8362"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 36.34079268817809,
            "unit": "iter/sec",
            "range": "stddev: 0.030608540250364625",
            "extra": "mean: 27.517286388893407 msec\nrounds: 36"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 4.8598399889141515,
            "unit": "iter/sec",
            "range": "stddev: 0.0002177826586867025",
            "extra": "mean: 205.76809159995264 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 4.859872728467364,
            "unit": "iter/sec",
            "range": "stddev: 0.00025731579572093943",
            "extra": "mean: 205.76670539999213 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 39.46049660432109,
            "unit": "iter/sec",
            "range": "stddev: 0.03142963817021669",
            "extra": "mean: 25.341799674424163 msec\nrounds: 43"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 65618.27691102921,
            "unit": "iter/sec",
            "range": "stddev: 4.577755509604473e-7",
            "extra": "mean: 15.239656496251557 usec\nrounds: 33004"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 64240.879023472255,
            "unit": "iter/sec",
            "range": "stddev: 5.008055371644779e-7",
            "extra": "mean: 15.566412153772385 usec\nrounds: 33223"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 64915.33095195539,
            "unit": "iter/sec",
            "range": "stddev: 4.6089461206864704e-7",
            "extra": "mean: 15.404681534168128 usec\nrounds: 21277"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 65715.16002250658,
            "unit": "iter/sec",
            "range": "stddev: 4.5162723134785673e-7",
            "extra": "mean: 15.217188844362749 usec\nrounds: 30120"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 64.02701672808855,
            "unit": "iter/sec",
            "range": "stddev: 0.02969130432671577",
            "extra": "mean: 15.618406902305374 msec\nrounds: 174"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 62.74395002387798,
            "unit": "iter/sec",
            "range": "stddev: 0.03018664311031418",
            "extra": "mean: 15.937791605715574 msec\nrounds: 175"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 62.25563343168692,
            "unit": "iter/sec",
            "range": "stddev: 0.030783759433395827",
            "extra": "mean: 16.062803394287194 msec\nrounds: 175"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 64.98093718205966,
            "unit": "iter/sec",
            "range": "stddev: 0.029521425156078637",
            "extra": "mean: 15.389128617801562 msec\nrounds: 191"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 82623.97530791364,
            "unit": "iter/sec",
            "range": "stddev: 3.8380371342214037e-7",
            "extra": "mean: 12.103024530994952 usec\nrounds: 31348"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 63770.17196787808,
            "unit": "iter/sec",
            "range": "stddev: 4.554670431048667e-7",
            "extra": "mean: 15.68131258143249 usec\nrounds: 27548"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 63854.522004601,
            "unit": "iter/sec",
            "range": "stddev: 4.621942120559111e-7",
            "extra": "mean: 15.660598006323587 usec\nrounds: 28090"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 80790.92251026258,
            "unit": "iter/sec",
            "range": "stddev: 3.9585815601491867e-7",
            "extra": "mean: 12.377628190505854 usec\nrounds: 28329"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 69.88136426200944,
            "unit": "iter/sec",
            "range": "stddev: 0.029754773813806402",
            "extra": "mean: 14.309966763823523 msec\nrounds: 199"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 63.72798363276505,
            "unit": "iter/sec",
            "range": "stddev: 0.0297131783929259",
            "extra": "mean: 15.69169371123584 msec\nrounds: 187"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 65.23202185879104,
            "unit": "iter/sec",
            "range": "stddev: 0.029487499664240153",
            "extra": "mean: 15.329894298918381 msec\nrounds: 184"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 68.82626013750516,
            "unit": "iter/sec",
            "range": "stddev: 0.03007547334202896",
            "extra": "mean: 14.529338046294264 msec\nrounds: 216"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 500188.5252934679,
            "unit": "iter/sec",
            "range": "stddev: 1.7397795930418897e-7",
            "extra": "mean: 1.9992461830532506 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 1746.4879206276396,
            "unit": "iter/sec",
            "range": "stddev: 0.000005983119077690002",
            "extra": "mean: 572.5776790031433 usec\nrounds: 1405"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 1773.5564397139995,
            "unit": "iter/sec",
            "range": "stddev: 0.000006819943664771588",
            "extra": "mean: 563.8388368183299 usec\nrounds: 1434"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 495986.9263712442,
            "unit": "iter/sec",
            "range": "stddev: 1.6185858715058534e-7",
            "extra": "mean: 2.0161821750347997 usec\nrounds: 97088"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 2843.4206275762867,
            "unit": "iter/sec",
            "range": "stddev: 0.000005470000027050259",
            "extra": "mean: 351.68908542820606 usec\nrounds: 2505"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 5.285970953710889,
            "unit": "iter/sec",
            "range": "stddev: 0.00007903926341308284",
            "extra": "mean: 189.180002833344 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 5.38559360174209,
            "unit": "iter/sec",
            "range": "stddev: 0.00006674421880134915",
            "extra": "mean: 185.68055333334618 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 2800.476294221638,
            "unit": "iter/sec",
            "range": "stddev: 0.000003807225806087445",
            "extra": "mean: 357.0821156613072 usec\nrounds: 2490"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 370606.93233309133,
            "unit": "iter/sec",
            "range": "stddev: 1.8637322163343435e-7",
            "extra": "mean: 2.6982765640801003 usec\nrounds: 45870"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 2211.956916214431,
            "unit": "iter/sec",
            "range": "stddev: 0.000005480604473199661",
            "extra": "mean: 452.08837146403897 usec\nrounds: 1626"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 1922.6385195990981,
            "unit": "iter/sec",
            "range": "stddev: 0.000004822106643679716",
            "extra": "mean: 520.1185713310875 usec\nrounds: 1458"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 376021.7716749627,
            "unit": "iter/sec",
            "range": "stddev: 1.8091993225659992e-7",
            "extra": "mean: 2.6594204786216764 usec\nrounds: 52357"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 1929.0193204120692,
            "unit": "iter/sec",
            "range": "stddev: 0.000002449356493538757",
            "extra": "mean: 518.3981256270591 usec\nrounds: 1791"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 6.74650045781261,
            "unit": "iter/sec",
            "range": "stddev: 0.00007793719569303247",
            "extra": "mean: 148.2249954999967 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 5.815212904583097,
            "unit": "iter/sec",
            "range": "stddev: 0.00008429437008275652",
            "extra": "mean: 171.96274950000165 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 1910.9421523166493,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032430015800865222",
            "extra": "mean: 523.3020783950433 usec\nrounds: 1722"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 20381.56750622329,
            "unit": "iter/sec",
            "range": "stddev: 9.471195235379874e-7",
            "extra": "mean: 49.06393974333235 usec\nrounds: 8497"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 1620.2117590862294,
            "unit": "iter/sec",
            "range": "stddev: 0.000006208136909609617",
            "extra": "mean: 617.2032725919618 usec\nrounds: 1339"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 1622.3747018912186,
            "unit": "iter/sec",
            "range": "stddev: 0.000006105421698330862",
            "extra": "mean: 616.3804199081075 usec\nrounds: 1336"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 24282.474145952692,
            "unit": "iter/sec",
            "range": "stddev: 8.066207382304919e-7",
            "extra": "mean: 41.18196498385549 usec\nrounds: 10395"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 34.24803436807436,
            "unit": "iter/sec",
            "range": "stddev: 0.03327823261673531",
            "extra": "mean: 29.19875602940264 msec\nrounds: 34"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 4.400281815872685,
            "unit": "iter/sec",
            "range": "stddev: 0.046825546844157295",
            "extra": "mean: 227.25817160001043 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 4.38610819951049,
            "unit": "iter/sec",
            "range": "stddev: 0.04738135139670249",
            "extra": "mean: 227.9925515999821 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 71.02022857616535,
            "unit": "iter/sec",
            "range": "stddev: 0.00020011503415216133",
            "extra": "mean: 14.080495375026203 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 20440.348999229216,
            "unit": "iter/sec",
            "range": "stddev: 9.043874113067313e-7",
            "extra": "mean: 48.92284373606874 usec\nrounds: 9100"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 1623.4303444178815,
            "unit": "iter/sec",
            "range": "stddev: 0.000005826720112267509",
            "extra": "mean: 615.9796159031222 usec\nrounds: 1333"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 1610.2453904443041,
            "unit": "iter/sec",
            "range": "stddev: 0.000048151463275548444",
            "extra": "mean: 621.0233582622316 usec\nrounds: 1337"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 23838.48766987753,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022693340588087806",
            "extra": "mean: 41.948969827629064 usec\nrounds: 8518"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 35.51593584465184,
            "unit": "iter/sec",
            "range": "stddev: 0.03289406725797942",
            "extra": "mean: 28.1563747714277 msec\nrounds: 35"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 4.402487230593823,
            "unit": "iter/sec",
            "range": "stddev: 0.046844918836517695",
            "extra": "mean: 227.1443272000397 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 4.6385767828179425,
            "unit": "iter/sec",
            "range": "stddev: 0.005267353109833051",
            "extra": "mean: 215.5833667999559 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 38.65763151032016,
            "unit": "iter/sec",
            "range": "stddev: 0.03287249563144703",
            "extra": "mean: 25.868113511637073 msec\nrounds: 43"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 67049.84070789655,
            "unit": "iter/sec",
            "range": "stddev: 4.5093864345796333e-7",
            "extra": "mean: 14.914278534329592 usec\nrounds: 36631"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 65820.94987959799,
            "unit": "iter/sec",
            "range": "stddev: 4.3652964166879554e-7",
            "extra": "mean: 15.19273121748069 usec\nrounds: 30121"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 65853.45945718215,
            "unit": "iter/sec",
            "range": "stddev: 4.869287705464428e-7",
            "extra": "mean: 15.18523109101351 usec\nrounds: 30581"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 66884.43479447874,
            "unit": "iter/sec",
            "range": "stddev: 4.510351740750594e-7",
            "extra": "mean: 14.9511617026111 usec\nrounds: 29412"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 62.35197890245901,
            "unit": "iter/sec",
            "range": "stddev: 0.03174546818081982",
            "extra": "mean: 16.037983358384835 msec\nrounds: 173"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 62.50943100308902,
            "unit": "iter/sec",
            "range": "stddev: 0.031096774965634108",
            "extra": "mean: 15.99758602746813 msec\nrounds: 182"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 63.5585608283832,
            "unit": "iter/sec",
            "range": "stddev: 0.030855676507150657",
            "extra": "mean: 15.733521762711662 msec\nrounds: 177"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 62.5796657355686,
            "unit": "iter/sec",
            "range": "stddev: 0.031247231234783217",
            "extra": "mean: 15.979631534395157 msec\nrounds: 189"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 83210.70536541502,
            "unit": "iter/sec",
            "range": "stddev: 3.862218474633702e-7",
            "extra": "mean: 12.017684450679244 usec\nrounds: 35088"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 64849.37682965571,
            "unit": "iter/sec",
            "range": "stddev: 5.683358611304228e-7",
            "extra": "mean: 15.420348643083623 usec\nrounds: 21882"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 64093.559410732065,
            "unit": "iter/sec",
            "range": "stddev: 4.985388015166936e-7",
            "extra": "mean: 15.602191689677891 usec\nrounds: 27701"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 84808.86132792274,
            "unit": "iter/sec",
            "range": "stddev: 3.8908891948926354e-7",
            "extra": "mean: 11.791220685458686 usec\nrounds: 29499"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 67.28304768080577,
            "unit": "iter/sec",
            "range": "stddev: 0.031343801829501666",
            "extra": "mean: 14.862584773865349 msec\nrounds: 199"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 61.06924720204527,
            "unit": "iter/sec",
            "range": "stddev: 0.03197564202164318",
            "extra": "mean: 16.374853888267825 msec\nrounds: 179"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 60.979606713110044,
            "unit": "iter/sec",
            "range": "stddev: 0.03159147255246384",
            "extra": "mean: 16.39892504890507 msec\nrounds: 184"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 65.23920173648507,
            "unit": "iter/sec",
            "range": "stddev: 0.03190481348070734",
            "extra": "mean: 15.32820717272433 msec\nrounds: 220"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 512109.40598930296,
            "unit": "iter/sec",
            "range": "stddev: 1.553869297964041e-7",
            "extra": "mean: 1.9527077384337053 usec\nrounds: 104167"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 1747.9794758378625,
            "unit": "iter/sec",
            "range": "stddev: 0.000005901360345780357",
            "extra": "mean: 572.0890970534239 usec\nrounds: 1391"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 1773.169089482039,
            "unit": "iter/sec",
            "range": "stddev: 0.000005633733944343093",
            "extra": "mean: 563.9620078715168 usec\nrounds: 1397"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 511062.75398853794,
            "unit": "iter/sec",
            "range": "stddev: 1.60153231561963e-7",
            "extra": "mean: 1.956706866613934 usec\nrounds: 103093"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 2838.568475526812,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032153099430933643",
            "extra": "mean: 352.290250744932 usec\nrounds: 2680"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 5.270801963130114,
            "unit": "iter/sec",
            "range": "stddev: 0.00043584371501174094",
            "extra": "mean: 189.72444933334978 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 5.359050717476887,
            "unit": "iter/sec",
            "range": "stddev: 0.00005462841799881769",
            "extra": "mean: 186.60021200001134 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 2845.0450666476713,
            "unit": "iter/sec",
            "range": "stddev: 0.000002951428564648611",
            "extra": "mean: 351.48828105500075 usec\nrounds: 2576"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 390843.88622815517,
            "unit": "iter/sec",
            "range": "stddev: 1.6790606298135782e-7",
            "extra": "mean: 2.5585663105812273 usec\nrounds: 78125"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 2225.589386610647,
            "unit": "iter/sec",
            "range": "stddev: 0.000004788826513144164",
            "extra": "mean: 449.31918080491084 usec\nrounds: 1615"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 1934.2729977116564,
            "unit": "iter/sec",
            "range": "stddev: 0.00000500757221913975",
            "extra": "mean: 516.9901049040394 usec\nrounds: 1468"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 393819.9727237928,
            "unit": "iter/sec",
            "range": "stddev: 1.8148446450528684e-7",
            "extra": "mean: 2.5392312966852852 usec\nrounds: 88488"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 1925.8916032203522,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026510763270410965",
            "extra": "mean: 519.2400228174131 usec\nrounds: 1797"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 6.71410389955054,
            "unit": "iter/sec",
            "range": "stddev: 0.00009233514691428",
            "extra": "mean: 148.94020333330596 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 5.819876921881483,
            "unit": "iter/sec",
            "range": "stddev: 0.00007672611287369983",
            "extra": "mean: 171.82493950004604 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 1908.1246698496204,
            "unit": "iter/sec",
            "range": "stddev: 0.000002251267500212693",
            "extra": "mean: 524.0747713192189 usec\nrounds: 1583"
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
          "id": "d9c9239e1f5ef8bd6ec06e80487e39e1f6d43b2f",
          "message": "Pint 0.9",
          "timestamp": "2022-11-26T23:23:25-03:00",
          "tree_id": "f9ca036ec498987a4bcc6464351eaa8190be4101",
          "url": "https://github.com/hgrecco/pint-benchmark/commit/d9c9239e1f5ef8bd6ec06e80487e39e1f6d43b2f"
        },
        "date": 1669522857223,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 2.2503492697340755,
            "unit": "iter/sec",
            "range": "stddev: 0.009238706549227252",
            "extra": "mean: 444.3754635999994 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 3810.9758402971124,
            "unit": "iter/sec",
            "range": "stddev: 0.00021517352058059814",
            "extra": "mean: 262.3999841263853 usec\nrounds: 315"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 9.485394264231275,
            "unit": "iter/sec",
            "range": "stddev: 0.009549201032379821",
            "extra": "mean: 105.42524349999098 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 597.1151079572132,
            "unit": "iter/sec",
            "range": "stddev: 0.001380517801806108",
            "extra": "mean: 1.6747189723956135 msec\nrounds: 471"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_build_cache",
            "value": 1925.7735132062378,
            "unit": "iter/sec",
            "range": "stddev: 0.0001882473631311297",
            "extra": "mean: 519.2718630422386 usec\nrounds: 1840"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 224369.49431463933,
            "unit": "iter/sec",
            "range": "stddev: 0.000003907711626116781",
            "extra": "mean: 4.456933876214355 usec\nrounds: 13263"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 210465.44794543218,
            "unit": "iter/sec",
            "range": "stddev: 0.000004384788433157579",
            "extra": "mean: 4.751373727906502 usec\nrounds: 4324"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 210581.33389852376,
            "unit": "iter/sec",
            "range": "stddev: 0.000012645721602765919",
            "extra": "mean: 4.748758978238243 usec\nrounds: 38760"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 218625.28539156774,
            "unit": "iter/sec",
            "range": "stddev: 0.000004463489422681013",
            "extra": "mean: 4.574036338975864 usec\nrounds: 5201"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 194981.2608372406,
            "unit": "iter/sec",
            "range": "stddev: 0.0000214763791477301",
            "extra": "mean: 5.128697987211929 usec\nrounds: 6109"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 6519.215181700691,
            "unit": "iter/sec",
            "range": "stddev: 0.0000867588932973532",
            "extra": "mean: 153.3926971465799 usec\nrounds: 3084"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 6297.4140958595335,
            "unit": "iter/sec",
            "range": "stddev: 0.00011035570151975744",
            "extra": "mean: 158.79533801937637 usec\nrounds: 4624"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 6574.1309064929355,
            "unit": "iter/sec",
            "range": "stddev: 0.00009401910466507075",
            "extra": "mean: 152.1113610640687 usec\nrounds: 3534"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 6653.1779952806355,
            "unit": "iter/sec",
            "range": "stddev: 0.00008620836595596689",
            "extra": "mean: 150.3041104129996 usec\nrounds: 5090"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 6491.643918936086,
            "unit": "iter/sec",
            "range": "stddev: 0.00011345159909572794",
            "extra": "mean: 154.04418549252307 usec\nrounds: 5294"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 2427481.5041732383,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014382996135437268",
            "extra": "mean: 411.94958572527804 nsec\nrounds: 136987"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 2439835.6598452716,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010068716377505726",
            "extra": "mean: 409.8636709258988 nsec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 2470224.573278358,
            "unit": "iter/sec",
            "range": "stddev: 9.198712506561021e-7",
            "extra": "mean: 404.821493081059 nsec\nrounds: 147059"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 2544522.679970571,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016401501319738112",
            "extra": "mean: 393.001016603855 nsec\nrounds: 188680"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 2486995.3141399752,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010858664470909449",
            "extra": "mean: 402.09163013464996 nsec\nrounds: 156251"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 468297.0364574242,
            "unit": "iter/sec",
            "range": "stddev: 0.000009370745988331498",
            "extra": "mean: 2.1353968147328137 usec\nrounds: 39371"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 505436.46969591593,
            "unit": "iter/sec",
            "range": "stddev: 0.000002391329167105241",
            "extra": "mean: 1.9784880196746126 usec\nrounds: 17362"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 464546.1244237177,
            "unit": "iter/sec",
            "range": "stddev: 0.000009305634912739774",
            "extra": "mean: 2.1526387745469355 usec\nrounds: 62108"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 440393.9521607277,
            "unit": "iter/sec",
            "range": "stddev: 0.000015467381894928207",
            "extra": "mean: 2.2706942161527155 usec\nrounds: 23981"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 482101.2209074763,
            "unit": "iter/sec",
            "range": "stddev: 0.00000776286780445626",
            "extra": "mean: 2.07425319960332 usec\nrounds: 55553"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 7352.283817254984,
            "unit": "iter/sec",
            "range": "stddev: 0.00007847828802758166",
            "extra": "mean: 136.01215960313073 usec\nrounds: 3822"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 7052.924611281423,
            "unit": "iter/sec",
            "range": "stddev: 0.00011675916741032914",
            "extra": "mean: 141.78515369361267 usec\nrounds: 4021"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 7220.0387407807475,
            "unit": "iter/sec",
            "range": "stddev: 0.00010249852888170771",
            "extra": "mean: 138.5034119487098 usec\nrounds: 4804"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 6987.360414412574,
            "unit": "iter/sec",
            "range": "stddev: 0.0000954951068330486",
            "extra": "mean: 143.11556019599854 usec\nrounds: 5100"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 6861.984943917448,
            "unit": "iter/sec",
            "range": "stddev: 0.00008331959193657745",
            "extra": "mean: 145.73042759098632 usec\nrounds: 4371"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 103490.39114176987,
            "unit": "iter/sec",
            "range": "stddev: 0.000019613184032918336",
            "extra": "mean: 9.662732829274127 usec\nrounds: 29498"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 103035.79870564103,
            "unit": "iter/sec",
            "range": "stddev: 0.000022430436982445207",
            "extra": "mean: 9.705364665118587 usec\nrounds: 30395"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 161388.29184536394,
            "unit": "iter/sec",
            "range": "stddev: 0.000004422466001623687",
            "extra": "mean: 6.1962363475422455 usec\nrounds: 2289"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 155892.4738806497,
            "unit": "iter/sec",
            "range": "stddev: 0.000004138909259517824",
            "extra": "mean: 6.414677855234973 usec\nrounds: 4290"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[meter]",
            "value": 592239.5431594172,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030680480105202006",
            "extra": "mean: 1.6885059627482915 usec\nrounds: 52911"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[angstrom]",
            "value": 533679.6853502468,
            "unit": "iter/sec",
            "range": "stddev: 0.000017020844942790142",
            "extra": "mean: 1.8737831464274557 usec\nrounds: 57804"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[kilometer/second]",
            "value": 563817.0492002096,
            "unit": "iter/sec",
            "range": "stddev: 0.000008333141051338022",
            "extra": "mean: 1.7736249753683897 usec\nrounds: 15175"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[angstrom/minute]",
            "value": 571739.1306796182,
            "unit": "iter/sec",
            "range": "stddev: 0.000009061948744091917",
            "extra": "mean: 1.7490494289087999 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[meter]",
            "value": 821814.720917466,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019991221084121766",
            "extra": "mean: 1.2168192836502243 usec\nrounds: 39681"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[angstrom]",
            "value": 801662.4454287516,
            "unit": "iter/sec",
            "range": "stddev: 0.000007285674999138452",
            "extra": "mean: 1.2474078157237014 usec\nrounds: 188644"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[kilometer/second]",
            "value": 793946.1695615352,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062893043736426885",
            "extra": "mean: 1.2595312356658388 usec\nrounds: 147059"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[angstrom/minute]",
            "value": 829729.8060854954,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036417145463705615",
            "extra": "mean: 1.2052116154749297 usec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_convert_from_uc[key0]",
            "value": 41212.05514786143,
            "unit": "iter/sec",
            "range": "stddev: 0.00003250096690676643",
            "extra": "mean: 24.264744779462713 usec\nrounds: 9243"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_convert_from_uc[key1]",
            "value": 41184.966985686544,
            "unit": "iter/sec",
            "range": "stddev: 0.000037946064300618384",
            "extra": "mean: 24.280704178967557 usec\nrounds: 5767"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_math_expression",
            "value": 5773.986055491817,
            "unit": "iter/sec",
            "range": "stddev: 0.00009868869925225113",
            "extra": "mean: 173.1905810629503 usec\nrounds: 2936"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 126541.33007184221,
            "unit": "iter/sec",
            "range": "stddev: 0.00002008411543627046",
            "extra": "mean: 7.902556417197946 usec\nrounds: 67568"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 123940.98729641689,
            "unit": "iter/sec",
            "range": "stddev: 0.000017502673115687313",
            "extra": "mean: 8.068355931427293 usec\nrounds: 78119"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 37597.965352100575,
            "unit": "iter/sec",
            "range": "stddev: 0.000054807119353306574",
            "extra": "mean: 26.597183933628223 usec\nrounds: 30212"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 11150480.043928768,
            "unit": "iter/sec",
            "range": "stddev: 1.911092963256766e-7",
            "extra": "mean: 89.68223754130605 nsec\nrounds: 123457"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 10861656.206597194,
            "unit": "iter/sec",
            "range": "stddev: 1.7289068517092794e-7",
            "extra": "mean: 92.06699061166206 nsec\nrounds: 123457"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 9919302.16775139,
            "unit": "iter/sec",
            "range": "stddev: 2.1741136530330663e-7",
            "extra": "mean: 100.81354344174969 nsec\nrounds: 121952"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 11090493.226565951,
            "unit": "iter/sec",
            "range": "stddev: 3.4122018718018887e-7",
            "extra": "mean: 90.16731533671202 nsec\nrounds: 121952"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 10991978.862919489,
            "unit": "iter/sec",
            "range": "stddev: 2.0618857821401351e-7",
            "extra": "mean: 90.97542967197846 nsec\nrounds: 133334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 10937516.224930935,
            "unit": "iter/sec",
            "range": "stddev: 1.722705926089644e-7",
            "extra": "mean: 91.42843580153375 nsec\nrounds: 138889"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 90797.60912222852,
            "unit": "iter/sec",
            "range": "stddev: 0.00002020035997880793",
            "extra": "mean: 11.0135058584399 usec\nrounds: 28249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 18836.209483879717,
            "unit": "iter/sec",
            "range": "stddev: 0.00004102312073563794",
            "extra": "mean: 53.089237558958644 usec\nrounds: 7013"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 86542.93793672038,
            "unit": "iter/sec",
            "range": "stddev: 0.000029691993223661293",
            "extra": "mean: 11.55495784914528 usec\nrounds: 22372"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 18291.1403758283,
            "unit": "iter/sec",
            "range": "stddev: 0.00005182485162887171",
            "extra": "mean: 54.67127688339747 usec\nrounds: 8137"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 92081.45729419905,
            "unit": "iter/sec",
            "range": "stddev: 0.000032686518070416345",
            "extra": "mean: 10.859949759537505 usec\nrounds: 22472"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 20866.406097506933,
            "unit": "iter/sec",
            "range": "stddev: 0.00003132106824847944",
            "extra": "mean: 47.92392112599963 usec\nrounds: 7531"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 19741.88758896777,
            "unit": "iter/sec",
            "range": "stddev: 0.00006915665816929078",
            "extra": "mean: 50.653717659643824 usec\nrounds: 10374"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 94299.07663429879,
            "unit": "iter/sec",
            "range": "stddev: 0.000020338247549450313",
            "extra": "mean: 10.604557708217012 usec\nrounds: 26738"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 19805.795547876474,
            "unit": "iter/sec",
            "range": "stddev: 0.000054013524230529726",
            "extra": "mean: 50.49027177841475 usec\nrounds: 9390"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 94710.35148249616,
            "unit": "iter/sec",
            "range": "stddev: 0.000023604234773838834",
            "extra": "mean: 10.558507959764192 usec\nrounds: 17212"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 19911.50284937889,
            "unit": "iter/sec",
            "range": "stddev: 0.000041594672197273235",
            "extra": "mean: 50.2222261958089 usec\nrounds: 9200"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 88445.97699021183,
            "unit": "iter/sec",
            "range": "stddev: 0.000037555993848232487",
            "extra": "mean: 11.306336749614609 usec\nrounds: 17954"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 84312.96132290512,
            "unit": "iter/sec",
            "range": "stddev: 0.00004241963295556579",
            "extra": "mean: 11.860572613149719 usec\nrounds: 17731"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 19423.118362955753,
            "unit": "iter/sec",
            "range": "stddev: 0.000047637888102536415",
            "extra": "mean: 51.48503866954879 usec\nrounds: 6465"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 88787.3950039297,
            "unit": "iter/sec",
            "range": "stddev: 0.000021496561851405616",
            "extra": "mean: 11.262860003446889 usec\nrounds: 30865"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 19818.83271490853,
            "unit": "iter/sec",
            "range": "stddev: 0.000036706846969696354",
            "extra": "mean: 50.45705841433129 usec\nrounds: 6762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 93654.41811685519,
            "unit": "iter/sec",
            "range": "stddev: 0.000031961525267130994",
            "extra": "mean: 10.677552859837029 usec\nrounds: 30581"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 19357.717023836907,
            "unit": "iter/sec",
            "range": "stddev: 0.00005110857783859792",
            "extra": "mean: 51.658984309389865 usec\nrounds: 9050"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 19849.632067507548,
            "unit": "iter/sec",
            "range": "stddev: 0.00004873933512812124",
            "extra": "mean: 50.37876755594527 usec\nrounds: 6707"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 90017.48078072722,
            "unit": "iter/sec",
            "range": "stddev: 0.00001974504182220627",
            "extra": "mean: 11.10895340912607 usec\nrounds: 24876"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 19255.97855121745,
            "unit": "iter/sec",
            "range": "stddev: 0.00006211798702140439",
            "extra": "mean: 51.93192323829087 usec\nrounds: 9067"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 96270.07299056521,
            "unit": "iter/sec",
            "range": "stddev: 0.00000900835315229421",
            "extra": "mean: 10.387444082420124 usec\nrounds: 23311"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 19237.91722796846,
            "unit": "iter/sec",
            "range": "stddev: 0.00005406006725622951",
            "extra": "mean: 51.98067899710996 usec\nrounds: 7975"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 92124.31954873397,
            "unit": "iter/sec",
            "range": "stddev: 0.000021393242941374757",
            "extra": "mean: 10.854897001122465 usec\nrounds: 16340"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 90205.09159948255,
            "unit": "iter/sec",
            "range": "stddev: 0.000024127952098251128",
            "extra": "mean: 11.085848728363095 usec\nrounds: 30865"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 19300.373364491737,
            "unit": "iter/sec",
            "range": "stddev: 0.00010311163650204935",
            "extra": "mean: 51.81246917428917 usec\nrounds: 9067"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 93462.27335195066,
            "unit": "iter/sec",
            "range": "stddev: 0.000021919294844606387",
            "extra": "mean: 10.699504346896232 usec\nrounds: 26456"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 20045.421757383778,
            "unit": "iter/sec",
            "range": "stddev: 0.000044118909156644635",
            "extra": "mean: 49.88670291417778 usec\nrounds: 6143"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 91180.40819457932,
            "unit": "iter/sec",
            "range": "stddev: 0.00003284873888245928",
            "extra": "mean: 10.967268295904056 usec\nrounds: 36497"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 20306.318338233392,
            "unit": "iter/sec",
            "range": "stddev: 0.0000338650618932312",
            "extra": "mean: 49.24575609145099 usec\nrounds: 7593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 19570.358129611148,
            "unit": "iter/sec",
            "range": "stddev: 0.00008229215099366155",
            "extra": "mean: 51.09768525323708 usec\nrounds: 8124"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 91968.67438977884,
            "unit": "iter/sec",
            "range": "stddev: 0.00003491802654959933",
            "extra": "mean: 10.873267518914433 usec\nrounds: 24331"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 20643.281585492048,
            "unit": "iter/sec",
            "range": "stddev: 0.00004073546534460136",
            "extra": "mean: 48.441910548892224 usec\nrounds: 8977"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 95514.05406816922,
            "unit": "iter/sec",
            "range": "stddev: 0.000018916403807423944",
            "extra": "mean: 10.46966344121768 usec\nrounds: 26456"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 19481.658264718775,
            "unit": "iter/sec",
            "range": "stddev: 0.0000733139124526708",
            "extra": "mean: 51.33033268584723 usec\nrounds: 6694"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 94173.74673092511,
            "unit": "iter/sec",
            "range": "stddev: 0.00001953485818077385",
            "extra": "mean: 10.6186706456229 usec\nrounds: 28902"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 95326.69834622667,
            "unit": "iter/sec",
            "range": "stddev: 0.000020544547196727283",
            "extra": "mean: 10.490240586829083 usec\nrounds: 30675"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 19825.278878421315,
            "unit": "iter/sec",
            "range": "stddev: 0.00004810566811673815",
            "extra": "mean: 50.44065236774263 usec\nrounds: 7856"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 94245.08741763796,
            "unit": "iter/sec",
            "range": "stddev: 0.00002056780694395463",
            "extra": "mean: 10.610632632432043 usec\nrounds: 30675"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 19177.45227430057,
            "unit": "iter/sec",
            "range": "stddev: 0.000048508022227467687",
            "extra": "mean: 52.14456986760883 usec\nrounds: 8788"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 95518.40082065269,
            "unit": "iter/sec",
            "range": "stddev: 0.000019599277316045758",
            "extra": "mean: 10.469186998614232 usec\nrounds: 29412"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 19677.30094540875,
            "unit": "iter/sec",
            "range": "stddev: 0.0000804075645904351",
            "extra": "mean: 50.81997794180848 usec\nrounds: 8795"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 20651.443042261115,
            "unit": "iter/sec",
            "range": "stddev: 0.000029009005760928738",
            "extra": "mean: 48.42276629064613 usec\nrounds: 10021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 97228.56958577018,
            "unit": "iter/sec",
            "range": "stddev: 0.000023453106022955745",
            "extra": "mean: 10.28504280439763 usec\nrounds: 28572"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 20702.42678411592,
            "unit": "iter/sec",
            "range": "stddev: 0.00003055080455108613",
            "extra": "mean: 48.30351583550856 usec\nrounds: 6473"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 95162.6244843272,
            "unit": "iter/sec",
            "range": "stddev: 0.000027574504958129188",
            "extra": "mean: 10.508327249472769 usec\nrounds: 26738"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 19474.966380422025,
            "unit": "iter/sec",
            "range": "stddev: 0.00008116760363208494",
            "extra": "mean: 51.347970541571215 usec\nrounds: 6959"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 92556.45570756085,
            "unit": "iter/sec",
            "range": "stddev: 0.000020489601089776928",
            "extra": "mean: 10.804216651938098 usec\nrounds: 23697"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 96960.30153356046,
            "unit": "iter/sec",
            "range": "stddev: 0.00001727885827442343",
            "extra": "mean: 10.313499279433184 usec\nrounds: 20121"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 20395.04634288615,
            "unit": "iter/sec",
            "range": "stddev: 0.000038936426644679155",
            "extra": "mean: 49.03151398568912 usec\nrounds: 7722"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 93224.36604067324,
            "unit": "iter/sec",
            "range": "stddev: 0.000016341196917087255",
            "extra": "mean: 10.726809336131135 usec\nrounds: 15724"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 19991.49332971924,
            "unit": "iter/sec",
            "range": "stddev: 0.00003899888362879215",
            "extra": "mean: 50.02127572498077 usec\nrounds: 6035"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 97787.78899597666,
            "unit": "iter/sec",
            "range": "stddev: 0.000020950796085143452",
            "extra": "mean: 10.226225690010677 usec\nrounds: 30121"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 20233.086834878355,
            "unit": "iter/sec",
            "range": "stddev: 0.000035026961678379284",
            "extra": "mean: 49.423995861875724 usec\nrounds: 7975"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 18949.31922695219,
            "unit": "iter/sec",
            "range": "stddev: 0.00005958724814988671",
            "extra": "mean: 52.77234437940493 usec\nrounds: 8540"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 92825.9679097909,
            "unit": "iter/sec",
            "range": "stddev: 0.00002421784596810821",
            "extra": "mean: 10.77284753951404 usec\nrounds: 23042"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 20650.778857215566,
            "unit": "iter/sec",
            "range": "stddev: 0.0000359298887621813",
            "extra": "mean: 48.424323698115195 usec\nrounds: 8026"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 96168.11898307387,
            "unit": "iter/sec",
            "range": "stddev: 0.000017695044477003402",
            "extra": "mean: 10.398456479906878 usec\nrounds: 23311"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 20604.23318398643,
            "unit": "iter/sec",
            "range": "stddev: 0.000046293699288796044",
            "extra": "mean: 48.53371591509642 usec\nrounds: 7716"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 92703.11484107171,
            "unit": "iter/sec",
            "range": "stddev: 0.000024703837176877806",
            "extra": "mean: 10.78712405418501 usec\nrounds: 25642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 94709.33085347789,
            "unit": "iter/sec",
            "range": "stddev: 0.00002234847869821602",
            "extra": "mean: 10.55862174284677 usec\nrounds: 16695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 19935.146358115213,
            "unit": "iter/sec",
            "range": "stddev: 0.0000411143399596699",
            "extra": "mean: 50.162661564454446 usec\nrounds: 6010"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 94507.13616251477,
            "unit": "iter/sec",
            "range": "stddev: 0.000019235742149886662",
            "extra": "mean: 10.581211542379158 usec\nrounds: 19268"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 19348.38250073928,
            "unit": "iter/sec",
            "range": "stddev: 0.00004748385388276896",
            "extra": "mean: 51.68390690858997 usec\nrounds: 8164"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 96803.53344087818,
            "unit": "iter/sec",
            "range": "stddev: 0.00003613651192592019",
            "extra": "mean: 10.330201434338553 usec\nrounds: 30675"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 19124.928600884024,
            "unit": "iter/sec",
            "range": "stddev: 0.00006473421285638584",
            "extra": "mean: 52.28777690462993 usec\nrounds: 7508"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 19082.525873893108,
            "unit": "iter/sec",
            "range": "stddev: 0.00009086169053289265",
            "extra": "mean: 52.40396405635716 usec\nrounds: 5453"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 94899.6598414615,
            "unit": "iter/sec",
            "range": "stddev: 0.000020059705087275853",
            "extra": "mean: 10.53744556798824 usec\nrounds: 23148"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 19368.354535865965,
            "unit": "iter/sec",
            "range": "stddev: 0.00004392463637344577",
            "extra": "mean: 51.6306120970792 usec\nrounds: 7043"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 97550.90599606355,
            "unit": "iter/sec",
            "range": "stddev: 0.000019333973141072786",
            "extra": "mean: 10.251058047993453 usec\nrounds: 24876"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 20355.87387928926,
            "unit": "iter/sec",
            "range": "stddev: 0.00004203218662644063",
            "extra": "mean: 49.12586931565897 usec\nrounds: 8555"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 94763.34927456439,
            "unit": "iter/sec",
            "range": "stddev: 0.000037842101332494365",
            "extra": "mean: 10.552602959427183 usec\nrounds: 28249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 59364.820863134686,
            "unit": "iter/sec",
            "range": "stddev: 0.000024884377779209117",
            "extra": "mean: 16.844993136684355 usec\nrounds: 40651"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 53590.618219987686,
            "unit": "iter/sec",
            "range": "stddev: 0.00006789288011118279",
            "extra": "mean: 18.659982534536805 usec\nrounds: 31949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 58702.79998911774,
            "unit": "iter/sec",
            "range": "stddev: 0.0000271512902745256",
            "extra": "mean: 17.034962560310223 usec\nrounds: 38462"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 55389.99474576173,
            "unit": "iter/sec",
            "range": "stddev: 0.00003273205810008632",
            "extra": "mean: 18.053802037533444 usec\nrounds: 37593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 57575.277478687574,
            "unit": "iter/sec",
            "range": "stddev: 0.00003326179641890047",
            "extra": "mean: 17.368565880905503 usec\nrounds: 38911"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 53526.210339725636,
            "unit": "iter/sec",
            "range": "stddev: 0.0000497649212156473",
            "extra": "mean: 18.68243601878589 usec\nrounds: 37175"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 56587.98728542657,
            "unit": "iter/sec",
            "range": "stddev: 0.00002167478765924212",
            "extra": "mean: 17.67159512064031 usec\nrounds: 35087"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 58389.40933854756,
            "unit": "iter/sec",
            "range": "stddev: 0.000028267636835888544",
            "extra": "mean: 17.126393490331463 usec\nrounds: 40001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 55297.80965554574,
            "unit": "iter/sec",
            "range": "stddev: 0.000037031512767149316",
            "extra": "mean: 18.083898914424932 usec\nrounds: 32052"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 58400.1438725755,
            "unit": "iter/sec",
            "range": "stddev: 0.00004141113770893509",
            "extra": "mean: 17.12324548689334 usec\nrounds: 40161"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 52437.36746406923,
            "unit": "iter/sec",
            "range": "stddev: 0.00004759715568489472",
            "extra": "mean: 19.070370012095154 usec\nrounds: 35461"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 52867.54837051504,
            "unit": "iter/sec",
            "range": "stddev: 0.00007878928988434975",
            "extra": "mean: 18.915195253459377 usec\nrounds: 30212"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 59558.66039681351,
            "unit": "iter/sec",
            "range": "stddev: 0.000021262577854210053",
            "extra": "mean: 16.790169445340677 usec\nrounds: 34247"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 52588.25739400786,
            "unit": "iter/sec",
            "range": "stddev: 0.00003856971163786716",
            "extra": "mean: 19.015651964043677 usec\nrounds: 38315"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 57124.5324514327,
            "unit": "iter/sec",
            "range": "stddev: 0.00002316691983724715",
            "extra": "mean: 17.505613736973697 usec\nrounds: 38611"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 50582.578328618816,
            "unit": "iter/sec",
            "range": "stddev: 0.000040861970083866745",
            "extra": "mean: 19.76965257688764 usec\nrounds: 34966"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 52399.802675015526,
            "unit": "iter/sec",
            "range": "stddev: 0.00006302088238100492",
            "extra": "mean: 19.084041331262583 usec\nrounds: 38760"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 54752.54855378816,
            "unit": "iter/sec",
            "range": "stddev: 0.000034010933973122746",
            "extra": "mean: 18.26399001349889 usec\nrounds: 29940"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 57400.308979380025,
            "unit": "iter/sec",
            "range": "stddev: 0.00003137803420870769",
            "extra": "mean: 17.421509008936365 usec\nrounds: 39683"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 59314.0968818502,
            "unit": "iter/sec",
            "range": "stddev: 0.00003204538581000674",
            "extra": "mean: 16.859398567459177 usec\nrounds: 39371"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 55728.01992668767,
            "unit": "iter/sec",
            "range": "stddev: 0.00003931069358135108",
            "extra": "mean: 17.944294473687346 usec\nrounds: 34723"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 60729.239835832595,
            "unit": "iter/sec",
            "range": "stddev: 0.000025025859954961003",
            "extra": "mean: 16.466532476007732 usec\nrounds: 40984"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 53404.06444440386,
            "unit": "iter/sec",
            "range": "stddev: 0.00008585596014867173",
            "extra": "mean: 18.725166528121598 usec\nrounds: 36102"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 55592.4208446062,
            "unit": "iter/sec",
            "range": "stddev: 0.000053886741163686744",
            "extra": "mean: 17.988063567068497 usec\nrounds: 33445"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 55369.86139363613,
            "unit": "iter/sec",
            "range": "stddev: 0.00005292039682210235",
            "extra": "mean: 18.06036668379549 usec\nrounds: 36631"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 53315.47667836576,
            "unit": "iter/sec",
            "range": "stddev: 0.00003404755764286686",
            "extra": "mean: 18.75627983282719 usec\nrounds: 28249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 55899.135353842576,
            "unit": "iter/sec",
            "range": "stddev: 0.000044069404500834576",
            "extra": "mean: 17.889364364403516 usec\nrounds: 35212"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 57065.44570614978,
            "unit": "iter/sec",
            "range": "stddev: 0.000030694898032516786",
            "extra": "mean: 17.52373941227682 usec\nrounds: 32680"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 60042.935417861634,
            "unit": "iter/sec",
            "range": "stddev: 0.000028451698182000525",
            "extra": "mean: 16.654748690093506 usec\nrounds: 38168"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 54996.80236612761,
            "unit": "iter/sec",
            "range": "stddev: 0.00003178614021746922",
            "extra": "mean: 18.182875312327205 usec\nrounds: 34013"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 57313.126601954005,
            "unit": "iter/sec",
            "range": "stddev: 0.00004178392826189445",
            "extra": "mean: 17.44800989387842 usec\nrounds: 39216"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 57620.220164330036,
            "unit": "iter/sec",
            "range": "stddev: 0.00006474458211967",
            "extra": "mean: 17.355018726899154 usec\nrounds: 32787"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 54433.691754903186,
            "unit": "iter/sec",
            "range": "stddev: 0.000031171658672578445",
            "extra": "mean: 18.370975176599586 usec\nrounds: 35088"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 58041.04810435047,
            "unit": "iter/sec",
            "range": "stddev: 0.00005189915928229863",
            "extra": "mean: 17.2291857687016 usec\nrounds: 36497"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 54705.05697764517,
            "unit": "iter/sec",
            "range": "stddev: 0.00003152578839414815",
            "extra": "mean: 18.279845689743873 usec\nrounds: 35461"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 60817.91676256234,
            "unit": "iter/sec",
            "range": "stddev: 0.0000325697400587471",
            "extra": "mean: 16.442523079244463 usec\nrounds: 39841"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 64555.444362318274,
            "unit": "iter/sec",
            "range": "stddev: 0.00005525667046616116",
            "extra": "mean: 15.490560244423179 usec\nrounds: 35970"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 55088.41192968059,
            "unit": "iter/sec",
            "range": "stddev: 0.000021295937893263723",
            "extra": "mean: 18.152638004458776 usec\nrounds: 35843"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 60763.61883836337,
            "unit": "iter/sec",
            "range": "stddev: 0.00005740971655298828",
            "extra": "mean: 16.457215997290895 usec\nrounds: 32468"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 53500.63276825571,
            "unit": "iter/sec",
            "range": "stddev: 0.000026908994991112228",
            "extra": "mean: 18.69136771394121 usec\nrounds: 34603"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 61503.68502727324,
            "unit": "iter/sec",
            "range": "stddev: 0.000031072054560083234",
            "extra": "mean: 16.25918836499893 usec\nrounds: 31646"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 53997.15069943313,
            "unit": "iter/sec",
            "range": "stddev: 0.00003934259130230766",
            "extra": "mean: 18.519495696473818 usec\nrounds: 33113"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 54230.55188851584,
            "unit": "iter/sec",
            "range": "stddev: 0.000027459126795645624",
            "extra": "mean: 18.439790213747866 usec\nrounds: 33558"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 60896.69829060774,
            "unit": "iter/sec",
            "range": "stddev: 0.00003573718924693192",
            "extra": "mean: 16.42125153038441 usec\nrounds: 39371"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 51909.64511159641,
            "unit": "iter/sec",
            "range": "stddev: 0.000039103139576219914",
            "extra": "mean: 19.26424266338519 usec\nrounds: 33223"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 61522.4399309173,
            "unit": "iter/sec",
            "range": "stddev: 0.00005157008276485073",
            "extra": "mean: 16.25423180749798 usec\nrounds: 35715"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 53505.89260275978,
            "unit": "iter/sec",
            "range": "stddev: 0.00004621208904688701",
            "extra": "mean: 18.68953028079044 usec\nrounds: 33784"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 60188.6155420493,
            "unit": "iter/sec",
            "range": "stddev: 0.000038933292390586354",
            "extra": "mean: 16.61443764728854 usec\nrounds: 38611"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 62960.7648545244,
            "unit": "iter/sec",
            "range": "stddev: 0.00002466421565157527",
            "extra": "mean: 15.882907431486505 usec\nrounds: 40651"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 57051.27561502332,
            "unit": "iter/sec",
            "range": "stddev: 0.000027865689779422753",
            "extra": "mean: 17.528091865077773 usec\nrounds: 33669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 61587.264128291165,
            "unit": "iter/sec",
            "range": "stddev: 0.000034343667814299594",
            "extra": "mean: 16.23712327790565 usec\nrounds: 37314"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 55076.682624231566,
            "unit": "iter/sec",
            "range": "stddev: 0.000030389164611412124",
            "extra": "mean: 18.156503847964863 usec\nrounds: 31446"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 62778.88266930352,
            "unit": "iter/sec",
            "range": "stddev: 0.000022305691172047053",
            "extra": "mean: 15.9289231901058 usec\nrounds: 35972"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 53021.722387931506,
            "unit": "iter/sec",
            "range": "stddev: 0.000025819829839814487",
            "extra": "mean: 18.860194557308727 usec\nrounds: 34247"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 50562.66887861798,
            "unit": "iter/sec",
            "range": "stddev: 0.000050059606887506113",
            "extra": "mean: 19.777437033646805 usec\nrounds: 34844"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 60974.79999874317,
            "unit": "iter/sec",
            "range": "stddev: 0.000025145322743984672",
            "extra": "mean: 16.40021779523036 usec\nrounds: 35088"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 54411.158276185975,
            "unit": "iter/sec",
            "range": "stddev: 0.000022778873060299573",
            "extra": "mean: 18.37858321126143 usec\nrounds: 34130"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 63537.83599955809,
            "unit": "iter/sec",
            "range": "stddev: 0.00003298965287846708",
            "extra": "mean: 15.738653737073374 usec\nrounds: 22223"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 54467.94857818222,
            "unit": "iter/sec",
            "range": "stddev: 0.000025179805264631358",
            "extra": "mean: 18.35942101921866 usec\nrounds: 34483"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 61511.418622231475,
            "unit": "iter/sec",
            "range": "stddev: 0.00003418872263734904",
            "extra": "mean: 16.257144159549263 usec\nrounds: 37736"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 58649.971998629066,
            "unit": "iter/sec",
            "range": "stddev: 0.0000931256237848192",
            "extra": "mean: 17.050306520578985 usec\nrounds: 24876"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 53888.09081785731,
            "unit": "iter/sec",
            "range": "stddev: 0.000025490325430566353",
            "extra": "mean: 18.556975851677834 usec\nrounds: 32259"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 61502.6598532273,
            "unit": "iter/sec",
            "range": "stddev: 0.00002332010813706261",
            "extra": "mean: 16.25945938576388 usec\nrounds: 36231"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 55380.028321994534,
            "unit": "iter/sec",
            "range": "stddev: 0.00002798246506277846",
            "extra": "mean: 18.05705107598949 usec\nrounds: 37454"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 61144.897721256224,
            "unit": "iter/sec",
            "range": "stddev: 0.000027270913871570766",
            "extra": "mean: 16.35459436957015 usec\nrounds: 24510"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 55356.81185356898,
            "unit": "iter/sec",
            "range": "stddev: 0.00004118631286384491",
            "extra": "mean: 18.06462414499631 usec\nrounds: 29240"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 54796.45441177392,
            "unit": "iter/sec",
            "range": "stddev: 0.00003080984775919174",
            "extra": "mean: 18.24935592520989 usec\nrounds: 30675"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 64131.685725447554,
            "unit": "iter/sec",
            "range": "stddev: 0.000024144754985918873",
            "extra": "mean: 15.592916180015497 usec\nrounds: 35970"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 55614.55133438596,
            "unit": "iter/sec",
            "range": "stddev: 0.00002698462245657977",
            "extra": "mean: 17.98090564441377 usec\nrounds: 32155"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 62872.21829479661,
            "unit": "iter/sec",
            "range": "stddev: 0.000022516733733988836",
            "extra": "mean: 15.905276243175935 usec\nrounds: 40001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 56324.38669240506,
            "unit": "iter/sec",
            "range": "stddev: 0.000025499686714185056",
            "extra": "mean: 17.754298958657685 usec\nrounds: 35336"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 62163.02269577264,
            "unit": "iter/sec",
            "range": "stddev: 0.00006344420211900301",
            "extra": "mean: 16.086733827182513 usec\nrounds: 39681"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 419027.6658739587,
            "unit": "iter/sec",
            "range": "stddev: 0.000008450640459497476",
            "extra": "mean: 2.386477269739022 usec\nrounds: 119048"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 32766.72606390249,
            "unit": "iter/sec",
            "range": "stddev: 0.000011991395243105437",
            "extra": "mean: 30.51876461657399 usec\nrounds: 667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 395815.2072016428,
            "unit": "iter/sec",
            "range": "stddev: 0.000009062970070690623",
            "extra": "mean: 2.52643148066457 usec\nrounds: 153847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 31134.843587923067,
            "unit": "iter/sec",
            "range": "stddev: 0.00004744478133004875",
            "extra": "mean: 32.118356309581436 usec\nrounds: 8313"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 411579.2351645894,
            "unit": "iter/sec",
            "range": "stddev: 0.000002390657938615356",
            "extra": "mean: 2.4296658202401846 usec\nrounds: 35843"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 32008.809587677497,
            "unit": "iter/sec",
            "range": "stddev: 0.000034218419727034924",
            "extra": "mean: 31.241399254815537 usec\nrounds: 9390"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 31749.25894164352,
            "unit": "iter/sec",
            "range": "stddev: 0.000038412140224427926",
            "extra": "mean: 31.49679814064455 usec\nrounds: 11186"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 416702.25280034135,
            "unit": "iter/sec",
            "range": "stddev: 0.000009783387133998034",
            "extra": "mean: 2.3997950413748783 usec\nrounds: 156251"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 32198.57263406974,
            "unit": "iter/sec",
            "range": "stddev: 0.00003292987168121252",
            "extra": "mean: 31.057277332284183 usec\nrounds: 11351"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 416202.9609055788,
            "unit": "iter/sec",
            "range": "stddev: 0.000008583767234332026",
            "extra": "mean: 2.402673920974011 usec\nrounds: 142858"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 31436.693547662853,
            "unit": "iter/sec",
            "range": "stddev: 0.0000834339249927859",
            "extra": "mean: 31.80996113614323 usec\nrounds: 9083"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 418879.7275129463,
            "unit": "iter/sec",
            "range": "stddev: 0.000006971769941379549",
            "extra": "mean: 2.387320116772882 usec\nrounds: 153847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 405464.9854841482,
            "unit": "iter/sec",
            "range": "stddev: 0.00000984580895316748",
            "extra": "mean: 2.4663042082559685 usec\nrounds: 94340"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 32987.577541677405,
            "unit": "iter/sec",
            "range": "stddev: 0.00005095402535909012",
            "extra": "mean: 30.314441814849015 usec\nrounds: 12675"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 425427.9337503048,
            "unit": "iter/sec",
            "range": "stddev: 0.000009334908668299374",
            "extra": "mean: 2.3505743762160365 usec\nrounds: 175439"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 33126.434719332006,
            "unit": "iter/sec",
            "range": "stddev: 0.00003123296872976698",
            "extra": "mean: 30.18737176133288 usec\nrounds: 11849"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 405761.4616703015,
            "unit": "iter/sec",
            "range": "stddev: 0.00001458310234404782",
            "extra": "mean: 2.4645021631269226 usec\nrounds: 19647"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 30684.12341798115,
            "unit": "iter/sec",
            "range": "stddev: 0.00002757089072383736",
            "extra": "mean: 32.5901439769986 usec\nrounds: 11099"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 32281.416873881328,
            "unit": "iter/sec",
            "range": "stddev: 0.000048570056441495294",
            "extra": "mean: 30.977574618451555 usec\nrounds: 12316"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 399159.5633673402,
            "unit": "iter/sec",
            "range": "stddev: 0.000006918861732959354",
            "extra": "mean: 2.505263788656157 usec\nrounds: 156250"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 30760.70674834042,
            "unit": "iter/sec",
            "range": "stddev: 0.000044901084836331844",
            "extra": "mean: 32.509005992001505 usec\nrounds: 11014"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 388018.0259554748,
            "unit": "iter/sec",
            "range": "stddev: 0.000010038255255089946",
            "extra": "mean: 2.5771998544076666 usec\nrounds: 125001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 31568.54174257988,
            "unit": "iter/sec",
            "range": "stddev: 0.00003576262912261554",
            "extra": "mean: 31.67710463645499 usec\nrounds: 11669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 402150.32475496706,
            "unit": "iter/sec",
            "range": "stddev: 0.000008423868924879332",
            "extra": "mean: 2.486632332348126 usec\nrounds: 138889"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 387873.7697479401,
            "unit": "iter/sec",
            "range": "stddev: 0.000013064737712593221",
            "extra": "mean: 2.5781583545849216 usec\nrounds: 126583"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 30838.643648070854,
            "unit": "iter/sec",
            "range": "stddev: 0.000040544603453115165",
            "extra": "mean: 32.42684767241883 usec\nrounds: 10031"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 405116.3369885576,
            "unit": "iter/sec",
            "range": "stddev: 0.000007908036654572672",
            "extra": "mean: 2.4684267423859647 usec\nrounds: 149254"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 31496.47488188913,
            "unit": "iter/sec",
            "range": "stddev: 0.00003782571456011995",
            "extra": "mean: 31.74958479480548 usec\nrounds: 10549"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 391447.6149166495,
            "unit": "iter/sec",
            "range": "stddev: 0.0000114832831846289",
            "extra": "mean: 2.5546202400873717 usec\nrounds: 117648"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 31646.961178896006,
            "unit": "iter/sec",
            "range": "stddev: 0.000034906533940090635",
            "extra": "mean: 31.598610506302162 usec\nrounds: 9461"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 32182.69392042947,
            "unit": "iter/sec",
            "range": "stddev: 0.000058479624839621965",
            "extra": "mean: 31.072600773336855 usec\nrounds: 11377"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 410057.15407374164,
            "unit": "iter/sec",
            "range": "stddev: 0.000012370226264684948",
            "extra": "mean: 2.4386844371947416 usec\nrounds: 149254"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 32223.22971228921,
            "unit": "iter/sec",
            "range": "stddev: 0.000026615462406824567",
            "extra": "mean: 31.033512435863084 usec\nrounds: 11338"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 418970.78317103407,
            "unit": "iter/sec",
            "range": "stddev: 0.000007851672766478997",
            "extra": "mean: 2.3868012762879833 usec\nrounds: 102031"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 33725.78618698619,
            "unit": "iter/sec",
            "range": "stddev: 0.00003135421171450431",
            "extra": "mean: 29.65090256030477 usec\nrounds: 10858"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 417910.5430768231,
            "unit": "iter/sec",
            "range": "stddev: 0.000005482897675588916",
            "extra": "mean: 2.392856597102345 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 195467.83087000964,
            "unit": "iter/sec",
            "range": "stddev: 0.00002057263177986916",
            "extra": "mean: 5.115931330230097 usec\nrounds: 88496"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 6636.850003506165,
            "unit": "iter/sec",
            "range": "stddev: 0.00016356770911909056",
            "extra": "mean: 150.6738888888121 usec\nrounds: 3060"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 100222.17806205885,
            "unit": "iter/sec",
            "range": "stddev: 0.00002402512301265569",
            "extra": "mean: 9.977831447454546 usec\nrounds: 26247"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 100870.89881699909,
            "unit": "iter/sec",
            "range": "stddev: 0.00001989260761551625",
            "extra": "mean: 9.913662034619213 usec\nrounds: 27778"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 131166.93849831997,
            "unit": "iter/sec",
            "range": "stddev: 0.00003117938356121953",
            "extra": "mean: 7.623872383152469 usec\nrounds: 3009"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 138931.8083654426,
            "unit": "iter/sec",
            "range": "stddev: 0.00005421687021858953",
            "extra": "mean: 7.197775741676278 usec\nrounds: 7148"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 23643.96415711174,
            "unit": "iter/sec",
            "range": "stddev: 0.000053097942508551324",
            "extra": "mean: 42.29409219854596 usec\nrounds: 16779"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 20497.697773480366,
            "unit": "iter/sec",
            "range": "stddev: 0.00004928709234651762",
            "extra": "mean: 48.785966651034634 usec\nrounds: 16612"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 257298.68318832092,
            "unit": "iter/sec",
            "range": "stddev: 0.000013480599782717907",
            "extra": "mean: 3.886533687652355 usec\nrounds: 55866"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 270790.3386826925,
            "unit": "iter/sec",
            "range": "stddev: 0.000009648278714119687",
            "extra": "mean: 3.692893937297309 usec\nrounds: 81301"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 202647.30796175165,
            "unit": "iter/sec",
            "range": "stddev: 0.000018185813199465746",
            "extra": "mean: 4.934681886762312 usec\nrounds: 64936"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 207697.89733595814,
            "unit": "iter/sec",
            "range": "stddev: 0.000014857385907839439",
            "extra": "mean: 4.814685236714107 usec\nrounds: 70418"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 64270.76885359161,
            "unit": "iter/sec",
            "range": "stddev: 0.000021129880001924097",
            "extra": "mean: 15.559172822064623 usec\nrounds: 19685"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 67269.27098746444,
            "unit": "iter/sec",
            "range": "stddev: 0.000020767918194790023",
            "extra": "mean: 14.865628619438274 usec\nrounds: 28491"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 48136.87512716985,
            "unit": "iter/sec",
            "range": "stddev: 0.00002838976401453199",
            "extra": "mean: 20.77409464902243 usec\nrounds: 23529"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 46882.54168640776,
            "unit": "iter/sec",
            "range": "stddev: 0.000031018657623894075",
            "extra": "mean: 21.32990158018504 usec\nrounds: 18797"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 68166.01077663043,
            "unit": "iter/sec",
            "range": "stddev: 0.000029823400575142398",
            "extra": "mean: 14.670067803686601 usec\nrounds: 23981"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 66480.60561711965,
            "unit": "iter/sec",
            "range": "stddev: 0.00002528445593395841",
            "extra": "mean: 15.041980901306449 usec\nrounds: 27855"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 59980.4678216144,
            "unit": "iter/sec",
            "range": "stddev: 0.000027255227346356245",
            "extra": "mean: 16.672094038580383 usec\nrounds: 24692"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 58753.867796948696,
            "unit": "iter/sec",
            "range": "stddev: 0.00003201435947924735",
            "extra": "mean: 17.02015607646402 usec\nrounds: 26109"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 72380.94334152674,
            "unit": "iter/sec",
            "range": "stddev: 0.000025787561785848132",
            "extra": "mean: 13.815791199094184 usec\nrounds: 18975"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 15276.34805351064,
            "unit": "iter/sec",
            "range": "stddev: 0.00013438905457067388",
            "extra": "mean: 65.46067139195557 usec\nrounds: 5925"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 15819.47871798195,
            "unit": "iter/sec",
            "range": "stddev: 0.000060218101639101824",
            "extra": "mean: 63.21320808525146 usec\nrounds: 6382"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 73391.72894816991,
            "unit": "iter/sec",
            "range": "stddev: 0.000019757942107509566",
            "extra": "mean: 13.625513587589845 usec\nrounds: 18657"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 58042.049970540334,
            "unit": "iter/sec",
            "range": "stddev: 0.00003968881533544254",
            "extra": "mean: 17.228888375023924 usec\nrounds: 21187"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 12097.909393467224,
            "unit": "iter/sec",
            "range": "stddev: 0.0001203883863107091",
            "extra": "mean: 82.65890969062738 usec\nrounds: 6068"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 12848.765258030724,
            "unit": "iter/sec",
            "range": "stddev: 0.00005617824621821613",
            "extra": "mean: 77.82849012475972 usec\nrounds: 5519"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 59747.78146811154,
            "unit": "iter/sec",
            "range": "stddev: 0.000034988628870128895",
            "extra": "mean: 16.737023123339196 usec\nrounds: 17731"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 69574.1893152052,
            "unit": "iter/sec",
            "range": "stddev: 0.00008054878188040152",
            "extra": "mean: 14.373146275115179 usec\nrounds: 22027"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 15594.230793574361,
            "unit": "iter/sec",
            "range": "stddev: 0.000051154928501841004",
            "extra": "mean: 64.12627934248943 usec\nrounds: 6390"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 15119.48901313721,
            "unit": "iter/sec",
            "range": "stddev: 0.0000646901644267951",
            "extra": "mean: 66.13980136042346 usec\nrounds: 6907"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 74052.82400618235,
            "unit": "iter/sec",
            "range": "stddev: 0.0000153797576022101",
            "extra": "mean: 13.503873936212267 usec\nrounds: 19268"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 60883.16106870499,
            "unit": "iter/sec",
            "range": "stddev: 0.00004546759954592829",
            "extra": "mean: 16.42490275548484 usec\nrounds: 19343"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 13593.224271720437,
            "unit": "iter/sec",
            "range": "stddev: 0.00008157478085094777",
            "extra": "mean: 73.56606350418393 usec\nrounds: 5228"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 13034.981677061125,
            "unit": "iter/sec",
            "range": "stddev: 0.000057585162952984214",
            "extra": "mean: 76.71664025119371 usec\nrounds: 6524"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 55536.713863414814,
            "unit": "iter/sec",
            "range": "stddev: 0.000026050887814651836",
            "extra": "mean: 18.006106779370622 usec\nrounds: 16314"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 47423.57610571461,
            "unit": "iter/sec",
            "range": "stddev: 0.00003750415179395661",
            "extra": "mean: 21.086558250496395 usec\nrounds: 22223"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 46498.684914837744,
            "unit": "iter/sec",
            "range": "stddev: 0.00002753923787528124",
            "extra": "mean: 21.505984563466644 usec\nrounds: 24876"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 45358.194396784165,
            "unit": "iter/sec",
            "range": "stddev: 0.0000586263886448081",
            "extra": "mean: 22.04673297292669 usec\nrounds: 27398"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 49700.40521659121,
            "unit": "iter/sec",
            "range": "stddev: 0.000027544637642714206",
            "extra": "mean: 20.120560298091405 usec\nrounds: 27248"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 37068.16974033315,
            "unit": "iter/sec",
            "range": "stddev: 0.000025459333590509655",
            "extra": "mean: 26.97732332092781 usec\nrounds: 8190"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 36641.96759542972,
            "unit": "iter/sec",
            "range": "stddev: 0.00004363099770611482",
            "extra": "mean: 27.291110866129586 usec\nrounds: 22676"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 36910.16678573234,
            "unit": "iter/sec",
            "range": "stddev: 0.000030490886571456973",
            "extra": "mean: 27.092806320955205 usec\nrounds: 9872"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 39588.35993921434,
            "unit": "iter/sec",
            "range": "stddev: 0.000032123292766841515",
            "extra": "mean: 25.259950185747602 usec\nrounds: 24752"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 55130.7378776719,
            "unit": "iter/sec",
            "range": "stddev: 0.000021596484104386377",
            "extra": "mean: 18.138701539218882 usec\nrounds: 7408"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 47931.40212563492,
            "unit": "iter/sec",
            "range": "stddev: 0.000022557316425794364",
            "extra": "mean: 20.863149327008205 usec\nrounds: 24155"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 45223.298520901284,
            "unit": "iter/sec",
            "range": "stddev: 0.00003405308223758882",
            "extra": "mean: 22.112495830834195 usec\nrounds: 23867"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 52705.15934711824,
            "unit": "iter/sec",
            "range": "stddev: 0.00003809759200619128",
            "extra": "mean: 18.973474558988826 usec\nrounds: 25510"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 42845.64287210374,
            "unit": "iter/sec",
            "range": "stddev: 0.000030361716168193474",
            "extra": "mean: 23.339596116810455 usec\nrounds: 16584"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 38988.054549490436,
            "unit": "iter/sec",
            "range": "stddev: 0.00003308565329367074",
            "extra": "mean: 25.648881729418576 usec\nrounds: 21882"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 39034.25912198153,
            "unit": "iter/sec",
            "range": "stddev: 0.00003246385886812727",
            "extra": "mean: 25.618521332120423 usec\nrounds: 17954"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 41672.73774226594,
            "unit": "iter/sec",
            "range": "stddev: 0.00005055098877546842",
            "extra": "mean: 23.996503569905013 usec\nrounds: 23810"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 59944.02772746024,
            "unit": "iter/sec",
            "range": "stddev: 0.00001778320563500346",
            "extra": "mean: 16.682229037837946 usec\nrounds: 10352"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 14711.656626597205,
            "unit": "iter/sec",
            "range": "stddev: 0.000060644952480012584",
            "extra": "mean: 67.97331023836567 usec\nrounds: 5831"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 15230.361312654752,
            "unit": "iter/sec",
            "range": "stddev: 0.00005939517384171851",
            "extra": "mean: 65.65832415079413 usec\nrounds: 6716"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 62528.498893476615,
            "unit": "iter/sec",
            "range": "stddev: 0.00002235502849356765",
            "extra": "mean: 15.992707608471417 usec\nrounds: 22422"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 53976.067740833874,
            "unit": "iter/sec",
            "range": "stddev: 0.00003711085310200421",
            "extra": "mean: 18.526729379426094 usec\nrounds: 10184"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 13005.183493366903,
            "unit": "iter/sec",
            "range": "stddev: 0.00006887716677482108",
            "extra": "mean: 76.8924175894969 usec\nrounds: 6322"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 12635.752973801431,
            "unit": "iter/sec",
            "range": "stddev: 0.0000684504775691159",
            "extra": "mean: 79.14051517732013 usec\nrounds: 6984"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 54239.97815805925,
            "unit": "iter/sec",
            "range": "stddev: 0.00003750765535748465",
            "extra": "mean: 18.436585595332048 usec\nrounds: 21882"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 226581.79251726213,
            "unit": "iter/sec",
            "range": "stddev: 0.000020962267486233203",
            "extra": "mean: 4.413417286933216 usec\nrounds: 31446"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 15886.174782750868,
            "unit": "iter/sec",
            "range": "stddev: 0.000043907417650056566",
            "extra": "mean: 62.94781554876225 usec\nrounds: 5904"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 15749.999295345398,
            "unit": "iter/sec",
            "range": "stddev: 0.00004713025464479727",
            "extra": "mean: 63.492066332696936 usec\nrounds: 6196"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 241326.50226494728,
            "unit": "iter/sec",
            "range": "stddev: 0.000012834977388064655",
            "extra": "mean: 4.143763700275741 usec\nrounds: 68028"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 206137.12684243647,
            "unit": "iter/sec",
            "range": "stddev: 0.000018497804301005638",
            "extra": "mean: 4.851139701604374 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 13578.569744112583,
            "unit": "iter/sec",
            "range": "stddev: 0.00006929302342628263",
            "extra": "mean: 73.64545889920265 usec\nrounds: 4051"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 13764.960882045993,
            "unit": "iter/sec",
            "range": "stddev: 0.00004695526218163205",
            "extra": "mean: 72.6482267962219 usec\nrounds: 5538"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 202009.3592567508,
            "unit": "iter/sec",
            "range": "stddev: 0.000020374469567102458",
            "extra": "mean: 4.9502656890714425 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 60289.49005584799,
            "unit": "iter/sec",
            "range": "stddev: 0.000029806575427079574",
            "extra": "mean: 16.58663888305689 usec\nrounds: 18692"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 16413.8090292854,
            "unit": "iter/sec",
            "range": "stddev: 0.00005910682678726053",
            "extra": "mean: 60.92431063477144 usec\nrounds: 6902"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 15956.956164698739,
            "unit": "iter/sec",
            "range": "stddev: 0.00007318458074947532",
            "extra": "mean: 62.668593538677534 usec\nrounds: 7553"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 56216.51145948577,
            "unit": "iter/sec",
            "range": "stddev: 0.00003466512011404066",
            "extra": "mean: 17.788368115312206 usec\nrounds: 23585"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 48503.38131732825,
            "unit": "iter/sec",
            "range": "stddev: 0.00005259640983646442",
            "extra": "mean: 20.617119319117272 usec\nrounds: 16921"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 14213.084903937479,
            "unit": "iter/sec",
            "range": "stddev: 0.000046225236314158954",
            "extra": "mean: 70.3577025507649 usec\nrounds: 3725"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 13117.12417656788,
            "unit": "iter/sec",
            "range": "stddev: 0.00007373273815332146",
            "extra": "mean: 76.23622270698453 usec\nrounds: 5725"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 48119.77395609219,
            "unit": "iter/sec",
            "range": "stddev: 0.000032603958344971244",
            "extra": "mean: 20.781477504704597 usec\nrounds: 22027"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 58084.06234709934,
            "unit": "iter/sec",
            "range": "stddev: 0.000031264545171861936",
            "extra": "mean: 17.216426668372293 usec\nrounds: 22371"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 16234.073026062983,
            "unit": "iter/sec",
            "range": "stddev: 0.00005264458271740519",
            "extra": "mean: 61.59883588022246 usec\nrounds: 6739"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 15491.677597684462,
            "unit": "iter/sec",
            "range": "stddev: 0.000045711859148092015",
            "extra": "mean: 64.55078823415934 usec\nrounds: 7003"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 58098.56575679573,
            "unit": "iter/sec",
            "range": "stddev: 0.00002693967704980957",
            "extra": "mean: 17.212128853336296 usec\nrounds: 23585"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 46124.983438458345,
            "unit": "iter/sec",
            "range": "stddev: 0.000052175066848202044",
            "extra": "mean: 21.68022458662206 usec\nrounds: 17953"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 13832.878389078474,
            "unit": "iter/sec",
            "range": "stddev: 0.00006625735749629954",
            "extra": "mean: 72.29153411697263 usec\nrounds: 3913"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 13857.589946928838,
            "unit": "iter/sec",
            "range": "stddev: 0.00006283294978342058",
            "extra": "mean: 72.1626201835784 usec\nrounds: 6411"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 45864.21394011803,
            "unit": "iter/sec",
            "range": "stddev: 0.0000540853486625004",
            "extra": "mean: 21.80349152621772 usec\nrounds: 22422"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 54197.35829674197,
            "unit": "iter/sec",
            "range": "stddev: 0.000028066313202300936",
            "extra": "mean: 18.451083806055436 usec\nrounds: 25189"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 47958.15614597698,
            "unit": "iter/sec",
            "range": "stddev: 0.00003599736949576425",
            "extra": "mean: 20.851510574263102 usec\nrounds: 23311"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 50355.38478136292,
            "unit": "iter/sec",
            "range": "stddev: 0.000034240077979490565",
            "extra": "mean: 19.858849343359818 usec\nrounds: 16667"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 50694.73580336614,
            "unit": "iter/sec",
            "range": "stddev: 0.00006353402058951998",
            "extra": "mean: 19.72591402544798 usec\nrounds: 19343"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 42793.07221273451,
            "unit": "iter/sec",
            "range": "stddev: 0.000032341961742711214",
            "extra": "mean: 23.36826846711923 usec\nrounds: 16367"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 39925.30934069187,
            "unit": "iter/sec",
            "range": "stddev: 0.00003814403182461188",
            "extra": "mean: 25.04676899223922 usec\nrounds: 21930"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 37368.82545492332,
            "unit": "iter/sec",
            "range": "stddev: 0.00006960311055740517",
            "extra": "mean: 26.760273779711497 usec\nrounds: 22372"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 43959.79929012924,
            "unit": "iter/sec",
            "range": "stddev: 0.000028329695396589415",
            "extra": "mean: 22.74805654593925 usec\nrounds: 18622"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 59391.42509682995,
            "unit": "iter/sec",
            "range": "stddev: 0.00005127947931897035",
            "extra": "mean: 16.837447466021075 usec\nrounds: 15409"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 50502.186960187195,
            "unit": "iter/sec",
            "range": "stddev: 0.000040322672043073044",
            "extra": "mean: 19.801122687782577 usec\nrounds: 21787"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 51484.118489498316,
            "unit": "iter/sec",
            "range": "stddev: 0.00002785992894782268",
            "extra": "mean: 19.423465514010484 usec\nrounds: 22676"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 55831.682354491764,
            "unit": "iter/sec",
            "range": "stddev: 0.00006292689414142654",
            "extra": "mean: 17.910977384681086 usec\nrounds: 25381"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 49569.380340942625,
            "unit": "iter/sec",
            "range": "stddev: 0.00003438179439362981",
            "extra": "mean: 20.17374421713386 usec\nrounds: 16557"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 43832.088203997635,
            "unit": "iter/sec",
            "range": "stddev: 0.000020090831408908776",
            "extra": "mean: 22.814336276791774 usec\nrounds: 16421"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 41831.07974093066,
            "unit": "iter/sec",
            "range": "stddev: 0.00005105854533434434",
            "extra": "mean: 23.905670286141934 usec\nrounds: 16208"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 50533.18112536338,
            "unit": "iter/sec",
            "range": "stddev: 0.000024263520684849994",
            "extra": "mean: 19.788977810820715 usec\nrounds: 22173"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 70331.69017111349,
            "unit": "iter/sec",
            "range": "stddev: 0.000023878142585396683",
            "extra": "mean: 14.218341654623257 usec\nrounds: 19268"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 17739.29273120697,
            "unit": "iter/sec",
            "range": "stddev: 0.00006626051904359966",
            "extra": "mean: 56.37203326831625 usec\nrounds: 6703"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 17432.9314289106,
            "unit": "iter/sec",
            "range": "stddev: 0.00011755337398240416",
            "extra": "mean: 57.36269910071522 usec\nrounds: 7893"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 67019.0628512596,
            "unit": "iter/sec",
            "range": "stddev: 0.000029927129177707525",
            "extra": "mean: 14.921127772546962 usec\nrounds: 25381"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 64335.82585905837,
            "unit": "iter/sec",
            "range": "stddev: 0.00002050769974419138",
            "extra": "mean: 15.54343923696134 usec\nrounds: 23641"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 14400.260214702557,
            "unit": "iter/sec",
            "range": "stddev: 0.00009354126214112892",
            "extra": "mean: 69.44318957368614 usec\nrounds: 6541"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 14892.042634994656,
            "unit": "iter/sec",
            "range": "stddev: 0.00004935915284565007",
            "extra": "mean: 67.14995548361583 usec\nrounds: 7458"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 64245.83180207763,
            "unit": "iter/sec",
            "range": "stddev: 0.000039775150524752233",
            "extra": "mean: 15.565212122721109 usec\nrounds: 19121"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 68242.40254914112,
            "unit": "iter/sec",
            "range": "stddev: 0.00002358570876585944",
            "extra": "mean: 14.6536458659981 usec\nrounds: 24214"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 16896.539508511214,
            "unit": "iter/sec",
            "range": "stddev: 0.0000929732852487643",
            "extra": "mean: 59.18371625718241 usec\nrounds: 6883"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 17309.36022676238,
            "unit": "iter/sec",
            "range": "stddev: 0.00005309245884203017",
            "extra": "mean: 57.772210347432605 usec\nrounds: 5876"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 66586.93584336425,
            "unit": "iter/sec",
            "range": "stddev: 0.00003475902802976768",
            "extra": "mean: 15.01796091582213 usec\nrounds: 25381"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 64620.03955737406,
            "unit": "iter/sec",
            "range": "stddev: 0.00002214432145614115",
            "extra": "mean: 15.475075639842839 usec\nrounds: 23202"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 14868.081482759491,
            "unit": "iter/sec",
            "range": "stddev: 0.000031113104161261835",
            "extra": "mean: 67.25817323234105 usec\nrounds: 5686"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 14574.883536812533,
            "unit": "iter/sec",
            "range": "stddev: 0.00006152949360235283",
            "extra": "mean: 68.61118289379456 usec\nrounds: 5495"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 63782.636126371115,
            "unit": "iter/sec",
            "range": "stddev: 0.00002820875296501682",
            "extra": "mean: 15.678248199380192 usec\nrounds: 19158"
          }
        ]
      }
    ]
  }
}