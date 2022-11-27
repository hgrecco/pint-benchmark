window.BENCHMARK_DATA = {
  "lastUpdate": 1669514910057,
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
      }
    ]
  }
}