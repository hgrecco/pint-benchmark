window.BENCHMARK_DATA = {
  "lastUpdate": 1669526184194,
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
          "id": "a5f4d6b7fc3d19b6d74bd50fc0f18c7e935ca3c4",
          "message": "Pint 0.13",
          "timestamp": "2022-11-26T23:23:26-03:00",
          "tree_id": "d5700260f6a33f1edd8f8676a4e252d9688b60d2",
          "url": "https://github.com/hgrecco/pint-benchmark/commit/a5f4d6b7fc3d19b6d74bd50fc0f18c7e935ca3c4"
        },
        "date": 1669524351928,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 4.068674310660518,
            "unit": "iter/sec",
            "range": "stddev: 0.003995300342757486",
            "extra": "mean: 245.7803017999879 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 10281.182290474295,
            "unit": "iter/sec",
            "range": "stddev: 0.00023404725769899024",
            "extra": "mean: 97.26507825141069 usec\nrounds: 4575"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 6.94585374990129,
            "unit": "iter/sec",
            "range": "stddev: 0.00721489439643947",
            "extra": "mean: 143.97078257143139 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 771.7078821924613,
            "unit": "iter/sec",
            "range": "stddev: 0.002036430849149935",
            "extra": "mean: 1.2958271168086937 msec\nrounds: 351"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_build_cache",
            "value": 1951.2557368338025,
            "unit": "iter/sec",
            "range": "stddev: 0.000005052869455587063",
            "extra": "mean: 512.4904855488835 usec\nrounds: 1903"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 158587.12196920015,
            "unit": "iter/sec",
            "range": "stddev: 3.590537045088211e-7",
            "extra": "mean: 6.305682249496993 usec\nrounds: 24450"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 156705.65977088042,
            "unit": "iter/sec",
            "range": "stddev: 4.208113336639776e-7",
            "extra": "mean: 6.381390445387241 usec\nrounds: 4961"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 155870.220181861,
            "unit": "iter/sec",
            "range": "stddev: 3.34558779906114e-7",
            "extra": "mean: 6.415593683214495 usec\nrounds: 35588"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 154576.44081583255,
            "unit": "iter/sec",
            "range": "stddev: 4.44116891156466e-7",
            "extra": "mean: 6.469291146323085 usec\nrounds: 7048"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 154948.41250243367,
            "unit": "iter/sec",
            "range": "stddev: 4.3687194839892604e-7",
            "extra": "mean: 6.4537608604689245 usec\nrounds: 7159"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 10436.99823786713,
            "unit": "iter/sec",
            "range": "stddev: 0.00003081540091928205",
            "extra": "mean: 95.81298925315873 usec\nrounds: 3629"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 10179.10380128364,
            "unit": "iter/sec",
            "range": "stddev: 0.000013939540921264013",
            "extra": "mean: 98.24047573558437 usec\nrounds: 3977"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 10553.995043498808,
            "unit": "iter/sec",
            "range": "stddev: 0.00001174899781967822",
            "extra": "mean: 94.75084987992236 usec\nrounds: 5842"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 10197.769779736745,
            "unit": "iter/sec",
            "range": "stddev: 0.00023869658783700598",
            "extra": "mean: 98.06065655522328 usec\nrounds: 5835"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 10373.143728247529,
            "unit": "iter/sec",
            "range": "stddev: 0.000006812522961463543",
            "extra": "mean: 96.40279033991011 usec\nrounds: 5528"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 66532.44666964353,
            "unit": "iter/sec",
            "range": "stddev: 5.337300648588696e-7",
            "extra": "mean: 15.030260422637753 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 60065.974981037565,
            "unit": "iter/sec",
            "range": "stddev: 5.889112967369995e-7",
            "extra": "mean: 16.64836041229154 usec\nrounds: 46949"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 72227.35173514594,
            "unit": "iter/sec",
            "range": "stddev: 5.178595134970553e-7",
            "extra": "mean: 13.845170506416315 usec\nrounds: 55863"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 66537.55838389327,
            "unit": "iter/sec",
            "range": "stddev: 5.159491984709731e-7",
            "extra": "mean: 15.029105730487247 usec\nrounds: 51811"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 67104.7687811566,
            "unit": "iter/sec",
            "range": "stddev: 0.000007183942598583011",
            "extra": "mean: 14.902070570591187 usec\nrounds: 21978"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 310631.9060903555,
            "unit": "iter/sec",
            "range": "stddev: 2.4502355546918673e-7",
            "extra": "mean: 3.2192443222787412 usec\nrounds: 45661"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 314440.46575061086,
            "unit": "iter/sec",
            "range": "stddev: 2.330898788019555e-7",
            "extra": "mean: 3.180252254152048 usec\nrounds: 14085"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 308593.1898356503,
            "unit": "iter/sec",
            "range": "stddev: 2.557111654931778e-7",
            "extra": "mean: 3.240512211343929 usec\nrounds: 51018"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 315733.5979156856,
            "unit": "iter/sec",
            "range": "stddev: 2.3466696907135208e-7",
            "extra": "mean: 3.167227075615319 usec\nrounds: 52357"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 305967.35481894354,
            "unit": "iter/sec",
            "range": "stddev: 3.9593575621206237e-7",
            "extra": "mean: 3.2683225326170855 usec\nrounds: 54348"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 10557.145545004712,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026535042429970688",
            "extra": "mean: 94.72257398906152 usec\nrounds: 4575"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 10391.56591798523,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028297632273131533",
            "extra": "mean: 96.23188727208547 usec\nrounds: 4329"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 10571.976011906296,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025985518140192487",
            "extra": "mean: 94.58969627568082 usec\nrounds: 5021"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 10608.628054274655,
            "unit": "iter/sec",
            "range": "stddev: 0.000002867129968040374",
            "extra": "mean: 94.26289571883507 usec\nrounds: 6003"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 10471.921626727293,
            "unit": "iter/sec",
            "range": "stddev: 0.000002539343453749535",
            "extra": "mean: 95.49345723212045 usec\nrounds: 6091"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 120559.56391138837,
            "unit": "iter/sec",
            "range": "stddev: 3.93592967996922e-7",
            "extra": "mean: 8.294655086302427 usec\nrounds: 7599"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 119279.67737356812,
            "unit": "iter/sec",
            "range": "stddev: 3.996339989971298e-7",
            "extra": "mean: 8.383657820167745 usec\nrounds: 6707"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 150367.68827461678,
            "unit": "iter/sec",
            "range": "stddev: 5.827564021499178e-7",
            "extra": "mean: 6.650364925300295 usec\nrounds: 3809"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 150585.57910957682,
            "unit": "iter/sec",
            "range": "stddev: 6.583616447815898e-7",
            "extra": "mean: 6.640742134227399 usec\nrounds: 4704"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[meter]",
            "value": 432385.808827471,
            "unit": "iter/sec",
            "range": "stddev: 2.9091916434200533e-7",
            "extra": "mean: 2.3127493538970803 usec\nrounds: 65786"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[angstrom]",
            "value": 428412.51794382394,
            "unit": "iter/sec",
            "range": "stddev: 2.7466881952338596e-7",
            "extra": "mean: 2.3341988343373434 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[kilometer/second]",
            "value": 106752.01206357153,
            "unit": "iter/sec",
            "range": "stddev: 5.57420591000468e-7",
            "extra": "mean: 9.36750493662352 usec\nrounds: 4254"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[angstrom/minute]",
            "value": 104206.71308459612,
            "unit": "iter/sec",
            "range": "stddev: 4.932402535281313e-7",
            "extra": "mean: 9.596310740443268 usec\nrounds: 5754"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[meter]",
            "value": 1065077.19545258,
            "unit": "iter/sec",
            "range": "stddev: 1.1497603176192222e-7",
            "extra": "mean: 938.8990809957893 nsec\nrounds: 175408"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[angstrom]",
            "value": 1132111.206811029,
            "unit": "iter/sec",
            "range": "stddev: 1.8285853336842281e-7",
            "extra": "mean: 883.3054508989761 nsec\nrounds: 175439"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[kilometer/second]",
            "value": 1116343.7342010974,
            "unit": "iter/sec",
            "range": "stddev: 1.220006915473621e-7",
            "extra": "mean: 895.7814420086679 nsec\nrounds: 181819"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[angstrom/minute]",
            "value": 1563015.114464926,
            "unit": "iter/sec",
            "range": "stddev: 3.0313522815115584e-8",
            "extra": "mean: 639.7890786501183 nsec\nrounds: 72459"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_convert_from_uc[key0]",
            "value": 56183.21240017289,
            "unit": "iter/sec",
            "range": "stddev: 6.739302302640876e-7",
            "extra": "mean: 17.798911049751986 usec\nrounds: 9050"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_convert_from_uc[key1]",
            "value": 49142.114588139026,
            "unit": "iter/sec",
            "range": "stddev: 5.97394299044388e-7",
            "extra": "mean: 20.349144687423784 usec\nrounds: 10616"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_math_expression",
            "value": 7665.035931924971,
            "unit": "iter/sec",
            "range": "stddev: 0.000002900934866576525",
            "extra": "mean: 130.46253258056984 usec\nrounds: 3898"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 103123.40462722912,
            "unit": "iter/sec",
            "range": "stddev: 4.383811133114515e-7",
            "extra": "mean: 9.697119714140586 usec\nrounds: 64512"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 100785.31902105652,
            "unit": "iter/sec",
            "range": "stddev: 3.855555813245425e-7",
            "extra": "mean: 9.922080018331593 usec\nrounds: 65360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 40373.78097059179,
            "unit": "iter/sec",
            "range": "stddev: 0.000001383417225887779",
            "extra": "mean: 24.768549686451184 usec\nrounds: 32051"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 13169247.00633729,
            "unit": "iter/sec",
            "range": "stddev: 3.9070940777023706e-9",
            "extra": "mean: 75.93448581522014 nsec\nrounds: 120482"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 12747888.895024212,
            "unit": "iter/sec",
            "range": "stddev: 3.850117799553145e-9",
            "extra": "mean: 78.44436112002995 nsec\nrounds: 125000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 11483090.852117764,
            "unit": "iter/sec",
            "range": "stddev: 3.6305325405872846e-9",
            "extra": "mean: 87.08456746347768 nsec\nrounds: 111112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 13200210.555710832,
            "unit": "iter/sec",
            "range": "stddev: 3.1000511694427535e-9",
            "extra": "mean: 75.75636735331288 nsec\nrounds: 131579"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 13188148.032980157,
            "unit": "iter/sec",
            "range": "stddev: 3.4521998203425485e-9",
            "extra": "mean: 75.82565781781979 nsec\nrounds: 131579"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 13170911.284579525,
            "unit": "iter/sec",
            "range": "stddev: 3.740036711939206e-9",
            "extra": "mean: 75.92489072266862 nsec\nrounds: 128206"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 98964.23664537142,
            "unit": "iter/sec",
            "range": "stddev: 4.2727383892593374e-7",
            "extra": "mean: 10.104660369213995 usec\nrounds: 34723"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 25166.91050473182,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016928731240700973",
            "extra": "mean: 39.73471435089271 usec\nrounds: 8780"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 98989.33423390055,
            "unit": "iter/sec",
            "range": "stddev: 4.824839488268648e-7",
            "extra": "mean: 10.102098450698875 usec\nrounds: 33113"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 25310.735834527048,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012275440095077092",
            "extra": "mean: 39.50892643096821 usec\nrounds: 9243"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 99013.64953364713,
            "unit": "iter/sec",
            "range": "stddev: 3.852037407431223e-7",
            "extra": "mean: 10.099617625549463 usec\nrounds: 32680"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 25203.572903128235,
            "unit": "iter/sec",
            "range": "stddev: 9.964249045352503e-7",
            "extra": "mean: 39.67691421543972 usec\nrounds: 8533"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 25351.19059848203,
            "unit": "iter/sec",
            "range": "stddev: 0.000001256865415831836",
            "extra": "mean: 39.44587912411016 usec\nrounds: 10184"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 98058.69171101639,
            "unit": "iter/sec",
            "range": "stddev: 4.3168064530879245e-7",
            "extra": "mean: 10.19797411683859 usec\nrounds: 27624"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 25433.22874178341,
            "unit": "iter/sec",
            "range": "stddev: 9.886254640543162e-7",
            "extra": "mean: 39.31864137867534 usec\nrounds: 9662"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 98324.36439599635,
            "unit": "iter/sec",
            "range": "stddev: 4.960687415943042e-7",
            "extra": "mean: 10.170419164598423 usec\nrounds: 26455"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 25086.069531302495,
            "unit": "iter/sec",
            "range": "stddev: 0.000001022712892761933",
            "extra": "mean: 39.8627612329702 usec\nrounds: 9570"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 98639.13978909746,
            "unit": "iter/sec",
            "range": "stddev: 4.060015118228588e-7",
            "extra": "mean: 10.137963511625529 usec\nrounds: 25707"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 99810.50343517,
            "unit": "iter/sec",
            "range": "stddev: 5.201133846332376e-7",
            "extra": "mean: 10.018985633606494 usec\nrounds: 34247"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 25290.62236034039,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010076951220087174",
            "extra": "mean: 39.54034763368081 usec\nrounds: 9277"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 98358.86660706783,
            "unit": "iter/sec",
            "range": "stddev: 6.243464293889307e-7",
            "extra": "mean: 10.16685159656102 usec\nrounds: 39999"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 25279.001776305984,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010665995073909558",
            "extra": "mean: 39.5585240607602 usec\nrounds: 9268"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 98579.89115348073,
            "unit": "iter/sec",
            "range": "stddev: 4.27967274033619e-7",
            "extra": "mean: 10.144056645823264 usec\nrounds: 34601"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 25191.439324260697,
            "unit": "iter/sec",
            "range": "stddev: 0.000001262338487764612",
            "extra": "mean: 39.696024793507796 usec\nrounds: 7381"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 25307.71936175731,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010377616080174382",
            "extra": "mean: 39.51363557125214 usec\nrounds: 9980"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 97323.9466148636,
            "unit": "iter/sec",
            "range": "stddev: 4.3619038088117694e-7",
            "extra": "mean: 10.274963508798738 usec\nrounds: 15949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 25328.646189133022,
            "unit": "iter/sec",
            "range": "stddev: 0.000001242509215837498",
            "extra": "mean: 39.480988937696914 usec\nrounds: 9311"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 98114.9811047137,
            "unit": "iter/sec",
            "range": "stddev: 4.0874585387260254e-7",
            "extra": "mean: 10.192123452918418 usec\nrounds: 27549"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 25057.09475614048,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010710018748103278",
            "extra": "mean: 39.90885654271394 usec\nrounds: 9285"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 98990.43025967432,
            "unit": "iter/sec",
            "range": "stddev: 4.858276166855428e-7",
            "extra": "mean: 10.101986599884185 usec\nrounds: 25000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 98520.9081228671,
            "unit": "iter/sec",
            "range": "stddev: 4.016325649261381e-7",
            "extra": "mean: 10.15012974457039 usec\nrounds: 34013"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 25258.03309885834,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014164014595866762",
            "extra": "mean: 39.59136469914594 usec\nrounds: 9320"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 98684.34173501753,
            "unit": "iter/sec",
            "range": "stddev: 4.0651420551885666e-7",
            "extra": "mean: 10.1333198602586 usec\nrounds: 34365"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 25056.867321141402,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010581526732004807",
            "extra": "mean: 39.90921878555278 usec\nrounds: 8826"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 97283.62312330349,
            "unit": "iter/sec",
            "range": "stddev: 6.211726169376182e-7",
            "extra": "mean: 10.279222420946803 usec\nrounds: 1677"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 24806.276974050776,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013066477902257106",
            "extra": "mean: 40.312377429554424 usec\nrounds: 9570"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 25229.970509364528,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010541416299495897",
            "extra": "mean: 39.63540106512741 usec\nrounds: 9951"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 99464.47017058266,
            "unit": "iter/sec",
            "range": "stddev: 4.2060481430916474e-7",
            "extra": "mean: 10.053841319266962 usec\nrounds: 25189"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 25188.623356761615,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013123354673799694",
            "extra": "mean: 39.700462619032365 usec\nrounds: 9470"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 97083.06408875065,
            "unit": "iter/sec",
            "range": "stddev: 4.0087183770642406e-7",
            "extra": "mean: 10.300457751166853 usec\nrounds: 25125"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 25354.394973137172,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013041965813884524",
            "extra": "mean: 39.44089381976947 usec\nrounds: 9644"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 98204.67143299825,
            "unit": "iter/sec",
            "range": "stddev: 4.5934821161737295e-7",
            "extra": "mean: 10.18281498637533 usec\nrounds: 27398"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 102482.20404667586,
            "unit": "iter/sec",
            "range": "stddev: 4.054042593202039e-7",
            "extra": "mean: 9.757791699567143 usec\nrounds: 38022"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 25327.24986639474,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012413954560645078",
            "extra": "mean: 39.483165573647305 usec\nrounds: 8993"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 101826.8994693023,
            "unit": "iter/sec",
            "range": "stddev: 4.1278745234550966e-7",
            "extra": "mean: 9.820587734790742 usec\nrounds: 36901"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 25436.423237592324,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013024117147131278",
            "extra": "mean: 39.31370345033836 usec\nrounds: 9506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 102316.50399276537,
            "unit": "iter/sec",
            "range": "stddev: 4.574654559479754e-7",
            "extra": "mean: 9.773594297853535 usec\nrounds: 36231"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 25453.864742927406,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011107195094809872",
            "extra": "mean: 39.286764901894095 usec\nrounds: 9311"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 25301.212534140555,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013153293545087374",
            "extra": "mean: 39.52379747218184 usec\nrounds: 9653"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 101800.53576108931,
            "unit": "iter/sec",
            "range": "stddev: 3.986643338844017e-7",
            "extra": "mean: 9.823131013247817 usec\nrounds: 28249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 25241.542195409624,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010535326860093827",
            "extra": "mean: 39.61723068497209 usec\nrounds: 9125"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 98086.54726489421,
            "unit": "iter/sec",
            "range": "stddev: 5.413687590116269e-7",
            "extra": "mean: 10.195077998814487 usec\nrounds: 26385"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 25455.688315575157,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010083841337474025",
            "extra": "mean: 39.28395051050913 usec\nrounds: 9497"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 100735.04731024888,
            "unit": "iter/sec",
            "range": "stddev: 4.262932513165574e-7",
            "extra": "mean: 9.927031621081683 usec\nrounds: 26881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 101600.45462819957,
            "unit": "iter/sec",
            "range": "stddev: 5.965320286882433e-7",
            "extra": "mean: 9.842475643041526 usec\nrounds: 35842"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 25428.279156286568,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011553789022541951",
            "extra": "mean: 39.326294707314965 usec\nrounds: 9372"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 100997.39454247059,
            "unit": "iter/sec",
            "range": "stddev: 5.352180229974355e-7",
            "extra": "mean: 9.901245517571132 usec\nrounds: 40323"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 25293.454618325555,
            "unit": "iter/sec",
            "range": "stddev: 0.000001098310215336674",
            "extra": "mean: 39.53592006666746 usec\nrounds: 9533"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 101005.52440886958,
            "unit": "iter/sec",
            "range": "stddev: 4.403256043697448e-7",
            "extra": "mean: 9.900448573010797 usec\nrounds: 33669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 25388.88632378254,
            "unit": "iter/sec",
            "range": "stddev: 0.000001270240573107988",
            "extra": "mean: 39.38731251332082 usec\nrounds: 9542"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 25598.099650065018,
            "unit": "iter/sec",
            "range": "stddev: 9.578006556668185e-7",
            "extra": "mean: 39.0653999191483 usec\nrounds: 9882"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 101389.0831463006,
            "unit": "iter/sec",
            "range": "stddev: 5.506637198696967e-7",
            "extra": "mean: 9.86299480149197 usec\nrounds: 26738"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 25374.253384999545,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010888927421349268",
            "extra": "mean: 39.4100265661873 usec\nrounds: 9561"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 100798.97201503543,
            "unit": "iter/sec",
            "range": "stddev: 4.215508832147853e-7",
            "extra": "mean: 9.920736094916101 usec\nrounds: 27472"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 25261.524950410003,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012548757171996194",
            "extra": "mean: 39.58589206166548 usec\nrounds: 9700"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 99851.65706275924,
            "unit": "iter/sec",
            "range": "stddev: 4.459857637674581e-7",
            "extra": "mean: 10.014856332043394 usec\nrounds: 25907"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 100067.12028823736,
            "unit": "iter/sec",
            "range": "stddev: 4.227936869973298e-7",
            "extra": "mean: 9.993292473287527 usec\nrounds: 18282"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 25511.758647875722,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012918849254496366",
            "extra": "mean: 39.197611336890986 usec\nrounds: 9579"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 100925.92445850036,
            "unit": "iter/sec",
            "range": "stddev: 4.2818051869383967e-7",
            "extra": "mean: 9.908257024796331 usec\nrounds: 35588"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 25597.764737409405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010177205736491519",
            "extra": "mean: 39.06591103787151 usec\nrounds: 9757"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 101578.55760288471,
            "unit": "iter/sec",
            "range": "stddev: 5.692087052430372e-7",
            "extra": "mean: 9.844597359901881 usec\nrounds: 40982"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 25423.669003294122,
            "unit": "iter/sec",
            "range": "stddev: 0.000001071844557927457",
            "extra": "mean: 39.333425866676876 usec\nrounds: 9294"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 25401.832646536488,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012423115675920257",
            "extra": "mean: 39.36723833728386 usec\nrounds: 9625"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 101143.38420657034,
            "unit": "iter/sec",
            "range": "stddev: 4.0423026864764275e-7",
            "extra": "mean: 9.886954127989712 usec\nrounds: 26247"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 25491.495864448418,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010030195212745113",
            "extra": "mean: 39.22876889287006 usec\nrounds: 9329"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 100269.8782049332,
            "unit": "iter/sec",
            "range": "stddev: 5.954043056116357e-7",
            "extra": "mean: 9.97308481771748 usec\nrounds: 26386"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 25435.234376546145,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010930414749852764",
            "extra": "mean: 39.315541000955 usec\nrounds: 9390"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 96955.02635275076,
            "unit": "iter/sec",
            "range": "stddev: 6.202029531742992e-7",
            "extra": "mean: 10.314060421805335 usec\nrounds: 1804"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 83097.02501117537,
            "unit": "iter/sec",
            "range": "stddev: 5.139965337831509e-7",
            "extra": "mean: 12.03412516712258 usec\nrounds: 52354"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 80483.9062830986,
            "unit": "iter/sec",
            "range": "stddev: 4.6261554368031995e-7",
            "extra": "mean: 12.424844247526257 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 81933.34739673913,
            "unit": "iter/sec",
            "range": "stddev: 5.193860910855054e-7",
            "extra": "mean: 12.205042656902346 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 79142.47635424473,
            "unit": "iter/sec",
            "range": "stddev: 5.527622965320769e-7",
            "extra": "mean: 12.63543985563406 usec\nrounds: 47170"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 81593.09538043634,
            "unit": "iter/sec",
            "range": "stddev: 5.54766383221368e-7",
            "extra": "mean: 12.2559390024045 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 80957.72974794144,
            "unit": "iter/sec",
            "range": "stddev: 5.317563948678234e-7",
            "extra": "mean: 12.352125030104707 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 80668.79906334037,
            "unit": "iter/sec",
            "range": "stddev: 5.70226462014397e-7",
            "extra": "mean: 12.39636652102394 usec\nrounds: 52911"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 83124.98123038202,
            "unit": "iter/sec",
            "range": "stddev: 5.171392348838069e-7",
            "extra": "mean: 12.0300779043605 usec\nrounds: 52911"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 81040.76319082257,
            "unit": "iter/sec",
            "range": "stddev: 4.677705648111467e-7",
            "extra": "mean: 12.339469183494124 usec\nrounds: 48075"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 81886.59236864455,
            "unit": "iter/sec",
            "range": "stddev: 5.116528501126035e-7",
            "extra": "mean: 12.212011405946757 usec\nrounds: 51814"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 81036.59110907602,
            "unit": "iter/sec",
            "range": "stddev: 5.658172529943901e-7",
            "extra": "mean: 12.340104467795179 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 81786.67468066147,
            "unit": "iter/sec",
            "range": "stddev: 4.1554578181047213e-7",
            "extra": "mean: 12.226930657158151 usec\nrounds: 52911"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 80737.66631123389,
            "unit": "iter/sec",
            "range": "stddev: 0.000006742286309302277",
            "extra": "mean: 12.385792724614081 usec\nrounds: 54348"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 80281.12782251394,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014173716143609865",
            "extra": "mean: 12.456227598232136 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 82808.28212156505,
            "unit": "iter/sec",
            "range": "stddev: 8.121469530833549e-7",
            "extra": "mean: 12.076086767890802 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 81044.79375886003,
            "unit": "iter/sec",
            "range": "stddev: 5.756186885491068e-7",
            "extra": "mean: 12.338855509650518 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 82006.83926860614,
            "unit": "iter/sec",
            "range": "stddev: 4.499736970136106e-7",
            "extra": "mean: 12.19410489318566 usec\nrounds: 52911"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 79998.75575611064,
            "unit": "iter/sec",
            "range": "stddev: 4.797224691615549e-7",
            "extra": "mean: 12.500194416131476 usec\nrounds: 49749"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 80896.9151001346,
            "unit": "iter/sec",
            "range": "stddev: 5.507487585281749e-7",
            "extra": "mean: 12.361410799932173 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 82276.18908009893,
            "unit": "iter/sec",
            "range": "stddev: 4.5917703158967923e-7",
            "extra": "mean: 12.154184718332818 usec\nrounds: 51814"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 80215.93630160466,
            "unit": "iter/sec",
            "range": "stddev: 5.053220339237365e-7",
            "extra": "mean: 12.466350778978514 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 81795.98543928673,
            "unit": "iter/sec",
            "range": "stddev: 0.000003095120675759359",
            "extra": "mean: 12.225538877360338 usec\nrounds: 52357"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 80193.17936669072,
            "unit": "iter/sec",
            "range": "stddev: 5.543269486170065e-7",
            "extra": "mean: 12.469888435616296 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 82694.0503985968,
            "unit": "iter/sec",
            "range": "stddev: 5.435861430814556e-7",
            "extra": "mean: 12.092768405705867 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 81252.97922539081,
            "unit": "iter/sec",
            "range": "stddev: 4.6832752058888834e-7",
            "extra": "mean: 12.30724103329259 usec\nrounds: 53474"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 80814.07091634344,
            "unit": "iter/sec",
            "range": "stddev: 4.57274140945759e-7",
            "extra": "mean: 12.374082739071184 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 81908.98908301843,
            "unit": "iter/sec",
            "range": "stddev: 4.929309494368065e-7",
            "extra": "mean: 12.2086722250528 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 80343.34981281983,
            "unit": "iter/sec",
            "range": "stddev: 4.5589200592162866e-7",
            "extra": "mean: 12.446580859893857 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 80248.52415854005,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015453062275796366",
            "extra": "mean: 12.461288359950231 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 80526.91405770219,
            "unit": "iter/sec",
            "range": "stddev: 4.4623885200209627e-7",
            "extra": "mean: 12.418208392829287 usec\nrounds: 49018"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 79186.81136996979,
            "unit": "iter/sec",
            "range": "stddev: 6.173853055216597e-7",
            "extra": "mean: 12.628365540921788 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 82010.88495856905,
            "unit": "iter/sec",
            "range": "stddev: 4.776308555565912e-7",
            "extra": "mean: 12.19350334416204 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 80465.78317410317,
            "unit": "iter/sec",
            "range": "stddev: 4.6508482554168833e-7",
            "extra": "mean: 12.427642664414364 usec\nrounds: 50759"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 79772.1233313026,
            "unit": "iter/sec",
            "range": "stddev: 5.976492363699253e-7",
            "extra": "mean: 12.535707440641733 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 80433.6645739906,
            "unit": "iter/sec",
            "range": "stddev: 4.799691185962226e-7",
            "extra": "mean: 12.432605244289276 usec\nrounds: 49998"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 83066.68751108262,
            "unit": "iter/sec",
            "range": "stddev: 4.780747571629529e-7",
            "extra": "mean: 12.038520253580373 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 79966.91682520017,
            "unit": "iter/sec",
            "range": "stddev: 4.64442472312604e-7",
            "extra": "mean: 12.505171384635247 usec\nrounds: 44053"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 78692.32059047685,
            "unit": "iter/sec",
            "range": "stddev: 5.430318282735509e-7",
            "extra": "mean: 12.70772030226565 usec\nrounds: 47394"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 80499.13363159848,
            "unit": "iter/sec",
            "range": "stddev: 5.023462693916591e-7",
            "extra": "mean: 12.422493943555537 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 79327.42638154504,
            "unit": "iter/sec",
            "range": "stddev: 5.362725926811859e-7",
            "extra": "mean: 12.60598062503945 usec\nrounds: 46297"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 80163.59741799152,
            "unit": "iter/sec",
            "range": "stddev: 4.733054381333537e-7",
            "extra": "mean: 12.474490070421476 usec\nrounds: 48542"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 77403.67513198133,
            "unit": "iter/sec",
            "range": "stddev: 5.430756484756874e-7",
            "extra": "mean: 12.919283203218656 usec\nrounds: 45455"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 79230.29202759318,
            "unit": "iter/sec",
            "range": "stddev: 4.873489522657178e-7",
            "extra": "mean: 12.621435241608532 usec\nrounds: 47847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 80320.83923138266,
            "unit": "iter/sec",
            "range": "stddev: 4.912135273994817e-7",
            "extra": "mean: 12.450069117421318 usec\nrounds: 46949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 79572.20473290794,
            "unit": "iter/sec",
            "range": "stddev: 5.99761971244554e-7",
            "extra": "mean: 12.567202371187276 usec\nrounds: 48075"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 81066.61042374407,
            "unit": "iter/sec",
            "range": "stddev: 4.3440845633262316e-7",
            "extra": "mean: 12.33553487401151 usec\nrounds: 47170"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 78956.3869136384,
            "unit": "iter/sec",
            "range": "stddev: 4.699974476124662e-7",
            "extra": "mean: 12.665219864908314 usec\nrounds: 46947"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 80011.63017409714,
            "unit": "iter/sec",
            "range": "stddev: 4.67534139252638e-7",
            "extra": "mean: 12.498183049440463 usec\nrounds: 46512"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 80040.61764913492,
            "unit": "iter/sec",
            "range": "stddev: 0.00000179388732889063",
            "extra": "mean: 12.49365671294027 usec\nrounds: 49262"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 78100.79536288178,
            "unit": "iter/sec",
            "range": "stddev: 0.000012378608276602045",
            "extra": "mean: 12.803966916773044 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 80360.2008407332,
            "unit": "iter/sec",
            "range": "stddev: 6.515132007486968e-7",
            "extra": "mean: 12.443970890290721 usec\nrounds: 49262"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 79440.0569222308,
            "unit": "iter/sec",
            "range": "stddev: 5.706712725270239e-7",
            "extra": "mean: 12.588107797794848 usec\nrounds: 46949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 79694.74976241119,
            "unit": "iter/sec",
            "range": "stddev: 0.000001824694777917939",
            "extra": "mean: 12.547878034390415 usec\nrounds: 47620"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 78799.66760416342,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055799146876656215",
            "extra": "mean: 12.690408860901902 usec\nrounds: 43291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 79719.91563401034,
            "unit": "iter/sec",
            "range": "stddev: 4.81186191978297e-7",
            "extra": "mean: 12.54391693778182 usec\nrounds: 48542"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 80142.91683856364,
            "unit": "iter/sec",
            "range": "stddev: 5.433022833452856e-7",
            "extra": "mean: 12.477709065847401 usec\nrounds: 49018"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 78187.77654767752,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012327396512299887",
            "extra": "mean: 12.789722948448569 usec\nrounds: 45663"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 80029.00686853446,
            "unit": "iter/sec",
            "range": "stddev: 7.121193495568859e-7",
            "extra": "mean: 12.495469319552143 usec\nrounds: 47392"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 79623.96633874996,
            "unit": "iter/sec",
            "range": "stddev: 5.386395129947503e-7",
            "extra": "mean: 12.559032738279177 usec\nrounds: 47620"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 80243.82746147658,
            "unit": "iter/sec",
            "range": "stddev: 5.976596242682497e-7",
            "extra": "mean: 12.462017723171037 usec\nrounds: 47847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 80221.96246300898,
            "unit": "iter/sec",
            "range": "stddev: 4.453032392654876e-7",
            "extra": "mean: 12.465414324177226 usec\nrounds: 48310"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 79418.81855916408,
            "unit": "iter/sec",
            "range": "stddev: 5.051530323691451e-7",
            "extra": "mean: 12.591474138525959 usec\nrounds: 48779"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 75743.69996539096,
            "unit": "iter/sec",
            "range": "stddev: 0.00000889817378235841",
            "extra": "mean: 13.202418160941741 usec\nrounds: 37036"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 78652.61559960428,
            "unit": "iter/sec",
            "range": "stddev: 6.417939008220996e-7",
            "extra": "mean: 12.714135345360736 usec\nrounds: 49503"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 81060.39923810093,
            "unit": "iter/sec",
            "range": "stddev: 4.894765642778191e-7",
            "extra": "mean: 12.336480074107119 usec\nrounds: 37313"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 78841.14529895307,
            "unit": "iter/sec",
            "range": "stddev: 4.795512919874967e-7",
            "extra": "mean: 12.68373253848811 usec\nrounds: 45872"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 79148.46134468274,
            "unit": "iter/sec",
            "range": "stddev: 4.879469934404847e-7",
            "extra": "mean: 12.634484398188253 usec\nrounds: 47847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 80593.7757449746,
            "unit": "iter/sec",
            "range": "stddev: 6.213927192131884e-7",
            "extra": "mean: 12.407906079054184 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 80212.75010793873,
            "unit": "iter/sec",
            "range": "stddev: 4.589102443390854e-7",
            "extra": "mean: 12.466845964691954 usec\nrounds: 48781"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 81380.2982874331,
            "unit": "iter/sec",
            "range": "stddev: 4.915482461462757e-7",
            "extra": "mean: 12.287986417400756 usec\nrounds: 48077"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 79555.3562940812,
            "unit": "iter/sec",
            "range": "stddev: 4.779713942323071e-7",
            "extra": "mean: 12.56986388576326 usec\nrounds: 47394"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 80306.79765925318,
            "unit": "iter/sec",
            "range": "stddev: 6.708806237814501e-7",
            "extra": "mean: 12.452246000930872 usec\nrounds: 46947"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 433573.09049215115,
            "unit": "iter/sec",
            "range": "stddev: 1.8727572490959014e-7",
            "extra": "mean: 2.3064162004724387 usec\nrounds: 99010"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 41783.6760988651,
            "unit": "iter/sec",
            "range": "stddev: 7.711995654395445e-7",
            "extra": "mean: 23.932791304285487 usec\nrounds: 11615"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 429577.29606962146,
            "unit": "iter/sec",
            "range": "stddev: 1.7980478425323154e-7",
            "extra": "mean: 2.3278697667437487 usec\nrounds: 112360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 41676.33776998896,
            "unit": "iter/sec",
            "range": "stddev: 8.419117541344126e-7",
            "extra": "mean: 23.994430737148353 usec\nrounds: 12005"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 429638.73217976105,
            "unit": "iter/sec",
            "range": "stddev: 2.12428525154121e-7",
            "extra": "mean: 2.327536893441906 usec\nrounds: 120482"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 41852.20889266406,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010079719363771314",
            "extra": "mean: 23.893601471899423 usec\nrounds: 12092"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 41531.002935190634,
            "unit": "iter/sec",
            "range": "stddev: 8.022509303848623e-7",
            "extra": "mean: 24.07839756628333 usec\nrounds: 11588"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 429096.57105290703,
            "unit": "iter/sec",
            "range": "stddev: 1.8799669378570465e-7",
            "extra": "mean: 2.330477723339116 usec\nrounds: 128206"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 41694.44158139756,
            "unit": "iter/sec",
            "range": "stddev: 8.102274858322897e-7",
            "extra": "mean: 23.98401230647879 usec\nrounds: 12595"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 423671.1850192148,
            "unit": "iter/sec",
            "range": "stddev: 1.7992201790462817e-7",
            "extra": "mean: 2.3603210115756323 usec\nrounds: 121952"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 41911.45001213691,
            "unit": "iter/sec",
            "range": "stddev: 7.910669733896692e-7",
            "extra": "mean: 23.85982827390642 usec\nrounds: 12485"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 432348.75424858916,
            "unit": "iter/sec",
            "range": "stddev: 2.0560853276647e-7",
            "extra": "mean: 2.312947568769971 usec\nrounds: 123457"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 423736.9892332143,
            "unit": "iter/sec",
            "range": "stddev: 0.00001033492020157538",
            "extra": "mean: 2.3599544656452562 usec\nrounds: 121952"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 42047.893036718786,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029215452418070572",
            "extra": "mean: 23.782404486396953 usec\nrounds: 12438"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 432515.6179273681,
            "unit": "iter/sec",
            "range": "stddev: 2.9374320459896893e-7",
            "extra": "mean: 2.312055238125364 usec\nrounds: 119048"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 41381.42149383783,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012156232032396928",
            "extra": "mean: 24.165433759903863 usec\nrounds: 12500"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 421489.332512118,
            "unit": "iter/sec",
            "range": "stddev: 2.7378892020007534e-7",
            "extra": "mean: 2.372539285964609 usec\nrounds: 121952"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 42163.54327786798,
            "unit": "iter/sec",
            "range": "stddev: 7.85681100339824e-7",
            "extra": "mean: 23.71717180906162 usec\nrounds: 12316"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 41633.319758711674,
            "unit": "iter/sec",
            "range": "stddev: 7.718974971982233e-7",
            "extra": "mean: 24.01922320380787 usec\nrounds: 12903"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 417939.29013048706,
            "unit": "iter/sec",
            "range": "stddev: 1.9753402699658092e-7",
            "extra": "mean: 2.3926920096164794 usec\nrounds: 120468"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 42273.338324408374,
            "unit": "iter/sec",
            "range": "stddev: 8.127844635512458e-7",
            "extra": "mean: 23.65557203753189 usec\nrounds: 12438"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 422248.29589736694,
            "unit": "iter/sec",
            "range": "stddev: 7.169427221780454e-7",
            "extra": "mean: 2.3682748035129153 usec\nrounds: 129871"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 41930.10743820225,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010367478499063297",
            "extra": "mean: 23.84921148780331 usec\nrounds: 12048"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 426151.1927692501,
            "unit": "iter/sec",
            "range": "stddev: 2.602321067178114e-7",
            "extra": "mean: 2.346585007780265 usec\nrounds: 117648"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 432612.16491359164,
            "unit": "iter/sec",
            "range": "stddev: 2.770697167776608e-7",
            "extra": "mean: 2.3115392517908884 usec\nrounds: 125001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 42372.07312373206,
            "unit": "iter/sec",
            "range": "stddev: 8.061021582336103e-7",
            "extra": "mean: 23.600450161592704 usec\nrounds: 12691"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 426507.98425708484,
            "unit": "iter/sec",
            "range": "stddev: 1.8841686062992732e-7",
            "extra": "mean: 2.344621992814168 usec\nrounds: 119048"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 42361.638727819656,
            "unit": "iter/sec",
            "range": "stddev: 0.000001134795699787424",
            "extra": "mean: 23.606263355984897 usec\nrounds: 12485"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 437224.8392381182,
            "unit": "iter/sec",
            "range": "stddev: 2.005564497850073e-7",
            "extra": "mean: 2.2871527650225456 usec\nrounds: 121952"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 42213.77757588808,
            "unit": "iter/sec",
            "range": "stddev: 7.999216633564565e-7",
            "extra": "mean: 23.688948429272678 usec\nrounds: 12255"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 42126.56235362689,
            "unit": "iter/sec",
            "range": "stddev: 9.484230975102893e-7",
            "extra": "mean: 23.737991996726617 usec\nrounds: 12870"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 426851.4355552461,
            "unit": "iter/sec",
            "range": "stddev: 2.3134759470209843e-7",
            "extra": "mean: 2.3427354735241903 usec\nrounds: 117648"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 42333.265786599295,
            "unit": "iter/sec",
            "range": "stddev: 7.551990401414001e-7",
            "extra": "mean: 23.6220849353076 usec\nrounds: 8842"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 431540.3233781641,
            "unit": "iter/sec",
            "range": "stddev: 2.397656178714101e-7",
            "extra": "mean: 2.3172805548548654 usec\nrounds: 116266"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 42225.6215391952,
            "unit": "iter/sec",
            "range": "stddev: 7.99752321706729e-7",
            "extra": "mean: 23.68230386074406 usec\nrounds: 12407"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 433868.00845666847,
            "unit": "iter/sec",
            "range": "stddev: 2.3934822615512287e-7",
            "extra": "mean: 2.30484843433639 usec\nrounds: 129871"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 156847.8046931302,
            "unit": "iter/sec",
            "range": "stddev: 3.195159097306509e-7",
            "extra": "mean: 6.375607245230376 usec\nrounds: 85463"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 10141.073218852876,
            "unit": "iter/sec",
            "range": "stddev: 0.00019208311031478832",
            "extra": "mean: 98.60889261118228 usec\nrounds: 3911"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 122107.02077976859,
            "unit": "iter/sec",
            "range": "stddev: 4.434521188925168e-7",
            "extra": "mean: 8.189537289617386 usec\nrounds: 41151"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 121800.43763390044,
            "unit": "iter/sec",
            "range": "stddev: 4.65307725882042e-7",
            "extra": "mean: 8.210151124462563 usec\nrounds: 48781"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 149953.61651088455,
            "unit": "iter/sec",
            "range": "stddev: 5.008899636615096e-7",
            "extra": "mean: 6.668728792729143 usec\nrounds: 4845"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 149726.5225920647,
            "unit": "iter/sec",
            "range": "stddev: 3.2866514036981574e-7",
            "extra": "mean: 6.678843418574116 usec\nrounds: 23202"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 17468.615788595456,
            "unit": "iter/sec",
            "range": "stddev: 0.00000302890575477014",
            "extra": "mean: 57.245520314944415 usec\nrounds: 14472"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 2356.2188014194644,
            "unit": "iter/sec",
            "range": "stddev: 0.000024498991669258183",
            "extra": "mean: 424.40880252613505 usec\nrounds: 2375"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 287706.5575902529,
            "unit": "iter/sec",
            "range": "stddev: 2.667611089657217e-7",
            "extra": "mean: 3.4757636682865747 usec\nrounds: 78741"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 285855.36251906643,
            "unit": "iter/sec",
            "range": "stddev: 2.5585057307971064e-7",
            "extra": "mean: 3.4982726620470537 usec\nrounds: 84746"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 249420.8595782933,
            "unit": "iter/sec",
            "range": "stddev: 2.5182669277936917e-7",
            "extra": "mean: 4.0092877624218906 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 243316.26245836957,
            "unit": "iter/sec",
            "range": "stddev: 2.5542048078807087e-7",
            "extra": "mean: 4.109877366586197 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 51983.674089924905,
            "unit": "iter/sec",
            "range": "stddev: 0.00002599384780234054",
            "extra": "mean: 19.236808815593367 usec\nrounds: 27701"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 51382.494640541714,
            "unit": "iter/sec",
            "range": "stddev: 8.371485753488175e-7",
            "extra": "mean: 19.46188107439575 usec\nrounds: 27101"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 48769.99414469279,
            "unit": "iter/sec",
            "range": "stddev: 7.902550905893205e-7",
            "extra": "mean: 20.50441090956787 usec\nrounds: 28819"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 47874.03604802098,
            "unit": "iter/sec",
            "range": "stddev: 8.76531112893278e-7",
            "extra": "mean: 20.88814903754784 usec\nrounds: 28986"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 52410.32928841281,
            "unit": "iter/sec",
            "range": "stddev: 7.311524004082811e-7",
            "extra": "mean: 19.080208302012824 usec\nrounds: 26596"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 53070.408673715814,
            "unit": "iter/sec",
            "range": "stddev: 7.504047136378136e-7",
            "extra": "mean: 18.842892395047073 usec\nrounds: 31848"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 50475.6206651109,
            "unit": "iter/sec",
            "range": "stddev: 7.945115846872937e-7",
            "extra": "mean: 19.81154440149771 usec\nrounds: 30303"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 50188.41560197597,
            "unit": "iter/sec",
            "range": "stddev: 7.3070990550135e-7",
            "extra": "mean: 19.92491669652606 usec\nrounds: 30395"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 90196.67106261935,
            "unit": "iter/sec",
            "range": "stddev: 6.5294817052896e-7",
            "extra": "mean: 11.086883675626416 usec\nrounds: 21930"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 22422.970689802467,
            "unit": "iter/sec",
            "range": "stddev: 0.000001245677406328725",
            "extra": "mean: 44.59712380816609 usec\nrounds: 6712"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 22704.687067403283,
            "unit": "iter/sec",
            "range": "stddev: 0.000001218208411252148",
            "extra": "mean: 44.04376933411614 usec\nrounds: 8211"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 88745.29956241066,
            "unit": "iter/sec",
            "range": "stddev: 6.495089719979706e-7",
            "extra": "mean: 11.26820242796909 usec\nrounds: 20921"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 86329.40351069563,
            "unit": "iter/sec",
            "range": "stddev: 0.000001203285422379754",
            "extra": "mean: 11.583538856214926 usec\nrounds: 27473"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 21953.513734662272,
            "unit": "iter/sec",
            "range": "stddev: 0.000002835850467177503",
            "extra": "mean: 45.550794833407735 usec\nrounds: 8013"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 21870.588005495527,
            "unit": "iter/sec",
            "range": "stddev: 0.000003081536240556303",
            "extra": "mean: 45.72350774239473 usec\nrounds: 7943"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 86595.3701125968,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010557300485073298",
            "extra": "mean: 11.547961498400396 usec\nrounds: 21142"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 92977.45614294011,
            "unit": "iter/sec",
            "range": "stddev: 4.26140167378189e-7",
            "extra": "mean: 10.755295331619278 usec\nrounds: 22727"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 22924.436845419546,
            "unit": "iter/sec",
            "range": "stddev: 0.000001605585905541246",
            "extra": "mean: 43.62157320343538 usec\nrounds: 7807"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 22928.296241853935,
            "unit": "iter/sec",
            "range": "stddev: 0.000001272563238075304",
            "extra": "mean: 43.614230619306674 usec\nrounds: 8204"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 90842.07125016105,
            "unit": "iter/sec",
            "range": "stddev: 4.4854134530277624e-7",
            "extra": "mean: 11.008115361506876 usec\nrounds: 21645"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 86780.46530008478,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012809729993174867",
            "extra": "mean: 11.52333070054446 usec\nrounds: 27472"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 21231.339274935523,
            "unit": "iter/sec",
            "range": "stddev: 0.000003600188197121265",
            "extra": "mean: 47.1001846398141 usec\nrounds: 7474"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 21805.451050664033,
            "unit": "iter/sec",
            "range": "stddev: 0.000003308885796852207",
            "extra": "mean: 45.860092399673036 usec\nrounds: 8355"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 85562.9768842787,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016368989177247736",
            "extra": "mean: 11.687297899329394 usec\nrounds: 19802"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 75396.68777243214,
            "unit": "iter/sec",
            "range": "stddev: 5.628916002968717e-7",
            "extra": "mean: 13.263182104474854 usec\nrounds: 26666"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 74097.0245249053,
            "unit": "iter/sec",
            "range": "stddev: 6.942138762589191e-7",
            "extra": "mean: 13.495818575871189 usec\nrounds: 32052"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 74416.39095275919,
            "unit": "iter/sec",
            "range": "stddev: 5.066950747815018e-7",
            "extra": "mean: 13.4378997314559 usec\nrounds: 33899"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 74839.4645380372,
            "unit": "iter/sec",
            "range": "stddev: 6.80908017776424e-7",
            "extra": "mean: 13.361934190372908 usec\nrounds: 31348"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 71827.50701974343,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011281905398039068",
            "extra": "mean: 13.922242905146733 usec\nrounds: 30304"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 68578.12293166773,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015388247880707674",
            "extra": "mean: 14.581909758545228 usec\nrounds: 32679"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 69676.75963753022,
            "unit": "iter/sec",
            "range": "stddev: 0.000001173504298462511",
            "extra": "mean: 14.351987738840924 usec\nrounds: 32052"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 72050.26498585042,
            "unit": "iter/sec",
            "range": "stddev: 0.000001275252922017245",
            "extra": "mean: 13.879199475482636 usec\nrounds: 33558"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 74604.772614167,
            "unit": "iter/sec",
            "range": "stddev: 5.792563457867974e-7",
            "extra": "mean: 13.403968204174998 usec\nrounds: 29941"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 73378.04683585468,
            "unit": "iter/sec",
            "range": "stddev: 5.791856170281968e-7",
            "extra": "mean: 13.628054208597039 usec\nrounds: 33445"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 73234.11060849296,
            "unit": "iter/sec",
            "range": "stddev: 5.044768081147281e-7",
            "extra": "mean: 13.654839141093223 usec\nrounds: 31251"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 74999.23479670355,
            "unit": "iter/sec",
            "range": "stddev: 6.504549756434527e-7",
            "extra": "mean: 13.333469370862877 usec\nrounds: 30396"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 69066.7942574785,
            "unit": "iter/sec",
            "range": "stddev: 5.493655346009253e-7",
            "extra": "mean: 14.47873773136243 usec\nrounds: 30770"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 68546.54913203343,
            "unit": "iter/sec",
            "range": "stddev: 7.557728849087341e-7",
            "extra": "mean: 14.58862645402927 usec\nrounds: 23981"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 68978.45770719228,
            "unit": "iter/sec",
            "range": "stddev: 5.366147571064177e-7",
            "extra": "mean: 14.497279777476548 usec\nrounds: 30031"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 69886.00205589803,
            "unit": "iter/sec",
            "range": "stddev: 5.228622022408611e-7",
            "extra": "mean: 14.309017121914547 usec\nrounds: 28735"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 146354.95133229767,
            "unit": "iter/sec",
            "range": "stddev: 5.956196235676773e-7",
            "extra": "mean: 6.832703580554022 usec\nrounds: 18349"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 29924.46931035564,
            "unit": "iter/sec",
            "range": "stddev: 0.000001160840177908364",
            "extra": "mean: 33.417468147177495 usec\nrounds: 8555"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 29565.29800125483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012113896414399463",
            "extra": "mean: 33.823437191722455 usec\nrounds: 8104"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 147402.37793970504,
            "unit": "iter/sec",
            "range": "stddev: 3.985306974614547e-7",
            "extra": "mean: 6.784151069862999 usec\nrounds: 34964"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 133352.333911706,
            "unit": "iter/sec",
            "range": "stddev: 4.289177654006477e-7",
            "extra": "mean: 7.4989313697509825 usec\nrounds: 23867"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 27433.125423238176,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032441057622466127",
            "extra": "mean: 36.45228112262103 usec\nrounds: 7093"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 27851.227194743686,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027394282113344505",
            "extra": "mean: 35.90506059240106 usec\nrounds: 8681"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 133048.9642879582,
            "unit": "iter/sec",
            "range": "stddev: 5.821568843663678e-7",
            "extra": "mean: 7.516029946957705 usec\nrounds: 36765"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 297150.7351011321,
            "unit": "iter/sec",
            "range": "stddev: 2.650160526315011e-7",
            "extra": "mean: 3.3652953934630543 usec\nrounds: 38315"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 22941.54313322968,
            "unit": "iter/sec",
            "range": "stddev: 0.000001391389194085904",
            "extra": "mean: 43.58904691775288 usec\nrounds: 7332"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 23246.584550612355,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017027437359369925",
            "extra": "mean: 43.017071941162136 usec\nrounds: 7242"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 295382.595343628,
            "unit": "iter/sec",
            "range": "stddev: 2.470134645719569e-7",
            "extra": "mean: 3.3854398186076873 usec\nrounds: 69440"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 269433.69958363427,
            "unit": "iter/sec",
            "range": "stddev: 2.570069627703783e-7",
            "extra": "mean: 3.7114882122961474 usec\nrounds: 70922"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 22288.568535945997,
            "unit": "iter/sec",
            "range": "stddev: 0.000003211045722623646",
            "extra": "mean: 44.866048637768955 usec\nrounds: 6826"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 22285.67456546241,
            "unit": "iter/sec",
            "range": "stddev: 0.000002829817093386038",
            "extra": "mean: 44.87187484778973 usec\nrounds: 7375"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 263584.50018240785,
            "unit": "iter/sec",
            "range": "stddev: 2.7993214274045146e-7",
            "extra": "mean: 3.79384978747981 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 34043.32057038583,
            "unit": "iter/sec",
            "range": "stddev: 9.963720450925168e-7",
            "extra": "mean: 29.37433785087042 usec\nrounds: 17857"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 17204.966061944768,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016492239410361932",
            "extra": "mean: 58.12275341896052 usec\nrounds: 7458"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 17151.076541656876,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019356991926224337",
            "extra": "mean: 58.305377949377124 usec\nrounds: 7628"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 34271.74763421023,
            "unit": "iter/sec",
            "range": "stddev: 9.153686748065149e-7",
            "extra": "mean: 29.178552861476923 usec\nrounds: 19012"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 33070.02564925488,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020886655012731488",
            "extra": "mean: 30.238863755539047 usec\nrounds: 17153"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 16492.626391640984,
            "unit": "iter/sec",
            "range": "stddev: 0.000003708574237690398",
            "extra": "mean: 60.63315667581202 usec\nrounds: 7123"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 16372.156117556571,
            "unit": "iter/sec",
            "range": "stddev: 0.0000044390661811792",
            "extra": "mean: 61.07931006885872 usec\nrounds: 6247"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 32636.065762296264,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025761924683040533",
            "extra": "mean: 30.64094818546659 usec\nrounds: 19647"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 33933.30392387719,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010291349829758775",
            "extra": "mean: 29.469573674385106 usec\nrounds: 19084"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 17200.457699041686,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016300536249353658",
            "extra": "mean: 58.13798780806365 usec\nrounds: 7710"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 17182.525724654985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017005313992094665",
            "extra": "mean: 58.19866159519918 usec\nrounds: 7887"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 34410.59019478441,
            "unit": "iter/sec",
            "range": "stddev: 0.000003027747282459922",
            "extra": "mean: 29.06082093737437 usec\nrounds: 17452"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 32677.01858972436,
            "unit": "iter/sec",
            "range": "stddev: 0.000002735092797531566",
            "extra": "mean: 30.60254708532255 usec\nrounds: 19231"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 16339.511086422459,
            "unit": "iter/sec",
            "range": "stddev: 0.000004466186396829405",
            "extra": "mean: 61.20134162588033 usec\nrounds: 6753"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 16273.115389464228,
            "unit": "iter/sec",
            "range": "stddev: 0.000003865674550383151",
            "extra": "mean: 61.45104831293916 usec\nrounds: 7617"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 31949.735299252974,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028146963381122196",
            "extra": "mean: 31.29916384701257 usec\nrounds: 18975"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 25668.431246147276,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013133637687212984",
            "extra": "mean: 38.958360579597 usec\nrounds: 18975"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 26206.38979593834,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012022908120002292",
            "extra": "mean: 38.15863260016789 usec\nrounds: 13141"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 25990.789938861457,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012595889572397269",
            "extra": "mean: 38.47516764024163 usec\nrounds: 15408"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 26059.451343410045,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010040443928437938",
            "extra": "mean: 38.37379332442782 usec\nrounds: 18904"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 25114.285195477994,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031782821830039188",
            "extra": "mean: 39.81797579411327 usec\nrounds: 20367"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 25282.117670557644,
            "unit": "iter/sec",
            "range": "stddev: 0.000001861214444438211",
            "extra": "mean: 39.55364867099534 usec\nrounds: 18282"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 25604.86348253705,
            "unit": "iter/sec",
            "range": "stddev: 0.00000190758746176082",
            "extra": "mean: 39.05508032417423 usec\nrounds: 20243"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 25373.788254237625,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029115617342179912",
            "extra": "mean: 39.410748997363136 usec\nrounds: 20450"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 30758.88374717112,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011710988380193978",
            "extra": "mean: 32.510932718485584 usec\nrounds: 20704"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 30694.40678694915,
            "unit": "iter/sec",
            "range": "stddev: 0.000001094037477694593",
            "extra": "mean: 32.57922549020191 usec\nrounds: 21930"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 30407.0472306989,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011699768944207181",
            "extra": "mean: 32.88711305681802 usec\nrounds: 22272"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 30691.755922207743,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010879185567340957",
            "extra": "mean: 32.58203937678347 usec\nrounds: 22272"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 29333.327753756097,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012100598793427488",
            "extra": "mean: 34.09091557543966 usec\nrounds: 18940"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 29497.24621642476,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011467113813759709",
            "extra": "mean: 33.9014697393405 usec\nrounds: 19960"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 29252.4220001871,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012402054781025367",
            "extra": "mean: 34.18520353609024 usec\nrounds: 19343"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 29428.885029702826,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012414812300817558",
            "extra": "mean: 33.98022041917971 usec\nrounds: 19531"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 43360.632445835836,
            "unit": "iter/sec",
            "range": "stddev: 8.645448924265823e-7",
            "extra": "mean: 23.06239424088556 usec\nrounds: 21322"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 18714.49656030095,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021307569049712126",
            "extra": "mean: 53.434512479555515 usec\nrounds: 7813"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 19074.16917311212,
            "unit": "iter/sec",
            "range": "stddev: 0.000001759375436103376",
            "extra": "mean: 52.42692307718696 usec\nrounds: 1378"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 42869.55251075889,
            "unit": "iter/sec",
            "range": "stddev: 9.021216796303093e-7",
            "extra": "mean: 23.326578922162337 usec\nrounds: 18797"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 41785.85099119056,
            "unit": "iter/sec",
            "range": "stddev: 9.337575057604705e-7",
            "extra": "mean: 23.93154563756099 usec\nrounds: 22832"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 18620.560289617963,
            "unit": "iter/sec",
            "range": "stddev: 0.000002485951702674087",
            "extra": "mean: 53.70407680791204 usec\nrounds: 8007"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 18340.593519781265,
            "unit": "iter/sec",
            "range": "stddev: 0.000006052415288521405",
            "extra": "mean: 54.52386254138662 usec\nrounds: 8468"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 42519.087848721305,
            "unit": "iter/sec",
            "range": "stddev: 7.541368306222304e-7",
            "extra": "mean: 23.51884884167555 usec\nrounds: 23697"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 43556.9866732506,
            "unit": "iter/sec",
            "range": "stddev: 7.600119022542504e-7",
            "extra": "mean: 22.958429321606957 usec\nrounds: 23041"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 18943.738200248357,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015056356971067256",
            "extra": "mean: 52.78789167319098 usec\nrounds: 8299"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 18989.580693421896,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017847428247127487",
            "extra": "mean: 52.660457128808844 usec\nrounds: 8164"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 43616.05792896295,
            "unit": "iter/sec",
            "range": "stddev: 8.658192151496506e-7",
            "extra": "mean: 22.927335653045265 usec\nrounds: 23420"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 42579.910213223484,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010361912475830528",
            "extra": "mean: 23.48525384371156 usec\nrounds: 20619"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 17365.16233432641,
            "unit": "iter/sec",
            "range": "stddev: 0.000005805870967655158",
            "extra": "mean: 57.58656214939379 usec\nrounds: 7128"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 18142.96271467171,
            "unit": "iter/sec",
            "range": "stddev: 0.000004517700221529065",
            "extra": "mean: 55.117789510272644 usec\nrounds: 8599"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 41374.34346082271,
            "unit": "iter/sec",
            "range": "stddev: 8.922309378497313e-7",
            "extra": "mean: 24.169567813127916 usec\nrounds: 20704"
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
        "date": 1669524959847,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 4.216769577827981,
            "unit": "iter/sec",
            "range": "stddev: 0.0011857136899780642",
            "extra": "mean: 237.1483623999893 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 10326.745558769253,
            "unit": "iter/sec",
            "range": "stddev: 0.0002581111154816937",
            "extra": "mean: 96.83592902614137 usec\nrounds: 4241"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 6.963177083237854,
            "unit": "iter/sec",
            "range": "stddev: 0.007630548065722258",
            "extra": "mean: 143.61260499998707 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 772.3999167586785,
            "unit": "iter/sec",
            "range": "stddev: 0.002054424039878625",
            "extra": "mean: 1.2946661157039336 msec\nrounds: 363"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_build_cache",
            "value": 1905.881677576014,
            "unit": "iter/sec",
            "range": "stddev: 0.000007797955941409378",
            "extra": "mean: 524.6915439534762 usec\nrounds: 1877"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 148117.31889350753,
            "unit": "iter/sec",
            "range": "stddev: 5.308383887497528e-7",
            "extra": "mean: 6.75140495028116 usec\nrounds: 22988"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 153831.72069028596,
            "unit": "iter/sec",
            "range": "stddev: 4.3807347160244906e-7",
            "extra": "mean: 6.500609858049565 usec\nrounds: 4565"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 155585.4553703253,
            "unit": "iter/sec",
            "range": "stddev: 3.6162167824846905e-7",
            "extra": "mean: 6.427336010424591 usec\nrounds: 36231"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 157549.56930554542,
            "unit": "iter/sec",
            "range": "stddev: 4.132312238876361e-7",
            "extra": "mean: 6.347208719185004 usec\nrounds: 6698"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 155452.1661811309,
            "unit": "iter/sec",
            "range": "stddev: 5.618957212127541e-7",
            "extra": "mean: 6.432846994456241 usec\nrounds: 6588"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 10439.661811708262,
            "unit": "iter/sec",
            "range": "stddev: 0.00003883799775084809",
            "extra": "mean: 95.78854354060424 usec\nrounds: 3135"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 10130.611513019267,
            "unit": "iter/sec",
            "range": "stddev: 0.000013264307006605006",
            "extra": "mean: 98.71072429486203 usec\nrounds: 3754"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 10519.3731491894,
            "unit": "iter/sec",
            "range": "stddev: 0.00001145266595811715",
            "extra": "mean: 95.06269868153294 usec\nrounds: 5914"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 10150.049664830165,
            "unit": "iter/sec",
            "range": "stddev: 0.00027976406137471873",
            "extra": "mean: 98.52168541253462 usec\nrounds: 6046"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 10273.305045930787,
            "unit": "iter/sec",
            "range": "stddev: 0.000015094066925133033",
            "extra": "mean: 97.33965802914574 usec\nrounds: 5673"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 65441.10718659187,
            "unit": "iter/sec",
            "range": "stddev: 6.493117576459375e-7",
            "extra": "mean: 15.280915054641502 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 60690.07955552795,
            "unit": "iter/sec",
            "range": "stddev: 0.000001002216418450514",
            "extra": "mean: 16.47715750784372 usec\nrounds: 46512"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 72421.86944224058,
            "unit": "iter/sec",
            "range": "stddev: 4.0964341416080826e-7",
            "extra": "mean: 13.807983799666218 usec\nrounds: 55863"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 65709.84565284586,
            "unit": "iter/sec",
            "range": "stddev: 4.4698187762193794e-7",
            "extra": "mean: 15.218419554401896 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 66548.09511372625,
            "unit": "iter/sec",
            "range": "stddev: 0.00000563563141973939",
            "extra": "mean: 15.026726133799425 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 296437.9347538042,
            "unit": "iter/sec",
            "range": "stddev: 2.5230370826036915e-7",
            "extra": "mean: 3.3733874203060883 usec\nrounds: 45661"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 297176.5150327959,
            "unit": "iter/sec",
            "range": "stddev: 2.628519102065916e-7",
            "extra": "mean: 3.365003455571318 usec\nrounds: 13889"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 308163.8476865045,
            "unit": "iter/sec",
            "range": "stddev: 2.6592726898934765e-7",
            "extra": "mean: 3.245026979989234 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 307352.9502574548,
            "unit": "iter/sec",
            "range": "stddev: 2.2494699336863042e-7",
            "extra": "mean: 3.253588420616584 usec\nrounds: 52629"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 302766.2512419167,
            "unit": "iter/sec",
            "range": "stddev: 2.446606096275535e-7",
            "extra": "mean: 3.3028780318087 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 10684.569404593436,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025318329909315923",
            "extra": "mean: 93.5929153654135 usec\nrounds: 4419"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 10541.458837173863,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021131283830347532",
            "extra": "mean: 94.86353031836126 usec\nrounds: 4090"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 10723.519194598815,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023115631551616015",
            "extra": "mean: 93.25296871792578 usec\nrounds: 5818"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 10686.766345402462,
            "unit": "iter/sec",
            "range": "stddev: 0.000002124454640998786",
            "extra": "mean: 93.57367492461445 usec\nrounds: 6014"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 10600.59777785281,
            "unit": "iter/sec",
            "range": "stddev: 0.00000221506106644166",
            "extra": "mean: 94.3343027399115 usec\nrounds: 5949"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 118247.72468610658,
            "unit": "iter/sec",
            "range": "stddev: 4.04566970275893e-7",
            "extra": "mean: 8.456822341863582 usec\nrounds: 7430"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 119116.97398133368,
            "unit": "iter/sec",
            "range": "stddev: 3.157419923255643e-7",
            "extra": "mean: 8.3951091651867 usec\nrounds: 6623"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 146114.64014647942,
            "unit": "iter/sec",
            "range": "stddev: 4.795103974522106e-7",
            "extra": "mean: 6.843941161525659 usec\nrounds: 3977"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 144610.76555668964,
            "unit": "iter/sec",
            "range": "stddev: 4.057279465252188e-7",
            "extra": "mean: 6.915114487849002 usec\nrounds: 4804"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[meter]",
            "value": 434258.521702829,
            "unit": "iter/sec",
            "range": "stddev: 1.5781424834173741e-7",
            "extra": "mean: 2.302775766100724 usec\nrounds: 66667"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[angstrom]",
            "value": 429426.728654605,
            "unit": "iter/sec",
            "range": "stddev: 1.7650739343411948e-7",
            "extra": "mean: 2.32868597428251 usec\nrounds: 64931"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[kilometer/second]",
            "value": 109930.01648298964,
            "unit": "iter/sec",
            "range": "stddev: 4.992519387472606e-7",
            "extra": "mean: 9.096696534697037 usec\nrounds: 3895"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[angstrom/minute]",
            "value": 111197.0461680322,
            "unit": "iter/sec",
            "range": "stddev: 3.033452889203003e-7",
            "extra": "mean: 8.993044639772885 usec\nrounds: 5242"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[meter]",
            "value": 1531518.9460033139,
            "unit": "iter/sec",
            "range": "stddev: 3.065744050983307e-8",
            "extra": "mean: 652.9465421304761 nsec\nrounds: 72993"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[angstrom]",
            "value": 1077684.3331992773,
            "unit": "iter/sec",
            "range": "stddev: 1.2237715270992945e-7",
            "extra": "mean: 927.9155028925223 nsec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[kilometer/second]",
            "value": 1077560.5203768124,
            "unit": "iter/sec",
            "range": "stddev: 1.0590955672539754e-7",
            "extra": "mean: 928.0221213471236 nsec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[angstrom/minute]",
            "value": 1072390.4714398861,
            "unit": "iter/sec",
            "range": "stddev: 1.5585124408946907e-7",
            "extra": "mean: 932.4961631347878 nsec\nrounds: 156251"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_convert_from_uc[key0]",
            "value": 56659.67562042821,
            "unit": "iter/sec",
            "range": "stddev: 6.421290328494374e-7",
            "extra": "mean: 17.649236234586873 usec\nrounds: 8881"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_convert_from_uc[key1]",
            "value": 51701.240701831666,
            "unit": "iter/sec",
            "range": "stddev: 5.812971547096676e-7",
            "extra": "mean: 19.341895599123838 usec\nrounds: 10929"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_math_expression",
            "value": 7719.387443008802,
            "unit": "iter/sec",
            "range": "stddev: 0.000003417460493740873",
            "extra": "mean: 129.54395764986086 usec\nrounds: 3778"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 103048.63816459978,
            "unit": "iter/sec",
            "range": "stddev: 4.004756038730283e-7",
            "extra": "mean: 9.704155414482026 usec\nrounds: 64936"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 102812.20632443963,
            "unit": "iter/sec",
            "range": "stddev: 4.829862029814682e-7",
            "extra": "mean: 9.726471551873395 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 40256.76193020434,
            "unit": "iter/sec",
            "range": "stddev: 7.929686584016649e-7",
            "extra": "mean: 24.840547328018147 usec\nrounds: 31250"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 13222889.856916761,
            "unit": "iter/sec",
            "range": "stddev: 2.9166955659013196e-9",
            "extra": "mean: 75.62643346655886 nsec\nrounds: 109891"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 12752357.220213745,
            "unit": "iter/sec",
            "range": "stddev: 3.2554051768317825e-9",
            "extra": "mean: 78.4168748358508 nsec\nrounds: 121952"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 11551658.150916161,
            "unit": "iter/sec",
            "range": "stddev: 3.0130755899754295e-9",
            "extra": "mean: 86.5676586803146 nsec\nrounds: 109891"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 13272015.570161223,
            "unit": "iter/sec",
            "range": "stddev: 2.849210637950669e-9",
            "extra": "mean: 75.3465059404914 nsec\nrounds: 128189"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 13209687.059150344,
            "unit": "iter/sec",
            "range": "stddev: 3.186660108823627e-9",
            "extra": "mean: 75.70202045827482 nsec\nrounds: 131579"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 13214530.055969553,
            "unit": "iter/sec",
            "range": "stddev: 2.933445286820665e-9",
            "extra": "mean: 75.67427640361855 nsec\nrounds: 126583"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 105371.63014809217,
            "unit": "iter/sec",
            "range": "stddev: 4.451995753304879e-7",
            "extra": "mean: 9.490220456820992 usec\nrounds: 34365"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 25938.427337730773,
            "unit": "iter/sec",
            "range": "stddev: 0.000001041995360914886",
            "extra": "mean: 38.552838496317456 usec\nrounds: 8780"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 106578.80180032563,
            "unit": "iter/sec",
            "range": "stddev: 5.509089160032407e-7",
            "extra": "mean: 9.382728864539972 usec\nrounds: 32895"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 26033.539549730267,
            "unit": "iter/sec",
            "range": "stddev: 0.00000111247106108204",
            "extra": "mean: 38.411987662674974 usec\nrounds: 8673"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 105015.69121745351,
            "unit": "iter/sec",
            "range": "stddev: 4.150790369822777e-7",
            "extra": "mean: 9.522386496788595 usec\nrounds: 32259"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 25948.059939400868,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010039173646421678",
            "extra": "mean: 38.53852666963932 usec\nrounds: 8643"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 26065.97073508438,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010430173546732235",
            "extra": "mean: 38.36419560826162 usec\nrounds: 9381"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 101911.64752948203,
            "unit": "iter/sec",
            "range": "stddev: 3.871352694834601e-7",
            "extra": "mean: 9.812421094563405 usec\nrounds: 26386"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 25797.69570429138,
            "unit": "iter/sec",
            "range": "stddev: 9.822839001925326e-7",
            "extra": "mean: 38.76315200638841 usec\nrounds: 9243"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 104718.09649039521,
            "unit": "iter/sec",
            "range": "stddev: 0.000010599790005400864",
            "extra": "mean: 9.549447836761628 usec\nrounds: 26954"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 25920.170631714143,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011208324198739433",
            "extra": "mean: 38.5799929409596 usec\nrounds: 9067"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 103479.86471058102,
            "unit": "iter/sec",
            "range": "stddev: 5.523091624837187e-7",
            "extra": "mean: 9.663715765350705 usec\nrounds: 24814"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 104777.60091845803,
            "unit": "iter/sec",
            "range": "stddev: 5.467700781403904e-7",
            "extra": "mean: 9.544024593369327 usec\nrounds: 35335"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 25941.06961567097,
            "unit": "iter/sec",
            "range": "stddev: 9.986854906278646e-7",
            "extra": "mean: 38.54891162220625 usec\nrounds: 8905"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 105153.44712021138,
            "unit": "iter/sec",
            "range": "stddev: 4.761126280106721e-7",
            "extra": "mean: 9.509911727922722 usec\nrounds: 40817"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 26155.384158165954,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011108588533880562",
            "extra": "mean: 38.233045783339826 usec\nrounds: 8977"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 105251.88021384511,
            "unit": "iter/sec",
            "range": "stddev: 3.5551501180056907e-7",
            "extra": "mean: 9.501017919758333 usec\nrounds: 35715"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 25775.584590510676,
            "unit": "iter/sec",
            "range": "stddev: 0.000001056624375307026",
            "extra": "mean: 38.796404267321705 usec\nrounds: 8905"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 25801.170282779734,
            "unit": "iter/sec",
            "range": "stddev: 0.000001045174381921316",
            "extra": "mean: 38.75793187053309 usec\nrounds: 9570"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 105889.39725915821,
            "unit": "iter/sec",
            "range": "stddev: 3.8430654147469635e-7",
            "extra": "mean: 9.44381615047404 usec\nrounds: 26810"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 26014.868582650564,
            "unit": "iter/sec",
            "range": "stddev: 0.000001350457034664253",
            "extra": "mean: 38.439556087817586 usec\nrounds: 8772"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 104270.46775526796,
            "unit": "iter/sec",
            "range": "stddev: 3.7686871855272994e-7",
            "extra": "mean: 9.590443214919576 usec\nrounds: 27472"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 26143.42697729672,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010165428150597666",
            "extra": "mean: 38.25053237543848 usec\nrounds: 8772"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 104545.15405506366,
            "unit": "iter/sec",
            "range": "stddev: 3.7549179033983694e-7",
            "extra": "mean: 9.565244884266015 usec\nrounds: 25510"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 104885.80754027831,
            "unit": "iter/sec",
            "range": "stddev: 4.007318702466864e-7",
            "extra": "mean: 9.534178393163243 usec\nrounds: 35461"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 25615.505307567273,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011279207813656352",
            "extra": "mean: 39.038855099398816 usec\nrounds: 9158"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 105294.61873692666,
            "unit": "iter/sec",
            "range": "stddev: 4.5025379010888935e-7",
            "extra": "mean: 9.497161507355376 usec\nrounds: 35212"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 25867.73204026982,
            "unit": "iter/sec",
            "range": "stddev: 9.7893265143181e-7",
            "extra": "mean: 38.658201594296756 usec\nrounds: 8780"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 103564.51348362149,
            "unit": "iter/sec",
            "range": "stddev: 6.298408097664792e-7",
            "extra": "mean: 9.655817097602142 usec\nrounds: 37736"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 25969.321083742914,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010270327128021774",
            "extra": "mean: 38.50697508707732 usec\nrounds: 9192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 25713.922740472382,
            "unit": "iter/sec",
            "range": "stddev: 9.77705382904188e-7",
            "extra": "mean: 38.88943783851585 usec\nrounds: 8124"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 103221.86071261225,
            "unit": "iter/sec",
            "range": "stddev: 4.165485725982345e-7",
            "extra": "mean: 9.68787031251234 usec\nrounds: 25253"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 25975.93269889495,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010965569344827754",
            "extra": "mean: 38.497173964519135 usec\nrounds: 9226"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 105518.67117316411,
            "unit": "iter/sec",
            "range": "stddev: 3.356387423648762e-7",
            "extra": "mean: 9.476995766549452 usec\nrounds: 25511"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 25959.805167408573,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010153061099792153",
            "extra": "mean: 38.52109033759072 usec\nrounds: 9542"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 105363.49170474899,
            "unit": "iter/sec",
            "range": "stddev: 4.462943556865126e-7",
            "extra": "mean: 9.490953496512946 usec\nrounds: 28170"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 108322.4741308593,
            "unit": "iter/sec",
            "range": "stddev: 3.997286911389084e-7",
            "extra": "mean: 9.231694604685146 usec\nrounds: 39683"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 26071.810937906543,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010242694537261475",
            "extra": "mean: 38.3556018560288 usec\nrounds: 9268"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 108032.19050604086,
            "unit": "iter/sec",
            "range": "stddev: 3.817634635250536e-7",
            "extra": "mean: 9.256500264558486 usec\nrounds: 34014"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 26217.54165695454,
            "unit": "iter/sec",
            "range": "stddev: 9.39036932854428e-7",
            "extra": "mean: 38.14240149151197 usec\nrounds: 9390"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 108364.04922205157,
            "unit": "iter/sec",
            "range": "stddev: 4.0236371056016435e-7",
            "extra": "mean: 9.228152760800532 usec\nrounds: 34014"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 26231.44979770012,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011020432244288285",
            "extra": "mean: 38.12217806152966 usec\nrounds: 9390"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 26078.566692931592,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013199795431156",
            "extra": "mean: 38.345665686873915 usec\nrounds: 7143"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 109851.74383539274,
            "unit": "iter/sec",
            "range": "stddev: 3.9004642792627334e-7",
            "extra": "mean: 9.10317820260049 usec\nrounds: 24691"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 26194.326865546678,
            "unit": "iter/sec",
            "range": "stddev: 9.708028957077607e-7",
            "extra": "mean: 38.17620529563205 usec\nrounds: 9026"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 107855.89400237598,
            "unit": "iter/sec",
            "range": "stddev: 3.560323403352046e-7",
            "extra": "mean: 9.271630533033 usec\nrounds: 27472"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 25857.909663857332,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013219068816489427",
            "extra": "mean: 38.672886285071264 usec\nrounds: 8961"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 105510.76313293343,
            "unit": "iter/sec",
            "range": "stddev: 3.602903126621723e-7",
            "extra": "mean: 9.477706068148668 usec\nrounds: 25642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 108148.55104873628,
            "unit": "iter/sec",
            "range": "stddev: 3.440175623356931e-7",
            "extra": "mean: 9.246540894934025 usec\nrounds: 34014"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 26148.59032074253,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010671370040591573",
            "extra": "mean: 38.242979362705604 usec\nrounds: 8819"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 109488.32175189874,
            "unit": "iter/sec",
            "range": "stddev: 3.3640920243417045e-7",
            "extra": "mean: 9.133394173910224 usec\nrounds: 40817"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 25872.467321938653,
            "unit": "iter/sec",
            "range": "stddev: 9.533743543348967e-7",
            "extra": "mean: 38.65112621678902 usec\nrounds: 8937"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 108727.24967563545,
            "unit": "iter/sec",
            "range": "stddev: 3.5366359799288326e-7",
            "extra": "mean: 9.197326364672028 usec\nrounds: 36496"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 26197.575864791706,
            "unit": "iter/sec",
            "range": "stddev: 9.856797418243007e-7",
            "extra": "mean: 38.17147071779081 usec\nrounds: 9050"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 26163.03847022609,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010183707844035163",
            "extra": "mean: 38.22186024524691 usec\nrounds: 9853"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 107769.94770670554,
            "unit": "iter/sec",
            "range": "stddev: 4.0452812238309553e-7",
            "extra": "mean: 9.279024637939758 usec\nrounds: 26666"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 26006.541132976774,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011813177173116361",
            "extra": "mean: 38.451864663078226 usec\nrounds: 9251"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 109143.99069375731,
            "unit": "iter/sec",
            "range": "stddev: 4.630174278747067e-7",
            "extra": "mean: 9.162208506795938 usec\nrounds: 27625"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 26115.55243367438,
            "unit": "iter/sec",
            "range": "stddev: 0.000001208813350623575",
            "extra": "mean: 38.29135924042573 usec\nrounds: 9058"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 107275.6211318603,
            "unit": "iter/sec",
            "range": "stddev: 4.300344373879543e-7",
            "extra": "mean: 9.321782427815792 usec\nrounds: 26667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 107788.84406754708,
            "unit": "iter/sec",
            "range": "stddev: 3.947491813270049e-7",
            "extra": "mean: 9.27739794086055 usec\nrounds: 35842"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 26159.443515621122,
            "unit": "iter/sec",
            "range": "stddev: 9.655003918474939e-7",
            "extra": "mean: 38.22711287427997 usec\nrounds: 9515"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 108146.5315250936,
            "unit": "iter/sec",
            "range": "stddev: 5.128418858394586e-7",
            "extra": "mean: 9.246713564437956 usec\nrounds: 37038"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 26116.283181146686,
            "unit": "iter/sec",
            "range": "stddev: 9.983612156054681e-7",
            "extra": "mean: 38.29028782785978 usec\nrounds: 8651"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 108382.0371215676,
            "unit": "iter/sec",
            "range": "stddev: 3.6625573696400856e-7",
            "extra": "mean: 9.226621187036205 usec\nrounds: 42554"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 25860.92970924214,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011323394822113292",
            "extra": "mean: 38.668370056418404 usec\nrounds: 8977"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 26095.762060276127,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010845307189762239",
            "extra": "mean: 38.3203984497634 usec\nrounds: 9931"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 107144.72013395054,
            "unit": "iter/sec",
            "range": "stddev: 3.6635712929870386e-7",
            "extra": "mean: 9.333171048930984 usec\nrounds: 25975"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 26136.38764735729,
            "unit": "iter/sec",
            "range": "stddev: 9.623509276074432e-7",
            "extra": "mean: 38.26083441569678 usec\nrounds: 9083"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 106588.87407244435,
            "unit": "iter/sec",
            "range": "stddev: 4.217969091603337e-7",
            "extra": "mean: 9.381842229802883 usec\nrounds: 26247"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 26127.877304710946,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010538858846790835",
            "extra": "mean: 38.27329669141154 usec\nrounds: 9461"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 107755.24272918682,
            "unit": "iter/sec",
            "range": "stddev: 5.134293798370274e-7",
            "extra": "mean: 9.280290913670205 usec\nrounds: 27778"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 83280.47695221586,
            "unit": "iter/sec",
            "range": "stddev: 4.570952191008422e-7",
            "extra": "mean: 12.007616149626203 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 83973.77041714703,
            "unit": "iter/sec",
            "range": "stddev: 4.952186885131706e-7",
            "extra": "mean: 11.908480410399733 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 85138.8297298843,
            "unit": "iter/sec",
            "range": "stddev: 4.644816999499867e-7",
            "extra": "mean: 11.745522027641794 usec\nrounds: 52911"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 84644.03758146889,
            "unit": "iter/sec",
            "range": "stddev: 5.376815073309812e-7",
            "extra": "mean: 11.814181229688053 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 84811.97848672011,
            "unit": "iter/sec",
            "range": "stddev: 0.000005355745487497171",
            "extra": "mean: 11.79078731380592 usec\nrounds: 55556"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 82421.62846691645,
            "unit": "iter/sec",
            "range": "stddev: 0.00000802573972240333",
            "extra": "mean: 12.132737712181871 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 82341.82228019516,
            "unit": "iter/sec",
            "range": "stddev: 0.000004206602538373437",
            "extra": "mean: 12.144496834150338 usec\nrounds: 52911"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 82586.63688110995,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031469478076680064",
            "extra": "mean: 12.108496456146769 usec\nrounds: 52911"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 84286.06693076633,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025543793716504805",
            "extra": "mean: 11.864357140088325 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 85346.16941603624,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011212167736247399",
            "extra": "mean: 11.716987497415479 usec\nrounds: 53189"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 82599.59843110901,
            "unit": "iter/sec",
            "range": "stddev: 0.000002484345701001338",
            "extra": "mean: 12.106596387802483 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 84855.98431461983,
            "unit": "iter/sec",
            "range": "stddev: 6.444552668607482e-7",
            "extra": "mean: 11.78467267897463 usec\nrounds: 54943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 85463.33454243162,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030848620342640105",
            "extra": "mean: 11.700924207485853 usec\nrounds: 55863"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 84469.5234715051,
            "unit": "iter/sec",
            "range": "stddev: 7.032694536615457e-7",
            "extra": "mean: 11.838589338524438 usec\nrounds: 52357"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 85689.55721880388,
            "unit": "iter/sec",
            "range": "stddev: 5.88994286285568e-7",
            "extra": "mean: 11.670033460979983 usec\nrounds: 53764"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 84707.94015659949,
            "unit": "iter/sec",
            "range": "stddev: 6.275123129942057e-7",
            "extra": "mean: 11.805268764076908 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 85364.36412665625,
            "unit": "iter/sec",
            "range": "stddev: 0.000001346064543127626",
            "extra": "mean: 11.71449011810463 usec\nrounds: 55556"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 84148.6568130253,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014498028182419543",
            "extra": "mean: 11.883730981255672 usec\nrounds: 48781"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 83764.53358810692,
            "unit": "iter/sec",
            "range": "stddev: 6.709055463422371e-7",
            "extra": "mean: 11.938226802733398 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 85634.31228387657,
            "unit": "iter/sec",
            "range": "stddev: 6.397973406069671e-7",
            "extra": "mean: 11.677562104837298 usec\nrounds: 53764"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 84087.82912232494,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018633157957239915",
            "extra": "mean: 11.892327468048578 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 85735.86365700631,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019466683950777383",
            "extra": "mean: 11.663730408089034 usec\nrounds: 54946"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 82339.86093568048,
            "unit": "iter/sec",
            "range": "stddev: 5.604530875470676e-7",
            "extra": "mean: 12.14478611739637 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 86178.59286448288,
            "unit": "iter/sec",
            "range": "stddev: 4.36013641442796e-7",
            "extra": "mean: 11.603809794997636 usec\nrounds: 54946"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 86142.0193324132,
            "unit": "iter/sec",
            "range": "stddev: 4.6217348292020134e-7",
            "extra": "mean: 11.608736453473453 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 81945.61258475392,
            "unit": "iter/sec",
            "range": "stddev: 5.527900539535235e-7",
            "extra": "mean: 12.203215870352176 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 85653.47231333998,
            "unit": "iter/sec",
            "range": "stddev: 4.510301534677365e-7",
            "extra": "mean: 11.674949923124789 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 83079.83030092772,
            "unit": "iter/sec",
            "range": "stddev: 5.719471938220325e-7",
            "extra": "mean: 12.036615823333397 usec\nrounds: 51544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 84559.06803520389,
            "unit": "iter/sec",
            "range": "stddev: 6.146057440946576e-7",
            "extra": "mean: 11.826052760937207 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 82626.3405558616,
            "unit": "iter/sec",
            "range": "stddev: 5.652874843268717e-7",
            "extra": "mean: 12.10267807181809 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 84128.52028391074,
            "unit": "iter/sec",
            "range": "stddev: 5.181903922804342e-7",
            "extra": "mean: 11.886575404218139 usec\nrounds: 51814"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 85006.47073366557,
            "unit": "iter/sec",
            "range": "stddev: 5.336531329129883e-7",
            "extra": "mean: 11.763810347251184 usec\nrounds: 54642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 83010.13716410774,
            "unit": "iter/sec",
            "range": "stddev: 6.088580314198013e-7",
            "extra": "mean: 12.046721450695108 usec\nrounds: 52357"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 85710.80596801543,
            "unit": "iter/sec",
            "range": "stddev: 4.394167452656888e-7",
            "extra": "mean: 11.667140318026744 usec\nrounds: 54348"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 81910.24238482318,
            "unit": "iter/sec",
            "range": "stddev: 6.804843988048999e-7",
            "extra": "mean: 12.208485421174702 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 86053.86028477142,
            "unit": "iter/sec",
            "range": "stddev: 6.199203420551394e-7",
            "extra": "mean: 11.620629181430989 usec\nrounds: 54946"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 84923.69007067908,
            "unit": "iter/sec",
            "range": "stddev: 5.168599364491015e-7",
            "extra": "mean: 11.775277300924326 usec\nrounds: 46949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 82282.67419512638,
            "unit": "iter/sec",
            "range": "stddev: 6.08822093130286e-7",
            "extra": "mean: 12.153226785368991 usec\nrounds: 47847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 84293.41044469479,
            "unit": "iter/sec",
            "range": "stddev: 7.126339735489921e-7",
            "extra": "mean: 11.86332353530889 usec\nrounds: 48310"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 83785.28479191552,
            "unit": "iter/sec",
            "range": "stddev: 5.055648141357167e-7",
            "extra": "mean: 11.935270047521406 usec\nrounds: 48310"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 82931.93671822935,
            "unit": "iter/sec",
            "range": "stddev: 6.27870632243085e-7",
            "extra": "mean: 12.058080874170505 usec\nrounds: 46727"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 83535.19945378581,
            "unit": "iter/sec",
            "range": "stddev: 5.744682114446032e-7",
            "extra": "mean: 11.971001524372133 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 82305.26173516054,
            "unit": "iter/sec",
            "range": "stddev: 5.088120349153975e-7",
            "extra": "mean: 12.149891500470174 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 81926.74322884559,
            "unit": "iter/sec",
            "range": "stddev: 5.611642856588949e-7",
            "extra": "mean: 12.206026513304753 usec\nrounds: 50503"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 82379.29435739177,
            "unit": "iter/sec",
            "range": "stddev: 5.736771944113537e-7",
            "extra": "mean: 12.13897263627473 usec\nrounds: 49262"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 85526.24912927843,
            "unit": "iter/sec",
            "range": "stddev: 4.437975940379871e-7",
            "extra": "mean: 11.692316805434034 usec\nrounds: 46729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 82429.74681998804,
            "unit": "iter/sec",
            "range": "stddev: 5.033279431522786e-7",
            "extra": "mean: 12.131542781319258 usec\nrounds: 46083"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 84508.69070747086,
            "unit": "iter/sec",
            "range": "stddev: 6.819776765364228e-7",
            "extra": "mean: 11.833102508492615 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 85464.86020424688,
            "unit": "iter/sec",
            "range": "stddev: 5.221024680076193e-7",
            "extra": "mean: 11.700715330372802 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 83666.09917943184,
            "unit": "iter/sec",
            "range": "stddev: 5.541896608183266e-7",
            "extra": "mean: 11.952272303927804 usec\nrounds: 48310"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 85411.17688245258,
            "unit": "iter/sec",
            "range": "stddev: 4.316079843748704e-7",
            "extra": "mean: 11.708069558346601 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 83900.80664772542,
            "unit": "iter/sec",
            "range": "stddev: 4.15474787925623e-7",
            "extra": "mean: 11.918836539900065 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 84037.9105634936,
            "unit": "iter/sec",
            "range": "stddev: 5.091198418527208e-7",
            "extra": "mean: 11.89939151621892 usec\nrounds: 47620"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 84063.78530756995,
            "unit": "iter/sec",
            "range": "stddev: 4.2410513072677605e-7",
            "extra": "mean: 11.895728896114196 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 84009.72557453958,
            "unit": "iter/sec",
            "range": "stddev: 5.005562317639993e-7",
            "extra": "mean: 11.903383723265788 usec\nrounds: 47847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 85834.57667916364,
            "unit": "iter/sec",
            "range": "stddev: 4.3224218232283643e-7",
            "extra": "mean: 11.650316675269979 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 84522.89319177058,
            "unit": "iter/sec",
            "range": "stddev: 5.371832392617854e-7",
            "extra": "mean: 11.831114177920298 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 84904.82520998464,
            "unit": "iter/sec",
            "range": "stddev: 5.34161215617074e-7",
            "extra": "mean: 11.777893630036022 usec\nrounds: 49262"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 82423.17652530594,
            "unit": "iter/sec",
            "range": "stddev: 5.757326909462244e-7",
            "extra": "mean: 12.132509837120576 usec\nrounds: 47168"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 82288.68703590785,
            "unit": "iter/sec",
            "range": "stddev: 4.497666980533306e-7",
            "extra": "mean: 12.152338748139652 usec\nrounds: 48077"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 84333.7676579586,
            "unit": "iter/sec",
            "range": "stddev: 5.121534597811706e-7",
            "extra": "mean: 11.857646441883231 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 83015.71598029371,
            "unit": "iter/sec",
            "range": "stddev: 5.186687481889453e-7",
            "extra": "mean: 12.04591188778496 usec\nrounds: 48075"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 85061.16139638977,
            "unit": "iter/sec",
            "range": "stddev: 4.1851063099109844e-7",
            "extra": "mean: 11.75624672393014 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 82725.4647817175,
            "unit": "iter/sec",
            "range": "stddev: 5.643245106218109e-7",
            "extra": "mean: 12.08817626638469 usec\nrounds: 48075"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 81900.00130115708,
            "unit": "iter/sec",
            "range": "stddev: 6.443518934689757e-7",
            "extra": "mean: 12.21001201602999 usec\nrounds: 49018"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 83645.0411860808,
            "unit": "iter/sec",
            "range": "stddev: 4.748052716431885e-7",
            "extra": "mean: 11.955281339097578 usec\nrounds: 48781"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 83697.89578825737,
            "unit": "iter/sec",
            "range": "stddev: 6.676792924594595e-7",
            "extra": "mean: 11.947731667350922 usec\nrounds: 47620"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 84843.96617345192,
            "unit": "iter/sec",
            "range": "stddev: 6.023970234471108e-7",
            "extra": "mean: 11.786341976937244 usec\nrounds: 50249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 83943.9213937592,
            "unit": "iter/sec",
            "range": "stddev: 4.850612592782696e-7",
            "extra": "mean: 11.912714862452743 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 84162.73170285008,
            "unit": "iter/sec",
            "range": "stddev: 6.57503917059689e-7",
            "extra": "mean: 11.881743614628135 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 83136.41128770966,
            "unit": "iter/sec",
            "range": "stddev: 6.054980454794852e-7",
            "extra": "mean: 12.028423942179874 usec\nrounds: 48542"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 83915.61095901059,
            "unit": "iter/sec",
            "range": "stddev: 4.1932227920114e-7",
            "extra": "mean: 11.916733830234042 usec\nrounds: 47620"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 290109.5588137239,
            "unit": "iter/sec",
            "range": "stddev: 3.397099185616948e-7",
            "extra": "mean: 3.446973633302751 usec\nrounds: 60607"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 39307.93448692087,
            "unit": "iter/sec",
            "range": "stddev: 8.068859562304077e-7",
            "extra": "mean: 25.440156371806687 usec\nrounds: 11300"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 284788.49332417425,
            "unit": "iter/sec",
            "range": "stddev: 2.417163182936928e-7",
            "extra": "mean: 3.511377824039055 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 39731.07952321846,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011923672859151332",
            "extra": "mean: 25.169212918456182 usec\nrounds: 11751"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 287666.4099527311,
            "unit": "iter/sec",
            "range": "stddev: 2.395413135132014e-7",
            "extra": "mean: 3.476248756899766 usec\nrounds: 88496"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 39615.99719576279,
            "unit": "iter/sec",
            "range": "stddev: 8.288472803980627e-7",
            "extra": "mean: 25.242328119584908 usec\nrounds: 11508"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 39154.16717411572,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014118731313836445",
            "extra": "mean: 25.540065647497315 usec\nrounds: 12034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 289385.7354147161,
            "unit": "iter/sec",
            "range": "stddev: 2.225842549701668e-7",
            "extra": "mean: 3.4555953442795264 usec\nrounds: 95239"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 39525.92091090647,
            "unit": "iter/sec",
            "range": "stddev: 8.018540629145317e-7",
            "extra": "mean: 25.299853284988686 usec\nrounds: 10776"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 282772.1792925538,
            "unit": "iter/sec",
            "range": "stddev: 2.795900178258594e-7",
            "extra": "mean: 3.536415790626305 usec\nrounds: 90091"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 39826.39600114205,
            "unit": "iter/sec",
            "range": "stddev: 7.74275824343649e-7",
            "extra": "mean: 25.108975463693085 usec\nrounds: 8681"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 287864.1155097482,
            "unit": "iter/sec",
            "range": "stddev: 1.9936665065880263e-7",
            "extra": "mean: 3.473861263427035 usec\nrounds: 91735"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 285072.99920183443,
            "unit": "iter/sec",
            "range": "stddev: 2.5724220569454436e-7",
            "extra": "mean: 3.5078734317170124 usec\nrounds: 86949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 39588.33814581632,
            "unit": "iter/sec",
            "range": "stddev: 7.561475025665046e-7",
            "extra": "mean: 25.259964091361578 usec\nrounds: 11390"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 289678.7705933458,
            "unit": "iter/sec",
            "range": "stddev: 2.90254552987327e-7",
            "extra": "mean: 3.45209971014345 usec\nrounds: 90091"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 39535.02869944,
            "unit": "iter/sec",
            "range": "stddev: 7.727071290236333e-7",
            "extra": "mean: 25.294024891252064 usec\nrounds: 11249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 283773.7795880988,
            "unit": "iter/sec",
            "range": "stddev: 2.2502021194285618e-7",
            "extra": "mean: 3.523933752623349 usec\nrounds: 86207"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 38801.43598353041,
            "unit": "iter/sec",
            "range": "stddev: 0.000001203453209097842",
            "extra": "mean: 25.77224204857929 usec\nrounds: 11287"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 39533.24146217977,
            "unit": "iter/sec",
            "range": "stddev: 9.461938945187101e-7",
            "extra": "mean: 25.29516839535329 usec\nrounds: 12049"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 291739.88726801716,
            "unit": "iter/sec",
            "range": "stddev: 2.593685943996866e-7",
            "extra": "mean: 3.4277109289526617 usec\nrounds: 89286"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 39387.65053178778,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012158366324713833",
            "extra": "mean: 25.388668440453195 usec\nrounds: 11274"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 290511.6991384863,
            "unit": "iter/sec",
            "range": "stddev: 2.3205027993506214e-7",
            "extra": "mean: 3.4422021659213873 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 39040.78487449593,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011328866552533166",
            "extra": "mean: 25.614239140291144 usec\nrounds: 11211"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 284009.7021984296,
            "unit": "iter/sec",
            "range": "stddev: 2.6203696283739993e-7",
            "extra": "mean: 3.521006473579301 usec\nrounds: 89286"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 290251.1548951499,
            "unit": "iter/sec",
            "range": "stddev: 2.3365656228126294e-7",
            "extra": "mean: 3.4452920621840044 usec\nrounds: 88488"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 39757.98703374337,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010573366101469022",
            "extra": "mean: 25.15217883519306 usec\nrounds: 11793"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 291067.4546032645,
            "unit": "iter/sec",
            "range": "stddev: 2.1808604313533277e-7",
            "extra": "mean: 3.435629728383877 usec\nrounds: 86207"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 39127.605226931,
            "unit": "iter/sec",
            "range": "stddev: 8.159738690011164e-7",
            "extra": "mean: 25.55740363357872 usec\nrounds: 11669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 289821.81645679456,
            "unit": "iter/sec",
            "range": "stddev: 3.358206383919297e-7",
            "extra": "mean: 3.4503958750430224 usec\nrounds: 90910"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 39769.2777405329,
            "unit": "iter/sec",
            "range": "stddev: 7.8974944041746e-7",
            "extra": "mean: 25.145037999541 usec\nrounds: 11737"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 39693.192550167514,
            "unit": "iter/sec",
            "range": "stddev: 7.791497696763561e-7",
            "extra": "mean: 25.193236818533002 usec\nrounds: 12423"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 283195.4780439603,
            "unit": "iter/sec",
            "range": "stddev: 2.552652927498371e-7",
            "extra": "mean: 3.531129829144979 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 39514.2168135808,
            "unit": "iter/sec",
            "range": "stddev: 7.378432720552683e-7",
            "extra": "mean: 25.307347092763482 usec\nrounds: 11919"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 288023.15509066003,
            "unit": "iter/sec",
            "range": "stddev: 3.3093605851838746e-7",
            "extra": "mean: 3.471943079316778 usec\nrounds: 92585"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 39622.33547141689,
            "unit": "iter/sec",
            "range": "stddev: 8.203014060837146e-7",
            "extra": "mean: 25.238290174020378 usec\nrounds: 11724"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 292571.7156466191,
            "unit": "iter/sec",
            "range": "stddev: 2.3975860526013117e-7",
            "extra": "mean: 3.4179653962443988 usec\nrounds: 93458"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 155461.8799846852,
            "unit": "iter/sec",
            "range": "stddev: 6.51933029948765e-7",
            "extra": "mean: 6.432445047612391 usec\nrounds: 86957"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 9919.25716490327,
            "unit": "iter/sec",
            "range": "stddev: 0.00025795307245132814",
            "extra": "mean: 100.81400082440061 usec\nrounds: 3636"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 119053.86606910142,
            "unit": "iter/sec",
            "range": "stddev: 4.435057691155759e-7",
            "extra": "mean: 8.399559233293427 usec\nrounds: 41151"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 119968.88556010823,
            "unit": "iter/sec",
            "range": "stddev: 4.722509572322528e-7",
            "extra": "mean: 8.33549461871902 usec\nrounds: 48781"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 142412.0010833298,
            "unit": "iter/sec",
            "range": "stddev: 4.208253282628324e-7",
            "extra": "mean: 7.021880125221106 usec\nrounds: 4463"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 146886.26686969708,
            "unit": "iter/sec",
            "range": "stddev: 5.443378437735863e-7",
            "extra": "mean: 6.807988393408492 usec\nrounds: 24038"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 17438.593858748805,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015587465590664893",
            "extra": "mean: 57.344073042810614 usec\nrounds: 13718"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 2397.1560087953867,
            "unit": "iter/sec",
            "range": "stddev: 0.000011624247147831058",
            "extra": "mean: 417.1610009239731 usec\nrounds: 2165"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 281740.6361313136,
            "unit": "iter/sec",
            "range": "stddev: 3.5220385280475794e-7",
            "extra": "mean: 3.5493637472086927 usec\nrounds: 72993"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 276183.467417989,
            "unit": "iter/sec",
            "range": "stddev: 2.0813208916238326e-7",
            "extra": "mean: 3.6207815382611344 usec\nrounds: 98040"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 240217.5505962688,
            "unit": "iter/sec",
            "range": "stddev: 3.30577147418607e-7",
            "extra": "mean: 4.162893167122038 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 240870.29978891803,
            "unit": "iter/sec",
            "range": "stddev: 2.387731439212564e-7",
            "extra": "mean: 4.151611887710234 usec\nrounds: 86207"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 53830.62053237926,
            "unit": "iter/sec",
            "range": "stddev: 0.000033823007365585956",
            "extra": "mean: 18.576787525577515 usec\nrounds: 24450"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 54477.06379671764,
            "unit": "iter/sec",
            "range": "stddev: 7.775692874491016e-7",
            "extra": "mean: 18.356349081725877 usec\nrounds: 17483"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 49921.46624979225,
            "unit": "iter/sec",
            "range": "stddev: 8.115967743380585e-7",
            "extra": "mean: 20.03146291810212 usec\nrounds: 28491"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 49814.60207462659,
            "unit": "iter/sec",
            "range": "stddev: 8.864954830615793e-7",
            "extra": "mean: 20.074435172681163 usec\nrounds: 28090"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 53850.427088171855,
            "unit": "iter/sec",
            "range": "stddev: 7.438634067432685e-7",
            "extra": "mean: 18.569954855931833 usec\nrounds: 28819"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 54730.967261202495,
            "unit": "iter/sec",
            "range": "stddev: 6.589036264178856e-7",
            "extra": "mean: 18.271191795816787 usec\nrounds: 32154"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 51059.88649755667,
            "unit": "iter/sec",
            "range": "stddev: 7.247218012816535e-7",
            "extra": "mean: 19.584845729099932 usec\nrounds: 28249"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 52430.7110463536,
            "unit": "iter/sec",
            "range": "stddev: 8.353994774392252e-7",
            "extra": "mean: 19.07279111885222 usec\nrounds: 30582"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 94712.32003668409,
            "unit": "iter/sec",
            "range": "stddev: 4.457161071045559e-7",
            "extra": "mean: 10.55828850578973 usec\nrounds: 21646"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 23524.27565792746,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011545225852191657",
            "extra": "mean: 42.50927911835659 usec\nrounds: 7169"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 23402.587695890972,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010971519026676454",
            "extra": "mean: 42.730317390310645 usec\nrounds: 7924"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 95307.9048316382,
            "unit": "iter/sec",
            "range": "stddev: 3.948907841790371e-7",
            "extra": "mean: 10.492309129725433 usec\nrounds: 19157"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 89916.42537400611,
            "unit": "iter/sec",
            "range": "stddev: 8.893989795983768e-7",
            "extra": "mean: 11.12143855630953 usec\nrounds: 25381"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 22700.462493032468,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023587012064672178",
            "extra": "mean: 44.051965915096815 usec\nrounds: 7628"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 22523.78576639896,
            "unit": "iter/sec",
            "range": "stddev: 0.000002388696011282206",
            "extra": "mean: 44.397509831220404 usec\nrounds: 7273"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 91448.90990047086,
            "unit": "iter/sec",
            "range": "stddev: 6.421739751443279e-7",
            "extra": "mean: 10.935067471972689 usec\nrounds: 18215"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 96420.23804385081,
            "unit": "iter/sec",
            "range": "stddev: 3.9741729789945244e-7",
            "extra": "mean: 10.371266658201067 usec\nrounds: 23202"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 23310.722031769204,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017066526628950518",
            "extra": "mean: 42.89871410405657 usec\nrounds: 7856"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 23643.870613184994,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011792760903742805",
            "extra": "mean: 42.29425952967068 usec\nrounds: 8369"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 97319.73412541205,
            "unit": "iter/sec",
            "range": "stddev: 4.5264692835234786e-7",
            "extra": "mean: 10.275408261096768 usec\nrounds: 21692"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 92765.04452507013,
            "unit": "iter/sec",
            "range": "stddev: 9.322044646528182e-7",
            "extra": "mean: 10.779922600368568 usec\nrounds: 27778"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 22771.385371244498,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024033281223659336",
            "extra": "mean: 43.9147633618634 usec\nrounds: 7746"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 22902.493684777357,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020289186022350873",
            "extra": "mean: 43.66336756877579 usec\nrounds: 7906"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 92938.77425316596,
            "unit": "iter/sec",
            "range": "stddev: 7.313762784993355e-7",
            "extra": "mean: 10.759771774867527 usec\nrounds: 19231"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 77622.48022173351,
            "unit": "iter/sec",
            "range": "stddev: 4.735406433802723e-7",
            "extra": "mean: 12.88286585462661 usec\nrounds: 29155"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 75840.42319231191,
            "unit": "iter/sec",
            "range": "stddev: 4.421918355901336e-7",
            "extra": "mean: 13.185580432011248 usec\nrounds: 32052"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 76631.39607969296,
            "unit": "iter/sec",
            "range": "stddev: 6.192654905165283e-7",
            "extra": "mean: 13.049481689724772 usec\nrounds: 34844"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 77463.18354020893,
            "unit": "iter/sec",
            "range": "stddev: 4.79368584073613e-7",
            "extra": "mean: 12.909358411288743 usec\nrounds: 33004"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 74120.72824397963,
            "unit": "iter/sec",
            "range": "stddev: 9.032622193837634e-7",
            "extra": "mean: 13.491502629444604 usec\nrounds: 31948"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 71275.73153796587,
            "unit": "iter/sec",
            "range": "stddev: 0.000001966379773699554",
            "extra": "mean: 14.030020855939418 usec\nrounds: 33899"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 71894.13135920226,
            "unit": "iter/sec",
            "range": "stddev: 8.631900092940921e-7",
            "extra": "mean: 13.909341153365261 usec\nrounds: 33334"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 73976.31572893124,
            "unit": "iter/sec",
            "range": "stddev: 7.518226747700855e-7",
            "extra": "mean: 13.51784000252546 usec\nrounds: 16394"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 77876.7205058311,
            "unit": "iter/sec",
            "range": "stddev: 7.229116422018453e-7",
            "extra": "mean: 12.840807798591417 usec\nrounds: 28902"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 75784.48809193891,
            "unit": "iter/sec",
            "range": "stddev: 5.088928331008299e-7",
            "extra": "mean: 13.195312460075435 usec\nrounds: 31348"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 75928.07286955108,
            "unit": "iter/sec",
            "range": "stddev: 6.931791724605733e-7",
            "extra": "mean: 13.170359291458103 usec\nrounds: 31949"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 74175.48220580244,
            "unit": "iter/sec",
            "range": "stddev: 4.881298165668207e-7",
            "extra": "mean: 13.48154363493675 usec\nrounds: 30675"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 72498.1214783908,
            "unit": "iter/sec",
            "range": "stddev: 6.672829843722239e-7",
            "extra": "mean: 13.793460845713987 usec\nrounds: 30865"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 70960.94664035329,
            "unit": "iter/sec",
            "range": "stddev: 4.747215469608658e-7",
            "extra": "mean: 14.092258451232823 usec\nrounds: 30675"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 71500.86831692955,
            "unit": "iter/sec",
            "range": "stddev: 4.964287765542527e-7",
            "extra": "mean: 13.985844137828824 usec\nrounds: 31746"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 71542.73411667341,
            "unit": "iter/sec",
            "range": "stddev: 4.3766175001593826e-7",
            "extra": "mean: 13.97765981894372 usec\nrounds: 31251"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 136415.42229454717,
            "unit": "iter/sec",
            "range": "stddev: 3.6530703032202494e-7",
            "extra": "mean: 7.330549458262918 usec\nrounds: 12920"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 29660.605373500995,
            "unit": "iter/sec",
            "range": "stddev: 0.000001075053347062437",
            "extra": "mean: 33.7147535395015 usec\nrounds: 8334"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 29470.66161491067,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017969882079831749",
            "extra": "mean: 33.93205124020868 usec\nrounds: 1854"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 138639.0613880487,
            "unit": "iter/sec",
            "range": "stddev: 4.642187554379696e-7",
            "extra": "mean: 7.21297439544123 usec\nrounds: 37454"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 125247.25135644051,
            "unit": "iter/sec",
            "range": "stddev: 4.235818201170291e-7",
            "extra": "mean: 7.984207151613293 usec\nrounds: 21646"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 27820.583770157613,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016650643027971982",
            "extra": "mean: 35.9446087925974 usec\nrounds: 8052"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 28041.181945131808,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018322405238600586",
            "extra": "mean: 35.66183486690041 usec\nrounds: 8696"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 125670.63568056958,
            "unit": "iter/sec",
            "range": "stddev: 3.886580600440452e-7",
            "extra": "mean: 7.957308360735967 usec\nrounds: 35212"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 293370.384877949,
            "unit": "iter/sec",
            "range": "stddev: 2.1635395236736472e-7",
            "extra": "mean: 3.408660354098217 usec\nrounds: 43669"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 23673.529501067336,
            "unit": "iter/sec",
            "range": "stddev: 0.000001622976710457758",
            "extra": "mean: 42.24127204838275 usec\nrounds: 7359"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 23593.713195175904,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012593516372974834",
            "extra": "mean: 42.384172077011826 usec\nrounds: 6346"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 295424.73448698793,
            "unit": "iter/sec",
            "range": "stddev: 2.3924010521370866e-7",
            "extra": "mean: 3.384956922231051 usec\nrounds: 71429"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 270181.9826983804,
            "unit": "iter/sec",
            "range": "stddev: 2.475662810222919e-7",
            "extra": "mean: 3.701209051812893 usec\nrounds: 60607"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 22592.137047934244,
            "unit": "iter/sec",
            "range": "stddev: 0.000003824143325515456",
            "extra": "mean: 44.26318758062938 usec\nrounds: 6989"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 22498.746338512883,
            "unit": "iter/sec",
            "range": "stddev: 0.000003391230472858378",
            "extra": "mean: 44.44692095080075 usec\nrounds: 7236"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 262105.23867889616,
            "unit": "iter/sec",
            "range": "stddev: 2.549375895138555e-7",
            "extra": "mean: 3.8152614004983514 usec\nrounds: 69931"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 35086.85869401392,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011023847239165693",
            "extra": "mean: 28.50069904293277 usec\nrounds: 15361"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 17343.06212139721,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018420756783480513",
            "extra": "mean: 57.659944535759806 usec\nrounds: 6689"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 17419.20868142886,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019628305906976963",
            "extra": "mean: 57.40788908890734 usec\nrounds: 7231"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 35193.62875489808,
            "unit": "iter/sec",
            "range": "stddev: 7.984083964872575e-7",
            "extra": "mean: 28.414233921838047 usec\nrounds: 19763"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 33794.88410549954,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022183076648592974",
            "extra": "mean: 29.59027753663067 usec\nrounds: 18657"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 16755.89737638901,
            "unit": "iter/sec",
            "range": "stddev: 0.000003986363767049253",
            "extra": "mean: 59.6804801042238 usec\nrounds: 6911"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 17078.804397305157,
            "unit": "iter/sec",
            "range": "stddev: 0.00000249511943931217",
            "extra": "mean: 58.55210802448143 usec\nrounds: 7452"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 34070.3899597132,
            "unit": "iter/sec",
            "range": "stddev: 0.00000192851476579126",
            "extra": "mean: 29.350999538967944 usec\nrounds: 17362"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 35330.28021472366,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011784553975175364",
            "extra": "mean: 28.304332542011842 usec\nrounds: 17700"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 17455.81721663407,
            "unit": "iter/sec",
            "range": "stddev: 0.00000175873465825303",
            "extra": "mean: 57.28749262148986 usec\nrounds: 7657"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 17445.563344151145,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018801299314140567",
            "extra": "mean: 57.321164142014545 usec\nrounds: 7128"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 34981.11916542043,
            "unit": "iter/sec",
            "range": "stddev: 7.622888956912201e-7",
            "extra": "mean: 28.586849816643976 usec\nrounds: 19343"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 33608.63396306598,
            "unit": "iter/sec",
            "range": "stddev: 0.000002008451449718947",
            "extra": "mean: 29.754259012697283 usec\nrounds: 19084"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 16884.00191124212,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031593016856258913",
            "extra": "mean: 59.22766446349164 usec\nrounds: 6959"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 16491.3487987045,
            "unit": "iter/sec",
            "range": "stddev: 0.000004710400413311346",
            "extra": "mean: 60.6378539564063 usec\nrounds: 1479"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 33336.33821308853,
            "unit": "iter/sec",
            "range": "stddev: 0.000002140569162511858",
            "extra": "mean: 29.99729585198951 usec\nrounds: 19841"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 26689.61488305593,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011969767205073147",
            "extra": "mean: 37.467756817834655 usec\nrounds: 21231"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 26508.449816855577,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011851276406620153",
            "extra": "mean: 37.723820401000715 usec\nrounds: 21097"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 26492.7968300544,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012656217831212957",
            "extra": "mean: 37.746109118443975 usec\nrounds: 18622"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 26807.630535316614,
            "unit": "iter/sec",
            "range": "stddev: 9.957097981451722e-7",
            "extra": "mean: 37.30281192448512 usec\nrounds: 20965"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 25688.67219687432,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028115739487113534",
            "extra": "mean: 38.927664004435215 usec\nrounds: 20661"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 25361.929165206264,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016569096590066155",
            "extra": "mean: 39.429177231986294 usec\nrounds: 20081"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 25772.665041792145,
            "unit": "iter/sec",
            "range": "stddev: 0.000002325060229469078",
            "extra": "mean: 38.800799155944155 usec\nrounds: 18248"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 25994.787173046883,
            "unit": "iter/sec",
            "range": "stddev: 0.000002326116163466711",
            "extra": "mean: 38.469251290384335 usec\nrounds: 20534"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 31025.31977621649,
            "unit": "iter/sec",
            "range": "stddev: 8.936195886283326e-7",
            "extra": "mean: 32.23173869642381 usec\nrounds: 20834"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 31070.133487929823,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010287917814108488",
            "extra": "mean: 32.185249554479114 usec\nrounds: 21322"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 31208.740140778387,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012755917530501551",
            "extra": "mean: 32.04230595304827 usec\nrounds: 21232"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 31291.555206839406,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010936468792277084",
            "extra": "mean: 31.957503977987955 usec\nrounds: 21368"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 30104.509526676662,
            "unit": "iter/sec",
            "range": "stddev: 9.39789885315753e-7",
            "extra": "mean: 33.21761476013635 usec\nrounds: 20203"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 30184.448569692835,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012900592056494692",
            "extra": "mean: 33.12964282554645 usec\nrounds: 20161"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 30178.96725686662,
            "unit": "iter/sec",
            "range": "stddev: 0.000001117422886079092",
            "extra": "mean: 33.13566006048368 usec\nrounds: 21142"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 30336.07527943451,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011672968920401788",
            "extra": "mean: 32.96405322009212 usec\nrounds: 21552"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 43774.28163182701,
            "unit": "iter/sec",
            "range": "stddev: 7.54145408258078e-7",
            "extra": "mean: 22.844463980259334 usec\nrounds: 19531"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 19350.51884399242,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015155507663803278",
            "extra": "mean: 51.67820088247715 usec\nrounds: 6571"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 19352.439244926878,
            "unit": "iter/sec",
            "range": "stddev: 0.000006185372304905022",
            "extra": "mean: 51.67307269868545 usec\nrounds: 7758"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 43452.82880456756,
            "unit": "iter/sec",
            "range": "stddev: 7.361294855134838e-7",
            "extra": "mean: 23.013461436482697 usec\nrounds: 22625"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 43228.214545079725,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010851555854080951",
            "extra": "mean: 23.133039625246813 usec\nrounds: 20492"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 18891.180338771006,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026180599259124884",
            "extra": "mean: 52.9347548468248 usec\nrounds: 7118"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 18850.4594929876,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030362728454167734",
            "extra": "mean: 53.0491047378448 usec\nrounds: 8211"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 43086.565398630235,
            "unit": "iter/sec",
            "range": "stddev: 7.405376157229875e-7",
            "extra": "mean: 23.20909060047267 usec\nrounds: 23256"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 44320.137043836556,
            "unit": "iter/sec",
            "range": "stddev: 8.948964057541707e-7",
            "extra": "mean: 22.563107126923164 usec\nrounds: 22422"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 19271.351171610597,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014405984068550727",
            "extra": "mean: 51.89049751078898 usec\nrounds: 7634"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 19260.604202358263,
            "unit": "iter/sec",
            "range": "stddev: 0.00000165754528347565",
            "extra": "mean: 51.919451201720875 usec\nrounds: 8238"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 43480.82506815505,
            "unit": "iter/sec",
            "range": "stddev: 8.292284182007056e-7",
            "extra": "mean: 22.99864361894068 usec\nrounds: 20161"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 43268.591759381445,
            "unit": "iter/sec",
            "range": "stddev: 9.319449053723865e-7",
            "extra": "mean: 23.11145242630138 usec\nrounds: 22523"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 18233.147091763916,
            "unit": "iter/sec",
            "range": "stddev: 0.000004791182021065429",
            "extra": "mean: 54.84516715447929 usec\nrounds: 7179"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 18230.131799060855,
            "unit": "iter/sec",
            "range": "stddev: 0.000004883270330211336",
            "extra": "mean: 54.85423863208253 usec\nrounds: 6663"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 43039.02645327682,
            "unit": "iter/sec",
            "range": "stddev: 7.56739028756657e-7",
            "extra": "mean: 23.234726303244805 usec\nrounds: 22883"
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
          "id": "82349d562f62c678662711772af8abb477da473c",
          "message": "Pint 0.16",
          "timestamp": "2022-11-26T23:23:26-03:00",
          "tree_id": "bf153319c589aadb8e14e888342f08c0fa510e24",
          "url": "https://github.com/hgrecco/pint-benchmark/commit/82349d562f62c678662711772af8abb477da473c"
        },
        "date": 1669525263188,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 6.234998015809821,
            "unit": "iter/sec",
            "range": "stddev: 0.0010866311414367172",
            "extra": "mean: 160.38497485714385 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 10725.50839852892,
            "unit": "iter/sec",
            "range": "stddev: 0.00018202521941217565",
            "extra": "mean: 93.2356735776886 usec\nrounds: 4534"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 6.927390254244661,
            "unit": "iter/sec",
            "range": "stddev: 0.005996362985565275",
            "extra": "mean: 144.35450628572053 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 788.327820656384,
            "unit": "iter/sec",
            "range": "stddev: 0.001756114031886728",
            "extra": "mean: 1.268507813370549 msec\nrounds: 359"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_build_cache",
            "value": 1970.2661509008037,
            "unit": "iter/sec",
            "range": "stddev: 0.000005572942659068452",
            "extra": "mean: 507.5456427766376 usec\nrounds: 1772"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 155089.74300180876,
            "unit": "iter/sec",
            "range": "stddev: 3.8602925595304375e-7",
            "extra": "mean: 6.447879664023541 usec\nrounds: 24631"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 154057.35822297836,
            "unit": "iter/sec",
            "range": "stddev: 4.1438911977944763e-7",
            "extra": "mean: 6.491088848561376 usec\nrounds: 4941"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 154902.82346563067,
            "unit": "iter/sec",
            "range": "stddev: 3.255669182290391e-7",
            "extra": "mean: 6.455660249613699 usec\nrounds: 37036"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 154531.93496112697,
            "unit": "iter/sec",
            "range": "stddev: 3.4918152032827616e-7",
            "extra": "mean: 6.471154329696016 usec\nrounds: 6836"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 153053.9511221248,
            "unit": "iter/sec",
            "range": "stddev: 3.709664924497261e-7",
            "extra": "mean: 6.533643807745153 usec\nrounds: 8341"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 10627.757343666097,
            "unit": "iter/sec",
            "range": "stddev: 0.00002819076508602645",
            "extra": "mean: 94.09322848305126 usec\nrounds: 4206"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 10313.864620456188,
            "unit": "iter/sec",
            "range": "stddev: 0.00001027560720554915",
            "extra": "mean: 96.95686697463839 usec\nrounds: 4112"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 10697.902568743295,
            "unit": "iter/sec",
            "range": "stddev: 0.000008607762509320027",
            "extra": "mean: 93.47626729390488 usec\nrounds: 6057"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 10394.880771350623,
            "unit": "iter/sec",
            "range": "stddev: 0.00018710913936662675",
            "extra": "mean: 96.20119960934082 usec\nrounds: 6147"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 10489.889630592881,
            "unit": "iter/sec",
            "range": "stddev: 0.000009833675866084275",
            "extra": "mean: 95.3298876552127 usec\nrounds: 6035"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 66029.05247964544,
            "unit": "iter/sec",
            "range": "stddev: 4.0463613423448806e-7",
            "extra": "mean: 15.14484855447936 usec\nrounds: 51814"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 61026.94102070095,
            "unit": "iter/sec",
            "range": "stddev: 4.398805787927385e-7",
            "extra": "mean: 16.38620555568712 usec\nrounds: 46727"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 72214.53477175339,
            "unit": "iter/sec",
            "range": "stddev: 3.987481647332267e-7",
            "extra": "mean: 13.847627810117093 usec\nrounds: 55246"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 65888.24253520211,
            "unit": "iter/sec",
            "range": "stddev: 4.005373325817379e-7",
            "extra": "mean: 15.177214652003048 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 66090.43449875359,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048100881109573244",
            "extra": "mean: 15.130782655375933 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 305276.35430545313,
            "unit": "iter/sec",
            "range": "stddev: 2.2206973800067678e-7",
            "extra": "mean: 3.2757204608104726 usec\nrounds: 46083"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 301493.48475940566,
            "unit": "iter/sec",
            "range": "stddev: 3.100290877162241e-7",
            "extra": "mean: 3.3168212599950824 usec\nrounds: 14205"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 299743.2510291934,
            "unit": "iter/sec",
            "range": "stddev: 3.848629748369531e-7",
            "extra": "mean: 3.3361885432496536 usec\nrounds: 50503"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 298324.84691505297,
            "unit": "iter/sec",
            "range": "stddev: 3.1394866809532876e-7",
            "extra": "mean: 3.3520506600134006 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 300337.66587629553,
            "unit": "iter/sec",
            "range": "stddev: 2.2073083546536231e-7",
            "extra": "mean: 3.3295857084135583 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 10631.469030073797,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022452453854595877",
            "extra": "mean: 94.06037840784253 usec\nrounds: 4622"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 10503.827899675158,
            "unit": "iter/sec",
            "range": "stddev: 0.00000220427649005195",
            "extra": "mean: 95.20338771267626 usec\nrounds: 4346"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 10689.834529160784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019784400487996114",
            "extra": "mean: 93.54681751827884 usec\nrounds: 5754"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 10596.692807477848,
            "unit": "iter/sec",
            "range": "stddev: 0.000004509852591197412",
            "extra": "mean: 94.3690657234418 usec\nrounds: 6010"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 10532.232634697772,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019523606014464663",
            "extra": "mean: 94.94663047088073 usec\nrounds: 6032"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 121880.16976058323,
            "unit": "iter/sec",
            "range": "stddev: 3.323107833557532e-7",
            "extra": "mean: 8.204780170263644 usec\nrounds: 7988"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 120711.84055442971,
            "unit": "iter/sec",
            "range": "stddev: 4.634975562145147e-7",
            "extra": "mean: 8.284191471250857 usec\nrounds: 8184"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 148434.42967282992,
            "unit": "iter/sec",
            "range": "stddev: 4.143305419152221e-7",
            "extra": "mean: 6.736981455071702 usec\nrounds: 4206"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 149855.6174804426,
            "unit": "iter/sec",
            "range": "stddev: 2.6217417196548835e-7",
            "extra": "mean: 6.673089850172005 usec\nrounds: 5409"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[meter]",
            "value": 429059.1047098286,
            "unit": "iter/sec",
            "range": "stddev: 1.568439564555681e-7",
            "extra": "mean: 2.3306812255535214 usec\nrounds: 62894"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[angstrom]",
            "value": 426422.64034955075,
            "unit": "iter/sec",
            "range": "stddev: 2.0987541921633582e-7",
            "extra": "mean: 2.3450912437019564 usec\nrounds: 64936"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[kilometer/second]",
            "value": 106005.71066674413,
            "unit": "iter/sec",
            "range": "stddev: 4.850786757771492e-7",
            "extra": "mean: 9.433454044223655 usec\nrounds: 4352"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[angstrom/minute]",
            "value": 106847.8152018085,
            "unit": "iter/sec",
            "range": "stddev: 4.650918556666554e-7",
            "extra": "mean: 9.359105734742943 usec\nrounds: 5911"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[meter]",
            "value": 1457646.500598265,
            "unit": "iter/sec",
            "range": "stddev: 2.4472176427003942e-8",
            "extra": "mean: 686.0373894419172 nsec\nrounds: 78125"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[angstrom]",
            "value": 1045549.9715993078,
            "unit": "iter/sec",
            "range": "stddev: 1.0033226113225295e-7",
            "extra": "mean: 956.4344384901727 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[kilometer/second]",
            "value": 1025320.6344809806,
            "unit": "iter/sec",
            "range": "stddev: 1.282422123744577e-7",
            "extra": "mean: 975.304667018822 nsec\nrounds: 178572"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[angstrom/minute]",
            "value": 1025621.9337553057,
            "unit": "iter/sec",
            "range": "stddev: 1.3189838701037944e-7",
            "extra": "mean: 975.0181495617092 nsec\nrounds: 178572"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_convert_from_uc[key0]",
            "value": 56341.110092145915,
            "unit": "iter/sec",
            "range": "stddev: 5.35183377169746e-7",
            "extra": "mean: 17.749029054708 usec\nrounds: 8811"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_convert_from_uc[key1]",
            "value": 50508.16234205075,
            "unit": "iter/sec",
            "range": "stddev: 5.859722962727804e-7",
            "extra": "mean: 19.79878011058514 usec\nrounds: 11574"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_math_expression",
            "value": 7736.344825702766,
            "unit": "iter/sec",
            "range": "stddev: 0.000002293791266061887",
            "extra": "mean: 129.2600087676625 usec\nrounds: 3992"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 101192.07473228945,
            "unit": "iter/sec",
            "range": "stddev: 4.029005175146802e-7",
            "extra": "mean: 9.88219682861102 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 100528.72153961037,
            "unit": "iter/sec",
            "range": "stddev: 3.6233945627761143e-7",
            "extra": "mean: 9.947405922256552 usec\nrounds: 65786"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 41036.38390706432,
            "unit": "iter/sec",
            "range": "stddev: 7.750697068211105e-7",
            "extra": "mean: 24.36861888866022 usec\nrounds: 30865"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 13201148.858023418,
            "unit": "iter/sec",
            "range": "stddev: 2.8500241167876964e-9",
            "extra": "mean: 75.75098279357672 nsec\nrounds: 128206"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 12722436.15608087,
            "unit": "iter/sec",
            "range": "stddev: 2.774087869918559e-9",
            "extra": "mean: 78.6012983465678 nsec\nrounds: 123457"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 11517457.189741591,
            "unit": "iter/sec",
            "range": "stddev: 7.854500587760405e-9",
            "extra": "mean: 86.82472038108065 nsec\nrounds: 113637"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 13228829.819205793,
            "unit": "iter/sec",
            "range": "stddev: 2.7133829234252405e-9",
            "extra": "mean: 75.59247595337652 nsec\nrounds: 128189"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 13158849.44880328,
            "unit": "iter/sec",
            "range": "stddev: 2.791220996430189e-9",
            "extra": "mean: 75.99448598376141 nsec\nrounds: 128206"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 13161500.859063953,
            "unit": "iter/sec",
            "range": "stddev: 2.804077945687937e-9",
            "extra": "mean: 75.97917674494724 nsec\nrounds: 126583"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 101829.13020454001,
            "unit": "iter/sec",
            "range": "stddev: 3.826641736976348e-7",
            "extra": "mean: 9.820372598600626 usec\nrounds: 31546"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 25753.26616508259,
            "unit": "iter/sec",
            "range": "stddev: 9.115830540636373e-7",
            "extra": "mean: 38.830026202883886 usec\nrounds: 9083"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 101414.15156981774,
            "unit": "iter/sec",
            "range": "stddev: 3.7000500133957814e-7",
            "extra": "mean: 9.860556781481904 usec\nrounds: 33444"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 25738.1328132976,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020348290786218783",
            "extra": "mean: 38.85285724702416 usec\nrounds: 9597"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 98676.20661358399,
            "unit": "iter/sec",
            "range": "stddev: 4.918505638987871e-7",
            "extra": "mean: 10.134155277330429 usec\nrounds: 32574"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 25607.179767178255,
            "unit": "iter/sec",
            "range": "stddev: 9.764301170623486e-7",
            "extra": "mean: 39.05154761641264 usec\nrounds: 9125"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 25843.762959424937,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010004415280180457",
            "extra": "mean: 38.69405556652155 usec\nrounds: 9970"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 102100.35011541857,
            "unit": "iter/sec",
            "range": "stddev: 3.322664923160772e-7",
            "extra": "mean: 9.794285708810573 usec\nrounds: 26954"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 25734.65328763077,
            "unit": "iter/sec",
            "range": "stddev: 9.131968359443829e-7",
            "extra": "mean: 38.85811045609249 usec\nrounds: 9497"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 101041.46547094722,
            "unit": "iter/sec",
            "range": "stddev: 3.905018077872365e-7",
            "extra": "mean: 9.896926923407829 usec\nrounds: 26178"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 25592.235450470413,
            "unit": "iter/sec",
            "range": "stddev: 9.348273911920779e-7",
            "extra": "mean: 39.074351356892464 usec\nrounds: 9728"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 101637.08121941038,
            "unit": "iter/sec",
            "range": "stddev: 3.9157393854878057e-7",
            "extra": "mean: 9.83892874531921 usec\nrounds: 24630"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 102111.169381487,
            "unit": "iter/sec",
            "range": "stddev: 3.588415081925454e-7",
            "extra": "mean: 9.793247947871436 usec\nrounds: 34842"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 25941.46181903259,
            "unit": "iter/sec",
            "range": "stddev: 9.516517236179833e-7",
            "extra": "mean: 38.54832880953245 usec\nrounds: 9653"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 98527.38591186488,
            "unit": "iter/sec",
            "range": "stddev: 3.628661008026615e-7",
            "extra": "mean: 10.149462413369253 usec\nrounds: 40001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 25746.159315360386,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012977770584156368",
            "extra": "mean: 38.840744662190886 usec\nrounds: 9133"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 100597.40147495095,
            "unit": "iter/sec",
            "range": "stddev: 3.4577379461646227e-7",
            "extra": "mean: 9.940614621631184 usec\nrounds: 34483"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 25540.86861771267,
            "unit": "iter/sec",
            "range": "stddev: 9.37106379156749e-7",
            "extra": "mean: 39.15293622028567 usec\nrounds: 9329"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 25625.74727878327,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010484621367101982",
            "extra": "mean: 39.02325224396269 usec\nrounds: 9804"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 100419.7922139855,
            "unit": "iter/sec",
            "range": "stddev: 3.536958035521727e-7",
            "extra": "mean: 9.958196267415993 usec\nrounds: 26041"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 25899.2900833694,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012328967605094122",
            "extra": "mean: 38.6110969366734 usec\nrounds: 9728"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 102067.92067724436,
            "unit": "iter/sec",
            "range": "stddev: 3.4014324735796263e-7",
            "extra": "mean: 9.797397589416613 usec\nrounds: 26882"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 25629.4588639513,
            "unit": "iter/sec",
            "range": "stddev: 9.509495656245363e-7",
            "extra": "mean: 39.017601007820495 usec\nrounds: 9524"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 100284.3532605962,
            "unit": "iter/sec",
            "range": "stddev: 3.8348579885324276e-7",
            "extra": "mean: 9.971645301450238 usec\nrounds: 25774"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 101094.25857051754,
            "unit": "iter/sec",
            "range": "stddev: 3.532470325902251e-7",
            "extra": "mean: 9.891758583920545 usec\nrounds: 33784"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 25786.08316323103,
            "unit": "iter/sec",
            "range": "stddev: 9.016764003301773e-7",
            "extra": "mean: 38.78060865893441 usec\nrounds: 9470"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 101387.0711194245,
            "unit": "iter/sec",
            "range": "stddev: 3.606865368391694e-7",
            "extra": "mean: 9.863190532667558 usec\nrounds: 34603"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 25807.402218155126,
            "unit": "iter/sec",
            "range": "stddev: 9.039908072299611e-7",
            "extra": "mean: 38.748572659378894 usec\nrounds: 9634"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 97676.48383546041,
            "unit": "iter/sec",
            "range": "stddev: 3.6949966875072475e-7",
            "extra": "mean: 10.237878768082359 usec\nrounds: 38315"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 25842.00475356345,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011055741221820485",
            "extra": "mean: 38.696688184073885 usec\nrounds: 9775"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 25831.23516807189,
            "unit": "iter/sec",
            "range": "stddev: 9.107679788847476e-7",
            "extra": "mean: 38.71282164764723 usec\nrounds: 9941"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 100961.25581678064,
            "unit": "iter/sec",
            "range": "stddev: 3.1638664024845555e-7",
            "extra": "mean: 9.904789633508019 usec\nrounds: 24039"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 25627.44530850832,
            "unit": "iter/sec",
            "range": "stddev: 9.506492837681209e-7",
            "extra": "mean: 39.02066663148822 usec\nrounds: 9479"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 100487.73356278775,
            "unit": "iter/sec",
            "range": "stddev: 5.017316887648596e-7",
            "extra": "mean: 9.951463373140665 usec\nrounds: 26456"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 25765.77930304158,
            "unit": "iter/sec",
            "range": "stddev: 9.364191510278575e-7",
            "extra": "mean: 38.811168419887565 usec\nrounds: 9506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 101142.08137129192,
            "unit": "iter/sec",
            "range": "stddev: 3.668111818815942e-7",
            "extra": "mean: 9.887081484204447 usec\nrounds: 27625"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 104036.30734949044,
            "unit": "iter/sec",
            "range": "stddev: 4.087270283662304e-7",
            "extra": "mean: 9.612028968316682 usec\nrounds: 39526"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 25878.248692406578,
            "unit": "iter/sec",
            "range": "stddev: 9.100314810040175e-7",
            "extra": "mean: 38.642491301717364 usec\nrounds: 9542"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 103536.56139884348,
            "unit": "iter/sec",
            "range": "stddev: 3.5769706404302644e-7",
            "extra": "mean: 9.658423908321629 usec\nrounds: 36364"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 26058.80470218118,
            "unit": "iter/sec",
            "range": "stddev: 8.488486118101447e-7",
            "extra": "mean: 38.37474555831403 usec\nrounds: 9625"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 102363.02389472866,
            "unit": "iter/sec",
            "range": "stddev: 3.6518956651589936e-7",
            "extra": "mean: 9.769152589986126 usec\nrounds: 35461"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 26084.051629351306,
            "unit": "iter/sec",
            "range": "stddev: 9.294560834845861e-7",
            "extra": "mean: 38.33760238669139 usec\nrounds: 9552"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 25867.285615110515,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010759963420186438",
            "extra": "mean: 38.65886876881448 usec\nrounds: 9990"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 103952.28623663918,
            "unit": "iter/sec",
            "range": "stddev: 4.4442672036871337e-7",
            "extra": "mean: 9.619798045841714 usec\nrounds: 28249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 24742.926906286964,
            "unit": "iter/sec",
            "range": "stddev: 9.212159735119838e-7",
            "extra": "mean: 40.4155904346914 usec\nrounds: 9200"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 102109.39677199759,
            "unit": "iter/sec",
            "range": "stddev: 3.812289731076402e-7",
            "extra": "mean: 9.793417957731382 usec\nrounds: 26596"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 25948.756135793585,
            "unit": "iter/sec",
            "range": "stddev: 9.322116382835032e-7",
            "extra": "mean: 38.537492693940926 usec\nrounds: 9718"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 102907.98961810996,
            "unit": "iter/sec",
            "range": "stddev: 4.141278407505016e-7",
            "extra": "mean: 9.71741847946875 usec\nrounds: 26386"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 103681.77079518976,
            "unit": "iter/sec",
            "range": "stddev: 3.4925670638793157e-7",
            "extra": "mean: 9.644896999062388 usec\nrounds: 33223"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 26102.44403133474,
            "unit": "iter/sec",
            "range": "stddev: 8.891080780980701e-7",
            "extra": "mean: 38.31058880155236 usec\nrounds: 9662"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 104108.70373981315,
            "unit": "iter/sec",
            "range": "stddev: 3.790535458831728e-7",
            "extra": "mean: 9.605344837442068 usec\nrounds: 41840"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 25745.568439188508,
            "unit": "iter/sec",
            "range": "stddev: 9.473035252548733e-7",
            "extra": "mean: 38.841636080478 usec\nrounds: 9634"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 103403.7812989112,
            "unit": "iter/sec",
            "range": "stddev: 5.17150290310127e-7",
            "extra": "mean: 9.670826225486683 usec\nrounds: 34844"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 25837.87775866086,
            "unit": "iter/sec",
            "range": "stddev: 9.598214899811069e-7",
            "extra": "mean: 38.702869072317675 usec\nrounds: 9700"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 25988.39421563162,
            "unit": "iter/sec",
            "range": "stddev: 9.498560277577216e-7",
            "extra": "mean: 38.47871444856394 usec\nrounds: 9634"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 103994.78167098797,
            "unit": "iter/sec",
            "range": "stddev: 5.518824243503318e-7",
            "extra": "mean: 9.615867103445018 usec\nrounds: 27322"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 26035.48417586259,
            "unit": "iter/sec",
            "range": "stddev: 9.553562946996611e-7",
            "extra": "mean: 38.409118618469805 usec\nrounds: 9931"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 103910.77777191582,
            "unit": "iter/sec",
            "range": "stddev: 3.594330841157881e-7",
            "extra": "mean: 9.623640794942371 usec\nrounds: 27778"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 25775.49281804916,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012625537333008519",
            "extra": "mean: 38.79654240014201 usec\nrounds: 9941"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 102943.97288208648,
            "unit": "iter/sec",
            "range": "stddev: 3.8425863823457673e-7",
            "extra": "mean: 9.714021831520087 usec\nrounds: 15528"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 102871.12957726595,
            "unit": "iter/sec",
            "range": "stddev: 3.8067874789350334e-7",
            "extra": "mean: 9.72090035473855 usec\nrounds: 34964"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 26184.198120591314,
            "unit": "iter/sec",
            "range": "stddev: 8.815347625207713e-7",
            "extra": "mean: 38.19097286823527 usec\nrounds: 9804"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 104368.41621082426,
            "unit": "iter/sec",
            "range": "stddev: 3.309965682913055e-7",
            "extra": "mean: 9.5814427037007 usec\nrounds: 34723"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 25993.845662904154,
            "unit": "iter/sec",
            "range": "stddev: 8.832310579035945e-7",
            "extra": "mean: 38.47064466598343 usec\nrounds: 9833"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 103061.81426165506,
            "unit": "iter/sec",
            "range": "stddev: 3.4945001805451214e-7",
            "extra": "mean: 9.702914771723144 usec\nrounds: 40984"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 25999.494060875786,
            "unit": "iter/sec",
            "range": "stddev: 9.945742999352042e-7",
            "extra": "mean: 38.46228690675973 usec\nrounds: 9700"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 26017.53429758393,
            "unit": "iter/sec",
            "range": "stddev: 9.183009367635841e-7",
            "extra": "mean: 38.435617632408125 usec\nrounds: 10061"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 102881.29700566494,
            "unit": "iter/sec",
            "range": "stddev: 3.5251563126414316e-7",
            "extra": "mean: 9.719939669354453 usec\nrounds: 25642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 26108.875068496953,
            "unit": "iter/sec",
            "range": "stddev: 9.29123576159483e-7",
            "extra": "mean: 38.30115228543887 usec\nrounds: 9561"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 103359.96557349716,
            "unit": "iter/sec",
            "range": "stddev: 5.723581570009727e-7",
            "extra": "mean: 9.674925823083022 usec\nrounds: 26666"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 25758.42353513337,
            "unit": "iter/sec",
            "range": "stddev: 9.55692499127602e-7",
            "extra": "mean: 38.822251627163574 usec\nrounds: 9681"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 103705.25906785589,
            "unit": "iter/sec",
            "range": "stddev: 3.608818735826933e-7",
            "extra": "mean: 9.64271251996666 usec\nrounds: 27101"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 83491.15538155481,
            "unit": "iter/sec",
            "range": "stddev: 3.86053329089976e-7",
            "extra": "mean: 11.977316584373487 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 82222.12459269958,
            "unit": "iter/sec",
            "range": "stddev: 4.3615502862690536e-7",
            "extra": "mean: 12.16217660336144 usec\nrounds: 51811"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 84567.55536587142,
            "unit": "iter/sec",
            "range": "stddev: 4.039137054941907e-7",
            "extra": "mean: 11.824865879989312 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 83232.85267736741,
            "unit": "iter/sec",
            "range": "stddev: 4.19490893636571e-7",
            "extra": "mean: 12.014486682034857 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 83994.20366945615,
            "unit": "iter/sec",
            "range": "stddev: 3.953949988743449e-7",
            "extra": "mean: 11.905583436868064 usec\nrounds: 52357"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 82820.462984148,
            "unit": "iter/sec",
            "range": "stddev: 3.995812949684979e-7",
            "extra": "mean: 12.074310671161085 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 82779.78493823492,
            "unit": "iter/sec",
            "range": "stddev: 4.0615740735684524e-7",
            "extra": "mean: 12.080243996117376 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 83275.91146119016,
            "unit": "iter/sec",
            "range": "stddev: 4.865759357104443e-7",
            "extra": "mean: 12.008274451202366 usec\nrounds: 54946"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 80943.95287328257,
            "unit": "iter/sec",
            "range": "stddev: 4.4878727797253624e-7",
            "extra": "mean: 12.3542273944231 usec\nrounds: 48075"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 83293.95551921445,
            "unit": "iter/sec",
            "range": "stddev: 4.0860357632076015e-7",
            "extra": "mean: 12.005673085957811 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 81567.83706195687,
            "unit": "iter/sec",
            "range": "stddev: 3.985310003719535e-7",
            "extra": "mean: 12.259734179789826 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 83914.73456422791,
            "unit": "iter/sec",
            "range": "stddev: 3.914086875869033e-7",
            "extra": "mean: 11.916858287081933 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 83992.5818831606,
            "unit": "iter/sec",
            "range": "stddev: 3.998079687187596e-7",
            "extra": "mean: 11.905813318026919 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 82903.29120207488,
            "unit": "iter/sec",
            "range": "stddev: 4.200893462648072e-7",
            "extra": "mean: 12.06224729441106 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 82452.75254712028,
            "unit": "iter/sec",
            "range": "stddev: 4.0517889485641833e-7",
            "extra": "mean: 12.12815787354725 usec\nrounds: 54645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 82745.13127251748,
            "unit": "iter/sec",
            "range": "stddev: 5.266303800070872e-7",
            "extra": "mean: 12.085303202995034 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 83629.5650395848,
            "unit": "iter/sec",
            "range": "stddev: 3.8794153068168556e-7",
            "extra": "mean: 11.957493734741593 usec\nrounds: 52911"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 82400.96177192198,
            "unit": "iter/sec",
            "range": "stddev: 4.13513708324452e-7",
            "extra": "mean: 12.135780681394287 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 82076.28453820737,
            "unit": "iter/sec",
            "range": "stddev: 3.9458438560964577e-7",
            "extra": "mean: 12.183787382998428 usec\nrounds: 51280"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 83519.86956111435,
            "unit": "iter/sec",
            "range": "stddev: 4.169290898362852e-7",
            "extra": "mean: 11.973198775990255 usec\nrounds: 53764"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 82956.83290416695,
            "unit": "iter/sec",
            "range": "stddev: 4.046633940267959e-7",
            "extra": "mean: 12.054462121947397 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 83831.60700611012,
            "unit": "iter/sec",
            "range": "stddev: 3.843118307082005e-7",
            "extra": "mean: 11.928675063178906 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 81902.33956121535,
            "unit": "iter/sec",
            "range": "stddev: 4.93578881814301e-7",
            "extra": "mean: 12.209663427899773 usec\nrounds: 52081"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 83082.5702152937,
            "unit": "iter/sec",
            "range": "stddev: 8.27055962258198e-7",
            "extra": "mean: 12.036218877300954 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 83811.65379222803,
            "unit": "iter/sec",
            "range": "stddev: 4.7507458914428243e-7",
            "extra": "mean: 11.931514947539807 usec\nrounds: 39371"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 82999.01603744461,
            "unit": "iter/sec",
            "range": "stddev: 4.2137171235618946e-7",
            "extra": "mean: 12.04833560374806 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 83963.54984548406,
            "unit": "iter/sec",
            "range": "stddev: 4.000940157950985e-7",
            "extra": "mean: 11.909929985574385 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 80722.21591809043,
            "unit": "iter/sec",
            "range": "stddev: 4.423779549139202e-7",
            "extra": "mean: 12.388163390047533 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 83725.13793908367,
            "unit": "iter/sec",
            "range": "stddev: 4.328160653232929e-7",
            "extra": "mean: 11.943844162162806 usec\nrounds: 53761"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 82352.73236080585,
            "unit": "iter/sec",
            "range": "stddev: 3.9855188860729155e-7",
            "extra": "mean: 12.1428879325919 usec\nrounds: 52629"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 81352.30549585141,
            "unit": "iter/sec",
            "range": "stddev: 4.7643360311332065e-7",
            "extra": "mean: 12.292214632454337 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 84403.34145301253,
            "unit": "iter/sec",
            "range": "stddev: 4.111823360213368e-7",
            "extra": "mean: 11.847872166965114 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 82199.1258861688,
            "unit": "iter/sec",
            "range": "stddev: 4.008876133123562e-7",
            "extra": "mean: 12.165579490283418 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 83910.77967315109,
            "unit": "iter/sec",
            "range": "stddev: 4.971080569329282e-7",
            "extra": "mean: 11.917419953612583 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 81401.37620065996,
            "unit": "iter/sec",
            "range": "stddev: 4.035311974346796e-7",
            "extra": "mean: 12.284804590218863 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 84300.39912801482,
            "unit": "iter/sec",
            "range": "stddev: 4.067636037226214e-7",
            "extra": "mean: 11.8623400404243 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 82796.00416824996,
            "unit": "iter/sec",
            "range": "stddev: 4.0293167148330715e-7",
            "extra": "mean: 12.077877550321118 usec\nrounds: 45872"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 82255.79056551015,
            "unit": "iter/sec",
            "range": "stddev: 4.6456563160669515e-7",
            "extra": "mean: 12.157198819985567 usec\nrounds: 48310"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 83461.62052958796,
            "unit": "iter/sec",
            "range": "stddev: 4.2453310419677744e-7",
            "extra": "mean: 11.981555038767672 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 83084.16433588183,
            "unit": "iter/sec",
            "range": "stddev: 4.0281243171887884e-7",
            "extra": "mean: 12.03598794058192 usec\nrounds: 47847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 83395.5361642385,
            "unit": "iter/sec",
            "range": "stddev: 4.02891233673676e-7",
            "extra": "mean: 11.991049473326823 usec\nrounds: 49259"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 82051.30935287627,
            "unit": "iter/sec",
            "range": "stddev: 5.57069583147207e-7",
            "extra": "mean: 12.187495944754787 usec\nrounds: 46729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 82157.29104143858,
            "unit": "iter/sec",
            "range": "stddev: 4.5660535848709774e-7",
            "extra": "mean: 12.171774255502399 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 83144.05907200175,
            "unit": "iter/sec",
            "range": "stddev: 4.7482567533282546e-7",
            "extra": "mean: 12.027317539717567 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 82215.25208800672,
            "unit": "iter/sec",
            "range": "stddev: 4.339305362906468e-7",
            "extra": "mean: 12.16319325919669 usec\nrounds: 47620"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 82600.34132543408,
            "unit": "iter/sec",
            "range": "stddev: 3.808580064232563e-7",
            "extra": "mean: 12.106487503001185 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 81950.73146108791,
            "unit": "iter/sec",
            "range": "stddev: 4.2998140605525504e-7",
            "extra": "mean: 12.202453622696742 usec\nrounds: 47394"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 82917.06314409246,
            "unit": "iter/sec",
            "range": "stddev: 4.145481497161191e-7",
            "extra": "mean: 12.060243839825944 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 82917.27603952233,
            "unit": "iter/sec",
            "range": "stddev: 3.778265569010477e-7",
            "extra": "mean: 12.060212874375567 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 82518.10650300977,
            "unit": "iter/sec",
            "range": "stddev: 4.03431915250099e-7",
            "extra": "mean: 12.118552429017818 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 82994.88072381864,
            "unit": "iter/sec",
            "range": "stddev: 5.081032016161282e-7",
            "extra": "mean: 12.048935925671023 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 81185.23148594999,
            "unit": "iter/sec",
            "range": "stddev: 4.7508605459303935e-7",
            "extra": "mean: 12.317511223369008 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 82718.18922811262,
            "unit": "iter/sec",
            "range": "stddev: 4.069131481747013e-7",
            "extra": "mean: 12.089239492928114 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 82363.52549979067,
            "unit": "iter/sec",
            "range": "stddev: 4.0043717055582313e-7",
            "extra": "mean: 12.141296695738715 usec\nrounds: 47847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 82646.89404461539,
            "unit": "iter/sec",
            "range": "stddev: 4.29971046579058e-7",
            "extra": "mean: 12.099668252023708 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 82646.89065077006,
            "unit": "iter/sec",
            "range": "stddev: 4.1090672480951335e-7",
            "extra": "mean: 12.099668748889375 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 82308.60770809994,
            "unit": "iter/sec",
            "range": "stddev: 4.067857722372429e-7",
            "extra": "mean: 12.149397588480781 usec\nrounds: 49262"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 82172.97035756585,
            "unit": "iter/sec",
            "range": "stddev: 4.0502274344333335e-7",
            "extra": "mean: 12.16945177530543 usec\nrounds: 49259"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 82137.23494375574,
            "unit": "iter/sec",
            "range": "stddev: 4.118484070122011e-7",
            "extra": "mean: 12.174746333800494 usec\nrounds: 48075"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 82504.4465541988,
            "unit": "iter/sec",
            "range": "stddev: 4.731166867062226e-7",
            "extra": "mean: 12.120558851856309 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 83189.55852747666,
            "unit": "iter/sec",
            "range": "stddev: 5.009584547768514e-7",
            "extra": "mean: 12.020739353601813 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 82648.10141615487,
            "unit": "iter/sec",
            "range": "stddev: 4.1413735337341417e-7",
            "extra": "mean: 12.099491493031856 usec\nrounds: 49018"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 83930.40688862649,
            "unit": "iter/sec",
            "range": "stddev: 4.1009107016458115e-7",
            "extra": "mean: 11.9146330522021 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 82966.07652785782,
            "unit": "iter/sec",
            "range": "stddev: 3.881228530943704e-7",
            "extra": "mean: 12.053119080112538 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 83811.85503394878,
            "unit": "iter/sec",
            "range": "stddev: 4.125525675373119e-7",
            "extra": "mean: 11.931486298626139 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 81742.33033264443,
            "unit": "iter/sec",
            "range": "stddev: 4.1597906132906137e-7",
            "extra": "mean: 12.233563637476118 usec\nrounds: 48077"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 82812.70770262748,
            "unit": "iter/sec",
            "range": "stddev: 4.07937698698016e-7",
            "extra": "mean: 12.075441411611664 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 83243.76589281263,
            "unit": "iter/sec",
            "range": "stddev: 4.723761759986103e-7",
            "extra": "mean: 12.012911588930663 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 82436.69518893173,
            "unit": "iter/sec",
            "range": "stddev: 4.7377106194015604e-7",
            "extra": "mean: 12.130520245967647 usec\nrounds: 45046"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 83131.83727288505,
            "unit": "iter/sec",
            "range": "stddev: 4.546376814102382e-7",
            "extra": "mean: 12.029085760698905 usec\nrounds: 48542"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 82528.88997804064,
            "unit": "iter/sec",
            "range": "stddev: 4.112856956381571e-7",
            "extra": "mean: 12.116968982208302 usec\nrounds: 38462"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 83204.044529165,
            "unit": "iter/sec",
            "range": "stddev: 4.2820788373616675e-7",
            "extra": "mean: 12.018646517231218 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 278839.2958209201,
            "unit": "iter/sec",
            "range": "stddev: 2.0994248935759763e-7",
            "extra": "mean: 3.5862950989599165 usec\nrounds: 68028"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 39363.36614342433,
            "unit": "iter/sec",
            "range": "stddev: 7.715877961938481e-7",
            "extra": "mean: 25.40433143741825 usec\nrounds: 11779"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 275321.8721439315,
            "unit": "iter/sec",
            "range": "stddev: 3.6108663051822923e-7",
            "extra": "mean: 3.6321124515571523 usec\nrounds: 73525"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 39496.354374487266,
            "unit": "iter/sec",
            "range": "stddev: 7.335716616073758e-7",
            "extra": "mean: 25.31879247685583 usec\nrounds: 11724"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 276801.9126612964,
            "unit": "iter/sec",
            "range": "stddev: 2.1688877855449124e-7",
            "extra": "mean: 3.61269179965397 usec\nrounds: 81301"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 39095.45552147395,
            "unit": "iter/sec",
            "range": "stddev: 9.431578619044972e-7",
            "extra": "mean: 25.5784204752578 usec\nrounds: 12034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 39169.484178303246,
            "unit": "iter/sec",
            "range": "stddev: 7.099821942158555e-7",
            "extra": "mean: 25.5300783499702 usec\nrounds: 12240"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 279624.8904160215,
            "unit": "iter/sec",
            "range": "stddev: 1.9616987012210125e-7",
            "extra": "mean: 3.576219550814006 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 39730.811043797105,
            "unit": "iter/sec",
            "range": "stddev: 7.321767173387666e-7",
            "extra": "mean: 25.16938299844053 usec\nrounds: 12034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 276300.2722674808,
            "unit": "iter/sec",
            "range": "stddev: 2.179321696602868e-7",
            "extra": "mean: 3.6192508671577417 usec\nrounds: 84746"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 39228.085236631385,
            "unit": "iter/sec",
            "range": "stddev: 7.243802054670261e-7",
            "extra": "mean: 25.491940123200173 usec\nrounds: 11724"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 277164.38372733316,
            "unit": "iter/sec",
            "range": "stddev: 1.9337080946519848e-7",
            "extra": "mean: 3.607967180169055 usec\nrounds: 83334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 278736.8328142795,
            "unit": "iter/sec",
            "range": "stddev: 2.9860365722386924e-7",
            "extra": "mean: 3.5876134126353274 usec\nrounds: 85471"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 39434.36410097404,
            "unit": "iter/sec",
            "range": "stddev: 7.307390267918328e-7",
            "extra": "mean: 25.358593267522725 usec\nrounds: 9001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 280523.5533825261,
            "unit": "iter/sec",
            "range": "stddev: 6.652454529358674e-7",
            "extra": "mean: 3.5647630580109797 usec\nrounds: 91744"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 39324.652127294066,
            "unit": "iter/sec",
            "range": "stddev: 8.203885107384821e-7",
            "extra": "mean: 25.429341288589043 usec\nrounds: 12151"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 273532.99424545397,
            "unit": "iter/sec",
            "range": "stddev: 2.0859744706272907e-7",
            "extra": "mean: 3.6558660967336656 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 39069.37144162908,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017235768001564176",
            "extra": "mean: 25.595497524039587 usec\nrounds: 12723"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 39312.60984815968,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012515206695182443",
            "extra": "mean: 25.43713083060072 usec\nrounds: 12627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 275074.2900965512,
            "unit": "iter/sec",
            "range": "stddev: 4.799062679779989e-7",
            "extra": "mean: 3.635381553285113 usec\nrounds: 90910"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 39325.417770689244,
            "unit": "iter/sec",
            "range": "stddev: 9.727995480599042e-7",
            "extra": "mean: 25.428846193856298 usec\nrounds: 11534"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 277882.72971891286,
            "unit": "iter/sec",
            "range": "stddev: 2.3923917987139515e-7",
            "extra": "mean: 3.5986403365604316 usec\nrounds: 90910"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 38891.12577488992,
            "unit": "iter/sec",
            "range": "stddev: 9.934493304019272e-7",
            "extra": "mean: 25.71280671555285 usec\nrounds: 12122"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 275012.3168393789,
            "unit": "iter/sec",
            "range": "stddev: 2.302870934021707e-7",
            "extra": "mean: 3.6362007763603206 usec\nrounds: 84746"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 280954.0013906524,
            "unit": "iter/sec",
            "range": "stddev: 8.589315807691477e-7",
            "extra": "mean: 3.559301505051535 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 39560.71254059718,
            "unit": "iter/sec",
            "range": "stddev: 7.444463182015454e-7",
            "extra": "mean: 25.277603353928487 usec\nrounds: 12225"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 279232.7673738663,
            "unit": "iter/sec",
            "range": "stddev: 2.1811723559127582e-7",
            "extra": "mean: 3.5812415906801314 usec\nrounds: 86957"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 39059.344401450784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010167822856544494",
            "extra": "mean: 25.60206822014291 usec\nrounds: 11976"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 281698.5102272776,
            "unit": "iter/sec",
            "range": "stddev: 2.9842400359584576e-7",
            "extra": "mean: 3.549894527994445 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 39429.72093856864,
            "unit": "iter/sec",
            "range": "stddev: 7.590324116316455e-7",
            "extra": "mean: 25.361579443029697 usec\nrounds: 12210"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 39488.80145495077,
            "unit": "iter/sec",
            "range": "stddev: 7.310987397714946e-7",
            "extra": "mean: 25.32363513592101 usec\nrounds: 12887"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 280510.3369520219,
            "unit": "iter/sec",
            "range": "stddev: 2.1325880738999444e-7",
            "extra": "mean: 3.5649310141859 usec\nrounds: 90091"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 39464.96643831821,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020831877127086114",
            "extra": "mean: 25.338929441710043 usec\nrounds: 11976"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 282747.205890743,
            "unit": "iter/sec",
            "range": "stddev: 2.633605774421683e-7",
            "extra": "mean: 3.5367281414848435 usec\nrounds: 86957"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 39280.63120774087,
            "unit": "iter/sec",
            "range": "stddev: 7.624316447568432e-7",
            "extra": "mean: 25.457839379193427 usec\nrounds: 12240"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 281929.7993237101,
            "unit": "iter/sec",
            "range": "stddev: 2.1432376117158898e-7",
            "extra": "mean: 3.5469822714689556 usec\nrounds: 87712"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 152537.14220289292,
            "unit": "iter/sec",
            "range": "stddev: 3.1567372964873475e-7",
            "extra": "mean: 6.555780353285225 usec\nrounds: 74069"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 10414.193447717322,
            "unit": "iter/sec",
            "range": "stddev: 0.000009026315244403356",
            "extra": "mean: 96.02279859888613 usec\nrounds: 571"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 118318.25428960712,
            "unit": "iter/sec",
            "range": "stddev: 3.4943109389069153e-7",
            "extra": "mean: 8.451781223481408 usec\nrounds: 45663"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 119726.34074773411,
            "unit": "iter/sec",
            "range": "stddev: 3.2689817371783854e-7",
            "extra": "mean: 8.352380885898958 usec\nrounds: 45872"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 144214.8622309308,
            "unit": "iter/sec",
            "range": "stddev: 5.341345074727499e-7",
            "extra": "mean: 6.934098084833332 usec\nrounds: 5118"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 148945.87637840625,
            "unit": "iter/sec",
            "range": "stddev: 2.974753411901315e-7",
            "extra": "mean: 6.7138481730064 usec\nrounds: 21979"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 17558.60684314861,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014257169767875892",
            "extra": "mean: 56.952126608507164 usec\nrounds: 13909"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 2363.480957196213,
            "unit": "iter/sec",
            "range": "stddev: 0.000013244650618166795",
            "extra": "mean: 423.1047417391912 usec\nrounds: 2300"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 280678.4852678338,
            "unit": "iter/sec",
            "range": "stddev: 2.741651573894368e-7",
            "extra": "mean: 3.562795342314047 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 275228.2364078856,
            "unit": "iter/sec",
            "range": "stddev: 2.089227262372991e-7",
            "extra": "mean: 3.6333481369913283 usec\nrounds: 90901"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 243905.44714340838,
            "unit": "iter/sec",
            "range": "stddev: 2.618163437280637e-7",
            "extra": "mean: 4.099949434142949 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 238003.36171614932,
            "unit": "iter/sec",
            "range": "stddev: 2.5616570166909247e-7",
            "extra": "mean: 4.201621324965288 usec\nrounds: 80000"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 52309.325197534636,
            "unit": "iter/sec",
            "range": "stddev: 0.000008622523075694112",
            "extra": "mean: 19.11705028164138 usec\nrounds: 26809"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 53027.97603862383,
            "unit": "iter/sec",
            "range": "stddev: 8.279284647234629e-7",
            "extra": "mean: 18.857970352698977 usec\nrounds: 29851"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 48360.62083316691,
            "unit": "iter/sec",
            "range": "stddev: 6.95581505406336e-7",
            "extra": "mean: 20.677981026128084 usec\nrounds: 27248"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 48085.09006472671,
            "unit": "iter/sec",
            "range": "stddev: 7.066636218780525e-7",
            "extra": "mean: 20.79646723451933 usec\nrounds: 28170"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 52701.34414898665,
            "unit": "iter/sec",
            "range": "stddev: 6.324950672872218e-7",
            "extra": "mean: 18.97484810203324 usec\nrounds: 28901"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 52663.09222267286,
            "unit": "iter/sec",
            "range": "stddev: 6.829762417007526e-7",
            "extra": "mean: 18.988630515119535 usec\nrounds: 30031"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 50675.34663059673,
            "unit": "iter/sec",
            "range": "stddev: 6.689755416932054e-7",
            "extra": "mean: 19.73346146578148 usec\nrounds: 28572"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 49566.17133545142,
            "unit": "iter/sec",
            "range": "stddev: 6.876632921186734e-7",
            "extra": "mean: 20.175050302599544 usec\nrounds: 28090"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 91422.36992468832,
            "unit": "iter/sec",
            "range": "stddev: 4.1637082901538297e-7",
            "extra": "mean: 10.938241929450937 usec\nrounds: 23697"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 23077.87025348789,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011202938563075086",
            "extra": "mean: 43.3315548192262 usec\nrounds: 7397"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 23037.764966170656,
            "unit": "iter/sec",
            "range": "stddev: 0.000001064482470560404",
            "extra": "mean: 43.4069885454787 usec\nrounds: 8032"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 91938.63333985457,
            "unit": "iter/sec",
            "range": "stddev: 4.3834438397821136e-7",
            "extra": "mean: 10.876820371077986 usec\nrounds: 19724"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 86377.8801057446,
            "unit": "iter/sec",
            "range": "stddev: 8.808558473138099e-7",
            "extra": "mean: 11.57703799602156 usec\nrounds: 24450"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 22328.370899008813,
            "unit": "iter/sec",
            "range": "stddev: 0.000002011882144878175",
            "extra": "mean: 44.786070803060305 usec\nrounds: 7994"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 22409.346021363635,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017133598318691505",
            "extra": "mean: 44.62423843367245 usec\nrounds: 8170"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 88243.37023964974,
            "unit": "iter/sec",
            "range": "stddev: 7.162518373427476e-7",
            "extra": "mean: 11.332296095267193 usec\nrounds: 20284"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 93391.65411879536,
            "unit": "iter/sec",
            "range": "stddev: 3.6729628697006e-7",
            "extra": "mean: 10.70759490701372 usec\nrounds: 27174"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 23071.412482513977,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011403440506424157",
            "extra": "mean: 43.34368347659289 usec\nrounds: 8170"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 23159.61695668867,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011959207721054446",
            "extra": "mean: 43.17860704994054 usec\nrounds: 8085"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 92876.69666683357,
            "unit": "iter/sec",
            "range": "stddev: 4.0650154968108945e-7",
            "extra": "mean: 10.766963467565937 usec\nrounds: 19380"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 88150.47452500538,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013225964724543607",
            "extra": "mean: 11.344238421726624 usec\nrounds: 26667"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 22567.94448496394,
            "unit": "iter/sec",
            "range": "stddev: 0.000001804176715778328",
            "extra": "mean: 44.310637181257576 usec\nrounds: 8117"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 22350.905935926592,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024845777567271906",
            "extra": "mean: 44.740915776152555 usec\nrounds: 8418"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 88990.10428560524,
            "unit": "iter/sec",
            "range": "stddev: 7.689632499264056e-7",
            "extra": "mean: 11.237204496250452 usec\nrounds: 20284"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 76357.66401051372,
            "unit": "iter/sec",
            "range": "stddev: 4.923798777648811e-7",
            "extra": "mean: 13.096262345876763 usec\nrounds: 30395"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 75160.30617129587,
            "unit": "iter/sec",
            "range": "stddev: 5.675074611342768e-7",
            "extra": "mean: 13.304895242455856 usec\nrounds: 32895"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 74105.70413172054,
            "unit": "iter/sec",
            "range": "stddev: 0.000001121071861851991",
            "extra": "mean: 13.494237882451419 usec\nrounds: 32680"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 76277.75902833666,
            "unit": "iter/sec",
            "range": "stddev: 9.570946703442412e-7",
            "extra": "mean: 13.109981372532285 usec\nrounds: 33445"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 72395.49073710688,
            "unit": "iter/sec",
            "range": "stddev: 7.967618162617982e-7",
            "extra": "mean: 13.81301500712726 usec\nrounds: 32051"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 71027.8489489043,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012787509044962945",
            "extra": "mean: 14.078984719351077 usec\nrounds: 31347"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 70912.06171982495,
            "unit": "iter/sec",
            "range": "stddev: 8.74008217173117e-7",
            "extra": "mean: 14.101973285602963 usec\nrounds: 32155"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 72188.7624299341,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012411961661716486",
            "extra": "mean: 13.85257159617597 usec\nrounds: 31545"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 75406.83715345082,
            "unit": "iter/sec",
            "range": "stddev: 4.5848025075052526e-7",
            "extra": "mean: 13.261396946871377 usec\nrounds: 29412"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 75127.28601253612,
            "unit": "iter/sec",
            "range": "stddev: 5.109229095681778e-7",
            "extra": "mean: 13.310743047913842 usec\nrounds: 31251"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 74498.30814190807,
            "unit": "iter/sec",
            "range": "stddev: 4.5529496833147884e-7",
            "extra": "mean: 13.423123624433865 usec\nrounds: 32259"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 75830.61985097843,
            "unit": "iter/sec",
            "range": "stddev: 4.843149403939967e-7",
            "extra": "mean: 13.187285056685413 usec\nrounds: 32155"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 70754.07617007953,
            "unit": "iter/sec",
            "range": "stddev: 4.978796428846183e-7",
            "extra": "mean: 14.133461337212397 usec\nrounds: 30960"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 68614.67263971285,
            "unit": "iter/sec",
            "range": "stddev: 4.916945891380986e-7",
            "extra": "mean: 14.574142257456744 usec\nrounds: 30487"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 68847.51122370109,
            "unit": "iter/sec",
            "range": "stddev: 7.376307792011718e-7",
            "extra": "mean: 14.524853291366982 usec\nrounds: 30121"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 70021.57777615795,
            "unit": "iter/sec",
            "range": "stddev: 6.892500349415188e-7",
            "extra": "mean: 14.281312014944282 usec\nrounds: 30396"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 136231.1954684109,
            "unit": "iter/sec",
            "range": "stddev: 4.103892246676819e-7",
            "extra": "mean: 7.3404626345797475 usec\nrounds: 14599"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 28856.842124670984,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011211200567191666",
            "extra": "mean: 34.65382648869455 usec\nrounds: 8547"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 28975.86169837055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019752914396450397",
            "extra": "mean: 34.51148443520611 usec\nrounds: 2056"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 135253.72047844192,
            "unit": "iter/sec",
            "range": "stddev: 3.2406223256972744e-7",
            "extra": "mean: 7.393511960060203 usec\nrounds: 39841"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 125305.52160826488,
            "unit": "iter/sec",
            "range": "stddev: 4.111412850628767e-7",
            "extra": "mean: 7.980494292392317 usec\nrounds: 25317"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 27634.855647818757,
            "unit": "iter/sec",
            "range": "stddev: 0.000001568034212373269",
            "extra": "mean: 36.18618503907151 usec\nrounds: 7874"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 27328.084314073643,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015978921229796637",
            "extra": "mean: 36.59239295763632 usec\nrounds: 8889"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 124491.76342168797,
            "unit": "iter/sec",
            "range": "stddev: 3.565628666068038e-7",
            "extra": "mean: 8.03265993279189 usec\nrounds: 38313"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 294292.05078646605,
            "unit": "iter/sec",
            "range": "stddev: 2.1876415344186923e-7",
            "extra": "mean: 3.3979850876963886 usec\nrounds: 58140"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 23242.38460887131,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012583648274241245",
            "extra": "mean: 43.02484520535441 usec\nrounds: 7300"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 23059.771410606827,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011924003520498034",
            "extra": "mean: 43.365564306506045 usec\nrounds: 7542"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 291573.5915741802,
            "unit": "iter/sec",
            "range": "stddev: 2.3298956636072336e-7",
            "extra": "mean: 3.4296658850381063 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 262748.0355629071,
            "unit": "iter/sec",
            "range": "stddev: 2.127533549222126e-7",
            "extra": "mean: 3.8059275984979917 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 22588.24545465716,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025596152304979804",
            "extra": "mean: 44.27081341963298 usec\nrounds: 7273"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 22484.59518245148,
            "unit": "iter/sec",
            "range": "stddev: 0.000002145434553870195",
            "extra": "mean: 44.47489456160939 usec\nrounds: 7502"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 267976.94355172483,
            "unit": "iter/sec",
            "range": "stddev: 2.303672276881113e-7",
            "extra": "mean: 3.7316643243487855 usec\nrounds: 78126"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 34993.204896765914,
            "unit": "iter/sec",
            "range": "stddev: 0.00000494763088494751",
            "extra": "mean: 28.576976671617192 usec\nrounds: 17575"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 17311.333448550682,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013965870735891346",
            "extra": "mean: 57.76562521726025 usec\nrounds: 7463"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 17323.372315885375,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014182686729923447",
            "extra": "mean: 57.725481030215406 usec\nrounds: 7881"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 35249.266764503765,
            "unit": "iter/sec",
            "range": "stddev: 7.830006008462528e-7",
            "extra": "mean: 28.369384438005 usec\nrounds: 20833"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 33228.54897232472,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014993338369096803",
            "extra": "mean: 30.094603313339874 usec\nrounds: 19194"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 16920.247961881276,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026511958304757823",
            "extra": "mean: 59.10078872678737 usec\nrounds: 7469"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 16919.765751896153,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026349339821633276",
            "extra": "mean: 59.10247308760363 usec\nrounds: 8026"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 34052.21151202795,
            "unit": "iter/sec",
            "range": "stddev: 0.000001304706996601528",
            "extra": "mean: 29.366668289569947 usec\nrounds: 19921"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 34645.773467122744,
            "unit": "iter/sec",
            "range": "stddev: 7.978564548399268e-7",
            "extra": "mean: 28.86354957406144 usec\nrounds: 20081"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 17373.741805049638,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018845594803550005",
            "extra": "mean: 57.558124854218356 usec\nrounds: 5999"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 17313.776623954265,
            "unit": "iter/sec",
            "range": "stddev: 0.000005882100039234903",
            "extra": "mean: 57.757473815184966 usec\nrounds: 8020"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 35086.52966172707,
            "unit": "iter/sec",
            "range": "stddev: 7.492032640586661e-7",
            "extra": "mean: 28.50096631502475 usec\nrounds: 20662"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 34153.421498069256,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013902515731598513",
            "extra": "mean: 29.279643331094412 usec\nrounds: 19455"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 16904.194420567193,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023067195817105065",
            "extra": "mean: 59.156915444802756 usec\nrounds: 7912"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 16796.06622578589,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027780991284418725",
            "extra": "mean: 59.5377504802146 usec\nrounds: 7819"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 33951.67216415567,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012970202174764022",
            "extra": "mean: 29.453630300299185 usec\nrounds: 19881"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 26260.395570549106,
            "unit": "iter/sec",
            "range": "stddev: 9.713685185645787e-7",
            "extra": "mean: 38.08015752517813 usec\nrounds: 21368"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 25885.590872416986,
            "unit": "iter/sec",
            "range": "stddev: 9.546162702616234e-7",
            "extra": "mean: 38.631530758896986 usec\nrounds: 20921"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 26096.25566681677,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010901273242789463",
            "extra": "mean: 38.31967362549909 usec\nrounds: 21460"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 26276.9689747025,
            "unit": "iter/sec",
            "range": "stddev: 9.446463490377962e-7",
            "extra": "mean: 38.056139616510755 usec\nrounds: 21645"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 25252.170401972493,
            "unit": "iter/sec",
            "range": "stddev: 0.000001826605330438302",
            "extra": "mean: 39.60055647026238 usec\nrounds: 20161"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 25422.355590246963,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011746983334253746",
            "extra": "mean: 39.33545797713726 usec\nrounds: 20001"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 25478.076014356408,
            "unit": "iter/sec",
            "range": "stddev: 0.000001128962339154",
            "extra": "mean: 39.24943152836655 usec\nrounds: 20534"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 25479.64247954468,
            "unit": "iter/sec",
            "range": "stddev: 0.000001803642959706239",
            "extra": "mean: 39.247018509102325 usec\nrounds: 20747"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 30792.496015592693,
            "unit": "iter/sec",
            "range": "stddev: 9.558658343858182e-7",
            "extra": "mean: 32.47544465033365 usec\nrounds: 21599"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 30542.893279989094,
            "unit": "iter/sec",
            "range": "stddev: 8.853316374169657e-7",
            "extra": "mean: 32.74084058877205 usec\nrounds: 22075"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 30661.91825443205,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010052097664106197",
            "extra": "mean: 32.61374554918638 usec\nrounds: 22523"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 30748.7529071748,
            "unit": "iter/sec",
            "range": "stddev: 8.51374182049877e-7",
            "extra": "mean: 32.52164414663672 usec\nrounds: 22321"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 29637.55018283787,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010399305690762285",
            "extra": "mean: 33.74098040596713 usec\nrounds: 21231"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 29578.31235903243,
            "unit": "iter/sec",
            "range": "stddev: 9.351357240296386e-7",
            "extra": "mean: 33.808554993321884 usec\nrounds: 21739"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 29570.80016470577,
            "unit": "iter/sec",
            "range": "stddev: 9.271913893866626e-7",
            "extra": "mean: 33.81714375093407 usec\nrounds: 21739"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 29682.78213348785,
            "unit": "iter/sec",
            "range": "stddev: 9.015309479481131e-7",
            "extra": "mean: 33.689564391331395 usec\nrounds: 22472"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 43823.44177162055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012841717931486998",
            "extra": "mean: 22.818837580383427 usec\nrounds: 21740"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 19049.796296445773,
            "unit": "iter/sec",
            "range": "stddev: 0.000007381704045652277",
            "extra": "mean: 52.49399964379543 usec\nrounds: 8418"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 19155.506821601277,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014013092675384646",
            "extra": "mean: 52.2043091479219 usec\nrounds: 7663"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 43421.061092412936,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014844774409392279",
            "extra": "mean: 23.030298542721066 usec\nrounds: 23809"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 43263.68597948211,
            "unit": "iter/sec",
            "range": "stddev: 8.743474768211907e-7",
            "extra": "mean: 23.11407309294571 usec\nrounds: 22574"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 18761.344876672032,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024256556055125156",
            "extra": "mean: 53.30108297531516 usec\nrounds: 7918"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 18606.331814533223,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034564923827369423",
            "extra": "mean: 53.74514493065795 usec\nrounds: 8404"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 42989.161217725625,
            "unit": "iter/sec",
            "range": "stddev: 7.488894248005841e-7",
            "extra": "mean: 23.261677401318366 usec\nrounds: 23475"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 43525.28429192172,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014034395386403339",
            "extra": "mean: 22.97515148420523 usec\nrounds: 22372"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 19311.938497868592,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013353482558663696",
            "extra": "mean: 51.781440796860835 usec\nrounds: 8285"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 19320.28611388846,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013340622616190778",
            "extra": "mean: 51.75906785775529 usec\nrounds: 8621"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 43854.55516890219,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013141907128768782",
            "extra": "mean: 22.802648348582782 usec\nrounds: 23256"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 43382.04630562892,
            "unit": "iter/sec",
            "range": "stddev: 6.884817894281155e-7",
            "extra": "mean: 23.051010386991532 usec\nrounds: 23202"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 18798.100819114297,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026350959352781412",
            "extra": "mean: 53.19686332265967 usec\nrounds: 7975"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 18796.555265189465,
            "unit": "iter/sec",
            "range": "stddev: 0.000002758568909945689",
            "extra": "mean: 53.201237455033244 usec\nrounds: 8629"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 43274.19648864275,
            "unit": "iter/sec",
            "range": "stddev: 7.495131900250666e-7",
            "extra": "mean: 23.108459108245917 usec\nrounds: 18451"
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
          "id": "4d2a1968132b7ecfe57f14360d23cdde61af5843",
          "message": "Pint 0.16.1",
          "timestamp": "2022-11-26T23:23:26-03:00",
          "tree_id": "497f3e48b83eff228eaf58756417d893f2c765dc",
          "url": "https://github.com/hgrecco/pint-benchmark/commit/4d2a1968132b7ecfe57f14360d23cdde61af5843"
        },
        "date": 1669525562890,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 6.403434453894113,
            "unit": "iter/sec",
            "range": "stddev: 0.0008798623843264687",
            "extra": "mean: 156.16619600000294 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 12258.136403863886,
            "unit": "iter/sec",
            "range": "stddev: 0.00015155431183290724",
            "extra": "mean: 81.57846894939023 usec\nrounds: 4702"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 6.88460137203048,
            "unit": "iter/sec",
            "range": "stddev: 0.005069458599544187",
            "extra": "mean: 145.25169228571752 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 819.4089979254104,
            "unit": "iter/sec",
            "range": "stddev: 0.0015481039447268208",
            "extra": "mean: 1.2203917732558613 msec\nrounds: 344"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_build_cache",
            "value": 1934.0607621626548,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051603368539197695",
            "extra": "mean: 517.0468371850976 usec\nrounds: 1904"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 145803.05706292507,
            "unit": "iter/sec",
            "range": "stddev: 0.000011043507008288913",
            "extra": "mean: 6.858566755348787 usec\nrounds: 25189"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 147354.11927748867,
            "unit": "iter/sec",
            "range": "stddev: 4.898228289093355e-7",
            "extra": "mean: 6.7863728880009 usec\nrounds: 5031"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 146327.58284693232,
            "unit": "iter/sec",
            "range": "stddev: 3.5558466848419797e-7",
            "extra": "mean: 6.83398154021352 usec\nrounds: 38462"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 147311.41423803425,
            "unit": "iter/sec",
            "range": "stddev: 3.141478490049752e-7",
            "extra": "mean: 6.788340232645805 usec\nrounds: 7392"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 147027.29001252374,
            "unit": "iter/sec",
            "range": "stddev: 5.011197891215492e-7",
            "extra": "mean: 6.801458422547408 usec\nrounds: 7480"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 9895.174299114162,
            "unit": "iter/sec",
            "range": "stddev: 0.000022061915971946106",
            "extra": "mean: 101.05936184363345 usec\nrounds: 4209"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 9618.1468561515,
            "unit": "iter/sec",
            "range": "stddev: 0.000003577332582074279",
            "extra": "mean: 103.97013218408367 usec\nrounds: 4176"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 9992.095156145157,
            "unit": "iter/sec",
            "range": "stddev: 0.000004823603320216168",
            "extra": "mean: 100.07911097453852 usec\nrounds: 5695"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 9975.501178237962,
            "unit": "iter/sec",
            "range": "stddev: 0.000007392550064877646",
            "extra": "mean: 100.2455898838996 usec\nrounds: 5852"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 9585.42748161846,
            "unit": "iter/sec",
            "range": "stddev: 0.0001718471121557837",
            "extra": "mean: 104.32502900028763 usec\nrounds: 5862"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 67377.34490727959,
            "unit": "iter/sec",
            "range": "stddev: 4.924620883366648e-7",
            "extra": "mean: 14.841784005827721 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 61748.16112132455,
            "unit": "iter/sec",
            "range": "stddev: 4.920443470750878e-7",
            "extra": "mean: 16.19481425584758 usec\nrounds: 45455"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 74505.14850240092,
            "unit": "iter/sec",
            "range": "stddev: 4.444935646439964e-7",
            "extra": "mean: 13.421891239741306 usec\nrounds: 55866"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 67038.46582263752,
            "unit": "iter/sec",
            "range": "stddev: 4.939844926985339e-7",
            "extra": "mean: 14.916809144255812 usec\nrounds: 51814"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 67784.53278047113,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037493731260262493",
            "extra": "mean: 14.7526280551144 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 303112.52401229093,
            "unit": "iter/sec",
            "range": "stddev: 2.6726234895567426e-7",
            "extra": "mean: 3.2991048563847887 usec\nrounds: 48781"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 305183.69448118296,
            "unit": "iter/sec",
            "range": "stddev: 2.7603330358031554e-7",
            "extra": "mean: 3.27671503453032 usec\nrounds: 13928"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 298874.3777993835,
            "unit": "iter/sec",
            "range": "stddev: 2.0542764175284484e-7",
            "extra": "mean: 3.3458873502741016 usec\nrounds: 52357"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 303678.80457340943,
            "unit": "iter/sec",
            "range": "stddev: 2.1733997113972996e-7",
            "extra": "mean: 3.2929528993791406 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 305684.6916062348,
            "unit": "iter/sec",
            "range": "stddev: 2.3092396079016485e-7",
            "extra": "mean: 3.2713447138796914 usec\nrounds: 51550"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 10014.036535164203,
            "unit": "iter/sec",
            "range": "stddev: 0.000002026756362217717",
            "extra": "mean: 99.85983139651115 usec\nrounds: 4561"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 9701.693477299512,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036478702132382654",
            "extra": "mean: 103.07478816351475 usec\nrounds: 4258"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 9951.50186161522,
            "unit": "iter/sec",
            "range": "stddev: 0.000008440612447255295",
            "extra": "mean: 100.48734491596537 usec\nrounds: 5842"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 9891.895482335449,
            "unit": "iter/sec",
            "range": "stddev: 0.000011267791029384968",
            "extra": "mean: 101.09285948135623 usec\nrounds: 6170"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 9755.050507309725,
            "unit": "iter/sec",
            "range": "stddev: 0.000003176522599766898",
            "extra": "mean: 102.51100178832215 usec\nrounds: 6151"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 115114.20090396523,
            "unit": "iter/sec",
            "range": "stddev: 3.6909232508973594e-7",
            "extra": "mean: 8.687025511598318 usec\nrounds: 7918"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 117812.31318770931,
            "unit": "iter/sec",
            "range": "stddev: 4.37920103831969e-7",
            "extra": "mean: 8.488077119805881 usec\nrounds: 7430"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 139159.67906195548,
            "unit": "iter/sec",
            "range": "stddev: 4.3789979240109203e-7",
            "extra": "mean: 7.185989553445209 usec\nrounds: 3829"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 141888.80410724966,
            "unit": "iter/sec",
            "range": "stddev: 4.285034688821273e-7",
            "extra": "mean: 7.047772417928964 usec\nrounds: 4996"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[meter]",
            "value": 422966.20548347896,
            "unit": "iter/sec",
            "range": "stddev: 1.9027250841437258e-7",
            "extra": "mean: 2.364255080041046 usec\nrounds: 64517"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[angstrom]",
            "value": 425930.4511877886,
            "unit": "iter/sec",
            "range": "stddev: 2.184261103457279e-7",
            "extra": "mean: 2.3478011426778913 usec\nrounds: 64936"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[kilometer/second]",
            "value": 109497.09975119974,
            "unit": "iter/sec",
            "range": "stddev: 4.01979251176618e-7",
            "extra": "mean: 9.132661981661693 usec\nrounds: 4269"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[angstrom/minute]",
            "value": 109409.82908384033,
            "unit": "iter/sec",
            "range": "stddev: 5.204041261950534e-7",
            "extra": "mean: 9.139946642579103 usec\nrounds: 6091"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[meter]",
            "value": 1390650.0518227203,
            "unit": "iter/sec",
            "range": "stddev: 1.9636184565636653e-7",
            "extra": "mean: 719.0881693704996 nsec\nrounds: 71429"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[angstrom]",
            "value": 1350059.7230598761,
            "unit": "iter/sec",
            "range": "stddev: 6.25153088069964e-8",
            "extra": "mean: 740.7079723355439 nsec\nrounds: 65790"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[kilometer/second]",
            "value": 1396736.975770384,
            "unit": "iter/sec",
            "range": "stddev: 6.169046285541638e-8",
            "extra": "mean: 715.9544118525145 nsec\nrounds: 67568"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[angstrom/minute]",
            "value": 1298990.3439274943,
            "unit": "iter/sec",
            "range": "stddev: 5.3614077529348047e-8",
            "extra": "mean: 769.8286632192868 nsec\nrounds: 70423"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_convert_from_uc[key0]",
            "value": 57123.71935763923,
            "unit": "iter/sec",
            "range": "stddev: 5.933822360788109e-7",
            "extra": "mean: 17.505862910277543 usec\nrounds: 10205"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_convert_from_uc[key1]",
            "value": 50534.61859831049,
            "unit": "iter/sec",
            "range": "stddev: 7.332390910015943e-7",
            "extra": "mean: 19.78841490719063 usec\nrounds: 10894"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_math_expression",
            "value": 7172.665733184606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019914052631244027",
            "extra": "mean: 139.41817968366524 usec\nrounds: 4046"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 101473.61872459018,
            "unit": "iter/sec",
            "range": "stddev: 4.5047972263888973e-7",
            "extra": "mean: 9.854778144003149 usec\nrounds: 62500"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 99614.79222547998,
            "unit": "iter/sec",
            "range": "stddev: 4.0709636260290024e-7",
            "extra": "mean: 10.038669736282548 usec\nrounds: 61354"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 44096.794970342075,
            "unit": "iter/sec",
            "range": "stddev: 0.00000529974182738199",
            "extra": "mean: 22.67738507237463 usec\nrounds: 31646"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 15385080.50568414,
            "unit": "iter/sec",
            "range": "stddev: 3.3789082492880925e-9",
            "extra": "mean: 64.99803492292514 nsec\nrounds: 136987"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 14575528.638110114,
            "unit": "iter/sec",
            "range": "stddev: 3.376649096844238e-9",
            "extra": "mean: 68.6081462175598 nsec\nrounds: 138889"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 13056139.199883416,
            "unit": "iter/sec",
            "range": "stddev: 3.3155446629935215e-9",
            "extra": "mean: 76.59232064623858 nsec\nrounds: 123457"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 15124090.186843548,
            "unit": "iter/sec",
            "range": "stddev: 4.003388944348935e-9",
            "extra": "mean: 66.11967977229668 nsec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 15038905.432962002,
            "unit": "iter/sec",
            "range": "stddev: 4.216235279091521e-9",
            "extra": "mean: 66.49420095493855 nsec\nrounds: 142858"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 15072335.12824198,
            "unit": "iter/sec",
            "range": "stddev: 2.9997109123676e-9",
            "extra": "mean: 66.3467200996541 nsec\nrounds: 142858"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 104151.3222909102,
            "unit": "iter/sec",
            "range": "stddev: 3.653354572955233e-7",
            "extra": "mean: 9.60141434601138 usec\nrounds: 34365"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 25560.35991099571,
            "unit": "iter/sec",
            "range": "stddev: 0.000001511372210147222",
            "extra": "mean: 39.12307977986703 usec\nrounds: 727"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 103263.59874175058,
            "unit": "iter/sec",
            "range": "stddev: 5.4564309182884e-7",
            "extra": "mean: 9.683954580169878 usec\nrounds: 35337"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 26047.380415231266,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010911579920987118",
            "extra": "mean: 38.391576583081175 usec\nrounds: 9728"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 103835.64627862118,
            "unit": "iter/sec",
            "range": "stddev: 3.9217202867307763e-7",
            "extra": "mean: 9.630604092516647 usec\nrounds: 34844"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 25965.07751064255,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012394287311290235",
            "extra": "mean: 38.513268431034746 usec\nrounds: 8993"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 25925.805365512337,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012030428606286014",
            "extra": "mean: 38.57160793663308 usec\nrounds: 9853"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 105290.23794249458,
            "unit": "iter/sec",
            "range": "stddev: 4.858329791594704e-7",
            "extra": "mean: 9.497556654266095 usec\nrounds: 28012"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 26295.371910895723,
            "unit": "iter/sec",
            "range": "stddev: 0.000001095922218284532",
            "extra": "mean: 38.029505853295845 usec\nrounds: 9738"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 102924.80824867486,
            "unit": "iter/sec",
            "range": "stddev: 3.8738049313021046e-7",
            "extra": "mean: 9.71583058560495 usec\nrounds: 26810"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 26192.00342394097,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012402069075410732",
            "extra": "mean: 38.179591832442405 usec\nrounds: 9452"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 103346.23087043829,
            "unit": "iter/sec",
            "range": "stddev: 4.296803344109854e-7",
            "extra": "mean: 9.6762116196929 usec\nrounds: 26042"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 104426.08046513905,
            "unit": "iter/sec",
            "range": "stddev: 3.768625534311627e-7",
            "extra": "mean: 9.576151815195571 usec\nrounds: 34845"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 26133.12950567833,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011912826275930695",
            "extra": "mean: 38.26560457608858 usec\nrounds: 9921"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 105172.9399153357,
            "unit": "iter/sec",
            "range": "stddev: 3.5970352599196934e-7",
            "extra": "mean: 9.508149157045539 usec\nrounds: 39683"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 25933.942815411185,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011731363489515523",
            "extra": "mean: 38.55950509020758 usec\nrounds: 9921"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 104162.0224890654,
            "unit": "iter/sec",
            "range": "stddev: 3.6792865792248483e-7",
            "extra": "mean: 9.60042802649091 usec\nrounds: 34603"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 26011.543085666017,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011124080771766948",
            "extra": "mean: 38.444470468615236 usec\nrounds: 9346"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 26232.208482462065,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013881928717464721",
            "extra": "mean: 38.121075496505185 usec\nrounds: 9921"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 103224.77086472759,
            "unit": "iter/sec",
            "range": "stddev: 4.631821667374759e-7",
            "extra": "mean: 9.687597188377048 usec\nrounds: 26248"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 26313.54401813512,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013607200865879346",
            "extra": "mean: 38.003242714505 usec\nrounds: 9814"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 104490.42435839467,
            "unit": "iter/sec",
            "range": "stddev: 4.726880146357768e-7",
            "extra": "mean: 9.570254940970205 usec\nrounds: 27626"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 26143.663949084596,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011817738913516098",
            "extra": "mean: 38.250185664393626 usec\nrounds: 9738"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 99685.9062005804,
            "unit": "iter/sec",
            "range": "stddev: 4.1792360803442944e-7",
            "extra": "mean: 10.031508345702111 usec\nrounds: 25642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 103149.89002612552,
            "unit": "iter/sec",
            "range": "stddev: 3.6556552051722633e-7",
            "extra": "mean: 9.694629822161932 usec\nrounds: 32895"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 25952.41042896241,
            "unit": "iter/sec",
            "range": "stddev: 0.000001128717430223712",
            "extra": "mean: 38.532066327219404 usec\nrounds: 7463"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 102615.79715857595,
            "unit": "iter/sec",
            "range": "stddev: 3.437310416539197e-7",
            "extra": "mean: 9.745088258240234 usec\nrounds: 34603"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 25981.77515747706,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011521685662021796",
            "extra": "mean: 38.4885171986495 usec\nrounds: 9681"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 104390.64552281787,
            "unit": "iter/sec",
            "range": "stddev: 4.374268107229816e-7",
            "extra": "mean: 9.579402397520555 usec\nrounds: 37038"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 25785.63043412196,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013199201507991333",
            "extra": "mean: 38.781289546316714 usec\nrounds: 9059"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 26214.89032670296,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011203672869206221",
            "extra": "mean: 38.14625915033418 usec\nrounds: 9863"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 103785.85548572098,
            "unit": "iter/sec",
            "range": "stddev: 4.1985197221255985e-7",
            "extra": "mean: 9.635224331099545 usec\nrounds: 25975"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 25941.794692365394,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012294740433479823",
            "extra": "mean: 38.54783417487678 usec\nrounds: 9902"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 103543.14253600095,
            "unit": "iter/sec",
            "range": "stddev: 4.4880864298074864e-7",
            "extra": "mean: 9.657810024959495 usec\nrounds: 24040"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 26138.333472894985,
            "unit": "iter/sec",
            "range": "stddev: 0.000001105156268350212",
            "extra": "mean: 38.25798615037884 usec\nrounds: 9892"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 103950.70733502008,
            "unit": "iter/sec",
            "range": "stddev: 5.882103081685667e-7",
            "extra": "mean: 9.619944160429093 usec\nrounds: 28170"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 106194.86833994804,
            "unit": "iter/sec",
            "range": "stddev: 3.587307039330596e-7",
            "extra": "mean: 9.416650876187614 usec\nrounds: 38462"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 25804.27277327851,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010878891880083428",
            "extra": "mean: 38.75327194012401 usec\nrounds: 9355"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 103919.99408440433,
            "unit": "iter/sec",
            "range": "stddev: 4.472259603611401e-7",
            "extra": "mean: 9.622787306817925 usec\nrounds: 35972"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 26397.406584588884,
            "unit": "iter/sec",
            "range": "stddev: 0.000001160142141918233",
            "extra": "mean: 37.88250928346165 usec\nrounds: 9533"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 106327.9083138575,
            "unit": "iter/sec",
            "range": "stddev: 4.5127742010901924e-7",
            "extra": "mean: 9.404868541645826 usec\nrounds: 36232"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 26353.744419531533,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012271063000273501",
            "extra": "mean: 37.94527199174288 usec\nrounds: 9515"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 26356.874992276425,
            "unit": "iter/sec",
            "range": "stddev: 0.00000102642008484814",
            "extra": "mean: 37.94076499179202 usec\nrounds: 9672"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 106116.28177987273,
            "unit": "iter/sec",
            "range": "stddev: 5.17011430758557e-7",
            "extra": "mean: 9.4236245675701 usec\nrounds: 27174"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 26642.555683945986,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011653343207353094",
            "extra": "mean: 37.5339367537691 usec\nrounds: 9882"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 105183.01659106872,
            "unit": "iter/sec",
            "range": "stddev: 3.698600981972699e-7",
            "extra": "mean: 9.507238263452809 usec\nrounds: 26882"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 26163.33895966058,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012338514390002608",
            "extra": "mean: 38.221421262088526 usec\nrounds: 9303"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 105751.9116997715,
            "unit": "iter/sec",
            "range": "stddev: 3.8400754073025133e-7",
            "extra": "mean: 9.456093832506676 usec\nrounds: 26526"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 104791.67800322299,
            "unit": "iter/sec",
            "range": "stddev: 3.9286442362224273e-7",
            "extra": "mean: 9.542742506415863 usec\nrounds: 36498"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 26361.989512116303,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011317451837743147",
            "extra": "mean: 37.93340406043282 usec\nrounds: 9506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 105841.7072495193,
            "unit": "iter/sec",
            "range": "stddev: 4.0704491639068295e-7",
            "extra": "mean: 9.448071332055555 usec\nrounds: 41496"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 26151.219636141854,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013573495666273905",
            "extra": "mean: 38.23913430859518 usec\nrounds: 9843"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 105330.31929577322,
            "unit": "iter/sec",
            "range": "stddev: 3.9981630976922825e-7",
            "extra": "mean: 9.49394254841235 usec\nrounds: 34603"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 25926.596569210462,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011192441190150857",
            "extra": "mean: 38.57043084426923 usec\nrounds: 9616"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 25859.495605640033,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014897524980143248",
            "extra": "mean: 38.67051450848473 usec\nrounds: 10132"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 104473.0240477085,
            "unit": "iter/sec",
            "range": "stddev: 5.113878337884579e-7",
            "extra": "mean: 9.571848897025719 usec\nrounds: 26247"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 25940.388307790185,
            "unit": "iter/sec",
            "range": "stddev: 0.000003791215949338954",
            "extra": "mean: 38.54992408497173 usec\nrounds: 9616"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 101925.27468313523,
            "unit": "iter/sec",
            "range": "stddev: 0.000003477324896524506",
            "extra": "mean: 9.81110919846716 usec\nrounds: 25907"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 26295.362510073057,
            "unit": "iter/sec",
            "range": "stddev: 0.000001202822696040793",
            "extra": "mean: 38.02951944917764 usec\nrounds: 9872"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 105804.35993276261,
            "unit": "iter/sec",
            "range": "stddev: 4.222540342036773e-7",
            "extra": "mean: 9.451406356368375 usec\nrounds: 27028"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 106115.54393398754,
            "unit": "iter/sec",
            "range": "stddev: 4.5746747039964927e-7",
            "extra": "mean: 9.423690092208178 usec\nrounds: 35972"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 26131.65190221312,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011371911720140528",
            "extra": "mean: 38.26776828889676 usec\nrounds: 9719"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 105495.699485017,
            "unit": "iter/sec",
            "range": "stddev: 4.5598017765895716e-7",
            "extra": "mean: 9.479059382340271 usec\nrounds: 33899"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 26532.03336008243,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011496933019376815",
            "extra": "mean: 37.69028880781164 usec\nrounds: 9882"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 106135.61152333158,
            "unit": "iter/sec",
            "range": "stddev: 3.846377944680392e-7",
            "extra": "mean: 9.421908308128717 usec\nrounds: 39371"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 26145.002136922543,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013254366569755632",
            "extra": "mean: 38.24822789315355 usec\nrounds: 1685"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 26245.763463156552,
            "unit": "iter/sec",
            "range": "stddev: 0.000001201558199418068",
            "extra": "mean: 38.10138734976357 usec\nrounds: 9312"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 104428.47900266586,
            "unit": "iter/sec",
            "range": "stddev: 4.730688047163797e-7",
            "extra": "mean: 9.575931867919591 usec\nrounds: 26111"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 26268.336558300685,
            "unit": "iter/sec",
            "range": "stddev: 0.000001263052513484071",
            "extra": "mean: 38.06864579264743 usec\nrounds: 9709"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 103662.91020577333,
            "unit": "iter/sec",
            "range": "stddev: 4.0521672929938567e-7",
            "extra": "mean: 9.646651806465556 usec\nrounds: 26738"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 26263.77650835312,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011737232860163503",
            "extra": "mean: 38.075255463811644 usec\nrounds: 9700"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 104036.49763206666,
            "unit": "iter/sec",
            "range": "stddev: 6.165959128474866e-7",
            "extra": "mean: 9.61201138793214 usec\nrounds: 28012"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 87944.28313235243,
            "unit": "iter/sec",
            "range": "stddev: 7.881229738898685e-7",
            "extra": "mean: 11.370835765356597 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 86584.1019755718,
            "unit": "iter/sec",
            "range": "stddev: 4.956142256655204e-7",
            "extra": "mean: 11.549464361045548 usec\nrounds: 50254"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 89151.74030785721,
            "unit": "iter/sec",
            "range": "stddev: 4.082931129895401e-7",
            "extra": "mean: 11.216830950767957 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 86879.43625503598,
            "unit": "iter/sec",
            "range": "stddev: 5.072288423114428e-7",
            "extra": "mean: 11.510203600590637 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 88764.71756000938,
            "unit": "iter/sec",
            "range": "stddev: 5.01957082335157e-7",
            "extra": "mean: 11.265737417842287 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 86596.06229062733,
            "unit": "iter/sec",
            "range": "stddev: 4.3312602877758716e-7",
            "extra": "mean: 11.547869193449854 usec\nrounds: 51817"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 84489.4281840167,
            "unit": "iter/sec",
            "range": "stddev: 0.00001541804602820509",
            "extra": "mean: 11.835800306542673 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 88499.35896954901,
            "unit": "iter/sec",
            "range": "stddev: 5.580961738385019e-7",
            "extra": "mean: 11.299516873835001 usec\nrounds: 52359"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 87102.2208268635,
            "unit": "iter/sec",
            "range": "stddev: 4.6405444111561046e-7",
            "extra": "mean: 11.480763527117627 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 87548.67493883753,
            "unit": "iter/sec",
            "range": "stddev: 5.184576053175139e-7",
            "extra": "mean: 11.422217420179244 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 86454.95747704411,
            "unit": "iter/sec",
            "range": "stddev: 4.879372651005063e-7",
            "extra": "mean: 11.56671669482371 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 88348.64678583268,
            "unit": "iter/sec",
            "range": "stddev: 4.5399262729735786e-7",
            "extra": "mean: 11.31879249292992 usec\nrounds: 51285"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 88071.00423441076,
            "unit": "iter/sec",
            "range": "stddev: 4.814656695500663e-7",
            "extra": "mean: 11.354474820548075 usec\nrounds: 51550"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 86306.97739303795,
            "unit": "iter/sec",
            "range": "stddev: 0.000005991289544347975",
            "extra": "mean: 11.586548738070698 usec\nrounds: 53767"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 87807.53391249606,
            "unit": "iter/sec",
            "range": "stddev: 7.086673441086695e-7",
            "extra": "mean: 11.388544415750731 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 87217.5075561007,
            "unit": "iter/sec",
            "range": "stddev: 4.7274126715196107e-7",
            "extra": "mean: 11.465587907987082 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 87822.8667210833,
            "unit": "iter/sec",
            "range": "stddev: 6.065837645762737e-7",
            "extra": "mean: 11.386556113863836 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 86442.65353775928,
            "unit": "iter/sec",
            "range": "stddev: 4.561811295626789e-7",
            "extra": "mean: 11.568363060062552 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 87306.70738839987,
            "unit": "iter/sec",
            "range": "stddev: 4.651592903067736e-7",
            "extra": "mean: 11.453873704700795 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 87671.50093907332,
            "unit": "iter/sec",
            "range": "stddev: 4.495214177758796e-7",
            "extra": "mean: 11.406215124512844 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 86380.97729771177,
            "unit": "iter/sec",
            "range": "stddev: 4.586536422888939e-7",
            "extra": "mean: 11.57662290105266 usec\nrounds: 51814"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 88001.16367643228,
            "unit": "iter/sec",
            "range": "stddev: 0.00000394890257643304",
            "extra": "mean: 11.36348609748909 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 86454.02353956996,
            "unit": "iter/sec",
            "range": "stddev: 5.259595521428174e-7",
            "extra": "mean: 11.566841646673629 usec\nrounds: 47394"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 88755.26277609338,
            "unit": "iter/sec",
            "range": "stddev: 4.4725598701495225e-7",
            "extra": "mean: 11.266937516964393 usec\nrounds: 48077"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 88350.30683109019,
            "unit": "iter/sec",
            "range": "stddev: 4.6808301498946865e-7",
            "extra": "mean: 11.318579820122405 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 82268.64346462242,
            "unit": "iter/sec",
            "range": "stddev: 4.65753515699517e-7",
            "extra": "mean: 12.155299490625794 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 87240.17907533135,
            "unit": "iter/sec",
            "range": "stddev: 8.384471890459445e-7",
            "extra": "mean: 11.462608291261143 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 86565.14152087273,
            "unit": "iter/sec",
            "range": "stddev: 4.5347962326152525e-7",
            "extra": "mean: 11.551994052466007 usec\nrounds: 49264"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 87084.40481412485,
            "unit": "iter/sec",
            "range": "stddev: 4.886488467270876e-7",
            "extra": "mean: 11.483112299319554 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 86935.33023137703,
            "unit": "iter/sec",
            "range": "stddev: 4.5570751309483034e-7",
            "extra": "mean: 11.502803260061421 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 86979.27617099254,
            "unit": "iter/sec",
            "range": "stddev: 4.394162865371823e-7",
            "extra": "mean: 11.496991513634814 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 88127.15942043088,
            "unit": "iter/sec",
            "range": "stddev: 4.843816394179981e-7",
            "extra": "mean: 11.347239677036113 usec\nrounds: 53764"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 86574.39798406787,
            "unit": "iter/sec",
            "range": "stddev: 4.77167959825637e-7",
            "extra": "mean: 11.550758922794106 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 87977.0928520943,
            "unit": "iter/sec",
            "range": "stddev: 4.2332697786607564e-7",
            "extra": "mean: 11.36659518496689 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 85656.16668425818,
            "unit": "iter/sec",
            "range": "stddev: 4.4839598951997317e-7",
            "extra": "mean: 11.67458267991555 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 86673.20005886481,
            "unit": "iter/sec",
            "range": "stddev: 5.523689105282235e-7",
            "extra": "mean: 11.537591773706772 usec\nrounds: 50254"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 87229.87606952312,
            "unit": "iter/sec",
            "range": "stddev: 4.300531504843697e-7",
            "extra": "mean: 11.463962177396533 usec\nrounds: 38760"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 86148.42583035173,
            "unit": "iter/sec",
            "range": "stddev: 4.3296893367049306e-7",
            "extra": "mean: 11.607873160320487 usec\nrounds: 46949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 87501.25174508092,
            "unit": "iter/sec",
            "range": "stddev: 4.3122287760717865e-7",
            "extra": "mean: 11.428407937675216 usec\nrounds: 46512"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 85803.26371922504,
            "unit": "iter/sec",
            "range": "stddev: 4.772277923292739e-7",
            "extra": "mean: 11.654568330551049 usec\nrounds: 46297"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 87421.87145990667,
            "unit": "iter/sec",
            "range": "stddev: 4.403115057621225e-7",
            "extra": "mean: 11.438785092339494 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 84705.36675433067,
            "unit": "iter/sec",
            "range": "stddev: 4.442463274536858e-7",
            "extra": "mean: 11.80562741556011 usec\nrounds: 49264"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 85460.71075067502,
            "unit": "iter/sec",
            "range": "stddev: 4.187440149366105e-7",
            "extra": "mean: 11.70128344611388 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 86993.3075252507,
            "unit": "iter/sec",
            "range": "stddev: 4.4443381516146426e-7",
            "extra": "mean: 11.495137136954353 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 86556.50732878345,
            "unit": "iter/sec",
            "range": "stddev: 4.795068939773512e-7",
            "extra": "mean: 11.55314638796037 usec\nrounds: 48310"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 87077.56841022012,
            "unit": "iter/sec",
            "range": "stddev: 5.296455889305164e-7",
            "extra": "mean: 11.484013831082494 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 86537.94560732905,
            "unit": "iter/sec",
            "range": "stddev: 4.2334988482922937e-7",
            "extra": "mean: 11.555624448696273 usec\nrounds: 47847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 86816.7604536045,
            "unit": "iter/sec",
            "range": "stddev: 4.555779338794164e-7",
            "extra": "mean: 11.518513185416625 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 88281.94291261796,
            "unit": "iter/sec",
            "range": "stddev: 4.4948029622166914e-7",
            "extra": "mean: 11.327344720876912 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 86963.10589443853,
            "unit": "iter/sec",
            "range": "stddev: 4.3452536127857105e-7",
            "extra": "mean: 11.499129311387119 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 87872.41716500763,
            "unit": "iter/sec",
            "range": "stddev: 4.2544742338125637e-7",
            "extra": "mean: 11.38013534010554 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 86464.01551055997,
            "unit": "iter/sec",
            "range": "stddev: 4.598608416936256e-7",
            "extra": "mean: 11.565504957121366 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 87386.33712567776,
            "unit": "iter/sec",
            "range": "stddev: 4.0179742595595036e-7",
            "extra": "mean: 11.443436501541592 usec\nrounds: 23095"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 86378.38200797749,
            "unit": "iter/sec",
            "range": "stddev: 4.5497812175511e-7",
            "extra": "mean: 11.576970727555938 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 87999.34872422091,
            "unit": "iter/sec",
            "range": "stddev: 4.233353205237639e-7",
            "extra": "mean: 11.363720464953401 usec\nrounds: 48781"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 86623.05139700686,
            "unit": "iter/sec",
            "range": "stddev: 5.008188907576213e-7",
            "extra": "mean: 11.544271228877001 usec\nrounds: 49508"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 86962.35320729736,
            "unit": "iter/sec",
            "range": "stddev: 4.4769946518271637e-7",
            "extra": "mean: 11.499228840050364 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 87246.58812968417,
            "unit": "iter/sec",
            "range": "stddev: 4.202470165342496e-7",
            "extra": "mean: 11.461766258568076 usec\nrounds: 52357"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 85917.067973661,
            "unit": "iter/sec",
            "range": "stddev: 4.307324162027628e-7",
            "extra": "mean: 11.639130891973211 usec\nrounds: 49262"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 86644.1266274755,
            "unit": "iter/sec",
            "range": "stddev: 4.754289652164045e-7",
            "extra": "mean: 11.541463211920616 usec\nrounds: 43669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 87902.42849968602,
            "unit": "iter/sec",
            "range": "stddev: 4.586839410064843e-7",
            "extra": "mean: 11.37624997474981 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 86847.14908165942,
            "unit": "iter/sec",
            "range": "stddev: 4.129830912621294e-7",
            "extra": "mean: 11.514482750144557 usec\nrounds: 48783"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 88498.82862843852,
            "unit": "iter/sec",
            "range": "stddev: 4.148374234006773e-7",
            "extra": "mean: 11.299584587706695 usec\nrounds: 47170"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 86929.90787455946,
            "unit": "iter/sec",
            "range": "stddev: 4.1675432519347465e-7",
            "extra": "mean: 11.503520761151707 usec\nrounds: 47396"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 87176.18796580035,
            "unit": "iter/sec",
            "range": "stddev: 5.093322467647969e-7",
            "extra": "mean: 11.471022343765537 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 86745.085060435,
            "unit": "iter/sec",
            "range": "stddev: 4.1179730709792574e-7",
            "extra": "mean: 11.528030657913396 usec\nrounds: 47394"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 86512.47691342585,
            "unit": "iter/sec",
            "range": "stddev: 4.532004315112691e-7",
            "extra": "mean: 11.55902634715583 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 86693.2451930597,
            "unit": "iter/sec",
            "range": "stddev: 4.4689050123748995e-7",
            "extra": "mean: 11.534924062112003 usec\nrounds: 47394"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 86789.96320881322,
            "unit": "iter/sec",
            "range": "stddev: 4.248121245627005e-7",
            "extra": "mean: 11.522069638329485 usec\nrounds: 48077"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 87442.25505749891,
            "unit": "iter/sec",
            "range": "stddev: 4.19930346615872e-7",
            "extra": "mean: 11.43611860584377 usec\nrounds: 49264"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 85892.32368838866,
            "unit": "iter/sec",
            "range": "stddev: 4.63011681259174e-7",
            "extra": "mean: 11.642483950346135 usec\nrounds: 50001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 86516.18967456189,
            "unit": "iter/sec",
            "range": "stddev: 4.5795433752386e-7",
            "extra": "mean: 11.558530302381396 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 286317.23462036886,
            "unit": "iter/sec",
            "range": "stddev: 2.483894867980498e-7",
            "extra": "mean: 3.4926294301700382 usec\nrounds: 72993"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 42330.55987770622,
            "unit": "iter/sec",
            "range": "stddev: 7.603205230718604e-7",
            "extra": "mean: 23.623594936826226 usec\nrounds: 12166"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 278507.22255158203,
            "unit": "iter/sec",
            "range": "stddev: 2.449757268722858e-7",
            "extra": "mean: 3.590571155887316 usec\nrounds: 90091"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 42378.053414952985,
            "unit": "iter/sec",
            "range": "stddev: 7.624800901648886e-7",
            "extra": "mean: 23.597119721576277 usec\nrounds: 12362"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 286665.5832299295,
            "unit": "iter/sec",
            "range": "stddev: 2.687014204036951e-7",
            "extra": "mean: 3.4883852771328927 usec\nrounds: 90091"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 42286.26701506163,
            "unit": "iter/sec",
            "range": "stddev: 7.513544909898538e-7",
            "extra": "mean: 23.64833953405765 usec\nrounds: 12579"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 42469.863541234685,
            "unit": "iter/sec",
            "range": "stddev: 7.846871411584932e-7",
            "extra": "mean: 23.546108148642475 usec\nrounds: 13352"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 286052.1136362166,
            "unit": "iter/sec",
            "range": "stddev: 2.29754890209082e-7",
            "extra": "mean: 3.4958664954027863 usec\nrounds: 96154"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 42745.822493369276,
            "unit": "iter/sec",
            "range": "stddev: 8.861267255969055e-7",
            "extra": "mean: 23.394098924055555 usec\nrounds: 12454"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 280689.42802711297,
            "unit": "iter/sec",
            "range": "stddev: 2.3754439478284498e-7",
            "extra": "mean: 3.5626564456977188 usec\nrounds: 97088"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 42638.47836072747,
            "unit": "iter/sec",
            "range": "stddev: 7.515615830060004e-7",
            "extra": "mean: 23.452994535589674 usec\nrounds: 12627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 281497.47193861415,
            "unit": "iter/sec",
            "range": "stddev: 2.2905637716477756e-7",
            "extra": "mean: 3.5524297717958513 usec\nrounds: 90099"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 283855.18924656976,
            "unit": "iter/sec",
            "range": "stddev: 2.5066521408463406e-7",
            "extra": "mean: 3.5229230885448204 usec\nrounds: 99010"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 41855.62559722245,
            "unit": "iter/sec",
            "range": "stddev: 0.000001026896211105534",
            "extra": "mean: 23.89165102017637 usec\nrounds: 12548"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 284108.12500108825,
            "unit": "iter/sec",
            "range": "stddev: 2.3170802277264686e-7",
            "extra": "mean: 3.5197867009124417 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 41785.561591698,
            "unit": "iter/sec",
            "range": "stddev: 8.732093824857323e-7",
            "extra": "mean: 23.931711383261174 usec\nrounds: 12501"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 284315.17384205613,
            "unit": "iter/sec",
            "range": "stddev: 2.2348972164786667e-7",
            "extra": "mean: 3.517223461859703 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 41699.01918378263,
            "unit": "iter/sec",
            "range": "stddev: 7.594218075888127e-7",
            "extra": "mean: 23.981379408293495 usec\nrounds: 12675"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 42751.61443289843,
            "unit": "iter/sec",
            "range": "stddev: 7.618107047265531e-7",
            "extra": "mean: 23.39092951845288 usec\nrounds: 13124"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 284466.7475941478,
            "unit": "iter/sec",
            "range": "stddev: 2.5600076466388477e-7",
            "extra": "mean: 3.515349363176578 usec\nrounds: 95239"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 42679.11951884925,
            "unit": "iter/sec",
            "range": "stddev: 9.736776602482587e-7",
            "extra": "mean: 23.430661439919106 usec\nrounds: 12627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 285583.28892471467,
            "unit": "iter/sec",
            "range": "stddev: 2.62237461247853e-7",
            "extra": "mean: 3.501605446751541 usec\nrounds: 98040"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 42396.07997970153,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010686013422687305",
            "extra": "mean: 23.587086364559692 usec\nrounds: 12563"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 277949.1562064482,
            "unit": "iter/sec",
            "range": "stddev: 2.1604889789340758e-7",
            "extra": "mean: 3.5977803050326393 usec\nrounds: 78741"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 287703.6122899619,
            "unit": "iter/sec",
            "range": "stddev: 2.3819986984241278e-7",
            "extra": "mean: 3.4757992506265465 usec\nrounds: 86207"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 42253.46417771111,
            "unit": "iter/sec",
            "range": "stddev: 7.274284018169618e-7",
            "extra": "mean: 23.666698564505026 usec\nrounds: 12122"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 284967.9710712082,
            "unit": "iter/sec",
            "range": "stddev: 2.4582681161072547e-7",
            "extra": "mean: 3.5091662976753226 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 42283.874946744785,
            "unit": "iter/sec",
            "range": "stddev: 8.42209602811317e-7",
            "extra": "mean: 23.649677359500963 usec\nrounds: 12438"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 284281.8429115147,
            "unit": "iter/sec",
            "range": "stddev: 2.275862366745292e-7",
            "extra": "mean: 3.517635842508799 usec\nrounds: 95239"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 42146.83518563979,
            "unit": "iter/sec",
            "range": "stddev: 8.261085679484161e-7",
            "extra": "mean: 23.726573907516514 usec\nrounds: 12563"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 41941.38200284874,
            "unit": "iter/sec",
            "range": "stddev: 7.704219619912955e-7",
            "extra": "mean: 23.842800409678397 usec\nrounds: 12691"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 288226.0518262824,
            "unit": "iter/sec",
            "range": "stddev: 2.1759168130275672e-7",
            "extra": "mean: 3.4694990049085255 usec\nrounds: 93458"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 42282.01336185909,
            "unit": "iter/sec",
            "range": "stddev: 8.039371749115063e-7",
            "extra": "mean: 23.650718603245604 usec\nrounds: 12772"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 289436.8750100304,
            "unit": "iter/sec",
            "range": "stddev: 2.3864322531463364e-7",
            "extra": "mean: 3.4549847871503765 usec\nrounds: 90910"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 42206.08345883729,
            "unit": "iter/sec",
            "range": "stddev: 7.797112539012134e-7",
            "extra": "mean: 23.693266895405706 usec\nrounds: 12548"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 289207.331628489,
            "unit": "iter/sec",
            "range": "stddev: 2.4045513274200874e-7",
            "extra": "mean: 3.4577270028706724 usec\nrounds: 94349"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 147653.9220304199,
            "unit": "iter/sec",
            "range": "stddev: 3.7869067637755284e-7",
            "extra": "mean: 6.772593550166438 usec\nrounds: 84746"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 9780.515916935145,
            "unit": "iter/sec",
            "range": "stddev: 0.0000936523545904214",
            "extra": "mean: 102.2440951472183 usec\nrounds: 4204"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 116946.82192970261,
            "unit": "iter/sec",
            "range": "stddev: 3.7121344037635223e-7",
            "extra": "mean: 8.550895043570364 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 115998.53429217484,
            "unit": "iter/sec",
            "range": "stddev: 4.0533523192511865e-7",
            "extra": "mean: 8.620798582516738 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 138945.06260177406,
            "unit": "iter/sec",
            "range": "stddev: 4.882308604010551e-7",
            "extra": "mean: 7.197089132026717 usec\nrounds: 5116"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 141070.97887845596,
            "unit": "iter/sec",
            "range": "stddev: 3.7810624238009054e-7",
            "extra": "mean: 7.0886301913420535 usec\nrounds: 24272"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 17179.083975124675,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013715052182689124",
            "extra": "mean: 58.21032142621811 usec\nrounds: 14389"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 2499.111619970195,
            "unit": "iter/sec",
            "range": "stddev: 0.000005372013903143837",
            "extra": "mean: 400.1421913327449 usec\nrounds: 2446"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 280711.7077336179,
            "unit": "iter/sec",
            "range": "stddev: 2.396457840679625e-7",
            "extra": "mean: 3.5623736825004553 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 281346.8965609931,
            "unit": "iter/sec",
            "range": "stddev: 2.1550724878313794e-7",
            "extra": "mean: 3.55433101350457 usec\nrounds: 101011"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 235858.7390750419,
            "unit": "iter/sec",
            "range": "stddev: 2.3647248880675703e-7",
            "extra": "mean: 4.239825939550348 usec\nrounds: 91744"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 231620.16243747273,
            "unit": "iter/sec",
            "range": "stddev: 3.2780616599775603e-7",
            "extra": "mean: 4.3174134301453835 usec\nrounds: 94340"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 54988.70556438529,
            "unit": "iter/sec",
            "range": "stddev: 0.000008049599434682815",
            "extra": "mean: 18.185552646426963 usec\nrounds: 26811"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 56135.801129950014,
            "unit": "iter/sec",
            "range": "stddev: 6.643024108126322e-7",
            "extra": "mean: 17.813943684264483 usec\nrounds: 31057"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 52282.85083681306,
            "unit": "iter/sec",
            "range": "stddev: 6.666429787373287e-7",
            "extra": "mean: 19.12673054346697 usec\nrounds: 27934"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 51729.94644252882,
            "unit": "iter/sec",
            "range": "stddev: 7.213263038409499e-7",
            "extra": "mean: 19.331162484596515 usec\nrounds: 29412"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 56787.433713255894,
            "unit": "iter/sec",
            "range": "stddev: 6.370208038648374e-7",
            "extra": "mean: 17.609529690132305 usec\nrounds: 30212"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 57485.50253906354,
            "unit": "iter/sec",
            "range": "stddev: 6.339840136751666e-7",
            "extra": "mean: 17.395690318971514 usec\nrounds: 31949"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 55051.72411168255,
            "unit": "iter/sec",
            "range": "stddev: 6.649754901401663e-7",
            "extra": "mean: 18.164735367257816 usec\nrounds: 30582"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 55136.86321924382,
            "unit": "iter/sec",
            "range": "stddev: 6.330337809453981e-7",
            "extra": "mean: 18.13668644920266 usec\nrounds: 30212"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 94124.60190728826,
            "unit": "iter/sec",
            "range": "stddev: 4.6825179468630736e-7",
            "extra": "mean: 10.62421492082367 usec\nrounds: 25642"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 23367.342364551063,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012033913285574731",
            "extra": "mean: 42.794768202524786 usec\nrounds: 7856"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 23440.098791183886,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012636452295440413",
            "extra": "mean: 42.661936236212135 usec\nrounds: 8704"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 93659.25479189357,
            "unit": "iter/sec",
            "range": "stddev: 5.60387650663622e-7",
            "extra": "mean: 10.67700145833909 usec\nrounds: 22625"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 87608.59678618524,
            "unit": "iter/sec",
            "range": "stddev: 4.2419234631481576e-7",
            "extra": "mean: 11.414404940654034 usec\nrounds: 28903"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 22471.887946592084,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012002415975977162",
            "extra": "mean: 44.50004389380432 usec\nrounds: 8475"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 22616.79154879548,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012491950784552541",
            "extra": "mean: 44.214936404330864 usec\nrounds: 8727"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 87661.12970256107,
            "unit": "iter/sec",
            "range": "stddev: 4.325725423588208e-7",
            "extra": "mean: 11.407564600103305 usec\nrounds: 20921"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 95811.03602813627,
            "unit": "iter/sec",
            "range": "stddev: 4.1692503232441753e-7",
            "extra": "mean: 10.437211008827164 usec\nrounds: 26179"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 23257.525544957174,
            "unit": "iter/sec",
            "range": "stddev: 0.00000115159125446367",
            "extra": "mean: 42.996835500276404 usec\nrounds: 8614"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 23595.890895231852,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010700652431587939",
            "extra": "mean: 42.38026037838967 usec\nrounds: 8937"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 95576.93492793702,
            "unit": "iter/sec",
            "range": "stddev: 4.177147571393967e-7",
            "extra": "mean: 10.462775362633032 usec\nrounds: 23095"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 91034.53582587265,
            "unit": "iter/sec",
            "range": "stddev: 4.220220796838859e-7",
            "extra": "mean: 10.984842081391632 usec\nrounds: 28654"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 22604.400174809845,
            "unit": "iter/sec",
            "range": "stddev: 0.000001290934113074392",
            "extra": "mean: 44.23917433183614 usec\nrounds: 8306"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 22643.339201110855,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012094070777648982",
            "extra": "mean: 44.16309763848528 usec\nrounds: 8511"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 90687.37403036308,
            "unit": "iter/sec",
            "range": "stddev: 4.504344378972394e-7",
            "extra": "mean: 11.026893332088209 usec\nrounds: 21506"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 79650.27650778205,
            "unit": "iter/sec",
            "range": "stddev: 4.6462356474687485e-7",
            "extra": "mean: 12.554884224442047 usec\nrounds: 32468"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 79053.77461435915,
            "unit": "iter/sec",
            "range": "stddev: 4.797837546666162e-7",
            "extra": "mean: 12.64961736334804 usec\nrounds: 33784"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 78132.17185931797,
            "unit": "iter/sec",
            "range": "stddev: 4.3812760855542843e-7",
            "extra": "mean: 12.798825070427641 usec\nrounds: 35843"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 77814.5360557029,
            "unit": "iter/sec",
            "range": "stddev: 5.654366534754305e-7",
            "extra": "mean: 12.85106935912537 usec\nrounds: 36102"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 74489.41868265743,
            "unit": "iter/sec",
            "range": "stddev: 9.499226588803956e-7",
            "extra": "mean: 13.42472552054993 usec\nrounds: 33671"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 72848.33932900545,
            "unit": "iter/sec",
            "range": "stddev: 5.017252855263829e-7",
            "extra": "mean: 13.72714888507881 usec\nrounds: 35336"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 73580.15660475106,
            "unit": "iter/sec",
            "range": "stddev: 5.267978165870253e-7",
            "extra": "mean: 13.59062070731486 usec\nrounds: 35089"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 74586.2764350578,
            "unit": "iter/sec",
            "range": "stddev: 5.375017200492221e-7",
            "extra": "mean: 13.407292169501167 usec\nrounds: 34966"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 79681.19913305918,
            "unit": "iter/sec",
            "range": "stddev: 4.85506505425685e-7",
            "extra": "mean: 12.550011933556693 usec\nrounds: 25642"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 77942.89577725828,
            "unit": "iter/sec",
            "range": "stddev: 4.831298073533745e-7",
            "extra": "mean: 12.829905663984505 usec\nrounds: 32681"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 79097.67337150313,
            "unit": "iter/sec",
            "range": "stddev: 5.144537952657467e-7",
            "extra": "mean: 12.642596897929419 usec\nrounds: 35589"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 78440.97168535143,
            "unit": "iter/sec",
            "range": "stddev: 4.829973146004072e-7",
            "extra": "mean: 12.74843973135976 usec\nrounds: 34844"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 71954.92727566883,
            "unit": "iter/sec",
            "range": "stddev: 4.963738434513429e-7",
            "extra": "mean: 13.897588919364312 usec\nrounds: 27778"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 72666.06341021723,
            "unit": "iter/sec",
            "range": "stddev: 5.131646441842116e-7",
            "extra": "mean: 13.761582134355647 usec\nrounds: 30304"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 72121.05555699163,
            "unit": "iter/sec",
            "range": "stddev: 4.71061753844655e-7",
            "extra": "mean: 13.865576318552051 usec\nrounds: 32574"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 70056.27899464982,
            "unit": "iter/sec",
            "range": "stddev: 5.012965626990745e-7",
            "extra": "mean: 14.274238003368259 usec\nrounds: 32155"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 132239.99832709992,
            "unit": "iter/sec",
            "range": "stddev: 5.338721444135037e-7",
            "extra": "mean: 7.562008565112558 usec\nrounds: 19381"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 31717.295791351506,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010441049696933818",
            "extra": "mean: 31.528539084113035 usec\nrounds: 9390"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 31485.278921444566,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010698732784732633",
            "extra": "mean: 31.760874740699904 usec\nrounds: 9644"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 132444.78547429747,
            "unit": "iter/sec",
            "range": "stddev: 4.1062841414096035e-7",
            "extra": "mean: 7.550316129237585 usec\nrounds: 36232"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 119407.4832896529,
            "unit": "iter/sec",
            "range": "stddev: 3.1286260308980776e-7",
            "extra": "mean: 8.374684504272219 usec\nrounds: 25975"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 29716.770242781553,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016653240076777946",
            "extra": "mean: 33.65103245844518 usec\nrounds: 1448"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 29538.951069179555,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011346607522009082",
            "extra": "mean: 33.85360562255656 usec\nrounds: 10031"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 119484.4495556352,
            "unit": "iter/sec",
            "range": "stddev: 3.8925229995343156e-7",
            "extra": "mean: 8.369289926170458 usec\nrounds: 37175"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 286921.621856533,
            "unit": "iter/sec",
            "range": "stddev: 2.3904157917002525e-7",
            "extra": "mean: 3.4852723664723375 usec\nrounds: 41323"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 24513.607364126496,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013857426694484385",
            "extra": "mean: 40.793669619731766 usec\nrounds: 7337"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 24481.43989125056,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011943197100261139",
            "extra": "mean: 40.84727060344971 usec\nrounds: 7705"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 290808.9653809404,
            "unit": "iter/sec",
            "range": "stddev: 2.387871627575499e-7",
            "extra": "mean: 3.438683531266192 usec\nrounds: 72993"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 258020.884636287,
            "unit": "iter/sec",
            "range": "stddev: 2.4292943639033394e-7",
            "extra": "mean: 3.8756552649202263 usec\nrounds: 68966"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 23926.632835551645,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012527690380424673",
            "extra": "mean: 41.794430786522504 usec\nrounds: 7159"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 23754.12345119546,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012285546787447523",
            "extra": "mean: 42.09795415328927 usec\nrounds: 7765"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 257869.0956656354,
            "unit": "iter/sec",
            "range": "stddev: 2.5198346443718677e-7",
            "extra": "mean: 3.8779365841366453 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 37320.76906660208,
            "unit": "iter/sec",
            "range": "stddev: 8.38982918977554e-7",
            "extra": "mean: 26.79473186137765 usec\nrounds: 19158"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 16691.73874305255,
            "unit": "iter/sec",
            "range": "stddev: 0.000001388210766051371",
            "extra": "mean: 59.9098761006082 usec\nrounds: 7950"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 16663.78894490314,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016451420325613126",
            "extra": "mean: 60.010361587414636 usec\nrounds: 8164"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 37377.66431245008,
            "unit": "iter/sec",
            "range": "stddev: 8.472558484957481e-7",
            "extra": "mean: 26.753945662327308 usec\nrounds: 19158"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 36158.34577850781,
            "unit": "iter/sec",
            "range": "stddev: 9.254550867346524e-7",
            "extra": "mean: 27.656132449355326 usec\nrounds: 19381"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 16385.541006451702,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015857932874699837",
            "extra": "mean: 61.0294160935093 usec\nrounds: 7705"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 16444.65469468515,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015045841106350131",
            "extra": "mean: 60.81003332488315 usec\nrounds: 7862"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 36253.19191666506,
            "unit": "iter/sec",
            "range": "stddev: 8.705592389241533e-7",
            "extra": "mean: 27.583778065630536 usec\nrounds: 19686"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 37325.5116178781,
            "unit": "iter/sec",
            "range": "stddev: 8.239076255766097e-7",
            "extra": "mean: 26.79132734301281 usec\nrounds: 19921"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 16900.72590251604,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013901890013642308",
            "extra": "mean: 59.16905615581448 usec\nrounds: 7497"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 16859.53558253959,
            "unit": "iter/sec",
            "range": "stddev: 0.000001381696991751191",
            "extra": "mean: 59.31361484450616 usec\nrounds: 7693"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 37637.04837868082,
            "unit": "iter/sec",
            "range": "stddev: 7.964122378725067e-7",
            "extra": "mean: 26.56956491217418 usec\nrounds: 20081"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 36046.44435959702,
            "unit": "iter/sec",
            "range": "stddev: 8.50235525249653e-7",
            "extra": "mean: 27.741987254666896 usec\nrounds: 17575"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 16462.299855281763,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015645382712656412",
            "extra": "mean: 60.74485392629755 usec\nrounds: 7195"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 16366.58288956629,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032305120030030818",
            "extra": "mean: 61.100109091037005 usec\nrounds: 165"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 36042.916919735704,
            "unit": "iter/sec",
            "range": "stddev: 9.422308623839354e-7",
            "extra": "mean: 27.74470230106262 usec\nrounds: 20121"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 26746.178923894342,
            "unit": "iter/sec",
            "range": "stddev: 0.000001048803330458221",
            "extra": "mean: 37.38851829435067 usec\nrounds: 20662"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 26580.722742023656,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010642150636728733",
            "extra": "mean: 37.62124941843728 usec\nrounds: 20203"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 26402.866695043318,
            "unit": "iter/sec",
            "range": "stddev: 0.000001074669648390934",
            "extra": "mean: 37.8746751839539 usec\nrounds: 19842"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 26644.502649639864,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010642418098028386",
            "extra": "mean: 37.531194075920055 usec\nrounds: 20492"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 26377.11908566292,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011188030551889836",
            "extra": "mean: 37.91164595164384 usec\nrounds: 20243"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 26197.773267498866,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011121938038949386",
            "extra": "mean: 38.171183092137326 usec\nrounds: 20121"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 25867.65349670605,
            "unit": "iter/sec",
            "range": "stddev: 0.000001166448172823939",
            "extra": "mean: 38.65831897459653 usec\nrounds: 20243"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 26024.394855208677,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010913493363709853",
            "extra": "mean: 38.425485225061976 usec\nrounds: 20203"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 31628.60011382514,
            "unit": "iter/sec",
            "range": "stddev: 9.948013217948555e-7",
            "extra": "mean: 31.6169541617775 usec\nrounds: 20965"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 32137.75577942153,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013071754374658384",
            "extra": "mean: 31.11604951084732 usec\nrounds: 22076"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 31622.229322934665,
            "unit": "iter/sec",
            "range": "stddev: 9.803033588617286e-7",
            "extra": "mean: 31.623323889904555 usec\nrounds: 22273"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 32350.449651345272,
            "unit": "iter/sec",
            "range": "stddev: 9.586001848602694e-7",
            "extra": "mean: 30.911471425511255 usec\nrounds: 22625"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 30754.023052570283,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010148438262224765",
            "extra": "mean: 32.51607109387351 usec\nrounds: 20705"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 30632.736109066034,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010377263216225698",
            "extra": "mean: 32.644814894743966 usec\nrounds: 21323"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 30646.440860953855,
            "unit": "iter/sec",
            "range": "stddev: 0.00000102664081319902",
            "extra": "mean: 32.630216491928245 usec\nrounds: 21368"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 30228.820209930072,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010208016051018329",
            "extra": "mean: 33.08101318725973 usec\nrounds: 21460"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 45903.95135760153,
            "unit": "iter/sec",
            "range": "stddev: 7.349851066821545e-7",
            "extra": "mean: 21.78461701934519 usec\nrounds: 21646"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 18670.442812916048,
            "unit": "iter/sec",
            "range": "stddev: 0.000005723237322465659",
            "extra": "mean: 53.56059360885693 usec\nrounds: 8418"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 18973.483790114205,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013722638473928177",
            "extra": "mean: 52.705133704598424 usec\nrounds: 8803"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 46154.70515901435,
            "unit": "iter/sec",
            "range": "stddev: 6.452177018158953e-7",
            "extra": "mean: 21.666263418967866 usec\nrounds: 23586"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 44529.77290622834,
            "unit": "iter/sec",
            "range": "stddev: 8.4406436392614e-7",
            "extra": "mean: 22.456885241831785 usec\nrounds: 23641"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 18561.543920357948,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015830120158842257",
            "extra": "mean: 53.87482874758166 usec\nrounds: 8432"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 18483.088770708706,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014850687467979547",
            "extra": "mean: 54.103511182869056 usec\nrounds: 8674"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 44014.19011452687,
            "unit": "iter/sec",
            "range": "stddev: 6.781153033732102e-7",
            "extra": "mean: 22.719945485716213 usec\nrounds: 22728"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 46179.73296506041,
            "unit": "iter/sec",
            "range": "stddev: 6.573965361445601e-7",
            "extra": "mean: 21.65452105919712 usec\nrounds: 23149"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 18650.79625422169,
            "unit": "iter/sec",
            "range": "stddev: 0.0000397647662427801",
            "extra": "mean: 53.617013792301 usec\nrounds: 8773"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 18882.195921153823,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013182242324002232",
            "extra": "mean: 52.959941956734745 usec\nrounds: 8666"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 45860.5994004473,
            "unit": "iter/sec",
            "range": "stddev: 8.403104387653707e-7",
            "extra": "mean: 21.805209985769316 usec\nrounds: 23754"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 43385.98118325573,
            "unit": "iter/sec",
            "range": "stddev: 6.938019517249444e-7",
            "extra": "mean: 23.04891978300902 usec\nrounds: 22676"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 18572.711758492682,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013437688078732969",
            "extra": "mean: 53.84243361999808 usec\nrounds: 8376"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 18452.01411186359,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014651674731362237",
            "extra": "mean: 54.19462579735711 usec\nrounds: 8621"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 45020.52500976523,
            "unit": "iter/sec",
            "range": "stddev: 6.881569079105061e-7",
            "extra": "mean: 22.21209103587961 usec\nrounds: 22936"
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
        "date": 1669525874963,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 6.269140722152653,
            "unit": "iter/sec",
            "range": "stddev: 0.004362316342680475",
            "extra": "mean: 159.51149357142316 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 12061.211687275805,
            "unit": "iter/sec",
            "range": "stddev: 0.00016190256466020223",
            "extra": "mean: 82.9104094951727 usec\nrounds: 4613"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 6.780370378312904,
            "unit": "iter/sec",
            "range": "stddev: 0.0066060558546389035",
            "extra": "mean: 147.48456857143262 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 801.5751789301747,
            "unit": "iter/sec",
            "range": "stddev: 0.0017585362528881225",
            "extra": "mean: 1.2475436194701708 msec\nrounds: 339"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_build_cache",
            "value": 1982.5221045208084,
            "unit": "iter/sec",
            "range": "stddev: 0.00000710402498680641",
            "extra": "mean: 504.40799510868914 usec\nrounds: 1840"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 150875.8912893893,
            "unit": "iter/sec",
            "range": "stddev: 7.936814843849339e-7",
            "extra": "mean: 6.627964159508679 usec\nrounds: 25446"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 147424.94493865783,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016036444012516342",
            "extra": "mean: 6.783112589366005 usec\nrounds: 5036"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 148566.54177483462,
            "unit": "iter/sec",
            "range": "stddev: 4.262236249288077e-7",
            "extra": "mean: 6.730990625840818 usec\nrounds: 35843"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 149296.7029879575,
            "unit": "iter/sec",
            "range": "stddev: 4.881692714030739e-7",
            "extra": "mean: 6.698071558088336 usec\nrounds: 7169"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 150386.3134112882,
            "unit": "iter/sec",
            "range": "stddev: 5.170875962947227e-7",
            "extra": "mean: 6.649541286813263 usec\nrounds: 7242"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 9890.423456850443,
            "unit": "iter/sec",
            "range": "stddev: 0.0000233570084591022",
            "extra": "mean: 101.10790547672315 usec\nrounds: 3798"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 9679.538891697011,
            "unit": "iter/sec",
            "range": "stddev: 0.000010150882601969934",
            "extra": "mean: 103.31070634550449 usec\nrounds: 4318"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 9756.62874361221,
            "unit": "iter/sec",
            "range": "stddev: 0.00017815840259903986",
            "extra": "mean: 102.49441956625773 usec\nrounds: 5949"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 9873.69850716265,
            "unit": "iter/sec",
            "range": "stddev: 0.000006627700330264968",
            "extra": "mean: 101.27917104969053 usec\nrounds: 4525"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 9765.256733002601,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062107940891522634",
            "extra": "mean: 102.40386170497763 usec\nrounds: 3977"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 67663.49144926012,
            "unit": "iter/sec",
            "range": "stddev: 5.832438120913072e-7",
            "extra": "mean: 14.77901861966265 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 61891.779974712554,
            "unit": "iter/sec",
            "range": "stddev: 6.27240364004459e-7",
            "extra": "mean: 16.157234456798225 usec\nrounds: 45663"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 74214.62137577313,
            "unit": "iter/sec",
            "range": "stddev: 5.478016166594667e-7",
            "extra": "mean: 13.474433763350618 usec\nrounds: 54645"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 67018.21413865867,
            "unit": "iter/sec",
            "range": "stddev: 6.071818976683506e-7",
            "extra": "mean: 14.921316732359207 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 67617.70874964108,
            "unit": "iter/sec",
            "range": "stddev: 0.000005649374788461461",
            "extra": "mean: 14.78902521974775 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 300916.42799472844,
            "unit": "iter/sec",
            "range": "stddev: 9.660706690693542e-7",
            "extra": "mean: 3.323181810524211 usec\nrounds: 47170"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 300761.819644582,
            "unit": "iter/sec",
            "range": "stddev: 6.487758415548253e-7",
            "extra": "mean: 3.324890111323724 usec\nrounds: 14451"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 303573.44354778464,
            "unit": "iter/sec",
            "range": "stddev: 4.6877628684546416e-7",
            "extra": "mean: 3.294095782270206 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 297295.6694764688,
            "unit": "iter/sec",
            "range": "stddev: 4.695267493754848e-7",
            "extra": "mean: 3.363654780982778 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 302969.9873121661,
            "unit": "iter/sec",
            "range": "stddev: 2.304548698594704e-7",
            "extra": "mean: 3.3006569689348364 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 9987.918064686068,
            "unit": "iter/sec",
            "range": "stddev: 0.000003422028520144761",
            "extra": "mean: 100.12096550287743 usec\nrounds: 4783"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 9846.92832853949,
            "unit": "iter/sec",
            "range": "stddev: 0.000001900751566189121",
            "extra": "mean: 101.55451188790376 usec\nrounds: 4206"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 9951.67042585802,
            "unit": "iter/sec",
            "range": "stddev: 0.000006402773418189994",
            "extra": "mean: 100.48564283254802 usec\nrounds: 5818"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 9869.552022317339,
            "unit": "iter/sec",
            "range": "stddev: 0.000002330204068191303",
            "extra": "mean: 101.3217213647356 usec\nrounds: 5247"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 9745.193729099583,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022880361870864804",
            "extra": "mean: 102.61468656225432 usec\nrounds: 6132"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 114666.12529129015,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030367524135473764",
            "extra": "mean: 8.720971406853305 usec\nrounds: 7764"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 116019.29906253787,
            "unit": "iter/sec",
            "range": "stddev: 5.554553774075932e-7",
            "extra": "mean: 8.619255659017298 usec\nrounds: 6892"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 143275.17698506796,
            "unit": "iter/sec",
            "range": "stddev: 6.207481017053499e-7",
            "extra": "mean: 6.97957609296284 usec\nrounds: 3890"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 141852.93114799622,
            "unit": "iter/sec",
            "range": "stddev: 0.000001647473778340028",
            "extra": "mean: 7.049554717742789 usec\nrounds: 4907"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[meter]",
            "value": 411237.8761893769,
            "unit": "iter/sec",
            "range": "stddev: 2.9597958335574294e-7",
            "extra": "mean: 2.431682629202898 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[angstrom]",
            "value": 409794.9418518319,
            "unit": "iter/sec",
            "range": "stddev: 2.0825785587144885e-7",
            "extra": "mean: 2.4402448587605226 usec\nrounds: 66667"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[kilometer/second]",
            "value": 108252.18237568365,
            "unit": "iter/sec",
            "range": "stddev: 3.467315232379754e-7",
            "extra": "mean: 9.237689052120457 usec\nrounds: 4348"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[angstrom/minute]",
            "value": 106881.0399038559,
            "unit": "iter/sec",
            "range": "stddev: 4.6294093919657925e-7",
            "extra": "mean: 9.356196392732922 usec\nrounds: 5988"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[meter]",
            "value": 1031721.2846772467,
            "unit": "iter/sec",
            "range": "stddev: 1.3804814782171404e-7",
            "extra": "mean: 969.2540173898127 nsec\nrounds: 188680"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[angstrom]",
            "value": 1059307.2973115372,
            "unit": "iter/sec",
            "range": "stddev: 1.2613250321758837e-7",
            "extra": "mean: 944.0131324856765 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[kilometer/second]",
            "value": 1368437.9055378276,
            "unit": "iter/sec",
            "range": "stddev: 6.352113651463536e-8",
            "extra": "mean: 730.7602310292024 nsec\nrounds: 65360"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[angstrom/minute]",
            "value": 1328466.2645898645,
            "unit": "iter/sec",
            "range": "stddev: 7.308435618356391e-8",
            "extra": "mean: 752.7477563067979 nsec\nrounds: 185186"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_convert_from_uc[key0]",
            "value": 57380.307231637584,
            "unit": "iter/sec",
            "range": "stddev: 7.977418965359258e-7",
            "extra": "mean: 17.42758183505566 usec\nrounds: 8621"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_convert_from_uc[key1]",
            "value": 51222.005341718774,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011176122806770997",
            "extra": "mean: 19.522859234594048 usec\nrounds: 10450"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_math_expression",
            "value": 7252.299284060979,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026353527517265065",
            "extra": "mean: 137.88730454047706 usec\nrounds: 3612"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 101605.79672682483,
            "unit": "iter/sec",
            "range": "stddev: 5.320895036975193e-7",
            "extra": "mean: 9.841958158042681 usec\nrounds: 61350"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 101337.80675829847,
            "unit": "iter/sec",
            "range": "stddev: 4.2148700608653637e-7",
            "extra": "mean: 9.867985424088634 usec\nrounds: 62501"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 43935.53831894398,
            "unit": "iter/sec",
            "range": "stddev: 9.670704154512824e-7",
            "extra": "mean: 22.760617902087326 usec\nrounds: 31348"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 15378686.381210394,
            "unit": "iter/sec",
            "range": "stddev: 3.398301386720125e-9",
            "extra": "mean: 65.02505969704993 nsec\nrounds: 149254"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 14134357.727020582,
            "unit": "iter/sec",
            "range": "stddev: 3.584941113351168e-9",
            "extra": "mean: 70.7495890024426 nsec\nrounds: 133334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 12920164.403203728,
            "unit": "iter/sec",
            "range": "stddev: 5.453976541565411e-9",
            "extra": "mean: 77.39839593304133 nsec\nrounds: 125001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 15167504.188151792,
            "unit": "iter/sec",
            "range": "stddev: 1.1531880229328579e-8",
            "extra": "mean: 65.93042517713404 nsec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 15153337.46526484,
            "unit": "iter/sec",
            "range": "stddev: 6.838208828544738e-9",
            "extra": "mean: 65.99206295595896 nsec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 15140847.675892986,
            "unit": "iter/sec",
            "range": "stddev: 3.0809865845175772e-9",
            "extra": "mean: 66.04650026251815 nsec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 104066.94376140783,
            "unit": "iter/sec",
            "range": "stddev: 4.792754443882354e-7",
            "extra": "mean: 9.609199269776573 usec\nrounds: 32052"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 26181.995199780413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012209047377202143",
            "extra": "mean: 38.19418620962802 usec\nrounds: 9108"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 104273.76308964788,
            "unit": "iter/sec",
            "range": "stddev: 5.358150315899285e-7",
            "extra": "mean: 9.590140130842542 usec\nrounds: 36102"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 26179.409458551923,
            "unit": "iter/sec",
            "range": "stddev: 0.000001243868807853612",
            "extra": "mean: 38.19795865079508 usec\nrounds: 9843"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 103417.07537598982,
            "unit": "iter/sec",
            "range": "stddev: 6.31564102172382e-7",
            "extra": "mean: 9.669583058352163 usec\nrounds: 34247"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 25949.979761167186,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021311795694236286",
            "extra": "mean: 38.5356755266703 usec\nrounds: 9443"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 26270.706804531797,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017708916340876364",
            "extra": "mean: 38.06521109007605 usec\nrounds: 9991"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 103698.06566743563,
            "unit": "iter/sec",
            "range": "stddev: 7.968575203273919e-7",
            "extra": "mean: 9.643381422436992 usec\nrounds: 27248"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 26302.41282605675,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010497757651203439",
            "extra": "mean: 38.01932570267242 usec\nrounds: 9785"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 104042.68445616322,
            "unit": "iter/sec",
            "range": "stddev: 4.277098664183593e-7",
            "extra": "mean: 9.611439816523905 usec\nrounds: 26386"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 26141.616719590857,
            "unit": "iter/sec",
            "range": "stddev: 0.000001100908373791296",
            "extra": "mean: 38.25318115273978 usec\nrounds: 9561"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 100295.89063394774,
            "unit": "iter/sec",
            "range": "stddev: 3.5550556915659406e-7",
            "extra": "mean: 9.970498229580745 usec\nrounds: 24571"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 103477.02060556282,
            "unit": "iter/sec",
            "range": "stddev: 3.8127919837025074e-7",
            "extra": "mean: 9.663981376230707 usec\nrounds: 34365"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 26006.19789359785,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012154653506247397",
            "extra": "mean: 38.452372164951406 usec\nrounds: 9700"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 104788.8464865383,
            "unit": "iter/sec",
            "range": "stddev: 7.065088306021469e-7",
            "extra": "mean: 9.543000362433277 usec\nrounds: 38611"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 26068.499045820005,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011750811617704933",
            "extra": "mean: 38.360474772342 usec\nrounds: 9672"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 102321.16950686208,
            "unit": "iter/sec",
            "range": "stddev: 4.194747820159193e-7",
            "extra": "mean: 9.77314865359251 usec\nrounds: 32680"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 26219.44617018488,
            "unit": "iter/sec",
            "range": "stddev: 0.000001285576808287854",
            "extra": "mean: 38.13963092542884 usec\nrounds: 9662"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 26105.57132873054,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012357181224944783",
            "extra": "mean: 38.30599941321521 usec\nrounds: 10225"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 103899.29029889415,
            "unit": "iter/sec",
            "range": "stddev: 4.772075251276158e-7",
            "extra": "mean: 9.624704818706961 usec\nrounds: 25774"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 26327.40832837447,
            "unit": "iter/sec",
            "range": "stddev: 0.000001638103148462342",
            "extra": "mean: 37.983229778156556 usec\nrounds: 9470"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 103718.56349898543,
            "unit": "iter/sec",
            "range": "stddev: 5.717233462595784e-7",
            "extra": "mean: 9.641475607303237 usec\nrounds: 26955"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 25970.28964530668,
            "unit": "iter/sec",
            "range": "stddev: 0.000001333229970397742",
            "extra": "mean: 38.50553897001757 usec\nrounds: 9533"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 97917.61957918413,
            "unit": "iter/sec",
            "range": "stddev: 5.675049960419565e-7",
            "extra": "mean: 10.212666569077681 usec\nrounds: 23924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 102689.30607916825,
            "unit": "iter/sec",
            "range": "stddev: 5.549117721355443e-7",
            "extra": "mean: 9.738112352507773 usec\nrounds: 34365"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 25843.759653873047,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013475038281085974",
            "extra": "mean: 38.69406051569343 usec\nrounds: 7370"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 102536.6391170915,
            "unit": "iter/sec",
            "range": "stddev: 4.88808111442993e-7",
            "extra": "mean: 9.752611443194 usec\nrounds: 33784"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 25842.59662409181,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013600859654274127",
            "extra": "mean: 38.69580191751119 usec\nrounds: 9804"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 102389.1756511918,
            "unit": "iter/sec",
            "range": "stddev: 4.717009118831973e-7",
            "extra": "mean: 9.766657399476387 usec\nrounds: 39063"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 26164.7690743113,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013192073286198398",
            "extra": "mean: 38.21933215461875 usec\nrounds: 9616"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 25998.39835326711,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010461252591476313",
            "extra": "mean: 38.46390790740131 usec\nrounds: 10142"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 98332.22921600143,
            "unit": "iter/sec",
            "range": "stddev: 3.994513518416347e-7",
            "extra": "mean: 10.169605712928062 usec\nrounds: 24155"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 25975.94302780799,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012261320381941365",
            "extra": "mean: 38.49715865674141 usec\nrounds: 9738"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 102312.53680540466,
            "unit": "iter/sec",
            "range": "stddev: 3.473669940718069e-7",
            "extra": "mean: 9.773973270763188 usec\nrounds: 25253"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 26058.574000925568,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010617247006315647",
            "extra": "mean: 38.37508529685781 usec\nrounds: 9719"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 99400.30467203977,
            "unit": "iter/sec",
            "range": "stddev: 4.830915082075177e-7",
            "extra": "mean: 10.060331337005339 usec\nrounds: 26882"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 107161.09298943183,
            "unit": "iter/sec",
            "range": "stddev: 4.7638246813842656e-7",
            "extra": "mean: 9.331745058802447 usec\nrounds: 40323"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 26135.163362616233,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014021753005366331",
            "extra": "mean: 38.26262671961718 usec\nrounds: 9738"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 106271.65149005615,
            "unit": "iter/sec",
            "range": "stddev: 5.364534967557332e-7",
            "extra": "mean: 9.409847179175248 usec\nrounds: 36232"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 26046.963240955138,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012815283487570358",
            "extra": "mean: 38.392191471581704 usec\nrounds: 9662"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 105266.63719364181,
            "unit": "iter/sec",
            "range": "stddev: 4.445182475473699e-7",
            "extra": "mean: 9.499686003652453 usec\nrounds: 36631"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 25859.960580421135,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011280225069250281",
            "extra": "mean: 38.66981919365767 usec\nrounds: 9795"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 26257.608379788235,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011141242269890512",
            "extra": "mean: 38.08419965505117 usec\nrounds: 9862"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 106709.37455002523,
            "unit": "iter/sec",
            "range": "stddev: 5.434187268442652e-7",
            "extra": "mean: 9.371247879737139 usec\nrounds: 27473"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 26316.608875501093,
            "unit": "iter/sec",
            "range": "stddev: 0.00000131442340468311",
            "extra": "mean: 37.9988168206174 usec\nrounds: 9286"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 105228.70082580422,
            "unit": "iter/sec",
            "range": "stddev: 4.501919326056469e-7",
            "extra": "mean: 9.503110768756917 usec\nrounds: 26316"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 26193.990427440032,
            "unit": "iter/sec",
            "range": "stddev: 0.000001168145799056808",
            "extra": "mean: 38.17669563444714 usec\nrounds: 9597"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 103768.66971596073,
            "unit": "iter/sec",
            "range": "stddev: 3.998518847879623e-7",
            "extra": "mean: 9.636820080061113 usec\nrounds: 25189"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 106518.62965383935,
            "unit": "iter/sec",
            "range": "stddev: 5.217927839904008e-7",
            "extra": "mean: 9.38802914804449 usec\nrounds: 35714"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 26426.750098162327,
            "unit": "iter/sec",
            "range": "stddev: 0.000001227944609497324",
            "extra": "mean: 37.840445619892485 usec\nrounds: 9921"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 105740.60221823736,
            "unit": "iter/sec",
            "range": "stddev: 3.905564767440361e-7",
            "extra": "mean: 9.457105208613305 usec\nrounds: 42373"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 26248.37146808844,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012033311200981034",
            "extra": "mean: 38.09760164419167 usec\nrounds: 9853"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 105205.30436395189,
            "unit": "iter/sec",
            "range": "stddev: 4.526510216545337e-7",
            "extra": "mean: 9.505224152392124 usec\nrounds: 34365"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 26260.409316260844,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015419838713376841",
            "extra": "mean: 38.080137592554 usec\nrounds: 9579"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 26184.605848165495,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011975748896686254",
            "extra": "mean: 38.190378186275446 usec\nrounds: 10278"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 105816.7057128497,
            "unit": "iter/sec",
            "range": "stddev: 4.4571577897840255e-7",
            "extra": "mean: 9.450303647834753 usec\nrounds: 26455"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 26593.53386531089,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012203281814120591",
            "extra": "mean: 37.60312582241727 usec\nrounds: 9116"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 105989.22515044788,
            "unit": "iter/sec",
            "range": "stddev: 3.9887339220423425e-7",
            "extra": "mean: 9.434921319412762 usec\nrounds: 28012"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 26263.286835091258,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010643071614210562",
            "extra": "mean: 38.075965368655474 usec\nrounds: 10020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 102838.00441622935,
            "unit": "iter/sec",
            "range": "stddev: 4.825205595501768e-7",
            "extra": "mean: 9.724031555032639 usec\nrounds: 25511"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 104403.8057332687,
            "unit": "iter/sec",
            "range": "stddev: 3.561951863412248e-7",
            "extra": "mean: 9.578194903687749 usec\nrounds: 34966"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 25689.52632628218,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014911049426171246",
            "extra": "mean: 38.92636973134573 usec\nrounds: 9561"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 105625.57161727594,
            "unit": "iter/sec",
            "range": "stddev: 5.10247386865806e-7",
            "extra": "mean: 9.467404385970127 usec\nrounds: 34247"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 26029.971048809017,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011012771898024503",
            "extra": "mean: 38.4172536390798 usec\nrounds: 9892"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 104703.30371309567,
            "unit": "iter/sec",
            "range": "stddev: 4.5595906629764655e-7",
            "extra": "mean: 9.55079700961648 usec\nrounds: 41667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 26223.49116799,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010180092713633815",
            "extra": "mean: 38.133747852027476 usec\nrounds: 10010"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 26027.65789149374,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011396508719123066",
            "extra": "mean: 38.4206678975451 usec\nrounds: 10289"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 104306.53850869276,
            "unit": "iter/sec",
            "range": "stddev: 4.583431923035995e-7",
            "extra": "mean: 9.587126696919977 usec\nrounds: 25707"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 26324.40487963316,
            "unit": "iter/sec",
            "range": "stddev: 0.000001109082352544896",
            "extra": "mean: 37.987563425363 usec\nrounds: 9050"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 103835.58906293649,
            "unit": "iter/sec",
            "range": "stddev: 4.4731924444895877e-7",
            "extra": "mean: 9.630609399190515 usec\nrounds: 25576"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 25977.570666865875,
            "unit": "iter/sec",
            "range": "stddev: 0.000001298994817338017",
            "extra": "mean: 38.49474659597365 usec\nrounds: 8299"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 103263.17168954288,
            "unit": "iter/sec",
            "range": "stddev: 3.9687152331617416e-7",
            "extra": "mean: 9.683994628854371 usec\nrounds: 26810"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 88391.5762577354,
            "unit": "iter/sec",
            "range": "stddev: 4.920977817297006e-7",
            "extra": "mean: 11.313295252074285 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 86388.98534723898,
            "unit": "iter/sec",
            "range": "stddev: 4.312366268702706e-7",
            "extra": "mean: 11.575549776172481 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 88957.71866637887,
            "unit": "iter/sec",
            "range": "stddev: 4.812518666946666e-7",
            "extra": "mean: 11.241295471507465 usec\nrounds: 52357"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 86919.25273648306,
            "unit": "iter/sec",
            "range": "stddev: 5.088296451754966e-7",
            "extra": "mean: 11.504930938968657 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 88345.91957161005,
            "unit": "iter/sec",
            "range": "stddev: 4.144131604668359e-7",
            "extra": "mean: 11.319141900939021 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 84955.57317447409,
            "unit": "iter/sec",
            "range": "stddev: 5.109402596054141e-7",
            "extra": "mean: 11.770858139539476 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 87644.60020451892,
            "unit": "iter/sec",
            "range": "stddev: 5.178888774640596e-7",
            "extra": "mean: 11.409716031181581 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 88787.33725556117,
            "unit": "iter/sec",
            "range": "stddev: 5.526301787237627e-7",
            "extra": "mean: 11.262867328948591 usec\nrounds: 54345"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 87655.39444326791,
            "unit": "iter/sec",
            "range": "stddev: 6.144886370817208e-7",
            "extra": "mean: 11.408310992738926 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 89317.25587645348,
            "unit": "iter/sec",
            "range": "stddev: 4.988417947783968e-7",
            "extra": "mean: 11.196044820087536 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 85681.77625235569,
            "unit": "iter/sec",
            "range": "stddev: 5.344662076686492e-7",
            "extra": "mean: 11.671093244551013 usec\nrounds: 52357"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 87110.35660284826,
            "unit": "iter/sec",
            "range": "stddev: 6.100023382406502e-7",
            "extra": "mean: 11.479691267470978 usec\nrounds: 54348"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 88775.74855389273,
            "unit": "iter/sec",
            "range": "stddev: 5.462575221580073e-7",
            "extra": "mean: 11.264337572923242 usec\nrounds: 51814"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 87528.89191597937,
            "unit": "iter/sec",
            "range": "stddev: 5.926828378975819e-7",
            "extra": "mean: 11.424799036184748 usec\nrounds: 39216"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 88540.04371874614,
            "unit": "iter/sec",
            "range": "stddev: 4.985855113297304e-7",
            "extra": "mean: 11.294324669373019 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 86680.54127712689,
            "unit": "iter/sec",
            "range": "stddev: 4.008727263111253e-7",
            "extra": "mean: 11.536614622685544 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 87770.476733936,
            "unit": "iter/sec",
            "range": "stddev: 5.291200911155379e-7",
            "extra": "mean: 11.393352721910821 usec\nrounds: 48310"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 86624.43771803884,
            "unit": "iter/sec",
            "range": "stddev: 5.838982770240158e-7",
            "extra": "mean: 11.54408647655508 usec\nrounds: 49262"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 87622.53725638545,
            "unit": "iter/sec",
            "range": "stddev: 3.899251396687428e-7",
            "extra": "mean: 11.412588944713827 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 87107.67422315283,
            "unit": "iter/sec",
            "range": "stddev: 4.948570842608034e-7",
            "extra": "mean: 11.480044771235603 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 87190.8018955016,
            "unit": "iter/sec",
            "range": "stddev: 4.0471939407082224e-7",
            "extra": "mean: 11.469099701577496 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 87242.42507847183,
            "unit": "iter/sec",
            "range": "stddev: 4.4668827923052747e-7",
            "extra": "mean: 11.462313193386489 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 85041.80463414105,
            "unit": "iter/sec",
            "range": "stddev: 4.909935560194314e-7",
            "extra": "mean: 11.758922618141831 usec\nrounds: 46949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 87926.55697554103,
            "unit": "iter/sec",
            "range": "stddev: 4.4687298227522255e-7",
            "extra": "mean: 11.373128146916693 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 88081.80519006598,
            "unit": "iter/sec",
            "range": "stddev: 4.656419814560018e-7",
            "extra": "mean: 11.353082487832365 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 86725.70390515617,
            "unit": "iter/sec",
            "range": "stddev: 4.870027943732973e-7",
            "extra": "mean: 11.530606901658668 usec\nrounds: 51814"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 88329.31083848997,
            "unit": "iter/sec",
            "range": "stddev: 4.255867742209269e-7",
            "extra": "mean: 11.321270261334867 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 86825.76099045125,
            "unit": "iter/sec",
            "range": "stddev: 5.268930824848181e-7",
            "extra": "mean: 11.517319152664564 usec\nrounds: 49998"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 87137.27124120091,
            "unit": "iter/sec",
            "range": "stddev: 4.6040181594858043e-7",
            "extra": "mean: 11.476145462851864 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 86766.18543379245,
            "unit": "iter/sec",
            "range": "stddev: 4.1544862663500967e-7",
            "extra": "mean: 11.525227195369297 usec\nrounds: 50001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 86923.42439837255,
            "unit": "iter/sec",
            "range": "stddev: 4.787935362357406e-7",
            "extra": "mean: 11.504378789967722 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 88521.8424055665,
            "unit": "iter/sec",
            "range": "stddev: 5.050941960123676e-7",
            "extra": "mean: 11.296646938486195 usec\nrounds: 53764"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 86978.02369334221,
            "unit": "iter/sec",
            "range": "stddev: 4.298841685567525e-7",
            "extra": "mean: 11.497157069533941 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 88213.72385875143,
            "unit": "iter/sec",
            "range": "stddev: 4.1884843268185136e-7",
            "extra": "mean: 11.33610459072342 usec\nrounds: 52911"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 86577.92747142882,
            "unit": "iter/sec",
            "range": "stddev: 4.729548973287704e-7",
            "extra": "mean: 11.550288037675717 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 87490.67703940079,
            "unit": "iter/sec",
            "range": "stddev: 4.109775670736967e-7",
            "extra": "mean: 11.429789251141093 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 88242.42513398311,
            "unit": "iter/sec",
            "range": "stddev: 6.038512625416883e-7",
            "extra": "mean: 11.332417467920306 usec\nrounds: 45455"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 86320.81667791637,
            "unit": "iter/sec",
            "range": "stddev: 0.00001642921789506918",
            "extra": "mean: 11.58469113807437 usec\nrounds: 47620"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 89061.85732403299,
            "unit": "iter/sec",
            "range": "stddev: 5.216642179048665e-7",
            "extra": "mean: 11.228151197899553 usec\nrounds: 46297"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 86956.5162605403,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018413458223700918",
            "extra": "mean: 11.50000072454359 usec\nrounds: 48310"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 87971.93882526648,
            "unit": "iter/sec",
            "range": "stddev: 0.000009130025565067996",
            "extra": "mean: 11.36726112159744 usec\nrounds: 48307"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 85973.61369569084,
            "unit": "iter/sec",
            "range": "stddev: 5.099403242212361e-7",
            "extra": "mean: 11.631475716951536 usec\nrounds: 48779"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 86156.78958268047,
            "unit": "iter/sec",
            "range": "stddev: 4.90519570690311e-7",
            "extra": "mean: 11.606746314988312 usec\nrounds: 45249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 87820.15481271171,
            "unit": "iter/sec",
            "range": "stddev: 4.400888425730574e-7",
            "extra": "mean: 11.386907733567933 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 85470.91328180152,
            "unit": "iter/sec",
            "range": "stddev: 5.509643881986205e-7",
            "extra": "mean: 11.69988668195172 usec\nrounds: 48077"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 87704.61818871475,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014759533979637087",
            "extra": "mean: 11.401908139526835 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 86228.03558302784,
            "unit": "iter/sec",
            "range": "stddev: 5.906548441136211e-7",
            "extra": "mean: 11.597156229276651 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 87716.47435269416,
            "unit": "iter/sec",
            "range": "stddev: 4.772904863762138e-7",
            "extra": "mean: 11.400367004938628 usec\nrounds: 48310"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 89411.57809064022,
            "unit": "iter/sec",
            "range": "stddev: 5.054736079381328e-7",
            "extra": "mean: 11.184233869424144 usec\nrounds: 47394"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 87165.8619461487,
            "unit": "iter/sec",
            "range": "stddev: 5.462284303408674e-7",
            "extra": "mean: 11.472381247348908 usec\nrounds: 49262"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 87916.56050380324,
            "unit": "iter/sec",
            "range": "stddev: 6.095082472960333e-7",
            "extra": "mean: 11.374421318003455 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 86699.74865379077,
            "unit": "iter/sec",
            "range": "stddev: 4.902179246446539e-7",
            "extra": "mean: 11.53405881247935 usec\nrounds: 47847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 88264.7197075015,
            "unit": "iter/sec",
            "range": "stddev: 5.291789878972429e-7",
            "extra": "mean: 11.329555039815205 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 86335.9107764765,
            "unit": "iter/sec",
            "range": "stddev: 4.062261856022359e-7",
            "extra": "mean: 11.582665787692887 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 88373.1555278703,
            "unit": "iter/sec",
            "range": "stddev: 4.849264212794174e-7",
            "extra": "mean: 11.315653424694439 usec\nrounds: 49262"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 89053.97585978232,
            "unit": "iter/sec",
            "range": "stddev: 5.303509627873918e-7",
            "extra": "mean: 11.229144912906806 usec\nrounds: 48781"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 87808.34239841867,
            "unit": "iter/sec",
            "range": "stddev: 4.0404776715441826e-7",
            "extra": "mean: 11.388439556945888 usec\nrounds: 48310"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 87746.57787945327,
            "unit": "iter/sec",
            "range": "stddev: 4.3051692627312454e-7",
            "extra": "mean: 11.396455840976563 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 86829.07610051458,
            "unit": "iter/sec",
            "range": "stddev: 4.202525243508963e-7",
            "extra": "mean: 11.51687942461101 usec\nrounds: 48310"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 87717.58419408862,
            "unit": "iter/sec",
            "range": "stddev: 4.6213348504784075e-7",
            "extra": "mean: 11.400222762489063 usec\nrounds: 45663"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 85308.17846093744,
            "unit": "iter/sec",
            "range": "stddev: 5.016474001676875e-7",
            "extra": "mean: 11.722205514655307 usec\nrounds: 47617"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 86922.5002934371,
            "unit": "iter/sec",
            "range": "stddev: 4.229009504906017e-7",
            "extra": "mean: 11.504501097232048 usec\nrounds: 47394"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 88363.32529697567,
            "unit": "iter/sec",
            "range": "stddev: 4.798125819291986e-7",
            "extra": "mean: 11.316912266929208 usec\nrounds: 46083"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 86165.41891692934,
            "unit": "iter/sec",
            "range": "stddev: 4.490754941140899e-7",
            "extra": "mean: 11.605583917187051 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 89077.27414354088,
            "unit": "iter/sec",
            "range": "stddev: 4.970697600100662e-7",
            "extra": "mean: 11.226207914586386 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 87089.68593302742,
            "unit": "iter/sec",
            "range": "stddev: 5.528769989795402e-7",
            "extra": "mean: 11.482415963343893 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 86249.99736263916,
            "unit": "iter/sec",
            "range": "stddev: 5.215161536428807e-7",
            "extra": "mean: 11.594203253079394 usec\nrounds: 46297"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 87799.50604149609,
            "unit": "iter/sec",
            "range": "stddev: 5.345532331350125e-7",
            "extra": "mean: 11.389585717343065 usec\nrounds: 46729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 85908.78336450132,
            "unit": "iter/sec",
            "range": "stddev: 5.508427309058138e-7",
            "extra": "mean: 11.640253310969525 usec\nrounds: 46512"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 87006.23687787981,
            "unit": "iter/sec",
            "range": "stddev: 3.991158719758832e-7",
            "extra": "mean: 11.493428929739597 usec\nrounds: 47847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 86985.14090324656,
            "unit": "iter/sec",
            "range": "stddev: 4.303320534489246e-7",
            "extra": "mean: 11.496216360818437 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 87867.71537950338,
            "unit": "iter/sec",
            "range": "stddev: 4.4693467855596015e-7",
            "extra": "mean: 11.38074428908239 usec\nrounds: 47847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 292045.7936709083,
            "unit": "iter/sec",
            "range": "stddev: 3.3073874342416694e-7",
            "extra": "mean: 3.424120537503271 usec\nrounds: 68966"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 42008.57541872657,
            "unit": "iter/sec",
            "range": "stddev: 7.877052475654858e-7",
            "extra": "mean: 23.804663453410523 usec\nrounds: 12034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 281990.7261108984,
            "unit": "iter/sec",
            "range": "stddev: 1.9342275740965308e-7",
            "extra": "mean: 3.546215912103188 usec\nrounds: 75188"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 42764.341565056915,
            "unit": "iter/sec",
            "range": "stddev: 9.450381684697575e-7",
            "extra": "mean: 23.383968123973364 usec\nrounds: 12423"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 289378.43464259914,
            "unit": "iter/sec",
            "range": "stddev: 2.2580962892991677e-7",
            "extra": "mean: 3.4556825260149875 usec\nrounds: 89286"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 42422.82081886785,
            "unit": "iter/sec",
            "range": "stddev: 7.672970065368307e-7",
            "extra": "mean: 23.572218459250664 usec\nrounds: 12579"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 41788.79684051935,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011350176442391098",
            "extra": "mean: 23.929858612975853 usec\nrounds: 13021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 293654.3540624462,
            "unit": "iter/sec",
            "range": "stddev: 2.045798546273141e-7",
            "extra": "mean: 3.4053641165740998 usec\nrounds: 98040"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 42175.58283337637,
            "unit": "iter/sec",
            "range": "stddev: 7.987448438905389e-7",
            "extra": "mean: 23.710401441296334 usec\nrounds: 12627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 281594.0345940479,
            "unit": "iter/sec",
            "range": "stddev: 2.2537818564840523e-7",
            "extra": "mean: 3.551211592396202 usec\nrounds: 93458"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 41940.20789919282,
            "unit": "iter/sec",
            "range": "stddev: 7.61581620943214e-7",
            "extra": "mean: 23.84346788179002 usec\nrounds: 12454"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 285890.3478720703,
            "unit": "iter/sec",
            "range": "stddev: 3.0585530490257414e-7",
            "extra": "mean: 3.4978445667829194 usec\nrounds: 89286"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 285635.06484547455,
            "unit": "iter/sec",
            "range": "stddev: 2.624365937633715e-7",
            "extra": "mean: 3.500970724798754 usec\nrounds: 93458"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 41724.25488282866,
            "unit": "iter/sec",
            "range": "stddev: 7.669562408470387e-7",
            "extra": "mean: 23.96687497016378 usec\nrounds: 12469"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 291969.4119626923,
            "unit": "iter/sec",
            "range": "stddev: 2.625731278240421e-7",
            "extra": "mean: 3.425016316872877 usec\nrounds: 95239"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 42285.37542924365,
            "unit": "iter/sec",
            "range": "stddev: 7.781798133045746e-7",
            "extra": "mean: 23.648838158556863 usec\nrounds: 12469"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 287154.8890463537,
            "unit": "iter/sec",
            "range": "stddev: 2.5183349290786067e-7",
            "extra": "mean: 3.482441142900325 usec\nrounds: 90091"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 42369.95645595623,
            "unit": "iter/sec",
            "range": "stddev: 7.453061165965644e-7",
            "extra": "mean: 23.60162916474802 usec\nrounds: 12755"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 42479.986630402076,
            "unit": "iter/sec",
            "range": "stddev: 7.560885613504733e-7",
            "extra": "mean: 23.540497051011783 usec\nrounds: 13055"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 287884.0925124889,
            "unit": "iter/sec",
            "range": "stddev: 2.551459470620774e-7",
            "extra": "mean: 3.4736202034387094 usec\nrounds: 94340"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 42387.582710801675,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014087558058349499",
            "extra": "mean: 23.591814773272475 usec\nrounds: 12563"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 280272.6309487291,
            "unit": "iter/sec",
            "range": "stddev: 0.000016585563921710348",
            "extra": "mean: 3.5679545184807298 usec\nrounds: 98040"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 42129.05869353576,
            "unit": "iter/sec",
            "range": "stddev: 0.00000181558852724959",
            "extra": "mean: 23.73658541185111 usec\nrounds: 12627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 285301.575247888,
            "unit": "iter/sec",
            "range": "stddev: 2.579831321665717e-7",
            "extra": "mean: 3.5050630166732764 usec\nrounds: 94340"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 290549.4717205698,
            "unit": "iter/sec",
            "range": "stddev: 2.5499131997398217e-7",
            "extra": "mean: 3.441754666006518 usec\nrounds: 97088"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 42380.029470351576,
            "unit": "iter/sec",
            "range": "stddev: 7.73555425236475e-7",
            "extra": "mean: 23.596019457692563 usec\nrounds: 12643"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 288840.22571636573,
            "unit": "iter/sec",
            "range": "stddev: 2.666404580295963e-7",
            "extra": "mean: 3.4621216540038864 usec\nrounds: 89286"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 42176.42758837454,
            "unit": "iter/sec",
            "range": "stddev: 8.671689605550006e-7",
            "extra": "mean: 23.709926543793834 usec\nrounds: 12579"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 288861.1425491829,
            "unit": "iter/sec",
            "range": "stddev: 2.0380525731841405e-7",
            "extra": "mean: 3.4618709570108934 usec\nrounds: 96154"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 41342.8738718986,
            "unit": "iter/sec",
            "range": "stddev: 8.568452081417581e-7",
            "extra": "mean: 24.187965333481955 usec\nrounds: 12548"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 42824.33986753866,
            "unit": "iter/sec",
            "range": "stddev: 7.624187013439847e-7",
            "extra": "mean: 23.35120641889944 usec\nrounds: 13211"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 291490.00605367025,
            "unit": "iter/sec",
            "range": "stddev: 2.3218147183194503e-7",
            "extra": "mean: 3.430649350687777 usec\nrounds: 93458"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 42734.04119125074,
            "unit": "iter/sec",
            "range": "stddev: 9.189429385013518e-7",
            "extra": "mean: 23.400548418171542 usec\nrounds: 12516"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 291837.7531925892,
            "unit": "iter/sec",
            "range": "stddev: 2.058902729999431e-7",
            "extra": "mean: 3.42656146800884 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 42449.27316096968,
            "unit": "iter/sec",
            "range": "stddev: 7.999382472014607e-7",
            "extra": "mean: 23.55752938826425 usec\nrounds: 12454"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 291354.2818872229,
            "unit": "iter/sec",
            "range": "stddev: 2.7220644715800775e-7",
            "extra": "mean: 3.4322474807048793 usec\nrounds: 98040"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 149984.35312691794,
            "unit": "iter/sec",
            "range": "stddev: 2.9512135542931664e-7",
            "extra": "mean: 6.667362155796292 usec\nrounds: 86957"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 9965.575174370182,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030915617532510333",
            "extra": "mean: 100.34543741858828 usec\nrounds: 3859"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 116718.37432926864,
            "unit": "iter/sec",
            "range": "stddev: 3.5316841641326113e-7",
            "extra": "mean: 8.567631324087396 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 116753.43799148466,
            "unit": "iter/sec",
            "range": "stddev: 4.1996970991276617e-7",
            "extra": "mean: 8.565058273255596 usec\nrounds: 53764"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 142488.0624822361,
            "unit": "iter/sec",
            "range": "stddev: 3.481031919035472e-7",
            "extra": "mean: 7.018131782967218 usec\nrounds: 4515"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 142992.4524395616,
            "unit": "iter/sec",
            "range": "stddev: 3.2284478325617774e-7",
            "extra": "mean: 6.993376104397317 usec\nrounds: 24331"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 16960.79525745238,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014078160214351184",
            "extra": "mean: 58.95949952939922 usec\nrounds: 13813"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 2483.917991148008,
            "unit": "iter/sec",
            "range": "stddev: 0.000005072943245529383",
            "extra": "mean: 402.5897809685028 usec\nrounds: 2438"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 277119.83681433776,
            "unit": "iter/sec",
            "range": "stddev: 2.570648587190226e-7",
            "extra": "mean: 3.608547159581257 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 278094.69878353184,
            "unit": "iter/sec",
            "range": "stddev: 2.7086355270617057e-7",
            "extra": "mean: 3.595897384503533 usec\nrounds: 95239"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 233553.3846848084,
            "unit": "iter/sec",
            "range": "stddev: 2.2785770338867654e-7",
            "extra": "mean: 4.281676334297396 usec\nrounds: 86957"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 235072.4208140798,
            "unit": "iter/sec",
            "range": "stddev: 2.434665821584518e-7",
            "extra": "mean: 4.254008175594985 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 57012.99437938826,
            "unit": "iter/sec",
            "range": "stddev: 0.000008084529144120255",
            "extra": "mean: 17.5398610594908 usec\nrounds: 26954"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 56965.595861488466,
            "unit": "iter/sec",
            "range": "stddev: 8.166493297786371e-7",
            "extra": "mean: 17.554455191366635 usec\nrounds: 30396"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 51896.693640998725,
            "unit": "iter/sec",
            "range": "stddev: 7.470262475280762e-7",
            "extra": "mean: 19.2690502966839 usec\nrounds: 28491"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 51732.70522219934,
            "unit": "iter/sec",
            "range": "stddev: 7.166503019426686e-7",
            "extra": "mean: 19.3301316005969 usec\nrounds: 29240"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 56928.21938290112,
            "unit": "iter/sec",
            "range": "stddev: 7.007418333637013e-7",
            "extra": "mean: 17.56598064790972 usec\nrounds: 31056"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 57545.06913020215,
            "unit": "iter/sec",
            "range": "stddev: 5.787622439642433e-7",
            "extra": "mean: 17.377683529015982 usec\nrounds: 31747"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 55283.800483246196,
            "unit": "iter/sec",
            "range": "stddev: 6.651617141287807e-7",
            "extra": "mean: 18.088481458561283 usec\nrounds: 29070"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 55580.97354656682,
            "unit": "iter/sec",
            "range": "stddev: 6.502471055066534e-7",
            "extra": "mean: 17.991768337094356 usec\nrounds: 30212"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 93476.2295494394,
            "unit": "iter/sec",
            "range": "stddev: 4.834028265894071e-7",
            "extra": "mean: 10.697906888414899 usec\nrounds: 25840"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 23489.886244535483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011437354881784162",
            "extra": "mean: 42.5715131009897 usec\nrounds: 8320"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 23421.830888733217,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013930787344119451",
            "extra": "mean: 42.69521049616312 usec\nrounds: 8803"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 93443.42681883281,
            "unit": "iter/sec",
            "range": "stddev: 4.186151510656959e-7",
            "extra": "mean: 10.701662321725316 usec\nrounds: 21787"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 87663.88394893291,
            "unit": "iter/sec",
            "range": "stddev: 4.3583125757919527e-7",
            "extra": "mean: 11.407206194315242 usec\nrounds: 28090"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 22831.170996438083,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015345806061975184",
            "extra": "mean: 43.799768314818856 usec\nrounds: 8231"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 22761.27526572451,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011884242281555213",
            "extra": "mean: 43.93426942583786 usec\nrounds: 8674"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 88162.07289851824,
            "unit": "iter/sec",
            "range": "stddev: 4.0426747967514177e-7",
            "extra": "mean: 11.34274600316036 usec\nrounds: 21142"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 95109.7535663582,
            "unit": "iter/sec",
            "range": "stddev: 5.570066856429789e-7",
            "extra": "mean: 10.514168762957615 usec\nrounds: 26955"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 23759.405543058347,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012087324152038238",
            "extra": "mean: 42.08859511184885 usec\nrounds: 8306"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 23848.170564583652,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011560357624650047",
            "extra": "mean: 41.93193760049151 usec\nrounds: 8734"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 94663.54217810386,
            "unit": "iter/sec",
            "range": "stddev: 5.440947401627642e-7",
            "extra": "mean: 10.563728939263218 usec\nrounds: 20619"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 90454.48075151881,
            "unit": "iter/sec",
            "range": "stddev: 4.041823095444717e-7",
            "extra": "mean: 11.05528428986321 usec\nrounds: 29586"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 22888.633563168398,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011595164042571724",
            "extra": "mean: 43.68980774846977 usec\nrounds: 6840"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 22858.381204039208,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014510821774131742",
            "extra": "mean: 43.74762985505266 usec\nrounds: 8059"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 89745.98663965934,
            "unit": "iter/sec",
            "range": "stddev: 4.141011563516186e-7",
            "extra": "mean: 11.142559544362882 usec\nrounds: 21505"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 79866.40549797504,
            "unit": "iter/sec",
            "range": "stddev: 4.5947491635813894e-7",
            "extra": "mean: 12.520909057630675 usec\nrounds: 27248"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 78067.21592662268,
            "unit": "iter/sec",
            "range": "stddev: 5.519213124682376e-7",
            "extra": "mean: 12.80947435015391 usec\nrounds: 35088"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 78522.33849206226,
            "unit": "iter/sec",
            "range": "stddev: 4.201150930303447e-7",
            "extra": "mean: 12.735229479966252 usec\nrounds: 34247"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 79136.91977363933,
            "unit": "iter/sec",
            "range": "stddev: 5.347437672503124e-7",
            "extra": "mean: 12.636327050134975 usec\nrounds: 36765"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 77074.67264028103,
            "unit": "iter/sec",
            "range": "stddev: 4.455019719668013e-7",
            "extra": "mean: 12.974430714317124 usec\nrounds: 34603"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 74413.34319913638,
            "unit": "iter/sec",
            "range": "stddev: 6.515051441837952e-7",
            "extra": "mean: 13.438450108657474 usec\nrounds: 34014"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 73627.72039636823,
            "unit": "iter/sec",
            "range": "stddev: 6.090312549288915e-7",
            "extra": "mean: 13.581841113871105 usec\nrounds: 34723"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 75902.07455934725,
            "unit": "iter/sec",
            "range": "stddev: 4.902704025791815e-7",
            "extra": "mean: 13.17487046046558 usec\nrounds: 34723"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 79859.7687981924,
            "unit": "iter/sec",
            "range": "stddev: 4.44374021634402e-7",
            "extra": "mean: 12.521949600518186 usec\nrounds: 30675"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 79169.16007972947,
            "unit": "iter/sec",
            "range": "stddev: 5.634077130804636e-7",
            "extra": "mean: 12.631181118922097 usec\nrounds: 34723"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 79214.40528578601,
            "unit": "iter/sec",
            "range": "stddev: 4.5412446130539786e-7",
            "extra": "mean: 12.623966517103133 usec\nrounds: 35212"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 80041.63515508838,
            "unit": "iter/sec",
            "range": "stddev: 5.48141874632326e-7",
            "extra": "mean: 12.493497890971412 usec\nrounds: 33899"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 73183.89854297097,
            "unit": "iter/sec",
            "range": "stddev: 4.775040819458973e-7",
            "extra": "mean: 13.664207836821316 usec\nrounds: 32155"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 71660.41296789453,
            "unit": "iter/sec",
            "range": "stddev: 5.017628353109676e-7",
            "extra": "mean: 13.954706072486944 usec\nrounds: 32787"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 71461.91119118134,
            "unit": "iter/sec",
            "range": "stddev: 4.392111550147567e-7",
            "extra": "mean: 13.993468455170614 usec\nrounds: 34966"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 73182.3502226338,
            "unit": "iter/sec",
            "range": "stddev: 5.043753404646916e-7",
            "extra": "mean: 13.66449693071924 usec\nrounds: 33558"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 131309.01125321898,
            "unit": "iter/sec",
            "range": "stddev: 3.723192726468711e-7",
            "extra": "mean: 7.615623561977627 usec\nrounds: 17036"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 30792.132921399476,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011618639624225172",
            "extra": "mean: 32.47582759377589 usec\nrounds: 9408"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 30784.81200122454,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013171106790541296",
            "extra": "mean: 32.48355065349181 usec\nrounds: 9338"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 132678.3851580861,
            "unit": "iter/sec",
            "range": "stddev: 3.595045161903011e-7",
            "extra": "mean: 7.537022694453971 usec\nrounds: 37454"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 119718.14315951182,
            "unit": "iter/sec",
            "range": "stddev: 3.839794982358537e-7",
            "extra": "mean: 8.352952807391986 usec\nrounds: 25576"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 29145.573163817684,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016228032093454535",
            "extra": "mean: 34.310527858873414 usec\nrounds: 9243"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 29249.343825853197,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012433516464493528",
            "extra": "mean: 34.18880115580953 usec\nrounds: 9862"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 123257.66346189493,
            "unit": "iter/sec",
            "range": "stddev: 3.3599360346204326e-7",
            "extra": "mean: 8.113085806702394 usec\nrounds: 37736"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 278789.09305738326,
            "unit": "iter/sec",
            "range": "stddev: 2.4172741179762754e-7",
            "extra": "mean: 3.5869408987035576 usec\nrounds: 42554"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 24030.39977607037,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013143658805293227",
            "extra": "mean: 41.61395604395256 usec\nrounds: 7553"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 24197.49491110986,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011079690452091024",
            "extra": "mean: 41.32659201597217 usec\nrounds: 8091"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 280232.5572382345,
            "unit": "iter/sec",
            "range": "stddev: 2.3283688412617547e-7",
            "extra": "mean: 3.5684647417675617 usec\nrounds: 75188"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 250112.79593439808,
            "unit": "iter/sec",
            "range": "stddev: 2.8513051746804815e-7",
            "extra": "mean: 3.998196078949473 usec\nrounds: 66667"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 23511.591121117486,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012201958657045926",
            "extra": "mean: 42.53221293482884 usec\nrounds: 7669"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 23423.984877338175,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012143870179284351",
            "extra": "mean: 42.69128439232654 usec\nrounds: 7887"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 259394.8319371884,
            "unit": "iter/sec",
            "range": "stddev: 2.398829115780693e-7",
            "extra": "mean: 3.855126921889279 usec\nrounds: 75188"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 35875.50891601768,
            "unit": "iter/sec",
            "range": "stddev: 8.446246926918227e-7",
            "extra": "mean: 27.874169042199163 usec\nrounds: 18451"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 17054.770373974385,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014685681560776461",
            "extra": "mean: 58.63462116886675 usec\nrounds: 8059"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 16980.82169183777,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014260257530125116",
            "extra": "mean: 58.88996528835076 usec\nrounds: 7231"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 36938.32033159346,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017005283851507073",
            "extra": "mean: 27.072156801474726 usec\nrounds: 20121"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 36162.323245549334,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016626828299943663",
            "extra": "mean: 27.653090571913815 usec\nrounds: 19686"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 16600.191618237946,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026939902420776906",
            "extra": "mean: 60.24026848589755 usec\nrounds: 7844"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 16269.086881416739,
            "unit": "iter/sec",
            "range": "stddev: 0.000001912859129479231",
            "extra": "mean: 61.466264658174744 usec\nrounds: 8033"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 35624.32396274135,
            "unit": "iter/sec",
            "range": "stddev: 9.572927806212415e-7",
            "extra": "mean: 28.070708121952762 usec\nrounds: 19306"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 36842.52943464881,
            "unit": "iter/sec",
            "range": "stddev: 9.316926192913044e-7",
            "extra": "mean: 27.1425446446015 usec\nrounds: 19532"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 16864.940569675146,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013844949333573157",
            "extra": "mean: 59.294605626900356 usec\nrounds: 8104"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 16982.39021401899,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014564359457439302",
            "extra": "mean: 58.884526111907284 usec\nrounds: 8272"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 36302.866217560506,
            "unit": "iter/sec",
            "range": "stddev: 8.335110878186225e-7",
            "extra": "mean: 27.546034354617365 usec\nrounds: 20492"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 35230.36263336931,
            "unit": "iter/sec",
            "range": "stddev: 9.72825496009009e-7",
            "extra": "mean: 28.384607062001265 usec\nrounds: 19456"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 16526.431370063525,
            "unit": "iter/sec",
            "range": "stddev: 0.00000583421584937751",
            "extra": "mean: 60.50913095560547 usec\nrounds: 7850"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 16529.3793068338,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016760967518770434",
            "extra": "mean: 60.4983394377408 usec\nrounds: 8355"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 35743.928813025166,
            "unit": "iter/sec",
            "range": "stddev: 9.900813108061183e-7",
            "extra": "mean: 27.976779084105544 usec\nrounds: 20243"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 26379.127710487857,
            "unit": "iter/sec",
            "range": "stddev: 0.000001012732194053631",
            "extra": "mean: 37.90875918927442 usec\nrounds: 20921"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 26233.213043201915,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010642689380374008",
            "extra": "mean: 38.11961570826874 usec\nrounds: 19493"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 26171.854970516855,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011424174435725984",
            "extra": "mean: 38.20898446543132 usec\nrounds: 20921"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 26248.015518273092,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011228443865677104",
            "extra": "mean: 38.09811828645977 usec\nrounds: 20704"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 26115.95961726372,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011745649401776082",
            "extra": "mean: 38.29076222567594 usec\nrounds: 20326"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 25299.49736240374,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011189297021745542",
            "extra": "mean: 39.52647697602276 usec\nrounds: 20001"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 25943.84513982669,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012446010458866787",
            "extra": "mean: 38.544787582966585 usec\nrounds: 19570"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 25918.772644154513,
            "unit": "iter/sec",
            "range": "stddev: 0.000001140901458421219",
            "extra": "mean: 38.582073840040835 usec\nrounds: 20409"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 32216.48656290206,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010539211668669963",
            "extra": "mean: 31.040007979998673 usec\nrounds: 21053"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 31761.419171003352,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011705758600754232",
            "extra": "mean: 31.484739224529108 usec\nrounds: 21739"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 31552.786014651163,
            "unit": "iter/sec",
            "range": "stddev: 0.000001028259535811864",
            "extra": "mean: 31.692922442273776 usec\nrounds: 22422"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 32275.407323292016,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010685321784363868",
            "extra": "mean: 30.98334251782891 usec\nrounds: 22574"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 30862.60901546689,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010358475047815768",
            "extra": "mean: 32.401667645753705 usec\nrounds: 21787"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 30508.072424519123,
            "unit": "iter/sec",
            "range": "stddev: 0.000001635534405841415",
            "extra": "mean: 32.778209848364824 usec\nrounds: 21506"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 30792.616750416375,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010762909737104327",
            "extra": "mean: 32.47531731730718 usec\nrounds: 21187"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 30363.697500020568,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010981084985355197",
            "extra": "mean: 32.934065424651344 usec\nrounds: 21414"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 45506.170792915116,
            "unit": "iter/sec",
            "range": "stddev: 6.577936441719526e-7",
            "extra": "mean: 21.975041682823612 usec\nrounds: 21232"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 19039.687341343186,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015864322444883675",
            "extra": "mean: 52.521870872773135 usec\nrounds: 8511"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 18907.11129184297,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013914662031194048",
            "extra": "mean: 52.890152523269194 usec\nrounds: 8897"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 45805.0764220889,
            "unit": "iter/sec",
            "range": "stddev: 7.116150912884437e-7",
            "extra": "mean: 21.831641340036345 usec\nrounds: 23585"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 44841.44796128086,
            "unit": "iter/sec",
            "range": "stddev: 7.824441991101066e-7",
            "extra": "mean: 22.300796371773448 usec\nrounds: 23042"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 18481.06369025383,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014951454556790328",
            "extra": "mean: 54.10943962751233 usec\nrounds: 8696"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 18712.29016873111,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013309746890176632",
            "extra": "mean: 53.44081301555674 usec\nrounds: 7514"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 45247.941198650675,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028699520350892555",
            "extra": "mean: 22.1004530484543 usec\nrounds: 22832"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 45234.34600301075,
            "unit": "iter/sec",
            "range": "stddev: 7.543494168764818e-7",
            "extra": "mean: 22.10709534594445 usec\nrounds: 23420"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 18965.911880734344,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015213809553897904",
            "extra": "mean: 52.72617558746566 usec\nrounds: 8258"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 18873.150312659396,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015176678872216139",
            "extra": "mean: 52.98532483626954 usec\nrounds: 8866"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 45563.10836619551,
            "unit": "iter/sec",
            "range": "stddev: 6.831586369728836e-7",
            "extra": "mean: 21.947580748066933 usec\nrounds: 23530"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 44761.53718754921,
            "unit": "iter/sec",
            "range": "stddev: 7.870352236095722e-7",
            "extra": "mean: 22.340608987802103 usec\nrounds: 23810"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 18496.50676663244,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013579731982185003",
            "extra": "mean: 54.06426265331314 usec\nrounds: 8555"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 18701.697828561446,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016453375604293248",
            "extra": "mean: 53.47108103055695 usec\nrounds: 8577"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 45093.865595229385,
            "unit": "iter/sec",
            "range": "stddev: 7.171580301098587e-7",
            "extra": "mean: 22.175965329213046 usec\nrounds: 22728"
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
          "id": "22b0fccaf34036e835da97b7b9fdf4274ba4f2b6",
          "message": "Pint 0.18",
          "timestamp": "2022-11-26T23:23:26-03:00",
          "tree_id": "766e6f7b66ee40fcfd0a40684b9dc16236eef468",
          "url": "https://github.com/hgrecco/pint-benchmark/commit/22b0fccaf34036e835da97b7b9fdf4274ba4f2b6"
        },
        "date": 1669526182269,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 4.97392142160338,
            "unit": "iter/sec",
            "range": "stddev: 0.007003969936928322",
            "extra": "mean: 201.04861240000105 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 7649.508536116495,
            "unit": "iter/sec",
            "range": "stddev: 0.00019727143391120357",
            "extra": "mean: 130.72735264998872 usec\nrounds: 4038"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 5.358274644352246,
            "unit": "iter/sec",
            "range": "stddev: 0.006099836815573083",
            "extra": "mean: 186.62723849999452 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 571.0528591110268,
            "unit": "iter/sec",
            "range": "stddev: 0.002767493478652078",
            "extra": "mean: 1.7511513759982336 msec\nrounds: 250"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_build_cache",
            "value": 1510.780953439199,
            "unit": "iter/sec",
            "range": "stddev: 0.00026987389172281837",
            "extra": "mean: 661.9093242627675 usec\nrounds: 1764"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 122629.59444611243,
            "unit": "iter/sec",
            "range": "stddev: 0.00001020731055194568",
            "extra": "mean: 8.154638401250146 usec\nrounds: 20791"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 126246.60955294441,
            "unit": "iter/sec",
            "range": "stddev: 0.000006145437899019088",
            "extra": "mean: 7.921004797999165 usec\nrounds: 4377"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 123269.744386897,
            "unit": "iter/sec",
            "range": "stddev: 0.000012933467161295238",
            "extra": "mean: 8.112290692040206 usec\nrounds: 28986"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 127461.01945303091,
            "unit": "iter/sec",
            "range": "stddev: 0.000005458551449642579",
            "extra": "mean: 7.8455358688583035 usec\nrounds: 6231"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 129642.12922869199,
            "unit": "iter/sec",
            "range": "stddev: 0.000004290380218873631",
            "extra": "mean: 7.713541932314107 usec\nrounds: 6117"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 6549.06326359575,
            "unit": "iter/sec",
            "range": "stddev: 0.00004398923523738585",
            "extra": "mean: 152.69359292323466 usec\nrounds: 3024"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 6105.219404426852,
            "unit": "iter/sec",
            "range": "stddev: 0.00009752473353317536",
            "extra": "mean: 163.79427728263246 usec\nrounds: 3592"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 6578.899955971565,
            "unit": "iter/sec",
            "range": "stddev: 0.00009597297365886528",
            "extra": "mean: 152.00109542512737 usec\nrounds: 3563"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 6323.454529768432,
            "unit": "iter/sec",
            "range": "stddev: 0.00011564876267381981",
            "extra": "mean: 158.14140756328337 usec\nrounds: 4760"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 6075.241210292868,
            "unit": "iter/sec",
            "range": "stddev: 0.00011749224243335442",
            "extra": "mean: 164.60251788945732 usec\nrounds: 5003"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 52949.63261646825,
            "unit": "iter/sec",
            "range": "stddev: 0.000015350656346295168",
            "extra": "mean: 18.885872301387465 usec\nrounds: 38168"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 48978.40922334821,
            "unit": "iter/sec",
            "range": "stddev: 0.000022878663072488267",
            "extra": "mean: 20.417159639462035 usec\nrounds: 34722"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 56224.06927663315,
            "unit": "iter/sec",
            "range": "stddev: 0.00005110914302991103",
            "extra": "mean: 17.78597694663133 usec\nrounds: 43291"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 53624.22130372318,
            "unit": "iter/sec",
            "range": "stddev: 0.000021074052931368183",
            "extra": "mean: 18.648289442490594 usec\nrounds: 26247"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 55043.57770321635,
            "unit": "iter/sec",
            "range": "stddev: 0.000021056648127165323",
            "extra": "mean: 18.167423734550727 usec\nrounds: 43860"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 282139.62894400384,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022260849484196796",
            "extra": "mean: 3.544344350854979 usec\nrounds: 44051"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 279627.5904741898,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022064073865592434",
            "extra": "mean: 3.576185019168565 usec\nrounds: 10707"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 277804.2308950929,
            "unit": "iter/sec",
            "range": "stddev: 0.000004138695509584867",
            "extra": "mean: 3.599657200244836 usec\nrounds: 46727"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 255692.8070092941,
            "unit": "iter/sec",
            "range": "stddev: 0.000014483749352355307",
            "extra": "mean: 3.9109430245476213 usec\nrounds: 47617"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 278627.915406488,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031130965327191284",
            "extra": "mean: 3.5890158333241957 usec\nrounds: 46295"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 6735.711577866429,
            "unit": "iter/sec",
            "range": "stddev: 0.00020385722251081413",
            "extra": "mean: 148.46241387264908 usec\nrounds: 3907"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 6706.110296651592,
            "unit": "iter/sec",
            "range": "stddev: 0.00007045752725604918",
            "extra": "mean: 149.11773826614618 usec\nrounds: 4176"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 6644.7216377130135,
            "unit": "iter/sec",
            "range": "stddev: 0.0001467529126771403",
            "extra": "mean: 150.49539386636832 usec\nrounds: 5380"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 6799.170304071438,
            "unit": "iter/sec",
            "range": "stddev: 0.000046156369567490776",
            "extra": "mean: 147.07676897005888 usec\nrounds: 4138"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 6793.067931366565,
            "unit": "iter/sec",
            "range": "stddev: 0.00004447926741970642",
            "extra": "mean: 147.2088914910688 usec\nrounds: 4313"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 103377.83870642708,
            "unit": "iter/sec",
            "range": "stddev: 0.000005043751412175522",
            "extra": "mean: 9.673253112205268 usec\nrounds: 6507"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 102289.75901407437,
            "unit": "iter/sec",
            "range": "stddev: 0.000004485164194926057",
            "extra": "mean: 9.776149730320578 usec\nrounds: 6672"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 117466.79530506498,
            "unit": "iter/sec",
            "range": "stddev: 0.00000967818208429637",
            "extra": "mean: 8.513044025785913 usec\nrounds: 2226"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 120041.3607075651,
            "unit": "iter/sec",
            "range": "stddev: 0.000007164476192743581",
            "extra": "mean: 8.330462051626672 usec\nrounds: 4493"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[meter]",
            "value": 373624.79750959016,
            "unit": "iter/sec",
            "range": "stddev: 0.000004444214091067773",
            "extra": "mean: 2.67648187878732 usec\nrounds: 57143"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[angstrom]",
            "value": 387980.4201993065,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037969528024083045",
            "extra": "mean: 2.5774496545116823 usec\nrounds: 55556"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[kilometer/second]",
            "value": 90500.52390605866,
            "unit": "iter/sec",
            "range": "stddev: 0.00003275374131424228",
            "extra": "mean: 11.049659790235246 usec\nrounds: 3927"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_registry[angstrom/minute]",
            "value": 94411.74046991697,
            "unit": "iter/sec",
            "range": "stddev: 0.000006431093382846701",
            "extra": "mean: 10.591903030520198 usec\nrounds: 4785"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[meter]",
            "value": 1312367.7784222532,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017111375986958594",
            "extra": "mean: 761.9815241137546 nsec\nrounds: 74627"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[angstrom]",
            "value": 996783.2475840447,
            "unit": "iter/sec",
            "range": "stddev: 0.000003209654307515097",
            "extra": "mean: 1.0032271333048102 usec\nrounds: 147059"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[kilometer/second]",
            "value": 1257460.6278647473,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014048820823751398",
            "extra": "mean: 795.2535274985278 nsec\nrounds: 74075"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_to_units_container_detached[angstrom/minute]",
            "value": 1285963.726796006,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011860095390667228",
            "extra": "mean: 777.6269105907505 nsec\nrounds: 69926"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_convert_from_uc[key0]",
            "value": 46993.08574165409,
            "unit": "iter/sec",
            "range": "stddev: 0.000024896281916172092",
            "extra": "mean: 21.27972624520829 usec\nrounds: 7430"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_convert_from_uc[key1]",
            "value": 41524.981348498666,
            "unit": "iter/sec",
            "range": "stddev: 0.000014035895487212484",
            "extra": "mean: 24.08188920321225 usec\nrounds: 9901"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_math_expression",
            "value": 4971.917799345955,
            "unit": "iter/sec",
            "range": "stddev: 0.0001870796251044253",
            "extra": "mean: 201.12963253969076 usec\nrounds: 3233"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 63123.6087642777,
            "unit": "iter/sec",
            "range": "stddev: 0.00004380306395992979",
            "extra": "mean: 15.841933304768693 usec\nrounds: 37454"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 60160.46485554195,
            "unit": "iter/sec",
            "range": "stddev: 0.000050754426170315396",
            "extra": "mean: 16.622211985914877 usec\nrounds: 35842"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 24329.773812732445,
            "unit": "iter/sec",
            "range": "stddev: 0.00003157110616720948",
            "extra": "mean: 41.10190286588987 usec\nrounds: 21599"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 11674207.866357654,
            "unit": "iter/sec",
            "range": "stddev: 2.6490809339648477e-7",
            "extra": "mean: 85.65891677174363 nsec\nrounds: 131579"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 11410639.7466208,
            "unit": "iter/sec",
            "range": "stddev: 8.510787276579519e-8",
            "extra": "mean: 87.63750518857236 nsec\nrounds: 120482"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 10446204.894673852,
            "unit": "iter/sec",
            "range": "stddev: 1.2164020672714547e-7",
            "extra": "mean: 95.72854544618608 nsec\nrounds: 98030"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 12145446.832829703,
            "unit": "iter/sec",
            "range": "stddev: 1.4985130934299164e-7",
            "extra": "mean: 82.33538162605679 nsec\nrounds: 121952"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 11693092.51130074,
            "unit": "iter/sec",
            "range": "stddev: 2.1769030759877536e-7",
            "extra": "mean: 85.52057541946387 nsec\nrounds: 135136"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 11528397.617839592,
            "unit": "iter/sec",
            "range": "stddev: 2.2204432186086709e-7",
            "extra": "mean: 86.74232388136589 nsec\nrounds: 117648"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 69587.99831042573,
            "unit": "iter/sec",
            "range": "stddev: 0.00000816616263159134",
            "extra": "mean: 14.370294077709937 usec\nrounds: 25126"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 16892.24226216875,
            "unit": "iter/sec",
            "range": "stddev: 0.000040971446097602175",
            "extra": "mean: 59.19877210378183 usec\nrounds: 7284"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 68091.08940831159,
            "unit": "iter/sec",
            "range": "stddev: 0.000011084580599565147",
            "extra": "mean: 14.686209439291687 usec\nrounds: 23095"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 16164.239372727954,
            "unit": "iter/sec",
            "range": "stddev: 0.00013963282980855894",
            "extra": "mean: 61.86495862509832 usec\nrounds: 6139"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 66127.98405537012,
            "unit": "iter/sec",
            "range": "stddev: 0.00001221195139296236",
            "extra": "mean: 15.122190919394766 usec\nrounds: 18149"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 16030.063821305348,
            "unit": "iter/sec",
            "range": "stddev: 0.00006336989803471686",
            "extra": "mean: 62.382783446620664 usec\nrounds: 7370"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 16452.409047523346,
            "unit": "iter/sec",
            "range": "stddev: 0.00006218588020151287",
            "extra": "mean: 60.781372327387786 usec\nrounds: 7531"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 67659.26317678973,
            "unit": "iter/sec",
            "range": "stddev: 0.000009683345304800677",
            "extra": "mean: 14.779942214077295 usec\nrounds: 19157"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 16226.149254205124,
            "unit": "iter/sec",
            "range": "stddev: 0.00007737045841229213",
            "extra": "mean: 61.62891665382918 usec\nrounds: 6431"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 62163.266094723505,
            "unit": "iter/sec",
            "range": "stddev: 0.00005461711575230216",
            "extra": "mean: 16.086670839917165 usec\nrounds: 19012"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 16255.146481377975,
            "unit": "iter/sec",
            "range": "stddev: 0.0000864586306043609",
            "extra": "mean: 61.518978075381106 usec\nrounds: 6431"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 63818.39069200489,
            "unit": "iter/sec",
            "range": "stddev: 0.00005930220745134478",
            "extra": "mean: 15.66946438411646 usec\nrounds: 19570"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 63177.025869862606,
            "unit": "iter/sec",
            "range": "stddev: 0.00003893912096392891",
            "extra": "mean: 15.82853871690454 usec\nrounds: 22884"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 16586.00447422486,
            "unit": "iter/sec",
            "range": "stddev: 0.00007174160032991966",
            "extra": "mean: 60.29179610761769 usec\nrounds: 7862"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 64041.962998137955,
            "unit": "iter/sec",
            "range": "stddev: 0.00003245898868172024",
            "extra": "mean: 15.614761840280808 usec\nrounds: 27322"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 15932.943888038111,
            "unit": "iter/sec",
            "range": "stddev: 0.000045504206685834704",
            "extra": "mean: 62.76304034126201 usec\nrounds: 7263"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 62095.62348325886,
            "unit": "iter/sec",
            "range": "stddev: 0.000049431003090886625",
            "extra": "mean: 16.104194529419654 usec\nrounds: 25189"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 16295.095615552533,
            "unit": "iter/sec",
            "range": "stddev: 0.00004931633072219567",
            "extra": "mean: 61.36815785515058 usec\nrounds: 6658"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 16084.49422413603,
            "unit": "iter/sec",
            "range": "stddev: 0.00005489272173993107",
            "extra": "mean: 62.17167826759653 usec\nrounds: 7758"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 64933.810359105766,
            "unit": "iter/sec",
            "range": "stddev: 0.000014392047955323537",
            "extra": "mean: 15.400297540983109 usec\nrounds: 18868"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 16202.384414656426,
            "unit": "iter/sec",
            "range": "stddev: 0.00003296816166075249",
            "extra": "mean: 61.71931083769471 usec\nrounds: 4697"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 65467.876036871785,
            "unit": "iter/sec",
            "range": "stddev: 0.00001405708979625552",
            "extra": "mean: 15.274666913537805 usec\nrounds: 16182"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 16563.88484111388,
            "unit": "iter/sec",
            "range": "stddev: 0.00007907989687740715",
            "extra": "mean: 60.37231057764059 usec\nrounds: 7837"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 62654.25307428219,
            "unit": "iter/sec",
            "range": "stddev: 0.00002087731790081295",
            "extra": "mean: 15.960608433307968 usec\nrounds: 17762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 63377.02710608635,
            "unit": "iter/sec",
            "range": "stddev: 0.00001206275645585562",
            "extra": "mean: 15.778588009912601 usec\nrounds: 23753"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 15429.187160397507,
            "unit": "iter/sec",
            "range": "stddev: 0.00010451203611432069",
            "extra": "mean: 64.81222825313351 usec\nrounds: 6817"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 63208.5115863448,
            "unit": "iter/sec",
            "range": "stddev: 0.00003189986182964528",
            "extra": "mean: 15.820654131903877 usec\nrounds: 20450"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 15818.123795452782,
            "unit": "iter/sec",
            "range": "stddev: 0.00008682707323118945",
            "extra": "mean: 63.21862269705266 usec\nrounds: 6785"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 61158.52576128417,
            "unit": "iter/sec",
            "range": "stddev: 0.00004920171221053592",
            "extra": "mean: 16.350950052380767 usec\nrounds: 20081"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 16870.44837120949,
            "unit": "iter/sec",
            "range": "stddev: 0.000037570254974283374",
            "extra": "mean: 59.27524734354805 usec\nrounds: 4706"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 15961.381725031946,
            "unit": "iter/sec",
            "range": "stddev: 0.00015006948325029925",
            "extra": "mean: 62.65121762182519 usec\nrounds: 7559"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 63687.0977430378,
            "unit": "iter/sec",
            "range": "stddev: 0.000029960959356244234",
            "extra": "mean: 15.701767476275347 usec\nrounds: 18940"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 17036.821014717418,
            "unit": "iter/sec",
            "range": "stddev: 0.00007038658251054798",
            "extra": "mean: 58.69639641903502 usec\nrounds: 6869"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 63418.751603440876,
            "unit": "iter/sec",
            "range": "stddev: 0.00004630493252190852",
            "extra": "mean: 15.768206953252978 usec\nrounds: 15129"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 17216.112829936596,
            "unit": "iter/sec",
            "range": "stddev: 0.000039437457528710775",
            "extra": "mean: 58.08512118142774 usec\nrounds: 7856"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 63773.699894032696,
            "unit": "iter/sec",
            "range": "stddev: 0.00002240061179529412",
            "extra": "mean: 15.680445099807827 usec\nrounds: 16448"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 70006.98860075058,
            "unit": "iter/sec",
            "range": "stddev: 0.00002710493662250558",
            "extra": "mean: 14.284288183041177 usec\nrounds: 26386"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 17450.783360519014,
            "unit": "iter/sec",
            "range": "stddev: 0.00005207162364680193",
            "extra": "mean: 57.30401778194205 usec\nrounds: 6636"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 67704.26975394631,
            "unit": "iter/sec",
            "range": "stddev: 0.000019087697085753716",
            "extra": "mean: 14.770117211724488 usec\nrounds: 27028"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 17142.21777280165,
            "unit": "iter/sec",
            "range": "stddev: 0.00002217419277876831",
            "extra": "mean: 58.33550904869669 usec\nrounds: 1713"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 68461.23300458382,
            "unit": "iter/sec",
            "range": "stddev: 0.00002368912909323565",
            "extra": "mean: 14.606806744673221 usec\nrounds: 26954"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 16658.133663930807,
            "unit": "iter/sec",
            "range": "stddev: 0.00006933125875814607",
            "extra": "mean: 60.03073454532666 usec\nrounds: 7263"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 17348.755710082227,
            "unit": "iter/sec",
            "range": "stddev: 0.000022702421326282796",
            "extra": "mean: 57.64102144909736 usec\nrounds: 6667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 68213.70512617005,
            "unit": "iter/sec",
            "range": "stddev: 0.00002258643352885742",
            "extra": "mean: 14.659810637032116 usec\nrounds: 20833"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 17321.03354520353,
            "unit": "iter/sec",
            "range": "stddev: 0.00004638515508337218",
            "extra": "mean: 57.73327540705076 usec\nrounds: 6888"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 63960.34093619201,
            "unit": "iter/sec",
            "range": "stddev: 0.0000404700877761484",
            "extra": "mean: 15.634688392258852 usec\nrounds: 19961"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 16570.966698272234,
            "unit": "iter/sec",
            "range": "stddev: 0.00002630322008873417",
            "extra": "mean: 60.34650954336083 usec\nrounds: 6916"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 62367.50780827793,
            "unit": "iter/sec",
            "range": "stddev: 0.000036076185493743234",
            "extra": "mean: 16.033990055752586 usec\nrounds: 17095"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 64087.83418591974,
            "unit": "iter/sec",
            "range": "stddev: 0.00003328454183482521",
            "extra": "mean: 15.603585496413961 usec\nrounds: 26738"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 17351.517963028065,
            "unit": "iter/sec",
            "range": "stddev: 0.000025546781522711613",
            "extra": "mean: 57.63184535962564 usec\nrounds: 7068"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 67848.33449919923,
            "unit": "iter/sec",
            "range": "stddev: 0.000040478722835052956",
            "extra": "mean: 14.738755304476962 usec\nrounds: 31153"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 17057.54005376593,
            "unit": "iter/sec",
            "range": "stddev: 0.0000435826884837626",
            "extra": "mean: 58.62510050382219 usec\nrounds: 7542"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 65326.60645850191,
            "unit": "iter/sec",
            "range": "stddev: 0.00001416869484391448",
            "extra": "mean: 15.307698565901172 usec\nrounds: 19802"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 15542.344295070001,
            "unit": "iter/sec",
            "range": "stddev: 0.000141626932648278",
            "extra": "mean: 64.34035825066609 usec\nrounds: 6836"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 17539.29385680943,
            "unit": "iter/sec",
            "range": "stddev: 0.0000370681575206372",
            "extra": "mean: 57.014838120849525 usec\nrounds: 8704"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 66922.74467421851,
            "unit": "iter/sec",
            "range": "stddev: 0.000025622565058876442",
            "extra": "mean: 14.942602920248168 usec\nrounds: 19724"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 17156.558983221894,
            "unit": "iter/sec",
            "range": "stddev: 0.00009177819996196714",
            "extra": "mean: 58.286746251269925 usec\nrounds: 7669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 70879.78194213471,
            "unit": "iter/sec",
            "range": "stddev: 0.000009253245414391999",
            "extra": "mean: 14.108395548061736 usec\nrounds: 15409"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 16642.879034998783,
            "unit": "iter/sec",
            "range": "stddev: 0.00010520947846818559",
            "extra": "mean: 60.085757872605555 usec\nrounds: 5811"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 69616.73736172485,
            "unit": "iter/sec",
            "range": "stddev: 0.000011293203972859958",
            "extra": "mean: 14.364361759788503 usec\nrounds: 19231"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 65400.91575482936,
            "unit": "iter/sec",
            "range": "stddev: 0.00003054254286167588",
            "extra": "mean: 15.290305777196364 usec\nrounds: 22173"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 16337.288507963705,
            "unit": "iter/sec",
            "range": "stddev: 0.00009325651238428567",
            "extra": "mean: 61.209667657674295 usec\nrounds: 7068"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 68277.49358161705,
            "unit": "iter/sec",
            "range": "stddev: 0.00001929336412633161",
            "extra": "mean: 14.646114664484973 usec\nrounds: 10788"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 17147.7261927445,
            "unit": "iter/sec",
            "range": "stddev: 0.000027603811006615973",
            "extra": "mean: 58.31676974309966 usec\nrounds: 7205"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 68215.08015115529,
            "unit": "iter/sec",
            "range": "stddev: 0.000016372642751019965",
            "extra": "mean: 14.659515136303247 usec\nrounds: 28012"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 17271.866325732815,
            "unit": "iter/sec",
            "range": "stddev: 0.00003468417769032342",
            "extra": "mean: 57.89762270856226 usec\nrounds: 7856"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 16999.795528721785,
            "unit": "iter/sec",
            "range": "stddev: 0.00001535436111586532",
            "extra": "mean: 58.82423693334799 usec\nrounds: 6314"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 70210.701161459,
            "unit": "iter/sec",
            "range": "stddev: 0.00001086400502853521",
            "extra": "mean: 14.24284309168719 usec\nrounds: 17762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 17359.507613641887,
            "unit": "iter/sec",
            "range": "stddev: 0.000026164149394590603",
            "extra": "mean: 57.605320511173645 usec\nrounds: 7669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 64916.82819457109,
            "unit": "iter/sec",
            "range": "stddev: 0.00001600646424058038",
            "extra": "mean: 15.404326240381975 usec\nrounds: 16448"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 16886.303920595918,
            "unit": "iter/sec",
            "range": "stddev: 0.000024845300114402754",
            "extra": "mean: 59.219590308351506 usec\nrounds: 7491"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 62841.315295590626,
            "unit": "iter/sec",
            "range": "stddev: 0.000020269224028160523",
            "extra": "mean: 15.913097860798066 usec\nrounds: 17484"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 53512.62278847925,
            "unit": "iter/sec",
            "range": "stddev: 0.00003496305459338376",
            "extra": "mean: 18.687179732391854 usec\nrounds: 31647"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 52316.517541909496,
            "unit": "iter/sec",
            "range": "stddev: 0.000025810594550447915",
            "extra": "mean: 19.11442211723906 usec\nrounds: 33223"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 54360.13636522949,
            "unit": "iter/sec",
            "range": "stddev: 0.000024401687672093998",
            "extra": "mean: 18.39583317601154 usec\nrounds: 33898"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 51243.73497758842,
            "unit": "iter/sec",
            "range": "stddev: 0.00002385228048991789",
            "extra": "mean: 19.514580668980365 usec\nrounds: 31152"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 52517.15839833003,
            "unit": "iter/sec",
            "range": "stddev: 0.00008498998937663576",
            "extra": "mean: 19.04139581230272 usec\nrounds: 33003"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 53992.746502273556,
            "unit": "iter/sec",
            "range": "stddev: 0.000023468532941321838",
            "extra": "mean: 18.52100633476557 usec\nrounds: 33783"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 56408.04228603569,
            "unit": "iter/sec",
            "range": "stddev: 0.000013524354715061668",
            "extra": "mean: 17.727968556844576 usec\nrounds: 35461"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 54910.48302129054,
            "unit": "iter/sec",
            "range": "stddev: 0.000012465151897319128",
            "extra": "mean: 18.21145881401677 usec\nrounds: 34247"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 52451.240196738094,
            "unit": "iter/sec",
            "range": "stddev: 0.00003725607241853781",
            "extra": "mean: 19.06532612478035 usec\nrounds: 22936"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 57923.102977751776,
            "unit": "iter/sec",
            "range": "stddev: 0.000022002200229549585",
            "extra": "mean: 17.264268462690943 usec\nrounds: 31848"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 54991.731397886266,
            "unit": "iter/sec",
            "range": "stddev: 0.000010315626897398398",
            "extra": "mean: 18.184552015004154 usec\nrounds: 35461"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 52700.96919431197,
            "unit": "iter/sec",
            "range": "stddev: 0.00002283941720220338",
            "extra": "mean: 18.974983103497276 usec\nrounds: 36102"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 50811.62322428376,
            "unit": "iter/sec",
            "range": "stddev: 0.00005999164268706211",
            "extra": "mean: 19.680536391958498 usec\nrounds: 35461"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 54742.50282328176,
            "unit": "iter/sec",
            "range": "stddev: 0.000011213993139080696",
            "extra": "mean: 18.267341616224098 usec\nrounds: 35212"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 56192.3926239757,
            "unit": "iter/sec",
            "range": "stddev: 0.000047739318143761374",
            "extra": "mean: 17.796003218651496 usec\nrounds: 37594"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 52089.58291526214,
            "unit": "iter/sec",
            "range": "stddev: 0.00005086612518311814",
            "extra": "mean: 19.197696430527614 usec\nrounds: 36364"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 55967.957588734556,
            "unit": "iter/sec",
            "range": "stddev: 0.000015051483024324728",
            "extra": "mean: 17.86736631249313 usec\nrounds: 33223"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 54975.55368372226,
            "unit": "iter/sec",
            "range": "stddev: 0.000018601176420823507",
            "extra": "mean: 18.189903202304453 usec\nrounds: 31447"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 55128.967606257735,
            "unit": "iter/sec",
            "range": "stddev: 0.000022544333111266005",
            "extra": "mean: 18.139283999334122 usec\nrounds: 37736"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 55408.91069838287,
            "unit": "iter/sec",
            "range": "stddev: 0.00003538742699756123",
            "extra": "mean: 18.047638681140604 usec\nrounds: 36364"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 52365.56628095987,
            "unit": "iter/sec",
            "range": "stddev: 0.00003776018221318744",
            "extra": "mean: 19.096518399794334 usec\nrounds: 31848"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 53200.982589565676,
            "unit": "iter/sec",
            "range": "stddev: 0.00003405203633857442",
            "extra": "mean: 18.79664531226403 usec\nrounds: 34966"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 52376.93071579768,
            "unit": "iter/sec",
            "range": "stddev: 0.000023373662854876115",
            "extra": "mean: 19.092374950836604 usec\nrounds: 35714"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 54919.496762965355,
            "unit": "iter/sec",
            "range": "stddev: 0.00004371083437740723",
            "extra": "mean: 18.208469832053236 usec\nrounds: 37175"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 56021.20521426128,
            "unit": "iter/sec",
            "range": "stddev: 0.00001395589164058366",
            "extra": "mean: 17.850383549860343 usec\nrounds: 34723"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 52526.06815005646,
            "unit": "iter/sec",
            "range": "stddev: 0.00002669829100174055",
            "extra": "mean: 19.038165909224354 usec\nrounds: 35212"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 55907.73330942889,
            "unit": "iter/sec",
            "range": "stddev: 0.00003503661286951199",
            "extra": "mean: 17.88661318936622 usec\nrounds: 37879"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 52703.16685635939,
            "unit": "iter/sec",
            "range": "stddev: 0.000015228626594658625",
            "extra": "mean: 18.97419186830773 usec\nrounds: 31949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 55363.622505948784,
            "unit": "iter/sec",
            "range": "stddev: 0.000011421031827478876",
            "extra": "mean: 18.06240189381666 usec\nrounds: 23867"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 54624.1857540544,
            "unit": "iter/sec",
            "range": "stddev: 0.000019469234634032997",
            "extra": "mean: 18.306909040301374 usec\nrounds: 35972"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 51386.40644189348,
            "unit": "iter/sec",
            "range": "stddev: 0.00003191907291466207",
            "extra": "mean: 19.46039953447175 usec\nrounds: 34365"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 54017.54228340399,
            "unit": "iter/sec",
            "range": "stddev: 0.000040933290464745256",
            "extra": "mean: 18.512504599959072 usec\nrounds: 37174"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 51982.61875111985,
            "unit": "iter/sec",
            "range": "stddev: 0.000021070217461614535",
            "extra": "mean: 19.237199356726467 usec\nrounds: 33899"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 52251.21296881782,
            "unit": "iter/sec",
            "range": "stddev: 0.000037008390939559454",
            "extra": "mean: 19.13831169042476 usec\nrounds: 7023"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 52755.869444265634,
            "unit": "iter/sec",
            "range": "stddev: 0.00002570468287984482",
            "extra": "mean: 18.955236839693413 usec\nrounds: 34365"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 53639.18766517118,
            "unit": "iter/sec",
            "range": "stddev: 0.00001704571193279628",
            "extra": "mean: 18.643086212308855 usec\nrounds: 32362"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 52288.50409832726,
            "unit": "iter/sec",
            "range": "stddev: 0.00003487767080806345",
            "extra": "mean: 19.124662624111878 usec\nrounds: 30675"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 50740.20224477789,
            "unit": "iter/sec",
            "range": "stddev: 0.000049287394449190444",
            "extra": "mean: 19.708238354586353 usec\nrounds: 22026"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 54225.29879063206,
            "unit": "iter/sec",
            "range": "stddev: 0.000037355370193368544",
            "extra": "mean: 18.441576575927684 usec\nrounds: 31250"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 51033.23022627399,
            "unit": "iter/sec",
            "range": "stddev: 0.00003712777264808333",
            "extra": "mean: 19.595075513859186 usec\nrounds: 34603"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 53307.39300531749,
            "unit": "iter/sec",
            "range": "stddev: 0.000024346464784726945",
            "extra": "mean: 18.75912408435071 usec\nrounds: 29762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 51492.241450722264,
            "unit": "iter/sec",
            "range": "stddev: 0.000025000801081914024",
            "extra": "mean: 19.420401439642 usec\nrounds: 32787"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 53197.03635177642,
            "unit": "iter/sec",
            "range": "stddev: 0.00005607593280514395",
            "extra": "mean: 18.798039676257392 usec\nrounds: 30396"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 54441.03849665783,
            "unit": "iter/sec",
            "range": "stddev: 0.00002741559374048181",
            "extra": "mean: 18.368496039277257 usec\nrounds: 34844"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 51389.111202759006,
            "unit": "iter/sec",
            "range": "stddev: 0.000018457529518736363",
            "extra": "mean: 19.45937527610541 usec\nrounds: 32155"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 55732.89759071697,
            "unit": "iter/sec",
            "range": "stddev: 0.00001276407302631823",
            "extra": "mean: 17.942724014524643 usec\nrounds: 35212"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 53288.040845285286,
            "unit": "iter/sec",
            "range": "stddev: 0.000015481485795721433",
            "extra": "mean: 18.765936674297457 usec\nrounds: 27856"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 54608.44592935253,
            "unit": "iter/sec",
            "range": "stddev: 0.000026973882987365063",
            "extra": "mean: 18.312185651532907 usec\nrounds: 34247"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 54681.8850186595,
            "unit": "iter/sec",
            "range": "stddev: 0.000020764480862474547",
            "extra": "mean: 18.287591944914894 usec\nrounds: 33444"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 54472.44603751767,
            "unit": "iter/sec",
            "range": "stddev: 0.000022003784927996406",
            "extra": "mean: 18.35790519322841 usec\nrounds: 33004"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 54429.599843883385,
            "unit": "iter/sec",
            "range": "stddev: 0.00002445645672459505",
            "extra": "mean: 18.372356270636384 usec\nrounds: 35212"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 55538.983388002474,
            "unit": "iter/sec",
            "range": "stddev: 0.00001891363554473071",
            "extra": "mean: 18.005370984446575 usec\nrounds: 33899"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 54493.84662151244,
            "unit": "iter/sec",
            "range": "stddev: 0.000011861963538177375",
            "extra": "mean: 18.350695757367067 usec\nrounds: 35212"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 53031.31992315555,
            "unit": "iter/sec",
            "range": "stddev: 0.00004342010908846719",
            "extra": "mean: 18.856781265279444 usec\nrounds: 34247"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 54148.047764244235,
            "unit": "iter/sec",
            "range": "stddev: 0.00002087398181533851",
            "extra": "mean: 18.467886494336984 usec\nrounds: 33223"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 54514.99989680258,
            "unit": "iter/sec",
            "range": "stddev: 0.000023462098417467637",
            "extra": "mean: 18.343575197523794 usec\nrounds: 35972"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 52398.509025402614,
            "unit": "iter/sec",
            "range": "stddev: 0.00006111948171552318",
            "extra": "mean: 19.084512490903197 usec\nrounds: 33784"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 52603.31795300767,
            "unit": "iter/sec",
            "range": "stddev: 0.000044180322283348616",
            "extra": "mean: 19.010207700079565 usec\nrounds: 32051"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 51943.200744760026,
            "unit": "iter/sec",
            "range": "stddev: 0.000015152082032384178",
            "extra": "mean: 19.251797841912524 usec\nrounds: 30674"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 52918.370499840246,
            "unit": "iter/sec",
            "range": "stddev: 0.000046051123278313064",
            "extra": "mean: 18.897029340746972 usec\nrounds: 32787"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 51741.71745169042,
            "unit": "iter/sec",
            "range": "stddev: 0.000012581662843027147",
            "extra": "mean: 19.326764731643628 usec\nrounds: 27322"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 50902.18625664693,
            "unit": "iter/sec",
            "range": "stddev: 0.00001731757322377606",
            "extra": "mean: 19.64552160801183 usec\nrounds: 29850"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 50998.164446702256,
            "unit": "iter/sec",
            "range": "stddev: 0.0000360584228463938",
            "extra": "mean: 19.60854887326565 usec\nrounds: 30395"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 52259.86733937761,
            "unit": "iter/sec",
            "range": "stddev: 0.000009938751586121373",
            "extra": "mean: 19.135142336010176 usec\nrounds: 31250"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 52687.547988089704,
            "unit": "iter/sec",
            "range": "stddev: 0.00003704030064107213",
            "extra": "mean: 18.97981663952278 usec\nrounds: 31948"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 52818.834180174046,
            "unit": "iter/sec",
            "range": "stddev: 0.00004086563406639331",
            "extra": "mean: 18.932640515858974 usec\nrounds: 22727"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 53326.48394294171,
            "unit": "iter/sec",
            "range": "stddev: 0.000035036450084953805",
            "extra": "mean: 18.752408298097816 usec\nrounds: 31646"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 54238.159673853625,
            "unit": "iter/sec",
            "range": "stddev: 0.00004287880388416192",
            "extra": "mean: 18.43720373281887 usec\nrounds: 33004"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 52184.04453562825,
            "unit": "iter/sec",
            "range": "stddev: 0.00001920420932051729",
            "extra": "mean: 19.162945473060404 usec\nrounds: 35212"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 54981.389158190876,
            "unit": "iter/sec",
            "range": "stddev: 0.000022564040905418016",
            "extra": "mean: 18.187972608746364 usec\nrounds: 30959"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 54770.44011536541,
            "unit": "iter/sec",
            "range": "stddev: 0.000012931399206382781",
            "extra": "mean: 18.25802381528532 usec\nrounds: 33004"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 54185.98341540344,
            "unit": "iter/sec",
            "range": "stddev: 0.000013202819754346115",
            "extra": "mean: 18.454957111948072 usec\nrounds: 26954"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 252659.64117320318,
            "unit": "iter/sec",
            "range": "stddev: 0.000023035916759591688",
            "extra": "mean: 3.957893691911326 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 32552.6073293138,
            "unit": "iter/sec",
            "range": "stddev: 0.000024631728271202806",
            "extra": "mean: 30.719505503311698 usec\nrounds: 10267"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 248107.83932209044,
            "unit": "iter/sec",
            "range": "stddev: 0.000004825942647147737",
            "extra": "mean: 4.030505455741818 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 31289.891713084497,
            "unit": "iter/sec",
            "range": "stddev: 0.00003482871798504644",
            "extra": "mean: 31.95920296463762 usec\nrounds: 9243"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 258785.22098005193,
            "unit": "iter/sec",
            "range": "stddev: 0.00000541907550165059",
            "extra": "mean: 3.8642083045271103 usec\nrounds: 75188"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 30609.689198351516,
            "unit": "iter/sec",
            "range": "stddev: 0.000015887600056597498",
            "extra": "mean: 32.6693941098185 usec\nrounds: 8013"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 31888.7521458038,
            "unit": "iter/sec",
            "range": "stddev: 0.00001463641906267915",
            "extra": "mean: 31.359019488368055 usec\nrounds: 10673"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 250180.66832935353,
            "unit": "iter/sec",
            "range": "stddev: 0.000014954954388132652",
            "extra": "mean: 3.9971113942486447 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 29948.601374979546,
            "unit": "iter/sec",
            "range": "stddev: 0.000043352323120698296",
            "extra": "mean: 33.39054092974928 usec\nrounds: 9785"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 239740.206848064,
            "unit": "iter/sec",
            "range": "stddev: 0.000007504955482037641",
            "extra": "mean: 4.171181852002625 usec\nrounds: 67115"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 30992.090095427517,
            "unit": "iter/sec",
            "range": "stddev: 0.000027159954163979207",
            "extra": "mean: 32.26629752691436 usec\nrounds: 10594"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 242340.75604128922,
            "unit": "iter/sec",
            "range": "stddev: 0.00001283532660014437",
            "extra": "mean: 4.1264210623722875 usec\nrounds: 80000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 230829.45390280773,
            "unit": "iter/sec",
            "range": "stddev: 0.000014800186950094937",
            "extra": "mean: 4.332202771753108 usec\nrounds: 75188"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 30843.299413132856,
            "unit": "iter/sec",
            "range": "stddev: 0.00006909966597735087",
            "extra": "mean: 32.421952872337876 usec\nrounds: 10461"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 257012.84712400977,
            "unit": "iter/sec",
            "range": "stddev: 0.000005132835727858371",
            "extra": "mean: 3.890856084394473 usec\nrounds: 64517"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 32880.96633880923,
            "unit": "iter/sec",
            "range": "stddev: 0.00001929698192003057",
            "extra": "mean: 30.41273147801941 usec\nrounds: 10204"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 251018.0153967317,
            "unit": "iter/sec",
            "range": "stddev: 0.0000214255853168098",
            "extra": "mean: 3.9837778114033333 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 32340.159096388037,
            "unit": "iter/sec",
            "range": "stddev: 0.00002357399087342876",
            "extra": "mean: 30.921307375747777 usec\nrounds: 8013"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 32547.03105164427,
            "unit": "iter/sec",
            "range": "stddev: 0.000017137482377480647",
            "extra": "mean: 30.724768671318795 usec\nrounds: 11274"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 259167.2360352736,
            "unit": "iter/sec",
            "range": "stddev: 0.000004514155555397947",
            "extra": "mean: 3.8585124234758448 usec\nrounds: 84034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 31936.459869922834,
            "unit": "iter/sec",
            "range": "stddev: 0.000051787450718075266",
            "extra": "mean: 31.312174363501747 usec\nrounds: 10719"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 256038.4100335205,
            "unit": "iter/sec",
            "range": "stddev: 0.0000097182385494428",
            "extra": "mean: 3.9056639973239964 usec\nrounds: 69931"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 32801.557818662215,
            "unit": "iter/sec",
            "range": "stddev: 0.000016667429211232353",
            "extra": "mean: 30.486356944640512 usec\nrounds: 8993"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 244367.68800788623,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055855196684841775",
            "extra": "mean: 4.092194054590917 usec\nrounds: 56180"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 238864.62346882978,
            "unit": "iter/sec",
            "range": "stddev: 0.00001816308505862775",
            "extra": "mean: 4.18647175742411 usec\nrounds: 67115"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 32498.264549355237,
            "unit": "iter/sec",
            "range": "stddev: 0.000017890922518428425",
            "extra": "mean: 30.770873887166996 usec\nrounds: 10673"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 243942.65998165947,
            "unit": "iter/sec",
            "range": "stddev: 0.000010854178150037397",
            "extra": "mean: 4.099323997185174 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 31824.595451075715,
            "unit": "iter/sec",
            "range": "stddev: 0.00002122389475383775",
            "extra": "mean: 31.422237606674702 usec\nrounds: 9461"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 254845.90828250576,
            "unit": "iter/sec",
            "range": "stddev: 0.000003901186178890124",
            "extra": "mean: 3.92393979067329 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 32476.146791970903,
            "unit": "iter/sec",
            "range": "stddev: 0.000009798708226783973",
            "extra": "mean: 30.79183027486594 usec\nrounds: 9209"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 31047.83442773164,
            "unit": "iter/sec",
            "range": "stddev: 0.00007123904273843414",
            "extra": "mean: 32.20836552474041 usec\nrounds: 10396"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 247096.61558029513,
            "unit": "iter/sec",
            "range": "stddev: 0.000004637375086465358",
            "extra": "mean: 4.046999986833271 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 29394.99820253642,
            "unit": "iter/sec",
            "range": "stddev: 0.000054747368422389096",
            "extra": "mean: 34.019393133138976 usec\nrounds: 9320"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 238349.6941540941,
            "unit": "iter/sec",
            "range": "stddev: 0.000017291355869822384",
            "extra": "mean: 4.19551618704195 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 30350.381285416213,
            "unit": "iter/sec",
            "range": "stddev: 0.00003872372391757875",
            "extra": "mean: 32.94851522937914 usec\nrounds: 10112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 229818.39080506586,
            "unit": "iter/sec",
            "range": "stddev: 0.00003056569982040586",
            "extra": "mean: 4.351261865932259 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 129266.696001033,
            "unit": "iter/sec",
            "range": "stddev: 0.000007270463654739853",
            "extra": "mean: 7.735944608594381 usec\nrounds: 53474"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 6193.5362043059295,
            "unit": "iter/sec",
            "range": "stddev: 0.00010834622046651505",
            "extra": "mean: 161.45865092461565 usec\nrounds: 3621"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 103015.7310182888,
            "unit": "iter/sec",
            "range": "stddev: 0.000007511816019340187",
            "extra": "mean: 9.707255291160006 usec\nrounds: 23530"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 104811.3876164771,
            "unit": "iter/sec",
            "range": "stddev: 0.00001874117003278324",
            "extra": "mean: 9.540948009000434 usec\nrounds: 39526"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 127180.67135072146,
            "unit": "iter/sec",
            "range": "stddev: 0.00000332021470529778",
            "extra": "mean: 7.8628300148089085 usec\nrounds: 4571"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 128645.26693456234,
            "unit": "iter/sec",
            "range": "stddev: 0.00000823501914934649",
            "extra": "mean: 7.773313576384177 usec\nrounds: 19048"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 10569.153804883885,
            "unit": "iter/sec",
            "range": "stddev: 0.00010593862364565647",
            "extra": "mean: 94.61495389894992 usec\nrounds: 9067"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 1792.2751237531868,
            "unit": "iter/sec",
            "range": "stddev: 0.0002621764065896595",
            "extra": "mean: 557.9500528389353 usec\nrounds: 1779"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 131948.51122197497,
            "unit": "iter/sec",
            "range": "stddev: 0.00001295778437046933",
            "extra": "mean: 7.578713778116945 usec\nrounds: 32363"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 136947.84503616288,
            "unit": "iter/sec",
            "range": "stddev: 0.00000788678253474604",
            "extra": "mean: 7.30204991349763 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 109784.1275829331,
            "unit": "iter/sec",
            "range": "stddev: 0.00003633144066487912",
            "extra": "mean: 9.108784867325927 usec\nrounds: 46297"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 108540.35048859312,
            "unit": "iter/sec",
            "range": "stddev: 0.000013782254491065123",
            "extra": "mean: 9.213163542392406 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 28678.65027710583,
            "unit": "iter/sec",
            "range": "stddev: 0.00007156659829446823",
            "extra": "mean: 34.86914447986766 usec\nrounds: 16639"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 31712.580661011336,
            "unit": "iter/sec",
            "range": "stddev: 0.00004238402683135373",
            "extra": "mean: 31.53322685054889 usec\nrounds: 19158"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 29022.306337835616,
            "unit": "iter/sec",
            "range": "stddev: 0.00005716368153418256",
            "extra": "mean: 34.456255418141126 usec\nrounds: 19380"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 27925.526815747522,
            "unit": "iter/sec",
            "range": "stddev: 0.00002600956031710417",
            "extra": "mean: 35.8095303482722 usec\nrounds: 17332"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 32521.00939363485,
            "unit": "iter/sec",
            "range": "stddev: 0.00004833564212829706",
            "extra": "mean: 30.749353068841835 usec\nrounds: 15674"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 33584.33491392411,
            "unit": "iter/sec",
            "range": "stddev: 0.000017171450521586873",
            "extra": "mean: 29.77578691264774 usec\nrounds: 20921"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 31189.729937154305,
            "unit": "iter/sec",
            "range": "stddev: 0.000022374761269274303",
            "extra": "mean: 32.061835803482374 usec\nrounds: 18216"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 31933.51322395075,
            "unit": "iter/sec",
            "range": "stddev: 0.00001636389734825055",
            "extra": "mean: 31.3150636757994 usec\nrounds: 19882"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 57783.65298038063,
            "unit": "iter/sec",
            "range": "stddev: 0.00002820689735149104",
            "extra": "mean: 17.305932533194664 usec\nrounds: 17668"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 13025.714912102747,
            "unit": "iter/sec",
            "range": "stddev: 0.0000672180511321338",
            "extra": "mean: 76.77121806733675 usec\nrounds: 5535"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 13558.796563588576,
            "unit": "iter/sec",
            "range": "stddev: 0.000039588004387167564",
            "extra": "mean: 73.75285817662068 usec\nrounds: 6219"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 56248.62405700655,
            "unit": "iter/sec",
            "range": "stddev: 0.00003167522542830233",
            "extra": "mean: 17.77821265434912 usec\nrounds: 15457"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 49521.80734889748,
            "unit": "iter/sec",
            "range": "stddev: 0.00005352988791228822",
            "extra": "mean: 20.1931240706679 usec\nrounds: 20577"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 12390.209535632759,
            "unit": "iter/sec",
            "range": "stddev: 0.0000505680651624065",
            "extra": "mean: 80.70888527947164 usec\nrounds: 5849"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 12486.703190293092,
            "unit": "iter/sec",
            "range": "stddev: 0.00007087871738472886",
            "extra": "mean: 80.08519020275742 usec\nrounds: 6614"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 48385.79111512867,
            "unit": "iter/sec",
            "range": "stddev: 0.000032026527357310396",
            "extra": "mean: 20.667224343208733 usec\nrounds: 14772"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 61658.7072064873,
            "unit": "iter/sec",
            "range": "stddev: 0.000011829263329645275",
            "extra": "mean: 16.21830955117377 usec\nrounds: 17422"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 14015.344596180441,
            "unit": "iter/sec",
            "range": "stddev: 0.00005539710703366002",
            "extra": "mean: 71.3503683864132 usec\nrounds: 6162"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 14036.829315969095,
            "unit": "iter/sec",
            "range": "stddev: 0.00002044314911980245",
            "extra": "mean: 71.24115977262352 usec\nrounds: 6672"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 57808.03654820149,
            "unit": "iter/sec",
            "range": "stddev: 0.000014859920830340008",
            "extra": "mean: 17.2986328495378 usec\nrounds: 14125"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 52945.212214267514,
            "unit": "iter/sec",
            "range": "stddev: 0.000015080079071912737",
            "extra": "mean: 18.887449085160586 usec\nrounds: 20662"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 12682.512398101597,
            "unit": "iter/sec",
            "range": "stddev: 0.00007081997576411184",
            "extra": "mean: 78.84873033119895 usec\nrounds: 5618"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 12834.611426787465,
            "unit": "iter/sec",
            "range": "stddev: 0.00004813413231274907",
            "extra": "mean: 77.91431830284108 usec\nrounds: 6032"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 53283.74485787633,
            "unit": "iter/sec",
            "range": "stddev: 0.000008535090813577",
            "extra": "mean: 18.767449672827972 usec\nrounds: 9329"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 47612.96123867886,
            "unit": "iter/sec",
            "range": "stddev: 0.0000208919398108666",
            "extra": "mean: 21.0026844368512 usec\nrounds: 22322"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 46831.77023611516,
            "unit": "iter/sec",
            "range": "stddev: 0.000013896126322909229",
            "extra": "mean: 21.353025840326488 usec\nrounds: 22523"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 44664.56044744761,
            "unit": "iter/sec",
            "range": "stddev: 0.000028959877547981186",
            "extra": "mean: 22.389115441460607 usec\nrounds: 21552"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 48089.64655715052,
            "unit": "iter/sec",
            "range": "stddev: 0.000020971598666167163",
            "extra": "mean: 20.794496769935368 usec\nrounds: 23530"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 42498.024148719116,
            "unit": "iter/sec",
            "range": "stddev: 0.00004880344956459789",
            "extra": "mean: 23.5305057124671 usec\nrounds: 21882"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 39197.49978014896,
            "unit": "iter/sec",
            "range": "stddev: 0.00002839594375362857",
            "extra": "mean: 25.511831254768865 usec\nrounds: 11224"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 39937.05257573637,
            "unit": "iter/sec",
            "range": "stddev: 0.00002587127850962275",
            "extra": "mean: 25.039404149908318 usec\nrounds: 22989"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 39206.24978698409,
            "unit": "iter/sec",
            "range": "stddev: 0.00007211484162742079",
            "extra": "mean: 25.506137552895602 usec\nrounds: 21599"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 43944.41998344016,
            "unit": "iter/sec",
            "range": "stddev: 0.00006557103866376215",
            "extra": "mean: 22.75601772367996 usec\nrounds: 21835"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 43624.940244735095,
            "unit": "iter/sec",
            "range": "stddev: 0.0000502723815066194",
            "extra": "mean: 22.922667501434244 usec\nrounds: 19570"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 44020.339603888024,
            "unit": "iter/sec",
            "range": "stddev: 0.000025316364078181326",
            "extra": "mean: 22.71677158782475 usec\nrounds: 22223"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 46053.996336938406,
            "unit": "iter/sec",
            "range": "stddev: 0.000044645897627558454",
            "extra": "mean: 21.71364223603615 usec\nrounds: 22076"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 39674.19850772058,
            "unit": "iter/sec",
            "range": "stddev: 0.0000231190462309451",
            "extra": "mean: 25.205298093303647 usec\nrounds: 16260"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 36974.00067942257,
            "unit": "iter/sec",
            "range": "stddev: 0.00004126264686049746",
            "extra": "mean: 27.046031850065333 usec\nrounds: 20000"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 40496.93538982887,
            "unit": "iter/sec",
            "range": "stddev: 0.00001151265997498393",
            "extra": "mean: 24.6932265460057 usec\nrounds: 16394"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 38315.93110530394,
            "unit": "iter/sec",
            "range": "stddev: 0.00007605863300055168",
            "extra": "mean: 26.09880462650622 usec\nrounds: 19194"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 95325.35840537395,
            "unit": "iter/sec",
            "range": "stddev: 0.000040527194184904484",
            "extra": "mean: 10.490388042890643 usec\nrounds: 7159"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 18439.471759851607,
            "unit": "iter/sec",
            "range": "stddev: 0.000028314568095105507",
            "extra": "mean: 54.231488462554935 usec\nrounds: 7497"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 16708.26753574629,
            "unit": "iter/sec",
            "range": "stddev: 0.000056457030997474774",
            "extra": "mean: 59.85060975714943 usec\nrounds: 164"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 93259.74835761596,
            "unit": "iter/sec",
            "range": "stddev: 0.00004811977776470395",
            "extra": "mean: 10.722739634310155 usec\nrounds: 29762"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 85401.8706926228,
            "unit": "iter/sec",
            "range": "stddev: 0.000010499988103166887",
            "extra": "mean: 11.70934537955481 usec\nrounds: 19121"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 16450.5814903796,
            "unit": "iter/sec",
            "range": "stddev: 0.00002540493985221711",
            "extra": "mean: 60.78812475928623 usec\nrounds: 6757"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 15787.893035486804,
            "unit": "iter/sec",
            "range": "stddev: 0.00012190808798586764",
            "extra": "mean: 63.33967412575429 usec\nrounds: 6748"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 85248.51527446312,
            "unit": "iter/sec",
            "range": "stddev: 0.000015586209587478974",
            "extra": "mean: 11.730409576993043 usec\nrounds: 21322"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 224909.64557693622,
            "unit": "iter/sec",
            "range": "stddev: 0.00004729562383622401",
            "extra": "mean: 4.446229940182462 usec\nrounds: 29499"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 13842.054178075035,
            "unit": "iter/sec",
            "range": "stddev: 0.000056866257693986945",
            "extra": "mean: 72.24361262679774 usec\nrounds: 5718"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 13937.063985651317,
            "unit": "iter/sec",
            "range": "stddev: 0.000031255512095642006",
            "extra": "mean: 71.75112355296166 usec\nrounds: 5528"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 232182.20067980993,
            "unit": "iter/sec",
            "range": "stddev: 0.000034099654372061366",
            "extra": "mean: 4.306962364350429 usec\nrounds: 32363"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 205001.33164717376,
            "unit": "iter/sec",
            "range": "stddev: 0.00000449244305540885",
            "extra": "mean: 4.878017093669872 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 12895.561579227995,
            "unit": "iter/sec",
            "range": "stddev: 0.000042782786087124475",
            "extra": "mean: 77.54606062374104 usec\nrounds: 5097"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 12736.368804875641,
            "unit": "iter/sec",
            "range": "stddev: 0.000028034744093051138",
            "extra": "mean: 78.51531431919491 usec\nrounds: 5978"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 205660.5698965483,
            "unit": "iter/sec",
            "range": "stddev: 0.000004602583268281812",
            "extra": "mean: 4.862380768968118 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 19048.38705202556,
            "unit": "iter/sec",
            "range": "stddev: 0.00003910428019533552",
            "extra": "mean: 52.497883273201474 usec\nrounds: 11891"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 9959.382623470121,
            "unit": "iter/sec",
            "range": "stddev: 0.00005699462993361088",
            "extra": "mean: 100.40783026484152 usec\nrounds: 5432"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 9456.903691686448,
            "unit": "iter/sec",
            "range": "stddev: 0.00005711377323139851",
            "extra": "mean: 105.74285544211462 usec\nrounds: 5963"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 17711.33213587776,
            "unit": "iter/sec",
            "range": "stddev: 0.00013158170837171906",
            "extra": "mean: 56.46102689104366 usec\nrounds: 11751"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 17771.397499036084,
            "unit": "iter/sec",
            "range": "stddev: 0.0000800282192806239",
            "extra": "mean: 56.270194848449016 usec\nrounds: 12579"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 9287.703156715861,
            "unit": "iter/sec",
            "range": "stddev: 0.00004483760915088009",
            "extra": "mean: 107.66924643547723 usec\nrounds: 4910"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 9180.974292754689,
            "unit": "iter/sec",
            "range": "stddev: 0.00008241126886530808",
            "extra": "mean: 108.92090186867922 usec\nrounds: 5513"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 18118.48312328067,
            "unit": "iter/sec",
            "range": "stddev: 0.000051258090516134474",
            "extra": "mean: 55.192258269959 usec\nrounds: 12092"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 18195.102936000592,
            "unit": "iter/sec",
            "range": "stddev: 0.00007267425743505347",
            "extra": "mean: 54.95984295980064 usec\nrounds: 12691"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 8654.12653071583,
            "unit": "iter/sec",
            "range": "stddev: 0.00015504045280652254",
            "extra": "mean: 115.55181178027965 usec\nrounds: 5212"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 8564.92907577512,
            "unit": "iter/sec",
            "range": "stddev: 0.00012330808287936248",
            "extra": "mean: 116.7551991561005 usec\nrounds: 4740"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 17660.75522967684,
            "unit": "iter/sec",
            "range": "stddev: 0.00007572659462335412",
            "extra": "mean: 56.62272009294465 usec\nrounds: 5584"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 17071.666031107525,
            "unit": "iter/sec",
            "range": "stddev: 0.00006267425653064974",
            "extra": "mean: 58.57659107071491 usec\nrounds: 9833"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 8845.992613448914,
            "unit": "iter/sec",
            "range": "stddev: 0.00011372093026935321",
            "extra": "mean: 113.04553866342373 usec\nrounds: 4552"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 8895.094389125168,
            "unit": "iter/sec",
            "range": "stddev: 0.00006285049509348411",
            "extra": "mean: 112.4215164284895 usec\nrounds: 5600"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 16554.781587321897,
            "unit": "iter/sec",
            "range": "stddev: 0.00008682485927825245",
            "extra": "mean: 60.40550850672819 usec\nrounds: 13107"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 16481.11069542777,
            "unit": "iter/sec",
            "range": "stddev: 0.00008113508305527749",
            "extra": "mean: 60.67552232856627 usec\nrounds: 14085"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 17536.36241729426,
            "unit": "iter/sec",
            "range": "stddev: 0.000039214347763512175",
            "extra": "mean: 57.02436892007922 usec\nrounds: 14556"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 16854.493648553434,
            "unit": "iter/sec",
            "range": "stddev: 0.000039545714523707266",
            "extra": "mean: 59.33135820344425 usec\nrounds: 14006"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 18136.520627045724,
            "unit": "iter/sec",
            "range": "stddev: 0.0000458718761168429",
            "extra": "mean: 55.137367335428706 usec\nrounds: 14205"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 16653.902680722567,
            "unit": "iter/sec",
            "range": "stddev: 0.00003495651806935695",
            "extra": "mean: 60.04598556694657 usec\nrounds: 14065"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 16247.979980834682,
            "unit": "iter/sec",
            "range": "stddev: 0.000048827891893938904",
            "extra": "mean: 61.54611226623561 usec\nrounds: 10965"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 16552.866412631945,
            "unit": "iter/sec",
            "range": "stddev: 0.00003863214662627615",
            "extra": "mean: 60.4124974534243 usec\nrounds: 13352"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 15921.457548459804,
            "unit": "iter/sec",
            "range": "stddev: 0.00010746098898588709",
            "extra": "mean: 62.8083199641943 usec\nrounds: 13514"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 20490.045188680528,
            "unit": "iter/sec",
            "range": "stddev: 0.00005989630402996294",
            "extra": "mean: 48.804187145103896 usec\nrounds: 13909"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 20005.455453547816,
            "unit": "iter/sec",
            "range": "stddev: 0.000025789647574441566",
            "extra": "mean: 49.98636508536263 usec\nrounds: 10918"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 20119.929285360024,
            "unit": "iter/sec",
            "range": "stddev: 0.00004379845029033528",
            "extra": "mean: 49.70196394912957 usec\nrounds: 14535"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 20542.132287210494,
            "unit": "iter/sec",
            "range": "stddev: 0.00004576825395727584",
            "extra": "mean: 48.68043813653166 usec\nrounds: 13263"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 18211.36286388759,
            "unit": "iter/sec",
            "range": "stddev: 0.00009116980752445654",
            "extra": "mean: 54.91077232791624 usec\nrounds: 14578"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 17040.125132515615,
            "unit": "iter/sec",
            "range": "stddev: 0.0001020793131216191",
            "extra": "mean: 58.68501505847634 usec\nrounds: 13680"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 18065.148523868313,
            "unit": "iter/sec",
            "range": "stddev: 0.00004439291113939942",
            "extra": "mean: 55.355205005857805 usec\nrounds: 14663"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 18378.815500506716,
            "unit": "iter/sec",
            "range": "stddev: 0.00006737382642409622",
            "extra": "mean: 54.41047057534417 usec\nrounds: 13662"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 25138.97782248344,
            "unit": "iter/sec",
            "range": "stddev: 0.000021789563598501762",
            "extra": "mean: 39.77886479957169 usec\nrounds: 14926"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 11170.528161666574,
            "unit": "iter/sec",
            "range": "stddev: 0.00012751558478480107",
            "extra": "mean: 89.5212818523351 usec\nrounds: 6177"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 11368.955799095997,
            "unit": "iter/sec",
            "range": "stddev: 0.00005098888152736154",
            "extra": "mean: 87.9588255659781 usec\nrounds: 6094"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 24990.643836846546,
            "unit": "iter/sec",
            "range": "stddev: 0.000057597943979459797",
            "extra": "mean: 40.01497546556149 usec\nrounds: 15244"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 24785.959930008325,
            "unit": "iter/sec",
            "range": "stddev: 0.000022957489675893374",
            "extra": "mean: 40.34542147344076 usec\nrounds: 13263"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 10368.198391261954,
            "unit": "iter/sec",
            "range": "stddev: 0.00005072787558738074",
            "extra": "mean: 96.44877174059225 usec\nrounds: 5669"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 10333.148438154862,
            "unit": "iter/sec",
            "range": "stddev: 0.00006689095878667498",
            "extra": "mean: 96.7759251679312 usec\nrounds: 5666"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 23826.83316749833,
            "unit": "iter/sec",
            "range": "stddev: 0.00006717710305047615",
            "extra": "mean: 41.969488474199686 usec\nrounds: 14793"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 24392.704232341475,
            "unit": "iter/sec",
            "range": "stddev: 0.00006773575981449415",
            "extra": "mean: 40.9958646025861 usec\nrounds: 15244"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 11191.856328021402,
            "unit": "iter/sec",
            "range": "stddev: 0.000032056164140635646",
            "extra": "mean: 89.35068237931794 usec\nrounds: 3076"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 11324.673978706152,
            "unit": "iter/sec",
            "range": "stddev: 0.00003401277300630042",
            "extra": "mean: 88.30276278860703 usec\nrounds: 5767"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 26675.964378059976,
            "unit": "iter/sec",
            "range": "stddev: 0.000020839779345733366",
            "extra": "mean: 37.486929650515805 usec\nrounds: 15949"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 24713.023704590843,
            "unit": "iter/sec",
            "range": "stddev: 0.000034798193149285894",
            "extra": "mean: 40.46449402362018 usec\nrounds: 14307"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 10442.548631299978,
            "unit": "iter/sec",
            "range": "stddev: 0.000046949581399064025",
            "extra": "mean: 95.76206300851207 usec\nrounds: 5650"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 10563.140672449881,
            "unit": "iter/sec",
            "range": "stddev: 0.0000408430588295695",
            "extra": "mean: 94.66881404014026 usec\nrounds: 5641"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 24282.37935974938,
            "unit": "iter/sec",
            "range": "stddev: 0.000048146311393034055",
            "extra": "mean: 41.182125737546386 usec\nrounds: 14578"
          }
        ]
      }
    ]
  }
}