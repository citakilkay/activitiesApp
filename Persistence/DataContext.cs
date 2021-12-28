﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using Domain;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public int MyProperty { get; set; }
        public DataContext([NotNullAttribute] DbContextOptions options) : base(options) 
        {

        }
        public DbSet<Activity> Activities  { get; set; }
    }
}
