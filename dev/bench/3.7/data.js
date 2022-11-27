window.BENCHMARK_DATA = {
  "lastUpdate": 1669519225350,
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
        "date": 1669514921467,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 36.09802374606257,
            "unit": "iter/sec",
            "range": "stddev: 0.00026369518410616487",
            "extra": "mean: 27.702347558821028 msec\nrounds: 34"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 1376690.6230674926,
            "unit": "iter/sec",
            "range": "stddev: 9.436713943634737e-8",
            "extra": "mean: 726.3796115439764 nsec\nrounds: 81968"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 2182.5573825541774,
            "unit": "iter/sec",
            "range": "stddev: 0.000009916419456638251",
            "extra": "mean: 458.1781024376696 usec\nrounds: 205"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 16278.639301541982,
            "unit": "iter/sec",
            "range": "stddev: 0.000009357314131581325",
            "extra": "mean: 61.43019582142077 usec\nrounds: 12971"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 16232.397153486521,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028886130156917613",
            "extra": "mean: 61.60519549543008 usec\nrounds: 6128"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 16336.205317084637,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023503675766436647",
            "extra": "mean: 61.21372623507528 usec\nrounds: 9552"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 16269.766318314418,
            "unit": "iter/sec",
            "range": "stddev: 0.000002847894589118845",
            "extra": "mean: 61.46369778368163 usec\nrounds: 12362"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 16266.042198705667,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064844234211478185",
            "extra": "mean: 61.477769932231745 usec\nrounds: 12392"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 15474.066006014453,
            "unit": "iter/sec",
            "range": "stddev: 0.000004587331166192555",
            "extra": "mean: 64.62425581041987 usec\nrounds: 12392"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 15605.93573709516,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027684168480767587",
            "extra": "mean: 64.07818261246645 usec\nrounds: 12020"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 15587.129934097406,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028614651359297253",
            "extra": "mean: 64.155492655031 usec\nrounds: 12049"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 15569.061358552923,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032053005775425554",
            "extra": "mean: 64.22994790566781 usec\nrounds: 12151"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 15525.922881566274,
            "unit": "iter/sec",
            "range": "stddev: 0.000003864022610225729",
            "extra": "mean: 64.40840957591558 usec\nrounds: 9461"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 15031.784429792511,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028077790250146275",
            "extra": "mean: 66.52570123464733 usec\nrounds: 13124"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 15029.0470475686,
            "unit": "iter/sec",
            "range": "stddev: 0.000010781488373114817",
            "extra": "mean: 66.5378181886642 usec\nrounds: 13107"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 14840.915705912266,
            "unit": "iter/sec",
            "range": "stddev: 0.000005004444949425719",
            "extra": "mean: 67.38128696476754 usec\nrounds: 12904"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 22797218.18814927,
            "unit": "iter/sec",
            "range": "stddev: 7.068927977445043e-9",
            "extra": "mean: 43.86500106053078 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 23058668.329237208,
            "unit": "iter/sec",
            "range": "stddev: 2.4664416904537374e-9",
            "extra": "mean: 43.36763882991715 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 19772532.12477012,
            "unit": "iter/sec",
            "range": "stddev: 5.632580037048809e-9",
            "extra": "mean: 50.575211798319174 nsec\nrounds: 133334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 23505632.76237009,
            "unit": "iter/sec",
            "range": "stddev: 4.30375842447897e-9",
            "extra": "mean: 42.54299427335688 nsec\nrounds: 200000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 23414727.446752597,
            "unit": "iter/sec",
            "range": "stddev: 3.626967506469307e-9",
            "extra": "mean: 42.708163153965266 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 23377862.871028285,
            "unit": "iter/sec",
            "range": "stddev: 3.345944727547397e-9",
            "extra": "mean: 42.775509699777565 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 52207.466718720854,
            "unit": "iter/sec",
            "range": "stddev: 6.728843482904246e-7",
            "extra": "mean: 19.154348273355588 usec\nrounds: 14971"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 4530.011691150506,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038195552117414",
            "extra": "mean: 220.74998215866103 usec\nrounds: 3419"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 52062.5805546113,
            "unit": "iter/sec",
            "range": "stddev: 6.213588277123355e-7",
            "extra": "mean: 19.207653353852585 usec\nrounds: 20081"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 4510.4956592611725,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033966809804487945",
            "extra": "mean: 221.70512412460715 usec\nrounds: 3714"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 52062.99724405104,
            "unit": "iter/sec",
            "range": "stddev: 6.494393490615095e-7",
            "extra": "mean: 19.207499624203148 usec\nrounds: 19961"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 4494.558787036914,
            "unit": "iter/sec",
            "range": "stddev: 0.000002870102553632781",
            "extra": "mean: 222.49124939341615 usec\nrounds: 3292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 4509.712475073791,
            "unit": "iter/sec",
            "range": "stddev: 0.000007343357452632089",
            "extra": "mean: 221.74362678934142 usec\nrounds: 3703"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 60143.65185602522,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012455639294568859",
            "extra": "mean: 16.626858681508867 usec\nrounds: 23585"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 4536.819219267624,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029419593263665383",
            "extra": "mean: 220.41874530795815 usec\nrounds: 3357"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 57234.080783018115,
            "unit": "iter/sec",
            "range": "stddev: 0.000007492815251207411",
            "extra": "mean: 17.472107288507537 usec\nrounds: 23311"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 4428.943960070241,
            "unit": "iter/sec",
            "range": "stddev: 0.00001877376754268123",
            "extra": "mean: 225.78745836832408 usec\nrounds: 3591"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 60334.415882997564,
            "unit": "iter/sec",
            "range": "stddev: 5.808390230067373e-7",
            "extra": "mean: 16.574288246019186 usec\nrounds: 23754"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 51734.44440518975,
            "unit": "iter/sec",
            "range": "stddev: 8.310228520641854e-7",
            "extra": "mean: 19.32948176978363 usec\nrounds: 18623"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 4523.851684825771,
            "unit": "iter/sec",
            "range": "stddev: 0.000004109089102338728",
            "extra": "mean: 221.05057143103784 usec\nrounds: 112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 51821.55569863709,
            "unit": "iter/sec",
            "range": "stddev: 5.090774301102871e-7",
            "extra": "mean: 19.29698918757663 usec\nrounds: 20162"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 4467.19885282102,
            "unit": "iter/sec",
            "range": "stddev: 0.000009988756565298906",
            "extra": "mean: 223.8539256806317 usec\nrounds: 3633"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 51537.68295548817,
            "unit": "iter/sec",
            "range": "stddev: 6.494660651053604e-7",
            "extra": "mean: 19.403278196725985 usec\nrounds: 19763"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 4450.410796485969,
            "unit": "iter/sec",
            "range": "stddev: 0.000011154318816261294",
            "extra": "mean: 224.69835836044555 usec\nrounds: 3636"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 4424.007468127211,
            "unit": "iter/sec",
            "range": "stddev: 0.00003232823564235931",
            "extra": "mean: 226.039401426084 usec\nrounds: 3647"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 59842.35106859521,
            "unit": "iter/sec",
            "range": "stddev: 9.214580762316148e-7",
            "extra": "mean: 16.71057340066293 usec\nrounds: 23256"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 4495.003063087624,
            "unit": "iter/sec",
            "range": "stddev: 0.000007875851115041282",
            "extra": "mean: 222.46925885587686 usec\nrounds: 3585"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 59819.25933749363,
            "unit": "iter/sec",
            "range": "stddev: 9.519139870296917e-7",
            "extra": "mean: 16.717024100183366 usec\nrounds: 22780"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 4491.579554748618,
            "unit": "iter/sec",
            "range": "stddev: 0.000007470078485530847",
            "extra": "mean: 222.63882623269433 usec\nrounds: 3568"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 60460.34198000202,
            "unit": "iter/sec",
            "range": "stddev: 7.058794957858173e-7",
            "extra": "mean: 16.539767511251622 usec\nrounds: 22728"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 52078.58812060233,
            "unit": "iter/sec",
            "range": "stddev: 8.029526988615325e-7",
            "extra": "mean: 19.201749434608793 usec\nrounds: 19456"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 4454.411935319723,
            "unit": "iter/sec",
            "range": "stddev: 0.00001160266861046306",
            "extra": "mean: 224.49652491069472 usec\nrounds: 3633"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 51679.65561404121,
            "unit": "iter/sec",
            "range": "stddev: 7.541502863272318e-7",
            "extra": "mean: 19.3499741458862 usec\nrounds: 19842"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 4444.662295337183,
            "unit": "iter/sec",
            "range": "stddev: 0.000017964714680135326",
            "extra": "mean: 224.9889718391164 usec\nrounds: 3693"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 51732.422240941574,
            "unit": "iter/sec",
            "range": "stddev: 6.773792244067515e-7",
            "extra": "mean: 19.330237338250708 usec\nrounds: 20001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 4505.025955436825,
            "unit": "iter/sec",
            "range": "stddev: 0.000002912928030646867",
            "extra": "mean: 221.97430378689927 usec\nrounds: 3644"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 4486.712851893585,
            "unit": "iter/sec",
            "range": "stddev: 0.000005870067618635911",
            "extra": "mean: 222.88032085181408 usec\nrounds: 2724"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 59716.79656076489,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010894841765406945",
            "extra": "mean: 16.74570736530465 usec\nrounds: 22728"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 4515.9353448520615,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030907074972206405",
            "extra": "mean: 221.43806844797933 usec\nrounds: 3594"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 59438.22404971185,
            "unit": "iter/sec",
            "range": "stddev: 8.305604119961592e-7",
            "extra": "mean: 16.824190426073944 usec\nrounds: 22728"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 4494.135426776569,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028498363094921593",
            "extra": "mean: 222.51220869800372 usec\nrounds: 3656"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 60276.656287396974,
            "unit": "iter/sec",
            "range": "stddev: 6.706898651325123e-7",
            "extra": "mean: 16.590170417417237 usec\nrounds: 23149"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 52654.645333720124,
            "unit": "iter/sec",
            "range": "stddev: 6.190476623859588e-7",
            "extra": "mean: 18.991676682315404 usec\nrounds: 18904"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 4517.012577555344,
            "unit": "iter/sec",
            "range": "stddev: 0.000003044260948892514",
            "extra": "mean: 221.38525913541085 usec\nrounds: 3585"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 51991.03527542538,
            "unit": "iter/sec",
            "range": "stddev: 5.029355310325297e-7",
            "extra": "mean: 19.234085159151856 usec\nrounds: 19763"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 4525.222523606242,
            "unit": "iter/sec",
            "range": "stddev: 0.000003515806284799215",
            "extra": "mean: 220.98360794047306 usec\nrounds: 403"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 51631.550413890174,
            "unit": "iter/sec",
            "range": "stddev: 0.000001065962813558964",
            "extra": "mean: 19.36800254851489 usec\nrounds: 18833"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 4514.346396497241,
            "unit": "iter/sec",
            "range": "stddev: 0.000002674558282121835",
            "extra": "mean: 221.51600966552263 usec\nrounds: 3621"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 4489.089290406977,
            "unit": "iter/sec",
            "range": "stddev: 0.000008453918712659181",
            "extra": "mean: 222.7623322478713 usec\nrounds: 3684"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 61085.76713850594,
            "unit": "iter/sec",
            "range": "stddev: 6.323988212047578e-7",
            "extra": "mean: 16.37042549916086 usec\nrounds: 22832"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 4529.395930483837,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031641087086658345",
            "extra": "mean: 220.77999259675636 usec\nrounds: 3512"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 60349.35494330913,
            "unit": "iter/sec",
            "range": "stddev: 5.706547031004139e-7",
            "extra": "mean: 16.570185397000152 usec\nrounds: 23420"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 4477.124716352111,
            "unit": "iter/sec",
            "range": "stddev: 0.000007487435397739451",
            "extra": "mean: 223.35763762569113 usec\nrounds: 3673"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 61182.20968928501,
            "unit": "iter/sec",
            "range": "stddev: 5.523700376362073e-7",
            "extra": "mean: 16.344620520875573 usec\nrounds: 22884"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 52048.1925253206,
            "unit": "iter/sec",
            "range": "stddev: 6.938822280205004e-7",
            "extra": "mean: 19.212963053683684 usec\nrounds: 19921"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 4519.932384651481,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027993195301143252",
            "extra": "mean: 221.2422476486022 usec\nrounds: 3295"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 52084.8838983944,
            "unit": "iter/sec",
            "range": "stddev: 6.481069746637552e-7",
            "extra": "mean: 19.199428416712408 usec\nrounds: 20326"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 4525.758624070874,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027167925417439464",
            "extra": "mean: 220.95743124287748 usec\nrounds: 3636"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 52099.79217386041,
            "unit": "iter/sec",
            "range": "stddev: 6.229887459629013e-7",
            "extra": "mean: 19.193934529775753 usec\nrounds: 20284"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 4508.13416350506,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030271117998228064",
            "extra": "mean: 221.82125991177313 usec\nrounds: 3632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 4485.7134536753765,
            "unit": "iter/sec",
            "range": "stddev: 0.000011223533571379631",
            "extra": "mean: 222.92997765620726 usec\nrounds: 3491"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 60040.232503505984,
            "unit": "iter/sec",
            "range": "stddev: 4.789207551184917e-7",
            "extra": "mean: 16.655498459996906 usec\nrounds: 22728"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 4528.038151964641,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028949779076324992",
            "extra": "mean: 220.8461957340436 usec\nrounds: 3704"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 60972.34460546851,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010389805173167936",
            "extra": "mean: 16.4008782419417 usec\nrounds: 23095"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 4498.870744691585,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028005956608328933",
            "extra": "mean: 222.27800191413456 usec\nrounds: 3658"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 60371.58857335212,
            "unit": "iter/sec",
            "range": "stddev: 6.424785288522951e-7",
            "extra": "mean: 16.56408293422641 usec\nrounds: 23585"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 51594.39003545183,
            "unit": "iter/sec",
            "range": "stddev: 7.989747978543447e-7",
            "extra": "mean: 19.381952171793763 usec\nrounds: 19570"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 4509.31332539341,
            "unit": "iter/sec",
            "range": "stddev: 0.000002914650535018142",
            "extra": "mean: 221.76325481058828 usec\nrounds: 3638"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 51592.443373345974,
            "unit": "iter/sec",
            "range": "stddev: 7.317079909029393e-7",
            "extra": "mean: 19.38268348260913 usec\nrounds: 19961"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 4497.529214494522,
            "unit": "iter/sec",
            "range": "stddev: 0.000034910684048157286",
            "extra": "mean: 222.34430335154366 usec\nrounds: 3669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 51754.56245458758,
            "unit": "iter/sec",
            "range": "stddev: 9.586400448840701e-7",
            "extra": "mean: 19.321968007698977 usec\nrounds: 18692"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 4505.726898136962,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029268789579757033",
            "extra": "mean: 221.93977189640196 usec\nrounds: 3665"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 4503.588311079985,
            "unit": "iter/sec",
            "range": "stddev: 0.000005128255167119033",
            "extra": "mean: 222.04516286263174 usec\nrounds: 3549"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 60258.486851923626,
            "unit": "iter/sec",
            "range": "stddev: 6.053168660783131e-7",
            "extra": "mean: 16.595172767237802 usec\nrounds: 20791"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 4482.144636486329,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048491099355649125",
            "extra": "mean: 223.10748115079267 usec\nrounds: 3581"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 60433.79631809341,
            "unit": "iter/sec",
            "range": "stddev: 7.396503932386727e-7",
            "extra": "mean: 16.547032636118008 usec\nrounds: 23042"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 4492.26303602394,
            "unit": "iter/sec",
            "range": "stddev: 0.000008468939346388985",
            "extra": "mean: 222.60495255529176 usec\nrounds: 3562"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 60508.58887491924,
            "unit": "iter/sec",
            "range": "stddev: 6.556495691683777e-7",
            "extra": "mean: 16.5265794260573 usec\nrounds: 22990"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 168134.24237192897,
            "unit": "iter/sec",
            "range": "stddev: 2.6973508283201117e-7",
            "extra": "mean: 5.947628430072589 usec\nrounds: 89286"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 167110.0361776328,
            "unit": "iter/sec",
            "range": "stddev: 3.1246700412945827e-7",
            "extra": "mean: 5.984081045479703 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 165957.81451342272,
            "unit": "iter/sec",
            "range": "stddev: 9.790990994431734e-7",
            "extra": "mean: 6.025627674912046 usec\nrounds: 85471"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 166663.2581306709,
            "unit": "iter/sec",
            "range": "stddev: 2.788571379378672e-7",
            "extra": "mean: 6.000122709805412 usec\nrounds: 85478"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 169321.19413068105,
            "unit": "iter/sec",
            "range": "stddev: 3.5496028000543685e-7",
            "extra": "mean: 5.905935196914607 usec\nrounds: 89286"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 165509.47118193223,
            "unit": "iter/sec",
            "range": "stddev: 3.8276998891107826e-7",
            "extra": "mean: 6.041950305676311 usec\nrounds: 86207"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 167474.38541792508,
            "unit": "iter/sec",
            "range": "stddev: 2.671870081317843e-7",
            "extra": "mean: 5.971062365773388 usec\nrounds: 81968"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 167742.94552014983,
            "unit": "iter/sec",
            "range": "stddev: 3.244097058122101e-7",
            "extra": "mean: 5.961502565125022 usec\nrounds: 88496"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 168292.17460066907,
            "unit": "iter/sec",
            "range": "stddev: 2.709510651572693e-7",
            "extra": "mean: 5.9420469333933275 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 170383.09152102677,
            "unit": "iter/sec",
            "range": "stddev: 3.110868107491951e-7",
            "extra": "mean: 5.869126983627899 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 165863.25336375838,
            "unit": "iter/sec",
            "range": "stddev: 3.6488442048533915e-7",
            "extra": "mean: 6.029062976395849 usec\nrounds: 84746"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 167668.07728897023,
            "unit": "iter/sec",
            "range": "stddev: 3.6151981111161843e-7",
            "extra": "mean: 5.9641645336967395 usec\nrounds: 90091"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 168189.83559138174,
            "unit": "iter/sec",
            "range": "stddev: 9.47138765612975e-7",
            "extra": "mean: 5.945662509769653 usec\nrounds: 85478"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 167979.1810573439,
            "unit": "iter/sec",
            "range": "stddev: 3.190373204722525e-7",
            "extra": "mean: 5.95311867640684 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 170326.3258919694,
            "unit": "iter/sec",
            "range": "stddev: 2.7349056736030245e-7",
            "extra": "mean: 5.8710830211546785 usec\nrounds: 86207"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 167509.70874588063,
            "unit": "iter/sec",
            "range": "stddev: 3.0741114527237366e-7",
            "extra": "mean: 5.969803228044785 usec\nrounds: 81968"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 168475.91675847172,
            "unit": "iter/sec",
            "range": "stddev: 3.989186594119075e-7",
            "extra": "mean: 5.935566455077417 usec\nrounds: 88496"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 163413.25776017725,
            "unit": "iter/sec",
            "range": "stddev: 3.606882659842453e-7",
            "extra": "mean: 6.119454527169298 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 169487.78572657937,
            "unit": "iter/sec",
            "range": "stddev: 2.929140610274713e-7",
            "extra": "mean: 5.9001301817301295 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 169518.89966315764,
            "unit": "iter/sec",
            "range": "stddev: 3.1273163558165035e-7",
            "extra": "mean: 5.899047256601175 usec\nrounds: 35212"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 168433.20914955754,
            "unit": "iter/sec",
            "range": "stddev: 2.72967794652483e-7",
            "extra": "mean: 5.937071466186138 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 167763.90845511228,
            "unit": "iter/sec",
            "range": "stddev: 0.000001079743714967651",
            "extra": "mean: 5.960757645721904 usec\nrounds: 84034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 167145.88688001217,
            "unit": "iter/sec",
            "range": "stddev: 3.340912937361457e-7",
            "extra": "mean: 5.982797534933439 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 166073.6533479661,
            "unit": "iter/sec",
            "range": "stddev: 3.200776762904838e-7",
            "extra": "mean: 6.02142471030458 usec\nrounds: 86207"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 169779.5377030219,
            "unit": "iter/sec",
            "range": "stddev: 4.0762343417079833e-7",
            "extra": "mean: 5.8899913000658435 usec\nrounds: 83334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 167885.50359898835,
            "unit": "iter/sec",
            "range": "stddev: 3.9611938820600284e-7",
            "extra": "mean: 5.9564404225668115 usec\nrounds: 78125"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 171140.21262663632,
            "unit": "iter/sec",
            "range": "stddev: 3.501619352195146e-7",
            "extra": "mean: 5.843162075424229 usec\nrounds: 81968"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 168715.38034275643,
            "unit": "iter/sec",
            "range": "stddev: 3.886874195685671e-7",
            "extra": "mean: 5.9271418999763625 usec\nrounds: 80000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 168632.10106203254,
            "unit": "iter/sec",
            "range": "stddev: 6.121173904474685e-7",
            "extra": "mean: 5.930069030167291 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 168516.0454293824,
            "unit": "iter/sec",
            "range": "stddev: 3.8610629128918245e-7",
            "extra": "mean: 5.934153020574268 usec\nrounds: 78741"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 168840.68842518964,
            "unit": "iter/sec",
            "range": "stddev: 3.7700917675982735e-7",
            "extra": "mean: 5.922742967510953 usec\nrounds: 78741"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 170818.80946152317,
            "unit": "iter/sec",
            "range": "stddev: 4.027196509432142e-7",
            "extra": "mean: 5.854156243989333 usec\nrounds: 81968"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 169132.08565919838,
            "unit": "iter/sec",
            "range": "stddev: 4.3114409356301666e-7",
            "extra": "mean: 5.912538688933352 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 165102.53148054497,
            "unit": "iter/sec",
            "range": "stddev: 9.67648197806147e-7",
            "extra": "mean: 6.05684232114779 usec\nrounds: 83334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 168138.27653544047,
            "unit": "iter/sec",
            "range": "stddev: 4.06276501829226e-7",
            "extra": "mean: 5.947485727851018 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 169703.3572245761,
            "unit": "iter/sec",
            "range": "stddev: 3.628589056779879e-7",
            "extra": "mean: 5.892635339421453 usec\nrounds: 88496"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 226306.17874877425,
            "unit": "iter/sec",
            "range": "stddev: 3.126149169586062e-7",
            "extra": "mean: 4.418792299569135 usec\nrounds: 66230"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 166356.76358311027,
            "unit": "iter/sec",
            "range": "stddev: 2.91891365439913e-7",
            "extra": "mean: 6.011177294275802 usec\nrounds: 76342"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 170082.16849128762,
            "unit": "iter/sec",
            "range": "stddev: 3.0849882691699206e-7",
            "extra": "mean: 5.879511114366022 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 168745.91658791047,
            "unit": "iter/sec",
            "range": "stddev: 3.1200896092352096e-7",
            "extra": "mean: 5.926069324937036 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 167216.2850985081,
            "unit": "iter/sec",
            "range": "stddev: 3.372714449102912e-7",
            "extra": "mean: 5.980278771358269 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 167786.38735803298,
            "unit": "iter/sec",
            "range": "stddev: 3.7774341567082415e-7",
            "extra": "mean: 5.959959063104076 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 167712.98180699538,
            "unit": "iter/sec",
            "range": "stddev: 3.748047901994054e-7",
            "extra": "mean: 5.962567651148216 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 229785.37219067913,
            "unit": "iter/sec",
            "range": "stddev: 2.6923486546581153e-7",
            "extra": "mean: 4.35188711303253 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 164340.1029096694,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010045854016905906",
            "extra": "mean: 6.084942033592717 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 168283.47510959575,
            "unit": "iter/sec",
            "range": "stddev: 3.2669873984834157e-7",
            "extra": "mean: 5.942354110222309 usec\nrounds: 78741"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 167315.81358564185,
            "unit": "iter/sec",
            "range": "stddev: 3.5823096302062086e-7",
            "extra": "mean: 5.976721378389871 usec\nrounds: 30676"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 170252.95851395707,
            "unit": "iter/sec",
            "range": "stddev: 3.628248471321609e-7",
            "extra": "mean: 5.87361305629248 usec\nrounds: 71429"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 171902.60927461626,
            "unit": "iter/sec",
            "range": "stddev: 2.8183147329911166e-7",
            "extra": "mean: 5.817247360117085 usec\nrounds: 30304"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 169562.8902978605,
            "unit": "iter/sec",
            "range": "stddev: 2.5253354459604474e-7",
            "extra": "mean: 5.897516834275252 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 232338.53006415625,
            "unit": "iter/sec",
            "range": "stddev: 2.2169027783823923e-7",
            "extra": "mean: 4.30406441722717 usec\nrounds: 72993"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 169953.66234653056,
            "unit": "iter/sec",
            "range": "stddev: 2.647616407413078e-7",
            "extra": "mean: 5.883956757348537 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 169502.39228861206,
            "unit": "iter/sec",
            "range": "stddev: 3.8992702357650703e-7",
            "extra": "mean: 5.899621748684809 usec\nrounds: 71434"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 169014.46736018802,
            "unit": "iter/sec",
            "range": "stddev: 3.4228738808723235e-7",
            "extra": "mean: 5.916653264178222 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 166228.188708399,
            "unit": "iter/sec",
            "range": "stddev: 9.786768977286154e-7",
            "extra": "mean: 6.015826844833286 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 170238.38940970052,
            "unit": "iter/sec",
            "range": "stddev: 3.534611467982089e-7",
            "extra": "mean: 5.874115723647805 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 170279.40170628202,
            "unit": "iter/sec",
            "range": "stddev: 2.535911399747784e-7",
            "extra": "mean: 5.872700925534833 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 227673.08487077148,
            "unit": "iter/sec",
            "range": "stddev: 2.402556033546627e-7",
            "extra": "mean: 4.392262706712151 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 168149.64476053073,
            "unit": "iter/sec",
            "range": "stddev: 3.1836557191357865e-7",
            "extra": "mean: 5.947083631512536 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 169607.4337818981,
            "unit": "iter/sec",
            "range": "stddev: 3.6437909299315346e-7",
            "extra": "mean: 5.895967987381508 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 170498.39739366664,
            "unit": "iter/sec",
            "range": "stddev: 3.61211561178807e-7",
            "extra": "mean: 5.865157768557103 usec\nrounds: 72993"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 170166.10072055814,
            "unit": "iter/sec",
            "range": "stddev: 4.2624211360134e-7",
            "extra": "mean: 5.876611121519268 usec\nrounds: 75188"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 170449.32679984265,
            "unit": "iter/sec",
            "range": "stddev: 3.782053273159286e-7",
            "extra": "mean: 5.866846286663792 usec\nrounds: 72993"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 168523.05218410102,
            "unit": "iter/sec",
            "range": "stddev: 3.968840239974843e-7",
            "extra": "mean: 5.9339062937666345 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 229500.01889378933,
            "unit": "iter/sec",
            "range": "stddev: 3.256331840681537e-7",
            "extra": "mean: 4.357298116227135 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 166600.66805222147,
            "unit": "iter/sec",
            "range": "stddev: 9.373102804486648e-7",
            "extra": "mean: 6.0023768913492415 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 167221.5451851076,
            "unit": "iter/sec",
            "range": "stddev: 4.518183641417025e-7",
            "extra": "mean: 5.980090656936818 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 169748.3702625666,
            "unit": "iter/sec",
            "range": "stddev: 4.2094043826854784e-7",
            "extra": "mean: 5.891072759362586 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 168200.99843949673,
            "unit": "iter/sec",
            "range": "stddev: 3.727295608047059e-7",
            "extra": "mean: 5.945267919201491 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 171352.4027499836,
            "unit": "iter/sec",
            "range": "stddev: 4.044717044008461e-7",
            "extra": "mean: 5.8359263363180105 usec\nrounds: 74080"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 167202.74443708977,
            "unit": "iter/sec",
            "range": "stddev: 3.963379468011743e-7",
            "extra": "mean: 5.9807630751913345 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 231007.93698476482,
            "unit": "iter/sec",
            "range": "stddev: 3.361645610575405e-7",
            "extra": "mean: 4.328855592810004 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 2293553.690195798,
            "unit": "iter/sec",
            "range": "stddev: 1.718382969273158e-8",
            "extra": "mean: 436.00461775753166 nsec\nrounds: 109891"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 4512.809029165753,
            "unit": "iter/sec",
            "range": "stddev: 0.00001938407751327982",
            "extra": "mean: 221.59147296885772 usec\nrounds: 74"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 2056685.6991862105,
            "unit": "iter/sec",
            "range": "stddev: 1.804615695080491e-8",
            "extra": "mean: 486.21916338294653 nsec\nrounds: 102041"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 4869.8442389174,
            "unit": "iter/sec",
            "range": "stddev: 0.000006863626366762624",
            "extra": "mean: 205.34537675938213 usec\nrounds: 3907"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 2122430.9634556775,
            "unit": "iter/sec",
            "range": "stddev: 1.851253216882915e-8",
            "extra": "mean: 471.1578455170896 nsec\nrounds: 105264"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 4891.07423201303,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028004337764514686",
            "extra": "mean: 204.45406316976462 usec\nrounds: 3641"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 4943.483953723195,
            "unit": "iter/sec",
            "range": "stddev: 0.000006988492383861828",
            "extra": "mean: 202.28648648628626 usec\nrounds: 3922"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 2213796.7547671064,
            "unit": "iter/sec",
            "range": "stddev: 2.301505039690001e-8",
            "extra": "mean: 451.71265060695544 nsec\nrounds: 196117"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 4932.7466975308425,
            "unit": "iter/sec",
            "range": "stddev: 0.000009548720933556984",
            "extra": "mean: 202.72680948741285 usec\nrounds: 3921"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 2056789.580946908,
            "unit": "iter/sec",
            "range": "stddev: 1.683060573957257e-8",
            "extra": "mean: 486.1946060323662 nsec\nrounds: 101011"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 4894.583315514365,
            "unit": "iter/sec",
            "range": "stddev: 0.00001071225024902779",
            "extra": "mean: 204.30748350534748 usec\nrounds: 3880"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 2144286.9883480226,
            "unit": "iter/sec",
            "range": "stddev: 1.5482475556447398e-8",
            "extra": "mean: 466.3554857320282 nsec\nrounds: 105264"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 2023127.6387168178,
            "unit": "iter/sec",
            "range": "stddev: 1.6424123376027235e-8",
            "extra": "mean: 494.28418695051727 nsec\nrounds: 99010"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 4898.888262827123,
            "unit": "iter/sec",
            "range": "stddev: 0.000002697260395896599",
            "extra": "mean: 204.12794625017744 usec\nrounds: 3907"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 2169705.895206031,
            "unit": "iter/sec",
            "range": "stddev: 1.633118499139594e-8",
            "extra": "mean: 460.89195877166463 nsec\nrounds: 106383"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 4904.876625735729,
            "unit": "iter/sec",
            "range": "stddev: 0.000002737295788465282",
            "extra": "mean: 203.8787264807095 usec\nrounds: 3901"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 2034281.916153586,
            "unit": "iter/sec",
            "range": "stddev: 1.7550454744256157e-8",
            "extra": "mean: 491.5739515054441 nsec\nrounds: 100000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 4886.164622930603,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025846935163067074",
            "extra": "mean: 204.65949823037772 usec\nrounds: 3956"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 4947.386976135574,
            "unit": "iter/sec",
            "range": "stddev: 0.000006717036553869674",
            "extra": "mean: 202.12690149843596 usec\nrounds: 4071"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 2014464.666106585,
            "unit": "iter/sec",
            "range": "stddev: 1.7387301338327954e-8",
            "extra": "mean: 496.4097990029459 nsec\nrounds: 99010"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 4947.746913457189,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028386365075150136",
            "extra": "mean: 202.11219722660795 usec\nrounds: 3823"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 2089206.040829751,
            "unit": "iter/sec",
            "range": "stddev: 2.5798345461576435e-8",
            "extra": "mean: 478.6507316440342 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 4929.389204233176,
            "unit": "iter/sec",
            "range": "stddev: 0.000007264595565159432",
            "extra": "mean: 202.86489026698018 usec\nrounds: 3873"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 2032680.2936003008,
            "unit": "iter/sec",
            "range": "stddev: 1.924177134063471e-8",
            "extra": "mean: 491.96128045724663 nsec\nrounds: 101011"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 2069074.1670618951,
            "unit": "iter/sec",
            "range": "stddev: 2.504250148413635e-8",
            "extra": "mean: 483.30795286042996 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 4791.050137971262,
            "unit": "iter/sec",
            "range": "stddev: 0.00016546425469166282",
            "extra": "mean: 208.72250784322685 usec\nrounds: 3889"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 2044889.732196709,
            "unit": "iter/sec",
            "range": "stddev: 2.5421269732128302e-8",
            "extra": "mean: 489.02392351783374 nsec\nrounds: 185186"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 4891.538700860364,
            "unit": "iter/sec",
            "range": "stddev: 0.000002624079972973244",
            "extra": "mean: 204.43464953555656 usec\nrounds: 3872"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 2232792.3901793235,
            "unit": "iter/sec",
            "range": "stddev: 1.8315725567379923e-8",
            "extra": "mean: 447.86967404501814 nsec\nrounds: 109891"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 4857.875962779288,
            "unit": "iter/sec",
            "range": "stddev: 0.000002705157362743429",
            "extra": "mean: 205.85128308378629 usec\nrounds: 3801"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 4910.232911429214,
            "unit": "iter/sec",
            "range": "stddev: 0.000007297807767689803",
            "extra": "mean: 203.65632711075034 usec\nrounds: 3696"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 2071520.1197468361,
            "unit": "iter/sec",
            "range": "stddev: 2.9660986286977117e-8",
            "extra": "mean: 482.73728575753785 nsec\nrounds: 185186"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 4950.987780924388,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028461117070347025",
            "extra": "mean: 201.979896588089 usec\nrounds: 3868"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 2135024.5752051766,
            "unit": "iter/sec",
            "range": "stddev: 1.7419969338103967e-8",
            "extra": "mean: 468.3786836056467 nsec\nrounds: 105264"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 4874.47907799041,
            "unit": "iter/sec",
            "range": "stddev: 0.00001810241845395364",
            "extra": "mean: 205.15012660845548 usec\nrounds: 3886"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 2132299.01255067,
            "unit": "iter/sec",
            "range": "stddev: 2.6479733781838536e-8",
            "extra": "mean: 468.97737799163485 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 16236.629777477821,
            "unit": "iter/sec",
            "range": "stddev: 0.000001945438159583461",
            "extra": "mean: 61.589136027916425 usec\nrounds: 7844"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 15523.837520338564,
            "unit": "iter/sec",
            "range": "stddev: 0.000002622235567797085",
            "extra": "mean: 64.41706174068425 usec\nrounds: 9961"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 11781.937556060648,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053634221808883594",
            "extra": "mean: 84.87568324325386 usec\nrounds: 7943"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 80.85419812343486,
            "unit": "iter/sec",
            "range": "stddev: 0.024908266479419953",
            "extra": "mean: 12.367941593748354 msec\nrounds: 224"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 128077.7392351698,
            "unit": "iter/sec",
            "range": "stddev: 7.036315686581436e-7",
            "extra": "mean: 7.807758053597831 usec\nrounds: 40323"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 129123.37769687915,
            "unit": "iter/sec",
            "range": "stddev: 3.523152961110183e-7",
            "extra": "mean: 7.74453098917168 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 88.35203070106242,
            "unit": "iter/sec",
            "range": "stddev: 0.02521941598292093",
            "extra": "mean: 11.318358979019768 msec\nrounds: 286"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 89.38227586546839,
            "unit": "iter/sec",
            "range": "stddev: 0.024959904732972178",
            "extra": "mean: 11.187900401027228 msec\nrounds: 389"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 53512.405328168796,
            "unit": "iter/sec",
            "range": "stddev: 5.118340778848314e-7",
            "extra": "mean: 18.687255672164724 usec\nrounds: 31646"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 52064.61884449765,
            "unit": "iter/sec",
            "range": "stddev: 0.000001671838387241219",
            "extra": "mean: 19.206901388958947 usec\nrounds: 30960"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 67.47550566643825,
            "unit": "iter/sec",
            "range": "stddev: 0.02516745592422564",
            "extra": "mean: 14.820192751773503 msec\nrounds: 141"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 67.71162181260425,
            "unit": "iter/sec",
            "range": "stddev: 0.025083515996645947",
            "extra": "mean: 14.768513487500812 msec\nrounds: 160"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 17136.54653718728,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011630828141256354",
            "extra": "mean: 58.35481482981084 usec\nrounds: 7458"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 1493.5093758773378,
            "unit": "iter/sec",
            "range": "stddev: 0.000005327837920395767",
            "extra": "mean: 669.5639251762756 usec\nrounds: 1283"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 1507.2369110012394,
            "unit": "iter/sec",
            "range": "stddev: 0.000005335349736858179",
            "extra": "mean: 663.4657051595904 usec\nrounds: 1221"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 19709.683359780374,
            "unit": "iter/sec",
            "range": "stddev: 9.04523588999958e-7",
            "extra": "mean: 50.73648225321582 usec\nrounds: 8734"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 32.54416033826418,
            "unit": "iter/sec",
            "range": "stddev: 0.029548349159330366",
            "extra": "mean: 30.727478896551474 msec\nrounds: 29"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 4.185201890000127,
            "unit": "iter/sec",
            "range": "stddev: 0.03747276467374209",
            "extra": "mean: 238.93709939999326 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 4.219936404393375,
            "unit": "iter/sec",
            "range": "stddev: 0.0369393260377573",
            "extra": "mean: 236.9703958000173 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 35.58612278731889,
            "unit": "iter/sec",
            "range": "stddev: 0.029188055056813253",
            "extra": "mean: 28.10084161111111 msec\nrounds: 36"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 17087.677023624063,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011260133223648888",
            "extra": "mean: 58.52170535629153 usec\nrounds: 7599"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 1504.7651896155849,
            "unit": "iter/sec",
            "range": "stddev: 0.000005427054812224889",
            "extra": "mean: 664.5555113189887 usec\nrounds: 1281"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 1503.5262903820885,
            "unit": "iter/sec",
            "range": "stddev: 0.000006123332123110262",
            "extra": "mean: 665.1031022183668 usec\nrounds: 1262"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 19755.792307002637,
            "unit": "iter/sec",
            "range": "stddev: 8.931949962201633e-7",
            "extra": "mean: 50.618066056785786 usec\nrounds: 7327"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 35.97736466832908,
            "unit": "iter/sec",
            "range": "stddev: 0.025562359680805422",
            "extra": "mean: 27.795254299998838 msec\nrounds: 30"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 4.203181003026182,
            "unit": "iter/sec",
            "range": "stddev: 0.037765207573679294",
            "extra": "mean: 237.9150455999934 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 4.2039687299421535,
            "unit": "iter/sec",
            "range": "stddev: 0.03724160768257808",
            "extra": "mean: 237.87046580000606 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 37.792760063631505,
            "unit": "iter/sec",
            "range": "stddev: 0.027372550225862713",
            "extra": "mean: 26.46009442857056 msec\nrounds: 35"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 51020.244842031854,
            "unit": "iter/sec",
            "range": "stddev: 4.978875006760656e-7",
            "extra": "mean: 19.600062741685885 usec\nrounds: 20704"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 51421.01309144141,
            "unit": "iter/sec",
            "range": "stddev: 5.359480324577568e-7",
            "extra": "mean: 19.447302569121135 usec\nrounds: 29851"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 51396.17340385523,
            "unit": "iter/sec",
            "range": "stddev: 9.936703776953574e-7",
            "extra": "mean: 19.45670141903969 usec\nrounds: 30866"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 51311.47343078459,
            "unit": "iter/sec",
            "range": "stddev: 0.000001300879048660061",
            "extra": "mean: 19.488818643045335 usec\nrounds: 31154"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 75.90709980547499,
            "unit": "iter/sec",
            "range": "stddev: 0.024132699805157566",
            "extra": "mean: 13.173998250001281 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 66.28688416683579,
            "unit": "iter/sec",
            "range": "stddev: 0.02576490826688331",
            "extra": "mean: 15.085940643749751 msec\nrounds: 160"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 66.23535560404244,
            "unit": "iter/sec",
            "range": "stddev: 0.02569226647124777",
            "extra": "mean: 15.097676926172772 msec\nrounds: 149"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 67.2947351593921,
            "unit": "iter/sec",
            "range": "stddev: 0.025470192191184276",
            "extra": "mean: 14.860003499997921 msec\nrounds: 154"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 71367.3545067478,
            "unit": "iter/sec",
            "range": "stddev: 5.079307352198486e-7",
            "extra": "mean: 14.012008808669652 usec\nrounds: 27473"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 52398.384781366665,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017982867946993593",
            "extra": "mean: 19.08455774300144 usec\nrounds: 28090"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 52454.40274053227,
            "unit": "iter/sec",
            "range": "stddev: 0.000001150168615658049",
            "extra": "mean: 19.064176651606132 usec\nrounds: 30212"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 70320.37161359278,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012849584126231483",
            "extra": "mean: 14.220630196537558 usec\nrounds: 29851"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 74.0974672984784,
            "unit": "iter/sec",
            "range": "stddev: 0.025744402415584358",
            "extra": "mean: 13.495737930850101 msec\nrounds: 188"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 66.10182305736491,
            "unit": "iter/sec",
            "range": "stddev: 0.025743074661625693",
            "extra": "mean: 15.128175801326595 msec\nrounds: 151"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 67.10558184814039,
            "unit": "iter/sec",
            "range": "stddev: 0.025605449825365938",
            "extra": "mean: 14.901890013605652 msec\nrounds: 147"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 75.08217849473809,
            "unit": "iter/sec",
            "range": "stddev: 0.025463412370807847",
            "extra": "mean: 13.318739813470943 msec\nrounds: 193"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 327594.9265858915,
            "unit": "iter/sec",
            "range": "stddev: 2.0957275407040718e-7",
            "extra": "mean: 3.052550326165725 usec\nrounds: 36631"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 1522.5042858681613,
            "unit": "iter/sec",
            "range": "stddev: 0.000006476438510866981",
            "extra": "mean: 656.8126009771989 usec\nrounds: 1228"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 1659.9943194962955,
            "unit": "iter/sec",
            "range": "stddev: 0.000004906708593319573",
            "extra": "mean: 602.4117000011407 usec\nrounds: 1340"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 327518.89023783343,
            "unit": "iter/sec",
            "range": "stddev: 2.4366691584666877e-7",
            "extra": "mean: 3.053259002171853 usec\nrounds: 109891"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 2609.980730996601,
            "unit": "iter/sec",
            "range": "stddev: 0.000002186517978312054",
            "extra": "mean: 383.1445911166393 usec\nrounds: 2409"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 4.931932573734784,
            "unit": "iter/sec",
            "range": "stddev: 0.0002657633484310113",
            "extra": "mean: 202.76027400000203 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 4.974817315554731,
            "unit": "iter/sec",
            "range": "stddev: 0.0013456547489277089",
            "extra": "mean: 201.01240639999105 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 2595.700582873095,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021853978498558675",
            "extra": "mean: 385.25244652568256 usec\nrounds: 2403"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 281021.36599659105,
            "unit": "iter/sec",
            "range": "stddev: 1.9917423381110348e-7",
            "extra": "mean: 3.558448292547729 usec\nrounds: 85471"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 2147.4001842199746,
            "unit": "iter/sec",
            "range": "stddev: 0.000005290532233344606",
            "extra": "mean: 465.67938633349877 usec\nrounds: 1522"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 1817.5489864625151,
            "unit": "iter/sec",
            "range": "stddev: 0.00000465343731213632",
            "extra": "mean: 550.19149824748 usec\nrounds: 1427"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 279993.97518157336,
            "unit": "iter/sec",
            "range": "stddev: 2.3067409991893012e-7",
            "extra": "mean: 3.571505420255953 usec\nrounds: 101011"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 1815.0396998931824,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029423112286042376",
            "extra": "mean: 550.9521362308776 usec\nrounds: 1725"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 6.505278357923252,
            "unit": "iter/sec",
            "range": "stddev: 0.0001880964725689168",
            "extra": "mean: 153.72132366665406 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 5.485874279137275,
            "unit": "iter/sec",
            "range": "stddev: 0.0001415662381546752",
            "extra": "mean: 182.28635020000183 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 1811.9749163508372,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031697686900856285",
            "extra": "mean: 551.8840194619883 usec\nrounds: 1747"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 17262.966230700116,
            "unit": "iter/sec",
            "range": "stddev: 9.557387897977718e-7",
            "extra": "mean: 57.927472407471896 usec\nrounds: 7502"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 1510.0559909752799,
            "unit": "iter/sec",
            "range": "stddev: 0.000005650645376238544",
            "extra": "mean: 662.2271001713938 usec\nrounds: 1178"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 1511.1579827829673,
            "unit": "iter/sec",
            "range": "stddev: 0.000005520374642435694",
            "extra": "mean: 661.7441798893769 usec\nrounds: 1273"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 19864.483112271588,
            "unit": "iter/sec",
            "range": "stddev: 9.180294381192951e-7",
            "extra": "mean: 50.34110348344451 usec\nrounds: 8842"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 32.091138514685234,
            "unit": "iter/sec",
            "range": "stddev: 0.030656338330233995",
            "extra": "mean: 31.161250310343146 msec\nrounds: 29"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 4.1742398892202415,
            "unit": "iter/sec",
            "range": "stddev: 0.038630228980160795",
            "extra": "mean: 239.56457379999847 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 4.526643108844998,
            "unit": "iter/sec",
            "range": "stddev: 0.0002037874867909964",
            "extra": "mean: 220.91425720000188 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 38.12231425715696,
            "unit": "iter/sec",
            "range": "stddev: 0.027716944223220144",
            "extra": "mean: 26.231356083327583 msec\nrounds: 36"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 17091.424425087167,
            "unit": "iter/sec",
            "range": "stddev: 9.755384294390421e-7",
            "extra": "mean: 58.50887410719134 usec\nrounds: 7705"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 1497.0467002402786,
            "unit": "iter/sec",
            "range": "stddev: 0.000005785429884543473",
            "extra": "mean: 667.9818337260276 usec\nrounds: 1275"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 1506.7892305029206,
            "unit": "iter/sec",
            "range": "stddev: 0.000004916733730486102",
            "extra": "mean: 663.6628267287458 usec\nrounds: 1085"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 19891.83343703869,
            "unit": "iter/sec",
            "range": "stddev: 9.798415448225493e-7",
            "extra": "mean: 50.27188686076544 usec\nrounds: 8874"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 32.21132968668864,
            "unit": "iter/sec",
            "range": "stddev: 0.030261756773649565",
            "extra": "mean: 31.044977333340285 msec\nrounds: 30"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 4.188910932176464,
            "unit": "iter/sec",
            "range": "stddev: 0.03935127816755426",
            "extra": "mean: 238.72553419998894 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 4.190846401066614,
            "unit": "iter/sec",
            "range": "stddev: 0.03909070356425085",
            "extra": "mean: 238.6152829999901 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 34.58316474439402,
            "unit": "iter/sec",
            "range": "stddev: 0.03064122477688167",
            "extra": "mean: 28.91580361112271 msec\nrounds: 36"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 52431.39685584535,
            "unit": "iter/sec",
            "range": "stddev: 5.735035838479454e-7",
            "extra": "mean: 19.072541644263183 usec\nrounds: 30304"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 51784.90405124726,
            "unit": "iter/sec",
            "range": "stddev: 9.660012690960658e-7",
            "extra": "mean: 19.31064696017168 usec\nrounds: 30396"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 51476.74422107577,
            "unit": "iter/sec",
            "range": "stddev: 0.000001814625370764666",
            "extra": "mean: 19.426248010272896 usec\nrounds: 30031"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 52007.66599029942,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010972347829319059",
            "extra": "mean: 19.22793459307561 usec\nrounds: 27933"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 65.37190193952532,
            "unit": "iter/sec",
            "range": "stddev: 0.026648476690956293",
            "extra": "mean: 15.297092027781092 msec\nrounds: 144"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 65.61705664797671,
            "unit": "iter/sec",
            "range": "stddev: 0.026681208181101698",
            "extra": "mean: 15.239939904113863 msec\nrounds: 146"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 65.6900331380933,
            "unit": "iter/sec",
            "range": "stddev: 0.026613734723239243",
            "extra": "mean: 15.223009522583197 msec\nrounds: 155"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 71.67796933757724,
            "unit": "iter/sec",
            "range": "stddev: 0.025908475928603993",
            "extra": "mean: 13.951288090910648 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys0]",
            "value": 72332.81598754424,
            "unit": "iter/sec",
            "range": "stddev: 3.994679047293565e-7",
            "extra": "mean: 13.824983672309962 usec\nrounds: 31848"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys1]",
            "value": 52400.16281510962,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015645619470093622",
            "extra": "mean: 19.083910168913622 usec\nrounds: 26316"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys2]",
            "value": 52775.94062672656,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020837271594405575",
            "extra": "mean: 18.948027986328007 usec\nrounds: 20081"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys3]",
            "value": 70666.90025225845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014370450216804185",
            "extra": "mean: 14.150896621053374 usec\nrounds: 28410"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys4]",
            "value": 69.50770909793262,
            "unit": "iter/sec",
            "range": "stddev: 0.027430068672996046",
            "extra": "mean: 14.386893381726246 msec\nrounds: 186"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys5]",
            "value": 61.6148814531856,
            "unit": "iter/sec",
            "range": "stddev: 0.027991382635236678",
            "extra": "mean: 16.229845394732934 msec\nrounds: 152"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys6]",
            "value": 64.19650951606768,
            "unit": "iter/sec",
            "range": "stddev: 0.027047070016845264",
            "extra": "mean: 15.577170901319972 msec\nrounds: 152"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys7]",
            "value": 79.05496260342241,
            "unit": "iter/sec",
            "range": "stddev: 0.026343349596014944",
            "extra": "mean: 12.649427272725172 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 338521.57438508,
            "unit": "iter/sec",
            "range": "stddev: 1.8005960839289848e-7",
            "extra": "mean: 2.95402147356926 usec\nrounds: 107527"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 1626.7548104977454,
            "unit": "iter/sec",
            "range": "stddev: 0.000005367943680296816",
            "extra": "mean: 614.7207886196602 usec\nrounds: 1353"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 1656.6391117943806,
            "unit": "iter/sec",
            "range": "stddev: 0.000005280346408767362",
            "extra": "mean: 603.631770420327 usec\nrounds: 1163"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 336721.5023508048,
            "unit": "iter/sec",
            "range": "stddev: 1.804699219811366e-7",
            "extra": "mean: 2.969813311649386 usec\nrounds: 95239"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 2607.473302760038,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022391388882063426",
            "extra": "mean: 383.51303499118836 usec\nrounds: 2372"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 4.9151928980128865,
            "unit": "iter/sec",
            "range": "stddev: 0.0008000711688978942",
            "extra": "mean: 203.45081480002136 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 5.011046214977111,
            "unit": "iter/sec",
            "range": "stddev: 0.00027542881127730063",
            "extra": "mean: 199.55912540003737 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 2605.1506686303965,
            "unit": "iter/sec",
            "range": "stddev: 0.000002289198097849683",
            "extra": "mean: 383.8549578116068 usec\nrounds: 2323"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 288256.091691188,
            "unit": "iter/sec",
            "range": "stddev: 2.1964980272279104e-7",
            "extra": "mean: 3.469137440020908 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 2138.4144914710814,
            "unit": "iter/sec",
            "range": "stddev: 0.0000050125316431973565",
            "extra": "mean: 467.6361874596487 usec\nrounds: 1595"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 1808.6537158208503,
            "unit": "iter/sec",
            "range": "stddev: 0.000004877138329479134",
            "extra": "mean: 552.8974348448752 usec\nrounds: 1389"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 289445.4854892692,
            "unit": "iter/sec",
            "range": "stddev: 2.1071913260996116e-7",
            "extra": "mean: 3.4548820076071753 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 1814.3803930780498,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031158107775351236",
            "extra": "mean: 551.1523403885144 usec\nrounds: 1701"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 6.497966503620234,
            "unit": "iter/sec",
            "range": "stddev: 0.0000517204869909932",
            "extra": "mean: 153.894298999982 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 5.484786067849661,
            "unit": "iter/sec",
            "range": "stddev: 0.0002010225926497749",
            "extra": "mean: 182.32251680001355 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 1813.3848268455492,
            "unit": "iter/sec",
            "range": "stddev: 0.000003221983553752892",
            "extra": "mean: 551.4549284828513 usec\nrounds: 1636"
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
        "date": 1669515417962,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 28.51245332246095,
            "unit": "iter/sec",
            "range": "stddev: 0.001052307104315946",
            "extra": "mean: 35.07239411111077 msec\nrounds: 27"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 1181294.8438702393,
            "unit": "iter/sec",
            "range": "stddev: 2.1517325909080487e-7",
            "extra": "mean: 846.5287097366237 nsec\nrounds: 57472"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 36.71957864839441,
            "unit": "iter/sec",
            "range": "stddev: 0.00015806751320293513",
            "extra": "mean: 27.233427964286452 msec\nrounds: 28"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 1705.0857226304918,
            "unit": "iter/sec",
            "range": "stddev: 0.000010897244250800254",
            "extra": "mean: 586.4807773167364 usec\nrounds: 1446"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 13964.794674160465,
            "unit": "iter/sec",
            "range": "stddev: 0.000007753793284419489",
            "extra": "mean: 71.60864325848874 usec\nrounds: 10153"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 14112.89337028373,
            "unit": "iter/sec",
            "range": "stddev: 0.000002956482744468019",
            "extra": "mean: 70.85719233914227 usec\nrounds: 3681"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 14096.182651490535,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038051223067555187",
            "extra": "mean: 70.94119200379825 usec\nrounds: 10505"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 14061.595920722339,
            "unit": "iter/sec",
            "range": "stddev: 0.000003373836887960851",
            "extra": "mean: 71.1156831442096 usec\nrounds: 10560"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 14135.555039822662,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027385732978163173",
            "extra": "mean: 70.74359635562959 usec\nrounds: 10482"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 13560.955014230089,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028480822917636567",
            "extra": "mean: 73.74111918745083 usec\nrounds: 10236"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 13495.17101437873,
            "unit": "iter/sec",
            "range": "stddev: 0.000003457505292422944",
            "extra": "mean: 74.10058004707963 usec\nrounds: 10194"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 13499.92814994343,
            "unit": "iter/sec",
            "range": "stddev: 0.000004343116186777136",
            "extra": "mean: 74.07446831516584 usec\nrounds: 10352"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 13459.774024084638,
            "unit": "iter/sec",
            "range": "stddev: 0.000005297380790298467",
            "extra": "mean: 74.29545237614101 usec\nrounds: 9470"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 13538.376925580484,
            "unit": "iter/sec",
            "range": "stddev: 0.000003509857821710997",
            "extra": "mean: 73.86409800058976 usec\nrounds: 10153"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 12917.474082278126,
            "unit": "iter/sec",
            "range": "stddev: 0.000006460321814360065",
            "extra": "mean: 77.41451568863067 usec\nrounds: 10549"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 12971.948794553651,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036222415465649858",
            "extra": "mean: 77.08941931838768 usec\nrounds: 10684"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 12937.095910230759,
            "unit": "iter/sec",
            "range": "stddev: 0.000004570570591826914",
            "extra": "mean: 77.29710028733666 usec\nrounds: 10450"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 17192336.85284444,
            "unit": "iter/sec",
            "range": "stddev: 3.411906956640708e-9",
            "extra": "mean: 58.16544944174805 nsec\nrounds: 172414"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 16441928.147977436,
            "unit": "iter/sec",
            "range": "stddev: 3.844016568043514e-9",
            "extra": "mean: 60.82011738518443 nsec\nrounds: 161265"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 14134824.322196897,
            "unit": "iter/sec",
            "range": "stddev: 3.8373375003724976e-9",
            "extra": "mean: 70.74725353536245 nsec\nrounds: 136987"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 17082906.86986023,
            "unit": "iter/sec",
            "range": "stddev: 3.855638901298779e-9",
            "extra": "mean: 58.538046692976664 nsec\nrounds: 169492"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 16952457.420003098,
            "unit": "iter/sec",
            "range": "stddev: 3.2664042545006797e-9",
            "extra": "mean: 58.988497963693966 nsec\nrounds: 166667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 16781752.96106628,
            "unit": "iter/sec",
            "range": "stddev: 3.675433134143516e-9",
            "extra": "mean: 59.58853060933612 nsec\nrounds: 169492"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 49568.495108423354,
            "unit": "iter/sec",
            "range": "stddev: 7.62128884305487e-7",
            "extra": "mean: 20.174104495459382 usec\nrounds: 14125"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 3980.9996886252134,
            "unit": "iter/sec",
            "range": "stddev: 0.000013029223130394608",
            "extra": "mean: 251.1931871929729 usec\nrounds: 2858"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 50130.939006788045,
            "unit": "iter/sec",
            "range": "stddev: 7.267178409285977e-7",
            "extra": "mean: 19.947761199218583 usec\nrounds: 18149"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 4002.0548852253955,
            "unit": "iter/sec",
            "range": "stddev: 0.00001168959440501193",
            "extra": "mean: 249.87163561693134 usec\nrounds: 3167"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 49735.63777976479,
            "unit": "iter/sec",
            "range": "stddev: 9.264762967097575e-7",
            "extra": "mean: 20.10630695896807 usec\nrounds: 18149"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 4011.0519610198644,
            "unit": "iter/sec",
            "range": "stddev: 0.0000047410472733465075",
            "extra": "mean: 249.31115570632906 usec\nrounds: 3102"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 3955.0128868022725,
            "unit": "iter/sec",
            "range": "stddev: 0.00001724349329428081",
            "extra": "mean: 252.84367677712555 usec\nrounds: 3165"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 58459.47800364679,
            "unit": "iter/sec",
            "range": "stddev: 7.113512762043621e-7",
            "extra": "mean: 17.105866048575024 usec\nrounds: 21142"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 3961.736704036715,
            "unit": "iter/sec",
            "range": "stddev: 0.000015368951086893",
            "extra": "mean: 252.4145531885232 usec\nrounds: 94"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 57760.86889907231,
            "unit": "iter/sec",
            "range": "stddev: 6.970488354113764e-7",
            "extra": "mean: 17.3127589501352 usec\nrounds: 20921"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 4021.5153211471816,
            "unit": "iter/sec",
            "range": "stddev: 0.000004723369986951789",
            "extra": "mean: 248.6624866854266 usec\nrounds: 2854"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 51614.32373013425,
            "unit": "iter/sec",
            "range": "stddev: 0.000012328189041693752",
            "extra": "mean: 19.374466770668253 usec\nrounds: 21186"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 50040.7610213368,
            "unit": "iter/sec",
            "range": "stddev: 7.719325540427966e-7",
            "extra": "mean: 19.983708872325334 usec\nrounds: 18315"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 4015.1988166271653,
            "unit": "iter/sec",
            "range": "stddev: 0.000011091120170397085",
            "extra": "mean: 249.05366973584057 usec\nrounds: 3258"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 50200.82133037844,
            "unit": "iter/sec",
            "range": "stddev: 7.535060704268407e-7",
            "extra": "mean: 19.919992810851912 usec\nrounds: 18083"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 4042.3624781928593,
            "unit": "iter/sec",
            "range": "stddev: 0.000008322953885518638",
            "extra": "mean: 247.38009156641755 usec\nrounds: 3178"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 49609.823549929606,
            "unit": "iter/sec",
            "range": "stddev: 8.113117753687858e-7",
            "extra": "mean: 20.157298060001246 usec\nrounds: 18248"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 4016.1182239053137,
            "unit": "iter/sec",
            "range": "stddev: 0.0000049567038555646335",
            "extra": "mean: 248.99665404460876 usec\nrounds: 2324"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 4023.5624827846304,
            "unit": "iter/sec",
            "range": "stddev: 0.000004910243829448199",
            "extra": "mean: 248.53596887798776 usec\nrounds: 3181"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 58309.04920577219,
            "unit": "iter/sec",
            "range": "stddev: 7.154010015734443e-7",
            "extra": "mean: 17.149996674975913 usec\nrounds: 21053"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 3997.9525559800163,
            "unit": "iter/sec",
            "range": "stddev: 0.000013890354196570608",
            "extra": "mean: 250.12803078521537 usec\nrounds: 2761"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 58015.88662545005,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016397479716784882",
            "extra": "mean: 17.236658063264453 usec\nrounds: 21232"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 4025.8338930575737,
            "unit": "iter/sec",
            "range": "stddev: 0.000004884023787979574",
            "extra": "mean: 248.39574273654685 usec\nrounds: 3063"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 58090.25242592505,
            "unit": "iter/sec",
            "range": "stddev: 8.175454463584217e-7",
            "extra": "mean: 17.214592091421363 usec\nrounds: 21142"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 49558.01858735795,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010519117455897981",
            "extra": "mean: 20.17836928321214 usec\nrounds: 16421"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 4028.132828297288,
            "unit": "iter/sec",
            "range": "stddev: 0.000005189750950779694",
            "extra": "mean: 248.2539783631477 usec\nrounds: 3189"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 49527.77147593157,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011153861267903468",
            "extra": "mean: 20.19069241760571 usec\nrounds: 17514"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 3986.5077833482055,
            "unit": "iter/sec",
            "range": "stddev: 0.000004764236291866122",
            "extra": "mean: 250.84611754103125 usec\nrounds: 2765"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 48985.447930494076,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020619558688712813",
            "extra": "mean: 20.414225902739723 usec\nrounds: 18083"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 3986.590629049195,
            "unit": "iter/sec",
            "range": "stddev: 0.000011646032062481784",
            "extra": "mean: 250.84090468513963 usec\nrounds: 3095"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 4028.5021839532897,
            "unit": "iter/sec",
            "range": "stddev: 0.000004994716787782324",
            "extra": "mean: 248.231217047193 usec\nrounds: 3285"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 56952.43949697847,
            "unit": "iter/sec",
            "range": "stddev: 9.144457325938916e-7",
            "extra": "mean: 17.558510378700344 usec\nrounds: 21053"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 4027.216484270106,
            "unit": "iter/sec",
            "range": "stddev: 0.000004986322554954383",
            "extra": "mean: 248.31046553019866 usec\nrounds: 2756"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 57169.36585946987,
            "unit": "iter/sec",
            "range": "stddev: 9.269623207060092e-7",
            "extra": "mean: 17.491885469888487 usec\nrounds: 20833"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 3998.8331937875737,
            "unit": "iter/sec",
            "range": "stddev: 0.000005291605525831505",
            "extra": "mean: 250.07294666693267 usec\nrounds: 300"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 57818.286991942914,
            "unit": "iter/sec",
            "range": "stddev: 8.971477341979208e-7",
            "extra": "mean: 17.29556602289777 usec\nrounds: 20243"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 49940.93393604933,
            "unit": "iter/sec",
            "range": "stddev: 7.998963067218705e-7",
            "extra": "mean: 20.023654368989696 usec\nrounds: 17212"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 3929.557935025579,
            "unit": "iter/sec",
            "range": "stddev: 0.000014760286330147734",
            "extra": "mean: 254.4815514963239 usec\nrounds: 3175"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 49556.36678090022,
            "unit": "iter/sec",
            "range": "stddev: 9.378585504582048e-7",
            "extra": "mean: 20.179041866027497 usec\nrounds: 17986"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 4035.4259988655126,
            "unit": "iter/sec",
            "range": "stddev: 0.000005015097666045573",
            "extra": "mean: 247.8053123217058 usec\nrounds: 3157"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 49266.340237254146,
            "unit": "iter/sec",
            "range": "stddev: 9.358091232934724e-7",
            "extra": "mean: 20.297834082748075 usec\nrounds: 17123"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 3946.775953651723,
            "unit": "iter/sec",
            "range": "stddev: 0.00001109259623913603",
            "extra": "mean: 253.37136228236065 usec\nrounds: 3155"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 4042.6527110568154,
            "unit": "iter/sec",
            "range": "stddev: 0.000004536867822173263",
            "extra": "mean: 247.36233148718426 usec\nrounds: 3249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 57605.47301560548,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015804704635927205",
            "extra": "mean: 17.35946165617106 usec\nrounds: 20877"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 4047.884543815625,
            "unit": "iter/sec",
            "range": "stddev: 0.000004988117039036867",
            "extra": "mean: 247.0426192189212 usec\nrounds: 3049"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 57775.85806726722,
            "unit": "iter/sec",
            "range": "stddev: 7.830634435215908e-7",
            "extra": "mean: 17.30826738801042 usec\nrounds: 20704"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 3997.0480528048256,
            "unit": "iter/sec",
            "range": "stddev: 0.000004758406773870407",
            "extra": "mean: 250.1846329563828 usec\nrounds: 3095"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 57130.59225419804,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020297197974936126",
            "extra": "mean: 17.503756928522275 usec\nrounds: 20747"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 49597.743267597354,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013250029499701424",
            "extra": "mean: 20.162207675551823 usec\nrounds: 16155"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 4026.4010885141884,
            "unit": "iter/sec",
            "range": "stddev: 0.000005003578627722603",
            "extra": "mean: 248.36075145435083 usec\nrounds: 3094"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 49957.51133948792,
            "unit": "iter/sec",
            "range": "stddev: 7.681520717957552e-7",
            "extra": "mean: 20.01700991877812 usec\nrounds: 18450"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 4043.2334187978063,
            "unit": "iter/sec",
            "range": "stddev: 0.000005066909260269276",
            "extra": "mean: 247.3268041738077 usec\nrounds: 3115"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 49124.514747551206,
            "unit": "iter/sec",
            "range": "stddev: 8.921224347053195e-7",
            "extra": "mean: 20.356435175776443 usec\nrounds: 18018"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 3952.538108627569,
            "unit": "iter/sec",
            "range": "stddev: 0.000011315553313794658",
            "extra": "mean: 253.00198822048242 usec\nrounds: 3056"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 4036.5666606125624,
            "unit": "iter/sec",
            "range": "stddev: 0.000007052976401093001",
            "extra": "mean: 247.7352869599945 usec\nrounds: 3213"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 57167.41548682567,
            "unit": "iter/sec",
            "range": "stddev: 6.30056029858961e-7",
            "extra": "mean: 17.492482238075844 usec\nrounds: 20409"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 4045.8913082878166,
            "unit": "iter/sec",
            "range": "stddev: 0.000005073257464510279",
            "extra": "mean: 247.16432642457482 usec\nrounds: 3088"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 58605.89009737932,
            "unit": "iter/sec",
            "range": "stddev: 9.553717694028753e-7",
            "extra": "mean: 17.063131339501947 usec\nrounds: 18692"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 3949.7969109810265,
            "unit": "iter/sec",
            "range": "stddev: 0.000019824140760287752",
            "extra": "mean: 253.17757407218843 usec\nrounds: 54"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 57934.874786709,
            "unit": "iter/sec",
            "range": "stddev: 8.856789935789051e-7",
            "extra": "mean: 17.26076052950084 usec\nrounds: 20704"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 49055.69979972955,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015846356058331373",
            "extra": "mean: 20.384991022093487 usec\nrounds: 17153"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 4028.6138725154674,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048058943497740184",
            "extra": "mean: 248.22433512983952 usec\nrounds: 2784"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 49010.37404296934,
            "unit": "iter/sec",
            "range": "stddev: 0.000001087280782188257",
            "extra": "mean: 20.403843462269034 usec\nrounds: 18149"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 4009.840741059375,
            "unit": "iter/sec",
            "range": "stddev: 0.00003718294776861494",
            "extra": "mean: 249.38646309823423 usec\nrounds: 3157"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 49367.44297938485,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011834250641764415",
            "extra": "mean: 20.25626485085699 usec\nrounds: 18248"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 3949.8409720136847,
            "unit": "iter/sec",
            "range": "stddev: 0.000011337675356270755",
            "extra": "mean: 253.17474984067164 usec\nrounds: 3142"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 4011.847671847455,
            "unit": "iter/sec",
            "range": "stddev: 0.000007295908930946474",
            "extra": "mean: 249.26170727202617 usec\nrounds: 3259"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 57275.101441616265,
            "unit": "iter/sec",
            "range": "stddev: 0.000001509439739884196",
            "extra": "mean: 17.45959369481617 usec\nrounds: 14750"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 4000.243521452465,
            "unit": "iter/sec",
            "range": "stddev: 0.000005534117840272645",
            "extra": "mean: 249.98478083576916 usec\nrounds: 3016"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 57773.473522611996,
            "unit": "iter/sec",
            "range": "stddev: 9.182516912627869e-7",
            "extra": "mean: 17.30898177013036 usec\nrounds: 20790"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 4009.9061843403038,
            "unit": "iter/sec",
            "range": "stddev: 0.000005146994827698942",
            "extra": "mean: 249.38239301090195 usec\nrounds: 3033"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 58227.63838998623,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010834014756628215",
            "extra": "mean: 17.17397489663562 usec\nrounds: 20834"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 157507.49983948236,
            "unit": "iter/sec",
            "range": "stddev: 4.5177249335502647e-7",
            "extra": "mean: 6.34890402691371 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 156674.5637735591,
            "unit": "iter/sec",
            "range": "stddev: 4.07083178901461e-7",
            "extra": "mean: 6.3826569923966385 usec\nrounds: 71943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 146552.6249787812,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032812551469832002",
            "extra": "mean: 6.823487468373808 usec\nrounds: 79359"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 155378.73177713578,
            "unit": "iter/sec",
            "range": "stddev: 4.612810263742491e-7",
            "extra": "mean: 6.4358872579442155 usec\nrounds: 71943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 154629.66328494443,
            "unit": "iter/sec",
            "range": "stddev: 5.001896341932197e-7",
            "extra": "mean: 6.467064460699536 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 155104.89671975558,
            "unit": "iter/sec",
            "range": "stddev: 4.5042755282815915e-7",
            "extra": "mean: 6.447249707446733 usec\nrounds: 23095"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 157694.0417427662,
            "unit": "iter/sec",
            "range": "stddev: 3.8495345463769336e-7",
            "extra": "mean: 6.3413936820214225 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 158364.43677288436,
            "unit": "iter/sec",
            "range": "stddev: 4.367785465905387e-7",
            "extra": "mean: 6.31454902614362 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 155541.95115311298,
            "unit": "iter/sec",
            "range": "stddev: 4.5903529240678607e-7",
            "extra": "mean: 6.429133700499977 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 156570.83413354738,
            "unit": "iter/sec",
            "range": "stddev: 4.3009886189427046e-7",
            "extra": "mean: 6.386885562269204 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 154456.90732437992,
            "unit": "iter/sec",
            "range": "stddev: 4.866545646148783e-7",
            "extra": "mean: 6.474297701040121 usec\nrounds: 70423"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 156838.52596233264,
            "unit": "iter/sec",
            "range": "stddev: 4.90803944241592e-7",
            "extra": "mean: 6.375984432805537 usec\nrounds: 52354"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 158151.65855407968,
            "unit": "iter/sec",
            "range": "stddev: 4.4478187402129855e-7",
            "extra": "mean: 6.323044659427659 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 153769.9421900845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011781064261523893",
            "extra": "mean: 6.503221538340949 usec\nrounds: 46949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 149092.51346274454,
            "unit": "iter/sec",
            "range": "stddev: 0.000002035802394698535",
            "extra": "mean: 6.707244896303137 usec\nrounds: 98"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 156505.0768009315,
            "unit": "iter/sec",
            "range": "stddev: 4.138588499315218e-7",
            "extra": "mean: 6.38956908261808 usec\nrounds: 71429"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 155968.99375081476,
            "unit": "iter/sec",
            "range": "stddev: 4.6374508710477265e-7",
            "extra": "mean: 6.411530753334595 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 154815.17881203257,
            "unit": "iter/sec",
            "range": "stddev: 4.858295589883038e-7",
            "extra": "mean: 6.459314956540153 usec\nrounds: 72464"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 156874.32408131883,
            "unit": "iter/sec",
            "range": "stddev: 3.97418476494306e-7",
            "extra": "mean: 6.374529457616218 usec\nrounds: 70423"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 157484.28705035849,
            "unit": "iter/sec",
            "range": "stddev: 5.128446571159524e-7",
            "extra": "mean: 6.349839839451613 usec\nrounds: 80001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 157314.8761279542,
            "unit": "iter/sec",
            "range": "stddev: 4.014837103072208e-7",
            "extra": "mean: 6.356677922732725 usec\nrounds: 72464"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 157781.999067847,
            "unit": "iter/sec",
            "range": "stddev: 4.518169609802104e-7",
            "extra": "mean: 6.33785860179142 usec\nrounds: 80001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 153829.51132874773,
            "unit": "iter/sec",
            "range": "stddev: 5.584375462019896e-7",
            "extra": "mean: 6.5007032224324535 usec\nrounds: 74069"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 155843.6592472567,
            "unit": "iter/sec",
            "range": "stddev: 4.777886612843611e-7",
            "extra": "mean: 6.416687113419424 usec\nrounds: 78741"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 156746.0453450617,
            "unit": "iter/sec",
            "range": "stddev: 5.314936971217193e-7",
            "extra": "mean: 6.379746281946661 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 155985.48633303348,
            "unit": "iter/sec",
            "range": "stddev: 5.71961158393146e-7",
            "extra": "mean: 6.4108528524568715 usec\nrounds: 70922"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 156852.07805462848,
            "unit": "iter/sec",
            "range": "stddev: 5.618479437899643e-7",
            "extra": "mean: 6.375433544793202 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 154823.37680511473,
            "unit": "iter/sec",
            "range": "stddev: 5.704626153084952e-7",
            "extra": "mean: 6.458972931838056 usec\nrounds: 68494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 156705.2740760681,
            "unit": "iter/sec",
            "range": "stddev: 5.098055410429689e-7",
            "extra": "mean: 6.381406151745592 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 155761.0329028883,
            "unit": "iter/sec",
            "range": "stddev: 6.27492333352107e-7",
            "extra": "mean: 6.420090964750252 usec\nrounds: 68961"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 155369.60531610894,
            "unit": "iter/sec",
            "range": "stddev: 5.549451685512339e-7",
            "extra": "mean: 6.436265304049908 usec\nrounds: 72464"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 155688.06035748834,
            "unit": "iter/sec",
            "range": "stddev: 6.196147507421008e-7",
            "extra": "mean: 6.423100125364891 usec\nrounds: 22322"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 154715.1970838233,
            "unit": "iter/sec",
            "range": "stddev: 5.360111340649927e-7",
            "extra": "mean: 6.463489164921588 usec\nrounds: 71943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 157634.01617139706,
            "unit": "iter/sec",
            "range": "stddev: 5.130340203877292e-7",
            "extra": "mean: 6.343808425921788 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 151305.97801836705,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013584190138829614",
            "extra": "mean: 6.6091241938808905 usec\nrounds: 69931"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 156254.35646511984,
            "unit": "iter/sec",
            "range": "stddev: 5.765324135869574e-7",
            "extra": "mean: 6.399821564163728 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 211478.3619465377,
            "unit": "iter/sec",
            "range": "stddev: 3.019417950057309e-7",
            "extra": "mean: 4.72861616098957 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 156099.5160810489,
            "unit": "iter/sec",
            "range": "stddev: 4.244515412256253e-7",
            "extra": "mean: 6.406169763401361 usec\nrounds: 63288"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 157089.64819429262,
            "unit": "iter/sec",
            "range": "stddev: 4.12959524490256e-7",
            "extra": "mean: 6.365791836029664 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 157020.71994298027,
            "unit": "iter/sec",
            "range": "stddev: 5.080965742041057e-7",
            "extra": "mean: 6.368586262775607 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 156077.02998530577,
            "unit": "iter/sec",
            "range": "stddev: 5.387940090152697e-7",
            "extra": "mean: 6.407092703482038 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 143470.6506973444,
            "unit": "iter/sec",
            "range": "stddev: 0.000002360417385041067",
            "extra": "mean: 6.970066666175019 usec\nrounds: 60"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 156773.0390155529,
            "unit": "iter/sec",
            "range": "stddev: 4.4141789544903094e-7",
            "extra": "mean: 6.378647797347308 usec\nrounds: 68966"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 212119.01063277762,
            "unit": "iter/sec",
            "range": "stddev: 3.5947391020069553e-7",
            "extra": "mean: 4.714334641750754 usec\nrounds: 68028"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 145881.10459464835,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032564373195618025",
            "extra": "mean: 6.854897368501862 usec\nrounds: 65360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 157355.1839465003,
            "unit": "iter/sec",
            "range": "stddev: 3.9773014221947274e-7",
            "extra": "mean: 6.355049607644279 usec\nrounds: 66663"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 152800.48514003184,
            "unit": "iter/sec",
            "range": "stddev: 4.956058001558408e-7",
            "extra": "mean: 6.544481839069845 usec\nrounds: 65360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 157732.04044628434,
            "unit": "iter/sec",
            "range": "stddev: 5.233686631039281e-7",
            "extra": "mean: 6.33986599786966 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 158678.36706101024,
            "unit": "iter/sec",
            "range": "stddev: 3.5532152217570057e-7",
            "extra": "mean: 6.302056282287743 usec\nrounds: 68494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 155614.59873583046,
            "unit": "iter/sec",
            "range": "stddev: 4.545397414981409e-7",
            "extra": "mean: 6.42613230457631 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 207470.1519418615,
            "unit": "iter/sec",
            "range": "stddev: 3.3457556966437055e-7",
            "extra": "mean: 4.819970442207156 usec\nrounds: 69931"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 154635.68401610907,
            "unit": "iter/sec",
            "range": "stddev: 4.496196808405575e-7",
            "extra": "mean: 6.4668126659292025 usec\nrounds: 66667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 155370.86415881812,
            "unit": "iter/sec",
            "range": "stddev: 4.4827966179546926e-7",
            "extra": "mean: 6.436213156269844 usec\nrounds: 67115"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 151709.81430351888,
            "unit": "iter/sec",
            "range": "stddev: 6.177049416984126e-7",
            "extra": "mean: 6.591531369218775 usec\nrounds: 64936"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 156018.9602806454,
            "unit": "iter/sec",
            "range": "stddev: 3.629332208081309e-7",
            "extra": "mean: 6.409477400703156 usec\nrounds: 70423"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 152562.6499984813,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012571371158776918",
            "extra": "mean: 6.554684256008628 usec\nrounds: 45046"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 155758.23483448251,
            "unit": "iter/sec",
            "range": "stddev: 4.266113875696992e-7",
            "extra": "mean: 6.4202062963968265 usec\nrounds: 70423"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 210478.5505275692,
            "unit": "iter/sec",
            "range": "stddev: 3.7378818882332974e-7",
            "extra": "mean: 4.7510779482920125 usec\nrounds: 69931"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 154375.8838090648,
            "unit": "iter/sec",
            "range": "stddev: 4.8888284733278e-7",
            "extra": "mean: 6.477695708202844 usec\nrounds: 64517"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 156830.64434348975,
            "unit": "iter/sec",
            "range": "stddev: 5.199117536049742e-7",
            "extra": "mean: 6.376304861757786 usec\nrounds: 66663"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 156147.09383293017,
            "unit": "iter/sec",
            "range": "stddev: 5.22967545573278e-7",
            "extra": "mean: 6.40421781445354 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 153907.43209177215,
            "unit": "iter/sec",
            "range": "stddev: 5.723566547749729e-7",
            "extra": "mean: 6.497412024935343 usec\nrounds: 67110"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 155752.48150241608,
            "unit": "iter/sec",
            "range": "stddev: 5.620246046660079e-7",
            "extra": "mean: 6.420443452032497 usec\nrounds: 64936"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 153648.8681870768,
            "unit": "iter/sec",
            "range": "stddev: 5.374348866139327e-7",
            "extra": "mean: 6.508346021673518 usec\nrounds: 67568"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 207269.41897143127,
            "unit": "iter/sec",
            "range": "stddev: 6.013820130119777e-7",
            "extra": "mean: 4.824638410058137 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 143329.0259407008,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033558688666074165",
            "extra": "mean: 6.976953854509049 usec\nrounds: 69931"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 154454.16831145412,
            "unit": "iter/sec",
            "range": "stddev: 5.437001762993768e-7",
            "extra": "mean: 6.4744125129955545 usec\nrounds: 66667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 154544.24076613827,
            "unit": "iter/sec",
            "range": "stddev: 4.971532179398134e-7",
            "extra": "mean: 6.4706390548272505 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 146652.42925359088,
            "unit": "iter/sec",
            "range": "stddev: 0.000001427145446146624",
            "extra": "mean: 6.818843745648451 usec\nrounds: 64"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 155323.3457279639,
            "unit": "iter/sec",
            "range": "stddev: 5.888264755067086e-7",
            "extra": "mean: 6.4381822018656365 usec\nrounds: 65356"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 152564.76010363182,
            "unit": "iter/sec",
            "range": "stddev: 5.777905253565299e-7",
            "extra": "mean: 6.554593598946018 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 208067.107041036,
            "unit": "iter/sec",
            "range": "stddev: 4.5223243630625007e-7",
            "extra": "mean: 4.806141702170998 usec\nrounds: 68023"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 1787391.2457797413,
            "unit": "iter/sec",
            "range": "stddev: 2.317742356657692e-8",
            "extra": "mean: 559.4745987266422 nsec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 4335.457732829372,
            "unit": "iter/sec",
            "range": "stddev: 0.000004485852180368795",
            "extra": "mean: 230.6561525044296 usec\nrounds: 3154"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 1714313.7971057275,
            "unit": "iter/sec",
            "range": "stddev: 3.087414808660581e-8",
            "extra": "mean: 583.3237775301301 nsec\nrounds: 84746"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 4350.770314119549,
            "unit": "iter/sec",
            "range": "stddev: 0.000004662672304175639",
            "extra": "mean: 229.84435578102145 usec\nrounds: 3252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 1779081.3931063497,
            "unit": "iter/sec",
            "range": "stddev: 2.4067417958355996e-8",
            "extra": "mean: 562.0878301999538 nsec\nrounds: 86957"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 4333.35290316415,
            "unit": "iter/sec",
            "range": "stddev: 0.000009137180938703796",
            "extra": "mean: 230.76818859359798 usec\nrounds: 3314"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 4430.971370195145,
            "unit": "iter/sec",
            "range": "stddev: 0.000004465127520269505",
            "extra": "mean: 225.68414833968086 usec\nrounds: 3465"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 1792856.1751156847,
            "unit": "iter/sec",
            "range": "stddev: 2.5866084422964276e-8",
            "extra": "mean: 557.7692253733301 nsec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 4435.2215895352765,
            "unit": "iter/sec",
            "range": "stddev: 0.000004496824342004157",
            "extra": "mean: 225.46787794311314 usec\nrounds: 3015"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 1719243.8023967457,
            "unit": "iter/sec",
            "range": "stddev: 2.8497832683596862e-8",
            "extra": "mean: 581.6510715964162 nsec\nrounds: 83334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 4419.882102267841,
            "unit": "iter/sec",
            "range": "stddev: 0.000004536021109263738",
            "extra": "mean: 226.25037882501434 usec\nrounds: 2843"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 1776133.7652118022,
            "unit": "iter/sec",
            "range": "stddev: 2.254336712248895e-8",
            "extra": "mean: 563.0206573326701 nsec\nrounds: 86957"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 1675759.4026805907,
            "unit": "iter/sec",
            "range": "stddev: 2.2693598012753757e-8",
            "extra": "mean: 596.7443765499551 nsec\nrounds: 82645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 4367.4727937508105,
            "unit": "iter/sec",
            "range": "stddev: 0.000006103513469765535",
            "extra": "mean: 228.96536446222353 usec\nrounds: 3084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 1718456.8349074922,
            "unit": "iter/sec",
            "range": "stddev: 2.623998415701046e-8",
            "extra": "mean: 581.9174387661642 nsec\nrounds: 84034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 4367.810723817936,
            "unit": "iter/sec",
            "range": "stddev: 0.000004349136956882734",
            "extra": "mean: 228.94764980243755 usec\nrounds: 3024"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 1674585.1737679804,
            "unit": "iter/sec",
            "range": "stddev: 2.7332885984563997e-8",
            "extra": "mean: 597.1628171950409 nsec\nrounds: 81968"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 4340.110873101163,
            "unit": "iter/sec",
            "range": "stddev: 0.000009422827609606312",
            "extra": "mean: 230.4088603352809 usec\nrounds: 3222"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 4428.32100315855,
            "unit": "iter/sec",
            "range": "stddev: 0.000004294140286180272",
            "extra": "mean: 225.8192211645765 usec\nrounds: 3468"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 1680390.0007819606,
            "unit": "iter/sec",
            "range": "stddev: 2.5768146490534743e-8",
            "extra": "mean: 595.0999467593813 nsec\nrounds: 82645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 4383.197993227119,
            "unit": "iter/sec",
            "range": "stddev: 0.000008840763353672314",
            "extra": "mean: 228.14392631708438 usec\nrounds: 95"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 1723754.9256410145,
            "unit": "iter/sec",
            "range": "stddev: 3.772535933116153e-8",
            "extra": "mean: 580.1288716421983 nsec\nrounds: 84034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 4404.532354832679,
            "unit": "iter/sec",
            "range": "stddev: 0.000004800640956070983",
            "extra": "mean: 227.03885893874616 usec\nrounds: 3261"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 1680389.7566644277,
            "unit": "iter/sec",
            "range": "stddev: 2.503837136633115e-8",
            "extra": "mean: 595.1000332121499 nsec\nrounds: 81301"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 1764054.2193317756,
            "unit": "iter/sec",
            "range": "stddev: 2.370280910289511e-8",
            "extra": "mean: 566.8760002058916 nsec\nrounds: 86207"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 4305.626840880463,
            "unit": "iter/sec",
            "range": "stddev: 0.000010850436376308616",
            "extra": "mean: 232.2542191778767 usec\nrounds: 3285"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 1755035.8369091647,
            "unit": "iter/sec",
            "range": "stddev: 2.500854707729653e-8",
            "extra": "mean: 569.788934773002 nsec\nrounds: 86207"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 4292.196148548314,
            "unit": "iter/sec",
            "range": "stddev: 0.00001081258251124259",
            "extra": "mean: 232.98096484668233 usec\nrounds: 3243"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 1735672.9222715632,
            "unit": "iter/sec",
            "range": "stddev: 2.509095649388989e-8",
            "extra": "mean: 576.1454172431883 nsec\nrounds: 83334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 4307.719544573653,
            "unit": "iter/sec",
            "range": "stddev: 0.000005800999944923248",
            "extra": "mean: 232.14138934826423 usec\nrounds: 3267"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 4401.220059771454,
            "unit": "iter/sec",
            "range": "stddev: 0.000004428986487465315",
            "extra": "mean: 227.20972512606605 usec\nrounds: 3347"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 1770221.2364677673,
            "unit": "iter/sec",
            "range": "stddev: 2.26240258285822e-8",
            "extra": "mean: 564.9011430890548 nsec\nrounds: 86957"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 4387.552962433153,
            "unit": "iter/sec",
            "range": "stddev: 0.000004559921682206825",
            "extra": "mean: 227.91747668054174 usec\nrounds: 3216"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 1756251.329529655,
            "unit": "iter/sec",
            "range": "stddev: 2.108920990055037e-8",
            "extra": "mean: 569.3945867467216 nsec\nrounds: 84746"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 4411.20860499212,
            "unit": "iter/sec",
            "range": "stddev: 0.000004627131694559783",
            "extra": "mean: 226.6952414964711 usec\nrounds: 3234"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 1746100.162005412,
            "unit": "iter/sec",
            "range": "stddev: 2.394948258629852e-8",
            "extra": "mean: 572.7048320366438 nsec\nrounds: 85471"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 14013.0259729008,
            "unit": "iter/sec",
            "range": "stddev: 0.000004369017692915168",
            "extra": "mean: 71.36217416094553 usec\nrounds: 5828"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 13513.445197163446,
            "unit": "iter/sec",
            "range": "stddev: 0.000004780863302267621",
            "extra": "mean: 74.00037410222421 usec\nrounds: 7375"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 10449.802150300824,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028494150347441124",
            "extra": "mean: 95.69559170756285 usec\nrounds: 6150"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 69.872893325524,
            "unit": "iter/sec",
            "range": "stddev: 0.02968528092309687",
            "extra": "mean: 14.311701611398824 msec\nrounds: 193"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 112518.28232350231,
            "unit": "iter/sec",
            "range": "stddev: 5.129456736124778e-7",
            "extra": "mean: 8.887444594336156 usec\nrounds: 21460"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 112348.78851779211,
            "unit": "iter/sec",
            "range": "stddev: 5.031955669033754e-7",
            "extra": "mean: 8.900852543164138 usec\nrounds: 45661"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 74.806609698643,
            "unit": "iter/sec",
            "range": "stddev: 0.029984254661304017",
            "extra": "mean: 13.367802711932555 msec\nrounds: 243"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 74.50182143916676,
            "unit": "iter/sec",
            "range": "stddev: 0.030141374386252626",
            "extra": "mean: 13.422490627514842 msec\nrounds: 298"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 49334.699924973414,
            "unit": "iter/sec",
            "range": "stddev: 7.368455179547648e-7",
            "extra": "mean: 20.269708775380554 usec\nrounds: 25252"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 48978.69837996961,
            "unit": "iter/sec",
            "range": "stddev: 7.457189094668582e-7",
            "extra": "mean: 20.417039102226557 usec\nrounds: 16751"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 57.46578782326822,
            "unit": "iter/sec",
            "range": "stddev: 0.030650187084663074",
            "extra": "mean: 17.40165823664379 msec\nrounds: 131"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 56.50297755603856,
            "unit": "iter/sec",
            "range": "stddev: 0.030941170243126735",
            "extra": "mean: 17.698182348146506 msec\nrounds: 135"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 16304.21239464451,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013612158614065902",
            "extra": "mean: 61.3338428005558 usec\nrounds: 6584"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 1325.984859080618,
            "unit": "iter/sec",
            "range": "stddev: 0.000008686079229405776",
            "extra": "mean: 754.1564242998656 usec\nrounds: 1070"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 1319.8585991777954,
            "unit": "iter/sec",
            "range": "stddev: 0.000009520436364437379",
            "extra": "mean: 757.6569191752426 usec\nrounds: 1064"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 18912.01521425165,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016047641559590062",
            "extra": "mean: 52.87643800362553 usec\nrounds: 6831"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 32.15717043066116,
            "unit": "iter/sec",
            "range": "stddev: 0.03141733714933629",
            "extra": "mean: 31.097263428579577 msec\nrounds: 28"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 3.9732060713941846,
            "unit": "iter/sec",
            "range": "stddev: 0.000459762541558887",
            "extra": "mean: 251.68591360002213 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 3.6815537121530424,
            "unit": "iter/sec",
            "range": "stddev: 0.045173534557259795",
            "extra": "mean: 271.62444939997386 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 33.440458999279834,
            "unit": "iter/sec",
            "range": "stddev: 0.03310195735354511",
            "extra": "mean: 29.903895757577242 msec\nrounds: 33"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 16294.234703037617,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012968710581507918",
            "extra": "mean: 61.37140026671994 usec\nrounds: 6748"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 1331.594835868759,
            "unit": "iter/sec",
            "range": "stddev: 0.000008887575468478061",
            "extra": "mean: 750.9791815523076 usec\nrounds: 1030"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 1328.8108575609817,
            "unit": "iter/sec",
            "range": "stddev: 0.000009003059137366338",
            "extra": "mean: 752.5525505078198 usec\nrounds: 990"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 18886.09767364872,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013120727510914046",
            "extra": "mean: 52.94900075600445 usec\nrounds: 7937"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 28.562563072455813,
            "unit": "iter/sec",
            "range": "stddev: 0.03602035576149728",
            "extra": "mean: 35.01086360713706 msec\nrounds: 28"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 3.6782133933549814,
            "unit": "iter/sec",
            "range": "stddev: 0.04368222815059631",
            "extra": "mean: 271.8711214000223 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 3.6738648158721685,
            "unit": "iter/sec",
            "range": "stddev: 0.04609638674725538",
            "extra": "mean: 272.19292219999716 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 33.11104856312564,
            "unit": "iter/sec",
            "range": "stddev: 0.033610601090570125",
            "extra": "mean: 30.201399333322748 msec\nrounds: 33"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 48135.91451325908,
            "unit": "iter/sec",
            "range": "stddev: 7.323699929368705e-7",
            "extra": "mean: 20.77450922272494 usec\nrounds: 17890"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 48028.196822164944,
            "unit": "iter/sec",
            "range": "stddev: 9.414911749639901e-7",
            "extra": "mean: 20.821102314182685 usec\nrounds: 23809"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 48383.82429387615,
            "unit": "iter/sec",
            "range": "stddev: 6.669709418795265e-7",
            "extra": "mean: 20.668064473906586 usec\nrounds: 23529"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 48545.62756280179,
            "unit": "iter/sec",
            "range": "stddev: 8.350608662812784e-7",
            "extra": "mean: 20.59917752028923 usec\nrounds: 25000"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 59.29105261497574,
            "unit": "iter/sec",
            "range": "stddev: 0.031469245154665454",
            "extra": "mean: 16.865951199986284 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 57.23186072502817,
            "unit": "iter/sec",
            "range": "stddev: 0.03084421232284894",
            "extra": "mean: 17.472785041963316 msec\nrounds: 143"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 57.41590323292035,
            "unit": "iter/sec",
            "range": "stddev: 0.03082221134415175",
            "extra": "mean: 17.4167772985 msec\nrounds: 134"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 55.50526207054876,
            "unit": "iter/sec",
            "range": "stddev: 0.031726714500901816",
            "extra": "mean: 18.016309854171514 msec\nrounds: 144"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 65566.96037373845,
            "unit": "iter/sec",
            "range": "stddev: 6.934863645560404e-7",
            "extra": "mean: 15.251583942581703 usec\nrounds: 21598"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 49705.57015849198,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013542319960867096",
            "extra": "mean: 20.118469556055466 usec\nrounds: 23256"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 49502.76917214766,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014916189636955906",
            "extra": "mean: 20.200890106217372 usec\nrounds: 23641"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 66822.21451643737,
            "unit": "iter/sec",
            "range": "stddev: 5.919457551101074e-7",
            "extra": "mean: 14.965083202293654 usec\nrounds: 22223"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 62.787285526129324,
            "unit": "iter/sec",
            "range": "stddev: 0.03126295579598246",
            "extra": "mean: 15.926791413587132 msec\nrounds: 162"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 57.88525534999749,
            "unit": "iter/sec",
            "range": "stddev: 0.030643890782493202",
            "extra": "mean: 17.275556511819783 msec\nrounds: 127"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 58.0216499553507,
            "unit": "iter/sec",
            "range": "stddev: 0.030608031134915004",
            "extra": "mean: 17.234945934311213 msec\nrounds: 137"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 64.7184179297424,
            "unit": "iter/sec",
            "range": "stddev: 0.03231131679319624",
            "extra": "mean: 15.45155200001318 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 276994.9231282202,
            "unit": "iter/sec",
            "range": "stddev: 3.249093217015711e-7",
            "extra": "mean: 3.6101744707324572 usec\nrounds: 40001"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 1441.79327261492,
            "unit": "iter/sec",
            "range": "stddev: 0.000009207150012965285",
            "extra": "mean: 693.5807088254352 usec\nrounds: 1099"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 1457.0541728665378,
            "unit": "iter/sec",
            "range": "stddev: 0.00000785289759920374",
            "extra": "mean: 686.3162802194571 usec\nrounds: 1092"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 279559.593957178,
            "unit": "iter/sec",
            "range": "stddev: 3.176744602455259e-7",
            "extra": "mean: 3.577054844889983 usec\nrounds: 57143"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 1997.28594108765,
            "unit": "iter/sec",
            "range": "stddev: 0.000003292584908487307",
            "extra": "mean: 500.67943674376244 usec\nrounds: 1818"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 4.373578860219246,
            "unit": "iter/sec",
            "range": "stddev: 0.00015063294339904217",
            "extra": "mean: 228.64569999999276 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 4.4686813486539565,
            "unit": "iter/sec",
            "range": "stddev: 0.00010810769435165491",
            "extra": "mean: 223.77966159999687 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 2000.2790940590232,
            "unit": "iter/sec",
            "range": "stddev: 0.000003765611560003628",
            "extra": "mean: 499.9302362205724 usec\nrounds: 1778"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 238576.97972029645,
            "unit": "iter/sec",
            "range": "stddev: 4.0372542905748523e-7",
            "extra": "mean: 4.191519236987504 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 1883.6870439506597,
            "unit": "iter/sec",
            "range": "stddev: 0.000006795378093067868",
            "extra": "mean: 530.8737474260579 usec\nrounds: 1263"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 1620.7362655509153,
            "unit": "iter/sec",
            "range": "stddev: 0.000007706608364745928",
            "extra": "mean: 617.0035318239044 usec\nrounds: 1194"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 237656.25801718695,
            "unit": "iter/sec",
            "range": "stddev: 3.521932610269694e-7",
            "extra": "mean: 4.207757911965784 usec\nrounds: 58140"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 1460.4367980274592,
            "unit": "iter/sec",
            "range": "stddev: 0.000004387362757011514",
            "extra": "mean: 684.7266525676778 usec\nrounds: 1324"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 5.715703162944375,
            "unit": "iter/sec",
            "range": "stddev: 0.00020058928276209202",
            "extra": "mean: 174.95660140000382 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 4.914183833763192,
            "unit": "iter/sec",
            "range": "stddev: 0.00013186571637688088",
            "extra": "mean: 203.49259080001048 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 1445.6236260857054,
            "unit": "iter/sec",
            "range": "stddev: 0.000003954166443412427",
            "extra": "mean: 691.7429834124155 usec\nrounds: 1266"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 16188.248333363847,
            "unit": "iter/sec",
            "range": "stddev: 0.000001344139443053032",
            "extra": "mean: 61.77320605707588 usec\nrounds: 6605"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 1328.4477130569562,
            "unit": "iter/sec",
            "range": "stddev: 0.000008685455221024017",
            "extra": "mean: 752.758268294091 usec\nrounds: 1066"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 1331.0813872224248,
            "unit": "iter/sec",
            "range": "stddev: 0.000009518998445928313",
            "extra": "mean: 751.2688627452794 usec\nrounds: 1071"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 18765.41948421816,
            "unit": "iter/sec",
            "range": "stddev: 0.000001536265492018283",
            "extra": "mean: 53.28950950662236 usec\nrounds: 6469"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 31.021260142590535,
            "unit": "iter/sec",
            "range": "stddev: 0.03359365868755868",
            "extra": "mean: 32.23595674074676 msec\nrounds: 27"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 3.9641870929844507,
            "unit": "iter/sec",
            "range": "stddev: 0.0010232108665594907",
            "extra": "mean: 252.25852779999514 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 3.9642753051469835,
            "unit": "iter/sec",
            "range": "stddev: 0.00027349942526103935",
            "extra": "mean: 252.25291459996697 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 32.82037908676239,
            "unit": "iter/sec",
            "range": "stddev: 0.034540186733619804",
            "extra": "mean: 30.468874151527856 msec\nrounds: 33"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 16286.372672493064,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018561262622095573",
            "extra": "mean: 61.40102649676892 usec\nrounds: 6831"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 1329.4800130719113,
            "unit": "iter/sec",
            "range": "stddev: 0.000008673867680855296",
            "extra": "mean: 752.1737748350115 usec\nrounds: 1057"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 1323.0704615661762,
            "unit": "iter/sec",
            "range": "stddev: 0.000009097554091687634",
            "extra": "mean: 755.8176446749906 usec\nrounds: 1061"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 18536.825659560964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014051199987958171",
            "extra": "mean: 53.946669098881976 usec\nrounds: 6854"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 30.971439451500082,
            "unit": "iter/sec",
            "range": "stddev: 0.03390129494233686",
            "extra": "mean: 32.287811535720074 msec\nrounds: 28"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 3.9747413075794045,
            "unit": "iter/sec",
            "range": "stddev: 0.00043680228784468735",
            "extra": "mean: 251.5887003999751 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 3.666218439688454,
            "unit": "iter/sec",
            "range": "stddev: 0.046992654294083856",
            "extra": "mean: 272.76061600000503 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 31.97256268913331,
            "unit": "iter/sec",
            "range": "stddev: 0.035421196296096545",
            "extra": "mean: 31.276817242425036 msec\nrounds: 33"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 48538.914238468155,
            "unit": "iter/sec",
            "range": "stddev: 7.743389134185293e-7",
            "extra": "mean: 20.60202655310897 usec\nrounds: 24630"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 47573.58149702486,
            "unit": "iter/sec",
            "range": "stddev: 6.710313814734066e-7",
            "extra": "mean: 21.0200697221532 usec\nrounds: 23981"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 47665.31739619683,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013925142193532551",
            "extra": "mean: 20.979614835834262 usec\nrounds: 19763"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 48791.825694944855,
            "unit": "iter/sec",
            "range": "stddev: 7.047430964743383e-7",
            "extra": "mean: 20.495236358897028 usec\nrounds: 23202"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 54.423271641304126,
            "unit": "iter/sec",
            "range": "stddev: 0.03303173610136692",
            "extra": "mean: 18.3744925624989 msec\nrounds: 128"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 55.21174936005889,
            "unit": "iter/sec",
            "range": "stddev: 0.03244613726160201",
            "extra": "mean: 18.112086858153724 msec\nrounds: 141"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 56.47571192783937,
            "unit": "iter/sec",
            "range": "stddev: 0.032018374821907225",
            "extra": "mean: 17.70672676561791 msec\nrounds: 128"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 56.841464328168456,
            "unit": "iter/sec",
            "range": "stddev: 0.032069305431943924",
            "extra": "mean: 17.592790963768998 msec\nrounds: 138"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys0]",
            "value": 66023.87769211433,
            "unit": "iter/sec",
            "range": "stddev: 5.951143390909386e-7",
            "extra": "mean: 15.146035570089467 usec\nrounds: 22322"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys1]",
            "value": 49163.93511941573,
            "unit": "iter/sec",
            "range": "stddev: 0.000001512721231899052",
            "extra": "mean: 20.34011308433856 usec\nrounds: 23310"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys2]",
            "value": 47967.94879210096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037703967353048116",
            "extra": "mean: 20.847253742996685 usec\nrounds: 21506"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys3]",
            "value": 64995.023939673905,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016285055277135336",
            "extra": "mean: 15.385793240543535 usec\nrounds: 25000"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys4]",
            "value": 61.33725531252804,
            "unit": "iter/sec",
            "range": "stddev: 0.03235773970931084",
            "extra": "mean: 16.30330530612692 msec\nrounds: 147"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys5]",
            "value": 55.03191470415621,
            "unit": "iter/sec",
            "range": "stddev: 0.032741614671822517",
            "extra": "mean: 18.171273984847858 msec\nrounds: 132"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys6]",
            "value": 54.56987959511811,
            "unit": "iter/sec",
            "range": "stddev: 0.03295215019384577",
            "extra": "mean: 18.3251274772734 msec\nrounds: 132"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys7]",
            "value": 59.913634180628314,
            "unit": "iter/sec",
            "range": "stddev: 0.03305921751786358",
            "extra": "mean: 16.69069175448761 msec\nrounds: 167"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 278487.71102157264,
            "unit": "iter/sec",
            "range": "stddev: 2.609580215579358e-7",
            "extra": "mean: 3.5908227200823832 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 1435.2912485211593,
            "unit": "iter/sec",
            "range": "stddev: 0.000007983024710572606",
            "extra": "mean: 696.722704210969 usec\nrounds: 1092"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 1465.9285702656464,
            "unit": "iter/sec",
            "range": "stddev: 0.000008092269757783766",
            "extra": "mean: 682.1614779080172 usec\nrounds: 1109"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 277697.04782501986,
            "unit": "iter/sec",
            "range": "stddev: 3.308659319286488e-7",
            "extra": "mean: 3.6010465643484677 usec\nrounds: 45872"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 2003.3376962622337,
            "unit": "iter/sec",
            "range": "stddev: 0.000004375185093270806",
            "extra": "mean: 499.1669661414396 usec\nrounds: 1772"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 4.387097387593722,
            "unit": "iter/sec",
            "range": "stddev: 0.00024328007984248916",
            "extra": "mean: 227.94114460004948 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 4.4483033851946665,
            "unit": "iter/sec",
            "range": "stddev: 0.00033223469013810193",
            "extra": "mean: 224.8048105999942 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 1999.286184679089,
            "unit": "iter/sec",
            "range": "stddev: 0.00000344781365279852",
            "extra": "mean: 500.1785175445069 usec\nrounds: 1710"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 238046.85764469774,
            "unit": "iter/sec",
            "range": "stddev: 3.1099217315678395e-7",
            "extra": "mean: 4.200853604598187 usec\nrounds: 64517"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 1884.310591737535,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066276940883539935",
            "extra": "mean: 530.6980730166641 usec\nrounds: 1260"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 1580.0800405999908,
            "unit": "iter/sec",
            "range": "stddev: 0.00004849872932210265",
            "extra": "mean: 632.8793316193515 usec\nrounds: 1167"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 237567.37601322765,
            "unit": "iter/sec",
            "range": "stddev: 3.0132370191206907e-7",
            "extra": "mean: 4.209332176756123 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 1466.6513485119576,
            "unit": "iter/sec",
            "range": "stddev: 0.000004208788869193979",
            "extra": "mean: 681.8253029355511 usec\nrounds: 1261"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 5.705974541753065,
            "unit": "iter/sec",
            "range": "stddev: 0.00027276355414330885",
            "extra": "mean: 175.25490040002296 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 4.899792880561597,
            "unit": "iter/sec",
            "range": "stddev: 0.00016316353847218822",
            "extra": "mean: 204.09025939998173 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 1465.28577831329,
            "unit": "iter/sec",
            "range": "stddev: 0.000003957587330942203",
            "extra": "mean: 682.4607286853718 usec\nrounds: 1349"
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
        "date": 1669516714920,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 6.469622059217649,
            "unit": "iter/sec",
            "range": "stddev: 0.0012533197319456353",
            "extra": "mean: 154.56853442856706 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 24755.50995387924,
            "unit": "iter/sec",
            "range": "stddev: 0.00021388964179258824",
            "extra": "mean: 40.39504748086589 usec\nrounds: 6887"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 37.56305298858906,
            "unit": "iter/sec",
            "range": "stddev: 0.00012900647035143258",
            "extra": "mean: 26.621904250002817 msec\nrounds: 28"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 1516.8456653767219,
            "unit": "iter/sec",
            "range": "stddev: 0.00006814127051045167",
            "extra": "mean: 659.2628523954949 usec\nrounds: 1294"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 14735.617488277376,
            "unit": "iter/sec",
            "range": "stddev: 0.000005606425083699061",
            "extra": "mean: 67.86278218714145 usec\nrounds: 10835"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 14628.120521526243,
            "unit": "iter/sec",
            "range": "stddev: 0.000007966859340691947",
            "extra": "mean: 68.36148215544397 usec\nrounds: 4287"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 14865.664916844727,
            "unit": "iter/sec",
            "range": "stddev: 0.000005751308389179383",
            "extra": "mean: 67.26910673648175 usec\nrounds: 11074"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 14877.657126981836,
            "unit": "iter/sec",
            "range": "stddev: 0.000006122906331830137",
            "extra": "mean: 67.21488413564923 usec\nrounds: 10823"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 14741.003037039001,
            "unit": "iter/sec",
            "range": "stddev: 0.000007311329598437357",
            "extra": "mean: 67.83798887276183 usec\nrounds: 11683"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 15263.07225579057,
            "unit": "iter/sec",
            "range": "stddev: 0.000005641922541468035",
            "extra": "mean: 65.51760898731352 usec\nrounds: 10882"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 14980.160993920352,
            "unit": "iter/sec",
            "range": "stddev: 0.000008919711761687497",
            "extra": "mean: 66.75495679958625 usec\nrounds: 11111"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 15291.89830542264,
            "unit": "iter/sec",
            "range": "stddev: 0.000005646056051862846",
            "extra": "mean: 65.39410477542813 usec\nrounds: 11224"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 15237.596378802546,
            "unit": "iter/sec",
            "range": "stddev: 0.000009706688505808056",
            "extra": "mean: 65.62714847803217 usec\nrounds: 9200"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 15153.213330986615,
            "unit": "iter/sec",
            "range": "stddev: 0.000007075266799554041",
            "extra": "mean: 65.99260355921425 usec\nrounds: 11351"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 14403.601142053343,
            "unit": "iter/sec",
            "range": "stddev: 0.000005275653501505156",
            "extra": "mean: 69.42708216769202 usec\nrounds: 12438"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 14357.175159576767,
            "unit": "iter/sec",
            "range": "stddev: 0.000006309239103616065",
            "extra": "mean: 69.65158458298554 usec\nrounds: 12804"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 14436.665735988177,
            "unit": "iter/sec",
            "range": "stddev: 0.000004911923725993911",
            "extra": "mean: 69.26807188637527 usec\nrounds: 11546"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 17029946.55150948,
            "unit": "iter/sec",
            "range": "stddev: 9.597746726762365e-9",
            "extra": "mean: 58.72009034053969 nsec\nrounds: 163935"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 16340297.303253023,
            "unit": "iter/sec",
            "range": "stddev: 9.739251682068815e-9",
            "extra": "mean: 61.198396910387025 nsec\nrounds: 158731"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 14119376.212699912,
            "unit": "iter/sec",
            "range": "stddev: 1.1005706109663513e-8",
            "extra": "mean: 70.82465860644622 nsec\nrounds: 136968"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 16855108.59501632,
            "unit": "iter/sec",
            "range": "stddev: 9.677419486338264e-9",
            "extra": "mean: 59.329193541620306 nsec\nrounds: 166667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 16816685.39349911,
            "unit": "iter/sec",
            "range": "stddev: 8.413895903220747e-9",
            "extra": "mean: 59.46475043085938 nsec\nrounds: 166667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 16679067.647278534,
            "unit": "iter/sec",
            "range": "stddev: 9.296790113418158e-9",
            "extra": "mean: 59.955389662420146 nsec\nrounds: 185186"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 37535.6186612412,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020834882388345785",
            "extra": "mean: 26.641361876168762 usec\nrounds: 11001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 15841.677960007812,
            "unit": "iter/sec",
            "range": "stddev: 0.000003805694010457998",
            "extra": "mean: 63.124626224853955 usec\nrounds: 5918"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 37009.2480139334,
            "unit": "iter/sec",
            "range": "stddev: 0.000002611835311095012",
            "extra": "mean: 27.02027340905483 usec\nrounds: 11737"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 15728.296705954986,
            "unit": "iter/sec",
            "range": "stddev: 0.000003878523222552923",
            "extra": "mean: 63.579675453438256 usec\nrounds: 7663"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 37116.75508761421,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022010010504556385",
            "extra": "mean: 26.942010357303516 usec\nrounds: 11779"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 15765.165016082243,
            "unit": "iter/sec",
            "range": "stddev: 0.000003348939103939946",
            "extra": "mean: 63.430988446989765 usec\nrounds: 7617"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 17151.9925138306,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035794745874791793",
            "extra": "mean: 58.302264252601844 usec\nrounds: 7981"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 45955.77008732898,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014577110846228487",
            "extra": "mean: 21.760053157627798 usec\nrounds: 15106"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 16995.80114076579,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024728512310143994",
            "extra": "mean: 58.838061925861204 usec\nrounds: 7073"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 46154.3123785419,
            "unit": "iter/sec",
            "range": "stddev: 0.000001885363361290496",
            "extra": "mean: 21.666447802284253 usec\nrounds: 16313"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 17018.03096237694,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038054143189314136",
            "extra": "mean: 58.76120464293292 usec\nrounds: 7452"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 46229.77275654948,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017082997558638843",
            "extra": "mean: 21.63108188452706 usec\nrounds: 14728"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 35721.00847373645,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031740735030381084",
            "extra": "mean: 27.994730348535395 usec\nrounds: 11793"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 15619.531065988274,
            "unit": "iter/sec",
            "range": "stddev: 0.000003205785017452213",
            "extra": "mean: 64.02240859698487 usec\nrounds: 6258"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 36440.22964374901,
            "unit": "iter/sec",
            "range": "stddev: 0.000002185281662030146",
            "extra": "mean: 27.44219808097562 usec\nrounds: 12611"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 15635.977377660673,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026077939403903995",
            "extra": "mean: 63.95506822801581 usec\nrounds: 7856"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 36143.441537900275,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018964892382460418",
            "extra": "mean: 27.667536832412395 usec\nrounds: 12136"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 15463.938183418251,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025999542208734494",
            "extra": "mean: 64.66658028110103 usec\nrounds: 7536"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 16763.986640729152,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024841194141826554",
            "extra": "mean: 59.65168199134911 usec\nrounds: 7874"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 45160.15464581701,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013682463181725704",
            "extra": "mean: 22.143413986130486 usec\nrounds: 15015"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 16846.119824204146,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031277929461300958",
            "extra": "mean: 59.36085047686894 usec\nrounds: 7758"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 45445.08084958407,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021492347765573642",
            "extra": "mean: 22.004581822834457 usec\nrounds: 15338"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 16966.26061968916,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033488204129162897",
            "extra": "mean: 58.940506833869506 usec\nrounds: 7975"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 44756.801915967095,
            "unit": "iter/sec",
            "range": "stddev: 0.00000216882896793461",
            "extra": "mean: 22.342972625201078 usec\nrounds: 14685"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 35007.88403819219,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022033867561545824",
            "extra": "mean: 28.564994071308064 usec\nrounds: 11807"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 15495.220883320811,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037974890394058438",
            "extra": "mean: 64.53602743258786 usec\nrounds: 7728"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 35338.01156198019,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022871889593678314",
            "extra": "mean: 28.2981400423755 usec\nrounds: 12739"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 15538.553069945576,
            "unit": "iter/sec",
            "range": "stddev: 0.000004202353717544283",
            "extra": "mean: 64.35605654519945 usec\nrounds: 7746"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 35415.2416931303,
            "unit": "iter/sec",
            "range": "stddev: 0.00000225937091327251",
            "extra": "mean: 28.236430197622393 usec\nrounds: 11948"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 15430.546462121942,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038071977350243053",
            "extra": "mean: 64.80651883941668 usec\nrounds: 7617"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 16627.392741161744,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038241910195572455",
            "extra": "mean: 60.141720086063884 usec\nrounds: 7906"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 43478.99271934613,
            "unit": "iter/sec",
            "range": "stddev: 0.000004211710289546076",
            "extra": "mean: 22.99961285798248 usec\nrounds: 14948"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 16928.762962262703,
            "unit": "iter/sec",
            "range": "stddev: 0.000003955718221263734",
            "extra": "mean: 59.07106161443587 usec\nrounds: 7693"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 44163.137758580924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023993383206960423",
            "extra": "mean: 22.6433186307216 usec\nrounds: 14578"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 16575.52156719993,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034386143241154505",
            "extra": "mean: 60.32992662980969 usec\nrounds: 7469"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 44154.662824492814,
            "unit": "iter/sec",
            "range": "stddev: 0.00000240717988404203",
            "extra": "mean: 22.647664731918073 usec\nrounds: 14472"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 37265.309668350026,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025168375792393036",
            "extra": "mean: 26.83460861857039 usec\nrounds: 11835"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 15842.817575846095,
            "unit": "iter/sec",
            "range": "stddev: 0.000003278301527811887",
            "extra": "mean: 63.120085503262786 usec\nrounds: 7988"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 37614.66945570339,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025267984800598146",
            "extra": "mean: 26.585372528067587 usec\nrounds: 12136"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 15879.841618507791,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038229705045764595",
            "extra": "mean: 62.97292026102517 usec\nrounds: 7813"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 37329.896894053905,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026521300771764727",
            "extra": "mean: 26.78818007020226 usec\nrounds: 11962"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 15691.223379453852,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033371850689304954",
            "extra": "mean: 63.72989382774347 usec\nrounds: 7469"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 17082.621715126414,
            "unit": "iter/sec",
            "range": "stddev: 0.000004342293931486271",
            "extra": "mean: 58.53902384986459 usec\nrounds: 9434"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 46409.64274404289,
            "unit": "iter/sec",
            "range": "stddev: 0.000001727287287064852",
            "extra": "mean: 21.547246237493592 usec\nrounds: 15083"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 16995.656813992293,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034233373450473345",
            "extra": "mean: 58.83856157749158 usec\nrounds: 7657"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 46200.10428187098,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022502309632540517",
            "extra": "mean: 21.644972788349357 usec\nrounds: 15361"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 17128.805078537916,
            "unit": "iter/sec",
            "range": "stddev: 0.000003499579123670744",
            "extra": "mean: 58.381188612682735 usec\nrounds: 7640"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 46508.76115643603,
            "unit": "iter/sec",
            "range": "stddev: 0.000002113284900478514",
            "extra": "mean: 21.501325237118618 usec\nrounds: 14451"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 36768.018203197804,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026494727232967026",
            "extra": "mean: 27.197549633312235 usec\nrounds: 12270"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 15659.421606648295,
            "unit": "iter/sec",
            "range": "stddev: 0.000004205409868328908",
            "extra": "mean: 63.859319016958096 usec\nrounds: 7893"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 36522.19268605674,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023374003994287843",
            "extra": "mean: 27.38061234701757 usec\nrounds: 12181"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 15642.811484292397,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032940731122515627",
            "extra": "mean: 63.92712723055839 usec\nrounds: 7789"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 35733.51276570492,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020259582682269934",
            "extra": "mean: 27.98493410252533 usec\nrounds: 11442"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 15618.298541754819,
            "unit": "iter/sec",
            "range": "stddev: 0.000003825632477505674",
            "extra": "mean: 64.02746095079083 usec\nrounds: 7593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 17026.17423521387,
            "unit": "iter/sec",
            "range": "stddev: 0.000003267154514527221",
            "extra": "mean: 58.73310035391157 usec\nrounds: 7912"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 45844.39645475398,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022004820716329863",
            "extra": "mean: 21.812916677547445 usec\nrounds: 15338"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 17153.382973046686,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037439906311694643",
            "extra": "mean: 58.29753825069445 usec\nrounds: 7294"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 45452.459237833114,
            "unit": "iter/sec",
            "range": "stddev: 0.000002203257594644604",
            "extra": "mean: 22.00100977523419 usec\nrounds: 15038"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 16718.30100481136,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032780463467148865",
            "extra": "mean: 59.81469048273565 usec\nrounds: 7628"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 45524.40776758987,
            "unit": "iter/sec",
            "range": "stddev: 0.000001824635413384529",
            "extra": "mean: 21.966238530881636 usec\nrounds: 14430"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 35268.33406037728,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027288120000264752",
            "extra": "mean: 28.354046955777946 usec\nrounds: 11628"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 15690.347085356996,
            "unit": "iter/sec",
            "range": "stddev: 0.000004791446020902795",
            "extra": "mean: 63.73345309443467 usec\nrounds: 6076"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 35756.41035950372,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023729034256922777",
            "extra": "mean: 27.96701318576878 usec\nrounds: 12210"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 15587.481968491878,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031672600717738762",
            "extra": "mean: 64.15404373980182 usec\nrounds: 6150"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 35318.59316595618,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023518483894127394",
            "extra": "mean: 28.31369854685793 usec\nrounds: 12181"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 15606.62206182748,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025490478027261555",
            "extra": "mean: 64.07536467778752 usec\nrounds: 7508"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 16687.97120011022,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021025677349508373",
            "extra": "mean: 59.923401593202364 usec\nrounds: 7657"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 44376.11392400187,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017046361359645114",
            "extra": "mean: 22.534645591378077 usec\nrounds: 14472"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 16729.36745622531,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023267316242462867",
            "extra": "mean: 59.775123154933226 usec\nrounds: 7519"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 44024.35185146753,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017490533286368138",
            "extra": "mean: 22.714701249296542 usec\nrounds: 14728"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 16602.42939761379,
            "unit": "iter/sec",
            "range": "stddev: 0.000002176504474735468",
            "extra": "mean: 60.23214892536912 usec\nrounds: 7722"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 44639.61031537127,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014837706094982117",
            "extra": "mean: 22.401629246652686 usec\nrounds: 14306"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 153305.94596685888,
            "unit": "iter/sec",
            "range": "stddev: 6.118489404220548e-7",
            "extra": "mean: 6.522904207617469 usec\nrounds: 57468"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 147455.81792462815,
            "unit": "iter/sec",
            "range": "stddev: 5.763877542565177e-7",
            "extra": "mean: 6.781692401659924 usec\nrounds: 52354"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 152071.09068089703,
            "unit": "iter/sec",
            "range": "stddev: 7.57406703987398e-7",
            "extra": "mean: 6.575871821018106 usec\nrounds: 58824"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 146492.7361832258,
            "unit": "iter/sec",
            "range": "stddev: 5.968480495178453e-7",
            "extra": "mean: 6.826277029526229 usec\nrounds: 54348"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 150398.82919045293,
            "unit": "iter/sec",
            "range": "stddev: 7.1053497369613e-7",
            "extra": "mean: 6.648987930176508 usec\nrounds: 58824"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 144120.76218145704,
            "unit": "iter/sec",
            "range": "stddev: 7.52141258875882e-7",
            "extra": "mean: 6.938625530865132 usec\nrounds: 55556"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 148488.0496803099,
            "unit": "iter/sec",
            "range": "stddev: 7.287320747928187e-7",
            "extra": "mean: 6.734548686934528 usec\nrounds: 54645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 153046.24450462862,
            "unit": "iter/sec",
            "range": "stddev: 6.786790733816935e-7",
            "extra": "mean: 6.533972808262909 usec\nrounds: 56819"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 145471.15851149205,
            "unit": "iter/sec",
            "range": "stddev: 7.623129223011934e-7",
            "extra": "mean: 6.874214863154481 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 152637.40016966878,
            "unit": "iter/sec",
            "range": "stddev: 7.573559400494982e-7",
            "extra": "mean: 6.551474270974343 usec\nrounds: 55249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 144949.46807222627,
            "unit": "iter/sec",
            "range": "stddev: 8.251664221402402e-7",
            "extra": "mean: 6.8989559830720735 usec\nrounds: 56819"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 153388.63918077666,
            "unit": "iter/sec",
            "range": "stddev: 8.400183658000388e-7",
            "extra": "mean: 6.519387650485945 usec\nrounds: 58140"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 153277.11398315695,
            "unit": "iter/sec",
            "range": "stddev: 8.271731771194744e-7",
            "extra": "mean: 6.524131189669231 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 148226.50436473277,
            "unit": "iter/sec",
            "range": "stddev: 7.714253182731359e-7",
            "extra": "mean: 6.746431782128216 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 151249.96836287502,
            "unit": "iter/sec",
            "range": "stddev: 6.477824489409123e-7",
            "extra": "mean: 6.611571630883425 usec\nrounds: 56498"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 148396.93918701305,
            "unit": "iter/sec",
            "range": "stddev: 7.775085394266681e-7",
            "extra": "mean: 6.7386834626001155 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 150960.8025207191,
            "unit": "iter/sec",
            "range": "stddev: 7.546908637364193e-7",
            "extra": "mean: 6.624236114952766 usec\nrounds: 58480"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 146690.68738515777,
            "unit": "iter/sec",
            "range": "stddev: 7.579900514963356e-7",
            "extra": "mean: 6.817065335404383 usec\nrounds: 48779"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 145566.3545208248,
            "unit": "iter/sec",
            "range": "stddev: 6.348271042068493e-7",
            "extra": "mean: 6.869719333782858 usec\nrounds: 52354"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 152672.79328481382,
            "unit": "iter/sec",
            "range": "stddev: 6.334847161512945e-7",
            "extra": "mean: 6.549955486400791 usec\nrounds: 55556"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 148027.9640497251,
            "unit": "iter/sec",
            "range": "stddev: 6.316587098871591e-7",
            "extra": "mean: 6.755480333865046 usec\nrounds: 40984"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 151687.57665435848,
            "unit": "iter/sec",
            "range": "stddev: 7.353019708392584e-7",
            "extra": "mean: 6.5924976985995425 usec\nrounds: 57143"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 148085.54031010857,
            "unit": "iter/sec",
            "range": "stddev: 9.213402678973184e-7",
            "extra": "mean: 6.7528537756345575 usec\nrounds: 54348"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 148995.60680535377,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016213889681217725",
            "extra": "mean: 6.7116072845448995 usec\nrounds: 58480"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 153021.41787624836,
            "unit": "iter/sec",
            "range": "stddev: 8.693205278964107e-7",
            "extra": "mean: 6.535032898523532 usec\nrounds: 59881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 146499.19102741336,
            "unit": "iter/sec",
            "range": "stddev: 7.130846134991622e-7",
            "extra": "mean: 6.825976259574547 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 149009.58719561948,
            "unit": "iter/sec",
            "range": "stddev: 0.000001381727695301575",
            "extra": "mean: 6.710977587550808 usec\nrounds: 59877"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 147396.63592700812,
            "unit": "iter/sec",
            "range": "stddev: 7.257371480609153e-7",
            "extra": "mean: 6.784415354602849 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 151678.72736094744,
            "unit": "iter/sec",
            "range": "stddev: 8.17681999177765e-7",
            "extra": "mean: 6.592882320408161 usec\nrounds: 57801"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 147220.67415349022,
            "unit": "iter/sec",
            "range": "stddev: 7.295301769945466e-7",
            "extra": "mean: 6.7925242548299565 usec\nrounds: 53474"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 149433.72241082168,
            "unit": "iter/sec",
            "range": "stddev: 8.496320479444148e-7",
            "extra": "mean: 6.691929932996048 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 153122.82905009997,
            "unit": "iter/sec",
            "range": "stddev: 8.096653076559394e-7",
            "extra": "mean: 6.530704834827809 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 145942.9436840019,
            "unit": "iter/sec",
            "range": "stddev: 7.922169293969785e-7",
            "extra": "mean: 6.851992804566262 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 152688.47823378505,
            "unit": "iter/sec",
            "range": "stddev: 9.37786679760052e-7",
            "extra": "mean: 6.549282641149096 usec\nrounds: 54946"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 146405.04393342865,
            "unit": "iter/sec",
            "range": "stddev: 9.006651514320474e-7",
            "extra": "mean: 6.830365765640606 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 150444.9162570764,
            "unit": "iter/sec",
            "range": "stddev: 7.16126169126731e-7",
            "extra": "mean: 6.646951089335752 usec\nrounds: 57472"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 117153.82411989378,
            "unit": "iter/sec",
            "range": "stddev: 8.00370689179663e-7",
            "extra": "mean: 8.53578624097334 usec\nrounds: 40817"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 118872.83243191733,
            "unit": "iter/sec",
            "range": "stddev: 8.271981085211297e-7",
            "extra": "mean: 8.412351077549491 usec\nrounds: 42193"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 116332.23634098991,
            "unit": "iter/sec",
            "range": "stddev: 8.823239236637169e-7",
            "extra": "mean: 8.596069597328354 usec\nrounds: 44844"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 117678.70905768377,
            "unit": "iter/sec",
            "range": "stddev: 8.756124319092833e-7",
            "extra": "mean: 8.497713885608823 usec\nrounds: 44643"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 119106.05158253734,
            "unit": "iter/sec",
            "range": "stddev: 8.505483346366399e-7",
            "extra": "mean: 8.395879023048854 usec\nrounds: 37594"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 121169.87985537639,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011983077723923453",
            "extra": "mean: 8.252876054623153 usec\nrounds: 38759"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 119981.73563769342,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011390920780605305",
            "extra": "mean: 8.334601884904226 usec\nrounds: 44246"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 118335.70735583607,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012448817981311772",
            "extra": "mean: 8.45053468935623 usec\nrounds: 47392"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 121057.03267418379,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012280052460176084",
            "extra": "mean: 8.260569236745026 usec\nrounds: 46081"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 118755.19004058113,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011274088762509348",
            "extra": "mean: 8.420684600464865 usec\nrounds: 45872"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 120076.0174525546,
            "unit": "iter/sec",
            "range": "stddev: 0.00000107491323503124",
            "extra": "mean: 8.32805768558345 usec\nrounds: 43477"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 117923.38577388118,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010694553271883305",
            "extra": "mean: 8.480082160441917 usec\nrounds: 45046"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 118077.27155818352,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011712225119217086",
            "extra": "mean: 8.469030379883415 usec\nrounds: 46083"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 120802.2380730201,
            "unit": "iter/sec",
            "range": "stddev: 0.000001250659994724728",
            "extra": "mean: 8.277992328217795 usec\nrounds: 36497"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 116963.95424609641,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012908136277976172",
            "extra": "mean: 8.549642549669308 usec\nrounds: 42736"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 119220.8590394531,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012131941790855605",
            "extra": "mean: 8.387793948616622 usec\nrounds: 43858"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 118970.98426205984,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012130863397340508",
            "extra": "mean: 8.405410833596866 usec\nrounds: 42017"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 118834.59155598667,
            "unit": "iter/sec",
            "range": "stddev: 0.000001041932440848946",
            "extra": "mean: 8.415058165356413 usec\nrounds: 45044"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 119905.52185093118,
            "unit": "iter/sec",
            "range": "stddev: 9.744811481659437e-7",
            "extra": "mean: 8.339899485556796 usec\nrounds: 46083"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 119790.83240869909,
            "unit": "iter/sec",
            "range": "stddev: 0.000001177390037399752",
            "extra": "mean: 8.347884223629295 usec\nrounds: 46512"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 118366.04861361108,
            "unit": "iter/sec",
            "range": "stddev: 8.056541148083385e-7",
            "extra": "mean: 8.448368528921295 usec\nrounds: 55556"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 117824.52785343953,
            "unit": "iter/sec",
            "range": "stddev: 8.443795703964709e-7",
            "extra": "mean: 8.4871971754802 usec\nrounds: 45249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 118389.34859410494,
            "unit": "iter/sec",
            "range": "stddev: 9.6615016608208e-7",
            "extra": "mean: 8.446705821724521 usec\nrounds: 44643"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 116734.62668127472,
            "unit": "iter/sec",
            "range": "stddev: 8.006968856934244e-7",
            "extra": "mean: 8.566438497553433 usec\nrounds: 42917"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 117827.59352860528,
            "unit": "iter/sec",
            "range": "stddev: 9.456190606313741e-7",
            "extra": "mean: 8.486976352930672 usec\nrounds: 44445"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 118506.36979820767,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010161097748497945",
            "extra": "mean: 8.43836497314699 usec\nrounds: 43669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 117455.63417259518,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010042909675031463",
            "extra": "mean: 8.513852971331712 usec\nrounds: 34966"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 120214.1031151399,
            "unit": "iter/sec",
            "range": "stddev: 0.000009198445350589791",
            "extra": "mean: 8.318491542063162 usec\nrounds: 45046"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 118388.4915720304,
            "unit": "iter/sec",
            "range": "stddev: 0.000001291710336183196",
            "extra": "mean: 8.446766967983336 usec\nrounds: 47620"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 120788.54575888025,
            "unit": "iter/sec",
            "range": "stddev: 9.263006193651957e-7",
            "extra": "mean: 8.278930702553648 usec\nrounds: 43104"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 119924.6204419707,
            "unit": "iter/sec",
            "range": "stddev: 7.48103580345038e-7",
            "extra": "mean: 8.338571315169444 usec\nrounds: 44051"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 118124.61029060597,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011084721049526428",
            "extra": "mean: 8.465636394819299 usec\nrounds: 43858"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 119456.53926856116,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012414838019307875",
            "extra": "mean: 8.371245359383874 usec\nrounds: 44445"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 117660.72736282802,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012484581872951838",
            "extra": "mean: 8.499012562758686 usec\nrounds: 43860"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 114053.67445098925,
            "unit": "iter/sec",
            "range": "stddev: 0.000003688683779647558",
            "extra": "mean: 8.767801693488767 usec\nrounds: 44053"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 118712.17469612714,
            "unit": "iter/sec",
            "range": "stddev: 0.000001234793291571148",
            "extra": "mean: 8.423735834675295 usec\nrounds: 46081"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 448903.587120727,
            "unit": "iter/sec",
            "range": "stddev: 1.6079565228643892e-7",
            "extra": "mean: 2.2276498310339017 usec\nrounds: 297"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 26371.36739552219,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025786083801058343",
            "extra": "mean: 37.91991461807165 usec\nrounds: 13141"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 446757.71270248556,
            "unit": "iter/sec",
            "range": "stddev: 5.92504923198377e-7",
            "extra": "mean: 2.238349717458468 usec\nrounds: 153847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 26557.09240046899,
            "unit": "iter/sec",
            "range": "stddev: 0.000002894299346689288",
            "extra": "mean: 37.654724580554614 usec\nrounds: 13405"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 448192.313172464,
            "unit": "iter/sec",
            "range": "stddev: 4.327512669180272e-7",
            "extra": "mean: 2.2311850752674576 usec\nrounds: 188680"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 26622.919470268404,
            "unit": "iter/sec",
            "range": "stddev: 0.000002315369580466807",
            "extra": "mean: 37.56162058472839 usec\nrounds: 12485"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 27810.306776120884,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026825342554422207",
            "extra": "mean: 35.95789172878318 usec\nrounds: 14085"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 449860.1305975657,
            "unit": "iter/sec",
            "range": "stddev: 3.981129257994505e-7",
            "extra": "mean: 2.2229131500754766 usec\nrounds: 166667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 27281.287704114628,
            "unit": "iter/sec",
            "range": "stddev: 0.000002392495604563766",
            "extra": "mean: 36.655161253593526 usec\nrounds: 12316"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 439911.62137398456,
            "unit": "iter/sec",
            "range": "stddev: 4.593347892951301e-7",
            "extra": "mean: 2.2731838656061885 usec\nrounds: 156250"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 27182.057894467875,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024077793290551316",
            "extra": "mean: 36.78897322205767 usec\nrounds: 12361"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 454158.4819288101,
            "unit": "iter/sec",
            "range": "stddev: 5.298425909773434e-7",
            "extra": "mean: 2.2018745433378277 usec\nrounds: 175439"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 440183.6047407334,
            "unit": "iter/sec",
            "range": "stddev: 4.6953776909940436e-7",
            "extra": "mean: 2.2717792967073285 usec\nrounds: 163935"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 26729.652342966383,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024103378276389302",
            "extra": "mean: 37.41163510729832 usec\nrounds: 12516"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 450347.6655030939,
            "unit": "iter/sec",
            "range": "stddev: 5.091540569529033e-7",
            "extra": "mean: 2.22050668095032 usec\nrounds: 166667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 26690.33716477293,
            "unit": "iter/sec",
            "range": "stddev: 0.000002656116734578128",
            "extra": "mean: 37.46674288250819 usec\nrounds: 12469"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 439195.5111560897,
            "unit": "iter/sec",
            "range": "stddev: 4.929493703417169e-7",
            "extra": "mean: 2.276890301924331 usec\nrounds: 123457"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 26357.89968803116,
            "unit": "iter/sec",
            "range": "stddev: 0.000002089482188146217",
            "extra": "mean: 37.939289997908645 usec\nrounds: 12107"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 27305.591458211067,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020677625775567344",
            "extra": "mean: 36.62253577368638 usec\nrounds: 13851"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 438405.61776771245,
            "unit": "iter/sec",
            "range": "stddev: 4.834998408641961e-7",
            "extra": "mean: 2.280992668597249 usec\nrounds: 181819"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 27149.232519339286,
            "unit": "iter/sec",
            "range": "stddev: 0.000002629910200144342",
            "extra": "mean: 36.83345373714219 usec\nrounds: 12937"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 451315.7912958573,
            "unit": "iter/sec",
            "range": "stddev: 4.7151697645812324e-7",
            "extra": "mean: 2.2157434312872426 usec\nrounds: 178572"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 27154.457525018428,
            "unit": "iter/sec",
            "range": "stddev: 0.000002674093579849943",
            "extra": "mean: 36.826366318629724 usec\nrounds: 12642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 442135.88899127464,
            "unit": "iter/sec",
            "range": "stddev: 5.307267934919583e-7",
            "extra": "mean: 2.261748084466707 usec\nrounds: 166667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 457266.25882627803,
            "unit": "iter/sec",
            "range": "stddev: 6.214875518881293e-7",
            "extra": "mean: 2.1869096630195806 usec\nrounds: 136987"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 26637.353052418668,
            "unit": "iter/sec",
            "range": "stddev: 0.000003020703130323529",
            "extra": "mean: 37.54126763391756 usec\nrounds: 12887"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 458279.5450420692,
            "unit": "iter/sec",
            "range": "stddev: 5.68436328471865e-7",
            "extra": "mean: 2.182074261918458 usec\nrounds: 166667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 26610.811993087373,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028060481566966966",
            "extra": "mean: 37.578710497814484 usec\nrounds: 12107"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 452001.5905621641,
            "unit": "iter/sec",
            "range": "stddev: 5.775702906942768e-7",
            "extra": "mean: 2.2123815952865975 usec\nrounds: 158731"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 26473.79034655225,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026001313900628113",
            "extra": "mean: 37.773208403844315 usec\nrounds: 12423"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 27210.336468398866,
            "unit": "iter/sec",
            "range": "stddev: 0.00000267429644984218",
            "extra": "mean: 36.75073996829716 usec\nrounds: 15152"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 452843.34955091955,
            "unit": "iter/sec",
            "range": "stddev: 6.104641572968164e-7",
            "extra": "mean: 2.2082691531004937 usec\nrounds: 151516"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 27132.047848491835,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022464295848372107",
            "extra": "mean: 36.856783003778546 usec\nrounds: 12438"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 453493.5394882876,
            "unit": "iter/sec",
            "range": "stddev: 5.136389052436238e-7",
            "extra": "mean: 2.2051030784879067 usec\nrounds: 175439"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 27171.7589273679,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016972173703170475",
            "extra": "mean: 36.80291742146959 usec\nrounds: 12691"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 457348.1570811175,
            "unit": "iter/sec",
            "range": "stddev: 4.856760712568444e-7",
            "extra": "mean: 2.1865180487053655 usec\nrounds: 178572"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 14908.316669100808,
            "unit": "iter/sec",
            "range": "stddev: 0.000004003751901676727",
            "extra": "mean: 67.07665407138919 usec\nrounds: 11274"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 15360.025955213945,
            "unit": "iter/sec",
            "range": "stddev: 0.000004254755447183495",
            "extra": "mean: 65.10405665431517 usec\nrounds: 12691"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 13052.720457825442,
            "unit": "iter/sec",
            "range": "stddev: 0.000004387518251793448",
            "extra": "mean: 76.61238155150056 usec\nrounds: 11199"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 12209.74676325199,
            "unit": "iter/sec",
            "range": "stddev: 0.00000960216756939265",
            "extra": "mean: 81.90178055205268 usec\nrounds: 6407"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 441240.84190324263,
            "unit": "iter/sec",
            "range": "stddev: 6.808726329833624e-7",
            "extra": "mean: 2.2663359894034576 usec\nrounds: 104167"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 437985.9755391524,
            "unit": "iter/sec",
            "range": "stddev: 9.048363184944017e-7",
            "extra": "mean: 2.2831781286353268 usec\nrounds: 131579"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 336833.69463518827,
            "unit": "iter/sec",
            "range": "stddev: 8.863442602148203e-7",
            "extra": "mean: 2.96882412872341 usec\nrounds: 101000"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 332777.57193385746,
            "unit": "iter/sec",
            "range": "stddev: 8.872928446486431e-7",
            "extra": "mean: 3.005010206032632 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 132248.919553723,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016552325528886085",
            "extra": "mean: 7.5614984483391074 usec\nrounds: 18692"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 129739.15853020814,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021743193665705934",
            "extra": "mean: 7.707773129784579 usec\nrounds: 27778"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 107934.67681834871,
            "unit": "iter/sec",
            "range": "stddev: 0.000001952436301004916",
            "extra": "mean: 9.264863058634756 usec\nrounds: 35088"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 107282.63736124495,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018581122369332554",
            "extra": "mean: 9.321172788032543 usec\nrounds: 32155"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 123756.86359999896,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017708764409492113",
            "extra": "mean: 8.080359916296459 usec\nrounds: 35461"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 124363.81909281919,
            "unit": "iter/sec",
            "range": "stddev: 0.000001984069107304852",
            "extra": "mean: 8.040923857875802 usec\nrounds: 35460"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 112952.97321755489,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016478549395775056",
            "extra": "mean: 8.85324194232527 usec\nrounds: 29941"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 111908.92242625763,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022112765881036333",
            "extra": "mean: 8.935837986099363 usec\nrounds: 19881"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 7255.7301356109965,
            "unit": "iter/sec",
            "range": "stddev: 0.000019084392367916602",
            "extra": "mean: 137.82210491705274 usec\nrounds: 1668"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 5314.550717772717,
            "unit": "iter/sec",
            "range": "stddev: 0.000010680849965849847",
            "extra": "mean: 188.16266004496643 usec\nrounds: 2215"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 5637.26761723651,
            "unit": "iter/sec",
            "range": "stddev: 0.000009158407784199863",
            "extra": "mean: 177.39090422856628 usec\nrounds: 2412"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 7786.552176501661,
            "unit": "iter/sec",
            "range": "stddev: 0.000007566996678286306",
            "extra": "mean: 128.42654583601333 usec\nrounds: 2389"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 136.67799653221795,
            "unit": "iter/sec",
            "range": "stddev: 0.00008500052581524194",
            "extra": "mean: 7.316466625001183 msec\nrounds: 32"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 112.35371529752325,
            "unit": "iter/sec",
            "range": "stddev: 0.012909701052333205",
            "extra": "mean: 8.900462235288842 msec\nrounds: 68"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 111.55025841360222,
            "unit": "iter/sec",
            "range": "stddev: 0.012965641226437207",
            "extra": "mean: 8.964569102944024 msec\nrounds: 68"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 113.13022066861197,
            "unit": "iter/sec",
            "range": "stddev: 0.012907843792434969",
            "extra": "mean: 8.839371072467559 msec\nrounds: 69"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 7404.961073697131,
            "unit": "iter/sec",
            "range": "stddev: 0.00000839265308017328",
            "extra": "mean: 135.04459916096795 usec\nrounds: 2385"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 5445.68119166832,
            "unit": "iter/sec",
            "range": "stddev: 0.000009094871351274364",
            "extra": "mean: 183.63175602897226 usec\nrounds: 2156"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 5648.82200307397,
            "unit": "iter/sec",
            "range": "stddev: 0.000009002684697974897",
            "extra": "mean: 177.02805991334492 usec\nrounds: 2320"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 7794.429585934861,
            "unit": "iter/sec",
            "range": "stddev: 0.000006991324743191351",
            "extra": "mean: 128.29675205540528 usec\nrounds: 3283"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 113.14693657861653,
            "unit": "iter/sec",
            "range": "stddev: 0.01279028871721596",
            "extra": "mean: 8.838065176472382 msec\nrounds: 68"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 112.51306859382424,
            "unit": "iter/sec",
            "range": "stddev: 0.012687948918275231",
            "extra": "mean: 8.88785642857215 msec\nrounds: 70"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 111.74588176658729,
            "unit": "iter/sec",
            "range": "stddev: 0.01291846172633379",
            "extra": "mean: 8.948875647057681 msec\nrounds: 68"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 112.58299096567882,
            "unit": "iter/sec",
            "range": "stddev: 0.012894473537953578",
            "extra": "mean: 8.882336411766252 msec\nrounds: 68"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 133028.6346446119,
            "unit": "iter/sec",
            "range": "stddev: 7.819417421576969e-7",
            "extra": "mean: 7.517178558372156 usec\nrounds: 53764"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 129144.8212767737,
            "unit": "iter/sec",
            "range": "stddev: 8.839388115180062e-7",
            "extra": "mean: 7.743245064832089 usec\nrounds: 41842"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 129738.506973916,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012196944166885755",
            "extra": "mean: 7.707811838786234 usec\nrounds: 42554"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 132060.8462765733,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010754014856922102",
            "extra": "mean: 7.572267088957713 usec\nrounds: 56498"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 117689.27973656019,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018786330567915474",
            "extra": "mean: 8.496950633383388 usec\nrounds: 44443"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 114623.96299081475,
            "unit": "iter/sec",
            "range": "stddev: 0.00000227669631575572",
            "extra": "mean: 8.724179254560704 usec\nrounds: 42554"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 115969.36681445119,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015002847704187882",
            "extra": "mean: 8.622966801224164 usec\nrounds: 46297"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 117691.06077984654,
            "unit": "iter/sec",
            "range": "stddev: 0.000001769986264126835",
            "extra": "mean: 8.496822047263258 usec\nrounds: 44641"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 91815.90978525615,
            "unit": "iter/sec",
            "range": "stddev: 8.517018542766542e-7",
            "extra": "mean: 10.891358614632827 usec\nrounds: 17668"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 94810.80373832313,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012836914708884076",
            "extra": "mean: 10.547321197276103 usec\nrounds: 24390"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 91541.11857073524,
            "unit": "iter/sec",
            "range": "stddev: 0.000002089666694462675",
            "extra": "mean: 10.92405266194431 usec\nrounds: 31446"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 91548.54473020817,
            "unit": "iter/sec",
            "range": "stddev: 8.138425604869229e-7",
            "extra": "mean: 10.923166533635035 usec\nrounds: 30030"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 80480.2432847441,
            "unit": "iter/sec",
            "range": "stddev: 0.000001140759156681746",
            "extra": "mean: 12.425409755061725 usec\nrounds: 29154"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 81794.8558315484,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012190096584677832",
            "extra": "mean: 12.22570771515803 usec\nrounds: 30395"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 82257.59578941595,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010240506435844456",
            "extra": "mean: 12.156932018291126 usec\nrounds: 29155"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 81603.54351757233,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013421658259493842",
            "extra": "mean: 12.254369809132886 usec\nrounds: 29499"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 72492.83014537628,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014739689705364464",
            "extra": "mean: 13.794467645898381 usec\nrounds: 12595"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 17089.305952526945,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021370691312211935",
            "extra": "mean: 58.51612714863548 usec\nrounds: 7912"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 17628.425647855573,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023817094143238114",
            "extra": "mean: 56.72656310755953 usec\nrounds: 8224"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 73517.01930676089,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015068410791366935",
            "extra": "mean: 13.602292495392785 usec\nrounds: 20161"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 65741.71010926455,
            "unit": "iter/sec",
            "range": "stddev: 0.000003161768945495638",
            "extra": "mean: 15.211043313871398 usec\nrounds: 23041"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 15504.141439334782,
            "unit": "iter/sec",
            "range": "stddev: 0.000006990766899529303",
            "extra": "mean: 64.498895595918 usec\nrounds: 6494"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 16018.661124454738,
            "unit": "iter/sec",
            "range": "stddev: 0.0000065307010784289865",
            "extra": "mean: 62.427189902491875 usec\nrounds: 7962"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 66531.3259994192,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013812731637749337",
            "extra": "mean: 15.030513596087498 usec\nrounds: 23867"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 498439.99085412285,
            "unit": "iter/sec",
            "range": "stddev: 5.278440773021313e-7",
            "extra": "mean: 2.0062595665456295 usec\nrounds: 105264"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 58298.29443993696,
            "unit": "iter/sec",
            "range": "stddev: 0.000002086625581027645",
            "extra": "mean: 17.15316047590845 usec\nrounds: 2100"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 28689.207208151332,
            "unit": "iter/sec",
            "range": "stddev: 0.000003376490155847979",
            "extra": "mean: 34.85631348209144 usec\nrounds: 1780"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 496619.1986080439,
            "unit": "iter/sec",
            "range": "stddev: 4.958007707812333e-7",
            "extra": "mean: 2.013615266592319 usec\nrounds: 149254"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 399553.26675116114,
            "unit": "iter/sec",
            "range": "stddev: 4.4997617518600076e-7",
            "extra": "mean: 2.5027952045823034 usec\nrounds: 128206"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 50581.39978312752,
            "unit": "iter/sec",
            "range": "stddev: 0.000003920603069304586",
            "extra": "mean: 19.770113209353507 usec\nrounds: 53"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 27500.44344539861,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027346466922264106",
            "extra": "mean: 36.363049999010855 usec\nrounds: 40"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 400005.09957983333,
            "unit": "iter/sec",
            "range": "stddev: 5.406284896424893e-7",
            "extra": "mean: 2.4999681280323753 usec\nrounds: 120482"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 77079.76849354502,
            "unit": "iter/sec",
            "range": "stddev: 0.000002941770367063089",
            "extra": "mean: 12.973572956225784 usec\nrounds: 30395"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 76157.54604677726,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025539588949355917",
            "extra": "mean: 13.130675184646613 usec\nrounds: 28410"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 76331.59507736283,
            "unit": "iter/sec",
            "range": "stddev: 0.000003517640182559759",
            "extra": "mean: 13.100735010011125 usec\nrounds: 29069"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 76403.09381879159,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027522249867057244",
            "extra": "mean: 13.088475217662545 usec\nrounds: 23202"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 67827.78691216503,
            "unit": "iter/sec",
            "range": "stddev: 0.000004180382725701997",
            "extra": "mean: 14.743220227647562 usec\nrounds: 25510"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 68040.26570355006,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035777224296598882",
            "extra": "mean: 14.697179525385422 usec\nrounds: 26882"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 66156.12101205013,
            "unit": "iter/sec",
            "range": "stddev: 0.000003991684681377137",
            "extra": "mean: 15.115759278235993 usec\nrounds: 27322"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 68402.2122481532,
            "unit": "iter/sec",
            "range": "stddev: 0.000004077729816812635",
            "extra": "mean: 14.619410208139854 usec\nrounds: 27625"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys0]",
            "value": 49295.02873105984,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030709385102290354",
            "extra": "mean: 20.286021242744898 usec\nrounds: 13699"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys1]",
            "value": 50089.130805265486,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028118472875961914",
            "extra": "mean: 19.964411119205877 usec\nrounds: 18868"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys2]",
            "value": 49601.83085290267,
            "unit": "iter/sec",
            "range": "stddev: 0.000004103095885715455",
            "extra": "mean: 20.16054614930571 usec\nrounds: 19231"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys3]",
            "value": 50724.346355370886,
            "unit": "iter/sec",
            "range": "stddev: 0.000003248495394985132",
            "extra": "mean: 19.714398939595526 usec\nrounds: 19048"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys4]",
            "value": 47320.66221533327,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032066810841890096",
            "extra": "mean: 21.132417704754157 usec\nrounds: 17182"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys5]",
            "value": 47202.759804875735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000044613194413768",
            "extra": "mean: 21.18520196983708 usec\nrounds: 19493"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys6]",
            "value": 47399.096801827814,
            "unit": "iter/sec",
            "range": "stddev: 0.000003395407789818652",
            "extra": "mean: 21.097448421452576 usec\nrounds: 19194"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys7]",
            "value": 47425.02056013658,
            "unit": "iter/sec",
            "range": "stddev: 0.000003321059251184021",
            "extra": "mean: 21.085916003599095 usec\nrounds: 19608"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 85191.294030936,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035704513415529604",
            "extra": "mean: 11.738288652322433 usec\nrounds: 28491"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 86542.99282236383,
            "unit": "iter/sec",
            "range": "stddev: 0.000002918096387018231",
            "extra": "mean: 11.554950520980677 usec\nrounds: 32155"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 85204.51659865874,
            "unit": "iter/sec",
            "range": "stddev: 0.000003443815187530803",
            "extra": "mean: 11.736467031558062 usec\nrounds: 29240"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 86635.93222471159,
            "unit": "iter/sec",
            "range": "stddev: 0.000002739223274832852",
            "extra": "mean: 11.542554853640336 usec\nrounds: 31347"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 81560.53202417836,
            "unit": "iter/sec",
            "range": "stddev: 0.000002282348964337684",
            "extra": "mean: 12.26083223321242 usec\nrounds: 15152"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 80468.07274728578,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029593426225880717",
            "extra": "mean: 12.427289058364213 usec\nrounds: 15848"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 81446.44762539475,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035155693286696333",
            "extra": "mean: 12.278006336131511 usec\nrounds: 31250"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 80839.72389949556,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030454780483601164",
            "extra": "mean: 12.370156054011957 usec\nrounds: 20243"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 86528.67212856034,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032491052919165864",
            "extra": "mean: 11.556862891808231 usec\nrounds: 28328"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 85527.75972934175,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030861595057701365",
            "extra": "mean: 11.692110294535553 usec\nrounds: 26810"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 85167.45467675202,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033415806527480762",
            "extra": "mean: 11.74157433488461 usec\nrounds: 32051"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 85963.70287110754,
            "unit": "iter/sec",
            "range": "stddev: 0.000002696416422522243",
            "extra": "mean: 11.632816719160905 usec\nrounds: 30396"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 82017.26468145149,
            "unit": "iter/sec",
            "range": "stddev: 0.000003403168784636568",
            "extra": "mean: 12.192554871025267 usec\nrounds: 32467"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 80893.56238582009,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029431010511189526",
            "extra": "mean: 12.361923130922605 usec\nrounds: 28490"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 81003.69046519737,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035314793944911105",
            "extra": "mean: 12.345116552802523 usec\nrounds: 29240"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 81199.88449364845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027304596970408513",
            "extra": "mean: 12.315288454360068 usec\nrounds: 26954"
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
        "date": 1669517727250,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 3.028469928657649,
            "unit": "iter/sec",
            "range": "stddev: 0.011144142823472458",
            "extra": "mean: 330.1997455999981 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 37895.666101035895,
            "unit": "iter/sec",
            "range": "stddev: 0.0002386395849633654",
            "extra": "mean: 26.38824179350326 usec\nrounds: 7159"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 23.774088666218226,
            "unit": "iter/sec",
            "range": "stddev: 0.0018619681525344775",
            "extra": "mean: 42.06260076000092 msec\nrounds: 25"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 787.7989541377756,
            "unit": "iter/sec",
            "range": "stddev: 0.0004494743021369445",
            "extra": "mean: 1.2693593901688696 msec\nrounds: 651"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 8548.891581065716,
            "unit": "iter/sec",
            "range": "stddev: 0.00006562659078094067",
            "extra": "mean: 116.97422882456752 usec\nrounds: 6883"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 8616.085860772988,
            "unit": "iter/sec",
            "range": "stddev: 0.00004724587553800571",
            "extra": "mean: 116.06198175818612 usec\nrounds: 4550"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 8454.026218609717,
            "unit": "iter/sec",
            "range": "stddev: 0.00015262679130406098",
            "extra": "mean: 118.28683447878545 usec\nrounds: 6984"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 8341.759288421043,
            "unit": "iter/sec",
            "range": "stddev: 0.0001332552197888229",
            "extra": "mean: 119.87878880514707 usec\nrounds: 6378"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 8383.914938999316,
            "unit": "iter/sec",
            "range": "stddev: 0.00005358856594849288",
            "extra": "mean: 119.27601929121641 usec\nrounds: 6998"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 7952.672245310936,
            "unit": "iter/sec",
            "range": "stddev: 0.00010543217254665085",
            "extra": "mean: 125.7438970390891 usec\nrounds: 6721"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 8122.2158723668435,
            "unit": "iter/sec",
            "range": "stddev: 0.00005981652330617386",
            "extra": "mean: 123.119111300916 usec\nrounds: 4097"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 8314.024959696668,
            "unit": "iter/sec",
            "range": "stddev: 0.00009170752410076057",
            "extra": "mean: 120.27868629786799 usec\nrounds: 6707"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 8326.964502873738,
            "unit": "iter/sec",
            "range": "stddev: 0.0000752333524727204",
            "extra": "mean: 120.09178130336542 usec\nrounds: 7028"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 8080.128501347052,
            "unit": "iter/sec",
            "range": "stddev: 0.0000892034209042296",
            "extra": "mean: 123.76040799763125 usec\nrounds: 6902"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 2554539.249647201,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010363297412852112",
            "extra": "mean: 391.4600255752706 nsec\nrounds: 133334"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 2566427.5300722765,
            "unit": "iter/sec",
            "range": "stddev: 8.339539515120677e-7",
            "extra": "mean: 389.6466930322508 nsec\nrounds: 147038"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 2609556.7040931056,
            "unit": "iter/sec",
            "range": "stddev: 8.689766306839459e-7",
            "extra": "mean: 383.20684828632017 nsec\nrounds: 135136"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 2581746.474537077,
            "unit": "iter/sec",
            "range": "stddev: 9.8827862492695e-7",
            "extra": "mean: 387.33470147532836 nsec\nrounds: 158731"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 2557744.5814696136,
            "unit": "iter/sec",
            "range": "stddev: 6.156083796215654e-7",
            "extra": "mean: 390.9694530270261 nsec\nrounds: 133334"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 8890.323145562888,
            "unit": "iter/sec",
            "range": "stddev: 0.00011866414044666328",
            "extra": "mean: 112.48185061744292 usec\nrounds: 6721"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 9143.622686672343,
            "unit": "iter/sec",
            "range": "stddev: 0.00008512459017294705",
            "extra": "mean: 109.36584264982746 usec\nrounds: 5510"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 8928.175559969435,
            "unit": "iter/sec",
            "range": "stddev: 0.00011554459227750522",
            "extra": "mean: 112.00496599592219 usec\nrounds: 7205"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 9022.99844427345,
            "unit": "iter/sec",
            "range": "stddev: 0.00012735160311993924",
            "extra": "mean: 110.82790340440117 usec\nrounds: 8313"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 8947.940003533553,
            "unit": "iter/sec",
            "range": "stddev: 0.00005980174385956093",
            "extra": "mean: 111.7575665019098 usec\nrounds: 7887"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 6519.809591242902,
            "unit": "iter/sec",
            "range": "stddev: 0.00010528422975465492",
            "extra": "mean: 153.37871236963002 usec\nrounds: 5368"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 6505.627968838777,
            "unit": "iter/sec",
            "range": "stddev: 0.00013212396917181707",
            "extra": "mean: 153.71306271890847 usec\nrounds: 3141"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 6414.4276733551205,
            "unit": "iter/sec",
            "range": "stddev: 0.00007891696251365095",
            "extra": "mean: 155.8985541537709 usec\nrounds: 5152"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 6270.699350345546,
            "unit": "iter/sec",
            "range": "stddev: 0.00007008961166709128",
            "extra": "mean: 159.47184582288978 usec\nrounds: 5578"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 6272.414158297216,
            "unit": "iter/sec",
            "range": "stddev: 0.00008276723623135399",
            "extra": "mean: 159.4282480019578 usec\nrounds: 4129"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 9187.883508919609,
            "unit": "iter/sec",
            "range": "stddev: 0.000049448154545549045",
            "extra": "mean: 108.83899420679406 usec\nrounds: 5869"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 7751.800073525318,
            "unit": "iter/sec",
            "range": "stddev: 0.00009193521562318002",
            "extra": "mean: 129.00229501729473 usec\nrounds: 4054"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 5849.8384837189005,
            "unit": "iter/sec",
            "range": "stddev: 0.00008463302974207951",
            "extra": "mean: 170.9448906637629 usec\nrounds: 4445"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 5315.460671785996,
            "unit": "iter/sec",
            "range": "stddev: 0.0000777534406383364",
            "extra": "mean: 188.13044846854257 usec\nrounds: 5550"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 8205.852099043927,
            "unit": "iter/sec",
            "range": "stddev: 0.00012909457638791806",
            "extra": "mean: 121.86424857895152 usec\nrounds: 8621"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 8260.067384333533,
            "unit": "iter/sec",
            "range": "stddev: 0.00006344746924349414",
            "extra": "mean: 121.06438767032957 usec\nrounds: 7705"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 8497.314709489481,
            "unit": "iter/sec",
            "range": "stddev: 0.00010806250254764245",
            "extra": "mean: 117.68423721946388 usec\nrounds: 3697"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 18111171.766419176,
            "unit": "iter/sec",
            "range": "stddev: 1.3128792968519456e-7",
            "extra": "mean: 55.21453900935044 nsec\nrounds: 178572"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 18273558.607056722,
            "unit": "iter/sec",
            "range": "stddev: 1.0095245334786856e-7",
            "extra": "mean: 54.72387844666861 nsec\nrounds: 200000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 14982540.38316145,
            "unit": "iter/sec",
            "range": "stddev: 1.322062820230107e-7",
            "extra": "mean: 66.74435539138643 nsec\nrounds: 166667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 17760530.1037713,
            "unit": "iter/sec",
            "range": "stddev: 2.5606076077130686e-7",
            "extra": "mean: 56.30462571554324 nsec\nrounds: 188680"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 18353059.47424077,
            "unit": "iter/sec",
            "range": "stddev: 1.3652754475751488e-7",
            "extra": "mean: 54.48682828089103 nsec\nrounds: 188680"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 18492975.47021137,
            "unit": "iter/sec",
            "range": "stddev: 1.0753477452325368e-7",
            "extra": "mean: 54.07458640775145 nsec\nrounds: 200000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 37731.717942453455,
            "unit": "iter/sec",
            "range": "stddev: 0.000022357264366530613",
            "extra": "mean: 26.50290139254063 usec\nrounds: 9766"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 15576.927884450619,
            "unit": "iter/sec",
            "range": "stddev: 0.00003853604720276807",
            "extra": "mean: 64.19751105082996 usec\nrounds: 7013"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 37415.8900903609,
            "unit": "iter/sec",
            "range": "stddev: 0.00002012681065869616",
            "extra": "mean: 26.726612612581423 usec\nrounds: 14430"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 15513.835157317159,
            "unit": "iter/sec",
            "range": "stddev: 0.000037754353215944555",
            "extra": "mean: 64.45859388472013 usec\nrounds: 7424"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 35989.14986773248,
            "unit": "iter/sec",
            "range": "stddev: 0.000022400906872356953",
            "extra": "mean: 27.786152317440273 usec\nrounds: 12579"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 15047.915303737262,
            "unit": "iter/sec",
            "range": "stddev: 0.000050121910515083154",
            "extra": "mean: 66.45438785475105 usec\nrounds: 6554"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 12213.386921426923,
            "unit": "iter/sec",
            "range": "stddev: 0.00009997370842505074",
            "extra": "mean: 81.87737000664573 usec\nrounds: 7435"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 26284.865176101146,
            "unit": "iter/sec",
            "range": "stddev: 0.00003381419142490807",
            "extra": "mean: 38.04470722220881 usec\nrounds: 11548"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 12296.818133917131,
            "unit": "iter/sec",
            "range": "stddev: 0.0000929544234425373",
            "extra": "mean: 81.32185001921727 usec\nrounds: 7801"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 25593.29506999837,
            "unit": "iter/sec",
            "range": "stddev: 0.00002347778064130567",
            "extra": "mean: 39.07273359155092 usec\nrounds: 11351"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 12351.473685546185,
            "unit": "iter/sec",
            "range": "stddev: 0.00003999095666470263",
            "extra": "mean: 80.96199898561171 usec\nrounds: 6902"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 25101.821544746377,
            "unit": "iter/sec",
            "range": "stddev: 0.000031152364127324236",
            "extra": "mean: 39.837746365035905 usec\nrounds: 9766"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 34392.70218972685,
            "unit": "iter/sec",
            "range": "stddev: 0.000045547900137438385",
            "extra": "mean: 29.075935775081422 usec\nrounds: 11849"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 14949.120677225714,
            "unit": "iter/sec",
            "range": "stddev: 0.00004457864851435551",
            "extra": "mean: 66.89356662452082 usec\nrounds: 6334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 35274.988861788974,
            "unit": "iter/sec",
            "range": "stddev: 0.00004863819719219551",
            "extra": "mean: 28.34869782434525 usec\nrounds: 12870"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 14426.372323975036,
            "unit": "iter/sec",
            "range": "stddev: 0.00006123190830244131",
            "extra": "mean: 69.31749559368508 usec\nrounds: 7716"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 34379.00189974816,
            "unit": "iter/sec",
            "range": "stddev: 0.000032509725920550664",
            "extra": "mean: 29.08752275345508 usec\nrounds: 8658"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 14170.672223393047,
            "unit": "iter/sec",
            "range": "stddev: 0.00011641354279417546",
            "extra": "mean: 70.56828245234497 usec\nrounds: 6394"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 12144.412689186498,
            "unit": "iter/sec",
            "range": "stddev: 0.0001160580143777487",
            "extra": "mean: 82.34239280178693 usec\nrounds: 7752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 25928.427992176817,
            "unit": "iter/sec",
            "range": "stddev: 0.000028706117926677916",
            "extra": "mean: 38.56770646881185 usec\nrounds: 10929"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 12312.13609607774,
            "unit": "iter/sec",
            "range": "stddev: 0.0000814768923716474",
            "extra": "mean: 81.22067464138644 usec\nrounds: 6897"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 25458.308071752555,
            "unit": "iter/sec",
            "range": "stddev: 0.000033034328478952964",
            "extra": "mean: 39.27990804343974 usec\nrounds: 9026"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 12278.920121318344,
            "unit": "iter/sec",
            "range": "stddev: 0.00007984318152355922",
            "extra": "mean: 81.44038646068115 usec\nrounds: 7962"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 25613.853497925993,
            "unit": "iter/sec",
            "range": "stddev: 0.000028193018535847474",
            "extra": "mean: 39.04137267283785 usec\nrounds: 9346"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 34192.140200011156,
            "unit": "iter/sec",
            "range": "stddev: 0.00005530164229815047",
            "extra": "mean: 29.24648747198556 usec\nrounds: 10257"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 14873.82699612823,
            "unit": "iter/sec",
            "range": "stddev: 0.00004001341998901691",
            "extra": "mean: 67.23219251241174 usec\nrounds: 6945"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 36313.68565189491,
            "unit": "iter/sec",
            "range": "stddev: 0.00003664463242262999",
            "extra": "mean: 27.537827186864412 usec\nrounds: 13124"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 14511.102085536779,
            "unit": "iter/sec",
            "range": "stddev: 0.00004407346851560711",
            "extra": "mean: 68.91275342874891 usec\nrounds: 6854"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 34477.57830869334,
            "unit": "iter/sec",
            "range": "stddev: 0.00003974468580736488",
            "extra": "mean: 29.00435729698148 usec\nrounds: 13423"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 14439.940939486458,
            "unit": "iter/sec",
            "range": "stddev: 0.00009150011419201209",
            "extra": "mean: 69.2523608088638 usec\nrounds: 7073"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 12005.240243851043,
            "unit": "iter/sec",
            "range": "stddev: 0.00008709234910558006",
            "extra": "mean: 83.29695863539169 usec\nrounds: 5657"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 23719.787661148683,
            "unit": "iter/sec",
            "range": "stddev: 0.00009009004220570349",
            "extra": "mean: 42.15889342204899 usec\nrounds: 8726"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 12256.811001646622,
            "unit": "iter/sec",
            "range": "stddev: 0.00006030678390803168",
            "extra": "mean: 81.58729051673038 usec\nrounds: 6812"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 24873.71967013387,
            "unit": "iter/sec",
            "range": "stddev: 0.000047214205163878933",
            "extra": "mean: 40.203074299366264 usec\nrounds: 11669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 12407.756185429245,
            "unit": "iter/sec",
            "range": "stddev: 0.00005893248587814464",
            "extra": "mean: 80.59474936929581 usec\nrounds: 6739"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 24057.64642125899,
            "unit": "iter/sec",
            "range": "stddev: 0.00002803797129738978",
            "extra": "mean: 41.566825885192635 usec\nrounds: 9488"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 37761.72046522968,
            "unit": "iter/sec",
            "range": "stddev: 0.00002104501245070455",
            "extra": "mean: 26.481844250734877 usec\nrounds: 14793"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 15052.912760446261,
            "unit": "iter/sec",
            "range": "stddev: 0.00008766699709256674",
            "extra": "mean: 66.43232548504811 usec\nrounds: 6753"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 36107.09992516079,
            "unit": "iter/sec",
            "range": "stddev: 0.00006366694699082824",
            "extra": "mean: 27.69538406775124 usec\nrounds: 14185"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 15101.71943429191,
            "unit": "iter/sec",
            "range": "stddev: 0.000042757121430415694",
            "extra": "mean: 66.21762537378831 usec\nrounds: 7693"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 36649.218755249436,
            "unit": "iter/sec",
            "range": "stddev: 0.00004403513178250078",
            "extra": "mean: 27.285711236525753 usec\nrounds: 9042"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 15558.965406012494,
            "unit": "iter/sec",
            "range": "stddev: 0.00003105055397429026",
            "extra": "mean: 64.27162564508095 usec\nrounds: 6200"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 12028.277885466377,
            "unit": "iter/sec",
            "range": "stddev: 0.00012310212126370292",
            "extra": "mean: 83.13742079473305 usec\nrounds: 7348"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 25475.154754624622,
            "unit": "iter/sec",
            "range": "stddev: 0.00003436188313153428",
            "extra": "mean: 39.25393229724995 usec\nrounds: 11905"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 12224.641940135272,
            "unit": "iter/sec",
            "range": "stddev: 0.00006907386857619988",
            "extra": "mean: 81.80198691274998 usec\nrounds: 6342"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 24576.65741731754,
            "unit": "iter/sec",
            "range": "stddev: 0.00002737739960501036",
            "extra": "mean: 40.68901572006966 usec\nrounds: 9542"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 11953.343603557509,
            "unit": "iter/sec",
            "range": "stddev: 0.0000806670781329755",
            "extra": "mean: 83.65860073681674 usec\nrounds: 6785"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 25139.126619218125,
            "unit": "iter/sec",
            "range": "stddev: 0.00003542488876396286",
            "extra": "mean: 39.778629351249194 usec\nrounds: 10112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 36886.45530546316,
            "unit": "iter/sec",
            "range": "stddev: 0.00002116950648374338",
            "extra": "mean: 27.110222213515122 usec\nrounds: 12821"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 14555.682801919955,
            "unit": "iter/sec",
            "range": "stddev: 0.00004345189065060317",
            "extra": "mean: 68.70168947815321 usec\nrounds: 6035"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 35229.68141068533,
            "unit": "iter/sec",
            "range": "stddev: 0.000036859596927519005",
            "extra": "mean: 28.385155924137745 usec\nrounds: 9588"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 14817.97252133189,
            "unit": "iter/sec",
            "range": "stddev: 0.00003795071769042905",
            "extra": "mean: 67.48561576561194 usec\nrounds: 7675"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 36241.06961911902,
            "unit": "iter/sec",
            "range": "stddev: 0.000026762984517276",
            "extra": "mean: 27.593004580429067 usec\nrounds: 14410"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 15087.577390759736,
            "unit": "iter/sec",
            "range": "stddev: 0.000047650879697079564",
            "extra": "mean: 66.27969316084118 usec\nrounds: 7033"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 12435.676426842883,
            "unit": "iter/sec",
            "range": "stddev: 0.00004623640594327801",
            "extra": "mean: 80.41380023699087 usec\nrounds: 6748"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 23934.176144618377,
            "unit": "iter/sec",
            "range": "stddev: 0.00008219846382532544",
            "extra": "mean: 41.78125847982659 usec\nrounds: 9552"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 12047.276089669975,
            "unit": "iter/sec",
            "range": "stddev: 0.00005846714284442666",
            "extra": "mean: 83.00631549877548 usec\nrounds: 6878"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 24640.29775506506,
            "unit": "iter/sec",
            "range": "stddev: 0.00005136090866471716",
            "extra": "mean: 40.583925159526125 usec\nrounds: 10342"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 11978.06142829704,
            "unit": "iter/sec",
            "range": "stddev: 0.00008048483381087565",
            "extra": "mean: 83.48596356649118 usec\nrounds: 7548"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 24215.374959052206,
            "unit": "iter/sec",
            "range": "stddev: 0.00007441999220970098",
            "extra": "mean: 41.296077458679996 usec\nrounds: 10483"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 34655.07148675276,
            "unit": "iter/sec",
            "range": "stddev: 0.00006083394017040581",
            "extra": "mean: 28.85580543044789 usec\nrounds: 13774"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 14587.129104692198,
            "unit": "iter/sec",
            "range": "stddev: 0.00003661304505935067",
            "extra": "mean: 68.55358534383114 usec\nrounds: 7669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 34437.593687593355,
            "unit": "iter/sec",
            "range": "stddev: 0.000081782650564539",
            "extra": "mean: 29.038033524399953 usec\nrounds: 13423"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 14864.218075328781,
            "unit": "iter/sec",
            "range": "stddev: 0.00003882106212744859",
            "extra": "mean: 67.27565452364914 usec\nrounds: 6698"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 32459.64274340075,
            "unit": "iter/sec",
            "range": "stddev: 0.0000882914018717669",
            "extra": "mean: 30.807486327104026 usec\nrounds: 15432"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 13774.475103758694,
            "unit": "iter/sec",
            "range": "stddev: 0.00010797117944587023",
            "extra": "mean: 72.59804765461634 usec\nrounds: 6694"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 11855.518202001715,
            "unit": "iter/sec",
            "range": "stddev: 0.0001083801644715625",
            "extra": "mean: 84.34890680958657 usec\nrounds: 7651"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 24061.655671344623,
            "unit": "iter/sec",
            "range": "stddev: 0.00008071163862829374",
            "extra": "mean: 41.55989985306434 usec\nrounds: 10894"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 12103.127322746313,
            "unit": "iter/sec",
            "range": "stddev: 0.0000842007885910923",
            "extra": "mean: 82.6232735832354 usec\nrounds: 6689"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 23726.34631017394,
            "unit": "iter/sec",
            "range": "stddev: 0.0001042218659416565",
            "extra": "mean: 42.14723948335848 usec\nrounds: 11149"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 11816.09483168044,
            "unit": "iter/sec",
            "range": "stddev: 0.00010591488503825654",
            "extra": "mean: 84.63032958392257 usec\nrounds: 7646"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 24208.69206495225,
            "unit": "iter/sec",
            "range": "stddev: 0.00003112421755141377",
            "extra": "mean: 41.30747738527081 usec\nrounds: 8689"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 119893.81326652599,
            "unit": "iter/sec",
            "range": "stddev: 0.000011001915490333133",
            "extra": "mean: 8.340713943070465 usec\nrounds: 45872"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 115477.80489833116,
            "unit": "iter/sec",
            "range": "stddev: 0.00002023090459646919",
            "extra": "mean: 8.659672747333731 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 122100.57292081453,
            "unit": "iter/sec",
            "range": "stddev: 0.000012001720569729231",
            "extra": "mean: 8.189969760817801 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 114853.57924005885,
            "unit": "iter/sec",
            "range": "stddev: 0.000017629196178480457",
            "extra": "mean: 8.706737801439086 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 118663.66240649829,
            "unit": "iter/sec",
            "range": "stddev: 0.00002237406784897218",
            "extra": "mean: 8.427179641349396 usec\nrounds: 51280"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 116924.68672659132,
            "unit": "iter/sec",
            "range": "stddev: 0.000013285249010803199",
            "extra": "mean: 8.55251382745486 usec\nrounds: 49503"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 111613.08785149519,
            "unit": "iter/sec",
            "range": "stddev: 0.00003824577822855714",
            "extra": "mean: 8.959522751763057 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 113353.01039476185,
            "unit": "iter/sec",
            "range": "stddev: 0.00001564476978101146",
            "extra": "mean: 8.821997726548345 usec\nrounds: 49262"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 114467.59686967832,
            "unit": "iter/sec",
            "range": "stddev: 0.000023359604149533377",
            "extra": "mean: 8.736096741320626 usec\nrounds: 42195"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 118910.12545843297,
            "unit": "iter/sec",
            "range": "stddev: 0.000012497810786111576",
            "extra": "mean: 8.409712765373936 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 113402.57521586548,
            "unit": "iter/sec",
            "range": "stddev: 0.000029706951782598065",
            "extra": "mean: 8.81814189930403 usec\nrounds: 52354"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 115276.54564392207,
            "unit": "iter/sec",
            "range": "stddev: 0.000034911524260112615",
            "extra": "mean: 8.674791514736238 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 118018.2990844263,
            "unit": "iter/sec",
            "range": "stddev: 0.000014555857700726428",
            "extra": "mean: 8.473262263207454 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 113625.4034351866,
            "unit": "iter/sec",
            "range": "stddev: 0.000012859598429273968",
            "extra": "mean: 8.800848839849559 usec\nrounds: 49259"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 117948.99986760902,
            "unit": "iter/sec",
            "range": "stddev: 0.000021514934931823255",
            "extra": "mean: 8.478240605027958 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 115380.2978612487,
            "unit": "iter/sec",
            "range": "stddev: 0.000013853095448300913",
            "extra": "mean: 8.666990972779045 usec\nrounds: 48077"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 117622.66734342482,
            "unit": "iter/sec",
            "range": "stddev: 0.000012447368398446336",
            "extra": "mean: 8.501762649883492 usec\nrounds: 35336"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 111684.07111988807,
            "unit": "iter/sec",
            "range": "stddev: 0.000014138192784138079",
            "extra": "mean: 8.95382832997324 usec\nrounds: 42372"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 115278.16493524313,
            "unit": "iter/sec",
            "range": "stddev: 0.000013166614884315323",
            "extra": "mean: 8.674669661524751 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 116043.53518936619,
            "unit": "iter/sec",
            "range": "stddev: 0.00004691853072008575",
            "extra": "mean: 8.617455495199671 usec\nrounds: 52354"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 117644.45525658758,
            "unit": "iter/sec",
            "range": "stddev: 0.000015111018252410681",
            "extra": "mean: 8.500188111874523 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 118887.81782893278,
            "unit": "iter/sec",
            "range": "stddev: 0.00004187910141237248",
            "extra": "mean: 8.411290729878617 usec\nrounds: 37454"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 109399.02438217602,
            "unit": "iter/sec",
            "range": "stddev: 0.000026384676562084544",
            "extra": "mean: 9.14084934164117 usec\nrounds: 45872"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 114589.25204855902,
            "unit": "iter/sec",
            "range": "stddev: 0.00002005373527760546",
            "extra": "mean: 8.726821949900101 usec\nrounds: 38023"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 113988.98430300235,
            "unit": "iter/sec",
            "range": "stddev: 0.000031565591381083176",
            "extra": "mean: 8.772777528588446 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 111481.7002012896,
            "unit": "iter/sec",
            "range": "stddev: 0.00003364723380002119",
            "extra": "mean: 8.970082069024922 usec\nrounds: 46729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 121448.61270469744,
            "unit": "iter/sec",
            "range": "stddev: 0.000011727710261785666",
            "extra": "mean: 8.233935141206612 usec\nrounds: 27398"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 115055.96153200204,
            "unit": "iter/sec",
            "range": "stddev: 0.000025058824469905236",
            "extra": "mean: 8.691422736246977 usec\nrounds: 19194"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 120590.86306062534,
            "unit": "iter/sec",
            "range": "stddev: 0.000010541262680427422",
            "extra": "mean: 8.292502222969118 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 118724.09941824315,
            "unit": "iter/sec",
            "range": "stddev: 0.000014537171591028572",
            "extra": "mean: 8.422889749428075 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 117359.27537001601,
            "unit": "iter/sec",
            "range": "stddev: 0.000014032613166063002",
            "extra": "mean: 8.520843340649058 usec\nrounds: 46949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 120134.09600489831,
            "unit": "iter/sec",
            "range": "stddev: 0.000008799981967189948",
            "extra": "mean: 8.32403150525415 usec\nrounds: 43104"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 115765.39128021168,
            "unit": "iter/sec",
            "range": "stddev: 0.000017461601770232702",
            "extra": "mean: 8.63816023892224 usec\nrounds: 25125"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 122403.73672993178,
            "unit": "iter/sec",
            "range": "stddev: 0.000017051770015229384",
            "extra": "mean: 8.169685229515274 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 113632.82689344762,
            "unit": "iter/sec",
            "range": "stddev: 0.000012090572863552686",
            "extra": "mean: 8.800273893895909 usec\nrounds: 47847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 115908.64310208328,
            "unit": "iter/sec",
            "range": "stddev: 0.00004971100085018217",
            "extra": "mean: 8.627484312099815 usec\nrounds: 39999"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 97584.06074060845,
            "unit": "iter/sec",
            "range": "stddev: 0.000017039564679390023",
            "extra": "mean: 10.24757519220413 usec\nrounds: 23420"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 97812.23288790678,
            "unit": "iter/sec",
            "range": "stddev: 0.000015804445218724395",
            "extra": "mean: 10.223670091919935 usec\nrounds: 47392"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 93936.01598803728,
            "unit": "iter/sec",
            "range": "stddev: 0.00003574173538622024",
            "extra": "mean: 10.64554409170759 usec\nrounds: 38760"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 93887.02269022135,
            "unit": "iter/sec",
            "range": "stddev: 0.000018560487462906962",
            "extra": "mean: 10.651099282373488 usec\nrounds: 38315"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 101764.61513080887,
            "unit": "iter/sec",
            "range": "stddev: 0.000015720855794268044",
            "extra": "mean: 9.826598358521709 usec\nrounds: 30582"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 98121.68879266574,
            "unit": "iter/sec",
            "range": "stddev: 0.00002501052356282238",
            "extra": "mean: 10.191426710082741 usec\nrounds: 36765"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 98230.4232693166,
            "unit": "iter/sec",
            "range": "stddev: 0.000026265528831665162",
            "extra": "mean: 10.18014548566403 usec\nrounds: 43860"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 96979.18668785214,
            "unit": "iter/sec",
            "range": "stddev: 0.000026187214123728888",
            "extra": "mean: 10.311490889470026 usec\nrounds: 38911"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 93387.96794051236,
            "unit": "iter/sec",
            "range": "stddev: 0.000027154101272020725",
            "extra": "mean: 10.708017553578152 usec\nrounds: 47170"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 96256.89653853624,
            "unit": "iter/sec",
            "range": "stddev: 0.00002587289432387893",
            "extra": "mean: 10.388866002963768 usec\nrounds: 40486"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 100951.6254776176,
            "unit": "iter/sec",
            "range": "stddev: 0.000007906407671810249",
            "extra": "mean: 9.905734506689187 usec\nrounds: 45455"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 97533.03719699512,
            "unit": "iter/sec",
            "range": "stddev: 0.000011864237333995701",
            "extra": "mean: 10.252936120303746 usec\nrounds: 25642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 96975.17605264507,
            "unit": "iter/sec",
            "range": "stddev: 0.00001682036476594115",
            "extra": "mean: 10.311917345291834 usec\nrounds: 32787"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 100404.94482258098,
            "unit": "iter/sec",
            "range": "stddev: 0.000034203522645776786",
            "extra": "mean: 9.959668836699574 usec\nrounds: 47620"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 99816.81317797131,
            "unit": "iter/sec",
            "range": "stddev: 0.000021949745157211684",
            "extra": "mean: 10.018352301200208 usec\nrounds: 43477"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 95478.06360995934,
            "unit": "iter/sec",
            "range": "stddev: 0.0000440067328976755",
            "extra": "mean: 10.473609981085643 usec\nrounds: 34365"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 97749.58078464071,
            "unit": "iter/sec",
            "range": "stddev: 0.000025198999762289294",
            "extra": "mean: 10.230222901959788 usec\nrounds: 23867"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 98910.08667626658,
            "unit": "iter/sec",
            "range": "stddev: 0.00001135027881858804",
            "extra": "mean: 10.110192333295664 usec\nrounds: 43669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 99067.0710476429,
            "unit": "iter/sec",
            "range": "stddev: 0.00001070110995561431",
            "extra": "mean: 10.09417144793838 usec\nrounds: 44445"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 94009.99903781056,
            "unit": "iter/sec",
            "range": "stddev: 0.000042902745382804914",
            "extra": "mean: 10.637166367779695 usec\nrounds: 44053"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 97953.11295214883,
            "unit": "iter/sec",
            "range": "stddev: 0.00002784883504786021",
            "extra": "mean: 10.208966002831486 usec\nrounds: 44445"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 99663.89888944634,
            "unit": "iter/sec",
            "range": "stddev: 0.00001556284522002067",
            "extra": "mean: 10.033723455965383 usec\nrounds: 42373"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 97899.17058972764,
            "unit": "iter/sec",
            "range": "stddev: 0.000019922701249113082",
            "extra": "mean: 10.214591134696782 usec\nrounds: 39683"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 94716.05329637154,
            "unit": "iter/sec",
            "range": "stddev: 0.000031069118422806483",
            "extra": "mean: 10.55787234790017 usec\nrounds: 42373"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 95923.61868433046,
            "unit": "iter/sec",
            "range": "stddev: 0.000017721107479465254",
            "extra": "mean: 10.424961169269926 usec\nrounds: 41153"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 98195.88224490262,
            "unit": "iter/sec",
            "range": "stddev: 0.000022504902390549976",
            "extra": "mean: 10.183726416408977 usec\nrounds: 43102"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 98493.66029796681,
            "unit": "iter/sec",
            "range": "stddev: 0.000016167173560560268",
            "extra": "mean: 10.152937731979515 usec\nrounds: 43104"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 93495.59642290811,
            "unit": "iter/sec",
            "range": "stddev: 0.00003043069987807625",
            "extra": "mean: 10.695690901598248 usec\nrounds: 24510"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 97084.0458663006,
            "unit": "iter/sec",
            "range": "stddev: 0.000012699937559635242",
            "extra": "mean: 10.300353586181926 usec\nrounds: 45870"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 96937.90836703769,
            "unit": "iter/sec",
            "range": "stddev: 0.000022857646372076595",
            "extra": "mean: 10.315881751994098 usec\nrounds: 44246"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 94200.37171718419,
            "unit": "iter/sec",
            "range": "stddev: 0.000012098834654105406",
            "extra": "mean: 10.615669362773632 usec\nrounds: 45249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 94368.76962083887,
            "unit": "iter/sec",
            "range": "stddev: 0.00005515792699344291",
            "extra": "mean: 10.59672605691339 usec\nrounds: 40001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 96647.40515961312,
            "unit": "iter/sec",
            "range": "stddev: 0.000036183146533869175",
            "extra": "mean: 10.346889276007987 usec\nrounds: 42195"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 99191.44905735787,
            "unit": "iter/sec",
            "range": "stddev: 0.000014792217609209259",
            "extra": "mean: 10.081514177918157 usec\nrounds: 42919"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 100282.62762762392,
            "unit": "iter/sec",
            "range": "stddev: 0.000014507787940407655",
            "extra": "mean: 9.971816890491402 usec\nrounds: 42734"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 97788.96567744215,
            "unit": "iter/sec",
            "range": "stddev: 0.000012044554433348374",
            "extra": "mean: 10.226102639212995 usec\nrounds: 38611"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 349476.45059764414,
            "unit": "iter/sec",
            "range": "stddev: 0.00000781409121063065",
            "extra": "mean: 2.86142313248829 usec\nrounds: 7617"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 23966.65791215322,
            "unit": "iter/sec",
            "range": "stddev: 0.00006257595463224932",
            "extra": "mean: 41.72463276546003 usec\nrounds: 7807"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 335344.9495186395,
            "unit": "iter/sec",
            "range": "stddev: 0.000023890381121608106",
            "extra": "mean: 2.982004057122134 usec\nrounds: 119048"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 24540.783278227267,
            "unit": "iter/sec",
            "range": "stddev: 0.000021379513030842722",
            "extra": "mean: 40.74849562308821 usec\nrounds: 8111"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 357097.66713143105,
            "unit": "iter/sec",
            "range": "stddev: 0.00001047403882053761",
            "extra": "mean: 2.8003543345242483 usec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 24301.98301353559,
            "unit": "iter/sec",
            "range": "stddev: 0.000044436065673385065",
            "extra": "mean: 41.1489053976799 usec\nrounds: 14006"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 24827.170560382394,
            "unit": "iter/sec",
            "range": "stddev: 0.00004613179027813306",
            "extra": "mean: 40.27845209215003 usec\nrounds: 8819"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 365923.2295716932,
            "unit": "iter/sec",
            "range": "stddev: 0.000006084972151120453",
            "extra": "mean: 2.7328136592215877 usec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 24831.715561742025,
            "unit": "iter/sec",
            "range": "stddev: 0.00003274343788985237",
            "extra": "mean: 40.271079841969915 usec\nrounds: 13176"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 348107.5114878176,
            "unit": "iter/sec",
            "range": "stddev: 0.000006657560630668271",
            "extra": "mean: 2.8726757309142292 usec\nrounds: 131579"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 25920.51947988978,
            "unit": "iter/sec",
            "range": "stddev: 0.0000330193468210804",
            "extra": "mean: 38.579473716791895 usec\nrounds: 11300"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 344892.28324831335,
            "unit": "iter/sec",
            "range": "stddev: 0.000008832449396692593",
            "extra": "mean: 2.8994559999477474 usec\nrounds: 114943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 348263.0905650088,
            "unit": "iter/sec",
            "range": "stddev: 0.000009129879420821192",
            "extra": "mean: 2.871392424553627 usec\nrounds: 138870"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 24394.39234604295,
            "unit": "iter/sec",
            "range": "stddev: 0.00004088072646196352",
            "extra": "mean: 40.99302765220186 usec\nrounds: 13055"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 352688.3672484958,
            "unit": "iter/sec",
            "range": "stddev: 0.00001388909804401112",
            "extra": "mean: 2.8353642843440423 usec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 24725.890680049466,
            "unit": "iter/sec",
            "range": "stddev: 0.00002609614699889766",
            "extra": "mean: 40.44343691961997 usec\nrounds: 12920"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 349119.5287770434,
            "unit": "iter/sec",
            "range": "stddev: 0.000014938265738590795",
            "extra": "mean: 2.864348504086763 usec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 24040.469190430107,
            "unit": "iter/sec",
            "range": "stddev: 0.00002503195540125795",
            "extra": "mean: 41.59652592795794 usec\nrounds: 13441"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 24990.51366400554,
            "unit": "iter/sec",
            "range": "stddev: 0.000025665621780508963",
            "extra": "mean: 40.015183899173906 usec\nrounds: 15552"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 342822.98242400767,
            "unit": "iter/sec",
            "range": "stddev: 0.0000069988150214983976",
            "extra": "mean: 2.916957296530335 usec\nrounds: 120482"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 24228.377871690154,
            "unit": "iter/sec",
            "range": "stddev: 0.00006372720295320888",
            "extra": "mean: 41.273914634147175 usec\nrounds: 10906"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 339497.8082333274,
            "unit": "iter/sec",
            "range": "stddev: 0.000007510428036460619",
            "extra": "mean: 2.9455271160770726 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 23872.31134963336,
            "unit": "iter/sec",
            "range": "stddev: 0.000053885341720588075",
            "extra": "mean: 41.889534086332134 usec\nrounds: 12659"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 349852.2082222055,
            "unit": "iter/sec",
            "range": "stddev: 0.000005055189695533606",
            "extra": "mean: 2.8583498302942223 usec\nrounds: 123457"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 351672.9407120879,
            "unit": "iter/sec",
            "range": "stddev: 0.000005886956023617329",
            "extra": "mean: 2.8435511642583067 usec\nrounds: 119048"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 24070.55594725326,
            "unit": "iter/sec",
            "range": "stddev: 0.00003714172752760509",
            "extra": "mean: 41.544532755759306 usec\nrounds: 13967"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 364253.8202599279,
            "unit": "iter/sec",
            "range": "stddev: 0.000005318979138362113",
            "extra": "mean: 2.745338399708231 usec\nrounds: 138889"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 24951.467447954303,
            "unit": "iter/sec",
            "range": "stddev: 0.000022043846546621206",
            "extra": "mean: 40.077803122637064 usec\nrounds: 10184"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 359129.2930494799,
            "unit": "iter/sec",
            "range": "stddev: 0.000004204331796533117",
            "extra": "mean: 2.784512484372091 usec\nrounds: 84746"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 24189.287143496345,
            "unit": "iter/sec",
            "range": "stddev: 0.00003756433105804643",
            "extra": "mean: 41.34061471376866 usec\nrounds: 12954"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 25091.355767455876,
            "unit": "iter/sec",
            "range": "stddev: 0.00002575060463435318",
            "extra": "mean: 39.85436296340054 usec\nrounds: 16751"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 351230.65378964983,
            "unit": "iter/sec",
            "range": "stddev: 0.000009218328541456826",
            "extra": "mean: 2.847131903808415 usec\nrounds: 153847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 17702.414923893248,
            "unit": "iter/sec",
            "range": "stddev: 0.0012111863238877532",
            "extra": "mean: 56.48946792283594 usec\nrounds: 7856"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 347630.16548396647,
            "unit": "iter/sec",
            "range": "stddev: 0.000006393309626728166",
            "extra": "mean: 2.876620326109537 usec\nrounds: 35088"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 23721.848747311797,
            "unit": "iter/sec",
            "range": "stddev: 0.00006232961037438944",
            "extra": "mean: 42.15523042289534 usec\nrounds: 11991"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 333276.37461207825,
            "unit": "iter/sec",
            "range": "stddev: 0.000021284164077961895",
            "extra": "mean: 3.0005127161022562 usec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 8479.047462499728,
            "unit": "iter/sec",
            "range": "stddev: 0.00009421485810595801",
            "extra": "mean: 117.93777596159222 usec\nrounds: 7646"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 7852.251254000421,
            "unit": "iter/sec",
            "range": "stddev: 0.00010267952515914474",
            "extra": "mean: 127.3520125187714 usec\nrounds: 5911"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 9296.920276092955,
            "unit": "iter/sec",
            "range": "stddev: 0.00008128198229216599",
            "extra": "mean: 107.56250137709598 usec\nrounds: 6173"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 7628.722174044898,
            "unit": "iter/sec",
            "range": "stddev: 0.0001224615340709538",
            "extra": "mean: 131.08355202687642 usec\nrounds: 6266"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 6488.603035586066,
            "unit": "iter/sec",
            "range": "stddev: 0.00015623928712315077",
            "extra": "mean: 154.11637828907152 usec\nrounds: 5168"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 5403.64701781819,
            "unit": "iter/sec",
            "range": "stddev: 0.00008891270960345273",
            "extra": "mean: 185.06020039846464 usec\nrounds: 4521"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 7739.838373189641,
            "unit": "iter/sec",
            "range": "stddev: 0.00010283132860527841",
            "extra": "mean: 129.2016643996008 usec\nrounds: 6469"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 6423.597289201059,
            "unit": "iter/sec",
            "range": "stddev: 0.00011755566891532437",
            "extra": "mean: 155.6760106492255 usec\nrounds: 1972"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 343095.9466655637,
            "unit": "iter/sec",
            "range": "stddev: 0.000006450472698506092",
            "extra": "mean: 2.9146365899063222 usec\nrounds: 81968"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 338061.16815734224,
            "unit": "iter/sec",
            "range": "stddev: 0.000006440922917312847",
            "extra": "mean: 2.958044561730245 usec\nrounds: 103093"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 228026.4538209551,
            "unit": "iter/sec",
            "range": "stddev: 0.00003804524800306942",
            "extra": "mean: 4.385456087411654 usec\nrounds: 80000"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 250174.29697433606,
            "unit": "iter/sec",
            "range": "stddev: 0.000013129851403497479",
            "extra": "mean: 3.9972131913398927 usec\nrounds: 89286"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 34786.9845295652,
            "unit": "iter/sec",
            "range": "stddev: 0.00003653612976238281",
            "extra": "mean: 28.746383554748974 usec\nrounds: 9644"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 34478.34329864591,
            "unit": "iter/sec",
            "range": "stddev: 0.00005839243263613769",
            "extra": "mean: 29.003713761364914 usec\nrounds: 15798"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 26719.327061927706,
            "unit": "iter/sec",
            "range": "stddev: 0.000043076008695370825",
            "extra": "mean: 37.426092269550345 usec\nrounds: 13298"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 25819.209872591557,
            "unit": "iter/sec",
            "range": "stddev: 0.00008826209885730726",
            "extra": "mean: 38.73085214205383 usec\nrounds: 12255"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 34080.06919513651,
            "unit": "iter/sec",
            "range": "stddev: 0.000020355519729064626",
            "extra": "mean: 29.342663428122023 usec\nrounds: 14410"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 34309.11909961743,
            "unit": "iter/sec",
            "range": "stddev: 0.00005488974310651157",
            "extra": "mean: 29.146769903840255 usec\nrounds: 14859"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 30907.45254108609,
            "unit": "iter/sec",
            "range": "stddev: 0.000024545703989232845",
            "extra": "mean: 32.354656168141766 usec\nrounds: 12954"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 28231.231098382577,
            "unit": "iter/sec",
            "range": "stddev: 0.0000694967444169245",
            "extra": "mean: 35.42176380885111 usec\nrounds: 12854"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 5192.420251310453,
            "unit": "iter/sec",
            "range": "stddev: 0.000060103074374949366",
            "extra": "mean: 192.58841765506597 usec\nrounds: 1348"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 3698.161343187533,
            "unit": "iter/sec",
            "range": "stddev: 0.00018665487167365306",
            "extra": "mean: 270.4046436054291 usec\nrounds: 1908"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 3397.1259977236477,
            "unit": "iter/sec",
            "range": "stddev: 0.0001339744795160979",
            "extra": "mean: 294.36647350439216 usec\nrounds: 1755"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 4603.203991595911,
            "unit": "iter/sec",
            "range": "stddev: 0.00003967031784820175",
            "extra": "mean: 217.23999236742586 usec\nrounds: 131"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 113.3865095179251,
            "unit": "iter/sec",
            "range": "stddev: 0.0009068257818416449",
            "extra": "mean: 8.819391338983863 msec\nrounds: 59"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 86.51121238725688,
            "unit": "iter/sec",
            "range": "stddev: 0.016514807392264415",
            "extra": "mean: 11.559195304345316 msec\nrounds: 46"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 90.60946278870841,
            "unit": "iter/sec",
            "range": "stddev: 0.014195376849638121",
            "extra": "mean: 11.036374890908396 msec\nrounds: 55"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 88.00538579923065,
            "unit": "iter/sec",
            "range": "stddev: 0.015644156108544145",
            "extra": "mean: 11.362940925926173 msec\nrounds: 54"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 5017.636348022962,
            "unit": "iter/sec",
            "range": "stddev: 0.00007871101546348963",
            "extra": "mean: 199.29702565910694 usec\nrounds: 1442"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 3781.2828712178116,
            "unit": "iter/sec",
            "range": "stddev: 0.00006540164467890486",
            "extra": "mean: 264.4605109053735 usec\nrounds: 1834"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 3374.4270351965706,
            "unit": "iter/sec",
            "range": "stddev: 0.00017040731986307526",
            "extra": "mean: 296.34660627407726 usec\nrounds: 1562"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 4536.146146348825,
            "unit": "iter/sec",
            "range": "stddev: 0.00010827650868030863",
            "extra": "mean: 220.45145101969584 usec\nrounds: 2011"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 107.89880019332671,
            "unit": "iter/sec",
            "range": "stddev: 0.0013556800720505864",
            "extra": "mean: 9.267943649125467 msec\nrounds: 57"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 88.94785665869483,
            "unit": "iter/sec",
            "range": "stddev: 0.014114772094684555",
            "extra": "mean: 11.24254183928386 msec\nrounds: 56"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 89.09430708525309,
            "unit": "iter/sec",
            "range": "stddev: 0.014650524647460307",
            "extra": "mean: 11.22406170175513 msec\nrounds: 57"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 89.60187780049989,
            "unit": "iter/sec",
            "range": "stddev: 0.015482265751770223",
            "extra": "mean: 11.160480388887798 msec\nrounds: 54"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 102916.62157565182,
            "unit": "iter/sec",
            "range": "stddev: 0.000011993498404958662",
            "extra": "mean: 9.716603447431678 usec\nrounds: 37594"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 98941.1150256181,
            "unit": "iter/sec",
            "range": "stddev: 0.000014324697093045763",
            "extra": "mean: 10.107021734504178 usec\nrounds: 37038"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 100521.1072967824,
            "unit": "iter/sec",
            "range": "stddev: 0.000015333031446709955",
            "extra": "mean: 9.948159415390853 usec\nrounds: 38315"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 103189.95486040808,
            "unit": "iter/sec",
            "range": "stddev: 0.000014129146410476941",
            "extra": "mean: 9.690865756776098 usec\nrounds: 37879"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 79623.26166607038,
            "unit": "iter/sec",
            "range": "stddev: 0.000014057554501879825",
            "extra": "mean: 12.559143886793663 usec\nrounds: 19842"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 73711.8039661318,
            "unit": "iter/sec",
            "range": "stddev: 0.00001936329708433653",
            "extra": "mean: 13.56634821282447 usec\nrounds: 32259"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 75166.23735774262,
            "unit": "iter/sec",
            "range": "stddev: 0.000026722349216241773",
            "extra": "mean: 13.30384538527115 usec\nrounds: 34130"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 79588.86359421669,
            "unit": "iter/sec",
            "range": "stddev: 0.000028591049891772525",
            "extra": "mean: 12.564571911699778 usec\nrounds: 36364"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 69109.86630521165,
            "unit": "iter/sec",
            "range": "stddev: 0.000022715094705307902",
            "extra": "mean: 14.46971399978803 usec\nrounds: 17986"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 68459.92514177687,
            "unit": "iter/sec",
            "range": "stddev: 0.000030320673355730177",
            "extra": "mean: 14.607085794047439 usec\nrounds: 26179"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 66386.38607944181,
            "unit": "iter/sec",
            "range": "stddev: 0.00003255487220617284",
            "extra": "mean: 15.063329382071528 usec\nrounds: 27248"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 71247.00236651639,
            "unit": "iter/sec",
            "range": "stddev: 0.000015278745188628755",
            "extra": "mean: 14.03567822903894 usec\nrounds: 25975"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 55378.773619611566,
            "unit": "iter/sec",
            "range": "stddev: 0.000023619415211274117",
            "extra": "mean: 18.057460189870746 usec\nrounds: 14205"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 55155.41922135083,
            "unit": "iter/sec",
            "range": "stddev: 0.00003781760418079627",
            "extra": "mean: 18.130584702597943 usec\nrounds: 23311"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 55441.708374314905,
            "unit": "iter/sec",
            "range": "stddev: 0.00003890098966016122",
            "extra": "mean: 18.036962231547705 usec\nrounds: 23697"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 56386.899980715876,
            "unit": "iter/sec",
            "range": "stddev: 0.000017855738267299884",
            "extra": "mean: 17.73461567034181 usec\nrounds: 23420"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 63343.792143705396,
            "unit": "iter/sec",
            "range": "stddev: 0.000013570675316774625",
            "extra": "mean: 15.786866655083454 usec\nrounds: 11429"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 13610.790122197819,
            "unit": "iter/sec",
            "range": "stddev: 0.00005019463935661578",
            "extra": "mean: 73.47112041417061 usec\nrounds: 4252"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 14275.881556379307,
            "unit": "iter/sec",
            "range": "stddev: 0.000058634584203552255",
            "extra": "mean: 70.0482135587025 usec\nrounds: 8157"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 62497.941348190456,
            "unit": "iter/sec",
            "range": "stddev: 0.00002004222193855763",
            "extra": "mean: 16.00052703222286 usec\nrounds: 20790"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 50696.85813679426,
            "unit": "iter/sec",
            "range": "stddev: 0.00003318642403337461",
            "extra": "mean: 19.725088235285135 usec\nrounds: 19380"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 11862.029581500488,
            "unit": "iter/sec",
            "range": "stddev: 0.000060174134010936446",
            "extra": "mean: 84.30260547988829 usec\nrounds: 5949"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 12279.023635475238,
            "unit": "iter/sec",
            "range": "stddev: 0.00004193475485263081",
            "extra": "mean: 81.43969990504027 usec\nrounds: 7381"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 54305.24424438623,
            "unit": "iter/sec",
            "range": "stddev: 0.00004631538145832023",
            "extra": "mean: 18.414427812897173 usec\nrounds: 18833"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 472146.7158593687,
            "unit": "iter/sec",
            "range": "stddev: 0.000005695955555873531",
            "extra": "mean: 2.117985715901612 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 14851.527487302912,
            "unit": "iter/sec",
            "range": "stddev: 0.0000155826456035352",
            "extra": "mean: 67.33314137922412 usec\nrounds: 580"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 13464.443169111535,
            "unit": "iter/sec",
            "range": "stddev: 0.00004275872346991387",
            "extra": "mean: 74.269688500307 usec\nrounds: 1374"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 463060.56355408364,
            "unit": "iter/sec",
            "range": "stddev: 0.000008747649881858478",
            "extra": "mean: 2.15954473066071 usec\nrounds: 109891"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 357228.7301634442,
            "unit": "iter/sec",
            "range": "stddev: 0.00000776864148703513",
            "extra": "mean: 2.7993269173575883 usec\nrounds: 104167"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 11759.654374644777,
            "unit": "iter/sec",
            "range": "stddev: 0.000016417235352330054",
            "extra": "mean: 85.0365128209992 usec\nrounds: 39"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 12030.909240969972,
            "unit": "iter/sec",
            "range": "stddev: 0.000014441567282277787",
            "extra": "mean: 83.1192372887834 usec\nrounds: 59"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 372180.6483920148,
            "unit": "iter/sec",
            "range": "stddev: 0.00000780526008481063",
            "extra": "mean: 2.6868672627672683 usec\nrounds: 108696"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 37449.30967369727,
            "unit": "iter/sec",
            "range": "stddev: 0.0000302558643018848",
            "extra": "mean: 26.70276191238728 usec\nrounds: 12361"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 14655.710810325945,
            "unit": "iter/sec",
            "range": "stddev: 0.00007399728842855455",
            "extra": "mean: 68.23278740567342 usec\nrounds: 7559"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 13905.43674792609,
            "unit": "iter/sec",
            "range": "stddev: 0.0000895917644381359",
            "extra": "mean: 71.9143179842333 usec\nrounds: 8969"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 39291.254794945715,
            "unit": "iter/sec",
            "range": "stddev: 0.000018539172843594102",
            "extra": "mean: 25.450956077092158 usec\nrounds: 17212"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 31306.024372720833,
            "unit": "iter/sec",
            "range": "stddev: 0.00002192811171929109",
            "extra": "mean: 31.94273370819232 usec\nrounds: 14225"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 12859.027110434083,
            "unit": "iter/sec",
            "range": "stddev: 0.00003726767170403764",
            "extra": "mean: 77.7663808787353 usec\nrounds: 7123"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 12470.918565268119,
            "unit": "iter/sec",
            "range": "stddev: 0.000032698861725449384",
            "extra": "mean: 80.18655520572717 usec\nrounds: 6032"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 31708.561666405287,
            "unit": "iter/sec",
            "range": "stddev: 0.000020032461864128042",
            "extra": "mean: 31.537223621829686 usec\nrounds: 4843"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 37468.878235753575,
            "unit": "iter/sec",
            "range": "stddev: 0.00006192434275835559",
            "extra": "mean: 26.688816081122482 usec\nrounds: 13718"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 14875.256224068125,
            "unit": "iter/sec",
            "range": "stddev: 0.00006414871267924211",
            "extra": "mean: 67.22573278314377 usec\nrounds: 8117"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 14107.745623563353,
            "unit": "iter/sec",
            "range": "stddev: 0.00005077901302490335",
            "extra": "mean: 70.8830472765087 usec\nrounds: 8757"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 39610.94256891172,
            "unit": "iter/sec",
            "range": "stddev: 0.00005280519415042501",
            "extra": "mean: 25.24554921308135 usec\nrounds: 15504"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 30947.98334828536,
            "unit": "iter/sec",
            "range": "stddev: 0.00003528749405541441",
            "extra": "mean: 32.3122831218469 usec\nrounds: 12454"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 12744.668638378927,
            "unit": "iter/sec",
            "range": "stddev: 0.00005939207715762214",
            "extra": "mean: 78.46418203362533 usec\nrounds: 7169"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 12734.775159988694,
            "unit": "iter/sec",
            "range": "stddev: 0.000042803048043952826",
            "extra": "mean: 78.5251398188712 usec\nrounds: 8511"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 32042.881245340533,
            "unit": "iter/sec",
            "range": "stddev: 0.00004734835567729762",
            "extra": "mean: 31.208179824509806 usec\nrounds: 15504"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 30083.85951823462,
            "unit": "iter/sec",
            "range": "stddev: 0.00002515097260161233",
            "extra": "mean: 33.24041582476722 usec\nrounds: 11779"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 28632.12716137454,
            "unit": "iter/sec",
            "range": "stddev: 0.00004493171912249707",
            "extra": "mean: 34.92580185760788 usec\nrounds: 13889"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 28064.180973044688,
            "unit": "iter/sec",
            "range": "stddev: 0.000053037299372644846",
            "extra": "mean: 35.63260944477546 usec\nrounds: 13870"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 28210.353323314404,
            "unit": "iter/sec",
            "range": "stddev: 0.0000708135061556899",
            "extra": "mean: 35.44797856798027 usec\nrounds: 13718"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 23910.14260413453,
            "unit": "iter/sec",
            "range": "stddev: 0.0000849545114308122",
            "extra": "mean: 41.82325536724656 usec\nrounds: 11877"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 22484.089640158254,
            "unit": "iter/sec",
            "range": "stddev: 0.0000689237679845383",
            "extra": "mean: 44.47589455496236 usec\nrounds: 13021"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 23070.570405698396,
            "unit": "iter/sec",
            "range": "stddev: 0.00004606569797195109",
            "extra": "mean: 43.34526552291059 usec\nrounds: 13351"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 23510.4347056518,
            "unit": "iter/sec",
            "range": "stddev: 0.00005047074630046632",
            "extra": "mean: 42.53430498074136 usec\nrounds: 13532"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys0]",
            "value": 28330.417240376097,
            "unit": "iter/sec",
            "range": "stddev: 0.00003373214508730721",
            "extra": "mean: 35.29775052429566 usec\nrounds: 12871"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys1]",
            "value": 28546.461334890344,
            "unit": "iter/sec",
            "range": "stddev: 0.00005132650004323104",
            "extra": "mean: 35.03061161481931 usec\nrounds: 13569"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys2]",
            "value": 27098.37332747482,
            "unit": "iter/sec",
            "range": "stddev: 0.000042483363597081086",
            "extra": "mean: 36.90258407452481 usec\nrounds: 11014"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys3]",
            "value": 27538.706964020334,
            "unit": "iter/sec",
            "range": "stddev: 0.00009132879524356392",
            "extra": "mean: 36.3125255411052 usec\nrounds: 12020"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys4]",
            "value": 22746.475362017896,
            "unit": "iter/sec",
            "range": "stddev: 0.000060515511545971455",
            "extra": "mean: 43.96285508346501 usec\nrounds: 10406"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys5]",
            "value": 23761.218892048477,
            "unit": "iter/sec",
            "range": "stddev: 0.000039442242237311616",
            "extra": "mean: 42.0853831002181 usec\nrounds: 12438"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys6]",
            "value": 23481.417301899233,
            "unit": "iter/sec",
            "range": "stddev: 0.00002455739510435966",
            "extra": "mean: 42.58686718706361 usec\nrounds: 11919"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys7]",
            "value": 23966.081884323296,
            "unit": "iter/sec",
            "range": "stddev: 0.000029497744556217454",
            "extra": "mean: 41.72563562232175 usec\nrounds: 12627"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 47140.00581795329,
            "unit": "iter/sec",
            "range": "stddev: 0.00004409053955287177",
            "extra": "mean: 21.213404255014954 usec\nrounds: 17954"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 17154.644041925534,
            "unit": "iter/sec",
            "range": "stddev: 0.000029612409842021927",
            "extra": "mean: 58.293252693324575 usec\nrounds: 7705"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 16239.067117552308,
            "unit": "iter/sec",
            "range": "stddev: 0.000104473024259455",
            "extra": "mean: 61.57989204436077 usec\nrounds: 9050"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 50821.18877908945,
            "unit": "iter/sec",
            "range": "stddev: 0.000031274511510647585",
            "extra": "mean: 19.67683212501817 usec\nrounds: 18484"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 43398.03771021161,
            "unit": "iter/sec",
            "range": "stddev: 0.00002688858327036871",
            "extra": "mean: 23.042516499880794 usec\nrounds: 8788"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 14263.65386427463,
            "unit": "iter/sec",
            "range": "stddev: 0.00004980858588468787",
            "extra": "mean: 70.10826324835628 usec\nrounds: 7605"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 13432.386721215942,
            "unit": "iter/sec",
            "range": "stddev: 0.00009365644826838858",
            "extra": "mean: 74.44693342699388 usec\nrounds: 8562"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 42367.499472736905,
            "unit": "iter/sec",
            "range": "stddev: 0.000049554926258784645",
            "extra": "mean: 23.602997874431814 usec\nrounds: 18349"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 47712.832506151266,
            "unit": "iter/sec",
            "range": "stddev: 0.00002605734924652583",
            "extra": "mean: 20.958722160774617 usec\nrounds: 13551"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 16401.000652477287,
            "unit": "iter/sec",
            "range": "stddev: 0.00009934169121921671",
            "extra": "mean: 60.97188953217651 usec\nrounds: 7776"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 15618.147297881666,
            "unit": "iter/sec",
            "range": "stddev: 0.00005857414235780154",
            "extra": "mean: 64.02808098343604 usec\nrounds: 9150"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 47911.75898626577,
            "unit": "iter/sec",
            "range": "stddev: 0.000026526775734865337",
            "extra": "mean: 20.871702921336215 usec\nrounds: 18692"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 43811.06577265984,
            "unit": "iter/sec",
            "range": "stddev: 0.00003254595210128386",
            "extra": "mean: 22.825283575366637 usec\nrounds: 15361"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 14353.0330350397,
            "unit": "iter/sec",
            "range": "stddev: 0.00005994889096517428",
            "extra": "mean: 69.67168524999038 usec\nrounds: 8251"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 13809.114966766141,
            "unit": "iter/sec",
            "range": "stddev: 0.00007616539351827591",
            "extra": "mean: 72.41593703917022 usec\nrounds: 7862"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 42843.38372413607,
            "unit": "iter/sec",
            "range": "stddev: 0.00001560902701927413",
            "extra": "mean: 23.340826822617288 usec\nrounds: 15129"
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
        "date": 1669518010193,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 3.6470572538359782,
            "unit": "iter/sec",
            "range": "stddev: 0.011452117122768194",
            "extra": "mean: 274.19366639999936 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 47359.14314642336,
            "unit": "iter/sec",
            "range": "stddev: 0.0001555821054952654",
            "extra": "mean: 21.115246889248706 usec\nrounds: 8117"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 25.705336906168554,
            "unit": "iter/sec",
            "range": "stddev: 0.004216141505296933",
            "extra": "mean: 38.902427291665965 msec\nrounds: 24"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 942.3390589794791,
            "unit": "iter/sec",
            "range": "stddev: 0.00033181760134840644",
            "extra": "mean: 1.0611891659069779 msec\nrounds: 1097"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 10151.8654648269,
            "unit": "iter/sec",
            "range": "stddev: 0.00004183467674407394",
            "extra": "mean: 98.50406346150795 usec\nrounds: 8320"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 10286.765723621187,
            "unit": "iter/sec",
            "range": "stddev: 0.00003493922778545006",
            "extra": "mean: 97.2122848782033 usec\nrounds: 5297"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 10461.254850295278,
            "unit": "iter/sec",
            "range": "stddev: 0.00003332094659256676",
            "extra": "mean: 95.5908267517041 usec\nrounds: 9091"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 10648.915333339784,
            "unit": "iter/sec",
            "range": "stddev: 0.00004631727264024694",
            "extra": "mean: 93.9062776533855 usec\nrounds: 8489"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 10300.632120981218,
            "unit": "iter/sec",
            "range": "stddev: 0.00004534595838264725",
            "extra": "mean: 97.08142065991402 usec\nrounds: 8577"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 10089.873799599298,
            "unit": "iter/sec",
            "range": "stddev: 0.000054639301209150825",
            "extra": "mean: 99.10926735671494 usec\nrounds: 8599"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 9659.22593113517,
            "unit": "iter/sec",
            "range": "stddev: 0.00005725665007469962",
            "extra": "mean: 103.52796457287941 usec\nrounds: 5222"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 10494.487034751752,
            "unit": "iter/sec",
            "range": "stddev: 0.00003899567411888979",
            "extra": "mean: 95.2881257262571 usec\nrounds: 4303"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 10388.543316594105,
            "unit": "iter/sec",
            "range": "stddev: 0.00003886548534933134",
            "extra": "mean: 96.25988644651011 usec\nrounds: 8780"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 10223.37055571785,
            "unit": "iter/sec",
            "range": "stddev: 0.000040012917460530246",
            "extra": "mean: 97.81509870447844 usec\nrounds: 9108"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 3372542.888392951,
            "unit": "iter/sec",
            "range": "stddev: 4.105361194124834e-7",
            "extra": "mean: 296.5121669589425 nsec\nrounds: 196040"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 3288881.079890355,
            "unit": "iter/sec",
            "range": "stddev: 6.181580484126905e-7",
            "extra": "mean: 304.05477598876297 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 3161187.889768874,
            "unit": "iter/sec",
            "range": "stddev: 6.614335770562632e-7",
            "extra": "mean: 316.3367806244546 nsec\nrounds: 196040"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 3306352.1890485343,
            "unit": "iter/sec",
            "range": "stddev: 4.0400852631231066e-7",
            "extra": "mean: 302.44811890081587 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 3190914.0761278104,
            "unit": "iter/sec",
            "range": "stddev: 4.1850069572590943e-7",
            "extra": "mean: 313.3898237753143 nsec\nrounds: 196040"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 10926.278600834843,
            "unit": "iter/sec",
            "range": "stddev: 0.00006793759229181329",
            "extra": "mean: 91.52246950060317 usec\nrounds: 9951"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 10620.020030651618,
            "unit": "iter/sec",
            "range": "stddev: 0.00008048033337451962",
            "extra": "mean: 94.16178096781259 usec\nrounds: 6757"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 11174.668480108425,
            "unit": "iter/sec",
            "range": "stddev: 0.00003839186040940799",
            "extra": "mean: 89.48811338609816 usec\nrounds: 10257"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 10934.307803345786,
            "unit": "iter/sec",
            "range": "stddev: 0.00009595270515883439",
            "extra": "mean: 91.45526337698398 usec\nrounds: 9606"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 10963.336009207718,
            "unit": "iter/sec",
            "range": "stddev: 0.00006621934021183587",
            "extra": "mean: 91.21311242856511 usec\nrounds: 9277"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 7963.313699184894,
            "unit": "iter/sec",
            "range": "stddev: 0.00005300838233670056",
            "extra": "mean: 125.57586424133432 usec\nrounds: 6762"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 8188.278047882536,
            "unit": "iter/sec",
            "range": "stddev: 0.00005605291328610944",
            "extra": "mean: 122.12579911824035 usec\nrounds: 5217"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 7712.471210696307,
            "unit": "iter/sec",
            "range": "stddev: 0.0001255413503444677",
            "extra": "mean: 129.66012743271125 usec\nrounds: 7502"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 8298.462253425936,
            "unit": "iter/sec",
            "range": "stddev: 0.00004096129736543429",
            "extra": "mean: 120.50425361483812 usec\nrounds: 6916"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 8155.51941150149,
            "unit": "iter/sec",
            "range": "stddev: 0.000054829518321015434",
            "extra": "mean: 122.616347229795 usec\nrounds: 7364"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 11303.354326637656,
            "unit": "iter/sec",
            "range": "stddev: 0.00004071474880622811",
            "extra": "mean: 88.46931371897143 usec\nrounds: 9075"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 9365.124548135711,
            "unit": "iter/sec",
            "range": "stddev: 0.000048400432353220876",
            "extra": "mean: 106.77914584692492 usec\nrounds: 6068"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 7185.785621849337,
            "unit": "iter/sec",
            "range": "stddev: 0.00004689909675767093",
            "extra": "mean: 139.1636283942798 usec\nrounds: 3388"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 5754.655577674527,
            "unit": "iter/sec",
            "range": "stddev: 0.00008476917537410073",
            "extra": "mean: 173.7723459731543 usec\nrounds: 5960"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 10205.874502553008,
            "unit": "iter/sec",
            "range": "stddev: 0.00003433036219511822",
            "extra": "mean: 97.98278430230053 usec\nrounds: 10320"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 10201.494071298972,
            "unit": "iter/sec",
            "range": "stddev: 0.000037488447279389176",
            "extra": "mean: 98.02485724256942 usec\nrounds: 10031"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 9927.780226273206,
            "unit": "iter/sec",
            "range": "stddev: 0.00003141412201443007",
            "extra": "mean: 100.72745137463528 usec\nrounds: 8257"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 22953392.468837995,
            "unit": "iter/sec",
            "range": "stddev: 6.29827272305995e-8",
            "extra": "mean: 43.56654474312512 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 22745040.395312928,
            "unit": "iter/sec",
            "range": "stddev: 6.977579547670727e-8",
            "extra": "mean: 43.96562866535764 nsec\nrounds: 185186"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 17912559.403753627,
            "unit": "iter/sec",
            "range": "stddev: 7.513544196984787e-8",
            "extra": "mean: 55.82675135699624 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 22523042.220047895,
            "unit": "iter/sec",
            "range": "stddev: 9.362208497451492e-8",
            "extra": "mean: 44.39897551267864 nsec\nrounds: 200000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 22158882.71041502,
            "unit": "iter/sec",
            "range": "stddev: 5.9427645340430665e-8",
            "extra": "mean: 45.12862914021617 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 22046917.795495626,
            "unit": "iter/sec",
            "range": "stddev: 2.9547366976346305e-8",
            "extra": "mean: 45.35781415235176 nsec\nrounds: 44445"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 40067.02297971319,
            "unit": "iter/sec",
            "range": "stddev: 0.000009531742429686762",
            "extra": "mean: 24.95818070901654 usec\nrounds: 8688"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 17157.919365131507,
            "unit": "iter/sec",
            "range": "stddev: 0.000016549202557626197",
            "extra": "mean: 58.28212493131363 usec\nrounds: 7268"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 40044.17804566442,
            "unit": "iter/sec",
            "range": "stddev: 0.000009055275787313643",
            "extra": "mean: 24.97241918312442 usec\nrounds: 563"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 16742.353560233227,
            "unit": "iter/sec",
            "range": "stddev: 0.00001671788065788119",
            "extra": "mean: 59.728758946724184 usec\nrounds: 8355"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 40086.73389150166,
            "unit": "iter/sec",
            "range": "stddev: 0.000011862034176927922",
            "extra": "mean: 24.945908606737326 usec\nrounds: 11642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 16939.343494971952,
            "unit": "iter/sec",
            "range": "stddev: 0.000020390067867481508",
            "extra": "mean: 59.034165066481265 usec\nrounds: 4895"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 14248.515104185646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000361492507997647",
            "extra": "mean: 70.18275186487608 usec\nrounds: 8177"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 26680.665841186044,
            "unit": "iter/sec",
            "range": "stddev: 0.000040932274161885625",
            "extra": "mean: 37.48032399012823 usec\nrounds: 3639"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 13843.635466974538,
            "unit": "iter/sec",
            "range": "stddev: 0.000028726518867814632",
            "extra": "mean: 72.23536060203305 usec\nrounds: 7310"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 26773.73355552314,
            "unit": "iter/sec",
            "range": "stddev: 0.00004591881819643781",
            "extra": "mean: 37.35003928108153 usec\nrounds: 7179"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 14073.218936940924,
            "unit": "iter/sec",
            "range": "stddev: 0.000030826929000586933",
            "extra": "mean: 71.05694898095352 usec\nrounds: 7801"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 29083.890253528793,
            "unit": "iter/sec",
            "range": "stddev: 0.000016312018881564727",
            "extra": "mean: 34.38329574492423 usec\nrounds: 11351"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 39833.78615891582,
            "unit": "iter/sec",
            "range": "stddev: 0.000017019085859220393",
            "extra": "mean: 25.104317124426156 usec\nrounds: 8555"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 17287.582443203028,
            "unit": "iter/sec",
            "range": "stddev: 0.00002460195727839265",
            "extra": "mean: 57.84498805922807 usec\nrounds: 7956"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 38458.559418007964,
            "unit": "iter/sec",
            "range": "stddev: 0.000025385862066578717",
            "extra": "mean: 26.00201398942043 usec\nrounds: 12438"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 17410.845107655856,
            "unit": "iter/sec",
            "range": "stddev: 0.00003147961243384647",
            "extra": "mean: 57.43546587295078 usec\nrounds: 3780"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 37920.982153436424,
            "unit": "iter/sec",
            "range": "stddev: 0.000013195011151282863",
            "extra": "mean: 26.37062500000094 usec\nrounds: 12904"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 16952.920426302833,
            "unit": "iter/sec",
            "range": "stddev: 0.000018708451444047852",
            "extra": "mean: 58.98688691114705 usec\nrounds: 7640"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 14145.01524809671,
            "unit": "iter/sec",
            "range": "stddev: 0.000029184882905276105",
            "extra": "mean: 70.69628292797745 usec\nrounds: 8306"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 29321.03997843965,
            "unit": "iter/sec",
            "range": "stddev: 0.000022272574417972494",
            "extra": "mean: 34.10520229621187 usec\nrounds: 11236"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 14533.953691428236,
            "unit": "iter/sec",
            "range": "stddev: 0.00002296846117335543",
            "extra": "mean: 68.80440252054575 usec\nrounds: 7776"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 29174.826500997144,
            "unit": "iter/sec",
            "range": "stddev: 0.00002375086427541292",
            "extra": "mean: 34.276124999948905 usec\nrounds: 11416"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 15087.638157842177,
            "unit": "iter/sec",
            "range": "stddev: 0.00003666733339304919",
            "extra": "mean: 66.27942621226138 usec\nrounds: 5692"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 27523.52546896495,
            "unit": "iter/sec",
            "range": "stddev: 0.00002109197999951684",
            "extra": "mean: 36.33255489481472 usec\nrounds: 10593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 36243.83725960082,
            "unit": "iter/sec",
            "range": "stddev: 0.00003483703061332746",
            "extra": "mean: 27.590897532106776 usec\nrounds: 12804"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 16772.431428347292,
            "unit": "iter/sec",
            "range": "stddev: 0.000024288791624624354",
            "extra": "mean: 59.62164783752746 usec\nrounds: 7931"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 37853.465351756306,
            "unit": "iter/sec",
            "range": "stddev: 0.000025379326911443125",
            "extra": "mean: 26.417660594807405 usec\nrounds: 14493"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 16502.055825010346,
            "unit": "iter/sec",
            "range": "stddev: 0.00005681326623433782",
            "extra": "mean: 60.598510307086116 usec\nrounds: 6743"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 38528.6457463772,
            "unit": "iter/sec",
            "range": "stddev: 0.000020462230742159722",
            "extra": "mean: 25.954714489128612 usec\nrounds: 11236"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 16747.586193166626,
            "unit": "iter/sec",
            "range": "stddev: 0.00003219561000141615",
            "extra": "mean: 59.71009723228184 usec\nrounds: 8238"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 14389.04202580761,
            "unit": "iter/sec",
            "range": "stddev: 0.000024371756198760908",
            "extra": "mean: 69.4973298574318 usec\nrounds: 7576"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 27427.567565222143,
            "unit": "iter/sec",
            "range": "stddev: 0.000017249404757831842",
            "extra": "mean: 36.45966772744329 usec\nrounds: 11313"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 14245.967143620046,
            "unit": "iter/sec",
            "range": "stddev: 0.00003243747558225738",
            "extra": "mean: 70.19530439166026 usec\nrounds: 7924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 27019.441573515225,
            "unit": "iter/sec",
            "range": "stddev: 0.000034442749891165074",
            "extra": "mean: 37.01038740120417 usec\nrounds: 9747"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 14563.046025635907,
            "unit": "iter/sec",
            "range": "stddev: 0.00001831694091224676",
            "extra": "mean: 68.66695320743067 usec\nrounds: 4552"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 28773.53986896138,
            "unit": "iter/sec",
            "range": "stddev: 0.00001141220565300387",
            "extra": "mean: 34.75415275819854 usec\nrounds: 11312"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 40778.498493127256,
            "unit": "iter/sec",
            "range": "stddev: 0.000014447328848524093",
            "extra": "mean: 24.522727342904457 usec\nrounds: 12954"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 17191.042642791985,
            "unit": "iter/sec",
            "range": "stddev: 0.00003171976104300551",
            "extra": "mean: 58.16982836810594 usec\nrounds: 5203"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 41247.09261831852,
            "unit": "iter/sec",
            "range": "stddev: 0.0000153554552797337",
            "extra": "mean: 24.244133016926465 usec\nrounds: 14750"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 16494.572519265363,
            "unit": "iter/sec",
            "range": "stddev: 0.0000349037102659057",
            "extra": "mean: 60.62600281589706 usec\nrounds: 7813"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 41348.38532917255,
            "unit": "iter/sec",
            "range": "stddev: 0.000015433977946344123",
            "extra": "mean: 24.184741242954157 usec\nrounds: 12904"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 17006.121337506218,
            "unit": "iter/sec",
            "range": "stddev: 0.000022710038451886204",
            "extra": "mean: 58.80235593724397 usec\nrounds: 6636"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 14522.166031160416,
            "unit": "iter/sec",
            "range": "stddev: 0.000028237949299637184",
            "extra": "mean: 68.860251139829 usec\nrounds: 8334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 28278.068599480284,
            "unit": "iter/sec",
            "range": "stddev: 0.000021500072073022407",
            "extra": "mean: 35.36309406995281 usec\nrounds: 11821"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 14417.089372049146,
            "unit": "iter/sec",
            "range": "stddev: 0.00003467654483672996",
            "extra": "mean: 69.36212811018088 usec\nrounds: 7837"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 29289.067341198108,
            "unit": "iter/sec",
            "range": "stddev: 0.0000217845114270572",
            "extra": "mean: 34.14243234004916 usec\nrounds: 10538"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 14322.043574922503,
            "unit": "iter/sec",
            "range": "stddev: 0.00003432885645647153",
            "extra": "mean: 69.82243803188618 usec\nrounds: 3760"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 29381.646694672872,
            "unit": "iter/sec",
            "range": "stddev: 0.000028009627120672685",
            "extra": "mean: 34.03485210995025 usec\nrounds: 10616"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 37318.164978360895,
            "unit": "iter/sec",
            "range": "stddev: 0.00006437101640494936",
            "extra": "mean: 26.796601616929838 usec\nrounds: 14225"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 17088.178956517975,
            "unit": "iter/sec",
            "range": "stddev: 0.00003676597086646935",
            "extra": "mean: 58.519986392029686 usec\nrounds: 8157"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 38050.71237619266,
            "unit": "iter/sec",
            "range": "stddev: 0.000023024453494332007",
            "extra": "mean: 26.280716905202382 usec\nrounds: 8453"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 16977.357433466143,
            "unit": "iter/sec",
            "range": "stddev: 0.00003679769082698902",
            "extra": "mean: 58.90198188492975 usec\nrounds: 8446"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 40086.05605549386,
            "unit": "iter/sec",
            "range": "stddev: 0.0000260546963798044",
            "extra": "mean: 24.946330430103473 usec\nrounds: 13089"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 16272.126072522633,
            "unit": "iter/sec",
            "range": "stddev: 0.000055524249519022176",
            "extra": "mean: 61.45478442971356 usec\nrounds: 8285"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 14334.155114215584,
            "unit": "iter/sec",
            "range": "stddev: 0.000025048138804504333",
            "extra": "mean: 69.76344207467602 usec\nrounds: 7924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 25468.461462032174,
            "unit": "iter/sec",
            "range": "stddev: 0.00010969196217498181",
            "extra": "mean: 39.2642485095057 usec\nrounds: 7380"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 14640.58507159629,
            "unit": "iter/sec",
            "range": "stddev: 0.000038628187569909295",
            "extra": "mean: 68.30328126299177 usec\nrounds: 7189"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 29209.603605995213,
            "unit": "iter/sec",
            "range": "stddev: 0.000014462585930356807",
            "extra": "mean: 34.23531566839723 usec\nrounds: 11737"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 14057.228443825901,
            "unit": "iter/sec",
            "range": "stddev: 0.000025465100746419834",
            "extra": "mean: 71.13777826092111 usec\nrounds: 3450"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 28162.97715145696,
            "unit": "iter/sec",
            "range": "stddev: 0.00002403723585670745",
            "extra": "mean: 35.50760967571452 usec\nrounds: 11224"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 35507.83953131452,
            "unit": "iter/sec",
            "range": "stddev: 0.000017196718199524645",
            "extra": "mean: 28.162794841913584 usec\nrounds: 12020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 16514.57992756481,
            "unit": "iter/sec",
            "range": "stddev: 0.000042286625378558815",
            "extra": "mean: 60.55255443287905 usec\nrounds: 4850"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 36649.05545278905,
            "unit": "iter/sec",
            "range": "stddev: 0.00006098232247690311",
            "extra": "mean: 27.28583281738844 usec\nrounds: 12920"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 16747.45941307971,
            "unit": "iter/sec",
            "range": "stddev: 0.00003601536929587397",
            "extra": "mean: 59.71054924420377 usec\nrounds: 8204"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 36236.84886606217,
            "unit": "iter/sec",
            "range": "stddev: 0.000014514719317717272",
            "extra": "mean: 27.596218525958964 usec\nrounds: 10461"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 16011.017500311482,
            "unit": "iter/sec",
            "range": "stddev: 0.000021663823302600745",
            "extra": "mean: 62.45699250410199 usec\nrounds: 4936"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 13520.340143462508,
            "unit": "iter/sec",
            "range": "stddev: 0.000028023224315659674",
            "extra": "mean: 73.96263624946819 usec\nrounds: 7956"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 27534.716192307136,
            "unit": "iter/sec",
            "range": "stddev: 0.000013964762592104689",
            "extra": "mean: 36.31778853342196 usec\nrounds: 7221"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 13970.7265032196,
            "unit": "iter/sec",
            "range": "stddev: 0.00005320678575979946",
            "extra": "mean: 71.57823895339637 usec\nrounds: 7491"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 27361.620838066607,
            "unit": "iter/sec",
            "range": "stddev: 0.000015245166602038032",
            "extra": "mean: 36.54754248362213 usec\nrounds: 7956"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 14012.689023516221,
            "unit": "iter/sec",
            "range": "stddev: 0.00003389228763184558",
            "extra": "mean: 71.3638901371315 usec\nrounds: 6854"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 28186.54500132504,
            "unit": "iter/sec",
            "range": "stddev: 0.000020761103889229515",
            "extra": "mean: 35.477920403262985 usec\nrounds: 11508"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 147001.04592252214,
            "unit": "iter/sec",
            "range": "stddev: 0.000011137513384465226",
            "extra": "mean: 6.802672686608343 usec\nrounds: 58140"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 139784.89985641278,
            "unit": "iter/sec",
            "range": "stddev: 0.00001509488505658335",
            "extra": "mean: 7.153848527467567 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 146084.66791243348,
            "unit": "iter/sec",
            "range": "stddev: 0.000006948469850649276",
            "extra": "mean: 6.845345334935648 usec\nrounds: 59881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 147253.22875144263,
            "unit": "iter/sec",
            "range": "stddev: 0.0000136215194407031",
            "extra": "mean: 6.7910225702959535 usec\nrounds: 56180"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 151556.10657392893,
            "unit": "iter/sec",
            "range": "stddev: 0.000005228140786261685",
            "extra": "mean: 6.598216479731227 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 146617.61870552684,
            "unit": "iter/sec",
            "range": "stddev: 0.00001337069843569276",
            "extra": "mean: 6.82046270311103 usec\nrounds: 45044"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 147573.4121477492,
            "unit": "iter/sec",
            "range": "stddev: 0.000005492159740413321",
            "extra": "mean: 6.776288394001549 usec\nrounds: 49259"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 150496.4941300653,
            "unit": "iter/sec",
            "range": "stddev: 0.000011263867741807996",
            "extra": "mean: 6.644673058867131 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 141931.34209785302,
            "unit": "iter/sec",
            "range": "stddev: 0.000016222229505541428",
            "extra": "mean: 7.045660142567812 usec\nrounds: 59881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 153873.950409699,
            "unit": "iter/sec",
            "range": "stddev: 0.000010885632785565666",
            "extra": "mean: 6.4988258073406024 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 134170.7342529801,
            "unit": "iter/sec",
            "range": "stddev: 0.00002798139251104399",
            "extra": "mean: 7.45319018761939 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 142403.5328522956,
            "unit": "iter/sec",
            "range": "stddev: 0.000008163338114094571",
            "extra": "mean: 7.022297691428935 usec\nrounds: 62894"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 141952.75322085706,
            "unit": "iter/sec",
            "range": "stddev: 0.000004498725122989517",
            "extra": "mean: 7.044597426329244 usec\nrounds: 28986"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 134467.02030658993,
            "unit": "iter/sec",
            "range": "stddev: 0.000014141276486116585",
            "extra": "mean: 7.436767749593633 usec\nrounds: 58480"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 150791.40078311725,
            "unit": "iter/sec",
            "range": "stddev: 0.000008373011462390195",
            "extra": "mean: 6.631677899446643 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 147945.7401914703,
            "unit": "iter/sec",
            "range": "stddev: 0.00001180974275235837",
            "extra": "mean: 6.759234829646377 usec\nrounds: 59524"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 149174.46874156364,
            "unit": "iter/sec",
            "range": "stddev: 0.000008067044764186448",
            "extra": "mean: 6.703559988756814 usec\nrounds: 60603"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 150535.0213448894,
            "unit": "iter/sec",
            "range": "stddev: 0.0000080208404703538",
            "extra": "mean: 6.642972452961025 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 141338.88651896486,
            "unit": "iter/sec",
            "range": "stddev: 0.000005477281645870072",
            "extra": "mean: 7.075193703792339 usec\nrounds: 25126"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 145003.01499860987,
            "unit": "iter/sec",
            "range": "stddev: 0.000009024696724376279",
            "extra": "mean: 6.896408326472295 usec\nrounds: 59521"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 137402.38175147874,
            "unit": "iter/sec",
            "range": "stddev: 0.00000499467459971246",
            "extra": "mean: 7.2778942202669485 usec\nrounds: 58480"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 149184.78307904856,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054402918205650165",
            "extra": "mean: 6.70309651802845 usec\nrounds: 30212"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 134880.17957645105,
            "unit": "iter/sec",
            "range": "stddev: 0.00001960891698377451",
            "extra": "mean: 7.413987756690322 usec\nrounds: 43289"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 149437.149644605,
            "unit": "iter/sec",
            "range": "stddev: 0.000006112935509444128",
            "extra": "mean: 6.691776458385507 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 150013.86298651432,
            "unit": "iter/sec",
            "range": "stddev: 0.000012434378331765593",
            "extra": "mean: 6.666050590870367 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 144169.81884583278,
            "unit": "iter/sec",
            "range": "stddev: 0.000010899076292714407",
            "extra": "mean: 6.936264524750111 usec\nrounds: 62497"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 159555.75294675241,
            "unit": "iter/sec",
            "range": "stddev: 0.000005848008225047729",
            "extra": "mean: 6.267401717152274 usec\nrounds: 47170"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 142899.6182833074,
            "unit": "iter/sec",
            "range": "stddev: 0.00001960445503935021",
            "extra": "mean: 6.997919322761503 usec\nrounds: 30120"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 153694.03140557074,
            "unit": "iter/sec",
            "range": "stddev: 0.00001051189263288698",
            "extra": "mean: 6.506433534567005 usec\nrounds: 64936"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 143446.03671731372,
            "unit": "iter/sec",
            "range": "stddev: 0.000011928570366754888",
            "extra": "mean: 6.971262663538626 usec\nrounds: 57804"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 145168.16466438113,
            "unit": "iter/sec",
            "range": "stddev: 0.000009817162795602114",
            "extra": "mean: 6.88856267014143 usec\nrounds: 59877"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 152622.00750469283,
            "unit": "iter/sec",
            "range": "stddev: 0.000005889296574836332",
            "extra": "mean: 6.552135018727571 usec\nrounds: 64517"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 148989.72931422203,
            "unit": "iter/sec",
            "range": "stddev: 0.000003855817065427962",
            "extra": "mean: 6.711872050528947 usec\nrounds: 57468"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 149050.17082824587,
            "unit": "iter/sec",
            "range": "stddev: 0.000009052045584237166",
            "extra": "mean: 6.709150311221879 usec\nrounds: 62497"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 145401.3080215301,
            "unit": "iter/sec",
            "range": "stddev: 0.000006953332020703461",
            "extra": "mean: 6.877517221866577 usec\nrounds: 56498"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 152660.2530913033,
            "unit": "iter/sec",
            "range": "stddev: 0.000013876691809221614",
            "extra": "mean: 6.5504935289339405 usec\nrounds: 61350"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 124235.46899514105,
            "unit": "iter/sec",
            "range": "stddev: 0.000005884910887846464",
            "extra": "mean: 8.049231093892445 usec\nrounds: 47617"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 128159.53303046743,
            "unit": "iter/sec",
            "range": "stddev: 0.000007019442145293324",
            "extra": "mean: 7.8027749973329685 usec\nrounds: 54946"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 124254.84766372602,
            "unit": "iter/sec",
            "range": "stddev: 0.000008045608425240184",
            "extra": "mean: 8.047975743419885 usec\nrounds: 52357"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 120260.26765625762,
            "unit": "iter/sec",
            "range": "stddev: 0.000013141376549983016",
            "extra": "mean: 8.315298306655366 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 123397.5268570528,
            "unit": "iter/sec",
            "range": "stddev: 0.000008382493728021995",
            "extra": "mean: 8.103890130297573 usec\nrounds: 35087"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 117056.89579392003,
            "unit": "iter/sec",
            "range": "stddev: 0.000007946765300382785",
            "extra": "mean: 8.542854252350166 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 118785.86723413903,
            "unit": "iter/sec",
            "range": "stddev: 0.000027299410547654077",
            "extra": "mean: 8.418509905971375 usec\nrounds: 46083"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 121926.39802498392,
            "unit": "iter/sec",
            "range": "stddev: 0.000008679996850011351",
            "extra": "mean: 8.201669336570495 usec\nrounds: 51811"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 109721.52191811077,
            "unit": "iter/sec",
            "range": "stddev: 0.00001050068667660048",
            "extra": "mean: 9.113982220792899 usec\nrounds: 38022"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 125943.64163096722,
            "unit": "iter/sec",
            "range": "stddev: 0.000004915996257331473",
            "extra": "mean: 7.940059434918852 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 121788.74846734655,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061242047129936526",
            "extra": "mean: 8.210939126844837 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 124895.5550723498,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057556509149644345",
            "extra": "mean: 8.006690065316716 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 115659.72638936166,
            "unit": "iter/sec",
            "range": "stddev: 0.00001189193487826609",
            "extra": "mean: 8.646051925054351 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 123758.64197396443,
            "unit": "iter/sec",
            "range": "stddev: 0.000015963418425529244",
            "extra": "mean: 8.08024380398723 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 122351.69258166144,
            "unit": "iter/sec",
            "range": "stddev: 0.000010770190824829239",
            "extra": "mean: 8.173160329045452 usec\nrounds: 51544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 123782.40362124993,
            "unit": "iter/sec",
            "range": "stddev: 0.000011701951900636297",
            "extra": "mean: 8.078692695771245 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 125442.79431189541,
            "unit": "iter/sec",
            "range": "stddev: 0.000005517249719277338",
            "extra": "mean: 7.971761195893357 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 124626.628147161,
            "unit": "iter/sec",
            "range": "stddev: 0.00000502955599771653",
            "extra": "mean: 8.023967388567915 usec\nrounds: 39526"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 124582.91292722146,
            "unit": "iter/sec",
            "range": "stddev: 0.000007204417373117277",
            "extra": "mean: 8.026782939199515 usec\nrounds: 52354"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 121591.47323258518,
            "unit": "iter/sec",
            "range": "stddev: 0.000012393421029717854",
            "extra": "mean: 8.224260907565112 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 120832.73948108165,
            "unit": "iter/sec",
            "range": "stddev: 0.000008502260304375424",
            "extra": "mean: 8.275902742042577 usec\nrounds: 50001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 121996.87140329737,
            "unit": "iter/sec",
            "range": "stddev: 0.000007776319250754833",
            "extra": "mean: 8.196931515515665 usec\nrounds: 53764"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 117260.3961361626,
            "unit": "iter/sec",
            "range": "stddev: 0.000008696932540723474",
            "extra": "mean: 8.528028498546103 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 116725.49726449372,
            "unit": "iter/sec",
            "range": "stddev: 0.000012082404004168973",
            "extra": "mean: 8.56710850187302 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 117321.41272971865,
            "unit": "iter/sec",
            "range": "stddev: 0.000013890403494496493",
            "extra": "mean: 8.523593236161998 usec\nrounds: 49262"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 120610.50874366029,
            "unit": "iter/sec",
            "range": "stddev: 0.00001430343316477043",
            "extra": "mean: 8.291151495972471 usec\nrounds: 50503"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 126248.38802893391,
            "unit": "iter/sec",
            "range": "stddev: 0.00000530847314884479",
            "extra": "mean: 7.920893213866759 usec\nrounds: 52357"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 124510.6280697973,
            "unit": "iter/sec",
            "range": "stddev: 0.000007307083585196655",
            "extra": "mean: 8.031442901721023 usec\nrounds: 47392"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 125352.62844218896,
            "unit": "iter/sec",
            "range": "stddev: 0.000010924286455989479",
            "extra": "mean: 7.977495266173755 usec\nrounds: 51544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 117983.59751525184,
            "unit": "iter/sec",
            "range": "stddev: 0.000022734206783004913",
            "extra": "mean: 8.475754435871725 usec\nrounds: 52357"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 123467.9560258301,
            "unit": "iter/sec",
            "range": "stddev: 0.000004579359868457147",
            "extra": "mean: 8.099267471397964 usec\nrounds: 52357"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 121903.2782874044,
            "unit": "iter/sec",
            "range": "stddev: 0.000011036616519244476",
            "extra": "mean: 8.203224835696027 usec\nrounds: 47617"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 123676.91462552991,
            "unit": "iter/sec",
            "range": "stddev: 0.000004680457680566241",
            "extra": "mean: 8.08558333645215 usec\nrounds: 52354"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 121609.36397334468,
            "unit": "iter/sec",
            "range": "stddev: 0.000005536239866998123",
            "extra": "mean: 8.223050983304114 usec\nrounds: 48310"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 120903.84776173935,
            "unit": "iter/sec",
            "range": "stddev: 0.000006360757635769904",
            "extra": "mean: 8.271035360021479 usec\nrounds: 51018"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 122615.24883743447,
            "unit": "iter/sec",
            "range": "stddev: 0.000007331539842585828",
            "extra": "mean: 8.15559246897438 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 418687.2203360024,
            "unit": "iter/sec",
            "range": "stddev: 0.000001820248951258883",
            "extra": "mean: 2.388417776872879 usec\nrounds: 8258"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 29426.307729955282,
            "unit": "iter/sec",
            "range": "stddev: 0.000019017153417059693",
            "extra": "mean: 33.98319657284165 usec\nrounds: 16340"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 382347.5985977483,
            "unit": "iter/sec",
            "range": "stddev: 0.000004175067334419247",
            "extra": "mean: 2.615421160398231 usec\nrounds: 133334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 28836.800329054317,
            "unit": "iter/sec",
            "range": "stddev: 0.00003854722649497908",
            "extra": "mean: 34.677911161747616 usec\nrounds: 14881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 378475.97903840983,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026353526115814766",
            "extra": "mean: 2.6421756079228333 usec\nrounds: 81961"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 29343.29683942616,
            "unit": "iter/sec",
            "range": "stddev: 0.00002315774039095472",
            "extra": "mean: 34.07933353475069 usec\nrounds: 11588"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 31259.81676439275,
            "unit": "iter/sec",
            "range": "stddev: 0.00001351076962050603",
            "extra": "mean: 31.989950790085057 usec\nrounds: 17212"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 381974.26352688845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000049094014406860045",
            "extra": "mean: 2.617977428025348 usec\nrounds: 138889"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 16231.516362494403,
            "unit": "iter/sec",
            "range": "stddev: 0.00003240530314544153",
            "extra": "mean: 61.608538454895374 usec\nrounds: 13"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 378667.92867964105,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042923824065908695",
            "extra": "mean: 2.640836269094274 usec\nrounds: 136987"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 28629.423822975255,
            "unit": "iter/sec",
            "range": "stddev: 0.00002984138533417913",
            "extra": "mean: 34.92909973261477 usec\nrounds: 14970"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 376140.0105090641,
            "unit": "iter/sec",
            "range": "stddev: 0.000008479553636215294",
            "extra": "mean: 2.65858449529634 usec\nrounds: 119048"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 371991.7465600894,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031507601239669604",
            "extra": "mean: 2.688231685910445 usec\nrounds: 131579"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 27671.656781207836,
            "unit": "iter/sec",
            "range": "stddev: 0.000024456434011157814",
            "extra": "mean: 36.13806025084527 usec\nrounds: 13477"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 389009.31476166117,
            "unit": "iter/sec",
            "range": "stddev: 0.000004817649154227852",
            "extra": "mean: 2.5706325325723407 usec\nrounds: 131579"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 28543.385947582432,
            "unit": "iter/sec",
            "range": "stddev: 0.00003715128523363506",
            "extra": "mean: 35.034385963754175 usec\nrounds: 15061"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 384429.79560738907,
            "unit": "iter/sec",
            "range": "stddev: 0.000004262817467649026",
            "extra": "mean: 2.601255187361391 usec\nrounds: 135136"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 28744.368104209527,
            "unit": "iter/sec",
            "range": "stddev: 0.00002880988900403638",
            "extra": "mean: 34.78942366638956 usec\nrounds: 14620"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 31334.402130331775,
            "unit": "iter/sec",
            "range": "stddev: 0.000043226075108668805",
            "extra": "mean: 31.9138050198187 usec\nrounds: 18248"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 360361.9142340308,
            "unit": "iter/sec",
            "range": "stddev: 0.000005974396151513757",
            "extra": "mean: 2.7749880342531625 usec\nrounds: 135136"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 27221.45249320225,
            "unit": "iter/sec",
            "range": "stddev: 0.00005754883986180229",
            "extra": "mean: 36.73573260830664 usec\nrounds: 13699"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 375514.3836614529,
            "unit": "iter/sec",
            "range": "stddev: 0.000004860604855850578",
            "extra": "mean: 2.6630138378442396 usec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 31179.135348711403,
            "unit": "iter/sec",
            "range": "stddev: 0.000011839870661226404",
            "extra": "mean: 32.07273033122546 usec\nrounds: 11236"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 355269.7788894183,
            "unit": "iter/sec",
            "range": "stddev: 0.000005696442912845009",
            "extra": "mean: 2.8147623564436683 usec\nrounds: 129871"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 370258.7801209685,
            "unit": "iter/sec",
            "range": "stddev: 0.000024994746496616317",
            "extra": "mean: 2.7008137380922785 usec\nrounds: 142858"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 28070.407651410143,
            "unit": "iter/sec",
            "range": "stddev: 0.000037321568302484625",
            "extra": "mean: 35.62470529172255 usec\nrounds: 11849"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 376665.0755652463,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028913279213370252",
            "extra": "mean: 2.654878471276743 usec\nrounds: 138889"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 29222.814486065774,
            "unit": "iter/sec",
            "range": "stddev: 0.000015523776664442984",
            "extra": "mean: 34.21983876593499 usec\nrounds: 14327"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 388284.3662946601,
            "unit": "iter/sec",
            "range": "stddev: 0.000004209666384689434",
            "extra": "mean: 2.5754320462161564 usec\nrounds: 135136"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 27510.859338884307,
            "unit": "iter/sec",
            "range": "stddev: 0.000018212499591674624",
            "extra": "mean: 36.349282575356824 usec\nrounds: 13699"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 30764.382885823292,
            "unit": "iter/sec",
            "range": "stddev: 0.000013278764175548966",
            "extra": "mean: 32.50512138375496 usec\nrounds: 18182"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 381827.363439789,
            "unit": "iter/sec",
            "range": "stddev: 0.000004617458179624124",
            "extra": "mean: 2.6189846400510572 usec\nrounds: 133334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 29588.277500639197,
            "unit": "iter/sec",
            "range": "stddev: 0.000016203346821062318",
            "extra": "mean: 33.79716848939236 usec\nrounds: 14903"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 391266.6784675453,
            "unit": "iter/sec",
            "range": "stddev: 0.000002510689116557987",
            "extra": "mean: 2.555801592705645 usec\nrounds: 128206"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 28928.633160359976,
            "unit": "iter/sec",
            "range": "stddev: 0.00003330946836902149",
            "extra": "mean: 34.56782746895451 usec\nrounds: 13812"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 397853.2101664836,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029534279624546313",
            "extra": "mean: 2.513489836066787 usec\nrounds: 142858"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 10212.517853888807,
            "unit": "iter/sec",
            "range": "stddev: 0.00011085979855748446",
            "extra": "mean: 97.91904546039171 usec\nrounds: 7831"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 10081.665372200909,
            "unit": "iter/sec",
            "range": "stddev: 0.000038577370273263134",
            "extra": "mean: 99.18996148765171 usec\nrounds: 7582"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 11001.060282268632,
            "unit": "iter/sec",
            "range": "stddev: 0.00008145333028025288",
            "extra": "mean: 90.90032909025935 usec\nrounds: 7463"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 9590.932951194058,
            "unit": "iter/sec",
            "range": "stddev: 0.000023734446804248737",
            "extra": "mean: 104.26514345254613 usec\nrounds: 6239"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 8172.329862664222,
            "unit": "iter/sec",
            "range": "stddev: 0.00006438238561977803",
            "extra": "mean: 122.36412587413533 usec\nrounds: 6006"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 6686.5953235629995,
            "unit": "iter/sec",
            "range": "stddev: 0.00007557474274014987",
            "extra": "mean: 149.55294161082008 usec\nrounds: 4744"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 8492.012732904926,
            "unit": "iter/sec",
            "range": "stddev: 0.00009967140784830408",
            "extra": "mean: 117.75771321269823 usec\nrounds: 5593"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 6931.834441840636,
            "unit": "iter/sec",
            "range": "stddev: 0.00008159918609837926",
            "extra": "mean: 144.2619566855186 usec\nrounds: 3186"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 409072.8761605984,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062471095172337315",
            "extra": "mean: 2.4445522015187553 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 408964.40578324994,
            "unit": "iter/sec",
            "range": "stddev: 0.000005019985016843204",
            "extra": "mean: 2.44520057457029 usec\nrounds: 119048"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 312149.67070910474,
            "unit": "iter/sec",
            "range": "stddev: 0.00001052902763992998",
            "extra": "mean: 3.203591398088994 usec\nrounds: 103093"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 309447.18858690915,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057097754216686474",
            "extra": "mean: 3.2315691881593778 usec\nrounds: 86207"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 43678.04450560882,
            "unit": "iter/sec",
            "range": "stddev: 0.000012136912499054159",
            "extra": "mean: 22.89479786283901 usec\nrounds: 11136"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 45759.50039227172,
            "unit": "iter/sec",
            "range": "stddev: 0.00001582701363798939",
            "extra": "mean: 21.853385448432235 usec\nrounds: 12837"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 32822.54218350249,
            "unit": "iter/sec",
            "range": "stddev: 0.00001323437329660118",
            "extra": "mean: 30.466866168051645 usec\nrounds: 12837"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 34327.18936580907,
            "unit": "iter/sec",
            "range": "stddev: 0.00001456114489494295",
            "extra": "mean: 29.131426675905796 usec\nrounds: 16052"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 42475.67910983348,
            "unit": "iter/sec",
            "range": "stddev: 0.000018853367005924228",
            "extra": "mean: 23.54288432715115 usec\nrounds: 7599"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 42992.53297016535,
            "unit": "iter/sec",
            "range": "stddev: 0.00001062469302152875",
            "extra": "mean: 23.25985307015871 usec\nrounds: 15504"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 38030.37438556377,
            "unit": "iter/sec",
            "range": "stddev: 0.000011054317904115467",
            "extra": "mean: 26.294771380941157 usec\nrounds: 13774"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 36958.6457400795,
            "unit": "iter/sec",
            "range": "stddev: 0.000015340256606970162",
            "extra": "mean: 27.05726846791787 usec\nrounds: 11696"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 5871.221535508629,
            "unit": "iter/sec",
            "range": "stddev: 0.00006312467721078693",
            "extra": "mean: 170.32230753891474 usec\nrounds: 1499"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 3764.1315068295926,
            "unit": "iter/sec",
            "range": "stddev: 0.00011012880970738179",
            "extra": "mean: 265.6655321913203 usec\nrounds: 1926"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 3526.213041168808,
            "unit": "iter/sec",
            "range": "stddev: 0.00021761416132017055",
            "extra": "mean: 283.5903526885424 usec\nrounds: 1860"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 4801.183951382617,
            "unit": "iter/sec",
            "range": "stddev: 0.00007021166624375646",
            "extra": "mean: 208.2819592263333 usec\nrounds: 1913"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 104.90684108691883,
            "unit": "iter/sec",
            "range": "stddev: 0.013258580161467685",
            "extra": "mean: 9.532266815387823 msec\nrounds: 65"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 102.86905500971177,
            "unit": "iter/sec",
            "range": "stddev: 0.013705066231464452",
            "extra": "mean: 9.7210963968279 msec\nrounds: 63"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 112.56905879279319,
            "unit": "iter/sec",
            "range": "stddev: 0.011944084145364433",
            "extra": "mean: 8.883435739128888 msec\nrounds: 69"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 117.00836902356812,
            "unit": "iter/sec",
            "range": "stddev: 0.011376310062594598",
            "extra": "mean: 8.546397222224142 msec\nrounds: 72"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 5269.247902019692,
            "unit": "iter/sec",
            "range": "stddev: 0.00018344869564864924",
            "extra": "mean: 189.78040483096308 usec\nrounds: 2401"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 3904.3997228438348,
            "unit": "iter/sec",
            "range": "stddev: 0.00007464772582925609",
            "extra": "mean: 256.12131722815343 usec\nrounds: 1573"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 3774.6155048699193,
            "unit": "iter/sec",
            "range": "stddev: 0.00007315124308572969",
            "extra": "mean: 264.9276459310422 usec\nrounds: 2138"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 4980.932003834427,
            "unit": "iter/sec",
            "range": "stddev: 0.00004310711384174457",
            "extra": "mean: 200.76563968955588 usec\nrounds: 2187"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 114.11608245253466,
            "unit": "iter/sec",
            "range": "stddev: 0.011653123578815934",
            "extra": "mean: 8.763006742857119 msec\nrounds: 70"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 113.87197312683978,
            "unit": "iter/sec",
            "range": "stddev: 0.012483633288081197",
            "extra": "mean: 8.781792152544151 msec\nrounds: 59"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 115.00944981062463,
            "unit": "iter/sec",
            "range": "stddev: 0.012263548119814425",
            "extra": "mean: 8.694937691177612 msec\nrounds: 68"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 120.79866841729304,
            "unit": "iter/sec",
            "range": "stddev: 0.011578637024653228",
            "extra": "mean: 8.27823694666525 msec\nrounds: 75"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 128621.30764540198,
            "unit": "iter/sec",
            "range": "stddev: 0.000009848839693129485",
            "extra": "mean: 7.774761571830036 usec\nrounds: 44051"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 124800.920909589,
            "unit": "iter/sec",
            "range": "stddev: 0.000006060324140916337",
            "extra": "mean: 8.01276138598722 usec\nrounds: 25975"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 121308.78332322689,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066830025241557554",
            "extra": "mean: 8.243426177439295 usec\nrounds: 39683"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 127192.81094504894,
            "unit": "iter/sec",
            "range": "stddev: 0.000011315764991439787",
            "extra": "mean: 7.862079566997145 usec\nrounds: 38609"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 85753.70736645295,
            "unit": "iter/sec",
            "range": "stddev: 0.00001619926463904435",
            "extra": "mean: 11.66130340845418 usec\nrounds: 35088"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 79469.03421794449,
            "unit": "iter/sec",
            "range": "stddev: 0.000014408430802904295",
            "extra": "mean: 12.583517716567332 usec\nrounds: 35842"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 79324.35666258055,
            "unit": "iter/sec",
            "range": "stddev: 0.00003746877533946902",
            "extra": "mean: 12.606468455252244 usec\nrounds: 36900"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 87398.7975107372,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055986883678944966",
            "extra": "mean: 11.441805018852198 usec\nrounds: 36901"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 82682.20108731395,
            "unit": "iter/sec",
            "range": "stddev: 0.000006038091179496236",
            "extra": "mean: 12.094501438634675 usec\nrounds: 23981"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 80906.19162845642,
            "unit": "iter/sec",
            "range": "stddev: 0.000013101511228902168",
            "extra": "mean: 12.359993467400816 usec\nrounds: 27248"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 83125.2155059038,
            "unit": "iter/sec",
            "range": "stddev: 0.000019650912199910775",
            "extra": "mean: 12.030043999452573 usec\nrounds: 22523"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 83580.13212196514,
            "unit": "iter/sec",
            "range": "stddev: 0.000020635786005478472",
            "extra": "mean: 11.96456591550657 usec\nrounds: 27027"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 66381.77081425198,
            "unit": "iter/sec",
            "range": "stddev: 0.000016100786449689377",
            "extra": "mean: 15.064376676515275 usec\nrounds: 25125"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 67803.9544959703,
            "unit": "iter/sec",
            "range": "stddev: 0.00001831645069717461",
            "extra": "mean: 14.748402323044912 usec\nrounds: 20921"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 65430.676929876,
            "unit": "iter/sec",
            "range": "stddev: 0.000017419743227742805",
            "extra": "mean: 15.283350974218555 usec\nrounds: 14266"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 68283.51756174976,
            "unit": "iter/sec",
            "range": "stddev: 0.000014231638374246395",
            "extra": "mean: 14.644822582487578 usec\nrounds: 26525"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 64458.7018131618,
            "unit": "iter/sec",
            "range": "stddev: 0.000013059661561086723",
            "extra": "mean: 15.513809181242467 usec\nrounds: 8757"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 15917.939749578738,
            "unit": "iter/sec",
            "range": "stddev: 0.000032301874764592916",
            "extra": "mean: 62.82220034326142 usec\nrounds: 6993"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 16454.085763161893,
            "unit": "iter/sec",
            "range": "stddev: 0.00003624936160867473",
            "extra": "mean: 60.77517854190614 usec\nrounds: 6021"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 58336.45995441928,
            "unit": "iter/sec",
            "range": "stddev: 0.00004005330039121175",
            "extra": "mean: 17.141938348356103 usec\nrounds: 22027"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 54058.058196493184,
            "unit": "iter/sec",
            "range": "stddev: 0.000031742754788414064",
            "extra": "mean: 18.498629683758626 usec\nrounds: 19802"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 12592.823274484303,
            "unit": "iter/sec",
            "range": "stddev: 0.00004761562185577373",
            "extra": "mean: 79.41030999984011 usec\nrounds: 6200"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 12362.997730157746,
            "unit": "iter/sec",
            "range": "stddev: 0.00003410402762712424",
            "extra": "mean: 80.88653106848386 usec\nrounds: 7918"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 60003.04816185363,
            "unit": "iter/sec",
            "range": "stddev: 0.000018217227025713616",
            "extra": "mean: 16.66581999805371 usec\nrounds: 21322"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 394705.7982804096,
            "unit": "iter/sec",
            "range": "stddev: 0.000003924992263327412",
            "extra": "mean: 2.5335325813723495 usec\nrounds: 90082"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 16021.643897144084,
            "unit": "iter/sec",
            "range": "stddev: 0.00001816793745804872",
            "extra": "mean: 62.415567741975195 usec\nrounds: 620"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 15844.276324894689,
            "unit": "iter/sec",
            "range": "stddev: 0.000022753711252596903",
            "extra": "mean: 63.11427417033808 usec\nrounds: 2079"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 453084.34313460405,
            "unit": "iter/sec",
            "range": "stddev: 0.000005159933517994149",
            "extra": "mean: 2.2070945843805427 usec\nrounds: 72993"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 369306.7611286244,
            "unit": "iter/sec",
            "range": "stddev: 0.000005674037202944267",
            "extra": "mean: 2.7077760421822172 usec\nrounds: 90910"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 11074.689883968293,
            "unit": "iter/sec",
            "range": "stddev: 0.00002170117374889297",
            "extra": "mean: 90.29598214281367 usec\nrounds: 56"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 11778.946587940552,
            "unit": "iter/sec",
            "range": "stddev: 0.00003218419770357319",
            "extra": "mean: 84.89723529469212 usec\nrounds: 51"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 373400.6050693179,
            "unit": "iter/sec",
            "range": "stddev: 0.00001126914847362761",
            "extra": "mean: 2.678088857982328 usec\nrounds: 106372"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 43151.528465037074,
            "unit": "iter/sec",
            "range": "stddev: 0.00002025086595627111",
            "extra": "mean: 23.17415015345832 usec\nrounds: 12707"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 16609.1230295003,
            "unit": "iter/sec",
            "range": "stddev: 0.0000535200574415654",
            "extra": "mean: 60.20787480614417 usec\nrounds: 9026"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 15286.294137403436,
            "unit": "iter/sec",
            "range": "stddev: 0.00005560201538648544",
            "extra": "mean: 65.4180791636829 usec\nrounds: 9234"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 45876.92013512696,
            "unit": "iter/sec",
            "range": "stddev: 0.00003213055828223315",
            "extra": "mean: 21.797452772648565 usec\nrounds: 18051"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 33467.2718746327,
            "unit": "iter/sec",
            "range": "stddev: 0.0000439090484346242",
            "extra": "mean: 29.879937741742655 usec\nrounds: 15773"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 13659.152801738413,
            "unit": "iter/sec",
            "range": "stddev: 0.00001676964777517281",
            "extra": "mean: 73.21098273918783 usec\nrounds: 7937"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 13453.63764469487,
            "unit": "iter/sec",
            "range": "stddev: 0.00005371092747915651",
            "extra": "mean: 74.32933949981377 usec\nrounds: 8757"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 33811.54079754755,
            "unit": "iter/sec",
            "range": "stddev: 0.000022322926878918988",
            "extra": "mean: 29.575700379573743 usec\nrounds: 17392"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 45832.65480467849,
            "unit": "iter/sec",
            "range": "stddev: 0.000017721536788008667",
            "extra": "mean: 21.8185048250341 usec\nrounds: 17513"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 15971.627775778024,
            "unit": "iter/sec",
            "range": "stddev: 0.00006900948095230416",
            "extra": "mean: 62.61102587906304 usec\nrounds: 9158"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 15545.72585227864,
            "unit": "iter/sec",
            "range": "stddev: 0.000050413615466020664",
            "extra": "mean: 64.32636272518747 usec\nrounds: 9776"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 45727.553571437165,
            "unit": "iter/sec",
            "range": "stddev: 0.000008568447746504418",
            "extra": "mean: 21.86865296517045 usec\nrounds: 14451"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 33925.018844137274,
            "unit": "iter/sec",
            "range": "stddev: 0.000028888440566476505",
            "extra": "mean: 29.47677065691046 usec\nrounds: 18553"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 13113.46805608402,
            "unit": "iter/sec",
            "range": "stddev: 0.000051512443644481514",
            "extra": "mean: 76.2574778634587 usec\nrounds: 7657"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 13151.832971427652,
            "unit": "iter/sec",
            "range": "stddev: 0.00002994087347817493",
            "extra": "mean: 76.03502889464148 usec\nrounds: 8306"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 34196.14168218757,
            "unit": "iter/sec",
            "range": "stddev: 0.00001470189425730774",
            "extra": "mean: 29.243065176586576 usec\nrounds: 13870"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 36392.95033377193,
            "unit": "iter/sec",
            "range": "stddev: 0.000018197599074150336",
            "extra": "mean: 27.477849166628847 usec\nrounds: 13021"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 32722.293630613127,
            "unit": "iter/sec",
            "range": "stddev: 0.00008124166811626094",
            "extra": "mean: 30.560204956551594 usec\nrounds: 16584"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 33921.18786710228,
            "unit": "iter/sec",
            "range": "stddev: 0.00005259061127390394",
            "extra": "mean: 29.480099692199403 usec\nrounds: 15267"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 36681.161423215264,
            "unit": "iter/sec",
            "range": "stddev: 0.000020343419939785235",
            "extra": "mean: 27.261950309106265 usec\nrounds: 16502"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 26684.423741913994,
            "unit": "iter/sec",
            "range": "stddev: 0.00002736802347729156",
            "extra": "mean: 37.4750457297405 usec\nrounds: 15198"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 25762.613708050423,
            "unit": "iter/sec",
            "range": "stddev: 0.000029994705533741003",
            "extra": "mean: 38.815937363044625 usec\nrounds: 12772"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 25331.000183477016,
            "unit": "iter/sec",
            "range": "stddev: 0.000034729384478482105",
            "extra": "mean: 39.47731999355806 usec\nrounds: 12469"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 25302.375433194182,
            "unit": "iter/sec",
            "range": "stddev: 0.00003712255880462199",
            "extra": "mean: 39.52198095551535 usec\nrounds: 15385"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys0]",
            "value": 31213.633326196465,
            "unit": "iter/sec",
            "range": "stddev: 0.00004315352703640474",
            "extra": "mean: 32.03728286129178 usec\nrounds: 7912"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys1]",
            "value": 32792.065438288,
            "unit": "iter/sec",
            "range": "stddev: 0.000032149928232291886",
            "extra": "mean: 30.495181887274487 usec\nrounds: 15823"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys2]",
            "value": 34549.660207905596,
            "unit": "iter/sec",
            "range": "stddev: 0.000037156936502853905",
            "extra": "mean: 28.943844714605373 usec\nrounds: 15552"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys3]",
            "value": 35752.31684084551,
            "unit": "iter/sec",
            "range": "stddev: 0.000014520461446239107",
            "extra": "mean: 27.97021531364206 usec\nrounds: 14105"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys4]",
            "value": 29479.37775035704,
            "unit": "iter/sec",
            "range": "stddev: 0.00006627180303155823",
            "extra": "mean: 33.9220185876511 usec\nrounds: 14472"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys5]",
            "value": 27005.60839220997,
            "unit": "iter/sec",
            "range": "stddev: 0.00004899331716682473",
            "extra": "mean: 37.02934536695939 usec\nrounds: 12659"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys6]",
            "value": 28578.81904986947,
            "unit": "iter/sec",
            "range": "stddev: 0.00003593895585010506",
            "extra": "mean: 34.99094900510129 usec\nrounds: 14472"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys7]",
            "value": 29064.223494455226,
            "unit": "iter/sec",
            "range": "stddev: 0.000017822972672303032",
            "extra": "mean: 34.40656173700208 usec\nrounds: 14578"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 58822.127429070584,
            "unit": "iter/sec",
            "range": "stddev: 0.000018692156287820423",
            "extra": "mean: 17.000405182655605 usec\nrounds: 20877"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 18750.862075594796,
            "unit": "iter/sec",
            "range": "stddev: 0.00004061781397616082",
            "extra": "mean: 53.330881319934136 usec\nrounds: 8881"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 20110.257332577447,
            "unit": "iter/sec",
            "range": "stddev: 0.000017392122488634448",
            "extra": "mean: 49.72586792214032 usec\nrounds: 8866"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 56086.08978172801,
            "unit": "iter/sec",
            "range": "stddev: 0.00003434205654876997",
            "extra": "mean: 17.82973289619104 usec\nrounds: 12804"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 53696.65292387046,
            "unit": "iter/sec",
            "range": "stddev: 0.00001443429122244178",
            "extra": "mean: 18.623134693660898 usec\nrounds: 20877"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 15246.845528396298,
            "unit": "iter/sec",
            "range": "stddev: 0.00002192730273527495",
            "extra": "mean: 65.58733727167122 usec\nrounds: 8803"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 14775.638257484376,
            "unit": "iter/sec",
            "range": "stddev: 0.00004853409377420843",
            "extra": "mean: 67.67897146463133 usec\nrounds: 9497"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 50182.627163302976,
            "unit": "iter/sec",
            "range": "stddev: 0.00004811972802314202",
            "extra": "mean: 19.92721498509487 usec\nrounds: 18485"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 59232.04882025523,
            "unit": "iter/sec",
            "range": "stddev: 0.000033607323472768026",
            "extra": "mean: 16.882752157275302 usec\nrounds: 19121"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 19424.270077267134,
            "unit": "iter/sec",
            "range": "stddev: 0.0000339365142891476",
            "extra": "mean: 51.481985990831795 usec\nrounds: 8780"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 19527.594090637584,
            "unit": "iter/sec",
            "range": "stddev: 0.00002550511029706635",
            "extra": "mean: 51.20958554128516 usec\nrounds: 10153"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 54864.66126234678,
            "unit": "iter/sec",
            "range": "stddev: 0.000009271089985821801",
            "extra": "mean: 18.22666862405825 usec\nrounds: 21459"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 53134.41053800234,
            "unit": "iter/sec",
            "range": "stddev: 0.000015899281457846123",
            "extra": "mean: 18.82019561099278 usec\nrounds: 16313"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 14739.412459168792,
            "unit": "iter/sec",
            "range": "stddev: 0.00003150010073959241",
            "extra": "mean: 67.84530949047026 usec\nrounds: 4278"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 14852.918939032805,
            "unit": "iter/sec",
            "range": "stddev: 0.000021604898830122773",
            "extra": "mean: 67.32683347325386 usec\nrounds: 8341"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 52320.00514324779,
            "unit": "iter/sec",
            "range": "stddev: 0.000011888694381718046",
            "extra": "mean: 19.11314796820229 usec\nrounds: 15848"
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
          "id": "d5289dbea51f5f050f6aa0b5c4e343e4d47de8e8",
          "message": "Pint 0.3.1",
          "timestamp": "2022-11-26T23:23:24-03:00",
          "tree_id": "a04dc76bfb3754d2c23867562c5ba42e4659a382",
          "url": "https://github.com/hgrecco/pint-benchmark/commit/d5289dbea51f5f050f6aa0b5c4e343e4d47de8e8"
        },
        "date": 1669518322744,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 2.9536678969894377,
            "unit": "iter/sec",
            "range": "stddev: 0.0069341390262158764",
            "extra": "mean: 338.5620980000027 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 38000.125895156096,
            "unit": "iter/sec",
            "range": "stddev: 0.0002311362687811263",
            "extra": "mean: 26.31570228896191 usec\nrounds: 6597"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 21.34736556479563,
            "unit": "iter/sec",
            "range": "stddev: 0.0012252143557424254",
            "extra": "mean: 46.84418772727254 msec\nrounds: 22"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 819.9365461612173,
            "unit": "iter/sec",
            "range": "stddev: 0.00018104973946525261",
            "extra": "mean: 1.2196065716082598 msec\nrounds: 796"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 8435.155677623157,
            "unit": "iter/sec",
            "range": "stddev: 0.00006908022650601942",
            "extra": "mean: 118.55145752114655 usec\nrounds: 6721"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 8265.828105083294,
            "unit": "iter/sec",
            "range": "stddev: 0.00008150427125203059",
            "extra": "mean: 120.98001401517448 usec\nrounds: 3853"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 8758.599200124512,
            "unit": "iter/sec",
            "range": "stddev: 0.00004982620648719186",
            "extra": "mean: 114.17350847448118 usec\nrounds: 7375"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 8576.515699426875,
            "unit": "iter/sec",
            "range": "stddev: 0.000040855918974754544",
            "extra": "mean: 116.59746627255927 usec\nrounds: 6597"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 8090.433769587223,
            "unit": "iter/sec",
            "range": "stddev: 0.00010190199175366488",
            "extra": "mean: 123.60276698130865 usec\nrounds: 6566"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 8341.23928660043,
            "unit": "iter/sec",
            "range": "stddev: 0.00003497597349849385",
            "extra": "mean: 119.88626217766277 usec\nrounds: 6282"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 8084.743953034175,
            "unit": "iter/sec",
            "range": "stddev: 0.000032429240278274766",
            "extra": "mean: 123.68975514984659 usec\nrounds: 4272"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 8062.940187422063,
            "unit": "iter/sec",
            "range": "stddev: 0.00014244248502408635",
            "extra": "mean: 124.02423641439994 usec\nrounds: 6091"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 8292.635812044322,
            "unit": "iter/sec",
            "range": "stddev: 0.00008795172424451485",
            "extra": "mean: 120.58892041871513 usec\nrounds: 6974"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 7976.417478809804,
            "unit": "iter/sec",
            "range": "stddev: 0.0001279642314002846",
            "extra": "mean: 125.36956630675432 usec\nrounds: 6945"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 2205182.790421653,
            "unit": "iter/sec",
            "range": "stddev: 0.000002944495309372873",
            "extra": "mean: 453.4771468122987 nsec\nrounds: 9747"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 2453506.5182773937,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016939912686270584",
            "extra": "mean: 407.57992389664935 nsec\nrounds: 138889"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 2487016.9991386146,
            "unit": "iter/sec",
            "range": "stddev: 8.334652822507099e-7",
            "extra": "mean: 402.08812418489276 nsec\nrounds: 133334"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 2520868.551464887,
            "unit": "iter/sec",
            "range": "stddev: 4.5261612633227166e-7",
            "extra": "mean: 396.6886728063994 nsec\nrounds: 133334"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 2513052.54836388,
            "unit": "iter/sec",
            "range": "stddev: 5.418669949589885e-7",
            "extra": "mean: 397.9224392465757 nsec\nrounds: 135136"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 8842.881093535558,
            "unit": "iter/sec",
            "range": "stddev: 0.00009150473956139843",
            "extra": "mean: 113.08531568190297 usec\nrounds: 7837"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 8717.635777179976,
            "unit": "iter/sec",
            "range": "stddev: 0.00012640232737743087",
            "extra": "mean: 114.70999999996386 usec\nrounds: 4753"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 8950.4220462315,
            "unit": "iter/sec",
            "range": "stddev: 0.000032204113525199365",
            "extra": "mean: 111.72657499665522 usec\nrounds: 7447"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 8856.503714980297,
            "unit": "iter/sec",
            "range": "stddev: 0.000037567309142503495",
            "extra": "mean: 112.91137362801011 usec\nrounds: 6378"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 8989.74252896127,
            "unit": "iter/sec",
            "range": "stddev: 0.000045512200435447855",
            "extra": "mean: 111.23789104953892 usec\nrounds: 7508"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 6438.508304889089,
            "unit": "iter/sec",
            "range": "stddev: 0.00008195456675794176",
            "extra": "mean: 155.31547877955654 usec\nrounds: 5113"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 6135.75364518872,
            "unit": "iter/sec",
            "range": "stddev: 0.0001301984178289718",
            "extra": "mean: 162.97916406473365 usec\nrounds: 3523"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 6201.556320976248,
            "unit": "iter/sec",
            "range": "stddev: 0.00014992513768740062",
            "extra": "mean: 161.24984572301364 usec\nrounds: 5179"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 6343.272763522775,
            "unit": "iter/sec",
            "range": "stddev: 0.0000967346760064737",
            "extra": "mean: 157.64732769344823 usec\nrounds: 5142"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 6258.696053556528,
            "unit": "iter/sec",
            "range": "stddev: 0.0000932095891227987",
            "extra": "mean: 159.77769034362137 usec\nrounds: 5209"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 9334.867745201338,
            "unit": "iter/sec",
            "range": "stddev: 0.000029794870782982524",
            "extra": "mean: 107.12524561626037 usec\nrounds: 7813"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 7785.244040548169,
            "unit": "iter/sec",
            "range": "stddev: 0.000033539989588664355",
            "extra": "mean: 128.44812504163824 usec\nrounds: 6014"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 5549.504706414678,
            "unit": "iter/sec",
            "range": "stddev: 0.00007438382530633778",
            "extra": "mean: 180.19626127068585 usec\nrounds: 3793"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 5155.73437552389,
            "unit": "iter/sec",
            "range": "stddev: 0.00014452460676293898",
            "extra": "mean: 193.95878979866706 usec\nrounds: 4862"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 8092.36949061046,
            "unit": "iter/sec",
            "range": "stddev: 0.00004858955801697914",
            "extra": "mean: 123.57320079864068 usec\nrounds: 8013"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 8233.806423279624,
            "unit": "iter/sec",
            "range": "stddev: 0.00006407410733083723",
            "extra": "mean: 121.45051129361967 usec\nrounds: 7305"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 8298.3844852607,
            "unit": "iter/sec",
            "range": "stddev: 0.000031715742623597074",
            "extra": "mean: 120.50538291834573 usec\nrounds: 6346"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 17138892.98160338,
            "unit": "iter/sec",
            "range": "stddev: 1.959177308174578e-7",
            "extra": "mean: 58.346825613240355 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 17211906.09964787,
            "unit": "iter/sec",
            "range": "stddev: 1.6185598310979742e-7",
            "extra": "mean: 58.099317659106084 nsec\nrounds: 185186"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 13817726.718301931,
            "unit": "iter/sec",
            "range": "stddev: 1.797128884069585e-7",
            "extra": "mean: 72.37080457499758 nsec\nrounds: 147059"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 17887295.384558924,
            "unit": "iter/sec",
            "range": "stddev: 1.310945387852822e-7",
            "extra": "mean: 55.90560107065354 nsec\nrounds: 188680"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 17759060.17257719,
            "unit": "iter/sec",
            "range": "stddev: 6.706687422174605e-8",
            "extra": "mean: 56.30928609312672 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 17737978.204048615,
            "unit": "iter/sec",
            "range": "stddev: 1.0505291212160739e-7",
            "extra": "mean: 56.37621089046951 nsec\nrounds: 185186"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 30124.87750973657,
            "unit": "iter/sec",
            "range": "stddev: 0.00002242145157930919",
            "extra": "mean: 33.195155720609755 usec\nrounds: 6730"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 13230.416232605674,
            "unit": "iter/sec",
            "range": "stddev: 0.00003982618610972124",
            "extra": "mean: 75.58341192135376 usec\nrounds: 5637"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 30958.825274015977,
            "unit": "iter/sec",
            "range": "stddev: 0.000015303624356454435",
            "extra": "mean: 32.30096720883363 usec\nrounds: 7746"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 12978.552953778797,
            "unit": "iter/sec",
            "range": "stddev: 0.00010166292271263167",
            "extra": "mean: 77.05019223339863 usec\nrounds: 5176"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 29382.355734066492,
            "unit": "iter/sec",
            "range": "stddev: 0.00003552438390778308",
            "extra": "mean: 34.03403079898662 usec\nrounds: 6721"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 13400.087352691713,
            "unit": "iter/sec",
            "range": "stddev: 0.00002940460911709038",
            "extra": "mean: 74.62637919290333 usec\nrounds: 5575"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 10874.582767793338,
            "unit": "iter/sec",
            "range": "stddev: 0.00009348542547128203",
            "extra": "mean: 91.95755104845456 usec\nrounds: 5103"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 22065.680266232997,
            "unit": "iter/sec",
            "range": "stddev: 0.000021613159685619377",
            "extra": "mean: 45.31924635608425 usec\nrounds: 8439"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 11145.276182706948,
            "unit": "iter/sec",
            "range": "stddev: 0.0000667767138628867",
            "extra": "mean: 89.72411123841003 usec\nrounds: 6113"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 19483.12058329565,
            "unit": "iter/sec",
            "range": "stddev: 0.00012449299685709855",
            "extra": "mean: 51.32648005357907 usec\nrounds: 8197"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 11062.480415952035,
            "unit": "iter/sec",
            "range": "stddev: 0.000045392945813266236",
            "extra": "mean: 90.39564025424222 usec\nrounds: 5818"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 21824.416816097844,
            "unit": "iter/sec",
            "range": "stddev: 0.000021951862662886045",
            "extra": "mean: 45.820239249755936 usec\nrounds: 6558"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 28816.807195227328,
            "unit": "iter/sec",
            "range": "stddev: 0.000049982804661239485",
            "extra": "mean: 34.701970736217476 usec\nrounds: 10730"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 13286.090061188746,
            "unit": "iter/sec",
            "range": "stddev: 0.000024080753435426715",
            "extra": "mean: 75.26668834807876 usec\nrounds: 6411"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 29979.835140606796,
            "unit": "iter/sec",
            "range": "stddev: 0.000041034039788253984",
            "extra": "mean: 33.35575380284629 usec\nrounds: 10650"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 13150.159848559093,
            "unit": "iter/sec",
            "range": "stddev: 0.000029490079051641413",
            "extra": "mean: 76.04470299344486 usec\nrounds: 4276"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 30277.364600020566,
            "unit": "iter/sec",
            "range": "stddev: 0.000017207058283425446",
            "extra": "mean: 33.02797364336395 usec\nrounds: 10965"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 12871.343006877694,
            "unit": "iter/sec",
            "range": "stddev: 0.000029927320154817137",
            "extra": "mean: 77.69197040787884 usec\nrounds: 5711"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 11107.3722673316,
            "unit": "iter/sec",
            "range": "stddev: 0.00003129080260808014",
            "extra": "mean: 90.0302948287009 usec\nrounds: 4467"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 21535.078274903648,
            "unit": "iter/sec",
            "range": "stddev: 0.0000391314985341948",
            "extra": "mean: 46.43586557869032 usec\nrounds: 8518"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 11157.010119554465,
            "unit": "iter/sec",
            "range": "stddev: 0.0000653576709843036",
            "extra": "mean: 89.62974751159706 usec\nrounds: 6028"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 20895.88560855289,
            "unit": "iter/sec",
            "range": "stddev: 0.00009523565086584134",
            "extra": "mean: 47.85631098548369 usec\nrounds: 8666"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 11148.603497747716,
            "unit": "iter/sec",
            "range": "stddev: 0.000051583345371568466",
            "extra": "mean: 89.69733296210812 usec\nrounds: 6286"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 21266.381702740644,
            "unit": "iter/sec",
            "range": "stddev: 0.000032686080298882945",
            "extra": "mean: 47.02257365535426 usec\nrounds: 8404"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 28425.625993837446,
            "unit": "iter/sec",
            "range": "stddev: 0.000044773764560625205",
            "extra": "mean: 35.1795242861774 usec\nrounds: 8091"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 12749.187457156864,
            "unit": "iter/sec",
            "range": "stddev: 0.00004363854026098363",
            "extra": "mean: 78.43637120878958 usec\nrounds: 4550"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 28972.042835563276,
            "unit": "iter/sec",
            "range": "stddev: 0.000050664466407848176",
            "extra": "mean: 34.51603346286982 usec\nrounds: 10549"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 12830.924851096992,
            "unit": "iter/sec",
            "range": "stddev: 0.00003990816977964947",
            "extra": "mean: 77.93670461054133 usec\nrounds: 6290"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 29394.742528547024,
            "unit": "iter/sec",
            "range": "stddev: 0.000019759633456648977",
            "extra": "mean: 34.01968903210631 usec\nrounds: 8689"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 12875.261382597142,
            "unit": "iter/sec",
            "range": "stddev: 0.00002480738066699979",
            "extra": "mean: 77.6683261243652 usec\nrounds: 2913"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 10575.62966571312,
            "unit": "iter/sec",
            "range": "stddev: 0.000102483023931898",
            "extra": "mean: 94.55701755915916 usec\nrounds: 5695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 21458.359309373158,
            "unit": "iter/sec",
            "range": "stddev: 0.000025573643004117908",
            "extra": "mean: 46.60188533441106 usec\nrounds: 7221"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 10864.644178404049,
            "unit": "iter/sec",
            "range": "stddev: 0.00004367084410125136",
            "extra": "mean: 92.0416705397244 usec\nrounds: 4131"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 21377.218041617027,
            "unit": "iter/sec",
            "range": "stddev: 0.000026936662183289065",
            "extra": "mean: 46.77877159007344 usec\nrounds: 8673"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 10817.760685565772,
            "unit": "iter/sec",
            "range": "stddev: 0.00012350609383542435",
            "extra": "mean: 92.44057333735515 usec\nrounds: 6511"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 21385.502290193654,
            "unit": "iter/sec",
            "range": "stddev: 0.00003144067363990877",
            "extra": "mean: 46.76065057674849 usec\nrounds: 8929"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 30002.3864278473,
            "unit": "iter/sec",
            "range": "stddev: 0.00004192599905446554",
            "extra": "mean: 33.33068195774688 usec\nrounds: 9766"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 13364.468831665197,
            "unit": "iter/sec",
            "range": "stddev: 0.000030508912474785855",
            "extra": "mean: 74.82527084283687 usec\nrounds: 4390"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 30078.09187045433,
            "unit": "iter/sec",
            "range": "stddev: 0.000022689325305019463",
            "extra": "mean: 33.246789866424294 usec\nrounds: 10184"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 13220.369570453797,
            "unit": "iter/sec",
            "range": "stddev: 0.00002617243140106671",
            "extra": "mean: 75.64085063362373 usec\nrounds: 5838"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 30827.379572467147,
            "unit": "iter/sec",
            "range": "stddev: 0.00002919133921174869",
            "extra": "mean: 32.43869618075258 usec\nrounds: 8719"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 12785.318271503162,
            "unit": "iter/sec",
            "range": "stddev: 0.00011469201362077239",
            "extra": "mean: 78.21471306106412 usec\nrounds: 5949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 11186.084630239044,
            "unit": "iter/sec",
            "range": "stddev: 0.00006237924087550804",
            "extra": "mean: 89.39678476030181 usec\nrounds: 6588"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 22131.310201876255,
            "unit": "iter/sec",
            "range": "stddev: 0.00003911247598992636",
            "extra": "mean: 45.18485308272538 usec\nrounds: 8726"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 10934.50605906155,
            "unit": "iter/sec",
            "range": "stddev: 0.00011227354069534225",
            "extra": "mean: 91.45360518331677 usec\nrounds: 4283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 22477.37634181352,
            "unit": "iter/sec",
            "range": "stddev: 0.000021347286680386597",
            "extra": "mean: 44.4891781315131 usec\nrounds: 8606"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 11540.089163787703,
            "unit": "iter/sec",
            "range": "stddev: 0.00001975117480367385",
            "extra": "mean: 86.65444311625915 usec\nrounds: 4852"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 22179.77402123454,
            "unit": "iter/sec",
            "range": "stddev: 0.000015720002966649806",
            "extra": "mean: 45.08612211479778 usec\nrounds: 8795"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 29583.637971923996,
            "unit": "iter/sec",
            "range": "stddev: 0.000026892192098341312",
            "extra": "mean: 33.80246881566893 usec\nrounds: 9524"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 12985.773524666449,
            "unit": "iter/sec",
            "range": "stddev: 0.000057651661108021985",
            "extra": "mean: 77.00734947367611 usec\nrounds: 3325"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 30642.892311215273,
            "unit": "iter/sec",
            "range": "stddev: 0.00003788555179805164",
            "extra": "mean: 32.63399518047455 usec\nrounds: 10582"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 13171.779589167565,
            "unit": "iter/sec",
            "range": "stddev: 0.00002036346566854942",
            "extra": "mean: 75.91988563355534 usec\nrounds: 6007"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 29450.68718121055,
            "unit": "iter/sec",
            "range": "stddev: 0.000024647224801598553",
            "extra": "mean: 33.955065083778315 usec\nrounds: 10571"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 13019.860939101885,
            "unit": "iter/sec",
            "range": "stddev: 0.00006088800666162952",
            "extra": "mean: 76.80573584290373 usec\nrounds: 6216"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 11072.36922573786,
            "unit": "iter/sec",
            "range": "stddev: 0.00004783671694290029",
            "extra": "mean: 90.31490728068276 usec\nrounds: 6579"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 22099.785062431212,
            "unit": "iter/sec",
            "range": "stddev: 0.000033521554006058497",
            "extra": "mean: 45.24930885866224 usec\nrounds: 8376"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 11265.016572695964,
            "unit": "iter/sec",
            "range": "stddev: 0.000022567284911573567",
            "extra": "mean: 88.77039758856549 usec\nrounds: 6386"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 22298.458301489172,
            "unit": "iter/sec",
            "range": "stddev: 0.000012562992782166962",
            "extra": "mean: 44.846149741805974 usec\nrounds: 7553"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 11012.690921458267,
            "unit": "iter/sec",
            "range": "stddev: 0.000058064472775031504",
            "extra": "mean: 90.80432812760561 usec\nrounds: 6403"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 21835.46268826891,
            "unit": "iter/sec",
            "range": "stddev: 0.00003332277243581318",
            "extra": "mean: 45.7970602352864 usec\nrounds: 8334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 29063.950324068148,
            "unit": "iter/sec",
            "range": "stddev: 0.00001836057964911462",
            "extra": "mean: 34.406885122284635 usec\nrounds: 10472"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 12729.496612784695,
            "unit": "iter/sec",
            "range": "stddev: 0.00004230217542386623",
            "extra": "mean: 78.55770188081621 usec\nrounds: 5689"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 29975.298897039684,
            "unit": "iter/sec",
            "range": "stddev: 0.000022459260874230227",
            "extra": "mean: 33.360801619855025 usec\nrounds: 11236"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 12824.223314814562,
            "unit": "iter/sec",
            "range": "stddev: 0.00007919910826462602",
            "extra": "mean: 77.97743188429966 usec\nrounds: 6166"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 29225.404730778333,
            "unit": "iter/sec",
            "range": "stddev: 0.00003080568720975372",
            "extra": "mean: 34.21680586503098 usec\nrounds: 11765"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 12748.66862155825,
            "unit": "iter/sec",
            "range": "stddev: 0.00005041755352493343",
            "extra": "mean: 78.43956335244138 usec\nrounds: 4033"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 11001.05918898141,
            "unit": "iter/sec",
            "range": "stddev: 0.00009291833673124064",
            "extra": "mean: 90.90033812395025 usec\nrounds: 6610"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 21701.401713927626,
            "unit": "iter/sec",
            "range": "stddev: 0.000025287028686059747",
            "extra": "mean: 46.07997276775976 usec\nrounds: 7381"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 10709.529626906362,
            "unit": "iter/sec",
            "range": "stddev: 0.00011490565782391516",
            "extra": "mean: 93.37478253831283 usec\nrounds: 5578"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 21869.05477153317,
            "unit": "iter/sec",
            "range": "stddev: 0.00002562867297154884",
            "extra": "mean: 45.72671340609081 usec\nrounds: 7795"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 10956.977959499793,
            "unit": "iter/sec",
            "range": "stddev: 0.00004368092275710095",
            "extra": "mean: 91.26604102849286 usec\nrounds: 5289"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 21110.64738382412,
            "unit": "iter/sec",
            "range": "stddev: 0.00007911947284483555",
            "extra": "mean: 47.36946157161635 usec\nrounds: 9277"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 109797.7420048343,
            "unit": "iter/sec",
            "range": "stddev: 0.0000213486952209027",
            "extra": "mean: 9.107655419325207 usec\nrounds: 42736"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 109119.91166662551,
            "unit": "iter/sec",
            "range": "stddev: 0.000011905118989563784",
            "extra": "mean: 9.1642302924064 usec\nrounds: 46949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 109873.0922898168,
            "unit": "iter/sec",
            "range": "stddev: 0.000008144097021176822",
            "extra": "mean: 9.101409445747269 usec\nrounds: 42919"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 108478.8147959819,
            "unit": "iter/sec",
            "range": "stddev: 0.00001329724907847639",
            "extra": "mean: 9.21838980155451 usec\nrounds: 45046"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 110079.41105568588,
            "unit": "iter/sec",
            "range": "stddev: 0.00001534094934828767",
            "extra": "mean: 9.084350928205184 usec\nrounds: 39216"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 103092.74475323582,
            "unit": "iter/sec",
            "range": "stddev: 0.00002011692838975696",
            "extra": "mean: 9.70000364616941 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 105532.71797849049,
            "unit": "iter/sec",
            "range": "stddev: 0.00003251736946326236",
            "extra": "mean: 9.47573434244173 usec\nrounds: 43669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 111812.64346065384,
            "unit": "iter/sec",
            "range": "stddev: 0.000012421453633459594",
            "extra": "mean: 8.943532404292846 usec\nrounds: 51814"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 109045.33526266835,
            "unit": "iter/sec",
            "range": "stddev: 0.000009679707707308282",
            "extra": "mean: 9.170497734645874 usec\nrounds: 41494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 110624.0638967295,
            "unit": "iter/sec",
            "range": "stddev: 0.000011338986039110084",
            "extra": "mean: 9.039624515453768 usec\nrounds: 39216"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 105874.0099852426,
            "unit": "iter/sec",
            "range": "stddev: 0.000018587996976391576",
            "extra": "mean: 9.445188674155125 usec\nrounds: 33004"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 109045.68345655582,
            "unit": "iter/sec",
            "range": "stddev: 0.000013925221943997145",
            "extra": "mean: 9.170468452319835 usec\nrounds: 45661"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 111999.83842008769,
            "unit": "iter/sec",
            "range": "stddev: 0.000007041489785851244",
            "extra": "mean: 8.928584309641696 usec\nrounds: 48310"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 106796.65796269248,
            "unit": "iter/sec",
            "range": "stddev: 0.000019021717829590368",
            "extra": "mean: 9.36358889010677 usec\nrounds: 45455"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 113301.48405935561,
            "unit": "iter/sec",
            "range": "stddev: 0.000005719718382518106",
            "extra": "mean: 8.826009723545427 usec\nrounds: 49262"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 110754.78073148627,
            "unit": "iter/sec",
            "range": "stddev: 0.000006116893815010564",
            "extra": "mean: 9.028955620655314 usec\nrounds: 43669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 111657.05547678939,
            "unit": "iter/sec",
            "range": "stddev: 0.00000519973114921708",
            "extra": "mean: 8.955994726261379 usec\nrounds: 48542"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 107621.51841340351,
            "unit": "iter/sec",
            "range": "stddev: 0.000023231389275127803",
            "extra": "mean: 9.291822069994666 usec\nrounds: 45872"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 106775.56310912414,
            "unit": "iter/sec",
            "range": "stddev: 0.000025729174273756952",
            "extra": "mean: 9.3654387846965 usec\nrounds: 40815"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 111486.14296450089,
            "unit": "iter/sec",
            "range": "stddev: 0.00000724836279691348",
            "extra": "mean: 8.969724608002785 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 104381.17057943434,
            "unit": "iter/sec",
            "range": "stddev: 0.000025368791946503996",
            "extra": "mean: 9.580271944152967 usec\nrounds: 45046"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 112764.69536321105,
            "unit": "iter/sec",
            "range": "stddev: 0.000015036655349559777",
            "extra": "mean: 8.868023779774651 usec\nrounds: 48781"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 106056.00721611678,
            "unit": "iter/sec",
            "range": "stddev: 0.000009103379210949707",
            "extra": "mean: 9.428980274188893 usec\nrounds: 42736"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 109967.13686646427,
            "unit": "iter/sec",
            "range": "stddev: 0.000008644051234455006",
            "extra": "mean: 9.093625864009937 usec\nrounds: 46729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 109397.599526668,
            "unit": "iter/sec",
            "range": "stddev: 0.000011328580729450184",
            "extra": "mean: 9.140968397174278 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 108228.52491858069,
            "unit": "iter/sec",
            "range": "stddev: 0.00001396260340296219",
            "extra": "mean: 9.239708300120421 usec\nrounds: 42554"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 112899.1514781678,
            "unit": "iter/sec",
            "range": "stddev: 0.000006877802748504386",
            "extra": "mean: 8.857462495574007 usec\nrounds: 48781"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 105041.8562344322,
            "unit": "iter/sec",
            "range": "stddev: 0.000009416887348403786",
            "extra": "mean: 9.52001455275316 usec\nrounds: 40817"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 107692.67066569228,
            "unit": "iter/sec",
            "range": "stddev: 0.00001268353648552695",
            "extra": "mean: 9.285682988624876 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 107777.75265307225,
            "unit": "iter/sec",
            "range": "stddev: 0.00000701210911381005",
            "extra": "mean: 9.278352678394752 usec\nrounds: 45455"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 108303.64245733545,
            "unit": "iter/sec",
            "range": "stddev: 0.000013728696359356125",
            "extra": "mean: 9.233299797778589 usec\nrounds: 44053"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 110420.32418428142,
            "unit": "iter/sec",
            "range": "stddev: 0.000012733099291528605",
            "extra": "mean: 9.056303786349075 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 108433.61739123553,
            "unit": "iter/sec",
            "range": "stddev: 0.000009599275226046503",
            "extra": "mean: 9.222232219662423 usec\nrounds: 46512"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 110735.0564936531,
            "unit": "iter/sec",
            "range": "stddev: 0.0000072760661170677375",
            "extra": "mean: 9.030563867164469 usec\nrounds: 46949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 106699.7405717577,
            "unit": "iter/sec",
            "range": "stddev: 0.000011726753710111946",
            "extra": "mean: 9.37209401486295 usec\nrounds: 43291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 110665.39440219107,
            "unit": "iter/sec",
            "range": "stddev: 0.000011824581156195742",
            "extra": "mean: 9.036248462330523 usec\nrounds: 49259"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 88390.39528517982,
            "unit": "iter/sec",
            "range": "stddev: 0.00001589683005990616",
            "extra": "mean: 11.31344640753821 usec\nrounds: 35714"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 94241.42735068855,
            "unit": "iter/sec",
            "range": "stddev: 0.000009197209083757596",
            "extra": "mean: 10.611044718994206 usec\nrounds: 24039"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 89360.08406839315,
            "unit": "iter/sec",
            "range": "stddev: 0.000017061652246005502",
            "extra": "mean: 11.190678818460313 usec\nrounds: 35715"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 92861.07517558374,
            "unit": "iter/sec",
            "range": "stddev: 0.000005584689893507769",
            "extra": "mean: 10.76877473267651 usec\nrounds: 39371"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 88298.99789454941,
            "unit": "iter/sec",
            "range": "stddev: 0.000017089816430181716",
            "extra": "mean: 11.325156840332937 usec\nrounds: 28902"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 91483.04441417409,
            "unit": "iter/sec",
            "range": "stddev: 0.0000063041245488366196",
            "extra": "mean: 10.930987336545867 usec\nrounds: 40984"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 89084.84573753904,
            "unit": "iter/sec",
            "range": "stddev: 0.00002072063043462916",
            "extra": "mean: 11.225253764778252 usec\nrounds: 38315"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 90296.37881021215,
            "unit": "iter/sec",
            "range": "stddev: 0.000013135945918891662",
            "extra": "mean: 11.074641233419031 usec\nrounds: 39371"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 90543.08961570173,
            "unit": "iter/sec",
            "range": "stddev: 0.000014276704933569724",
            "extra": "mean: 11.044465173922923 usec\nrounds: 39841"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 88962.07754448956,
            "unit": "iter/sec",
            "range": "stddev: 0.0000295383235733524",
            "extra": "mean: 11.240744681349245 usec\nrounds: 38168"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 90354.43671462526,
            "unit": "iter/sec",
            "range": "stddev: 0.000007586213696556767",
            "extra": "mean: 11.067525141663957 usec\nrounds: 38462"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 88878.2155496099,
            "unit": "iter/sec",
            "range": "stddev: 0.000012787455080905034",
            "extra": "mean: 11.25135100672472 usec\nrounds: 39683"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 90593.72350386243,
            "unit": "iter/sec",
            "range": "stddev: 0.000013028213292319926",
            "extra": "mean: 11.0382922935866 usec\nrounds: 41667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 93082.39144628921,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053602587488168295",
            "extra": "mean: 10.743170480068985 usec\nrounds: 29851"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 90327.92374012226,
            "unit": "iter/sec",
            "range": "stddev: 0.00001392182136894578",
            "extra": "mean: 11.070773672126546 usec\nrounds: 40649"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 90471.36256135906,
            "unit": "iter/sec",
            "range": "stddev: 0.000007867788938634123",
            "extra": "mean: 11.053221391705964 usec\nrounds: 37594"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 88819.52067295823,
            "unit": "iter/sec",
            "range": "stddev: 0.00001019800563651584",
            "extra": "mean: 11.258786271568539 usec\nrounds: 38315"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 89363.4989685623,
            "unit": "iter/sec",
            "range": "stddev: 0.000008177753062699582",
            "extra": "mean: 11.190251182440782 usec\nrounds: 22832"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 90938.0493335176,
            "unit": "iter/sec",
            "range": "stddev: 0.000013712334626589611",
            "extra": "mean: 10.996497146452686 usec\nrounds: 38023"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 91485.84789871024,
            "unit": "iter/sec",
            "range": "stddev: 0.000007087147502248216",
            "extra": "mean: 10.930652368300318 usec\nrounds: 38909"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 91336.396649161,
            "unit": "iter/sec",
            "range": "stddev: 0.00001295548114081426",
            "extra": "mean: 10.948537896028174 usec\nrounds: 38909"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 92074.27715764863,
            "unit": "iter/sec",
            "range": "stddev: 0.000006548673951094553",
            "extra": "mean: 10.860796640171394 usec\nrounds: 39526"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 89633.31345285288,
            "unit": "iter/sec",
            "range": "stddev: 0.000011731424567344862",
            "extra": "mean: 11.156566252858655 usec\nrounds: 34723"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 89721.15140237467,
            "unit": "iter/sec",
            "range": "stddev: 0.000007877594751187516",
            "extra": "mean: 11.14564385732496 usec\nrounds: 39063"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 91370.75707048136,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066822087301098986",
            "extra": "mean: 10.944420644655734 usec\nrounds: 39216"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 90516.97130886793,
            "unit": "iter/sec",
            "range": "stddev: 0.000006460923971093879",
            "extra": "mean: 11.047652009784272 usec\nrounds: 41323"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 90038.56835870715,
            "unit": "iter/sec",
            "range": "stddev: 0.00001679246496183728",
            "extra": "mean: 11.10635162496223 usec\nrounds: 40000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 90451.20093584224,
            "unit": "iter/sec",
            "range": "stddev: 0.00001120204778482452",
            "extra": "mean: 11.055685161209833 usec\nrounds: 37038"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 89633.56415980798,
            "unit": "iter/sec",
            "range": "stddev: 0.000011197088229149131",
            "extra": "mean: 11.156535047709324 usec\nrounds: 38462"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 90221.15662265597,
            "unit": "iter/sec",
            "range": "stddev: 0.000012122434471219364",
            "extra": "mean: 11.083874752154133 usec\nrounds: 39841"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 89220.08489769748,
            "unit": "iter/sec",
            "range": "stddev: 0.00000929440583243898",
            "extra": "mean: 11.208238606213287 usec\nrounds: 34844"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 88803.41695916907,
            "unit": "iter/sec",
            "range": "stddev: 0.000008741205309750988",
            "extra": "mean: 11.26082795282292 usec\nrounds: 33671"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 89637.21273499959,
            "unit": "iter/sec",
            "range": "stddev: 0.000022248537269195558",
            "extra": "mean: 11.156080934336568 usec\nrounds: 38315"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 92528.94045241487,
            "unit": "iter/sec",
            "range": "stddev: 0.000015148061654155984",
            "extra": "mean: 10.807429492984122 usec\nrounds: 38911"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 93023.50313031838,
            "unit": "iter/sec",
            "range": "stddev: 0.000007525201144292633",
            "extra": "mean: 10.749971419578568 usec\nrounds: 38313"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 90093.81556397615,
            "unit": "iter/sec",
            "range": "stddev: 0.000024632073171720907",
            "extra": "mean: 11.099541003343278 usec\nrounds: 36497"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 306362.1130751191,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030730614636364728",
            "extra": "mean: 3.264111185167348 usec\nrounds: 5999"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 22428.795635554263,
            "unit": "iter/sec",
            "range": "stddev: 0.00005490205094947732",
            "extra": "mean: 44.58554156224037 usec\nrounds: 11561"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 286291.9273824871,
            "unit": "iter/sec",
            "range": "stddev: 0.0000087302574991579",
            "extra": "mean: 3.4929381667964257 usec\nrounds: 106383"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 23175.477916141386,
            "unit": "iter/sec",
            "range": "stddev: 0.00002886423198292695",
            "extra": "mean: 43.14905624032522 usec\nrounds: 10953"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 297291.97725320235,
            "unit": "iter/sec",
            "range": "stddev: 0.000010205515150996816",
            "extra": "mean: 3.363696555956181 usec\nrounds: 99010"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 22637.311535957815,
            "unit": "iter/sec",
            "range": "stddev: 0.000020710628465674704",
            "extra": "mean: 44.174857001529034 usec\nrounds: 11112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 23355.806087961162,
            "unit": "iter/sec",
            "range": "stddev: 0.00002984929766172613",
            "extra": "mean: 42.815906084930795 usec\nrounds: 14971"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 299805.5180434924,
            "unit": "iter/sec",
            "range": "stddev: 0.00001198202720193422",
            "extra": "mean: 3.3354956457303477 usec\nrounds: 109891"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 21984.86032656988,
            "unit": "iter/sec",
            "range": "stddev: 0.00002112101835396433",
            "extra": "mean: 45.48584731245467 usec\nrounds: 465"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 294922.2391243251,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035281048757638257",
            "extra": "mean: 3.3907242904745747 usec\nrounds: 99010"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 23152.308280882906,
            "unit": "iter/sec",
            "range": "stddev: 0.000031540417677269615",
            "extra": "mean: 43.192237588928016 usec\nrounds: 11099"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 293530.9632105631,
            "unit": "iter/sec",
            "range": "stddev: 0.000006770848737438588",
            "extra": "mean: 3.4067956206809247 usec\nrounds: 111112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 283107.21205668675,
            "unit": "iter/sec",
            "range": "stddev: 0.000011941352127300606",
            "extra": "mean: 3.5322307500939587 usec\nrounds: 100000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 23231.446598081617,
            "unit": "iter/sec",
            "range": "stddev: 0.000016990992175705084",
            "extra": "mean: 43.045102498377226 usec\nrounds: 10527"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 293514.36056048726,
            "unit": "iter/sec",
            "range": "stddev: 0.000004635477463983144",
            "extra": "mean: 3.4069883261944205 usec\nrounds: 93458"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 22997.214407662697,
            "unit": "iter/sec",
            "range": "stddev: 0.0000387580015091384",
            "extra": "mean: 43.483527277407944 usec\nrounds: 11548"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 283012.5979115956,
            "unit": "iter/sec",
            "range": "stddev: 0.000012112060388518229",
            "extra": "mean: 3.533411612695662 usec\nrounds: 114943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 22106.124743196906,
            "unit": "iter/sec",
            "range": "stddev: 0.000075036016828249",
            "extra": "mean: 45.23633208519494 usec\nrounds: 10684"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 22762.112143471164,
            "unit": "iter/sec",
            "range": "stddev: 0.00006252347228399767",
            "extra": "mean: 43.93265412703931 usec\nrounds: 14514"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 278219.02740309486,
            "unit": "iter/sec",
            "range": "stddev: 0.000011508999597855187",
            "extra": "mean: 3.594290474429558 usec\nrounds: 114943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 23415.005600468754,
            "unit": "iter/sec",
            "range": "stddev: 0.000030205935096117535",
            "extra": "mean: 42.70765581110861 usec\nrounds: 8045"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 278499.5565540842,
            "unit": "iter/sec",
            "range": "stddev: 0.00001598535221042328",
            "extra": "mean: 3.5906699901900976 usec\nrounds: 117648"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 23400.530138745733,
            "unit": "iter/sec",
            "range": "stddev: 0.00003596047282635382",
            "extra": "mean: 42.73407457313272 usec\nrounds: 11948"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 272097.0674309769,
            "unit": "iter/sec",
            "range": "stddev: 0.000026707493205462924",
            "extra": "mean: 3.6751590505607736 usec\nrounds: 103093"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 298596.4814186742,
            "unit": "iter/sec",
            "range": "stddev: 0.000003267428497240839",
            "extra": "mean: 3.349001285108446 usec\nrounds: 119048"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 22710.380262876937,
            "unit": "iter/sec",
            "range": "stddev: 0.00001782783932891325",
            "extra": "mean: 44.03272813686126 usec\nrounds: 11149"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 288146.72365628375,
            "unit": "iter/sec",
            "range": "stddev: 0.000008715387026682967",
            "extra": "mean: 3.470454174564384 usec\nrounds: 104167"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 22635.066793379116,
            "unit": "iter/sec",
            "range": "stddev: 0.000023281722836893768",
            "extra": "mean: 44.1792378669943 usec\nrounds: 11683"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 290385.4933884144,
            "unit": "iter/sec",
            "range": "stddev: 0.000013579188875279744",
            "extra": "mean: 3.443698196942704 usec\nrounds: 113637"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 22419.534793257393,
            "unit": "iter/sec",
            "range": "stddev: 0.00001619675719202652",
            "extra": "mean: 44.6039585219559 usec\nrounds: 11934"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 21411.03438378959,
            "unit": "iter/sec",
            "range": "stddev: 0.00024071908716656785",
            "extra": "mean: 46.70488973466436 usec\nrounds: 13794"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 285490.6241396573,
            "unit": "iter/sec",
            "range": "stddev: 0.000013278547009492924",
            "extra": "mean: 3.5027420007699326 usec\nrounds: 104167"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 22443.754613899586,
            "unit": "iter/sec",
            "range": "stddev: 0.00005407566284585377",
            "extra": "mean: 44.55582486990356 usec\nrounds: 8251"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 290344.0081164669,
            "unit": "iter/sec",
            "range": "stddev: 0.000027150544049012647",
            "extra": "mean: 3.4441902434537783 usec\nrounds: 86957"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 22731.860216865713,
            "unit": "iter/sec",
            "range": "stddev: 0.00008143880733407178",
            "extra": "mean: 43.991120412488655 usec\nrounds: 11062"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 300518.60042290634,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038106490326391283",
            "extra": "mean: 3.32758105020037 usec\nrounds: 75188"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 8753.210551724529,
            "unit": "iter/sec",
            "range": "stddev: 0.000042106684967638205",
            "extra": "mean: 114.2437959295956 usec\nrounds: 7321"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 8524.097436229862,
            "unit": "iter/sec",
            "range": "stddev: 0.000032254396947128616",
            "extra": "mean: 117.31447317222265 usec\nrounds: 6989"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 9090.659488626889,
            "unit": "iter/sec",
            "range": "stddev: 0.0001095652415541726",
            "extra": "mean: 110.00302027053996 usec\nrounds: 6808"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 7858.200029470977,
            "unit": "iter/sec",
            "range": "stddev: 0.00004265405740911731",
            "extra": "mean: 127.25560513217441 usec\nrounds: 6235"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 6656.597996482684,
            "unit": "iter/sec",
            "range": "stddev: 0.00010992155611529622",
            "extra": "mean: 150.22688774782483 usec\nrounds: 5550"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 5427.587175898667,
            "unit": "iter/sec",
            "range": "stddev: 0.00006641327388621296",
            "extra": "mean: 184.2439315282718 usec\nrounds: 3841"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 6903.73534290667,
            "unit": "iter/sec",
            "range": "stddev: 0.00005243452995070444",
            "extra": "mean: 144.84912157408564 usec\nrounds: 5692"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 6410.452300746588,
            "unit": "iter/sec",
            "range": "stddev: 0.00014684231176812388",
            "extra": "mean: 155.9952329547068 usec\nrounds: 5808"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 144641.84266412762,
            "unit": "iter/sec",
            "range": "stddev: 0.00001962573310045601",
            "extra": "mean: 6.913628736893909 usec\nrounds: 39371"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 139796.13612184997,
            "unit": "iter/sec",
            "range": "stddev: 0.000014602150336925658",
            "extra": "mean: 7.153273529165169 usec\nrounds: 54645"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 121157.61671973695,
            "unit": "iter/sec",
            "range": "stddev: 0.00001174495266474819",
            "extra": "mean: 8.253711380880082 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 122402.21349345661,
            "unit": "iter/sec",
            "range": "stddev: 0.000024578529004048517",
            "extra": "mean: 8.169786897305237 usec\nrounds: 54645"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 28189.514904006362,
            "unit": "iter/sec",
            "range": "stddev: 0.00002623482881943796",
            "extra": "mean: 35.47418263156694 usec\nrounds: 8383"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 27377.915663644555,
            "unit": "iter/sec",
            "range": "stddev: 0.000019452235750907968",
            "extra": "mean: 36.52579006691555 usec\nrounds: 10289"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 22339.840223875635,
            "unit": "iter/sec",
            "range": "stddev: 0.000022795482930348524",
            "extra": "mean: 44.763077532275865 usec\nrounds: 12756"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 22344.372406877806,
            "unit": "iter/sec",
            "range": "stddev: 0.000014665389642700394",
            "extra": "mean: 44.75399808912022 usec\nrounds: 10990"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 26920.230190744904,
            "unit": "iter/sec",
            "range": "stddev: 0.00002900504442701264",
            "extra": "mean: 37.14678488684681 usec\nrounds: 12691"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 27896.652463851136,
            "unit": "iter/sec",
            "range": "stddev: 0.000014560388661771267",
            "extra": "mean: 35.846594902231146 usec\nrounds: 13967"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 23220.808243341762,
            "unit": "iter/sec",
            "range": "stddev: 0.00008092401434305649",
            "extra": "mean: 43.06482313279237 usec\nrounds: 11274"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 24961.379779633702,
            "unit": "iter/sec",
            "range": "stddev: 0.00001468075366378544",
            "extra": "mean: 40.06188795764857 usec\nrounds: 13004"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 4590.716442508133,
            "unit": "iter/sec",
            "range": "stddev: 0.00005132740923556554",
            "extra": "mean: 217.83092302116816 usec\nrounds: 1377"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 3309.1138706388642,
            "unit": "iter/sec",
            "range": "stddev: 0.00005498011068704271",
            "extra": "mean: 302.19570528316035 usec\nrounds: 1571"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 3132.41456284582,
            "unit": "iter/sec",
            "range": "stddev: 0.0001055903872858305",
            "extra": "mean: 319.2425459456086 usec\nrounds: 1665"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 4274.0215891838925,
            "unit": "iter/sec",
            "range": "stddev: 0.00004574615616468959",
            "extra": "mean: 233.97167729116362 usec\nrounds: 1506"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 112.14471692563765,
            "unit": "iter/sec",
            "range": "stddev: 0.0009696366461715956",
            "extra": "mean: 8.917049571430928 msec\nrounds: 56"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 93.78447970498353,
            "unit": "iter/sec",
            "range": "stddev: 0.013097927308914467",
            "extra": "mean: 10.662745084748408 msec\nrounds: 59"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 91.96991191746842,
            "unit": "iter/sec",
            "range": "stddev: 0.015043945605386912",
            "extra": "mean: 10.873121210525634 msec\nrounds: 57"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 95.05355692778697,
            "unit": "iter/sec",
            "range": "stddev: 0.013542600780824855",
            "extra": "mean: 10.520384847457196 msec\nrounds: 59"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 4285.693652510401,
            "unit": "iter/sec",
            "range": "stddev: 0.00014189711554108163",
            "extra": "mean: 233.3344567020643 usec\nrounds: 1686"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 3367.9205167239265,
            "unit": "iter/sec",
            "range": "stddev: 0.00006143691189086645",
            "extra": "mean: 296.9191211711638 usec\nrounds: 1469"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 3126.105662758761,
            "unit": "iter/sec",
            "range": "stddev: 0.00015699356555830117",
            "extra": "mean: 319.8868201778914 usec\nrounds: 1685"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 4248.40798458789,
            "unit": "iter/sec",
            "range": "stddev: 0.00012731067568380497",
            "extra": "mean: 235.38228993725127 usec\nrounds: 1590"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 94.70639722539785,
            "unit": "iter/sec",
            "range": "stddev: 0.013830099149880419",
            "extra": "mean: 10.558948807017075 msec\nrounds: 57"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 93.03864024182455,
            "unit": "iter/sec",
            "range": "stddev: 0.013727201901472813",
            "extra": "mean: 10.748222431033128 msec\nrounds: 58"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 94.66229589086448,
            "unit": "iter/sec",
            "range": "stddev: 0.013188141609420827",
            "extra": "mean: 10.563868017239864 msec\nrounds: 58"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 92.44402070657785,
            "unit": "iter/sec",
            "range": "stddev: 0.013362443933599153",
            "extra": "mean: 10.817357275859434 msec\nrounds: 58"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 65577.14496745478,
            "unit": "iter/sec",
            "range": "stddev: 0.00001183541811453045",
            "extra": "mean: 15.24921526388941 usec\nrounds: 29940"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 65108.8525728915,
            "unit": "iter/sec",
            "range": "stddev: 0.000009359564895172963",
            "extra": "mean: 15.358894535585115 usec\nrounds: 20661"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 63660.85983386766,
            "unit": "iter/sec",
            "range": "stddev: 0.000008750768327961335",
            "extra": "mean: 15.708238980900454 usec\nrounds: 23981"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 67327.6894182405,
            "unit": "iter/sec",
            "range": "stddev: 0.000008411277910081212",
            "extra": "mean: 14.852730112093804 usec\nrounds: 30031"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 55635.88310586686,
            "unit": "iter/sec",
            "range": "stddev: 0.000015481814082899622",
            "extra": "mean: 17.974011450436542 usec\nrounds: 27248"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 52765.30605430357,
            "unit": "iter/sec",
            "range": "stddev: 0.000011717951236452533",
            "extra": "mean: 18.951846862611717 usec\nrounds: 26042"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 53621.386157615896,
            "unit": "iter/sec",
            "range": "stddev: 0.000015444597845352586",
            "extra": "mean: 18.649275441343082 usec\nrounds: 27701"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 54392.597221676384,
            "unit": "iter/sec",
            "range": "stddev: 0.0000268021793836551",
            "extra": "mean: 18.38485476110861 usec\nrounds: 28491"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 48522.53088770359,
            "unit": "iter/sec",
            "range": "stddev: 0.00001873251754926557",
            "extra": "mean: 20.60898270773045 usec\nrounds: 15267"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 49141.58878742069,
            "unit": "iter/sec",
            "range": "stddev: 0.000010545457047303222",
            "extra": "mean: 20.349362417358 usec\nrounds: 22223"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 48486.896657450794,
            "unit": "iter/sec",
            "range": "stddev: 0.00001300449909827886",
            "extra": "mean: 20.624128763380735 usec\nrounds: 17272"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 48154.938015403975,
            "unit": "iter/sec",
            "range": "stddev: 0.000011078180612641896",
            "extra": "mean: 20.766302298636877 usec\nrounds: 19881"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 41330.89177590645,
            "unit": "iter/sec",
            "range": "stddev: 0.000011770000599142602",
            "extra": "mean: 24.194977582916394 usec\nrounds: 20877"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 41260.05230202755,
            "unit": "iter/sec",
            "range": "stddev: 0.000023534178150490157",
            "extra": "mean: 24.2365179927525 usec\nrounds: 16340"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 39779.73376042555,
            "unit": "iter/sec",
            "range": "stddev: 0.000029091495190151748",
            "extra": "mean: 25.138428678847504 usec\nrounds: 21277"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 41445.65345031802,
            "unit": "iter/sec",
            "range": "stddev: 0.00001135697153037956",
            "extra": "mean: 24.12798247224467 usec\nrounds: 1084"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 49742.5903372645,
            "unit": "iter/sec",
            "range": "stddev: 0.000021491155792682352",
            "extra": "mean: 20.103496686035133 usec\nrounds: 11919"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 11460.390112677202,
            "unit": "iter/sec",
            "range": "stddev: 0.000037330585920303815",
            "extra": "mean: 87.2570645648288 usec\nrounds: 5963"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 11992.848135666276,
            "unit": "iter/sec",
            "range": "stddev: 0.00002700355134446524",
            "extra": "mean: 83.38302867573533 usec\nrounds: 5754"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 54329.03845535824,
            "unit": "iter/sec",
            "range": "stddev: 0.000010337077432791637",
            "extra": "mean: 18.40636294017411 usec\nrounds: 20367"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 48161.17650503815,
            "unit": "iter/sec",
            "range": "stddev: 0.00002285866842120545",
            "extra": "mean: 20.763612365146226 usec\nrounds: 20202"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 10504.620177469396,
            "unit": "iter/sec",
            "range": "stddev: 0.00006987772462552493",
            "extra": "mean: 95.19620729789241 usec\nrounds: 5673"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 10658.467292164623,
            "unit": "iter/sec",
            "range": "stddev: 0.00009227302185631936",
            "extra": "mean: 93.82212025317483 usec\nrounds: 6636"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 48470.67450116244,
            "unit": "iter/sec",
            "range": "stddev: 0.000009911732871110148",
            "extra": "mean: 20.631031242942942 usec\nrounds: 17700"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 356385.20731992956,
            "unit": "iter/sec",
            "range": "stddev: 0.000003615285702580387",
            "extra": "mean: 2.805952602578964 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 11191.307015625533,
            "unit": "iter/sec",
            "range": "stddev: 0.00003185952499566963",
            "extra": "mean: 89.35506805449796 usec\nrounds: 1249"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 11159.894337413725,
            "unit": "iter/sec",
            "range": "stddev: 0.0000471695180728942",
            "extra": "mean: 89.60658315979605 usec\nrounds: 1437"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 340632.5548790489,
            "unit": "iter/sec",
            "range": "stddev: 0.000012100376801499913",
            "extra": "mean: 2.935714703942722 usec\nrounds: 62500"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 257637.28957104523,
            "unit": "iter/sec",
            "range": "stddev: 0.000026096253783456376",
            "extra": "mean: 3.8814257115689896 usec\nrounds: 37314"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 7056.672397415051,
            "unit": "iter/sec",
            "range": "stddev: 0.00024187980574744142",
            "extra": "mean: 141.70985185118028 usec\nrounds: 54"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 9428.77503328894,
            "unit": "iter/sec",
            "range": "stddev: 0.000014617879086293503",
            "extra": "mean: 106.05831579069721 usec\nrounds: 57"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 272767.734148186,
            "unit": "iter/sec",
            "range": "stddev: 0.000005976492706645806",
            "extra": "mean: 3.6661227660333604 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 28464.311218229752,
            "unit": "iter/sec",
            "range": "stddev: 0.000025177147955293304",
            "extra": "mean: 35.13171256220518 usec\nrounds: 10858"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 12658.44296916859,
            "unit": "iter/sec",
            "range": "stddev: 0.0000770489010867014",
            "extra": "mean: 78.99865745223484 usec\nrounds: 7018"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 12765.068618865198,
            "unit": "iter/sec",
            "range": "stddev: 0.00003395901552552931",
            "extra": "mean: 78.33878766010886 usec\nrounds: 8039"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 29573.784287861003,
            "unit": "iter/sec",
            "range": "stddev: 0.000017193380761969327",
            "extra": "mean: 33.813731454397086 usec\nrounds: 12240"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 24866.03770702088,
            "unit": "iter/sec",
            "range": "stddev: 0.0000372347620273662",
            "extra": "mean: 40.215494393690705 usec\nrounds: 11683"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 11796.299588141384,
            "unit": "iter/sec",
            "range": "stddev: 0.00002596423815691722",
            "extra": "mean: 84.77234683029606 usec\nrounds: 4890"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 11076.710734782953,
            "unit": "iter/sec",
            "range": "stddev: 0.00007888958448251397",
            "extra": "mean: 90.27950841578016 usec\nrounds: 7486"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 25377.21164780558,
            "unit": "iter/sec",
            "range": "stddev: 0.000018504488827150485",
            "extra": "mean: 39.40543247533943 usec\nrounds: 13210"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 29647.390511168844,
            "unit": "iter/sec",
            "range": "stddev: 0.00002830324076140956",
            "extra": "mean: 33.72978136552279 usec\nrounds: 11087"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 12901.168916931725,
            "unit": "iter/sec",
            "range": "stddev: 0.00002630468580248789",
            "extra": "mean: 77.51235616236154 usec\nrounds: 6921"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 12574.77497849548,
            "unit": "iter/sec",
            "range": "stddev: 0.00003348337360466778",
            "extra": "mean: 79.52428585880317 usec\nrounds: 6916"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 29684.38040479871,
            "unit": "iter/sec",
            "range": "stddev: 0.000014871849863809817",
            "extra": "mean: 33.687750472243046 usec\nrounds: 11642"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 25601.494489031236,
            "unit": "iter/sec",
            "range": "stddev: 0.000011018384709020186",
            "extra": "mean: 39.06021972383066 usec\nrounds: 12675"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 11626.079303575645,
            "unit": "iter/sec",
            "range": "stddev: 0.00003859669831283001",
            "extra": "mean: 86.01351959576313 usec\nrounds: 6532"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 11170.814665730002,
            "unit": "iter/sec",
            "range": "stddev: 0.00004997278141562013",
            "extra": "mean: 89.51898585049624 usec\nrounds: 6926"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 26039.5902376977,
            "unit": "iter/sec",
            "range": "stddev: 0.000019612176566368173",
            "extra": "mean: 38.40306206325371 usec\nrounds: 12020"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 24435.796636440835,
            "unit": "iter/sec",
            "range": "stddev: 0.00002610882247858152",
            "extra": "mean: 40.923568602167485 usec\nrounds: 11574"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 23217.210359126457,
            "unit": "iter/sec",
            "range": "stddev: 0.00003021099320731333",
            "extra": "mean: 43.0714967272935 usec\nrounds: 9931"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 23763.150555923985,
            "unit": "iter/sec",
            "range": "stddev: 0.000015803850992611253",
            "extra": "mean: 42.08196205493076 usec\nrounds: 11991"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 23897.994084617745,
            "unit": "iter/sec",
            "range": "stddev: 0.00006229906462665007",
            "extra": "mean: 41.84451617400236 usec\nrounds: 12211"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 20463.243646254596,
            "unit": "iter/sec",
            "range": "stddev: 0.00004359849337533092",
            "extra": "mean: 48.86810797383194 usec\nrounds: 9067"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 20733.181674389645,
            "unit": "iter/sec",
            "range": "stddev: 0.000032004831852469185",
            "extra": "mean: 48.231864057566966 usec\nrounds: 9607"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 20285.077033993337,
            "unit": "iter/sec",
            "range": "stddev: 0.00004026173235992336",
            "extra": "mean: 49.2973232649903 usec\nrounds: 11124"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 20737.068451039668,
            "unit": "iter/sec",
            "range": "stddev: 0.000034899090098367866",
            "extra": "mean: 48.22282389437087 usec\nrounds: 11442"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys0]",
            "value": 22892.903581413993,
            "unit": "iter/sec",
            "range": "stddev: 0.000025396847033222268",
            "extra": "mean: 43.68165866089034 usec\nrounds: 11575"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys1]",
            "value": 23129.951958313584,
            "unit": "iter/sec",
            "range": "stddev: 0.00004679085755976055",
            "extra": "mean: 43.233985172224735 usec\nrounds: 9644"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys2]",
            "value": 23057.719978629066,
            "unit": "iter/sec",
            "range": "stddev: 0.0000652438289089138",
            "extra": "mean: 43.369422515619284 usec\nrounds: 12196"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys3]",
            "value": 23245.879235490796,
            "unit": "iter/sec",
            "range": "stddev: 0.000024518699688094472",
            "extra": "mean: 43.01837714416255 usec\nrounds: 8803"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys4]",
            "value": 19901.77484254974,
            "unit": "iter/sec",
            "range": "stddev: 0.000043582706996396327",
            "extra": "mean: 50.246774868642 usec\nrounds: 11038"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys5]",
            "value": 20084.230922139763,
            "unit": "iter/sec",
            "range": "stddev: 0.000020592019346219405",
            "extra": "mean: 49.79030583131039 usec\nrounds: 9672"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys6]",
            "value": 20100.003652628435,
            "unit": "iter/sec",
            "range": "stddev: 0.000039830046449742764",
            "extra": "mean: 49.75123474016046 usec\nrounds: 11468"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys7]",
            "value": 18633.005685607117,
            "unit": "iter/sec",
            "range": "stddev: 0.00006455328582309709",
            "extra": "mean: 53.66820666900994 usec\nrounds: 10616"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 43412.39445967448,
            "unit": "iter/sec",
            "range": "stddev: 0.000013831819298529456",
            "extra": "mean: 23.03489619603669 usec\nrounds: 15221"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 16090.19059532424,
            "unit": "iter/sec",
            "range": "stddev: 0.000022302347468862518",
            "extra": "mean: 62.149667778988075 usec\nrounds: 8091"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 15196.24356255953,
            "unit": "iter/sec",
            "range": "stddev: 0.00009214422697998535",
            "extra": "mean: 65.80573652187293 usec\nrounds: 8217"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 43924.64320575691,
            "unit": "iter/sec",
            "range": "stddev: 0.00001632768111802057",
            "extra": "mean: 22.766263468907052 usec\nrounds: 18116"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 39661.62853713867,
            "unit": "iter/sec",
            "range": "stddev: 0.000015471982877786665",
            "extra": "mean: 25.213286415196293 usec\nrounds: 15083"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 14200.667615374517,
            "unit": "iter/sec",
            "range": "stddev: 0.000020522335507436735",
            "extra": "mean: 70.41922443965511 usec\nrounds: 7717"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 13787.671093406567,
            "unit": "iter/sec",
            "range": "stddev: 0.000029962845563301867",
            "extra": "mean: 72.52856506551076 usec\nrounds: 8599"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 40596.45774203408,
            "unit": "iter/sec",
            "range": "stddev: 0.000013850511183473876",
            "extra": "mean: 24.632691018373936 usec\nrounds: 17124"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 43155.54390055792,
            "unit": "iter/sec",
            "range": "stddev: 0.000019201369601553686",
            "extra": "mean: 23.1719938996545 usec\nrounds: 17212"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 16555.402788932453,
            "unit": "iter/sec",
            "range": "stddev: 0.00002913239656825415",
            "extra": "mean: 60.40324193552788 usec\nrounds: 8184"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 15743.58844603317,
            "unit": "iter/sec",
            "range": "stddev: 0.00007411876113514127",
            "extra": "mean: 63.51792054447185 usec\nrounds: 8961"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 43278.632944173696,
            "unit": "iter/sec",
            "range": "stddev: 0.000009320842538006126",
            "extra": "mean: 23.106090279929305 usec\nrounds: 9681"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 39924.7408456935,
            "unit": "iter/sec",
            "range": "stddev: 0.00001813722991111469",
            "extra": "mean: 25.047125637331856 usec\nrounds: 17065"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 14298.2941177996,
            "unit": "iter/sec",
            "range": "stddev: 0.00003245809507452405",
            "extra": "mean: 69.93841305552137 usec\nrounds: 7108"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 13866.680658039359,
            "unit": "iter/sec",
            "range": "stddev: 0.00004164491013875603",
            "extra": "mean: 72.11531185152369 usec\nrounds: 8674"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 39189.998183096766,
            "unit": "iter/sec",
            "range": "stddev: 0.000016507569906939308",
            "extra": "mean: 25.51671463029858 usec\nrounds: 17826"
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
        "date": 1669518610073,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 3.668168013598378,
            "unit": "iter/sec",
            "range": "stddev: 0.001509248338539528",
            "extra": "mean: 272.61564800000144 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 49833.94325462578,
            "unit": "iter/sec",
            "range": "stddev: 0.0002293197761951948",
            "extra": "mean: 20.06664403197064 usec\nrounds: 7113"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 29.924360493224217,
            "unit": "iter/sec",
            "range": "stddev: 0.002090146455880509",
            "extra": "mean: 33.4175896666674 msec\nrounds: 30"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 1122.9699857683977,
            "unit": "iter/sec",
            "range": "stddev: 0.00009721929807907559",
            "extra": "mean: 890.4957502633031 usec\nrounds: 949"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 12847.19502150085,
            "unit": "iter/sec",
            "range": "stddev: 0.00000847681304828875",
            "extra": "mean: 77.83800263998614 usec\nrounds: 12500"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 12156.04019761814,
            "unit": "iter/sec",
            "range": "stddev: 0.000009405072071499278",
            "extra": "mean: 82.26363056910098 usec\nrounds: 6150"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 12872.012027756447,
            "unit": "iter/sec",
            "range": "stddev: 0.000009158874016283478",
            "extra": "mean: 77.68793237946477 usec\nrounds: 8666"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 12842.001643289166,
            "unit": "iter/sec",
            "range": "stddev: 0.000009085053689853197",
            "extra": "mean: 77.86948076918907 usec\nrounds: 8320"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 12141.530158116951,
            "unit": "iter/sec",
            "range": "stddev: 0.000006771296686344493",
            "extra": "mean: 82.36194177975763 usec\nrounds: 6046"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 11786.037296531234,
            "unit": "iter/sec",
            "range": "stddev: 0.000007887429947668296",
            "extra": "mean: 84.84615947162423 usec\nrounds: 8177"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 11437.822301137952,
            "unit": "iter/sec",
            "range": "stddev: 0.000005876194754789193",
            "extra": "mean: 87.42923029154856 usec\nrounds: 5797"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 11712.715908745196,
            "unit": "iter/sec",
            "range": "stddev: 0.000007689713233899174",
            "extra": "mean: 85.37729488114357 usec\nrounds: 8244"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 11519.697559608598,
            "unit": "iter/sec",
            "range": "stddev: 0.000024485720589709067",
            "extra": "mean: 86.80783456557836 usec\nrounds: 8251"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 11541.05767883922,
            "unit": "iter/sec",
            "range": "stddev: 0.000008895613456903013",
            "extra": "mean: 86.64717115429738 usec\nrounds: 7502"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 2962101.919109895,
            "unit": "iter/sec",
            "range": "stddev: 4.004084617987214e-7",
            "extra": "mean: 337.5981067863368 nsec\nrounds: 200000"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 3108174.13751302,
            "unit": "iter/sec",
            "range": "stddev: 3.106893526901066e-7",
            "extra": "mean: 321.7322954756138 nsec\nrounds: 46510"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 3026520.8100725487,
            "unit": "iter/sec",
            "range": "stddev: 2.163688203331171e-7",
            "extra": "mean: 330.41239851115677 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 3073604.0830782633,
            "unit": "iter/sec",
            "range": "stddev: 8.428869224052585e-8",
            "extra": "mean: 325.3509472823643 nsec\nrounds: 188680"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 2968043.7953177486,
            "unit": "iter/sec",
            "range": "stddev: 7.175943390672223e-8",
            "extra": "mean: 336.92225215061694 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 13478.170255935607,
            "unit": "iter/sec",
            "range": "stddev: 0.00000834040621199406",
            "extra": "mean: 74.19404718972245 usec\nrounds: 8985"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 12936.154382469937,
            "unit": "iter/sec",
            "range": "stddev: 0.000008633608473473191",
            "extra": "mean: 77.3027261761132 usec\nrounds: 6632"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 13492.459483821405,
            "unit": "iter/sec",
            "range": "stddev: 0.00000924242108795115",
            "extra": "mean: 74.11547177140567 usec\nrounds: 9795"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 13207.367018610103,
            "unit": "iter/sec",
            "range": "stddev: 0.000007620157838767792",
            "extra": "mean: 75.71531847270771 usec\nrounds: 9690"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 12596.505450352857,
            "unit": "iter/sec",
            "range": "stddev: 0.000008467800384757439",
            "extra": "mean: 79.38709699617426 usec\nrounds: 9588"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 8703.51468991377,
            "unit": "iter/sec",
            "range": "stddev: 0.00000574427787032701",
            "extra": "mean: 114.89611216016773 usec\nrounds: 6143"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 8710.730015535211,
            "unit": "iter/sec",
            "range": "stddev: 0.000007852183028373513",
            "extra": "mean: 114.80094070376916 usec\nrounds: 4604"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 9036.407306185996,
            "unit": "iter/sec",
            "range": "stddev: 0.000009576610173657715",
            "extra": "mean: 110.66344910276857 usec\nrounds: 6464"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 8939.924845486887,
            "unit": "iter/sec",
            "range": "stddev: 0.000008764935824909064",
            "extra": "mean: 111.85776360355275 usec\nrounds: 8858"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 8917.831883396426,
            "unit": "iter/sec",
            "range": "stddev: 0.000009510650183101642",
            "extra": "mean: 112.13487909116562 usec\nrounds: 6294"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 13583.509406988045,
            "unit": "iter/sec",
            "range": "stddev: 0.000008729794427059171",
            "extra": "mean: 73.61867762137739 usec\nrounds: 9737"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 11388.81478410481,
            "unit": "iter/sec",
            "range": "stddev: 0.000010194225349726236",
            "extra": "mean: 87.80544937790052 usec\nrounds: 7072"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 8107.387124765404,
            "unit": "iter/sec",
            "range": "stddev: 0.000011505392099430451",
            "extra": "mean: 123.3443012663511 usec\nrounds: 5291"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 7283.513245029289,
            "unit": "iter/sec",
            "range": "stddev: 0.000015913484612005962",
            "extra": "mean: 137.296379694574 usec\nrounds: 5565"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 12119.482230185757,
            "unit": "iter/sec",
            "range": "stddev: 0.000009254588326343256",
            "extra": "mean: 82.51177575138644 usec\nrounds: 12611"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 11797.476891480466,
            "unit": "iter/sec",
            "range": "stddev: 0.000006915028804011464",
            "extra": "mean: 84.76388715981709 usec\nrounds: 12531"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 11821.395765241143,
            "unit": "iter/sec",
            "range": "stddev: 0.000007464542832376543",
            "extra": "mean: 84.59237977129015 usec\nrounds: 10846"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 18081122.891315784,
            "unit": "iter/sec",
            "range": "stddev: 1.233781164475477e-8",
            "extra": "mean: 55.30629961488034 nsec\nrounds: 185151"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 17209187.161504496,
            "unit": "iter/sec",
            "range": "stddev: 1.2960484991331593e-8",
            "extra": "mean: 58.10849696824797 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 15153452.007593263,
            "unit": "iter/sec",
            "range": "stddev: 1.4342146813080969e-8",
            "extra": "mean: 65.99156413332516 nsec\nrounds: 175439"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 18143415.301184583,
            "unit": "iter/sec",
            "range": "stddev: 1.2961144966508219e-8",
            "extra": "mean: 55.11641460000121 nsec\nrounds: 200000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 17619574.027041648,
            "unit": "iter/sec",
            "range": "stddev: 1.1373675119471442e-8",
            "extra": "mean: 56.7550610738571 nsec\nrounds: 185186"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 17697696.85019577,
            "unit": "iter/sec",
            "range": "stddev: 1.2325331386898468e-8",
            "extra": "mean: 56.50452759275672 nsec\nrounds: 161291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 43318.79628508938,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035250622598261946",
            "extra": "mean: 23.084667298204835 usec\nrounds: 8446"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 17302.576703315048,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035329651730456717",
            "extra": "mean: 57.794860103605686 usec\nrounds: 193"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 42481.28327445239,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032029994948489004",
            "extra": "mean: 23.5397785311581 usec\nrounds: 10471"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 17678.764759621805,
            "unit": "iter/sec",
            "range": "stddev: 0.000004689881036775308",
            "extra": "mean: 56.56503797618226 usec\nrounds: 7294"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 41192.95366952428,
            "unit": "iter/sec",
            "range": "stddev: 0.000002620781542415091",
            "extra": "mean: 24.275996521701927 usec\nrounds: 9775"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 17864.258926305614,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075275676831797975",
            "extra": "mean: 55.97769289648351 usec\nrounds: 6532"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 14794.13757305986,
            "unit": "iter/sec",
            "range": "stddev: 0.000005263593062857313",
            "extra": "mean: 67.59434235767829 usec\nrounds: 7092"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 29525.162178577895,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033406446154779396",
            "extra": "mean: 33.86941599005184 usec\nrounds: 12195"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 15101.742653945432,
            "unit": "iter/sec",
            "range": "stddev: 0.000005521378868209386",
            "extra": "mean: 66.21752356101389 usec\nrounds: 6897"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 29459.9244094429,
            "unit": "iter/sec",
            "range": "stddev: 0.00000552186017727253",
            "extra": "mean: 33.944418393669274 usec\nrounds: 10471"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 14596.536080977752,
            "unit": "iter/sec",
            "range": "stddev: 0.0000049019859088915385",
            "extra": "mean: 68.50940486511749 usec\nrounds: 7153"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 28681.3822031241,
            "unit": "iter/sec",
            "range": "stddev: 0.000003279718366346234",
            "extra": "mean: 34.86582316423634 usec\nrounds: 9506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 41062.20316989694,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029540994624031917",
            "extra": "mean: 24.353296287158525 usec\nrounds: 12255"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 18138.620406375216,
            "unit": "iter/sec",
            "range": "stddev: 0.0000081597893685864",
            "extra": "mean: 55.130984473798684 usec\nrounds: 7278"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 41475.828997168326,
            "unit": "iter/sec",
            "range": "stddev: 0.000002871651698660979",
            "extra": "mean: 24.110428270602448 usec\nrounds: 10449"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 18037.756792552213,
            "unit": "iter/sec",
            "range": "stddev: 0.000006091619296858925",
            "extra": "mean: 55.439266173768345 usec\nrounds: 7033"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 41276.34153515481,
            "unit": "iter/sec",
            "range": "stddev: 0.000003091281418940607",
            "extra": "mean: 24.22695332987072 usec\nrounds: 15106"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 18059.758629227246,
            "unit": "iter/sec",
            "range": "stddev: 0.000008883258435712252",
            "extra": "mean: 55.37172564320085 usec\nrounds: 6415"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 15157.550839127749,
            "unit": "iter/sec",
            "range": "stddev: 0.000007420633208748629",
            "extra": "mean: 65.97371901393178 usec\nrounds: 7463"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 29788.812507698647,
            "unit": "iter/sec",
            "range": "stddev: 0.000003991771315619368",
            "extra": "mean: 33.569649671048786 usec\nrounds: 9728"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 15223.101964160507,
            "unit": "iter/sec",
            "range": "stddev: 0.000006760052306180607",
            "extra": "mean: 65.6896342384281 usec\nrounds: 6887"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 29586.997444322576,
            "unit": "iter/sec",
            "range": "stddev: 0.000005791421958109893",
            "extra": "mean: 33.79863069518361 usec\nrounds: 10184"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 15171.353816985471,
            "unit": "iter/sec",
            "range": "stddev: 0.000007217917706454654",
            "extra": "mean: 65.91369577581303 usec\nrounds: 7386"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 29881.843756369144,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040402397176334916",
            "extra": "mean: 33.465137163327 usec\nrounds: 9208"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 40320.37987929325,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032285805764971873",
            "extra": "mean: 24.8013536329194 usec\nrounds: 11905"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 17723.70031840403,
            "unit": "iter/sec",
            "range": "stddev: 0.000008098453889828645",
            "extra": "mean: 56.42162652466058 usec\nrounds: 7133"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 39825.69044309534,
            "unit": "iter/sec",
            "range": "stddev: 0.000002820040305715973",
            "extra": "mean: 25.109420298157623 usec\nrounds: 12346"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 17441.04343249283,
            "unit": "iter/sec",
            "range": "stddev: 0.000005557609272336312",
            "extra": "mean: 57.33601913615963 usec\nrounds: 7316"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 41159.73264629086,
            "unit": "iter/sec",
            "range": "stddev: 0.000003331250047948866",
            "extra": "mean: 24.295590270072264 usec\nrounds: 11737"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 17499.735301519555,
            "unit": "iter/sec",
            "range": "stddev: 0.000008154911907998148",
            "extra": "mean: 57.14372147749955 usec\nrounds: 7310"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 14844.22879955899,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061970853487745576",
            "extra": "mean: 67.36624808893468 usec\nrounds: 7195"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 27795.889145963294,
            "unit": "iter/sec",
            "range": "stddev: 0.000002265892622675412",
            "extra": "mean: 35.976542961038064 usec\nrounds: 9625"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 14695.73669570881,
            "unit": "iter/sec",
            "range": "stddev: 0.00000486353315511564",
            "extra": "mean: 68.04694590724412 usec\nrounds: 6988"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 29026.28024890434,
            "unit": "iter/sec",
            "range": "stddev: 0.000005772653958250624",
            "extra": "mean: 34.451538103569 usec\nrounds: 9671"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 14526.181844397097,
            "unit": "iter/sec",
            "range": "stddev: 0.000005889613936988107",
            "extra": "mean: 68.84121448512023 usec\nrounds: 7525"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 28976.934822573287,
            "unit": "iter/sec",
            "range": "stddev: 0.000003612148705286207",
            "extra": "mean: 34.51020634594489 usec\nrounds: 9644"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 41634.79592956791,
            "unit": "iter/sec",
            "range": "stddev: 0.000002639862869041642",
            "extra": "mean: 24.018371596960968 usec\nrounds: 12048"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 17663.63503980092,
            "unit": "iter/sec",
            "range": "stddev: 0.0001513791367695753",
            "extra": "mean: 56.61348854563237 usec\nrounds: 7770"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 43939.78798504176,
            "unit": "iter/sec",
            "range": "stddev: 0.000003470956441324091",
            "extra": "mean: 22.7584165936446 usec\nrounds: 14837"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 18334.639350033012,
            "unit": "iter/sec",
            "range": "stddev: 0.000005517592383292375",
            "extra": "mean: 54.54156915271963 usec\nrounds: 7093"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 43607.67409215687,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035894410573934257",
            "extra": "mean: 22.931743570791742 usec\nrounds: 12210"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 17431.6542243982,
            "unit": "iter/sec",
            "range": "stddev: 0.00000745849157832315",
            "extra": "mean: 57.366902023581375 usec\nrounds: 5634"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 15049.539524840782,
            "unit": "iter/sec",
            "range": "stddev: 0.000006409474613101395",
            "extra": "mean: 66.44721576692757 usec\nrounds: 6076"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 30014.697642989002,
            "unit": "iter/sec",
            "range": "stddev: 0.000003909596014133326",
            "extra": "mean: 33.3170106157503 usec\nrounds: 9891"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 15067.881352439428,
            "unit": "iter/sec",
            "range": "stddev: 0.000005229629885112599",
            "extra": "mean: 66.36633091341034 usec\nrounds: 7576"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 29178.30716300526,
            "unit": "iter/sec",
            "range": "stddev: 0.000004925119758795191",
            "extra": "mean: 34.272036222440114 usec\nrounds: 9911"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 14436.26594592487,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037627621984668825",
            "extra": "mean: 69.26999015852047 usec\nrounds: 6808"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 29411.355572831562,
            "unit": "iter/sec",
            "range": "stddev: 0.00000318627133249352",
            "extra": "mean: 34.0004729643859 usec\nrounds: 9506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 42314.8638740095,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034684784377288726",
            "extra": "mean: 23.63235772133056 usec\nrounds: 10989"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 18006.916318228414,
            "unit": "iter/sec",
            "range": "stddev: 0.000007691537095129534",
            "extra": "mean: 55.53421709344533 usec\nrounds: 6716"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 41767.66207057291,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034642080241384324",
            "extra": "mean: 23.941967312183905 usec\nrounds: 13736"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 17973.480849056083,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057380189278737675",
            "extra": "mean: 55.637525552125716 usec\nrounds: 7788"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 40667.46580317724,
            "unit": "iter/sec",
            "range": "stddev: 0.000002444978510583253",
            "extra": "mean: 24.58968072512334 usec\nrounds: 11642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 17418.041367726248,
            "unit": "iter/sec",
            "range": "stddev: 0.000007712232194654635",
            "extra": "mean: 57.411736422494215 usec\nrounds: 7402"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 14709.009408525575,
            "unit": "iter/sec",
            "range": "stddev: 0.000004898360248050428",
            "extra": "mean: 67.98554356899005 usec\nrounds: 7184"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 31140.991053019417,
            "unit": "iter/sec",
            "range": "stddev: 0.00000467265791356007",
            "extra": "mean: 32.112015905256186 usec\nrounds: 10374"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 14857.524477050512,
            "unit": "iter/sec",
            "range": "stddev: 0.000005919456316780419",
            "extra": "mean: 67.30596348972115 usec\nrounds: 7943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 28861.831075684106,
            "unit": "iter/sec",
            "range": "stddev: 0.000005834524805945218",
            "extra": "mean: 34.647836354447136 usec\nrounds: 10040"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 14756.93297279371,
            "unit": "iter/sec",
            "range": "stddev: 0.000005774582934808149",
            "extra": "mean: 67.76475856084919 usec\nrounds: 6921"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 29858.45686657794,
            "unit": "iter/sec",
            "range": "stddev: 0.000004115945999779822",
            "extra": "mean: 33.49134901607557 usec\nrounds: 9756"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 41558.9898999923,
            "unit": "iter/sec",
            "range": "stddev: 0.000003281160705539515",
            "extra": "mean: 24.062182512289244 usec\nrounds: 13495"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 17395.953357753944,
            "unit": "iter/sec",
            "range": "stddev: 0.000008136074144579465",
            "extra": "mean: 57.48463331871761 usec\nrounds: 6897"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 40936.192499128076,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034213481838012556",
            "extra": "mean: 24.428261129104758 usec\nrounds: 12063"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 18197.559354986384,
            "unit": "iter/sec",
            "range": "stddev: 0.000007511841244419496",
            "extra": "mean: 54.95242414065742 usec\nrounds: 6545"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 40469.77344266363,
            "unit": "iter/sec",
            "range": "stddev: 0.00000319611308247749",
            "extra": "mean: 24.709799806929247 usec\nrounds: 13477"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 17248.01968951348,
            "unit": "iter/sec",
            "range": "stddev: 0.000007998950134499829",
            "extra": "mean: 57.97767036455693 usec\nrounds: 6850"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 14164.1539716951,
            "unit": "iter/sec",
            "range": "stddev: 0.000004291587762891098",
            "extra": "mean: 70.60075751776967 usec\nrounds: 7316"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 28051.751232166876,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033238084706103858",
            "extra": "mean: 35.64839826660456 usec\nrounds: 9461"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 14809.717939201606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066222174391394455",
            "extra": "mean: 67.52323063175841 usec\nrounds: 6725"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 29243.340999257216,
            "unit": "iter/sec",
            "range": "stddev: 0.000005753366346603216",
            "extra": "mean: 34.19581914478924 usec\nrounds: 10384"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 14740.519844336612,
            "unit": "iter/sec",
            "range": "stddev: 0.000005856363030778553",
            "extra": "mean: 67.84021259495849 usec\nrounds: 7098"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 29411.746606220255,
            "unit": "iter/sec",
            "range": "stddev: 0.0000044898845763509325",
            "extra": "mean: 34.00002092322226 usec\nrounds: 9941"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 150322.15111588084,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014604030699529115",
            "extra": "mean: 6.6523795234217795 usec\nrounds: 54052"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 148804.98957958145,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015595249898682695",
            "extra": "mean: 6.720204764808618 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 151554.33414001678,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015554419671144334",
            "extra": "mean: 6.5982936461330635 usec\nrounds: 31446"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 145548.93859227953,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014490119862736853",
            "extra": "mean: 6.870541342807455 usec\nrounds: 54943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 150462.17715016322,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014996023682090324",
            "extra": "mean: 6.646188556755941 usec\nrounds: 53761"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 140739.22116564016,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014382664906783083",
            "extra": "mean: 7.105339874114198 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 144761.71227193033,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013326997065976058",
            "extra": "mean: 6.907903922285276 usec\nrounds: 42195"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 148540.72293998423,
            "unit": "iter/sec",
            "range": "stddev: 0.000001524734454905367",
            "extra": "mean: 6.732160583357573 usec\nrounds: 63288"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 143703.52624061145,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013494477703701869",
            "extra": "mean: 6.958771480148928 usec\nrounds: 56494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 152003.1797080947,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014095188259495068",
            "extra": "mean: 6.578809745430255 usec\nrounds: 60603"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 146363.40406918738,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015603580608672154",
            "extra": "mean: 6.832308980237235 usec\nrounds: 54052"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 152015.1677845824,
            "unit": "iter/sec",
            "range": "stddev: 0.000001643462843039259",
            "extra": "mean: 6.578290933553944 usec\nrounds: 56494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 147743.72710732787,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012739637269969952",
            "extra": "mean: 6.768476872615741 usec\nrounds: 68966"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 141172.81128399848,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012394821262326517",
            "extra": "mean: 7.08351693860011 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 147050.6485137148,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013724386146070925",
            "extra": "mean: 6.800378033740763 usec\nrounds: 63288"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 145739.62382816419,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014128987843261023",
            "extra": "mean: 6.861551949516903 usec\nrounds: 55246"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 142771.21507430496,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012434183467526975",
            "extra": "mean: 7.004212995452566 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 140929.619458313,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014401194379184612",
            "extra": "mean: 7.095740440112379 usec\nrounds: 52354"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 142679.5345752178,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012814489032610835",
            "extra": "mean: 7.008713639115636 usec\nrounds: 52357"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 144606.09593611848,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011113043641913977",
            "extra": "mean: 6.915337790750968 usec\nrounds: 58480"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 137691.40048395982,
            "unit": "iter/sec",
            "range": "stddev: 0.000001083393660116335",
            "extra": "mean: 7.262617683349757 usec\nrounds: 54345"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 140842.4682737097,
            "unit": "iter/sec",
            "range": "stddev: 9.97461339499808e-7",
            "extra": "mean: 7.100131176745819 usec\nrounds: 22321"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 141639.74516080448,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014028403460814246",
            "extra": "mean: 7.0601652019685135 usec\nrounds: 52911"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 144901.55442620337,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013576274952310785",
            "extra": "mean: 6.90123721556961 usec\nrounds: 58137"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 142449.75725390698,
            "unit": "iter/sec",
            "range": "stddev: 0.000001425210750080705",
            "extra": "mean: 7.020018982675894 usec\nrounds: 30396"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 140144.93485345918,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013688606527382863",
            "extra": "mean: 7.135470154848177 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 143114.09297205164,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013087708191156221",
            "extra": "mean: 6.987432049723344 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 139441.91427297427,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014205218269740216",
            "extra": "mean: 7.171444864435667 usec\nrounds: 21692"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 143858.92031560853,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014209398225943375",
            "extra": "mean: 6.951254727938489 usec\nrounds: 59169"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 141645.47282188782,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014520658290191885",
            "extra": "mean: 7.059879712904419 usec\nrounds: 54345"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 140870.2401172872,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013464316042570082",
            "extra": "mean: 7.098731422388501 usec\nrounds: 53761"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 149657.29143522278,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014858811843156625",
            "extra": "mean: 6.681933037875653 usec\nrounds: 44443"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 138304.50231971982,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012939851117148781",
            "extra": "mean: 7.230422605392055 usec\nrounds: 55553"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 149701.97201445297,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015618235362054557",
            "extra": "mean: 6.679938724544357 usec\nrounds: 63288"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 139792.40693125856,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013892394434964526",
            "extra": "mean: 7.1534643544104615 usec\nrounds: 64931"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 145788.8613254351,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014486966707455611",
            "extra": "mean: 6.8592345869809925 usec\nrounds: 57143"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 115339.76513175841,
            "unit": "iter/sec",
            "range": "stddev: 0.000001621090019975761",
            "extra": "mean: 8.67003672894296 usec\nrounds: 44842"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 116667.7147989287,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014694299445495394",
            "extra": "mean: 8.571351566484806 usec\nrounds: 43858"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 113072.83415476992,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014453006172591887",
            "extra": "mean: 8.843857213583565 usec\nrounds: 46510"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 119150.12515853821,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016958450751831891",
            "extra": "mean: 8.392773391294593 usec\nrounds: 45872"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 115129.74572542445,
            "unit": "iter/sec",
            "range": "stddev: 0.000001721741037242639",
            "extra": "mean: 8.685852589172939 usec\nrounds: 33003"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 113809.91794398586,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014549918903685576",
            "extra": "mean: 8.78658044980028 usec\nrounds: 32051"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 115042.20261150513,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014649235057790539",
            "extra": "mean: 8.692462220816278 usec\nrounds: 44641"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 114372.20389638496,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016153040625334005",
            "extra": "mean: 8.743383146712343 usec\nrounds: 44051"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 118902.20993383153,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016275604278372038",
            "extra": "mean: 8.41027261441562 usec\nrounds: 48310"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 117495.73870446255,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017503434243673442",
            "extra": "mean: 8.510946958811022 usec\nrounds: 45870"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 120005.48235987894,
            "unit": "iter/sec",
            "range": "stddev: 0.000001788849064880181",
            "extra": "mean: 8.332952631290176 usec\nrounds: 45663"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 114440.96520542806,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017655897023118146",
            "extra": "mean: 8.73812972657949 usec\nrounds: 45249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 113647.60696213994,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015535356964406949",
            "extra": "mean: 8.799129402989854 usec\nrounds: 55246"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 116716.37696471492,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015863526123976362",
            "extra": "mean: 8.56777794175632 usec\nrounds: 55553"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 116579.51322744353,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015285747822299452",
            "extra": "mean: 8.577836468136786 usec\nrounds: 49018"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 117727.01903804642,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015983681519012572",
            "extra": "mean: 8.494226798325924 usec\nrounds: 37174"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 116888.83676955146,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017248571476208613",
            "extra": "mean: 8.555136894479656 usec\nrounds: 38022"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 116709.92861861964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014469102380888736",
            "extra": "mean: 8.568251320483304 usec\nrounds: 45249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 116767.0828346162,
            "unit": "iter/sec",
            "range": "stddev: 0.00000153444799031213",
            "extra": "mean: 8.564057401488366 usec\nrounds: 55556"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 114641.63169200585,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015084991093031193",
            "extra": "mean: 8.722834673939238 usec\nrounds: 56815"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 115206.86868424254,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013905334215632387",
            "extra": "mean: 8.680038017010833 usec\nrounds: 46295"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 120300.17973189482,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018681958291535258",
            "extra": "mean: 8.312539534260338 usec\nrounds: 47617"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 118021.76202523564,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016156992674241982",
            "extra": "mean: 8.473013644603764 usec\nrounds: 30488"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 112548.64596690255,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013278820669479842",
            "extra": "mean: 8.885046918237224 usec\nrounds: 44844"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 113861.2649931229,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014081050514761415",
            "extra": "mean: 8.782618040124524 usec\nrounds: 45044"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 116739.4771069606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016164660959437409",
            "extra": "mean: 8.566082569341702 usec\nrounds: 51811"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 113803.32684335666,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015491325558818235",
            "extra": "mean: 8.787089338578292 usec\nrounds: 49262"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 116428.48374478848,
            "unit": "iter/sec",
            "range": "stddev: 0.000001405905012214641",
            "extra": "mean: 8.588963523668335 usec\nrounds: 49018"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 114158.99575353636,
            "unit": "iter/sec",
            "range": "stddev: 0.000001530066977787343",
            "extra": "mean: 8.759712656889088 usec\nrounds: 54642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 118674.72996465614,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017609219715448532",
            "extra": "mean: 8.426393725924815 usec\nrounds: 45872"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 117314.38404128002,
            "unit": "iter/sec",
            "range": "stddev: 0.000001670627056630038",
            "extra": "mean: 8.524103912510206 usec\nrounds: 53189"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 116301.13134309319,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016753497500326685",
            "extra": "mean: 8.598368635382903 usec\nrounds: 44445"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 119991.43179449081,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015937631200280793",
            "extra": "mean: 8.333928390092877 usec\nrounds: 46083"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 113390.72997837003,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013923851667675317",
            "extra": "mean: 8.81906307676788 usec\nrounds: 24272"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 114629.66644011704,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014770588863525812",
            "extra": "mean: 8.723745179197602 usec\nrounds: 44443"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 115519.49390585827,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015609029263226782",
            "extra": "mean: 8.656547619702545 usec\nrounds: 43291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 391021.07390311523,
            "unit": "iter/sec",
            "range": "stddev: 8.763052288686077e-7",
            "extra": "mean: 2.557406919320604 usec\nrounds: 7053"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 28943.04998645529,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031600119511635075",
            "extra": "mean: 34.5506088842737 usec\nrounds: 12674"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 374578.8871327189,
            "unit": "iter/sec",
            "range": "stddev: 7.342304091323571e-7",
            "extra": "mean: 2.669664613653692 usec\nrounds: 112360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 29414.3541227591,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031955817367091006",
            "extra": "mean: 33.99700689760374 usec\nrounds: 12903"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 383071.77457640803,
            "unit": "iter/sec",
            "range": "stddev: 8.129613242650315e-7",
            "extra": "mean: 2.6104768515137327 usec\nrounds: 121952"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 28591.952997483866,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026582375749321813",
            "extra": "mean: 34.97487562629952 usec\nrounds: 11377"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 30548.031779302753,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034217715293585384",
            "extra": "mean: 32.73533323601985 usec\nrounds: 13699"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 403471.8079374054,
            "unit": "iter/sec",
            "range": "stddev: 8.611529341892013e-7",
            "extra": "mean: 2.4784879149601946 usec\nrounds: 129871"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 30872.97582719761,
            "unit": "iter/sec",
            "range": "stddev: 0.000004030437311352034",
            "extra": "mean: 32.39078751582631 usec\nrounds: 13441"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 386412.5940367523,
            "unit": "iter/sec",
            "range": "stddev: 9.409111901149522e-7",
            "extra": "mean: 2.5879073700814432 usec\nrounds: 41153"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 30407.164504628705,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035432186458738077",
            "extra": "mean: 32.88698621825707 usec\nrounds: 13351"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 389153.70621280704,
            "unit": "iter/sec",
            "range": "stddev: 8.511627191905664e-7",
            "extra": "mean: 2.5696787260023015 usec\nrounds: 121952"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 385133.819353705,
            "unit": "iter/sec",
            "range": "stddev: 8.512824829273766e-7",
            "extra": "mean: 2.5965000987919082 usec\nrounds: 126583"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 29166.312952570235,
            "unit": "iter/sec",
            "range": "stddev: 0.000025210177912589904",
            "extra": "mean: 34.286130085286516 usec\nrounds: 12438"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 378883.7535642123,
            "unit": "iter/sec",
            "range": "stddev: 7.958580606022272e-7",
            "extra": "mean: 2.6393319602460137 usec\nrounds: 131579"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 29868.855904563025,
            "unit": "iter/sec",
            "range": "stddev: 0.000004003299717729518",
            "extra": "mean: 33.479688783366875 usec\nrounds: 14514"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 382843.66333689954,
            "unit": "iter/sec",
            "range": "stddev: 8.679280381231726e-7",
            "extra": "mean: 2.6120322621612977 usec\nrounds: 156251"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 29387.168978536887,
            "unit": "iter/sec",
            "range": "stddev: 0.000021478209194409893",
            "extra": "mean: 34.02845645765867 usec\nrounds: 16639"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 30129.493176518274,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032609251147160764",
            "extra": "mean: 33.190070411783765 usec\nrounds: 14472"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 373490.0303766924,
            "unit": "iter/sec",
            "range": "stddev: 8.463717239684009e-7",
            "extra": "mean: 2.6774476389407926 usec\nrounds: 128206"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 30513.971627798306,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034495246751996952",
            "extra": "mean: 32.77187290457455 usec\nrounds: 13124"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 373453.8137248981,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019736147889513797",
            "extra": "mean: 2.677707291367072 usec\nrounds: 128206"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 29650.783501030353,
            "unit": "iter/sec",
            "range": "stddev: 0.000004731681594674951",
            "extra": "mean: 33.72592160896019 usec\nrounds: 13624"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 364880.8993620037,
            "unit": "iter/sec",
            "range": "stddev: 7.336640176088658e-7",
            "extra": "mean: 2.7406203003459635 usec\nrounds: 113624"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 375824.7333864526,
            "unit": "iter/sec",
            "range": "stddev: 7.611560802683527e-7",
            "extra": "mean: 2.660814765939636 usec\nrounds: 133334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 28864.09019063413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026222484403369637",
            "extra": "mean: 34.64512456119201 usec\nrounds: 12821"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 365118.9861523717,
            "unit": "iter/sec",
            "range": "stddev: 6.02938490760987e-7",
            "extra": "mean: 2.7388331966464197 usec\nrounds: 121952"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 29385.637911917867,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034799803997123974",
            "extra": "mean: 34.03022942695527 usec\nrounds: 12723"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 382461.59584600886,
            "unit": "iter/sec",
            "range": "stddev: 7.721365881340604e-7",
            "extra": "mean: 2.6146416028725445 usec\nrounds: 125001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 29158.167850852366,
            "unit": "iter/sec",
            "range": "stddev: 0.000003145924837401649",
            "extra": "mean: 34.29570764237052 usec\nrounds: 13569"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 29704.618197750187,
            "unit": "iter/sec",
            "range": "stddev: 0.000021935227464328646",
            "extra": "mean: 33.664798966368785 usec\nrounds: 13928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 377854.3559919104,
            "unit": "iter/sec",
            "range": "stddev: 7.466883677335706e-7",
            "extra": "mean: 2.6465223548234267 usec\nrounds: 117648"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 29934.87904649212,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026885003947668627",
            "extra": "mean: 33.40584735441527 usec\nrounds: 13967"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 369961.1077583624,
            "unit": "iter/sec",
            "range": "stddev: 6.335340186517318e-7",
            "extra": "mean: 2.7029868249101017 usec\nrounds: 116280"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 29182.992639467182,
            "unit": "iter/sec",
            "range": "stddev: 0.000021200152097418526",
            "extra": "mean: 34.266533674397614 usec\nrounds: 12903"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 375477.2623158934,
            "unit": "iter/sec",
            "range": "stddev: 7.93211589440702e-7",
            "extra": "mean: 2.663277115189704 usec\nrounds: 119048"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 12557.98613892385,
            "unit": "iter/sec",
            "range": "stddev: 0.000007834674231148143",
            "extra": "mean: 79.63060230656492 usec\nrounds: 8411"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 11906.17162782821,
            "unit": "iter/sec",
            "range": "stddev: 0.000007905012848966213",
            "extra": "mean: 83.99005417179669 usec\nrounds: 8953"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 12993.661210556025,
            "unit": "iter/sec",
            "range": "stddev: 0.00001564944417174157",
            "extra": "mean: 76.96060285053468 usec\nrounds: 10384"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 10711.36459320408,
            "unit": "iter/sec",
            "range": "stddev: 0.000006268328098385002",
            "extra": "mean: 93.3587864831395 usec\nrounds: 9662"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 8865.667775344167,
            "unit": "iter/sec",
            "range": "stddev: 0.000007965532341520384",
            "extra": "mean: 112.79466198598669 usec\nrounds: 6979"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 7422.199060458053,
            "unit": "iter/sec",
            "range": "stddev: 0.000011415423017786696",
            "extra": "mean: 134.7309593631791 usec\nrounds: 4774"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 9818.093465293796,
            "unit": "iter/sec",
            "range": "stddev: 0.000009893879471252977",
            "extra": "mean: 101.85276841526544 usec\nrounds: 1792"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 10008.07493855591,
            "unit": "iter/sec",
            "range": "stddev: 0.000012473349743735538",
            "extra": "mean: 99.91931576646373 usec\nrounds: 9108"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 194982.6247721408,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011625485031780209",
            "extra": "mean: 5.128662111142533 usec\nrounds: 69440"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 194706.49042624945,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011568346238965257",
            "extra": "mean: 5.135935621924109 usec\nrounds: 81301"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 169958.76619552448,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013569649464632914",
            "extra": "mean: 5.883780062568687 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 169559.04873586472,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012273776897836272",
            "extra": "mean: 5.897650449536182 usec\nrounds: 75188"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 37925.18235159109,
            "unit": "iter/sec",
            "range": "stddev: 0.000241035406088994",
            "extra": "mean: 26.367704464262033 usec\nrounds: 9542"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 40593.47028038305,
            "unit": "iter/sec",
            "range": "stddev: 0.000005016547159583369",
            "extra": "mean: 24.63450385229207 usec\nrounds: 13369"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 36310.2805330247,
            "unit": "iter/sec",
            "range": "stddev: 0.000002907051824735371",
            "extra": "mean: 27.54040963937159 usec\nrounds: 15748"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 37234.79715056708,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034982713844800123",
            "extra": "mean: 26.85659857246651 usec\nrounds: 15552"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 40014.31245797165,
            "unit": "iter/sec",
            "range": "stddev: 0.000006813846505096132",
            "extra": "mean: 24.991057913348698 usec\nrounds: 13831"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 40273.65488826738,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031975632344831018",
            "extra": "mean: 24.830127853415224 usec\nrounds: 15244"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 37646.67856327284,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032392326521318226",
            "extra": "mean: 26.56276830157269 usec\nrounds: 16474"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 38087.72378122736,
            "unit": "iter/sec",
            "range": "stddev: 0.000003297127104322351",
            "extra": "mean: 26.255178853530726 usec\nrounds: 15823"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 7149.491084410764,
            "unit": "iter/sec",
            "range": "stddev: 0.000014559425845160388",
            "extra": "mean: 139.8700953946873 usec\nrounds: 912"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 5077.823119914911,
            "unit": "iter/sec",
            "range": "stddev: 0.000008788812252027326",
            "extra": "mean: 196.93478413575716 usec\nrounds: 1765"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 4788.477905325249,
            "unit": "iter/sec",
            "range": "stddev: 0.000011353779723846508",
            "extra": "mean: 208.8346275729713 usec\nrounds: 2089"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 6386.188903360862,
            "unit": "iter/sec",
            "range": "stddev: 0.00000998886302585703",
            "extra": "mean: 156.5879141899059 usec\nrounds: 2389"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 116.72871560896958,
            "unit": "iter/sec",
            "range": "stddev: 0.012406985846195148",
            "extra": "mean: 8.566872296872585 msec\nrounds: 64"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 118.96378217401171,
            "unit": "iter/sec",
            "range": "stddev: 0.011762614967241992",
            "extra": "mean: 8.405919698629551 msec\nrounds: 73"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 120.27006361589291,
            "unit": "iter/sec",
            "range": "stddev: 0.011742622474793987",
            "extra": "mean: 8.31462102816961 msec\nrounds: 71"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 122.0364134055666,
            "unit": "iter/sec",
            "range": "stddev: 0.011609415136988368",
            "extra": "mean: 8.194275561644668 msec\nrounds: 73"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 7103.063309190198,
            "unit": "iter/sec",
            "range": "stddev: 0.000011966341088371017",
            "extra": "mean: 140.78432874252496 usec\nrounds: 2178"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 5212.711775931201,
            "unit": "iter/sec",
            "range": "stddev: 0.000013775362659751582",
            "extra": "mean: 191.83872866658916 usec\nrounds: 1957"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 4789.658080457065,
            "unit": "iter/sec",
            "range": "stddev: 0.000011028430652890634",
            "extra": "mean: 208.78317057333092 usec\nrounds: 2005"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 6711.759567547541,
            "unit": "iter/sec",
            "range": "stddev: 0.000015916201163201678",
            "extra": "mean: 148.992226246477 usec\nrounds: 2347"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 121.7009418908712,
            "unit": "iter/sec",
            "range": "stddev: 0.012100687916641838",
            "extra": "mean: 8.21686327536147 msec\nrounds: 69"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 127.64411971081418,
            "unit": "iter/sec",
            "range": "stddev: 0.01107857973831411",
            "extra": "mean: 7.83428176923123 msec\nrounds: 78"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 124.63794583203459,
            "unit": "iter/sec",
            "range": "stddev: 0.011307941674705706",
            "extra": "mean: 8.023238776316376 msec\nrounds: 76"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 121.34036715354243,
            "unit": "iter/sec",
            "range": "stddev: 0.011859659905392707",
            "extra": "mean: 8.241280486110725 msec\nrounds: 72"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 95767.55510319321,
            "unit": "iter/sec",
            "range": "stddev: 0.000001921063233964028",
            "extra": "mean: 10.441949770174896 usec\nrounds: 50249"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 94166.06841040416,
            "unit": "iter/sec",
            "range": "stddev: 0.000002020353165412495",
            "extra": "mean: 10.619536494204029 usec\nrounds: 39061"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 90588.69000031488,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023850078587868406",
            "extra": "mean: 11.038905629350905 usec\nrounds: 39525"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 93494.64601613689,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019378639940905852",
            "extra": "mean: 10.695799627150876 usec\nrounds: 45046"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 87345.9200139689,
            "unit": "iter/sec",
            "range": "stddev: 0.000002290065532147235",
            "extra": "mean: 11.448731661880414 usec\nrounds: 41321"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 83330.66438683287,
            "unit": "iter/sec",
            "range": "stddev: 0.000001916479726206818",
            "extra": "mean: 12.00038434060548 usec\nrounds: 43667"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 83535.15796946612,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018680057897111308",
            "extra": "mean: 11.971007469280435 usec\nrounds: 38022"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 84349.85699106469,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022415852692664656",
            "extra": "mean: 11.85538465235254 usec\nrounds: 37452"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 68202.83128763568,
            "unit": "iter/sec",
            "range": "stddev: 0.00000206362442169228",
            "extra": "mean: 14.66214790677301 usec\nrounds: 25773"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 68446.03059155459,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021927305547341873",
            "extra": "mean: 14.610051033746695 usec\nrounds: 27472"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 67012.09118311078,
            "unit": "iter/sec",
            "range": "stddev: 0.000002016327940178411",
            "extra": "mean: 14.922680106601902 usec\nrounds: 27778"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 66109.21715428478,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015830617530002422",
            "extra": "mean: 15.12648376498263 usec\nrounds: 26178"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 59859.97289956805,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018991214542058498",
            "extra": "mean: 16.705654071674594 usec\nrounds: 25063"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 62467.95576155922,
            "unit": "iter/sec",
            "range": "stddev: 0.000002339981155236255",
            "extra": "mean: 16.008207533107207 usec\nrounds: 27027"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 63776.19811470599,
            "unit": "iter/sec",
            "range": "stddev: 0.000002533832919908223",
            "extra": "mean: 15.679830870467216 usec\nrounds: 26595"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 60115.516873202694,
            "unit": "iter/sec",
            "range": "stddev: 0.000002937965994251444",
            "extra": "mean: 16.634640306083163 usec\nrounds: 784"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 74493.23841456714,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015218344542759388",
            "extra": "mean: 13.424037151329564 usec\nrounds: 11682"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 17888.042986602177,
            "unit": "iter/sec",
            "range": "stddev: 0.000006521992011063225",
            "extra": "mean: 55.903264585677825 usec\nrounds: 7593"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 18370.278544140427,
            "unit": "iter/sec",
            "range": "stddev: 0.00000643482883552385",
            "extra": "mean: 54.43575597382383 usec\nrounds: 7491"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 79160.68484996952,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023002659119696375",
            "extra": "mean: 12.632533458941962 usec\nrounds: 26525"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 69175.6443709392,
            "unit": "iter/sec",
            "range": "stddev: 0.000002233870302733131",
            "extra": "mean: 14.45595496932012 usec\nrounds: 24450"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 16224.378638337796,
            "unit": "iter/sec",
            "range": "stddev: 0.000007925351534755216",
            "extra": "mean: 61.635642405252135 usec\nrounds: 7268"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 17062.764538447183,
            "unit": "iter/sec",
            "range": "stddev: 0.000008736209399582252",
            "extra": "mean: 58.6071499578348 usec\nrounds: 7082"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 70593.06097712522,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023989142974634533",
            "extra": "mean: 14.165698245101416 usec\nrounds: 24331"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 441074.36135109357,
            "unit": "iter/sec",
            "range": "stddev: 8.71777394269363e-7",
            "extra": "mean: 2.2671914026850537 usec\nrounds: 95239"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 15497.451836359758,
            "unit": "iter/sec",
            "range": "stddev: 0.000007134952382176379",
            "extra": "mean: 64.5267370764672 usec\nrounds: 1799"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 15204.163273016175,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075932413893747855",
            "extra": "mean: 65.77145891183407 usec\nrounds: 1874"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 433354.6322386391,
            "unit": "iter/sec",
            "range": "stddev: 8.221619038126126e-7",
            "extra": "mean: 2.307578887144147 usec\nrounds: 113637"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 357091.7217282058,
            "unit": "iter/sec",
            "range": "stddev: 8.255168063002892e-7",
            "extra": "mean: 2.8004009590598486 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 13563.118816866856,
            "unit": "iter/sec",
            "range": "stddev: 0.000011270792676260875",
            "extra": "mean: 73.72935484104272 usec\nrounds: 62"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 12462.068578731605,
            "unit": "iter/sec",
            "range": "stddev: 0.000012676583304665976",
            "extra": "mean: 80.24350000020466 usec\nrounds: 46"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 355919.25039334485,
            "unit": "iter/sec",
            "range": "stddev: 7.995147068041762e-7",
            "extra": "mean: 2.8096260567385665 usec\nrounds: 107527"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 39476.15825805838,
            "unit": "iter/sec",
            "range": "stddev: 0.000009595232743932903",
            "extra": "mean: 25.331745644115895 usec\nrounds: 13316"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 18407.220575685747,
            "unit": "iter/sec",
            "range": "stddev: 0.000005373018783481116",
            "extra": "mean: 54.326507138231854 usec\nrounds: 8826"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 17640.862120571503,
            "unit": "iter/sec",
            "range": "stddev: 0.000004402649072641454",
            "extra": "mean: 56.68657195806049 usec\nrounds: 9443"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 39534.03748052402,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028922502235488996",
            "extra": "mean: 25.294659076818004 usec\nrounds: 17699"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 36380.775071624186,
            "unit": "iter/sec",
            "range": "stddev: 0.000004139067451558151",
            "extra": "mean: 27.487044957982967 usec\nrounds: 17483"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 17058.767192840176,
            "unit": "iter/sec",
            "range": "stddev: 0.000007725166630769541",
            "extra": "mean: 58.62088324997572 usec\nrounds: 8000"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 16589.192131133786,
            "unit": "iter/sec",
            "range": "stddev: 0.000007460765062964109",
            "extra": "mean: 60.28021088038692 usec\nrounds: 8621"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 37726.75641946222,
            "unit": "iter/sec",
            "range": "stddev: 0.000004282109265493649",
            "extra": "mean: 26.506386843373765 usec\nrounds: 17953"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 41380.541363947865,
            "unit": "iter/sec",
            "range": "stddev: 0.000003665095196164757",
            "extra": "mean: 24.16594773869329 usec\nrounds: 18484"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 18588.66332034318,
            "unit": "iter/sec",
            "range": "stddev: 0.000005984528296813537",
            "extra": "mean: 53.79622960332029 usec\nrounds: 9303"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 18406.794661884906,
            "unit": "iter/sec",
            "range": "stddev: 0.000006141181253453214",
            "extra": "mean: 54.32776419626758 usec\nrounds: 7273"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 41726.24777893912,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036955277974918644",
            "extra": "mean: 23.96573028319933 usec\nrounds: 14556"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 38796.44849259531,
            "unit": "iter/sec",
            "range": "stddev: 0.000004473354147341263",
            "extra": "mean: 25.77555520812324 usec\nrounds: 17271"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 17418.746537393574,
            "unit": "iter/sec",
            "range": "stddev: 0.000008038365496318496",
            "extra": "mean: 57.40941220157587 usec\nrounds: 9294"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 16621.969830946124,
            "unit": "iter/sec",
            "range": "stddev: 0.00000781840623067734",
            "extra": "mean: 60.16134129531625 usec\nrounds: 10299"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 37019.21991933414,
            "unit": "iter/sec",
            "range": "stddev: 0.000004308657729211559",
            "extra": "mean: 27.01299493017483 usec\nrounds: 15385"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 34636.80921262258,
            "unit": "iter/sec",
            "range": "stddev: 0.000003464862625489349",
            "extra": "mean: 28.87101966758454 usec\nrounds: 14389"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 34515.823792179275,
            "unit": "iter/sec",
            "range": "stddev: 0.000004125299920007032",
            "extra": "mean: 28.97221882986272 usec\nrounds: 13298"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 34103.50474043576,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037416357975266068",
            "extra": "mean: 29.322499479483774 usec\nrounds: 14409"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 35509.672685939,
            "unit": "iter/sec",
            "range": "stddev: 0.000003905617382607474",
            "extra": "mean: 28.161340963189918 usec\nrounds: 14286"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 31352.689017615026,
            "unit": "iter/sec",
            "range": "stddev: 0.000005491759944715897",
            "extra": "mean: 31.89519085390619 usec\nrounds: 10846"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 31615.176173560954,
            "unit": "iter/sec",
            "range": "stddev: 0.000004965382368990796",
            "extra": "mean: 31.630378856983153 usec\nrounds: 13158"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 31333.960772018156,
            "unit": "iter/sec",
            "range": "stddev: 0.000005030000554498254",
            "extra": "mean: 31.91425454559896 usec\nrounds: 18315"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 32702.564493984122,
            "unit": "iter/sec",
            "range": "stddev: 0.000005044983624948666",
            "extra": "mean: 30.578641628669743 usec\nrounds: 17094"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys0]",
            "value": 34266.581291733324,
            "unit": "iter/sec",
            "range": "stddev: 0.000004552665911248623",
            "extra": "mean: 29.182952086359602 usec\nrounds: 1294"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys1]",
            "value": 34726.36301641483,
            "unit": "iter/sec",
            "range": "stddev: 0.000003568456916532619",
            "extra": "mean: 28.796565869201714 usec\nrounds: 10278"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys2]",
            "value": 34672.80063162273,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039590896105384175",
            "extra": "mean: 28.84105067324637 usec\nrounds: 12255"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys3]",
            "value": 34170.352302489104,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038997087783827195",
            "extra": "mean: 29.265135786356996 usec\nrounds: 13072"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys4]",
            "value": 29829.84300762296,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033727057549025194",
            "extra": "mean: 33.52347512336729 usec\nrounds: 12361"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys5]",
            "value": 31254.557250910984,
            "unit": "iter/sec",
            "range": "stddev: 0.000004137541958424251",
            "extra": "mean: 31.9953340555113 usec\nrounds: 14306"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys6]",
            "value": 30849.615940416035,
            "unit": "iter/sec",
            "range": "stddev: 0.000003921943461483949",
            "extra": "mean: 32.41531440558071 usec\nrounds: 11905"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys7]",
            "value": 30529.12878353761,
            "unit": "iter/sec",
            "range": "stddev: 0.000003942102279060455",
            "extra": "mean: 32.75560226727582 usec\nrounds: 12438"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 56663.14091657776,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022120812999592225",
            "extra": "mean: 17.64815687630604 usec\nrounds: 21552"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 22232.789964105843,
            "unit": "iter/sec",
            "range": "stddev: 0.000003992948653759559",
            "extra": "mean: 44.97861049443049 usec\nrounds: 9643"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 21621.96247473201,
            "unit": "iter/sec",
            "range": "stddev: 0.000003940446544607489",
            "extra": "mean: 46.24927090538735 usec\nrounds: 8084"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 56786.654790609166,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023077644528081647",
            "extra": "mean: 17.609771233881002 usec\nrounds: 23041"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 52827.31655327952,
            "unit": "iter/sec",
            "range": "stddev: 0.000002227054370672459",
            "extra": "mean: 18.929600540876233 usec\nrounds: 19231"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 20546.06755857476,
            "unit": "iter/sec",
            "range": "stddev: 0.000005730804325835399",
            "extra": "mean: 48.6711141754548 usec\nrounds: 8811"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 20650.6972787858,
            "unit": "iter/sec",
            "range": "stddev: 0.000008407617451944321",
            "extra": "mean: 48.42451499336477 usec\nrounds: 10538"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 53705.77182009137,
            "unit": "iter/sec",
            "range": "stddev: 0.000002314063520617568",
            "extra": "mean: 18.619972604618617 usec\nrounds: 22522"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 56386.88886775288,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022210979111866487",
            "extra": "mean: 17.73461916555376 usec\nrounds: 20161"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 21826.93313732406,
            "unit": "iter/sec",
            "range": "stddev: 0.000003818737785890449",
            "extra": "mean: 45.81495685667355 usec\nrounds: 10384"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 21731.18823843525,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042929688172587255",
            "extra": "mean: 46.016811829522155 usec\nrounds: 10905"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 58341.2843064892,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025837863203729804",
            "extra": "mean: 17.14052084878035 usec\nrounds: 25445"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 56149.00700371195,
            "unit": "iter/sec",
            "range": "stddev: 0.000003015535047977344",
            "extra": "mean: 17.80975396294882 usec\nrounds: 21322"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 21761.86397010507,
            "unit": "iter/sec",
            "range": "stddev: 0.000007621842420252919",
            "extra": "mean: 45.95194609127831 usec\nrounds: 9479"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 20723.94178059097,
            "unit": "iter/sec",
            "range": "stddev: 0.000006742729138251428",
            "extra": "mean: 48.2533685235765 usec\nrounds: 9766"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 54611.29405188442,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028715325188185794",
            "extra": "mean: 18.311230622917165 usec\nrounds: 22075"
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
        "date": 1669518920673,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 4.268510411834448,
            "unit": "iter/sec",
            "range": "stddev: 0.000928453596144485",
            "extra": "mean: 234.27376380001306 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 59932.02419960324,
            "unit": "iter/sec",
            "range": "stddev: 0.00015833257418002795",
            "extra": "mean: 16.685570249880197 usec\nrounds: 7758"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 36.75186566276826,
            "unit": "iter/sec",
            "range": "stddev: 0.0005032423139084716",
            "extra": "mean: 27.20950302702747 msec\nrounds: 37"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 1404.1580938882216,
            "unit": "iter/sec",
            "range": "stddev: 0.00005776833815536263",
            "extra": "mean: 712.1705200807718 usec\nrounds: 996"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 14813.328256592655,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016470066633785316",
            "extra": "mean: 67.50677381060204 usec\nrounds: 10363"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 14129.601217204556,
            "unit": "iter/sec",
            "range": "stddev: 0.000003486536274061962",
            "extra": "mean: 70.77340574781226 usec\nrounds: 6785"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 14718.955962311125,
            "unit": "iter/sec",
            "range": "stddev: 0.000003853660849062417",
            "extra": "mean: 67.9396013250238 usec\nrounds: 10417"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 14706.582138950625,
            "unit": "iter/sec",
            "range": "stddev: 0.000002203415307710174",
            "extra": "mean: 67.99676434346249 usec\nrounds: 11364"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 14353.848786792165,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024390193615275454",
            "extra": "mean: 69.66772569877982 usec\nrounds: 10977"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 13719.666343901776,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026008044421933517",
            "extra": "mean: 72.88806993797542 usec\nrounds: 9251"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 13192.248430456239,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028856561611684557",
            "extra": "mean: 75.80208978564666 usec\nrounds: 6716"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 13730.659122347884,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037037302527467754",
            "extra": "mean: 72.8297156814861 usec\nrounds: 10031"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 13713.156706953865,
            "unit": "iter/sec",
            "range": "stddev: 0.000002612808484935685",
            "extra": "mean: 72.92266991253047 usec\nrounds: 9346"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 13393.962995837357,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025463752331586587",
            "extra": "mean: 74.66050192245454 usec\nrounds: 9625"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 3373879.9346640967,
            "unit": "iter/sec",
            "range": "stddev: 1.598287503508061e-8",
            "extra": "mean: 296.39466115206903 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 3353423.922815792,
            "unit": "iter/sec",
            "range": "stddev: 1.7832772201857717e-8",
            "extra": "mean: 298.20267971452046 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 3381389.885763514,
            "unit": "iter/sec",
            "range": "stddev: 1.4516712375097234e-8",
            "extra": "mean: 295.7363787632661 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 3346206.04379248,
            "unit": "iter/sec",
            "range": "stddev: 2.9026119161179484e-8",
            "extra": "mean: 298.84591292796557 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 3382991.135113295,
            "unit": "iter/sec",
            "range": "stddev: 1.4421081694934301e-8",
            "extra": "mean: 295.5963997727173 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 15743.305127843772,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019690686308372034",
            "extra": "mean: 63.51906361970903 usec\nrounds: 12166"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 14955.197902589092,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023582055731021512",
            "extra": "mean: 66.86638361548373 usec\nrounds: 7458"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 15548.708834339139,
            "unit": "iter/sec",
            "range": "stddev: 0.000002119892027435968",
            "extra": "mean: 64.31402186858834 usec\nrounds: 12438"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 15649.279959083822,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020190896319921594",
            "extra": "mean: 63.90070358601626 usec\nrounds: 12270"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 15107.56375631083,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073931029221803365",
            "extra": "mean: 66.19200925644107 usec\nrounds: 12316"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 10142.204042346675,
            "unit": "iter/sec",
            "range": "stddev: 0.000004481488556864564",
            "extra": "mean: 98.59789803327826 usec\nrounds: 7169"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 10033.29424026731,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019246765564953555",
            "extra": "mean: 99.668162425321 usec\nrounds: 5541"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 10124.0854624072,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030499671840907723",
            "extra": "mean: 98.77435386269747 usec\nrounds: 7469"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 10140.910901409618,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029602022709092573",
            "extra": "mean: 98.61047096479241 usec\nrounds: 7801"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 10057.842388738014,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031852419406460592",
            "extra": "mean: 99.42490261328034 usec\nrounds: 7424"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 15749.615528071956,
            "unit": "iter/sec",
            "range": "stddev: 0.00000394790956458389",
            "extra": "mean: 63.49361342933166 usec\nrounds: 12316"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 12650.53613527411,
            "unit": "iter/sec",
            "range": "stddev: 0.000002330296020733806",
            "extra": "mean: 79.04803316688303 usec\nrounds: 8985"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 9292.050125981592,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018203625680711789",
            "extra": "mean: 107.61887704457065 usec\nrounds: 5441"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 8492.119647179128,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019548178249185354",
            "extra": "mean: 117.75623066405751 usec\nrounds: 5831"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 13889.90764427665,
            "unit": "iter/sec",
            "range": "stddev: 0.000004570032397334713",
            "extra": "mean: 71.99471915942155 usec\nrounds: 12516"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 13929.73917632263,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022315838741173358",
            "extra": "mean: 71.78885313945945 usec\nrounds: 12454"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 13989.610508779948,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020157879386415723",
            "extra": "mean: 71.48161840334261 usec\nrounds: 12563"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 22840386.41673121,
            "unit": "iter/sec",
            "range": "stddev: 4.970368379631592e-9",
            "extra": "mean: 43.78209640396485 nsec\nrounds: 192271"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 22835516.55726243,
            "unit": "iter/sec",
            "range": "stddev: 2.824104479191502e-9",
            "extra": "mean: 43.79143329179757 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 19524359.55173721,
            "unit": "iter/sec",
            "range": "stddev: 3.093193470393621e-9",
            "extra": "mean: 51.218069271392906 nsec\nrounds: 188680"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 23536696.95470572,
            "unit": "iter/sec",
            "range": "stddev: 2.168902105853467e-9",
            "extra": "mean: 42.486845198621495 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 23371895.049339246,
            "unit": "iter/sec",
            "range": "stddev: 2.3199733425790215e-9",
            "extra": "mean: 42.78643207537082 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 23025579.436949104,
            "unit": "iter/sec",
            "range": "stddev: 2.571048531727872e-9",
            "extra": "mean: 43.42996026397766 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 42791.42565906637,
            "unit": "iter/sec",
            "range": "stddev: 8.647050906472712e-7",
            "extra": "mean: 23.36916764511038 usec\nrounds: 10051"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 18621.63689362032,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012167835592310699",
            "extra": "mean: 53.700971923826685 usec\nrounds: 6803"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 42446.83821270263,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012912507903911291",
            "extra": "mean: 23.55888075783087 usec\nrounds: 369"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 18554.087661598904,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011691695303536769",
            "extra": "mean: 53.89647921464142 usec\nrounds: 8251"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 42814.05466763928,
            "unit": "iter/sec",
            "range": "stddev: 7.310463687827929e-7",
            "extra": "mean: 23.356816068061953 usec\nrounds: 10020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 18632.782104505706,
            "unit": "iter/sec",
            "range": "stddev: 0.000001248326537088694",
            "extra": "mean: 53.66885065210868 usec\nrounds: 7593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 15365.048680689413,
            "unit": "iter/sec",
            "range": "stddev: 0.000003959554574426898",
            "extra": "mean: 65.08277459978287 usec\nrounds: 8425"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 30621.85902934292,
            "unit": "iter/sec",
            "range": "stddev: 9.113865237424518e-7",
            "extra": "mean: 32.656410541298804 usec\nrounds: 10776"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 15490.350075762177,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013501192131489848",
            "extra": "mean: 64.55632023221378 usec\nrounds: 8091"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 30843.23556629598,
            "unit": "iter/sec",
            "range": "stddev: 8.871879362517542e-7",
            "extra": "mean: 32.42201998718813 usec\nrounds: 10707"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 15318.490995679776,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048087215353849385",
            "extra": "mean: 65.28058150649609 usec\nrounds: 7711"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 30382.293896571555,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010021989415700976",
            "extra": "mean: 32.91390713960685 usec\nrounds: 10112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 42375.69612276951,
            "unit": "iter/sec",
            "range": "stddev: 7.058206087285584e-7",
            "extra": "mean: 23.598432391596162 usec\nrounds: 13948"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 18590.33961453226,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012584210449575748",
            "extra": "mean: 53.791378787845794 usec\nrounds: 8052"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 42258.84822222468,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032687913614511126",
            "extra": "mean: 23.663683277436846 usec\nrounds: 13987"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 18314.396968395908,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012285406402002712",
            "extra": "mean: 54.60185239654038 usec\nrounds: 8157"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 42313.52558049557,
            "unit": "iter/sec",
            "range": "stddev: 7.623292429827453e-7",
            "extra": "mean: 23.633105166281638 usec\nrounds: 13569"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 18607.917776028873,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012542409901574196",
            "extra": "mean: 53.7405642069325 usec\nrounds: 8091"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 15385.932558136597,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043547740722547386",
            "extra": "mean: 64.99443541829166 usec\nrounds: 8137"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 30361.399507729646,
            "unit": "iter/sec",
            "range": "stddev: 9.20129833289403e-7",
            "extra": "mean: 32.93655813676876 usec\nrounds: 10673"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 15283.511995114135,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014320938783065055",
            "extra": "mean: 65.42998757875036 usec\nrounds: 8131"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 30427.40180015683,
            "unit": "iter/sec",
            "range": "stddev: 9.219002372316348e-7",
            "extra": "mean: 32.86511305065968 usec\nrounds: 11287"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 15160.828665889625,
            "unit": "iter/sec",
            "range": "stddev: 0.000004368966464054209",
            "extra": "mean: 65.95945525391377 usec\nrounds: 7956"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 30245.750726952258,
            "unit": "iter/sec",
            "range": "stddev: 9.695375572088442e-7",
            "extra": "mean: 33.06249558913713 usec\nrounds: 10882"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 41548.49988292367,
            "unit": "iter/sec",
            "range": "stddev: 8.919178663571697e-7",
            "extra": "mean: 24.0682576463127 usec\nrounds: 13569"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 18387.92825513174,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013257484255618",
            "extra": "mean: 54.38350564158405 usec\nrounds: 7711"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 41114.10774819005,
            "unit": "iter/sec",
            "range": "stddev: 0.000003247436333759264",
            "extra": "mean: 24.32255142504029 usec\nrounds: 13369"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 17889.096904080812,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015467446295586093",
            "extra": "mean: 55.899971103174174 usec\nrounds: 7994"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 41398.45627808807,
            "unit": "iter/sec",
            "range": "stddev: 7.672884763894156e-7",
            "extra": "mean: 24.155490081143274 usec\nrounds: 14165"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 18521.072913222786,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013356724898698652",
            "extra": "mean: 53.99255241234259 usec\nrounds: 7813"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 15083.361024798629,
            "unit": "iter/sec",
            "range": "stddev: 0.000004446755553671696",
            "extra": "mean: 66.29822082464877 usec\nrounds: 7789"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 29616.856416580733,
            "unit": "iter/sec",
            "range": "stddev: 9.8420439728193e-7",
            "extra": "mean: 33.76455576291882 usec\nrounds: 10742"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 15147.08755390896,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013591290973088642",
            "extra": "mean: 66.0192922527825 usec\nrounds: 7887"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 29806.23769442815,
            "unit": "iter/sec",
            "range": "stddev: 8.866344169514282e-7",
            "extra": "mean: 33.55002433557509 usec\nrounds: 10684"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 15150.32289774018,
            "unit": "iter/sec",
            "range": "stddev: 0.00000443916245572112",
            "extra": "mean: 66.0051938661426 usec\nrounds: 7825"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 29638.67619273085,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010536524849483514",
            "extra": "mean: 33.73969854447341 usec\nrounds: 10990"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 42469.87884583342,
            "unit": "iter/sec",
            "range": "stddev: 7.018809448613284e-7",
            "extra": "mean: 23.54609966348201 usec\nrounds: 13967"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 18842.340462120283,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011729275354756012",
            "extra": "mean: 53.07196322082976 usec\nrounds: 8184"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 41391.401931859575,
            "unit": "iter/sec",
            "range": "stddev: 0.00009195194687628058",
            "extra": "mean: 24.159606906918636 usec\nrounds: 13928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 18920.498012862336,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011899175839091668",
            "extra": "mean: 52.85273143022929 usec\nrounds: 7391"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 42967.26860273364,
            "unit": "iter/sec",
            "range": "stddev: 7.963140058648153e-7",
            "extra": "mean: 23.27352965453286 usec\nrounds: 12595"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 18596.81161149797,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015223387442884907",
            "extra": "mean: 53.77265850140266 usec\nrounds: 7634"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 14409.329147638844,
            "unit": "iter/sec",
            "range": "stddev: 0.00038593250007951953",
            "extra": "mean: 69.39948347032262 usec\nrounds: 8137"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 30769.968196800342,
            "unit": "iter/sec",
            "range": "stddev: 7.937566853263744e-7",
            "extra": "mean: 32.49922111079681 usec\nrounds: 10696"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 15647.009520161495,
            "unit": "iter/sec",
            "range": "stddev: 0.000001225750345406017",
            "extra": "mean: 63.90997581432282 usec\nrounds: 8104"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 30754.42812523565,
            "unit": "iter/sec",
            "range": "stddev: 8.994399567386983e-7",
            "extra": "mean: 32.515642818259614 usec\nrounds: 11014"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 15606.978181044402,
            "unit": "iter/sec",
            "range": "stddev: 0.000002052959168448319",
            "extra": "mean: 64.07390260944679 usec\nrounds: 7588"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 30453.107127697705,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010374701338262643",
            "extra": "mean: 32.837371760022485 usec\nrounds: 8874"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 42232.98086056723,
            "unit": "iter/sec",
            "range": "stddev: 7.774828022345537e-7",
            "extra": "mean: 23.67817709343117 usec\nrounds: 14642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 18526.090559598593,
            "unit": "iter/sec",
            "range": "stddev: 0.000001216693199202217",
            "extra": "mean: 53.977928952845794 usec\nrounds: 7868"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 42247.00933314845,
            "unit": "iter/sec",
            "range": "stddev: 0.000003421662166774669",
            "extra": "mean: 23.67031455680736 usec\nrounds: 14557"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 18763.027850507864,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011848955530340178",
            "extra": "mean: 53.296302066349746 usec\nrounds: 8518"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 42479.50888941384,
            "unit": "iter/sec",
            "range": "stddev: 9.059196480620914e-7",
            "extra": "mean: 23.540761796547187 usec\nrounds: 13606"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 18421.09785803977,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014106150644492507",
            "extra": "mean: 54.28558100643043 usec\nrounds: 7950"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 15408.803028548964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041182772814448305",
            "extra": "mean: 64.89796761936863 usec\nrounds: 8184"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 30021.54320998788,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010776561222876187",
            "extra": "mean: 33.30941361026736 usec\nrounds: 11124"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 15380.33275992435,
            "unit": "iter/sec",
            "range": "stddev: 0.000002043855316087358",
            "extra": "mean: 65.01809912758472 usec\nrounds: 8131"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 30367.12635692704,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010076573442135177",
            "extra": "mean: 32.930346725807006 usec\nrounds: 11300"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 15410.071161123426,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041098581086086045",
            "extra": "mean: 64.89262700634394 usec\nrounds: 7850"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 30116.324450850465,
            "unit": "iter/sec",
            "range": "stddev: 0.000001044118541641534",
            "extra": "mean: 33.204583169901426 usec\nrounds: 10707"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 41286.52520779845,
            "unit": "iter/sec",
            "range": "stddev: 8.6061262974866e-7",
            "extra": "mean: 24.22097754574691 usec\nrounds: 13405"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 18289.861258056757,
            "unit": "iter/sec",
            "range": "stddev: 0.000001353655790150472",
            "extra": "mean: 54.675100367942704 usec\nrounds: 7881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 41283.4201186292,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030487962412859746",
            "extra": "mean: 24.222799301183592 usec\nrounds: 14026"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 18178.448084878215,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012570558403322524",
            "extra": "mean: 55.01019643320666 usec\nrounds: 7962"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 41262.31672266608,
            "unit": "iter/sec",
            "range": "stddev: 8.085055332171987e-7",
            "extra": "mean: 24.23518792512887 usec\nrounds: 13532"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 18438.868411938238,
            "unit": "iter/sec",
            "range": "stddev: 0.000001325409950626445",
            "extra": "mean: 54.23326299961826 usec\nrounds: 7981"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 15096.24793685751,
            "unit": "iter/sec",
            "range": "stddev: 0.000004063715659901892",
            "extra": "mean: 66.2416253484085 usec\nrounds: 8245"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 29729.83779628161,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010147636182602277",
            "extra": "mean: 33.636241369775405 usec\nrounds: 10776"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 15118.673650165785,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016423640720386311",
            "extra": "mean: 66.14336833635102 usec\nrounds: 7485"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 29708.92769361896,
            "unit": "iter/sec",
            "range": "stddev: 9.083847972339399e-7",
            "extra": "mean: 33.659915642622984 usec\nrounds: 10906"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 15295.529881033795,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040173388227263495",
            "extra": "mean: 65.37857843290433 usec\nrounds: 7669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 29582.881594076895,
            "unit": "iter/sec",
            "range": "stddev: 9.442157415821308e-7",
            "extra": "mean: 33.803333080311575 usec\nrounds: 10538"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 140825.23788460917,
            "unit": "iter/sec",
            "range": "stddev: 3.273158565596238e-7",
            "extra": "mean: 7.1009998990336545 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 140533.51630498684,
            "unit": "iter/sec",
            "range": "stddev: 2.93257170195745e-7",
            "extra": "mean: 7.115740261061944 usec\nrounds: 60607"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 143953.49894345758,
            "unit": "iter/sec",
            "range": "stddev: 3.4143428145920004e-7",
            "extra": "mean: 6.946687696648363 usec\nrounds: 62894"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 140479.26102124286,
            "unit": "iter/sec",
            "range": "stddev: 3.454732177756083e-7",
            "extra": "mean: 7.118488471040455 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 142826.67728537633,
            "unit": "iter/sec",
            "range": "stddev: 4.559720716631216e-7",
            "extra": "mean: 7.001493131440282 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 140206.39013687798,
            "unit": "iter/sec",
            "range": "stddev: 4.541291264150906e-7",
            "extra": "mean: 7.1323425346286955 usec\nrounds: 60607"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 140582.81431281354,
            "unit": "iter/sec",
            "range": "stddev: 3.5867472677625166e-7",
            "extra": "mean: 7.1132449929113 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 144148.1122971642,
            "unit": "iter/sec",
            "range": "stddev: 3.267166786377332e-7",
            "extra": "mean: 6.937309022392747 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 139128.1600375511,
            "unit": "iter/sec",
            "range": "stddev: 3.871408550810517e-7",
            "extra": "mean: 7.187617515606452 usec\nrounds: 59524"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 144640.7855794129,
            "unit": "iter/sec",
            "range": "stddev: 4.1657189993513076e-7",
            "extra": "mean: 6.913679264075654 usec\nrounds: 62500"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 141077.82074742878,
            "unit": "iter/sec",
            "range": "stddev: 4.7016824960108876e-7",
            "extra": "mean: 7.088286413144255 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 143917.68977902818,
            "unit": "iter/sec",
            "range": "stddev: 4.5790407651421444e-7",
            "extra": "mean: 6.9484161504774296 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 145798.76031807947,
            "unit": "iter/sec",
            "range": "stddev: 3.246950016680653e-7",
            "extra": "mean: 6.85876887991617 usec\nrounds: 62500"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 140079.22904057536,
            "unit": "iter/sec",
            "range": "stddev: 3.6322392502025414e-7",
            "extra": "mean: 7.138817131198944 usec\nrounds: 58140"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 144031.82607239718,
            "unit": "iter/sec",
            "range": "stddev: 3.38022029343119e-7",
            "extra": "mean: 6.9429099614230605 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 139715.50178567512,
            "unit": "iter/sec",
            "range": "stddev: 3.55747119370438e-7",
            "extra": "mean: 7.157401914742498 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 144250.45680497965,
            "unit": "iter/sec",
            "range": "stddev: 4.374445274225345e-7",
            "extra": "mean: 6.932387058932898 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 138606.34981732964,
            "unit": "iter/sec",
            "range": "stddev: 4.2170716457387003e-7",
            "extra": "mean: 7.214676681969532 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 140445.53760608085,
            "unit": "iter/sec",
            "range": "stddev: 4.0654163525510784e-7",
            "extra": "mean: 7.120197743874087 usec\nrounds: 62500"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 144307.0159567861,
            "unit": "iter/sec",
            "range": "stddev: 3.5028280240264e-7",
            "extra": "mean: 6.929670005091491 usec\nrounds: 60607"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 139935.9494318453,
            "unit": "iter/sec",
            "range": "stddev: 4.17906026866559e-7",
            "extra": "mean: 7.146126524742965 usec\nrounds: 57143"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 144159.8574687536,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020892261878263807",
            "extra": "mean: 6.936743817305372 usec\nrounds: 50503"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 141290.00581237764,
            "unit": "iter/sec",
            "range": "stddev: 4.726849242783251e-7",
            "extra": "mean: 7.077641438616145 usec\nrounds: 56498"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 144764.10503241126,
            "unit": "iter/sec",
            "range": "stddev: 4.369084164860196e-7",
            "extra": "mean: 6.907789743708289 usec\nrounds: 60607"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 144680.7882758057,
            "unit": "iter/sec",
            "range": "stddev: 4.453696778629465e-7",
            "extra": "mean: 6.911767705423992 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 141292.0180910335,
            "unit": "iter/sec",
            "range": "stddev: 4.473402145226767e-7",
            "extra": "mean: 7.077540638960275 usec\nrounds: 59881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 142341.8685366403,
            "unit": "iter/sec",
            "range": "stddev: 4.5921039404848485e-7",
            "extra": "mean: 7.025339840488249 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 141243.08372616582,
            "unit": "iter/sec",
            "range": "stddev: 4.467283439069574e-7",
            "extra": "mean: 7.079992687916274 usec\nrounds: 62500"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 143685.84952175026,
            "unit": "iter/sec",
            "range": "stddev: 4.814146710932985e-7",
            "extra": "mean: 6.959627571736814 usec\nrounds: 64936"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 139351.3254163182,
            "unit": "iter/sec",
            "range": "stddev: 4.3582385570258297e-7",
            "extra": "mean: 7.17610684370928 usec\nrounds: 57804"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 140506.71393850638,
            "unit": "iter/sec",
            "range": "stddev: 4.742899152180842e-7",
            "extra": "mean: 7.117097624513916 usec\nrounds: 59524"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 143846.30889791073,
            "unit": "iter/sec",
            "range": "stddev: 4.510923846841502e-7",
            "extra": "mean: 6.951864164340225 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 141509.05323886158,
            "unit": "iter/sec",
            "range": "stddev: 5.146002894490223e-7",
            "extra": "mean: 7.06668567919849 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 145745.80193143786,
            "unit": "iter/sec",
            "range": "stddev: 4.5052085460458794e-7",
            "extra": "mean: 6.8612610912142955 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 137677.17076971216,
            "unit": "iter/sec",
            "range": "stddev: 4.824808274102964e-7",
            "extra": "mean: 7.263368315961877 usec\nrounds: 59172"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 144309.9491108125,
            "unit": "iter/sec",
            "range": "stddev: 4.576106548286015e-7",
            "extra": "mean: 6.929529156940674 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 116919.14764878927,
            "unit": "iter/sec",
            "range": "stddev: 4.5094691460832765e-7",
            "extra": "mean: 8.552919005224679 usec\nrounds: 37879"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 116364.94837390255,
            "unit": "iter/sec",
            "range": "stddev: 3.548078844883042e-7",
            "extra": "mean: 8.593653105803057 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 117394.32878381059,
            "unit": "iter/sec",
            "range": "stddev: 5.344159993018063e-7",
            "extra": "mean: 8.51829905549838 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 118825.89711623994,
            "unit": "iter/sec",
            "range": "stddev: 3.3569534763960477e-7",
            "extra": "mean: 8.415673891540349 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 117378.11060663767,
            "unit": "iter/sec",
            "range": "stddev: 4.82726334859951e-7",
            "extra": "mean: 8.5194760320452 usec\nrounds: 38760"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 118886.9045597874,
            "unit": "iter/sec",
            "range": "stddev: 3.1662418799665124e-7",
            "extra": "mean: 8.411355343995073 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 117444.54846375054,
            "unit": "iter/sec",
            "range": "stddev: 3.6540602663745844e-7",
            "extra": "mean: 8.514656602461644 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 117288.31997668812,
            "unit": "iter/sec",
            "range": "stddev: 4.578027657315454e-7",
            "extra": "mean: 8.525998157350681 usec\nrounds: 40161"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 119330.26197066362,
            "unit": "iter/sec",
            "range": "stddev: 4.592601264212562e-7",
            "extra": "mean: 8.38010395255683 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 115780.27166524474,
            "unit": "iter/sec",
            "range": "stddev: 4.581853565775955e-7",
            "extra": "mean: 8.63705003984874 usec\nrounds: 48781"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 117774.9749926273,
            "unit": "iter/sec",
            "range": "stddev: 3.5656729256853137e-7",
            "extra": "mean: 8.49076809451753 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 117419.71272367203,
            "unit": "iter/sec",
            "range": "stddev: 4.778008959562143e-7",
            "extra": "mean: 8.516457558990417 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 118302.73074735352,
            "unit": "iter/sec",
            "range": "stddev: 4.815798706586813e-7",
            "extra": "mean: 8.45289025606343 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 116305.41322013384,
            "unit": "iter/sec",
            "range": "stddev: 7.081500292508892e-7",
            "extra": "mean: 8.598052079547474 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 118774.13770118757,
            "unit": "iter/sec",
            "range": "stddev: 4.787785084140366e-7",
            "extra": "mean: 8.419341275419772 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 119084.96987588746,
            "unit": "iter/sec",
            "range": "stddev: 3.727997589799435e-7",
            "extra": "mean: 8.397365352170121 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 117543.87058339048,
            "unit": "iter/sec",
            "range": "stddev: 4.431503618050996e-7",
            "extra": "mean: 8.507461895178606 usec\nrounds: 40323"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 118422.75415369021,
            "unit": "iter/sec",
            "range": "stddev: 3.6058038631048616e-7",
            "extra": "mean: 8.444323112956738 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 119874.17170552755,
            "unit": "iter/sec",
            "range": "stddev: 3.3895700269950786e-7",
            "extra": "mean: 8.342080581432612 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 117210.30807587477,
            "unit": "iter/sec",
            "range": "stddev: 4.795288156746342e-7",
            "extra": "mean: 8.531672823116045 usec\nrounds: 52357"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 118841.86174844544,
            "unit": "iter/sec",
            "range": "stddev: 3.8488492324992354e-7",
            "extra": "mean: 8.414543371229884 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 115642.39408162665,
            "unit": "iter/sec",
            "range": "stddev: 4.7220620553237303e-7",
            "extra": "mean: 8.647347782286017 usec\nrounds: 51814"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 118350.12484191047,
            "unit": "iter/sec",
            "range": "stddev: 3.822858293903479e-7",
            "extra": "mean: 8.44950523994612 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 118008.3621167716,
            "unit": "iter/sec",
            "range": "stddev: 4.60897117966392e-7",
            "extra": "mean: 8.473975759535415 usec\nrounds: 51814"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 117605.67682537292,
            "unit": "iter/sec",
            "range": "stddev: 4.670648544745421e-7",
            "extra": "mean: 8.502990901407356 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 118377.02781928719,
            "unit": "iter/sec",
            "range": "stddev: 3.455566207171128e-7",
            "extra": "mean: 8.447584961556789 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 116855.94347690517,
            "unit": "iter/sec",
            "range": "stddev: 4.642351721651244e-7",
            "extra": "mean: 8.557545044318905 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 117551.2151534806,
            "unit": "iter/sec",
            "range": "stddev: 3.4400961819820223e-7",
            "extra": "mean: 8.506930351118458 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 117338.92352820997,
            "unit": "iter/sec",
            "range": "stddev: 4.4011227363082564e-7",
            "extra": "mean: 8.522321237756929 usec\nrounds: 48310"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 117232.16995598195,
            "unit": "iter/sec",
            "range": "stddev: 3.285795604191927e-7",
            "extra": "mean: 8.530081805834334 usec\nrounds: 43860"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 118039.59853877533,
            "unit": "iter/sec",
            "range": "stddev: 3.7249359832668075e-7",
            "extra": "mean: 8.471733319827463 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 117956.9047562654,
            "unit": "iter/sec",
            "range": "stddev: 4.7018479013159446e-7",
            "extra": "mean: 8.477672435253384 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 117867.57218284506,
            "unit": "iter/sec",
            "range": "stddev: 5.105194415088008e-7",
            "extra": "mean: 8.484097716450158 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 117591.25878690254,
            "unit": "iter/sec",
            "range": "stddev: 4.5996566410941225e-7",
            "extra": "mean: 8.504033465720338 usec\nrounds: 51814"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 118924.23437688051,
            "unit": "iter/sec",
            "range": "stddev: 3.3865235368081453e-7",
            "extra": "mean: 8.40871505492244 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 115422.58605799268,
            "unit": "iter/sec",
            "range": "stddev: 4.678994246370319e-7",
            "extra": "mean: 8.663815585431106 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 365931.34333030495,
            "unit": "iter/sec",
            "range": "stddev: 1.6910071794961799e-7",
            "extra": "mean: 2.732753064821119 usec\nrounds: 8727"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 30804.597684029428,
            "unit": "iter/sec",
            "range": "stddev: 8.760215621527483e-7",
            "extra": "mean: 32.462686585205674 usec\nrounds: 15848"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 357355.9967954545,
            "unit": "iter/sec",
            "range": "stddev: 1.8249872859713498e-7",
            "extra": "mean: 2.7983299817755283 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 30765.7201390037,
            "unit": "iter/sec",
            "range": "stddev: 8.994169415872904e-7",
            "extra": "mean: 32.50370852630344 usec\nrounds: 15106"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 367657.2855733634,
            "unit": "iter/sec",
            "range": "stddev: 2.0118677543809546e-7",
            "extra": "mean: 2.7199243405186295 usec\nrounds: 128206"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 30768.901343684196,
            "unit": "iter/sec",
            "range": "stddev: 8.682415580465533e-7",
            "extra": "mean: 32.500347959458935 usec\nrounds: 15338"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 31850.515197648736,
            "unit": "iter/sec",
            "range": "stddev: 7.645168702975625e-7",
            "extra": "mean: 31.39666638967968 usec\nrounds: 16864"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 373653.14004392177,
            "unit": "iter/sec",
            "range": "stddev: 1.8866830219862485e-7",
            "extra": "mean: 2.6762788608773715 usec\nrounds: 147059"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 32093.597197534196,
            "unit": "iter/sec",
            "range": "stddev: 7.741100416000295e-7",
            "extra": "mean: 31.158863054367476 usec\nrounds: 15152"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 357417.04500977683,
            "unit": "iter/sec",
            "range": "stddev: 2.3458152044182507e-7",
            "extra": "mean: 2.7978520161864298 usec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 31800.524740313725,
            "unit": "iter/sec",
            "range": "stddev: 8.992599047096036e-7",
            "extra": "mean: 31.44602198127547 usec\nrounds: 12920"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 364876.5505881958,
            "unit": "iter/sec",
            "range": "stddev: 1.987685409358649e-7",
            "extra": "mean: 2.74065296437373 usec\nrounds: 135136"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 351999.38065178605,
            "unit": "iter/sec",
            "range": "stddev: 1.805403253169238e-7",
            "extra": "mean: 2.840914089531441 usec\nrounds: 142858"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 30599.60303840048,
            "unit": "iter/sec",
            "range": "stddev: 8.00965402801815e-7",
            "extra": "mean: 32.68016250880987 usec\nrounds: 11224"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 361360.5499726004,
            "unit": "iter/sec",
            "range": "stddev: 2.0556692636780113e-7",
            "extra": "mean: 2.767319233036986 usec\nrounds: 142858"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 30305.96224573592,
            "unit": "iter/sec",
            "range": "stddev: 0.000028521050019309854",
            "extra": "mean: 32.9968074232885 usec\nrounds: 10858"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 354779.93617391505,
            "unit": "iter/sec",
            "range": "stddev: 2.259828945961071e-7",
            "extra": "mean: 2.818648683418768 usec\nrounds: 138889"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 30795.7083467104,
            "unit": "iter/sec",
            "range": "stddev: 8.324115065318394e-7",
            "extra": "mean: 32.472057104243234 usec\nrounds: 14815"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 31665.338442581156,
            "unit": "iter/sec",
            "range": "stddev: 7.809949061997767e-7",
            "extra": "mean: 31.580271968774397 usec\nrounds: 16182"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 347846.91401489073,
            "unit": "iter/sec",
            "range": "stddev: 1.9778464249304763e-7",
            "extra": "mean: 2.874827861652933 usec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 31728.17207063223,
            "unit": "iter/sec",
            "range": "stddev: 7.99420178823701e-7",
            "extra": "mean: 31.517731238151143 usec\nrounds: 14578"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 361317.97198694403,
            "unit": "iter/sec",
            "range": "stddev: 2.389282957856999e-7",
            "extra": "mean: 2.7676453360480346 usec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 31740.16105650686,
            "unit": "iter/sec",
            "range": "stddev: 8.028837432069327e-7",
            "extra": "mean: 31.505826269113903 usec\nrounds: 14085"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 356019.58461166226,
            "unit": "iter/sec",
            "range": "stddev: 1.9040763763817418e-7",
            "extra": "mean: 2.8088342417757053 usec\nrounds: 138889"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 369915.82302045426,
            "unit": "iter/sec",
            "range": "stddev: 1.8136652430053778e-7",
            "extra": "mean: 2.70331772194753 usec\nrounds: 123457"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 30495.048269856852,
            "unit": "iter/sec",
            "range": "stddev: 9.23859677434257e-7",
            "extra": "mean: 32.79220912033973 usec\nrounds: 14451"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 363508.6260142101,
            "unit": "iter/sec",
            "range": "stddev: 1.967732439285539e-7",
            "extra": "mean: 2.7509663552273134 usec\nrounds: 133334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 30857.352676666145,
            "unit": "iter/sec",
            "range": "stddev: 8.985468860367219e-7",
            "extra": "mean: 32.40718704803814 usec\nrounds: 14793"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 369170.2451473536,
            "unit": "iter/sec",
            "range": "stddev: 2.045878959846435e-7",
            "extra": "mean: 2.7087773544719234 usec\nrounds: 138889"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 30852.671931642253,
            "unit": "iter/sec",
            "range": "stddev: 8.563012001187042e-7",
            "extra": "mean: 32.41210363289178 usec\nrounds: 14368"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 31751.330372798497,
            "unit": "iter/sec",
            "range": "stddev: 9.607701229517747e-7",
            "extra": "mean: 31.49474331496687 usec\nrounds: 16156"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 364231.52172494045,
            "unit": "iter/sec",
            "range": "stddev: 1.8302653794242278e-7",
            "extra": "mean: 2.7455064714447692 usec\nrounds: 136987"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 31669.11009045192,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010791018995935522",
            "extra": "mean: 31.576510901122383 usec\nrounds: 14815"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 366944.6267587635,
            "unit": "iter/sec",
            "range": "stddev: 2.4031215134043396e-7",
            "extra": "mean: 2.72520682162058 usec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 31495.544671206462,
            "unit": "iter/sec",
            "range": "stddev: 8.920917489622387e-7",
            "extra": "mean: 31.750522508480696 usec\nrounds: 14750"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 369527.127473678,
            "unit": "iter/sec",
            "range": "stddev: 1.8620491086184272e-7",
            "extra": "mean: 2.7061612684206295 usec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 14791.445161342264,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023127494228186982",
            "extra": "mean: 67.60664621287445 usec\nrounds: 12516"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 13794.354440160148,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020830643043252697",
            "extra": "mean: 72.49342507023404 usec\nrounds: 10650"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 15818.219532374163,
            "unit": "iter/sec",
            "range": "stddev: 0.000002247175350961233",
            "extra": "mean: 63.21824007773836 usec\nrounds: 12346"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 12641.977905236274,
            "unit": "iter/sec",
            "range": "stddev: 0.000002842561603739572",
            "extra": "mean: 79.1015462529643 usec\nrounds: 10021"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 10693.832493433174,
            "unit": "iter/sec",
            "range": "stddev: 0.000002950675604098473",
            "extra": "mean: 93.51184438451565 usec\nrounds: 8913"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 8449.584392208546,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031948770633551287",
            "extra": "mean: 118.34901618618201 usec\nrounds: 7043"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 12189.472145105103,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022510640887035524",
            "extra": "mean: 82.03800690430779 usec\nrounds: 10428"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 12009.807536419914,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026362694014056038",
            "extra": "mean: 83.26528106029058 usec\nrounds: 10560"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 199180.03977516675,
            "unit": "iter/sec",
            "range": "stddev: 2.6778632092841437e-7",
            "extra": "mean: 5.020583393440397 usec\nrounds: 88496"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 198991.17248942872,
            "unit": "iter/sec",
            "range": "stddev: 2.7216606179723094e-7",
            "extra": "mean: 5.025348549333888 usec\nrounds: 103093"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 175598.05769470724,
            "unit": "iter/sec",
            "range": "stddev: 2.5759252800054536e-7",
            "extra": "mean: 5.694823810287176 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 175368.68721871343,
            "unit": "iter/sec",
            "range": "stddev: 3.1114396906556354e-7",
            "extra": "mean: 5.702272257719741 usec\nrounds: 91744"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 44170.96032631844,
            "unit": "iter/sec",
            "range": "stddev: 0.0001911278076220598",
            "extra": "mean: 22.639308555041055 usec\nrounds: 12659"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 47887.59013929959,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023715132775195013",
            "extra": "mean: 20.8822368611808 usec\nrounds: 18019"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 42304.77382061558,
            "unit": "iter/sec",
            "range": "stddev: 9.663400869881587e-7",
            "extra": "mean: 23.6379942424533 usec\nrounds: 17890"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 42426.914826502296,
            "unit": "iter/sec",
            "range": "stddev: 7.473439428841466e-7",
            "extra": "mean: 23.569943845536052 usec\nrounds: 18182"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 45782.285984133254,
            "unit": "iter/sec",
            "range": "stddev: 7.403828549056182e-7",
            "extra": "mean: 21.842509138721677 usec\nrounds: 18657"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 45658.54218515675,
            "unit": "iter/sec",
            "range": "stddev: 7.114532563375525e-7",
            "extra": "mean: 21.901706715574736 usec\nrounds: 19343"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 43429.00248088228,
            "unit": "iter/sec",
            "range": "stddev: 7.356036471521097e-7",
            "extra": "mean: 23.026087242971016 usec\nrounds: 17606"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 43303.21749391323,
            "unit": "iter/sec",
            "range": "stddev: 7.242114046331846e-7",
            "extra": "mean: 23.09297225178618 usec\nrounds: 17731"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 7723.372420495671,
            "unit": "iter/sec",
            "range": "stddev: 0.00000998838107155812",
            "extra": "mean: 129.47711770913438 usec\nrounds: 1903"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 5908.129695245668,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030725338873089854",
            "extra": "mean: 169.25830196393795 usec\nrounds: 2444"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 5562.120398645707,
            "unit": "iter/sec",
            "range": "stddev: 0.000005198168020605339",
            "extra": "mean: 179.78755012989023 usec\nrounds: 2314"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 7204.964018514605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026437148346765845",
            "extra": "mean: 138.79319833246893 usec\nrounds: 2758"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 136.35710075826896,
            "unit": "iter/sec",
            "range": "stddev: 0.009457987936567222",
            "extra": "mean: 7.333684820512423 msec\nrounds: 78"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 135.70603695240678,
            "unit": "iter/sec",
            "range": "stddev: 0.009624278754163778",
            "extra": "mean: 7.368868935069619 msec\nrounds: 77"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 136.86741800310756,
            "unit": "iter/sec",
            "range": "stddev: 0.009304050125620593",
            "extra": "mean: 7.306340797466459 msec\nrounds: 79"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 160.85586691052345,
            "unit": "iter/sec",
            "range": "stddev: 0.000043988041684650665",
            "extra": "mean: 6.216745582281143 msec\nrounds: 79"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 7784.672822143727,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035690400525243897",
            "extra": "mean: 128.45755022041146 usec\nrounds: 2728"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 5882.44281660929,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028036197979427327",
            "extra": "mean: 169.99740263967612 usec\nrounds: 2501"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 5560.684457310242,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030580332385401765",
            "extra": "mean: 179.83397685609913 usec\nrounds: 2506"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 7190.210784403801,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026555345018246615",
            "extra": "mean: 139.07798115864531 usec\nrounds: 2813"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 137.91689556283495,
            "unit": "iter/sec",
            "range": "stddev: 0.00932641972079517",
            "extra": "mean: 7.2507432531672675 msec\nrounds: 79"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 136.69483121124017,
            "unit": "iter/sec",
            "range": "stddev: 0.009401860882274479",
            "extra": "mean: 7.315565564104313 msec\nrounds: 78"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 135.86754902517933,
            "unit": "iter/sec",
            "range": "stddev: 0.009521595161249773",
            "extra": "mean: 7.360109217946349 msec\nrounds: 78"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 137.3943102965349,
            "unit": "iter/sec",
            "range": "stddev: 0.009417025054100381",
            "extra": "mean: 7.278321772144156 msec\nrounds: 79"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 95507.95886266886,
            "unit": "iter/sec",
            "range": "stddev: 4.3765491760349107e-7",
            "extra": "mean: 10.470331602813358 usec\nrounds: 45455"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 93926.60168310648,
            "unit": "iter/sec",
            "range": "stddev: 4.515359209518758e-7",
            "extra": "mean: 10.646611099311801 usec\nrounds: 43479"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 92445.15757172063,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011019342369465198",
            "extra": "mean: 10.817224246972394 usec\nrounds: 45044"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 94740.7983674272,
            "unit": "iter/sec",
            "range": "stddev: 5.486922124202136e-7",
            "extra": "mean: 10.555114768209613 usec\nrounds: 46729"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 88920.82561472706,
            "unit": "iter/sec",
            "range": "stddev: 6.116093755253716e-7",
            "extra": "mean: 11.245959459854365 usec\nrounds: 43291"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 87411.17969281272,
            "unit": "iter/sec",
            "range": "stddev: 4.4733928602593026e-7",
            "extra": "mean: 11.440184236321707 usec\nrounds: 40486"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 87904.30053730553,
            "unit": "iter/sec",
            "range": "stddev: 4.5470169984290666e-7",
            "extra": "mean: 11.376007702553892 usec\nrounds: 43104"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 89846.13609705515,
            "unit": "iter/sec",
            "range": "stddev: 4.829447730999557e-7",
            "extra": "mean: 11.130139185059253 usec\nrounds: 40651"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 73682.42331800467,
            "unit": "iter/sec",
            "range": "stddev: 5.38047133534412e-7",
            "extra": "mean: 13.571757754004881 usec\nrounds: 27856"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 74288.4348084248,
            "unit": "iter/sec",
            "range": "stddev: 4.980334917562246e-7",
            "extra": "mean: 13.461045485462204 usec\nrounds: 31153"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 74425.73569815431,
            "unit": "iter/sec",
            "range": "stddev: 5.101350046989882e-7",
            "extra": "mean: 13.436212495845023 usec\nrounds: 32363"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 73243.71842893005,
            "unit": "iter/sec",
            "range": "stddev: 5.057292380245504e-7",
            "extra": "mean: 13.65304795346131 usec\nrounds: 30488"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 66045.18148783618,
            "unit": "iter/sec",
            "range": "stddev: 5.500600978788348e-7",
            "extra": "mean: 15.141150004776264 usec\nrounds: 29499"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 67022.62174284873,
            "unit": "iter/sec",
            "range": "stddev: 5.096795179138919e-7",
            "extra": "mean: 14.920335462805129 usec\nrounds: 30212"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 67086.16822187764,
            "unit": "iter/sec",
            "range": "stddev: 6.856915900923124e-7",
            "extra": "mean: 14.906202373828341 usec\nrounds: 30582"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 64579.57651993462,
            "unit": "iter/sec",
            "range": "stddev: 8.631457992364885e-7",
            "extra": "mean: 15.484771717128199 usec\nrounds: 990"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 79587.4722808884,
            "unit": "iter/sec",
            "range": "stddev: 4.89395767193199e-7",
            "extra": "mean: 12.564791560042211 usec\nrounds: 17986"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 19612.59884738018,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014414672259303504",
            "extra": "mean: 50.98763339737499 usec\nrounds: 8977"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 19907.250861860928,
            "unit": "iter/sec",
            "range": "stddev: 0.000001431849236238909",
            "extra": "mean: 50.23295315556796 usec\nrounds: 9286"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 80658.95534839724,
            "unit": "iter/sec",
            "range": "stddev: 5.810838891682587e-7",
            "extra": "mean: 12.397879388353259 usec\nrounds: 28090"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 73264.72118411196,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010385064181117762",
            "extra": "mean: 13.649134042113273 usec\nrounds: 29155"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 18632.68290579122,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016223586077304874",
            "extra": "mean: 53.66913638020375 usec\nrounds: 8425"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 19111.57269871142,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016456929464554426",
            "extra": "mean: 52.32431761450087 usec\nrounds: 9373"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 73345.96307907887,
            "unit": "iter/sec",
            "range": "stddev: 5.517512060876219e-7",
            "extra": "mean: 13.63401553432242 usec\nrounds: 27101"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 426902.2896058592,
            "unit": "iter/sec",
            "range": "stddev: 1.6840241002058508e-7",
            "extra": "mean: 2.3424563989180234 usec\nrounds: 68966"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 16136.270933187545,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016084868159842814",
            "extra": "mean: 61.97218701523505 usec\nrounds: 2064"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 16045.392170037634,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015905110664317661",
            "extra": "mean: 62.32318845203111 usec\nrounds: 2165"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 424236.9499479399,
            "unit": "iter/sec",
            "range": "stddev: 1.9339047080871593e-7",
            "extra": "mean: 2.3571732733858157 usec\nrounds: 88496"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 354761.54304812907,
            "unit": "iter/sec",
            "range": "stddev: 2.56976444219775e-7",
            "extra": "mean: 2.8187948203403037 usec\nrounds: 112360"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 15093.160895055275,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029661228461045573",
            "extra": "mean: 66.25517391308097 usec\nrounds: 69"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 15224.489922100483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024925202945176316",
            "extra": "mean: 65.68364556820782 usec\nrounds: 79"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 356929.9441314699,
            "unit": "iter/sec",
            "range": "stddev: 2.388637462560583e-7",
            "extra": "mean: 2.801670233729857 usec\nrounds: 111112"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 44131.48153189,
            "unit": "iter/sec",
            "range": "stddev: 0.000017750743745786388",
            "extra": "mean: 22.659561050026987 usec\nrounds: 16421"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 20145.690100343363,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016049737392285352",
            "extra": "mean: 49.638408762326584 usec\nrounds: 10385"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 19681.934001659512,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015601650200145578",
            "extra": "mean: 50.80801510236156 usec\nrounds: 10594"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 45004.677354127016,
            "unit": "iter/sec",
            "range": "stddev: 6.597058688691584e-7",
            "extra": "mean: 22.21991265777396 usec\nrounds: 20162"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 42490.4046377885,
            "unit": "iter/sec",
            "range": "stddev: 7.033486332097242e-7",
            "extra": "mean: 23.534725275613354 usec\nrounds: 19343"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 19210.9924105444,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015279382910741297",
            "extra": "mean: 52.053531573471794 usec\nrounds: 9470"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 18881.80208008302,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015290272892509345",
            "extra": "mean: 52.96104660766592 usec\nrounds: 10363"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 41665.432422516984,
            "unit": "iter/sec",
            "range": "stddev: 8.253915965997865e-7",
            "extra": "mean: 24.00071094568975 usec\nrounds: 18692"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 44410.87492739605,
            "unit": "iter/sec",
            "range": "stddev: 7.030790955942424e-7",
            "extra": "mean: 22.51700741394588 usec\nrounds: 20367"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 20100.02358154964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013306652127424649",
            "extra": "mean: 49.7511854124354 usec\nrounds: 10571"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 19666.7846349667,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014792234661480433",
            "extra": "mean: 50.84715262616151 usec\nrounds: 10719"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 44662.91102232047,
            "unit": "iter/sec",
            "range": "stddev: 6.798195175319951e-7",
            "extra": "mean: 22.38994228343616 usec\nrounds: 18868"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 42120.170819064464,
            "unit": "iter/sec",
            "range": "stddev: 8.293179834382995e-7",
            "extra": "mean: 23.741594123530458 usec\nrounds: 19570"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 19242.095226737238,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018725042027915013",
            "extra": "mean: 51.96939253322487 usec\nrounds: 9268"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 18635.225117358565,
            "unit": "iter/sec",
            "range": "stddev: 0.000003885967325585155",
            "extra": "mean: 53.66181485344698 usec\nrounds: 10516"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 42388.71185185607,
            "unit": "iter/sec",
            "range": "stddev: 7.180581016498806e-7",
            "extra": "mean: 23.591186339771095 usec\nrounds: 17731"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 39135.172721190414,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018371016242254648",
            "extra": "mean: 25.552461646822696 usec\nrounds: 17065"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 38721.41622920351,
            "unit": "iter/sec",
            "range": "stddev: 0.000001425500993513698",
            "extra": "mean: 25.825501683117796 usec\nrounds: 17826"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 38926.59805163814,
            "unit": "iter/sec",
            "range": "stddev: 9.089362908607345e-7",
            "extra": "mean: 25.689375646786512 usec\nrounds: 17575"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 39310.215597465474,
            "unit": "iter/sec",
            "range": "stddev: 9.330211444418376e-7",
            "extra": "mean: 25.43868011918192 usec\nrounds: 16156"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 36806.27815451805,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042016547384971015",
            "extra": "mean: 27.16927790965053 usec\nrounds: 15577"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 36909.51408152146,
            "unit": "iter/sec",
            "range": "stddev: 8.431469843667133e-7",
            "extra": "mean: 27.093285427473138 usec\nrounds: 16950"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 36957.57541972237,
            "unit": "iter/sec",
            "range": "stddev: 9.581011540938002e-7",
            "extra": "mean: 27.058052067624303 usec\nrounds: 16978"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 37658.10447166063,
            "unit": "iter/sec",
            "range": "stddev: 9.305231951640256e-7",
            "extra": "mean: 26.554708847667676 usec\nrounds: 16026"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys0]",
            "value": 38864.1005213254,
            "unit": "iter/sec",
            "range": "stddev: 8.156720618607585e-7",
            "extra": "mean: 25.730686844309766 usec\nrounds: 17065"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys1]",
            "value": 38928.559026422656,
            "unit": "iter/sec",
            "range": "stddev: 0.000001020514956516221",
            "extra": "mean: 25.68808157839217 usec\nrounds: 17762"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys2]",
            "value": 38999.71468950707,
            "unit": "iter/sec",
            "range": "stddev: 8.069463964077303e-7",
            "extra": "mean: 25.641213223261133 usec\nrounds: 17606"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys3]",
            "value": 38508.10601041822,
            "unit": "iter/sec",
            "range": "stddev: 8.877010458620972e-7",
            "extra": "mean: 25.96855840506552 usec\nrounds: 15949"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys4]",
            "value": 35235.13106648843,
            "unit": "iter/sec",
            "range": "stddev: 9.50105152574004e-7",
            "extra": "mean: 28.380765722511644 usec\nrounds: 16314"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys5]",
            "value": 35641.09358278437,
            "unit": "iter/sec",
            "range": "stddev: 8.18704079203206e-7",
            "extra": "mean: 28.05750047139484 usec\nrounds: 16978"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys6]",
            "value": 35537.25943104466,
            "unit": "iter/sec",
            "range": "stddev: 9.17958919741606e-7",
            "extra": "mean: 28.13947997144708 usec\nrounds: 16751"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys7]",
            "value": 34995.5147169722,
            "unit": "iter/sec",
            "range": "stddev: 8.816695348307192e-7",
            "extra": "mean: 28.57509049624059 usec\nrounds: 15625"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 61948.729863598426,
            "unit": "iter/sec",
            "range": "stddev: 5.16150772192705e-7",
            "extra": "mean: 16.14238100122224 usec\nrounds: 15601"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 24614.984013401292,
            "unit": "iter/sec",
            "range": "stddev: 0.000001197720659747412",
            "extra": "mean: 40.625661160517666 usec\nrounds: 11442"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 23772.099165059986,
            "unit": "iter/sec",
            "range": "stddev: 0.000001238157837439778",
            "extra": "mean: 42.0661210041472 usec\nrounds: 11793"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 62258.55746711163,
            "unit": "iter/sec",
            "range": "stddev: 5.63223637750577e-7",
            "extra": "mean: 16.062048988659186 usec\nrounds: 22883"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 58711.324140811805,
            "unit": "iter/sec",
            "range": "stddev: 6.182439025969813e-7",
            "extra": "mean: 17.032489296300394 usec\nrounds: 24570"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 23431.770523676398,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013476242702931557",
            "extra": "mean: 42.67709941037362 usec\nrounds: 11186"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 22932.524400064012,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015548876493907466",
            "extra": "mean: 43.60618929493906 usec\nrounds: 11601"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 58993.70873388815,
            "unit": "iter/sec",
            "range": "stddev: 5.812504316920533e-7",
            "extra": "mean: 16.950960050856462 usec\nrounds: 22779"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 61649.66620779023,
            "unit": "iter/sec",
            "range": "stddev: 6.183416894403391e-7",
            "extra": "mean: 16.22068798603872 usec\nrounds: 25063"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 24529.80109172635,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012231358632462227",
            "extra": "mean: 40.76673904776545 usec\nrounds: 11642"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 23806.487201101314,
            "unit": "iter/sec",
            "range": "stddev: 0.000001296661465891136",
            "extra": "mean: 42.005357260509186 usec\nrounds: 12078"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 61861.11549297918,
            "unit": "iter/sec",
            "range": "stddev: 5.642101064066286e-7",
            "extra": "mean: 16.16524357879536 usec\nrounds: 22272"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 57600.263099595184,
            "unit": "iter/sec",
            "range": "stddev: 6.301180274732511e-7",
            "extra": "mean: 17.361031811103445 usec\nrounds: 24331"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 23010.388917736946,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022842720440964467",
            "extra": "mean: 43.458630950352024 usec\nrounds: 11050"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 22584.630510744442,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015022788686094398",
            "extra": "mean: 44.27789950002763 usec\nrounds: 11403"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 57796.91936839287,
            "unit": "iter/sec",
            "range": "stddev: 0.000003948064590630026",
            "extra": "mean: 17.30196022431717 usec\nrounds: 25317"
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
          "id": "f3255ed56d855bad9249ec584e319108ee57b8ed",
          "message": "Pint 0.4",
          "timestamp": "2022-11-26T23:23:24-03:00",
          "tree_id": "0aa662dcab898db9415b4412e3fd237b57044cba",
          "url": "https://github.com/hgrecco/pint-benchmark/commit/f3255ed56d855bad9249ec584e319108ee57b8ed"
        },
        "date": 1669519224169,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 3.3739277140670567,
            "unit": "iter/sec",
            "range": "stddev: 0.008392421161235725",
            "extra": "mean: 296.3904637999974 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 38478.4340955928,
            "unit": "iter/sec",
            "range": "stddev: 0.00017260085127564952",
            "extra": "mean: 25.988583566464232 usec\nrounds: 7862"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 25.615794740021514,
            "unit": "iter/sec",
            "range": "stddev: 0.003162684143377431",
            "extra": "mean: 39.03841400000069 msec\nrounds: 28"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 906.6980107550935,
            "unit": "iter/sec",
            "range": "stddev: 0.00029023318551825835",
            "extra": "mean: 1.1029030483558744 msec\nrounds: 1034"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 9908.070049277301,
            "unit": "iter/sec",
            "range": "stddev: 0.00004396106810102871",
            "extra": "mean: 100.92782903497341 usec\nrounds: 6902"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 9373.594426423779,
            "unit": "iter/sec",
            "range": "stddev: 0.000049406294214329814",
            "extra": "mean: 106.68266136851845 usec\nrounds: 4341"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 10865.829251216646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000394206685034123",
            "extra": "mean: 92.03163208993276 usec\nrounds: 9785"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 10670.660938894061,
            "unit": "iter/sec",
            "range": "stddev: 0.00006174312501280354",
            "extra": "mean: 93.71490723269508 usec\nrounds: 9001"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 9806.326823530539,
            "unit": "iter/sec",
            "range": "stddev: 0.00006953087539733747",
            "extra": "mean: 101.97498186583725 usec\nrounds: 9209"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 10291.360313451827,
            "unit": "iter/sec",
            "range": "stddev: 0.00005526483557116603",
            "extra": "mean: 97.16888434009068 usec\nrounds: 7548"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 9895.064247880253,
            "unit": "iter/sec",
            "range": "stddev: 0.000054589105108520285",
            "extra": "mean: 101.06048580879327 usec\nrounds: 6342"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 10698.060288559529,
            "unit": "iter/sec",
            "range": "stddev: 0.00004240795961734662",
            "extra": "mean: 93.47488918803315 usec\nrounds: 5198"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 10360.551893332617,
            "unit": "iter/sec",
            "range": "stddev: 0.000044571437285306554",
            "extra": "mean: 96.51995475680553 usec\nrounds: 8819"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 10051.829195501836,
            "unit": "iter/sec",
            "range": "stddev: 0.00005277693279589402",
            "extra": "mean: 99.48438045957815 usec\nrounds: 6571"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 3116691.5879667434,
            "unit": "iter/sec",
            "range": "stddev: 6.105218532868337e-7",
            "extra": "mean: 320.8530493880027 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 3129185.312854234,
            "unit": "iter/sec",
            "range": "stddev: 4.836769908503554e-7",
            "extra": "mean: 319.5719971878561 nsec\nrounds: 46512"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 3017228.8871450815,
            "unit": "iter/sec",
            "range": "stddev: 4.970061438187724e-7",
            "extra": "mean: 331.42994363475617 nsec\nrounds: 188680"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 3136378.741228821,
            "unit": "iter/sec",
            "range": "stddev: 7.266423416139402e-7",
            "extra": "mean: 318.8390441669855 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 3074791.396921347,
            "unit": "iter/sec",
            "range": "stddev: 6.754447724698562e-7",
            "extra": "mean: 325.22531479772897 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 11973.384965210667,
            "unit": "iter/sec",
            "range": "stddev: 0.00004621711900845814",
            "extra": "mean: 83.51857080562893 usec\nrounds: 10776"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 10653.22103509056,
            "unit": "iter/sec",
            "range": "stddev: 0.00004772550201464353",
            "extra": "mean: 93.8683236465392 usec\nrounds: 3785"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 11365.614339568947,
            "unit": "iter/sec",
            "range": "stddev: 0.00004041854217436877",
            "extra": "mean: 87.98468522009749 usec\nrounds: 6935"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 11179.495550689206,
            "unit": "iter/sec",
            "range": "stddev: 0.000038712550282951535",
            "extra": "mean: 89.44947430462109 usec\nrounds: 10605"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 11293.148682124647,
            "unit": "iter/sec",
            "range": "stddev: 0.00007632351747113744",
            "extra": "mean: 88.54926364184414 usec\nrounds: 8265"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 8017.007807174279,
            "unit": "iter/sec",
            "range": "stddev: 0.000048591051708678744",
            "extra": "mean: 124.73481678602303 usec\nrounds: 5731"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 7974.90005296857,
            "unit": "iter/sec",
            "range": "stddev: 0.000049763473789273444",
            "extra": "mean: 125.39342102823733 usec\nrounds: 4261"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 7955.0012877729905,
            "unit": "iter/sec",
            "range": "stddev: 0.000052374686325348527",
            "extra": "mean: 125.70708210154808 usec\nrounds: 6358"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 8245.316813743912,
            "unit": "iter/sec",
            "range": "stddev: 0.00005110673793682089",
            "extra": "mean: 121.28096743755498 usec\nrounds: 5835"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 7906.959954513433,
            "unit": "iter/sec",
            "range": "stddev: 0.000058021922888765096",
            "extra": "mean: 126.47085678348255 usec\nrounds: 5565"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 11516.305836410853,
            "unit": "iter/sec",
            "range": "stddev: 0.000041289692277250394",
            "extra": "mean: 86.83340076279687 usec\nrounds: 9971"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 9782.340156798295,
            "unit": "iter/sec",
            "range": "stddev: 0.000070609149042323",
            "extra": "mean: 102.22502836451093 usec\nrounds: 6346"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 7170.637357256582,
            "unit": "iter/sec",
            "range": "stddev: 0.0000570040850285799",
            "extra": "mean: 139.4576172490461 usec\nrounds: 4290"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 6693.686657198049,
            "unit": "iter/sec",
            "range": "stddev: 0.00008002888290339329",
            "extra": "mean: 149.3945042863115 usec\nrounds: 6532"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_math_expression",
            "value": 8904.213985421531,
            "unit": "iter/sec",
            "range": "stddev: 0.00006145513170890871",
            "extra": "mean: 112.3063755697308 usec\nrounds: 8334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 10552.578598770046,
            "unit": "iter/sec",
            "range": "stddev: 0.00005313751318844031",
            "extra": "mean: 94.76356803602059 usec\nrounds: 11075"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 9886.629782525992,
            "unit": "iter/sec",
            "range": "stddev: 0.00006364667327021189",
            "extra": "mean: 101.14670236438288 usec\nrounds: 10953"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 10204.800599365282,
            "unit": "iter/sec",
            "range": "stddev: 0.00003936733624690225",
            "extra": "mean: 97.99309553017605 usec\nrounds: 10112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 20619698.15857624,
            "unit": "iter/sec",
            "range": "stddev: 2.2681383081663188e-7",
            "extra": "mean: 48.497315155105674 nsec\nrounds: 200000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 15289214.216359636,
            "unit": "iter/sec",
            "range": "stddev: 1.0261141817095892e-7",
            "extra": "mean: 65.40558499926179 nsec\nrounds: 200000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 17217981.6350942,
            "unit": "iter/sec",
            "range": "stddev: 1.458697524384139e-7",
            "extra": "mean: 58.07881673909939 nsec\nrounds: 175439"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 21769042.481460407,
            "unit": "iter/sec",
            "range": "stddev: 6.904840673097461e-8",
            "extra": "mean: 45.936793079042424 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 21173258.574242428,
            "unit": "iter/sec",
            "range": "stddev: 1.1818131294927412e-7",
            "extra": "mean: 47.22938590170479 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 21222654.51955914,
            "unit": "iter/sec",
            "range": "stddev: 7.323119099163544e-8",
            "extra": "mean: 47.119459023301665 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 31206.26254692401,
            "unit": "iter/sec",
            "range": "stddev: 0.00004645001891301646",
            "extra": "mean: 32.044849923835876 usec\nrounds: 8569"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 10340.860588577501,
            "unit": "iter/sec",
            "range": "stddev: 0.00008974343694790658",
            "extra": "mean: 96.70375027631631 usec\nrounds: 4525"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 34955.76007823806,
            "unit": "iter/sec",
            "range": "stddev: 0.000030446714308196898",
            "extra": "mean: 28.60758849934311 usec\nrounds: 12034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 10162.91538321557,
            "unit": "iter/sec",
            "range": "stddev: 0.00010187204986175135",
            "extra": "mean: 98.39696212088285 usec\nrounds: 5016"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 36932.912702719106,
            "unit": "iter/sec",
            "range": "stddev: 0.000025000699305686344",
            "extra": "mean: 27.07612064201958 usec\nrounds: 11588"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 10041.31869723024,
            "unit": "iter/sec",
            "range": "stddev: 0.00007641104935649732",
            "extra": "mean: 99.58851323739346 usec\nrounds: 6270"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 9441.159873119583,
            "unit": "iter/sec",
            "range": "stddev: 0.0000406150703366722",
            "extra": "mean: 105.91918931985803 usec\nrounds: 4569"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 26389.74184601755,
            "unit": "iter/sec",
            "range": "stddev: 0.00002665264493507875",
            "extra": "mean: 37.893512025806686 usec\nrounds: 11683"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 9258.919626176745,
            "unit": "iter/sec",
            "range": "stddev: 0.000057451544063109624",
            "extra": "mean: 108.00396162558836 usec\nrounds: 6645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 26335.996906570617,
            "unit": "iter/sec",
            "range": "stddev: 0.000026620904858692724",
            "extra": "mean: 37.97084285617106 usec\nrounds: 11429"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 9089.581439178244,
            "unit": "iter/sec",
            "range": "stddev: 0.00004791199545295953",
            "extra": "mean: 110.01606693238521 usec\nrounds: 6021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 26304.39561552829,
            "unit": "iter/sec",
            "range": "stddev: 0.000022465307830096204",
            "extra": "mean: 38.01645985774596 usec\nrounds: 5767"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 34164.2920833358,
            "unit": "iter/sec",
            "range": "stddev: 0.000024980406074370775",
            "extra": "mean: 29.270326970649176 usec\nrounds: 2410"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 10408.552062630559,
            "unit": "iter/sec",
            "range": "stddev: 0.00004561974855087801",
            "extra": "mean: 96.07484249324776 usec\nrounds: 3530"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 35127.85856341868,
            "unit": "iter/sec",
            "range": "stddev: 0.00003452897684549544",
            "extra": "mean: 28.467434136203686 usec\nrounds: 15198"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 10426.828899222619,
            "unit": "iter/sec",
            "range": "stddev: 0.00004135832727920502",
            "extra": "mean: 95.90643614326076 usec\nrounds: 5528"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 30427.33706104692,
            "unit": "iter/sec",
            "range": "stddev: 0.000015318770674127415",
            "extra": "mean: 32.86518297653461 usec\nrounds: 1492"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 10303.136561518786,
            "unit": "iter/sec",
            "range": "stddev: 0.000042058173082550126",
            "extra": "mean: 97.05782254065261 usec\nrounds: 5590"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 9108.805982475946,
            "unit": "iter/sec",
            "range": "stddev: 0.0000515071399185886",
            "extra": "mean: 109.7838730920231 usec\nrounds: 4586"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 25614.466797328245,
            "unit": "iter/sec",
            "range": "stddev: 0.00003635819009606599",
            "extra": "mean: 39.04043788662063 usec\nrounds: 10352"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 9582.52565433937,
            "unit": "iter/sec",
            "range": "stddev: 0.000030316276265629482",
            "extra": "mean: 104.35662121573952 usec\nrounds: 66"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 24945.730672764665,
            "unit": "iter/sec",
            "range": "stddev: 0.00004354328230213649",
            "extra": "mean: 40.08701982386844 usec\nrounds: 11905"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 8781.89485580463,
            "unit": "iter/sec",
            "range": "stddev: 0.00006781912839389141",
            "extra": "mean: 113.87064140707892 usec\nrounds: 5859"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 24524.261098816816,
            "unit": "iter/sec",
            "range": "stddev: 0.00002491188288048314",
            "extra": "mean: 40.77594819149293 usec\nrounds: 10616"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 32458.380232692027,
            "unit": "iter/sec",
            "range": "stddev: 0.00004243813225415735",
            "extra": "mean: 30.808684624157603 usec\nrounds: 1782"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 9718.895759768899,
            "unit": "iter/sec",
            "range": "stddev: 0.00005081900719717181",
            "extra": "mean: 102.89234751744868 usec\nrounds: 6204"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 32376.454247101527,
            "unit": "iter/sec",
            "range": "stddev: 0.00002479711125467855",
            "extra": "mean: 30.88664349616123 usec\nrounds: 12516"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 10418.07591676261,
            "unit": "iter/sec",
            "range": "stddev: 0.00003634229151132051",
            "extra": "mean: 95.98701410795128 usec\nrounds: 4820"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 33248.41964004256,
            "unit": "iter/sec",
            "range": "stddev: 0.00004786058903996153",
            "extra": "mean: 30.076617500209107 usec\nrounds: 2400"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 9655.226228814328,
            "unit": "iter/sec",
            "range": "stddev: 0.00004560843050982057",
            "extra": "mean: 103.57085129871692 usec\nrounds: 3887"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 9233.347481837553,
            "unit": "iter/sec",
            "range": "stddev: 0.00004773059706563425",
            "extra": "mean: 108.30308314152035 usec\nrounds: 6519"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 25371.791372225605,
            "unit": "iter/sec",
            "range": "stddev: 0.000031240034127404996",
            "extra": "mean: 39.41385081286361 usec\nrounds: 10765"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 9343.494596412844,
            "unit": "iter/sec",
            "range": "stddev: 0.000060891549977629",
            "extra": "mean: 107.02633684659274 usec\nrounds: 2087"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 25195.783363749517,
            "unit": "iter/sec",
            "range": "stddev: 0.00003667087689049119",
            "extra": "mean: 39.68918074755127 usec\nrounds: 5859"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 8955.609658660773,
            "unit": "iter/sec",
            "range": "stddev: 0.00006040627536672499",
            "extra": "mean: 111.66185643575054 usec\nrounds: 6262"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 24638.01298071606,
            "unit": "iter/sec",
            "range": "stddev: 0.00004225954618070388",
            "extra": "mean: 40.587688657469684 usec\nrounds: 11338"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 32929.67590105849,
            "unit": "iter/sec",
            "range": "stddev: 0.000022088467547308503",
            "extra": "mean: 30.367744978864373 usec\nrounds: 2141"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 10338.876912860875,
            "unit": "iter/sec",
            "range": "stddev: 0.00005647866633697322",
            "extra": "mean: 96.72230440775115 usec\nrounds: 4379"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 33882.96697676789,
            "unit": "iter/sec",
            "range": "stddev: 0.000029010089648852352",
            "extra": "mean: 29.51335403082196 usec\nrounds: 13496"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 10303.225775061315,
            "unit": "iter/sec",
            "range": "stddev: 0.00006173241427227834",
            "extra": "mean: 97.05698213665019 usec\nrounds: 5206"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 32064.466306404316,
            "unit": "iter/sec",
            "range": "stddev: 0.000014974417346562727",
            "extra": "mean: 31.187171195806478 usec\nrounds: 1472"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 9791.151121042021,
            "unit": "iter/sec",
            "range": "stddev: 0.00003884137541336053",
            "extra": "mean: 102.13303702880395 usec\nrounds: 4483"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 9743.84764172763,
            "unit": "iter/sec",
            "range": "stddev: 0.00004207952586649554",
            "extra": "mean: 102.62886251602916 usec\nrounds: 4626"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 24353.237818391426,
            "unit": "iter/sec",
            "range": "stddev: 0.00002843618328145149",
            "extra": "mean: 41.06230175458664 usec\nrounds: 4845"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 8328.138355428946,
            "unit": "iter/sec",
            "range": "stddev: 0.00004201698203219843",
            "extra": "mean: 120.07485434582391 usec\nrounds: 1737"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 22632.143944247648,
            "unit": "iter/sec",
            "range": "stddev: 0.000018133624166344177",
            "extra": "mean: 44.184943435470124 usec\nrounds: 495"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 8195.123671225949,
            "unit": "iter/sec",
            "range": "stddev: 0.00004818166042727257",
            "extra": "mean: 122.02378391324571 usec\nrounds: 4600"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 26643.453519335668,
            "unit": "iter/sec",
            "range": "stddev: 0.000018854869867303276",
            "extra": "mean: 37.532671929120625 usec\nrounds: 10071"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 31181.92711442646,
            "unit": "iter/sec",
            "range": "stddev: 0.000033178478050610816",
            "extra": "mean: 32.06985881053341 usec\nrounds: 1884"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 10531.623238758404,
            "unit": "iter/sec",
            "range": "stddev: 0.000034106134374045347",
            "extra": "mean: 94.95212440944594 usec\nrounds: 4654"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 35885.79138248027,
            "unit": "iter/sec",
            "range": "stddev: 0.000028978417132829813",
            "extra": "mean: 27.86618217059045 usec\nrounds: 14706"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 9835.58035942014,
            "unit": "iter/sec",
            "range": "stddev: 0.00008165602302384636",
            "extra": "mean: 101.67168214351871 usec\nrounds: 4609"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 35731.81726445861,
            "unit": "iter/sec",
            "range": "stddev: 0.000014218546083261211",
            "extra": "mean: 27.98626200841653 usec\nrounds: 2061"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 9334.055858373178,
            "unit": "iter/sec",
            "range": "stddev: 0.00010106375340909855",
            "extra": "mean: 107.13456349234757 usec\nrounds: 5166"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 8937.146308606347,
            "unit": "iter/sec",
            "range": "stddev: 0.00007711750626120014",
            "extra": "mean: 111.89253990807043 usec\nrounds: 6753"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 25606.82584914564,
            "unit": "iter/sec",
            "range": "stddev: 0.000052887708441875344",
            "extra": "mean: 39.05208735714366 usec\nrounds: 10417"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 9394.467617363798,
            "unit": "iter/sec",
            "range": "stddev: 0.00006552126484936635",
            "extra": "mean: 106.44562744052676 usec\nrounds: 2048"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 25369.822920986317,
            "unit": "iter/sec",
            "range": "stddev: 0.0000437325619665966",
            "extra": "mean: 39.41690894392425 usec\nrounds: 11136"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 8448.294435168093,
            "unit": "iter/sec",
            "range": "stddev: 0.00006432506533357167",
            "extra": "mean: 118.36708671483504 usec\nrounds: 5939"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 24779.927778786696,
            "unit": "iter/sec",
            "range": "stddev: 0.00003375291262657556",
            "extra": "mean: 40.355242716085236 usec\nrounds: 11429"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 28459.219555313844,
            "unit": "iter/sec",
            "range": "stddev: 0.00010229228676339229",
            "extra": "mean: 35.13799800645911 usec\nrounds: 2007"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 9880.817103935082,
            "unit": "iter/sec",
            "range": "stddev: 0.000055228945312556776",
            "extra": "mean: 101.20620485948933 usec\nrounds: 5145"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 32762.53652251818,
            "unit": "iter/sec",
            "range": "stddev: 0.00002616695635768526",
            "extra": "mean: 30.52266723343246 usec\nrounds: 13532"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 10309.215386902064,
            "unit": "iter/sec",
            "range": "stddev: 0.00007394724703287269",
            "extra": "mean: 97.00059242825672 usec\nrounds: 6524"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 30818.545072804336,
            "unit": "iter/sec",
            "range": "stddev: 0.00002115382793319583",
            "extra": "mean: 32.447995115851356 usec\nrounds: 2252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 10008.883265676854,
            "unit": "iter/sec",
            "range": "stddev: 0.00010734409302894278",
            "extra": "mean: 99.91124618560278 usec\nrounds: 5374"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 7994.560497569728,
            "unit": "iter/sec",
            "range": "stddev: 0.00014131993487137323",
            "extra": "mean: 125.08505005422009 usec\nrounds: 4615"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 22868.350407719812,
            "unit": "iter/sec",
            "range": "stddev: 0.000032213248479525975",
            "extra": "mean: 43.72855856111177 usec\nrounds: 8504"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 8776.25185507396,
            "unit": "iter/sec",
            "range": "stddev: 0.000026365245453931383",
            "extra": "mean: 113.94385855299417 usec\nrounds: 304"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 22632.204527560367,
            "unit": "iter/sec",
            "range": "stddev: 0.000029561117825592917",
            "extra": "mean: 44.18482515842635 usec\nrounds: 6789"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 8873.836094776912,
            "unit": "iter/sec",
            "range": "stddev: 0.00004824218177192681",
            "extra": "mean: 112.6908350931334 usec\nrounds: 6440"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 25082.01652316049,
            "unit": "iter/sec",
            "range": "stddev: 0.000024758524057192843",
            "extra": "mean: 39.86920266465057 usec\nrounds: 9607"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 121623.08954945467,
            "unit": "iter/sec",
            "range": "stddev: 0.00002776009145832977",
            "extra": "mean: 8.222122984249447 usec\nrounds: 46510"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 126489.36067651842,
            "unit": "iter/sec",
            "range": "stddev: 0.000011746139027434061",
            "extra": "mean: 7.9058032600653405 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 136973.69708685728,
            "unit": "iter/sec",
            "range": "stddev: 0.00002297094958979365",
            "extra": "mean: 7.300671744049396 usec\nrounds: 62500"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 131781.84955171304,
            "unit": "iter/sec",
            "range": "stddev: 0.000010479901243976465",
            "extra": "mean: 7.5882984144002785 usec\nrounds: 26738"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 137156.5548695026,
            "unit": "iter/sec",
            "range": "stddev: 0.000011177596825869184",
            "extra": "mean: 7.290938453152665 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 129525.4259472179,
            "unit": "iter/sec",
            "range": "stddev: 0.000008642572370272161",
            "extra": "mean: 7.7204918855661875 usec\nrounds: 54348"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 131736.94724387582,
            "unit": "iter/sec",
            "range": "stddev: 0.000020497883550971618",
            "extra": "mean: 7.590884872630051 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 130131.95866029624,
            "unit": "iter/sec",
            "range": "stddev: 0.00002603053409854268",
            "extra": "mean: 7.6845074053673175 usec\nrounds: 65360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 119894.41962731279,
            "unit": "iter/sec",
            "range": "stddev: 0.000015144779535346224",
            "extra": "mean: 8.340671760274263 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 122022.88681189172,
            "unit": "iter/sec",
            "range": "stddev: 0.000014872410044690066",
            "extra": "mean: 8.195183921042467 usec\nrounds: 52354"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 120570.5635597021,
            "unit": "iter/sec",
            "range": "stddev: 0.000010647500597814237",
            "extra": "mean: 8.29389836520783 usec\nrounds: 59881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 129234.14187155454,
            "unit": "iter/sec",
            "range": "stddev: 0.000014125749532783653",
            "extra": "mean: 7.737893295982861 usec\nrounds: 17422"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 131849.83701042974,
            "unit": "iter/sec",
            "range": "stddev: 0.000004310215962518422",
            "extra": "mean: 7.584385560680647 usec\nrounds: 734"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 128895.07555973473,
            "unit": "iter/sec",
            "range": "stddev: 0.00001559967758355258",
            "extra": "mean: 7.758248293485527 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 129899.29584433576,
            "unit": "iter/sec",
            "range": "stddev: 0.000014473856333430076",
            "extra": "mean: 7.698271137653784 usec\nrounds: 59881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 129343.07186738001,
            "unit": "iter/sec",
            "range": "stddev: 0.000012679181137437926",
            "extra": "mean: 7.731376606126497 usec\nrounds: 54946"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 132348.82908017616,
            "unit": "iter/sec",
            "range": "stddev: 0.000012151184905934635",
            "extra": "mean: 7.555790307704239 usec\nrounds: 51814"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 126632.79467884333,
            "unit": "iter/sec",
            "range": "stddev: 0.00001428574980987836",
            "extra": "mean: 7.896848541770918 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 127767.83532634174,
            "unit": "iter/sec",
            "range": "stddev: 0.000012127576446364518",
            "extra": "mean: 7.826695955565206 usec\nrounds: 60603"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 121016.13104564878,
            "unit": "iter/sec",
            "range": "stddev: 0.00004742014305637905",
            "extra": "mean: 8.263361184657171 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 126173.24310033565,
            "unit": "iter/sec",
            "range": "stddev: 0.000018372788507621914",
            "extra": "mean: 7.925610655856557 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 129478.66728493203,
            "unit": "iter/sec",
            "range": "stddev: 0.00002322874685017773",
            "extra": "mean: 7.723279988659368 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 127182.78426524202,
            "unit": "iter/sec",
            "range": "stddev: 0.000009040973901387593",
            "extra": "mean: 7.862699387949251 usec\nrounds: 19121"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 133075.45845927575,
            "unit": "iter/sec",
            "range": "stddev: 0.000014600062926142803",
            "extra": "mean: 7.514533570485679 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 136174.09004527828,
            "unit": "iter/sec",
            "range": "stddev: 0.00001107602887245257",
            "extra": "mean: 7.343540901705288 usec\nrounds: 58824"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 122579.8851546212,
            "unit": "iter/sec",
            "range": "stddev: 0.000012445359643927685",
            "extra": "mean: 8.157945316546911 usec\nrounds: 53764"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 127379.3386723481,
            "unit": "iter/sec",
            "range": "stddev: 0.000009968795774116243",
            "extra": "mean: 7.850566743577254 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 124621.26246764392,
            "unit": "iter/sec",
            "range": "stddev: 0.000012624897361688974",
            "extra": "mean: 8.02431286763473 usec\nrounds: 57804"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 126360.23532329054,
            "unit": "iter/sec",
            "range": "stddev: 0.00001527914892514345",
            "extra": "mean: 7.913882064571317 usec\nrounds: 28329"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 123403.8765759073,
            "unit": "iter/sec",
            "range": "stddev: 0.0000213029935146779",
            "extra": "mean: 8.103473146444369 usec\nrounds: 60607"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 121730.35812402882,
            "unit": "iter/sec",
            "range": "stddev: 0.000010764505011166177",
            "extra": "mean: 8.214877664133036 usec\nrounds: 56819"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 130445.05276220234,
            "unit": "iter/sec",
            "range": "stddev: 0.000013804426016819226",
            "extra": "mean: 7.666063057392999 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 119663.5248245778,
            "unit": "iter/sec",
            "range": "stddev: 0.000015641920047574125",
            "extra": "mean: 8.356765367441433 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 127557.94754960832,
            "unit": "iter/sec",
            "range": "stddev: 0.000015546217970608854",
            "extra": "mean: 7.839574242217185 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 127047.52331618883,
            "unit": "iter/sec",
            "range": "stddev: 0.000016194673586500665",
            "extra": "mean: 7.871070398682668 usec\nrounds: 56180"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 124746.46801062439,
            "unit": "iter/sec",
            "range": "stddev: 0.00003047392462979735",
            "extra": "mean: 8.016259024783228 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 91651.18780624289,
            "unit": "iter/sec",
            "range": "stddev: 0.000015071012342038465",
            "extra": "mean: 10.910933332517969 usec\nrounds: 645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 100410.69057755853,
            "unit": "iter/sec",
            "range": "stddev: 0.000021142422140835392",
            "extra": "mean: 9.959098919129403 usec\nrounds: 45249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 101656.5101080002,
            "unit": "iter/sec",
            "range": "stddev: 0.000017453495396728346",
            "extra": "mean: 9.837048300572159 usec\nrounds: 44844"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 106232.30757520841,
            "unit": "iter/sec",
            "range": "stddev: 0.00001706508644250193",
            "extra": "mean: 9.413332185145636 usec\nrounds: 45872"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 122424.306222927,
            "unit": "iter/sec",
            "range": "stddev: 0.000004351648632915171",
            "extra": "mean: 8.168312574947842 usec\nrounds: 835"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 107173.50405621881,
            "unit": "iter/sec",
            "range": "stddev: 0.000012521064631428894",
            "extra": "mean: 9.330664410071366 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 105657.09234041646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000162600923994512",
            "extra": "mean: 9.464579971386126 usec\nrounds: 49749"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 97561.40639570059,
            "unit": "iter/sec",
            "range": "stddev: 0.000019920817770661164",
            "extra": "mean: 10.249954740751551 usec\nrounds: 50001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 96980.3757766929,
            "unit": "iter/sec",
            "range": "stddev: 0.000005616673450687046",
            "extra": "mean: 10.311364458956119 usec\nrounds: 664"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 103491.41195702384,
            "unit": "iter/sec",
            "range": "stddev: 0.000015219957297861205",
            "extra": "mean: 9.662637518321453 usec\nrounds: 45663"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 102295.90739988007,
            "unit": "iter/sec",
            "range": "stddev: 0.000016323582284211817",
            "extra": "mean: 9.775562145325594 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 97039.68303480839,
            "unit": "iter/sec",
            "range": "stddev: 0.000015477904684953942",
            "extra": "mean: 10.305062513871746 usec\nrounds: 45046"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 100598.3204859338,
            "unit": "iter/sec",
            "range": "stddev: 0.000007065298618708324",
            "extra": "mean: 9.940523809637808 usec\nrounds: 42"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 98961.24251652703,
            "unit": "iter/sec",
            "range": "stddev: 0.00003877468240012455",
            "extra": "mean: 10.104966091477632 usec\nrounds: 47392"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 101262.30083394409,
            "unit": "iter/sec",
            "range": "stddev: 0.000019645087461786866",
            "extra": "mean: 9.875343457185112 usec\nrounds: 44844"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 108224.2825060131,
            "unit": "iter/sec",
            "range": "stddev: 0.000019609657238226318",
            "extra": "mean: 9.240070498452493 usec\nrounds: 47845"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 103756.14617265433,
            "unit": "iter/sec",
            "range": "stddev: 0.000008909570059907872",
            "extra": "mean: 9.637983260634607 usec\nrounds: 43669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 103646.2818876833,
            "unit": "iter/sec",
            "range": "stddev: 0.000017284358363455866",
            "extra": "mean: 9.648199450933067 usec\nrounds: 48077"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 92153.33681441302,
            "unit": "iter/sec",
            "range": "stddev: 0.000013975760528489671",
            "extra": "mean: 10.851479008447553 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 90518.43338078819,
            "unit": "iter/sec",
            "range": "stddev: 0.00005392849616210349",
            "extra": "mean: 11.047473565889641 usec\nrounds: 44053"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 93533.36824958678,
            "unit": "iter/sec",
            "range": "stddev: 0.00002380867111910107",
            "extra": "mean: 10.691371632544815 usec\nrounds: 45249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 90733.63553179691,
            "unit": "iter/sec",
            "range": "stddev: 0.000029816544328542256",
            "extra": "mean: 11.021271154174766 usec\nrounds: 24097"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 96018.23420582258,
            "unit": "iter/sec",
            "range": "stddev: 0.000012806570736785956",
            "extra": "mean: 10.414688504439917 usec\nrounds: 38023"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 91843.23751799476,
            "unit": "iter/sec",
            "range": "stddev: 0.00002916986375023916",
            "extra": "mean: 10.88811791727258 usec\nrounds: 40486"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 89629.17975677113,
            "unit": "iter/sec",
            "range": "stddev: 0.00003399894892048266",
            "extra": "mean: 11.157080793484043 usec\nrounds: 34483"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 102940.82648542587,
            "unit": "iter/sec",
            "range": "stddev: 0.000007041673873686175",
            "extra": "mean: 9.714318741569244 usec\nrounds: 731"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 91409.34127663316,
            "unit": "iter/sec",
            "range": "stddev: 0.000019201682748636088",
            "extra": "mean: 10.939800966005086 usec\nrounds: 47620"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 95694.2055211985,
            "unit": "iter/sec",
            "range": "stddev: 0.000014507877373206558",
            "extra": "mean: 10.449953521778042 usec\nrounds: 45247"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 94325.91614533152,
            "unit": "iter/sec",
            "range": "stddev: 0.000020387054773184215",
            "extra": "mean: 10.601540285696903 usec\nrounds: 23867"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 104583.62644641077,
            "unit": "iter/sec",
            "range": "stddev: 0.00000614371356471613",
            "extra": "mean: 9.561726189638351 usec\nrounds: 1092"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 100533.02992918203,
            "unit": "iter/sec",
            "range": "stddev: 0.000011160532160912154",
            "extra": "mean: 9.94697962156741 usec\nrounds: 50249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 101087.24421942217,
            "unit": "iter/sec",
            "range": "stddev: 0.00001652392105175852",
            "extra": "mean: 9.892444963969721 usec\nrounds: 44053"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 112665.93252685461,
            "unit": "iter/sec",
            "range": "stddev: 0.000006513944999578642",
            "extra": "mean: 8.875797479967105 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 114866.70617771159,
            "unit": "iter/sec",
            "range": "stddev: 0.000006613615269235701",
            "extra": "mean: 8.705742797681415 usec\nrounds: 972"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 110844.1724128444,
            "unit": "iter/sec",
            "range": "stddev: 0.000015115079353369953",
            "extra": "mean: 9.021674105477123 usec\nrounds: 53189"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 102769.02331379264,
            "unit": "iter/sec",
            "range": "stddev: 0.00001233793562169554",
            "extra": "mean: 9.730558564779022 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 337560.2497262876,
            "unit": "iter/sec",
            "range": "stddev: 0.00003070903931383047",
            "extra": "mean: 2.962434116015896 usec\nrounds: 6003"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 13438.435631437127,
            "unit": "iter/sec",
            "range": "stddev: 0.000035697822134299516",
            "extra": "mean: 74.41342336459577 usec\nrounds: 8945"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 424903.04348975373,
            "unit": "iter/sec",
            "range": "stddev: 0.000005518248324469987",
            "extra": "mean: 2.353478082404261 usec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 13980.862253093333,
            "unit": "iter/sec",
            "range": "stddev: 0.00003386525195867136",
            "extra": "mean: 71.52634665138376 usec\nrounds: 6032"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 437366.79130012693,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051327490811389215",
            "extra": "mean: 2.286410445172063 usec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 13027.007875833851,
            "unit": "iter/sec",
            "range": "stddev: 0.00002369061187808536",
            "extra": "mean: 76.76359832829152 usec\nrounds: 239"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 14392.24865981249,
            "unit": "iter/sec",
            "range": "stddev: 0.000033303282208819094",
            "extra": "mean: 69.48184565434187 usec\nrounds: 11390"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 454590.6714675803,
            "unit": "iter/sec",
            "range": "stddev: 0.000004737421686360594",
            "extra": "mean: 2.1997811718653275 usec\nrounds: 84034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 14311.616138762172,
            "unit": "iter/sec",
            "range": "stddev: 0.00003947503923207128",
            "extra": "mean: 69.87331062433672 usec\nrounds: 5798"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 395835.7688187575,
            "unit": "iter/sec",
            "range": "stddev: 0.00000889358665940603",
            "extra": "mean: 2.5263002456401886 usec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 14652.439308662357,
            "unit": "iter/sec",
            "range": "stddev: 0.0000492450202536262",
            "extra": "mean: 68.24802198012253 usec\nrounds: 9372"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 428417.35296102124,
            "unit": "iter/sec",
            "range": "stddev: 0.000009769334701929643",
            "extra": "mean: 2.3341724911198525 usec\nrounds: 149254"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 429772.28247771383,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061238679550072394",
            "extra": "mean: 2.3268136191445894 usec\nrounds: 142858"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 14125.838466299834,
            "unit": "iter/sec",
            "range": "stddev: 0.000037221935760476296",
            "extra": "mean: 70.79225791698744 usec\nrounds: 5021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 424923.6231977608,
            "unit": "iter/sec",
            "range": "stddev: 0.000009776615856096691",
            "extra": "mean: 2.353364099822233 usec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 13975.26995196324,
            "unit": "iter/sec",
            "range": "stddev: 0.00003416694732032571",
            "extra": "mean: 71.55496841472606 usec\nrounds: 6712"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 433778.8744284219,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051072120798943205",
            "extra": "mean: 2.305322040677227 usec\nrounds: 147059"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 14308.32132080735,
            "unit": "iter/sec",
            "range": "stddev: 0.00005834279113965655",
            "extra": "mean: 69.88940055083798 usec\nrounds: 9804"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 14340.987890443177,
            "unit": "iter/sec",
            "range": "stddev: 0.00004533613953181659",
            "extra": "mean: 69.73020322166224 usec\nrounds: 9497"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 438144.5707777051,
            "unit": "iter/sec",
            "range": "stddev: 0.000005097363890611235",
            "extra": "mean: 2.2823516863965776 usec\nrounds: 156250"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 14928.638932085205,
            "unit": "iter/sec",
            "range": "stddev: 0.0000436123903314155",
            "extra": "mean: 66.985343040936 usec\nrounds: 8104"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 446463.72775554133,
            "unit": "iter/sec",
            "range": "stddev: 0.000005312971283177562",
            "extra": "mean: 2.2398236135042624 usec\nrounds: 158731"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 14207.79139922402,
            "unit": "iter/sec",
            "range": "stddev: 0.000022575147569440788",
            "extra": "mean: 70.38391625419109 usec\nrounds: 406"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 408271.2382014594,
            "unit": "iter/sec",
            "range": "stddev: 0.00000954342778682363",
            "extra": "mean: 2.4493520640965527 usec\nrounds: 153847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 439732.6212560397,
            "unit": "iter/sec",
            "range": "stddev: 0.000005460897947378521",
            "extra": "mean: 2.274109201049557 usec\nrounds: 135136"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 13912.27154129809,
            "unit": "iter/sec",
            "range": "stddev: 0.000052975041069733626",
            "extra": "mean: 71.87898805968062 usec\nrounds: 7370"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 457244.5404337072,
            "unit": "iter/sec",
            "range": "stddev: 0.000008051167845474095",
            "extra": "mean: 2.187013537770132 usec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 13676.72887766861,
            "unit": "iter/sec",
            "range": "stddev: 0.00005923951603581001",
            "extra": "mean: 73.11689870761435 usec\nrounds: 7118"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 459859.08986527374,
            "unit": "iter/sec",
            "range": "stddev: 0.000005515190278928362",
            "extra": "mean: 2.1745791744444434 usec\nrounds: 156250"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 13840.204154652529,
            "unit": "iter/sec",
            "range": "stddev: 0.00007854554056075936",
            "extra": "mean: 72.25326944789609 usec\nrounds: 9757"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 13748.428563404745,
            "unit": "iter/sec",
            "range": "stddev: 0.0000878625904787211",
            "extra": "mean: 72.73558540805 usec\nrounds: 10965"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 425688.65863859863,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054860588598475325",
            "extra": "mean: 2.349134701399176 usec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 14262.308230205177,
            "unit": "iter/sec",
            "range": "stddev: 0.00004518094301037371",
            "extra": "mean: 70.11487789067463 usec\nrounds: 6486"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 433786.88928486075,
            "unit": "iter/sec",
            "range": "stddev: 0.000007409184641753015",
            "extra": "mean: 2.3052794464318547 usec\nrounds: 153847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 13770.915219353015,
            "unit": "iter/sec",
            "range": "stddev: 0.0000638023252581663",
            "extra": "mean: 72.61681479199332 usec\nrounds: 9843"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 455597.5431167997,
            "unit": "iter/sec",
            "range": "stddev: 0.000004189197046102076",
            "extra": "mean: 2.1949196502660553 usec\nrounds: 158731"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 11662.868854252567,
            "unit": "iter/sec",
            "range": "stddev: 0.00003339222454251568",
            "extra": "mean: 85.74219709547496 usec\nrounds: 7093"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 9494.143649733516,
            "unit": "iter/sec",
            "range": "stddev: 0.0001895789283765057",
            "extra": "mean: 105.32808822921784 usec\nrounds: 4919"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 11345.998041387964,
            "unit": "iter/sec",
            "range": "stddev: 0.00003812506225711711",
            "extra": "mean: 88.13680351011848 usec\nrounds: 8204"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 9513.925948029224,
            "unit": "iter/sec",
            "range": "stddev: 0.00003770948171949585",
            "extra": "mean: 105.10907962313354 usec\nrounds: 7008"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 8463.838707119588,
            "unit": "iter/sec",
            "range": "stddev: 0.00005970206671060803",
            "extra": "mean: 118.1496995162281 usec\nrounds: 5571"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 6557.643920887282,
            "unit": "iter/sec",
            "range": "stddev: 0.00005964875696706213",
            "extra": "mean: 152.493793817444 usec\nrounds: 3914"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 8179.250870059695,
            "unit": "iter/sec",
            "range": "stddev: 0.00005411152035316934",
            "extra": "mean: 122.26058546027963 usec\nrounds: 6974"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 7045.27981190036,
            "unit": "iter/sec",
            "range": "stddev: 0.0000541178074665055",
            "extra": "mean: 141.93900408481645 usec\nrounds: 6610"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 158523.3303860575,
            "unit": "iter/sec",
            "range": "stddev: 0.000012653294498555598",
            "extra": "mean: 6.308219727434849 usec\nrounds: 33223"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 167586.97329619047,
            "unit": "iter/sec",
            "range": "stddev: 0.000014389350299753579",
            "extra": "mean: 5.967050900982717 usec\nrounds: 70922"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 130839.88443599053,
            "unit": "iter/sec",
            "range": "stddev: 0.00001300647235044337",
            "extra": "mean: 7.642929404215576 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 134102.7809391528,
            "unit": "iter/sec",
            "range": "stddev: 0.00001156757199699381",
            "extra": "mean: 7.456966909983287 usec\nrounds: 59172"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 30652.568609707378,
            "unit": "iter/sec",
            "range": "stddev: 0.000022281535443050662",
            "extra": "mean: 32.623693391989 usec\nrounds: 8020"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 31473.888933766364,
            "unit": "iter/sec",
            "range": "stddev: 0.00003277954752184316",
            "extra": "mean: 31.772368584778306 usec\nrounds: 14165"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 24447.56926621355,
            "unit": "iter/sec",
            "range": "stddev: 0.00004786468156222477",
            "extra": "mean: 40.903862020425734 usec\nrounds: 14205"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 25390.461833624733,
            "unit": "iter/sec",
            "range": "stddev: 0.000021112547992925682",
            "extra": "mean: 39.38486848142693 usec\nrounds: 12675"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 28485.775550774186,
            "unit": "iter/sec",
            "range": "stddev: 0.00002917777778629524",
            "extra": "mean: 35.105240445974864 usec\nrounds: 13737"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 29167.35189051238,
            "unit": "iter/sec",
            "range": "stddev: 0.00004269545519651786",
            "extra": "mean: 34.28490881701476 usec\nrounds: 14926"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 24813.984527574146,
            "unit": "iter/sec",
            "range": "stddev: 0.00005409869481290231",
            "extra": "mean: 40.29985586912758 usec\nrounds: 12225"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 26227.016195004027,
            "unit": "iter/sec",
            "range": "stddev: 0.000028974537983376425",
            "extra": "mean: 38.128622507599225 usec\nrounds: 14493"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 4126.981510747561,
            "unit": "iter/sec",
            "range": "stddev: 0.00008713975829048098",
            "extra": "mean: 242.30784591493364 usec\nrounds: 1285"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 2737.1879789951845,
            "unit": "iter/sec",
            "range": "stddev: 0.0002697905196384604",
            "extra": "mean: 365.33844502966787 usec\nrounds: 1519"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 2669.407953441876,
            "unit": "iter/sec",
            "range": "stddev: 0.00008890947722594333",
            "extra": "mean: 374.614902420824 usec\nrounds: 1322"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 4139.181611237662,
            "unit": "iter/sec",
            "range": "stddev: 0.00006935937474425072",
            "extra": "mean: 241.59365157717463 usec\nrounds: 1458"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 96.38222683195504,
            "unit": "iter/sec",
            "range": "stddev: 0.014112582686891507",
            "extra": "mean: 10.375356877191958 msec\nrounds: 57"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 96.75579851923602,
            "unit": "iter/sec",
            "range": "stddev: 0.013120882596214073",
            "extra": "mean: 10.335297887094487 msec\nrounds: 62"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 94.6860027167727,
            "unit": "iter/sec",
            "range": "stddev: 0.014400317996444041",
            "extra": "mean: 10.561223109092762 msec\nrounds: 55"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 104.10965116560419,
            "unit": "iter/sec",
            "range": "stddev: 0.011922882789775605",
            "extra": "mean: 9.605257426223906 msec\nrounds: 61"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 4065.280159502158,
            "unit": "iter/sec",
            "range": "stddev: 0.0000886716121464946",
            "extra": "mean: 245.98550672150031 usec\nrounds: 1711"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 2658.8010383459205,
            "unit": "iter/sec",
            "range": "stddev: 0.00013199256224333974",
            "extra": "mean: 376.10937621045724 usec\nrounds: 1135"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 2697.3848084426586,
            "unit": "iter/sec",
            "range": "stddev: 0.00008693635471514675",
            "extra": "mean: 370.72945501511606 usec\nrounds: 1545"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 3723.889913469398,
            "unit": "iter/sec",
            "range": "stddev: 0.000336353219450719",
            "extra": "mean: 268.53640232032006 usec\nrounds: 517"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 123.50409082605181,
            "unit": "iter/sec",
            "range": "stddev: 0.0006540805292564814",
            "extra": "mean: 8.096897789470315 msec\nrounds: 57"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 130.77012458881725,
            "unit": "iter/sec",
            "range": "stddev: 0.0002685236653883817",
            "extra": "mean: 7.647006555544067 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 118.19518228810296,
            "unit": "iter/sec",
            "range": "stddev: 0.0011899566853176093",
            "extra": "mean: 8.460581731347403 msec\nrounds: 67"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 107.78068700224334,
            "unit": "iter/sec",
            "range": "stddev: 0.011744162823496298",
            "extra": "mean: 9.278100073524175 msec\nrounds: 68"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 66551.67726912664,
            "unit": "iter/sec",
            "range": "stddev: 0.000024614329938420316",
            "extra": "mean: 15.025917317697724 usec\nrounds: 30212"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 65666.98564292966,
            "unit": "iter/sec",
            "range": "stddev: 0.000024329284107885598",
            "extra": "mean: 15.228352424117546 usec\nrounds: 28653"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 64631.90171386554,
            "unit": "iter/sec",
            "range": "stddev: 0.000016081680431993858",
            "extra": "mean: 15.47223543610305 usec\nrounds: 29851"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 68108.94789254385,
            "unit": "iter/sec",
            "range": "stddev: 0.00001736793180990068",
            "extra": "mean: 14.682358646586493 usec\nrounds: 33671"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 51924.18169094471,
            "unit": "iter/sec",
            "range": "stddev: 0.000017449949483830486",
            "extra": "mean: 19.258849488510947 usec\nrounds: 27473"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 48613.46764996267,
            "unit": "iter/sec",
            "range": "stddev: 0.00000883399905167088",
            "extra": "mean: 20.57043137100235 usec\nrounds: 27248"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 48902.83297397281,
            "unit": "iter/sec",
            "range": "stddev: 0.00002118322330816977",
            "extra": "mean: 20.448713074193936 usec\nrounds: 25707"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 50561.81868913309,
            "unit": "iter/sec",
            "range": "stddev: 0.000027399447880576274",
            "extra": "mean: 19.777769588318293 usec\nrounds: 28410"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 48006.957910329,
            "unit": "iter/sec",
            "range": "stddev: 0.00002222912694555824",
            "extra": "mean: 20.830313844669664 usec\nrounds: 16129"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 48473.2274943765,
            "unit": "iter/sec",
            "range": "stddev: 0.000023728755552245748",
            "extra": "mean: 20.62994464554712 usec\nrounds: 17668"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 50384.073157366816,
            "unit": "iter/sec",
            "range": "stddev: 0.000019434711499236752",
            "extra": "mean: 19.84754183880004 usec\nrounds: 16695"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 48679.82823966937,
            "unit": "iter/sec",
            "range": "stddev: 0.000027033803146728536",
            "extra": "mean: 20.5423896542243 usec\nrounds: 15601"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 42877.33957114157,
            "unit": "iter/sec",
            "range": "stddev: 0.000022715957868938147",
            "extra": "mean: 23.32234252409275 usec\nrounds: 20492"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 43263.661672442395,
            "unit": "iter/sec",
            "range": "stddev: 0.00001630493654545664",
            "extra": "mean: 23.114086079241158 usec\nrounds: 20121"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 43132.75310704977,
            "unit": "iter/sec",
            "range": "stddev: 0.00002221820390077372",
            "extra": "mean: 23.184237684020136 usec\nrounds: 15975"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 45196.13845538754,
            "unit": "iter/sec",
            "range": "stddev: 0.00001821433617304511",
            "extra": "mean: 22.12578406420906 usec\nrounds: 21599"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 83166.14999459627,
            "unit": "iter/sec",
            "range": "stddev: 0.000013095543686980266",
            "extra": "mean: 12.024122795932902 usec\nrounds: 11002"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 8422.970135793403,
            "unit": "iter/sec",
            "range": "stddev: 0.00006341316646198312",
            "extra": "mean: 118.72296635013592 usec\nrounds: 2318"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 8453.07365614599,
            "unit": "iter/sec",
            "range": "stddev: 0.00007232645464441913",
            "extra": "mean: 118.30016402056644 usec\nrounds: 5859"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 81472.97932959435,
            "unit": "iter/sec",
            "range": "stddev: 0.000014543898751788142",
            "extra": "mean: 12.274007999076067 usec\nrounds: 24753"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 71332.70091055553,
            "unit": "iter/sec",
            "range": "stddev: 0.000014862997958767638",
            "extra": "mean: 14.018815875959968 usec\nrounds: 26178"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 7433.541544445208,
            "unit": "iter/sec",
            "range": "stddev: 0.00008495703120620073",
            "extra": "mean: 134.52537986382285 usec\nrounds: 3983"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 7473.070173447979,
            "unit": "iter/sec",
            "range": "stddev: 0.000058503136673933095",
            "extra": "mean: 133.81381102950527 usec\nrounds: 4080"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 73561.73658490319,
            "unit": "iter/sec",
            "range": "stddev: 0.000013317978013969056",
            "extra": "mean: 13.594023828486215 usec\nrounds: 23753"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 376768.73689262936,
            "unit": "iter/sec",
            "range": "stddev: 0.000016658626844282544",
            "extra": "mean: 2.654148027905451 usec\nrounds: 72993"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 7969.0760841002775,
            "unit": "iter/sec",
            "range": "stddev: 0.000057056688288993526",
            "extra": "mean: 125.48506118484397 usec\nrounds: 1046"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 8820.522935500594,
            "unit": "iter/sec",
            "range": "stddev: 0.00004118263262594066",
            "extra": "mean: 113.37196301312567 usec\nrounds: 1514"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 368290.59537418914,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073469327792202255",
            "extra": "mean: 2.7152471786144416 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 283650.2552095011,
            "unit": "iter/sec",
            "range": "stddev: 0.000021485563308459118",
            "extra": "mean: 3.525468359834228 usec\nrounds: 90091"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 7406.3066752716195,
            "unit": "iter/sec",
            "range": "stddev: 0.000012550362820624464",
            "extra": "mean: 135.02006382463574 usec\nrounds: 47"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 7210.236258811145,
            "unit": "iter/sec",
            "range": "stddev: 0.000022508369777125158",
            "extra": "mean: 138.69171052168608 usec\nrounds: 76"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 274856.5681125283,
            "unit": "iter/sec",
            "range": "stddev: 0.000014969996799747514",
            "extra": "mean: 3.638261246100521 usec\nrounds: 81295"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 33753.98692446307,
            "unit": "iter/sec",
            "range": "stddev: 0.000017899033025576844",
            "extra": "mean: 29.62612986246238 usec\nrounds: 10257"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 9294.149729797888,
            "unit": "iter/sec",
            "range": "stddev: 0.000053625449479017105",
            "extra": "mean: 107.59456529884699 usec\nrounds: 5314"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 8378.370285278885,
            "unit": "iter/sec",
            "range": "stddev: 0.0001292414793733996",
            "extra": "mean: 119.35495400066502 usec\nrounds: 5761"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 29680.456174496037,
            "unit": "iter/sec",
            "range": "stddev: 0.000027027273294586113",
            "extra": "mean: 33.69220453084831 usec\nrounds: 12316"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 22773.061056629,
            "unit": "iter/sec",
            "range": "stddev: 0.000027412963205573455",
            "extra": "mean: 43.91153202959118 usec\nrounds: 12020"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 7253.0938619082535,
            "unit": "iter/sec",
            "range": "stddev: 0.000040781699490057315",
            "extra": "mean: 137.87219895937 usec\nrounds: 3267"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 6992.976578500758,
            "unit": "iter/sec",
            "range": "stddev: 0.0001314546783236305",
            "extra": "mean: 143.00062194894304 usec\nrounds: 5203"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 23803.31107598707,
            "unit": "iter/sec",
            "range": "stddev: 0.000028940348231866392",
            "extra": "mean: 42.01096212235811 usec\nrounds: 8765"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 30647.599711058752,
            "unit": "iter/sec",
            "range": "stddev: 0.000027411395877979878",
            "extra": "mean: 32.62898267491938 usec\nrounds: 14026"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 9039.87354277634,
            "unit": "iter/sec",
            "range": "stddev: 0.00006650559780207267",
            "extra": "mean: 110.62101646312172 usec\nrounds: 5163"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 9224.968145660732,
            "unit": "iter/sec",
            "range": "stddev: 0.00012657799036450327",
            "extra": "mean: 108.40145832594371 usec\nrounds: 5483"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 32708.265167774327,
            "unit": "iter/sec",
            "range": "stddev: 0.00004061027290803139",
            "extra": "mean: 30.573312123727234 usec\nrounds: 16612"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 24085.45107498069,
            "unit": "iter/sec",
            "range": "stddev: 0.000028439287063864074",
            "extra": "mean: 41.518840435534656 usec\nrounds: 14245"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 7322.192737754317,
            "unit": "iter/sec",
            "range": "stddev: 0.000042544005327720285",
            "extra": "mean: 136.5711113890585 usec\nrounds: 4794"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 7020.536147427448,
            "unit": "iter/sec",
            "range": "stddev: 0.00014966260581072106",
            "extra": "mean: 142.43926375429783 usec\nrounds: 5471"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 20473.84019065535,
            "unit": "iter/sec",
            "range": "stddev: 0.00005447348246416296",
            "extra": "mean: 48.84281554841964 usec\nrounds: 13532"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 23006.59164394829,
            "unit": "iter/sec",
            "range": "stddev: 0.00003082596415800975",
            "extra": "mean: 43.46580386508675 usec\nrounds: 9417"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 22873.654303856554,
            "unit": "iter/sec",
            "range": "stddev: 0.00003764749270558379",
            "extra": "mean: 43.71841887246663 usec\nrounds: 12240"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 21864.788853573005,
            "unit": "iter/sec",
            "range": "stddev: 0.0000759073267958235",
            "extra": "mean: 45.73563489210582 usec\nrounds: 13281"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 23101.052837106894,
            "unit": "iter/sec",
            "range": "stddev: 0.000034141454470021075",
            "extra": "mean: 43.28807033390765 usec\nrounds: 12469"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 18590.099709222715,
            "unit": "iter/sec",
            "range": "stddev: 0.000055832729030448555",
            "extra": "mean: 53.79207296579969 usec\nrounds: 10594"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 19052.299664924813,
            "unit": "iter/sec",
            "range": "stddev: 0.000038291767817843326",
            "extra": "mean: 52.48710221795403 usec\nrounds: 9108"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 19146.638153943673,
            "unit": "iter/sec",
            "range": "stddev: 0.000025899648042230017",
            "extra": "mean: 52.22849003358994 usec\nrounds: 10385"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 20259.26036593643,
            "unit": "iter/sec",
            "range": "stddev: 0.00001955346083568625",
            "extra": "mean: 49.360143555950486 usec\nrounds: 10428"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys0]",
            "value": 25184.158238171753,
            "unit": "iter/sec",
            "range": "stddev: 0.00001910154063776116",
            "extra": "mean: 39.7075014595602 usec\nrounds: 12675"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys1]",
            "value": 23359.409911698243,
            "unit": "iter/sec",
            "range": "stddev: 0.00003003593732145155",
            "extra": "mean: 42.80930056795683 usec\nrounds: 11262"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys2]",
            "value": 23291.04616750945,
            "unit": "iter/sec",
            "range": "stddev: 0.000040417536942829096",
            "extra": "mean: 42.93495417973024 usec\nrounds: 11807"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys3]",
            "value": 23338.6103479194,
            "unit": "iter/sec",
            "range": "stddev: 0.00002849420885729418",
            "extra": "mean: 42.84745257290559 usec\nrounds: 12166"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys4]",
            "value": 20162.518714759983,
            "unit": "iter/sec",
            "range": "stddev: 0.00003073265554609189",
            "extra": "mean: 49.59697814281255 usec\nrounds: 8098"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys5]",
            "value": 19851.280440086375,
            "unit": "iter/sec",
            "range": "stddev: 0.00003679294862237995",
            "extra": "mean: 50.37458430039936 usec\nrounds: 11287"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys6]",
            "value": 19195.36188070549,
            "unit": "iter/sec",
            "range": "stddev: 0.00004477191916186445",
            "extra": "mean: 52.09591807722912 usec\nrounds: 12756"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[true_divide-keys7]",
            "value": 19962.401579097623,
            "unit": "iter/sec",
            "range": "stddev: 0.000034479366210859014",
            "extra": "mean: 50.09417309023016 usec\nrounds: 11468"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 43892.31328729327,
            "unit": "iter/sec",
            "range": "stddev: 0.00003380418896836783",
            "extra": "mean: 22.78303249716159 usec\nrounds: 11724"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 10049.492965548905,
            "unit": "iter/sec",
            "range": "stddev: 0.00005248867431629082",
            "extra": "mean: 99.50750783429001 usec\nrounds: 5744"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 9727.233932042502,
            "unit": "iter/sec",
            "range": "stddev: 0.000051189666323478057",
            "extra": "mean: 102.80414833099654 usec\nrounds: 6290"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 43857.121799251385,
            "unit": "iter/sec",
            "range": "stddev: 0.000020556829741605537",
            "extra": "mean: 22.801313879586814 usec\nrounds: 15267"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 40280.13717481204,
            "unit": "iter/sec",
            "range": "stddev: 0.00004473927011577213",
            "extra": "mean: 24.826131938431423 usec\nrounds: 15674"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 8342.577688436044,
            "unit": "iter/sec",
            "range": "stddev: 0.00005252836637218646",
            "extra": "mean: 119.86702879448603 usec\nrounds: 4758"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 8142.1272331441305,
            "unit": "iter/sec",
            "range": "stddev: 0.00003667473335167101",
            "extra": "mean: 122.81802671042813 usec\nrounds: 5728"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 41110.61779568003,
            "unit": "iter/sec",
            "range": "stddev: 0.00004510790805105628",
            "extra": "mean: 24.32461620912643 usec\nrounds: 16892"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 41575.48634790392,
            "unit": "iter/sec",
            "range": "stddev: 0.000023269317081477235",
            "extra": "mean: 24.05263504633461 usec\nrounds: 17668"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 10009.581793727963,
            "unit": "iter/sec",
            "range": "stddev: 0.000055258893819028494",
            "extra": "mean: 99.90427378560445 usec\nrounds: 5581"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 10057.301660644094,
            "unit": "iter/sec",
            "range": "stddev: 0.00004340313789058722",
            "extra": "mean: 99.43024816618234 usec\nrounds: 4771"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 45127.15229507217,
            "unit": "iter/sec",
            "range": "stddev: 0.000016264915728852022",
            "extra": "mean: 22.15960788886736 usec\nrounds: 18051"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 38713.58056170956,
            "unit": "iter/sec",
            "range": "stddev: 0.00002475378066318418",
            "extra": "mean: 25.83072879053378 usec\nrounds: 14557"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 8429.077189598594,
            "unit": "iter/sec",
            "range": "stddev: 0.00007426384319494143",
            "extra": "mean: 118.63694892176227 usec\nrounds: 5423"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 8621.94989730742,
            "unit": "iter/sec",
            "range": "stddev: 0.000055596767922290956",
            "extra": "mean: 115.98304466050001 usec\nrounds: 7210"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 41340.060873368166,
            "unit": "iter/sec",
            "range": "stddev: 0.0000357973877422294",
            "extra": "mean: 24.1896112118261 usec\nrounds: 12166"
          }
        ]
      }
    ]
  }
}