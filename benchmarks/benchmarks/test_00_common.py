import subprocess
import sys



def test_import(benchmark):
    # on py37+ the "-X importtime" usage gives us a more precise
    #  measurement of the import time we actually care about,
    #  without the subprocess or interpreter overhead
    cmd = [sys.executable, "-X", "importtime", "-c", "import pint"]

    try:
        p = benchmark(subprocess.run, cmd, stderr=subprocess.PIPE)
        line = p.stderr.splitlines()[-1]
        field = line.split(b"|")[-2].strip()
        total = int(field)  # microseconds
        return total
    except Exception as ex:
        benchmark.extra_info['exception'] = str(ex)
