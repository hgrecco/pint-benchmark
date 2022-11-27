window.BENCHMARK_DATA = {
  "lastUpdate": 1669518894131,
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
        "date": 1669515419001,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 25.893175578657885,
            "unit": "iter/sec",
            "range": "stddev: 0.0025560495062310153",
            "extra": "mean: 38.62021469565274 msec\nrounds: 23"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 1320711.0056423445,
            "unit": "iter/sec",
            "range": "stddev: 7.604410675892796e-7",
            "extra": "mean: 757.1679161662148 nsec\nrounds: 65360"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 30.510707119131506,
            "unit": "iter/sec",
            "range": "stddev: 0.0021522832666464797",
            "extra": "mean: 32.775379347827624 msec\nrounds: 23"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 1364.4065788095018,
            "unit": "iter/sec",
            "range": "stddev: 0.00007762826768166515",
            "extra": "mean: 732.9193625499366 usec\nrounds: 1255"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 10643.34763769376,
            "unit": "iter/sec",
            "range": "stddev: 0.00006564419758067447",
            "extra": "mean: 93.9554014432891 usec\nrounds: 7067"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 10747.039813568872,
            "unit": "iter/sec",
            "range": "stddev: 0.0000211938147710579",
            "extra": "mean: 93.04887832809847 usec\nrounds: 3230"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 10525.791156820897,
            "unit": "iter/sec",
            "range": "stddev: 0.00006151820134834622",
            "extra": "mean: 95.00473504568657 usec\nrounds: 8643"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 10777.780663176636,
            "unit": "iter/sec",
            "range": "stddev: 0.00002426874496033153",
            "extra": "mean: 92.78348031488522 usec\nrounds: 6985"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 10759.153110393008,
            "unit": "iter/sec",
            "range": "stddev: 0.000028499141042521046",
            "extra": "mean: 92.94411834645527 usec\nrounds: 9168"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 10233.110923946737,
            "unit": "iter/sec",
            "range": "stddev: 0.00007894853927559234",
            "extra": "mean: 97.72199357869533 usec\nrounds: 8098"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 10326.735125725669,
            "unit": "iter/sec",
            "range": "stddev: 0.000019975761326338575",
            "extra": "mean: 96.83602685894677 usec\nrounds: 8526"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 10224.935567845714,
            "unit": "iter/sec",
            "range": "stddev: 0.000026020326954076312",
            "extra": "mean: 97.80012728341227 usec\nrounds: 8540"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 10067.423189855423,
            "unit": "iter/sec",
            "range": "stddev: 0.00009300186280234038",
            "extra": "mean: 99.33028354342586 usec\nrounds: 8489"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 10265.012251901795,
            "unit": "iter/sec",
            "range": "stddev: 0.00004393224646421683",
            "extra": "mean: 97.41829580522229 usec\nrounds: 8749"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 9946.834554293046,
            "unit": "iter/sec",
            "range": "stddev: 0.00002599946356600448",
            "extra": "mean: 100.53449612956524 usec\nrounds: 8397"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 9814.952259345398,
            "unit": "iter/sec",
            "range": "stddev: 0.00003933035801420771",
            "extra": "mean: 101.88536567234351 usec\nrounds: 10225"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 9828.003235322712,
            "unit": "iter/sec",
            "range": "stddev: 0.00010312824794227232",
            "extra": "mean: 101.75006825454754 usec\nrounds: 8439"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 11650744.210986177,
            "unit": "iter/sec",
            "range": "stddev: 2.6812690671577424e-7",
            "extra": "mean: 85.83142689338844 nsec\nrounds: 123457"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 10846509.03887336,
            "unit": "iter/sec",
            "range": "stddev: 4.0370062400738596e-8",
            "extra": "mean: 92.1955623157565 nsec\nrounds: 111112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 9765159.67307061,
            "unit": "iter/sec",
            "range": "stddev: 1.358313665786361e-7",
            "extra": "mean: 102.40487953898504 nsec\nrounds: 98040"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 12189806.8254385,
            "unit": "iter/sec",
            "range": "stddev: 2.940263318761184e-8",
            "extra": "mean: 82.03575448890757 nsec\nrounds: 128206"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 12132804.047697496,
            "unit": "iter/sec",
            "range": "stddev: 1.9687327360125297e-7",
            "extra": "mean: 82.42117783054736 nsec\nrounds: 125001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 12119514.775937911,
            "unit": "iter/sec",
            "range": "stddev: 4.204128111852179e-8",
            "extra": "mean: 82.51155417409511 nsec\nrounds: 120482"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 45647.07921979509,
            "unit": "iter/sec",
            "range": "stddev: 0.00006869226703127742",
            "extra": "mean: 21.907206706148788 usec\nrounds: 12675"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 3374.92747880137,
            "unit": "iter/sec",
            "range": "stddev: 0.00005301596308848393",
            "extra": "mean: 296.3026631775677 usec\nrounds: 2675"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 47822.223157949855,
            "unit": "iter/sec",
            "range": "stddev: 0.000015967182949164818",
            "extra": "mean: 20.910780259988023 usec\nrounds: 18622"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 3271.198926634019,
            "unit": "iter/sec",
            "range": "stddev: 0.00013426460106332827",
            "extra": "mean: 305.698315030011 usec\nrounds: 2495"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 47858.94109787862,
            "unit": "iter/sec",
            "range": "stddev: 0.000021644709329662673",
            "extra": "mean: 20.89473726455527 usec\nrounds: 18315"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 3318.278500752128,
            "unit": "iter/sec",
            "range": "stddev: 0.000033373933746200295",
            "extra": "mean: 301.36108219166596 usec\nrounds: 146"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 3243.5194573032886,
            "unit": "iter/sec",
            "range": "stddev: 0.00007685276989233593",
            "extra": "mean: 308.3070760523247 usec\nrounds: 2827"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 56619.309156269985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000063868153986791355",
            "extra": "mean: 17.66181917267814 usec\nrounds: 21009"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 3351.369345470591,
            "unit": "iter/sec",
            "range": "stddev: 0.00008183580282892463",
            "extra": "mean: 298.3854946789168 usec\nrounds: 2725"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 55941.78229312271,
            "unit": "iter/sec",
            "range": "stddev: 0.000011026458359358858",
            "extra": "mean: 17.87572649652488 usec\nrounds: 20965"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 3343.06963441589,
            "unit": "iter/sec",
            "range": "stddev: 0.00004956528465755052",
            "extra": "mean: 299.1262849284689 usec\nrounds: 2727"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 54081.14054437559,
            "unit": "iter/sec",
            "range": "stddev: 0.000029306457055590603",
            "extra": "mean: 18.490734291734523 usec\nrounds: 21008"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 47841.023840625974,
            "unit": "iter/sec",
            "range": "stddev: 0.0000072139728410287",
            "extra": "mean: 20.902562690366445 usec\nrounds: 15106"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 3315.3190370638213,
            "unit": "iter/sec",
            "range": "stddev: 0.0000819330712721396",
            "extra": "mean: 301.63009617488876 usec\nrounds: 2745"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 48223.33256892699,
            "unit": "iter/sec",
            "range": "stddev: 0.000007952957966922711",
            "extra": "mean: 20.736849710058326 usec\nrounds: 18797"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 3230.2807534627354,
            "unit": "iter/sec",
            "range": "stddev: 0.00014492786286378548",
            "extra": "mean: 309.57061516341537 usec\nrounds: 2783"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 47158.17745474068,
            "unit": "iter/sec",
            "range": "stddev: 0.000010511953658950303",
            "extra": "mean: 21.205230014661492 usec\nrounds: 18451"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 3385.857050196985,
            "unit": "iter/sec",
            "range": "stddev: 0.00006160790098949535",
            "extra": "mean: 295.3461960072476 usec\nrounds: 2755"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 3363.1563139790815,
            "unit": "iter/sec",
            "range": "stddev: 0.00006964891985809197",
            "extra": "mean: 297.33973287041806 usec\nrounds: 3313"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 56488.11158027789,
            "unit": "iter/sec",
            "range": "stddev: 0.000009535549995005435",
            "extra": "mean: 17.702839978618393 usec\nrounds: 22372"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 3455.2750977529295,
            "unit": "iter/sec",
            "range": "stddev: 0.0000343083778392002",
            "extra": "mean: 289.4125566587536 usec\nrounds: 2921"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 58523.37122386504,
            "unit": "iter/sec",
            "range": "stddev: 0.000012417072527775459",
            "extra": "mean: 17.087190622952587 usec\nrounds: 21414"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 3465.461734180353,
            "unit": "iter/sec",
            "range": "stddev: 0.000048353342462701205",
            "extra": "mean: 288.5618358260473 usec\nrounds: 2808"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 58663.76406611524,
            "unit": "iter/sec",
            "range": "stddev: 0.000014836513063306185",
            "extra": "mean: 17.04629793057568 usec\nrounds: 21552"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 49484.40549662687,
            "unit": "iter/sec",
            "range": "stddev: 0.000037485526496851",
            "extra": "mean: 20.208386661696192 usec\nrounds: 18833"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 3459.9252724586677,
            "unit": "iter/sec",
            "range": "stddev: 0.00013656578866280062",
            "extra": "mean: 289.02358324328407 usec\nrounds: 2781"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 49605.57490883433,
            "unit": "iter/sec",
            "range": "stddev: 0.000008993882367569064",
            "extra": "mean: 20.159024501536592 usec\nrounds: 20162"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 3208.6779771450306,
            "unit": "iter/sec",
            "range": "stddev: 0.0001669171336603747",
            "extra": "mean: 311.6548332749069 usec\nrounds: 2843"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 48135.12310173801,
            "unit": "iter/sec",
            "range": "stddev: 0.000008272463059453864",
            "extra": "mean: 20.774850785909653 usec\nrounds: 18450"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 3127.9291262953247,
            "unit": "iter/sec",
            "range": "stddev: 0.00009495280525440064",
            "extra": "mean: 319.70033834634415 usec\nrounds: 399"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 3218.154447429883,
            "unit": "iter/sec",
            "range": "stddev: 0.00013438953275165267",
            "extra": "mean: 310.7371061070828 usec\nrounds: 2931"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 53594.216556022846,
            "unit": "iter/sec",
            "range": "stddev: 0.000050770838567056495",
            "extra": "mean: 18.65872969622916 usec\nrounds: 12904"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 3368.285755832097,
            "unit": "iter/sec",
            "range": "stddev: 0.00004116617323136911",
            "extra": "mean: 296.88692483068775 usec\nrounds: 2807"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 55790.007367574086,
            "unit": "iter/sec",
            "range": "stddev: 0.00000945913973112288",
            "extra": "mean: 17.924356837085018 usec\nrounds: 20791"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 3282.822535145062,
            "unit": "iter/sec",
            "range": "stddev: 0.00005130074198741632",
            "extra": "mean: 304.6159179469053 usec\nrounds: 2864"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 56531.0241093338,
            "unit": "iter/sec",
            "range": "stddev: 0.00002384008368081091",
            "extra": "mean: 17.689401806447915 usec\nrounds: 20704"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 49330.21461300888,
            "unit": "iter/sec",
            "range": "stddev: 0.000017291220409845815",
            "extra": "mean: 20.271551783119342 usec\nrounds: 15198"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 3126.7248072035445,
            "unit": "iter/sec",
            "range": "stddev: 0.00023883158841241198",
            "extra": "mean: 319.8234771720675 usec\nrounds: 2716"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 47228.509200134875,
            "unit": "iter/sec",
            "range": "stddev: 0.000010706982276568892",
            "extra": "mean: 21.173651612893682 usec\nrounds: 17825"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 3320.6804472155973,
            "unit": "iter/sec",
            "range": "stddev: 0.00017339530383729226",
            "extra": "mean: 301.14309880027866 usec\nrounds: 2834"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 48882.42859969161,
            "unit": "iter/sec",
            "range": "stddev: 0.000005137412138207508",
            "extra": "mean: 20.457248722014373 usec\nrounds: 17606"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 3172.3871527825186,
            "unit": "iter/sec",
            "range": "stddev: 0.00020391226219477332",
            "extra": "mean: 315.2200383622454 usec\nrounds: 2711"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 3262.9041746682806,
            "unit": "iter/sec",
            "range": "stddev: 0.00008015823339299792",
            "extra": "mean: 306.4754422650686 usec\nrounds: 2702"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 56264.51995356096,
            "unit": "iter/sec",
            "range": "stddev: 0.000006996658457165356",
            "extra": "mean: 17.77318993968792 usec\nrounds: 23697"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 3244.963377352982,
            "unit": "iter/sec",
            "range": "stddev: 0.00012674024977605406",
            "extra": "mean: 308.1698878265095 usec\nrounds: 2719"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 56103.4285565435,
            "unit": "iter/sec",
            "range": "stddev: 0.000009146630875780038",
            "extra": "mean: 17.824222613991516 usec\nrounds: 20704"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 3310.3376569584666,
            "unit": "iter/sec",
            "range": "stddev: 0.000054830839654369574",
            "extra": "mean: 302.08398768565456 usec\nrounds: 2761"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 56629.588535488656,
            "unit": "iter/sec",
            "range": "stddev: 0.000006542968497480232",
            "extra": "mean: 17.658613206651143 usec\nrounds: 21368"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 48347.01383817275,
            "unit": "iter/sec",
            "range": "stddev: 0.000016359361117922712",
            "extra": "mean: 20.68380072753206 usec\nrounds: 18417"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 3389.1715061959303,
            "unit": "iter/sec",
            "range": "stddev: 0.00011585435097604996",
            "extra": "mean: 295.0573608245688 usec\nrounds: 2813"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 47038.797080932156,
            "unit": "iter/sec",
            "range": "stddev: 0.000017601296201682793",
            "extra": "mean: 21.259047043219656 usec\nrounds: 18940"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 3369.8373870777423,
            "unit": "iter/sec",
            "range": "stddev: 0.00004332117792993805",
            "extra": "mean: 296.7502241605731 usec\nrounds: 3038"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 50032.20100116533,
            "unit": "iter/sec",
            "range": "stddev: 0.000006790541545604683",
            "extra": "mean: 19.987127889430816 usec\nrounds: 17953"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 3459.75236968356,
            "unit": "iter/sec",
            "range": "stddev: 0.000040517688484289475",
            "extra": "mean: 289.0380273347318 usec\nrounds: 439"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 3368.4866071877595,
            "unit": "iter/sec",
            "range": "stddev: 0.00019831793579316872",
            "extra": "mean: 296.86922247699465 usec\nrounds: 2616"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 58145.72164000439,
            "unit": "iter/sec",
            "range": "stddev: 0.000012475917649743607",
            "extra": "mean: 17.198169904765578 usec\nrounds: 23419"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 3350.0506846664093,
            "unit": "iter/sec",
            "range": "stddev: 0.00006801117289546999",
            "extra": "mean: 298.5029464112653 usec\nrounds: 3079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 55080.1688886034,
            "unit": "iter/sec",
            "range": "stddev: 0.0000463651781802549",
            "extra": "mean: 18.155354643564085 usec\nrounds: 22321"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 3225.048191463458,
            "unit": "iter/sec",
            "range": "stddev: 0.00012182625444970338",
            "extra": "mean: 310.07288593297625 usec\nrounds: 2744"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 55932.79932794786,
            "unit": "iter/sec",
            "range": "stddev: 0.000006837051254449387",
            "extra": "mean: 17.878597388568956 usec\nrounds: 21368"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 46424.762020031485,
            "unit": "iter/sec",
            "range": "stddev: 0.00006791608620501995",
            "extra": "mean: 21.54022888837895 usec\nrounds: 17668"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 3324.998673933942,
            "unit": "iter/sec",
            "range": "stddev: 0.00005231979398727929",
            "extra": "mean: 300.75199964421614 usec\nrounds: 2811"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 46247.74128931869,
            "unit": "iter/sec",
            "range": "stddev: 0.000025417314333542492",
            "extra": "mean: 21.62267760806209 usec\nrounds: 18797"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 3279.6344616919464,
            "unit": "iter/sec",
            "range": "stddev: 0.00009610008280056773",
            "extra": "mean: 304.91202958152394 usec\nrounds: 2772"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 47372.736253526324,
            "unit": "iter/sec",
            "range": "stddev: 0.000014152095029066602",
            "extra": "mean: 21.109188091822798 usec\nrounds: 17954"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 3197.9374973953377,
            "unit": "iter/sec",
            "range": "stddev: 0.0002720790619402275",
            "extra": "mean: 312.70154617295736 usec\nrounds: 2404"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 3347.3620435173666,
            "unit": "iter/sec",
            "range": "stddev: 0.00004135202256300563",
            "extra": "mean: 298.7427075408946 usec\nrounds: 2944"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 54138.863146198324,
            "unit": "iter/sec",
            "range": "stddev: 0.00004345916290153647",
            "extra": "mean: 18.471019557606297 usec\nrounds: 19532"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 3329.404167887674,
            "unit": "iter/sec",
            "range": "stddev: 0.000062197208769354",
            "extra": "mean: 300.3540422172432 usec\nrounds: 2724"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 56618.0396409189,
            "unit": "iter/sec",
            "range": "stddev: 0.000006722615525797577",
            "extra": "mean: 17.662215193994133 usec\nrounds: 21232"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 3297.2087112756903,
            "unit": "iter/sec",
            "range": "stddev: 0.0001593174569433636",
            "extra": "mean: 303.28683670531126 usec\nrounds: 2768"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 53883.88507228443,
            "unit": "iter/sec",
            "range": "stddev: 0.000010708852158571416",
            "extra": "mean: 18.558424260955107 usec\nrounds: 21277"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 166692.08967888932,
            "unit": "iter/sec",
            "range": "stddev: 0.000004325991434814964",
            "extra": "mean: 5.999084911145876 usec\nrounds: 72464"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 152464.13517804444,
            "unit": "iter/sec",
            "range": "stddev: 0.000045368522220993984",
            "extra": "mean: 6.558919570377786 usec\nrounds: 66667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 166491.12724348943,
            "unit": "iter/sec",
            "range": "stddev: 0.000004294329226320812",
            "extra": "mean: 6.0063260820951925 usec\nrounds: 67115"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 160260.0687327492,
            "unit": "iter/sec",
            "range": "stddev: 0.000010311568491301683",
            "extra": "mean: 6.2398575509636585 usec\nrounds: 67568"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 155741.03449036455,
            "unit": "iter/sec",
            "range": "stddev: 0.00002267621136388988",
            "extra": "mean: 6.420915356523257 usec\nrounds: 71429"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 160324.45030192114,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074964678864443254",
            "extra": "mean: 6.2373518082663715 usec\nrounds: 66667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 160720.9830101445,
            "unit": "iter/sec",
            "range": "stddev: 0.000027845752213654048",
            "extra": "mean: 6.221962940189841 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 166353.4124677208,
            "unit": "iter/sec",
            "range": "stddev: 0.000005683882955335152",
            "extra": "mean: 6.011298386764624 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 153101.78891272066,
            "unit": "iter/sec",
            "range": "stddev: 0.000031329795793803505",
            "extra": "mean: 6.531602322230696 usec\nrounds: 28249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 158698.76673129058,
            "unit": "iter/sec",
            "range": "stddev: 0.00002889812150057739",
            "extra": "mean: 6.301246194894533 usec\nrounds: 71943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 162330.3972008576,
            "unit": "iter/sec",
            "range": "stddev: 0.00000529243090357119",
            "extra": "mean: 6.160275692313263 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 163882.06536378656,
            "unit": "iter/sec",
            "range": "stddev: 0.000017808146219576038",
            "extra": "mean: 6.1019489703171175 usec\nrounds: 71429"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 170937.58332050176,
            "unit": "iter/sec",
            "range": "stddev: 0.00002177480043386444",
            "extra": "mean: 5.850088556154654 usec\nrounds: 78741"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 170515.82036666138,
            "unit": "iter/sec",
            "range": "stddev: 0.000007218461735518946",
            "extra": "mean: 5.8645584782086075 usec\nrounds: 72993"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 171918.137513462,
            "unit": "iter/sec",
            "range": "stddev: 0.00001096432668134423",
            "extra": "mean: 5.816721926281312 usec\nrounds: 81295"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 180168.73147486424,
            "unit": "iter/sec",
            "range": "stddev: 0.0000185329444054903",
            "extra": "mean: 5.5503526711543305 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 175823.710988514,
            "unit": "iter/sec",
            "range": "stddev: 0.00003487464987592941",
            "extra": "mean: 5.687515036383953 usec\nrounds: 68966"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 170196.64893992367,
            "unit": "iter/sec",
            "range": "stddev: 0.000010672554466690618",
            "extra": "mean: 5.875556341611531 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 169324.03318821467,
            "unit": "iter/sec",
            "range": "stddev: 0.0000326254712639069",
            "extra": "mean: 5.905836172047916 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 181296.39283008382,
            "unit": "iter/sec",
            "range": "stddev: 0.000004688294539474803",
            "extra": "mean: 5.5158295451428465 usec\nrounds: 70922"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 179756.84465389067,
            "unit": "iter/sec",
            "range": "stddev: 0.000003216975726522818",
            "extra": "mean: 5.563070501851714 usec\nrounds: 69445"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 184912.41495886634,
            "unit": "iter/sec",
            "range": "stddev: 0.000004199290868178959",
            "extra": "mean: 5.407965712969838 usec\nrounds: 80001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 177869.2562129334,
            "unit": "iter/sec",
            "range": "stddev: 0.000006817479199674921",
            "extra": "mean: 5.622107053750007 usec\nrounds: 68489"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 180898.25434079656,
            "unit": "iter/sec",
            "range": "stddev: 0.000003350628391527956",
            "extra": "mean: 5.527969319792811 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 182293.60937608,
            "unit": "iter/sec",
            "range": "stddev: 0.000003473871677047559",
            "extra": "mean: 5.4856558242640014 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 178551.77188715388,
            "unit": "iter/sec",
            "range": "stddev: 0.000002627283599035947",
            "extra": "mean: 5.600616501481754 usec\nrounds: 71424"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 170420.6958254668,
            "unit": "iter/sec",
            "range": "stddev: 0.000020183000332454496",
            "extra": "mean: 5.867831927080801 usec\nrounds: 80001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 158060.79447878417,
            "unit": "iter/sec",
            "range": "stddev: 0.000010362929502503168",
            "extra": "mean: 6.326679574764669 usec\nrounds: 65360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 162264.18367878292,
            "unit": "iter/sec",
            "range": "stddev: 0.000008666409720992802",
            "extra": "mean: 6.162789454385037 usec\nrounds: 68028"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 163846.0402599237,
            "unit": "iter/sec",
            "range": "stddev: 0.000004440984207989927",
            "extra": "mean: 6.103290616078424 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 159519.7206961485,
            "unit": "iter/sec",
            "range": "stddev: 0.000006260250083280253",
            "extra": "mean: 6.2688173953412925 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 161451.3258046406,
            "unit": "iter/sec",
            "range": "stddev: 0.000016505010450895722",
            "extra": "mean: 6.193817207856319 usec\nrounds: 76918"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 161160.89011484722,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034591195216743916",
            "extra": "mean: 6.204979379844423 usec\nrounds: 64936"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 149327.60336003403,
            "unit": "iter/sec",
            "range": "stddev: 0.000018255555643688552",
            "extra": "mean: 6.696685525642339 usec\nrounds: 11807"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 170507.4879468964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040605004212282255",
            "extra": "mean: 5.864845069510639 usec\nrounds: 71"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 164045.93823809933,
            "unit": "iter/sec",
            "range": "stddev: 0.00000655470913786977",
            "extra": "mean: 6.09585345873411 usec\nrounds: 70922"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 226461.9352628514,
            "unit": "iter/sec",
            "range": "stddev: 0.000004762079315127375",
            "extra": "mean: 4.4157531323721715 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 165773.99100683673,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035953314387364744",
            "extra": "mean: 6.032309374507118 usec\nrounds: 37314"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 160470.5600645134,
            "unit": "iter/sec",
            "range": "stddev: 0.000005607890050779507",
            "extra": "mean: 6.231672648228893 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 161340.01859845323,
            "unit": "iter/sec",
            "range": "stddev: 0.000014385863220185004",
            "extra": "mean: 6.198090273491434 usec\nrounds: 64936"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 163318.1513858541,
            "unit": "iter/sec",
            "range": "stddev: 0.000007409442878401465",
            "extra": "mean: 6.12301811840503 usec\nrounds: 70922"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 160347.9278123178,
            "unit": "iter/sec",
            "range": "stddev: 0.000004209399295122282",
            "extra": "mean: 6.236438559845117 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 166925.7650100103,
            "unit": "iter/sec",
            "range": "stddev: 0.000004387504626423078",
            "extra": "mean: 5.990686937633812 usec\nrounds: 68028"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 222855.8114981036,
            "unit": "iter/sec",
            "range": "stddev: 0.000006953760784636507",
            "extra": "mean: 4.487206293960655 usec\nrounds: 66667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 167439.70009112955,
            "unit": "iter/sec",
            "range": "stddev: 0.00000257913061309863",
            "extra": "mean: 5.972299278222232 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 166247.10471074967,
            "unit": "iter/sec",
            "range": "stddev: 0.000003846912561021176",
            "extra": "mean: 6.015142349335237 usec\nrounds: 66667"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 165706.25461860513,
            "unit": "iter/sec",
            "range": "stddev: 0.000004072128493193692",
            "extra": "mean: 6.034775225000603 usec\nrounds: 62894"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 166381.94324238485,
            "unit": "iter/sec",
            "range": "stddev: 0.000003354416043433438",
            "extra": "mean: 6.010267583803865 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 165022.44829369322,
            "unit": "iter/sec",
            "range": "stddev: 0.00002017834447562177",
            "extra": "mean: 6.059781625711208 usec\nrounds: 69445"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 163298.3849628514,
            "unit": "iter/sec",
            "range": "stddev: 0.000006883395833437275",
            "extra": "mean: 6.1237592780081025 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 220970.77373239514,
            "unit": "iter/sec",
            "range": "stddev: 0.00000527116691138918",
            "extra": "mean: 4.5254853531491985 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 166882.80382899905,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041475958940772626",
            "extra": "mean: 5.992229139586346 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 166582.64004878083,
            "unit": "iter/sec",
            "range": "stddev: 0.000006181976093830359",
            "extra": "mean: 6.003026484075216 usec\nrounds: 68494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 164170.51154938532,
            "unit": "iter/sec",
            "range": "stddev: 0.000004392459738973705",
            "extra": "mean: 6.091227898130675 usec\nrounds: 70922"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 164009.67777223035,
            "unit": "iter/sec",
            "range": "stddev: 0.000003877394471724819",
            "extra": "mean: 6.09720117485236 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 164904.8707029194,
            "unit": "iter/sec",
            "range": "stddev: 0.000004254856743589567",
            "extra": "mean: 6.064102265369269 usec\nrounds: 60607"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 166581.88773613411,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028778182461422237",
            "extra": "mean: 6.003053594782171 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 221445.1668865759,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033086673412402137",
            "extra": "mean: 4.515790586263729 usec\nrounds: 68028"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 162812.90118454103,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027494625700917435",
            "extra": "mean: 6.142019414459948 usec\nrounds: 67115"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 162740.6878829925,
            "unit": "iter/sec",
            "range": "stddev: 0.000005958782589511536",
            "extra": "mean: 6.144744826929705 usec\nrounds: 64517"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 104735.40646118834,
            "unit": "iter/sec",
            "range": "stddev: 0.000008652721317602839",
            "extra": "mean: 9.547869567590485 usec\nrounds: 23"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 158543.79025919823,
            "unit": "iter/sec",
            "range": "stddev: 0.00000853659279130651",
            "extra": "mean: 6.307405659755779 usec\nrounds: 67564"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 157193.09411695544,
            "unit": "iter/sec",
            "range": "stddev: 0.000027244576566846935",
            "extra": "mean: 6.361602623942091 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 159460.35859904042,
            "unit": "iter/sec",
            "range": "stddev: 0.000004006859473186649",
            "extra": "mean: 6.271151079714288 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 212336.73975241577,
            "unit": "iter/sec",
            "range": "stddev: 0.000020080154939149443",
            "extra": "mean: 4.709500584618555 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 159376.68477182518,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036445870104116626",
            "extra": "mean: 6.274443476043374 usec\nrounds: 48077"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 157858.18792969044,
            "unit": "iter/sec",
            "range": "stddev: 0.000003866929125632499",
            "extra": "mean: 6.33479969024728 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 158258.09917816322,
            "unit": "iter/sec",
            "range": "stddev: 0.00001093564768922476",
            "extra": "mean: 6.318791930353111 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 154111.84259832473,
            "unit": "iter/sec",
            "range": "stddev: 0.000014955327634895273",
            "extra": "mean: 6.488794002719104 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 146483.25848145894,
            "unit": "iter/sec",
            "range": "stddev: 0.00001558188318293453",
            "extra": "mean: 6.82671870059864 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 154687.42846018157,
            "unit": "iter/sec",
            "range": "stddev: 0.00000727631311110702",
            "extra": "mean: 6.46464945441518 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 213847.71428017633,
            "unit": "iter/sec",
            "range": "stddev: 0.000006904500145044842",
            "extra": "mean: 4.676224870422661 usec\nrounds: 62894"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 1932184.716638112,
            "unit": "iter/sec",
            "range": "stddev: 5.19169349188956e-7",
            "extra": "mean: 517.5488613426085 nsec\nrounds: 97088"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 3592.170797430337,
            "unit": "iter/sec",
            "range": "stddev: 0.00002944068396960509",
            "extra": "mean: 278.38319957262354 usec\nrounds: 2806"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 1860709.4373771818,
            "unit": "iter/sec",
            "range": "stddev: 5.460228297796774e-7",
            "extra": "mean: 537.429423375756 nsec\nrounds: 93458"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 3607.152114315289,
            "unit": "iter/sec",
            "range": "stddev: 0.00003796992922701063",
            "extra": "mean: 277.2270113121693 usec\nrounds: 2652"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 1911945.1359349773,
            "unit": "iter/sec",
            "range": "stddev: 0.000001099814657928575",
            "extra": "mean: 523.0275603649216 nsec\nrounds: 101011"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 3571.9031271370595,
            "unit": "iter/sec",
            "range": "stddev: 0.00003392370625255492",
            "extra": "mean: 279.9627997754567 usec\nrounds: 2672"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 3541.7362578533907,
            "unit": "iter/sec",
            "range": "stddev: 0.00008975623636065768",
            "extra": "mean: 282.3473932545416 usec\nrounds: 3054"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 1910523.785189176,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013885572372427903",
            "extra": "mean: 523.4166712561256 nsec\nrounds: 98040"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 3555.966207930157,
            "unit": "iter/sec",
            "range": "stddev: 0.00008184005881876583",
            "extra": "mean: 281.2175205067756 usec\nrounds: 2999"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 1793751.7260359123,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013158054094178157",
            "extra": "mean: 557.4907527532995 nsec\nrounds: 106383"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 3448.542172923175,
            "unit": "iter/sec",
            "range": "stddev: 0.00007622007817038425",
            "extra": "mean: 289.9776049867312 usec\nrounds: 1524"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 1999681.0632219857,
            "unit": "iter/sec",
            "range": "stddev: 3.031143220957802e-7",
            "extra": "mean: 500.079746911893 nsec\nrounds: 113637"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 1834631.682638223,
            "unit": "iter/sec",
            "range": "stddev: 2.9244981219195647e-7",
            "extra": "mean: 545.068533081238 nsec\nrounds: 43479"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 3805.1453093810073,
            "unit": "iter/sec",
            "range": "stddev: 0.00002830734032397961",
            "extra": "mean: 262.80205319220056 usec\nrounds: 94"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 1901876.4050336403,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017048498051889151",
            "extra": "mean: 525.7965225042622 nsec\nrounds: 93458"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 3664.5307435993864,
            "unit": "iter/sec",
            "range": "stddev: 0.00006512669402582325",
            "extra": "mean: 272.88623563784785 usec\nrounds: 3081"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 1898509.8446603124,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017118008471463409",
            "extra": "mean: 526.728898884723 nsec\nrounds: 106383"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 3713.19701268058,
            "unit": "iter/sec",
            "range": "stddev: 0.0001667832776582543",
            "extra": "mean: 269.30970712973124 usec\nrounds: 2735"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 3852.5427866423634,
            "unit": "iter/sec",
            "range": "stddev: 0.00003389842071181139",
            "extra": "mean: 259.56882386023744 usec\nrounds: 3378"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 1936539.4158718102,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013046477836641803",
            "extra": "mean: 516.3850484035964 nsec\nrounds: 107527"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 3786.921812037684,
            "unit": "iter/sec",
            "range": "stddev: 0.00005665667178267873",
            "extra": "mean: 264.0667142430162 usec\nrounds: 3349"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 1964892.1842454735,
            "unit": "iter/sec",
            "range": "stddev: 4.171648681195261e-7",
            "extra": "mean: 508.93377663067525 nsec\nrounds: 107527"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 3702.5573865716215,
            "unit": "iter/sec",
            "range": "stddev: 0.00009889174437153139",
            "extra": "mean: 270.08359239124417 usec\nrounds: 3128"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 1909872.9215229487,
            "unit": "iter/sec",
            "range": "stddev: 3.343294722198701e-7",
            "extra": "mean: 523.5950458956427 nsec\nrounds: 107527"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 1975723.8314942536,
            "unit": "iter/sec",
            "range": "stddev: 8.184358113105015e-7",
            "extra": "mean: 506.14361382872806 nsec\nrounds: 112360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 3466.54240214832,
            "unit": "iter/sec",
            "range": "stddev: 0.00007400954377446197",
            "extra": "mean: 288.4718788901212 usec\nrounds: 2956"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 1925424.5526777473,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014995877079434812",
            "extra": "mean: 519.3659749529387 nsec\nrounds: 102041"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 3596.923396756638,
            "unit": "iter/sec",
            "range": "stddev: 0.000054837722833827445",
            "extra": "mean: 278.0153730551239 usec\nrounds: 2828"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 1914262.7061369042,
            "unit": "iter/sec",
            "range": "stddev: 3.570400084569469e-7",
            "extra": "mean: 522.3943384543206 nsec\nrounds: 95239"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 3516.8123780469455,
            "unit": "iter/sec",
            "range": "stddev: 0.0001040691315147015",
            "extra": "mean: 284.3484077348897 usec\nrounds: 3051"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 3597.728999319094,
            "unit": "iter/sec",
            "range": "stddev: 0.00007271537074449432",
            "extra": "mean: 277.95311992350173 usec\nrounds: 3152"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 1912733.7637565667,
            "unit": "iter/sec",
            "range": "stddev: 4.520723181425615e-7",
            "extra": "mean: 522.8119139989076 nsec\nrounds: 100000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 3607.749204689647,
            "unit": "iter/sec",
            "range": "stddev: 0.000036971493651325915",
            "extra": "mean: 277.181129636206 usec\nrounds: 2885"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 1929002.3902936622,
            "unit": "iter/sec",
            "range": "stddev: 2.4027907835078167e-7",
            "extra": "mean: 518.4026754096648 nsec\nrounds: 97088"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 3588.0386990526617,
            "unit": "iter/sec",
            "range": "stddev: 0.00006033831821343648",
            "extra": "mean: 278.7037944334399 usec\nrounds: 2982"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 1875413.805509244,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012249541268546058",
            "extra": "mean: 533.2156546264658 nsec\nrounds: 93458"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 10497.892582090833,
            "unit": "iter/sec",
            "range": "stddev: 0.000025554158102332817",
            "extra": "mean: 95.25721397702024 usec\nrounds: 6940"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 10417.637511282366,
            "unit": "iter/sec",
            "range": "stddev: 0.00007596847370913418",
            "extra": "mean: 95.99105352984242 usec\nrounds: 7734"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 8215.316980037798,
            "unit": "iter/sec",
            "range": "stddev: 0.000016261049947279117",
            "extra": "mean: 121.7238485660232 usec\nrounds: 4114"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 78.8850866935411,
            "unit": "iter/sec",
            "range": "stddev: 0.025220676397959323",
            "extra": "mean: 12.676667313365295 msec\nrounds: 217"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 126113.03831948637,
            "unit": "iter/sec",
            "range": "stddev: 0.000002704373067172539",
            "extra": "mean: 7.929394242859065 usec\nrounds: 34844"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 125350.83736482795,
            "unit": "iter/sec",
            "range": "stddev: 0.000004626120142011465",
            "extra": "mean: 7.977609252737142 usec\nrounds: 54946"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 85.44157935375459,
            "unit": "iter/sec",
            "range": "stddev: 0.02558136980339722",
            "extra": "mean: 11.703903504167338 msec\nrounds: 240"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 86.40776178931941,
            "unit": "iter/sec",
            "range": "stddev: 0.025095938805010178",
            "extra": "mean: 11.573034404457944 msec\nrounds: 314"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 54872.737276408036,
            "unit": "iter/sec",
            "range": "stddev: 0.000014157641856816825",
            "extra": "mean: 18.223986074591902 usec\nrounds: 24631"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 57260.916860515856,
            "unit": "iter/sec",
            "range": "stddev: 0.000005353984075830946",
            "extra": "mean: 17.463918756940963 usec\nrounds: 21368"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 67.41569101805499,
            "unit": "iter/sec",
            "range": "stddev: 0.025302043003088814",
            "extra": "mean: 14.833341984615782 msec\nrounds: 130"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 66.74846278753422,
            "unit": "iter/sec",
            "range": "stddev: 0.0255513206605901",
            "extra": "mean: 14.981618425926618 msec\nrounds: 162"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 16071.389149599854,
            "unit": "iter/sec",
            "range": "stddev: 0.000022833931682463963",
            "extra": "mean: 62.22237484834334 usec\nrounds: 5781"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 1100.8519481623448,
            "unit": "iter/sec",
            "range": "stddev: 0.00015945993782076642",
            "extra": "mean: 908.3873645945786 usec\nrounds: 949"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 1132.9891676315274,
            "unit": "iter/sec",
            "range": "stddev: 0.00007052806573242017",
            "extra": "mean: 882.6209716465901 usec\nrounds: 917"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 18646.49552824355,
            "unit": "iter/sec",
            "range": "stddev: 0.00008012762177311085",
            "extra": "mean: 53.62938030287331 usec\nrounds: 8651"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 34.23275319844707,
            "unit": "iter/sec",
            "range": "stddev: 0.02636361053329881",
            "extra": "mean: 29.211790071426794 msec\nrounds: 28"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 3.1828559381079895,
            "unit": "iter/sec",
            "range": "stddev: 0.03173603039539227",
            "extra": "mean: 314.18324279999865 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 3.482679814851029,
            "unit": "iter/sec",
            "range": "stddev: 0.004941841767973193",
            "extra": "mean: 287.13520999999673 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 37.6944626487116,
            "unit": "iter/sec",
            "range": "stddev: 0.025804989667365892",
            "extra": "mean: 26.529095515152015 msec\nrounds: 33"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 17048.49397708977,
            "unit": "iter/sec",
            "range": "stddev: 0.00006707681369629096",
            "extra": "mean: 58.6562074834192 usec\nrounds: 5051"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 1221.2868834416477,
            "unit": "iter/sec",
            "range": "stddev: 0.00008772868751298923",
            "extra": "mean: 818.8084335942018 usec\nrounds: 768"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 1162.9707632005711,
            "unit": "iter/sec",
            "range": "stddev: 0.00006563947431222232",
            "extra": "mean: 859.8668441568857 usec\nrounds: 308"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 19643.892583812627,
            "unit": "iter/sec",
            "range": "stddev: 0.000017841628717369762",
            "extra": "mean: 50.90640746142345 usec\nrounds: 7559"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 33.58955752216956,
            "unit": "iter/sec",
            "range": "stddev: 0.029319340611683585",
            "extra": "mean: 29.771157281246907 msec\nrounds: 32"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 3.1088280880746613,
            "unit": "iter/sec",
            "range": "stddev: 0.039549746755724126",
            "extra": "mean: 321.66461820000904 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 3.1088530254228632,
            "unit": "iter/sec",
            "range": "stddev: 0.041398461385434474",
            "extra": "mean: 321.66203800000517 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 34.415138674979595,
            "unit": "iter/sec",
            "range": "stddev: 0.02966887607152643",
            "extra": "mean: 29.056980111110736 msec\nrounds: 36"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 53019.36686840921,
            "unit": "iter/sec",
            "range": "stddev: 0.000015252512750393865",
            "extra": "mean: 18.861032469171843 usec\nrounds: 25840"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 52022.78442264437,
            "unit": "iter/sec",
            "range": "stddev: 0.0000407577480852204",
            "extra": "mean: 19.222346729382714 usec\nrounds: 26525"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 51826.679460302636,
            "unit": "iter/sec",
            "range": "stddev: 0.000027431034628476968",
            "extra": "mean: 19.295081421644305 usec\nrounds: 27855"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 52908.99852785329,
            "unit": "iter/sec",
            "range": "stddev: 0.00004376523736534065",
            "extra": "mean: 18.90037664337121 usec\nrounds: 20080"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 66.28382958708374,
            "unit": "iter/sec",
            "range": "stddev: 0.025911002314636986",
            "extra": "mean: 15.086635854167104 msec\nrounds: 144"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 65.90065842494742,
            "unit": "iter/sec",
            "range": "stddev: 0.026157400302007257",
            "extra": "mean: 15.174355217389436 msec\nrounds: 138"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 64.17946101392666,
            "unit": "iter/sec",
            "range": "stddev: 0.02670379141742083",
            "extra": "mean: 15.581308789474011 msec\nrounds: 133"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 64.13084220425554,
            "unit": "iter/sec",
            "range": "stddev: 0.026811562438925",
            "extra": "mean: 15.593121275641737 msec\nrounds: 156"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 70685.9517889169,
            "unit": "iter/sec",
            "range": "stddev: 0.000005112460852528756",
            "extra": "mean: 14.1470826195594 usec\nrounds: 21835"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 53466.054002135,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061735406473471505",
            "extra": "mean: 18.70345621466787 usec\nrounds: 20041"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 53659.91084978818,
            "unit": "iter/sec",
            "range": "stddev: 0.000017267770358175555",
            "extra": "mean: 18.635886347245908 usec\nrounds: 22076"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 72031.73127455825,
            "unit": "iter/sec",
            "range": "stddev: 0.000005395768275459066",
            "extra": "mean: 13.882770583263795 usec\nrounds: 24571"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 69.87920354075241,
            "unit": "iter/sec",
            "range": "stddev: 0.026289183921698156",
            "extra": "mean: 14.310409239521686 msec\nrounds: 167"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 72.63947909199611,
            "unit": "iter/sec",
            "range": "stddev: 0.024820142902042232",
            "extra": "mean: 13.766618545454113 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 64.35344189635862,
            "unit": "iter/sec",
            "range": "stddev: 0.026281538514670657",
            "extra": "mean: 15.539184393750105 msec\nrounds: 160"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 81.95336725011849,
            "unit": "iter/sec",
            "range": "stddev: 0.025092355460752953",
            "extra": "mean: 12.202061166663706 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 393570.0742092391,
            "unit": "iter/sec",
            "range": "stddev: 0.000005322090081497496",
            "extra": "mean: 2.5408435893130337 usec\nrounds: 26456"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 1161.12763940122,
            "unit": "iter/sec",
            "range": "stddev: 0.00022381204839888914",
            "extra": "mean: 861.2317595985298 usec\nrounds: 1094"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 1204.5488864959525,
            "unit": "iter/sec",
            "range": "stddev: 0.00010417379115529176",
            "extra": "mean: 830.1863139062892 usec\nrounds: 978"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 419566.6218920778,
            "unit": "iter/sec",
            "range": "stddev: 0.000008298380282271267",
            "extra": "mean: 2.383411710613203 usec\nrounds: 89286"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 2248.7911852254842,
            "unit": "iter/sec",
            "range": "stddev: 0.00005233964064192825",
            "extra": "mean: 444.6833510243108 usec\nrounds: 2148"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 3.589946995035627,
            "unit": "iter/sec",
            "range": "stddev: 0.003422889972166385",
            "extra": "mean: 278.55564480000794 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 3.727170349221932,
            "unit": "iter/sec",
            "range": "stddev: 0.011056393754577032",
            "extra": "mean: 268.30005240000787 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 2213.472402274519,
            "unit": "iter/sec",
            "range": "stddev: 0.00007568285181805787",
            "extra": "mean: 451.7788425879719 usec\nrounds: 2071"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 347422.23012620996,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016323047768071174",
            "extra": "mean: 2.8783420094814445 usec\nrounds: 35461"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 1483.7081168179386,
            "unit": "iter/sec",
            "range": "stddev: 0.00012228241954440449",
            "extra": "mean: 673.9870117747067 usec\nrounds: 1189"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 1356.276933237444,
            "unit": "iter/sec",
            "range": "stddev: 0.00007064034299725166",
            "extra": "mean: 737.312546939062 usec\nrounds: 980"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 336121.943362758,
            "unit": "iter/sec",
            "range": "stddev: 0.000005825572870448427",
            "extra": "mean: 2.9751107291461625 usec\nrounds: 84034"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 1689.4318912520287,
            "unit": "iter/sec",
            "range": "stddev: 0.000131615775585922",
            "extra": "mean: 591.9149538836427 usec\nrounds: 1648"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 4.8006173563195205,
            "unit": "iter/sec",
            "range": "stddev: 0.007865497105147942",
            "extra": "mean: 208.30654180000465 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 4.1216503552615995,
            "unit": "iter/sec",
            "range": "stddev: 0.017155066486565562",
            "extra": "mean: 242.6212593999935 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 1687.333890523255,
            "unit": "iter/sec",
            "range": "stddev: 0.00014552216003403445",
            "extra": "mean: 592.6509303324029 usec\nrounds: 1866"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 16399.867513497426,
            "unit": "iter/sec",
            "range": "stddev: 0.000013198834349339853",
            "extra": "mean: 60.9761023482037 usec\nrounds: 7113"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 1108.4679436193005,
            "unit": "iter/sec",
            "range": "stddev: 0.00028597129129272886",
            "extra": "mean: 902.1460708506033 usec\nrounds: 988"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 1088.7772985485476,
            "unit": "iter/sec",
            "range": "stddev: 0.000225935138793969",
            "extra": "mean: 918.4614717197935 usec\nrounds: 937"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 19228.80078219798,
            "unit": "iter/sec",
            "range": "stddev: 0.000010992116149371533",
            "extra": "mean: 52.00532322981888 usec\nrounds: 8446"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 32.5118087344647,
            "unit": "iter/sec",
            "range": "stddev: 0.027928578905230164",
            "extra": "mean: 30.75805496296282 msec\nrounds: 27"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 3.2648310125134,
            "unit": "iter/sec",
            "range": "stddev: 0.008610337899081852",
            "extra": "mean: 306.2945665999905 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 3.1007675385082214,
            "unit": "iter/sec",
            "range": "stddev: 0.048748673953334494",
            "extra": "mean: 322.50079619999497 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 34.95777583096921,
            "unit": "iter/sec",
            "range": "stddev: 0.028793107333655452",
            "extra": "mean: 28.605938914285744 msec\nrounds: 35"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 16428.504880598142,
            "unit": "iter/sec",
            "range": "stddev: 0.000014900958934744476",
            "extra": "mean: 60.86981178555009 usec\nrounds: 5855"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 1069.9863238252008,
            "unit": "iter/sec",
            "range": "stddev: 0.00035422111490504755",
            "extra": "mean: 934.5913847057411 usec\nrounds: 850"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 1100.402701385391,
            "unit": "iter/sec",
            "range": "stddev: 0.0002010972217893758",
            "extra": "mean: 908.7582198235378 usec\nrounds: 1019"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 18090.865080145533,
            "unit": "iter/sec",
            "range": "stddev: 0.00004617926420800495",
            "extra": "mean: 55.27651638381217 usec\nrounds: 9125"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 30.398509620131847,
            "unit": "iter/sec",
            "range": "stddev: 0.031805538510618875",
            "extra": "mean: 32.896349607144415 msec\nrounds: 28"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 3.026759494733069,
            "unit": "iter/sec",
            "range": "stddev: 0.040030745401900256",
            "extra": "mean: 330.3863427999886 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 3.096430532110488,
            "unit": "iter/sec",
            "range": "stddev: 0.04679325906565008",
            "extra": "mean: 322.95250600000145 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 36.43760617638197,
            "unit": "iter/sec",
            "range": "stddev: 0.029363098676805085",
            "extra": "mean: 27.444173888903205 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 55231.76217148488,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068753015795903845",
            "extra": "mean: 18.105524080422718 usec\nrounds: 30211"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 53885.563797849085,
            "unit": "iter/sec",
            "range": "stddev: 0.000013952206464225726",
            "extra": "mean: 18.55784610051563 usec\nrounds: 27323"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 54336.589899182174,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064906220931561376",
            "extra": "mean: 18.403804910382334 usec\nrounds: 23256"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 53257.022357184054,
            "unit": "iter/sec",
            "range": "stddev: 0.000011406898538753877",
            "extra": "mean: 18.776866518995423 usec\nrounds: 20325"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 63.284853784238564,
            "unit": "iter/sec",
            "range": "stddev: 0.027686707632651863",
            "extra": "mean: 15.80156925714594 msec\nrounds: 140"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 62.940657475106875,
            "unit": "iter/sec",
            "range": "stddev: 0.027690402302385064",
            "extra": "mean: 15.887981475177657 msec\nrounds: 141"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 64.70380118320543,
            "unit": "iter/sec",
            "range": "stddev: 0.027072394063561697",
            "extra": "mean: 15.455042543305181 msec\nrounds: 127"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 72.30102698218437,
            "unit": "iter/sec",
            "range": "stddev: 0.025856308793834767",
            "extra": "mean: 13.83106218181948 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 75721.87001709273,
            "unit": "iter/sec",
            "range": "stddev: 0.000004748839972467289",
            "extra": "mean: 13.2062243018334 usec\nrounds: 25381"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 56427.369043769366,
            "unit": "iter/sec",
            "range": "stddev: 0.000007074494728338523",
            "extra": "mean: 17.721896607022803 usec\nrounds: 29499"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 55715.34074091042,
            "unit": "iter/sec",
            "range": "stddev: 0.000008263048899753013",
            "extra": "mean: 17.94837807149449 usec\nrounds: 20877"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 76353.07304364906,
            "unit": "iter/sec",
            "range": "stddev: 0.000005505193447932274",
            "extra": "mean: 13.097049799532314 usec\nrounds: 31446"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 68.91570052577254,
            "unit": "iter/sec",
            "range": "stddev: 0.02741348752438601",
            "extra": "mean: 14.510481535713739 msec\nrounds: 168"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 66.03664183037365,
            "unit": "iter/sec",
            "range": "stddev: 0.026604607471684298",
            "extra": "mean: 15.143108012195263 msec\nrounds: 164"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 62.12724688165331,
            "unit": "iter/sec",
            "range": "stddev: 0.02806780887849551",
            "extra": "mean: 16.095997331169492 msec\nrounds: 154"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 73.25270221440687,
            "unit": "iter/sec",
            "range": "stddev: 0.02669971665996124",
            "extra": "mean: 13.651373529853572 msec\nrounds: 134"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 469754.40027347935,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014782126531024598",
            "extra": "mean: 2.1287719698161953 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 1254.6819086429973,
            "unit": "iter/sec",
            "range": "stddev: 0.00011260973886209056",
            "extra": "mean: 797.0147597661237 usec\nrounds: 1024"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 1237.5806661020938,
            "unit": "iter/sec",
            "range": "stddev: 0.0002104844183805202",
            "extra": "mean: 808.0281369857029 usec\nrounds: 1095"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 464015.7827210663,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029846516189433165",
            "extra": "mean: 2.1550991092066574 usec\nrounds: 117648"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 2334.535230577986,
            "unit": "iter/sec",
            "range": "stddev: 0.00007152283252800843",
            "extra": "mean: 428.35078558759596 usec\nrounds: 2248"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 3.6969463758253713,
            "unit": "iter/sec",
            "range": "stddev: 0.009760868146001576",
            "extra": "mean: 270.49350959999856 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 3.8402340131696477,
            "unit": "iter/sec",
            "range": "stddev: 0.008194138329461352",
            "extra": "mean: 260.40079759999344 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 2207.086426163829,
            "unit": "iter/sec",
            "range": "stddev: 0.00012432513216998115",
            "extra": "mean: 453.08601790375536 usec\nrounds: 2290"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 347804.5186475205,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014554404695568708",
            "extra": "mean: 2.875178286609443 usec\nrounds: 48781"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 1459.5052448364743,
            "unit": "iter/sec",
            "range": "stddev: 0.00006920215395341027",
            "extra": "mean: 685.1636905984822 usec\nrounds: 1170"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 1297.56706043565,
            "unit": "iter/sec",
            "range": "stddev: 0.00005998530150138984",
            "extra": "mean: 770.6730777091831 usec\nrounds: 978"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 354209.19770285295,
            "unit": "iter/sec",
            "range": "stddev: 0.000004187455520988846",
            "extra": "mean: 2.823190381518277 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 1607.4504302573655,
            "unit": "iter/sec",
            "range": "stddev: 0.00021867583494128887",
            "extra": "mean: 622.1031648483818 usec\nrounds: 1650"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 4.421599642657865,
            "unit": "iter/sec",
            "range": "stddev: 0.00921918185815444",
            "extra": "mean: 226.1624933999883 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 3.9899971091672635,
            "unit": "iter/sec",
            "range": "stddev: 0.0036972181606954127",
            "extra": "mean: 250.62674800000195 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 1593.584342523975,
            "unit": "iter/sec",
            "range": "stddev: 0.0001751166597846319",
            "extra": "mean: 627.516205647556 usec\nrounds: 1629"
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
        "date": 1669515826372,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 32.629259045690624,
            "unit": "iter/sec",
            "range": "stddev: 0.0002621291813712926",
            "extra": "mean: 30.647340124999587 msec\nrounds: 32"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 1556199.781454479,
            "unit": "iter/sec",
            "range": "stddev: 2.1815007434073995e-7",
            "extra": "mean: 642.5910168586227 nsec\nrounds: 65790"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 43.467024857010514,
            "unit": "iter/sec",
            "range": "stddev: 0.0005366584571681707",
            "extra": "mean: 23.005945387097654 msec\nrounds: 31"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 2103.1386224836942,
            "unit": "iter/sec",
            "range": "stddev: 0.000007421216774155924",
            "extra": "mean: 475.47983252718427 usec\nrounds: 1654"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 15559.952962642465,
            "unit": "iter/sec",
            "range": "stddev: 0.000001864103361352857",
            "extra": "mean: 64.267546463725 usec\nrounds: 11891"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 15805.80622534976,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016182438935002444",
            "extra": "mean: 63.26788939093624 usec\nrounds: 4647"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 15669.959573855938,
            "unit": "iter/sec",
            "range": "stddev: 0.000001647712483787839",
            "extra": "mean: 63.816373953409496 usec\nrounds: 12063"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 15649.172190382304,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025775669634711403",
            "extra": "mean: 63.90114364097686 usec\nrounds: 12211"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 15683.542123322928,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018022879640660021",
            "extra": "mean: 63.761106524074314 usec\nrounds: 12063"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 15208.263693990328,
            "unit": "iter/sec",
            "range": "stddev: 0.000001833570116428607",
            "extra": "mean: 65.75372574550758 usec\nrounds: 11905"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 15247.797558784154,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016330952532444024",
            "extra": "mean: 65.58324217938654 usec\nrounds: 11508"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 15328.804727502862,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017044677816225271",
            "extra": "mean: 65.23665855080046 usec\nrounds: 12034"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 15236.069962278989,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018786956275992803",
            "extra": "mean: 65.63372329450904 usec\nrounds: 12020"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 15239.435802557087,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016722645571367382",
            "extra": "mean: 65.61922717848951 usec\nrounds: 12532"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 14647.118038600902,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016374229231309678",
            "extra": "mean: 68.27281635640593 usec\nrounds: 12301"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 14646.100445685646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016495436174390673",
            "extra": "mean: 68.27755986710945 usec\nrounds: 12937"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 14573.912354037779,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017331791768803097",
            "extra": "mean: 68.61575503594577 usec\nrounds: 12659"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 15228457.184237055,
            "unit": "iter/sec",
            "range": "stddev: 2.993950327336416e-9",
            "extra": "mean: 65.6665339044436 nsec\nrounds: 136987"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 14587238.229712714,
            "unit": "iter/sec",
            "range": "stddev: 3.3762927649441834e-9",
            "extra": "mean: 68.55307250450527 nsec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 12972423.405864468,
            "unit": "iter/sec",
            "range": "stddev: 3.628371220833452e-9",
            "extra": "mean: 77.08659891159344 nsec\nrounds: 126583"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 15503266.135866504,
            "unit": "iter/sec",
            "range": "stddev: 3.1893141247759785e-9",
            "extra": "mean: 64.50253715805769 nsec\nrounds: 151516"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 15570930.06709589,
            "unit": "iter/sec",
            "range": "stddev: 3.159104405233888e-9",
            "extra": "mean: 64.22223949955603 nsec\nrounds: 151516"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 15583931.59647408,
            "unit": "iter/sec",
            "range": "stddev: 3.329328429338261e-9",
            "extra": "mean: 64.16865948167684 nsec\nrounds: 151516"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 63814.94115881029,
            "unit": "iter/sec",
            "range": "stddev: 7.453795368332101e-7",
            "extra": "mean: 15.670311401077583 usec\nrounds: 17858"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 4674.669232341393,
            "unit": "iter/sec",
            "range": "stddev: 0.000003377148442074032",
            "extra": "mean: 213.91887859820446 usec\nrounds: 3196"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 63589.56036564636,
            "unit": "iter/sec",
            "range": "stddev: 6.485424640291774e-7",
            "extra": "mean: 15.725851763243835 usec\nrounds: 22174"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 4652.143672429731,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033126117033162834",
            "extra": "mean: 214.95466830191813 usec\nrounds: 3669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 62936.382743386246,
            "unit": "iter/sec",
            "range": "stddev: 6.609763338349411e-7",
            "extra": "mean: 15.88906061025705 usec\nrounds: 22125"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 4651.490035518851,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035973261797923375",
            "extra": "mean: 214.9848741723586 usec\nrounds: 151"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 4680.523198760223,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031669662825219538",
            "extra": "mean: 213.65132860892135 usec\nrounds: 3810"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 74569.44542988398,
            "unit": "iter/sec",
            "range": "stddev: 4.890331513557051e-7",
            "extra": "mean: 13.410318317846121 usec\nrounds: 25063"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 4675.590300040186,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029938989816040394",
            "extra": "mean: 213.87673765843107 usec\nrounds: 3869"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 74480.2885848766,
            "unit": "iter/sec",
            "range": "stddev: 4.362536618876256e-7",
            "extra": "mean: 13.426371178199924 usec\nrounds: 25446"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 4655.352985131176,
            "unit": "iter/sec",
            "range": "stddev: 0.000002987822890213601",
            "extra": "mean: 214.8064826005503 usec\nrounds: 3707"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 73982.64963134797,
            "unit": "iter/sec",
            "range": "stddev: 6.099704333427308e-7",
            "extra": "mean: 13.516682694969056 usec\nrounds: 25975"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 64261.171482984006,
            "unit": "iter/sec",
            "range": "stddev: 5.317660011736261e-7",
            "extra": "mean: 15.561496575965696 usec\nrounds: 22780"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 4643.972368147942,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032055270103225535",
            "extra": "mean: 215.3328919135686 usec\nrounds: 3747"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 63643.45310782524,
            "unit": "iter/sec",
            "range": "stddev: 5.398979711365488e-7",
            "extra": "mean: 15.71253524389684 usec\nrounds: 22472"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 4640.983681988839,
            "unit": "iter/sec",
            "range": "stddev: 0.00000317188656362754",
            "extra": "mean: 215.471561315954 usec\nrounds: 3800"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 64060.79277211967,
            "unit": "iter/sec",
            "range": "stddev: 5.690569404951938e-7",
            "extra": "mean: 15.610172099450146 usec\nrounds: 22272"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 4635.448377059338,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030735601092260868",
            "extra": "mean: 215.72886130044353 usec\nrounds: 3814"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 4664.113473653334,
            "unit": "iter/sec",
            "range": "stddev: 0.000003196683935965668",
            "extra": "mean: 214.4030169181785 usec\nrounds: 3842"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 74798.9080636227,
            "unit": "iter/sec",
            "range": "stddev: 5.729990862189226e-7",
            "extra": "mean: 13.369179121564406 usec\nrounds: 25318"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 4666.457684170319,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028672018770133414",
            "extra": "mean: 214.29531085050365 usec\nrounds: 3751"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 74533.89215458784,
            "unit": "iter/sec",
            "range": "stddev: 5.288718672146708e-7",
            "extra": "mean: 13.416715149209423 usec\nrounds: 25975"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 4620.151992993929,
            "unit": "iter/sec",
            "range": "stddev: 0.000003163509680317139",
            "extra": "mean: 216.4430957068979 usec\nrounds: 3657"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 74227.68929966954,
            "unit": "iter/sec",
            "range": "stddev: 5.173747864446266e-7",
            "extra": "mean: 13.472061564018698 usec\nrounds: 25908"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 63147.13946082049,
            "unit": "iter/sec",
            "range": "stddev: 5.911089529216785e-7",
            "extra": "mean: 15.836030080514542 usec\nrounds: 22473"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 4648.463725202321,
            "unit": "iter/sec",
            "range": "stddev: 0.000003095490925317432",
            "extra": "mean: 215.12483674517128 usec\nrounds: 3859"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 63513.13167165113,
            "unit": "iter/sec",
            "range": "stddev: 6.742363542776932e-7",
            "extra": "mean: 15.744775508311875 usec\nrounds: 21787"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 4578.322798765948,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031958074175266407",
            "extra": "mean: 218.42059722602835 usec\nrounds: 3677"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 63333.34042860615,
            "unit": "iter/sec",
            "range": "stddev: 7.003065014762076e-7",
            "extra": "mean: 15.789471915306143 usec\nrounds: 22076"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 4649.968260502976,
            "unit": "iter/sec",
            "range": "stddev: 0.000003913346387034804",
            "extra": "mean: 215.05523134298394 usec\nrounds: 402"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 4647.357934730492,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030700468394775678",
            "extra": "mean: 215.17602346202577 usec\nrounds: 3836"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 72380.57796631102,
            "unit": "iter/sec",
            "range": "stddev: 5.950477431570523e-7",
            "extra": "mean: 13.815860940837503 usec\nrounds: 25126"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 4627.071095300586,
            "unit": "iter/sec",
            "range": "stddev: 0.000003256172294764226",
            "extra": "mean: 216.1194369837184 usec\nrounds: 3753"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 74004.39238809742,
            "unit": "iter/sec",
            "range": "stddev: 5.870249344818074e-7",
            "extra": "mean: 13.512711444960612 usec\nrounds: 24692"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 4618.989112263842,
            "unit": "iter/sec",
            "range": "stddev: 0.000003593967297053365",
            "extra": "mean: 216.49758760957192 usec\nrounds: 3761"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 74073.76527312616,
            "unit": "iter/sec",
            "range": "stddev: 5.043048341066108e-7",
            "extra": "mean: 13.500056279207374 usec\nrounds: 24876"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 63405.96698838033,
            "unit": "iter/sec",
            "range": "stddev: 6.621070801962009e-7",
            "extra": "mean: 15.77138631421327 usec\nrounds: 21599"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 4643.567515130077,
            "unit": "iter/sec",
            "range": "stddev: 0.000003076823550196479",
            "extra": "mean: 215.35166587795112 usec\nrounds: 3804"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 63214.93514634104,
            "unit": "iter/sec",
            "range": "stddev: 5.838265808711898e-7",
            "extra": "mean: 15.819046522550792 usec\nrounds: 21323"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 4649.689705895283,
            "unit": "iter/sec",
            "range": "stddev: 0.000003236128769480024",
            "extra": "mean: 215.06811491788636 usec\nrounds: 3707"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 63031.193255583756,
            "unit": "iter/sec",
            "range": "stddev: 6.054994494607734e-7",
            "extra": "mean: 15.865160539562098 usec\nrounds: 21054"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 4608.093375470072,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030722848936125157",
            "extra": "mean: 217.0094914576226 usec\nrounds: 3746"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 4654.408236015235,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031474947972117087",
            "extra": "mean: 214.85008389726622 usec\nrounds: 3695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 73464.5790947515,
            "unit": "iter/sec",
            "range": "stddev: 4.901515570806703e-7",
            "extra": "mean: 13.612002033119147 usec\nrounds: 25577"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 4660.345453860165,
            "unit": "iter/sec",
            "range": "stddev: 0.000003445989030579029",
            "extra": "mean: 214.57636776082762 usec\nrounds: 3747"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 74263.47195266947,
            "unit": "iter/sec",
            "range": "stddev: 4.750878962646609e-7",
            "extra": "mean: 13.465570269019103 usec\nrounds: 25381"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 4647.963429702526,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032465203262821424",
            "extra": "mean: 215.14799226034378 usec\nrounds: 3747"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 73805.49526419326,
            "unit": "iter/sec",
            "range": "stddev: 7.228714023534857e-7",
            "extra": "mean: 13.549126612055268 usec\nrounds: 25511"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 63880.899542676736,
            "unit": "iter/sec",
            "range": "stddev: 5.361461566603458e-7",
            "extra": "mean: 15.6541314721458 usec\nrounds: 22423"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 4648.131433327304,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030348783972404327",
            "extra": "mean: 215.1402158789996 usec\nrounds: 3766"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 63392.11230009445,
            "unit": "iter/sec",
            "range": "stddev: 5.352219633714667e-7",
            "extra": "mean: 15.774833235814262 usec\nrounds: 22223"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 4661.5662381064285,
            "unit": "iter/sec",
            "range": "stddev: 0.000003021681572426665",
            "extra": "mean: 214.5201738903552 usec\nrounds: 3807"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 62954.352296077814,
            "unit": "iter/sec",
            "range": "stddev: 5.673482290958521e-7",
            "extra": "mean: 15.884525271532372 usec\nrounds: 22832"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 4633.776229520941,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038311982034570965",
            "extra": "mean: 215.80670935924414 usec\nrounds: 406"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 4642.6788335850115,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029165554056470934",
            "extra": "mean: 215.3928875644008 usec\nrounds: 3691"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 73444.14510587315,
            "unit": "iter/sec",
            "range": "stddev: 7.166414924028364e-7",
            "extra": "mean: 13.615789230829135 usec\nrounds: 24273"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 4658.456350308639,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030564430899905127",
            "extra": "mean: 214.6633830611607 usec\nrounds: 3613"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 73359.48819565489,
            "unit": "iter/sec",
            "range": "stddev: 5.994734341157139e-7",
            "extra": "mean: 13.631501862893728 usec\nrounds: 24692"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 4635.362743903526,
            "unit": "iter/sec",
            "range": "stddev: 0.000003071290875453507",
            "extra": "mean: 215.73284665050423 usec\nrounds: 3717"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 73492.30141988801,
            "unit": "iter/sec",
            "range": "stddev: 5.125254007429862e-7",
            "extra": "mean: 13.606867395356685 usec\nrounds: 25708"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 62786.15581349184,
            "unit": "iter/sec",
            "range": "stddev: 5.871539952289948e-7",
            "extra": "mean: 15.927077984683919 usec\nrounds: 23043"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 4658.405183804862,
            "unit": "iter/sec",
            "range": "stddev: 0.000003073861891656565",
            "extra": "mean: 214.6657408583825 usec\nrounds: 3774"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 63483.91342179977,
            "unit": "iter/sec",
            "range": "stddev: 6.983817238585986e-7",
            "extra": "mean: 15.752021986354256 usec\nrounds: 22423"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 4650.094025112993,
            "unit": "iter/sec",
            "range": "stddev: 0.000002971649136683034",
            "extra": "mean: 215.04941504396805 usec\nrounds: 3749"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 63743.10446430761,
            "unit": "iter/sec",
            "range": "stddev: 6.805985045821534e-7",
            "extra": "mean: 15.68797140340005 usec\nrounds: 21506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 4633.755055026528,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037705763144808257",
            "extra": "mean: 215.80769551364972 usec\nrounds: 3767"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 4657.116305474805,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031073657234123966",
            "extra": "mean: 214.72515058823456 usec\nrounds: 3825"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 73123.41249074829,
            "unit": "iter/sec",
            "range": "stddev: 5.619364959319453e-7",
            "extra": "mean: 13.675510564096307 usec\nrounds: 25511"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 4635.9117117023125,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032487196606490344",
            "extra": "mean: 215.70730035167105 usec\nrounds: 3699"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 73086.78627209215,
            "unit": "iter/sec",
            "range": "stddev: 5.083447586565886e-7",
            "extra": "mean: 13.682363817135647 usec\nrounds: 25642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 4639.661896547338,
            "unit": "iter/sec",
            "range": "stddev: 0.00000320599182086521",
            "extra": "mean: 215.53294664513433 usec\nrounds: 3711"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 73167.7859810266,
            "unit": "iter/sec",
            "range": "stddev: 5.541300061817995e-7",
            "extra": "mean: 13.667216885027976 usec\nrounds: 24815"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 203465.81463328938,
            "unit": "iter/sec",
            "range": "stddev: 2.9095834750671474e-7",
            "extra": "mean: 4.914830541938067 usec\nrounds: 90099"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 202376.53985672983,
            "unit": "iter/sec",
            "range": "stddev: 3.4098751543256355e-7",
            "extra": "mean: 4.941284205708521 usec\nrounds: 83334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 203372.205131614,
            "unit": "iter/sec",
            "range": "stddev: 3.7077665218191337e-7",
            "extra": "mean: 4.917092772598112 usec\nrounds: 94349"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 200635.59526955322,
            "unit": "iter/sec",
            "range": "stddev: 3.4974777652129435e-7",
            "extra": "mean: 4.984160455957496 usec\nrounds: 84746"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 199904.28199957372,
            "unit": "iter/sec",
            "range": "stddev: 3.524538069047887e-7",
            "extra": "mean: 5.002394095800971 usec\nrounds: 94340"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 197079.1306989934,
            "unit": "iter/sec",
            "range": "stddev: 3.806772641100838e-7",
            "extra": "mean: 5.074103972618688 usec\nrounds: 86215"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 203327.9029275234,
            "unit": "iter/sec",
            "range": "stddev: 3.0633731086198357e-7",
            "extra": "mean: 4.918164135870972 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 205265.0505721939,
            "unit": "iter/sec",
            "range": "stddev: 2.806638551674837e-7",
            "extra": "mean: 4.871749950673115 usec\nrounds: 86207"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 201186.78219797736,
            "unit": "iter/sec",
            "range": "stddev: 2.927228025356454e-7",
            "extra": "mean: 4.970505463007766 usec\nrounds: 43291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 205807.6339055212,
            "unit": "iter/sec",
            "range": "stddev: 2.9723826883557153e-7",
            "extra": "mean: 4.858906256407688 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 198234.40449229753,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016412493203419513",
            "extra": "mean: 5.044533024230188 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 199176.02125201205,
            "unit": "iter/sec",
            "range": "stddev: 3.7348195616453343e-7",
            "extra": "mean: 5.020684687413889 usec\nrounds: 89286"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 198924.30070661008,
            "unit": "iter/sec",
            "range": "stddev: 2.782956940329936e-7",
            "extra": "mean: 5.02703790561457 usec\nrounds: 90910"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 200176.94384886825,
            "unit": "iter/sec",
            "range": "stddev: 3.2805435790240805e-7",
            "extra": "mean: 4.995580313959588 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 204704.59095289148,
            "unit": "iter/sec",
            "range": "stddev: 2.8982300204142957e-7",
            "extra": "mean: 4.8850882891538525 usec\nrounds: 91744"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 202289.83832616344,
            "unit": "iter/sec",
            "range": "stddev: 3.9765562224542354e-7",
            "extra": "mean: 4.943402042704898 usec\nrounds: 87727"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 198047.10229642247,
            "unit": "iter/sec",
            "range": "stddev: 3.540848946357009e-7",
            "extra": "mean: 5.049303869658607 usec\nrounds: 78741"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 198000.01839964997,
            "unit": "iter/sec",
            "range": "stddev: 4.0107492776632623e-7",
            "extra": "mean: 5.050504581174159 usec\nrounds: 80001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 202373.06815532604,
            "unit": "iter/sec",
            "range": "stddev: 6.244917882127797e-7",
            "extra": "mean: 4.941368973229564 usec\nrounds: 81968"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 204459.08258535122,
            "unit": "iter/sec",
            "range": "stddev: 3.264332069177261e-7",
            "extra": "mean: 4.890954157453734 usec\nrounds: 90091"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 200092.7024267196,
            "unit": "iter/sec",
            "range": "stddev: 2.7809338503610284e-7",
            "extra": "mean: 4.997683513051818 usec\nrounds: 84746"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 202655.5722257232,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020456674126801845",
            "extra": "mean: 4.934480651171897 usec\nrounds: 90910"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 198016.42178819605,
            "unit": "iter/sec",
            "range": "stddev: 3.977559079042761e-7",
            "extra": "mean: 5.050086204818044 usec\nrounds: 82652"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 198996.49198033407,
            "unit": "iter/sec",
            "range": "stddev: 3.4290743472908843e-7",
            "extra": "mean: 5.025214213820541 usec\nrounds: 93458"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 200679.29023613196,
            "unit": "iter/sec",
            "range": "stddev: 4.132586194567998e-7",
            "extra": "mean: 4.983075228257667 usec\nrounds: 90910"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 197245.42451404667,
            "unit": "iter/sec",
            "range": "stddev: 3.781404554007293e-7",
            "extra": "mean: 5.069826093374276 usec\nrounds: 81308"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 199767.84272355234,
            "unit": "iter/sec",
            "range": "stddev: 4.3338989252390875e-7",
            "extra": "mean: 5.005810676865768 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 193528.07774699604,
            "unit": "iter/sec",
            "range": "stddev: 3.8431888759679763e-7",
            "extra": "mean: 5.167208870370347 usec\nrounds: 83334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 198861.2126834115,
            "unit": "iter/sec",
            "range": "stddev: 4.321169667508213e-7",
            "extra": "mean: 5.028632715782576 usec\nrounds: 90091"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 201184.56210970896,
            "unit": "iter/sec",
            "range": "stddev: 3.6324041410054486e-7",
            "extra": "mean: 4.970560312946304 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 193895.80321480287,
            "unit": "iter/sec",
            "range": "stddev: 3.826733568366076e-7",
            "extra": "mean: 5.157409203396599 usec\nrounds: 84034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 198891.04321581122,
            "unit": "iter/sec",
            "range": "stddev: 3.888173436462756e-7",
            "extra": "mean: 5.027878499862497 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 194922.54624991675,
            "unit": "iter/sec",
            "range": "stddev: 3.7040618653795235e-7",
            "extra": "mean: 5.13024285409173 usec\nrounds: 84034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 200753.24795126292,
            "unit": "iter/sec",
            "range": "stddev: 3.8886282538618205e-7",
            "extra": "mean: 4.981239457917867 usec\nrounds: 90091"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 184699.00658052546,
            "unit": "iter/sec",
            "range": "stddev: 0.000002331853967763674",
            "extra": "mean: 5.414214285792696 usec\nrounds: 70"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 199195.5024717081,
            "unit": "iter/sec",
            "range": "stddev: 3.4474807506826224e-7",
            "extra": "mean: 5.020193666983173 usec\nrounds: 86215"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 259059.19175931707,
            "unit": "iter/sec",
            "range": "stddev: 2.7510450402159235e-7",
            "extra": "mean: 3.8601216702979038 usec\nrounds: 69450"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 195363.0230625472,
            "unit": "iter/sec",
            "range": "stddev: 2.797135178966622e-7",
            "extra": "mean: 5.11867591074203 usec\nrounds: 70928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 200282.47737967822,
            "unit": "iter/sec",
            "range": "stddev: 2.728955416289627e-7",
            "extra": "mean: 4.992948025624261 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 198010.8197575249,
            "unit": "iter/sec",
            "range": "stddev: 3.0035148804007235e-7",
            "extra": "mean: 5.05022907952482 usec\nrounds: 81308"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 196107.23471110666,
            "unit": "iter/sec",
            "range": "stddev: 3.5250450260567307e-7",
            "extra": "mean: 5.099250935199508 usec\nrounds: 77526"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 189701.32178098505,
            "unit": "iter/sec",
            "range": "stddev: 3.4212137400696246e-7",
            "extra": "mean: 5.271444556166694 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 198176.80855865387,
            "unit": "iter/sec",
            "range": "stddev: 3.2361479107289056e-7",
            "extra": "mean: 5.045999111969919 usec\nrounds: 83334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 254403.38312096611,
            "unit": "iter/sec",
            "range": "stddev: 2.6725013808219956e-7",
            "extra": "mean: 3.9307653370494315 usec\nrounds: 78747"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 194788.64134838764,
            "unit": "iter/sec",
            "range": "stddev: 4.1292837068219366e-7",
            "extra": "mean: 5.133769572382088 usec\nrounds: 81301"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 194992.20097520703,
            "unit": "iter/sec",
            "range": "stddev: 4.0642919275603996e-7",
            "extra": "mean: 5.1284102389671915 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 191660.0594086616,
            "unit": "iter/sec",
            "range": "stddev: 7.635773946240305e-7",
            "extra": "mean: 5.217571167854953 usec\nrounds: 80001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 195882.93405324122,
            "unit": "iter/sec",
            "range": "stddev: 3.871980495601323e-7",
            "extra": "mean: 5.1050899601503765 usec\nrounds: 71943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 192897.11202634606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017238892320936522",
            "extra": "mean: 5.184110790955849 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 193770.25017450406,
            "unit": "iter/sec",
            "range": "stddev: 3.164654876404073e-7",
            "extra": "mean: 5.1607509362217785 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 239745.64910051553,
            "unit": "iter/sec",
            "range": "stddev: 3.4052294923053355e-7",
            "extra": "mean: 4.171087165718452 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 193343.22880076885,
            "unit": "iter/sec",
            "range": "stddev: 3.422617763536015e-7",
            "extra": "mean: 5.172149064658754 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 192687.0667260829,
            "unit": "iter/sec",
            "range": "stddev: 3.8107273060279736e-7",
            "extra": "mean: 5.189761912882116 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 191694.29826874443,
            "unit": "iter/sec",
            "range": "stddev: 4.1417567475073033e-7",
            "extra": "mean: 5.216639248174493 usec\nrounds: 75764"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 193532.00963395485,
            "unit": "iter/sec",
            "range": "stddev: 3.491142370131272e-7",
            "extra": "mean: 5.167103890934597 usec\nrounds: 80007"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 195609.41731062316,
            "unit": "iter/sec",
            "range": "stddev: 2.8811006600578505e-7",
            "extra": "mean: 5.112228305511607 usec\nrounds: 78741"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 196759.65064238515,
            "unit": "iter/sec",
            "range": "stddev: 3.100389621409191e-7",
            "extra": "mean: 5.082342831648554 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 254562.38020926926,
            "unit": "iter/sec",
            "range": "stddev: 2.5726662687450515e-7",
            "extra": "mean: 3.928310220771527 usec\nrounds: 78125"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 188915.49034606083,
            "unit": "iter/sec",
            "range": "stddev: 0.000006091218741830472",
            "extra": "mean: 5.293372174871267 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 194965.47233932166,
            "unit": "iter/sec",
            "range": "stddev: 4.822860482717975e-7",
            "extra": "mean: 5.129113314277417 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 167941.49524966182,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028905096390558563",
            "extra": "mean: 5.954454546884914 usec\nrounds: 22"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 192006.5220301907,
            "unit": "iter/sec",
            "range": "stddev: 3.853935674842541e-7",
            "extra": "mean: 5.208156417951063 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 195758.75446702767,
            "unit": "iter/sec",
            "range": "stddev: 3.8067655851077627e-7",
            "extra": "mean: 5.108328374496444 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 189670.78036837283,
            "unit": "iter/sec",
            "range": "stddev: 3.6629943623041e-7",
            "extra": "mean: 5.272293381499408 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 252368.09191373506,
            "unit": "iter/sec",
            "range": "stddev: 4.057227971957148e-7",
            "extra": "mean: 3.9624660646157355 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 192402.978030619,
            "unit": "iter/sec",
            "range": "stddev: 3.7249145820114006e-7",
            "extra": "mean: 5.197424750051738 usec\nrounds: 80000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 192076.22707331218,
            "unit": "iter/sec",
            "range": "stddev: 3.5654046926197003e-7",
            "extra": "mean: 5.206266362251677 usec\nrounds: 77526"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 194123.75406979746,
            "unit": "iter/sec",
            "range": "stddev: 3.505143514535207e-7",
            "extra": "mean: 5.1513530880947656 usec\nrounds: 78125"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 192085.97316091787,
            "unit": "iter/sec",
            "range": "stddev: 3.675117063007358e-7",
            "extra": "mean: 5.20600220590944 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 193735.97020236065,
            "unit": "iter/sec",
            "range": "stddev: 3.822666100852669e-7",
            "extra": "mean: 5.161664088271695 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 194182.32923232237,
            "unit": "iter/sec",
            "range": "stddev: 3.9456911219017613e-7",
            "extra": "mean: 5.149799180766786 usec\nrounds: 78125"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 256767.7106728262,
            "unit": "iter/sec",
            "range": "stddev: 3.7076899987431323e-7",
            "extra": "mean: 3.8945706895140004 usec\nrounds: 75188"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 2437772.0653398978,
            "unit": "iter/sec",
            "range": "stddev: 1.6949303636878133e-8",
            "extra": "mean: 410.21062396188927 nsec\nrounds: 114943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 4987.363699865337,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032264188861841046",
            "extra": "mean: 200.5067326505586 usec\nrounds: 3905"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 2172842.9915810474,
            "unit": "iter/sec",
            "range": "stddev: 1.9618718292487353e-8",
            "extra": "mean: 460.2265344872343 nsec\nrounds: 111112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 4986.976890712283,
            "unit": "iter/sec",
            "range": "stddev: 0.000002949129985226028",
            "extra": "mean: 200.52228472572116 usec\nrounds: 4046"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 2339950.744818503,
            "unit": "iter/sec",
            "range": "stddev: 1.6993695920063832e-8",
            "extra": "mean: 427.3594229343364 nsec\nrounds: 114943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 4982.48396709335,
            "unit": "iter/sec",
            "range": "stddev: 0.000003978360863496856",
            "extra": "mean: 200.7031044363548 usec\nrounds: 3629"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 5047.159685427108,
            "unit": "iter/sec",
            "range": "stddev: 0.000004202679059070898",
            "extra": "mean: 198.13123862265445 usec\nrounds: 4153"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 2119854.160505769,
            "unit": "iter/sec",
            "range": "stddev: 2.3721788560987672e-8",
            "extra": "mean: 471.7305645977555 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 5046.9892242385495,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032527781125726267",
            "extra": "mean: 198.13793047098733 usec\nrounds: 4099"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 2246903.613864372,
            "unit": "iter/sec",
            "range": "stddev: 1.9527753708540078e-8",
            "extra": "mean: 445.0569191440067 nsec\nrounds: 111112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 5030.789817408343,
            "unit": "iter/sec",
            "range": "stddev: 0.000002818300846972151",
            "extra": "mean: 198.77594498971914 usec\nrounds: 3872"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 2360412.424615202,
            "unit": "iter/sec",
            "range": "stddev: 1.6971941970781423e-8",
            "extra": "mean: 423.65477726332836 nsec\nrounds: 116280"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 2226992.6533569577,
            "unit": "iter/sec",
            "range": "stddev: 1.6355745124117252e-8",
            "extra": "mean: 449.0360569859907 nsec\nrounds: 108696"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 5007.016227105774,
            "unit": "iter/sec",
            "range": "stddev: 0.000003861776745307941",
            "extra": "mean: 199.71974418346036 usec\nrounds: 86"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 2382920.7859585383,
            "unit": "iter/sec",
            "range": "stddev: 1.5939350163960635e-8",
            "extra": "mean: 419.6530601825663 nsec\nrounds: 113637"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 4986.82743902359,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031504555556320733",
            "extra": "mean: 200.5282942366656 usec\nrounds: 3956"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 2164096.6799610043,
            "unit": "iter/sec",
            "range": "stddev: 1.796549911866736e-8",
            "extra": "mean: 462.08656445907593 nsec\nrounds: 111112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 4988.216370504289,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028981455489770664",
            "extra": "mean: 200.47245863533058 usec\nrounds: 4001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 5055.581351805735,
            "unit": "iter/sec",
            "range": "stddev: 0.000002867557492296603",
            "extra": "mean: 197.8011885107582 usec\nrounds: 4143"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 2230940.6477038227,
            "unit": "iter/sec",
            "range": "stddev: 1.748784177872448e-8",
            "extra": "mean: 448.2414182686174 nsec\nrounds: 108696"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 5059.758066384432,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029553789699158713",
            "extra": "mean: 197.6379081529037 usec\nrounds: 4072"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 2335050.3156788037,
            "unit": "iter/sec",
            "range": "stddev: 2.9089255997947913e-8",
            "extra": "mean: 428.25629635715137 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 5032.402886297552,
            "unit": "iter/sec",
            "range": "stddev: 0.000003072186198128736",
            "extra": "mean: 198.7122300408109 usec\nrounds: 3908"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 2260377.0051116687,
            "unit": "iter/sec",
            "range": "stddev: 1.903392732928495e-8",
            "extra": "mean: 442.4040758415639 nsec\nrounds: 106383"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 2368593.807631071,
            "unit": "iter/sec",
            "range": "stddev: 1.6585036293507068e-8",
            "extra": "mean: 422.19142715736024 nsec\nrounds: 116280"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 4943.75529792894,
            "unit": "iter/sec",
            "range": "stddev: 0.000003067274227268784",
            "extra": "mean: 202.2753837389412 usec\nrounds: 3862"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 2361348.3049590406,
            "unit": "iter/sec",
            "range": "stddev: 1.63103703121673e-8",
            "extra": "mean: 423.48686887903347 nsec\nrounds: 117648"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 4965.428535023537,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028968204279937323",
            "extra": "mean: 201.39248665981654 usec\nrounds: 3898"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 2391476.5764718778,
            "unit": "iter/sec",
            "range": "stddev: 1.8902599784615806e-8",
            "extra": "mean: 418.15170168868025 nsec\nrounds: 117648"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 4969.237703799995,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028258402168057874",
            "extra": "mean: 201.23810926478646 usec\nrounds: 3972"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 5036.000634674654,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026947672942342387",
            "extra": "mean: 198.57026885871392 usec\nrounds: 4136"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 2368923.183111652,
            "unit": "iter/sec",
            "range": "stddev: 1.615990747797068e-8",
            "extra": "mean: 422.1327255898514 nsec\nrounds: 117648"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 5043.239873357922,
            "unit": "iter/sec",
            "range": "stddev: 0.000002959276445497756",
            "extra": "mean: 198.285234315887 usec\nrounds: 3969"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 2341195.159845549,
            "unit": "iter/sec",
            "range": "stddev: 1.6756684642637827e-8",
            "extra": "mean: 427.1322686599031 nsec\nrounds: 116280"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 5027.960645563053,
            "unit": "iter/sec",
            "range": "stddev: 0.000003483867432936215",
            "extra": "mean: 198.88779377826964 usec\nrounds: 3986"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 2349575.0847848905,
            "unit": "iter/sec",
            "range": "stddev: 3.43807066834539e-8",
            "extra": "mean: 425.6088713553368 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 15797.651686732102,
            "unit": "iter/sec",
            "range": "stddev: 0.000001625693748299489",
            "extra": "mean: 63.30054743768437 usec\nrounds: 7747"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 15289.04169508146,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015808036779140227",
            "extra": "mean: 65.40632303473302 usec\nrounds: 9872"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 11900.704962409056,
            "unit": "iter/sec",
            "range": "stddev: 0.000001929465561033978",
            "extra": "mean: 84.02863554375271 usec\nrounds: 8204"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 84.40645908172395,
            "unit": "iter/sec",
            "range": "stddev: 0.02476114646279028",
            "extra": "mean: 11.847434555118356 msec\nrounds: 254"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 151161.43329257806,
            "unit": "iter/sec",
            "range": "stddev: 4.0721994325868224e-7",
            "extra": "mean: 6.615444020462985 usec\nrounds: 41667"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 152502.74785308618,
            "unit": "iter/sec",
            "range": "stddev: 3.3414506689145427e-7",
            "extra": "mean: 6.557258895842007 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 92.00830430035047,
            "unit": "iter/sec",
            "range": "stddev: 0.024726991080407566",
            "extra": "mean: 10.868584174050373 msec\nrounds: 316"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 108.76252536434585,
            "unit": "iter/sec",
            "range": "stddev: 0.02344546963909146",
            "extra": "mean: 9.194343333331764 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 67018.27907959017,
            "unit": "iter/sec",
            "range": "stddev: 5.887613374776075e-7",
            "extra": "mean: 14.921302273554518 usec\nrounds: 33559"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 66369.14908375186,
            "unit": "iter/sec",
            "range": "stddev: 5.942340235401427e-7",
            "extra": "mean: 15.067241539259308 usec\nrounds: 34483"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 74.13418370503179,
            "unit": "iter/sec",
            "range": "stddev: 0.02482212579368931",
            "extra": "mean: 13.489053902297517 msec\nrounds: 174"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 73.88126878915553,
            "unit": "iter/sec",
            "range": "stddev: 0.024943827079259205",
            "extra": "mean: 13.535230463540474 msec\nrounds: 192"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 21203.077209363368,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011906139307222684",
            "extra": "mean: 47.16296555098124 usec\nrounds: 8157"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 1542.6198227321418,
            "unit": "iter/sec",
            "range": "stddev: 0.000005310746180970267",
            "extra": "mean: 648.2478607262384 usec\nrounds: 1156"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 1559.9886621856401,
            "unit": "iter/sec",
            "range": "stddev: 0.000005436963597772236",
            "extra": "mean: 641.0302999247049 usec\nrounds: 1327"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 24551.8709705936,
            "unit": "iter/sec",
            "range": "stddev: 9.453181341241442e-7",
            "extra": "mean: 40.73009349054193 usec\nrounds: 10001"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 36.15883738377365,
            "unit": "iter/sec",
            "range": "stddev: 0.029303437304963164",
            "extra": "mean: 27.655756444446748 msec\nrounds: 36"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 4.301758325131703,
            "unit": "iter/sec",
            "range": "stddev: 0.037337162403061126",
            "extra": "mean: 232.4630824000053 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 4.281127406304418,
            "unit": "iter/sec",
            "range": "stddev: 0.03729485480667978",
            "extra": "mean: 233.5833310000055 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 42.537830428407005,
            "unit": "iter/sec",
            "range": "stddev: 0.026898905980724124",
            "extra": "mean: 23.508486209305925 msec\nrounds: 43"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 21003.13249064381,
            "unit": "iter/sec",
            "range": "stddev: 0.000001008170256416042",
            "extra": "mean: 47.61194552505282 usec\nrounds: 7765"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 1548.74066827985,
            "unit": "iter/sec",
            "range": "stddev: 0.000005744109558904162",
            "extra": "mean: 645.6858920807423 usec\nrounds: 1288"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 1549.6581200021128,
            "unit": "iter/sec",
            "range": "stddev: 0.000005220142972252751",
            "extra": "mean: 645.3036234847958 usec\nrounds: 1320"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 24295.347376296417,
            "unit": "iter/sec",
            "range": "stddev: 8.724253338515957e-7",
            "extra": "mean: 41.16014414248067 usec\nrounds: 10226"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 39.73909807352763,
            "unit": "iter/sec",
            "range": "stddev: 0.026400808707005834",
            "extra": "mean: 25.164134277777034 msec\nrounds: 36"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 4.2793831694018705,
            "unit": "iter/sec",
            "range": "stddev: 0.03774533047777865",
            "extra": "mean: 233.67853739999873 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 4.639994109063498,
            "unit": "iter/sec",
            "range": "stddev: 0.0003022953380480084",
            "extra": "mean: 215.5175149999991 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 42.57461673864138,
            "unit": "iter/sec",
            "range": "stddev: 0.027066809261895038",
            "extra": "mean: 23.488173860468 msec\nrounds: 43"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 66173.76103756754,
            "unit": "iter/sec",
            "range": "stddev: 5.135581143228244e-7",
            "extra": "mean: 15.111729850632026 usec\nrounds: 31949"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 65774.8056185715,
            "unit": "iter/sec",
            "range": "stddev: 5.197419187816152e-7",
            "extra": "mean: 15.203389665626778 usec\nrounds: 33113"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 66275.92632221882,
            "unit": "iter/sec",
            "range": "stddev: 5.830844262296745e-7",
            "extra": "mean: 15.088434903772184 usec\nrounds: 33005"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 66512.83643664047,
            "unit": "iter/sec",
            "range": "stddev: 5.907626815315641e-7",
            "extra": "mean: 15.034691851588542 usec\nrounds: 30865"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 70.57402131141122,
            "unit": "iter/sec",
            "range": "stddev: 0.026185539208153228",
            "extra": "mean: 14.169519908571633 msec\nrounds: 175"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 71.29825252178881,
            "unit": "iter/sec",
            "range": "stddev: 0.026067235674293865",
            "extra": "mean: 14.02558919230733 msec\nrounds: 182"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 69.97641335918549,
            "unit": "iter/sec",
            "range": "stddev: 0.026662743447306538",
            "extra": "mean: 14.290529508379477 msec\nrounds: 179"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 70.84650693398068,
            "unit": "iter/sec",
            "range": "stddev: 0.026124454525067498",
            "extra": "mean: 14.115021943592282 msec\nrounds: 195"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 85470.28939178467,
            "unit": "iter/sec",
            "range": "stddev: 4.703725719000467e-7",
            "extra": "mean: 11.699972085225198 usec\nrounds: 24754"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 64790.75016565141,
            "unit": "iter/sec",
            "range": "stddev: 5.624620837489411e-7",
            "extra": "mean: 15.434301924939689 usec\nrounds: 16779"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 64323.626704777824,
            "unit": "iter/sec",
            "range": "stddev: 6.174190495525923e-7",
            "extra": "mean: 15.54638709334034 usec\nrounds: 28249"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 83691.39374003874,
            "unit": "iter/sec",
            "range": "stddev: 5.108765678225589e-7",
            "extra": "mean: 11.948659895737771 usec\nrounds: 28012"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 74.3187627139973,
            "unit": "iter/sec",
            "range": "stddev: 0.026339676699461058",
            "extra": "mean: 13.45555231924843 msec\nrounds: 213"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 68.39863338523222,
            "unit": "iter/sec",
            "range": "stddev: 0.02650872132284382",
            "extra": "mean: 14.620175148351834 msec\nrounds: 182"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 70.37411151356817,
            "unit": "iter/sec",
            "range": "stddev: 0.02589686485514197",
            "extra": "mean: 14.20977087301769 msec\nrounds: 189"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 77.90734089106738,
            "unit": "iter/sec",
            "range": "stddev: 0.025672877093806373",
            "extra": "mean: 12.835760899582406 msec\nrounds: 239"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 498290.341716011,
            "unit": "iter/sec",
            "range": "stddev: 2.3073055324885272e-7",
            "extra": "mean: 2.0068620968172945 usec\nrounds: 28491"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 1658.617932790788,
            "unit": "iter/sec",
            "range": "stddev: 0.000006487378982893219",
            "extra": "mean: 602.911605035767 usec\nrounds: 1271"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 1676.15907267136,
            "unit": "iter/sec",
            "range": "stddev: 0.000015027711313618755",
            "extra": "mean: 596.6020864632263 usec\nrounds: 1411"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 502357.9856654037,
            "unit": "iter/sec",
            "range": "stddev: 1.8469357305819973e-7",
            "extra": "mean: 1.9906123293241555 usec\nrounds: 101011"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 3040.674659178977,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022966369372564975",
            "extra": "mean: 328.8743821971449 usec\nrounds: 2640"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 5.012307435205635,
            "unit": "iter/sec",
            "range": "stddev: 0.00008479966906574551",
            "extra": "mean: 199.50891139999953 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 5.084492029324107,
            "unit": "iter/sec",
            "range": "stddev: 0.00010966042947279477",
            "extra": "mean: 196.67648099999724 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 3022.914717468567,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028185931823172812",
            "extra": "mean: 330.8065537612701 usec\nrounds: 2725"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 400815.5851953679,
            "unit": "iter/sec",
            "range": "stddev: 2.0654540834181797e-7",
            "extra": "mean: 2.494912964805433 usec\nrounds: 37594"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 2115.5736317940923,
            "unit": "iter/sec",
            "range": "stddev: 0.000005680183703700508",
            "extra": "mean: 472.6850368010871 usec\nrounds: 1413"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 1836.6653108948492,
            "unit": "iter/sec",
            "range": "stddev: 0.000005171730181235258",
            "extra": "mean: 544.4650117079773 usec\nrounds: 1452"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 397946.7851306232,
            "unit": "iter/sec",
            "range": "stddev: 2.5087303281629514e-7",
            "extra": "mean: 2.5128988029687367 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 2126.1481995225613,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029502635662551163",
            "extra": "mean: 470.3341000521769 usec\nrounds: 1909"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 6.403740727215526,
            "unit": "iter/sec",
            "range": "stddev: 0.0001505716471887976",
            "extra": "mean: 156.1587269999952 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 5.537484031792669,
            "unit": "iter/sec",
            "range": "stddev: 0.0000655727605755408",
            "extra": "mean: 180.58742819999907 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 2123.151420263005,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033563835802287416",
            "extra": "mean: 470.99796578622033 usec\nrounds: 1929"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 21279.97741736134,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010207633295571045",
            "extra": "mean: 46.99253107214986 usec\nrounds: 8432"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 1548.602180242151,
            "unit": "iter/sec",
            "range": "stddev: 0.000005504655656760638",
            "extra": "mean: 645.7436343294006 usec\nrounds: 1340"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 1555.248113723067,
            "unit": "iter/sec",
            "range": "stddev: 0.000005166673669902338",
            "extra": "mean: 642.9842230164335 usec\nrounds: 1260"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 24792.290270050977,
            "unit": "iter/sec",
            "range": "stddev: 8.955388608369008e-7",
            "extra": "mean: 40.33511987426178 usec\nrounds: 10194"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 38.98423154107184,
            "unit": "iter/sec",
            "range": "stddev: 0.027535825016538912",
            "extra": "mean: 25.651397000001136 msec\nrounds: 36"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 4.27770833578968,
            "unit": "iter/sec",
            "range": "stddev: 0.03902913711953809",
            "extra": "mean: 233.7700285999972 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 4.286046292656653,
            "unit": "iter/sec",
            "range": "stddev: 0.0391453683444322",
            "extra": "mean: 233.31525880000754 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 41.98970764318217,
            "unit": "iter/sec",
            "range": "stddev: 0.028160287855829465",
            "extra": "mean: 23.81535990909356 msec\nrounds: 44"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 21076.299903900253,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010542728578795244",
            "extra": "mean: 47.446658310975444 usec\nrounds: 8098"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 1557.0439814753156,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056234833946996705",
            "extra": "mean: 642.2426160707994 usec\nrounds: 1344"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 1558.348618386686,
            "unit": "iter/sec",
            "range": "stddev: 0.000005316410463030639",
            "extra": "mean: 641.7049357256604 usec\nrounds: 1338"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 24519.456735780797,
            "unit": "iter/sec",
            "range": "stddev: 8.881920809082849e-7",
            "extra": "mean: 40.783937865177826 usec\nrounds: 10268"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 38.49630057982962,
            "unit": "iter/sec",
            "range": "stddev: 0.028133713922365376",
            "extra": "mean: 25.97652202778041 msec\nrounds: 36"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 4.2647842477635916,
            "unit": "iter/sec",
            "range": "stddev: 0.03992163681680528",
            "extra": "mean: 234.4784499999946 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 4.630356021018164,
            "unit": "iter/sec",
            "range": "stddev: 0.00017203845733215352",
            "extra": "mean: 215.96611479998273 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 41.778415994791324,
            "unit": "iter/sec",
            "range": "stddev: 0.02837930946616902",
            "extra": "mean: 23.935804558140116 msec\nrounds: 43"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 66784.74320580853,
            "unit": "iter/sec",
            "range": "stddev: 5.571260003513996e-7",
            "extra": "mean: 14.973479749983168 usec\nrounds: 34247"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 65652.9537292506,
            "unit": "iter/sec",
            "range": "stddev: 6.291248443667893e-7",
            "extra": "mean: 15.231607158513363 usec\nrounds: 34365"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 64345.3223807897,
            "unit": "iter/sec",
            "range": "stddev: 5.57408857807597e-7",
            "extra": "mean: 15.541145230139529 usec\nrounds: 33113"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 66983.18840796816,
            "unit": "iter/sec",
            "range": "stddev: 6.120783705603857e-7",
            "extra": "mean: 14.929119138214126 usec\nrounds: 30771"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 69.39126843004716,
            "unit": "iter/sec",
            "range": "stddev: 0.027105348249653105",
            "extra": "mean: 14.41103502824844 msec\nrounds: 177"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 68.0909717199789,
            "unit": "iter/sec",
            "range": "stddev: 0.02724703103903743",
            "extra": "mean: 14.686234822913905 msec\nrounds: 192"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 69.35428539015746,
            "unit": "iter/sec",
            "range": "stddev: 0.027077803603222712",
            "extra": "mean: 14.418719685084044 msec\nrounds: 181"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 71.41294433022995,
            "unit": "iter/sec",
            "range": "stddev: 0.02642296910351036",
            "extra": "mean: 14.003063581523387 msec\nrounds: 184"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 85081.12892601319,
            "unit": "iter/sec",
            "range": "stddev: 4.5039696130738947e-7",
            "extra": "mean: 11.753487672567239 usec\nrounds: 30582"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 64656.93804493289,
            "unit": "iter/sec",
            "range": "stddev: 6.004952006441579e-7",
            "extra": "mean: 15.466244307842986 usec\nrounds: 27625"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 64363.18153769454,
            "unit": "iter/sec",
            "range": "stddev: 5.571408927068422e-7",
            "extra": "mean: 15.53683295494562 usec\nrounds: 29070"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 85796.78996357824,
            "unit": "iter/sec",
            "range": "stddev: 5.255384679918206e-7",
            "extra": "mean: 11.65544772041602 usec\nrounds: 31848"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 75.30808866372794,
            "unit": "iter/sec",
            "range": "stddev: 0.026725796887499494",
            "extra": "mean: 13.27878608717962 msec\nrounds: 195"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 68.35839508467414,
            "unit": "iter/sec",
            "range": "stddev: 0.027336237177631298",
            "extra": "mean: 14.628781128657577 msec\nrounds: 171"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 67.13821753844393,
            "unit": "iter/sec",
            "range": "stddev: 0.027640310850951054",
            "extra": "mean: 14.894646248649531 msec\nrounds: 185"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 82.23077131519524,
            "unit": "iter/sec",
            "range": "stddev: 0.02691320555321711",
            "extra": "mean: 12.16089772728682 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 521577.5351199144,
            "unit": "iter/sec",
            "range": "stddev: 1.8142039955008004e-7",
            "extra": "mean: 1.9172604889320874 usec\nrounds: 117648"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 1662.6688288276055,
            "unit": "iter/sec",
            "range": "stddev: 0.000004916203486988851",
            "extra": "mean: 601.442682187726 usec\nrounds: 1353"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 1679.836196193359,
            "unit": "iter/sec",
            "range": "stddev: 0.000006389554484107445",
            "extra": "mean: 595.2961379604028 usec\nrounds: 1196"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 524455.6214215917,
            "unit": "iter/sec",
            "range": "stddev: 1.9530564461114912e-7",
            "extra": "mean: 1.9067390245325153 usec\nrounds: 108696"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 3042.837915143144,
            "unit": "iter/sec",
            "range": "stddev: 0.000002255240576901696",
            "extra": "mean: 328.64057432153993 usec\nrounds: 2617"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 4.995032170774206,
            "unit": "iter/sec",
            "range": "stddev: 0.0012255304445691483",
            "extra": "mean: 200.1989108000089 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 5.04828654783591,
            "unit": "iter/sec",
            "range": "stddev: 0.00019293770169015383",
            "extra": "mean: 198.08701240001483 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 3035.2949562177405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022020810793516916",
            "extra": "mean: 329.45727332084164 usec\nrounds: 2605"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 419395.04528988496,
            "unit": "iter/sec",
            "range": "stddev: 1.766749936279216e-7",
            "extra": "mean: 2.3843867762166866 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 2125.9586196966725,
            "unit": "iter/sec",
            "range": "stddev: 0.000005745862613897959",
            "extra": "mean: 470.3760415349373 usec\nrounds: 1589"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 1822.9356882039442,
            "unit": "iter/sec",
            "range": "stddev: 0.000013800811902846696",
            "extra": "mean: 548.5657044682989 usec\nrounds: 1455"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 422879.8097290448,
            "unit": "iter/sec",
            "range": "stddev: 1.9448435140124055e-7",
            "extra": "mean: 2.3647381052331116 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 2116.5466178399097,
            "unit": "iter/sec",
            "range": "stddev: 0.000002671003767821901",
            "extra": "mean: 472.4677413534 usec\nrounds: 1937"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 6.445189502621994,
            "unit": "iter/sec",
            "range": "stddev: 0.00010392960022952452",
            "extra": "mean: 155.15447599999752 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 5.520269313271687,
            "unit": "iter/sec",
            "range": "stddev: 0.00009349695312672774",
            "extra": "mean: 181.1505822000072 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 2112.2212100808124,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032612496011615847",
            "extra": "mean: 473.435261054755 usec\nrounds: 1877"
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
        "date": 1669518289284,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 4.439791026459656,
            "unit": "iter/sec",
            "range": "stddev: 0.0008502623005735331",
            "extra": "mean: 225.23582620000298 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 61462.04277235932,
            "unit": "iter/sec",
            "range": "stddev: 0.00015715274674363514",
            "extra": "mean: 16.270204420373084 usec\nrounds: 7103"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 34.540645449540655,
            "unit": "iter/sec",
            "range": "stddev: 0.00041310145628069533",
            "extra": "mean: 28.951398764706603 msec\nrounds: 34"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 1308.6388985212184,
            "unit": "iter/sec",
            "range": "stddev: 0.00005612846180815735",
            "extra": "mean: 764.1527400186676 usec\nrounds: 1127"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 13186.8820280503,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015290475457758132",
            "extra": "mean: 75.8329374504802 usec\nrounds: 10184"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 12844.444951033453,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018062029747138283",
            "extra": "mean: 77.85466820966374 usec\nrounds: 6911"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 13169.797070579505,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015973125773390261",
            "extra": "mean: 75.93131425190573 usec\nrounds: 9346"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 13200.865522590966,
            "unit": "iter/sec",
            "range": "stddev: 0.000010874693859054429",
            "extra": "mean: 75.75260866711167 usec\nrounds: 10753"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 12979.723400466979,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019133601176757475",
            "extra": "mean: 77.04324423153905 usec\nrounds: 10011"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 12654.094370581275,
            "unit": "iter/sec",
            "range": "stddev: 0.00002529116122527294",
            "extra": "mean: 79.02580545983902 usec\nrounds: 9561"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 12267.121055946205,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025607621266221183",
            "extra": "mean: 81.51871946476577 usec\nrounds: 6427"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 12680.668000560057,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016735544369017352",
            "extra": "mean: 78.86019884408563 usec\nrounds: 9862"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 12759.896290110784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026825982638059837",
            "extra": "mean: 78.37054293105996 usec\nrounds: 9690"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 12401.916428169916,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017522713693925309",
            "extra": "mean: 80.63269945349604 usec\nrounds: 9882"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 2908942.514855728,
            "unit": "iter/sec",
            "range": "stddev: 1.583396683241128e-8",
            "extra": "mean: 343.7675357598214 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 2890874.143117866,
            "unit": "iter/sec",
            "range": "stddev: 1.9153721691182363e-8",
            "extra": "mean: 345.9161314164591 nsec\nrounds: 192308"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 2892527.5726344786,
            "unit": "iter/sec",
            "range": "stddev: 1.9025548088395858e-8",
            "extra": "mean: 345.71839849094755 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 2885096.03762528,
            "unit": "iter/sec",
            "range": "stddev: 1.794042377845417e-8",
            "extra": "mean: 346.6089124795484 nsec\nrounds: 185186"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 2883627.5836932096,
            "unit": "iter/sec",
            "range": "stddev: 3.554172603992956e-8",
            "extra": "mean: 346.78541905160967 nsec\nrounds: 188680"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 14040.657649418175,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018540015087204275",
            "extra": "mean: 71.22173511875624 usec\nrounds: 11390"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 13601.568713964813,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021897717772401078",
            "extra": "mean: 73.52093137413583 usec\nrounds: 7519"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 14052.834614725258,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017278442845618816",
            "extra": "mean: 71.16002055216322 usec\nrounds: 9050"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 13996.682009449161,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015648734061391704",
            "extra": "mean: 71.44550396478965 usec\nrounds: 11602"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 13743.341705120723,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016585122421344873",
            "extra": "mean: 72.76250721666939 usec\nrounds: 11224"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 9714.309089919518,
            "unit": "iter/sec",
            "range": "stddev: 0.000002236431347444114",
            "extra": "mean: 102.94092876226208 usec\nrounds: 7103"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 9557.532926515318,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021333363109050316",
            "extra": "mean: 104.62951136958317 usec\nrounds: 5409"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 9658.4449062312,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021663258128282715",
            "extra": "mean: 103.53633630553139 usec\nrounds: 7514"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 9668.509699348173,
            "unit": "iter/sec",
            "range": "stddev: 0.000001983537120456609",
            "extra": "mean: 103.4285563231547 usec\nrounds: 7386"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 9597.311817684593,
            "unit": "iter/sec",
            "range": "stddev: 0.000002504033716882468",
            "extra": "mean: 104.1958434816444 usec\nrounds: 7571"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 13986.122613769372,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017231361734900148",
            "extra": "mean: 71.49944467207071 usec\nrounds: 11224"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 11645.87497668353,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020127711418338237",
            "extra": "mean: 85.86731370567885 usec\nrounds: 7931"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 8626.671961660402,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021869060200398936",
            "extra": "mean: 115.91955790649153 usec\nrounds: 5198"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 8016.054566474284,
            "unit": "iter/sec",
            "range": "stddev: 0.000001930687623890729",
            "extra": "mean: 124.74964980681659 usec\nrounds: 6465"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 12563.111708428212,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017106297418450676",
            "extra": "mean: 79.59811416220475 usec\nrounds: 11326"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 12547.267754796652,
            "unit": "iter/sec",
            "range": "stddev: 0.00000181866106657431",
            "extra": "mean: 79.69862599112172 usec\nrounds: 10719"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 12540.218287904454,
            "unit": "iter/sec",
            "range": "stddev: 0.000001719917153572497",
            "extra": "mean: 79.7434284668346 usec\nrounds: 10918"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 15153689.64361866,
            "unit": "iter/sec",
            "range": "stddev: 3.481873608980645e-9",
            "extra": "mean: 65.9905292716372 nsec\nrounds: 138889"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 14301163.648762312,
            "unit": "iter/sec",
            "range": "stddev: 3.035262414067594e-9",
            "extra": "mean: 69.92437990089502 nsec\nrounds: 138889"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 13000764.002401952,
            "unit": "iter/sec",
            "range": "stddev: 3.121537580883222e-9",
            "extra": "mean: 76.91855646440195 nsec\nrounds: 128206"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 15511957.665283218,
            "unit": "iter/sec",
            "range": "stddev: 2.8400155458189954e-9",
            "extra": "mean: 64.4663956399244 nsec\nrounds: 153847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 15557340.769459305,
            "unit": "iter/sec",
            "range": "stddev: 2.938672126479983e-9",
            "extra": "mean: 64.27833746258699 nsec\nrounds: 142878"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 15566233.688360803,
            "unit": "iter/sec",
            "range": "stddev: 3.753107918880193e-9",
            "extra": "mean: 64.24161553911192 nsec\nrounds: 151516"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 51380.854871096555,
            "unit": "iter/sec",
            "range": "stddev: 7.148851236568112e-7",
            "extra": "mean: 19.462502181187595 usec\nrounds: 9399"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 21221.79618551544,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012539985508966037",
            "extra": "mean: 47.121364810888736 usec\nrounds: 7508"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 51319.046224268044,
            "unit": "iter/sec",
            "range": "stddev: 7.267726429102118e-7",
            "extra": "mean: 19.48594281409529 usec\nrounds: 12643"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 20882.35187672389,
            "unit": "iter/sec",
            "range": "stddev: 0.000005436332746683377",
            "extra": "mean: 47.887326384660284 usec\nrounds: 8251"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 51782.236721549176,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016786664247237747",
            "extra": "mean: 19.31164166154781 usec\nrounds: 12904"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 21324.163737732397,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017409154140770497",
            "extra": "mean: 46.895156701058966 usec\nrounds: 8245"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 13737.59455668315,
            "unit": "iter/sec",
            "range": "stddev: 0.00002738321016749689",
            "extra": "mean: 72.7929475479762 usec\nrounds: 6444"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 37015.00152329438,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011462904079900726",
            "extra": "mean: 27.016073452561585 usec\nrounds: 10374"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 17770.54415905621,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014032283156680814",
            "extra": "mean: 56.27289693829554 usec\nrounds: 7675"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 36799.66200516978,
            "unit": "iter/sec",
            "range": "stddev: 0.000001132295636505727",
            "extra": "mean: 27.174162628437063 usec\nrounds: 9863"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 17588.99585709919,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019217478302739756",
            "extra": "mean: 56.85372878158844 usec\nrounds: 6386"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 37015.209244822916,
            "unit": "iter/sec",
            "range": "stddev: 8.461726715310902e-7",
            "extra": "mean: 27.0159218440691 usec\nrounds: 11669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 50922.627565236464,
            "unit": "iter/sec",
            "range": "stddev: 6.972173108953572e-7",
            "extra": "mean: 19.637635523008118 usec\nrounds: 14599"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 21267.028033103947,
            "unit": "iter/sec",
            "range": "stddev: 0.000001313562932853817",
            "extra": "mean: 47.02114458322124 usec\nrounds: 8279"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 50503.345948232294,
            "unit": "iter/sec",
            "range": "stddev: 6.159015644929319e-7",
            "extra": "mean: 19.800668277009514 usec\nrounds: 14904"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 21209.098582707407,
            "unit": "iter/sec",
            "range": "stddev: 0.000001479542795817053",
            "extra": "mean: 47.14957573988262 usec\nrounds: 8681"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 50946.08741059946,
            "unit": "iter/sec",
            "range": "stddev: 8.866514730707209e-7",
            "extra": "mean: 19.62859271096739 usec\nrounds: 14707"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 21337.81378426731,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017892840438825787",
            "extra": "mean: 46.86515732634779 usec\nrounds: 8511"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 17522.96710329559,
            "unit": "iter/sec",
            "range": "stddev: 0.000001541860439608345",
            "extra": "mean: 57.06796081423491 usec\nrounds: 8447"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 36426.82278124205,
            "unit": "iter/sec",
            "range": "stddev: 7.641950421445527e-7",
            "extra": "mean: 27.452298159666807 usec\nrounds: 11628"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 17491.77017669011,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015016258553023222",
            "extra": "mean: 57.169742678909685 usec\nrounds: 8674"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 36627.09783471761,
            "unit": "iter/sec",
            "range": "stddev: 8.091292480435777e-7",
            "extra": "mean: 27.302190430499607 usec\nrounds: 11495"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 17827.657138260045,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013909455812753426",
            "extra": "mean: 56.09262014883009 usec\nrounds: 8348"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 36657.4367778611,
            "unit": "iter/sec",
            "range": "stddev: 9.960355524597871e-7",
            "extra": "mean: 27.279594207850895 usec\nrounds: 11602"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 49423.62562180119,
            "unit": "iter/sec",
            "range": "stddev: 7.834137531001042e-7",
            "extra": "mean: 20.233238404082023 usec\nrounds: 14165"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 20634.02558832402,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014625065191425904",
            "extra": "mean: 48.46364058818753 usec\nrounds: 8091"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 49599.09317025789,
            "unit": "iter/sec",
            "range": "stddev: 7.25796608622442e-7",
            "extra": "mean: 20.161658935322034 usec\nrounds: 14185"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 20819.743407320144,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012448246465575825",
            "extra": "mean: 48.031331627670475 usec\nrounds: 8404"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 49535.68302409618,
            "unit": "iter/sec",
            "range": "stddev: 8.329634896832015e-7",
            "extra": "mean: 20.18746767887624 usec\nrounds: 14557"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 21018.462627763918,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012392143706438803",
            "extra": "mean: 47.57721902452894 usec\nrounds: 8757"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 17387.41551273611,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014407604682262524",
            "extra": "mean: 57.512860336690636 usec\nrounds: 7962"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 35555.2617649911,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011456505948847249",
            "extra": "mean: 28.12523239484721 usec\nrounds: 11403"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 17375.585029453487,
            "unit": "iter/sec",
            "range": "stddev: 0.000001275838103388491",
            "extra": "mean: 57.55201901431765 usec\nrounds: 8362"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 35901.58271992985,
            "unit": "iter/sec",
            "range": "stddev: 9.743736051740174e-7",
            "extra": "mean: 27.8539252099567 usec\nrounds: 11793"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 17300.697484097225,
            "unit": "iter/sec",
            "range": "stddev: 0.000001278760222953198",
            "extra": "mean: 57.80113783962747 usec\nrounds: 6776"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 35844.44426003272,
            "unit": "iter/sec",
            "range": "stddev: 8.029641004092553e-7",
            "extra": "mean: 27.898326243964682 usec\nrounds: 11237"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 51406.25306677484,
            "unit": "iter/sec",
            "range": "stddev: 7.848845979255078e-7",
            "extra": "mean: 19.4528863774809 usec\nrounds: 13316"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 21243.20332316887,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011539818550716374",
            "extra": "mean: 47.07387980932948 usec\nrounds: 8811"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 51379.14668726458,
            "unit": "iter/sec",
            "range": "stddev: 6.011197333736513e-7",
            "extra": "mean: 19.46314924392996 usec\nrounds: 13756"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 21170.8033248813,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013054454104920588",
            "extra": "mean: 47.23486325267285 usec\nrounds: 8651"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 51120.245026307224,
            "unit": "iter/sec",
            "range": "stddev: 7.216254943376508e-7",
            "extra": "mean: 19.56172157401408 usec\nrounds: 12937"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 21065.166955500536,
            "unit": "iter/sec",
            "range": "stddev: 0.000001367571489768334",
            "extra": "mean: 47.47173388715441 usec\nrounds: 8425"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 17533.686478677835,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013617070662700343",
            "extra": "mean: 57.03307180814876 usec\nrounds: 1699"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 37132.51017642575,
            "unit": "iter/sec",
            "range": "stddev: 7.564912761700807e-7",
            "extra": "mean: 26.93057903300241 usec\nrounds: 12286"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 17922.064259497758,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013676852055434579",
            "extra": "mean: 55.79714398524446 usec\nrounds: 8355"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 36778.38818774217,
            "unit": "iter/sec",
            "range": "stddev: 7.404384428719012e-7",
            "extra": "mean: 27.189881049036533 usec\nrounds: 12005"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 17663.701315022397,
            "unit": "iter/sec",
            "range": "stddev: 0.000001287791621089735",
            "extra": "mean: 56.61327612857294 usec\nrounds: 8286"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 36568.54064627456,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010871666878157784",
            "extra": "mean: 27.345909416318904 usec\nrounds: 11724"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 50464.09722255963,
            "unit": "iter/sec",
            "range": "stddev: 6.353508416260618e-7",
            "extra": "mean: 19.816068354294405 usec\nrounds: 11338"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 20770.085347649157,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012266166601422453",
            "extra": "mean: 48.14616710822443 usec\nrounds: 8306"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 50394.205018816945,
            "unit": "iter/sec",
            "range": "stddev: 7.873010958591996e-7",
            "extra": "mean: 19.843551448556536 usec\nrounds: 14772"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 21007.946902025793,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013025432779069186",
            "extra": "mean: 47.601034249737666 usec\nrounds: 8292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 50599.366202478224,
            "unit": "iter/sec",
            "range": "stddev: 8.394928931599721e-7",
            "extra": "mean: 19.76309339524934 usec\nrounds: 14369"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 21033.579567987374,
            "unit": "iter/sec",
            "range": "stddev: 0.000001315282779923971",
            "extra": "mean: 47.543025036117825 usec\nrounds: 8348"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 17474.427219975136,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012788038615353003",
            "extra": "mean: 57.22648229962544 usec\nrounds: 8418"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 36797.728239329175,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010210253989486162",
            "extra": "mean: 27.175590664078186 usec\nrounds: 11697"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 17613.19672219962,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012871627644950996",
            "extra": "mean: 56.77561068398237 usec\nrounds: 8461"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 36327.79960919363,
            "unit": "iter/sec",
            "range": "stddev: 9.6324915009854e-7",
            "extra": "mean: 27.52712828075956 usec\nrounds: 11849"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 17392.026632136112,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013506345693348675",
            "extra": "mean: 57.4976120466749 usec\nrounds: 8251"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 36161.94318132535,
            "unit": "iter/sec",
            "range": "stddev: 9.022648198459744e-7",
            "extra": "mean: 27.653381207578946 usec\nrounds: 11377"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 49053.99074359587,
            "unit": "iter/sec",
            "range": "stddev: 8.390720815718644e-7",
            "extra": "mean: 20.385701241454093 usec\nrounds: 12485"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 20787.82872383576,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012570308191742341",
            "extra": "mean: 48.105072121042596 usec\nrounds: 8555"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 49506.79352757644,
            "unit": "iter/sec",
            "range": "stddev: 6.751134354186707e-7",
            "extra": "mean: 20.199247997004225 usec\nrounds: 14105"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 20612.74943226511,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015735052402314043",
            "extra": "mean: 48.51366399645363 usec\nrounds: 8238"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 49354.758409297014,
            "unit": "iter/sec",
            "range": "stddev: 7.19551979690071e-7",
            "extra": "mean: 20.261470873933586 usec\nrounds: 14815"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 20853.72955648298,
            "unit": "iter/sec",
            "range": "stddev: 0.000001275146451700228",
            "extra": "mean: 47.9530530637922 usec\nrounds: 8518"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 17240.3479846683,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012780929189256933",
            "extra": "mean: 58.003469587115745 usec\nrounds: 8286"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 35806.30722784844,
            "unit": "iter/sec",
            "range": "stddev: 8.453779513176124e-7",
            "extra": "mean: 27.928040544271695 usec\nrounds: 11099"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 17443.7017259165,
            "unit": "iter/sec",
            "range": "stddev: 0.000001418102492946201",
            "extra": "mean: 57.327281543359426 usec\nrounds: 8425"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 36107.95838145075,
            "unit": "iter/sec",
            "range": "stddev: 9.755923993859655e-7",
            "extra": "mean: 27.694725617987764 usec\nrounds: 11863"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 17295.91663115894,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014270255645412319",
            "extra": "mean: 57.81711494830404 usec\nrounds: 8369"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 35750.43869499705,
            "unit": "iter/sec",
            "range": "stddev: 7.920450827879016e-7",
            "extra": "mean: 27.97168472620564 usec\nrounds: 12034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 180283.43038840892,
            "unit": "iter/sec",
            "range": "stddev: 3.250238684190973e-7",
            "extra": "mean: 5.546821456889106 usec\nrounds: 61733"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 172747.01606696445,
            "unit": "iter/sec",
            "range": "stddev: 2.9513649975848083e-7",
            "extra": "mean: 5.788812002473926 usec\nrounds: 57804"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 181258.9682365897,
            "unit": "iter/sec",
            "range": "stddev: 3.031106844537783e-7",
            "extra": "mean: 5.516968400122096 usec\nrounds: 62500"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 172243.01845520712,
            "unit": "iter/sec",
            "range": "stddev: 2.9202366731052244e-7",
            "extra": "mean: 5.805750555051126 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 176298.76653964026,
            "unit": "iter/sec",
            "range": "stddev: 2.720975442791288e-7",
            "extra": "mean: 5.672189429499797 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 172009.62893420336,
            "unit": "iter/sec",
            "range": "stddev: 4.006930192426058e-7",
            "extra": "mean: 5.813628028826905 usec\nrounds: 59881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 171650.16680269976,
            "unit": "iter/sec",
            "range": "stddev: 2.8368305876723486e-7",
            "extra": "mean: 5.825802669620661 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 178257.03893007664,
            "unit": "iter/sec",
            "range": "stddev: 2.7630744425046035e-7",
            "extra": "mean: 5.609876647801053 usec\nrounds: 64936"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 173058.22519317505,
            "unit": "iter/sec",
            "range": "stddev: 2.913573165083628e-7",
            "extra": "mean: 5.7784020313611615 usec\nrounds: 59172"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 176360.31017373432,
            "unit": "iter/sec",
            "range": "stddev: 3.566344885723338e-7",
            "extra": "mean: 5.670210032035495 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 169596.91970557792,
            "unit": "iter/sec",
            "range": "stddev: 3.3452331669421525e-7",
            "extra": "mean: 5.896333504971733 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 177686.25693046028,
            "unit": "iter/sec",
            "range": "stddev: 2.7760572501472806e-7",
            "extra": "mean: 5.627897268337205 usec\nrounds: 59524"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 179442.08889774705,
            "unit": "iter/sec",
            "range": "stddev: 3.4447361740064294e-7",
            "extra": "mean: 5.5728285718399 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 173920.05780131495,
            "unit": "iter/sec",
            "range": "stddev: 3.025769874752113e-7",
            "extra": "mean: 5.749768098297166 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 180140.41286415118,
            "unit": "iter/sec",
            "range": "stddev: 3.2206191119863337e-7",
            "extra": "mean: 5.551225203164863 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 170941.69982328053,
            "unit": "iter/sec",
            "range": "stddev: 2.9703664482105066e-7",
            "extra": "mean: 5.849947678265746 usec\nrounds: 55866"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 177374.49573685814,
            "unit": "iter/sec",
            "range": "stddev: 2.930677217249991e-7",
            "extra": "mean: 5.637789107423529 usec\nrounds: 58480"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 171388.50646964923,
            "unit": "iter/sec",
            "range": "stddev: 3.360501704589672e-7",
            "extra": "mean: 5.834696973551652 usec\nrounds: 58480"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 175231.18430513697,
            "unit": "iter/sec",
            "range": "stddev: 2.8458932655291883e-7",
            "extra": "mean: 5.706746798324781 usec\nrounds: 58483"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 178634.69563902024,
            "unit": "iter/sec",
            "range": "stddev: 4.1715503086040927e-7",
            "extra": "mean: 5.598016647453364 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 174940.15853657783,
            "unit": "iter/sec",
            "range": "stddev: 3.0301512551763255e-7",
            "extra": "mean: 5.716240389658229 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 180369.46741087304,
            "unit": "iter/sec",
            "range": "stddev: 3.311911442122525e-7",
            "extra": "mean: 5.544175598867006 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 172043.95925534918,
            "unit": "iter/sec",
            "range": "stddev: 3.099661361024061e-7",
            "extra": "mean: 5.812467954866064 usec\nrounds: 58480"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 179344.28734904315,
            "unit": "iter/sec",
            "range": "stddev: 2.721964205408987e-7",
            "extra": "mean: 5.575867594008063 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 178300.4875619294,
            "unit": "iter/sec",
            "range": "stddev: 3.6413639346843783e-7",
            "extra": "mean: 5.608509621448278 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 172585.34909176503,
            "unit": "iter/sec",
            "range": "stddev: 3.2514079333627243e-7",
            "extra": "mean: 5.7942345932753065 usec\nrounds: 60607"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 179764.83738744416,
            "unit": "iter/sec",
            "range": "stddev: 3.132636323989167e-7",
            "extra": "mean: 5.562823155702674 usec\nrounds: 60607"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 173694.71877513686,
            "unit": "iter/sec",
            "range": "stddev: 3.463872536477304e-7",
            "extra": "mean: 5.757227433578958 usec\nrounds: 58483"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 176894.74381724524,
            "unit": "iter/sec",
            "range": "stddev: 3.8934742361545144e-7",
            "extra": "mean: 5.653079217735984 usec\nrounds: 61350"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 172309.7671804578,
            "unit": "iter/sec",
            "range": "stddev: 3.390222918012746e-7",
            "extra": "mean: 5.803501544707636 usec\nrounds: 59881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 171439.79324390812,
            "unit": "iter/sec",
            "range": "stddev: 3.266429247599712e-7",
            "extra": "mean: 5.8329515048895075 usec\nrounds: 58480"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 176044.5843631855,
            "unit": "iter/sec",
            "range": "stddev: 3.900011793277785e-7",
            "extra": "mean: 5.680379226758651 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 173773.4484871996,
            "unit": "iter/sec",
            "range": "stddev: 3.8400330574676825e-7",
            "extra": "mean: 5.754619066983996 usec\nrounds: 58824"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 177563.33669831537,
            "unit": "iter/sec",
            "range": "stddev: 4.5027036318673293e-7",
            "extra": "mean: 5.63179324400186 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 169706.09633890528,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011594896133509677",
            "extra": "mean: 5.892540230275447 usec\nrounds: 58140"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 178081.69819466298,
            "unit": "iter/sec",
            "range": "stddev: 5.016273666471485e-7",
            "extra": "mean: 5.615400179455215 usec\nrounds: 61350"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 146945.66663850003,
            "unit": "iter/sec",
            "range": "stddev: 4.1596293993801815e-7",
            "extra": "mean: 6.805236403874996 usec\nrounds: 43671"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 148499.6299038853,
            "unit": "iter/sec",
            "range": "stddev: 3.137830221561142e-7",
            "extra": "mean: 6.7340235167403355 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 144241.77301094378,
            "unit": "iter/sec",
            "range": "stddev: 4.454326908851574e-7",
            "extra": "mean: 6.932804409747021 usec\nrounds: 47170"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 145571.00122694252,
            "unit": "iter/sec",
            "range": "stddev: 3.4384075736267297e-7",
            "extra": "mean: 6.869500048577796 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 144172.09518903357,
            "unit": "iter/sec",
            "range": "stddev: 4.650348192034895e-7",
            "extra": "mean: 6.9361550075889085 usec\nrounds: 44643"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 146762.51158883458,
            "unit": "iter/sec",
            "range": "stddev: 3.447159116854732e-7",
            "extra": "mean: 6.81372912724177 usec\nrounds: 51814"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 147173.49709017054,
            "unit": "iter/sec",
            "range": "stddev: 3.554536599125166e-7",
            "extra": "mean: 6.7947016261176305 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 146086.8482352924,
            "unit": "iter/sec",
            "range": "stddev: 4.1909968931796433e-7",
            "extra": "mean: 6.845243169250707 usec\nrounds: 49262"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 145593.4162293996,
            "unit": "iter/sec",
            "range": "stddev: 3.834839247890958e-7",
            "extra": "mean: 6.868442446768213 usec\nrounds: 48781"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 144143.22753080603,
            "unit": "iter/sec",
            "range": "stddev: 4.4632923560599964e-7",
            "extra": "mean: 6.937544115877952 usec\nrounds: 50254"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 146805.30983780042,
            "unit": "iter/sec",
            "range": "stddev: 3.427252469836455e-7",
            "extra": "mean: 6.811742716287727 usec\nrounds: 41153"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 144036.24454238612,
            "unit": "iter/sec",
            "range": "stddev: 3.7912349114168085e-7",
            "extra": "mean: 6.9426969800349525 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 146144.79366759988,
            "unit": "iter/sec",
            "range": "stddev: 5.299547030856782e-7",
            "extra": "mean: 6.8425290761603 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 145784.13545930004,
            "unit": "iter/sec",
            "range": "stddev: 3.376289304891125e-7",
            "extra": "mean: 6.859456941933025 usec\nrounds: 51814"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 147530.48504269676,
            "unit": "iter/sec",
            "range": "stddev: 4.319161392536767e-7",
            "extra": "mean: 6.778260097976294 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 147388.1108564788,
            "unit": "iter/sec",
            "range": "stddev: 3.29175799250527e-7",
            "extra": "mean: 6.784807771732441 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 145515.29557541147,
            "unit": "iter/sec",
            "range": "stddev: 3.949741129276092e-7",
            "extra": "mean: 6.8721298063251535 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 146673.83742342764,
            "unit": "iter/sec",
            "range": "stddev: 3.8590641413832753e-7",
            "extra": "mean: 6.817848483183368 usec\nrounds: 50001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 145118.0905755262,
            "unit": "iter/sec",
            "range": "stddev: 3.312522692212418e-7",
            "extra": "mean: 6.8909396205123965 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 143989.75630314118,
            "unit": "iter/sec",
            "range": "stddev: 4.508467006209443e-7",
            "extra": "mean: 6.944938485031553 usec\nrounds: 50508"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 149593.41064498332,
            "unit": "iter/sec",
            "range": "stddev: 3.454656966513387e-7",
            "extra": "mean: 6.684786419992861 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 144340.23054318674,
            "unit": "iter/sec",
            "range": "stddev: 4.6921906356974893e-7",
            "extra": "mean: 6.928075396836776 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 147945.02985213793,
            "unit": "iter/sec",
            "range": "stddev: 3.375330367068784e-7",
            "extra": "mean: 6.759267283256756 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 146194.53470991433,
            "unit": "iter/sec",
            "range": "stddev: 4.21061663263854e-7",
            "extra": "mean: 6.8402009827812265 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 145547.79006746452,
            "unit": "iter/sec",
            "range": "stddev: 4.308796284924388e-7",
            "extra": "mean: 6.870595558589235 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 143661.60358028847,
            "unit": "iter/sec",
            "range": "stddev: 3.5398002660009424e-7",
            "extra": "mean: 6.9608021564448705 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 144615.94656101087,
            "unit": "iter/sec",
            "range": "stddev: 4.603159498145068e-7",
            "extra": "mean: 6.91486674727201 usec\nrounds: 38911"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 146048.11411860582,
            "unit": "iter/sec",
            "range": "stddev: 4.1054654342745543e-7",
            "extra": "mean: 6.847058628828983 usec\nrounds: 45046"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 145282.15349223994,
            "unit": "iter/sec",
            "range": "stddev: 3.9931646257639235e-7",
            "extra": "mean: 6.883157882522809 usec\nrounds: 47396"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 147542.34896156235,
            "unit": "iter/sec",
            "range": "stddev: 4.255008368038833e-7",
            "extra": "mean: 6.777715056309151 usec\nrounds: 49508"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 144069.26212469395,
            "unit": "iter/sec",
            "range": "stddev: 3.2556783982761013e-7",
            "extra": "mean: 6.941105862918116 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 144654.04089714072,
            "unit": "iter/sec",
            "range": "stddev: 3.9937815144991074e-7",
            "extra": "mean: 6.913045731719801 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 143840.49767380042,
            "unit": "iter/sec",
            "range": "stddev: 3.0699291764806524e-7",
            "extra": "mean: 6.952145022939137 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 146106.39696335036,
            "unit": "iter/sec",
            "range": "stddev: 4.2949868544372257e-7",
            "extra": "mean: 6.844327290138037 usec\nrounds: 49754"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 144847.67908533066,
            "unit": "iter/sec",
            "range": "stddev: 3.9983951798967717e-7",
            "extra": "mean: 6.903804094858116 usec\nrounds: 47620"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 147090.11294506915,
            "unit": "iter/sec",
            "range": "stddev: 3.600351222520337e-7",
            "extra": "mean: 6.7985534851921035 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 500459.87916066096,
            "unit": "iter/sec",
            "range": "stddev: 1.7287964984991156e-7",
            "extra": "mean: 1.9981621737133763 usec\nrounds: 9607"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 36859.49922379259,
            "unit": "iter/sec",
            "range": "stddev: 9.462901937110434e-7",
            "extra": "mean: 27.13004845585384 usec\nrounds: 16448"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 504244.67573966575,
            "unit": "iter/sec",
            "range": "stddev: 1.7790457314520372e-7",
            "extra": "mean: 1.983164221879232 usec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 37635.31208631131,
            "unit": "iter/sec",
            "range": "stddev: 8.498731763457487e-7",
            "extra": "mean: 26.570790690047698 usec\nrounds: 15016"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 498019.0812696376,
            "unit": "iter/sec",
            "range": "stddev: 2.1118270642179007e-7",
            "extra": "mean: 2.0079551920995167 usec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 37109.38754459092,
            "unit": "iter/sec",
            "range": "stddev: 8.507752201373231e-7",
            "extra": "mean: 26.947359311667228 usec\nrounds: 15577"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 37542.56152897585,
            "unit": "iter/sec",
            "range": "stddev: 0.000001027466662464548",
            "extra": "mean: 26.63643500266189 usec\nrounds: 14816"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 497786.9669173647,
            "unit": "iter/sec",
            "range": "stddev: 1.714624585509782e-7",
            "extra": "mean: 2.0088914866387118 usec\nrounds: 151539"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 38353.3028997011,
            "unit": "iter/sec",
            "range": "stddev: 9.216953579628068e-7",
            "extra": "mean: 26.07337372260039 usec\nrounds: 15268"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 499649.5583066471,
            "unit": "iter/sec",
            "range": "stddev: 1.9426477472660217e-7",
            "extra": "mean: 2.0014027499375384 usec\nrounds: 147059"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 38380.29335949423,
            "unit": "iter/sec",
            "range": "stddev: 9.963646724642067e-7",
            "extra": "mean: 26.05503794964161 usec\nrounds: 14045"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 479608.0566984583,
            "unit": "iter/sec",
            "range": "stddev: 1.8610493442512238e-7",
            "extra": "mean: 2.0850358663360096 usec\nrounds: 129871"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 497325.6000713629,
            "unit": "iter/sec",
            "range": "stddev: 1.7906595743898856e-7",
            "extra": "mean: 2.010755126734893 usec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 37272.400650046955,
            "unit": "iter/sec",
            "range": "stddev: 9.116316688328466e-7",
            "extra": "mean: 26.829503400896186 usec\nrounds: 11174"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 489365.571729474,
            "unit": "iter/sec",
            "range": "stddev: 1.7255551121663887e-7",
            "extra": "mean: 2.0434621023009147 usec\nrounds: 142858"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 37519.58509955992,
            "unit": "iter/sec",
            "range": "stddev: 9.76989356673739e-7",
            "extra": "mean: 26.652746754700374 usec\nrounds: 15175"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 484774.19377641997,
            "unit": "iter/sec",
            "range": "stddev: 1.791746710962218e-7",
            "extra": "mean: 2.0628160756865794 usec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 37462.70589934098,
            "unit": "iter/sec",
            "range": "stddev: 9.495645883455088e-7",
            "extra": "mean: 26.693213316916104 usec\nrounds: 15409"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 38777.531031061655,
            "unit": "iter/sec",
            "range": "stddev: 7.524613749008312e-7",
            "extra": "mean: 25.78812970838649 usec\nrounds: 15504"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 480059.26160754706,
            "unit": "iter/sec",
            "range": "stddev: 1.5888149206469541e-7",
            "extra": "mean: 2.0830761532469078 usec\nrounds: 136987"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 38584.063211095905,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011228399322248854",
            "extra": "mean: 25.91743628785116 usec\nrounds: 15625"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 483867.7602434916,
            "unit": "iter/sec",
            "range": "stddev: 1.9014842345924564e-7",
            "extra": "mean: 2.066680366339722 usec\nrounds: 147059"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 38015.18111548374,
            "unit": "iter/sec",
            "range": "stddev: 7.967099252033864e-7",
            "extra": "mean: 26.305280434207795 usec\nrounds: 13176"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 492674.46083719906,
            "unit": "iter/sec",
            "range": "stddev: 1.8406728399456483e-7",
            "extra": "mean: 2.029737848194334 usec\nrounds: 138889"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 500550.1598797946,
            "unit": "iter/sec",
            "range": "stddev: 2.1580024271117195e-7",
            "extra": "mean: 1.9978017792265745 usec\nrounds: 156250"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 36911.43932706336,
            "unit": "iter/sec",
            "range": "stddev: 9.277293954805609e-7",
            "extra": "mean: 27.09187228217359 usec\nrounds: 15456"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 490812.59945603623,
            "unit": "iter/sec",
            "range": "stddev: 2.393186159229858e-7",
            "extra": "mean: 2.037437508956152 usec\nrounds: 131579"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 37338.248424221325,
            "unit": "iter/sec",
            "range": "stddev: 8.786668136155743e-7",
            "extra": "mean: 26.782188297598342 usec\nrounds: 15433"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 492729.3183734519,
            "unit": "iter/sec",
            "range": "stddev: 2.061961212042507e-7",
            "extra": "mean: 2.029511869318227 usec\nrounds: 147059"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 37391.80304531628,
            "unit": "iter/sec",
            "range": "stddev: 9.298198416715843e-7",
            "extra": "mean: 26.74382935714732 usec\nrounds: 14838"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 38540.904832133994,
            "unit": "iter/sec",
            "range": "stddev: 9.397770799907848e-7",
            "extra": "mean: 25.946458817080927 usec\nrounds: 14642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 506138.21360619384,
            "unit": "iter/sec",
            "range": "stddev: 2.2774231802362842e-7",
            "extra": "mean: 1.9757449114048926 usec\nrounds: 151516"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 38414.13171079583,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010361615234647528",
            "extra": "mean: 26.032086512551892 usec\nrounds: 15674"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 494175.8524498596,
            "unit": "iter/sec",
            "range": "stddev: 2.2474168417166892e-7",
            "extra": "mean: 2.0235711539577155 usec\nrounds: 161291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 38543.81715834743,
            "unit": "iter/sec",
            "range": "stddev: 9.297318522931496e-7",
            "extra": "mean: 25.94449833268343 usec\nrounds: 13794"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 492379.7671109139,
            "unit": "iter/sec",
            "range": "stddev: 2.403537775322194e-7",
            "extra": "mean: 2.0309526645816445 usec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 13190.793798200617,
            "unit": "iter/sec",
            "range": "stddev: 0.000001968650243596881",
            "extra": "mean: 75.81044896148798 usec\nrounds: 11364"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 12728.981946392369,
            "unit": "iter/sec",
            "range": "stddev: 0.000001797386086099015",
            "extra": "mean: 78.5608781763901 usec\nrounds: 10310"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 14020.565399402594,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017591805315320456",
            "extra": "mean: 71.32379982640424 usec\nrounds: 11535"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 11663.29016033193,
            "unit": "iter/sec",
            "range": "stddev: 0.000001959887276147364",
            "extra": "mean: 85.73909988119001 usec\nrounds: 9251"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 9902.089394816578,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019914526404580822",
            "extra": "mean: 100.98878732840643 usec\nrounds: 8144"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 8068.127237322166,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023460189478737",
            "extra": "mean: 123.94450045037996 usec\nrounds: 6658"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 10715.291842621249,
            "unit": "iter/sec",
            "range": "stddev: 0.000002357701311444663",
            "extra": "mean: 93.32456966056586 usec\nrounds: 9776"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 10684.127271271664,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022291695362518837",
            "extra": "mean: 93.59678845167635 usec\nrounds: 9785"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 186916.4130822647,
            "unit": "iter/sec",
            "range": "stddev: 2.958082553052654e-7",
            "extra": "mean: 5.349984966595121 usec\nrounds: 57472"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 187859.11844972373,
            "unit": "iter/sec",
            "range": "stddev: 3.46235378401003e-7",
            "extra": "mean: 5.323137935769817 usec\nrounds: 80001"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 158549.4057618587,
            "unit": "iter/sec",
            "range": "stddev: 3.211722391571061e-7",
            "extra": "mean: 6.307182264069792 usec\nrounds: 72993"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 158003.99809101786,
            "unit": "iter/sec",
            "range": "stddev: 3.6492622505008865e-7",
            "extra": "mean: 6.328953773840281 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 52264.239052290905,
            "unit": "iter/sec",
            "range": "stddev: 0.000009547023936333779",
            "extra": "mean: 19.133541751167364 usec\nrounds: 13281"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 52025.82171572365,
            "unit": "iter/sec",
            "range": "stddev: 6.482179872909361e-7",
            "extra": "mean: 19.22122451931926 usec\nrounds: 18622"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 44674.48668123649,
            "unit": "iter/sec",
            "range": "stddev: 7.189773440295986e-7",
            "extra": "mean: 22.384140799092943 usec\nrounds: 17422"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 44779.44785801147,
            "unit": "iter/sec",
            "range": "stddev: 6.860978202722106e-7",
            "extra": "mean: 22.331673297331434 usec\nrounds: 18249"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 52067.40761071211,
            "unit": "iter/sec",
            "range": "stddev: 7.477092476485097e-7",
            "extra": "mean: 19.205872654091284 usec\nrounds: 18383"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 51825.12665705193,
            "unit": "iter/sec",
            "range": "stddev: 8.78395457196539e-7",
            "extra": "mean: 19.29565954787548 usec\nrounds: 20041"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 48609.344170013195,
            "unit": "iter/sec",
            "range": "stddev: 6.699306843778399e-7",
            "extra": "mean: 20.57217633923343 usec\nrounds: 18833"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 48305.38910495891,
            "unit": "iter/sec",
            "range": "stddev: 7.613948518264169e-7",
            "extra": "mean: 20.701623949807757 usec\nrounds: 19048"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 7962.268247941537,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027858005950448455",
            "extra": "mean: 125.59235243782788 usec\nrounds: 1989"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 6111.135144572409,
            "unit": "iter/sec",
            "range": "stddev: 0.000003434173551084266",
            "extra": "mean: 163.63572009827794 usec\nrounds: 2433"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 5811.51104814263,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028548967343245565",
            "extra": "mean: 172.07228751971522 usec\nrounds: 2532"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 7503.077930767219,
            "unit": "iter/sec",
            "range": "stddev: 0.00000249056774699354",
            "extra": "mean: 133.2786370110041 usec\nrounds: 2810"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 184.94792623967155,
            "unit": "iter/sec",
            "range": "stddev: 0.009947320509295407",
            "extra": "mean: 5.406927346155335 msec\nrounds: 78"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 197.27852509489762,
            "unit": "iter/sec",
            "range": "stddev: 0.008068716554586582",
            "extra": "mean: 5.068975447373029 msec\nrounds: 114"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 196.96203525737064,
            "unit": "iter/sec",
            "range": "stddev: 0.008087944742406927",
            "extra": "mean: 5.0771205663736065 msec\nrounds: 113"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 171.88530741418344,
            "unit": "iter/sec",
            "range": "stddev: 0.011457959577317586",
            "extra": "mean: 5.817832920357469 msec\nrounds: 113"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 7973.001121731649,
            "unit": "iter/sec",
            "range": "stddev: 0.000002939066976533197",
            "extra": "mean: 125.42328600385433 usec\nrounds: 2951"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 6107.628020232608,
            "unit": "iter/sec",
            "range": "stddev: 0.000003229303420643282",
            "extra": "mean: 163.7296830598264 usec\nrounds: 2562"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 5778.2333257967875,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032620085622305177",
            "extra": "mean: 173.0632779288305 usec\nrounds: 2569"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 7466.896466286144,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024323538823414123",
            "extra": "mean: 133.9244496713072 usec\nrounds: 2891"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 196.80675763480812,
            "unit": "iter/sec",
            "range": "stddev: 0.008332915505548339",
            "extra": "mean: 5.081126339450122 msec\nrounds: 109"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 197.21996113173586,
            "unit": "iter/sec",
            "range": "stddev: 0.007959309993051526",
            "extra": "mean: 5.070480666670631 msec\nrounds: 114"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 196.25946174026026,
            "unit": "iter/sec",
            "range": "stddev: 0.008155909608256582",
            "extra": "mean: 5.095295743363705 msec\nrounds: 113"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 198.0957789546435,
            "unit": "iter/sec",
            "range": "stddev: 0.008118375110755513",
            "extra": "mean: 5.048063140350722 msec\nrounds: 114"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 101471.44080011632,
            "unit": "iter/sec",
            "range": "stddev: 3.9657064506943316e-7",
            "extra": "mean: 9.85498966127673 usec\nrounds: 41494"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 99291.76302519307,
            "unit": "iter/sec",
            "range": "stddev: 4.233285588612391e-7",
            "extra": "mean: 10.071328874946781 usec\nrounds: 42019"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 98847.97165348113,
            "unit": "iter/sec",
            "range": "stddev: 4.866797952417149e-7",
            "extra": "mean: 10.116545471520386 usec\nrounds: 43104"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 100160.0702710093,
            "unit": "iter/sec",
            "range": "stddev: 4.7241358498071424e-7",
            "extra": "mean: 9.984018554442285 usec\nrounds: 44248"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 93357.23908247065,
            "unit": "iter/sec",
            "range": "stddev: 5.1593752022556e-7",
            "extra": "mean: 10.71154213458061 usec\nrounds: 42554"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 89791.32012331588,
            "unit": "iter/sec",
            "range": "stddev: 5.308739408506698e-7",
            "extra": "mean: 11.13693393333163 usec\nrounds: 40323"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 90094.53608104255,
            "unit": "iter/sec",
            "range": "stddev: 5.234415346692147e-7",
            "extra": "mean: 11.09945223648715 usec\nrounds: 39685"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 94917.15720435097,
            "unit": "iter/sec",
            "range": "stddev: 4.1744319192865176e-7",
            "extra": "mean: 10.535503058177984 usec\nrounds: 42017"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 83703.97284279247,
            "unit": "iter/sec",
            "range": "stddev: 4.7170888345119037e-7",
            "extra": "mean: 11.946864241176902 usec\nrounds: 25317"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 84441.00925328131,
            "unit": "iter/sec",
            "range": "stddev: 4.7357548597542214e-7",
            "extra": "mean: 11.842587018358508 usec\nrounds: 30304"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 83797.83011378438,
            "unit": "iter/sec",
            "range": "stddev: 5.479418682123811e-7",
            "extra": "mean: 11.933483225546007 usec\nrounds: 31447"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 83998.3222781261,
            "unit": "iter/sec",
            "range": "stddev: 4.983698669848453e-7",
            "extra": "mean: 11.904999681885418 usec\nrounds: 31447"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 73835.3819879641,
            "unit": "iter/sec",
            "range": "stddev: 6.098448190814813e-7",
            "extra": "mean: 13.54364226304145 usec\nrounds: 29941"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 74106.8204420426,
            "unit": "iter/sec",
            "range": "stddev: 4.903200983960765e-7",
            "extra": "mean: 13.494034611592587 usec\nrounds: 30770"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 74542.92707722423,
            "unit": "iter/sec",
            "range": "stddev: 6.3867031074677e-7",
            "extra": "mean: 13.415088985760246 usec\nrounds: 30960"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 74664.3519876931,
            "unit": "iter/sec",
            "range": "stddev: 5.223744834384886e-7",
            "extra": "mean: 13.393272336507115 usec\nrounds: 26526"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 78274.2456845703,
            "unit": "iter/sec",
            "range": "stddev: 4.6534374920314487e-7",
            "extra": "mean: 12.775594210512125 usec\nrounds: 15338"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 19501.13348005569,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014857443269866406",
            "extra": "mean: 51.27907057416564 usec\nrounds: 9026"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 19545.860150179644,
            "unit": "iter/sec",
            "range": "stddev: 0.000005506225806768658",
            "extra": "mean: 51.161728996142905 usec\nrounds: 9653"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 77715.91784585286,
            "unit": "iter/sec",
            "range": "stddev: 4.976634736152358e-7",
            "extra": "mean: 12.867376822126316 usec\nrounds: 28329"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 70765.05840874925,
            "unit": "iter/sec",
            "range": "stddev: 6.655578982599702e-7",
            "extra": "mean: 14.131267923554233 usec\nrounds: 28329"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 18621.422418042526,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017415594856360945",
            "extra": "mean: 53.70159043441749 usec\nrounds: 8719"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 18709.011604513173,
            "unit": "iter/sec",
            "range": "stddev: 0.000001426967933467702",
            "extra": "mean: 53.45017797512991 usec\nrounds: 9226"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 71099.03502776266,
            "unit": "iter/sec",
            "range": "stddev: 5.686070771604557e-7",
            "extra": "mean: 14.064888498268946 usec\nrounds: 27856"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 496932.4272869006,
            "unit": "iter/sec",
            "range": "stddev: 1.753560032007356e-7",
            "extra": "mean: 2.012346035576094 usec\nrounds: 69935"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 17687.50971242269,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016637296880004267",
            "extra": "mean: 56.53707142830048 usec\nrounds: 2156"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 17480.241511839264,
            "unit": "iter/sec",
            "range": "stddev: 0.000001594341236357912",
            "extra": "mean: 57.207447581471115 usec\nrounds: 2089"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 504792.8964495841,
            "unit": "iter/sec",
            "range": "stddev: 2.0802099425318004e-7",
            "extra": "mean: 1.9810104441512766 usec\nrounds: 128206"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 419656.36531370156,
            "unit": "iter/sec",
            "range": "stddev: 1.7074005539209313e-7",
            "extra": "mean: 2.382902018541956 usec\nrounds: 120482"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 16622.02162138886,
            "unit": "iter/sec",
            "range": "stddev: 0.000002498266763089072",
            "extra": "mean: 60.161153846245846 usec\nrounds: 91"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 16232.262294834129,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026020399426250486",
            "extra": "mean: 61.60570731525495 usec\nrounds: 82"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 414662.3940482754,
            "unit": "iter/sec",
            "range": "stddev: 1.9278997135311061e-7",
            "extra": "mean: 2.411600411209653 usec\nrounds: 129871"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 48516.94882267119,
            "unit": "iter/sec",
            "range": "stddev: 0.000008002889253066208",
            "extra": "mean: 20.611353851928875 usec\nrounds: 15433"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 21619.43119406781,
            "unit": "iter/sec",
            "range": "stddev: 0.000001454248288090699",
            "extra": "mean: 46.254685936158744 usec\nrounds: 10310"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 20857.368802608875,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015225461650138946",
            "extra": "mean: 47.94468609458152 usec\nrounds: 10363"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 48445.43169211896,
            "unit": "iter/sec",
            "range": "stddev: 6.514397350971538e-7",
            "extra": "mean: 20.64178117671059 usec\nrounds: 20921"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 45235.755464618705,
            "unit": "iter/sec",
            "range": "stddev: 9.196057660696801e-7",
            "extra": "mean: 22.106406530165135 usec\nrounds: 19418"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 20216.92474874875,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014322200932726067",
            "extra": "mean: 49.46350705796099 usec\nrounds: 9776"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 19992.610398030778,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016052182026168427",
            "extra": "mean: 50.01848083322313 usec\nrounds: 10226"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 45313.93578582481,
            "unit": "iter/sec",
            "range": "stddev: 6.548708457744524e-7",
            "extra": "mean: 22.06826625536292 usec\nrounds: 19609"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 48407.84086028221,
            "unit": "iter/sec",
            "range": "stddev: 7.163974564816022e-7",
            "extra": "mean: 20.65781043377381 usec\nrounds: 21143"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 21281.775458020493,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013737644733321534",
            "extra": "mean: 46.988560798066715 usec\nrounds: 10321"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 20887.519946084605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015314485239616554",
            "extra": "mean: 47.87547792084581 usec\nrounds: 10870"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 48538.59605813391,
            "unit": "iter/sec",
            "range": "stddev: 6.951772504992225e-7",
            "extra": "mean: 20.60216160356834 usec\nrounds: 12871"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 44294.86708783037,
            "unit": "iter/sec",
            "range": "stddev: 8.95898339386692e-7",
            "extra": "mean: 22.57597924421228 usec\nrounds: 18019"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 20204.19836248108,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014749554845640532",
            "extra": "mean: 49.49466353770246 usec\nrounds: 9588"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 19870.68760675299,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016342794967710216",
            "extra": "mean: 50.32538479746182 usec\nrounds: 10143"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 45258.97553773472,
            "unit": "iter/sec",
            "range": "stddev: 6.915381696032534e-7",
            "extra": "mean: 22.095064859924832 usec\nrounds: 20367"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 43125.19281973634,
            "unit": "iter/sec",
            "range": "stddev: 9.053803071853521e-7",
            "extra": "mean: 23.188302117975642 usec\nrounds: 16808"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 43113.03091214785,
            "unit": "iter/sec",
            "range": "stddev: 8.820049305674713e-7",
            "extra": "mean: 23.19484338824883 usec\nrounds: 18051"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 43046.22512615284,
            "unit": "iter/sec",
            "range": "stddev: 7.907458727656362e-7",
            "extra": "mean: 23.23084073154762 usec\nrounds: 17392"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 43317.71841427154,
            "unit": "iter/sec",
            "range": "stddev: 8.749932191349859e-7",
            "extra": "mean: 23.08524171186583 usec\nrounds: 18249"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 40022.83361339649,
            "unit": "iter/sec",
            "range": "stddev: 9.36156356688946e-7",
            "extra": "mean: 24.98573713344671 usec\nrounds: 15175"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 39630.51247081163,
            "unit": "iter/sec",
            "range": "stddev: 9.425355629986221e-7",
            "extra": "mean: 25.233082734837524 usec\nrounds: 17272"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 39442.75511052981,
            "unit": "iter/sec",
            "range": "stddev: 9.236818874443326e-7",
            "extra": "mean: 25.353198507500704 usec\nrounds: 17153"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 40639.51862546606,
            "unit": "iter/sec",
            "range": "stddev: 9.639962507843196e-7",
            "extra": "mean: 24.606590673871 usec\nrounds: 17392"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 42410.50501413566,
            "unit": "iter/sec",
            "range": "stddev: 8.282421659289614e-7",
            "extra": "mean: 23.57906371703648 usec\nrounds: 16950"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 42652.920029773944,
            "unit": "iter/sec",
            "range": "stddev: 9.431430666178423e-7",
            "extra": "mean: 23.44505368687415 usec\nrounds: 17453"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 43288.322808090874,
            "unit": "iter/sec",
            "range": "stddev: 7.939044960690168e-7",
            "extra": "mean: 23.100918102862913 usec\nrounds: 17986"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 42682.18055825835,
            "unit": "iter/sec",
            "range": "stddev: 8.18072231558946e-7",
            "extra": "mean: 23.42898106236785 usec\nrounds: 17637"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 38455.66364973995,
            "unit": "iter/sec",
            "range": "stddev: 8.494465323266102e-7",
            "extra": "mean: 26.00397197947622 usec\nrounds: 14882"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 38478.50625299436,
            "unit": "iter/sec",
            "range": "stddev: 8.716580893457064e-7",
            "extra": "mean: 25.988534830979336 usec\nrounds: 16695"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 38909.038579625616,
            "unit": "iter/sec",
            "range": "stddev: 8.687359590659924e-7",
            "extra": "mean: 25.700969145088088 usec\nrounds: 16367"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 37955.44258158588,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011779670673159203",
            "extra": "mean: 26.346682635842882 usec\nrounds: 15175"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 73101.5943153768,
            "unit": "iter/sec",
            "range": "stddev: 5.942657193790021e-7",
            "extra": "mean: 13.6795922081504 usec\nrounds: 23203"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 27697.483024307876,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011257270874728218",
            "extra": "mean: 36.10436367529784 usec\nrounds: 11656"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 27183.62117197514,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012320836452865473",
            "extra": "mean: 36.78685755932129 usec\nrounds: 12005"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 72839.82926472029,
            "unit": "iter/sec",
            "range": "stddev: 5.591856982112822e-7",
            "extra": "mean: 13.728752663130505 usec\nrounds: 25253"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 69106.18554380101,
            "unit": "iter/sec",
            "range": "stddev: 5.051850416556803e-7",
            "extra": "mean: 14.470484691506785 usec\nrounds: 24692"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 25946.977929766552,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017355068484659588",
            "extra": "mean: 38.54013375687937 usec\nrounds: 10549"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 25592.90119725641,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015640815910582613",
            "extra": "mean: 39.073334917856094 usec\nrounds: 11779"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 68497.30577840211,
            "unit": "iter/sec",
            "range": "stddev: 6.742070891340284e-7",
            "extra": "mean: 14.599114354002959 usec\nrounds: 26042"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 72032.82355981081,
            "unit": "iter/sec",
            "range": "stddev: 4.881419300660723e-7",
            "extra": "mean: 13.8825600688785 usec\nrounds: 24938"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 27509.728879641905,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012039275145347235",
            "extra": "mean: 36.35077627900697 usec\nrounds: 11863"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 27028.665040290973,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012873785524354836",
            "extra": "mean: 36.99775769573985 usec\nrounds: 12377"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 72222.82191486708,
            "unit": "iter/sec",
            "range": "stddev: 4.87210470239046e-7",
            "extra": "mean: 13.846038876447583 usec\nrounds: 25774"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 68968.79098846557,
            "unit": "iter/sec",
            "range": "stddev: 6.924828365586727e-7",
            "extra": "mean: 14.499311727346958 usec\nrounds: 25317"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 26087.00660401312,
            "unit": "iter/sec",
            "range": "stddev: 0.000001659900122083649",
            "extra": "mean: 38.33325974035534 usec\nrounds: 10472"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 25519.669848231122,
            "unit": "iter/sec",
            "range": "stddev: 0.000001572240997107034",
            "extra": "mean: 39.18545991962801 usec\nrounds: 10978"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 67932.3247048031,
            "unit": "iter/sec",
            "range": "stddev: 5.069923681346353e-7",
            "extra": "mean: 14.720532593952223 usec\nrounds: 25511"
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
        "date": 1669518601508,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 4.291322059093681,
            "unit": "iter/sec",
            "range": "stddev: 0.002227528498051067",
            "extra": "mean: 233.0284201999973 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 59200.199129571105,
            "unit": "iter/sec",
            "range": "stddev: 0.00020284334071397572",
            "extra": "mean: 16.891835073245385 usec\nrounds: 7088"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 34.93676202030586,
            "unit": "iter/sec",
            "range": "stddev: 0.0005996031061011017",
            "extra": "mean: 28.623144852942648 msec\nrounds: 34"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 1231.3504543120732,
            "unit": "iter/sec",
            "range": "stddev: 0.0000586410492685188",
            "extra": "mean: 812.1164827593105 usec\nrounds: 1131"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 13965.36558671248,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023382066494472433",
            "extra": "mean: 71.60571585404554 usec\nrounds: 10111"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 13581.433625002794,
            "unit": "iter/sec",
            "range": "stddev: 0.00000204643329206949",
            "extra": "mean: 73.62992947659414 usec\nrounds: 6707"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 13858.843958785525,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021841939292580156",
            "extra": "mean: 72.1560905782528 usec\nrounds: 9892"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 13849.379081033525,
            "unit": "iter/sec",
            "range": "stddev: 0.000002107435834612147",
            "extra": "mean: 72.20540315554523 usec\nrounds: 9634"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 13692.061825246901,
            "unit": "iter/sec",
            "range": "stddev: 0.000001927738993510215",
            "extra": "mean: 73.03501932456163 usec\nrounds: 10246"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 13294.677786636865,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021935608138788773",
            "extra": "mean: 75.218069670342 usec\nrounds: 9588"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 12960.402929446376,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021620479996508787",
            "extra": "mean: 77.1580949638513 usec\nrounds: 6771"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 13184.612223704966,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021799626314325754",
            "extra": "mean: 75.84599251254984 usec\nrounds: 9616"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 13211.964262513222,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029843002394175467",
            "extra": "mean: 75.6889725199557 usec\nrounds: 9425"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 13052.121056017428,
            "unit": "iter/sec",
            "range": "stddev: 0.000002091484757464073",
            "extra": "mean: 76.61589987620972 usec\nrounds: 8889"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 2999988.6903358176,
            "unit": "iter/sec",
            "range": "stddev: 1.718090609013642e-8",
            "extra": "mean: 333.3345899672086 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 2997956.8535463074,
            "unit": "iter/sec",
            "range": "stddev: 1.980364066167815e-8",
            "extra": "mean: 333.56050432028144 nsec\nrounds: 196040"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 2974776.810408776,
            "unit": "iter/sec",
            "range": "stddev: 2.0657622832270517e-8",
            "extra": "mean: 336.15967305537276 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 3005395.2728916574,
            "unit": "iter/sec",
            "range": "stddev: 2.02008724390835e-8",
            "extra": "mean: 332.7349347421594 nsec\nrounds: 185186"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 3003582.7903464325,
            "unit": "iter/sec",
            "range": "stddev: 1.8381036527045746e-8",
            "extra": "mean: 332.9357203716899 nsec\nrounds: 185186"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 14683.367136313107,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019162624633626263",
            "extra": "mean: 68.10427000268368 usec\nrounds: 11211"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 14194.050640071535,
            "unit": "iter/sec",
            "range": "stddev: 0.000001966728995387644",
            "extra": "mean: 70.45205243786282 usec\nrounds: 7342"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 14594.810470401437,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020395755306104167",
            "extra": "mean: 68.51750504249573 usec\nrounds: 11403"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 14628.013771384945,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020739869566678364",
            "extra": "mean: 68.3619810336918 usec\nrounds: 11494"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 14390.283643508003,
            "unit": "iter/sec",
            "range": "stddev: 0.000002119822270110061",
            "extra": "mean: 69.49133351177116 usec\nrounds: 11211"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 10293.917416195605,
            "unit": "iter/sec",
            "range": "stddev: 0.000002414212177728753",
            "extra": "mean: 97.14474670514474 usec\nrounds: 7284"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 10154.507185917886,
            "unit": "iter/sec",
            "range": "stddev: 0.000002938137233903999",
            "extra": "mean: 98.47843737673301 usec\nrounds: 5581"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 10285.857423625896,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026625734679899394",
            "extra": "mean: 97.22086927853677 usec\nrounds: 7734"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 10199.579325566752,
            "unit": "iter/sec",
            "range": "stddev: 0.000002474549500060205",
            "extra": "mean: 98.04325924436436 usec\nrounds: 7491"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 10194.700854010178,
            "unit": "iter/sec",
            "range": "stddev: 0.000002381771095192697",
            "extra": "mean: 98.09017589826001 usec\nrounds: 7402"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 14636.973490680528,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020138517600425408",
            "extra": "mean: 68.32013466695882 usec\nrounds: 11198"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 12319.83671753546,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021453178678165035",
            "extra": "mean: 81.16990694987446 usec\nrounds: 7813"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 9141.20984385134,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026096929771175817",
            "extra": "mean: 109.39471000905102 usec\nrounds: 5345"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 8489.182469847523,
            "unit": "iter/sec",
            "range": "stddev: 0.000003013217790037329",
            "extra": "mean: 117.79697321289424 usec\nrounds: 6645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 13161.15421912467,
            "unit": "iter/sec",
            "range": "stddev: 0.000002377490445087449",
            "extra": "mean: 75.98117789296056 usec\nrounds: 11001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 13151.21326365339,
            "unit": "iter/sec",
            "range": "stddev: 0.000002139043212325871",
            "extra": "mean: 76.03861179589762 usec\nrounds: 11682"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 13171.713838242273,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020354583139778776",
            "extra": "mean: 75.92026461253938 usec\nrounds: 11976"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 14017186.441613307,
            "unit": "iter/sec",
            "range": "stddev: 3.6038532638469872e-9",
            "extra": "mean: 71.34099301344982 nsec\nrounds: 121952"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 13075925.701235311,
            "unit": "iter/sec",
            "range": "stddev: 6.082142217478712e-9",
            "extra": "mean: 76.47642108469397 nsec\nrounds: 131579"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 12045909.548536569,
            "unit": "iter/sec",
            "range": "stddev: 3.5141151904437077e-9",
            "extra": "mean: 83.01573210139496 nsec\nrounds: 117634"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 14131934.25019438,
            "unit": "iter/sec",
            "range": "stddev: 3.7227537705851098e-9",
            "extra": "mean: 70.76172180652611 nsec\nrounds: 138889"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 14020700.461372865,
            "unit": "iter/sec",
            "range": "stddev: 3.4400410581309666e-9",
            "extra": "mean: 71.32311276140116 nsec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 14002136.113712382,
            "unit": "iter/sec",
            "range": "stddev: 3.4215687709666444e-9",
            "extra": "mean: 71.41767455188554 nsec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 46898.15541564714,
            "unit": "iter/sec",
            "range": "stddev: 9.307645861571746e-7",
            "extra": "mean: 21.322800249545832 usec\nrounds: 8020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 20669.29718105285,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011551588044905996",
            "extra": "mean: 48.3809387053896 usec\nrounds: 6689"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 47079.58912298835,
            "unit": "iter/sec",
            "range": "stddev: 9.60393888707649e-7",
            "extra": "mean: 21.240627172587473 usec\nrounds: 12255"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 20670.140925369356,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010419685838732084",
            "extra": "mean: 48.378963820834755 usec\nrounds: 7988"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 46667.981736950205,
            "unit": "iter/sec",
            "range": "stddev: 8.691663558868284e-7",
            "extra": "mean: 21.42796758678407 usec\nrounds: 12063"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 20378.189128242695,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014085995724769601",
            "extra": "mean: 49.07207376017884 usec\nrounds: 8026"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 17451.40360063718,
            "unit": "iter/sec",
            "range": "stddev: 0.000001301181059401837",
            "extra": "mean: 57.30198114055928 usec\nrounds: 8749"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 34496.77828863259,
            "unit": "iter/sec",
            "range": "stddev: 0.000001109617288020762",
            "extra": "mean: 28.98821425099633 usec\nrounds: 12392"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 17357.67488960504,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048124389638480586",
            "extra": "mean: 57.61140281518166 usec\nrounds: 8170"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 34447.54758045355,
            "unit": "iter/sec",
            "range": "stddev: 8.459496394590844e-7",
            "extra": "mean: 29.029642753652116 usec\nrounds: 11751"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 17403.79121015927,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014349437535568357",
            "extra": "mean: 57.458744932326084 usec\nrounds: 7943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 34050.99614674973,
            "unit": "iter/sec",
            "range": "stddev: 9.401150220873701e-7",
            "extra": "mean: 29.367716459462617 usec\nrounds: 11173"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 46562.27180507781,
            "unit": "iter/sec",
            "range": "stddev: 9.72926476773451e-7",
            "extra": "mean: 21.476615320366427 usec\nrounds: 14347"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 20454.22864046057,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011227426827928708",
            "extra": "mean: 48.88964612539322 usec\nrounds: 8130"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 46034.92037653639,
            "unit": "iter/sec",
            "range": "stddev: 7.122325970074671e-7",
            "extra": "mean: 21.722639939868163 usec\nrounds: 14006"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 20897.263737572004,
            "unit": "iter/sec",
            "range": "stddev: 0.000001391068066692509",
            "extra": "mean: 47.85315496602845 usec\nrounds: 8518"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 45807.01391084157,
            "unit": "iter/sec",
            "range": "stddev: 8.21350769408731e-7",
            "extra": "mean: 21.830717932113902 usec\nrounds: 13986"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 20096.855610224553,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016406694324366593",
            "extra": "mean: 49.75902794919003 usec\nrounds: 7943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 17538.267941610742,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011854990211083875",
            "extra": "mean: 57.01817325001812 usec\nrounds: 8000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 34024.82684804407,
            "unit": "iter/sec",
            "range": "stddev: 9.263923781944706e-7",
            "extra": "mean: 29.390303864470233 usec\nrounds: 11696"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 17197.837923251318,
            "unit": "iter/sec",
            "range": "stddev: 0.000001624942459492492",
            "extra": "mean: 58.14684406625378 usec\nrounds: 6817"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 34057.688714850614,
            "unit": "iter/sec",
            "range": "stddev: 8.844928529365587e-7",
            "extra": "mean: 29.36194550289483 usec\nrounds: 12019"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 17240.252428739157,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014492646110313825",
            "extra": "mean: 58.00379107750302 usec\nrounds: 8204"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 33760.652761437916,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012142949141235041",
            "extra": "mean: 29.620280362061596 usec\nrounds: 11050"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 44359.36695217285,
            "unit": "iter/sec",
            "range": "stddev: 8.543779229789751e-7",
            "extra": "mean: 22.543153085980123 usec\nrounds: 12346"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 20219.16705779546,
            "unit": "iter/sec",
            "range": "stddev: 0.000001525711297421535",
            "extra": "mean: 49.458021546661676 usec\nrounds: 7565"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 44785.144392233575,
            "unit": "iter/sec",
            "range": "stddev: 8.414636065753026e-7",
            "extra": "mean: 22.32883277637518 usec\nrounds: 14663"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 20277.746915032927,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011126465147717827",
            "extra": "mean: 49.31514355071909 usec\nrounds: 8032"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 44843.67225215575,
            "unit": "iter/sec",
            "range": "stddev: 8.692476859026232e-7",
            "extra": "mean: 22.29969023002855 usec\nrounds: 14514"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 19983.972977594072,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012011163262768002",
            "extra": "mean: 50.04009968994628 usec\nrounds: 8065"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 17221.145353324653,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014392594633903409",
            "extra": "mean: 58.0681470066649 usec\nrounds: 6748"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 33376.85937044157,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010693427522739835",
            "extra": "mean: 29.960877651825943 usec\nrounds: 11737"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 17388.824711922585,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016492420753725061",
            "extra": "mean: 57.50819946527804 usec\nrounds: 7856"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 33071.84883208413,
            "unit": "iter/sec",
            "range": "stddev: 8.433936128737304e-7",
            "extra": "mean: 30.237196749335222 usec\nrounds: 11136"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 17430.92166512171,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013533461970213594",
            "extra": "mean: 57.36931294923684 usec\nrounds: 7931"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 33235.54732589043,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011156043388372923",
            "extra": "mean: 30.088266343097104 usec\nrounds: 11534"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 47354.56942630994,
            "unit": "iter/sec",
            "range": "stddev: 8.358120335507723e-7",
            "extra": "mean: 21.117286296016985 usec\nrounds: 1474"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 20582.66786256512,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011940128886063505",
            "extra": "mean: 48.584566717843096 usec\nrounds: 8461"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 46792.79506553179,
            "unit": "iter/sec",
            "range": "stddev: 9.132792159047266e-7",
            "extra": "mean: 21.3708114379475 usec\nrounds: 14006"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 20348.561636941777,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014225486413018072",
            "extra": "mean: 49.143522664744566 usec\nrounds: 8361"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 46020.916828754016,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010734844495687185",
            "extra": "mean: 21.729249847869106 usec\nrounds: 1641"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 20331.79382965303,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012620915254688577",
            "extra": "mean: 49.18405175550933 usec\nrounds: 8231"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 17485.57044196461,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014335993373863687",
            "extra": "mean: 57.190012949194006 usec\nrounds: 6873"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 34298.69719959295,
            "unit": "iter/sec",
            "range": "stddev: 9.047999773400712e-7",
            "extra": "mean: 29.15562635457384 usec\nrounds: 12180"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 17400.963976008232,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014926188661395357",
            "extra": "mean: 57.468080583280376 usec\nrounds: 8091"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 34337.91464187042,
            "unit": "iter/sec",
            "range": "stddev: 8.605082006195455e-7",
            "extra": "mean: 29.12232762034524 usec\nrounds: 12136"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 17498.756902323734,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015877600902520015",
            "extra": "mean: 57.14691652566507 usec\nrounds: 8278"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 33672.2115929008,
            "unit": "iter/sec",
            "range": "stddev: 9.242658345419754e-7",
            "extra": "mean: 29.69807900027667 usec\nrounds: 11481"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 45648.63752529973,
            "unit": "iter/sec",
            "range": "stddev: 7.128246306717188e-7",
            "extra": "mean: 21.906458860809867 usec\nrounds: 14451"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 20565.38414104982,
            "unit": "iter/sec",
            "range": "stddev: 0.000001435474499903314",
            "extra": "mean: 48.625398540644625 usec\nrounds: 7949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 46313.63068686556,
            "unit": "iter/sec",
            "range": "stddev: 7.536831637334793e-7",
            "extra": "mean: 21.59191549375976 usec\nrounds: 14993"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 20676.134658047074,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011178907633716732",
            "extra": "mean: 48.36493941147765 usec\nrounds: 8599"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 45581.02291592268,
            "unit": "iter/sec",
            "range": "stddev: 9.258808364767843e-7",
            "extra": "mean: 21.93895476730675 usec\nrounds: 13928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 20291.880335953585,
            "unit": "iter/sec",
            "range": "stddev: 0.000001213467246722018",
            "extra": "mean: 49.28079524637146 usec\nrounds: 8078"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 17273.510252447933,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017628086588058338",
            "extra": "mean: 57.89211256920312 usec\nrounds: 8306"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 33675.487853288505,
            "unit": "iter/sec",
            "range": "stddev: 8.258028270372792e-7",
            "extra": "mean: 29.695189698709807 usec\nrounds: 11455"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 17591.016363606785,
            "unit": "iter/sec",
            "range": "stddev: 0.000001257409993519696",
            "extra": "mean: 56.84719855464704 usec\nrounds: 6366"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 33193.847370166935,
            "unit": "iter/sec",
            "range": "stddev: 9.544946283184896e-7",
            "extra": "mean: 30.126064895350243 usec\nrounds: 11403"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 16820.143899407878,
            "unit": "iter/sec",
            "range": "stddev: 0.00000137514392329598",
            "extra": "mean: 59.45252347307225 usec\nrounds: 7924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 34044.02624487778,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010156769616122693",
            "extra": "mean: 29.373728971039633 usec\nrounds: 11508"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 44114.61058377732,
            "unit": "iter/sec",
            "range": "stddev: 8.052024569418847e-7",
            "extra": "mean: 22.668226847450384 usec\nrounds: 12180"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 19997.13723635233,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012450698631371778",
            "extra": "mean: 50.007157933692795 usec\nrounds: 8130"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 44026.826427102555,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010029597973381035",
            "extra": "mean: 22.7134245448227 usec\nrounds: 13021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 20227.72164808491,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012465766298030854",
            "extra": "mean: 49.43710504809505 usec\nrounds: 8320"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 43935.72529627446,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010332041896844604",
            "extra": "mean: 22.76052103969239 usec\nrounds: 14045"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 19995.44227841395,
            "unit": "iter/sec",
            "range": "stddev: 0.000001162740883352756",
            "extra": "mean: 50.011396901160246 usec\nrounds: 8390"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 17062.22297621131,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012630941486383318",
            "extra": "mean: 58.6090101737758 usec\nrounds: 8355"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 33300.37870120351,
            "unit": "iter/sec",
            "range": "stddev: 0.00000104873175936612",
            "extra": "mean: 30.02968852014463 usec\nrounds: 11211"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 17220.610525790795,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013612281470493883",
            "extra": "mean: 58.06995045282105 usec\nrounds: 7508"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 32927.620291434425,
            "unit": "iter/sec",
            "range": "stddev: 9.392958533449142e-7",
            "extra": "mean: 30.369640780270213 usec\nrounds: 11074"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 17215.643948962363,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015680923194737973",
            "extra": "mean: 58.086703173265434 usec\nrounds: 8446"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 32857.48277031813,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011280688772810543",
            "extra": "mean: 30.434467758539068 usec\nrounds: 11724"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 175842.96216144325,
            "unit": "iter/sec",
            "range": "stddev: 3.8868559414873806e-7",
            "extra": "mean: 5.686892370943397 usec\nrounds: 63691"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 171143.74460109658,
            "unit": "iter/sec",
            "range": "stddev: 3.17950815911454e-7",
            "extra": "mean: 5.843041487322889 usec\nrounds: 62501"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 174586.1022866279,
            "unit": "iter/sec",
            "range": "stddev: 3.976278403194179e-7",
            "extra": "mean: 5.727832782235113 usec\nrounds: 62894"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 174460.06205715443,
            "unit": "iter/sec",
            "range": "stddev: 3.4843122128961273e-7",
            "extra": "mean: 5.731970906168729 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 176715.45602937325,
            "unit": "iter/sec",
            "range": "stddev: 3.136785708033893e-7",
            "extra": "mean: 5.658814585147449 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 171988.15967552067,
            "unit": "iter/sec",
            "range": "stddev: 3.552325423119411e-7",
            "extra": "mean: 5.814353743226497 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 169247.2416131105,
            "unit": "iter/sec",
            "range": "stddev: 4.3489621760625626e-7",
            "extra": "mean: 5.908515793042835 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 179258.83197198232,
            "unit": "iter/sec",
            "range": "stddev: 3.057045593833733e-7",
            "extra": "mean: 5.57852569382075 usec\nrounds: 68966"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 172540.0483474626,
            "unit": "iter/sec",
            "range": "stddev: 4.1653664256784003e-7",
            "extra": "mean: 5.795755881476233 usec\nrounds: 57468"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 177591.39101840026,
            "unit": "iter/sec",
            "range": "stddev: 3.140726233275525e-7",
            "extra": "mean: 5.630903583025541 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 171448.64115857886,
            "unit": "iter/sec",
            "range": "stddev: 3.860777217232053e-7",
            "extra": "mean: 5.832650484963978 usec\nrounds: 62890"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 174703.44915826703,
            "unit": "iter/sec",
            "range": "stddev: 3.912075291039219e-7",
            "extra": "mean: 5.723985444008503 usec\nrounds: 68494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 178068.88816945822,
            "unit": "iter/sec",
            "range": "stddev: 3.037340018504746e-7",
            "extra": "mean: 5.615804143441137 usec\nrounds: 68494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 171577.40905374207,
            "unit": "iter/sec",
            "range": "stddev: 3.207159301837211e-7",
            "extra": "mean: 5.828273113080852 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 177535.4692453556,
            "unit": "iter/sec",
            "range": "stddev: 3.1731808837519106e-7",
            "extra": "mean: 5.632677257399146 usec\nrounds: 64931"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 172091.14567497096,
            "unit": "iter/sec",
            "range": "stddev: 3.415008323222129e-7",
            "extra": "mean: 5.8108742090002865 usec\nrounds: 62890"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 175141.12715528914,
            "unit": "iter/sec",
            "range": "stddev: 3.204131935577632e-7",
            "extra": "mean: 5.7096811939171115 usec\nrounds: 71429"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 168256.68676098716,
            "unit": "iter/sec",
            "range": "stddev: 3.936435465841449e-7",
            "extra": "mean: 5.943300199536943 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 171392.90915987777,
            "unit": "iter/sec",
            "range": "stddev: 3.1102766951217426e-7",
            "extra": "mean: 5.834547093585917 usec\nrounds: 61346"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 175841.8364715527,
            "unit": "iter/sec",
            "range": "stddev: 3.790521625362063e-7",
            "extra": "mean: 5.686928776825973 usec\nrounds: 68489"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 170958.5426311682,
            "unit": "iter/sec",
            "range": "stddev: 6.81664139054063e-7",
            "extra": "mean: 5.849371342369443 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 176159.8556299915,
            "unit": "iter/sec",
            "range": "stddev: 3.9616128648906113e-7",
            "extra": "mean: 5.676662236261213 usec\nrounds: 69445"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 171226.79055264284,
            "unit": "iter/sec",
            "range": "stddev: 3.363695994585382e-7",
            "extra": "mean: 5.84020757950582 usec\nrounds: 61350"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 176084.6519181423,
            "unit": "iter/sec",
            "range": "stddev: 3.57660642363305e-7",
            "extra": "mean: 5.679086672840044 usec\nrounds: 69445"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 175462.8545262281,
            "unit": "iter/sec",
            "range": "stddev: 3.473264530281742e-7",
            "extra": "mean: 5.699211965405023 usec\nrounds: 67110"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 172682.37117506206,
            "unit": "iter/sec",
            "range": "stddev: 4.094520432896874e-7",
            "extra": "mean: 5.790979086025054 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 174132.60646661415,
            "unit": "iter/sec",
            "range": "stddev: 3.36145137612708e-7",
            "extra": "mean: 5.7427498519166 usec\nrounds: 67568"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 172327.7606673498,
            "unit": "iter/sec",
            "range": "stddev: 4.139069261588568e-7",
            "extra": "mean: 5.802895576008409 usec\nrounds: 61346"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 175752.68426201353,
            "unit": "iter/sec",
            "range": "stddev: 2.8423913532856667e-7",
            "extra": "mean: 5.689813525176047 usec\nrounds: 65360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 172102.53515479297,
            "unit": "iter/sec",
            "range": "stddev: 4.0933495104067043e-7",
            "extra": "mean: 5.81048965432483 usec\nrounds: 67564"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 170453.10799652597,
            "unit": "iter/sec",
            "range": "stddev: 3.249699418733052e-7",
            "extra": "mean: 5.866716141194569 usec\nrounds: 65360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 173207.78989304535,
            "unit": "iter/sec",
            "range": "stddev: 2.7777837881953305e-7",
            "extra": "mean: 5.77341238877012 usec\nrounds: 60603"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 171622.36958500516,
            "unit": "iter/sec",
            "range": "stddev: 2.6731547671876457e-7",
            "extra": "mean: 5.826746259348764 usec\nrounds: 61350"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 175867.51259291955,
            "unit": "iter/sec",
            "range": "stddev: 3.0917670112527423e-7",
            "extra": "mean: 5.686098502539804 usec\nrounds: 70922"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 172260.32046745758,
            "unit": "iter/sec",
            "range": "stddev: 4.114806094023186e-7",
            "extra": "mean: 5.805167419207921 usec\nrounds: 62890"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 175554.82486177125,
            "unit": "iter/sec",
            "range": "stddev: 4.032121374866339e-7",
            "extra": "mean: 5.696226240363273 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 148760.90602969605,
            "unit": "iter/sec",
            "range": "stddev: 5.184780620401314e-7",
            "extra": "mean: 6.722196218678429 usec\nrounds: 43477"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 148253.03242096506,
            "unit": "iter/sec",
            "range": "stddev: 3.7683919021896363e-7",
            "extra": "mean: 6.745224591160444 usec\nrounds: 48310"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 146866.66543516688,
            "unit": "iter/sec",
            "range": "stddev: 5.277569523239088e-7",
            "extra": "mean: 6.808897015786349 usec\nrounds: 49998"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 147658.98193972133,
            "unit": "iter/sec",
            "range": "stddev: 3.5152706103293725e-7",
            "extra": "mean: 6.772361470081305 usec\nrounds: 53761"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 144692.90467345383,
            "unit": "iter/sec",
            "range": "stddev: 4.951243199934394e-7",
            "extra": "mean: 6.911188922890326 usec\nrounds: 42917"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 144559.2021904157,
            "unit": "iter/sec",
            "range": "stddev: 3.2930765492986445e-7",
            "extra": "mean: 6.917581066079653 usec\nrounds: 50249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 149589.9273928646,
            "unit": "iter/sec",
            "range": "stddev: 3.142080929871103e-7",
            "extra": "mean: 6.684942077508487 usec\nrounds: 54642"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 146637.27761002738,
            "unit": "iter/sec",
            "range": "stddev: 4.4185739295811484e-7",
            "extra": "mean: 6.8195483188076995 usec\nrounds: 52081"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 148141.0489421799,
            "unit": "iter/sec",
            "range": "stddev: 4.0671950110991726e-7",
            "extra": "mean: 6.750323473072641 usec\nrounds: 49018"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 147048.325759684,
            "unit": "iter/sec",
            "range": "stddev: 4.282359819804126e-7",
            "extra": "mean: 6.800485451526088 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 146988.26257625344,
            "unit": "iter/sec",
            "range": "stddev: 3.870050295180368e-7",
            "extra": "mean: 6.803264304734724 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 144688.71813922693,
            "unit": "iter/sec",
            "range": "stddev: 4.514828398200921e-7",
            "extra": "mean: 6.9113888965257715 usec\nrounds: 50759"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 146253.51169656956,
            "unit": "iter/sec",
            "range": "stddev: 5.250724193842372e-7",
            "extra": "mean: 6.8374426596654185 usec\nrounds: 52354"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 145869.28016325095,
            "unit": "iter/sec",
            "range": "stddev: 3.8008564567299345e-7",
            "extra": "mean: 6.855453039055521 usec\nrounds: 52629"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 150088.89670531964,
            "unit": "iter/sec",
            "range": "stddev: 4.742422623627172e-7",
            "extra": "mean: 6.662718042117213 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 150715.61646405244,
            "unit": "iter/sec",
            "range": "stddev: 3.4643972395079864e-7",
            "extra": "mean: 6.635012505412885 usec\nrounds: 51018"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 144050.36919622205,
            "unit": "iter/sec",
            "range": "stddev: 4.5574980627365747e-7",
            "extra": "mean: 6.942016223768392 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 148035.33893660933,
            "unit": "iter/sec",
            "range": "stddev: 4.044876408731446e-7",
            "extra": "mean: 6.755143786499607 usec\nrounds: 46729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 146593.20935554174,
            "unit": "iter/sec",
            "range": "stddev: 3.4571866955784514e-7",
            "extra": "mean: 6.821598383692092 usec\nrounds: 55553"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 146788.47503640663,
            "unit": "iter/sec",
            "range": "stddev: 4.872153757198975e-7",
            "extra": "mean: 6.812523937945258 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 148324.77757399256,
            "unit": "iter/sec",
            "range": "stddev: 3.0751083891141783e-7",
            "extra": "mean: 6.741961905192442 usec\nrounds: 53761"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 148359.64404847648,
            "unit": "iter/sec",
            "range": "stddev: 4.908830466367797e-7",
            "extra": "mean: 6.740377455160584 usec\nrounds: 51018"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 148863.07029497388,
            "unit": "iter/sec",
            "range": "stddev: 3.4213794754834116e-7",
            "extra": "mean: 6.717582796179661 usec\nrounds: 51814"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 144254.99746716165,
            "unit": "iter/sec",
            "range": "stddev: 4.4932269966094346e-7",
            "extra": "mean: 6.932168850702319 usec\nrounds: 20450"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 146519.9550617721,
            "unit": "iter/sec",
            "range": "stddev: 5.049325685603918e-7",
            "extra": "mean: 6.8250089182623945 usec\nrounds: 51018"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 146001.57672715627,
            "unit": "iter/sec",
            "range": "stddev: 3.189758908123757e-7",
            "extra": "mean: 6.8492411001065605 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 146365.51095025952,
            "unit": "iter/sec",
            "range": "stddev: 5.28501925552851e-7",
            "extra": "mean: 6.832210631504832 usec\nrounds: 51018"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 146483.247013581,
            "unit": "iter/sec",
            "range": "stddev: 3.3089382055748416e-7",
            "extra": "mean: 6.826719235048676 usec\nrounds: 52357"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 145204.56689441518,
            "unit": "iter/sec",
            "range": "stddev: 4.6182380059251554e-7",
            "extra": "mean: 6.886835733804057 usec\nrounds: 49018"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 149734.095305968,
            "unit": "iter/sec",
            "range": "stddev: 3.0813196676981364e-7",
            "extra": "mean: 6.678505639991954 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 146761.24624292756,
            "unit": "iter/sec",
            "range": "stddev: 4.6026494404686353e-7",
            "extra": "mean: 6.813787873842003 usec\nrounds: 52629"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 144259.6286238972,
            "unit": "iter/sec",
            "range": "stddev: 5.194162324431978e-7",
            "extra": "mean: 6.931946307772109 usec\nrounds: 52354"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 146732.37584714245,
            "unit": "iter/sec",
            "range": "stddev: 3.941054345107616e-7",
            "extra": "mean: 6.815128523794529 usec\nrounds: 47392"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 145535.82295787078,
            "unit": "iter/sec",
            "range": "stddev: 3.9495827511261396e-7",
            "extra": "mean: 6.871160513446071 usec\nrounds: 52357"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 150951.62385200014,
            "unit": "iter/sec",
            "range": "stddev: 4.14779826828086e-7",
            "extra": "mean: 6.624638904053431 usec\nrounds: 51280"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 148389.02298154944,
            "unit": "iter/sec",
            "range": "stddev: 4.608310904569623e-7",
            "extra": "mean: 6.739042955517937 usec\nrounds: 49749"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 482917.7313365885,
            "unit": "iter/sec",
            "range": "stddev: 1.642963349266781e-7",
            "extra": "mean: 2.0707460818062415 usec\nrounds: 7975"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 35106.03824250882,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011637660172641117",
            "extra": "mean: 28.48512820193795 usec\nrounds: 14368"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 480510.7732783903,
            "unit": "iter/sec",
            "range": "stddev: 2.0949712027243007e-7",
            "extra": "mean: 2.081118791941501 usec\nrounds: 133334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 35209.93301871527,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010145656106237144",
            "extra": "mean: 28.401076465225486 usec\nrounds: 14948"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 483280.78951965336,
            "unit": "iter/sec",
            "range": "stddev: 1.7345135989008542e-7",
            "extra": "mean: 2.0691904617063894 usec\nrounds: 151516"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 34908.86943004091,
            "unit": "iter/sec",
            "range": "stddev: 0.000001129075454273299",
            "extra": "mean: 28.64601507659963 usec\nrounds: 14327"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 36220.30536336195,
            "unit": "iter/sec",
            "range": "stddev: 8.094228865353965e-7",
            "extra": "mean: 27.608823005990818 usec\nrounds: 15848"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 482036.3331962135,
            "unit": "iter/sec",
            "range": "stddev: 1.539026414955757e-7",
            "extra": "mean: 2.0745324182709455 usec\nrounds: 163935"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 35971.0351211378,
            "unit": "iter/sec",
            "range": "stddev: 0.000001146519818244194",
            "extra": "mean: 27.80014521773842 usec\nrounds: 15129"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 473908.44142514747,
            "unit": "iter/sec",
            "range": "stddev: 1.8891753527923469e-7",
            "extra": "mean: 2.110112233900664 usec\nrounds: 158731"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 35628.331444285046,
            "unit": "iter/sec",
            "range": "stddev: 8.710373575418217e-7",
            "extra": "mean: 28.06755072332765 usec\nrounds: 13889"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 479288.79768612573,
            "unit": "iter/sec",
            "range": "stddev: 2.4197990588023836e-7",
            "extra": "mean: 2.086424729365102 usec\nrounds: 163935"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 480424.28413172415,
            "unit": "iter/sec",
            "range": "stddev: 1.9783746908485378e-7",
            "extra": "mean: 2.0814934486655075 usec\nrounds: 161265"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 34682.62147432416,
            "unit": "iter/sec",
            "range": "stddev: 0.000001231275478043233",
            "extra": "mean: 28.832883948530494 usec\nrounds: 13089"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 482338.260949421,
            "unit": "iter/sec",
            "range": "stddev: 2.128164261755826e-7",
            "extra": "mean: 2.07323382978499 usec\nrounds: 153847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 34887.25733972078,
            "unit": "iter/sec",
            "range": "stddev: 0.000001079157286805929",
            "extra": "mean: 28.663760818522498 usec\nrounds: 14859"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 473424.1319715674,
            "unit": "iter/sec",
            "range": "stddev: 1.7653290267678147e-7",
            "extra": "mean: 2.1122708634127196 usec\nrounds: 163935"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 35246.077447418174,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011663956852234696",
            "extra": "mean: 28.371951502740952 usec\nrounds: 13774"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 36496.28945335515,
            "unit": "iter/sec",
            "range": "stddev: 8.004059943139247e-7",
            "extra": "mean: 27.40004573007541 usec\nrounds: 16313"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 471634.43434518354,
            "unit": "iter/sec",
            "range": "stddev: 1.7202380182058492e-7",
            "extra": "mean: 2.120286236920759 usec\nrounds: 149254"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 36763.016561354234,
            "unit": "iter/sec",
            "range": "stddev: 9.65187216324202e-7",
            "extra": "mean: 27.2012498846793 usec\nrounds: 15175"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 482343.74996002635,
            "unit": "iter/sec",
            "range": "stddev: 1.7410764353143275e-7",
            "extra": "mean: 2.0732102366473573 usec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 36097.05550431351,
            "unit": "iter/sec",
            "range": "stddev: 8.934243073572237e-7",
            "extra": "mean: 27.70309062689344 usec\nrounds: 13870"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 472377.6119167149,
            "unit": "iter/sec",
            "range": "stddev: 2.089919220445625e-7",
            "extra": "mean: 2.116950453986186 usec\nrounds: 142837"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 465403.3664521481,
            "unit": "iter/sec",
            "range": "stddev: 1.4663332639274774e-7",
            "extra": "mean: 2.14867375718224 usec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 35177.81027369989,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010704729642286137",
            "extra": "mean: 28.427011011189446 usec\nrounds: 13532"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 476245.57520051615,
            "unit": "iter/sec",
            "range": "stddev: 2.0273336912652497e-7",
            "extra": "mean: 2.0997570414779494 usec\nrounds: 161291"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 35277.766634931,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010061370524938949",
            "extra": "mean: 28.346465646434364 usec\nrounds: 14045"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 471278.2323929797,
            "unit": "iter/sec",
            "range": "stddev: 2.2323258081957366e-7",
            "extra": "mean: 2.1218887936375994 usec\nrounds: 151493"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 34837.822620997096,
            "unit": "iter/sec",
            "range": "stddev: 8.739082465866696e-7",
            "extra": "mean: 28.70443457041113 usec\nrounds: 13908"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 35235.888162879084,
            "unit": "iter/sec",
            "range": "stddev: 0.000001074153992701613",
            "extra": "mean: 28.38015591880262 usec\nrounds: 15848"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 470780.2418715876,
            "unit": "iter/sec",
            "range": "stddev: 1.8187871772664192e-7",
            "extra": "mean: 2.124133323914569 usec\nrounds: 156251"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 36584.199289628305,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011390835037477323",
            "extra": "mean: 27.334204914073442 usec\nrounds: 14245"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 474098.4887074545,
            "unit": "iter/sec",
            "range": "stddev: 2.4104757303680955e-7",
            "extra": "mean: 2.109266373589004 usec\nrounds: 144928"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 35792.98182083125,
            "unit": "iter/sec",
            "range": "stddev: 0.000001137010356879839",
            "extra": "mean: 27.938437903991765 usec\nrounds: 14389"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 465095.77427953226,
            "unit": "iter/sec",
            "range": "stddev: 1.816095773711763e-7",
            "extra": "mean: 2.1500947875716006 usec\nrounds: 163935"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 13879.357081412614,
            "unit": "iter/sec",
            "range": "stddev: 0.000002015043696492905",
            "extra": "mean: 72.04944682482525 usec\nrounds: 11669"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 13223.885350312486,
            "unit": "iter/sec",
            "range": "stddev: 0.00000243795802205603",
            "extra": "mean: 75.62074031263207 usec\nrounds: 7174"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 14629.334126926413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018008664633967794",
            "extra": "mean: 68.35581109323515 usec\nrounds: 11863"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 12361.652937898387,
            "unit": "iter/sec",
            "range": "stddev: 0.000002195447244986396",
            "extra": "mean: 80.89533050504899 usec\nrounds: 9192"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 10418.596445806657,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026656319222221063",
            "extra": "mean: 95.98221844963449 usec\nrounds: 8217"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 8504.348576236096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030036807783204335",
            "extra": "mean: 117.58690169336707 usec\nrounds: 6378"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 11203.790299390848,
            "unit": "iter/sec",
            "range": "stddev: 0.000003047243638571597",
            "extra": "mean: 89.25550847326821 usec\nrounds: 9737"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 10715.215194169636,
            "unit": "iter/sec",
            "range": "stddev: 0.000007092251985078494",
            "extra": "mean: 93.32523723313744 usec\nrounds: 7128"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 188605.63093765327,
            "unit": "iter/sec",
            "range": "stddev: 3.234581147648791e-7",
            "extra": "mean: 5.30206863405137 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 188293.16475132844,
            "unit": "iter/sec",
            "range": "stddev: 3.297187561099363e-7",
            "extra": "mean: 5.310867238971003 usec\nrounds: 68966"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 165670.74889176263,
            "unit": "iter/sec",
            "range": "stddev: 4.3630687963883244e-7",
            "extra": "mean: 6.03606856786365 usec\nrounds: 67568"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 162579.23958338867,
            "unit": "iter/sec",
            "range": "stddev: 3.570440869436236e-7",
            "extra": "mean: 6.150846827445573 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 45322.03435363016,
            "unit": "iter/sec",
            "range": "stddev: 0.00001721760651943904",
            "extra": "mean: 22.064322889775646 usec\nrounds: 11905"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 45682.69643681733,
            "unit": "iter/sec",
            "range": "stddev: 7.751353027757772e-7",
            "extra": "mean: 21.89012641543777 usec\nrounds: 16778"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 40139.63830408784,
            "unit": "iter/sec",
            "range": "stddev: 9.160638057488403e-7",
            "extra": "mean: 24.91302966968089 usec\nrounds: 10718"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 39893.688426314024,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011347861004997773",
            "extra": "mean: 25.066621800264432 usec\nrounds: 16835"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 46097.45043396687,
            "unit": "iter/sec",
            "range": "stddev: 9.479965331104718e-7",
            "extra": "mean: 21.693173713207155 usec\nrounds: 15848"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 46662.29180423912,
            "unit": "iter/sec",
            "range": "stddev: 8.168978215937898e-7",
            "extra": "mean: 21.4305804823147 usec\nrounds: 18588"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 42729.80676569465,
            "unit": "iter/sec",
            "range": "stddev: 0.000014733462976186915",
            "extra": "mean: 23.40286735868985 usec\nrounds: 17242"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 43009.214443285666,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016866739795124145",
            "extra": "mean: 23.250831547241006 usec\nrounds: 12971"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 7927.208475884706,
            "unit": "iter/sec",
            "range": "stddev: 0.00004387638489891871",
            "extra": "mean: 126.14781143224525 usec\nrounds: 1872"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 5980.707567042202,
            "unit": "iter/sec",
            "range": "stddev: 0.000007936580148392764",
            "extra": "mean: 167.2042962793709 usec\nrounds: 2177"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 5759.337115950293,
            "unit": "iter/sec",
            "range": "stddev: 0.0000095836621167684",
            "extra": "mean: 173.6310932781714 usec\nrounds: 2648"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 7604.273142369228,
            "unit": "iter/sec",
            "range": "stddev: 0.000007248928348779265",
            "extra": "mean: 131.5050079445772 usec\nrounds: 2769"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 163.65156733456902,
            "unit": "iter/sec",
            "range": "stddev: 0.013901725695532528",
            "extra": "mean: 6.110543371427672 msec\nrounds: 70"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 181.15540437090098,
            "unit": "iter/sec",
            "range": "stddev: 0.011119158090953629",
            "extra": "mean: 5.520122369369568 msec\nrounds: 111"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 181.91504550632627,
            "unit": "iter/sec",
            "range": "stddev: 0.010865540991128745",
            "extra": "mean: 5.497071433628199 msec\nrounds: 113"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 155.2296493973951,
            "unit": "iter/sec",
            "range": "stddev: 0.01497664112272865",
            "extra": "mean: 6.442068276788758 msec\nrounds: 112"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 8128.316366637221,
            "unit": "iter/sec",
            "range": "stddev: 0.000007190631898924567",
            "extra": "mean: 123.02670748699113 usec\nrounds: 3005"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 6009.966808050427,
            "unit": "iter/sec",
            "range": "stddev: 0.000004675588595813116",
            "extra": "mean: 166.39027001954275 usec\nrounds: 2585"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 5715.116099683931,
            "unit": "iter/sec",
            "range": "stddev: 0.0000047874264791679185",
            "extra": "mean: 174.97457314214563 usec\nrounds: 2584"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 7532.155918279003,
            "unit": "iter/sec",
            "range": "stddev: 0.000004575665201648096",
            "extra": "mean: 132.76411307062887 usec\nrounds: 2494"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 179.7754347256433,
            "unit": "iter/sec",
            "range": "stddev: 0.011310261908905862",
            "extra": "mean: 5.5624952403875865 msec\nrounds: 104"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 181.18224262822156,
            "unit": "iter/sec",
            "range": "stddev: 0.010761512284060266",
            "extra": "mean: 5.519304681816741 msec\nrounds: 110"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 182.16349282786018,
            "unit": "iter/sec",
            "range": "stddev: 0.010628110945683378",
            "extra": "mean: 5.489574142855146 msec\nrounds: 112"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 183.30078430774188,
            "unit": "iter/sec",
            "range": "stddev: 0.010651288733029252",
            "extra": "mean: 5.455514027267388 msec\nrounds: 110"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 99194.71520244726,
            "unit": "iter/sec",
            "range": "stddev: 6.436741162341633e-7",
            "extra": "mean: 10.081182227894827 usec\nrounds: 39061"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 95310.11133971135,
            "unit": "iter/sec",
            "range": "stddev: 5.793869204337748e-7",
            "extra": "mean: 10.492066224072765 usec\nrounds: 40982"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 97454.11319901352,
            "unit": "iter/sec",
            "range": "stddev: 6.310830611373582e-7",
            "extra": "mean: 10.261239543146575 usec\nrounds: 38611"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 98099.9729481091,
            "unit": "iter/sec",
            "range": "stddev: 0.000007112998645549264",
            "extra": "mean: 10.193682729443355 usec\nrounds: 41151"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 89900.28781468705,
            "unit": "iter/sec",
            "range": "stddev: 0.00000151760705937878",
            "extra": "mean: 11.123434911146408 usec\nrounds: 32786"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 87411.21208737293,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014115864264736806",
            "extra": "mean: 11.440179996594008 usec\nrounds: 41323"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 86669.74911886088,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015286272993137072",
            "extra": "mean: 11.538051167409947 usec\nrounds: 40651"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 87970.44441309736,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016199294492777886",
            "extra": "mean: 11.367454224786393 usec\nrounds: 43102"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 80492.34456363798,
            "unit": "iter/sec",
            "range": "stddev: 8.466850490705429e-7",
            "extra": "mean: 12.423541709726084 usec\nrounds: 23256"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 81370.39629756045,
            "unit": "iter/sec",
            "range": "stddev: 5.446117991630635e-7",
            "extra": "mean: 12.28948174644666 usec\nrounds: 31446"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 81799.56181265836,
            "unit": "iter/sec",
            "range": "stddev: 5.453581525447099e-7",
            "extra": "mean: 12.225004362373632 usec\nrounds: 34842"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 81372.7239820016,
            "unit": "iter/sec",
            "range": "stddev: 5.858823921408882e-7",
            "extra": "mean: 12.289130203152407 usec\nrounds: 26666"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 73032.29809230941,
            "unit": "iter/sec",
            "range": "stddev: 6.630285225397639e-7",
            "extra": "mean: 13.692572000624253 usec\nrounds: 22472"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 72300.63513379812,
            "unit": "iter/sec",
            "range": "stddev: 7.903300636111342e-7",
            "extra": "mean: 13.831137142148474 usec\nrounds: 31347"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 72808.34661874753,
            "unit": "iter/sec",
            "range": "stddev: 6.510403613126928e-7",
            "extra": "mean: 13.734689035535776 usec\nrounds: 28328"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 72622.46622872497,
            "unit": "iter/sec",
            "range": "stddev: 7.193128820737439e-7",
            "extra": "mean: 13.769843574996381 usec\nrounds: 28902"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 73037.7363846963,
            "unit": "iter/sec",
            "range": "stddev: 5.825970518259392e-7",
            "extra": "mean: 13.691552469984973 usec\nrounds: 12674"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 18265.08076456617,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016551826126663029",
            "extra": "mean: 54.749278850164 usec\nrounds: 7513"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 18849.918844382682,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016816758933002383",
            "extra": "mean: 53.050626278850125 usec\nrounds: 8897"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 73750.7597872928,
            "unit": "iter/sec",
            "range": "stddev: 6.377962078435956e-7",
            "extra": "mean: 13.559182344482085 usec\nrounds: 25907"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 67856.88373307373,
            "unit": "iter/sec",
            "range": "stddev: 5.877262660778643e-7",
            "extra": "mean: 14.736898380622153 usec\nrounds: 21551"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 17054.329848489735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000049193838051975606",
            "extra": "mean: 58.636135742886204 usec\nrounds: 7028"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 17196.54700181558,
            "unit": "iter/sec",
            "range": "stddev: 0.00000506520296951391",
            "extra": "mean: 58.15120907089208 usec\nrounds: 8643"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 67778.12339245834,
            "unit": "iter/sec",
            "range": "stddev: 6.96881915397635e-7",
            "extra": "mean: 14.754023126454248 usec\nrounds: 26247"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 460656.2078846956,
            "unit": "iter/sec",
            "range": "stddev: 2.528577422121868e-7",
            "extra": "mean: 2.1708162896402445 usec\nrounds: 53764"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 16745.77293339859,
            "unit": "iter/sec",
            "range": "stddev: 0.000001498163255124858",
            "extra": "mean: 59.71656273957656 usec\nrounds: 1825"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 16692.066676751434,
            "unit": "iter/sec",
            "range": "stddev: 0.000001739196222863257",
            "extra": "mean: 59.90869910631207 usec\nrounds: 1901"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 452760.1347429307,
            "unit": "iter/sec",
            "range": "stddev: 1.8080331154600252e-7",
            "extra": "mean: 2.2086750207541628 usec\nrounds: 78125"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 395895.88097501715,
            "unit": "iter/sec",
            "range": "stddev: 1.7954658595279072e-7",
            "extra": "mean: 2.5259166565137985 usec\nrounds: 98040"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 13050.251623975417,
            "unit": "iter/sec",
            "range": "stddev: 0.000009946195618870206",
            "extra": "mean: 76.62687500697984 usec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 15549.122107513804,
            "unit": "iter/sec",
            "range": "stddev: 0.000004422629085429035",
            "extra": "mean: 64.31231249491378 usec\nrounds: 112"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 403171.7591338001,
            "unit": "iter/sec",
            "range": "stddev: 1.987791420191806e-7",
            "extra": "mean: 2.4803324571851557 usec\nrounds: 128206"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 43564.99265430039,
            "unit": "iter/sec",
            "range": "stddev: 0.000012577390823541586",
            "extra": "mean: 22.95421022873254 usec\nrounds: 14684"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 20023.680658292007,
            "unit": "iter/sec",
            "range": "stddev: 0.000001797503132772394",
            "extra": "mean: 49.94086836806848 usec\nrounds: 9990"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 19874.62897539587,
            "unit": "iter/sec",
            "range": "stddev: 0.00000139492155911213",
            "extra": "mean: 50.315404691980255 usec\nrounds: 10870"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 44249.83990498514,
            "unit": "iter/sec",
            "range": "stddev: 7.880254523483997e-7",
            "extra": "mean: 22.598951818746375 usec\nrounds: 15504"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 40045.709653564016,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025168857545899476",
            "extra": "mean: 24.971464075702837 usec\nrounds: 18553"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 18698.373348919806,
            "unit": "iter/sec",
            "range": "stddev: 0.000004136936722234635",
            "extra": "mean: 53.48058792813491 usec\nrounds: 8052"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 18176.309810638086,
            "unit": "iter/sec",
            "range": "stddev: 0.000004722913264384601",
            "extra": "mean: 55.01666787252537 usec\nrounds: 9951"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 39118.41052785262,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029021633462950086",
            "extra": "mean: 25.563410846869452 usec\nrounds: 19231"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 44487.395308932355,
            "unit": "iter/sec",
            "range": "stddev: 8.73658512276257e-7",
            "extra": "mean: 22.478277117725884 usec\nrounds: 19194"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 20141.916381674622,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016453360661545726",
            "extra": "mean: 49.647708840148546 usec\nrounds: 9785"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 19957.990191890196,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014282830773168194",
            "extra": "mean: 50.105245587621525 usec\nrounds: 10538"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 44916.581777658306,
            "unit": "iter/sec",
            "range": "stddev: 9.436587650075114e-7",
            "extra": "mean: 22.263492911150333 usec\nrounds: 18762"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 40111.38540511481,
            "unit": "iter/sec",
            "range": "stddev: 0.000002568977367032756",
            "extra": "mean: 24.9305774383072 usec\nrounds: 15974"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 19065.99909475388,
            "unit": "iter/sec",
            "range": "stddev: 0.000003637201965049386",
            "extra": "mean: 52.44938883245599 usec\nrounds: 8757"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 18489.549760691938,
            "unit": "iter/sec",
            "range": "stddev: 0.00000432670391969474",
            "extra": "mean: 54.084605246903365 usec\nrounds: 9872"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 39574.46440783277,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024539675584648127",
            "extra": "mean: 25.26881955228875 usec\nrounds: 18975"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 37897.209640559246,
            "unit": "iter/sec",
            "range": "stddev: 9.697448521716733e-7",
            "extra": "mean: 26.387167010041722 usec\nrounds: 16502"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 37426.31301601844,
            "unit": "iter/sec",
            "range": "stddev: 9.346398217903622e-7",
            "extra": "mean: 26.719169467000413 usec\nrounds: 16723"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 37100.55531671239,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011061972299421445",
            "extra": "mean: 26.953774450635734 usec\nrounds: 17331"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 37344.864294515115,
            "unit": "iter/sec",
            "range": "stddev: 0.000001359873583751548",
            "extra": "mean: 26.7774436697276 usec\nrounds: 17637"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 34387.301621088955,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024386215738829243",
            "extra": "mean: 29.080502187084157 usec\nrounds: 13947"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 34307.12273940255,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026168490008882995",
            "extra": "mean: 29.14846597880026 usec\nrounds: 15314"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 34040.85076925879,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023858231491485832",
            "extra": "mean: 29.376469077649144 usec\nrounds: 11642"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 33626.112652975055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032482367693303945",
            "extra": "mean: 29.738792893490338 usec\nrounds: 17421"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 36775.74671730497,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011594190841771674",
            "extra": "mean: 27.19183400100605 usec\nrounds: 16723"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 37039.4247436572,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010079685476603804",
            "extra": "mean: 26.998259474082264 usec\nrounds: 13986"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 37401.33259059371,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011289837403128876",
            "extra": "mean: 26.73701525414354 usec\nrounds: 17241"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 37339.15449777322,
            "unit": "iter/sec",
            "range": "stddev: 9.280716955317599e-7",
            "extra": "mean: 26.781538399848785 usec\nrounds: 17422"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 33719.55657767309,
            "unit": "iter/sec",
            "range": "stddev: 0.000001329816683941895",
            "extra": "mean: 29.65638049529202 usec\nrounds: 12920"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 33484.19560480348,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015766606498452478",
            "extra": "mean: 29.86483569151486 usec\nrounds: 14771"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 33548.717625900244,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012179537788349105",
            "extra": "mean: 29.807398635946107 usec\nrounds: 16421"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 33553.224272210726,
            "unit": "iter/sec",
            "range": "stddev: 0.00000126231882534605",
            "extra": "mean: 29.803395104064997 usec\nrounds: 16502"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 67957.14737543296,
            "unit": "iter/sec",
            "range": "stddev: 7.91771417391622e-7",
            "extra": "mean: 14.715155632937995 usec\nrounds: 20921"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 25265.275478496813,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011732987223352093",
            "extra": "mean: 39.58001569589441 usec\nrounds: 11468"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 24826.06299130569,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012961571533348858",
            "extra": "mean: 40.28024904110688 usec\nrounds: 11211"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 67993.83173585564,
            "unit": "iter/sec",
            "range": "stddev: 5.180730789543281e-7",
            "extra": "mean: 14.707216441115252 usec\nrounds: 24390"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 63770.08340877917,
            "unit": "iter/sec",
            "range": "stddev: 5.594815138656633e-7",
            "extra": "mean: 15.681334358460804 usec\nrounds: 21459"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 23544.439892339804,
            "unit": "iter/sec",
            "range": "stddev: 0.000003603837299054285",
            "extra": "mean: 42.47287277049859 usec\nrounds: 10823"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 23204.125611324012,
            "unit": "iter/sec",
            "range": "stddev: 0.000003096146451779006",
            "extra": "mean: 43.09578463546942 usec\nrounds: 11325"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 65078.67119219878,
            "unit": "iter/sec",
            "range": "stddev: 6.885110399183358e-7",
            "extra": "mean: 15.366017493606625 usec\nrounds: 25381"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 66910.0823148204,
            "unit": "iter/sec",
            "range": "stddev: 5.231477369017891e-7",
            "extra": "mean: 14.945430724399253 usec\nrounds: 24814"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 25280.161940617476,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013939185822016853",
            "extra": "mean: 39.55670862983304 usec\nrounds: 10684"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 24731.995790516852,
            "unit": "iter/sec",
            "range": "stddev: 0.000001251750615008966",
            "extra": "mean: 40.433453428915605 usec\nrounds: 11724"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 67692.79630350681,
            "unit": "iter/sec",
            "range": "stddev: 6.400846267277245e-7",
            "extra": "mean: 14.772620642178953 usec\nrounds: 23980"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 63900.50570771807,
            "unit": "iter/sec",
            "range": "stddev: 6.570317921353933e-7",
            "extra": "mean: 15.649328419621842 usec\nrounds: 15060"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 23181.10608063672,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039357436497486565",
            "extra": "mean: 43.138580036752614 usec\nrounds: 8696"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 23216.73555276075,
            "unit": "iter/sec",
            "range": "stddev: 0.000003308264443007181",
            "extra": "mean: 43.072377584155575 usec\nrounds: 11224"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 64861.08216977997,
            "unit": "iter/sec",
            "range": "stddev: 5.779091026199417e-7",
            "extra": "mean: 15.417565765899592 usec\nrounds: 22831"
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
        "date": 1669518893122,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmarks/test_00_common.py::test_import",
            "value": 4.17797943380451,
            "unit": "iter/sec",
            "range": "stddev: 0.0025411834678412616",
            "extra": "mean: 239.3501489999892 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[None]",
            "value": 59495.44282385863,
            "unit": "iter/sec",
            "range": "stddev: 0.00021487094688451715",
            "extra": "mean: 16.808010034660736 usec\nrounds: 7474"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tuple()]",
            "value": 38.51750010502077,
            "unit": "iter/sec",
            "range": "stddev: 0.0005144661934465161",
            "extra": "mean: 25.962224891891402 msec\nrounds: 37"
          },
          {
            "name": "benchmarks/benchmarks/test_01_registry_creation.py::test_create_registry[tiny def]",
            "value": 1304.4285701565916,
            "unit": "iter/sec",
            "range": "stddev: 0.00006206960228157791",
            "extra": "mean: 766.6192100345929 usec\nrounds: 1176"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[meter]",
            "value": 15494.801839516902,
            "unit": "iter/sec",
            "range": "stddev: 0.000001983779736994802",
            "extra": "mean: 64.5377727548388 usec\nrounds: 11481"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[kilometer]",
            "value": 14950.161408150365,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018767466607236205",
            "extra": "mean: 66.88890993878039 usec\nrounds: 7184"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[second]",
            "value": 15505.813708608966,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021858529808090255",
            "extra": "mean: 64.49193952619147 usec\nrounds: 10765"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[minute]",
            "value": 15501.13851825564,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020305161569355043",
            "extra": "mean: 64.51139049059546 usec\nrounds: 10684"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getattr[angstrom]",
            "value": 15069.186947821496,
            "unit": "iter/sec",
            "range": "stddev: 0.000002213933587128964",
            "extra": "mean: 66.3605809299862 usec\nrounds: 11442"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[meter]",
            "value": 14017.925629790761,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023385673340373705",
            "extra": "mean: 71.33723108608949 usec\nrounds: 9226"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[kilometer]",
            "value": 13493.033530085011,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025171020329567904",
            "extra": "mean: 74.1123186102169 usec\nrounds: 5728"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[second]",
            "value": 14080.218406726588,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020570777828064904",
            "extra": "mean: 71.0216255965367 usec\nrounds: 10267"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[minute]",
            "value": 14069.126830854591,
            "unit": "iter/sec",
            "range": "stddev: 0.000002201605236664141",
            "extra": "mean: 71.07761640238606 usec\nrounds: 9901"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_getitem[angstrom]",
            "value": 13763.843090398437,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023446671560761826",
            "extra": "mean: 72.65412671680289 usec\nrounds: 10267"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[meter]",
            "value": 3015061.428826793,
            "unit": "iter/sec",
            "range": "stddev: 2.27480778089903e-8",
            "extra": "mean: 331.6682009983367 nsec\nrounds: 200000"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[kilometer]",
            "value": 2967956.166440882,
            "unit": "iter/sec",
            "range": "stddev: 0.000001069006688118655",
            "extra": "mean: 336.9321997765198 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[second]",
            "value": 2998584.9903979874,
            "unit": "iter/sec",
            "range": "stddev: 3.419615014525347e-8",
            "extra": "mean: 333.49063081474515 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[minute]",
            "value": 3013172.1103244717,
            "unit": "iter/sec",
            "range": "stddev: 2.72557739781115e-8",
            "extra": "mean: 331.8761635195616 nsec\nrounds: 196079"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_unit_name[angstrom]",
            "value": 3015048.651647048,
            "unit": "iter/sec",
            "range": "stddev: 1.7874084503870637e-8",
            "extra": "mean: 331.6696065426459 nsec\nrounds: 196040"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[meter]",
            "value": 16534.903875829936,
            "unit": "iter/sec",
            "range": "stddev: 0.000001842150723327971",
            "extra": "mean: 60.478125999979966 usec\nrounds: 12500"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[kilometer]",
            "value": 15664.036677527047,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017977741345030691",
            "extra": "mean: 63.8405042446488 usec\nrounds: 7657"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[second]",
            "value": 16530.027586299584,
            "unit": "iter/sec",
            "range": "stddev: 0.00000190130323737448",
            "extra": "mean: 60.4959667961365 usec\nrounds: 12107"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[minute]",
            "value": 16363.765425660278,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023604121194382285",
            "extra": "mean: 61.110629124020825 usec\nrounds: 12821"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_units[angstrom]",
            "value": 15978.32786581852,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031222381192684474",
            "extra": "mean: 62.58477159798681 usec\nrounds: 12316"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[meter]",
            "value": 10668.704120442912,
            "unit": "iter/sec",
            "range": "stddev: 0.000002822949648567527",
            "extra": "mean: 93.73209611126464 usec\nrounds: 7252"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[kilometer]",
            "value": 10502.68586744781,
            "unit": "iter/sec",
            "range": "stddev: 0.000002806198034552414",
            "extra": "mean: 95.21373985862185 usec\nrounds: 5374"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[second]",
            "value": 10616.366399102277,
            "unit": "iter/sec",
            "range": "stddev: 0.000002461838849408649",
            "extra": "mean: 94.19418682502896 usec\nrounds: 7408"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[minute]",
            "value": 10651.181703148402,
            "unit": "iter/sec",
            "range": "stddev: 0.000002650779967040142",
            "extra": "mean: 93.8862961754195 usec\nrounds: 7975"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_parse_expression[angstrom]",
            "value": 10505.396647735726,
            "unit": "iter/sec",
            "range": "stddev: 0.000002664048494142997",
            "extra": "mean: 95.18917119759914 usec\nrounds: 7652"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[meter]",
            "value": 16579.450948817917,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031714418726502194",
            "extra": "mean: 60.31562824891364 usec\nrounds: 12659"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom]",
            "value": 13672.731190067881,
            "unit": "iter/sec",
            "range": "stddev: 0.000002039506608583166",
            "extra": "mean: 73.13827691766647 usec\nrounds: 8461"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[kilometer/second]",
            "value": 10148.24538928338,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025850150796674763",
            "extra": "mean: 98.53920176743136 usec\nrounds: 5432"
          },
          {
            "name": "benchmarks/benchmarks/test_10_registry.py::test_base_units[angstrom/minute]",
            "value": 9370.870814797803,
            "unit": "iter/sec",
            "range": "stddev: 0.00000276629453585884",
            "extra": "mean: 106.71366832001057 usec\nrounds: 7257"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[int]",
            "value": 14792.762363462407,
            "unit": "iter/sec",
            "range": "stddev: 0.000001991548770435049",
            "extra": "mean: 67.60062626774592 usec\nrounds: 12723"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[float]",
            "value": 14748.108669291292,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019127056203321635",
            "extra": "mean: 67.8053045596425 usec\nrounds: 13334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_build_by_mul[complex]",
            "value": 14586.902095260826,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022170706469529234",
            "extra": "mean: 68.55465221261014 usec\nrounds: 12407"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-int]",
            "value": 14125918.033100815,
            "unit": "iter/sec",
            "range": "stddev: 9.969310508880094e-9",
            "extra": "mean: 70.79185916669428 nsec\nrounds: 119048"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-float]",
            "value": 13333662.406330049,
            "unit": "iter/sec",
            "range": "stddev: 4.044181809143048e-9",
            "extra": "mean: 74.99814901004515 nsec\nrounds: 133334"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[neg-complex]",
            "value": 12140355.667507092,
            "unit": "iter/sec",
            "range": "stddev: 5.711969826342119e-9",
            "extra": "mean: 82.36990969512473 nsec\nrounds: 120482"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-int]",
            "value": 14205910.563418277,
            "unit": "iter/sec",
            "range": "stddev: 3.2320002895565086e-9",
            "extra": "mean: 70.3932349521929 nsec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-float]",
            "value": 14019717.75577033,
            "unit": "iter/sec",
            "range": "stddev: 3.300301172147977e-9",
            "extra": "mean: 71.32811212184185 nsec\nrounds: 140846"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op1[truth-complex]",
            "value": 14040629.188875042,
            "unit": "iter/sec",
            "range": "stddev: 3.817835206468094e-9",
            "extra": "mean: 71.221879486179 nsec\nrounds: 138889"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys0]",
            "value": 47560.27045047125,
            "unit": "iter/sec",
            "range": "stddev: 8.969190104973676e-7",
            "extra": "mean: 21.02595276537355 usec\nrounds: 9294"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys1]",
            "value": 20566.88772403623,
            "unit": "iter/sec",
            "range": "stddev: 0.000001601388288952483",
            "extra": "mean: 48.621843684755184 usec\nrounds: 6762"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys2]",
            "value": 47428.96128683005,
            "unit": "iter/sec",
            "range": "stddev: 8.364227184523865e-7",
            "extra": "mean: 21.08416403961344 usec\nrounds: 11991"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys3]",
            "value": 20579.79958075279,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014423954771898842",
            "extra": "mean: 48.591338126307484 usec\nrounds: 7441"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys4]",
            "value": 47889.650047070696,
            "unit": "iter/sec",
            "range": "stddev: 9.09956416054943e-7",
            "extra": "mean: 20.881338640334622 usec\nrounds: 10616"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys5]",
            "value": 20514.86802458648,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012512523887932606",
            "extra": "mean: 48.745134445979794 usec\nrounds: 7728"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys6]",
            "value": 17476.51270243637,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014583804236405531",
            "extra": "mean: 57.21965343009145 usec\nrounds: 8411"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys7]",
            "value": 34515.63074077078,
            "unit": "iter/sec",
            "range": "stddev: 0.000001013856313081886",
            "extra": "mean: 28.972380876087353 usec\nrounds: 11211"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys8]",
            "value": 17288.995604269538,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015668049112628277",
            "extra": "mean: 57.84025994853332 usec\nrounds: 7413"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys9]",
            "value": 34419.00024670786,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012030285148624441",
            "extra": "mean: 29.053720120637404 usec\nrounds: 11262"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys10]",
            "value": 17395.461836851893,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016569761446076202",
            "extra": "mean: 57.48625758710944 usec\nrounds: 7776"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys11]",
            "value": 34047.31119697985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010579195225553374",
            "extra": "mean: 29.3708949354187 usec\nrounds: 11136"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys12]",
            "value": 47055.45205454304,
            "unit": "iter/sec",
            "range": "stddev: 8.696295399703809e-7",
            "extra": "mean: 21.25152254070107 usec\nrounds: 13021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys13]",
            "value": 20698.77610685512,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014216079113241484",
            "extra": "mean: 48.31203520621759 usec\nrounds: 7868"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys14]",
            "value": 46744.8912080724,
            "unit": "iter/sec",
            "range": "stddev: 9.089355812170689e-7",
            "extra": "mean: 21.392712105131814 usec\nrounds: 12904"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys15]",
            "value": 20385.900341183344,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011942813186087451",
            "extra": "mean: 49.053511655789485 usec\nrounds: 8279"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys16]",
            "value": 46572.43591624824,
            "unit": "iter/sec",
            "range": "stddev: 9.477304921402226e-7",
            "extra": "mean: 21.47192819800776 usec\nrounds: 13774"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys17]",
            "value": 20281.574492149364,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016732746496561257",
            "extra": "mean: 49.30583670351048 usec\nrounds: 7912"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys18]",
            "value": 17330.832629501423,
            "unit": "iter/sec",
            "range": "stddev: 0.000001417652772674207",
            "extra": "mean: 57.70063224185486 usec\nrounds: 8734"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys19]",
            "value": 34150.69403530668,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010746773186662022",
            "extra": "mean: 29.281981764884495 usec\nrounds: 10639"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys20]",
            "value": 17329.135741419184,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014164805278627229",
            "extra": "mean: 57.70628235139581 usec\nrounds: 8369"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys21]",
            "value": 34040.47007611852,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010993645164341464",
            "extra": "mean: 29.37679761072281 usec\nrounds: 11300"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys22]",
            "value": 17473.44354040856,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013690722737899515",
            "extra": "mean: 57.22970390395173 usec\nrounds: 7582"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys23]",
            "value": 34015.44386989285,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012665166746565462",
            "extra": "mean: 29.398411022503293 usec\nrounds: 10941"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys24]",
            "value": 45721.336116786115,
            "unit": "iter/sec",
            "range": "stddev: 8.221691459252608e-7",
            "extra": "mean: 21.871626792482566 usec\nrounds: 13459"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys25]",
            "value": 20090.06784905619,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014506365155721114",
            "extra": "mean: 49.7758398584492 usec\nrounds: 7918"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys26]",
            "value": 45997.146205910365,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010094856856349218",
            "extra": "mean: 21.74047919241359 usec\nrounds: 14706"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys27]",
            "value": 20295.47782443222,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014104489043852482",
            "extra": "mean: 49.272059946091744 usec\nrounds: 7807"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys28]",
            "value": 45650.88182764095,
            "unit": "iter/sec",
            "range": "stddev: 9.047312418444162e-7",
            "extra": "mean: 21.90538188891051 usec\nrounds: 14389"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys29]",
            "value": 20017.927683544192,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026456019542912174",
            "extra": "mean: 49.95522093038898 usec\nrounds: 8170"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys30]",
            "value": 17274.637361572673,
            "unit": "iter/sec",
            "range": "stddev: 0.000001412230317875087",
            "extra": "mean: 57.888335313162294 usec\nrounds: 7912"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys31]",
            "value": 33028.17261582057,
            "unit": "iter/sec",
            "range": "stddev: 9.190069870217805e-7",
            "extra": "mean: 30.277182199326333 usec\nrounds: 10494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys32]",
            "value": 17157.124111846337,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018595177357029306",
            "extra": "mean: 58.28482637772249 usec\nrounds: 7931"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys33]",
            "value": 33361.29008111556,
            "unit": "iter/sec",
            "range": "stddev: 0.000001137788545830804",
            "extra": "mean: 29.974860011965134 usec\nrounds: 11351"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys34]",
            "value": 17383.982637187542,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017546403598949941",
            "extra": "mean: 57.52421760136919 usec\nrounds: 8272"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[add-keys35]",
            "value": 33455.210177880785,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030758893435923967",
            "extra": "mean: 29.890710435923644 usec\nrounds: 8461"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys0]",
            "value": 47721.97194067232,
            "unit": "iter/sec",
            "range": "stddev: 8.352093357063734e-7",
            "extra": "mean: 20.954708268199692 usec\nrounds: 14006"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys1]",
            "value": 20755.182814979922,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014032183323071468",
            "extra": "mean: 48.180736778587 usec\nrounds: 8244"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys2]",
            "value": 47626.7850566255,
            "unit": "iter/sec",
            "range": "stddev: 9.0347253401894e-7",
            "extra": "mean: 20.996588344375077 usec\nrounds: 12904"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys3]",
            "value": 20561.6259076836,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016189755926499227",
            "extra": "mean: 48.63428624223309 usec\nrounds: 7305"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys4]",
            "value": 47769.49111071036,
            "unit": "iter/sec",
            "range": "stddev: 9.835828941442152e-7",
            "extra": "mean: 20.933863366524136 usec\nrounds: 11615"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys5]",
            "value": 20765.884903188693,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012952365793688616",
            "extra": "mean: 48.15590593235185 usec\nrounds: 8058"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys6]",
            "value": 17667.053828067095,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014443069145180258",
            "extra": "mean: 56.60253315192437 usec\nrounds: 8461"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys7]",
            "value": 33086.18478330596,
            "unit": "iter/sec",
            "range": "stddev: 0.000003210876937991399",
            "extra": "mean: 30.224095239429428 usec\nrounds: 21"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys8]",
            "value": 17676.159336946796,
            "unit": "iter/sec",
            "range": "stddev: 0.000001279453583731217",
            "extra": "mean: 56.573375524500676 usec\nrounds: 8098"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys9]",
            "value": 34305.12729867855,
            "unit": "iter/sec",
            "range": "stddev: 9.809629324856019e-7",
            "extra": "mean: 29.15016146984304 usec\nrounds: 10776"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys10]",
            "value": 17610.40276060888,
            "unit": "iter/sec",
            "range": "stddev: 0.000017066707649847783",
            "extra": "mean: 56.784618364141544 usec\nrounds: 7874"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys11]",
            "value": 34387.275760557364,
            "unit": "iter/sec",
            "range": "stddev: 9.957765396426354e-7",
            "extra": "mean: 29.08052405672137 usec\nrounds: 11161"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys12]",
            "value": 46554.73052718666,
            "unit": "iter/sec",
            "range": "stddev: 8.457069656401589e-7",
            "extra": "mean: 21.480094260582778 usec\nrounds: 13643"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys13]",
            "value": 20703.638562491156,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013862902103192245",
            "extra": "mean: 48.3006886437683 usec\nrounds: 8418"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys14]",
            "value": 46723.020610519256,
            "unit": "iter/sec",
            "range": "stddev: 0.00000126777403735439",
            "extra": "mean: 21.402725828365202 usec\nrounds: 14728"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys15]",
            "value": 20641.13475064996,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013684691504983322",
            "extra": "mean: 48.44694887564316 usec\nrounds: 8000"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys16]",
            "value": 45956.373699270924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010514219629078216",
            "extra": "mean: 21.75976735117951 usec\nrounds: 13832"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys17]",
            "value": 20718.71345703043,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012925515670704082",
            "extra": "mean: 48.26554515916009 usec\nrounds: 7994"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys18]",
            "value": 17592.58947845391,
            "unit": "iter/sec",
            "range": "stddev: 0.000001345626346608949",
            "extra": "mean: 56.8421153250194 usec\nrounds: 8411"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys19]",
            "value": 33837.385068661075,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010016314928709728",
            "extra": "mean: 29.553111092090944 usec\nrounds: 11495"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys20]",
            "value": 17582.94330152307,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014397461554221333",
            "extra": "mean: 56.87329947275539 usec\nrounds: 8348"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys21]",
            "value": 34268.51286199574,
            "unit": "iter/sec",
            "range": "stddev: 8.954089421980561e-7",
            "extra": "mean: 29.18130716751978 usec\nrounds: 12166"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys22]",
            "value": 17457.074290775836,
            "unit": "iter/sec",
            "range": "stddev: 0.000001442359255700113",
            "extra": "mean: 57.28336738123358 usec\nrounds: 7646"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys23]",
            "value": 33917.83602303136,
            "unit": "iter/sec",
            "range": "stddev: 9.581095853269049e-7",
            "extra": "mean: 29.483012988239164 usec\nrounds: 11087"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys24]",
            "value": 45204.178024767265,
            "unit": "iter/sec",
            "range": "stddev: 9.127241553829826e-7",
            "extra": "mean: 22.121848990420805 usec\nrounds: 13774"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys25]",
            "value": 20349.732165635774,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014404623405558012",
            "extra": "mean: 49.14069590010045 usec\nrounds: 8244"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys26]",
            "value": 45314.33395774733,
            "unit": "iter/sec",
            "range": "stddev: 0.000002743182833601037",
            "extra": "mean: 22.06807234400565 usec\nrounds: 13643"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys27]",
            "value": 20115.178788400735,
            "unit": "iter/sec",
            "range": "stddev: 0.000003638816696956557",
            "extra": "mean: 49.71370180297092 usec\nrounds: 7599"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys28]",
            "value": 45312.32352676254,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010607395512529557",
            "extra": "mean: 22.06905146696739 usec\nrounds: 14145"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys29]",
            "value": 20350.061475401435,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015512117309080137",
            "extra": "mean: 49.13990069311442 usec\nrounds: 8217"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys30]",
            "value": 17140.997672954196,
            "unit": "iter/sec",
            "range": "stddev: 0.000005649333891772491",
            "extra": "mean: 58.339661382595196 usec\nrounds: 8390"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys31]",
            "value": 33267.26201729844,
            "unit": "iter/sec",
            "range": "stddev: 9.415200323486772e-7",
            "extra": "mean: 30.059582284830537 usec\nrounds: 11211"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys32]",
            "value": 17108.921904315466,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014685835355232475",
            "extra": "mean: 58.4490364496763 usec\nrounds: 7819"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys33]",
            "value": 33390.20598888227,
            "unit": "iter/sec",
            "range": "stddev: 9.622217254187991e-7",
            "extra": "mean: 29.948901792728197 usec\nrounds: 11099"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys34]",
            "value": 17449.25773250495,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013488957777214588",
            "extra": "mean: 57.309028001642325 usec\nrounds: 8071"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[sub-keys35]",
            "value": 33277.37985373078,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010383506039558574",
            "extra": "mean: 30.05044280515638 usec\nrounds: 11863"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys0]",
            "value": 177916.11144523023,
            "unit": "iter/sec",
            "range": "stddev: 3.3138300197250375e-7",
            "extra": "mean: 5.620626439488255 usec\nrounds: 64517"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys1]",
            "value": 174068.7254888962,
            "unit": "iter/sec",
            "range": "stddev: 3.2840181815455623e-7",
            "extra": "mean: 5.744857367062124 usec\nrounds: 64936"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys2]",
            "value": 177517.06461288215,
            "unit": "iter/sec",
            "range": "stddev: 3.3872770743140146e-7",
            "extra": "mean: 5.633261242690869 usec\nrounds: 69445"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys3]",
            "value": 176614.52957403578,
            "unit": "iter/sec",
            "range": "stddev: 3.656891163560129e-7",
            "extra": "mean: 5.662048317382664 usec\nrounds: 60972"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys4]",
            "value": 177016.6690068637,
            "unit": "iter/sec",
            "range": "stddev: 4.1334903263645586e-7",
            "extra": "mean: 5.64918550106276 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys5]",
            "value": 169819.99824832502,
            "unit": "iter/sec",
            "range": "stddev: 3.733586789409605e-7",
            "extra": "mean: 5.888587977357745 usec\nrounds: 59521"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys6]",
            "value": 173680.91080051335,
            "unit": "iter/sec",
            "range": "stddev: 4.004733660536133e-7",
            "extra": "mean: 5.757685144503769 usec\nrounds: 68028"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys7]",
            "value": 176161.29295311746,
            "unit": "iter/sec",
            "range": "stddev: 3.489772781596045e-7",
            "extra": "mean: 5.676615919628463 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys8]",
            "value": 171513.9712043394,
            "unit": "iter/sec",
            "range": "stddev: 3.8223061855393495e-7",
            "extra": "mean: 5.830428815671312 usec\nrounds: 45663"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys9]",
            "value": 178574.58803021265,
            "unit": "iter/sec",
            "range": "stddev: 3.5702836922782293e-7",
            "extra": "mean: 5.599900921125531 usec\nrounds: 65786"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys10]",
            "value": 171393.34846619365,
            "unit": "iter/sec",
            "range": "stddev: 3.6196943344391844e-7",
            "extra": "mean: 5.834532138785096 usec\nrounds: 64517"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys11]",
            "value": 179712.99693720613,
            "unit": "iter/sec",
            "range": "stddev: 3.831145431584863e-7",
            "extra": "mean: 5.5644278212633225 usec\nrounds: 56180"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys12]",
            "value": 178199.41898430767,
            "unit": "iter/sec",
            "range": "stddev: 3.927730315213139e-7",
            "extra": "mean: 5.611690575085771 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys13]",
            "value": 173255.4255294462,
            "unit": "iter/sec",
            "range": "stddev: 3.489855743124009e-7",
            "extra": "mean: 5.771825020452486 usec\nrounds: 61350"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys14]",
            "value": 178029.54151696095,
            "unit": "iter/sec",
            "range": "stddev: 3.665553707297693e-7",
            "extra": "mean: 5.617045303151161 usec\nrounds: 68494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys15]",
            "value": 172579.16249436492,
            "unit": "iter/sec",
            "range": "stddev: 4.030827265733757e-7",
            "extra": "mean: 5.794442304311519 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys16]",
            "value": 177568.93624365688,
            "unit": "iter/sec",
            "range": "stddev: 3.7344288586226956e-7",
            "extra": "mean: 5.631615648290071 usec\nrounds: 70922"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys17]",
            "value": 174346.99780433183,
            "unit": "iter/sec",
            "range": "stddev: 3.4429412404462926e-7",
            "extra": "mean: 5.735688096690323 usec\nrounds: 65360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys18]",
            "value": 173973.79540463912,
            "unit": "iter/sec",
            "range": "stddev: 3.5066910839822115e-7",
            "extra": "mean: 5.747992090844128 usec\nrounds: 68023"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys19]",
            "value": 174242.83409337746,
            "unit": "iter/sec",
            "range": "stddev: 4.078744640710369e-7",
            "extra": "mean: 5.739116935300167 usec\nrounds: 47847"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys20]",
            "value": 174483.78333896396,
            "unit": "iter/sec",
            "range": "stddev: 3.5906603588416863e-7",
            "extra": "mean: 5.731191637777206 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys21]",
            "value": 178994.11585936003,
            "unit": "iter/sec",
            "range": "stddev: 3.9752177627649327e-7",
            "extra": "mean: 5.586775828908946 usec\nrounds: 61346"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys22]",
            "value": 173666.26426576037,
            "unit": "iter/sec",
            "range": "stddev: 3.575630651228027e-7",
            "extra": "mean: 5.758170731822195 usec\nrounds: 56498"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys23]",
            "value": 179519.54577856913,
            "unit": "iter/sec",
            "range": "stddev: 3.6077800977532606e-7",
            "extra": "mean: 5.5704240764594175 usec\nrounds: 57143"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys24]",
            "value": 176262.85913775954,
            "unit": "iter/sec",
            "range": "stddev: 3.2071707637699214e-7",
            "extra": "mean: 5.673344940004874 usec\nrounds: 69931"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys25]",
            "value": 172140.08827913646,
            "unit": "iter/sec",
            "range": "stddev: 4.037081403653423e-7",
            "extra": "mean: 5.809222070215477 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys26]",
            "value": 179210.96522360833,
            "unit": "iter/sec",
            "range": "stddev: 3.513145421863174e-7",
            "extra": "mean: 5.580015702455829 usec\nrounds: 64512"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys27]",
            "value": 176238.13834150118,
            "unit": "iter/sec",
            "range": "stddev: 4.766731467850814e-7",
            "extra": "mean: 5.67414073599821 usec\nrounds: 68028"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys28]",
            "value": 176235.014048468,
            "unit": "iter/sec",
            "range": "stddev: 3.5135644703608505e-7",
            "extra": "mean: 5.674241327123457 usec\nrounds: 68028"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys29]",
            "value": 171964.4338880279,
            "unit": "iter/sec",
            "range": "stddev: 3.910478332677421e-7",
            "extra": "mean: 5.815155944694559 usec\nrounds: 56815"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys30]",
            "value": 170391.0666609714,
            "unit": "iter/sec",
            "range": "stddev: 3.810017385669964e-7",
            "extra": "mean: 5.868852279619263 usec\nrounds: 65360"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys31]",
            "value": 175321.22431266736,
            "unit": "iter/sec",
            "range": "stddev: 3.7025760427885063e-7",
            "extra": "mean: 5.703815975050476 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys32]",
            "value": 169856.32959254822,
            "unit": "iter/sec",
            "range": "stddev: 4.4629492007780327e-7",
            "extra": "mean: 5.887328440446125 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys33]",
            "value": 179840.34851164138,
            "unit": "iter/sec",
            "range": "stddev: 3.978213185186716e-7",
            "extra": "mean: 5.560487444981059 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys34]",
            "value": 173309.66370165226,
            "unit": "iter/sec",
            "range": "stddev: 6.536094517536291e-7",
            "extra": "mean: 5.770018697407849 usec\nrounds: 61346"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[mul-keys35]",
            "value": 177995.24306770376,
            "unit": "iter/sec",
            "range": "stddev: 3.0724288452368566e-7",
            "extra": "mean: 5.61812766883681 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys0]",
            "value": 146052.79471611916,
            "unit": "iter/sec",
            "range": "stddev: 4.5893634968801447e-7",
            "extra": "mean: 6.846839199097056 usec\nrounds: 42736"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys1]",
            "value": 147047.85853686876,
            "unit": "iter/sec",
            "range": "stddev: 4.003894702559381e-7",
            "extra": "mean: 6.800507059062499 usec\nrounds: 52911"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys2]",
            "value": 145655.38843542238,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020070468117485367",
            "extra": "mean: 6.865520120756528 usec\nrounds: 49998"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys3]",
            "value": 147697.8275997274,
            "unit": "iter/sec",
            "range": "stddev: 4.5614117513568534e-7",
            "extra": "mean: 6.77058028713921 usec\nrounds: 51814"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys4]",
            "value": 142438.36157200145,
            "unit": "iter/sec",
            "range": "stddev: 5.134557656191262e-7",
            "extra": "mean: 7.020580614404976 usec\nrounds: 39999"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys5]",
            "value": 144127.5318380586,
            "unit": "iter/sec",
            "range": "stddev: 0.000003349063634178701",
            "extra": "mean: 6.9382996242771835 usec\nrounds: 53764"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys6]",
            "value": 147904.98163835597,
            "unit": "iter/sec",
            "range": "stddev: 3.7301313438749017e-7",
            "extra": "mean: 6.761097489232044 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys7]",
            "value": 146201.28574098484,
            "unit": "iter/sec",
            "range": "stddev: 4.898773271927816e-7",
            "extra": "mean: 6.839885127765799 usec\nrounds: 53764"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys8]",
            "value": 147331.80817271417,
            "unit": "iter/sec",
            "range": "stddev: 8.88208845640608e-7",
            "extra": "mean: 6.787400578344358 usec\nrounds: 52911"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys9]",
            "value": 143650.42464951536,
            "unit": "iter/sec",
            "range": "stddev: 4.877776063295581e-7",
            "extra": "mean: 6.961343848720559 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys10]",
            "value": 148674.64612074711,
            "unit": "iter/sec",
            "range": "stddev: 3.554431351437071e-7",
            "extra": "mean: 6.72609638625165 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys11]",
            "value": 145187.54546240164,
            "unit": "iter/sec",
            "range": "stddev: 6.306717721792799e-7",
            "extra": "mean: 6.887643129547666 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys12]",
            "value": 146212.38812662533,
            "unit": "iter/sec",
            "range": "stddev: 4.490806580399622e-7",
            "extra": "mean: 6.839365752879729 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys13]",
            "value": 146419.75694000663,
            "unit": "iter/sec",
            "range": "stddev: 5.206510594920338e-7",
            "extra": "mean: 6.829679415529528 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys14]",
            "value": 146715.53436550967,
            "unit": "iter/sec",
            "range": "stddev: 5.613898761468023e-7",
            "extra": "mean: 6.815910832650609 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys15]",
            "value": 148609.7727496078,
            "unit": "iter/sec",
            "range": "stddev: 3.6682708635271206e-7",
            "extra": "mean: 6.729032562918303 usec\nrounds: 43669"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys16]",
            "value": 147046.2591202696,
            "unit": "iter/sec",
            "range": "stddev: 5.509391923625665e-7",
            "extra": "mean: 6.800581027920587 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys17]",
            "value": 147402.23488189798,
            "unit": "iter/sec",
            "range": "stddev: 3.766247671871301e-7",
            "extra": "mean: 6.784157654062863 usec\nrounds: 54645"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys18]",
            "value": 148464.2485117015,
            "unit": "iter/sec",
            "range": "stddev: 5.490066902009282e-7",
            "extra": "mean: 6.735628341668958 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys19]",
            "value": 146476.09395493,
            "unit": "iter/sec",
            "range": "stddev: 5.377279420021908e-7",
            "extra": "mean: 6.82705261315676 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys20]",
            "value": 145989.14408198686,
            "unit": "iter/sec",
            "range": "stddev: 3.2342898340462245e-7",
            "extra": "mean: 6.849824391315044 usec\nrounds: 51814"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys21]",
            "value": 145823.55190564162,
            "unit": "iter/sec",
            "range": "stddev: 5.41031660983291e-7",
            "extra": "mean: 6.857602814715912 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys22]",
            "value": 144832.03052765212,
            "unit": "iter/sec",
            "range": "stddev: 4.015255865264908e-7",
            "extra": "mean: 6.9045500249965395 usec\nrounds: 51814"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys23]",
            "value": 148574.48791063833,
            "unit": "iter/sec",
            "range": "stddev: 4.5334066658620126e-7",
            "extra": "mean: 6.730630635600511 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys24]",
            "value": 145202.05524789507,
            "unit": "iter/sec",
            "range": "stddev: 4.811266056082513e-7",
            "extra": "mean: 6.886954859507725 usec\nrounds: 48781"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys25]",
            "value": 145925.73150017293,
            "unit": "iter/sec",
            "range": "stddev: 5.525620577169135e-7",
            "extra": "mean: 6.852801008565202 usec\nrounds: 52354"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys26]",
            "value": 145621.5132314206,
            "unit": "iter/sec",
            "range": "stddev: 4.995780464638434e-7",
            "extra": "mean: 6.8671172123504 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys27]",
            "value": 148384.28913308913,
            "unit": "iter/sec",
            "range": "stddev: 3.5403102268379864e-7",
            "extra": "mean: 6.7392579486840285 usec\nrounds: 54348"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys28]",
            "value": 146758.08998661887,
            "unit": "iter/sec",
            "range": "stddev: 5.049649581346612e-7",
            "extra": "mean: 6.813934414730922 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys29]",
            "value": 149296.04627414607,
            "unit": "iter/sec",
            "range": "stddev: 3.665019762580261e-7",
            "extra": "mean: 6.6981010211331515 usec\nrounds: 53761"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys30]",
            "value": 145596.26439219463,
            "unit": "iter/sec",
            "range": "stddev: 3.9609786826367066e-7",
            "extra": "mean: 6.8683080858880174 usec\nrounds: 56494"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys31]",
            "value": 146744.61407039044,
            "unit": "iter/sec",
            "range": "stddev: 7.928450832362387e-7",
            "extra": "mean: 6.81456015496637 usec\nrounds: 55249"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys32]",
            "value": 147420.6425897007,
            "unit": "iter/sec",
            "range": "stddev: 3.241294982850508e-7",
            "extra": "mean: 6.783310548870605 usec\nrounds: 35843"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys33]",
            "value": 144598.9704971983,
            "unit": "iter/sec",
            "range": "stddev: 5.335365435511341e-7",
            "extra": "mean: 6.9156785595467 usec\nrounds: 50759"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys34]",
            "value": 147827.64908153983,
            "unit": "iter/sec",
            "range": "stddev: 3.5141267868298624e-7",
            "extra": "mean: 6.764634398321609 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[truediv-keys35]",
            "value": 146511.66174173582,
            "unit": "iter/sec",
            "range": "stddev: 4.653323063418923e-7",
            "extra": "mean: 6.825395249169687 usec\nrounds: 54348"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys0]",
            "value": 469690.6170898614,
            "unit": "iter/sec",
            "range": "stddev: 1.3991291082365291e-7",
            "extra": "mean: 2.1290610534139742 usec\nrounds: 475"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys1]",
            "value": 34598.47730579682,
            "unit": "iter/sec",
            "range": "stddev: 9.249214278252056e-7",
            "extra": "mean: 28.903006082075596 usec\nrounds: 15949"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys2]",
            "value": 479494.43560911657,
            "unit": "iter/sec",
            "range": "stddev: 1.834112894096996e-7",
            "extra": "mean: 2.0855299368170335 usec\nrounds: 126583"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys3]",
            "value": 34566.35197813046,
            "unit": "iter/sec",
            "range": "stddev: 0.000001217905274089514",
            "extra": "mean: 28.929868000901077 usec\nrounds: 15038"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys4]",
            "value": 471787.89180320414,
            "unit": "iter/sec",
            "range": "stddev: 1.9397822778878008e-7",
            "extra": "mean: 2.119596575863646 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys5]",
            "value": 34302.12363649119,
            "unit": "iter/sec",
            "range": "stddev: 9.590262578503966e-7",
            "extra": "mean: 29.152714000954234 usec\nrounds: 14556"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys6]",
            "value": 35429.58210298277,
            "unit": "iter/sec",
            "range": "stddev: 8.217680342113591e-7",
            "extra": "mean: 28.225001274170022 usec\nrounds: 15699"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys7]",
            "value": 488737.64511233364,
            "unit": "iter/sec",
            "range": "stddev: 2.1657467497998668e-7",
            "extra": "mean: 2.0460875277372086 usec\nrounds: 119048"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys8]",
            "value": 35491.92455022661,
            "unit": "iter/sec",
            "range": "stddev: 8.231420259485822e-7",
            "extra": "mean: 28.175423358202064 usec\nrounds: 14881"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys9]",
            "value": 478040.81236745935,
            "unit": "iter/sec",
            "range": "stddev: 2.302646123328823e-7",
            "extra": "mean: 2.0918716020240593 usec\nrounds: 126583"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys10]",
            "value": 36018.63453677179,
            "unit": "iter/sec",
            "range": "stddev: 9.009903532032103e-7",
            "extra": "mean: 27.763406716017784 usec\nrounds: 14145"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys11]",
            "value": 480505.0091337539,
            "unit": "iter/sec",
            "range": "stddev: 1.8833414260135722e-7",
            "extra": "mean: 2.081143757070884 usec\nrounds: 119048"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys12]",
            "value": 485843.3114274573,
            "unit": "iter/sec",
            "range": "stddev: 2.0004327919580323e-7",
            "extra": "mean: 2.058276766354769 usec\nrounds: 117648"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys13]",
            "value": 34692.352354346986,
            "unit": "iter/sec",
            "range": "stddev: 9.210111677808983e-7",
            "extra": "mean: 28.82479659453531 usec\nrounds: 12920"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys14]",
            "value": 484432.4965446284,
            "unit": "iter/sec",
            "range": "stddev: 2.6510228330990986e-7",
            "extra": "mean: 2.0642710948023173 usec\nrounds: 126583"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys15]",
            "value": 34323.765277521554,
            "unit": "iter/sec",
            "range": "stddev: 9.958440884786756e-7",
            "extra": "mean: 29.13433278413935 usec\nrounds: 14556"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys16]",
            "value": 472390.8730692257,
            "unit": "iter/sec",
            "range": "stddev: 1.7800778404761733e-7",
            "extra": "mean: 2.116891026075046 usec\nrounds: 136987"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys17]",
            "value": 34383.570419430915,
            "unit": "iter/sec",
            "range": "stddev: 9.750539522004336e-7",
            "extra": "mean: 29.083657915725876 usec\nrounds: 12532"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys18]",
            "value": 35490.14883198968,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010705201900704176",
            "extra": "mean: 28.176833090613364 usec\nrounds: 15823"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys19]",
            "value": 475907.88943286723,
            "unit": "iter/sec",
            "range": "stddev: 2.5843435441156895e-7",
            "extra": "mean: 2.10124694757989 usec\nrounds: 84034"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys20]",
            "value": 35994.627135163726,
            "unit": "iter/sec",
            "range": "stddev: 9.215428073358744e-7",
            "extra": "mean: 27.781924125644963 usec\nrounds: 13351"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys21]",
            "value": 474336.3941018418,
            "unit": "iter/sec",
            "range": "stddev: 2.4665659105736794e-7",
            "extra": "mean: 2.108208462252838 usec\nrounds: 125001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys22]",
            "value": 35550.22946457003,
            "unit": "iter/sec",
            "range": "stddev: 8.573079317279249e-7",
            "extra": "mean: 28.129213652379295 usec\nrounds: 15338"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys23]",
            "value": 474072.5015221402,
            "unit": "iter/sec",
            "range": "stddev: 1.9799972409795632e-7",
            "extra": "mean: 2.1093819970346828 usec\nrounds: 119048"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys24]",
            "value": 479958.49100686266,
            "unit": "iter/sec",
            "range": "stddev: 2.000739417163504e-7",
            "extra": "mean: 2.0835135094749297 usec\nrounds: 128206"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys25]",
            "value": 34038.52257967802,
            "unit": "iter/sec",
            "range": "stddev: 0.000001093067401771251",
            "extra": "mean: 29.37847838898357 usec\nrounds: 13211"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys26]",
            "value": 483006.3216822059,
            "unit": "iter/sec",
            "range": "stddev: 2.1874808304989284e-7",
            "extra": "mean: 2.0703662770234925 usec\nrounds: 125001"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys27]",
            "value": 34757.428136953444,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010045326494421826",
            "extra": "mean: 28.770828384071912 usec\nrounds: 9597"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys28]",
            "value": 477067.3001597922,
            "unit": "iter/sec",
            "range": "stddev: 1.962179721114914e-7",
            "extra": "mean: 2.096140313253608 usec\nrounds: 128206"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys29]",
            "value": 34202.28369824514,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019169670047401045",
            "extra": "mean: 29.237813732634127 usec\nrounds: 12627"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys30]",
            "value": 35085.87615665262,
            "unit": "iter/sec",
            "range": "stddev: 9.78889000313573e-7",
            "extra": "mean: 28.501497170404573 usec\nrounds: 15198"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys31]",
            "value": 476688.06658003316,
            "unit": "iter/sec",
            "range": "stddev: 1.9357652340270774e-7",
            "extra": "mean: 2.097807916976889 usec\nrounds: 123457"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys32]",
            "value": 35842.83089486187,
            "unit": "iter/sec",
            "range": "stddev: 0.000001158620946123488",
            "extra": "mean: 27.89958200939289 usec\nrounds: 14663"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys33]",
            "value": 470825.9769417143,
            "unit": "iter/sec",
            "range": "stddev: 2.0007233377063506e-7",
            "extra": "mean: 2.123926989958319 usec\nrounds: 114943"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys34]",
            "value": 35196.17331365772,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010220902789363253",
            "extra": "mean: 28.412179673292908 usec\nrounds: 14493"
          },
          {
            "name": "benchmarks/benchmarks/test_20_quantity.py::test_op2[eq-keys35]",
            "value": 471765.80848215654,
            "unit": "iter/sec",
            "range": "stddev: 1.9206826365234986e-7",
            "extra": "mean: 2.119695794015608 usec\nrounds: 133334"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getattr",
            "value": 15565.770406261146,
            "unit": "iter/sec",
            "range": "stddev: 0.000002053288667480336",
            "extra": "mean: 64.24352755439344 usec\nrounds: 12920"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_finding_meter_getitem",
            "value": 14048.89058568328,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027020727776845913",
            "extra": "mean: 71.17999773014562 usec\nrounds: 10132"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter]",
            "value": 16735.918393054057,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016766642782042376",
            "extra": "mean: 59.75172539171989 usec\nrounds: 13532"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom]",
            "value": 13638.727575001076,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020766498173963597",
            "extra": "mean: 73.32062280010173 usec\nrounds: 10342"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[meter/second]",
            "value": 11676.818847549,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024400210925673183",
            "extra": "mean: 85.63976311150043 usec\nrounds: 7856"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_base_units[angstrom/minute]",
            "value": 9331.058923562909,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028106640288450064",
            "extra": "mean: 107.16897280273166 usec\nrounds: 7133"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[short_array]",
            "value": 12366.47918356474,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025569932049090546",
            "extra": "mean: 80.86375961631965 usec\nrounds: 8969"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_build_by_mul[mid_array]",
            "value": 11300.93327595702,
            "unit": "iter/sec",
            "range": "stddev: 0.000008677195444754214",
            "extra": "mean: 88.48826690513444 usec\nrounds: 10352"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_meter]",
            "value": 189445.36309574393,
            "unit": "iter/sec",
            "range": "stddev: 3.036130952801985e-7",
            "extra": "mean: 5.278566778615792 usec\nrounds: 47620"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-short_array_kilometer]",
            "value": 189271.11653935118,
            "unit": "iter/sec",
            "range": "stddev: 3.420600394921196e-7",
            "extra": "mean: 5.283426326658199 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_meter]",
            "value": 166408.55157561006,
            "unit": "iter/sec",
            "range": "stddev: 3.785586158114216e-7",
            "extra": "mean: 6.009306556253727 usec\nrounds: 71429"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[neg-mid_array_kilometer]",
            "value": 165593.32798419174,
            "unit": "iter/sec",
            "range": "stddev: 3.734632119318384e-7",
            "extra": "mean: 6.038890649600716 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_meter]",
            "value": 45552.800446445595,
            "unit": "iter/sec",
            "range": "stddev: 0.000018210686642471116",
            "extra": "mean: 21.952547158448702 usec\nrounds: 11737"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-short_array_kilometer]",
            "value": 45848.43280863833,
            "unit": "iter/sec",
            "range": "stddev: 9.328293976959637e-7",
            "extra": "mean: 21.81099633598794 usec\nrounds: 16921"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_meter]",
            "value": 40246.29299861847,
            "unit": "iter/sec",
            "range": "stddev: 0.000001044538917562164",
            "extra": "mean: 24.847008891833266 usec\nrounds: 17544"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[sqrt-mid_array_kilometer]",
            "value": 39813.61548004139,
            "unit": "iter/sec",
            "range": "stddev: 9.510718963003889e-7",
            "extra": "mean: 25.117035665884227 usec\nrounds: 16234"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_meter]",
            "value": 45845.75229109376,
            "unit": "iter/sec",
            "range": "stddev: 8.795586322665979e-7",
            "extra": "mean: 21.812271585175086 usec\nrounds: 18149"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-short_array_kilometer]",
            "value": 46339.68810298436,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010919760601989207",
            "extra": "mean: 21.579774075682614 usec\nrounds: 19418"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_meter]",
            "value": 42760.066446575715,
            "unit": "iter/sec",
            "range": "stddev: 0.00000102013523094209",
            "extra": "mean: 23.386306035080572 usec\nrounds: 16155"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op1[square-mid_array_kilometer]",
            "value": 42941.82260643943,
            "unit": "iter/sec",
            "range": "stddev: 9.76488347828919e-7",
            "extra": "mean: 23.287320828577105 usec\nrounds: 16367"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys0]",
            "value": 8211.43020554735,
            "unit": "iter/sec",
            "range": "stddev: 0.000004445313240465837",
            "extra": "mean: 121.78146497846812 usec\nrounds: 1699"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys1]",
            "value": 6145.5582624600465,
            "unit": "iter/sec",
            "range": "stddev: 0.000005311811966049091",
            "extra": "mean: 162.7191472755973 usec\nrounds: 2166"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys2]",
            "value": 5871.604955992798,
            "unit": "iter/sec",
            "range": "stddev: 0.000005053633013879805",
            "extra": "mean: 170.31118535646024 usec\nrounds: 2158"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys3]",
            "value": 7724.758843984445,
            "unit": "iter/sec",
            "range": "stddev: 0.000003746061509729264",
            "extra": "mean: 129.45387942805968 usec\nrounds: 2936"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys4]",
            "value": 167.97088936208962,
            "unit": "iter/sec",
            "range": "stddev: 0.013400349044177435",
            "extra": "mean: 5.953412545457987 msec\nrounds: 77"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys5]",
            "value": 182.46645769159753,
            "unit": "iter/sec",
            "range": "stddev: 0.010903424847253311",
            "extra": "mean: 5.480459327435332 msec\nrounds: 113"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys6]",
            "value": 153.43900681385674,
            "unit": "iter/sec",
            "range": "stddev: 0.015257112018323011",
            "extra": "mean: 6.517247607142958 msec\nrounds: 112"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add0-keys7]",
            "value": 184.8039948242627,
            "unit": "iter/sec",
            "range": "stddev: 0.010800993516552237",
            "extra": "mean: 5.411138438597817 msec\nrounds: 114"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys0]",
            "value": 8306.923543578356,
            "unit": "iter/sec",
            "range": "stddev: 0.000004838572460021769",
            "extra": "mean: 120.38151004447937 usec\nrounds: 2937"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys1]",
            "value": 6165.475351354589,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045156222512922145",
            "extra": "mean: 162.19349571810298 usec\nrounds: 2219"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys2]",
            "value": 5854.85522144769,
            "unit": "iter/sec",
            "range": "stddev: 0.000004198553038005142",
            "extra": "mean: 170.79841638726924 usec\nrounds: 2380"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys3]",
            "value": 7673.429646457257,
            "unit": "iter/sec",
            "range": "stddev: 0.000005000315917185553",
            "extra": "mean: 130.31982386932935 usec\nrounds: 2941"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys4]",
            "value": 183.93047187873037,
            "unit": "iter/sec",
            "range": "stddev: 0.011150273615406126",
            "extra": "mean: 5.436837027522678 msec\nrounds: 109"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys5]",
            "value": 183.79498511643914,
            "unit": "iter/sec",
            "range": "stddev: 0.010812121426212358",
            "extra": "mean: 5.44084485964877 msec\nrounds: 114"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys6]",
            "value": 182.60303699552173,
            "unit": "iter/sec",
            "range": "stddev: 0.010961986864205407",
            "extra": "mean: 5.476360176991606 msec\nrounds: 113"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[sub-keys7]",
            "value": 226.47260983652015,
            "unit": "iter/sec",
            "range": "stddev: 0.00008785136538846991",
            "extra": "mean: 4.415544999997362 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys0]",
            "value": 97229.45917500164,
            "unit": "iter/sec",
            "range": "stddev: 5.076946534399545e-7",
            "extra": "mean: 10.284948702636688 usec\nrounds: 38462"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys1]",
            "value": 96899.69413898564,
            "unit": "iter/sec",
            "range": "stddev: 5.487128025552202e-7",
            "extra": "mean: 10.319950015174198 usec\nrounds: 42373"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys2]",
            "value": 98606.40748816785,
            "unit": "iter/sec",
            "range": "stddev: 4.989140018065141e-7",
            "extra": "mean: 10.141328798739512 usec\nrounds: 40651"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys3]",
            "value": 97837.93141047018,
            "unit": "iter/sec",
            "range": "stddev: 6.78922401082849e-7",
            "extra": "mean: 10.22098469973359 usec\nrounds: 44248"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys4]",
            "value": 84082.8566230793,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017751872414164348",
            "extra": "mean: 11.893030757538718 usec\nrounds: 41323"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys5]",
            "value": 80472.83412221959,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019898731638259795",
            "extra": "mean: 12.42655376696727 usec\nrounds: 40815"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys6]",
            "value": 80494.89464629439,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019356883993277966",
            "extra": "mean: 12.42314813124655 usec\nrounds: 39681"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[mul-keys7]",
            "value": 81750.56700262795,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019706331718077145",
            "extra": "mean: 12.23233106099257 usec\nrounds: 40485"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys0]",
            "value": 81491.44640210578,
            "unit": "iter/sec",
            "range": "stddev: 7.028956458018687e-7",
            "extra": "mean: 12.271226541564484 usec\nrounds: 21506"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys1]",
            "value": 82078.0347976477,
            "unit": "iter/sec",
            "range": "stddev: 5.636037003102334e-7",
            "extra": "mean: 12.18352757184507 usec\nrounds: 30212"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys2]",
            "value": 80963.22812988398,
            "unit": "iter/sec",
            "range": "stddev: 5.777342906001299e-7",
            "extra": "mean: 12.351286171492147 usec\nrounds: 33113"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys3]",
            "value": 81968.4488208708,
            "unit": "iter/sec",
            "range": "stddev: 6.285002792925669e-7",
            "extra": "mean: 12.199816080274292 usec\nrounds: 29154"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys4]",
            "value": 71815.16606177455,
            "unit": "iter/sec",
            "range": "stddev: 7.088917631303594e-7",
            "extra": "mean: 13.924635349862061 usec\nrounds: 27174"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys5]",
            "value": 71644.75634335562,
            "unit": "iter/sec",
            "range": "stddev: 8.14174623618716e-7",
            "extra": "mean: 13.957755613090876 usec\nrounds: 30865"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys6]",
            "value": 72226.9785504795,
            "unit": "iter/sec",
            "range": "stddev: 9.197912634886957e-7",
            "extra": "mean: 13.845242042086797 usec\nrounds: 31949"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[truediv-keys7]",
            "value": 71796.25594110087,
            "unit": "iter/sec",
            "range": "stddev: 7.120743028136363e-7",
            "extra": "mean: 13.928302902317983 usec\nrounds: 25840"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys0]",
            "value": 76194.45673046785,
            "unit": "iter/sec",
            "range": "stddev: 7.879345120065283e-7",
            "extra": "mean: 13.124314325613275 usec\nrounds: 11574"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys1]",
            "value": 18640.364513855984,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020384552965717456",
            "extra": "mean: 53.64701957714763 usec\nrounds: 6998"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys2]",
            "value": 19049.916450649245,
            "unit": "iter/sec",
            "range": "stddev: 0.000001796569182840227",
            "extra": "mean: 52.49366854655778 usec\nrounds: 7446"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys3]",
            "value": 76073.9032601761,
            "unit": "iter/sec",
            "range": "stddev: 6.318126485176819e-7",
            "extra": "mean: 13.145112280882396 usec\nrounds: 19380"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys4]",
            "value": 69929.03207565394,
            "unit": "iter/sec",
            "range": "stddev: 8.026005375724838e-7",
            "extra": "mean: 14.300212233999357 usec\nrounds: 19012"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys5]",
            "value": 16354.266953054068,
            "unit": "iter/sec",
            "range": "stddev: 0.000006091010374051086",
            "extra": "mean: 61.14612185740649 usec\nrounds: 6762"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys6]",
            "value": 16802.470652749133,
            "unit": "iter/sec",
            "range": "stddev: 0.000005951535912476527",
            "extra": "mean: 59.51505708098857 usec\nrounds: 8742"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[eq-keys7]",
            "value": 69431.20626450627,
            "unit": "iter/sec",
            "range": "stddev: 8.147925970780816e-7",
            "extra": "mean: 14.402745592383683 usec\nrounds: 22574"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys0]",
            "value": 405208.1485899076,
            "unit": "iter/sec",
            "range": "stddev: 2.6902845246451103e-7",
            "extra": "mean: 2.467867449062713 usec\nrounds: 25907"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys1]",
            "value": 16628.769844843056,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016438214109484296",
            "extra": "mean: 60.136739478063184 usec\nrounds: 1877"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys2]",
            "value": 16654.65555483103,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019144628749498003",
            "extra": "mean: 60.04327118671206 usec\nrounds: 2065"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys3]",
            "value": 412966.26948402217,
            "unit": "iter/sec",
            "range": "stddev: 2.463899890921924e-7",
            "extra": "mean: 2.4215052751147037 usec\nrounds: 104167"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys4]",
            "value": 366471.3737031385,
            "unit": "iter/sec",
            "range": "stddev: 2.949476416485764e-7",
            "extra": "mean: 2.728726093651325 usec\nrounds: 99001"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys5]",
            "value": 14612.85998881275,
            "unit": "iter/sec",
            "range": "stddev: 0.000006653056336134065",
            "extra": "mean: 68.4328735624358 usec\nrounds: 87"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys6]",
            "value": 15284.104596781446,
            "unit": "iter/sec",
            "range": "stddev: 0.000005974688215017069",
            "extra": "mean: 65.42745070002869 usec\nrounds: 71"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[lt-keys7]",
            "value": 359867.36647853797,
            "unit": "iter/sec",
            "range": "stddev: 2.506430858603591e-7",
            "extra": "mean: 2.778801561768282 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys0]",
            "value": 44159.018324606404,
            "unit": "iter/sec",
            "range": "stddev: 0.000008123914294773886",
            "extra": "mean: 22.645430943440545 usec\nrounds: 13851"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys1]",
            "value": 20228.481577907336,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015250744087823045",
            "extra": "mean: 49.43524782859413 usec\nrounds: 9672"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys2]",
            "value": 19907.72627240165,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015612142556209579",
            "extra": "mean: 50.23175355722634 usec\nrounds: 10331"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys3]",
            "value": 45077.376417863205,
            "unit": "iter/sec",
            "range": "stddev: 8.552124200460564e-7",
            "extra": "mean: 22.184077234888086 usec\nrounds: 17272"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys4]",
            "value": 39390.67917795924,
            "unit": "iter/sec",
            "range": "stddev: 0.000003075141068956074",
            "extra": "mean: 25.386716372220935 usec\nrounds: 13352"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys5]",
            "value": 17822.65524728984,
            "unit": "iter/sec",
            "range": "stddev: 0.000005907216395213382",
            "extra": "mean: 56.10836242551809 usec\nrounds: 7058"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys6]",
            "value": 17765.844037670984,
            "unit": "iter/sec",
            "range": "stddev: 0.000005512342031905959",
            "extra": "mean: 56.287784463242154 usec\nrounds: 9075"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[add1-keys7]",
            "value": 37943.4263343982,
            "unit": "iter/sec",
            "range": "stddev: 0.000003425033450117968",
            "extra": "mean: 26.355026327536333 usec\nrounds: 16751"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys0]",
            "value": 45718.32801871846,
            "unit": "iter/sec",
            "range": "stddev: 9.651066522704435e-7",
            "extra": "mean: 21.873065865194587 usec\nrounds: 17794"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys1]",
            "value": 20261.45160962996,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015223224353006842",
            "extra": "mean: 49.35480533510814 usec\nrounds: 9709"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys2]",
            "value": 19953.36830602296,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017888014956288675",
            "extra": "mean: 50.11685168454231 usec\nrounds: 7956"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys3]",
            "value": 45431.88032570386,
            "unit": "iter/sec",
            "range": "stddev: 8.329235096851006e-7",
            "extra": "mean: 22.010975395051677 usec\nrounds: 21053"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys4]",
            "value": 38398.153453286715,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032052333857694122",
            "extra": "mean: 26.04291899652285 usec\nrounds: 15061"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys5]",
            "value": 18416.855462279786,
            "unit": "iter/sec",
            "range": "stddev: 0.000005298602210216257",
            "extra": "mean: 54.29808590549757 usec\nrounds: 7776"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys6]",
            "value": 17707.16695130781,
            "unit": "iter/sec",
            "range": "stddev: 0.000005684942218061633",
            "extra": "mean: 56.47430798782537 usec\nrounds: 10153"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[subtract-keys7]",
            "value": 38580.35052336555,
            "unit": "iter/sec",
            "range": "stddev: 0.00000318017657205475",
            "extra": "mean: 25.919930390325682 usec\nrounds: 17986"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys0]",
            "value": 37940.90319732015,
            "unit": "iter/sec",
            "range": "stddev: 0.000001036341978461171",
            "extra": "mean: 26.356778983338284 usec\nrounds: 14750"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys1]",
            "value": 37425.05554990524,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010270282900555507",
            "extra": "mean: 26.720067219847635 usec\nrounds: 16260"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys2]",
            "value": 37510.090507115485,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010562180044136816",
            "extra": "mean: 26.659493125197997 usec\nrounds: 16000"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys3]",
            "value": 38011.06942889328,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011554123417219895",
            "extra": "mean: 26.308125896607162 usec\nrounds: 15338"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys4]",
            "value": 32592.41040398622,
            "unit": "iter/sec",
            "range": "stddev: 0.000004000918159861658",
            "extra": "mean: 30.681989690388004 usec\nrounds: 13774"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys5]",
            "value": 33797.54536273323,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029424000026778527",
            "extra": "mean: 29.58794756445973 usec\nrounds: 15848"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys6]",
            "value": 34063.68422543046,
            "unit": "iter/sec",
            "range": "stddev: 0.000002655718558347927",
            "extra": "mean: 29.356777540036134 usec\nrounds: 11683"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[multiply-keys7]",
            "value": 33725.08953824946,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033370296847014874",
            "extra": "mean: 29.651515049822052 usec\nrounds: 15748"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys0]",
            "value": 37695.21501432294,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010815912731114782",
            "extra": "mean: 26.528566016138466 usec\nrounds: 12300"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys1]",
            "value": 37499.48115487158,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010280721255398346",
            "extra": "mean: 26.667035628307335 usec\nrounds: 17065"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys2]",
            "value": 37701.10195544326,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010736146304038212",
            "extra": "mean: 26.524423641034204 usec\nrounds: 17182"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys3]",
            "value": 37779.81966949616,
            "unit": "iter/sec",
            "range": "stddev: 0.000001044327994162654",
            "extra": "mean: 26.469157575344678 usec\nrounds: 14006"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys4]",
            "value": 33871.2745517008,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011297733127682938",
            "extra": "mean: 29.52354209386509 usec\nrounds: 12579"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys5]",
            "value": 34125.26942495737,
            "unit": "iter/sec",
            "range": "stddev: 0.000001140526313939665",
            "extra": "mean: 29.303797943604053 usec\nrounds: 15268"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys6]",
            "value": 34345.92382736822,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012088820303530118",
            "extra": "mean: 29.11553653429929 usec\nrounds: 15848"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[divide-keys7]",
            "value": 33971.979151644504,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013549758499725322",
            "extra": "mean: 29.43602418735125 usec\nrounds: 16000"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys0]",
            "value": 67986.82255151978,
            "unit": "iter/sec",
            "range": "stddev: 6.567712795354182e-7",
            "extra": "mean: 14.708732699519958 usec\nrounds: 22832"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys1]",
            "value": 25147.731421204382,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012424536817169003",
            "extra": "mean: 39.765018293332304 usec\nrounds: 10605"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys2]",
            "value": 24226.65208883236,
            "unit": "iter/sec",
            "range": "stddev: 0.000001572795071890122",
            "extra": "mean: 41.276854776849866 usec\nrounds: 11534"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys3]",
            "value": 67239.08145488413,
            "unit": "iter/sec",
            "range": "stddev: 6.128092893796212e-7",
            "extra": "mean: 14.872303106504763 usec\nrounds: 24272"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys4]",
            "value": 64666.28142149845,
            "unit": "iter/sec",
            "range": "stddev: 6.782287348040304e-7",
            "extra": "mean: 15.46400965105669 usec\nrounds: 24039"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys5]",
            "value": 22263.319588430404,
            "unit": "iter/sec",
            "range": "stddev: 0.000004746970040477812",
            "extra": "mean: 44.91693145884995 usec\nrounds: 9921"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys6]",
            "value": 21623.28224726758,
            "unit": "iter/sec",
            "range": "stddev: 0.0000050137008522559565",
            "extra": "mean: 46.2464480907548 usec\nrounds: 9690"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[equal-keys7]",
            "value": 65493.56979730939,
            "unit": "iter/sec",
            "range": "stddev: 6.642950931053382e-7",
            "extra": "mean: 15.268674514075457 usec\nrounds: 17331"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys0]",
            "value": 67296.12308022067,
            "unit": "iter/sec",
            "range": "stddev: 7.245890473279851e-7",
            "extra": "mean: 14.859697026052231 usec\nrounds: 24814"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys1]",
            "value": 24954.70680349542,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012957920524153065",
            "extra": "mean: 40.072600647022206 usec\nrounds: 10194"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys2]",
            "value": 24561.91411866606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014360018664450558",
            "extra": "mean: 40.71343931782745 usec\nrounds: 9970"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys3]",
            "value": 66969.52500488475,
            "unit": "iter/sec",
            "range": "stddev: 8.093200902370165e-7",
            "extra": "mean: 14.932165039651395 usec\nrounds: 23867"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys4]",
            "value": 64740.60818170603,
            "unit": "iter/sec",
            "range": "stddev: 6.423485381570716e-7",
            "extra": "mean: 15.446255883066808 usec\nrounds: 23585"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys5]",
            "value": 22323.6625816099,
            "unit": "iter/sec",
            "range": "stddev: 0.000004841048182477371",
            "extra": "mean: 44.795516700910625 usec\nrounds: 10718"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys6]",
            "value": 21233.140642101545,
            "unit": "iter/sec",
            "range": "stddev: 0.000005027275055184292",
            "extra": "mean: 47.09618877657588 usec\nrounds: 9355"
          },
          {
            "name": "benchmarks/benchmarks/test_30_numpy.py::test_op2[less-keys7]",
            "value": 64069.02773050841,
            "unit": "iter/sec",
            "range": "stddev: 6.250708624638365e-7",
            "extra": "mean: 15.608165683522925 usec\nrounds: 24752"
          }
        ]
      }
    ]
  }
}