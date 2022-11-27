window.BENCHMARK_DATA = {
  "lastUpdate": 1669515421121,
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
      }
    ]
  }
}