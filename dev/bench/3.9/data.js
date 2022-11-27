window.BENCHMARK_DATA = {
  "lastUpdate": 1669514919928,
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
        "date": 1669514919241,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 32.267133595262784,
            "unit": "iter/sec",
            "range": "stddev: 0.0005455920984594057",
            "extra": "mean: 30.99128706451981 msec\nrounds: 31"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 1592232.4788870038,
            "unit": "iter/sec",
            "range": "stddev: 1.3460758237263468e-7",
            "extra": "mean: 628.0489898679972 nsec\nrounds: 70423"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 1928.6675947641377,
            "unit": "iter/sec",
            "range": "stddev: 0.000011081739655095232",
            "extra": "mean: 518.4926644253039 usec\nrounds: 149"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 16068.200284550292,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021764236616335423",
            "extra": "mean: 62.23472338476565 usec\nrounds: 12136"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 16062.44748386442,
            "unit": "iter/sec",
            "range": "stddev: 0.0000047068730898014896",
            "extra": "mean: 62.25701288701818 usec\nrounds: 6208"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 16093.512763181398,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022176940730880905",
            "extra": "mean: 62.13683828478961 usec\nrounds: 12454"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 15974.79933907486,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022415806586772018",
            "extra": "mean: 62.598595373524894 usec\nrounds: 11628"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 16057.953848142182,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016495585372107972",
            "extra": "mean: 62.27443480388969 usec\nrounds: 12240"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 15612.627304091331,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017187995043436847",
            "extra": "mean: 64.0507187241924 usec\nrounds: 12166"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 15649.058656712985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018424536373689938",
            "extra": "mean: 63.90160724274808 usec\nrounds: 12122"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 15645.273415250218,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018172088588180099",
            "extra": "mean: 63.91706769568186 usec\nrounds: 12438"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 15606.891956073212,
            "unit": "iter/sec",
            "range": "stddev: 0.000001791660594184543",
            "extra": "mean: 64.0742566050035 usec\nrounds: 12377"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 15477.120887969162,
            "unit": "iter/sec",
            "range": "stddev: 0.00003738675754370457",
            "extra": "mean: 64.61150024209803 usec\nrounds: 12392"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 14890.056359981538,
            "unit": "iter/sec",
            "range": "stddev: 0.000007220796812233681",
            "extra": "mean: 67.1589130238349 usec\nrounds: 13176"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 14998.271911298343,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019586321555134536",
            "extra": "mean: 66.67434794582503 usec\nrounds: 13459"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 14935.034314131759,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018010241402571671",
            "extra": "mean: 66.95665901843859 usec\nrounds: 13423"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 13970655.013128148,
            "unit": "iter/sec",
            "range": "stddev: 3.2439943927722044e-9",
            "extra": "mean: 71.57860523075936 nsec\nrounds: 129871"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 13291075.590425592,
            "unit": "iter/sec",
            "range": "stddev: 6.00826480316316e-9",
            "extra": "mean: 75.2384555482991 nsec\nrounds: 133316"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 12112522.020282768,
            "unit": "iter/sec",
            "range": "stddev: 6.3850120733128716e-9",
            "extra": "mean: 82.55918943426938 nsec\nrounds: 121952"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 14129408.738420712,
            "unit": "iter/sec",
            "range": "stddev: 3.0523923003074336e-9",
            "extra": "mean: 70.77436986313496 nsec\nrounds: 142858"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 14048810.158980165,
            "unit": "iter/sec",
            "range": "stddev: 3.433504646850988e-9",
            "extra": "mean: 71.18040522178359 nsec\nrounds: 135136"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 13826697.219693854,
            "unit": "iter/sec",
            "range": "stddev: 3.3967170026358322e-9",
            "extra": "mean: 72.32385175657879 nsec\nrounds: 133334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 62728.04925436195,
            "unit": "iter/sec",
            "range": "stddev: 6.349693397122355e-7",
            "extra": "mean: 15.941831634919884 usec\nrounds: 12954"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 4822.444793374094,
            "unit": "iter/sec",
            "range": "stddev: 0.000003573840672211377",
            "extra": "mean: 207.36370095391706 usec\nrounds: 3354"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 63500.5517436594,
            "unit": "iter/sec",
            "range": "stddev: 6.052255605789241e-7",
            "extra": "mean: 15.747894664550707 usec\nrounds: 21740"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 4844.770348046098,
            "unit": "iter/sec",
            "range": "stddev: 0.000004359343572349887",
            "extra": "mean: 206.4081325141245 usec\nrounds: 3826"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 63026.4609904632,
            "unit": "iter/sec",
            "range": "stddev: 6.714580053643619e-7",
            "extra": "mean: 15.866351755833385 usec\nrounds: 22780"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 4812.493010739379,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035924066880674207",
            "extra": "mean: 207.79250957215677 usec\nrounds: 3291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 4801.185206911914,
            "unit": "iter/sec",
            "range": "stddev: 0.00000983960268264779",
            "extra": "mean: 208.28190475976086 usec\nrounds: 105"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 74874.19199048742,
            "unit": "iter/sec",
            "range": "stddev: 5.946442946495091e-7",
            "extra": "mean: 13.355736782135123 usec\nrounds: 26385"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 4842.224160319428,
            "unit": "iter/sec",
            "range": "stddev: 0.000004409978032647311",
            "extra": "mean: 206.51666814491975 usec\nrounds: 3607"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 74232.35745344698,
            "unit": "iter/sec",
            "range": "stddev: 5.709976137033369e-7",
            "extra": "mean: 13.471214363993836 usec\nrounds: 26455"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 4807.52192195771,
            "unit": "iter/sec",
            "range": "stddev: 0.000003942916922241367",
            "extra": "mean: 208.00737182968098 usec\nrounds: 3273"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 74094.84280434066,
            "unit": "iter/sec",
            "range": "stddev: 5.685406562112153e-7",
            "extra": "mean: 13.496215959869984 usec\nrounds: 26667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 63030.411284182024,
            "unit": "iter/sec",
            "range": "stddev: 6.246879852695667e-7",
            "extra": "mean: 15.865357366801094 usec\nrounds: 21692"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 4843.678463535207,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036457336183938075",
            "extra": "mean: 206.4546619946651 usec\nrounds: 3710"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 62585.45753935665,
            "unit": "iter/sec",
            "range": "stddev: 8.037779483633514e-7",
            "extra": "mean: 15.978152742131085 usec\nrounds: 20001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 4821.470795304359,
            "unit": "iter/sec",
            "range": "stddev: 0.000004037189289085957",
            "extra": "mean: 207.40559104369194 usec\nrounds: 3707"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 62539.24907049166,
            "unit": "iter/sec",
            "range": "stddev: 7.057300932063114e-7",
            "extra": "mean: 15.989958543839265 usec\nrounds: 22988"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 4818.617108610397,
            "unit": "iter/sec",
            "range": "stddev: 0.000006084241586521603",
            "extra": "mean: 207.52842100964983 usec\nrounds: 3646"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 4850.938867210488,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036342074073773707",
            "extra": "mean: 206.1456611542594 usec\nrounds: 3689"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 74354.17161762649,
            "unit": "iter/sec",
            "range": "stddev: 5.173889991679607e-7",
            "extra": "mean: 13.449144523357702 usec\nrounds: 25975"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 4803.987670101775,
            "unit": "iter/sec",
            "range": "stddev: 0.000003679461369086865",
            "extra": "mean: 208.16040104008314 usec\nrounds: 3653"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 73796.62415465174,
            "unit": "iter/sec",
            "range": "stddev: 6.996903956763605e-7",
            "extra": "mean: 13.550755355751127 usec\nrounds: 25907"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 4796.7067786743455,
            "unit": "iter/sec",
            "range": "stddev: 0.000003772218656817772",
            "extra": "mean: 208.4763664199561 usec\nrounds: 3657"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 73787.60219012217,
            "unit": "iter/sec",
            "range": "stddev: 6.343072184244986e-7",
            "extra": "mean: 13.55241219823604 usec\nrounds: 24692"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 62594.81780604904,
            "unit": "iter/sec",
            "range": "stddev: 6.638752531484163e-7",
            "extra": "mean: 15.975763410615151 usec\nrounds: 21979"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 4829.749036006687,
            "unit": "iter/sec",
            "range": "stddev: 0.000003894275087178356",
            "extra": "mean: 207.05009567677575 usec\nrounds: 3585"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 62555.64833695202,
            "unit": "iter/sec",
            "range": "stddev: 7.864414202928836e-7",
            "extra": "mean: 15.985766698693036 usec\nrounds: 22936"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 4816.723902460806,
            "unit": "iter/sec",
            "range": "stddev: 0.000003604023820180641",
            "extra": "mean: 207.60998974616587 usec\nrounds: 3706"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 61950.84255399467,
            "unit": "iter/sec",
            "range": "stddev: 7.437053837743073e-7",
            "extra": "mean: 16.141830502602563 usec\nrounds: 22372"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 4815.227895738539,
            "unit": "iter/sec",
            "range": "stddev: 0.000003496834673335088",
            "extra": "mean: 207.6744905230751 usec\nrounds: 3535"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 4817.726883764663,
            "unit": "iter/sec",
            "range": "stddev: 0.000004283852112312176",
            "extra": "mean: 207.5667683383872 usec\nrounds: 259"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 73577.80726419967,
            "unit": "iter/sec",
            "range": "stddev: 7.17363413344739e-7",
            "extra": "mean: 13.591054656049316 usec\nrounds: 23529"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 4799.791420962011,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037825277470525154",
            "extra": "mean: 208.3423866363702 usec\nrounds: 3577"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 73749.52656397746,
            "unit": "iter/sec",
            "range": "stddev: 6.675186554154078e-7",
            "extra": "mean: 13.55940907813833 usec\nrounds: 25511"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 4809.66408181206,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036837579670302673",
            "extra": "mean: 207.91472813694838 usec\nrounds: 3682"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 73516.44852820002,
            "unit": "iter/sec",
            "range": "stddev: 6.471980939355102e-7",
            "extra": "mean: 13.602398103009724 usec\nrounds: 25511"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 61929.519299706975,
            "unit": "iter/sec",
            "range": "stddev: 6.076792916390648e-7",
            "extra": "mean: 16.14738837484779 usec\nrounds: 21505"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 4810.66678118887,
            "unit": "iter/sec",
            "range": "stddev: 0.000004329687708231899",
            "extra": "mean: 207.87139194722354 usec\nrounds: 3651"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 61786.21738665287,
            "unit": "iter/sec",
            "range": "stddev: 5.544592779728864e-7",
            "extra": "mean: 16.18483931039321 usec\nrounds: 22727"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 4826.542210787849,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036294055714827253",
            "extra": "mean: 207.18766278784233 usec\nrounds: 3695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 61947.76179805576,
            "unit": "iter/sec",
            "range": "stddev: 7.700972401519945e-7",
            "extra": "mean: 16.142633260260666 usec\nrounds: 21882"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 4807.304600989775,
            "unit": "iter/sec",
            "range": "stddev: 0.000003520583016179103",
            "extra": "mean: 208.0167750955723 usec\nrounds: 3686"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 4822.286198520321,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037216247846492992",
            "extra": "mean: 207.37052071004038 usec\nrounds: 3887"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 74076.88497490255,
            "unit": "iter/sec",
            "range": "stddev: 5.486640395744931e-7",
            "extra": "mean: 13.499487732763098 usec\nrounds: 26738"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 4835.446453146565,
            "unit": "iter/sec",
            "range": "stddev: 0.000003533608695693691",
            "extra": "mean: 206.80613665968139 usec\nrounds: 3688"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 72938.90281248715,
            "unit": "iter/sec",
            "range": "stddev: 5.443174407730738e-7",
            "extra": "mean: 13.710104778664146 usec\nrounds: 26179"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 4811.292826952844,
            "unit": "iter/sec",
            "range": "stddev: 0.000004054028089311116",
            "extra": "mean: 207.84434370695624 usec\nrounds: 3663"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 73386.03499856246,
            "unit": "iter/sec",
            "range": "stddev: 6.176706271165992e-7",
            "extra": "mean: 13.626570777663472 usec\nrounds: 26110"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 61875.260832054206,
            "unit": "iter/sec",
            "range": "stddev: 8.892347947456427e-7",
            "extra": "mean: 16.161548033134984 usec\nrounds: 21787"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 4815.7681729183005,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035152633735526852",
            "extra": "mean: 207.65119168807732 usec\nrounds: 3537"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 61787.44711712278,
            "unit": "iter/sec",
            "range": "stddev: 6.175758965473427e-7",
            "extra": "mean: 16.184517190108608 usec\nrounds: 22222"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 4812.501707089996,
            "unit": "iter/sec",
            "range": "stddev: 0.000003569968364978001",
            "extra": "mean: 207.79213408418215 usec\nrounds: 3729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 62260.174994633046,
            "unit": "iter/sec",
            "range": "stddev: 7.174850754156125e-7",
            "extra": "mean: 16.061631694517434 usec\nrounds: 22780"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 4792.392979187306,
            "unit": "iter/sec",
            "range": "stddev: 0.00005853571782025059",
            "extra": "mean: 208.66402324326498 usec\nrounds: 3657"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 4841.833849686022,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035017769837225218",
            "extra": "mean: 206.53331589741495 usec\nrounds: 3881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 72216.28148942711,
            "unit": "iter/sec",
            "range": "stddev: 6.216207242632629e-7",
            "extra": "mean: 13.847292873233936 usec\nrounds: 26042"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 4819.0679094333755,
            "unit": "iter/sec",
            "range": "stddev: 0.000005724641914736211",
            "extra": "mean: 207.50900771547327 usec\nrounds: 3629"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 74129.35647012119,
            "unit": "iter/sec",
            "range": "stddev: 4.931507403892267e-7",
            "extra": "mean: 13.489932296971487 usec\nrounds: 26247"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 4825.405207404321,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042773278605268074",
            "extra": "mean: 207.2364821229012 usec\nrounds: 3580"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 73746.08878719126,
            "unit": "iter/sec",
            "range": "stddev: 6.234184002577299e-7",
            "extra": "mean: 13.560041168904501 usec\nrounds: 26525"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 61960.41471725612,
            "unit": "iter/sec",
            "range": "stddev: 7.24197327347559e-7",
            "extra": "mean: 16.139336777574822 usec\nrounds: 21097"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 4826.940896418903,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036319015822985706",
            "extra": "mean: 207.1705499319243 usec\nrounds: 3695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 61737.79398579274,
            "unit": "iter/sec",
            "range": "stddev: 7.152964249422192e-7",
            "extra": "mean: 16.197533721890395 usec\nrounds: 21277"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 4758.341864052403,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037436603933604727",
            "extra": "mean: 210.1572414446822 usec\nrounds: 3653"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 61395.163822308416,
            "unit": "iter/sec",
            "range": "stddev: 6.770175377184624e-7",
            "extra": "mean: 16.287927871553983 usec\nrounds: 21739"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 4783.757792281852,
            "unit": "iter/sec",
            "range": "stddev: 0.000004558633779304704",
            "extra": "mean: 209.04068379327376 usec\nrounds: 3659"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 4801.225955826675,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037104770520479493",
            "extra": "mean: 208.28013703175526 usec\nrounds: 3875"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 73110.2214079308,
            "unit": "iter/sec",
            "range": "stddev: 6.385720917041701e-7",
            "extra": "mean: 13.677978000098392 usec\nrounds: 25000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 4806.983769049258,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043568203118184134",
            "extra": "mean: 208.0306587342157 usec\nrounds: 3572"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 73070.27464252603,
            "unit": "iter/sec",
            "range": "stddev: 5.877687947794041e-7",
            "extra": "mean: 13.685455609578508 usec\nrounds: 25974"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 4823.713523966498,
            "unit": "iter/sec",
            "range": "stddev: 0.000003738130636073849",
            "extra": "mean: 207.3091602624255 usec\nrounds: 3669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 73660.1149547747,
            "unit": "iter/sec",
            "range": "stddev: 6.211894825013982e-7",
            "extra": "mean: 13.575868034063927 usec\nrounds: 25446"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 208834.3905310698,
            "unit": "iter/sec",
            "range": "stddev: 2.632408608217776e-7",
            "extra": "mean: 4.788483340588593 usec\nrounds: 94331"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 206621.46516399618,
            "unit": "iter/sec",
            "range": "stddev: 2.89349594860747e-7",
            "extra": "mean: 4.839768216754714 usec\nrounds: 89286"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 209933.28940463043,
            "unit": "iter/sec",
            "range": "stddev: 3.822039208088829e-7",
            "extra": "mean: 4.763417954513046 usec\nrounds: 96154"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 208204.64486493068,
            "unit": "iter/sec",
            "range": "stddev: 2.7843006471693955e-7",
            "extra": "mean: 4.802966814927369 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 207801.58652994843,
            "unit": "iter/sec",
            "range": "stddev: 3.8728169427849545e-7",
            "extra": "mean: 4.8122827967720045 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 206544.53078310555,
            "unit": "iter/sec",
            "range": "stddev: 3.991768682571219e-7",
            "extra": "mean: 4.841570949414826 usec\nrounds: 78126"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 207011.79359446463,
            "unit": "iter/sec",
            "range": "stddev: 3.5009483402446257e-7",
            "extra": "mean: 4.830642653910803 usec\nrounds: 89286"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 208011.51582115088,
            "unit": "iter/sec",
            "range": "stddev: 3.483837284209965e-7",
            "extra": "mean: 4.807426146828352 usec\nrounds: 90910"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 207433.09920996794,
            "unit": "iter/sec",
            "range": "stddev: 2.644746147341777e-7",
            "extra": "mean: 4.820831409300692 usec\nrounds: 45044"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 211194.27670840253,
            "unit": "iter/sec",
            "range": "stddev: 3.7590521189757956e-7",
            "extra": "mean: 4.734976797599053 usec\nrounds: 96154"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 206314.07576714238,
            "unit": "iter/sec",
            "range": "stddev: 3.719985989193654e-7",
            "extra": "mean: 4.8469790356362115 usec\nrounds: 86957"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 206266.4708943663,
            "unit": "iter/sec",
            "range": "stddev: 3.8675628397862345e-7",
            "extra": "mean: 4.848097684824998 usec\nrounds: 91744"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 208987.165938692,
            "unit": "iter/sec",
            "range": "stddev: 4.129479832145882e-7",
            "extra": "mean: 4.784982826617008 usec\nrounds: 90082"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 207835.64063821587,
            "unit": "iter/sec",
            "range": "stddev: 3.3735751575927386e-7",
            "extra": "mean: 4.811494298712328 usec\nrounds: 86207"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 207913.40280463253,
            "unit": "iter/sec",
            "range": "stddev: 3.053505413879348e-7",
            "extra": "mean: 4.80969474074578 usec\nrounds: 97088"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 208193.78449943513,
            "unit": "iter/sec",
            "range": "stddev: 2.9634288519928584e-7",
            "extra": "mean: 4.803217360231584 usec\nrounds: 86957"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 209303.4111589153,
            "unit": "iter/sec",
            "range": "stddev: 3.8653858532082153e-7",
            "extra": "mean: 4.777752997254029 usec\nrounds: 97088"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 204626.76320024303,
            "unit": "iter/sec",
            "range": "stddev: 3.774801715442484e-7",
            "extra": "mean: 4.88694628386133 usec\nrounds: 82638"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 208990.63713512674,
            "unit": "iter/sec",
            "range": "stddev: 3.9851778227447076e-7",
            "extra": "mean: 4.784903351212962 usec\nrounds: 80001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 207923.5133567849,
            "unit": "iter/sec",
            "range": "stddev: 3.0189366123638355e-7",
            "extra": "mean: 4.809460863062933 usec\nrounds: 92585"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 209032.08130919095,
            "unit": "iter/sec",
            "range": "stddev: 3.526499042849516e-7",
            "extra": "mean: 4.783954662542179 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 209676.25729995762,
            "unit": "iter/sec",
            "range": "stddev: 3.3327351433909954e-7",
            "extra": "mean: 4.769257200968753 usec\nrounds: 98040"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 203840.41661098832,
            "unit": "iter/sec",
            "range": "stddev: 4.5007421698951437e-7",
            "extra": "mean: 4.905798450698876 usec\nrounds: 84034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 205902.91864813067,
            "unit": "iter/sec",
            "range": "stddev: 4.0478586100823775e-7",
            "extra": "mean: 4.856657722802409 usec\nrounds: 97088"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 207915.75447248644,
            "unit": "iter/sec",
            "range": "stddev: 4.003501238827651e-7",
            "extra": "mean: 4.8096403398441385 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 203365.2335967529,
            "unit": "iter/sec",
            "range": "stddev: 3.979825869976442e-7",
            "extra": "mean: 4.917261334761238 usec\nrounds: 84034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 208266.12906197712,
            "unit": "iter/sec",
            "range": "stddev: 3.85801347804504e-7",
            "extra": "mean: 4.801548886052489 usec\nrounds: 91744"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 205469.2149449325,
            "unit": "iter/sec",
            "range": "stddev: 4.343970004227496e-7",
            "extra": "mean: 4.866909139006584 usec\nrounds: 86957"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 206375.0106242241,
            "unit": "iter/sec",
            "range": "stddev: 4.0824915574184577e-7",
            "extra": "mean: 4.845547903185043 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 205558.2621546368,
            "unit": "iter/sec",
            "range": "stddev: 4.791248485936458e-7",
            "extra": "mean: 4.864800808871029 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 199999.75364561833,
            "unit": "iter/sec",
            "range": "stddev: 4.335632252656961e-7",
            "extra": "mean: 5.000006158867128 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 206933.5054858575,
            "unit": "iter/sec",
            "range": "stddev: 4.0339294463217224e-7",
            "extra": "mean: 4.832470206562771 usec\nrounds: 95239"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 205497.7856895651,
            "unit": "iter/sec",
            "range": "stddev: 3.8101645407804197e-7",
            "extra": "mean: 4.866232483451907 usec\nrounds: 78126"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 204314.6525644799,
            "unit": "iter/sec",
            "range": "stddev: 3.9627218203132176e-7",
            "extra": "mean: 4.894411572779434 usec\nrounds: 90091"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 186284.69058511333,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029477340491969626",
            "extra": "mean: 5.368127659117005 usec\nrounds: 47"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 204751.50920757782,
            "unit": "iter/sec",
            "range": "stddev: 4.1464923820224517e-7",
            "extra": "mean: 4.883968884381685 usec\nrounds: 93458"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 272065.7571235979,
            "unit": "iter/sec",
            "range": "stddev: 3.329334433719131e-7",
            "extra": "mean: 3.675582001103159 usec\nrounds: 72993"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 209314.00004202613,
            "unit": "iter/sec",
            "range": "stddev: 3.047443363177211e-7",
            "extra": "mean: 4.777511297854992 usec\nrounds: 76918"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 207892.236172569,
            "unit": "iter/sec",
            "range": "stddev: 3.207715185944788e-7",
            "extra": "mean: 4.810184441760063 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 201122.8294647254,
            "unit": "iter/sec",
            "range": "stddev: 4.225875443391887e-7",
            "extra": "mean: 4.972085976820391 usec\nrounds: 81301"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 207395.49701177102,
            "unit": "iter/sec",
            "range": "stddev: 4.62115768411877e-7",
            "extra": "mean: 4.821705458451896 usec\nrounds: 72988"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 205301.83821643863,
            "unit": "iter/sec",
            "range": "stddev: 3.5608722203022647e-7",
            "extra": "mean: 4.870876991104941 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 210127.16050256006,
            "unit": "iter/sec",
            "range": "stddev: 4.1207901766957934e-7",
            "extra": "mean: 4.759023048749648 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 274908.63147104514,
            "unit": "iter/sec",
            "range": "stddev: 2.8391704576069307e-7",
            "extra": "mean: 3.6375722168087887 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 208125.5705744419,
            "unit": "iter/sec",
            "range": "stddev: 3.195656328522868e-7",
            "extra": "mean: 4.804791632474214 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 207810.04920732693,
            "unit": "iter/sec",
            "range": "stddev: 3.2613104925870055e-7",
            "extra": "mean: 4.812086825514029 usec\nrounds: 81301"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 203659.86020435664,
            "unit": "iter/sec",
            "range": "stddev: 3.9079498992466565e-7",
            "extra": "mean: 4.910147728651973 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 205774.54171570166,
            "unit": "iter/sec",
            "range": "stddev: 3.942950286279805e-7",
            "extra": "mean: 4.859687654567109 usec\nrounds: 81301"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 209345.4708041001,
            "unit": "iter/sec",
            "range": "stddev: 3.0801510392985683e-7",
            "extra": "mean: 4.776793097834791 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 206663.27069914702,
            "unit": "iter/sec",
            "range": "stddev: 3.0258885885753404e-7",
            "extra": "mean: 4.838789188891547 usec\nrounds: 78734"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 276261.7352566358,
            "unit": "iter/sec",
            "range": "stddev: 2.4769643190855115e-7",
            "extra": "mean: 3.6197557329864773 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 206222.21312519518,
            "unit": "iter/sec",
            "range": "stddev: 2.832943905586856e-7",
            "extra": "mean: 4.849138144943248 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 208299.83069997333,
            "unit": "iter/sec",
            "range": "stddev: 3.8369122261054304e-7",
            "extra": "mean: 4.8007720248239645 usec\nrounds: 78741"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 205385.4569364613,
            "unit": "iter/sec",
            "range": "stddev: 4.4593932914927953e-7",
            "extra": "mean: 4.868893907660478 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 206011.5789247312,
            "unit": "iter/sec",
            "range": "stddev: 3.2970832500764703e-7",
            "extra": "mean: 4.85409609119768 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 210171.02132216835,
            "unit": "iter/sec",
            "range": "stddev: 4.515698448597454e-7",
            "extra": "mean: 4.758029883040409 usec\nrounds: 76331"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 207721.3219018354,
            "unit": "iter/sec",
            "range": "stddev: 3.198182526127949e-7",
            "extra": "mean: 4.814142288544545 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 271668.7916465231,
            "unit": "iter/sec",
            "range": "stddev: 3.421781489198814e-7",
            "extra": "mean: 3.6809528026359826 usec\nrounds: 78119"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 201813.64149482475,
            "unit": "iter/sec",
            "range": "stddev: 4.0011154174783393e-7",
            "extra": "mean: 4.955066429568606 usec\nrounds: 71429"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 207487.79399759593,
            "unit": "iter/sec",
            "range": "stddev: 3.7780698249306675e-7",
            "extra": "mean: 4.819560614787714 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 193061.2362175924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016100437028821645",
            "extra": "mean: 5.179703702264372 usec\nrounds: 54"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 204535.2795388846,
            "unit": "iter/sec",
            "range": "stddev: 4.1905449691644035e-7",
            "extra": "mean: 4.889132096205867 usec\nrounds: 78125"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 206642.33858193332,
            "unit": "iter/sec",
            "range": "stddev: 4.643971898017611e-7",
            "extra": "mean: 4.839279340634745 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 204471.22520100133,
            "unit": "iter/sec",
            "range": "stddev: 3.972859014871824e-7",
            "extra": "mean: 4.890663705941851 usec\nrounds: 71943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 270430.49117711396,
            "unit": "iter/sec",
            "range": "stddev: 3.4663151644919043e-7",
            "extra": "mean: 3.6978078753148687 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 205050.54425180698,
            "unit": "iter/sec",
            "range": "stddev: 4.0117043205809086e-7",
            "extra": "mean: 4.87684635829094 usec\nrounds: 72988"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 204201.24284125192,
            "unit": "iter/sec",
            "range": "stddev: 3.6533885245207385e-7",
            "extra": "mean: 4.897129841552482 usec\nrounds: 78126"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 205570.07798518395,
            "unit": "iter/sec",
            "range": "stddev: 4.1111151171696734e-7",
            "extra": "mean: 4.864521188108285 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 204165.04665370396,
            "unit": "iter/sec",
            "range": "stddev: 4.3444888837546257e-7",
            "extra": "mean: 4.897998048099572 usec\nrounds: 81968"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 205653.57753646313,
            "unit": "iter/sec",
            "range": "stddev: 4.081318221244911e-7",
            "extra": "mean: 4.862546093187688 usec\nrounds: 80001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 205385.4098974264,
            "unit": "iter/sec",
            "range": "stddev: 3.887745445911172e-7",
            "extra": "mean: 4.868895022774111 usec\nrounds: 78741"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 272699.97532280476,
            "unit": "iter/sec",
            "range": "stddev: 3.6129022187348037e-7",
            "extra": "mean: 3.6670337018412416 usec\nrounds: 81301"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 2355627.6051285565,
            "unit": "iter/sec",
            "range": "stddev: 1.7508024741580692e-8",
            "extra": "mean: 424.51531720141827 nsec\nrounds: 113637"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 5166.352037470337,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036947239442438057",
            "extra": "mean: 193.56017413200553 usec\nrounds: 3773"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 2309653.072219511,
            "unit": "iter/sec",
            "range": "stddev: 1.8884856710703342e-8",
            "extra": "mean: 432.96545789844544 nsec\nrounds: 112360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 5112.1008361411705,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036640372128744034",
            "extra": "mean: 195.61429479838708 usec\nrounds: 3806"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 2394386.17061425,
            "unit": "iter/sec",
            "range": "stddev: 2.268416579800778e-8",
            "extra": "mean: 417.64357490572564 nsec\nrounds: 117648"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 5153.764273664119,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038090645253809146",
            "extra": "mean: 194.03293338619082 usec\nrounds: 3783"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 5258.375386763222,
            "unit": "iter/sec",
            "range": "stddev: 0.000003875684785920861",
            "extra": "mean: 190.1728055622037 usec\nrounds: 3991"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 2378109.013195419,
            "unit": "iter/sec",
            "range": "stddev: 1.8320632302674218e-8",
            "extra": "mean: 420.5021697706188 nsec\nrounds: 116280"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 5225.8200226559,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053415572148343146",
            "extra": "mean: 191.35752774963984 usec\nrounds: 3856"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 2282555.942447182,
            "unit": "iter/sec",
            "range": "stddev: 1.7067794597209442e-8",
            "extra": "mean: 438.10536311689816 nsec\nrounds: 112360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 5249.48008903518,
            "unit": "iter/sec",
            "range": "stddev: 0.00000393262882480724",
            "extra": "mean: 190.49505532723975 usec\nrounds: 3651"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 2407374.1132208873,
            "unit": "iter/sec",
            "range": "stddev: 1.91213634897285e-8",
            "extra": "mean: 415.3903601889515 nsec\nrounds: 119048"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 2242605.9760841015,
            "unit": "iter/sec",
            "range": "stddev: 1.6193774373829035e-8",
            "extra": "mean: 445.90980790376636 nsec\nrounds: 109891"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 5095.171539757348,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057621154329748565",
            "extra": "mean: 196.2642459036078 usec\nrounds: 61"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 2266403.1408617566,
            "unit": "iter/sec",
            "range": "stddev: 1.6049984095118954e-8",
            "extra": "mean: 441.22776833973717 nsec\nrounds: 112360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 5137.467963555598,
            "unit": "iter/sec",
            "range": "stddev: 0.000003746028102949825",
            "extra": "mean: 194.6484157358927 usec\nrounds: 3851"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 2260980.623267536,
            "unit": "iter/sec",
            "range": "stddev: 1.6671591328467463e-8",
            "extra": "mean: 442.2859664117767 nsec\nrounds: 111112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 5145.416892486464,
            "unit": "iter/sec",
            "range": "stddev: 0.000004030631995694231",
            "extra": "mean: 194.34771193374795 usec\nrounds: 3888"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 5219.760733982996,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032966235825079382",
            "extra": "mean: 191.57966254842856 usec\nrounds: 4128"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 2234619.4997930042,
            "unit": "iter/sec",
            "range": "stddev: 1.8360158145610666e-8",
            "extra": "mean: 447.50347882153454 nsec\nrounds: 109879"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 5257.088220082176,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032781361601324174",
            "extra": "mean: 190.21936823886293 usec\nrounds: 3753"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 2206894.3155828645,
            "unit": "iter/sec",
            "range": "stddev: 2.8152188850059786e-8",
            "extra": "mean: 453.12545913047256 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 5256.201219177053,
            "unit": "iter/sec",
            "range": "stddev: 0.000003580514942534239",
            "extra": "mean: 190.25146837064332 usec\nrounds: 3794"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 2258290.0123577476,
            "unit": "iter/sec",
            "range": "stddev: 1.8128009813681562e-8",
            "extra": "mean: 442.8129224005968 nsec\nrounds: 109879"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 2393437.1770517942,
            "unit": "iter/sec",
            "range": "stddev: 1.9762587822260966e-8",
            "extra": "mean: 417.80916983672626 nsec\nrounds: 119048"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 5163.596653283228,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036655315245010317",
            "extra": "mean: 193.66346117761904 usec\nrounds: 3838"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 2375975.7976675075,
            "unit": "iter/sec",
            "range": "stddev: 1.791683368272735e-8",
            "extra": "mean: 420.87970802614694 nsec\nrounds: 116280"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 5169.981381802853,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033655910556179053",
            "extra": "mean: 193.42429423822884 usec\nrounds: 3905"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 2269443.9755680053,
            "unit": "iter/sec",
            "range": "stddev: 2.08653647910697e-8",
            "extra": "mean: 440.6365659457265 nsec\nrounds: 112360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 5158.762111470579,
            "unit": "iter/sec",
            "range": "stddev: 0.000003476382331300392",
            "extra": "mean: 193.8449531868287 usec\nrounds: 3781"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 5235.585612836664,
            "unit": "iter/sec",
            "range": "stddev: 0.000003655921812466111",
            "extra": "mean: 191.00060125999843 usec\nrounds: 3970"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 2377522.1864928966,
            "unit": "iter/sec",
            "range": "stddev: 2.11306038743759e-8",
            "extra": "mean: 420.6059592970889 nsec\nrounds: 117648"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 5220.490687891366,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037139924341484614",
            "extra": "mean: 191.5528749662256 usec\nrounds: 3743"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 2389812.7431282043,
            "unit": "iter/sec",
            "range": "stddev: 1.6915418130563475e-8",
            "extra": "mean: 418.44282690162066 nsec\nrounds: 117648"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 5239.315137181549,
            "unit": "iter/sec",
            "range": "stddev: 0.000003543837087654696",
            "extra": "mean: 190.86464047626322 usec\nrounds: 3780"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 2267308.0695044766,
            "unit": "iter/sec",
            "range": "stddev: 1.958019533986696e-8",
            "extra": "mean: 441.0516653868936 nsec\nrounds: 113637"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 15998.418640725198,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017200791617695067",
            "extra": "mean: 62.50617779524931 usec\nrounds: 6350"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 15605.417758448904,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018421134570268267",
            "extra": "mean: 64.08030951036807 usec\nrounds: 8969"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 12244.838492891153,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025918056358401247",
            "extra": "mean: 81.66706327572706 usec\nrounds: 7491"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 66.14630128770749,
            "unit": "iter/sec",
            "range": "stddev: 0.03460586771335827",
            "extra": "mean: 15.118003282608916 msec\nrounds: 230"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 156641.88646649904,
            "unit": "iter/sec",
            "range": "stddev: 2.92942184384264e-7",
            "extra": "mean: 6.383988488378361 usec\nrounds: 25974"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 153132.13662171658,
            "unit": "iter/sec",
            "range": "stddev: 4.0604547859025705e-7",
            "extra": "mean: 6.530307890043402 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 68.88003740425295,
            "unit": "iter/sec",
            "range": "stddev: 0.035129620854402854",
            "extra": "mean: 14.517994439100809 msec\nrounds: 312"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 69.23296252582406,
            "unit": "iter/sec",
            "range": "stddev: 0.03493344013730161",
            "extra": "mean: 14.443986845528928 msec\nrounds: 369"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 68428.43222095187,
            "unit": "iter/sec",
            "range": "stddev: 5.716261815143323e-7",
            "extra": "mean: 14.613808435228382 usec\nrounds: 29499"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 68943.43270103929,
            "unit": "iter/sec",
            "range": "stddev: 5.76350566451152e-7",
            "extra": "mean: 14.504644761979273 usec\nrounds: 31348"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 56.745847078940855,
            "unit": "iter/sec",
            "range": "stddev: 0.03610746408979492",
            "extra": "mean: 17.622434970595645 msec\nrounds: 170"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 58.044464755069754,
            "unit": "iter/sec",
            "range": "stddev: 0.03529621393144856",
            "extra": "mean: 17.228171613257185 msec\nrounds: 181"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 20975.110093126023,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010164746026549326",
            "extra": "mean: 47.67555429078395 usec\nrounds: 7294"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 1619.5878785989366,
            "unit": "iter/sec",
            "range": "stddev: 0.000006451416656110343",
            "extra": "mean: 617.4410250989739 usec\nrounds: 1275"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 1612.6993395747054,
            "unit": "iter/sec",
            "range": "stddev: 0.000007204784106142663",
            "extra": "mean: 620.0783837759343 usec\nrounds: 1282"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 24563.698868391264,
            "unit": "iter/sec",
            "range": "stddev: 9.531383305009869e-7",
            "extra": "mean: 40.71048115993666 usec\nrounds: 9872"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 33.90953132363454,
            "unit": "iter/sec",
            "range": "stddev: 0.03831230283432282",
            "extra": "mean: 29.490233599985263 msec\nrounds: 35"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 4.273975415366761,
            "unit": "iter/sec",
            "range": "stddev: 0.05362611869862328",
            "extra": "mean: 233.97420500000408 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 4.286986689085607,
            "unit": "iter/sec",
            "range": "stddev: 0.0528621533162171",
            "extra": "mean: 233.26407859999563 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 35.00745151109491,
            "unit": "iter/sec",
            "range": "stddev: 0.04152530089098267",
            "extra": "mean: 28.565346999997132 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 20876.16826370101,
            "unit": "iter/sec",
            "range": "stddev: 0.000001086178121253766",
            "extra": "mean: 47.901510821733346 usec\nrounds: 8085"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 1603.6472844734378,
            "unit": "iter/sec",
            "range": "stddev: 0.000007363461481647367",
            "extra": "mean: 623.5785198416327 usec\nrounds: 1260"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 1612.305694691093,
            "unit": "iter/sec",
            "range": "stddev: 0.000006925930246801511",
            "extra": "mean: 620.2297760857275 usec\nrounds: 1313"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 24530.13489539828,
            "unit": "iter/sec",
            "range": "stddev: 9.799798490159096e-7",
            "extra": "mean: 40.766184297975244 usec\nrounds: 7553"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 34.00413254111359,
            "unit": "iter/sec",
            "range": "stddev: 0.038197380691810404",
            "extra": "mean: 29.40819027778237 msec\nrounds: 36"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 4.759638725105731,
            "unit": "iter/sec",
            "range": "stddev: 0.0004890979063472763",
            "extra": "mean: 210.09997979999753 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 4.753120483724644,
            "unit": "iter/sec",
            "range": "stddev: 0.0005889218804471507",
            "extra": "mean: 210.38810259999536 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 36.72067172798822,
            "unit": "iter/sec",
            "range": "stddev: 0.037973493698353",
            "extra": "mean: 27.232617295445813 msec\nrounds: 44"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 69244.32575680745,
            "unit": "iter/sec",
            "range": "stddev: 4.832958146163093e-7",
            "extra": "mean: 14.44161653782425 usec\nrounds: 32895"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 67936.7534693841,
            "unit": "iter/sec",
            "range": "stddev: 5.202617367220955e-7",
            "extra": "mean: 14.719572969448016 usec\nrounds: 21598"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 68219.48379573651,
            "unit": "iter/sec",
            "range": "stddev: 4.787606676985365e-7",
            "extra": "mean: 14.658568848075873 usec\nrounds: 31446"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 67510.21235515941,
            "unit": "iter/sec",
            "range": "stddev: 6.131019864283405e-7",
            "extra": "mean: 14.812573759051077 usec\nrounds: 33223"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 54.78792472061502,
            "unit": "iter/sec",
            "range": "stddev: 0.037264216799453596",
            "extra": "mean: 18.252197087212007 msec\nrounds: 172"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 56.52751460051066,
            "unit": "iter/sec",
            "range": "stddev: 0.03653009527493514",
            "extra": "mean: 17.690500052357972 msec\nrounds: 191"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 56.948721481332115,
            "unit": "iter/sec",
            "range": "stddev: 0.036036079872572846",
            "extra": "mean: 17.559656722544716 msec\nrounds: 173"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 55.281875125362795,
            "unit": "iter/sec",
            "range": "stddev: 0.03881390236572429",
            "extra": "mean: 18.08911144443452 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 89883.83403024207,
            "unit": "iter/sec",
            "range": "stddev: 3.882685887416698e-7",
            "extra": "mean: 11.125471123801224 usec\nrounds: 24155"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 67371.25043931411,
            "unit": "iter/sec",
            "range": "stddev: 5.529106894226225e-7",
            "extra": "mean: 14.843126607851348 usec\nrounds: 29240"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 67559.01900483371,
            "unit": "iter/sec",
            "range": "stddev: 5.063257186196038e-7",
            "extra": "mean: 14.801872714114634 usec\nrounds: 20450"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 89616.2473950744,
            "unit": "iter/sec",
            "range": "stddev: 5.490175640653011e-7",
            "extra": "mean: 11.15869085202248 usec\nrounds: 20081"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 60.22838938318702,
            "unit": "iter/sec",
            "range": "stddev: 0.03651161795358577",
            "extra": "mean: 16.60346574499556 msec\nrounds: 200"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 56.2008578427213,
            "unit": "iter/sec",
            "range": "stddev: 0.0368318767281679",
            "extra": "mean: 17.7933227068973 msec\nrounds: 174"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 54.39502066531443,
            "unit": "iter/sec",
            "range": "stddev: 0.039634565637623076",
            "extra": "mean: 18.384035666662786 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 60.52058671753314,
            "unit": "iter/sec",
            "range": "stddev: 0.03640198767060581",
            "extra": "mean: 16.52330313100376 msec\nrounds: 229"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 497557.57734189456,
            "unit": "iter/sec",
            "range": "stddev: 1.6053771861797019e-7",
            "extra": "mean: 2.0098176483258627 usec\nrounds: 19084"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 1724.4620679021077,
            "unit": "iter/sec",
            "range": "stddev: 0.000006155866154559499",
            "extra": "mean: 579.8909808532633 usec\nrounds: 1358"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 1737.9503624535055,
            "unit": "iter/sec",
            "range": "stddev: 0.000012672391187349847",
            "extra": "mean: 575.3904263343152 usec\nrounds: 1405"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 510556.7042517978,
            "unit": "iter/sec",
            "range": "stddev: 2.509100613007376e-7",
            "extra": "mean: 1.958646300542588 usec\nrounds: 94340"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 2795.0914478053764,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021174477490333627",
            "extra": "mean: 357.77004748276505 usec\nrounds: 2443"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 5.231033594330292,
            "unit": "iter/sec",
            "range": "stddev: 0.00023975088112914136",
            "extra": "mean: 191.16680900001484 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 5.237238882202548,
            "unit": "iter/sec",
            "range": "stddev: 0.002816197153539519",
            "extra": "mean: 190.94030699998257 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 2804.6368131031104,
            "unit": "iter/sec",
            "range": "stddev: 0.000002227049739601464",
            "extra": "mean: 356.552404692135 usec\nrounds: 2387"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 395998.38238099136,
            "unit": "iter/sec",
            "range": "stddev: 2.3668420630442016e-7",
            "extra": "mean: 2.5252628406898303 usec\nrounds: 34013"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 2185.8858282736996,
            "unit": "iter/sec",
            "range": "stddev: 0.0000063022583579201076",
            "extra": "mean: 457.480435192605 usec\nrounds: 1381"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 1904.2048226070467,
            "unit": "iter/sec",
            "range": "stddev: 0.000005494822672042151",
            "extra": "mean: 525.1535906893146 usec\nrounds: 1439"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 395466.0386745026,
            "unit": "iter/sec",
            "range": "stddev: 2.2325365470627474e-7",
            "extra": "mean: 2.5286621408799985 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 2014.1816312924366,
            "unit": "iter/sec",
            "range": "stddev: 0.000005334799023776695",
            "extra": "mean: 496.4795550033548 usec\nrounds: 1809"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 6.488740639910233,
            "unit": "iter/sec",
            "range": "stddev: 0.005946269725926288",
            "extra": "mean: 154.11311000000674 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 5.674555513816682,
            "unit": "iter/sec",
            "range": "stddev: 0.0023980953756883965",
            "extra": "mean: 176.22525633332012 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 1993.5923896468628,
            "unit": "iter/sec",
            "range": "stddev: 0.000002807649688669223",
            "extra": "mean: 501.607051267454 usec\nrounds: 1853"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 20948.173012286785,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011397445791752307",
            "extra": "mean: 47.73685988813762 usec\nrounds: 8272"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 1609.9347407760438,
            "unit": "iter/sec",
            "range": "stddev: 0.000014865093815693841",
            "extra": "mean: 621.1431896413178 usec\nrounds: 1255"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 1602.5967506784243,
            "unit": "iter/sec",
            "range": "stddev: 0.000006668450419634222",
            "extra": "mean: 623.9872878668148 usec\nrounds: 1261"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 24617.940289700175,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010088175031319434",
            "extra": "mean: 40.62078257693992 usec\nrounds: 9700"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 62.7780636621402,
            "unit": "iter/sec",
            "range": "stddev: 0.0001127048651902128",
            "extra": "mean: 15.929130999990905 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 4.76115036443147,
            "unit": "iter/sec",
            "range": "stddev: 0.00028983154975905886",
            "extra": "mean: 210.0332741999864 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 4.232273010436163,
            "unit": "iter/sec",
            "range": "stddev: 0.05662185189780148",
            "extra": "mean: 236.27965339999264 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 34.79784487013881,
            "unit": "iter/sec",
            "range": "stddev: 0.041769151507182634",
            "extra": "mean: 28.737411863633355 msec\nrounds: 44"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 20912.822814559997,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011896878571185225",
            "extra": "mean: 47.81755236331733 usec\nrounds: 7133"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 1609.8324285021824,
            "unit": "iter/sec",
            "range": "stddev: 0.000006753210033982684",
            "extra": "mean: 621.1826661551465 usec\nrounds: 1300"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 1603.4142899417036,
            "unit": "iter/sec",
            "range": "stddev: 0.000007791216560981374",
            "extra": "mean: 623.6691329702179 usec\nrounds: 1286"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 24764.0092921077,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010630565180724574",
            "extra": "mean: 40.38118336188399 usec\nrounds: 9653"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 62.516566331861945,
            "unit": "iter/sec",
            "range": "stddev: 0.00015357474762298513",
            "extra": "mean: 15.995760142865429 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 4.214433722247359,
            "unit": "iter/sec",
            "range": "stddev: 0.057157384349362614",
            "extra": "mean: 237.27980220003246 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 4.226678888610631,
            "unit": "iter/sec",
            "range": "stddev: 0.05632991406656907",
            "extra": "mean: 236.59237579997807 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 34.928467130407235,
            "unit": "iter/sec",
            "range": "stddev: 0.041558367966523374",
            "extra": "mean: 28.629942340912027 msec\nrounds: 44"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 69876.54209259736,
            "unit": "iter/sec",
            "range": "stddev: 6.055686506487308e-7",
            "extra": "mean: 14.310954292426825 usec\nrounds: 22272"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 67896.36372039704,
            "unit": "iter/sec",
            "range": "stddev: 7.150434505980986e-7",
            "extra": "mean: 14.728329253656124 usec\nrounds: 27778"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 68767.81710043218,
            "unit": "iter/sec",
            "range": "stddev: 7.193802225562576e-7",
            "extra": "mean: 14.541685953758673 usec\nrounds: 29155"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 69053.96573102863,
            "unit": "iter/sec",
            "range": "stddev: 5.053523853503562e-7",
            "extra": "mean: 14.481427524308879 usec\nrounds: 32052"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 54.688193243436324,
            "unit": "iter/sec",
            "range": "stddev: 0.03840528371736337",
            "extra": "mean: 18.285482490684036 msec\nrounds: 161"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 53.91139432963386,
            "unit": "iter/sec",
            "range": "stddev: 0.03855736720792835",
            "extra": "mean: 18.548954491617053 msec\nrounds: 179"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 52.276374980514746,
            "unit": "iter/sec",
            "range": "stddev: 0.040279705542899474",
            "extra": "mean: 19.12909991124548 msec\nrounds: 169"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 54.29701764655284,
            "unit": "iter/sec",
            "range": "stddev: 0.03897452616592251",
            "extra": "mean: 18.417217802081016 msec\nrounds: 192"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 89142.47694971708,
            "unit": "iter/sec",
            "range": "stddev: 5.955007652359623e-7",
            "extra": "mean: 11.217996562559886 usec\nrounds: 29674"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 68000.51683060236,
            "unit": "iter/sec",
            "range": "stddev: 4.881917939917771e-7",
            "extra": "mean: 14.705770582466641 usec\nrounds: 19920"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 67759.08813165339,
            "unit": "iter/sec",
            "range": "stddev: 5.473654281224551e-7",
            "extra": "mean: 14.758167908886804 usec\nrounds: 28170"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 89058.01144860394,
            "unit": "iter/sec",
            "range": "stddev: 5.645406206115204e-7",
            "extra": "mean: 11.228636073657535 usec\nrounds: 30770"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 56.71882737548952,
            "unit": "iter/sec",
            "range": "stddev: 0.039675442746573274",
            "extra": "mean: 17.630829942583407 msec\nrounds: 209"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 51.72208215085714,
            "unit": "iter/sec",
            "range": "stddev: 0.04032151935464962",
            "extra": "mean: 19.334101768821153 msec\nrounds: 186"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 54.63347425924574,
            "unit": "iter/sec",
            "range": "stddev: 0.03881727521679596",
            "extra": "mean: 18.303796592814486 msec\nrounds: 167"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 57.27574137975401,
            "unit": "iter/sec",
            "range": "stddev: 0.03934260530436329",
            "extra": "mean: 17.45939861991001 msec\nrounds: 221"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 525130.5666371075,
            "unit": "iter/sec",
            "range": "stddev: 1.894913068090365e-7",
            "extra": "mean: 1.9042883113887594 usec\nrounds: 93458"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 1725.1370796811573,
            "unit": "iter/sec",
            "range": "stddev: 0.000006594195766693025",
            "extra": "mean: 579.6640810623708 usec\nrounds: 1357"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 1733.6364354373761,
            "unit": "iter/sec",
            "range": "stddev: 0.000015070740151696603",
            "extra": "mean: 576.8222099852856 usec\nrounds: 1362"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 521794.1685245596,
            "unit": "iter/sec",
            "range": "stddev: 1.9495846596909514e-7",
            "extra": "mean: 1.9164644994550806 usec\nrounds: 102041"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 2827.8407647701474,
            "unit": "iter/sec",
            "range": "stddev: 0.000002764113687218655",
            "extra": "mean: 353.6267007881832 usec\nrounds: 2413"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 5.1792960953333385,
            "unit": "iter/sec",
            "range": "stddev: 0.00009551768129087075",
            "extra": "mean: 193.07643000001917 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 5.238758300748533,
            "unit": "iter/sec",
            "range": "stddev: 0.00007753105516540703",
            "extra": "mean: 190.88492779999342 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 2821.221554461107,
            "unit": "iter/sec",
            "range": "stddev: 0.000002455719074709584",
            "extra": "mean: 354.4563873116353 usec\nrounds: 2396"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 414084.22229414305,
            "unit": "iter/sec",
            "range": "stddev: 2.2231291701352678e-7",
            "extra": "mean: 2.4149676470639685 usec\nrounds: 43860"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 2164.9646542227474,
            "unit": "iter/sec",
            "range": "stddev: 0.000014125948749942393",
            "extra": "mean: 461.90130543217293 usec\nrounds: 1565"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 1909.2069182754851,
            "unit": "iter/sec",
            "range": "stddev: 0.000005942795758691187",
            "extra": "mean: 523.7776955591919 usec\nrounds: 1442"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 376877.7276782518,
            "unit": "iter/sec",
            "range": "stddev: 2.9574062024347994e-7",
            "extra": "mean: 2.6533804641640173 usec\nrounds: 90910"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 1966.5899452494332,
            "unit": "iter/sec",
            "range": "stddev: 0.000002976595701272895",
            "extra": "mean: 508.4944130908615 usec\nrounds: 1864"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 6.638700146493872,
            "unit": "iter/sec",
            "range": "stddev: 0.00009631668856442202",
            "extra": "mean: 150.63189750001507 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 5.721973338050531,
            "unit": "iter/sec",
            "range": "stddev: 0.0023761986298112257",
            "extra": "mean: 174.76488283335812 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 2013.488316467925,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034736239250981613",
            "extra": "mean: 496.65051037107924 usec\nrounds: 1832"
          }
        ]
      }
    ]
  }
}