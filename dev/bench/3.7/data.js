window.BENCHMARK_DATA = {
  "lastUpdate": 1669515418395,
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
      }
    ]
  }
}