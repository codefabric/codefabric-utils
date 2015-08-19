using System;
using Xunit;
using codefabric.utils.extensions;

namespace codefabric.utils.tests.extensions
{
    public class StringExtensionsTests
    {
        #region WithFormat
        [Fact]
        public void WithFormat_ThrowsWhenStringIsNull()
        {
            string testString = null;
            Assert.Throws<ArgumentNullException>(() => testString.WithFormat());
        }
        
        [Fact]
        public void WithFormat_ActuallyFormatsString() 
        {
            var testFormat = "Expect the word 'Hello': {0}";
            var result = testFormat.WithFormat("Hello");
            
            Assert.Equal("Expect the word 'Hello': Hello", result);   
        }
        #endregion
        
        #region ExpandEnvVars
        [Fact]
        public void ExpandEnvVars_ThrowsWhenStringIsNull()
        {
            string testString = null;
            Assert.Throws<ArgumentNullException>(() => testString.ExpandEnvVars());
        }
        #endregion
    }
}
