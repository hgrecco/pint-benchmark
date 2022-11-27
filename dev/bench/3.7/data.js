window.BENCHMARK_DATA = {
  "lastUpdate": 1669518323667,
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
      }
    ]
  }
}