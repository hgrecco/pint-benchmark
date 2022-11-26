import pathlib

import pint
import pytest

from . import util

units = ("meter", "kilometer", "second", "minute", "angstrom")

other_units = ("meter", "angstrom", "kilometer/second", "angstrom/minute")

all_values = ("int", "float", "complex")

def basic_setup():
    data = {}
    data["int"] = 1
    data["float"] = 1.0
    data["complex"] = complex(1, 2)

    return pint.UnitRegistry(util.get_tiny_def()), data


def longer_setup():
    ureg, data = basic_setup()
    for unit in units + other_units:
        data["uc_%s" % unit] = pint.util.to_units_container(unit, ureg)
    return ureg, data


def test_build_cache(benchmark):
    try:
        ureg, data = basic_setup()
        benchmark(ureg._build_cache)
    except Exception as ex:
        benchmark.extra_info['exception'] = str(ex)

@pytest.mark.parametrize("key", units)
def test_getattr(benchmark, key):
    try:
        ureg, data = basic_setup()
        benchmark(getattr, ureg, key)
    except Exception as ex:
        benchmark.extra_info['exception'] = str(ex)

@pytest.mark.parametrize("key", units)
def test_getitem(benchmark, key):
    try:
        ureg, data = basic_setup()
        benchmark(ureg.__getitem__, key)
    except Exception as ex:
        benchmark.extra_info['exception'] = str(ex)

@pytest.mark.parametrize("key", units)
def test_parse_unit_name(benchmark, key):
    try:
        ureg, data = basic_setup()
        benchmark(ureg.parse_unit_name, key)
    except Exception as ex:
        benchmark.extra_info['exception'] = str(ex)

@pytest.mark.parametrize("key", units)
def test_parse_units(benchmark, key):
    try:
        ureg, data = basic_setup()
        benchmark(ureg.parse_units, key)
    except Exception as ex:
        benchmark.extra_info['exception'] = str(ex)

@pytest.mark.parametrize("key", units)
def test_parse_expression(benchmark, key):
    try:
        ureg, data = basic_setup()
        benchmark(ureg.parse_expression, "1.0 " + key)
    except Exception as ex:
        benchmark.extra_info['exception'] = str(ex)

@pytest.mark.parametrize("unit", other_units)
def test_base_units(benchmark, unit):
    try:
        ureg, data = basic_setup()
        benchmark(ureg.get_base_units, unit)
    except Exception as ex:
        benchmark.extra_info['exception'] = str(ex)

@pytest.mark.parametrize("unit", other_units)
def test_to_units_container_registry(benchmark, unit):
    try:
        ureg, data = basic_setup()
        benchmark(pint.util.to_units_container, unit, ureg)
    except Exception as ex:
        benchmark.extra_info['exception'] = str(ex)

@pytest.mark.parametrize("unit", other_units)
def test_to_units_container_detached(benchmark, unit):
    try:
        benchmark(pint.util.to_units_container, unit)
    except Exception as ex:
        benchmark.extra_info['exception'] = str(ex)

@pytest.mark.parametrize("key",
    (("uc_meter", "uc_kilometer"), ("uc_kilometer/second", "uc_angstrom/minute"))
)
def test_convert_from_uc(benchmark, key):
    try:
        ureg, data = longer_setup()
        src, dst = key
        benchmark(ureg._convert, 1.0, data[src], data[dst])
    except Exception as ex:
        benchmark.extra_info['exception'] = str(ex)

def test_parse_math_expression(benchmark):
    try:
        ureg, data = basic_setup()
        benchmark(ureg.parse_expression, "3 + 5 * 2 + value", value=10)
    except Exception as ex:
        benchmark.extra_info['exception'] = str(ex)