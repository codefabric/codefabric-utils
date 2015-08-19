using System;

namespace codefabric.utils.extensions 
{	
	public static class StringExtensions 
	{
		public static string WithFormat(this string stringFormat, params object[] args) 
		{
			return string.Format(stringFormat, args);
		}
		
		public static string ExpandEnvVars(this string str) 
		{
			return Environment.ExpandEnvironmentVariables(str);
		}
	}
}