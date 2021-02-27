using System;
using System.Data;
using System.Linq;

namespace WebCalculator
{
    public static class Calculator
    {
        public static string Calculate(string expression, bool isOperationPerformed, bool isequaloperation)
        {
            string res = string.Empty;
            try
            {
                var exp = expression.Replace(" ", string.Empty);
                if (exp.EndsWith("/0"))
                {
                    res = "Cannot divide by zero";
                }
                var iscompletedexpression = IsCompletedexpression(exp);
                if ((isOperationPerformed && iscompletedexpression) || isequaloperation)
                {
                    DataTable dt = new DataTable();
                    bool isDigit = Char.IsDigit((expression).Last());
                    if (!isDigit)
                    {
                        var lastchar = expression.Last();
                        expression = expression.Remove(expression.Length - 1);
                        res = Math.Round(Convert.ToDecimal(dt.Compute(expression, "")), 10).ToString() + lastchar;
                    }
                    else
                    {
                        res = Math.Round(Convert.ToDecimal(dt.Compute(expression, "")), 10).ToString();
                    }
                }
                else
                {
                    res = exp;
                }
            }
            catch (Exception ex) { }

            return res;
        }
        private static bool IsCompletedexpression(string str)
        {
            return str.Count(x => x == '+' || x == '-' || x == '*' || x == '/') > 1;
        }
    }
}

