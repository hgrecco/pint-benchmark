import pytest

import itertools as it
import operator

import numpy as np

import pint

from . import util

lengths = ("short", "mid")
all_values = tuple(
    "%s_%s" % (a, b) for a, b in it.product(lengths, ("list", "tuple", "array"))
)
all_arrays = ("short_array", "mid_array")
units = ("meter", "kilometer")
all_arrays_q = tuple("%s_%s" % (a, b) for a, b in it.product(all_arrays, units))

op1 = (operator.neg,)  # operator.truth,
op2_cmp = (operator.eq, operator.lt)
op2_math = (operator.add, operator.sub, operator.mul, operator.truediv)
numpy_op2_cmp = (np.equal, np.less)
numpy_op2_math = (np.add, np.subtract, np.multiply, np.true_divide)


def float_range(n):
    return (float(x) for x in range(1, n + 1))


def basic_setup():

    data = {}
    short = list(float_range(3))
    mid = list(float_range(1_000))

    data["short_list"] = short
    data["short_tuple"] = tuple(short)
    data["short_array"] = np.asarray(short)
    data["mid_list"] = mid
    data["mid_tuple"] = tuple(mid)
    data["mid_array"] = np.asarray(mid)

    ureg = pint.UnitRegistry(util.get_tiny_def())

    for key in all_arrays:
        data[key + "_meter"] = data[key] * ureg.meter
        data[key + "_kilometer"] = data[key] * ureg.kilometer

    return ureg, data


def test_finding_meter_getattr(benchmark):
    try:
        ureg, data = basic_setup()
        benchmark(getattr, ureg, "meter")
    except Exception as ex:
        benchmark.extra_info['exception'] = str(ex)

def test_finding_meter_getitem(benchmark):
    try:
        ureg, data = basic_setup()
        benchmark(ureg.__getitem__, "meter")
    except Exception as ex:
        benchmark.extra_info['exception'] = str(ex)

@pytest.mark.parametrize("unit", ["meter", "angstrom", "meter/second", "angstrom/minute"])
def test_base_units(benchmark, unit):
    try:
        ureg, data = basic_setup()
        benchmark(ureg.get_base_units, unit)
    except Exception as ex:
        benchmark.extra_info['exception'] = str(ex)

@pytest.mark.parametrize("key", all_arrays)
def test_build_by_mul(benchmark, key):
    try:
        ureg, data = basic_setup()
        benchmark(lambda value: value * ureg.meter, data[key])
    except Exception as ex:
        benchmark.extra_info['exception'] = str(ex)

@pytest.mark.parametrize("key", all_arrays_q)
@pytest.mark.parametrize("op", op1 + (np.sqrt, np.square))
def test_op1(benchmark, key, op):
    try:
        ureg, data = basic_setup()
        benchmark(op, data[key])
    except Exception as ex:
        benchmark.extra_info['exception'] = str(ex)

@pytest.mark.parametrize("keys", (
        ("short_array_meter", "short_array_meter"),
        ("short_array_meter", "short_array_kilometer"),
        ("short_array_kilometer", "short_array_meter"),
        ("short_array_kilometer", "short_array_kilometer"),
        ("mid_array_meter", "mid_array_meter"),
        ("mid_array_meter", "mid_array_kilometer"),
        ("mid_array_kilometer", "mid_array_meter"),
        ("mid_array_kilometer", "mid_array_kilometer"),
    ))
@pytest.mark.parametrize("op", op2_math + op2_cmp + numpy_op2_math + numpy_op2_cmp,)
def test_op2(benchmark, keys, op):
    try:
        ureg, data = basic_setup()
        key1, key2 = keys
        benchmark(op, data[key1], data[key2])
    except Exception as ex:
        benchmark.extra_info['exception'] = str(ex)
